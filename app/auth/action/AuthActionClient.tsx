"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  applyActionCode,
  checkActionCode,
  confirmPasswordReset,
  verifyPasswordResetCode,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export default function AuthActionClient() {
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");
  const oobCode = searchParams.get("oobCode");

  const [status, setStatus] = useState<
    "loading" | "reset" | "success" | "error"
  >("loading");

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    async function handleAction() {
      if (!mode || !oobCode) {
        setStatus("error");
        setMessage("This link is invalid or incomplete.");
        return;
      }

      try {
        switch (mode) {
          case "verifyEmail": {
            await applyActionCode(auth, oobCode);

            setStatus("success");
            setMessage("Your email has been verified.");
            break;
          }

          case "resetPassword": {
            const accountEmail =
              await verifyPasswordResetCode(auth, oobCode);

            setEmail(accountEmail);
            setStatus("reset");
            break;
          }

          case "recoverEmail": {
            await checkActionCode(auth, oobCode);
            await applyActionCode(auth, oobCode);

            setStatus("success");
            setMessage(
              "Your email address has been restored."
            );
            break;
          }

          default: {
            setStatus("error");
            setMessage("This action is not supported.");
          }
        }
      } catch (error) {
        console.error("Firebase auth action error:", error);

        setStatus("error");
        setMessage(
          "This link is invalid or has expired. Please request a new one."
        );
      }
    }

    handleAction();
  }, [mode, oobCode]);

  async function handlePasswordReset(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!oobCode) {
      return;
    }

    if (newPassword.length < 6) {
      setMessage(
        "Your password must be at least 6 characters long."
      );
      return;
    }

    try {
      await confirmPasswordReset(
        auth,
        oobCode,
        newPassword
      );

      setStatus("success");
      setMessage("Your password has been reset.");
    } catch (error) {
      console.error("Password reset error:", error);

      setStatus("error");
      setMessage(
        "We couldn't reset your password. Please request a new reset link."
      );
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#f8f5ef",
        color: "#111111",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          padding: "32px",
          borderRadius: "24px",
          background: "#ffffff",
        }}
      >
        <h1
          style={{
            margin: "0 0 16px",
            fontSize: "28px",
          }}
        >
          LiveNow
        </h1>

        {status === "loading" && (
          <p>Checking your link...</p>
        )}

        {status === "reset" && (
          <>
            <h2>Reset your password</h2>

            <p>
              Enter a new password for{" "}
              <strong>{email}</strong>.
            </p>

            <form onSubmit={handlePasswordReset}>
              <input
                type="password"
                value={newPassword}
                onChange={(event) =>
                  setNewPassword(event.target.value)
                }
                placeholder="New password"
                autoComplete="new-password"
                required
                style={{
                  width: "100%",
                  height: "52px",
                  padding: "0 16px",
                  border: "1px solid #d8d8d8",
                  borderRadius: "14px",
                  fontSize: "16px",
                  boxSizing: "border-box",
                  marginTop: "12px",
                }}
              />

              {message && (
                <p
                  style={{
                    color: "#b42318",
                    fontSize: "14px",
                  }}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                style={{
                  width: "100%",
                  height: "52px",
                  marginTop: "14px",
                  border: 0,
                  borderRadius: "14px",
                  background: "#ff6d1a",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Reset password
              </button>
            </form>
          </>
        )}

        {status === "success" && (
          <>
            <h2>Done</h2>
            <p>{message}</p>
          </>
        )}

        {status === "error" && (
          <>
            <h2>Something went wrong</h2>
            <p>{message}</p>
          </>
        )}
      </div>
    </main>
  );
}
