import { useEffect, useRef, useState } from 'react';
import FadeIn from './FadeIn';

const RESUME_URL = '/PuneetSharma_Resume.pdf';
const RESUME_FILENAME = 'PuneetSharma_Resume.pdf';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay is most reliable when starting muted.
    const startPlayback = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 1;
      video.play().catch(() => {});
    };

    startPlayback();
    video.addEventListener('loadeddata', startPlayback, { once: true });

    const onEnded = () => {
      video.muted = true;
      setMuted(true);
    };

    video.addEventListener('ended', onEnded);
    return () => {
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('loadeddata', startPlayback);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    video.defaultMuted = muted;
    if (!muted) {
      video.volume = 1;
      video.play().catch(() => {});
    }
  }, [muted]);

  // Snap-scroll: one wheel tick / keypress while at top → jump to About
  useEffect(() => {
    let fired = false;

    const goToAbout = () => {
      if (fired) return;
      fired = true;
      const about = document.getElementById('about');
      if (about) about.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    const onWheel = (e: WheelEvent) => {
      if (fired) return;
      if (e.deltaY <= 0) return;
      if (window.scrollY > 50) return;
      e.preventDefault();
      goToAbout();
    };

    const onKey = (e: KeyboardEvent) => {
      if (fired) return;
      if (window.scrollY > 50) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToAbout();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative z-10 flex h-full flex-col">
        <FadeIn delay={0} y={-20} className="relative">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 pt-6 md:pt-8">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8 md:gap-x-12">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-start sm:justify-end gap-3 sm:gap-4">
              <a
                href={RESUME_URL}
                download={RESUME_FILENAME}
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.03]"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.03]"
              >
                Email me
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-1 items-center">
          <div className="w-full max-w-7xl px-6 md:px-10">
            <FadeIn delay={0.3} y={20}>
              <p className="mb-4 text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em] text-white/60">
                Portfolio · 2026
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={40}>
              <h1
                className="font-black uppercase leading-[0.88] tracking-tight text-white"
                style={{ fontSize: 'clamp(3rem, 12vw, 10.5rem)' }}
              >
                Puneet<br />Sharma
              </h1>
            </FadeIn>

            <FadeIn delay={0.85} y={20}>
              <p className="mt-5 md:mt-7 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-white/75">
                AI/ML Engineer · Computer Vision · Agentic AI
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 px-6 md:px-10 pb-7 sm:pb-10 md:pb-12">
          <FadeIn delay={1.1} y={20}>
            <a href="#about" aria-label="Scroll to next section" className="group flex flex-col items-center gap-3">
              <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 transition group-hover:text-white">
                Scroll
              </span>
              <div className="relative h-12 w-px overflow-hidden bg-white/20">
                <span
                  className="absolute inset-x-0 top-0 h-1/2 w-full bg-white"
                  style={{ animation: 'scrollLine 1.8s ease-in-out infinite' }}
                />
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={1.1} y={20}>
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-110"
            >
              {muted ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
