import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full w-full flex flex-col text-center justify-center dark:text-slate-400 text-slate-600">
      <div className="text-3xl">Ono! How'd you land here?</div>
      <div className="text-base">
        Try going back{" "}
        <Link href="/" className="text-red-400 ">
          Home
        </Link>
      </div>
    </div>
  );
}
