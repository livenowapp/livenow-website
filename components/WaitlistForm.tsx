"use client";

import { FormEvent, useState } from "react";

import styles from "../app/launch.module.css";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(
          data?.error ??
            "Something went wrong. Please try again."
        );
        return;
      }

      setStatus("success");
      setMessage("You're on the list.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={styles.waitlistSuccess}
        role="status"
      >
        <span className={styles.waitlistCheck}>
          ✓
        </span>

        <div>
          <strong>You're on the list.</strong>
          <p>
            We'll let you know when LiveNow launches.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.waitlist}>
      <p className={styles.waitlistTitle}>
        Be first to know when LiveNow launches.
      </p>

      <form
        className={styles.waitlistForm}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.waitlistInput}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Your email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          required
          disabled={status === "loading"}
          aria-label="Email address"
        />

        <button
          className={styles.waitlistButton}
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading"
            ? "Joining..."
            : "Join the waitlist"}
        </button>
      </form>

      {status === "error" && (
        <p
          className={styles.waitlistError}
          role="alert"
        >
          {message}
        </p>
      )}

      <p className={styles.waitlistPrivacy}>
        No spam. Just the LiveNow launch update.
      </p>
    </div>
  );
}