import React from 'react';

export default function CallToAction() {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Ready to transform your learning?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                Join thousands of students who are already studying smarter, not harder.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:ml-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Start Learning Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}