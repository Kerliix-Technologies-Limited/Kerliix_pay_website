import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Terms of Service</h1>
        <p className="mb-8 text-white/90">
          Last updated: August 19, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-white/90">
            By accessing or using any part of the Kerliix Technologies Limited ("Kerliix", "we", "our", or "us") platform, website, or services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Use of the Service</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>You must be at least 13 years old to use our services.</li>
            <li>You agree not to misuse or interfere with our services or attempt to access them using a method other than the interface we provide.</li>
            <li>You are responsible for any activity that occurs under your account.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Account Responsibilities</h2>
          <p className="text-white/90">
            You are responsible for maintaining the confidentiality of your login credentials. Notify us immediately if you suspect unauthorized use of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
          <p className="text-white/90">
            All content and intellectual property on the platform, including logos, designs, software, and text, are the property of Kerliix or our licensors and are protected by applicable laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Termination</h2>
          <p className="text-white/90">
            We may suspend or terminate your access to the services at any time without notice or liability, for any reason, including if you violate these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
          <p className="text-white/90">
            Kerliix shall not be liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Modifications</h2>
          <p className="text-white/90">
            We reserve the right to modify these Terms at any time. Updated terms will be posted on this page with an updated date. Continued use after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
          <p className="text-white/90">
            These Terms are governed by the laws of the jurisdiction in which Kerliix Technologies Limited operates, without regard to conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
          <p className="text-white/90">
            For any questions regarding these Terms of Service, contact us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
            <li>Email: <a href="mailto:info@kerliix.com" className="text-blue-400 hover:underline">info@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
