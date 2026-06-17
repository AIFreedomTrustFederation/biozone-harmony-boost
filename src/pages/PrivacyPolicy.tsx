
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-forest-800 mb-6">Privacy Policy</h1>
          <Separator className="mb-8" />
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-forest-700 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy describes the intended privacy posture for this AetherCoin and Circleunchain concept prototype. 
              It should be reviewed before any production service, wallet, API, or data-processing workflow is launched.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-forest-700 mb-4">2. Circleunchain Research</h2>
            <p className="text-gray-700 mb-4">
              This prototype explores Circleunchain as the opposite of blockchain for AI and stewardship workflows. 
              The current repository is a prototype and does not prove a live encrypted production network.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Future data processing should be consent-based and minimized</li>
              <li>Any distributed processing model must be documented and independently reviewed</li>
              <li>No production privacy or encryption guarantee is made by this prototype</li>
              <li>Federated learning and zero-knowledge ideas remain research directions unless implemented and audited</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Future claims about Circleunchain, AI training, privacy, or data security must be backed by implementation evidence and review.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-forest-700 mb-4">3. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              To provide our services, we may collect the following types of information:
            </p>
            <h3 className="text-lg font-medium text-forest-600 mt-4 mb-2">3.1 Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Basic account details: name, email address, and optional participation identifiers</li>
              <li>Modeled transaction or stewardship data if future prototypes enable those workflows</li>
              <li>Profile information you choose to provide</li>
            </ul>
            <h3 className="text-lg font-medium text-forest-600 mt-4 mb-2">3.2 Usage Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Interactions with our platform</li>
              <li>Service usage patterns</li>
              <li>Device and connection information</li>
            </ul>
            <h3 className="text-lg font-medium text-forest-600 mt-4 mb-2">3.3 AI Training Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Queries and responses when using our AI-powered features</li>
              <li>Content processed through future services, subject to documented consent and protection controls</li>
              <li>Feedback provided on AI model outputs</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-forest-700 mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              Your data is used for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Providing, maintaining, and improving our services</li>
              <li>Testing modeled transaction or stewardship workflows</li>
              <li>Researching AI-assisted review workflows where explicitly enabled</li>
              <li>Enhancing security and preventing fraud</li>
              <li>Personalizing your experience</li>
              <li>Communicating with you about services, updates, and promotions</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-forest-700 mb-4">5. Data Security and Encryption</h2>
            <p className="text-gray-700 mb-4">
              Any production deployment should implement documented security measures such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Encryption appropriate to the data and threat model</li>
              <li>Audit logs for sensitive access paths</li>
              <li>Documented storage and key-management boundaries</li>
              <li>Security reviews before public participation, API, or custody claims</li>
              <li>Dependency and deployment audits</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This prototype does not guarantee breach resistance or production data protection.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-forest-700 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">
              You have several rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Access and download your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your data (with certain limitations)</li>
              <li>Opt-out of LLM training with your data</li>
              <li>Control marketing communications</li>
              <li>Data portability</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, please contact us through AI Freedom Trust Federation.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-forest-700 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices
              or for legal, operational, or regulatory reasons. We will notify you of any material changes
              through our website or via email.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-forest-700 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
              AI Freedom Trust Federation
            </p>
          </section>
          
          <div className="text-gray-600 text-sm italic mt-12">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
