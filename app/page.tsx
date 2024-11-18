import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center relative font-primary bg-secondary">
      <Image src="/logo.svg" alt="Logo" width={300} height={300} />
      <div className="grid gap-4">
        <h1 className="font-medium text-primary text-5xl text-center">
          Lets start from here!
        </h1>
      </div>
    </main>
  );
}
