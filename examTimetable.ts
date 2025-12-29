import { Stream } from './types';

/**
 * Central place to maintain exam dates.
 *
 * NOTE: Some dates below may be placeholders. If the official Maharashtra HSC timetable differs,
 * update the mapping here and the UI will follow automatically.
 */

// Prelims countdown (requested: 1st January)
export const PRELIMS_START_2026 = new Date('2026-01-01T00:00:00');

// Default start time used in the plan docs (adjust if your timetable differs)
const DEFAULT_PAPER_TIME = '11:00:00';

const atTime = (dateISO: string, time = DEFAULT_PAPER_TIME) => `${dateISO}T${time}`;

/**
 * Official Maharashtra HSC 2026 Timetable
 * Source: Maharashtra State Board of Secondary and Higher Secondary Education
 * 
 * Subject IDs are the ones used in `data/*.ts` (e.g. eng, eco, phy...).
 * Values are ISO strings with local time.
 */
export const HSC_2026_SUBJECT_TIMETABLE: Record<Stream, Partial<Record<string, string>>> = {
  [Stream.COMMERCE]: {
    // Morning shift 11am-2pm unless noted
    eng: atTime('2026-02-10'),           // English - 10 Feb
    hin: atTime('2026-02-11'),           // Hindi - 11 Feb
    mar: atTime('2026-02-12'),           // Marathi - 12 Feb
    san: atTime('2026-02-13'),           // Sanskrit - 13 Feb
    ocm: atTime('2026-02-14'),           // Org of Commerce & Management - 14 Feb
    sp: atTime('2026-02-17'),            // Secretarial Practice - 17 Feb
    eco: atTime('2026-02-24'),           // Economics - 24 Feb
    bk: atTime('2026-02-26'),            // Book Keeping & Accountancy - 26 Feb
  },
  [Stream.SCIENCE]: {
    // Morning shift 11am-2pm
    eng: atTime('2026-02-10'),           // English - 10 Feb
    hin: atTime('2026-02-11'),           // Hindi - 11 Feb
    mar: atTime('2026-02-12'),           // Marathi - 12 Feb
    san: atTime('2026-02-13'),           // Sanskrit - 13 Feb
    phy: atTime('2026-02-16'),           // Physics - 16 Feb
    chem: atTime('2026-02-18'),          // Chemistry - 18 Feb
    math: atTime('2026-02-21'),          // Maths & Statistics - 21 Feb
    bio: atTime('2026-02-25'),           // Biology - 25 Feb
  },
  [Stream.ARTS]: {
    // Mixed shifts
    eng: atTime('2026-02-10'),           // English - 10 Feb (Morning)
    hin: atTime('2026-02-11'),           // Hindi - 11 Feb (Morning)
    mar: atTime('2026-02-12'),           // Marathi - 12 Feb (Morning)
    san: atTime('2026-02-13'),           // Sanskrit - 13 Feb (Morning)
    logic: atTime('2026-02-16'),         // Logic - 16 Feb (Morning)
    pol: atTime('2026-02-18', '15:00:00'), // Political Science - 18 Feb (Afternoon)
    eco: atTime('2026-02-24'),           // Economics - 24 Feb (Morning)
    his: atTime('2026-03-09', '15:00:00'), // History - 9 Mar (Afternoon)
    geo: atTime('2026-03-07', '15:00:00'), // Geography - 7 Mar (Afternoon)
    soc: atTime('2026-03-11', '15:00:00'), // Sociology - 11 Mar (Afternoon)
    psy: atTime('2026-03-04', '15:00:00'), // Psychology - 4 Mar (Afternoon)
    phi: atTime('2026-02-28', '15:00:00'), // Philosophy - 28 Feb (Afternoon)
  },
};

const parseDate = (iso: string | undefined): Date | null => {
  if (!iso) return null;
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? null : date;
};

export const getSubjectBoardExamDate = (
  stream: Stream | null | undefined,
  subjectId: string
): Date | null => {
  if (!stream) return null;
  return parseDate(HSC_2026_SUBJECT_TIMETABLE[stream]?.[subjectId]);
};

export const getStreamBoardStartDate = (stream: Stream | null | undefined): Date | null => {
  if (!stream) return null;
  const dates = Object.values(HSC_2026_SUBJECT_TIMETABLE[stream] || {})
    .map(parseDate)
    .filter((d): d is Date => !!d);
  if (dates.length === 0) return null;
  return new Date(Math.min(...dates.map(d => d.getTime())));
};

export const getNextUpcomingExamDate = (
  stream: Stream | null | undefined,
  from = new Date()
): { subjectId: string; date: Date } | null => {
  if (!stream) return null;
  const entries = Object.entries(HSC_2026_SUBJECT_TIMETABLE[stream] || {})
    .map(([subjectId, iso]) => ({ subjectId, date: parseDate(iso) }))
    .filter((e): e is { subjectId: string; date: Date } => !!e.date)
    .filter(e => e.date.getTime() >= from.getTime())
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return entries[0] || null;
};
