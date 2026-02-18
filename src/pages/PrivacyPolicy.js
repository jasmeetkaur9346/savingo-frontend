import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, UserX, Mail, FileText, CheckCircle, XCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-1">Savingo: Ledger, Money Manager</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Last updated: February 17, 2026</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* 1. Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <FileText className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Savingo: Ledger, Money Manager ("we," "our," or "us") respects your privacy. This policy explains how we handle your data, specifically concerning Google User Data and the information collected during the one-time Profile Setup.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Google API Disclosure */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <Eye className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Google API Disclosure (Google Drive Access)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our app requests access to your Google Drive to enable the Backup and Restore functionality.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 bg-green-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Data Accessed</h3>
                  </div>
                  <p className="text-gray-700">We only access a dedicated folder in your Google Drive to store and manage your app's database backup.</p>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Usage</h3>
                  </div>
                  <p className="text-gray-700">This access is used strictly to sync your full database and allow data portability across devices.</p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold text-gray-900">No Sharing</h3>
                  </div>
                  <p className="text-gray-700">We do not sell or share any Google user data with third parties or external servers.</p>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Limited Use</h3>
                  </div>
                  <p className="text-gray-700">Data accessed via Google Drive is never used for advertising, tracking, or user profiling.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Information Collection (Profile Setup) */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <FileText className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Collection (Profile Setup)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you sign in with Google and complete the one-time Profile Setup, we collect the following:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 bg-green-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Identity</h3>
                  </div>
                  <p className="text-gray-700">Name and Google Account ID.</p>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Contact & Region</h3>
                  </div>
                  <p className="text-gray-700">Phone number and Country.</p>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Preferences</h3>
                  </div>
                  <p className="text-gray-700">Preferred Currency and a unique Username.</p>
                </div>

                <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Usage</h3>
                  </div>
                  <p className="text-gray-700">This information is used strictly for account identification, secure authentication, and to personalize your financial dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Data Storage & Security */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <Shield className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage & Security</h2>

              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 bg-yellow-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <h3 className="font-semibold text-gray-900">Location</h3>
                  </div>
                  <p className="text-gray-700">Authentication and profile details are stored in our secure Cloud Database. Your financial backups remain exclusively on your personal Google Drive.</p>
                </div>

                <div className="border-l-4 border-teal-500 bg-teal-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Lock className="w-5 h-5 text-teal-600" />
                    <h3 className="font-semibold text-gray-900">Protection</h3>
                  </div>
                  <p className="text-gray-700">We use industry-standard security measures to protect your information from unauthorized access.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Data Retention & Deletion */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <UserX className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention & Deletion</h2>

              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 bg-cyan-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <h3 className="font-semibold text-gray-900">User Control</h3>
                  </div>
                  <p className="text-gray-700">You can manage and delete your backup files directly from your Google Drive.</p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold text-gray-900">Account Deletion</h3>
                  </div>
                  <p className="text-gray-700">
                    You have the right to request permanent deletion of your account and all associated profile data by emailing us at <a href="mailto:contact@merasoftware.com" className="text-red-600 hover:text-red-700 font-semibold">contact@merasoftware.com</a>. We will process your request and remove your data from our systems within 7 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact Us */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg shadow-lg p-8 text-white mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="leading-relaxed mb-6">
                For any privacy-related queries:
              </p>
              <a
                href="mailto:contact@merasoftware.com"
                className="inline-flex items-center space-x-2 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@merasoftware.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
          <p>© 2026 Savingo: Ledger, Money Manager. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
