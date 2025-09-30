const HeroText = () => {
  return (
    <div className="text-center lg:text-left">
      {/* Welcome */}
      <p className="text-xl tracking-widest uppercase text-secondary">
        Welcome
      </p>

      {/* Name */}
      <h1 className="text-3xl md:text-6xl font-bold leading-tight mt-2">
        I&apos;m <span className="text-secondary">Yusuf Usman</span>
      </h1>

      {/* Role */}
      <p className="mt-4 inline-block bg-secondary text-black px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide">
        Backend Engineer
      </p>

      {/* Short bio */}
      <p className="mt-6 text-grey leading-relaxed max-w-lg mx-auto lg:mx-0 text-sm md:text-base">
        Passionate about building scalable, secure, and high-performance
        server-side applications. Experienced with Java, Spring Boot, Python,
        Django, Docker, RESTful APIs, databases, and cloud deployment.
        Dedicated to writing clean, efficient, and maintainable code that powers
        modern applications.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <a
          href="/work"
          className="px-6 py-3 rounded-md bg-secondary text-black font-semibold shadow-md hover:bg-secondary/90 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-md border border-secondary text-secondary font-semibold hover:bg-secondary hover:text-black transition"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-grey">
        <span className="px-3 py-1 bg-background/40 rounded-md shadow">
          Java
        </span>
        <span className="px-3 py-1 bg-background/40 rounded-md shadow">
          Spring Boot
        </span>
        <span className="px-3 py-1 bg-background/40 rounded-md shadow">
          Python
        </span>
        <span className="px-3 py-1 bg-background/40 rounded-md shadow">
          Django
        </span>
        <span className="px-3 py-1 bg-background/40 rounded-md shadow">
          Docker
        </span>
        <span className="px-3 py-1 bg-background/40 rounded-md shadow">
          PostgreSQL
        </span>
        <span className="px-3 py-1 bg-background/40 rounded-md shadow">
          AWS
        </span>
      </div>
    </div>
  );
};

export default HeroText;
