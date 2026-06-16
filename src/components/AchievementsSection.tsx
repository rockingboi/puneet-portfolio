import FadeIn from './FadeIn';
import { Award, Trophy, BookOpen, Users } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    icon: BookOpen,
    title: 'IEEE ETCom 2025',
    description:
      'Published research paper — Predicting Telecom Customer Churn with Combined Machine Learning Models.',
  },
  {
    icon: Trophy,
    title: 'Top 15 — Rabbit AI Hackathon',
    description: 'Ranked among the top teams in a competitive AI hackathon.',
  },
  {
    icon: Award,
    title: 'Smart India Hackathon Finalist',
    description: 'Advanced to the internal finalist round at the national-level hackathon.',
  },
  {
    icon: Trophy,
    title: 'Top 20 — IBM Ice Day Solvathon',
    description: 'Placed in the top 20 at IBM\'s problem-solving challenge.',
  },
  {
    icon: Users,
    title: 'Secretary — NSS Society',
    description: 'Led initiatives as Secretary of the National Service Scheme at GLA University.',
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Achievements
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
        {ACHIEVEMENTS.map((item, i) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.title} delay={i * 0.08} y={30}>
              <div className="flex h-full flex-col gap-5 rounded-[28px] sm:rounded-[32px] border-2 border-[#D7E2EA]/20 bg-[#141418] p-6 sm:p-7 md:p-8 transition-colors duration-300 hover:border-[#D7E2EA]/40">
                <div className="rounded-full border border-[#D7E2EA]/20 p-3 w-fit">
                  <Icon className="text-[#D7E2EA]" size={22} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-medium uppercase text-[#D7E2EA] leading-tight"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#D7E2EA]/65"
                    style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};

export default AchievementsSection;
