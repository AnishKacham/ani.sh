"use client";
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
        <div>I promise, I'll fix this.</div>
      </div>
    </>
  );
}
