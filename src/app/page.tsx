import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero relative flex items-center justify-center">
        <Image
          src="/SouthernCreativeConceptsRainbow.png"
          alt="Southern Creative Concepts logo"
          fill
          className="object-cover"
          priority
        />
        <h1 className="absolute text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Southern Creative Concepts</h1>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center">
          Empowering Your Digital Journey
        </h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Southern Creative Concepts delivers full‑stack web and application
          development tailored to your needs. From AWS infrastructure planning
          and hosting to social media integration and app store maintenance, we
          take care of the technical details so you can focus on your vision.
        </p>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Our remote-first, client‑centric approach brings enterprise-grade
          services to startups and small businesses. Let us simplify the
          complexities of the digital world on your behalf.
        </p>
      </section>
      {/* facebook logo link positioned bottom-right */}
      <a href="https://www.facebook.com/southerncreativeconcepts" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4">
        <img src="/Facebook_Logo_Secondary.png" alt="Facebook" className="w-8 h-8" />
      </a>
    </main>
  );
}
