import Image from "next/image";
import Link from "next/link";

import styles from "./launch.module.css";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className={styles.page}>
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

          <div className={styles.headerBadge}>
            Coming soon for iOS
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <Image
            className={styles.heroLogo}
            src="/assets/LogoCircle.png"
            alt="LiveNow logo"
            width={76}
            height={76}
            priority
          />

          <p className={styles.eyebrow}>
            A reset for your mind
          </p>

          <h1 className={styles.title}>
            <span>Stop Overthinking.</span>
            <span className={styles.orange}>
              Start Living.
            </span>
          </h1>

          <p className={styles.description}>
            Understand the thought. Reframe it. 
            Take one small step back to the present.
          </p>

          <WaitlistForm />

          <p className={styles.tagline}>
            A guided reset for the moments when your mind
            won&apos;t let go.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <nav className={styles.footerLinks}>
            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/help">
              Help
            </Link>

          </nav>

          <p className={styles.copyright}>
            © 2026 LiveNow
          </p>
        </div>
      </footer>
    </main>
  );
}