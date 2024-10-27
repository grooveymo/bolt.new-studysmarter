import React from 'react';
import { BookOpen, Brain, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Smart Content Generation',
    description: 'Our AI analyzes your notes and creates targeted study materials automatically.'
  },
  {
    icon: Brain,
    title: 'Active Recall',
    description: 'Enhance learning through interactive quizzes and flashcards that promote better retention.'
  },
  {
    icon: Trophy,
    title: 'Track Progress',
    description: 'Monitor your learning journey with detailed performance analytics and insights.'
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Share study sets and learn together with friends or study groups.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose StudySmarter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience a smarter way to study with our innovative features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}