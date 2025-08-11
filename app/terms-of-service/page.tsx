'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-dark-100">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-crypto-green hover:text-crypto-gold transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-dark-200 rounded-xl p-8 border border-dark-300">
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using our website development services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
              <p className="text-gray-300 mb-4">
                We provide professional website development services, including:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                <li>One-page website development</li>
                <li>Multi-page website development</li>
                <li>Premium website packages</li>
                <li>Custom website features</li>
                <li>Website maintenance and updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Project Terms</h2>
              <p className="text-gray-300 mb-4">
                <strong>Payment:</strong> Payment terms will be agreed upon before project commencement. We require a deposit for custom projects.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Timeline:</strong> Project timelines are estimates and may vary based on complexity and client feedback cycles.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Revisions:</strong> We include reasonable revisions within the project scope. Additional revisions may incur additional charges.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Client Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                You agree to:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                <li>Provide accurate and complete project requirements</li>
                <li>Respond to communications within reasonable timeframes</li>
                <li>Provide necessary content, images, and materials</li>
                <li>Review and provide feedback on project deliverables</li>
                <li>Ensure you have rights to any content you provide</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                <strong>Client Content:</strong> You retain ownership of all content you provide to us.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Our Work:</strong> Upon full payment, you receive ownership of the final website design and code created specifically for your project.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Portfolio Rights:</strong> We reserve the right to showcase completed work in our portfolio and marketing materials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                Our liability is limited to the amount paid for the specific service. We are not liable for:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Data loss or security breaches</li>
                <li>Third-party service interruptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Warranty and Support</h2>
              <p className="text-gray-300 mb-4">
                <strong>Warranty:</strong> We provide a 30-day warranty on all delivered work for functionality and compatibility issues.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Support:</strong> Post-launch support is available as outlined in your service package. Additional support may be available for ongoing maintenance contracts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
              <p className="text-gray-300 mb-4">
                Either party may terminate a project with written notice. Upon termination:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
                <li>You will be charged for work completed up to the termination date</li>
                <li>We will deliver all completed work and source files</li>
                <li>Any deposits or payments for incomplete work will be refunded proportionally</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Communication</h2>
              <p className="text-gray-300 mb-4">
                Primary communication channels are:
              </p>
              <div className="bg-dark-300 p-4 rounded-lg mb-4">
                <p className="text-gray-300">
                  <strong>Discord:</strong> ltofficialuk1<br />
                  <strong>X (Twitter):</strong> @ltofficialuk<br />
                  <strong>Email:</strong> hello@ltofficialuk.com
                </p>
              </div>
              <p className="text-gray-300">
                We aim to respond to all inquiries within 24 hours during business days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These terms are governed by the laws of the United Kingdom. Any disputes will be resolved through good faith negotiation or mediation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-dark-300 p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong>Email:</strong> hello@ltofficialuk.com<br />
                  <strong>Discord:</strong> ltofficialuk1<br />
                  <strong>X (Twitter):</strong> @ltofficialuk<br />
                  <strong>Location:</strong> London, United Kingdom
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
