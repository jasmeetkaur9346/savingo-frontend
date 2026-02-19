import React from 'react';
import { FileText, Lock, AlertCircle, Zap, Scale, Shield, XCircle, CheckCircle, Mail } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-white/10 p-3 rounded-lg border border-white/20">
              <FileText className="w-8 h-8 text-indigo-200" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
              <p className="text-indigo-100/90 mt-1">Savingo: Ledger, Money Manager</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-indigo-100/80">
            <span>Last updated: February 17, 2026</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* 1. Acceptance of Terms */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <CheckCircle className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By downloading or using Savingo: Ledger, Money Manager, you agree to be bound by these Terms of Service. If you do not agree, please do not use the application.
              </p>
            </div>
          </div>
        </section>

        {/* 2. User Accounts & Registration */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <Lock className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts & Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use the app, you must sign in via Google. During the Profile Setup, you agree to provide accurate information, including your name, country, and phone number. You are responsible for maintaining the security of your account and all activities that occur under your username.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Use of Google Drive for Backups */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <Shield className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Google Drive for Backups</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The app provides a feature to backup your financial data to your personal Google Drive.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 bg-blue-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Storage Acknowledgment</h3>
                  </div>
                  <p className="text-gray-700">You acknowledge that this data is stored on Google's servers, and its availability is subject to Google's terms and your account's storage limits.</p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold text-gray-900">Data Loss Responsibility</h3>
                  </div>
                  <p className="text-gray-700">Savingo is not responsible for data loss resulting from the deletion of files directly from your Google Drive by you or any third party.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Prohibited Conduct */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <XCircle className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prohibited Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-6">You agree not to:</p>

              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Use the app for any illegal financial activities.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Attempt to reverse engineer or disrupt the app's functionality.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Use the app to store or transmit any malicious code or viruses.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Intellectual Property */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <Scale className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, logos, and software related to Savingo: Ledger, Money Manager are the intellectual property of Mera Software. You are granted a limited, non-exclusive license to use the app for personal financial management only.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Limitation of Liability */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <AlertCircle className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                The app is provided "as is" without warranties of any kind. While we strive for 100% accuracy, Savingo and Mera Software are not liable for any financial losses or data inaccuracies resulting from the use of the app.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Termination */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <Zap className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend your access to the app if you violate these terms. You may stop using the app at any time and request data deletion as per our Privacy Policy.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Changes to Terms */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <FileText className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these terms from time to time. Continued use of the app after such changes constitutes your acceptance of the new terms.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Contact Us */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg shadow-lg p-8 text-white mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="leading-relaxed mb-6">
                For any questions regarding these Terms, please contact:
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
        {/* <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
          <p>?? 2026 Savingo: Ledger, Money Manager. All rights reserved.</p>
        </div> */}
      </div>
    </div>
  );
};

export default TermsOfService;

