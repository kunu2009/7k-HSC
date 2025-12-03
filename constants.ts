

import { Stream, StreamData, Question, Flashcard, Reel, LongAnswer, Subject } from './types';
import { ENGLISH_SUBJECT } from './data/english';
import { ECONOMICS_SUBJECT } from './data/economics';
import { OCM_SUBJECT } from './data/ocm';
import { SP_SUBJECT } from './data/sp';
import { BK_SUBJECT } from './data/bk';
import { HIS_SUBJECT } from './data/history';
import { POL_SUBJECT } from './data/politics';
import { SOC_SUBJECT } from './data/sociology';
import { GEO_SUBJECT } from './data/geography';
import { PSY_SUBJECT } from './data/psychology';
import { PHY_SUBJECT } from './data/physics';
import { CHEM_SUBJECT } from './data/chemistry';
import { MATH_SUBJECT } from './data/math';
import { BIO_SUBJECT } from './data/biology';
import { IT_SUBJECT } from './data/it';
import { HINDI_SUBJECT } from './data/hindi';
import { SANSKRIT_SUBJECT } from './data/sanskrit';

// --- Data Helpers ---
const REEL_COLORS = [
  'bg-gradient-to-br from-indigo-600 to-blue-600',
  'bg-gradient-to-br from-emerald-600 to-teal-600',
  'bg-gradient-to-br from-rose-600 to-red-600', 
  'bg-gradient-to-br from-purple-600 to-violet-600',
  'bg-gradient-to-br from-amber-500 to-orange-600',
  'bg-gradient-to-br from-cyan-600 to-blue-700',
  'bg-gradient-to-br from-fuchsia-600 to-pink-700',
  'bg-gradient-to-br from-lime-600 to-green-700',
  'bg-gradient-to-br from-sky-600 to-blue-500',
  'bg-gradient-to-br from-red-500 to-orange-500',
];

const getReelColor = (index: number) => REEL_COLORS[index % REEL_COLORS.length];

// ==========================================
//               LONG ANSWER DATA
// ==========================================

export const MOCK_DATA: Record<Stream, StreamData> = {
  [Stream.COMMERCE]: {
    id: Stream.COMMERCE,
    subjects: [
      ECONOMICS_SUBJECT,
      OCM_SUBJECT,
      ENGLISH_SUBJECT,
      SP_SUBJECT,
      BK_SUBJECT,
      HIS_SUBJECT,
      POL_SUBJECT,
      SOC_SUBJECT,
      GEO_SUBJECT,
      PSY_SUBJECT,
      PHY_SUBJECT,
      CHEM_SUBJECT,
      MATH_SUBJECT,
      BIO_SUBJECT,
      IT_SUBJECT
    ]
  },
  [Stream.ARTS]: {
    id: Stream.ARTS,
    subjects: [ENGLISH_SUBJECT, HIS_SUBJECT, POL_SUBJECT, SOC_SUBJECT, GEO_SUBJECT, PSY_SUBJECT, ECONOMICS_SUBJECT, HINDI_SUBJECT, SANSKRIT_SUBJECT]
  },
  [Stream.SCIENCE]: {
    id: Stream.SCIENCE,
    subjects: [ENGLISH_SUBJECT, PHY_SUBJECT, CHEM_SUBJECT, MATH_SUBJECT, BIO_SUBJECT, IT_SUBJECT]
  }
};
