# Puneet Sharma — AI/ML Engineer Portfolio

Personal portfolio for **Puneet Sharma** — B.Tech Computer Science (AI & ML) at GLA University. Focused on Computer Vision, LLM systems, RAG pipelines, and end-to-end AI deployment.

**Live site:** [puneet-portfolio-lac.vercel.app](https://puneet-portfolio-lac.vercel.app)

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Deployed on **Vercel** with GitHub Actions auto-deploy.

## Stack

- React 18 / TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Kanit font (Google Fonts)

## Sections

1. **Hero** — name, tagline, cinematic video background, resume download
2. **About** — profile summary + skills (CV, LLM/RAG, ML, systems)
3. **Experience** — work history + education
4. **Projects** — grouped by AI, AI + IoT, and Data Science / Analytics
5. **Expertise** — core technical focus areas
6. **Achievements** — hackathons, research, leadership
7. **Contact** — email, WhatsApp, LinkedIn, GitHub, resume download

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # serve /dist locally
```

## Deploy

Pushes to `main` on [github.com/rockingboi/puneet-portfolio](https://github.com/rockingboi/puneet-portfolio) trigger a production deploy via GitHub Actions (`.github/workflows/deploy.yml`).

Manual deploy:

```bash
npx vercel deploy --prod
```

## Project structure

```
src/
├── App.tsx
├── main.tsx
├── index.css
└── components/
    ├── HeroSection.tsx
    ├── AboutSection.tsx
    ├── ExperienceSection.tsx
    ├── ProjectsSection.tsx
    ├── ServicesSection.tsx      # Expertise section
    ├── AchievementsSection.tsx
    ├── ContactSection.tsx
    ├── ContactButton.tsx
    ├── LiveProjectButton.tsx
    ├── FadeIn.tsx
    └── AnimatedText.tsx

public/
├── intro.mp4
└── PuneetSharma_Resume.pdf
```

## Featured projects

### AI
| Project | Link |
|---|---|
| IntelliVision | Computer Vision — YOLOv8, DeepSORT, OpenCV |
| DocuMind AI | [GitHub](https://github.com/rockingboi/LLM-and-RAG-using-DSPY-FRAEWORK) |
| AI Coaching Voice Assistant | [GitHub](https://github.com/rockingboi/ai-coaching-voice-assistance) |

### AI + IoT
| Project | Link |
|---|---|
| AgroSmart AI | [GitHub](https://github.com/rockingboi/smart-farming-app) |
| Smart Home Energy Management | [GitHub](https://github.com/rockingboi/Smart-Home-Energy-Management) |

### Data Science / Analytics
| Project | Link |
|---|---|
| SmartEnergy AI | [GitHub](https://github.com/rockingboi/Smart-Home-Energy-Management) |
| Coffee Sales Excel Dashboard | [GitHub](https://github.com/rockingboi/Coffee-sales-Excel-Dashboard) |
| HR Analytics Dashboard | [GitHub](https://github.com/rockingboi/HR-Analytics-Dashboard) |

## Customisation

| Want to change | Open this file |
|---|---|
| Name, nav links, hero text | `src/components/HeroSection.tsx` |
| About paragraph, skills | `src/components/AboutSection.tsx` |
| Work history, education | `src/components/ExperienceSection.tsx` |
| Projects by section | `src/components/ProjectsSection.tsx` (`PROJECT_GROUPS`) |
| Expertise areas | `src/components/ServicesSection.tsx` (`SERVICES`) |
| Achievements | `src/components/AchievementsSection.tsx` |
| Contact methods | `src/components/ContactSection.tsx` |
| Resume PDF | replace `public/PuneetSharma_Resume.pdf` |
| Hero video | replace `public/intro.mp4` |
| Page title, meta | `index.html` |

## Contact

- **Email:** puneet89upadhyay@gmail.com
- **LinkedIn:** [puneet-sharma17](https://www.linkedin.com/in/puneet-sharma17/)
- **GitHub:** [rockingboi](https://github.com/rockingboi)

---

Built by **Puneet Sharma** · Mathura, India
