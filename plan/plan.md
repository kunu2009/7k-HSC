# 📋 7k HSC - Master Development Plan

## 🎯 Project Overview

**Project Name:** 7k HSC (7000 - HSC Board Preparation App)  
**Target Audience:** Maharashtra HSC Board Students (Class 12)  
**Streams Covered:** Commerce, Science, Arts  
**Goal:** Enable any student to score 90%+ and top the HSC Board exam using ONLY this app

---

## 🏗️ Architecture Plan

### Current Tech Stack
```
Frontend: React + TypeScript + Vite
Styling: Tailwind CSS
AI: Google Gemini API
State: React useState/useEffect
Data: Static constants (MOCK_DATA)
```

### Planned Tech Stack
```
Frontend: React + TypeScript + Vite
Styling: Tailwind CSS + Framer Motion
AI: Google Gemini 2.5 Flash
Backend: Supabase (Auth + Database + Storage)
State: Zustand / React Context
Analytics: Mixpanel / PostHog
Push: Firebase Cloud Messaging
Offline: Service Workers + IndexedDB
```

---

## 📱 App Structure Plan

### Navigation Flow
```
┌─────────────────────────────────────────────────────────┐
│                    STREAM SELECT                        │
│              [Commerce] [Science] [Arts]                │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│                    DASHBOARD                            │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │Countdown│ │Subjects │ │Progress │ │AI Tutor │       │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│                 SUBJECT DETAIL                          │
│  [Syllabus] [Paper Pattern] [Chapters] [Papers]        │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│                 CHAPTER DETAIL                          │
│  [Summary] [Notes] [Flashcards] [MCQs] [Reels] [8M]    │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│                   STUDY MODE                            │
│           Interactive Learning Experience               │
└─────────────────────────────────────────────────────────┘
```

---

## 📊 Database Schema Plan

### Users Table
```sql
users {
  id: uuid PRIMARY KEY
  email: string UNIQUE
  name: string
  stream: enum('Commerce', 'Science', 'Arts')
  created_at: timestamp
  prelims_date: date
  board_date: date
  target_percentage: integer
}
```

### Progress Table
```sql
progress {
  id: uuid PRIMARY KEY
  user_id: uuid REFERENCES users
  subject_id: string
  chapter_id: string
  content_type: enum('summary', 'notes', 'flashcards', 'mcq', 'reels', 'long_answer')
  completed: boolean
  score: integer
  time_spent: integer (seconds)
  last_accessed: timestamp
}
```

### Flashcard Progress (SRS)
```sql
flashcard_progress {
  id: uuid PRIMARY KEY
  user_id: uuid REFERENCES users
  flashcard_id: string
  ease_factor: float DEFAULT 2.5
  interval: integer DEFAULT 1
  repetitions: integer DEFAULT 0
  next_review: timestamp
  last_review: timestamp
}
```

### Study Sessions
```sql
study_sessions {
  id: uuid PRIMARY KEY
  user_id: uuid REFERENCES users
  subject_id: string
  chapter_id: string
  start_time: timestamp
  end_time: timestamp
  mode: string
  score: integer
}
```

---

## 🎨 UI/UX Plan

### Design Principles
1. **Minimalist**: Clean, distraction-free interface
2. **Accessible**: Large touch targets, readable fonts
3. **Motivating**: Progress indicators, achievements
4. **Fast**: Instant feedback, no waiting
5. **Offline-first**: Works without internet

### Color Scheme
```css
/* Light Mode */
--primary: #4F46E5 (Indigo)
--secondary: #10B981 (Emerald)
--background: #F8FAFC (Slate-50)
--surface: #FFFFFF
--text: #1E293B (Slate-800)

/* Dark Mode */
--primary: #818CF8 (Indigo-400)
--secondary: #34D399 (Emerald-400)
--background: #0F172A (Slate-950)
--surface: #1E293B (Slate-800)
--text: #F1F5F9 (Slate-100)
```

### Typography
```css
--font-primary: 'Inter', sans-serif
--font-display: 'Plus Jakarta Sans', sans-serif
--font-mono: 'JetBrains Mono', monospace
```

---

## 🔧 Feature Implementation Plan

### Priority 1: Must Have (MVP)
| Feature | Status | Complexity | Impact |
|:--------|:------:|:----------:|:------:|
| Stream Selection | ✅ Done | Low | High |
| Subject Navigation | ✅ Done | Low | High |
| Chapter Content | ✅ Done | Medium | High |
| Flashcards | ✅ Done | Medium | High |
| MCQ Quiz | ✅ Done | Medium | High |
| Reels (Quick Facts) | ✅ Done | Medium | Medium |
| Long Answers (8M) | ✅ Done | Medium | High |
| AI Doubt Solver | ✅ Done | High | High |
| Dark Mode | ✅ Done | Low | Medium |
| **Countdown Timer** | 🔲 TODO | Low | High |
| **Progress Tracking** | 🔲 TODO | Medium | High |

### Priority 2: Should Have
| Feature | Status | Complexity | Impact |
|:--------|:------:|:----------:|:------:|
| User Authentication | 🔲 TODO | Medium | High |
| Spaced Repetition | 🔲 TODO | High | Very High |
| Practice Tests | 🔲 TODO | High | Very High |
| Study Planner | 🔲 TODO | High | High |
| Previous Papers | 🔲 TODO | Medium | High |
| Offline Mode | 🔲 TODO | High | Medium |

### Priority 3: Nice to Have
| Feature | Status | Complexity | Impact |
|:--------|:------:|:----------:|:------:|
| Leaderboards | 🔲 TODO | Medium | Medium |
| Study Groups | 🔲 TODO | High | Medium |
| Voice Notes | 🔲 TODO | Medium | Low |
| Video Lessons | 🔲 TODO | High | High |
| Parent Dashboard | 🔲 TODO | Medium | Medium |

---

## 📈 Content Plan

### Per Subject Requirements
```
✓ Complete Syllabus Coverage
✓ Paper Pattern Understanding
✓ Chapter-wise:
  - Summary (Quick Review)
  - Detailed Notes (Deep Dive)
  - 20+ Flashcards (Active Recall)
  - 15+ MCQs (Self-Assessment)
  - 10+ Reels (Micro-Learning)
  - 5+ Long Answers (Board Prep)
  - Diagrams/Charts
  - Important Definitions
  - Formulas (if applicable)
  - Previous Year Questions
```

### Content Creation Workflow
```
1. Syllabus Analysis → Identify all topics
2. Reference Material → NCERT, State Board, Guides
3. Content Writing → Summary, Notes, Q&A
4. Flashcard Creation → Key concepts
5. MCQ Development → With explanations
6. Reel Scripting → Quick facts
7. Long Answer Formatting → 8-marker style
8. Review & Validation → Teacher verification
9. App Integration → constants.ts update
10. Testing → User feedback
```

---

## 🔐 Security Plan

### Data Protection
- [ ] HTTPS everywhere
- [ ] Encrypted user data
- [ ] Secure API keys (environment variables)
- [ ] Input sanitization
- [ ] Rate limiting on AI calls

### Privacy
- [ ] Minimal data collection
- [ ] Clear privacy policy
- [ ] Data export option
- [ ] Account deletion option
- [ ] GDPR/DPDP compliance

---

## 📦 Deployment Plan

### Environments
```
Development: localhost:5173
Staging: staging.7khsc.app
Production: app.7khsc.app
```

### CI/CD Pipeline
```
Push to main → GitHub Actions → Build → Test → Deploy to Vercel
```

### Monitoring
- Error tracking: Sentry
- Analytics: Mixpanel
- Performance: Vercel Analytics
- Uptime: BetterUptime

---

## 💰 Resource Plan

### Team Requirements
| Role | Count | Responsibility |
|:-----|:-----:|:---------------|
| Frontend Dev | 1 | App development |
| Content Writer | 2 | Subject content |
| UI Designer | 1 | Visual design |
| QA Tester | 1 | Testing |
| Subject Expert | 3 | Content review |

### Budget Estimate
| Item | Monthly Cost |
|:-----|-------------:|
| Supabase | $25 |
| Gemini API | $50 |
| Vercel Pro | $20 |
| Domain | $2 |
| Monitoring | $10 |
| **Total** | **~$107/month** |

---

## 📝 Documentation Plan

- [ ] README.md (Setup guide)
- [ ] API documentation
- [ ] Component library docs
- [ ] Content guidelines
- [ ] Contributing guide
- [ ] User guide/FAQ

---

## ✅ Quality Assurance Plan

### Testing Strategy
1. **Unit Tests**: Component logic
2. **Integration Tests**: User flows
3. **E2E Tests**: Critical paths
4. **Manual Testing**: UX review
5. **Beta Testing**: Real students

### Code Quality
- ESLint + Prettier
- TypeScript strict mode
- Code reviews
- Git branching strategy

---

## 🚨 Risk Management

| Risk | Probability | Impact | Mitigation |
|:-----|:-----------:|:------:|:-----------|
| Content delays | High | High | Parallel content creation |
| API costs spike | Medium | Medium | Caching, rate limits |
| Server downtime | Low | High | Multiple backups |
| Security breach | Low | Very High | Regular audits |
| User adoption | Medium | High | Marketing, feedback loops |

---

## 📞 Contact & Support

- **Email**: support@7khsc.app
- **Discord**: discord.gg/7khsc
- **GitHub**: github.com/kunu2009/7k-HSC

---

*Document Version: 1.0*  
*Last Updated: November 29, 2025*
