# 📋 Remaining Work / Gap List

This file tracks what's **left to do** or improve in the 7k HSC app. Each section notes current state, what's missing, and suggested next steps.

---

## 0. UI/UX Enhancements (Updated - Feb 16, 2026)

### ✅ Completed (Session 1)
- **CountdownTimer**: Smart date handling - hides prelims (past), shows "in progress" during boards, completion after
- **SubjectCountdown**: Shows "Exam Complete" for past exams, alert for today's exam  
- **SubjectStudyTools**: Subject-specific tools now appear within each subject's detail page
- **Dashboard Cleanup**: Reduced from 40+ tools to ~16 essential universal tools

### ✅ Completed (Session 2 - Feb 16, 2026)
- **ExamDayBanner**: New component showing today's exam prominently with tips, or next upcoming exam
- **Last24HoursRevision**: New exam-day quick revision tool with overview, key flashcards, must-know points
- **DailyMotivation**: New component for daily study motivation and streak encouragement
- **Subject Detail Enhancement**: Shows "Last 24 Hours" button when exam is within 3 days
- **Animation**: Added pulse-slow animation for exam alerts

### 🔲 Remaining UI Tasks
1. Add DailyMotivation to dashboard (component created but not yet integrated)
2. Consider adding exam-specific tips per subject
3. Add notification reminders for exams (requires PWA push notifications)

---

## 1. Content Completion (HIGH PRIORITY)

| Subject      | File           | Size  | Status                |
|--------------|----------------|-------|-----------------------|
| Sanskrit     | `sanskrit.ts`  | 446KB | ✅ Comprehensive       |
| English      | `english.ts`   | 356KB | ✅ Good coverage       |
| Economics    | `economics.ts` | 245KB | ✅ Good                |
| History      | `history.ts`   | 256KB | ✅ Good                |
| Sociology    | `sociology.ts` | 191KB | ✅ Okay                |
| Hindi        | `hindi.ts`     | 127KB | 🟡 Needs more          |
| OCM          | `ocm.ts`       | 122KB | 🟡 Okay                |
| Politics     | `politics.ts`  | 122KB | 🟡 Okay                |
| SP           | `sp.ts`        | 87KB  | 🟡 Needs more chapters |
| BK           | `bk.ts`        | 75KB  | 🟡 Needs more          |
| Geography    | `geography.ts` | 55KB  | 🟡 Incomplete          |
| Biology      | `biology.ts`   | 39KB  | ⚠️ Very short          |
| Psychology   | `psychology.ts`| 34KB  | ⚠️ Very short          |
| IT           | `it.ts`        | 30KB  | ⚠️ Short               |
| Chemistry    | `chemistry.ts` | 24KB  | ⚠️ Very short          |
| Physics      | `physics.ts`   | 24KB  | ⚠️ Very short          |
| Math         | `math.ts`      | 22KB  | ⚠️ Very short          |

**Suggested approach:**
1. Start with Science subjects (Physics, Chemistry, Math, Biology) since they have the least content.
2. Add 30+ flashcards, 30+ MCQs, reels, and 8-marker long answers per chapter.
3. Populate `detailedNotes` and `summary` fields with rich Markdown.

---

## 2. Previous Year Papers (MEDIUM PRIORITY)

Most subjects have `previousPapers: []` empty. Components already exist to display them (`PreviousYearQuestions.tsx`).

**What's needed:**
- Collect PDF links or host papers in `/public/papers/`
- Populate `previousPapers` array in each subject's data file, e.g.:
  ```ts
  previousPapers: [
    { year: '2024', title: 'HSC Feb 2024', link: '/papers/eco-2024.pdf' },
    { year: '2023', title: 'HSC Feb 2023', link: '/papers/eco-2023.pdf' },
  ],
  ```
- Wire up the UI to show/download them.

---

## 3. Offline Mode (MEDIUM PRIORITY)

A basic service worker exists at `public/sw.js` (caches index.html and core assets).

**What's missing for "full offline":**
- Pre-cache the built JS/CSS bundle on install (currently only static assets listed).
- Add an "Install / Add to Home Screen" prompt.
- Show a clear offline indicator in the UI.
- Consider caching AI responses (or gracefully degrade when offline).

**Suggested improvements:**
1. Use Workbox or Vite PWA plugin for easier asset versioning.
2. Add a manifest.json with icons for proper PWA experience.
3. Display banner when network is unavailable.

---

## 4. Push/Local Notifications (LOW PRIORITY / FUTURE)

Planned in `plan/features.md` but not yet implemented.

**What's needed:**
- Browser Notification API permission prompt.
- Local scheduled reminders (study streak, SRS due cards, daily reminder).
- Optional: integrate Firebase Cloud Messaging for push when backend is added later.

---

## 5. User Auth / Cloud Sync (FUTURE)

Currently all progress is in `localStorage` (great for offline-first).

**Future work:**
- Optional signup (email/Google) via Supabase or Firebase.
- Sync progress and settings across devices.
- Export/import JSON backup.

---

## 6. Build / Tooling Notes

- Node engine warning: Vite tooling expects Node ≥20.19 or ≥22.12. Current dev machine has 20.11.
- `npm audit` shows 1 high-severity vulnerability; run `npm audit fix` or update deps.

---

*Last updated: Dec 14, 2025*