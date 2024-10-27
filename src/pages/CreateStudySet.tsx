import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, X, Save, Book, AlertCircle, Wand2 } from 'lucide-react';

interface Card {
  id: number;
  front: string;
  back: string;
}

export default function CreateStudySet() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [cards, setCards] = useState<Card[]>([
    { id: 1, front: '', back: '' },
    { id: 2, front: '', back: '' }
  ]);

  const handleGenerateCards = async () => {
    if (!notes.trim()) return;

    setIsGenerating(true);
    // Simulated AI generation - replace with actual API call
    try {
      // Mock AI response
      const generatedCards = [
        { id: 1, front: 'What is photosynthesis?', back: 'The process by which plants convert light energy into chemical energy' },
        { id: 2, front: 'Define cellular respiration', back: 'The process cells use to break down nutrients and create energy' },
      ];
      setCards(generatedCards);
    } catch (error) {
      console.error('Failed to generate cards:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddCard = () => {
    const newId = cards.length > 0 ? Math.max(...cards.map(c => c.id)) + 1 : 1;
    setCards([...cards, { id: newId, front: '', back: '' }]);
  };

  const handleRemoveCard = (id: number) => {
    if (cards.length > 2) {
      setCards(cards.filter(card => card.id !== id));
    }
  };

  const handleCardChange = (id: number, field: 'front' | 'back', value: string) => {
    setCards(cards.map(card => 
      card.id === id ? { ...card, [field]: value } : card
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const isValid = title.trim() && cards.every(card => card.front.trim() && card.back.trim());

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Book className="h-6 w-6 text-indigo-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Create New Study Set</h1>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white ${
                isValid 
                  ? 'bg-indigo-600 hover:bg-indigo-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              <Save className="h-4 w-4 mr-2" />
              Save Set
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a title for your study set"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a description to help you remember what this set is for"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="bg-indigo-50 rounded-lg p-6">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Paste Your Notes
              </label>
              <div className="mt-1">
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Paste your study notes here, and our AI will generate flashcards automatically..."
                  rows={8}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="mt-4">
                <button
                  onClick={handleGenerateCards}
                  disabled={!notes.trim() || isGenerating}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white ${
                    notes.trim() && !isGenerating
                      ? 'bg-indigo-600 hover:bg-indigo-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Wand2 className="h-4 w-4 mr-2" />
                  {isGenerating ? 'Generating...' : 'Generate Flashcards'}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Flashcards</h2>
              <span className="text-sm text-gray-500">{cards.length} cards</span>
            </div>

            {cards.map((card, index) => (
              <div
                key={card.id}
                className="bg-gray-50 rounded-lg p-4 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Card {index + 1}</span>
                  {cards.length > 2 && (
                    <button
                      onClick={() => handleRemoveCard(card.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Front</label>
                    <textarea
                      value={card.front}
                      onChange={(e) => handleCardChange(card.id, 'front', e.target.value)}
                      placeholder="Enter term"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Back</label>
                    <textarea
                      value={card.back}
                      onChange={(e) => handleCardChange(card.id, 'back', e.target.value)}
                      placeholder="Enter definition"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={handleAddCard}
              className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-indigo-500 hover:text-indigo-500 flex items-center justify-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Card
            </button>
          </div>

          {!isValid && (
            <div className="flex items-center text-yellow-600 text-sm">
              <AlertCircle className="h-4 w-4 mr-2" />
              Please fill in all card fields and provide a title before saving.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}