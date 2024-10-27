import React from 'react';
import { Brain, Clock, Trophy, Target } from 'lucide-react';

const stats = [
  {
    label: 'Study Minutes',
    value: '320',
    icon: Clock,
    change: '+12%',
    changeType: 'increase'
  },
  {
    label: 'Cards Mastered',
    value: '156',
    icon: Brain,
    change: '+8%',
    changeType: 'increase'
  },
  {
    label: 'Current Streak',
    value: '7',
    icon: Trophy,
    change: '+2',
    changeType: 'increase'
  },
  {
    label: 'Study Goal',
    value: '85%',
    icon: Target,
    change: '+5%',
    changeType: 'increase'
  }
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <stat.icon className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <span className={`ml-2 text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}