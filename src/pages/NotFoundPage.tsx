import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          {/* 404 Number */}
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          
          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              <Home className="h-5 w-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>
        </div>

        {/* Support Contact */}
        <p className="mt-8 text-gray-600">
          Need help? Contact our support at{' '}
          <a
            href="mailto:support@datahelp.eu"
            className="text-accent hover:text-accent-dark underline"
          >
            support@datahelp.eu
          </a>
        </p>
      </div>
    </div>
  );
}