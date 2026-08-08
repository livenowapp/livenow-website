import Image from "next/image";
import Link from "next/link";

import styles from "../launch.module.css";

export default function TermsPage() {
  return (
    <main className="legalPage">
      <header className={styles.header}>
        <div className={styles.headerInner}>
            <Link
            href="/"
            className={styles.brand}
            aria-label="LiveNow home"
            >
            <Image
                src="/assets/LogoCircle.png"
                alt=""
                width={38}
                height={38}
                priority
            />

            <span>LiveNow</span>
            </Link>

            <Link
            href="/"
            className={styles.headerBadge}
            >
            Back to home
            </Link>
        </div>
      </header>

      <article className="legalContent">
        <div className="legalHero">
          <p className="eyebrow">Legal</p>

          <h1>Terms of Use</h1>

          <p className="legalDate">
            Effective date: August 2, 2026
          </p>
        </div>

        <section>
          <h2>1. Acceptance of These Terms</h2>

          <p>
            By creating an account or using LiveNow, you agree to these Terms
            of Use. If you do not agree, please do not use the app.
          </p>
        </section>

        <section>
          <h2>2. About LiveNow</h2>

          <p>
            LiveNow is a self-reflection and mental clarity application
            designed to help users manage everyday overthinking through
            AI-assisted reflections, practical actions, Reality Check
            follow-ups, and long-term personal insights.
          </p>

          <p>
            LiveNow is a self-help tool and is not a medical device or a
            substitute for professional healthcare.
          </p>
        </section>

        <section>
          <h2>3. Eligibility</h2>

          <p>
            You must be at least 16 years old, or the minimum age required in
            your country, have legal capacity to enter into these Terms, and
            comply with applicable laws.
          </p>
        </section>

        <section>
          <h2>4. Accounts</h2>

          <p>
            You may register using an email address, display name, and password
            or Sign in with Apple.
          </p>

          <p>
            You are responsible for maintaining the security of your account
            and all activity under it.
          </p>
        </section>

        <section>
          <h2>5. Privacy</h2>

          <p>
            Your use of LiveNow is also governed by our{" "}
            <Link href="/privacy">
              Privacy Policy
            </Link>
            , which explains how we collect, use, and protect your personal
            information.
          </p>
        </section>

        <section>
          <h2>6. Subscriptions</h2>

          <p>
            Subscriptions, free trials, billing, renewals, and cancellations
            are managed through the Apple App Store.
          </p>

          <p>
            Prices may change in the future, and any material changes will be
            communicated where required.
          </p>
        </section>

        <section>
          <h2>7. Acceptable Use</h2>

          <p>
            You agree to use LiveNow only for lawful, personal, and
            non-commercial purposes.
          </p>

          <p>You must not:</p>

          <ul>
            <li>Misuse the service</li>
            <li>Interfere with its operation or security</li>
            <li>Reverse engineer the app or its systems</li>
            <li>Scrape or automatically extract data from the service</li>
            <li>Use LiveNow to harm, harass, or exploit others</li>
            <li>Use the service in violation of applicable law</li>
          </ul>
        </section>

        <section>
          <h2>8. Your Content</h2>

          <p>
            You retain ownership of the content you create.
          </p>

          <p>
            You grant LiveNow a limited licence to store and process your
            content solely to provide the service, including AI reflections,
            Reality Check, history, and AI Insights.
          </p>
        </section>

        <section>
          <h2>9. Artificial Intelligence</h2>

          <p>
            LiveNow uses Claude by Anthropic to generate reflections, suggested
            actions, and AI insights.
          </p>

          <p>
            AI responses are intended for self-reflection only and may
            occasionally be inaccurate. They do not replace professional
            advice.
          </p>
        </section>

        <section>
          <h2>10. Intellectual Property</h2>

          <p>
            All intellectual property relating to LiveNow, including its
            software, branding, interface, design, and non-user content,
            remains the property of the developer or its licensors.
          </p>
        </section>

        <section>
          <h2>11. Disclaimer and Limitation of Liability</h2>

          <p>
            LiveNow is provided “as is” and “as available.”
          </p>

          <p>
            To the maximum extent permitted by law, we are not liable for
            indirect or consequential damages arising from use of the app.
          </p>

          <p>
            Nothing in these Terms limits mandatory consumer rights available
            under applicable law.
          </p>
        </section>

        <section>
          <h2>12. Suspension and Termination</h2>

          <p>
            We may suspend or terminate accounts that violate these Terms or
            applicable law.
          </p>

          <p>
            You may stop using the app and delete your account at any time.
          </p>
        </section>

        <section>
          <h2>13. Changes to These Terms</h2>

          <p>
            We may update these Terms as LiveNow evolves or legal requirements
            change.
          </p>

          <p>
            Material changes will be communicated through the app or by email
            where appropriate.
          </p>
        </section>

        <section>
          <h2>14. Governing Law</h2>

          <p>
            These Terms are governed by the laws of the Republic of Slovenia,
            without affecting mandatory consumer rights available in your
            country of residence where applicable.
          </p>
        </section>

        <section>
          <h2>15. Contact</h2>

          <p>
            Email:{" "}
            <a href="mailto:livenowapp@outlook.com">
              livenowapp@outlook.com
            </a>
          </p>

          <p>
            If you have questions regarding these Terms, please contact us
            using the email above.
          </p>
        </section>

        <p className="legalLastUpdated">
          Last updated: August 2, 2026
        </p>
      </article>
    </main>
  );
}