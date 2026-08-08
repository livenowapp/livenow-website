import Image from "next/image";
import Link from "next/link";

import styles from "../launch.module.css";

export default function HelpPage() {
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
          <p className="eyebrow">Support</p>

          <h1>Help &amp; FAQ</h1>

          <p className="legalDate">
            Find answers to common questions about LiveNow,
            your account, subscriptions, privacy, and using the app.
          </p>
        </div>

        <section>
          <h2>What is LiveNow?</h2>

          <p>
            LiveNow helps you step back from overthinking and see your
            thoughts more clearly. By analysing worries and thought
            patterns, the app helps you build awareness, consider more
            realistic perspectives, and take a practical next step.
          </p>
        </section>

        <section>
          <h2>How does the analysis work?</h2>

          <p>
            When you enter a thought, LiveNow uses artificial intelligence
            to identify possible thinking patterns and provide alternative
            perspectives. The analysis is designed for self-reflection and
            mental clarity and is not professional or medical advice.
          </p>
        </section>

        <section>
          <h2>Is LiveNow a mental health treatment app?</h2>

          <p>
            No. LiveNow is not a medical device and does not provide
            therapy, diagnosis, treatment, or professional mental health
            advice. If you need professional support, please contact an
            appropriately qualified healthcare professional.
          </p>
        </section>

        <section>
          <h2>How is my information handled?</h2>

          <p>
            Your entries are stored to provide features such as your
            history and insights. When you request AI analysis, relevant
            content is securely transmitted to our AI service provider
            for processing.
          </p>

          <p>
            LiveNow does not sell your personal information or share it
            with advertisers. For more information, please see our{" "}
            <Link href="/privacy">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>How do I change my password?</h2>

          <p>
            Open <strong>Settings → Change Password</strong> and follow
            the instructions to update your password.
          </p>
        </section>

        <section>
          <h2>How do I delete my account?</h2>

          <p>
            Open <strong>Settings → Delete Account</strong> and follow
            the instructions.
          </p>

          <p>
            Deleting your account removes your account and associated
            personal data in accordance with our Privacy Policy, except
            where retention is required by law.
          </p>
        </section>

        <section>
          <h2>I forgot my password. What should I do?</h2>

          <p>
            On the login screen, tap <strong>Forgot Password?</strong>{" "}
            and follow the instructions sent to your email address.
          </p>
        </section>

        <section>
          <h2>Why isn&apos;t the analysis loading?</h2>

          <p>
            Check your internet connection and try again. If the issue
            continues, please contact LiveNow Support.
          </p>
        </section>

        <section>
          <h2>Do I need a subscription?</h2>

          <p>
            Yes. An active subscription is required to use LiveNow after
            any applicable free trial or introductory access.
          </p>
        </section>

        <section>
          <h2>How do I cancel my subscription?</h2>

          <p>
            Subscriptions are managed through Apple. You can manage or
            cancel your subscription through your Apple account
            subscription settings.
          </p>
        </section>

        <section>
          <h2>Will I lose my data if I change phones?</h2>

          <p>
            Your data is linked to your LiveNow account. Sign in on your
            new device using the same account to access your available
            account data.
          </p>
        </section>

        <section>
          <h2>How can I contact support?</h2>

          <p>
            You can contact us from{" "}
            <strong>Settings → Contact Us</strong> in the LiveNow app or
            by email at{" "}
            <a href="mailto:livenowapp@outlook.com">
              livenowapp@outlook.com
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}