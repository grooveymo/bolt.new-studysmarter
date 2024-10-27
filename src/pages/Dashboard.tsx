import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Book, Clock, Star, Folder } from 'lucide-react';
import DashboardStats from '../components/dashboard/DashboardStats';
import StudySetGrid from '../components/dashboard/StudySetGrid';
import RecentActivity from '../components/dashboard/RecentActivity';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Link
          to="/create-set"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Create Study Set
        </Link>
      </div>

      <div className="mb-8">
        <DashboardStats />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">My Study Sets</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search sets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
            <StudySetGrid />
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center px-4 py-3 text-left rounded-lg hover:bg-gray-50">
                <Book className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">Study Now</span>
              </button>
              <button className="w-full flex items-center px-4 py-3 text-left rounded-lg hover:bg-gray-50">
                <Clock className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">Review Due</span>
              </button>
              <button className="w-full flex items-center px-4 py-3 text-left rounded-lg hover:bg-gray-50">
                <Star className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">Favorites</span>
              </button>
              <button className="w-full flex items-center px-4 py-3 text-left rounded-lg hover:bg-gray-50">
                <Folder className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">All Sets</span>
              </button>
            </div>
          </div>

          <RecentActivity />
        </div>
      </div>
    </div>
  );
}