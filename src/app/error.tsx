"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div className="h-full w-full flex flex-col text-center justify-center text-3xl text-neutral-400">
        <div>{"(┛ಠ_ಠ)┛彡┻━┻"}</div>
        <div>{"I promise, I'll fix this."}</div>
        <div className="text-sm">
          Meanwhile try going back{" "}
          <Link href="/" className="text-red-400 ">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
