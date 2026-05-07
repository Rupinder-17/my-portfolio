import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Rupinder Kaur's portfolio website.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-200 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-400 mb-8">
          Last updated: May 7, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Introduction
          </h2>
          <p className="leading-relaxed">
            Welcome to my portfolio website. Your privacy is important to me.
            This Privacy Policy explains how I collect, use, and protect your
            personal information when you visit this site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            2. Information I Collect
          </h2>
          <p className="leading-relaxed mb-3">
            When you use the contact form on this website, I may collect:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Your name</li>
            <li>Your email address</li>
            <li>The message you send</li>
          </ul>
          <p className="leading-relaxed mt-3">
            I do not collect any other personal data automatically unless you
            voluntarily provide it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            3. How I Use Your Information
          </h2>
          <p className="leading-relaxed">
            The information you provide through the contact form is used solely
            to respond to your inquiries. I do not share, sell, or rent your
            personal information to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Analytics and Tracking
          </h2>
          <p className="leading-relaxed">
            This website may use analytics tools (such as the Meta Pixel) to
            understand how visitors interact with the site. These tools collect
            non-personal data such as pages visited and general location. You can
            disable tracking through your browser settings or by using ad
            blockers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Data Security
          </h2>
          <p className="leading-relaxed">
            I take reasonable measures to protect your personal information from
            unauthorized access, alteration, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Third-Party Links
          </h2>
          <p className="leading-relaxed">
            This website may contain links to external sites (such as GitHub,
            LinkedIn, or Twitter). I am not responsible for the privacy practices
            or content of those third-party websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Your Rights
          </h2>
          <p className="leading-relaxed">
            You have the right to request access to, correction of, or deletion
            of your personal data. If you wish to exercise these rights, please
            contact me using the contact form on this site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            I may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            9. Contact
          </h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy, please reach out
            via the contact form on this website or email me at{" "}
            <a
              href="mailto:rupinderrandhey90@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              rupinderrandhey90@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
