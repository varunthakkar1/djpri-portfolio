import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-djpri">
      <Image
        src="/headshot.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '100vh', overflow: 'hidden', objectFit: 'cover' }}
        alt=""
      />
    </main>
  );
}
