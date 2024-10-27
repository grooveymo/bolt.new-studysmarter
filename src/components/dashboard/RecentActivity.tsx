import React from 'react';
import { Clock } from 'lucide-react';

const activities = [
  {
    type: 'study',
    set: 'Biology 101',
    time: '2 hours ago',
    details: 'Completed quiz with 92% accuracy'
  },
  {
    type: 'create',
    set: 'World History',
    time: '1 day ago',
    details: 'Created 65 new flashcards'
  },
  {
    type: 'achievement',
    set: null,
    time: '2 days ago',
    details: 'Earned "7-Day Streak" badge'
  }
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <div>
              <p className="text-sm text-gray-900">
                {activity.set && <span className="font-medium">{activity.set}: </span>}
                {activity.details}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}