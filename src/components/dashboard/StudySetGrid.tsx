import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Star } from 'lucide-react';

const studySets = [
  {
    id: 1,
    title: 'Biology 101',
    cards: 42,
    mastered: 28,
    lastStudied: '2 days ago',
    favorite: true
  },
  {
    id: 2,
    title: 'World History',
    cards: 65,
    mastered: 45,
    lastStudied: '1 day ago',
    favorite: false
  },
  {
    id: 3,
    title: 'Spanish Vocabulary',
    cards: 120,
    mastered: 89,
    lastStudied: '3 hours ago',
    favorite: true
  }
];

export default function StudySetGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {studySets.map((set) => (
        <Link
          key={set.id}
          to={`/study-set/${set.id}`}
          className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <Book className="h-5 w-5 text-indigo-600 mr-3" />
              <h3 className="text-lg font-medium text-gray-900">{set.title}</h3>
            </div>
            {set.favorite && (
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            )}
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-500">
              <span>{set.cards} cards</span>
              <span>{set.mastered} mastered</span>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-indigo-600 rounded-full"
                style={{ width: `${(set.mastered / set.cards) * 100}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Last studied {set.lastStudied}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}