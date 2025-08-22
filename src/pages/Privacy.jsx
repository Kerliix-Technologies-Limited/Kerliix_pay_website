import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Privacy Policy</h1>
        <p className="mb-8 text-white/90">
          Last updated: August 19, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-white/90">
            Welcome to Kerliix Technologies Limited ("Kerliix", "we", "our", or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, applications, and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Personal Information: name, email address, phone number, and other contact details.</li>
            <li>Usage Data: browser type, IP address, pages visited, time and date of visit.</li>
            <li>Cookies and Tracking Technologies for analytics and personalization.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>To provide and maintain our services</li>
            <li>To improve user experience</li>
            <li>To send you updates and promotional content (with your consent)</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
          <p className="text-white/90">
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc pl-5 text-white/90">
            <li>Service providers and vendors under contract</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
          <p className="text-white/90">
            You have the right to:
          </p>
          <ul className="list-disc pl-5 text-white/90">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Data Security</h2>
          <p className="text-white/90">
            We implement industry-standard measures to protect your data. However, no method of transmission over the internet or method of electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
          <p className="text-white/90">
            Our services may contain links to third-party sites. We are not responsible for their privacy practices or content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p className="text-white/90">
            We may update this Privacy Policy from time to time. We will notify you of any changes by updating the date at the top of this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
          <p className="text-white/90">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:privacy@kerliix.com" className="text-blue-400 hover:underline">privacy@kerliix.com</a></li>
            <li>Email: <a href="mailto:info@kerliix.com" className="text-blue-400 hover:underline">info@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
