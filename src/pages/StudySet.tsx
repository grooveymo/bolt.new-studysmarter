import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book, Star, ArrowLeft, ArrowRight } from 'lucide-react';

interface Card {
  id: number;
  front: string;
  back: string;
}

export default function StudySet() {
  const { id } = useParams();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Mock data - in a real app, this would come from your backend
  const studySet = {
    title: 'Biology 101',
    description: 'Essential concepts in biology',
    totalCards: 42,
    mastered: 28,
    cards: [
      { id: 1, front: 'What is photosynthesis?', back: 'The process by which plants convert light energy into chemical energy' },
      { id: 2, front: 'What is cellular respiration?', back: 'The process cells use to break down nutrients and create energy' },
      { id: 3, front: 'What is mitosis?', back: 'Cell division resulting in two identical daughter cells' },
    ] as Card[],
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % studySet.cards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + studySet.cards.length) % studySet.cards.length);
  };

  const currentCard = studySet.cards[currentCardIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Book className="h-6 w-6 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">{studySet.title}</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Star className="h-6 w-6 text-gray-400 hover:text-yellow-400" />
          </button>
        </div>
        <p className="mt-2 text-gray-600">{studySet.description}</p>
      </div>

      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-indigo-600 rounded-full"
            style={{ width: `${(studySet.mastered / studySet.totalCards) * 100}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>{studySet.mastered} mastered</span>
          <span>{studySet.totalCards} total cards</span>
        </div>
      </div>

      <div className="relative">
        <div
          className="bg-white rounded-xl shadow-lg p-8 cursor-pointer min-h-[300px] transition-transform duration-500"
          style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="absolute inset-0 backface-hidden p-8 flex items-center justify-center text-center">
            <p className="text-xl">{isFlipped ? currentCard.back : currentCard.front}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous
          </button>
          <span className="text-gray-600">
            {currentCardIndex + 1} / {studySet.cards.length}
          </span>
          <button
            onClick={handleNext}
            className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600"
          >
            Next
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}