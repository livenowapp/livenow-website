import Image from "next/image";
import Link from "next/link";

import styles from "../launch.module.css";

export default function PrivacyPage() {
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

          <h1>Privacy Policy</h1>

          <p className="legalDate">
            Effective date: August 2, 2026
          </p>
        </div>

        <section>
          <h2>Introduction</h2>

          <p>
            LiveNow respects your privacy. This Privacy Policy explains what
            personal data we collect, how we use it, how we protect it, and the
            choices and rights available to you.
          </p>

          <p>
            By creating an account or using LiveNow, you agree to the practices
            described in this Privacy Policy.
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>

          <h3>Account information</h3>

          <ul>
            <li>Display name chosen by you and shown in your profile</li>
            <li>Email address when signing up with email and password</li>
            <li>
              Securely hashed password managed through Firebase Authentication
            </li>
            <li>
              Apple Sign In account information when you choose Sign in with
              Apple
            </li>
          </ul>

          <h3>Content you create</h3>

          <ul>
            <li>Thoughts and reflections you enter</li>
            <li>AI reflections, reframes, and suggested actions</li>
            <li>Reality Check responses</li>
            <li>
              AI Insights generated from patterns across your entries
            </li>
            <li>
              Dates and timestamps necessary to provide your history and
              progress
            </li>
          </ul>

          <p>
            We do not sell your personal information or display third-party
            advertising.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Data</h2>

          <p>We use your data to:</p>

          <ul>
            <li>Create and manage your account</li>
            <li>Authenticate you securely</li>
            <li>Generate AI reflections and suggested actions</li>
            <li>
              Generate long-term AI insights based on patterns across your
              entries
            </li>
            <li>Display your history, statistics, and progress</li>
            <li>Improve security, reliability, and fraud prevention</li>
            <li>Respond to support requests and legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>3. Artificial Intelligence</h2>

          <p>
            LiveNow uses Claude by Anthropic to generate personalized
            reflections and insights. When you request an AI analysis, the
            relevant text you provide is securely transmitted to Anthropic for
            processing.
          </p>

          <p>
            AI outputs are intended for self-reflection only and are not
            medical, psychological, or diagnostic advice.
          </p>
        </section>

        <section>
          <h2>4. Firebase</h2>

          <p>
            LiveNow uses Firebase Authentication and Cloud Firestore provided
            by Google to securely store account information and application
            data.
          </p>

          <p>
            Data is encrypted in transit and at rest where supported by the
            service.
          </p>
        </section>

        <section>
          <h2>5. Legal Basis under GDPR</h2>

          <p>
            Where GDPR applies, we process data on the basis of:
          </p>

          <ul>
            <li>Performance of a contract</li>
            <li>Legitimate interests, including security and fraud prevention</li>
            <li>
              Consent where required for special category data contained in
              your entries
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Your Rights</h2>

          <p>
            You may request access, correction, deletion, restriction,
            portability, or object to certain processing.
          </p>

          <p>
            You may also delete your account directly within the app.
          </p>
        </section>

        <section>
          <h2>7. Account Deletion</h2>

          <p>
            Deleting your account removes your personal data from LiveNow
            systems within a reasonable operational period, except where
            retention is required by law.
          </p>

          <p>
            App Store subscriptions must be managed through your Apple account.
          </p>
        </section>

        <section>
          <h2>8. Security</h2>

          <p>
            We use HTTPS/TLS, Firebase Authentication, database security rules,
            and access controls designed to protect your information.
          </p>

          <p>
            No internet service can guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>9. Data Retention</h2>

          <p>
            We retain your information only for as long as necessary to provide
            the service, comply with legal obligations, resolve disputes, and
            enforce our agreements.
          </p>
        </section>

        <section>
          <h2>10. International Transfers</h2>

          <p>
            Your information may be processed in the European Union and the
            United States through trusted service providers including Google
            Firebase and Anthropic, using appropriate safeguards where
            required.
          </p>
        </section>

        <section>
          <h2>11. Children</h2>

          <p>
            LiveNow is not intended for children under 16 years of age, and we
            do not knowingly collect their personal information.
          </p>
        </section>

        <section>
          <h2>12. Changes to This Policy</h2>

          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be communicated through the app or by email where
            appropriate.
          </p>
        </section>

        <section>
          <h2>13. Contact</h2>

          <p>
            Email:{" "}
            <a href="mailto:livenowapp@outlook.com">
              livenowapp@outlook.com
            </a>
          </p>

          <p>
            If you have any questions, requests, or complaints regarding
            privacy or your personal data, please contact us using the address
            above.
          </p>

          <p>
            We are committed to protecting your privacy and handling your
            personal information responsibly.
          </p>
        </section>

        <p className="legalLastUpdated">
          Last updated: August 2, 2026
        </p>
      </article>
    </main>
  );
}