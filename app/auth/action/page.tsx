import { Suspense } from "react";
import AuthActionClient from "./AuthActionClient";

export default function AuthActionPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthActionClient />
    </Suspense>
  );
}