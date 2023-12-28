"use client";
export default function GlobalError({ error, reset }: ErrorPageProps) {
  return (
    <main className="flex gap-10 flex-col items-center justify-between p-24">
      <h1 className="text-5xl">Errorss</h1>
      <p>Un error inesperadossss</p>
      <button
        onClick={reset}
        className="bg-red-400 text-white px-4 py-2 rounded-md"
      >
        Reset
      </button>
    </main>
  );
}
