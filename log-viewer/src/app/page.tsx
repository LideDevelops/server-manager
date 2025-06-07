import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Log Viewer</h1>
      <p className="text-lg mb-4">
        This is a simple log viewer application built with Next.js and TypeScript.
      </p>
      <Image
        src="/logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="rounded-full mb-8"
      />
    </main>
  );
}
