import { Subject } from '../types';
import { getReelColor } from './helpers';

export const SANSKRIT_SUBJECT: Subject = {
  id: 'san',
  name: 'Sanskrit',
  icon: 'ScrollText',
  color: 'bg-amber-600',
  syllabus: `### संस्कृत आल्हाद (Sanskrit Alhad) - Maharashtra HSC

**पाँच मंडल (Five Sections):**

| मंडल | विषय | Exam Marks |
|------|------|------------|
| प्रथम | सुगम संस्कृतम् (Functional) | 6 |
| द्वितीय | पद्यम् (Poetry) | 12 |
| तृतीय | गद्यम् (Prose) | 9 |
| चतुर्थ | साहित्य परिचय (Literature) | 6 |
| पंचम | नाट्यकलशः (Drama) | 8 |

**Additional Sections:**
- व्याकरणम् (Grammar): 12 marks
- लेखन कौशलम् (Writing): 16 marks  
- अपठितम् (Unseen): 4 marks

**Total: 80 Marks**`,

  paperPattern: `### Sanskrit Alhad Paper Pattern (80 Marks)

| Section | Topic | Marks |
|---------|-------|-------|
| **I** | सुगम संस्कृतम् (Functional Sanskrit) | 6 |
| **II** | पद्यम् (Poetry - 2 passages) | 12 |
| **III** | गद्यम् (Prose - 3 chapters) | 9 |
| **IV** | नाट्यकलशः (Drama) | 8 |
| **V** | साहित्य परिचय (Literature/Culture) | 6 |
| **VI** | लेखन कौशलम् (Composition) | 16 |
| **VII** | भाषाभ्यासः (Grammar) | 12 |
| **VIII** | अपठितम् (Unseen/Translation) | 4 |
| | **कुल योग (Total)** | **80** |

### Section-wise Breakdown:

**I. सुगम संस्कृतम् (6 marks)**
- व्यावहारिक सूचना (3 marks) - Write Sanskrit sentences for 3 pictures
- शब्द स्तम्भकः (3 marks) - Classify 8 words into columns (0.5 each)

**II. पद्यम् (12 marks)**
- 2 Poetry passages × 6 marks each
- अवबोधन (Comprehension), अन्वय पूर्ति OR सरलार्थ (4 marks)

**III. गद्यम् (9 marks)**
- Passage comprehension + माध्यम भाषा answer (4-5 marks)
- Source identification (1 mark)

**VII. व्याकरणम् (12 marks)**
- नामतालिका (3 marks) - Declension tables
- समासतालिका (3 marks) - Compound tables
- कृदन्त-तद्धितान्त (3 marks) - Classification
- परिवर्तनम् (3 marks) - Transformations`,

  previousPapers: [
    { year: '2025', title: 'HSC Sanskrit Alhad Feb 2025', link: '/papers/sanskrit-2025.pdf' },
    { year: '2024', title: 'HSC Sanskrit Alhad Feb 2024', link: '/papers/sanskrit-2024.pdf' },
    { year: '2023', title: 'HSC Sanskrit Alhad Feb 2023', link: '/papers/sanskrit-2023.pdf' },
    { year: '2022', title: 'HSC Sanskrit Alhad Feb 2022', link: '/papers/sanskrit-2022.pdf' },
    { year: '2021', title: 'HSC Sanskrit Alhad Feb 2021', link: '/papers/sanskrit-2021.pdf' }
  ],
  
  chapters: [
    // ═══════════════════════════════════════════════════════════════
    // प्रथम मंडलम्: सुगम संस्कृतम् (Functional Sanskrit) - 6 Marks
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'san1',
      title: '1. सुगम संस्कृतम् (Functional Sanskrit)',
      description: 'व्यावहारिक सूचना और शब्द स्तम्भकः - Practical Sanskrit for 6 easy marks',
      
      summary: `### सुगम संस्कृतम् - Quick Overview

**परीक्षा में अंक: 6 Marks (Easy scoring!)**

**दो भाग:**
1. **व्यावहारिक सूचना (3 marks)** - 3 चित्र देखकर संस्कृत वाक्य लिखो
2. **शब्द स्तम्भकः (3 marks)** - 8 शब्दों को वर्गीकृत करो (0.5 × 6)

**Key Categories for शब्द स्तम्भकः:**
- नाट्यम् (Drama): नटी, भाव, अभिनय, रंगमंच
- वाद्यम् (Instruments): वीणा, मृदङ्गम्, जलतरंगम्, तबला
- कला (Art): चित्रम्, मूर्ति, शिल्पम्, रंगोली

**Essential Verbs for व्यावहारिक सूचना:**
| Sanskrit | Transliteration | Meaning |
|----------|----------------|---------|
| गच्छति | gacchati | goes |
| पठति | paṭhati | reads |
| लिखति | likhati | writes |
| खादति | khādati | eats |
| पिबति | pibati | drinks |
| पश्यति | paśyati | sees |
| वदति | vadati | speaks |
| क्रीडति | krīḍati | plays |`,

      detailedNotes: `### सुगम संस्कृतम् - Detailed Study Notes

## Part 1: व्यावहारिक सूचना (Vyāvahārika Sūchanā) - 3 Marks

### What You Need To Do:
You will see **3 pictures/situations** and must write **Sanskrit sentences** describing them.

### Essential Vocabulary with Translations:

#### Common Verbs (क्रियापद):
| Sanskrit | IAST | Hindi | English |
|----------|------|-------|---------|
| गच्छति | gacchati | जाता है | goes |
| आगच्छति | āgacchati | आता है | comes |
| पठति | paṭhati | पढ़ता है | reads |
| लिखति | likhati | लिखता है | writes |
| खादति | khādati | खाता है | eats |
| पिबति | pibati | पीता है | drinks |
| पश्यति | paśyati | देखता है | sees |
| शृणोति | śṛṇoti | सुनता है | hears |
| वदति | vadati | बोलता है | speaks |
| हसति | hasati | हँसता है | laughs |
| रोदिति | roditi | रोता है | cries |
| धावति | dhāvati | दौड़ता है | runs |
| क्रीडति | krīḍati | खेलता है | plays |
| नृत्यति | nṛtyati | नाचता है | dances |
| गायति | gāyati | गाता है | sings |

#### Common Nouns (संज्ञा):
| Sanskrit | IAST | Hindi | English |
|----------|------|-------|---------|
| बालकः | bālakaḥ | लड़का | boy |
| बालिका | bālikā | लड़की | girl |
| छात्रः | chātraḥ | छात्र | student (m) |
| छात्रा | chātrā | छात्रा | student (f) |
| शिक्षकः | śikṣakaḥ | शिक्षक | teacher (m) |
| शिक्षिका | śikṣikā | शिक्षिका | teacher (f) |
| पुस्तकम् | pustakam | पुस्तक | book |
| गृहम् | gṛham | घर | house |
| विद्यालयः | vidyālayaḥ | विद्यालय | school |

### Sample Sentences:
1. **बालकः पुस्तकं पठति।** (Bālakaḥ pustakaṃ paṭhati) = The boy reads a book.
2. **बालिका जलं पिबति।** (Bālikā jalaṃ pibati) = The girl drinks water.
3. **छात्राः विद्यालयं गच्छन्ति।** (Chātrāḥ vidyālayaṃ gacchanti) = Students go to school.

---

## Part 2: शब्द स्तम्भकः (Śabda Stambhakaḥ) - 3 Marks

### Task: Classify 8 given words into correct columns

### Common Categories:

#### नाट्यम् (Drama/Theatre):
| Word | Transliteration | Meaning |
|------|----------------|---------|
| नटः | naṭaḥ | actor |
| नटी | naṭī | actress |
| अभिनयः | abhinayaḥ | acting |
| भावः | bhāvaḥ | emotion |
| रसः | rasaḥ | aesthetic sentiment |
| रंगमंचः | raṅgamañcaḥ | stage |
| पर्दा | pardā | curtain |
| नाटकम् | nāṭakam | play/drama |

#### वाद्यम् (Musical Instruments):
| Word | Transliteration | Meaning |
|------|----------------|---------|
| वीणा | vīṇā | veena |
| मृदङ्गम् | mṛdaṅgam | mridangam |
| तबला | tablā | tabla |
| सितारः | sitāraḥ | sitar |
| बांसुरी | bāṃsurī | flute |
| जलतरंगम् | jalataraṅgam | jaltarang |
| ढोलकः | ḍholakaḥ | dholak |
| हारमोनियम् | hārmoniyam | harmonium |

#### कला (Art):
| Word | Transliteration | Meaning |
|------|----------------|---------|
| चित्रम् | citram | painting |
| मूर्तिः | mūrtiḥ | sculpture |
| शिल्पम् | śilpam | craft |
| रंगोली | raṅgolī | rangoli |
| कलाकारः | kalākāraḥ | artist |

### Exam Tip:
Each correct classification = 0.5 marks. Total 6 words to classify = 3 marks.
Read all words first, then classify carefully!`,

      flashcards: [
        // Basic Verbs (1-10)
        { id: 'sf1', front: 'गच्छति (gacchati) का अर्थ?', back: '**जाता है / goes**\n\nधातु: गम् (gam)\nलकार: लट् (Present)\n\nExample: बालकः विद्यालयं गच्छति।\n(The boy goes to school)' },
        { id: 'sf2', front: 'पठति (paṭhati) का अर्थ?', back: '**पढ़ता है / reads**\n\nधातु: पठ् (paṭh)\nलकार: लट् (Present)\n\nExample: छात्रः पुस्तकं पठति।\n(The student reads a book)' },
        { id: 'sf3', front: 'लिखति (likhati) का अर्थ?', back: '**लिखता है / writes**\n\nधातु: लिख् (likh)\nलकार: लट् (Present)\n\nExample: बालिका पत्रं लिखति।\n(The girl writes a letter)' },
        { id: 'sf4', front: 'खादति (khādati) का अर्थ?', back: '**खाता है / eats**\n\nधातु: खाद् (khād)\nलकार: लट् (Present)\n\nExample: शिशुः फलं खादति।\n(The child eats fruit)' },
        { id: 'sf5', front: 'पिबति (pibati) का अर्थ?', back: '**पीता है / drinks**\n\nधातु: पा (pā)\nलकार: लट् (Present)\n\nExample: गजः जलं पिबति।\n(The elephant drinks water)' },
        { id: 'sf6', front: 'पश्यति (paśyati) का अर्थ?', back: '**देखता है / sees**\n\nधातु: दृश् (dṛś)\nलकार: लट् (Present)\n\nExample: नरः चित्रं पश्यति।\n(The man sees the picture)' },
        { id: 'sf7', front: 'वदति (vadati) का अर्थ?', back: '**बोलता है / speaks**\n\nधातु: वद् (vad)\nलकार: लट् (Present)\n\nExample: गुरुः सत्यं वदति।\n(The teacher speaks truth)' },
        { id: 'sf8', front: 'शृणोति (śṛṇoti) का अर्थ?', back: '**सुनता है / hears**\n\nधातु: श्रु (śru)\nलकार: लट् (Present)\n\nExample: छात्रः कथां शृणोति।\n(The student hears the story)' },
        { id: 'sf9', front: 'क्रीडति (krīḍati) का अर्थ?', back: '**खेलता है / plays**\n\nधातु: क्रीड् (krīḍ)\nलकार: लट् (Present)\n\nExample: बालकाः क्रीडाङ्गणे क्रीडन्ति।\n(Boys play in the playground)' },
        { id: 'sf10', front: 'नृत्यति (nṛtyati) का अर्थ?', back: '**नाचता है / dances**\n\nधातु: नृत् (nṛt)\nलकार: लट् (Present)\n\nExample: नर्तकी सुन्दरं नृत्यति।\n(The dancer dances beautifully)' },
        
        // More Verbs (11-15)
        { id: 'sf11', front: 'गायति (gāyati) का अर्थ?', back: '**गाता है / sings**\n\nधातु: गै (gai)\nलकार: लट् (Present)\n\nExample: गायकः गीतं गायति।\n(The singer sings a song)' },
        { id: 'sf12', front: 'धावति (dhāvati) का अर्थ?', back: '**दौड़ता है / runs**\n\nधातु: धाव् (dhāv)\nलकार: लट् (Present)\n\nExample: अश्वः क्षेत्रे धावति।\n(The horse runs in the field)' },
        { id: 'sf13', front: 'तिष्ठति (tiṣṭhati) का अर्थ?', back: '**खड़ा है / stands**\n\nधातु: स्था (sthā)\nलकार: लट् (Present)\n\nExample: वृक्षः उद्याने तिष्ठति।\n(The tree stands in the garden)' },
        { id: 'sf14', front: 'उपविशति (upaviśati) का अर्थ?', back: '**बैठता है / sits**\n\nधातु: उप + विश् (upa+viś)\nलकार: लट् (Present)\n\nExample: छात्रः आसने उपविशति।\n(The student sits on the seat)' },
        { id: 'sf15', front: 'आगच्छति (āgacchati) का अर्थ?', back: '**आता है / comes**\n\nधातु: आ + गम् (ā+gam)\nलकार: लट् (Present)\n\nExample: अतिथिः गृहम् आगच्छति।\n(The guest comes home)' },
        
        // Nouns (16-22)
        { id: 'sf16', front: 'बालकः (bālakaḥ) का अर्थ और लिंग?', back: '**लड़का / boy**\n\nलिंग: पुल्लिंग (Masculine)\nविभक्ति: प्रथमा एकवचन\n\nबहुवचन: बालकाः (boys)' },
        { id: 'sf17', front: 'बालिका (bālikā) का अर्थ और लिंग?', back: '**लड़की / girl**\n\nलिंग: स्त्रीलिंग (Feminine)\nविभक्ति: प्रथमा एकवचन\n\nबहुवचन: बालिकाः (girls)' },
        { id: 'sf18', front: 'पुस्तकम् (pustakam) का अर्थ और लिंग?', back: '**पुस्तक / book**\n\nलिंग: नपुंसकलिंग (Neuter)\nविभक्ति: प्रथमा एकवचन\n\nबहुवचन: पुस्तकानि (books)' },
        { id: 'sf19', front: 'विद्यालयः (vidyālayaḥ) का अर्थ?', back: '**विद्यालय / school**\n\nसंधि विच्छेद: विद्या + आलयः\nविद्या = knowledge, आलयः = house\n\nलिंग: पुल्लिंग' },
        { id: 'sf20', front: 'गृहम् (gṛham) का अर्थ?', back: '**घर / house/home**\n\nलिंग: नपुंसकलिंग (Neuter)\nविभक्ति: प्रथमा एकवचन\n\nसमानार्थक: निकेतनम्, भवनम्, सदनम्' },
        { id: 'sf21', front: 'जलम् (jalam) का अर्थ?', back: '**पानी / water**\n\nलिंग: नपुंसकलिंग (Neuter)\n\nसमानार्थक शब्द:\nअम्भः, वारि, नीरम्, तोयम्, उदकम्' },
        { id: 'sf22', front: 'फलम् (phalam) का अर्थ?', back: '**फल / fruit**\n\nलिंग: नपुंसकलिंग (Neuter)\n\nExample: वृक्षे फलानि सन्ति।\n(There are fruits on the tree)' },
        
        // शब्द स्तम्भकः Categories (23-30)
        { id: 'sf23', front: 'नाट्यम् (nāṭyam) में कौन से शब्द आते हैं?', back: '**नाट्य = Drama/Theatre**\n\nRelated words:\n• नटः (actor)\n• नटी (actress)\n• अभिनयः (acting)\n• भावः (emotion)\n• रसः (rasa/sentiment)\n• रंगमंचः (stage)\n• नाटकम् (play)' },
        { id: 'sf24', front: 'वाद्यम् (vādyam) में कौन से शब्द आते हैं?', back: '**वाद्य = Musical Instruments**\n\nRelated words:\n• वीणा (veena)\n• मृदङ्गम् (mridangam)\n• तबला (tabla)\n• सितारः (sitar)\n• बांसुरी (flute)\n• जलतरंगम् (jaltarang)\n• ढोलकः (dholak)' },
        { id: 'sf25', front: 'कला (kalā) में कौन से शब्द आते हैं?', back: '**कला = Art**\n\nRelated words:\n• चित्रम् (painting)\n• मूर्तिः (sculpture)\n• शिल्पम् (craft)\n• रंगोली (rangoli)\n• कलाकारः (artist)\n• चित्रकारः (painter)' },
        { id: 'sf26', front: 'व्यावहारिक सूचना में कितने अंक?', back: '**3 अंक (3 Marks)**\n\nTask: 3 चित्र देखकर संस्कृत में वाक्य लिखो\n\nTip: Simple present tense sentences\nSubject + Object + Verb structure' },
        { id: 'sf27', front: 'शब्द स्तम्भकः में कितने अंक?', back: '**3 अंक (3 Marks)**\n\nTask: 8 शब्दों में से 6 को वर्गीकृत करो\n\nMarking: 0.5 × 6 = 3 marks\n\nCategories: नाट्यम्, वाद्यम्, कला etc.' },
        { id: 'sf28', front: '"अहं गच्छामि" का अर्थ?', back: '**मैं जाता/जाती हूँ / I go**\n\nअहम् = I (First person)\nगच्छामि = go (First person singular)\n\nप्रथम पुरुष एकवचन' },
        { id: 'sf29', front: '"वयं पठामः" का अर्थ?', back: '**हम पढ़ते हैं / We read**\n\nवयम् = We (First person plural)\nपठामः = read (First person plural)\n\nप्रथम पुरुष बहुवचन' },
        { id: 'sf30', front: '"ते क्रीडन्ति" का अर्थ?', back: '**वे खेलते हैं / They play**\n\nते = They (Third person plural)\nक्रीडन्ति = play (Third person plural)\n\nप्रथम पुरुष बहुवचन (परस्मैपद)' }
      ],

      mcqs: [
        // Verb meanings (1-10)
        { id: 'sm1', question: '"गच्छति" (gacchati) का अर्थ क्या है?', options: ['खाता है', 'जाता है', 'पढ़ता है', 'लिखता है'], correctIndex: 1, explanation: 'गच्छति = जाता है (goes)। धातु: गम् (to go)। Example: बालकः विद्यालयं गच्छति।' },
        { id: 'sm2', question: '"पठति" (paṭhati) का अर्थ क्या है?', options: ['लिखता है', 'खेलता है', 'पढ़ता है', 'गाता है'], correctIndex: 2, explanation: 'पठति = पढ़ता है (reads)। धातु: पठ् (to read)। Example: छात्रः पाठं पठति।' },
        { id: 'sm3', question: '"पिबति" (pibati) का अर्थ क्या है?', options: ['खाता है', 'पीता है', 'देखता है', 'सुनता है'], correctIndex: 1, explanation: 'पिबति = पीता है (drinks)। धातु: पा (to drink)। Example: शिशुः दुग्धं पिबति।' },
        { id: 'sm4', question: '"पश्यति" (paśyati) का अर्थ क्या है?', options: ['सुनता है', 'बोलता है', 'देखता है', 'जाता है'], correctIndex: 2, explanation: 'पश्यति = देखता है (sees)। धातु: दृश् (to see)। Example: बालिका चित्रं पश्यति।' },
        { id: 'sm5', question: '"शृणोति" (śṛṇoti) का अर्थ क्या है?', options: ['बोलता है', 'सुनता है', 'गाता है', 'नाचता है'], correctIndex: 1, explanation: 'शृणोति = सुनता है (hears)। धातु: श्रु (to hear)। Example: छात्रः गीतं शृणोति।' },
        { id: 'sm6', question: '"वदति" (vadati) का अर्थ क्या है?', options: ['चलता है', 'बोलता है', 'खाता है', 'सोता है'], correctIndex: 1, explanation: 'वदति = बोलता है (speaks)। धातु: वद् (to speak)। Example: गुरुः सत्यं वदति।' },
        { id: 'sm7', question: '"क्रीडति" (krīḍati) का अर्थ क्या है?', options: ['पढ़ता है', 'खेलता है', 'दौड़ता है', 'कूदता है'], correctIndex: 1, explanation: 'क्रीडति = खेलता है (plays)। धातु: क्रीड् (to play)। Example: बालकाः क्रीडन्ति।' },
        { id: 'sm8', question: '"नृत्यति" (nṛtyati) का अर्थ क्या है?', options: ['गाता है', 'नाचता है', 'बजाता है', 'हँसता है'], correctIndex: 1, explanation: 'नृत्यति = नाचता है (dances)। धातु: नृत् (to dance)। Example: नर्तकी नृत्यति।' },
        { id: 'sm9', question: '"गायति" (gāyati) का अर्थ क्या है?', options: ['नाचता है', 'रोता है', 'गाता है', 'हँसता है'], correctIndex: 2, explanation: 'गायति = गाता है (sings)। धातु: गै (to sing)। Example: गायकः गीतं गायति।' },
        { id: 'sm10', question: '"धावति" (dhāvati) का अर्थ क्या है?', options: ['चलता है', 'दौड़ता है', 'कूदता है', 'गिरता है'], correctIndex: 1, explanation: 'धावति = दौड़ता है (runs)। धातु: धाव् (to run)। Example: मृगः वने धावति।' },
        
        // Noun meanings (11-15)
        { id: 'sm11', question: '"बालकः" (bālakaḥ) का लिंग क्या है?', options: ['स्त्रीलिंग', 'पुल्लिंग', 'नपुंसकलिंग', 'उभयलिंग'], correctIndex: 1, explanation: 'बालकः = लड़का (boy)। यह पुल्लिंग (masculine) शब्द है। अकारान्त पुल्लिंग।' },
        { id: 'sm12', question: '"पुस्तकम्" (pustakam) का लिंग क्या है?', options: ['पुल्लिंग', 'स्त्रीलिंग', 'नपुंसकलिंग', 'उभयलिंग'], correctIndex: 2, explanation: 'पुस्तकम् = पुस्तक (book)। यह नपुंसकलिंग (neuter) शब्द है।' },
        { id: 'sm13', question: '"जलम्" का समानार्थक शब्द कौन सा है?', options: ['अग्निः', 'वायुः', 'नीरम्', 'भूमिः'], correctIndex: 2, explanation: 'जलम् के समानार्थक: नीरम्, वारि, अम्भः, तोयम्, उदकम् - सभी का अर्थ "पानी" है।' },
        { id: 'sm14', question: '"विद्यालयः" का संधि विच्छेद क्या है?', options: ['विद्या + आलयः', 'विद्य + आलयः', 'विद्या + लयः', 'वि + द्यालयः'], correctIndex: 0, explanation: 'विद्यालयः = विद्या + आलयः (दीर्घ संधि: आ + आ = आ)। विद्या = ज्ञान, आलयः = घर।' },
        { id: 'sm15', question: '"गृहम्" का अर्थ क्या है?', options: ['बगीचा', 'घर', 'मंदिर', 'विद्यालय'], correctIndex: 1, explanation: 'गृहम् = घर (house/home)। नपुंसकलिंग शब्द। समानार्थक: निकेतनम्, भवनम्, सदनम्।' },
        
        // शब्द स्तम्भकः (16-22)
        { id: 'sm16', question: '"वीणा" किस श्रेणी में आती है?', options: ['नाट्यम्', 'वाद्यम्', 'कला', 'साहित्य'], correctIndex: 1, explanation: 'वीणा एक वाद्य (musical instrument) है। अन्य वाद्य: मृदङ्गम्, तबला, सितार, बांसुरी।' },
        { id: 'sm17', question: '"नटी" किस श्रेणी में आती है?', options: ['वाद्यम्', 'कला', 'नाट्यम्', 'खेल'], correctIndex: 2, explanation: 'नटी = actress। यह नाट्य (drama) श्रेणी में आती है। नटः = actor।' },
        { id: 'sm18', question: '"चित्रम्" किस श्रेणी में आता है?', options: ['नाट्यम्', 'वाद्यम्', 'कला', 'क्रीडा'], correctIndex: 2, explanation: 'चित्रम् = painting/picture। यह कला (art) श्रेणी में आता है।' },
        { id: 'sm19', question: '"मृदङ्गम्" किस श्रेणी में आता है?', options: ['नाट्यम्', 'वाद्यम्', 'कला', 'नृत्य'], correctIndex: 1, explanation: 'मृदङ्गम् = mridangam (a drum)। यह वाद्य (musical instrument) श्रेणी में आता है।' },
        { id: 'sm20', question: '"अभिनयः" किस श्रेणी में आता है?', options: ['वाद्यम्', 'नाट्यम्', 'कला', 'साहित्य'], correctIndex: 1, explanation: 'अभिनयः = acting। यह नाट्य (drama) श्रेणी में आता है।' },
        { id: 'sm21', question: '"रंगमंचः" का अर्थ क्या है?', options: ['रंग', 'मंच', 'रंगशाला/स्टेज', 'थिएटर'], correctIndex: 2, explanation: 'रंगमंचः = stage (रंग + मंच)। यह नाट्य श्रेणी में आता है।' },
        { id: 'sm22', question: '"शिल्पम्" किस श्रेणी में आता है?', options: ['नाट्यम्', 'वाद्यम्', 'कला', 'विज्ञान'], correctIndex: 2, explanation: 'शिल्पम् = craft/sculpture। यह कला (art) श्रेणी में आता है।' },
        
        // Exam pattern (23-27)
        { id: 'sm23', question: 'व्यावहारिक सूचना में कितने अंक होते हैं?', options: ['2 अंक', '3 अंक', '4 अंक', '5 अंक'], correctIndex: 1, explanation: 'व्यावहारिक सूचना = 3 अंक। 3 चित्रों पर संस्कृत वाक्य लिखने होते हैं।' },
        { id: 'sm24', question: 'शब्द स्तम्भकः में प्रत्येक सही उत्तर के कितने अंक?', options: ['0.25 अंक', '0.5 अंक', '1 अंक', '2 अंक'], correctIndex: 1, explanation: 'शब्द स्तम्भकः में प्रत्येक सही वर्गीकरण = 0.5 अंक। कुल 6 शब्द = 3 अंक।' },
        { id: 'sm25', question: 'सुगम संस्कृतम् विभाग में कुल कितने अंक?', options: ['4 अंक', '6 अंक', '8 अंक', '10 अंक'], correctIndex: 1, explanation: 'सुगम संस्कृतम् = 6 अंक (व्यावहारिक सूचना 3 + शब्द स्तम्भकः 3)।' },
        { id: 'sm26', question: 'शब्द स्तम्भकः में कितने शब्द दिए जाते हैं?', options: ['6 शब्द', '8 शब्द', '10 शब्द', '12 शब्द'], correctIndex: 1, explanation: '8 शब्द दिए जाते हैं, जिनमें से 6 को वर्गीकृत करना होता है।' },
        { id: 'sm27', question: 'व्यावहारिक सूचना में क्या करना होता है?', options: ['चित्र बनाना', 'चित्र देखकर संस्कृत वाक्य लिखना', 'अनुवाद करना', 'कहानी लिखना'], correctIndex: 1, explanation: '3 चित्र/स्थिति दी जाती हैं, उन पर संस्कृत में वाक्य/निर्देश लिखने होते हैं।' },
        
        // Sentence translation (28-30)
        { id: 'sm28', question: '"बालकः पुस्तकं पठति" का अर्थ?', options: ['लड़का किताब लिखता है', 'लड़का किताब पढ़ता है', 'लड़की किताब पढ़ती है', 'लड़का किताब देखता है'], correctIndex: 1, explanation: 'बालकः = लड़का, पुस्तकम् = किताब को, पठति = पढ़ता है। "The boy reads a book."' },
        { id: 'sm29', question: '"छात्राः विद्यालयं गच्छन्ति" का अर्थ?', options: ['छात्र विद्यालय जाता है', 'छात्र विद्यालय जाते हैं', 'छात्रा विद्यालय जाती है', 'छात्राएं विद्यालय जाती हैं'], correctIndex: 1, explanation: 'छात्राः = छात्र (बहुवचन), विद्यालयम् = विद्यालय को, गच्छन्ति = जाते हैं।' },
        { id: 'sm30', question: '"बालिका जलं पिबति" का अर्थ?', options: ['लड़का पानी पीता है', 'लड़की पानी पीती है', 'लड़की दूध पीती है', 'लड़का दूध पीता है'], correctIndex: 1, explanation: 'बालिका = लड़की, जलम् = पानी को, पिबति = पीती है। "The girl drinks water."' }
      ],

      reels: [
        // Basic verbs (1-10)
        { id: 'sr1', title: 'गच्छति', content: '🚶 गच्छति (gacchati) = जाता है / goes\n\nधातु: गम्', color: getReelColor(0) },
        { id: 'sr2', title: 'पठति', content: '📖 पठति (paṭhati) = पढ़ता है / reads\n\nधातु: पठ्', color: getReelColor(1) },
        { id: 'sr3', title: 'लिखति', content: '✍️ लिखति (likhati) = लिखता है / writes\n\nधातु: लिख्', color: getReelColor(2) },
        { id: 'sr4', title: 'खादति', content: '🍽️ खादति (khādati) = खाता है / eats\n\nधातु: खाद्', color: getReelColor(3) },
        { id: 'sr5', title: 'पिबति', content: '🥛 पिबति (pibati) = पीता है / drinks\n\nधातु: पा', color: getReelColor(4) },
        { id: 'sr6', title: 'पश्यति', content: '👁️ पश्यति (paśyati) = देखता है / sees\n\nधातु: दृश्', color: getReelColor(5) },
        { id: 'sr7', title: 'शृणोति', content: '👂 शृणोति (śṛṇoti) = सुनता है / hears\n\nधातु: श्रु', color: getReelColor(6) },
        { id: 'sr8', title: 'वदति', content: '🗣️ वदति (vadati) = बोलता है / speaks\n\nधातु: वद्', color: getReelColor(7) },
        { id: 'sr9', title: 'क्रीडति', content: '⚽ क्रीडति (krīḍati) = खेलता है / plays\n\nधातु: क्रीड्', color: getReelColor(8) },
        { id: 'sr10', title: 'नृत्यति', content: '💃 नृत्यति (nṛtyati) = नाचता है / dances\n\nधातु: नृत्', color: getReelColor(9) },
        
        // More verbs (11-15)
        { id: 'sr11', title: 'गायति', content: '🎤 गायति (gāyati) = गाता है / sings\n\nधातु: गै', color: getReelColor(0) },
        { id: 'sr12', title: 'धावति', content: '🏃 धावति (dhāvati) = दौड़ता है / runs\n\nधातु: धाव्', color: getReelColor(1) },
        { id: 'sr13', title: 'हसति', content: '😄 हसति (hasati) = हँसता है / laughs\n\nधातु: हस्', color: getReelColor(2) },
        { id: 'sr14', title: 'रोदिति', content: '😢 रोदिति (roditi) = रोता है / cries\n\nधातु: रुद्', color: getReelColor(3) },
        { id: 'sr15', title: 'आगच्छति', content: '🔙 आगच्छति (āgacchati) = आता है / comes\n\nधातु: आ + गम्', color: getReelColor(4) },
        
        // Nouns (16-20)
        { id: 'sr16', title: 'बालकः', content: '👦 बालकः (bālakaḥ) = लड़का / boy\n\nपुल्लिंग', color: getReelColor(5) },
        { id: 'sr17', title: 'बालिका', content: '👧 बालिका (bālikā) = लड़की / girl\n\nस्त्रीलिंग', color: getReelColor(6) },
        { id: 'sr18', title: 'पुस्तकम्', content: '📚 पुस्तकम् (pustakam) = पुस्तक / book\n\nनपुंसकलिंग', color: getReelColor(7) },
        { id: 'sr19', title: 'जलम्', content: '💧 जलम् (jalam) = पानी / water\n\nसमानार्थक: नीरम्, वारि', color: getReelColor(8) },
        { id: 'sr20', title: 'विद्यालयः', content: '🏫 विद्यालयः = विद्या + आलय\n\nSchool = House of Knowledge', color: getReelColor(9) },
        
        // Categories (21-25)
        { id: 'sr21', title: 'नाट्यम्', content: '🎭 नाट्य = Drama\n\nनटः, नटी, अभिनयः, रंगमंचः', color: getReelColor(0) },
        { id: 'sr22', title: 'वाद्यम्', content: '🎵 वाद्य = Instruments\n\nवीणा, मृदङ्गम्, तबला, सितार', color: getReelColor(1) },
        { id: 'sr23', title: 'कला', content: '🎨 कला = Art\n\nचित्रम्, मूर्तिः, शिल्पम्, रंगोली', color: getReelColor(2) },
        { id: 'sr24', title: '6 Marks!', content: '💯 सुगम संस्कृतम् = 6 Easy Marks!\n\n3 + 3 = Full Marks!', color: getReelColor(3) },
        { id: 'sr25', title: 'व्यावहारिक सूचना', content: '📝 3 चित्र → 3 वाक्य\n\n= 3 Marks', color: getReelColor(4) },
        
        // Tips & Sentences (26-30)
        { id: 'sr26', title: 'शब्द स्तम्भकः', content: '📊 8 शब्द → 6 वर्गीकरण\n\n0.5 × 6 = 3 Marks', color: getReelColor(5) },
        { id: 'sr27', title: 'Sentence Pattern', content: '📐 कर्ता + कर्म + क्रिया\n\nSubject + Object + Verb', color: getReelColor(6) },
        { id: 'sr28', title: 'Example 1', content: '✨ बालकः पुस्तकं पठति\n\nThe boy reads a book', color: getReelColor(7) },
        { id: 'sr29', title: 'Example 2', content: '✨ बालिका जलं पिबति\n\nThe girl drinks water', color: getReelColor(8) },
        { id: 'sr30', title: 'Pro Tip', content: '💡 Easy 6 marks!\n\nMemorize categories + verbs', color: getReelColor(9) }
      ],

      longAnswers: [
        {
          id: 'sl1',
          question: 'व्यावहारिक सूचना में वाक्य कैसे लिखें?',
          answer: `### व्यावहारिक सूचना (3 Marks)

**Structure: Subject + Object + Verb**

**Step 1:** Identify the action in the picture
**Step 2:** Identify who is doing it
**Step 3:** Write in Sanskrit

**Common Sentence Patterns:**

| Hindi | Sanskrit |
|-------|----------|
| लड़का पढ़ता है | बालकः पठति |
| लड़की लिखती है | बालिका लिखति |
| बच्चे खेलते हैं | बालकाः क्रीडन्ति |
| वह जाता है | सः गच्छति |
| वह आती है | सा आगच्छति |

**Important Verbs:**
- गच्छति (goes), आगच्छति (comes)
- पठति (reads), लिखति (writes)
- खादति (eats), पिबति (drinks)
- क्रीडति (plays), नृत्यति (dances)

**Tip:** Use simple present tense. Keep sentences short and clear.`
        },
        {
          id: 'sl2',
          question: 'शब्द स्तम्भकः में वर्गीकरण कैसे करें?',
          answer: `### शब्द स्तम्भकः (3 Marks)

**Task:** Classify 6 out of 8 words into correct columns

**Main Categories:**

**1. नाट्यम् (Drama):**
- नटः (actor), नटी (actress)
- अभिनयः (acting), भावः (emotion)
- रसः (sentiment), रंगमंचः (stage)

**2. वाद्यम् (Musical Instruments):**
- वीणा, मृदङ्गम्, तबला
- सितारः, बांसुरी, जलतरंगम्

**3. कला (Art):**
- चित्रम् (painting), मूर्तिः (sculpture)
- शिल्पम् (craft), रंगोली

**Marking:** 0.5 marks per correct word = 3 marks total

**Strategy:**
1. Read all 8 words carefully
2. Identify the category for each
3. Write neatly in the correct column
4. Double-check before submitting`
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // द्वितीय मंडलम्: पद्यम् (Poetry) - Chapter 2
    // क्षणं मनोविनोदनम् - Momentary Entertainment (Subhashitas)
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'san2',
      title: '2. क्षणं मनोविनोदनम् (Poetry - Subhashitas)',
      description: 'विनोद प्रधान सुभाषितानि - Witty sayings for momentary entertainment',
      
      summary: `### क्षणं मनोविनोदनम् - Quick Overview

**Meaning:** Momentary Entertainment / क्षण भर का मनोरंजन

**परीक्षा में:** Part of पद्यम् Section (12 Marks total for poetry)

**Content:** Collection of witty सुभाषित (beautiful sayings) meant for entertainment and reflection.

**Exam Tasks (Per Poetry Passage - 6 marks):**
1. **अवबोधन (Comprehension)** - Answer questions
2. **अन्वय पूर्ति OR सरलार्थ** - Prose order OR Simple meaning (4 marks)
3. **शब्दज्ञानम्** - Vocabulary/Grammar

**Key Terms:**
| Sanskrit | IAST | Meaning |
|----------|------|---------|
| सुभाषितम् | subhāṣitam | good/wise saying |
| विनोदः | vinodaḥ | entertainment |
| मनोविनोदनम् | manovinodanam | mind's entertainment |
| क्षणम् | kṣaṇam | moment |`,

      detailedNotes: `### क्षणं मनोविनोदनम् - Detailed Notes

## Understanding सुभाषित (Subhashita)

**Etymology:**
- सु (su) = good, well
- भाषित (bhāṣita) = spoken, said
- सुभाषितम् = "well-spoken" = wise saying

## Key Concepts with Translations:

### 1. Structure of सुभाषित:
Most सुभाषित follow the श्लोक (śloka) meter - 4 lines with specific syllable patterns.

### 2. Types in this Chapter:
- **विनोदात्मक** (vinodātmaka) - Humorous
- **नीतिपरक** (nītiparak) - Moral teaching
- **श्लेष युक्त** (śleṣa yukta) - With puns/double meanings

## Important Vocabulary:

| Sanskrit | Transliteration | Hindi | English |
|----------|----------------|-------|---------|
| सुभाषितम् | subhāṣitam | सुभाषित | wise saying |
| विनोदः | vinodaḥ | विनोद | humor |
| हास्यम् | hāsyam | हास्य | laughter |
| नीतिः | nītiḥ | नीति | ethics/policy |
| श्लोकः | ślokaḥ | श्लोक | verse |
| पद्यम् | padyam | पद्य | poetry |
| गद्यम् | gadyam | गद्य | prose |
| अन्वयः | anvayaḥ | अन्वय | prose order |
| सरलार्थः | saralārthaḥ | सरलार्थ | simple meaning |

## Exam Focus:

### अन्वय पूर्ति (Anvaya Pūrti) - 4 Marks
- **Task:** Complete the prose word order of a verse
- **Given:** Verse + Box with 8 words
- **Do:** Fill blanks in the prose order (अन्वय)

### सरलार्थ (Saralārtha) - 4 Marks (Alternative)
- **Task:** Write simple meaning in medium language
- **Write in:** English or Marathi (as per your medium)

### शब्दज्ञानम् (Vocabulary) Tasks:
- विरुद्धार्थक शब्द (Antonyms)
- विशेषण-विशेष्य (Adjective-Noun pairs)
- संधि विच्छेद (Sandhi splitting)`,

      flashcards: [
        // Basic terms (1-10)
        { id: 'sf31', front: 'सुभाषितम् (subhāṣitam) का अर्थ और व्युत्पत्ति?', back: '**सुभाषित = अच्छी उक्ति / wise saying**\n\nव्युत्पत्ति:\n• सु = good/well\n• भाषित = spoken\n• सु + भाषित = well-spoken\n\nसुभाषित = Sanskrit proverbs with moral lessons' },
        { id: 'sf32', front: 'क्षणम् (kṣaṇam) का अर्थ?', back: '**क्षण = moment / पल**\n\nलिंग: नपुंसकलिंग\n\nक्षणम् = for a moment\nक्षणात् = in a moment\nक्षणे क्षणे = every moment' },
        { id: 'sf33', front: 'मनोविनोदनम् (manovinodanam) का संधि विच्छेद?', back: '**मनः + विनोदनम् = मनोविनोदनम्**\n\nविसर्ग संधि: ः + व = ओ\n\nमनः = mind\nविनोदनम् = entertainment\n= Entertainment of mind' },
        { id: 'sf34', front: 'विनोदः (vinodaḥ) का अर्थ?', back: '**विनोद = humor, entertainment, fun**\n\nलिंग: पुल्लिंग\n\nवि + नुद् धातु = to remove\nविनोद = that which removes (boredom)' },
        { id: 'sf35', front: 'हास्यम् (hāsyam) का अर्थ?', back: '**हास्य = laughter, humor**\n\nलिंग: नपुंसकलिंग\n\nहस् धातु = to laugh\nहास्यम् = that which causes laughter\n\nनवरसों में एक रस' },
        { id: 'sf36', front: 'नीतिः (nītiḥ) का अर्थ?', back: '**नीति = ethics, policy, moral conduct**\n\nलिंग: स्त्रीलिंग\n\nनी धातु = to lead\nनीति = that which leads (to right path)\n\nनीति शास्त्र = Ethics' },
        { id: 'sf37', front: 'श्लोकः (ślokaḥ) का अर्थ?', back: '**श्लोक = verse, stanza**\n\nलिंग: पुल्लिंग\n\nएक श्लोक = 4 पंक्तियाँ (usually)\n32 syllables in अनुष्टुप् छंद\n\nश्लोक पठति = recites a verse' },
        { id: 'sf38', front: 'पद्यम् vs गद्यम् में अंतर?', back: '**पद्यम् (padyam) = Poetry**\n• छंदबद्ध (metrical)\n• तुकबंदी\n\n**गद्यम् (gadyam) = Prose**\n• छंदमुक्त\n• सामान्य वाक्य\n\nपद्य विभाग = 12 अंक\nगद्य विभाग = 9 अंक' },
        { id: 'sf39', front: 'अन्वयः (anvayaḥ) का अर्थ?', back: '**अन्वय = Prose word order**\n\nअनु + अय = following after\n\nपद्य को गद्य क्रम में लिखना\n\nExam: अन्वय पूर्ति = 4 marks\n8 रिक्त स्थान भरने होते हैं' },
        { id: 'sf40', front: 'सरलार्थः (saralārthaḥ) का अर्थ?', back: '**सरलार्थ = Simple meaning**\n\nसरल + अर्थ\n• सरल = simple/easy\n• अर्थ = meaning\n\nExam: माध्यम भाषा में अर्थ लिखो\n(English या Marathi में)' },
        
        // Poetry concepts (11-20)
        { id: 'sf41', front: 'विरुद्धार्थक शब्द (viruddhārthaka) का अर्थ?', back: '**विरुद्धार्थक = Antonym / विलोम शब्द**\n\nविरुद्ध + अर्थक\n• विरुद्ध = opposite\n• अर्थक = having meaning\n\nExamples:\nसुख ↔ दुःख\nज्ञान ↔ अज्ञान\nधर्म ↔ अधर्म' },
        { id: 'sf42', front: 'विशेषण-विशेष्य (viśeṣaṇa-viśeṣya) क्या है?', back: '**विशेषण = Adjective**\n**विशेष्य = Noun (being described)**\n\nExample:\nसुन्दर बालकः\n• सुन्दर = विशेषण (beautiful)\n• बालकः = विशेष्य (boy)\n\nRule: विशेषण विशेष्य के लिंग-वचन-विभक्ति में होता है' },
        { id: 'sf43', front: 'श्लेषः (śleṣaḥ) अलंकार क्या है?', back: '**श्लेष = Pun / द्विअर्थी शब्द**\n\nएक शब्द के दो अर्थ\n\nExample: नीलकण्ठः\n1. शिव (blue-throated one)\n2. मयूर (peacock)\n\nइस अध्याय में श्लेष युक्त सुभाषित हैं' },
        { id: 'sf44', front: 'पद्य विभाग में कुल कितने अंक?', back: '**12 अंक (12 Marks)**\n\n2 पद्यांश × 6 अंक = 12 अंक\n\nप्रत्येक पद्यांश में:\n• अवबोधन (Comprehension)\n• अन्वय पूर्ति OR सरलार्थ (4 marks)\n• शब्दज्ञानम्' },
        { id: 'sf45', front: '"पूर्ण वाक्येन उत्तरत" का अर्थ?', back: '**पूरे वाक्य में उत्तर दो**\n\nAnswer in complete sentences\n\nExample:\nप्रश्न: कः पठति?\nउत्तर: बालकः पठति। ✓\nउत्तर: बालकः ✗ (incomplete)' },
        { id: 'sf46', front: 'अवबोधनम् (avabodhanam) का अर्थ?', back: '**अवबोधन = Comprehension / समझ**\n\nअव + बुध् धातु = to understand\n\nExam में:\n• पूर्ण वाक्येन उत्तरत\n• सत्य/असत्य\n• उचित कारण चुनो' },
        { id: 'sf47', front: 'सत्यम्/असत्यम् प्रश्न कैसे हल करें?', back: '**सत्यम् = True / सत्य**\n**असत्यम् = False / असत्य**\n\nTask: वाक्य सत्य है या असत्य बताओ\n\nTip:\n• पद्यांश ध्यान से पढ़ो\n• वाक्य की जाँच करो\n• सत्यम् या असत्यम् लिखो' },
        { id: 'sf48', front: 'उचितं कारणम् (uchitam kāraṇam) क्या है?', back: '**उचित कारण = Correct Reason**\n\nExam Task:\nवाक्य दिया जाएगा, कारण चुनो\n\nयतः (yataḥ) = because\n\nExample:\nसः विद्यालयं न गच्छति यतः...\n(He doesn\'t go to school because...)' },
        { id: 'sf49', front: 'चतुष्कोणं पूरयत का अर्थ?', back: '**चतुष्कोण = Box / Square**\n\nचतुः + कोण = four corners\n\nExam: रिक्त चतुष्कोण में उचित शब्द लिखो\n\n☐ में से सही शब्द भरो' },
        { id: 'sf50', front: 'मञ्जूषा (mañjūṣā) का अर्थ?', back: '**मञ्जूषा = Word Box**\n\nExam में शब्दों की सूची दी जाती है\n\nTask: मञ्जूषा से उचित शब्द चुनकर रिक्त स्थान भरो\n\nअन्वय पूर्ति में 8 शब्द दिए जाते हैं' },
        
        // Subhashita concepts (21-30)
        { id: 'sf51', front: 'सुभाषित का उद्देश्य क्या है?', back: '**दो उद्देश्य:**\n\n1. **शिक्षा (Education)**\n   - नैतिक मूल्य\n   - जीवन की सीख\n\n2. **मनोरंजन (Entertainment)**\n   - हास्य\n   - बुद्धि का व्यायाम\n\nक्षणं मनोविनोदनम् = क्षण भर का मनोरंजन' },
        { id: 'sf52', front: 'नीलकण्ठः के दो अर्थ (श्लेष)?', back: '**नीलकण्ठः (Nīlakaṇṭhaḥ):**\n\n1. **शिव** - नीला कंठ वाले\n   (विष पीने से कंठ नीला)\n\n2. **मयूर** (Peacock)\n   नीले गले वाला पक्षी\n\nशिव-पार्वती संवाद में यह श्लेष है' },
        { id: 'sf53', front: 'पशुपतिः के दो अर्थ (श्लेष)?', back: '**पशुपतिः (Paśupatiḥ):**\n\n1. **शिव** - पशुओं के पति/स्वामी\n   (सभी जीवों के स्वामी)\n\n2. **गोपालक** - चरवाहा\n   (पशु + पति = पशुओं का स्वामी)' },
        { id: 'sf54', front: 'शिव-पार्वती संवाद की विशेषता?', back: '**विशेषता: श्लेष अलंकार**\n\nशिव अपना परिचय देते हैं:\n"अहं नीलकण्ठः"\n\nपार्वती का उत्तर:\n"यदि त्वं नीलकण्ठः (मयूर),\nतर्हि वनं गच्छ!"\n\nश्लेष से हास्य उत्पन्न होता है' },
        { id: 'sf55', front: 'दरिद्रः (daridraḥ) का अर्थ?', back: '**दरिद्र = Poor / गरीब**\n\nलिंग: पुल्लिंग\n\nविलोम: धनवान्, धनिकः\n\nसुभाषित में:\nभिक्षुक कृष्ण को नमस्कार नहीं करता,\nबल्कि दारिद्र्य को करता है!' },
        { id: 'sf56', front: 'भिक्षुकः (bhikṣukaḥ) का अर्थ?', back: '**भिक्षुक = Beggar / भिखारी**\n\nभिक्ष् धातु = to beg\nभिक्षा = alms\nभिक्षुकः = one who begs\n\nसुभाषित में भिक्षुक-कृष्ण संवाद है' },
        { id: 'sf57', front: 'कार्त्तिकेयः (Kārttikeya) कौन हैं?', back: '**कार्त्तिकेय = Kartikeya / षण्मुख**\n\nशिव-पार्वती के पुत्र\nदेवताओं के सेनापति\n\nअन्य नाम:\n• स्कन्दः\n• षण्मुखः (छह मुख वाले)\n• मुरुगन्\n\nसुभाषित में सागर से संवाद' },
        { id: 'sf58', front: 'सागरः (sāgaraḥ) का अर्थ और समानार्थक?', back: '**सागर = Sea, Ocean / समुद्र**\n\nलिंग: पुल्लिंग\n\nसमानार्थक शब्द:\n• समुद्रः\n• जलधिः\n• रत्नाकरः\n• वारिधिः\n• अम्बुधिः' },
        { id: 'sf59', front: 'नमो नमः (namo namaḥ) का अर्थ?', back: '**नमो नमः = Salutations / नमस्कार**\n\nनमः + नमः = नमो नमः (विसर्ग संधि)\n\nनम् धातु = to bow\nनमः = bowing, salutation\n\nदोहरा नमस्कार = अत्यंत आदर' },
        { id: 'sf60', front: 'अवबोधन में कितने प्रकार के प्रश्न?', back: '**अवबोधन के प्रश्न प्रकार:**\n\n1. पूर्ण वाक्येन उत्तरत (Full sentence)\n2. सत्यम्/असत्यम् (True/False)\n3. उचितं कारणम् (Choose reason)\n4. चतुष्कोणं पूरयत (Fill box)\n5. विरुद्धार्थक (Antonyms)\n6. विशेषण-विशेष्य (Adj-Noun pair)' }
      ],

      mcqs: [
        // Basic concepts (1-10)
        { id: 'sm31', question: 'सुभाषितम् का शाब्दिक अर्थ क्या है?', options: ['बुरी बात', 'अच्छी उक्ति', 'लंबी कविता', 'छोटी कहानी'], correctIndex: 1, explanation: 'सु (good) + भाषित (spoken) = सुभाषितम् = well-spoken / अच्छी उक्ति।' },
        { id: 'sm32', question: '"क्षणं मनोविनोदनम्" का अर्थ क्या है?', options: ['लंबा मनोरंजन', 'क्षण भर का मनोरंजन', 'दुखद कहानी', 'गंभीर चर्चा'], correctIndex: 1, explanation: 'क्षणम् = moment, मनोविनोदनम् = entertainment of mind। क्षण भर का मनोरंजन।' },
        { id: 'sm33', question: '"मनोविनोदनम्" में कौन सी संधि है?', options: ['स्वर संधि', 'विसर्ग संधि', 'व्यंजन संधि', 'कोई संधि नहीं'], correctIndex: 1, explanation: 'मनः + विनोदनम् = मनोविनोदनम्। विसर्ग संधि: ः + व = ओ।' },
        { id: 'sm34', question: 'पद्य विभाग में कुल कितने अंक हैं?', options: ['6 अंक', '9 अंक', '12 अंक', '16 अंक'], correctIndex: 2, explanation: 'पद्य (Poetry) विभाग = 12 अंक। 2 पद्यांश × 6 अंक प्रत्येक।' },
        { id: 'sm35', question: 'अन्वय पूर्ति में कितने अंक होते हैं?', options: ['2 अंक', '3 अंक', '4 अंक', '5 अंक'], correctIndex: 2, explanation: 'अन्वय पूर्ति = 4 अंक। 8 रिक्त स्थान, प्रत्येक 0.5 अंक।' },
        { id: 'sm36', question: 'सरलार्थ किस भाषा में लिखना होता है?', options: ['केवल संस्कृत', 'केवल हिंदी', 'माध्यम भाषा (English/Marathi)', 'केवल अंग्रेजी'], correctIndex: 2, explanation: 'सरलार्थ माध्यम भाषा में लिखना होता है - English या Marathi (as per your medium)।' },
        { id: 'sm37', question: '"अन्वय" का अर्थ क्या है?', options: ['कविता', 'गद्य क्रम', 'अनुवाद', 'व्याख्या'], correctIndex: 1, explanation: 'अन्वय = Prose word order। पद्य को गद्य के क्रम में लिखना।' },
        { id: 'sm38', question: 'विरुद्धार्थक शब्द का अर्थ?', options: ['समान अर्थ वाला', 'विपरीत अर्थ वाला', 'मिलता-जुलता', 'संबंधित शब्द'], correctIndex: 1, explanation: 'विरुद्ध + अर्थक = विपरीत अर्थ वाला = Antonym।' },
        { id: 'sm39', question: '"पूर्ण वाक्येन उत्तरत" का अर्थ?', options: ['एक शब्द में उत्तर', 'पूरे वाक्य में उत्तर', 'हाँ/नहीं में उत्तर', 'विकल्प चुनो'], correctIndex: 1, explanation: 'पूर्ण वाक्येन = in complete sentence। पूरे वाक्य में उत्तर लिखना होता है।' },
        { id: 'sm40', question: 'मञ्जूषा का अर्थ?', options: ['प्रश्न', 'उत्तर', 'शब्द पेटिका', 'पुस्तक'], correctIndex: 2, explanation: 'मञ्जूषा = Word Box। जहाँ से शब्द चुनकर रिक्त स्थान भरने होते हैं।' },
        
        // Literary terms (11-20)
        { id: 'sm41', question: 'श्लेष अलंकार क्या है?', options: ['तुलना', 'अतिशयोक्ति', 'द्विअर्थी शब्द', 'विरोधाभास'], correctIndex: 2, explanation: 'श्लेष = Pun। एक शब्द के दो या अधिक अर्थ। जैसे: नीलकण्ठ = शिव या मयूर।' },
        { id: 'sm42', question: '"नीलकण्ठः" के दो अर्थ (श्लेष में)?', options: ['शिव और ब्रह्मा', 'शिव और मयूर', 'विष्णु और गरुड़', 'इंद्र और वरुण'], correctIndex: 1, explanation: 'नीलकण्ठः = 1. शिव (नीले कंठ वाले) 2. मयूर (peacock)। यह श्लेष अलंकार है।' },
        { id: 'sm43', question: 'विशेषण-विशेष्य में विशेषण क्या करता है?', options: ['संज्ञा बनाता है', 'विशेषता बताता है', 'क्रिया बनाता है', 'कुछ नहीं'], correctIndex: 1, explanation: 'विशेषण संज्ञा (विशेष्य) की विशेषता बताता है। जैसे: सुन्दर (विशेषण) बालकः (विशेष्य)।' },
        { id: 'sm44', question: 'सुभाषित का मुख्य उद्देश्य?', options: ['केवल मनोरंजन', 'केवल शिक्षा', 'शिक्षा और मनोरंजन दोनों', 'केवल परीक्षा'], correctIndex: 2, explanation: 'सुभाषित का उद्देश्य शिक्षा (नैतिक मूल्य) और मनोरंजन दोनों है।' },
        { id: 'sm45', question: '"सुख" का विरुद्धार्थक शब्द?', options: ['आनंद', 'दुःख', 'मोद', 'हर्ष'], correctIndex: 1, explanation: 'सुख का विलोम = दुःख। आनंद, मोद, हर्ष सभी सुख के समानार्थक हैं।' },
        { id: 'sm46', question: '"ज्ञान" का विरुद्धार्थक शब्द?', options: ['विद्या', 'अज्ञान', 'बुद्धि', 'प्रज्ञा'], correctIndex: 1, explanation: 'ज्ञान का विलोम = अज्ञान। विद्या, बुद्धि, प्रज्ञा समानार्थक हैं।' },
        { id: 'sm47', question: '"धर्म" का विरुद्धार्थक शब्द?', options: ['पुण्य', 'अधर्म', 'सत्य', 'न्याय'], correctIndex: 1, explanation: 'धर्म का विलोम = अधर्म। पुण्य, सत्य, न्याय - धर्म से संबंधित हैं।' },
        { id: 'sm48', question: 'श्लोक में सामान्यतः कितनी पंक्तियाँ?', options: ['2', '4', '6', '8'], correctIndex: 1, explanation: 'एक श्लोक में सामान्यतः 4 पंक्तियाँ (lines) होती हैं।' },
        { id: 'sm49', question: 'अवबोधन का अर्थ?', options: ['लिखना', 'समझना', 'बोलना', 'सुनना'], correctIndex: 1, explanation: 'अवबोधन = Comprehension = समझना। अव + बुध् धातु।' },
        { id: 'sm50', question: '"हास्यम्" का अर्थ?', options: ['रोना', 'हँसी/हास्य', 'क्रोध', 'भय'], correctIndex: 1, explanation: 'हास्यम् = laughter, humor। हस् धातु से। नौ रसों में एक।' },
        
        // Subhashita content (21-30)
        { id: 'sm51', question: 'शिव-पार्वती संवाद में कौन सा अलंकार है?', options: ['उपमा', 'रूपक', 'श्लेष', 'अनुप्रास'], correctIndex: 2, explanation: 'शिव-पार्वती संवाद में श्लेष अलंकार है। नीलकण्ठ के दो अर्थ - शिव और मयूर।' },
        { id: 'sm52', question: 'भिक्षुक-कृष्ण संवाद में भिक्षुक किसे नमस्कार करता है?', options: ['कृष्ण को', 'दारिद्र्य को', 'विष्णु को', 'किसी को नहीं'], correctIndex: 1, explanation: 'भिक्षुक दारिद्र्य (poverty) को नमस्कार करता है, क्योंकि वही उसे संसार से जोड़े रखता है।' },
        { id: 'sm53', question: 'कार्त्तिकेय किनके पुत्र हैं?', options: ['विष्णु-लक्ष्मी', 'शिव-पार्वती', 'ब्रह्मा-सरस्वती', 'इंद्र-शची'], correctIndex: 1, explanation: 'कार्त्तिकेय (षण्मुख/स्कन्द) शिव और पार्वती के पुत्र हैं।' },
        { id: 'sm54', question: '"जलम्" का समानार्थक शब्द?', options: ['अग्निः', 'वायुः', 'नीरम्', 'भूमिः'], correctIndex: 2, explanation: 'जलम् = नीरम् = वारि = तोयम् = उदकम् = अम्भः। सभी पानी के लिए।' },
        { id: 'sm55', question: '"सागरः" का समानार्थक शब्द?', options: ['नदी', 'समुद्रः', 'तालाब', 'कूप'], correctIndex: 1, explanation: 'सागरः = समुद्रः = जलधिः = रत्नाकरः। सभी समुद्र के लिए।' },
        { id: 'sm56', question: '"दरिद्रः" का विलोम?', options: ['निर्धन', 'धनवान्', 'भिक्षुक', 'याचक'], correctIndex: 1, explanation: 'दरिद्र (गरीब) का विलोम = धनवान् (अमीर)। निर्धन, भिक्षुक समानार्थक हैं।' },
        { id: 'sm57', question: 'अन्वय पूर्ति में कितने रिक्त स्थान होते हैं?', options: ['4', '6', '8', '10'], correctIndex: 2, explanation: 'अन्वय पूर्ति में 8 रिक्त स्थान होते हैं। प्रत्येक के 0.5 अंक = 4 अंक।' },
        { id: 'sm58', question: '"सत्यम्" का विलोम?', options: ['धर्म', 'असत्यम्', 'न्याय', 'पुण्य'], correctIndex: 1, explanation: 'सत्यम् (सत्य/truth) का विलोम = असत्यम् (असत्य/false)।' },
        { id: 'sm59', question: 'पद्य और गद्य में मुख्य अंतर?', options: ['लंबाई', 'छंद', 'विषय', 'भाषा'], correctIndex: 1, explanation: 'पद्य छंदबद्ध (metrical) होता है, गद्य छंदमुक्त। यही मुख्य अंतर है।' },
        { id: 'sm60', question: '"विनोदात्मक" का अर्थ?', options: ['दुखद', 'हास्यपूर्ण', 'गंभीर', 'क्रोधपूर्ण'], correctIndex: 1, explanation: 'विनोद + आत्मक = विनोदात्मक = हास्यपूर्ण/humorous। इस अध्याय के सुभाषित विनोदात्मक हैं।' }
      ],

      reels: [
        // Basic terms (1-10)
        { id: 'sr31', title: 'सुभाषितम्', content: '💎 सुभाषित = सु + भाषित\n\nGood + Spoken = Wise Saying', color: getReelColor(0) },
        { id: 'sr32', title: 'क्षणम्', content: '⏱️ क्षणम् (kṣaṇam) = moment\n\nक्षण भर = for a moment', color: getReelColor(1) },
        { id: 'sr33', title: 'मनोविनोदनम्', content: '🎭 मनः + विनोदनम्\n\nMind + Entertainment', color: getReelColor(2) },
        { id: 'sr34', title: 'विनोदः', content: '😄 विनोदः = humor, fun\n\nवि + नुद् = to remove (boredom)', color: getReelColor(3) },
        { id: 'sr35', title: 'हास्यम्', content: '😂 हास्यम् = laughter\n\nहस् धातु = to laugh', color: getReelColor(4) },
        { id: 'sr36', title: 'नीतिः', content: '📜 नीतिः = ethics, policy\n\nनी धातु = to lead', color: getReelColor(5) },
        { id: 'sr37', title: 'श्लोकः', content: '📝 श्लोकः = verse\n\n4 lines usually', color: getReelColor(6) },
        { id: 'sr38', title: 'पद्यम्', content: '📜 पद्यम् = Poetry\n\nछंदबद्ध = Metrical', color: getReelColor(7) },
        { id: 'sr39', title: 'गद्यम्', content: '📄 गद्यम् = Prose\n\nछंदमुक्त = Non-metrical', color: getReelColor(8) },
        { id: 'sr40', title: 'अन्वयः', content: '🔄 अन्वय = Prose order\n\nपद्य → गद्य क्रम', color: getReelColor(9) },
        
        // Exam terms (11-20)
        { id: 'sr41', title: '12 Marks', content: '📊 पद्य विभाग = 12 अंक\n\n2 passages × 6 marks', color: getReelColor(0) },
        { id: 'sr42', title: 'अन्वय पूर्ति', content: '✏️ अन्वय पूर्ति = 4 marks\n\n8 blanks × 0.5', color: getReelColor(1) },
        { id: 'sr43', title: 'सरलार्थ', content: '📝 सरलार्थ = Simple meaning\n\n4 marks in medium language', color: getReelColor(2) },
        { id: 'sr44', title: 'विरुद्धार्थक', content: '↔️ विरुद्धार्थक = Antonym\n\nसुख ↔ दुःख', color: getReelColor(3) },
        { id: 'sr45', title: 'विशेषण-विशेष्य', content: '🏷️ विशेषण = Adjective\nविशेष्य = Noun', color: getReelColor(4) },
        { id: 'sr46', title: 'अवबोधनम्', content: '🧠 अवबोधन = Comprehension\n\nसमझकर उत्तर दो', color: getReelColor(5) },
        { id: 'sr47', title: 'सत्यम्/असत्यम्', content: '✓✗ सत्यम् = True\nअसत्यम् = False', color: getReelColor(6) },
        { id: 'sr48', title: 'मञ्जूषा', content: '📦 मञ्जूषा = Word Box\n\nशब्द चुनो यहाँ से!', color: getReelColor(7) },
        { id: 'sr49', title: 'पूर्ण वाक्येन', content: '📝 पूर्ण वाक्येन उत्तरत\n\n= Answer in full sentence', color: getReelColor(8) },
        { id: 'sr50', title: 'उचितं कारणम्', content: '🎯 उचित कारण चुनो\n\nyataḥ = because', color: getReelColor(9) },
        
        // Subhashita concepts (21-30)
        { id: 'sr51', title: 'श्लेषः', content: '🎭 श्लेष = Pun\n\nएक शब्द, दो अर्थ!', color: getReelColor(0) },
        { id: 'sr52', title: 'नीलकण्ठः', content: '🔵 नीलकण्ठः =\n1. शिव 2. मयूर\n\nश्लेष अलंकार!', color: getReelColor(1) },
        { id: 'sr53', title: 'पशुपतिः', content: '🐂 पशुपतिः =\n1. शिव 2. गोपालक\n\nश्लेष!', color: getReelColor(2) },
        { id: 'sr54', title: 'दरिद्रः', content: '💰 दरिद्रः = poor\n\nविलोम: धनवान्', color: getReelColor(3) },
        { id: 'sr55', title: 'भिक्षुकः', content: '🙏 भिक्षुकः = beggar\n\nभिक्षा = alms', color: getReelColor(4) },
        { id: 'sr56', title: 'कार्त्तिकेयः', content: '⚔️ कार्त्तिकेय = षण्मुख\n\nशिव-पार्वती पुत्र', color: getReelColor(5) },
        { id: 'sr57', title: 'सागरः', content: '🌊 सागर = समुद्र\n\n= जलधिः = रत्नाकरः', color: getReelColor(6) },
        { id: 'sr58', title: 'नमो नमः', content: '🙏 नमो नमः = Salutations\n\nनमः + नमः', color: getReelColor(7) },
        { id: 'sr59', title: 'Purpose', content: '🎯 सुभाषित का उद्देश्य:\n\n1. शिक्षा 2. मनोरंजन', color: getReelColor(8) },
        { id: 'sr60', title: 'Easy Tips', content: '💡 Tip: अन्वय OR सरलार्थ\n\nकोई एक करो, 4 marks!', color: getReelColor(9) }
      ],

      longAnswers: [
        {
          id: 'sl3',
          question: 'अन्वय पूर्ति कैसे करें? (How to do Anvaya Purti)',
          answer: `### अन्वय पूर्ति (Anvaya Completion) - 4 Marks

**What is अन्वय?**
अन्वय = Prose word order of a verse
Converting poetry into simple prose sentence order.

**Exam Format:**
- Given: Sanskrit verse + Word box (मञ्जूषा) with 8 words
- Task: Fill 8 blanks in the prose order
- Marks: 0.5 × 8 = 4 marks

**Steps:**
1. Read the verse carefully
2. Understand the meaning
3. Identify Subject-Object-Verb
4. Fill blanks from the word box
5. Check if sentence makes sense

**Word Order in Sanskrit:**
कर्ता (Subject) + कर्म (Object) + क्रिया (Verb)

**Example:**
Verse: बालकः पुस्तकं पठति।
Anvaya: बालकः _____ पठति। [पुस्तकम्]

**Tips:**
- Don't change the word forms
- Use exact words from मञ्जूषा
- Cross-check after filling`
        },
        {
          id: 'sl4',
          question: 'सरलार्थ कैसे लिखें? (How to write Saralārtha)',
          answer: `### सरलार्थ (Simple Meaning) - 4 Marks

**What is सरलार्थ?**
Writing the meaning of Sanskrit verse in your medium language (English/Marathi).

**Format:**
- Write in paragraphs
- Use simple language
- Cover complete meaning

**Steps:**
1. Read verse multiple times
2. Identify key words
3. Understand context
4. Write meaning in 4-5 sentences
5. Include moral/message if any

**Structure:**
- Introduction (1 line)
- Main meaning (2-3 lines)
- Conclusion/Moral (1 line)

**Example Structure:**
"This verse tells us that... The poet says... The message is..."

**Tips:**
- Don't translate word-by-word
- Write the essence/meaning
- Include the moral lesson
- Write in medium language only`
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // तृतीय मंडलम्: गद्यम् (Prose) - 9 Marks
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'san3',
      title: '3. गद्यम् (Prose Section)',
      description: 'गद्य परिच्छेद - Prose passages for comprehension and analysis (9 Marks)',
      
      summary: `### गद्यम् - Quick Overview

**परीक्षा में अंक: 9 Marks**

**गद्य = Prose (Non-metrical writing)**

**Exam Tasks:**
1. **गद्यांश अवबोधन** - Passage comprehension (4-5 marks)
2. **स्रोत पहचान** - Source identification (1 mark)
3. **माध्यम भाषा में उत्तर** - Answer in English/Marathi

**Key Prose Texts in Syllabus:**
| Text | Author | Theme |
|------|--------|-------|
| भारतमहिमा | - | Glory of India |
| संस्कृतभाषायाः महत्त्वम् | - | Importance of Sanskrit |
| परोपकारः | - | Helping Others |

**Important Terms:**
| Sanskrit | Meaning |
|----------|---------|
| गद्यम् | Prose |
| परिच्छेदः | Passage |
| अवबोधनम् | Comprehension |
| स्रोतः | Source |`,

      detailedNotes: `### गद्यम् (Prose) - Detailed Study Notes

## What is गद्य (Gadya)?

**Definition:**
गद्य = Prose = Writing without metrical structure
- No fixed rhythm or rhyme
- Regular sentence structure
- Easier to understand than पद्य (poetry)

## Exam Pattern for गद्य Section (9 Marks)

### Question Format:
1. **Passage given** - Sanskrit prose extract
2. **Questions in Sanskrit** - Answer required
3. **माध्यम भाषा** - Some answers in medium language

### Types of Questions:

**1. पूर्ण वाक्येन उत्तरत (2-3 marks)**
- Answer in complete Sanskrit sentences
- Pick answers directly from passage

**2. एकपदेन उत्तरत (1-2 marks)**
- One-word answers
- Usually nouns or verbs from passage

**3. माध्यम भाषायाम् उत्तरत (2 marks)**
- Answer in English or Marathi
- Explain meaning or concept

**4. स्रोत पहचान (1 mark)**
- "अयं परिच्छेदः कस्मात् पाठात् गृहीतः?"
- Identify which lesson the passage is from

## Key Vocabulary for Prose:

### भारतमहिमा (Glory of India):
| Word | Transliteration | Meaning |
|------|----------------|---------|
| भारतम् | bhāratam | India |
| महिमा | mahimā | glory |
| संस्कृतिः | saṃskṛtiḥ | culture |
| परम्परा | paramparā | tradition |
| विरासत् | virāsat | heritage |
| गौरवम् | gauravam | pride |

### संस्कृतभाषायाः महत्त्वम्:
| Word | Transliteration | Meaning |
|------|----------------|---------|
| भाषा | bhāṣā | language |
| महत्त्वम् | mahattvam | importance |
| देववाणी | devavāṇī | divine language |
| व्याकरणम् | vyākaraṇam | grammar |
| साहित्यम् | sāhityam | literature |

### परोपकारः (Helping Others):
| Word | Transliteration | Meaning |
|------|----------------|---------|
| परोपकारः | paropakāraḥ | helping others |
| दानम् | dānam | donation |
| सेवा | sevā | service |
| करुणा | karuṇā | compassion |
| दया | dayā | mercy |

## Reading Strategy:

1. **First Reading:** Get overall meaning
2. **Second Reading:** Identify key words
3. **Third Reading:** Locate answers
4. **Answer:** Use exact words from passage when possible`,

      flashcards: [
        // Basic Prose Terms (1-10)
        { id: 'sf61', front: 'गद्यम् (gadyam) का अर्थ?', back: '**गद्य = Prose**\n\nछंदमुक्त रचना\nNo fixed meter or rhyme\n\nविलोम: पद्यम् (Poetry)\n\nExam: 9 अंक का विभाग' },
        { id: 'sf62', front: 'परिच्छेदः (paricchedaḥ) का अर्थ?', back: '**परिच्छेद = Passage / अनुच्छेद**\n\nपरि + छेद = around + cutting\n= a section cut out\n\nExam में गद्य परिच्छेद दिया जाता है' },
        { id: 'sf63', front: 'स्रोतः (srotaḥ) का अर्थ?', back: '**स्रोत = Source / मूल**\n\nExam Question:\n"अयं परिच्छेदः कस्मात् पाठात् गृहीतः?"\n\nThis passage is taken from which lesson?' },
        { id: 'sf64', front: 'भारतम् (bhāratam) का अर्थ?', back: '**भारत = India**\n\nभरत वंश का देश\nलिंग: नपुंसकलिंग\n\nभारतमहिमा = Glory of India' },
        { id: 'sf65', front: 'महिमा (mahimā) का अर्थ?', back: '**महिमा = Glory, Greatness**\n\nमहत् से बना\nलिंग: स्त्रीलिंग\n\nभारतमहिमा = भारत की महिमा' },
        { id: 'sf66', front: 'संस्कृतिः (saṃskṛtiḥ) का अर्थ?', back: '**संस्कृति = Culture**\n\nसम् + कृ धातु = well done/refined\nलिंग: स्त्रीलिंग\n\nभारतीय संस्कृति = Indian culture' },
        { id: 'sf67', front: 'परम्परा (paramparā) का अर्थ?', back: '**परम्परा = Tradition**\n\nपरं परं = one after another\n= continuous succession\n\nलिंग: स्त्रीलिंग' },
        { id: 'sf68', front: 'गौरवम् (gauravam) का अर्थ?', back: '**गौरव = Pride, Honor**\n\nगुरु से बना (heavy/weighty)\nलिंग: नपुंसकलिंग\n\nराष्ट्रगौरवम् = National pride' },
        { id: 'sf69', front: 'देववाणी (devavāṇī) का अर्थ?', back: '**देववाणी = Divine Language**\n\nदेव + वाणी\n= Language of gods\n= Sanskrit\n\nसंस्कृत को देववाणी कहते हैं' },
        { id: 'sf70', front: 'व्याकरणम् (vyākaraṇam) का अर्थ?', back: '**व्याकरण = Grammar**\n\nवि + आ + कृ = to analyze\nलिंग: नपुंसकलिंग\n\nपाणिनि = व्याकरण के जनक' },
        
        // Paropkara Theme (11-20)
        { id: 'sf71', front: 'परोपकारः (paropakāraḥ) का संधि विच्छेद?', back: '**पर + उपकारः = परोपकारः**\n\nगुण संधि: अ + उ = ओ\n\nपर = others\nउपकारः = help/benefit\n= Helping others' },
        { id: 'sf72', front: 'दानम् (dānam) का अर्थ?', back: '**दान = Donation, Giving**\n\nदा धातु = to give\nलिंग: नपुंसकलिंग\n\nविद्यादानम् = Gift of knowledge\nअन्नदानम् = Food donation' },
        { id: 'sf73', front: 'सेवा (sevā) का अर्थ?', back: '**सेवा = Service**\n\nसेव् धातु = to serve\nलिंग: स्त्रीलिंग\n\nजनसेवा = Public service\nमातृसेवा = Service to mother' },
        { id: 'sf74', front: 'करुणा (karuṇā) का अर्थ?', back: '**करुणा = Compassion**\n\nलिंग: स्त्रीलिंग\n\nकरुण रस = Pathetic sentiment\nकरुणामयः = Full of compassion' },
        { id: 'sf75', front: 'दया (dayā) का अर्थ?', back: '**दया = Mercy, Kindness**\n\nलिंग: स्त्रीलिंग\n\nदयालुः = Merciful person\nनिर्दयः = Merciless' },
        { id: 'sf76', front: '"एकपदेन उत्तरत" का अर्थ?', back: '**एक शब्द में उत्तर दो**\n\nएक + पदेन = with one word\n\nExample:\nप्रश्न: कः पठति?\nउत्तर: बालकः (just one word)' },
        { id: 'sf77', front: '"माध्यम भाषायाम्" का अर्थ?', back: '**माध्यम भाषा में**\n\n= In medium language\n= English या Marathi में\n\nइस प्रकार के प्रश्न में संस्कृत में उत्तर न दें' },
        { id: 'sf78', front: 'साहित्यम् (sāhityam) का अर्थ?', back: '**साहित्य = Literature**\n\nसहित से बना = together/combined\nलिंग: नपुंसकलिंग\n\nसंस्कृत साहित्य = Sanskrit literature' },
        { id: 'sf79', front: 'महत्त्वम् (mahattvam) का अर्थ?', back: '**महत्त्व = Importance**\n\nमहत् + त्व = greatness quality\nलिंग: नपुंसकलिंग\n\nसंस्कृतस्य महत्त्वम् = Importance of Sanskrit' },
        { id: 'sf80', front: 'भाषा (bhāṣā) का अर्थ?', back: '**भाषा = Language**\n\nभाष् धातु = to speak\nलिंग: स्त्रीलिंग\n\nमातृभाषा = Mother tongue\nराष्ट्रभाषा = National language' },
        
        // Comprehension Skills (21-30)
        { id: 'sf81', front: 'गद्य और पद्य में मुख्य अंतर?', back: '**गद्य (Prose):**\n• छंदमुक्त\n• सामान्य वाक्य\n• 9 अंक\n\n**पद्य (Poetry):**\n• छंदबद्ध\n• तुकबंदी\n• 12 अंक' },
        { id: 'sf82', front: 'गद्य विभाग में कुल कितने अंक?', back: '**9 अंक (9 Marks)**\n\nBreakdown:\n• अवबोधन प्रश्न: 4-5 marks\n• स्रोत पहचान: 1 mark\n• माध्यम भाषा: 2 marks\n• शब्दज्ञान: 1-2 marks' },
        { id: 'sf83', front: '"अयं परिच्छेदः कस्मात् पाठात्..." का अर्थ?', back: '**यह परिच्छेद किस पाठ से है?**\n\nस्रोत पहचान प्रश्न (1 mark)\n\nउत्तर में पाठ का नाम लिखो:\n"अयं परिच्छेदः भारतमहिमा पाठात् गृहीतः।"' },
        { id: 'sf84', front: 'विरासत् (virāsat) का अर्थ?', back: '**विरासत = Heritage**\n\n(यह मूलतः अरबी शब्द है)\n\nसंस्कृत समानार्थक:\n• परम्परा\n• धरोहर\n• संस्कृतिः' },
        { id: 'sf85', front: 'ज्ञानम् (jñānam) का अर्थ?', back: '**ज्ञान = Knowledge**\n\nज्ञा धातु = to know\nलिंग: नपुंसकलिंग\n\nविद्या, बुद्धि, प्रज्ञा = समानार्थक' },
        { id: 'sf86', front: 'विद्या (vidyā) का अर्थ?', back: '**विद्या = Knowledge, Learning**\n\nविद् धातु = to know\nलिंग: स्त्रीलिंग\n\nविद्यालयः = School\nविद्यार्थी = Student' },
        { id: 'sf87', front: 'आचार्यः (ācāryaḥ) का अर्थ?', back: '**आचार्य = Teacher, Preceptor**\n\nआ + चर् = one who leads conduct\nलिंग: पुल्लिंग\n\nगुरुः, शिक्षकः = समानार्थक' },
        { id: 'sf88', front: 'शिष्यः (śiṣyaḥ) का अर्थ?', back: '**शिष्य = Student, Disciple**\n\nशास् धातु = to teach\nलिंग: पुल्लिंग\n\nछात्रः, विद्यार्थी = समानार्थक' },
        { id: 'sf89', front: 'धर्मः (dharmaḥ) का अर्थ?', back: '**धर्म = Duty, Religion, Righteousness**\n\nधृ धातु = to hold/support\nलिंग: पुल्लिंग\n\nधर्मशास्त्रम् = Religious scripture' },
        { id: 'sf90', front: 'सत्यम् (satyam) का अर्थ?', back: '**सत्य = Truth**\n\nअस् धातु = to be (that which is)\nलिंग: नपुंसकलिंग\n\n"सत्यमेव जयते" = Truth alone triumphs' }
      ],

      mcqs: [
        // Basic terms (1-10)
        { id: 'sm61', question: 'गद्य विभाग में कुल कितने अंक हैं?', options: ['6 अंक', '9 अंक', '12 अंक', '16 अंक'], correctIndex: 1, explanation: 'गद्य (Prose) विभाग = 9 अंक। पद्य = 12 अंक, सुगम संस्कृतम् = 6 अंक।' },
        { id: 'sm62', question: '"गद्यम्" का विलोम शब्द क्या है?', options: ['काव्यम्', 'पद्यम्', 'श्लोकः', 'गीतम्'], correctIndex: 1, explanation: 'गद्यम् (Prose) का विलोम = पद्यम् (Poetry)। गद्य छंदमुक्त, पद्य छंदबद्ध।' },
        { id: 'sm63', question: '"परिच्छेदः" का अर्थ क्या है?', options: ['कविता', 'अनुच्छेद/Passage', 'पुस्तक', 'अध्याय'], correctIndex: 1, explanation: 'परिच्छेदः = Passage/अनुच्छेद। परि + छेद = a section।' },
        { id: 'sm64', question: '"स्रोतः" का अर्थ क्या है?', options: ['नदी', 'झरना', 'मूल/Source', 'समुद्र'], correctIndex: 2, explanation: 'स्रोतः = Source/मूल। "कस्मात् पाठात्" = किस पाठ से।' },
        { id: 'sm65', question: '"भारतमहिमा" का अर्थ क्या है?', options: ['भारत का इतिहास', 'भारत की महिमा', 'भारत का नक्शा', 'भारत की भाषा'], correctIndex: 1, explanation: 'भारत + महिमा = भारत की महिमा (Glory of India)।' },
        { id: 'sm66', question: '"देववाणी" किसे कहते हैं?', options: ['हिंदी', 'संस्कृत', 'तमिल', 'मराठी'], correctIndex: 1, explanation: 'देववाणी = देवों की भाषा = संस्कृत। Sanskrit is called the divine language।' },
        { id: 'sm67', question: '"परोपकारः" में कौन सी संधि है?', options: ['दीर्घ संधि', 'गुण संधि', 'वृद्धि संधि', 'यण संधि'], correctIndex: 1, explanation: 'पर + उपकारः = परोपकारः। गुण संधि: अ + उ = ओ।' },
        { id: 'sm68', question: '"एकपदेन उत्तरत" का अर्थ?', options: ['दो शब्दों में', 'एक शब्द में', 'वाक्य में', 'पैराग्राफ में'], correctIndex: 1, explanation: 'एकपदेन = एक शब्द में। पद = word।' },
        { id: 'sm69', question: '"माध्यम भाषायाम्" का अर्थ?', options: ['संस्कृत में', 'हिंदी में', 'माध्यम भाषा (Eng/Mar) में', 'किसी भी भाषा में'], correctIndex: 2, explanation: 'माध्यम भाषा = Medium language = English या Marathi।' },
        { id: 'sm70', question: 'गद्य की विशेषता क्या है?', options: ['छंदबद्ध', 'छंदमुक्त', 'तुकबंदी', 'लय'], correctIndex: 1, explanation: 'गद्य = छंदमुक्त (without meter)। पद्य = छंदबद्ध (with meter)।' },
        
        // Vocabulary (11-20)
        { id: 'sm71', question: '"संस्कृतिः" का अर्थ?', options: ['भाषा', 'संस्कृति/Culture', 'परम्परा', 'धर्म'], correctIndex: 1, explanation: 'संस्कृतिः = Culture। सम् + कृ = well-refined।' },
        { id: 'sm72', question: '"परम्परा" का अर्थ?', options: ['संस्कृति', 'परम्परा/Tradition', 'विरासत', 'इतिहास'], correctIndex: 1, explanation: 'परम्परा = Tradition। परं परं = one after another।' },
        { id: 'sm73', question: '"गौरवम्" का अर्थ?', options: ['लज्जा', 'गौरव/Pride', 'दुःख', 'क्रोध'], correctIndex: 1, explanation: 'गौरवम् = Pride, Honor। गुरु से बना।' },
        { id: 'sm74', question: '"दानम्" का अर्थ?', options: ['लेना', 'दान/Donation', 'चोरी', 'खरीदना'], correctIndex: 1, explanation: 'दानम् = Donation, Giving। दा धातु = to give।' },
        { id: 'sm75', question: '"सेवा" का अर्थ?', options: ['आराम', 'सेवा/Service', 'मनोरंजन', 'नींद'], correctIndex: 1, explanation: 'सेवा = Service। सेव् धातु = to serve।' },
        { id: 'sm76', question: '"करुणा" का अर्थ?', options: ['क्रोध', 'करुणा/Compassion', 'हर्ष', 'भय'], correctIndex: 1, explanation: 'करुणा = Compassion, Pity। एक रस भी है।' },
        { id: 'sm77', question: '"दया" का अर्थ?', options: ['कठोरता', 'दया/Mercy', 'निर्दयता', 'क्रूरता'], correctIndex: 1, explanation: 'दया = Mercy, Kindness। दयालुः = Merciful।' },
        { id: 'sm78', question: '"व्याकरणम्" का अर्थ?', options: ['शब्दकोश', 'व्याकरण/Grammar', 'साहित्य', 'कविता'], correctIndex: 1, explanation: 'व्याकरणम् = Grammar। पाणिनि इसके जनक हैं।' },
        { id: 'sm79', question: '"साहित्यम्" का अर्थ?', options: ['संगीत', 'साहित्य/Literature', 'नृत्य', 'चित्रकला'], correctIndex: 1, explanation: 'साहित्यम् = Literature। सहित से बना।' },
        { id: 'sm80', question: '"महत्त्वम्" का अर्थ?', options: ['छोटापन', 'महत्त्व/Importance', 'सामान्यता', 'तुच्छता'], correctIndex: 1, explanation: 'महत्त्वम् = Importance। महत् + त्व।' },
        
        // Comprehension (21-30)
        { id: 'sm81', question: '"ज्ञानम्" का समानार्थक शब्द?', options: ['अज्ञान', 'विद्या', 'मूर्खता', 'अंधकार'], correctIndex: 1, explanation: 'ज्ञानम् = विद्या = बुद्धि = प्रज्ञा। सभी Knowledge के लिए।' },
        { id: 'sm82', question: '"आचार्यः" का अर्थ?', options: ['छात्र', 'आचार्य/Teacher', 'पिता', 'मित्र'], correctIndex: 1, explanation: 'आचार्यः = Teacher। गुरुः, शिक्षकः = समानार्थक।' },
        { id: 'sm83', question: '"शिष्यः" का अर्थ?', options: ['गुरु', 'शिष्य/Student', 'पिता', 'राजा'], correctIndex: 1, explanation: 'शिष्यः = Student, Disciple। छात्रः = समानार्थक।' },
        { id: 'sm84', question: '"धर्मः" का अर्थ?', options: ['अधर्म', 'धर्म/Duty', 'पाप', 'झूठ'], correctIndex: 1, explanation: 'धर्मः = Duty, Religion। धृ धातु = to hold।' },
        { id: 'sm85', question: '"सत्यम्" का विलोम?', options: ['धर्म', 'असत्यम्', 'न्याय', 'पुण्य'], correctIndex: 1, explanation: 'सत्यम् (Truth) का विलोम = असत्यम् (Falsehood)।' },
        { id: 'sm86', question: '"सत्यमेव जयते" का अर्थ?', options: ['झूठ की जीत', 'सत्य की ही जीत होती है', 'धर्म की जीत', 'शक्ति की जीत'], correctIndex: 1, explanation: 'सत्यम् एव जयते = Truth alone triumphs। भारत का राष्ट्रीय आदर्श वाक्य।' },
        { id: 'sm87', question: '"भाषा" शब्द किस धातु से बना?', options: ['गम्', 'पठ्', 'भाष्', 'लिख्'], correctIndex: 2, explanation: 'भाषा = भाष् धातु (to speak) + अ + टाप्।' },
        { id: 'sm88', question: '"विद्यालयः" का संधि विच्छेद?', options: ['विद्या + लयः', 'विद्या + आलयः', 'वि + द्यालयः', 'विद्य + आलयः'], correctIndex: 1, explanation: 'विद्या + आलयः = विद्यालयः। दीर्घ संधि: आ + आ = आ।' },
        { id: 'sm89', question: 'स्रोत पहचान प्रश्न में कितने अंक?', options: ['0.5 अंक', '1 अंक', '2 अंक', '3 अंक'], correctIndex: 1, explanation: 'स्रोत पहचान = 1 अंक। "अयं परिच्छेदः कस्मात् पाठात् गृहीतः?"' },
        { id: 'sm90', question: 'गद्य अवबोधन में क्या करना होता है?', options: ['कविता लिखना', 'परिच्छेद पढ़कर प्रश्नों के उत्तर देना', 'अनुवाद करना', 'कहानी सुनाना'], correctIndex: 1, explanation: 'अवबोधन = Comprehension। परिच्छेद पढ़कर प्रश्नों के उत्तर दो।' }
      ],

      reels: [
        // Basic terms (1-10)
        { id: 'sr61', title: 'गद्यम्', content: '📄 गद्य = Prose\n\nछंदमुक्त = No meter\n9 Marks', color: getReelColor(0) },
        { id: 'sr62', title: 'परिच्छेदः', content: '📝 परिच्छेद = Passage\n\nपरि + छेद = section', color: getReelColor(1) },
        { id: 'sr63', title: 'स्रोतः', content: '🔍 स्रोत = Source\n\n"कस्मात् पाठात्?" = 1 mark', color: getReelColor(2) },
        { id: 'sr64', title: 'भारतमहिमा', content: '🇮🇳 भारत + महिमा\n\nGlory of India', color: getReelColor(3) },
        { id: 'sr65', title: 'देववाणी', content: '🙏 देववाणी = Sanskrit\n\nLanguage of Gods', color: getReelColor(4) },
        { id: 'sr66', title: 'परोपकारः', content: '🤝 पर + उपकारः\n\nHelping Others', color: getReelColor(5) },
        { id: 'sr67', title: 'संस्कृतिः', content: '🏛️ संस्कृति = Culture\n\nसम् + कृ = refined', color: getReelColor(6) },
        { id: 'sr68', title: 'परम्परा', content: '📜 परम्परा = Tradition\n\nपरं परं = succession', color: getReelColor(7) },
        { id: 'sr69', title: 'गौरवम्', content: '🏆 गौरव = Pride\n\nराष्ट्रगौरवम्', color: getReelColor(8) },
        { id: 'sr70', title: '9 Marks', content: '📊 गद्य = 9 अंक\n\nProse Section', color: getReelColor(9) },
        
        // Vocabulary (11-20)
        { id: 'sr71', title: 'दानम्', content: '🎁 दान = Donation\n\nदा धातु = to give', color: getReelColor(0) },
        { id: 'sr72', title: 'सेवा', content: '🙏 सेवा = Service\n\nजनसेवा = Public service', color: getReelColor(1) },
        { id: 'sr73', title: 'करुणा', content: '💝 करुणा = Compassion\n\nOne of 9 rasas', color: getReelColor(2) },
        { id: 'sr74', title: 'दया', content: '🕊️ दया = Mercy\n\nदयालुः = Merciful', color: getReelColor(3) },
        { id: 'sr75', title: 'व्याकरणम्', content: '📚 व्याकरण = Grammar\n\nपाणिनि = Father', color: getReelColor(4) },
        { id: 'sr76', title: 'साहित्यम्', content: '📖 साहित्य = Literature\n\nसहित से बना', color: getReelColor(5) },
        { id: 'sr77', title: 'महत्त्वम्', content: '⭐ महत्त्व = Importance\n\nमहत् + त्व', color: getReelColor(6) },
        { id: 'sr78', title: 'भाषा', content: '🗣️ भाषा = Language\n\nभाष् धातु = speak', color: getReelColor(7) },
        { id: 'sr79', title: 'ज्ञानम्', content: '💡 ज्ञान = Knowledge\n\nज्ञा धातु = to know', color: getReelColor(8) },
        { id: 'sr80', title: 'विद्या', content: '📚 विद्या = Learning\n\nविद् धातु = to know', color: getReelColor(9) },
        
        // More vocab (21-30)
        { id: 'sr81', title: 'आचार्यः', content: '👨‍🏫 आचार्य = Teacher\n\n= गुरुः = शिक्षकः', color: getReelColor(0) },
        { id: 'sr82', title: 'शिष्यः', content: '👨‍🎓 शिष्य = Student\n\n= छात्रः', color: getReelColor(1) },
        { id: 'sr83', title: 'धर्मः', content: '☸️ धर्म = Duty\n\nधृ = to hold', color: getReelColor(2) },
        { id: 'sr84', title: 'सत्यम्', content: '✅ सत्य = Truth\n\nसत्यमेव जयते', color: getReelColor(3) },
        { id: 'sr85', title: 'एकपदेन', content: '1️⃣ एकपदेन = One word\n\nShort answer', color: getReelColor(4) },
        { id: 'sr86', title: 'माध्यम भाषा', content: '🌐 माध्यम भाषा\n\n= English/Marathi', color: getReelColor(5) },
        { id: 'sr87', title: 'Antonym', content: '↔️ गद्य ↔ पद्य\n\nProse ↔ Poetry', color: getReelColor(6) },
        { id: 'sr88', title: 'विद्यालयः', content: '🏫 विद्या + आलय\n\nHouse of Learning', color: getReelColor(7) },
        { id: 'sr89', title: 'Exam Tip', content: '💡 स्रोत पहचान\n\n= 1 Easy Mark!', color: getReelColor(8) },
        { id: 'sr90', title: 'Strategy', content: '📖 Read 3 times:\n\n1.Meaning 2.Keywords 3.Answers', color: getReelColor(9) }
      ],

      longAnswers: [
        {
          id: 'sl5',
          question: 'गद्य अवबोधन कैसे करें? (How to do Prose Comprehension)',
          answer: `### गद्य अवबोधन (Prose Comprehension) - 9 Marks

**Reading Strategy:**
1. **First Reading:** Get overall meaning
2. **Second Reading:** Identify key words
3. **Third Reading:** Locate answers

**Question Types:**

**1. पूर्ण वाक्येन उत्तरत (2-3 marks)**
- Answer in complete Sanskrit sentences
- Copy exact phrases from passage
- Subject + Object + Verb structure

**2. एकपदेन उत्तरत (1-2 marks)**
- One-word answers
- Usually nouns from passage
- Keep it simple

**3. माध्यम भाषायाम् (2 marks)**
- Answer in English or Marathi
- Explain the meaning/concept
- Don't write in Sanskrit

**4. स्रोत पहचान (1 mark)**
- Identify the lesson name
- "अयं परिच्छेदः ___ पाठात् गृहीतः।"

**Tips:**
- Underline key words while reading
- Answers are usually IN the passage
- Don't add your own interpretation`
        },
        {
          id: 'sl6',
          question: 'संस्कृत भाषा का महत्त्व क्या है?',
          answer: `### संस्कृत भाषा का महत्त्व

**1. देववाणी (Divine Language)**
- वेद, उपनिषद्, पुराण संस्कृत में
- आध्यात्मिक ज्ञान का भंडार

**2. व्याकरण की पूर्णता**
- पाणिनि का अष्टाध्यायी
- सबसे वैज्ञानिक व्याकरण
- Computer programming में उपयोगी

**3. साहित्य की समृद्धि**
- कालिदास, भवभूति, बाणभट्ट
- रामायण, महाभारत मूलतः संस्कृत में

**4. विज्ञान और गणित**
- आर्यभट्ट, वराहमिहिर
- शून्य की खोज
- आयुर्वेद, योग

**5. भारतीय भाषाओं की जननी**
- हिंदी, मराठी, बंगाली आदि
- 70%+ शब्द संस्कृत से

**Sanskrit Shloka:**
"भाषासु मुख्या मधुरा दिव्या गीर्वाणभारती"
= Languages में मुख्य, मधुर, दिव्य है संस्कृत`
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // चतुर्थ मंडलम्: नाट्यकलशः (Drama) - 8 Marks
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'san4',
      title: '4. नाट्यकलशः (Drama Section)',
      description: 'संस्कृत नाटक - Drama comprehension and analysis (8 Marks)',
      
      summary: `### नाट्यकलशः - Quick Overview

**परीक्षा में अंक: 8 Marks**

**नाट्य = Drama/Theatre**

**Exam Pattern:**
1. **नाट्यांश अवबोधन** - Drama passage comprehension
2. **संवाद पूर्ति** - Complete the dialogue
3. **पात्र परिचय** - Character identification

**Famous Sanskrit Dramatists:**
| Playwright | Famous Work |
|------------|-------------|
| कालिदास | अभिज्ञानशाकुन्तलम्, विक्रमोर्वशीयम् |
| भवभूति | उत्तररामचरितम् |
| शूद्रक | मृच्छकटिकम् |
| विशाखदत्त | मुद्राराक्षसम् |

**Key Drama Terms:**
| Term | Meaning |
|------|---------|
| नाटकम् | Drama/Play |
| नटः | Actor |
| नटी | Actress |
| रंगमंचः | Stage |
| अभिनयः | Acting |`,

      detailedNotes: `### नाट्यकलशः (Drama) - Detailed Study Notes

## भरत मुनि का नाट्यशास्त्र

**नाट्यशास्त्र = The Science of Drama**
- Written by भरत मुनि
- 36 chapters on drama, dance, music
- Foundation of Indian performing arts

## Key Concepts:

### 1. रस (Rasa) - Aesthetic Sentiments

**नवरस (Nine Rasas):**
| रस | Emotion | स्थायी भाव |
|----|---------|-----------|
| श्रृंगार | Love | रति |
| हास्य | Humor | हास |
| करुण | Pathos | शोक |
| रौद्र | Anger | क्रोध |
| वीर | Heroism | उत्साह |
| भयानक | Fear | भय |
| बीभत्स | Disgust | जुगुप्सा |
| अद्भुत | Wonder | विस्मय |
| शान्त | Peace | निर्वेद |

### 2. अभिनय (Acting) - Four Types:
1. **आङ्गिक** - Body movements
2. **वाचिक** - Speech/Dialogue
3. **आहार्य** - Costume/Makeup
4. **सात्त्विक** - Internal emotions

### 3. नाटक के अंग (Parts of Drama):

**पात्र (Characters):**
| Term | Meaning |
|------|---------|
| नायकः | Hero |
| नायिका | Heroine |
| प्रतिनायकः | Villain |
| विदूषकः | Comedian |
| सखी | Friend (female) |

**रंगमंच (Stage Elements):**
| Term | Meaning |
|------|---------|
| रंगमंचः | Stage |
| पर्दा/यवनिका | Curtain |
| नेपथ्यम् | Backstage |
| प्रवेशः | Entry |
| निष्क्रमणम् | Exit |

## Exam Focus:

### संवाद पूर्ति (Dialogue Completion):
- Given: Incomplete dialogue
- Task: Fill the missing part
- Use context clues

### पात्र परिचय (Character Identification):
- "कः वदति?" = Who speaks?
- Identify speaker from dialogue style

### अवबोधन प्रश्न:
- पूर्ण वाक्येन उत्तरत
- एकपदेन उत्तरत
- सत्यम्/असत्यम्`,

      flashcards: [
        // Drama Terms (1-10)
        { id: 'sf91', front: 'नाटकम् (nāṭakam) का अर्थ?', back: '**नाटक = Drama/Play**\n\nनट् धातु = to act\nलिंग: नपुंसकलिंग\n\nनाट्यशास्त्र = Science of Drama\nभरत मुनि = Author' },
        { id: 'sf92', front: 'नाट्यशास्त्र किसने लिखा?', back: '**भरत मुनि**\n\nनाट्यशास्त्र = 36 अध्याय\n\nविषय:\n• नाटक\n• नृत्य\n• संगीत\n• रस\n• अभिनय' },
        { id: 'sf93', front: 'नटः (naṭaḥ) का अर्थ?', back: '**नट = Actor (पुरुष)**\n\nनट् धातु = to act/dance\nलिंग: पुल्लिंग\n\nनटी = Actress (स्त्री)' },
        { id: 'sf94', front: 'रंगमंचः (raṅgamañcaḥ) का अर्थ?', back: '**रंगमंच = Stage**\n\nरंग + मंच\nरंग = color/drama\nमंच = platform\n\n= Theatre stage' },
        { id: 'sf95', front: 'अभिनयः (abhinayaḥ) का अर्थ?', back: '**अभिनय = Acting**\n\nअभि + नी = to lead towards\n= expressing emotions\n\nचार प्रकार:\nआङ्गिक, वाचिक, आहार्य, सात्त्विक' },
        { id: 'sf96', front: 'नायकः (nāyakaḥ) का अर्थ?', back: '**नायक = Hero**\n\nनी धातु = to lead\nलिंग: पुल्लिंग\n\nनायिका = Heroine (स्त्री)\nप्रतिनायकः = Villain' },
        { id: 'sf97', front: 'विदूषकः (vidūṣakaḥ) का अर्थ?', back: '**विदूषक = Comedian/Jester**\n\nवि + दूष् = to mock gently\n\nनाटक में हास्य पैदा करने वाला पात्र\nUsually नायक का मित्र' },
        { id: 'sf98', front: 'यवनिका (yavanikā) का अर्थ?', back: '**यवनिका = Curtain**\n\nरंगमंच का पर्दा\nलिंग: स्त्रीलिंग\n\nसमानार्थक: पर्दा, तिरस्करिणी' },
        { id: 'sf99', front: 'नेपथ्यम् (nepathyam) का अर्थ?', back: '**नेपथ्य = Backstage**\n\nलिंग: नपुंसकलिंग\n\nजहाँ पात्र तैयार होते हैं\nGreen room / dressing area' },
        { id: 'sf100', front: 'प्रवेशः (praveśaḥ) का अर्थ?', back: '**प्रवेश = Entry/Entrance**\n\nप्र + विश् = to enter\nलिंग: पुल्लिंग\n\nविलोम: निष्क्रमणम् (Exit)' },
        
        // Rasa (11-20)
        { id: 'sf101', front: 'रसः (rasaḥ) का अर्थ नाट्य में?', back: '**रस = Aesthetic Sentiment**\n\nरस् धातु = to taste/enjoy\n\nदर्शक को जो आनंद मिलता है\n\nनवरस = 9 Rasas\n"रसो वै सः" = रस ही ब्रह्म है' },
        { id: 'sf102', front: 'नवरस कौन-कौन से हैं?', back: '**नव रस (9 Rasas):**\n\n1. श्रृंगार (Love)\n2. हास्य (Humor)\n3. करुण (Pathos)\n4. रौद्र (Anger)\n5. वीर (Heroism)\n6. भयानक (Fear)\n7. बीभत्स (Disgust)\n8. अद्भुत (Wonder)\n9. शान्त (Peace)' },
        { id: 'sf103', front: 'श्रृंगार रस का स्थायी भाव?', back: '**रति (Love)**\n\nश्रृंगार = रस राजा\n\nदो प्रकार:\n• संयोग श्रृंगार (Union)\n• वियोग श्रृंगार (Separation)' },
        { id: 'sf104', front: 'हास्य रस का स्थायी भाव?', back: '**हास (Laughter)**\n\nहास्य रस = Comedy\n\nविदूषक = हास्य उत्पन्न करता है\nहस् धातु = to laugh' },
        { id: 'sf105', front: 'करुण रस का स्थायी भाव?', back: '**शोक (Sorrow)**\n\nकरुण = Pathos/Tragedy\n\nदुखद घटनाओं से उत्पन्न\nउदाहरण: राम-सीता वियोग' },
        { id: 'sf106', front: 'वीर रस का स्थायी भाव?', back: '**उत्साह (Enthusiasm)**\n\nवीर = Heroism\n\nयुद्ध, साहस के दृश्य\nउदाहरण: महाभारत युद्ध' },
        { id: 'sf107', front: 'रौद्र रस का स्थायी भाव?', back: '**क्रोध (Anger)**\n\nरौद्र = रुद्र से = Fierce\n\nक्रोध की अभिव्यक्ति\nउदाहरण: परशुराम का क्रोध' },
        { id: 'sf108', front: 'भयानक रस का स्थायी भाव?', back: '**भय (Fear)**\n\nभयानक = Terrible\n\nडरावने दृश्य\nउदाहरण: राक्षस का आगमन' },
        { id: 'sf109', front: 'अद्भुत रस का स्थायी भाव?', back: '**विस्मय (Wonder)**\n\nअद्भुत = Marvelous\n\nआश्चर्यजनक घटनाएं\nउदाहरण: दैवीय चमत्कार' },
        { id: 'sf110', front: 'शान्त रस का स्थायी भाव?', back: '**निर्वेद (Detachment)**\n\nशान्त = Peace\n\nवैराग्य, मोक्ष की भावना\n9वां रस - बाद में जोड़ा गया' },
        
        // Famous Plays (21-30)
        { id: 'sf111', front: 'कालिदास के प्रसिद्ध नाटक?', back: '**कालिदास के नाटक:**\n\n1. अभिज्ञानशाकुन्तलम्\n   (Recognition of Shakuntala)\n\n2. विक्रमोर्वशीयम्\n   (Urvashi won by valor)\n\n3. मालविकाग्निमित्रम्\n   (Malavika & Agnimitra)' },
        { id: 'sf112', front: 'अभिज्ञानशाकुन्तलम् का विषय?', back: '**शकुन्तला और दुष्यन्त की कथा**\n\nअभिज्ञान = Recognition\nशकुन्तला = Heroine\n\nप्रेम → शाप → विस्मृति → पुनर्मिलन\n\n"काव्येषु नाटकं रम्यम्"' },
        { id: 'sf113', front: 'भवभूति का प्रसिद्ध नाटक?', back: '**उत्तररामचरितम्**\n\nUttara = Later\nRama Charita = Story of Rama\n\nराम-सीता के बाद की कथा\nसीता-निर्वासन\nकरुण रस प्रधान' },
        { id: 'sf114', front: 'शूद्रक का प्रसिद्ध नाटक?', back: '**मृच्छकटिकम्**\n\nमृत् + शकटिका = Clay Cart\n\nचारुदत्त और वसन्तसेना\nसामाजिक नाटक\n10 अंक' },
        { id: 'sf115', front: 'मुद्राराक्षसम् किसने लिखा?', back: '**विशाखदत्त**\n\nमुद्रा = Seal\nराक्षस = Minister\'s name\n\nचन्द्रगुप्त मौर्य की कथा\nराजनीतिक नाटक' },
        { id: 'sf116', front: 'अभिनय के चार प्रकार?', back: '**चार अभिनय:**\n\n1. **आङ्गिक** - शरीर (Body)\n2. **वाचिक** - वाणी (Speech)\n3. **आहार्य** - वेशभूषा (Costume)\n4. **सात्त्विक** - आंतरिक भाव (Internal)' },
        { id: 'sf117', front: 'आङ्गिक अभिनय क्या है?', back: '**शारीरिक अभिनय**\n\nअंग = body part\n\n• हाथों का संचालन\n• मुखमुद्रा\n• नेत्र संचालन\n• शरीर की गति' },
        { id: 'sf118', front: 'वाचिक अभिनय क्या है?', back: '**वाणी द्वारा अभिनय**\n\nवाक् = speech\n\n• संवाद\n• स्वर का उतार-चढ़ाव\n• गीत\n• उच्चारण' },
        { id: 'sf119', front: 'नाट्य विभाग में कितने अंक?', back: '**8 अंक (8 Marks)**\n\nExam Pattern:\n• नाट्यांश अवबोधन\n• संवाद पूर्ति\n• पात्र परिचय\n• प्रश्नोत्तर' },
        { id: 'sf120', front: '"कः वदति?" का अर्थ?', back: '**कौन बोलता है?**\n\nपात्र परिचय प्रश्न\n\n= Who speaks?\n= Identify the character\n\nसंवाद से पात्र पहचानो' }
      ],

      mcqs: [
        // Drama basics (1-10)
        { id: 'sm91', question: 'नाट्य विभाग में कुल कितने अंक हैं?', options: ['6 अंक', '8 अंक', '9 अंक', '12 अंक'], correctIndex: 1, explanation: 'नाट्यकलशः (Drama) विभाग = 8 अंक।' },
        { id: 'sm92', question: 'नाट्यशास्त्र के रचयिता कौन हैं?', options: ['कालिदास', 'भरत मुनि', 'पाणिनि', 'वाल्मीकि'], correctIndex: 1, explanation: 'भरत मुनि ने नाट्यशास्त्र लिखा - 36 अध्याय।' },
        { id: 'sm93', question: '"नटः" का अर्थ क्या है?', options: ['दर्शक', 'अभिनेता/Actor', 'लेखक', 'निर्देशक'], correctIndex: 1, explanation: 'नटः = Actor (पुरुष)। नटी = Actress (स्त्री)।' },
        { id: 'sm94', question: '"रंगमंचः" का अर्थ क्या है?', options: ['थिएटर', 'मंच/Stage', 'पर्दा', 'दर्शक गृह'], correctIndex: 1, explanation: 'रंगमंचः = Stage। रंग + मंच।' },
        { id: 'sm95', question: '"अभिनयः" का अर्थ क्या है?', options: ['नृत्य', 'गायन', 'अभिनय/Acting', 'लेखन'], correctIndex: 2, explanation: 'अभिनयः = Acting। अभि + नी = भावों को प्रकट करना।' },
        { id: 'sm96', question: '"नायकः" का अर्थ क्या है?', options: ['खलनायक', 'नायक/Hero', 'सहायक', 'दर्शक'], correctIndex: 1, explanation: 'नायकः = Hero। नायिका = Heroine।' },
        { id: 'sm97', question: '"विदूषकः" का क्या कार्य है?', options: ['रोना', 'हास्य उत्पन्न करना', 'युद्ध', 'गाना'], correctIndex: 1, explanation: 'विदूषक = Comedian। नाटक में हास्य पैदा करता है।' },
        { id: 'sm98', question: '"यवनिका" का अर्थ क्या है?', options: ['मंच', 'पर्दा/Curtain', 'दर्शक', 'नाटक'], correctIndex: 1, explanation: 'यवनिका = Curtain। रंगमंच का पर्दा।' },
        { id: 'sm99', question: '"नेपथ्यम्" का अर्थ क्या है?', options: ['मंच के आगे', 'मंच के पीछे/Backstage', 'दर्शक गृह', 'प्रवेश द्वार'], correctIndex: 1, explanation: 'नेपथ्यम् = Backstage। जहाँ पात्र तैयार होते हैं।' },
        { id: 'sm100', question: '"प्रवेशः" का विलोम क्या है?', options: ['आगमन', 'निष्क्रमणम्/Exit', 'स्थिति', 'गमन'], correctIndex: 1, explanation: 'प्रवेश (Entry) का विलोम = निष्क्रमणम् (Exit)।' },
        
        // Rasa (11-20)
        { id: 'sm101', question: 'नवरस में कितने रस हैं?', options: ['7', '8', '9', '10'], correctIndex: 2, explanation: 'नवरस = 9 रस। नव = nine।' },
        { id: 'sm102', question: 'श्रृंगार रस का स्थायी भाव?', options: ['शोक', 'रति', 'क्रोध', 'भय'], correctIndex: 1, explanation: 'श्रृंगार रस का स्थायी भाव = रति (Love)।' },
        { id: 'sm103', question: 'हास्य रस का स्थायी भाव?', options: ['विस्मय', 'उत्साह', 'हास', 'शोक'], correctIndex: 2, explanation: 'हास्य रस का स्थायी भाव = हास (Laughter)।' },
        { id: 'sm104', question: 'करुण रस का स्थायी भाव?', options: ['भय', 'शोक', 'क्रोध', 'रति'], correctIndex: 1, explanation: 'करुण रस का स्थायी भाव = शोक (Sorrow)।' },
        { id: 'sm105', question: 'वीर रस का स्थायी भाव?', options: ['उत्साह', 'भय', 'हास', 'रति'], correctIndex: 0, explanation: 'वीर रस का स्थायी भाव = उत्साह (Enthusiasm)।' },
        { id: 'sm106', question: 'रौद्र रस का स्थायी भाव?', options: ['शोक', 'भय', 'क्रोध', 'विस्मय'], correctIndex: 2, explanation: 'रौद्र रस का स्थायी भाव = क्रोध (Anger)।' },
        { id: 'sm107', question: 'भयानक रस का स्थायी भाव?', options: ['क्रोध', 'भय', 'जुगुप्सा', 'विस्मय'], correctIndex: 1, explanation: 'भयानक रस का स्थायी भाव = भय (Fear)।' },
        { id: 'sm108', question: 'अद्भुत रस का स्थायी भाव?', options: ['निर्वेद', 'विस्मय', 'उत्साह', 'शोक'], correctIndex: 1, explanation: 'अद्भुत रस का स्थायी भाव = विस्मय (Wonder)।' },
        { id: 'sm109', question: 'शान्त रस का स्थायी भाव?', options: ['रति', 'हास', 'निर्वेद', 'उत्साह'], correctIndex: 2, explanation: 'शान्त रस का स्थायी भाव = निर्वेद (Detachment)।' },
        { id: 'sm110', question: 'रस राजा किसे कहते हैं?', options: ['वीर', 'श्रृंगार', 'हास्य', 'करुण'], correctIndex: 1, explanation: 'श्रृंगार रस को "रस राजा" कहते हैं।' },
        
        // Famous plays (21-30)
        { id: 'sm111', question: '"अभिज्ञानशाकुन्तलम्" के रचयिता?', options: ['भवभूति', 'कालिदास', 'शूद्रक', 'भास'], correctIndex: 1, explanation: 'कालिदास ने अभिज्ञानशाकुन्तलम् लिखा।' },
        { id: 'sm112', question: '"उत्तररामचरितम्" के रचयिता?', options: ['कालिदास', 'भवभूति', 'शूद्रक', 'विशाखदत्त'], correctIndex: 1, explanation: 'भवभूति ने उत्तररामचरितम् लिखा।' },
        { id: 'sm113', question: '"मृच्छकटिकम्" के रचयिता?', options: ['भास', 'शूद्रक', 'कालिदास', 'भवभूति'], correctIndex: 1, explanation: 'शूद्रक ने मृच्छकटिकम् लिखा।' },
        { id: 'sm114', question: '"मुद्राराक्षसम्" के रचयिता?', options: ['विशाखदत्त', 'कालिदास', 'भास', 'शूद्रक'], correctIndex: 0, explanation: 'विशाखदत्त ने मुद्राराक्षसम् लिखा।' },
        { id: 'sm115', question: 'अभिनय के कितने प्रकार हैं?', options: ['2', '3', '4', '5'], correctIndex: 2, explanation: 'चार अभिनय: आङ्गिक, वाचिक, आहार्य, सात्त्विक।' },
        { id: 'sm116', question: 'आङ्गिक अभिनय किससे संबंधित है?', options: ['वाणी', 'शरीर', 'वेशभूषा', 'भाव'], correctIndex: 1, explanation: 'आङ्गिक = अंग (body) से संबंधित = शारीरिक अभिनय।' },
        { id: 'sm117', question: 'वाचिक अभिनय किससे संबंधित है?', options: ['शरीर', 'वाणी/Speech', 'वेश', 'मन'], correctIndex: 1, explanation: 'वाचिक = वाक् (speech) से = संवाद अभिनय।' },
        { id: 'sm118', question: 'आहार्य अभिनय किससे संबंधित है?', options: ['शरीर', 'वाणी', 'वेशभूषा/Costume', 'भाव'], correctIndex: 2, explanation: 'आहार्य = वेशभूषा, मेकअप, सजावट से संबंधित।' },
        { id: 'sm119', question: '"कः वदति?" का अर्थ?', options: ['क्या बोलता है?', 'कौन बोलता है?', 'कब बोलता है?', 'कहाँ बोलता है?'], correctIndex: 1, explanation: 'कः = Who, वदति = speaks। कौन बोलता है?।' },
        { id: 'sm120', question: '"प्रतिनायकः" का अर्थ?', options: ['सहनायक', 'खलनायक/Villain', 'नायक', 'मित्र'], correctIndex: 1, explanation: 'प्रति + नायक = against hero = Villain।' }
      ],

      reels: [
        // Drama basics (1-10)
        { id: 'sr91', title: 'नाट्यकलशः', content: '🎭 नाट्य = Drama\n\n8 Marks Section', color: getReelColor(0) },
        { id: 'sr92', title: 'भरत मुनि', content: '📚 नाट्यशास्त्र के लेखक\n\n36 अध्याय', color: getReelColor(1) },
        { id: 'sr93', title: 'नटः/नटी', content: '🎭 नट = Actor\nनटी = Actress', color: getReelColor(2) },
        { id: 'sr94', title: 'रंगमंचः', content: '🎪 रंगमंच = Stage\n\nरंग + मंच', color: getReelColor(3) },
        { id: 'sr95', title: 'अभिनयः', content: '🎬 अभिनय = Acting\n\n4 types!', color: getReelColor(4) },
        { id: 'sr96', title: 'नायक/नायिका', content: '👑 नायक = Hero\nनायिका = Heroine', color: getReelColor(5) },
        { id: 'sr97', title: 'विदूषकः', content: '🤡 विदूषक = Comedian\n\nहास्य उत्पन्न करता है', color: getReelColor(6) },
        { id: 'sr98', title: 'यवनिका', content: '🎪 यवनिका = Curtain\n\nStage पर्दा', color: getReelColor(7) },
        { id: 'sr99', title: 'नेपथ्यम्', content: '🚪 नेपथ्य = Backstage\n\nGreen Room', color: getReelColor(8) },
        { id: 'sr100', title: 'प्रवेश/निष्क्रमण', content: '↔️ प्रवेश = Entry\nनिष्क्रमण = Exit', color: getReelColor(9) },
        
        // Rasa (11-20)
        { id: 'sr101', title: 'नवरस', content: '9️⃣ नव रस = 9 Rasas\n\nAesthetic Sentiments', color: getReelColor(0) },
        { id: 'sr102', title: 'श्रृंगार', content: '💕 श्रृंगार = Love\n\nस्थायी भाव: रति', color: getReelColor(1) },
        { id: 'sr103', title: 'हास्य', content: '😂 हास्य = Humor\n\nस्थायी भाव: हास', color: getReelColor(2) },
        { id: 'sr104', title: 'करुण', content: '😢 करुण = Pathos\n\nस्थायी भाव: शोक', color: getReelColor(3) },
        { id: 'sr105', title: 'वीर', content: '⚔️ वीर = Heroism\n\nस्थायी भाव: उत्साह', color: getReelColor(4) },
        { id: 'sr106', title: 'रौद्र', content: '😤 रौद्र = Anger\n\nस्थायी भाव: क्रोध', color: getReelColor(5) },
        { id: 'sr107', title: 'भयानक', content: '😱 भयानक = Fear\n\nस्थायी भाव: भय', color: getReelColor(6) },
        { id: 'sr108', title: 'अद्भुत', content: '😲 अद्भुत = Wonder\n\nस्थायी भाव: विस्मय', color: getReelColor(7) },
        { id: 'sr109', title: 'शान्त', content: '🧘 शान्त = Peace\n\nस्थायी भाव: निर्वेद', color: getReelColor(8) },
        { id: 'sr110', title: 'रस राजा', content: '👑 श्रृंगार = रस राजा\n\nKing of Rasas', color: getReelColor(9) },
        
        // Famous plays (21-30)
        { id: 'sr111', title: 'कालिदास', content: '✨ अभिज्ञानशाकुन्तलम्\n\nGreatest Sanskrit Play', color: getReelColor(0) },
        { id: 'sr112', title: 'भवभूति', content: '📜 उत्तररामचरितम्\n\nRama\'s later story', color: getReelColor(1) },
        { id: 'sr113', title: 'शूद्रक', content: '🛒 मृच्छकटिकम्\n\nThe Clay Cart', color: getReelColor(2) },
        { id: 'sr114', title: 'विशाखदत्त', content: '💍 मुद्राराक्षसम्\n\nPolitical Drama', color: getReelColor(3) },
        { id: 'sr115', title: '4 अभिनय', content: '🎭 आङ्गिक, वाचिक\nआहार्य, सात्त्विक', color: getReelColor(4) },
        { id: 'sr116', title: 'आङ्गिक', content: '💪 आङ्गिक = Body\n\nPhysical Acting', color: getReelColor(5) },
        { id: 'sr117', title: 'वाचिक', content: '🗣️ वाचिक = Speech\n\nDialogue Delivery', color: getReelColor(6) },
        { id: 'sr118', title: 'आहार्य', content: '👗 आहार्य = Costume\n\nMakeup & Dress', color: getReelColor(7) },
        { id: 'sr119', title: 'सात्त्विक', content: '💭 सात्त्विक = Internal\n\nEmotional Acting', color: getReelColor(8) },
        { id: 'sr120', title: '8 Marks', content: '📊 नाट्यकलशः\n\n8 Easy Marks!', color: getReelColor(9) }
      ],

      longAnswers: [
        {
          id: 'sl7',
          question: 'नवरस का परिचय दीजिए।',
          answer: `### नवरस (Nine Rasas)

**रस = Aesthetic Sentiment**

भरत मुनि ने नाट्यशास्त्र में 8 रस बताए, बाद में शान्त रस जोड़ा गया।

**नौ रस और उनके स्थायी भाव:**

| रस | English | स्थायी भाव |
|----|---------|-----------|
| श्रृंगार | Love | रति |
| हास्य | Humor | हास |
| करुण | Pathos | शोक |
| रौद्र | Anger | क्रोध |
| वीर | Heroism | उत्साह |
| भयानक | Fear | भय |
| बीभत्स | Disgust | जुगुप्सा |
| अद्भुत | Wonder | विस्मय |
| शान्त | Peace | निर्वेद |

**रस राजा:** श्रृंगार रस

**महत्त्व:**
- काव्य/नाटक की आत्मा
- दर्शक को आनंद
- "रसो वै सः"`
        },
        {
          id: 'sl8',
          question: 'अभिनय के चार प्रकार बताइए।',
          answer: `### चार प्रकार के अभिनय

**1. आङ्गिक अभिनय (Physical)**
- शरीर के अंगों द्वारा
- हाथ, मुख, नेत्र का संचालन
- मुद्राएं और भाव-भंगिमा

**2. वाचिक अभिनय (Verbal)**
- वाणी द्वारा अभिव्यक्ति
- संवाद, गीत, स्वर
- उच्चारण की स्पष्टता

**3. आहार्य अभिनय (External)**
- वेशभूषा और मेकअप
- आभूषण, रंगसज्जा
- मंच सजावट

**4. सात्त्विक अभिनय (Internal)**
- आंतरिक भावों की अभिव्यक्ति
- रोमांच, स्वेद, अश्रु
- सबसे कठिन अभिनय

**Exam में:** अक्सर पूछा जाता है कि कौन सा अभिनय किससे संबंधित है।`
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // पंचम मंडलम्: साहित्य परिचय (Literature Introduction) - 6 Marks
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'san5',
      title: '5. साहित्य परिचय (Literature Introduction)',
      description: 'संस्कृत साहित्य का परिचय - Introduction to Sanskrit Literature (6 Marks)',
      
      summary: `### साहित्य परिचय - Quick Overview

**परीक्षा में अंक: 6 Marks**

**साहित्य = Literature (सहित + य = with togetherness)**

**संस्कृत साहित्य के मुख्य विभाग:**

| विभाग | Examples |
|-------|----------|
| वैदिक | वेद, उपनिषद्, ब्राह्मण |
| महाकाव्य | रामायण, महाभारत |
| काव्य | रघुवंशम्, कुमारसंभवम् |
| नाटक | शाकुन्तलम्, मृच्छकटिकम् |
| गद्य | कादम्बरी, दशकुमारचरितम् |

**प्रमुख साहित्यकार:**
| Name | Famous For |
|------|------------|
| वाल्मीकि | रामायण (आदिकवि) |
| व्यास | महाभारत |
| कालिदास | अभिज्ञानशाकुन्तलम् |
| भवभूति | उत्तररामचरितम् |`,

      detailedNotes: `### साहित्य परिचय - Detailed Study Notes

## संस्कृत साहित्य का वर्गीकरण

### 1. वैदिक साहित्य (Vedic Literature)

**चार वेद:**
| वेद | विषय |
|-----|------|
| ऋग्वेद | स्तुति मंत्र |
| यजुर्वेद | यज्ञ विधि |
| सामवेद | संगीत/गान |
| अथर्ववेद | आयुर्वेद, जादू |

**अन्य वैदिक ग्रंथ:**
- ब्राह्मण - यज्ञ व्याख्या
- आरण्यक - वन में पठनीय
- उपनिषद् - दर्शन/ज्ञान

### 2. महाकाव्य (Epics)

**रामायण:**
- रचयिता: वाल्मीकि (आदिकवि)
- काण्ड: 7 (बाल, अयोध्या, अरण्य, किष्किन्धा, सुन्दर, युद्ध, उत्तर)
- श्लोक: ~24,000
- विषय: राम की कथा

**महाभारत:**
- रचयिता: वेदव्यास
- पर्व: 18
- श्लोक: ~100,000
- विषय: कुरुक्षेत्र युद्ध
- भगवद्गीता इसी में

### 3. काव्य साहित्य (Poetry)

**महाकाव्य के लक्षण:**
- सर्ग में विभाजित
- नायक धीरोदात्त
- रस की प्रधानता
- प्रकृति वर्णन

**कालिदास के काव्य:**
| काव्य | विषय |
|-------|------|
| रघुवंशम् | रघुवंश की कथा |
| कुमारसंभवम् | कार्तिकेय जन्म |
| मेघदूतम् | विरह संदेश |
| ऋतुसंहारम् | छह ऋतुएं |

### 4. गद्य साहित्य (Prose)

**प्रमुख गद्यकार:**
| लेखक | रचना |
|------|------|
| बाणभट्ट | कादम्बरी, हर्षचरितम् |
| दण्डी | दशकुमारचरितम् |
| सुबन्धु | वासवदत्ता |

### 5. नीति साहित्य (Didactic Literature)

**पंचतंत्र:**
- रचयिता: विष्णुशर्मा
- 5 तंत्र (खंड)
- पशु-पक्षी कथाएं
- नीति शिक्षा

**हितोपदेश:**
- रचयिता: नारायण पंडित
- 4 भाग
- मित्रता, शत्रुता की शिक्षा`,

      flashcards: [
        // Literature basics (1-10)
        { id: 'sf121', front: 'साहित्यम् (sāhityam) का व्युत्पत्ति अर्थ?', back: '**सहित + य = साहित्य**\n\nसहित = together/with\nसाहित्य = that which has togetherness\n\nशब्द और अर्थ का सहभाव\n"शब्दार्थौ सहितौ काव्यम्"' },
        { id: 'sf122', front: 'आदिकवि किसे कहते हैं?', back: '**वाल्मीकि**\n\nआदि = first\nकवि = poet\n\nरामायण के रचयिता\nसंस्कृत के प्रथम कवि\n\n"मा निषाद..." = प्रथम श्लोक' },
        { id: 'sf123', front: 'चार वेदों के नाम बताइए।', back: '**चार वेद:**\n\n1. ऋग्वेद - स्तुति मंत्र\n2. यजुर्वेद - यज्ञ विधि\n3. सामवेद - संगीत\n4. अथर्ववेद - आयुर्वेद\n\nवेद = ज्ञान (विद् धातु)' },
        { id: 'sf124', front: 'रामायण के रचयिता कौन हैं?', back: '**वाल्मीकि**\n\nरामायण = राम + अयन (journey)\n\n7 काण्ड, ~24,000 श्लोक\n\nआदिकाव्य = First epic' },
        { id: 'sf125', front: 'महाभारत के रचयिता कौन हैं?', back: '**वेदव्यास**\n\nव्यास = arranger/compiler\n\n18 पर्व, ~100,000 श्लोक\n\nभगवद्गीता इसी में है\n"यन्न भारते तन्न भारते"' },
        { id: 'sf126', front: 'कालिदास को क्या उपाधि मिली?', back: '**कविकुलगुरु**\n\nकवि + कुल + गुरु\n= कवियों के कुल के गुरु\n\nसंस्कृत के महानतम कवि\nविक्रमादित्य के नवरत्न में' },
        { id: 'sf127', front: 'उपनिषद् का अर्थ?', back: '**उप + नि + षद् = पास बैठना**\n\nगुरु के पास बैठकर ज्ञान प्राप्त करना\n\nदार्शनिक ग्रंथ\nवेदान्त = उपनिषद्\n\n108+ उपनिषद्' },
        { id: 'sf128', front: 'पंचतंत्र के रचयिता?', back: '**विष्णुशर्मा**\n\nपंच + तंत्र = 5 sections\n\n5 भाग:\n1. मित्रभेद\n2. मित्रसम्प्राप्ति\n3. काकोलूकीयम्\n4. लब्धप्रणाश\n5. अपरीक्षितकारकम्' },
        { id: 'sf129', front: 'कादम्बरी के रचयिता?', back: '**बाणभट्ट**\n\nकादम्बरी = गद्य काव्य\n\nहर्षवर्धन के दरबारी कवि\n\nअन्य रचना: हर्षचरितम्\n\nगद्य सम्राट' },
        { id: 'sf130', front: 'मेघदूतम् किसकी रचना है?', back: '**कालिदास**\n\nमेघ + दूत = Cloud messenger\n\nखण्डकाव्य/गीतिकाव्य\n\nयक्ष की विरह कथा\nमेघ द्वारा संदेश' },
        
        // Vedas & Epics (11-20)
        { id: 'sf131', front: 'ऋग्वेद का विषय क्या है?', back: '**स्तुति मंत्र / Hymns**\n\nऋक् = praise\n\nदेवताओं की स्तुति\nसबसे प्राचीन वेद\n\n10 मण्डल, 1028 सूक्त' },
        { id: 'sf132', front: 'यजुर्वेद का विषय क्या है?', back: '**यज्ञ विधि / Rituals**\n\nयजुस् = sacrifice\n\nयज्ञ करने की विधि\n\nदो भाग:\n• शुक्ल यजुर्वेद\n• कृष्ण यजुर्वेद' },
        { id: 'sf133', front: 'सामवेद का विषय क्या है?', back: '**संगीत / Music**\n\nसाम = melody/song\n\nमंत्रों का गायन\nभारतीय संगीत का मूल\n\nऋग्वेद के मंत्रों का गेय रूप' },
        { id: 'sf134', front: 'अथर्ववेद का विषय क्या है?', back: '**आयुर्वेद, तंत्र-मंत्र**\n\nअथर्वन् = priest\n\nरोग निवारण\nशान्ति कर्म\nदैनिक जीवन' },
        { id: 'sf135', front: 'रामायण में कितने काण्ड हैं?', back: '**7 काण्ड:**\n\n1. बालकाण्ड\n2. अयोध्याकाण्ड\n3. अरण्यकाण्ड\n4. किष्किन्धाकाण्ड\n5. सुन्दरकाण्ड\n6. युद्धकाण्ड (लंकाकाण्ड)\n7. उत्तरकाण्ड' },
        { id: 'sf136', front: 'महाभारत में कितने पर्व हैं?', back: '**18 पर्व**\n\nआदि, सभा, वन, विराट...\n\nभीष्म पर्व में:\nभगवद्गीता (18 अध्याय)\n\n"धर्मक्षेत्रे कुरुक्षेत्रे..."' },
        { id: 'sf137', front: 'भगवद्गीता किस ग्रंथ में है?', back: '**महाभारत में**\n\nभीष्म पर्व के अंतर्गत\n\n18 अध्याय, 700 श्लोक\n\nकृष्ण-अर्जुन संवाद\nकर्मयोग, ज्ञानयोग, भक्तियोग' },
        { id: 'sf138', front: '"यन्न भारते तन्न भारते" का अर्थ?', back: '**जो भारत में नहीं वो कहीं नहीं**\n\nमहाभारत की महिमा\n\nभारत = महाभारत\n\nसभी विषय इसमें हैं:\nधर्म, अर्थ, काम, मोक्ष' },
        { id: 'sf139', front: 'ब्राह्मण ग्रंथ क्या हैं?', back: '**यज्ञ की व्याख्या**\n\nवेदों की व्याख्या करने वाले ग्रंथ\n\nगद्य में लिखे\n\nउदाहरण:\n• ऐतरेय ब्राह्मण\n• शतपथ ब्राह्मण' },
        { id: 'sf140', front: 'आरण्यक क्या हैं?', back: '**वन में पठनीय ग्रंथ**\n\nअरण्य = forest\n\nब्राह्मण और उपनिषद् के बीच\n\nयज्ञ का आध्यात्मिक अर्थ\nवानप्रस्थियों के लिए' },
        
        // Poets & Works (21-30)
        { id: 'sf141', front: 'कालिदास की चार रचनाएं?', back: '**काव्य:**\n1. रघुवंशम्\n2. कुमारसंभवम्\n3. मेघदूतम्\n4. ऋतुसंहारम्\n\n**नाटक:**\n1. अभिज्ञानशाकुन्तलम्\n2. विक्रमोर्वशीयम्\n3. मालविकाग्निमित्रम्' },
        { id: 'sf142', front: 'रघुवंशम् का विषय?', back: '**रघुवंश की कथा**\n\nरचयिता: कालिदास\n\nमहाकाव्य (19 सर्ग)\n\nदिलीप से अग्निवर्ण तक\nराम की कथा केंद्रित' },
        { id: 'sf143', front: 'कुमारसंभवम् का विषय?', back: '**कुमार (कार्तिकेय) का जन्म**\n\nरचयिता: कालिदास\n\nशिव-पार्वती विवाह\nतारकासुर वध के लिए\n\n17 सर्ग (8 कालिदास के)' },
        { id: 'sf144', front: 'हर्षचरितम् के रचयिता?', back: '**बाणभट्ट**\n\nहर्ष + चरित = Life of Harsha\n\nहर्षवर्धन की जीवनी\nऐतिहासिक गद्य काव्य\n\nप्रथम ऐतिहासिक जीवनी' },
        { id: 'sf145', front: 'दशकुमारचरितम् के रचयिता?', back: '**दण्डी**\n\nदश + कुमार + चरित\n= दस राजकुमारों की कथा\n\nगद्य काव्य\nसाहसिक कथाएं' },
        { id: 'sf146', front: 'हितोपदेश के रचयिता?', back: '**नारायण पंडित**\n\nहित + उपदेश = beneficial advice\n\n4 भाग:\n1. मित्रलाभ\n2. सुहृद्भेद\n3. विग्रह\n4. सन्धि\n\nपंचतंत्र पर आधारित' },
        { id: 'sf147', front: '"मा निषाद..." श्लोक का महत्व?', back: '**प्रथम श्लोक**\n\nवाल्मीकि का प्रथम श्लोक\n\nक्रौंच वध से उत्पन्न\nशोक से श्लोक\n\nसंस्कृत काव्य का आरंभ' },
        { id: 'sf148', front: 'नवरत्न किसके दरबार में थे?', back: '**विक्रमादित्य**\n\nनव रत्न = 9 gems\n\n1. कालिदास\n2. धन्वन्तरि\n3. क्षपणक\n4. अमरसिंह\n5. शंकु\n6. वेतालभट्ट\n7. घटकर्पर\n8. वराहमिहिर\n9. वररुचि' },
        { id: 'sf149', front: 'अमरकोश के रचयिता?', back: '**अमरसिंह**\n\nअमर + कोश = immortal dictionary\n\nसंस्कृत शब्दकोश\nपर्यायवाची शब्द\n\n3 काण्ड, 10,000 शब्द' },
        { id: 'sf150', front: 'साहित्य परिचय में कितने अंक?', back: '**6 अंक (6 Marks)**\n\nExam Pattern:\n• साहित्यकार परिचय\n• रचना पहचान\n• मिलान प्रश्न\n• लघु उत्तरीय' }
      ],

      mcqs: [
        // Literature basics (1-10)
        { id: 'sm121', question: 'साहित्य परिचय विभाग में कितने अंक हैं?', options: ['4 अंक', '6 अंक', '8 अंक', '10 अंक'], correctIndex: 1, explanation: 'साहित्य परिचय = 6 अंक।' },
        { id: 'sm122', question: '"आदिकवि" किसे कहते हैं?', options: ['कालिदास', 'व्यास', 'वाल्मीकि', 'भवभूति'], correctIndex: 2, explanation: 'वाल्मीकि = आदिकवि (First poet)। रामायण के रचयिता।' },
        { id: 'sm123', question: 'रामायण के रचयिता कौन हैं?', options: ['व्यास', 'वाल्मीकि', 'कालिदास', 'तुलसीदास'], correctIndex: 1, explanation: 'वाल्मीकि ने संस्कृत रामायण लिखी।' },
        { id: 'sm124', question: 'महाभारत के रचयिता कौन हैं?', options: ['वाल्मीकि', 'वेदव्यास', 'कालिदास', 'भास'], correctIndex: 1, explanation: 'वेदव्यास ने महाभारत लिखा।' },
        { id: 'sm125', question: '"कविकुलगुरु" किसे कहते हैं?', options: ['वाल्मीकि', 'व्यास', 'कालिदास', 'भवभूति'], correctIndex: 2, explanation: 'कालिदास = कविकुलगुरु (Master of poets)।' },
        { id: 'sm126', question: 'वेदों की संख्या कितनी है?', options: ['3', '4', '5', '6'], correctIndex: 1, explanation: 'चार वेद: ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद।' },
        { id: 'sm127', question: 'सबसे प्राचीन वेद कौन सा है?', options: ['यजुर्वेद', 'सामवेद', 'ऋग्वेद', 'अथर्ववेद'], correctIndex: 2, explanation: 'ऋग्वेद सबसे प्राचीन वेद है।' },
        { id: 'sm128', question: 'पंचतंत्र के रचयिता?', options: ['विष्णुशर्मा', 'नारायण पंडित', 'बाणभट्ट', 'दण्डी'], correctIndex: 0, explanation: 'विष्णुशर्मा ने पंचतंत्र लिखा।' },
        { id: 'sm129', question: 'हितोपदेश के रचयिता?', options: ['विष्णुशर्मा', 'नारायण पंडित', 'बाणभट्ट', 'दण्डी'], correctIndex: 1, explanation: 'नारायण पंडित ने हितोपदेश लिखा।' },
        { id: 'sm130', question: '"उपनिषद्" का शाब्दिक अर्थ?', options: ['दूर बैठना', 'पास बैठना', 'खड़े होना', 'चलना'], correctIndex: 1, explanation: 'उप + नि + षद् = पास बैठना (गुरु के)।' },
        
        // Vedas (11-20)
        { id: 'sm131', question: 'ऋग्वेद का मुख्य विषय?', options: ['यज्ञ विधि', 'स्तुति मंत्र', 'संगीत', 'आयुर्वेद'], correctIndex: 1, explanation: 'ऋग्वेद = स्तुति मंत्र (Hymns)।' },
        { id: 'sm132', question: 'यजुर्वेद का मुख्य विषय?', options: ['स्तुति', 'यज्ञ विधि', 'गायन', 'चिकित्सा'], correctIndex: 1, explanation: 'यजुर्वेद = यज्ञ विधि (Rituals)।' },
        { id: 'sm133', question: 'सामवेद का मुख्य विषय?', options: ['यज्ञ', 'स्तुति', 'संगीत/गायन', 'तंत्र'], correctIndex: 2, explanation: 'सामवेद = संगीत (Music)। गेय मंत्र।' },
        { id: 'sm134', question: 'अथर्ववेद का मुख्य विषय?', options: ['यज्ञ', 'स्तुति', 'संगीत', 'आयुर्वेद/तंत्र-मंत्र'], correctIndex: 3, explanation: 'अथर्ववेद = आयुर्वेद, तंत्र-मंत्र।' },
        { id: 'sm135', question: 'रामायण में कितने काण्ड हैं?', options: ['5', '6', '7', '8'], correctIndex: 2, explanation: 'रामायण में 7 काण्ड हैं।' },
        { id: 'sm136', question: 'महाभारत में कितने पर्व हैं?', options: ['12', '15', '18', '20'], correctIndex: 2, explanation: 'महाभारत में 18 पर्व हैं।' },
        { id: 'sm137', question: 'भगवद्गीता किस ग्रंथ में है?', options: ['रामायण', 'महाभारत', 'उपनिषद्', 'पुराण'], correctIndex: 1, explanation: 'भगवद्गीता महाभारत के भीष्म पर्व में है।' },
        { id: 'sm138', question: 'भगवद्गीता में कितने अध्याय हैं?', options: ['15', '16', '17', '18'], correctIndex: 3, explanation: 'भगवद्गीता में 18 अध्याय, 700 श्लोक।' },
        { id: 'sm139', question: '"आदिकाव्य" किसे कहते हैं?', options: ['महाभारत', 'रामायण', 'रघुवंशम्', 'कुमारसंभवम्'], correctIndex: 1, explanation: 'रामायण = आदिकाव्य (First epic)।' },
        { id: 'sm140', question: 'ब्राह्मण ग्रंथ किसकी व्याख्या करते हैं?', options: ['उपनिषद्', 'पुराण', 'वेद/यज्ञ', 'काव्य'], correctIndex: 2, explanation: 'ब्राह्मण ग्रंथ वेदों और यज्ञों की व्याख्या करते हैं।' },
        
        // Poets & Works (21-30)
        { id: 'sm141', question: 'मेघदूतम् के रचयिता?', options: ['भवभूति', 'कालिदास', 'बाणभट्ट', 'दण्डी'], correctIndex: 1, explanation: 'कालिदास ने मेघदूतम् लिखा।' },
        { id: 'sm142', question: 'कादम्बरी के रचयिता?', options: ['कालिदास', 'बाणभट्ट', 'दण्डी', 'सुबन्धु'], correctIndex: 1, explanation: 'बाणभट्ट ने कादम्बरी लिखी।' },
        { id: 'sm143', question: 'हर्षचरितम् के रचयिता?', options: ['कालिदास', 'बाणभट्ट', 'दण्डी', 'भवभूति'], correctIndex: 1, explanation: 'बाणभट्ट ने हर्षचरितम् लिखा।' },
        { id: 'sm144', question: 'दशकुमारचरितम् के रचयिता?', options: ['बाणभट्ट', 'दण्डी', 'सुबन्धु', 'कालिदास'], correctIndex: 1, explanation: 'दण्डी ने दशकुमारचरितम् लिखा।' },
        { id: 'sm145', question: 'रघुवंशम् के रचयिता?', options: ['वाल्मीकि', 'कालिदास', 'भवभूति', 'व्यास'], correctIndex: 1, explanation: 'कालिदास ने रघुवंशम् लिखा।' },
        { id: 'sm146', question: 'कुमारसंभवम् का विषय?', options: ['राम जन्म', 'कृष्ण जन्म', 'कार्तिकेय जन्म', 'गणेश जन्म'], correctIndex: 2, explanation: 'कुमारसंभवम् = कुमार (कार्तिकेय) का जन्म।' },
        { id: 'sm147', question: 'अमरकोश के रचयिता?', options: ['अमरसिंह', 'वररुचि', 'पाणिनि', 'कात्यायन'], correctIndex: 0, explanation: 'अमरसिंह ने अमरकोश (शब्दकोश) लिखा।' },
        { id: 'sm148', question: 'पंचतंत्र में कितने तंत्र (भाग) हैं?', options: ['3', '4', '5', '6'], correctIndex: 2, explanation: 'पंचतंत्र में 5 तंत्र हैं।' },
        { id: 'sm149', question: 'नवरत्न किसके दरबार में थे?', options: ['अशोक', 'हर्षवर्धन', 'विक्रमादित्य', 'चन्द्रगुप्त'], correctIndex: 2, explanation: 'विक्रमादित्य के दरबार में नवरत्न थे।' },
        { id: 'sm150', question: '"शोक से श्लोक" किसने कहा?', options: ['व्यास', 'वाल्मीकि', 'कालिदास', 'भवभूति'], correctIndex: 1, explanation: 'वाल्मीकि - क्रौंच वध से शोक, शोक से प्रथम श्लोक।' }
      ],

      reels: [
        // Literature basics (1-10)
        { id: 'sr121', title: 'साहित्यम्', content: '📚 साहित्य = Literature\n\nसहित + य = togetherness', color: getReelColor(0) },
        { id: 'sr122', title: 'आदिकवि', content: '✨ वाल्मीकि = आदिकवि\n\nFirst Sanskrit Poet', color: getReelColor(1) },
        { id: 'sr123', title: 'कविकुलगुरु', content: '👑 कालिदास = कविकुलगुरु\n\nMaster of Poets', color: getReelColor(2) },
        { id: 'sr124', title: 'चार वेद', content: '📖 ऋग्, यजुः, साम, अथर्व\n\n4 Vedas', color: getReelColor(3) },
        { id: 'sr125', title: 'ऋग्वेद', content: '🙏 ऋग्वेद = स्तुति\n\nHymns - Oldest Veda', color: getReelColor(4) },
        { id: 'sr126', title: 'यजुर्वेद', content: '🔥 यजुर्वेद = यज्ञ\n\nRituals & Sacrifices', color: getReelColor(5) },
        { id: 'sr127', title: 'सामवेद', content: '🎵 सामवेद = संगीत\n\nMusic & Melodies', color: getReelColor(6) },
        { id: 'sr128', title: 'अथर्ववेद', content: '💊 अथर्ववेद = आयुर्वेद\n\nMedicine & Magic', color: getReelColor(7) },
        { id: 'sr129', title: 'उपनिषद्', content: '🧘 उपनिषद् = पास बैठना\n\nPhilosophy', color: getReelColor(8) },
        { id: 'sr130', title: '6 Marks', content: '📊 साहित्य परिचय\n\n6 Easy Marks!', color: getReelColor(9) },
        
        // Epics (11-20)
        { id: 'sr131', title: 'रामायण', content: '📜 वाल्मीकि\n\n7 काण्ड, 24000 श्लोक', color: getReelColor(0) },
        { id: 'sr132', title: 'महाभारत', content: '📜 वेदव्यास\n\n18 पर्व, 100000 श्लोक', color: getReelColor(1) },
        { id: 'sr133', title: 'भगवद्गीता', content: '🙏 महाभारत में\n\n18 अध्याय, 700 श्लोक', color: getReelColor(2) },
        { id: 'sr134', title: 'आदिकाव्य', content: '📖 रामायण = आदिकाव्य\n\nFirst Epic', color: getReelColor(3) },
        { id: 'sr135', title: '7 काण्ड', content: '📚 बाल, अयोध्या, अरण्य\nकिष्किन्धा, सुन्दर, युद्ध, उत्तर', color: getReelColor(4) },
        { id: 'sr136', title: 'पंचतंत्र', content: '🦊 विष्णुशर्मा\n\n5 तंत्र - Animal Stories', color: getReelColor(5) },
        { id: 'sr137', title: 'हितोपदेश', content: '📖 नारायण पंडित\n\n4 भाग - Moral Stories', color: getReelColor(6) },
        { id: 'sr138', title: 'ब्राह्मण', content: '📜 यज्ञ व्याख्या\n\nVedic Commentary', color: getReelColor(7) },
        { id: 'sr139', title: 'आरण्यक', content: '🌲 वन में पठनीय\n\nForest Texts', color: getReelColor(8) },
        { id: 'sr140', title: 'मा निषाद...', content: '✨ प्रथम श्लोक\n\nवाल्मीकि - शोक से श्लोक', color: getReelColor(9) },
        
        // Poets (21-30)
        { id: 'sr141', title: 'कालिदास', content: '✨ रघुवंशम्, कुमारसंभवम्\nमेघदूतम्, शाकुन्तलम्', color: getReelColor(0) },
        { id: 'sr142', title: 'बाणभट्ट', content: '📝 कादम्बरी\nहर्षचरितम्', color: getReelColor(1) },
        { id: 'sr143', title: 'दण्डी', content: '📖 दशकुमारचरितम्\n\nProse Master', color: getReelColor(2) },
        { id: 'sr144', title: 'भवभूति', content: '🎭 उत्तररामचरितम्\n\nDramatist', color: getReelColor(3) },
        { id: 'sr145', title: 'मेघदूतम्', content: '☁️ Cloud Messenger\n\nकालिदास - यक्ष विरह', color: getReelColor(4) },
        { id: 'sr146', title: 'रघुवंशम्', content: '👑 Raghu Dynasty\n\nकालिदास - 19 सर्ग', color: getReelColor(5) },
        { id: 'sr147', title: 'कुमारसंभवम्', content: '⚔️ Birth of Kartikeya\n\nShiva-Parvati Marriage', color: getReelColor(6) },
        { id: 'sr148', title: 'अमरकोश', content: '📚 अमरसिंह\n\nSanskrit Dictionary', color: getReelColor(7) },
        { id: 'sr149', title: 'नवरत्न', content: '💎 विक्रमादित्य के 9 रत्न\n\nकालिदास included!', color: getReelColor(8) },
        { id: 'sr150', title: 'Exam Tip', content: '💡 Author + Work pairs\n\nLearn matching!', color: getReelColor(9) }
      ],

      longAnswers: [
        {
          id: 'sl9',
          question: 'कालिदास की प्रमुख रचनाओं का परिचय दीजिए।',
          answer: `### कालिदास की रचनाएं

**उपाधि:** कविकुलगुरु (Master of Poets)
**काल:** विक्रमादित्य के नवरत्न में

**काव्य (Poetry):**

| रचना | विषय |
|------|------|
| रघुवंशम् | रघुवंश की कथा (19 सर्ग) |
| कुमारसंभवम् | कार्तिकेय जन्म (17 सर्ग) |
| मेघदूतम् | यक्ष का विरह संदेश |
| ऋतुसंहारम् | छह ऋतुओं का वर्णन |

**नाटक (Drama):**

| रचना | विषय |
|------|------|
| अभिज्ञानशाकुन्तलम् | दुष्यन्त-शकुन्तला |
| विक्रमोर्वशीयम् | पुरूरवा-उर्वशी |
| मालविकाग्निमित्रम् | अग्निमित्र-मालविका |

**विशेषता:**
- प्रकृति वर्णन में अद्वितीय
- उपमा सम्राट
- श्रृंगार रस प्रधान`
        },
        {
          id: 'sl10',
          question: 'रामायण और महाभारत का तुलनात्मक परिचय दीजिए।',
          answer: `### रामायण vs महाभारत

| विषय | रामायण | महाभारत |
|------|--------|---------|
| रचयिता | वाल्मीकि | वेदव्यास |
| उपाधि | आदिकाव्य | पंचम वेद |
| काण्ड/पर्व | 7 काण्ड | 18 पर्व |
| श्लोक | ~24,000 | ~100,000 |
| नायक | राम | अर्जुन/कृष्ण |
| विषय | राम की कथा | कुरुक्षेत्र युद्ध |

**रामायण के 7 काण्ड:**
बाल, अयोध्या, अरण्य, किष्किन्धा, सुन्दर, युद्ध, उत्तर

**महाभारत की विशेषता:**
- भगवद्गीता (भीष्म पर्व में)
- "यन्न भारते तन्न भारते"
- विश्व का सबसे बड़ा महाकाव्य

**दोनों का महत्व:**
- भारतीय संस्कृति की आधारशिला
- धर्म, नीति, जीवन मूल्य`
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // षष्ठम् मंडलम्: व्याकरणम् - भाग १ (Grammar Part 1) - 12 Marks
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'san6',
      title: '6. व्याकरणम् - भाग १ (Grammar Part 1)',
      description: 'संधि और समास - Sandhi & Compounds (12 Marks Total)',
      
      summary: `### व्याकरणम् - Quick Overview

**परीक्षा में अंक: 12 Marks (Grammar Total)**

**व्याकरण = Grammar (वि + आ + कृ = to analyze)**

**Main Topics:**
| Topic | Marks |
|-------|-------|
| संधि (Sandhi) | 3 |
| समास (Compounds) | 3 |
| कृदन्त-तद्धितान्त | 3 |
| परिवर्तनम् (Transformations) | 3 |

**संधि के प्रकार:**
| Type | Rule |
|------|------|
| स्वर संधि | Vowel + Vowel |
| व्यंजन संधि | Consonant + Any |
| विसर्ग संधि | Visarga + Any |

**समास के प्रकार:**
| Type | Example |
|------|---------|
| तत्पुरुष | राजपुत्रः |
| द्वन्द्व | रामलक्ष्मणौ |
| बहुव्रीहि | पीताम्बरः |
| अव्ययीभाव | उपकृष्णम् |`,

      detailedNotes: `### व्याकरणम् (Grammar) - Detailed Study Notes

## पाणिनि - व्याकरण के जनक

**अष्टाध्यायी:**
- 8 अध्याय, ~4000 सूत्र
- संस्कृत व्याकरण का आधार
- विश्व का पहला वैज्ञानिक व्याकरण

---

## 1. संधि (Sandhi) - 3 Marks

**संधि = सम् + धा = joining together**

### A. स्वर संधि (Vowel Sandhi)

**1. दीर्घ संधि:**
| Rule | Example |
|------|---------|
| अ + अ = आ | राम + अवतार = रामावतार |
| आ + आ = आ | विद्या + आलय = विद्यालय |
| इ + इ = ई | कवि + इन्द्र = कवीन्द्र |
| उ + उ = ऊ | गुरु + उपदेश = गुरूपदेश |

**2. गुण संधि:**
| Rule | Example |
|------|---------|
| अ/आ + इ/ई = ए | देव + इन्द्र = देवेन्द्र |
| अ/आ + उ/ऊ = ओ | सूर्य + उदय = सूर्योदय |
| अ/आ + ऋ = अर् | महा + ऋषि = महर्षि |

**3. वृद्धि संधि:**
| Rule | Example |
|------|---------|
| अ/आ + ए/ऐ = ऐ | एक + एक = एकैक |
| अ/आ + ओ/औ = औ | जल + ओघ = जलौघ |

**4. यण संधि:**
| Rule | Example |
|------|---------|
| इ/ई + अन्य स्वर = य् | इति + आदि = इत्यादि |
| उ/ऊ + अन्य स्वर = व् | मधु + अरि = मध्वरि |
| ऋ + अन्य स्वर = र् | पितृ + आज्ञा = पित्राज्ञा |

### B. विसर्ग संधि

| Rule | Example |
|------|---------|
| ः + अ = ओऽ | मनः + अभिलाषा = मनोऽभिलाषा |
| ः + soft consonant = ओ/र् | मनः + रथ = मनोरथ |

---

## 2. समास (Compounds) - 3 Marks

**समास = सम् + अस् = throwing together**

### A. तत्पुरुष समास (Determinative)
- उत्तरपद प्रधान
- विभक्ति लुप्त

| विभक्ति | Example | विग्रह |
|---------|---------|--------|
| द्वितीया | ग्रामगतः | ग्रामं गतः |
| तृतीया | गुणहीनः | गुणेन हीनः |
| चतुर्थी | देशभक्तिः | देशाय भक्तिः |
| पंचमी | ऋणमुक्तः | ऋणात् मुक्तः |
| षष्ठी | राजपुत्रः | राज्ञः पुत्रः |
| सप्तमी | जलमग्नः | जले मग्नः |

### B. द्वन्द्व समास (Copulative)
- दोनों पद प्रधान
- "और" का अर्थ

| Example | विग्रह |
|---------|--------|
| रामलक्ष्मणौ | रामः च लक्ष्मणः च |
| माता-पिता | माता च पिता च |
| सीता-राम | सीता च रामः च |

### C. बहुव्रीहि समास (Possessive)
- अन्य पद प्रधान
- विशेषण का काम

| Example | विग्रह |
|---------|--------|
| पीताम्बरः | पीतम् अम्बरं यस्य सः (विष्णु) |
| चक्रपाणिः | चक्रं पाणौ यस्य सः (विष्णु) |
| दशाननः | दश आननानि यस्य सः (रावण) |

### D. अव्ययीभाव समास
- पूर्वपद अव्यय
- पूर्वपद प्रधान

| Example | विग्रह |
|---------|--------|
| उपकृष्णम् | कृष्णस्य समीपे |
| निर्जलम् | जलस्य अभावः |
| यथाशक्ति | शक्तिम् अनतिक्रम्य |`,

      flashcards: [
        // Sandhi basics (1-10)
        { id: 'sf151', front: 'संधि (sandhi) का शाब्दिक अर्थ?', back: '**सम् + धा = जोड़ना**\n\nSandhi = Joining/Union\n\nदो वर्णों का मेल\n\nतीन प्रकार:\n1. स्वर संधि\n2. व्यंजन संधि\n3. विसर्ग संधि' },
        { id: 'sf152', front: 'दीर्घ संधि का नियम?', back: '**समान स्वर + समान स्वर = दीर्घ**\n\nअ + अ = आ\nइ + इ = ई\nउ + उ = ऊ\n\nExample:\nविद्या + आलय = विद्यालय\nकवि + इन्द्र = कवीन्द्र' },
        { id: 'sf153', front: 'गुण संधि का नियम?', back: '**अ/आ + इ/ई = ए**\n**अ/आ + उ/ऊ = ओ**\n**अ/आ + ऋ = अर्**\n\nExample:\nदेव + इन्द्र = देवेन्द्र\nसूर्य + उदय = सूर्योदय\nमहा + ऋषि = महर्षि' },
        { id: 'sf154', front: 'वृद्धि संधि का नियम?', back: '**अ/आ + ए/ऐ = ऐ**\n**अ/आ + ओ/औ = औ**\n\nExample:\nएक + एक = एकैक\nमहा + ओजस् = महौजस्\nजल + ओघ = जलौघ' },
        { id: 'sf155', front: 'यण संधि का नियम?', back: '**इ/ई + असमान स्वर = य्**\n**उ/ऊ + असमान स्वर = व्**\n**ऋ + असमान स्वर = र्**\n\nExample:\nइति + आदि = इत्यादि\nमधु + अरि = मध्वरि\nपितृ + आज्ञा = पित्राज्ञा' },
        { id: 'sf156', front: '"विद्यालयः" का संधि विच्छेद?', back: '**विद्या + आलयः = विद्यालयः**\n\nदीर्घ संधि\nआ + आ = आ\n\nविद्या = knowledge\nआलय = house\n= School' },
        { id: 'sf157', front: '"देवेन्द्रः" का संधि विच्छेद?', back: '**देव + इन्द्रः = देवेन्द्रः**\n\nगुण संधि\nअ + इ = ए\n\nदेव + इन्द्र = देवों का इन्द्र' },
        { id: 'sf158', front: '"सूर्योदयः" का संधि विच्छेद?', back: '**सूर्य + उदयः = सूर्योदयः**\n\nगुण संधि\nअ + उ = ओ\n\nसूर्य का उदय = Sunrise' },
        { id: 'sf159', front: '"इत्यादि" का संधि विच्छेद?', back: '**इति + आदि = इत्यादि**\n\nयण संधि\nइ + आ = य् + आ = या\n\nइति = thus\nआदि = etc.' },
        { id: 'sf160', front: '"महर्षिः" का संधि विच्छेद?', back: '**महा + ऋषिः = महर्षिः**\n\nगुण संधि\nआ + ऋ = अर्\n\nमहान् ऋषि = Great sage' },
        
        // Samas basics (11-20)
        { id: 'sf161', front: 'समास (samāsa) का अर्थ?', back: '**सम् + अस् = संक्षेप करना**\n\nSamasa = Compound\n\nदो या अधिक पदों का एक पद बनना\n\nचार प्रकार:\n1. तत्पुरुष\n2. द्वन्द्व\n3. बहुव्रीहि\n4. अव्ययीभाव' },
        { id: 'sf162', front: 'तत्पुरुष समास की पहचान?', back: '**उत्तरपद प्रधान**\n\nतत् पुरुष = His man\nविभक्ति लुप्त होती है\n\nउदाहरण:\nराजपुत्रः = राज्ञः पुत्रः (षष्ठी)\nग्रामगतः = ग्रामं गतः (द्वितीया)' },
        { id: 'sf163', front: 'द्वन्द्व समास की पहचान?', back: '**दोनों पद प्रधान**\n\nद्वन्द्व = pair/couple\n"च...च" (and...and)\n\nउदाहरण:\nरामलक्ष्मणौ = राम और लक्ष्मण\nमाता-पिता = माता और पिता' },
        { id: 'sf164', front: 'बहुव्रीहि समास की पहचान?', back: '**अन्य पद प्रधान**\n\nबहुव्रीहि = much rice\nविशेषण का काम करता है\n\nउदाहरण:\nपीताम्बरः = पीत अम्बर वाला (विष्णु)\nचक्रपाणिः = चक्र हाथ में (विष्णु)' },
        { id: 'sf165', front: 'अव्ययीभाव समास की पहचान?', back: '**पूर्वपद प्रधान**\n\nपहला पद अव्यय\nपूरा समास अव्यय बन जाता है\n\nउदाहरण:\nउपकृष्णम् = कृष्ण के पास\nनिर्जलम् = जल रहित\nयथाशक्ति = शक्ति के अनुसार' },
        { id: 'sf166', front: '"राजपुत्रः" का विग्रह?', back: '**राज्ञः पुत्रः = राजा का पुत्र**\n\nतत्पुरुष समास (षष्ठी)\n\nराजन् + पुत्र\nषष्ठी विभक्ति लुप्त' },
        { id: 'sf167', front: '"पीताम्बरः" का विग्रह?', back: '**पीतम् अम्बरं यस्य सः**\n\n= जिसका वस्त्र पीला है\n\nबहुव्रीहि समास\nविष्णु के लिए प्रयुक्त' },
        { id: 'sf168', front: '"दशाननः" का विग्रह?', back: '**दश आननानि यस्य सः**\n\n= जिसके दस मुख हैं\n\nबहुव्रीहि समास\nरावण के लिए प्रयुक्त' },
        { id: 'sf169', front: '"उपकृष्णम्" का विग्रह?', back: '**कृष्णस्य समीपे**\n\n= कृष्ण के पास/समीप\n\nअव्ययीभाव समास\nउप = near' },
        { id: 'sf170', front: '"यथाशक्ति" का विग्रह?', back: '**शक्तिम् अनतिक्रम्य**\n\n= शक्ति के अनुसार\n\nअव्ययीभाव समास\nयथा = according to' },
        
        // More Sandhi (21-30)
        { id: 'sf171', front: 'विसर्ग संधि कब होती है?', back: '**विसर्ग (:) + कोई वर्ण**\n\nमुख्य नियम:\nः + अ = ओऽ (अवग्रह)\nः + soft consonant = ओ/र्\n\nExample:\nमनः + रथ = मनोरथ\nदुः + आचार = दुराचार' },
        { id: 'sf172', front: '"मनोरथः" का संधि विच्छेद?', back: '**मनः + रथः = मनोरथः**\n\nविसर्ग संधि\nः + र = ओ\n\nमनः = mind\nरथ = chariot\n= Heart\'s desire' },
        { id: 'sf173', front: '"निराशा" का संधि विच्छेद?', back: '**निः + आशा = निराशा**\n\nविसर्ग संधि\nः + आ = रा\n\nनिः = without\nआशा = hope\n= Hopelessness' },
        { id: 'sf174', front: '"दुराचारः" का संधि विच्छेद?', back: '**दुः + आचारः = दुराचारः**\n\nविसर्ग संधि\nः + आ = रा\n\nदुः = bad\nआचार = conduct\n= Bad conduct' },
        { id: 'sf175', front: 'व्याकरण विभाग में कुल कितने अंक?', back: '**12 अंक (12 Marks)**\n\nBreakdown:\n• संधि: 3 अंक\n• समास: 3 अंक\n• कृदन्त-तद्धितान्त: 3 अंक\n• परिवर्तनम्: 3 अंक' },
        { id: 'sf176', front: 'पाणिनि कौन थे?', back: '**व्याकरण के जनक**\n\nरचना: अष्टाध्यायी\n8 अध्याय, ~4000 सूत्र\n\nसंस्कृत व्याकरण का आधार\nविश्व का पहला वैज्ञानिक व्याकरण' },
        { id: 'sf177', front: '"नमस्ते" का संधि विच्छेद?', back: '**नमः + ते = नमस्ते**\n\nविसर्ग संधि\nः + त = स्\n\nनमः = salutation\nते = to you\n= Salutations to you' },
        { id: 'sf178', front: '"कवीन्द्रः" का संधि विच्छेद?', back: '**कवि + इन्द्रः = कवीन्द्रः**\n\nदीर्घ संधि\nइ + इ = ई\n\nकवियों का राजा' },
        { id: 'sf179', front: '"गुरूपदेशः" का संधि विच्छेद?', back: '**गुरु + उपदेशः = गुरूपदेशः**\n\nदीर्घ संधि\nउ + उ = ऊ\n\nगुरु का उपदेश' },
        { id: 'sf180', front: '"रामलक्ष्मणौ" का विग्रह?', back: '**रामः च लक्ष्मणः च**\n\n= राम और लक्ष्मण\n\nद्वन्द्व समास\nद्विवचन प्रयोग' }
      ],

      mcqs: [
        // Sandhi MCQs (1-15)
        { id: 'sm151', question: 'व्याकरण विभाग में कुल कितने अंक हैं?', options: ['6 अंक', '9 अंक', '12 अंक', '16 अंक'], correctIndex: 2, explanation: 'व्याकरणम् = 12 अंक (संधि 3 + समास 3 + कृदन्त 3 + परिवर्तन 3)।' },
        { id: 'sm152', question: '"विद्यालयः" में कौन सी संधि है?', options: ['गुण', 'दीर्घ', 'यण', 'वृद्धि'], correctIndex: 1, explanation: 'विद्या + आलय = विद्यालयः। आ + आ = आ (दीर्घ संधि)।' },
        { id: 'sm153', question: '"देवेन्द्रः" में कौन सी संधि है?', options: ['दीर्घ', 'गुण', 'वृद्धि', 'यण'], correctIndex: 1, explanation: 'देव + इन्द्र = देवेन्द्रः। अ + इ = ए (गुण संधि)।' },
        { id: 'sm154', question: '"सूर्योदयः" में कौन सी संधि है?', options: ['दीर्घ', 'गुण', 'वृद्धि', 'यण'], correctIndex: 1, explanation: 'सूर्य + उदय = सूर्योदयः। अ + उ = ओ (गुण संधि)।' },
        { id: 'sm155', question: '"इत्यादि" में कौन सी संधि है?', options: ['गुण', 'दीर्घ', 'यण', 'वृद्धि'], correctIndex: 2, explanation: 'इति + आदि = इत्यादि। इ + आ = य् + आ (यण संधि)।' },
        { id: 'sm156', question: '"महर्षिः" में कौन सी संधि है?', options: ['दीर्घ', 'गुण', 'वृद्धि', 'विसर्ग'], correctIndex: 1, explanation: 'महा + ऋषि = महर्षि। आ + ऋ = अर् (गुण संधि)।' },
        { id: 'sm157', question: '"एकैक" में कौन सी संधि है?', options: ['गुण', 'दीर्घ', 'वृद्धि', 'यण'], correctIndex: 2, explanation: 'एक + एक = एकैक। अ + ए = ऐ (वृद्धि संधि)।' },
        { id: 'sm158', question: 'गुण संधि में अ + इ = ?', options: ['ए', 'ऐ', 'ओ', 'औ'], correctIndex: 0, explanation: 'गुण संधि: अ/आ + इ/ई = ए।' },
        { id: 'sm159', question: 'गुण संधि में अ + उ = ?', options: ['ए', 'ऐ', 'ओ', 'औ'], correctIndex: 2, explanation: 'गुण संधि: अ/आ + उ/ऊ = ओ।' },
        { id: 'sm160', question: 'वृद्धि संधि में अ + ए = ?', options: ['ए', 'ऐ', 'ओ', 'औ'], correctIndex: 1, explanation: 'वृद्धि संधि: अ/आ + ए/ऐ = ऐ।' },
        { id: 'sm161', question: '"मनोरथः" में कौन सी संधि है?', options: ['स्वर', 'व्यंजन', 'विसर्ग', 'यण'], correctIndex: 2, explanation: 'मनः + रथ = मनोरथः। विसर्ग संधि।' },
        { id: 'sm162', question: '"निराशा" का संधि विच्छेद?', options: ['निर् + आशा', 'निः + आशा', 'नि + राशा', 'निर + आशा'], correctIndex: 1, explanation: 'निः + आशा = निराशा। विसर्ग संधि।' },
        { id: 'sm163', question: 'यण संधि में इ + अ = ?', options: ['य + अ', 'व + अ', 'र + अ', 'ल + अ'], correctIndex: 0, explanation: 'यण संधि: इ/ई + असमान स्वर = य्।' },
        { id: 'sm164', question: 'यण संधि में उ + अ = ?', options: ['य + अ', 'व + अ', 'र + अ', 'ल + अ'], correctIndex: 1, explanation: 'यण संधि: उ/ऊ + असमान स्वर = व्।' },
        { id: 'sm165', question: '"कवीन्द्रः" में कौन सी संधि है?', options: ['गुण', 'दीर्घ', 'वृद्धि', 'यण'], correctIndex: 1, explanation: 'कवि + इन्द्र = कवीन्द्रः। इ + इ = ई (दीर्घ संधि)।' },
        
        // Samas MCQs (16-30)
        { id: 'sm166', question: '"राजपुत्रः" में कौन सा समास है?', options: ['द्वन्द्व', 'तत्पुरुष', 'बहुव्रीहि', 'अव्ययीभाव'], correctIndex: 1, explanation: 'राज्ञः पुत्रः = राजपुत्रः। तत्पुरुष (षष्ठी) समास।' },
        { id: 'sm167', question: '"रामलक्ष्मणौ" में कौन सा समास है?', options: ['तत्पुरुष', 'द्वन्द्व', 'बहुव्रीहि', 'अव्ययीभाव'], correctIndex: 1, explanation: 'रामः च लक्ष्मणः च = द्वन्द्व समास।' },
        { id: 'sm168', question: '"पीताम्बरः" में कौन सा समास है?', options: ['तत्पुरुष', 'द्वन्द्व', 'बहुव्रीहि', 'अव्ययीभाव'], correctIndex: 2, explanation: 'पीतम् अम्बरं यस्य सः = बहुव्रीहि समास।' },
        { id: 'sm169', question: '"उपकृष्णम्" में कौन सा समास है?', options: ['तत्पुरुष', 'द्वन्द्व', 'बहुव्रीहि', 'अव्ययीभाव'], correctIndex: 3, explanation: 'कृष्णस्य समीपे = अव्ययीभाव समास।' },
        { id: 'sm170', question: 'तत्पुरुष समास में कौन सा पद प्रधान?', options: ['पूर्वपद', 'उत्तरपद', 'दोनों', 'अन्य'], correctIndex: 1, explanation: 'तत्पुरुष समास में उत्तरपद (second word) प्रधान होता है।' },
        { id: 'sm171', question: 'द्वन्द्व समास में कौन सा पद प्रधान?', options: ['पूर्वपद', 'उत्तरपद', 'दोनों', 'अन्य'], correctIndex: 2, explanation: 'द्वन्द्व समास में दोनों पद प्रधान होते हैं।' },
        { id: 'sm172', question: 'बहुव्रीहि समास में कौन सा पद प्रधान?', options: ['पूर्वपद', 'उत्तरपद', 'दोनों', 'अन्य पद'], correctIndex: 3, explanation: 'बहुव्रीहि समास में अन्य पद (third thing) प्रधान होता है।' },
        { id: 'sm173', question: 'अव्ययीभाव समास में कौन सा पद प्रधान?', options: ['पूर्वपद', 'उत्तरपद', 'दोनों', 'अन्य'], correctIndex: 0, explanation: 'अव्ययीभाव समास में पूर्वपद (first word/अव्यय) प्रधान।' },
        { id: 'sm174', question: '"दशाननः" का विग्रह?', options: ['दश आननानि', 'दश आननानि यस्य सः', 'दशम् आननम्', 'दश च आननम्'], correctIndex: 1, explanation: 'दश आननानि यस्य सः = बहुव्रीहि (रावण)।' },
        { id: 'sm175', question: '"चक्रपाणिः" में कौन सा समास है?', options: ['तत्पुरुष', 'द्वन्द्व', 'बहुव्रीहि', 'अव्ययीभाव'], correctIndex: 2, explanation: 'चक्रं पाणौ यस्य सः = बहुव्रीहि (विष्णु)।' },
        { id: 'sm176', question: '"यथाशक्ति" में कौन सा समास है?', options: ['तत्पुरुष', 'द्वन्द्व', 'बहुव्रीहि', 'अव्ययीभाव'], correctIndex: 3, explanation: 'शक्तिम् अनतिक्रम्य = अव्ययीभाव समास।' },
        { id: 'sm177', question: '"ग्रामगतः" में कौन सा समास है?', options: ['तत्पुरुष', 'द्वन्द्व', 'बहुव्रीहि', 'अव्ययीभाव'], correctIndex: 0, explanation: 'ग्रामं गतः = तत्पुरुष (द्वितीया) समास।' },
        { id: 'sm178', question: 'पाणिनि की रचना कौन सी है?', options: ['महाभाष्य', 'अष्टाध्यायी', 'वार्तिक', 'निरुक्त'], correctIndex: 1, explanation: 'पाणिनि ने अष्टाध्यायी (8 अध्याय) लिखी।' },
        { id: 'sm179', question: '"नीलकमलम्" में कौन सा समास है?', options: ['तत्पुरुष', 'द्वन्द्व', 'कर्मधारय', 'द्विगु'], correctIndex: 2, explanation: 'नीलं कमलम् = कर्मधारय (विशेषण-विशेष्य)।' },
        { id: 'sm180', question: '"पंचवटी" में कौन सा समास है?', options: ['तत्पुरुष', 'द्विगु', 'बहुव्रीहि', 'द्वन्द्व'], correctIndex: 1, explanation: 'पंचानां वटानां समाहारः = द्विगु समास।' }
      ],

      reels: [
        // Sandhi (1-15)
        { id: 'sr151', title: 'संधि', content: '🔗 संधि = Joining\n\nसम् + धा = जोड़ना', color: getReelColor(0) },
        { id: 'sr152', title: '3 Types', content: '📚 स्वर, व्यंजन, विसर्ग\n\n3 Types of Sandhi', color: getReelColor(1) },
        { id: 'sr153', title: 'दीर्घ संधि', content: '➡️ अ+अ=आ, इ+इ=ई\n\nSame vowels = Long', color: getReelColor(2) },
        { id: 'sr154', title: 'गुण संधि', content: '➡️ अ+इ=ए, अ+उ=ओ\n\nअ+ऋ=अर्', color: getReelColor(3) },
        { id: 'sr155', title: 'वृद्धि संधि', content: '➡️ अ+ए=ऐ, अ+ओ=औ\n\nVriddhi = Growth', color: getReelColor(4) },
        { id: 'sr156', title: 'यण संधि', content: '➡️ इ→य्, उ→व्, ऋ→र्\n\nBefore different vowel', color: getReelColor(5) },
        { id: 'sr157', title: 'विद्यालयः', content: '🏫 विद्या + आलय\n\nदीर्घ: आ+आ=आ', color: getReelColor(6) },
        { id: 'sr158', title: 'देवेन्द्रः', content: '👑 देव + इन्द्र\n\nगुण: अ+इ=ए', color: getReelColor(7) },
        { id: 'sr159', title: 'सूर्योदयः', content: '🌅 सूर्य + उदय\n\nगुण: अ+उ=ओ', color: getReelColor(8) },
        { id: 'sr160', title: 'इत्यादि', content: '📝 इति + आदि\n\nयण: इ+आ=य्+आ', color: getReelColor(9) },
        { id: 'sr161', title: 'महर्षिः', content: '🧘 महा + ऋषि\n\nगुण: आ+ऋ=अर्', color: getReelColor(0) },
        { id: 'sr162', title: 'मनोरथः', content: '💭 मनः + रथ\n\nविसर्ग संधि', color: getReelColor(1) },
        { id: 'sr163', title: 'निराशा', content: '😔 निः + आशा\n\nविसर्ग: ः→र्', color: getReelColor(2) },
        { id: 'sr164', title: 'नमस्ते', content: '🙏 नमः + ते\n\nविसर्ग: ः→स्', color: getReelColor(3) },
        { id: 'sr165', title: '3 Marks', content: '📊 संधि = 3 अंक\n\nLearn rules!', color: getReelColor(4) },
        
        // Samas (16-30)
        { id: 'sr166', title: 'समास', content: '📦 समास = Compound\n\nसम् + अस् = संक्षेप', color: getReelColor(5) },
        { id: 'sr167', title: '4 Types', content: '📚 तत्पुरुष, द्वन्द्व\nबहुव्रीहि, अव्ययीभाव', color: getReelColor(6) },
        { id: 'sr168', title: 'तत्पुरुष', content: '➡️ उत्तरपद प्रधान\n\nराजपुत्रः = राज्ञः पुत्रः', color: getReelColor(7) },
        { id: 'sr169', title: 'द्वन्द्व', content: '➡️ दोनों पद प्रधान\n\nरामलक्ष्मणौ = राम च लक्ष्मण च', color: getReelColor(8) },
        { id: 'sr170', title: 'बहुव्रीहि', content: '➡️ अन्य पद प्रधान\n\nपीताम्बरः = विष्णु', color: getReelColor(9) },
        { id: 'sr171', title: 'अव्ययीभाव', content: '➡️ पूर्वपद प्रधान\n\nउपकृष्णम् = कृष्ण के पास', color: getReelColor(0) },
        { id: 'sr172', title: 'राजपुत्रः', content: '👑 राज्ञः पुत्रः\n\nतत्पुरुष (षष्ठी)', color: getReelColor(1) },
        { id: 'sr173', title: 'दशाननः', content: '👹 दश आनन यस्य सः\n\nबहुव्रीहि = रावण', color: getReelColor(2) },
        { id: 'sr174', title: 'चक्रपाणिः', content: '🔵 चक्र पाणौ यस्य\n\nबहुव्रीहि = विष्णु', color: getReelColor(3) },
        { id: 'sr175', title: 'यथाशक्ति', content: '💪 शक्ति के अनुसार\n\nअव्ययीभाव', color: getReelColor(4) },
        { id: 'sr176', title: 'पाणिनि', content: '📚 अष्टाध्यायी\n\nव्याकरण के जनक', color: getReelColor(5) },
        { id: 'sr177', title: 'कर्मधारय', content: '📝 विशेषण + विशेष्य\n\nनीलकमलम्', color: getReelColor(6) },
        { id: 'sr178', title: 'द्विगु', content: '🔢 संख्या + संज्ञा\n\nपंचवटी = 5 वट', color: getReelColor(7) },
        { id: 'sr179', title: '3 Marks', content: '📊 समास = 3 अंक\n\nPractice विग्रह!', color: getReelColor(8) },
        { id: 'sr180', title: '12 Marks', content: '📊 व्याकरण Total\n\n12 Easy Marks!', color: getReelColor(9) }
      ],

      longAnswers: [
        {
          id: 'sl11',
          question: 'संधि के प्रकार और नियम बताइए।',
          answer: `### संधि के प्रकार

**संधि = सम् + धा = जोड़ना**

**तीन प्रकार:**

**1. स्वर संधि (Vowel Sandhi)**

| उप-प्रकार | नियम | उदाहरण |
|-----------|------|--------|
| दीर्घ | समान स्वर = दीर्घ | विद्या+आलय=विद्यालय |
| गुण | अ+इ=ए, अ+उ=ओ | देव+इन्द्र=देवेन्द्र |
| वृद्धि | अ+ए=ऐ, अ+ओ=औ | एक+एक=एकैक |
| यण | इ→य्, उ→व्, ऋ→र् | इति+आदि=इत्यादि |

**2. व्यंजन संधि (Consonant Sandhi)**
- व्यंजन + कोई वर्ण
- जगत् + नाथ = जगन्नाथ

**3. विसर्ग संधि (Visarga Sandhi)**
- विसर्ग + कोई वर्ण
- मनः + रथ = मनोरथ
- निः + आशा = निराशा

**Exam Tip:** संधि = 3 अंक। विच्छेद और संधि नाम पूछा जाता है।`
        },
        {
          id: 'sl12',
          question: 'समास के प्रकार और उदाहरण बताइए।',
          answer: `### समास के प्रकार

**समास = सम् + अस् = संक्षेप**

**चार मुख्य प्रकार:**

| समास | प्रधान पद | उदाहरण | विग्रह |
|------|----------|--------|--------|
| तत्पुरुष | उत्तरपद | राजपुत्रः | राज्ञः पुत्रः |
| द्वन्द्व | दोनों | रामलक्ष्मणौ | राम च लक्ष्मण च |
| बहुव्रीहि | अन्य | पीताम्बरः | पीत अम्बर वाला |
| अव्ययीभाव | पूर्वपद | उपकृष्णम् | कृष्ण के पास |

**तत्पुरुष के उप-प्रकार:**
- कर्मधारय (विशेषण-विशेष्य): नीलकमलम्
- द्विगु (संख्या): पंचवटी

**बहुव्रीहि के उदाहरण:**
- दशाननः = रावण (10 मुख वाला)
- चक्रपाणिः = विष्णु (चक्र हाथ में)

**Exam Tip:** समास = 3 अंक। विग्रह और समास नाम पूछा जाता है।`
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // सप्तम् मंडलम्: व्याकरणम् - भाग २ (Grammar Part 2) - कृदन्त & परिवर्तनम्
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'san7',
      title: '7. व्याकरणम् - भाग २ (Grammar Part 2)',
      description: 'कृदन्त-तद्धितान्त और परिवर्तनम् - Suffixes & Transformations (6 Marks)',
      
      summary: `### व्याकरणम् भाग २ - Quick Overview

**परीक्षा में अंक: 6 Marks (3+3)**

**Topics:**
| Topic | Marks |
|-------|-------|
| कृदन्त-तद्धितान्त | 3 |
| परिवर्तनम् | 3 |

**कृदन्त = धातु + कृत् प्रत्यय**
| प्रत्यय | Example |
|---------|---------|
| क्त | पठितम् (read) |
| क्तवतु | पठितवान् (one who read) |
| तव्य | पठितव्यम् (should be read) |
| शतृ | पठन् (reading) |

**तद्धितान्त = शब्द + तद्धित प्रत्यय**
| प्रत्यय | Example |
|---------|---------|
| त्व | मनुष्यत्वम् (humanity) |
| ता | सुन्दरता (beauty) |
| मत् | बुद्धिमान् (intelligent) |
| वत् | धनवान् (wealthy) |`,

      detailedNotes: `### व्याकरणम् भाग २ - Detailed Study Notes

## 1. कृदन्त (Kridanta) - 3 Marks

**कृदन्त = धातु (Root) + कृत् प्रत्यय (Suffix)**

### A. क्त प्रत्यय (Past Passive Participle)
| धातु | + क्त | = कृदन्त | अर्थ |
|------|-------|---------|------|
| पठ् | + क्त | = पठितम् | read (was read) |
| लिख् | + क्त | = लिखितम् | written |
| गम् | + क्त | = गतम् | gone |
| कृ | + क्त | = कृतम् | done |

### B. क्तवतु प्रत्यय (Past Active Participle)
| धातु | + क्तवतु | = कृदन्त | अर्थ |
|------|---------|---------|------|
| पठ् | + क्तवतु | = पठितवान् | one who read |
| खाद् | + क्तवतु | = खादितवान् | one who ate |
| गम् | + क्तवतु | = गतवान् | one who went |

### C. तव्य/अनीय प्रत्यय (Potential/Gerundive)
| धातु | + तव्य | = कृदन्त | अर्थ |
|------|--------|---------|------|
| पठ् | + तव्य | = पठितव्यम् | should be read |
| कृ | + तव्य | = कर्तव्यम् | should be done |
| द्रष्ट् | + अनीय | = द्रष्टव्यम् | worth seeing |

### D. शतृ/शानच् प्रत्यय (Present Participle)
| धातु | + शतृ | = कृदन्त | अर्थ |
|------|-------|---------|------|
| पठ् | + शतृ | = पठन् | reading |
| गम् | + शतृ | = गच्छन् | going |
| हस् | + शतृ | = हसन् | laughing |

---

## 2. तद्धितान्त (Taddhitanta)

**तद्धितान्त = शब्द (Noun) + तद्धित प्रत्यय**

### A. त्व प्रत्यय (Abstract Noun - भाव)
| शब्द | + त्व | = तद्धितान्त | अर्थ |
|------|-------|------------|------|
| मनुष्य | + त्व | = मनुष्यत्वम् | humanity |
| पशु | + त्व | = पशुत्वम् | animality |
| गुरु | + त्व | = गुरुत्वम् | gravity/importance |

### B. ता प्रत्यय (Abstract Noun - भाव)
| शब्द | + ता | = तद्धितान्त | अर्थ |
|------|------|------------|------|
| सुन्दर | + ता | = सुन्दरता | beauty |
| महत् | + ता | = महत्ता | greatness |
| मूर्ख | + ता | = मूर्खता | foolishness |

### C. मत्/वत् प्रत्यय (Possessive)
| शब्द | + मत्/वत् | = तद्धितान्त | अर्थ |
|------|----------|------------|------|
| बुद्धि | + मत् | = बुद्धिमान् | intelligent |
| धन | + वत् | = धनवान् | wealthy |
| श्री | + मत् | = श्रीमान् | prosperous |

---

## 3. परिवर्तनम् (Transformations) - 3 Marks

### A. वचन परिवर्तन (Number Change)
| एकवचन | द्विवचन | बहुवचन |
|--------|---------|--------|
| बालकः | बालकौ | बालकाः |
| फलम् | फले | फलानि |
| नदी | नद्यौ | नद्यः |

### B. लिंग परिवर्तन (Gender Change)
| पुल्लिंग | स्त्रीलिंग |
|----------|-----------|
| बालकः | बालिका |
| छात्रः | छात्रा |
| शिक्षकः | शिक्षिका |
| नटः | नटी |

### C. पुरुष परिवर्तन (Person Change)
| प्रथम | मध्यम | उत्तम |
|-------|-------|-------|
| सः गच्छति | त्वं गच्छसि | अहं गच्छामि |
| ते गच्छन्ति | यूयं गच्छथ | वयं गच्छामः |

### D. काल परिवर्तन (Tense Change)
| लट् (Present) | लृट् (Future) | लङ् (Past) |
|---------------|---------------|------------|
| पठति | पठिष्यति | अपठत् |
| गच्छति | गमिष्यति | अगच्छत् |`,

      flashcards: [
        // Kridanta (1-15)
        { id: 'sf181', front: 'कृदन्त क्या है?', back: '**धातु + कृत् प्रत्यय = कृदन्त**\n\nकृत् = suffix added to verb root\n\nउदाहरण:\nपठ् + क्त = पठितम् (read)\nगम् + क्त = गतम् (gone)\n\nकृदन्त = Verbal derivative' },
        { id: 'sf182', front: 'क्त प्रत्यय का प्रयोग?', back: '**भूतकालिक कर्मवाच्य**\n\nPast Passive Participle\n\nपठ् + क्त = पठितम् (was read)\nलिख् + क्त = लिखितम् (was written)\nकृ + क्त = कृतम् (was done)' },
        { id: 'sf183', front: 'क्तवतु प्रत्यय का प्रयोग?', back: '**भूतकालिक कर्तृवाच्य**\n\nPast Active Participle\n\nपठ् + क्तवतु = पठितवान् (one who read)\nगम् + क्तवतु = गतवान् (one who went)\nखाद् + क्तवतु = खादितवान् (one who ate)' },
        { id: 'sf184', front: 'तव्य प्रत्यय का प्रयोग?', back: '**कर्तव्य/योग्य अर्थ**\n\nPotential/Gerundive = "should be"\n\nपठ् + तव्य = पठितव्यम् (should be read)\nकृ + तव्य = कर्तव्यम् (should be done)\nगम् + तव्य = गन्तव्यम् (should be gone)' },
        { id: 'sf185', front: 'शतृ प्रत्यय का प्रयोग?', back: '**वर्तमान कृदन्त (परस्मैपद)**\n\nPresent Participle Active\n\nपठ् + शतृ = पठन् (reading)\nगम् + शतृ = गच्छन् (going)\nहस् + शतृ = हसन् (laughing)' },
        { id: 'sf186', front: '"पठितम्" का कृदन्त विग्रह?', back: '**पठ् + क्त = पठितम्**\n\nधातु: पठ् (to read)\nप्रत्यय: क्त\nअर्थ: पढ़ा गया (was read)\n\nभूतकालिक कर्मवाच्य कृदन्त' },
        { id: 'sf187', front: '"गतवान्" का कृदन्त विग्रह?', back: '**गम् + क्तवतु = गतवान्**\n\nधातु: गम् (to go)\nप्रत्यय: क्तवतु\nअर्थ: जो गया (one who went)\n\nभूतकालिक कर्तृवाच्य कृदन्त' },
        { id: 'sf188', front: '"कर्तव्यम्" का कृदन्त विग्रह?', back: '**कृ + तव्य = कर्तव्यम्**\n\nधातु: कृ (to do)\nप्रत्यय: तव्य\nअर्थ: करना चाहिए (should be done)\n\nविध्यर्थक कृदन्त' },
        { id: 'sf189', front: '"पठन्" का कृदन्त विग्रह?', back: '**पठ् + शतृ = पठन्**\n\nधातु: पठ् (to read)\nप्रत्यय: शतृ\nअर्थ: पढ़ता हुआ (reading)\n\nवर्तमान कृदन्त' },
        { id: 'sf190', front: '"लिखितम्" का कृदन्त विग्रह?', back: '**लिख् + क्त = लिखितम्**\n\nधातु: लिख् (to write)\nप्रत्यय: क्त\nअर्थ: लिखा गया (was written)\n\nभूतकाल कृदन्त' },
        
        // Taddhitanta (11-20)
        { id: 'sf191', front: 'तद्धितान्त क्या है?', back: '**शब्द + तद्धित प्रत्यय = तद्धितान्त**\n\nतद्धित = suffix added to noun\n\nउदाहरण:\nमनुष्य + त्व = मनुष्यत्वम्\nसुन्दर + ता = सुन्दरता\n\nतद्धितान्त = Nominal derivative' },
        { id: 'sf192', front: 'त्व प्रत्यय का प्रयोग?', back: '**भाववाचक संज्ञा (Abstract)**\n\nशब्द + त्व = भाव/गुण\n\nमनुष्य + त्व = मनुष्यत्वम् (humanity)\nपशु + त्व = पशुत्वम् (animality)\nगुरु + त्व = गुरुत्वम् (gravity)' },
        { id: 'sf193', front: 'ता प्रत्यय का प्रयोग?', back: '**भाववाचक संज्ञा (Abstract)**\n\nशब्द + ता = भाव/गुण\n\nसुन्दर + ता = सुन्दरता (beauty)\nमहत् + ता = महत्ता (greatness)\nमूर्ख + ता = मूर्खता (foolishness)' },
        { id: 'sf194', front: 'मत् प्रत्यय का प्रयोग?', back: '**"वाला" अर्थ (Possessive)**\n\nशब्द + मत् = वाला\n\nबुद्धि + मत् = बुद्धिमान् (intelligent)\nश्री + मत् = श्रीमान् (prosperous)\nभग + वत् = भगवान् (blessed)' },
        { id: 'sf195', front: 'वत् प्रत्यय का प्रयोग?', back: '**"वाला" अर्थ (Possessive)**\n\nशब्द + वत् = वाला\n\nधन + वत् = धनवान् (wealthy)\nबल + वत् = बलवान् (strong)\nगुण + वत् = गुणवान् (virtuous)' },
        { id: 'sf196', front: '"मनुष्यत्वम्" का विग्रह?', back: '**मनुष्य + त्व = मनुष्यत्वम्**\n\nशब्द: मनुष्य (human)\nप्रत्यय: त्व\nअर्थ: मनुष्यता (humanity)\n\nभाववाचक तद्धितान्त' },
        { id: 'sf197', front: '"सुन्दरता" का विग्रह?', back: '**सुन्दर + ता = सुन्दरता**\n\nशब्द: सुन्दर (beautiful)\nप्रत्यय: ता\nअर्थ: सौंदर्य (beauty)\n\nभाववाचक तद्धितान्त' },
        { id: 'sf198', front: '"बुद्धिमान्" का विग्रह?', back: '**बुद्धि + मत् = बुद्धिमान्**\n\nशब्द: बुद्धि (intelligence)\nप्रत्यय: मत्\nअर्थ: बुद्धि वाला (intelligent)\n\nमत्वर्थीय तद्धितान्त' },
        { id: 'sf199', front: '"धनवान्" का विग्रह?', back: '**धन + वत् = धनवान्**\n\nशब्द: धन (wealth)\nप्रत्यय: वत्\nअर्थ: धन वाला (wealthy)\n\nमत्वर्थीय तद्धितान्त' },
        { id: 'sf200', front: 'त्व और ता में अंतर?', back: '**दोनों भाववाचक प्रत्यय**\n\nत्व → नपुंसकलिंग (-म्)\nमनुष्यत्वम्, गुरुत्वम्\n\nता → स्त्रीलिंग\nसुन्दरता, महत्ता\n\nअर्थ समान, लिंग भिन्न' },
        
        // Parivartan (21-30)
        { id: 'sf201', front: 'वचन परिवर्तन क्या है?', back: '**Number Change**\n\nएकवचन → द्विवचन → बहुवचन\n\nबालकः → बालकौ → बालकाः\nफलम् → फले → फलानि\nनदी → नद्यौ → नद्यः' },
        { id: 'sf202', front: '"बालकः" का बहुवचन?', back: '**बालकाः**\n\nएकवचन: बालकः (a boy)\nद्विवचन: बालकौ (two boys)\nबहुवचन: बालकाः (boys)\n\nअकारान्त पुल्लिंग' },
        { id: 'sf203', front: '"फलम्" का बहुवचन?', back: '**फलानि**\n\nएकवचन: फलम् (a fruit)\nद्विवचन: फले (two fruits)\nबहुवचन: फलानि (fruits)\n\nअकारान्त नपुंसकलिंग' },
        { id: 'sf204', front: 'लिंग परिवर्तन क्या है?', back: '**Gender Change**\n\nपुल्लिंग → स्त्रीलिंग\n\nबालकः → बालिका\nछात्रः → छात्रा\nशिक्षकः → शिक्षिका\nनटः → नटी' },
        { id: 'sf205', front: '"छात्रः" का स्त्रीलिंग?', back: '**छात्रा**\n\nपुल्लिंग: छात्रः (male student)\nस्त्रीलिंग: छात्रा (female student)\n\nआ प्रत्यय से स्त्रीलिंग' },
        { id: 'sf206', front: 'पुरुष परिवर्तन क्या है?', back: '**Person Change**\n\nप्रथम → मध्यम → उत्तम\n\nसः पठति (He reads)\nत्वं पठसि (You read)\nअहं पठामि (I read)' },
        { id: 'sf207', front: '"सः गच्छति" को उत्तम पुरुष में बदलो।', back: '**अहं गच्छामि**\n\nप्रथम: सः गच्छति (He goes)\nमध्यम: त्वं गच्छसि (You go)\nउत्तम: अहं गच्छामि (I go)' },
        { id: 'sf208', front: 'काल परिवर्तन क्या है?', back: '**Tense Change**\n\nलट् (Present) → लृट् (Future) → लङ् (Past)\n\nपठति → पठिष्यति → अपठत्\nगच्छति → गमिष्यति → अगच्छत्' },
        { id: 'sf209', front: '"पठति" को भविष्यत् काल में बदलो।', back: '**पठिष्यति**\n\nवर्तमान (लट्): पठति (reads)\nभविष्यत् (लृट्): पठिष्यति (will read)\nभूत (लङ्): अपठत् (read)' },
        { id: 'sf210', front: '"गच्छति" को भूतकाल में बदलो।', back: '**अगच्छत्**\n\nवर्तमान (लट्): गच्छति (goes)\nभविष्यत् (लृट्): गमिष्यति (will go)\nभूत (लङ्): अगच्छत् (went)\n\n"अ" = भूतकाल का चिह्न' }
      ],

      mcqs: [
        // Kridanta MCQs (1-10)
        { id: 'sm181', question: 'कृदन्त-तद्धितान्त विभाग में कितने अंक?', options: ['2 अंक', '3 अंक', '4 अंक', '6 अंक'], correctIndex: 1, explanation: 'कृदन्त-तद्धितान्त = 3 अंक।' },
        { id: 'sm182', question: '"पठितम्" में कौन सा प्रत्यय है?', options: ['क्तवतु', 'क्त', 'तव्य', 'शतृ'], correctIndex: 1, explanation: 'पठ् + क्त = पठितम्। क्त = Past Passive।' },
        { id: 'sm183', question: '"गतवान्" में कौन सा प्रत्यय है?', options: ['क्त', 'क्तवतु', 'तव्य', 'शतृ'], correctIndex: 1, explanation: 'गम् + क्तवतु = गतवान्। क्तवतु = Past Active।' },
        { id: 'sm184', question: '"कर्तव्यम्" में कौन सा प्रत्यय है?', options: ['क्त', 'क्तवतु', 'तव्य', 'शतृ'], correctIndex: 2, explanation: 'कृ + तव्य = कर्तव्यम्। तव्य = Should be done।' },
        { id: 'sm185', question: '"पठन्" में कौन सा प्रत्यय है?', options: ['क्त', 'क्तवतु', 'तव्य', 'शतृ'], correctIndex: 3, explanation: 'पठ् + शतृ = पठन्। शतृ = Present Participle।' },
        { id: 'sm186', question: 'क्त प्रत्यय किस काल के लिए?', options: ['वर्तमान', 'भविष्यत्', 'भूतकाल', 'विध्यर्थ'], correctIndex: 2, explanation: 'क्त = भूतकाल (Past) कर्मवाच्य।' },
        { id: 'sm187', question: 'क्तवतु प्रत्यय किस वाच्य के लिए?', options: ['कर्मवाच्य', 'कर्तृवाच्य', 'भाववाच्य', 'कोई नहीं'], correctIndex: 1, explanation: 'क्तवतु = भूतकाल कर्तृवाच्य (Active Voice)।' },
        { id: 'sm188', question: 'तव्य प्रत्यय का अर्थ?', options: ['किया गया', 'करने वाला', 'करना चाहिए', 'करता हुआ'], correctIndex: 2, explanation: 'तव्य = "करना चाहिए" (Should be done)।' },
        { id: 'sm189', question: '"लिखितवान्" का अर्थ?', options: ['लिखा गया', 'जिसने लिखा', 'लिखना चाहिए', 'लिखता हुआ'], correctIndex: 1, explanation: 'लिख् + क्तवतु = लिखितवान् = जिसने लिखा।' },
        { id: 'sm190', question: 'शतृ प्रत्यय किस काल के लिए?', options: ['भूतकाल', 'भविष्यत्', 'वर्तमान', 'विध्यर्थ'], correctIndex: 2, explanation: 'शतृ = वर्तमान काल (Present Participle)।' },
        
        // Taddhitanta MCQs (11-20)
        { id: 'sm191', question: '"मनुष्यत्वम्" में कौन सा प्रत्यय है?', options: ['ता', 'त्व', 'मत्', 'वत्'], correctIndex: 1, explanation: 'मनुष्य + त्व = मनुष्यत्वम्।' },
        { id: 'sm192', question: '"सुन्दरता" में कौन सा प्रत्यय है?', options: ['त्व', 'ता', 'मत्', 'वत्'], correctIndex: 1, explanation: 'सुन्दर + ता = सुन्दरता।' },
        { id: 'sm193', question: '"बुद्धिमान्" में कौन सा प्रत्यय है?', options: ['त्व', 'ता', 'मत्', 'वत्'], correctIndex: 2, explanation: 'बुद्धि + मत् = बुद्धिमान्।' },
        { id: 'sm194', question: '"धनवान्" में कौन सा प्रत्यय है?', options: ['त्व', 'ता', 'मत्', 'वत्'], correctIndex: 3, explanation: 'धन + वत् = धनवान्।' },
        { id: 'sm195', question: 'त्व प्रत्यय से बना शब्द किस लिंग में?', options: ['पुल्लिंग', 'स्त्रीलिंग', 'नपुंसकलिंग', 'कोई भी'], correctIndex: 2, explanation: 'त्व प्रत्यय = नपुंसकलिंग (-म्)।' },
        { id: 'sm196', question: 'ता प्रत्यय से बना शब्द किस लिंग में?', options: ['पुल्लिंग', 'स्त्रीलिंग', 'नपुंसकलिंग', 'कोई भी'], correctIndex: 1, explanation: 'ता प्रत्यय = स्त्रीलिंग।' },
        { id: 'sm197', question: 'मत्/वत् प्रत्यय का अर्थ?', options: ['भाव', 'वाला/युक्त', 'बिना', 'समान'], correctIndex: 1, explanation: 'मत्/वत् = "वाला" (Possessive)।' },
        { id: 'sm198', question: '"गुरुत्वम्" का अर्थ?', options: ['गुरु', 'गुरुता', 'गुरुत्व/भारीपन', 'गुरुकुल'], correctIndex: 2, explanation: 'गुरु + त्व = गुरुत्वम् = गुरुत्व/gravity।' },
        { id: 'sm199', question: '"बलवान्" का विग्रह?', options: ['बल + त्व', 'बल + ता', 'बल + मत्', 'बल + वत्'], correctIndex: 3, explanation: 'बल + वत् = बलवान् = बल वाला।' },
        { id: 'sm200', question: '"श्रीमान्" में कौन सा प्रत्यय है?', options: ['त्व', 'ता', 'मत्', 'वत्'], correctIndex: 2, explanation: 'श्री + मत् = श्रीमान्।' },
        
        // Parivartan MCQs (21-30)
        { id: 'sm201', question: 'परिवर्तनम् विभाग में कितने अंक?', options: ['2 अंक', '3 अंक', '4 अंक', '5 अंक'], correctIndex: 1, explanation: 'परिवर्तनम् = 3 अंक।' },
        { id: 'sm202', question: '"बालकः" का बहुवचन?', options: ['बालकम्', 'बालकौ', 'बालकाः', 'बालकानि'], correctIndex: 2, explanation: 'बालकः (एक) → बालकौ (दो) → बालकाः (अनेक)।' },
        { id: 'sm203', question: '"फलम्" का बहुवचन?', options: ['फलाः', 'फले', 'फलानि', 'फलम्'], correctIndex: 2, explanation: 'फलम् (एक) → फले (दो) → फलानि (अनेक)।' },
        { id: 'sm204', question: '"छात्रः" का स्त्रीलिंग?', options: ['छात्री', 'छात्रा', 'छात्रिका', 'छात्रम्'], correctIndex: 1, explanation: 'छात्रः (पुं.) → छात्रा (स्त्री.)।' },
        { id: 'sm205', question: '"शिक्षकः" का स्त्रीलिंग?', options: ['शिक्षका', 'शिक्षकी', 'शिक्षिका', 'शिक्षकम्'], correctIndex: 2, explanation: 'शिक्षकः → शिक्षिका (इका प्रत्यय)।' },
        { id: 'sm206', question: '"सः पठति" को उत्तम पुरुष में बदलो।', options: ['त्वं पठसि', 'अहं पठामि', 'ते पठन्ति', 'वयं पठामः'], correctIndex: 1, explanation: 'सः पठति (प्रथम) → अहं पठामि (उत्तम)।' },
        { id: 'sm207', question: '"गच्छति" का भविष्यत् काल?', options: ['अगच्छत्', 'गमिष्यति', 'गच्छतु', 'गच्छेत्'], correctIndex: 1, explanation: 'गच्छति (लट्) → गमिष्यति (लृट्)।' },
        { id: 'sm208', question: '"पठति" का भूतकाल?', options: ['पठिष्यति', 'अपठत्', 'पठतु', 'पठेत्'], correctIndex: 1, explanation: 'पठति (लट्) → अपठत् (लङ्)।' },
        { id: 'sm209', question: 'भूतकाल में किस उपसर्ग का प्रयोग?', options: ['सम्', 'वि', 'अ', 'नि'], correctIndex: 2, explanation: 'लङ् लकार में "अ" उपसर्ग (अगच्छत्)।' },
        { id: 'sm210', question: '"नटः" का स्त्रीलिंग?', options: ['नटा', 'नटी', 'नटिका', 'नट्या'], correctIndex: 1, explanation: 'नटः → नटी (ई प्रत्यय)।' }
      ],

      reels: [
        // Kridanta (1-10)
        { id: 'sr181', title: 'कृदन्त', content: '📝 धातु + कृत् प्रत्यय\n\nVerbal Derivative', color: getReelColor(0) },
        { id: 'sr182', title: 'क्त प्रत्यय', content: '⏮️ Past Passive\n\nपठितम् = was read', color: getReelColor(1) },
        { id: 'sr183', title: 'क्तवतु', content: '⏮️ Past Active\n\nगतवान् = one who went', color: getReelColor(2) },
        { id: 'sr184', title: 'तव्य', content: '✅ Should be done\n\nकर्तव्यम् = duty', color: getReelColor(3) },
        { id: 'sr185', title: 'शतृ', content: '🔄 Present Participle\n\nपठन् = reading', color: getReelColor(4) },
        { id: 'sr186', title: 'पठितम्', content: '📖 पठ् + क्त\n\nwas read', color: getReelColor(5) },
        { id: 'sr187', title: 'गतवान्', content: '🚶 गम् + क्तवतु\n\none who went', color: getReelColor(6) },
        { id: 'sr188', title: 'कर्तव्यम्', content: '☑️ कृ + तव्य\n\nshould be done', color: getReelColor(7) },
        { id: 'sr189', title: 'लिखितम्', content: '✍️ लिख् + क्त\n\nwas written', color: getReelColor(8) },
        { id: 'sr190', title: '3 Marks', content: '📊 कृदन्त-तद्धितान्त\n\n3 Easy Marks!', color: getReelColor(9) },
        
        // Taddhitanta (11-20)
        { id: 'sr191', title: 'तद्धितान्त', content: '📝 शब्द + तद्धित\n\nNominal Derivative', color: getReelColor(0) },
        { id: 'sr192', title: 'त्व प्रत्यय', content: '💫 Abstract (नपुं.)\n\nमनुष्यत्वम् = humanity', color: getReelColor(1) },
        { id: 'sr193', title: 'ता प्रत्यय', content: '💫 Abstract (स्त्री.)\n\nसुन्दरता = beauty', color: getReelColor(2) },
        { id: 'sr194', title: 'मत् प्रत्यय', content: '💪 Possessive\n\nबुद्धिमान् = intelligent', color: getReelColor(3) },
        { id: 'sr195', title: 'वत् प्रत्यय', content: '💰 Possessive\n\nधनवान् = wealthy', color: getReelColor(4) },
        { id: 'sr196', title: 'त्व vs ता', content: '📝 त्व = नपुंसक\nता = स्त्रीलिंग', color: getReelColor(5) },
        { id: 'sr197', title: 'गुरुत्वम्', content: '⚖️ गुरु + त्व\n\ngravity', color: getReelColor(6) },
        { id: 'sr198', title: 'बलवान्', content: '💪 बल + वत्\n\nstrong', color: getReelColor(7) },
        { id: 'sr199', title: 'श्रीमान्', content: '🙏 श्री + मत्\n\nprosperous', color: getReelColor(8) },
        { id: 'sr200', title: 'मूर्खता', content: '🤦 मूर्ख + ता\n\nfoolishness', color: getReelColor(9) },
        
        // Parivartan (21-30)
        { id: 'sr201', title: 'परिवर्तनम्', content: '🔄 Transformation\n\n3 Marks', color: getReelColor(0) },
        { id: 'sr202', title: 'वचन', content: '🔢 एक → द्वि → बहु\n\nबालकः → बालकौ → बालकाः', color: getReelColor(1) },
        { id: 'sr203', title: 'लिंग', content: '⚥ पुं. → स्त्री.\n\nछात्रः → छात्रा', color: getReelColor(2) },
        { id: 'sr204', title: 'पुरुष', content: '👤 प्रथम → मध्यम → उत्तम\n\nसः → त्वम् → अहम्', color: getReelColor(3) },
        { id: 'sr205', title: 'काल', content: '⏰ लट् → लृट् → लङ्\n\nPresent → Future → Past', color: getReelColor(4) },
        { id: 'sr206', title: 'बालकाः', content: '👦👦 बालकः का बहुवचन\n\nboys', color: getReelColor(5) },
        { id: 'sr207', title: 'फलानि', content: '🍎🍎 फलम् का बहुवचन\n\nfruits', color: getReelColor(6) },
        { id: 'sr208', title: 'अगच्छत्', content: '⏮️ गच्छति का भूतकाल\n\nwent', color: getReelColor(7) },
        { id: 'sr209', title: 'गमिष्यति', content: '⏭️ गच्छति का भविष्यत्\n\nwill go', color: getReelColor(8) },
        { id: 'sr210', title: '6 Marks', content: '📊 कृदन्त + परिवर्तन\n\n3 + 3 = 6 Marks!', color: getReelColor(9) }
      ],

      longAnswers: [
        {
          id: 'sl13',
          question: 'कृदन्त और तद्धितान्त में अंतर बताइए।',
          answer: `### कृदन्त vs तद्धितान्त

| विषय | कृदन्त | तद्धितान्त |
|------|--------|-----------|
| आधार | धातु (Verb Root) | शब्द (Noun) |
| प्रत्यय | कृत् प्रत्यय | तद्धित प्रत्यय |
| अर्थ | क्रिया संबंधित | गुण/भाव संबंधित |

**कृदन्त के प्रत्यय:**
| प्रत्यय | उदाहरण | अर्थ |
|---------|--------|------|
| क्त | पठितम् | पढ़ा गया |
| क्तवतु | गतवान् | जो गया |
| तव्य | कर्तव्यम् | करना चाहिए |
| शतृ | पठन् | पढ़ता हुआ |

**तद्धितान्त के प्रत्यय:**
| प्रत्यय | उदाहरण | अर्थ |
|---------|--------|------|
| त्व | मनुष्यत्वम् | मनुष्यता |
| ता | सुन्दरता | सौंदर्य |
| मत् | बुद्धिमान् | बुद्धि वाला |
| वत् | धनवान् | धन वाला |

**Exam में:** 3 अंक, प्रत्यय पहचानना और विग्रह लिखना।`
        },
        {
          id: 'sl14',
          question: 'परिवर्तनम् के विभिन्न प्रकार बताइए।',
          answer: `### परिवर्तनम् (Transformations) - 3 Marks

**चार प्रकार:**

**1. वचन परिवर्तन (Number)**
| एकवचन | द्विवचन | बहुवचन |
|--------|---------|--------|
| बालकः | बालकौ | बालकाः |
| फलम् | फले | फलानि |
| लता | लते | लताः |

**2. लिंग परिवर्तन (Gender)**
| पुल्लिंग | स्त्रीलिंग |
|----------|-----------|
| छात्रः | छात्रा |
| शिक्षकः | शिक्षिका |
| नटः | नटी |

**3. पुरुष परिवर्तन (Person)**
| पुरुष | एकवचन | बहुवचन |
|-------|--------|--------|
| प्रथम | सः पठति | ते पठन्ति |
| मध्यम | त्वं पठसि | यूयं पठथ |
| उत्तम | अहं पठामि | वयं पठामः |

**4. काल परिवर्तन (Tense)**
| काल | उदाहरण |
|-----|--------|
| वर्तमान (लट्) | पठति |
| भविष्यत् (लृट्) | पठिष्यति |
| भूत (लङ्) | अपठत् |`
        }
      ]
    },
    {
      id: 'sanskrit-ch8',
      name: 'लेखन कौशलम् (Writing Skills)',
      description: 'पत्रलेखनम्, निबन्ध, अनुच्छेद, कथालेखनम् - 16 marks',
      flashcards: [
        // Flashcards sf211-sf240 (30 flashcards)
        { id: 'sf211', front: 'औपचारिक पत्र का प्रारूप क्या है?', back: '**औपचारिक पत्र:**\n\n1. **प्रेषक** - नाम, पता, दिनांक\n2. **प्रति** - पदाधिकारी का नाम/पद\n3. **विषय** - एक पंक्ति में\n4. **संबोधन** - महोदय/महाभाग\n5. **विषय वस्तु** - 3-4 अनुच्छेद\n6. **समापन** - भवदीय/आज्ञाकारी\n7. **हस्ताक्षर** - नाम' },
        { id: 'sf212', front: 'पत्र में "महोदय" और "महाभाग" में क्या अंतर है?', back: '**संबोधन भेद:**\n\n- **महोदय** = Sir (सामान्य आदर)\n- **महाभाग** = Respected Sir (अधिक आदर)\n- **माननीय** = Honorable (उच्च पदाधिकारी)\n- **श्रीमान्** = Mr. (सामान्य)\n\n**प्रयोग:** प्रधानाचार्य → महोदय\nमुख्यमंत्री → माननीय' },
        { id: 'sf213', front: 'अनौपचारिक पत्र किसे लिखते हैं?', back: '**अनौपचारिक पत्र:**\n\n- मित्र (प्रिय मित्र)\n- परिवार (पूज्य पिताजी, प्रिय भाई)\n- रिश्तेदार (आदरणीय मामाजी)\n\n**विशेषता:**\n- व्यक्तिगत भावनाएं\n- सरल भाषा\n- समापन: तुम्हारा/आपका प्रिय' },
        { id: 'sf214', front: 'प्रधानाचार्य को अवकाश हेतु पत्र का विषय कैसे लिखें?', back: '**विषय उदाहरण:**\n\n- विषयः - अस्वस्थता हेतु अवकाश प्रार्थना\n- विषयः - पारिवारिक कार्य हेतु अवकाश\n- विषयः - परीक्षा हेतु अवकाश\n\n**Tip:** विषय स्पष्ट और संक्षिप्त हो!' },
        { id: 'sf215', front: 'निबंध लेखन के मुख्य भाग कौन से हैं?', back: '**निबंध संरचना:**\n\n1. **प्रस्तावना/भूमिका** (Introduction)\n   - विषय परिचय, महत्व\n\n2. **विस्तार** (Body)\n   - मुख्य बिंदु, उदाहरण, प्रमाण\n   - 3-4 अनुच्छेद\n\n3. **उपसंहार** (Conclusion)\n   - सारांश, निष्कर्ष\n\n**अंक:** 4-5 marks' },
        { id: 'sf216', front: '"विद्यायाः महत्त्वम्" निबंध के मुख्य बिंदु क्या हैं?', back: '**विद्या का महत्व:**\n\n1. विद्या धनं सर्वधनप्रधानम्\n2. विद्या ददाति विनयम्\n3. विद्या अमृतम् अश्नुते\n4. विद्यया लभते सर्वम्\n5. गुरु-शिष्य परम्परा\n6. आधुनिक शिक्षा\n7. राष्ट्र निर्माण में योगदान' },
        { id: 'sf217', front: '"पर्यावरणम्" निबंध में कौन से बिंदु शामिल करें?', back: '**पर्यावरण निबंध:**\n\n1. पर्यावरण का अर्थ\n2. पंचमहाभूत (पृथ्वी, जल, अग्नि, वायु, आकाश)\n3. प्रदूषण समस्या\n4. वृक्षारोपण\n5. जल संरक्षण\n6. वैदिक दृष्टिकोण\n7. उपाय और समाधान' },
        { id: 'sf218', front: 'अनुच्छेद लेखन क्या है?', back: '**अनुच्छेद (Paragraph):**\n\n- एक विषय पर 60-80 शब्द\n- एक ही paragraph में\n- प्रारंभ-मध्य-अंत\n\n**विशेषता:**\n- संक्षिप्त और सटीक\n- एक मुख्य विचार\n- सरल वाक्य\n\n**अंक:** 3-4 marks' },
        { id: 'sf219', front: '"मम विद्यालयः" अनुच्छेद कैसे लिखें?', back: '**मम विद्यालयः:**\n\nमम विद्यालयस्य नाम _____ अस्ति। एषः नगरस्य मध्ये स्थितः। अत्र विंशतिः कक्षाः सन्ति। शतं अध्यापकाः पठन्ति। सहस्रं छात्राः पठन्ति। विद्यालये पुस्तकालयः, क्रीडाक्षेत्रं, प्रयोगशाला च अस्ति। प्रधानाचार्यः अतीव स्नेहशीलः। अहं मम विद्यालयं प्रीतिं करोमि।' },
        { id: 'sf220', front: '"होलिकोत्सवः" पर अनुच्छेद के मुख्य बिंदु?', back: '**होलिकोत्सवः:**\n\n1. फाल्गुन पूर्णिमा\n2. वसन्त ऋतु\n3. होलिका दहन\n4. रंगों का त्योहार\n5. प्रह्लाद-होलिका कथा\n6. भाईचारे का पर्व\n7. मिठाई वितरण' },
        { id: 'sf221', front: 'कथा लेखन में क्या तत्व होने चाहिए?', back: '**कथा के तत्व:**\n\n1. **शीर्षक** - आकर्षक\n2. **पात्र** - मुख्य/गौण\n3. **कथानक** - आरंभ, मध्य, अंत\n4. **संवाद** - पात्रों की बातचीत\n5. **चरमोत्कर्ष** - मोड़ बिंदु\n6. **शिक्षा** - नैतिक संदेश\n\n**अंक:** 4-5 marks' },
        { id: 'sf222', front: 'चित्र वर्णन कैसे करें?', back: '**चित्र वर्णन विधि:**\n\n1. चित्र का अवलोकन\n2. मुख्य विषय पहचानें\n3. स्थान/समय\n4. पात्र/वस्तुएं\n5. क्रिया/घटना\n6. अपना विचार\n\n**वाक्य:**\n- अत्र एकं चित्रं दृश्यते\n- चित्रे ___ अस्ति\n- एतत् चित्रं ___ दर्शयति' },
        { id: 'sf223', front: 'संवाद लेखन क्या है?', back: '**संवाद लेखन:**\n\n- दो या अधिक व्यक्तियों की बातचीत\n- प्रश्न-उत्तर शैली\n- नाटकीय रूप\n\n**प्रारूप:**\nरामः - मित्र, कुत्र गच्छसि?\nश्यामः - अहं विद्यालयं गच्छामि।\nरामः - किम् अद्य परीक्षा अस्ति?\nश्यामः - आम्, गणितस्य परीक्षा।' },
        { id: 'sf224', front: '"गुरु-शिष्य" संवाद के उदाहरण?', back: '**गुरु-शिष्य संवाद:**\n\nशिष्यः - गुरुदेव, नमस्कारः।\nगुरुः - आयुष्मान् भव। किम् पृच्छसि?\nशिष्यः - संस्कृतस्य महत्त्वं किम्?\nगुरुः - संस्कृतं देववाणी, सर्वभाषाणां जननी।\nशिष्यः - धन्यवादः गुरुदेव।\nगुरुः - शुभं भवतु।' },
        { id: 'sf225', front: 'पत्र में "भवदीय" और "आज्ञाकारी" का प्रयोग कब?', back: '**समापन शब्द:**\n\n| शब्द | प्रयोग |\n|------|--------|\n| भवदीय | अधिकारी को |\n| आज्ञाकारी | गुरु/माता-पिता को |\n| शुभाकांक्षी | समान स्तर |\n| तुम्हारा मित्र | मित्र को |\n| स्नेही | छोटों को |' },
        { id: 'sf226', front: '"स्वच्छता" पर निबंध के बिंदु?', back: '**स्वच्छता निबंध:**\n\n1. स्वच्छता परमो धर्मः\n2. शारीरिक स्वच्छता\n3. मानसिक स्वच्छता\n4. पर्यावरण स्वच्छता\n5. स्वच्छ भारत अभियान\n6. गांधीजी का योगदान\n7. स्वच्छता से स्वस्थता' },
        { id: 'sf227', front: 'प्रार्थना पत्र और शिकायत पत्र में अंतर?', back: '**पत्र भेद:**\n\n| प्रार्थना पत्र | शिकायत पत्र |\n|---------------|-------------|\n| अनुरोध करना | समस्या बताना |\n| विनम्र भाषा | कड़ी भाषा |\n| कृपया, प्रार्थना | आग्रह, मांग |\n| अवकाश, प्रमाण पत्र | असुविधा, हानि |' },
        { id: 'sf228', front: '"राष्ट्रभक्तिः" निबंध के मुख्य बिंदु?', back: '**राष्ट्रभक्ति:**\n\n1. देशप्रेम का अर्थ\n2. जननी जन्मभूमिश्च\n3. स्वतंत्रता सेनानी\n4. राष्ट्रीय प्रतीक\n5. नागरिक कर्तव्य\n6. राष्ट्र सेवा\n7. एकता और अखंडता' },
        { id: 'sf229', front: 'विज्ञापन लेखन के नियम?', back: '**विज्ञापन लेखन:**\n\n1. **आकर्षक शीर्षक**\n2. **चित्र/लोगो**\n3. **विशेषताएं** - संक्षिप्त में\n4. **मूल्य/छूट**\n5. **संपर्क** - पता, फोन\n6. **समय सीमा** - ऑफर की\n\n**भाषा:** सरल, प्रभावी, याद रहने योग्य' },
        { id: 'sf230', front: '"दीपावलिः" अनुच्छेद कैसे लिखें?', back: '**दीपावलिः:**\n\nदीपावलिः भारतस्य महान् उत्सवः अस्ति। कार्तिक मासस्य अमावस्यायां एषः उत्सवः आगच्छति। जनाः गृहाणि स्वच्छं कुर्वन्ति। दीपान् प्रज्वालयन्ति। लक्ष्मी-गणेशयोः पूजनं कुर्वन्ति। मिष्टान्नानि वितरन्ति। सर्वे प्रसन्नाः भवन्ति।' },
        { id: 'sf231', front: 'सूचना लेखन का प्रारूप?', back: '**सूचना (Notice):**\n\n**विद्यालय सूचना पट्ट**\n\nदिनांक: ___\n\n**विषय:** वार्षिकोत्सव\n\nसूचित किया जाता है कि दिनांक ___ को विद्यालय में वार्षिकोत्सव आयोजित किया जाएगा। सभी छात्र समय पर उपस्थित हों।\n\nप्रधानाचार्य\n(हस्ताक्षर)' },
        { id: 'sf232', front: '"जलसंरक्षणम्" पर निबंध?', back: '**जल संरक्षण:**\n\n1. जलं जीवनम्\n2. जल संकट\n3. जल प्रदूषण\n4. वर्षा जल संचयन\n5. जल की बचत\n6. नदी संरक्षण\n7. भविष्य की चिंता\n\n**श्लोक:** जलबिन्दुनिपातेन क्रमशः पूर्यते घटः।' },
        { id: 'sf233', front: 'आवेदन पत्र का प्रारूप?', back: '**आवेदन पत्र:**\n\nसेवा में,\nश्रीमान् प्रधानाचार्य महोदय,\n___ विद्यालय, (स्थान)\n\nविषय: ___ हेतु आवेदन\n\nमहोदय,\nसविनय निवेदन है कि...\n(कारण विस्तार से)\n\nअतः श्रीमान् से प्रार्थना है कि...\n\nभवदीय\n(नाम, कक्षा)' },
        { id: 'sf234', front: '"मम प्रिय ग्रन्थः" अनुच्छेद?', back: '**मम प्रिय ग्रन्थः:**\n\nमम प्रियः ग्रन्थः श्रीमद्भगवद्गीता अस्ति। एषः ग्रन्थः महाभारते स्थितः। अत्र अष्टादश अध्यायाः सन्ति। श्रीकृष्णः अर्जुनाय उपदेशं ददाति। कर्मयोग, ज्ञानयोग, भक्तियोग अत्र वर्णिताः। एषः ग्रन्थः जीवनस्य मार्गदर्शकः।' },
        { id: 'sf235', front: 'कथा लेखन में नीति कथा क्या है?', back: '**नीति कथा:**\n\n- शिक्षाप्रद कहानी\n- पशु-पक्षी पात्र\n- नैतिक संदेश\n\n**प्रसिद्ध:**\n- पंचतंत्र\n- हितोपदेश\n- जातक कथाएं\n\n**उदाहरण:** कौवा-लोमड़ी, खरगोश-कछुआ' },
        { id: 'sf236', front: '"योगस्य महत्त्वम्" निबंध बिंदु?', back: '**योग का महत्व:**\n\n1. योगश्चित्तवृत्तिनिरोधः\n2. शारीरिक स्वास्थ्य\n3. मानसिक शांति\n4. पतंजलि योग सूत्र\n5. अष्टांग योग\n6. अंतर्राष्ट्रीय योग दिवस\n7. आधुनिक जीवन में योग' },
        { id: 'sf237', front: 'पत्र में तिथि कैसे लिखें?', back: '**तिथि लेखन:**\n\n**हिंदी:** १५ जनवरी, २०२५\n**संस्कृत:** पौष मास, शुक्ल पक्ष, पूर्णिमा\n**अंग्रेजी:** 15th January, 2025\n\n**स्थान:** दाईं ओर, ऊपर\n\n**Tip:** परीक्षा में वर्तमान तिथि लिखें!' },
        { id: 'sf238', front: '"मम ग्रामः" अनुच्छेद?', back: '**मम ग्रामः:**\n\nमम ग्रामस्य नाम ___ अस्ति। एषः नगरात् दश किलोमीटर दूरे स्थितः। अत्र शतं परिवाराः निवसन्ति। ग्रामे एकं मन्दिरं, एका पाठशाला च अस्ति। कृषकाः कृषिकार्यं कुर्वन्ति। जनाः परस्परं स्नेहं कुर्वन्ति। मम ग्रामः अतीव सुन्दरः।' },
        { id: 'sf239', front: '"वृक्षारोपणम्" पर निबंध?', back: '**वृक्षारोपण:**\n\n1. वृक्षो रक्षति रक्षितः\n2. पर्यावरण संतुलन\n3. ऑक्सीजन प्रदाता\n4. वन्यजीव आश्रय\n5. वन महोत्सव\n6. एक पेड़ एक जीवन\n7. हरित भारत अभियान' },
        { id: 'sf240', front: 'औपचारिक पत्र में "सविनय निवेदन" का अर्थ?', back: '**सविनय निवेदन:**\n\n- With humble submission\n- विनम्र प्रार्थना\n- आदरपूर्वक निवेदन\n\n**प्रयोग:** पत्र के प्रारंभ में\n\n**उदाहरण:**\n"सविनय निवेदन है कि मैं आपके विद्यालय का छात्र हूं..."' }
      ],
      mcqs: [
        // MCQs sm211-sm240 (30 MCQs)
        { id: 'sm211', question: 'औपचारिक पत्र में संबोधन क्या होता है?', options: ['प्रिय मित्र', 'महोदय/महाभाग', 'आदरणीय', 'स्नेही'], answer: 'महोदय/महाभाग' },
        { id: 'sm212', question: 'निबंध के कितने भाग होते हैं?', options: ['दो', 'तीन', 'चार', 'पांच'], answer: 'तीन' },
        { id: 'sm213', question: '"भवदीय" का प्रयोग किसके लिए होता है?', options: ['मित्र', 'अधिकारी', 'छोटे', 'समान'], answer: 'अधिकारी' },
        { id: 'sm214', question: 'अनुच्छेद में लगभग कितने शब्द होते हैं?', options: ['20-30', '40-50', '60-80', '100-120'], answer: '60-80' },
        { id: 'sm215', question: 'पत्र में "विषय" कहाँ लिखते हैं?', options: ['अंत में', 'बीच में', 'संबोधन से पहले', 'हस्ताक्षर के बाद'], answer: 'संबोधन से पहले' },
        { id: 'sm216', question: 'अनौपचारिक पत्र किसे लिखा जाता है?', options: ['प्रधानाचार्य', 'मित्र/परिवार', 'अधिकारी', 'संपादक'], answer: 'मित्र/परिवार' },
        { id: 'sm217', question: '"आज्ञाकारी" शब्द का प्रयोग किसके लिए?', options: ['मित्र', 'गुरु/माता-पिता', 'अधिकारी', 'छोटे'], answer: 'गुरु/माता-पिता' },
        { id: 'sm218', question: 'कथा लेखन में अंत में क्या होता है?', options: ['परिचय', 'शिक्षा/नीति', 'संवाद', 'विस्तार'], answer: 'शिक्षा/नीति' },
        { id: 'sm219', question: '"विद्या ददाति विनयम्" - यह किस निबंध में प्रयोग होगा?', options: ['पर्यावरण', 'विद्या का महत्व', 'स्वच्छता', 'योग'], answer: 'विद्या का महत्व' },
        { id: 'sm220', question: 'चित्र वर्णन में सबसे पहले क्या करें?', options: ['लिखना शुरू करें', 'चित्र का अवलोकन', 'शीर्षक लिखें', 'निष्कर्ष लिखें'], answer: 'चित्र का अवलोकन' },
        { id: 'sm221', question: 'संवाद लेखन में कम से कम कितने पात्र चाहिए?', options: ['एक', 'दो', 'तीन', 'चार'], answer: 'दो' },
        { id: 'sm222', question: 'सूचना (Notice) में क्या अनिवार्य है?', options: ['कविता', 'दिनांक और विषय', 'कहानी', 'निबंध'], answer: 'दिनांक और विषय' },
        { id: 'sm223', question: '"स्वच्छता परमो धर्मः" किस निबंध में?', options: ['विद्या', 'स्वच्छता', 'पर्यावरण', 'राष्ट्रभक्ति'], answer: 'स्वच्छता' },
        { id: 'sm224', question: 'पंचतंत्र किस प्रकार की कथाएं हैं?', options: ['प्रेम कथा', 'नीति कथा', 'युद्ध कथा', 'यात्रा वृत्तांत'], answer: 'नीति कथा' },
        { id: 'sm225', question: 'पत्र में प्रेषक का पता कहाँ लिखते हैं?', options: ['बाईं ओर नीचे', 'दाईं ओर ऊपर', 'बीच में', 'अंत में'], answer: 'दाईं ओर ऊपर' },
        { id: 'sm226', question: '"जलं जीवनम्" किस निबंध का मुख्य बिंदु है?', options: ['योग', 'जल संरक्षण', 'वृक्षारोपण', 'स्वच्छता'], answer: 'जल संरक्षण' },
        { id: 'sm227', question: 'विज्ञापन में क्या आवश्यक है?', options: ['लंबी कहानी', 'आकर्षक शीर्षक', 'निबंध', 'पत्र'], answer: 'आकर्षक शीर्षक' },
        { id: 'sm228', question: '"वृक्षो रक्षति रक्षितः" का अर्थ?', options: ['वृक्ष काटो', 'वृक्ष की रक्षा करो, वो तुम्हारी करेगा', 'वृक्ष बेचो', 'वृक्ष सुखाओ'], answer: 'वृक्ष की रक्षा करो, वो तुम्हारी करेगा' },
        { id: 'sm229', question: 'निबंध की प्रस्तावना में क्या लिखते हैं?', options: ['निष्कर्ष', 'विषय परिचय', 'उदाहरण', 'शिक्षा'], answer: 'विषय परिचय' },
        { id: 'sm230', question: '"योगश्चित्तवृत्तिनिरोधः" किसने कहा?', options: ['व्यास', 'पतंजलि', 'शंकराचार्य', 'वाल्मीकि'], answer: 'पतंजलि' },
        { id: 'sm231', question: 'दीपावली किस मास में आती है?', options: ['चैत्र', 'कार्तिक', 'श्रावण', 'फाल्गुन'], answer: 'कार्तिक' },
        { id: 'sm232', question: 'होलिका दहन किस तिथि को होता है?', options: ['अमावस्या', 'पूर्णिमा', 'एकादशी', 'अष्टमी'], answer: 'पूर्णिमा' },
        { id: 'sm233', question: 'पत्र का अंतिम भाग क्या है?', options: ['विषय', 'संबोधन', 'हस्ताक्षर', 'प्रेषक पता'], answer: 'हस्ताक्षर' },
        { id: 'sm234', question: '"मम विद्यालयः" किस प्रकार का लेखन है?', options: ['निबंध', 'अनुच्छेद', 'पत्र', 'कथा'], answer: 'अनुच्छेद' },
        { id: 'sm235', question: 'गुरु-शिष्य संवाद में "आयुष्मान् भव" का अर्थ?', options: ['जाओ', 'दीर्घायु हो', 'पढ़ो', 'बैठो'], answer: 'दीर्घायु हो' },
        { id: 'sm236', question: 'शिकायत पत्र में भाषा कैसी होती है?', options: ['विनम्र', 'कड़ी/गंभीर', 'हास्य', 'काव्यात्मक'], answer: 'कड़ी/गंभीर' },
        { id: 'sm237', question: '"जननी जन्मभूमिश्च" किस निबंध से संबंधित?', options: ['विद्या', 'राष्ट्रभक्ति', 'पर्यावरण', 'योग'], answer: 'राष्ट्रभक्ति' },
        { id: 'sm238', question: 'अंतर्राष्ट्रीय योग दिवस कब है?', options: ['21 मार्च', '21 जून', '15 अगस्त', '2 अक्टूबर'], answer: '21 जून' },
        { id: 'sm239', question: 'निबंध के उपसंहार में क्या लिखते हैं?', options: ['परिचय', 'विस्तार', 'सारांश/निष्कर्ष', 'संवाद'], answer: 'सारांश/निष्कर्ष' },
        { id: 'sm240', question: 'पत्र में "सेवा में" के बाद क्या लिखते हैं?', options: ['विषय', 'प्राप्तकर्ता का नाम/पद', 'दिनांक', 'हस्ताक्षर'], answer: 'प्राप्तकर्ता का नाम/पद' }
      ],
      reels: [
        // Reels sr211-sr240 (30 reels)
        { id: 'sr211', title: 'पत्र का प्रारूप याद करो!', content: '**PVSSVH Formula:**\n\nP - प्रेषक (Sender)\nV - विषय (Subject)\nS - संबोधन (Salutation)\nS - सामग्री (Content)\nV - विनम्र समापन\nH - हस्ताक्षर\n\n🔥 6 Steps = Perfect Letter!' },
        { id: 'sr212', title: 'निबंध = तीन भाग!', content: '**निबंध संरचना:**\n\n1️⃣ **प्रस्तावना** = Introduction\n   (क्या? क्यों? कैसे?)\n\n2️⃣ **विस्तार** = Body\n   (3-4 paragraphs)\n\n3️⃣ **उपसंहार** = Conclusion\n   (सारांश + संदेश)\n\n✅ Simple structure, best marks!' },
        { id: 'sr213', title: 'औपचारिक vs अनौपचारिक', content: '**पत्र भेद:**\n\n📋 **औपचारिक:**\n- अधिकारी को\n- महोदय/भवदीय\n- Formal language\n\n💌 **अनौपचारिक:**\n- मित्र/परिवार को\n- प्रिय/आदरणीय\n- Personal touch\n\n⚠️ Don\'t mix them!' },
        { id: 'sr214', title: 'अनुच्छेद = One Para!', content: '**अनुच्छेद Tips:**\n\n📝 60-80 शब्द only\n📝 One topic, one para\n📝 Beginning-Middle-End\n📝 Simple sentences\n📝 No heading needed\n\n🎯 Short & Sweet = Full marks!' },
        { id: 'sr215', title: 'समापन शब्द याद करो!', content: '**Letter Endings:**\\n\\n| किसे | समापन |\\n|------|--------|\\n| अधिकारी | भवदीय |\\n| गुरु | आज्ञाकारी |\\n| मित्र | तुम्हारा मित्र |\\n| छोटे | स्नेही |\\n| माता-पिता | आपका पुत्र/पुत्री |' },
        { id: 'sr216', title: 'विद्या निबंध के 5 श्लोक!', content: '**विद्या पर श्लोक:**\n\n1. विद्या ददाति विनयम्\n2. विद्या धनं सर्वधनप्रधानम्\n3. सा विद्या या विमुक्तये\n4. विद्यां चाविद्यां च यस्तद्\n5. विद्याविहीनः पशुः\n\n📚 Quote these = Extra marks!' },
        { id: 'sr217', title: 'कथा लेखन Formula!', content: '**PACKS Method:**\n\nP - पात्र (Characters)\nA - आरंभ (Beginning)\nC - चरमोत्कर्ष (Climax)\nK - कथानक (Plot)\nS - शिक्षा (Moral)\n\n✍️ Every story needs a moral!' },
        { id: 'sr218', title: 'चित्र वर्णन Steps!', content: '**5 Steps:**\n\n1️⃣ देखो (Observe)\n2️⃣ पहचानो (Identify)\n3️⃣ वर्णन (Describe)\n4️⃣ जोड़ो (Connect)\n5️⃣ विचार (Opinion)\n\n🖼️ "अत्र एकं चित्रं दृश्यते..."' },
        { id: 'sr219', title: 'पर्यावरण = पंचमहाभूत!', content: '**पंचतत्व:**\n\n🌍 पृथ्वी (Earth)\n💧 जल (Water)\n🔥 अग्नि (Fire)\n💨 वायु (Air)\n✨ आकाश (Space)\n\n📝 पर्यावरण निबंध में जरूर लिखो!' },
        { id: 'sr220', title: 'संवाद लेखन Format!', content: '**संवाद प्रारूप:**\n\nनाम: - वाक्य\nनाम: - वाक्य\n\n**Example:**\nरामः - नमस्ते मित्र!\nश्यामः - नमस्ते, कुशलं?\nरामः - सर्वं कुशलम्।\n\n💬 Minimum 4-5 dialogues!' },
        { id: 'sr221', title: 'होली = फाल्गुन पूर्णिमा!', content: '**होली Facts:**\n\n🌙 फाल्गुन पूर्णिमा\n🌸 वसन्त ऋतु\n🔥 होलिका दहन\n🎨 रंगों का पर्व\n👦 प्रह्लाद की विजय\n\n📝 अनुच्छेद में ये points जरूर!' },
        { id: 'sr222', title: 'दीपावली = कार्तिक अमावस्या!', content: '**दीपावली Facts:**\n\n🌑 कार्तिक अमावस्या\n🪔 दीप प्रज्वलन\n🙏 लक्ष्मी-गणेश पूजा\n🏠 गृह सज्जा\n🍬 मिठाई वितरण\n\n✨ प्रकाश का पर्व = अंधकार पर विजय' },
        { id: 'sr223', title: 'पत्र में विषय कैसे लिखें?', content: '**विषय लेखन:**\n\n❌ Wrong: विषय - छुट्टी\n✅ Right: विषय - अस्वस्थता हेतु तीन दिवसीय अवकाश प्रार्थना\n\n📌 Clear & Specific\n📌 One line only\n📌 Main purpose बताओ' },
        { id: 'sr224', title: 'स्वच्छता = 3 प्रकार!', content: '**स्वच्छता के प्रकार:**\n\n1️⃣ **शारीरिक** - Body hygiene\n2️⃣ **मानसिक** - Pure thoughts\n3️⃣ **पर्यावरण** - Clean surroundings\n\n🧹 स्वच्छता परमो धर्मः!' },
        { id: 'sr225', title: 'नीति कथा के स्रोत!', content: '**प्रसिद्ध ग्रंथ:**\n\n📖 पंचतंत्र - विष्णु शर्मा\n📖 हितोपदेश - नारायण पंडित\n📖 जातक कथाएं - बौद्ध\n📖 कथासरित्सागर\n\n🦊 पशु-पक्षी = नैतिक शिक्षा!' },
        { id: 'sr226', title: 'योग = अष्टांग!', content: '**पतंजलि अष्टांग योग:**\n\n1. यम\n2. नियम\n3. आसन\n4. प्राणायाम\n5. प्रत्याहार\n6. धारणा\n7. ध्यान\n8. समाधि\n\n🧘 21 June = International Yoga Day' },
        { id: 'sr227', title: 'वृक्षारोपण Key Points!', content: '**वृक्ष Benefits:**\n\n🌳 ऑक्सीजन देते हैं\n🌳 प्रदूषण कम करते हैं\n🌳 वर्षा लाते हैं\n🌳 छाया देते हैं\n🌳 फल-फूल देते हैं\n\n💚 One Tree = One Life!' },
        { id: 'sr228', title: 'जल संरक्षण Tips!', content: '**जल बचाओ:**\n\n💧 वर्षा जल संचयन\n💧 टपकता नल बंद करो\n💧 कम पानी में स्नान\n💧 गाड़ी बाल्टी से धोओ\n💧 पुनर्चक्रण करो\n\n🚰 जल है तो कल है!' },
        { id: 'sr229', title: 'राष्ट्रभक्ति = कर्तव्य!', content: '**नागरिक कर्तव्य:**\n\n🇮🇳 संविधान का पालन\n🇮🇳 राष्ट्रीय प्रतीकों का सम्मान\n🇮🇳 देश की रक्षा\n🇮🇳 कर भुगतान\n🇮🇳 पर्यावरण रक्षा\n\n🙏 जननी जन्मभूमिश्च...' },
        { id: 'sr230', title: 'सूचना = Notice Format!', content: '**सूचना प्रारूप:**\n\n📋 शीर्षक: विद्यालय सूचना\n📅 दिनांक\n📌 विषय\n📝 सामग्री (2-3 lines)\n✍️ प्रधानाचार्य/सचिव\n\n⚠️ Short & Clear!' },
        { id: 'sr231', title: 'विज्ञापन = AIDA!', content: '**विज्ञापन Formula:**\n\n**A** - Attention (ध्यान आकर्षित)\n**I** - Interest (रुचि जगाओ)\n**D** - Desire (इच्छा पैदा करो)\n**A** - Action (खरीदने को कहो)\n\n📢 Catchy = Effective!' },
        { id: 'sr232', title: 'मम विद्यालयः Template!', content: '**विद्यालय वर्णन:**\n\n🏫 नाम + स्थान\n👨‍🏫 अध्यापक संख्या\n👨‍🎓 छात्र संख्या\n📚 कक्षाएं/विषय\n🏃 खेल/सुविधाएं\n❤️ मेरी भावना\n\n✏️ Personal touch दो!' },
        { id: 'sr233', title: 'प्रार्थना vs शिकायत पत्र!', content: '**अंतर:**\n\n📝 **प्रार्थना:**\n- विनम्र भाषा\n- अनुरोध करना\n- कृपया, प्रार्थना\n\n📝 **शिकायत:**\n- गंभीर भाषा\n- समस्या बताना\n- कार्रवाई की मांग' },
        { id: 'sr234', title: 'गीता = 18 अध्याय!', content: '**श्रीमद्भगवद्गीता:**\n\n📖 18 अध्याय, 700 श्लोक\n🎯 कर्मयोग - कर्म करो\n📚 ज्ञानयोग - ज्ञान पाओ\n🙏 भक्तियोग - भक्ति करो\n\n💫 Life का Ultimate Guide!' },
        { id: 'sr235', title: 'निबंध Word Limit!', content: '**शब्द सीमा:**\n\n📝 अनुच्छेद: 60-80 शब्द\n📝 लघु निबंध: 100-150 शब्द\n📝 दीर्घ निबंध: 200-250 शब्द\n\n⚠️ Don\'t exceed!\n⚠️ Quality > Quantity' },
        { id: 'sr236', title: 'संस्कृत में महीने!', content: '**हिंदू मास:**\\n\\n| हिंदी | संस्कृत |\\n|-------|---------|\\n| चैत्र | मार्च-अप्रैल |\\n| कार्तिक | अक्टू-नवं |\\n| फाल्गुन | फर-मार्च |\\n| श्रावण | जुला-अग |' },
        { id: 'sr237', title: 'पत्र = 7 Parts!', content: '**पत्र के अंग:**\n\n1️⃣ प्रेषक का पता\n2️⃣ दिनांक\n3️⃣ प्राप्तकर्ता का पता\n4️⃣ विषय\n5️⃣ संबोधन\n6️⃣ विषय वस्तु\n7️⃣ समापन + हस्ताक्षर\n\n✅ All 7 = Full marks!' },
        { id: 'sr238', title: 'Important निबंध Topics!', content: '**परीक्षा में आते हैं:**\n\n📚 विद्यायाः महत्त्वम्\n🌳 पर्यावरणम्/वृक्षारोपणम्\n🧹 स्वच्छता\n🧘 योगस्य महत्त्वम्\n💧 जलसंरक्षणम्\n🇮🇳 राष्ट्रभक्तिः\n\n⭐ Prepare all!' },
        { id: 'sr239', title: 'कथा में शिक्षा कैसे लिखें?', content: '**नीति/शिक्षा Format:**\n\n📌 "इस कथा से शिक्षा मिलती है कि..."\n📌 "अतः सत्यं वद। (सत्य बोलो)"\n📌 "श्रमस्य फलं मधुरं भवति।"\n\n🎯 One line moral = Perfect ending!' },
        { id: 'sr240', title: 'लेखन कौशल = 16 Marks!', content: '**Marks Distribution:**\n\n✍️ पत्र लेखन: 4-5 marks\n✍️ निबंध: 4-5 marks\n✍️ अनुच्छेद: 3-4 marks\n✍️ कथा/संवाद: 3-4 marks\n\n📝 Practice writing daily!\n🔥 Easy marks if practiced!' }
      ],
      longAnswers: [
        {
          id: 'sl15',
          question: 'औपचारिक पत्र लेखन की विधि और उदाहरण',
          answer: `# औपचारिक पत्र लेखन

## पत्र के प्रकार
1. **औपचारिक** - अधिकारियों को
2. **अनौपचारिक** - मित्र/परिवार को

## औपचारिक पत्र का प्रारूप

### 1. प्रेषक का पता (दाईं ओर)
\`\`\`
परीक्षा भवन,
नगर का नाम
दिनांक: ००/००/२०२५
\`\`\`

### 2. प्राप्तकर्ता का पता (बाईं ओर)
\`\`\`
सेवा में,
श्रीमान् प्रधानाचार्य महोदय,
विद्यालय का नाम,
नगर
\`\`\`

### 3. विषय
विषय: अस्वस्थता हेतु तीन दिवसीय अवकाश प्रार्थना

### 4. संबोधन
महोदय,

### 5. विषय वस्तु
सविनय निवेदन है कि मैं आपके विद्यालय की कक्षा बारहवीं का छात्र हूँ। मुझे कल से तीव्र ज्वर है। चिकित्सक ने तीन दिन विश्राम करने की सलाह दी है।

अतः श्रीमान् से प्रार्थना है कि मुझे दिनांक ___ से ___ तक तीन दिन का अवकाश प्रदान करें।

### 6. समापन
आपका आज्ञाकारी शिष्य
(नाम)
कक्षा - XII

---

## समापन शब्द
| किसे लिखें | समापन |
|-----------|--------|
| अधिकारी | भवदीय |
| गुरु/माता-पिता | आज्ञाकारी |
| मित्र | तुम्हारा मित्र |

**Exam Tip:** पत्र = 4-5 अंक। प्रारूप सही हो तो अंक पक्के!`
        },
        {
          id: 'sl16',
          question: 'निबंध लेखन की विधि - "विद्यायाः महत्त्वम्"',
          answer: `# निबंध लेखन विधि

## निबंध के तीन भाग
1. **प्रस्तावना** (Introduction)
2. **विस्तार** (Body)
3. **उपसंहार** (Conclusion)

---

# विद्यायाः महत्त्वम्
(विद्या का महत्व)

## प्रस्तावना
विद्या मनुष्य जीवन का सबसे बड़ा धन है। कहा गया है - "विद्या धनं सर्वधनप्रधानम्" अर्थात् विद्या रूपी धन सभी धनों में श्रेष्ठ है।

## विस्तार

### विद्या की परिभाषा
"सा विद्या या विमुक्तये" - जो मुक्ति दिलाए वही विद्या है।

### विद्या के लाभ
1. **विनय** - विद्या ददाति विनयम्
2. **योग्यता** - विनयाद् याति पात्रताम्
3. **धन** - पात्रत्वाद् धनमाप्नोति
4. **सुख** - धनाद् धर्मं ततः सुखम्

### गुरु-शिष्य परम्परा
- गुरुर्ब्रह्मा गुरुर्विष्णुः
- आचार्य देवो भव

### आधुनिक शिक्षा
- विज्ञान और तकनीक
- व्यावसायिक शिक्षा
- नैतिक मूल्य

## उपसंहार
विद्या ही जीवन का सार है। विद्या से ही मनुष्य सम्मान, धन और सुख प्राप्त करता है। "विद्याविहीनः पशुः" - विद्या के बिना मनुष्य पशु समान है। अतः सभी को विद्या प्राप्त करनी चाहिए।

---

## Important श्लोक
\`\`\`
विद्या ददाति विनयं विनयाद् याति पात्रताम्।
पात्रत्वाद् धनमाप्नोति धनाद् धर्मं ततः सुखम्॥
\`\`\`

**Exam Tip:** निबंध = 4-5 अंक। श्लोक डालो तो bonus marks!`
        }
      ]
    },
    {
      id: 'sanskrit-ch9',
      name: 'अपठित अवबोधनम् (Unseen Passage)',
      description: 'अपठित गद्यांश, comprehension, प्रश्नोत्तर - 4 marks',
      flashcards: [
        // Flashcards sf241-sf270 (30 flashcards)
        { id: 'sf241', front: 'अपठित गद्यांश क्या होता है?', back: '**अपठित गद्यांश:**\n\n- ऐसा गद्य (Prose) जो पाठ्यक्रम में न हो\n- Unseen Passage\n- पहली बार पढ़ रहे हों\n\n**परीक्षा में:**\n- 4 marks का section\n- गद्यांश + 4-5 प्रश्न\n- पढ़कर उत्तर लिखो' },
        { id: 'sf242', front: 'अपठित गद्यांश कैसे हल करें?', back: '**Strategy:**\n\n1. **पहले पूरा पढ़ो** (2 बार)\n2. **प्रश्न समझो** - क्या पूछा है\n3. **गद्यांश में खोजो** - उत्तर का स्थान\n4. **संस्कृत में लिखो** - पूर्ण वाक्य\n5. **जांचो** - व्याकरण सही हो\n\n⏱️ Time: 8-10 minutes' },
        { id: 'sf243', front: '"कः/का/किम्" प्रश्न का उत्तर कैसे दें?', back: '**कः/का/किम् = Who/What**\n\n**प्रश्न:** रामः कः अस्ति?\n**उत्तर:** रामः राजा अस्ति।\n\n**Tip:**\n- कः (पुल्लिंग) → he/who (male)\n- का (स्त्रीलिंग) → she/who (female)\n- किम् (नपुंसक) → what (thing)' },
        { id: 'sf244', front: '"कुत्र" प्रश्न का उत्तर कैसे दें?', back: '**कुत्र = Where**\n\n**प्रश्न:** बालकः कुत्र गच्छति?\n**उत्तर:** बालकः विद्यालयं गच्छति।\n\n**Answer Pattern:**\n- स्थान बताओ\n- सप्तमी विभक्ति या द्वितीया' },
        { id: 'sf245', front: '"कदा" प्रश्न का उत्तर कैसे दें?', back: '**कदा = When**\n\n**प्रश्न:** सूर्यः कदा उदयति?\n**उत्तर:** सूर्यः प्रातःकाले उदयति।\n\n**समय शब्द:**\n- प्रातः (Morning)\n- सायं (Evening)\n- रात्रौ (Night)\n- मध्याह्ने (Noon)' },
        { id: 'sf246', front: '"कथम्" प्रश्न का उत्तर कैसे दें?', back: '**कथम् = How**\n\n**प्रश्न:** सः कथम् गच्छति?\n**उत्तर:** सः पादाभ्यां गच्छति।\n\n**उत्तर में:**\n- तृतीया विभक्ति (by/with)\n- क्रिया विशेषण' },
        { id: 'sf247', front: '"किमर्थम्" प्रश्न का उत्तर कैसे दें?', back: '**किमर्थम् = Why**\n\n**प्रश्न:** बालकः किमर्थम् पठति?\n**उत्तर:** बालकः विद्या-प्राप्त्यर्थम् पठति।\n\n**Answer Pattern:**\n- कारण/उद्देश्य बताओ\n- "___अर्थम्" या "यतः..." प्रयोग करो' },
        { id: 'sf248', front: '"कति" प्रश्न का उत्तर कैसे दें?', back: '**कति = How many**\n\n**प्रश्न:** वृक्षे कति फलानि सन्ति?\n**उत्तर:** वृक्षे दश फलानि सन्ति।\n\n**संख्या शब्द:**\n- एकम्, द्वे, त्रीणि, चत्वारि...\n- दश, विंशति, शतम्' },
        { id: 'sf249', front: 'अपठित में शीर्षक कैसे लिखें?', back: '**शीर्षक (Title) लेखन:**\n\n1. गद्यांश का मुख्य विषय\n2. 2-3 शब्द में\n3. आकर्षक हो\n\n**उदाहरण:**\n- वृक्षस्य महत्त्वम्\n- विद्यायाः लाभः\n- परोपकारः\n- स्वच्छता' },
        { id: 'sf250', front: '"रेखांकित पद का अर्थ" कैसे दें?', back: '**रेखांकित पद = Underlined word**\n\n**प्रश्न:** "जलम्" इति पदस्य अर्थः कः?\n**उत्तर:** जलम् = पानी/वारि/नीरम्\n\n**Tip:**\n- पर्यायवाची दो\n- या हिंदी अर्थ लिखो\n- एक शब्द में उत्तर' },
        { id: 'sf251', front: 'अपठित में "पूर्ण वाक्य" कैसे लिखें?', back: '**पूर्ण वाक्य संरचना:**\n\nकर्ता + कर्म + क्रिया\n\n**उदाहरण:**\n❌ "गच्छति" (अधूरा)\n✅ "बालकः विद्यालयं गच्छति।" (पूर्ण)\n\n**Must have:**\n- Subject (कर्ता)\n- Verb (क्रिया)\n- Full stop (।)' },
        { id: 'sf252', front: '"विशेषण" प्रश्न का उत्तर कैसे दें?', back: '**विशेषण = Adjective**\n\n**प्रश्न:** "सुन्दरः वृक्षः" इत्यत्र विशेषणम् किम्?\n**उत्तर:** सुन्दरः\n\n**पहचान:**\n- संज्ञा की विशेषता बताए\n- लिंग-वचन-विभक्ति same\n- सुन्दर, महान्, लघु, दीर्घ...' },
        { id: 'sf253', front: '"विशेष्य" प्रश्न का उत्तर कैसे दें?', back: '**विशेष्य = Noun being described**\n\n**प्रश्न:** "सुन्दरः वृक्षः" इत्यत्र विशेष्यम् किम्?\n**उत्तर:** वृक्षः\n\n**Rule:**\n- जिसकी विशेषता बताई जाए = विशेष्य\n- जो विशेषता बताए = विशेषण' },
        { id: 'sf254', front: '"अव्यय" की पहचान कैसे करें?', back: '**अव्यय = Indeclinable**\n\n- कभी नहीं बदलता\n- विभक्ति नहीं लगती\n\n**उदाहरण:**\n- अपि (भी), च (और)\n- यदा (जब), तदा (तब)\n- यत्र (जहाँ), तत्र (वहाँ)\n- अत्र (यहाँ), सर्वत्र (सब जगह)' },
        { id: 'sf255', front: '"क्रियापद" की पहचान?', back: '**क्रियापद = Verb**\n\n**पहचान:**\n- काम/Action बताए\n- ति/न्ति/सि/मि ending\n\n**उदाहरण:**\n- गच्छति (goes)\n- पठति (reads)\n- खादन्ति (eat-plural)\n- लिखामि (I write)' },
        { id: 'sf256', front: '"कर्तृपद" की पहचान?', back: '**कर्तृपद = Subject**\n\n**प्रश्न:** "रामः पुस्तकं पठति" - कर्तृपदं किम्?\n**उत्तर:** रामः\n\n**पहचान:**\n- प्रथमा विभक्ति\n- क्रिया का करने वाला\n- "कः करोति?" का उत्तर' },
        { id: 'sf257', front: '"कर्मपद" की पहचान?', back: '**कर्मपद = Object**\n\n**प्रश्न:** "रामः पुस्तकं पठति" - कर्मपदं किम्?\n**उत्तर:** पुस्तकम्\n\n**पहचान:**\n- द्वितीया विभक्ति\n- क्रिया का असर जिस पर\n- "किं करोति?" का उत्तर' },
        { id: 'sf258', front: 'अपठित में "सत्य/असत्य" प्रश्न?', back: '**सत्यम्/असत्यम् (True/False):**\n\n**प्रश्न:** वृक्षाः ऑक्सीजनं ददति - सत्यम् वा असत्यम्?\n**उत्तर:** सत्यम्\n\n**Tip:**\n- गद्यांश से मिलाओ\n- Exactly same = सत्यम्\n- Different = असत्यम्' },
        { id: 'sf259', front: '"एकवचन/बहुवचन" कैसे करें?', back: '**वचन परिवर्तन:**\n\n| एकवचन | बहुवचन |\n|--------|---------|\n| बालकः | बालकाः |\n| फलम् | फलानि |\n| नदी | नद्यः |\n| पठति | पठन्ति |' },
        { id: 'sf260', front: 'अपठित में "प्रश्न निर्माण" कैसे करें?', back: '**प्रश्न बनाओ:**\n\n**वाक्य:** रामः विद्यालयं गच्छति।\n\n**प्रश्न:**\n1. कः विद्यालयं गच्छति?\n2. रामः कुत्र गच्छति?\n3. रामः किं करोति?\n\n**Formula:** उत्तर हटाओ, प्रश्नवाचक डालो' },
        { id: 'sf261', front: '"विलोम" प्रश्न का उत्तर?', back: '**विलोम = Antonym**\n\n| शब्द | विलोम |\n|------|--------|\n| सुखम् | दुःखम् |\n| दिवा | रात्रौ |\n| आगच्छति | गच्छति |\n| सत्यम् | असत्यम् |\n| उत्तरम् | दक्षिणम् |' },
        { id: 'sf262', front: '"पर्यायवाची" प्रश्न का उत्तर?', back: '**पर्याय = Synonym**\n\n| शब्द | पर्याय |\n|------|--------|\n| जलम् | वारि, नीरम्, पानीयम् |\n| पृथ्वी | धरा, भूमि, वसुंधरा |\n| सूर्यः | रविः, भास्करः, दिनकरः |\n| वृक्षः | तरुः, द्रुमः, पादपः |' },
        { id: 'sf263', front: '"संधि विच्छेद" प्रश्न?', back: '**संधि विच्छेद करो:**\n\n| संधि | विच्छेद |\n|------|---------|\n| विद्यालयः | विद्या + आलयः |\n| महोत्सवः | महा + उत्सवः |\n| नरेन्द्रः | नर + इन्द्रः |\n\n**Tip:** स्वर संधि सबसे common' },
        { id: 'sf264', front: 'अपठित में "सारांश" कैसे लिखें?', back: '**सारांश (Summary):**\n\n1. मुख्य बिंदु पकड़ो\n2. 2-3 वाक्य में लिखो\n3. अपनी भाषा में नहीं, गद्यांश से\n\n**Format:**\n"अस्मिन् गद्यांशे ___ विषये वर्णितम्। ___ इति मुख्यः विषयः।"' },
        { id: 'sf265', front: '"उचित पद चुनो" प्रश्न कैसे हल करें?', back: '**Fill in the blanks:**\n\n**प्रश्न:** बालकः विद्यालयं ___ (गच्छति/गच्छन्ति)\n**उत्तर:** गच्छति\n\n**Rule:**\n- कर्ता-क्रिया agreement\n- एकवचन कर्ता = एकवचन क्रिया\n- लिंग मिलाओ' },
        { id: 'sf266', front: '"लिंग परिवर्तन" कैसे करें?', back: '**लिंग बदलो:**\n\n| पुल्लिंग | स्त्रीलिंग |\n|----------|-----------|\n| बालकः | बालिका |\n| छात्रः | छात्रा |\n| शिक्षकः | शिक्षिका |\n| नृपः | राज्ञी |\n| देवः | देवी |' },
        { id: 'sf267', front: '"काल परिवर्तन" प्रश्न?', back: '**Tense Change:**\n\n| वर्तमान | भूत | भविष्यत् |\n|---------|------|----------|\n| पठति | अपठत् | पठिष्यति |\n| गच्छति | अगच्छत् | गमिष्यति |\n| खादति | अखादत् | खादिष्यति |\n\n**भूत:** अ + धातु + त्\n**भविष्यत्:** धातु + ष्यति' },
        { id: 'sf268', front: 'अपठित के common topics क्या हैं?', back: '**Common Topics:**\n\n1. 🌳 पर्यावरण/वृक्ष\n2. 📚 विद्या/शिक्षा\n3. 🧹 स्वच्छता\n4. 🇮🇳 राष्ट्रभक्ति\n5. 🐄 पशु-पक्षी\n6. 🎉 त्योहार\n7. 👨‍👩‍👧 परिवार\n8. 🏫 विद्यालय\n\n**Tip:** शब्दावली याद करो!' },
        { id: 'sf269', front: '"युग्म पद" प्रश्न का उत्तर?', back: '**युग्म = Word Pairs**\n\nगद्यांश से जोड़ी बनाओ:\n\n| युग्म शब्द |\n|------------|\n| माता-पिता |\n| राजा-रानी |\n| गुरु-शिष्य |\n| आकाश-पाताल |\n| सुख-दुःख |' },
        { id: 'sf270', front: 'अपठित में Time Management?', back: '**समय प्रबंधन:**\n\n⏱️ **Total: 8-10 minutes**\n\n- पढ़ना: 2-3 min (2 बार)\n- प्रश्न समझना: 1 min\n- उत्तर खोजना: 3-4 min\n- लिखना: 2-3 min\n\n**Tip:** पहले आसान प्रश्न करो!' }
      ],
      mcqs: [
        // MCQs sm241-sm270 (30 MCQs)
        { id: 'sm241', question: '"कुत्र" का अर्थ क्या है?', options: ['कब', 'कहाँ', 'क्यों', 'कैसे'], answer: 'कहाँ' },
        { id: 'sm242', question: '"कदा" प्रश्न का उत्तर में क्या आएगा?', options: ['स्थान', 'समय', 'कारण', 'व्यक्ति'], answer: 'समय' },
        { id: 'sm243', question: '"किमर्थम्" का अर्थ है?', options: ['कैसे', 'क्यों', 'कितने', 'कौन'], answer: 'क्यों' },
        { id: 'sm244', question: '"कथम्" प्रश्न में उत्तर किस विभक्ति में होगा?', options: ['प्रथमा', 'द्वितीया', 'तृतीया', 'सप्तमी'], answer: 'तृतीया' },
        { id: 'sm245', question: 'कर्तृपद किस विभक्ति में होता है?', options: ['प्रथमा', 'द्वितीया', 'तृतीया', 'षष्ठी'], answer: 'प्रथमा' },
        { id: 'sm246', question: 'कर्मपद किस विभक्ति में होता है?', options: ['प्रथमा', 'द्वितीया', 'चतुर्थी', 'पंचमी'], answer: 'द्वितीया' },
        { id: 'sm247', question: '"अत्र" अव्यय का अर्थ है?', options: ['वहाँ', 'यहाँ', 'कहाँ', 'जहाँ'], answer: 'यहाँ' },
        { id: 'sm248', question: '"तत्र" का अर्थ क्या है?', options: ['यहाँ', 'वहाँ', 'कहाँ', 'सब जगह'], answer: 'वहाँ' },
        { id: 'sm249', question: '"सर्वत्र" का अर्थ है?', options: ['कहीं नहीं', 'कहीं', 'सब जगह', 'यहाँ'], answer: 'सब जगह' },
        { id: 'sm250', question: '"यदा-तदा" में संबंध है?', options: ['जब-तब', 'जहाँ-वहाँ', 'जैसा-वैसा', 'जो-सो'], answer: 'जब-तब' },
        { id: 'sm251', question: '"यत्र-तत्र" का अर्थ?', options: ['जब-तब', 'जहाँ-वहाँ', 'क्यों-इसलिए', 'कैसे-वैसे'], answer: 'जहाँ-वहाँ' },
        { id: 'sm252', question: '"पठति" क्रिया का कर्ता कौन सा वचन है?', options: ['एकवचन', 'द्विवचन', 'बहुवचन', 'कोई भी'], answer: 'एकवचन' },
        { id: 'sm253', question: '"पठन्ति" किस वचन की क्रिया है?', options: ['एकवचन', 'द्विवचन', 'बहुवचन', 'कोई नहीं'], answer: 'बहुवचन' },
        { id: 'sm254', question: '"जलम्" का पर्यायवाची क्या है?', options: ['अग्निः', 'वारि', 'वायुः', 'पृथ्वी'], answer: 'वारि' },
        { id: 'sm255', question: '"सुखम्" का विलोम क्या है?', options: ['आनन्दः', 'प्रसन्नता', 'दुःखम्', 'हर्षः'], answer: 'दुःखम्' },
        { id: 'sm256', question: '"दिवा" का विलोम?', options: ['प्रातः', 'सायम्', 'रात्रौ', 'मध्याह्ने'], answer: 'रात्रौ' },
        { id: 'sm257', question: '"विद्यालयः" का संधि विच्छेद?', options: ['विद्या + लयः', 'विद्या + आलयः', 'विद्य + आलयः', 'विद्या + अलयः'], answer: 'विद्या + आलयः' },
        { id: 'sm258', question: '"सुन्दरः बालकः" में विशेषण कौन?', options: ['सुन्दरः', 'बालकः', 'दोनों', 'कोई नहीं'], answer: 'सुन्दरः' },
        { id: 'sm259', question: '"सुन्दरः बालकः" में विशेष्य कौन?', options: ['सुन्दरः', 'बालकः', 'दोनों', 'कोई नहीं'], answer: 'बालकः' },
        { id: 'sm260', question: '"बालकः" का स्त्रीलिंग?', options: ['बालका', 'बालिका', 'बाला', 'बालकी'], answer: 'बालिका' },
        { id: 'sm261', question: '"पठति" का भूतकाल रूप?', options: ['पठिष्यति', 'अपठत्', 'पठतु', 'पठेत्'], answer: 'अपठत्' },
        { id: 'sm262', question: '"गच्छति" का भविष्यत् रूप?', options: ['अगच्छत्', 'गमिष्यति', 'गच्छतु', 'गच्छेत्'], answer: 'गमिष्यति' },
        { id: 'sm263', question: '"च" अव्यय का अर्थ?', options: ['या', 'और', 'लेकिन', 'इसलिए'], answer: 'और' },
        { id: 'sm264', question: '"अपि" अव्यय का अर्थ?', options: ['और', 'भी', 'या', 'लेकिन'], answer: 'भी' },
        { id: 'sm265', question: '"वृक्षः" का पर्यायवाची?', options: ['नदी', 'पर्वतः', 'तरुः', 'सागरः'], answer: 'तरुः' },
        { id: 'sm266', question: '"सूर्यः" का पर्यायवाची?', options: ['चन्द्रः', 'रविः', 'नक्षत्रम्', 'ग्रहः'], answer: 'रविः' },
        { id: 'sm267', question: '"कति" प्रश्न में उत्तर में क्या आएगा?', options: ['स्थान', 'समय', 'संख्या', 'कारण'], answer: 'संख्या' },
        { id: 'sm268', question: 'अपठित गद्यांश में कितने अंक होते हैं?', options: ['2', '3', '4', '5'], answer: '4' },
        { id: 'sm269', question: '"प्रातः" का विलोम?', options: ['दिवा', 'सायम्', 'रात्रौ', 'मध्याह्ने'], answer: 'सायम्' },
        { id: 'sm270', question: '"आगच्छति" का विलोम क्रिया?', options: ['गच्छति', 'पठति', 'लिखति', 'खादति'], answer: 'गच्छति' }
      ],
      reels: [
        // Reels sr241-sr270 (30 reels)
        { id: 'sr241', title: 'अपठित = 4 Easy Marks!', content: '**अपठित गद्यांश:**\n\n📖 Unseen Passage\n📝 4 marks (usually 4 questions)\n⏱️ 8-10 minutes\n\n**Strategy:**\n1. पढ़ो 2 बार\n2. प्रश्न समझो\n3. खोजो उत्तर\n4. पूर्ण वाक्य लिखो\n\n🎯 Easiest marks in Sanskrit!' },
        { id: 'sr242', title: 'प्रश्नवाचक शब्द याद करो!', content: '**Question Words:**\n\n| शब्द | अर्थ |\n|------|------|\n| कः/का | कौन |\n| किम् | क्या |\n| कुत्र | कहाँ |\n| कदा | कब |\n| कथम् | कैसे |\n| किमर्थम् | क्यों |\n| कति | कितने |' },
        { id: 'sr243', title: 'कः/का/किम् Easy Rule!', content: '**कः/का/किम् Usage:**\n\n👦 **कः** = Who (Male)\n   रामः कः? = राजा\n\n👩 **का** = Who (Female)\n   सीता का? = राज्ञी\n\n📦 **किम्** = What (Thing)\n   एतत् किम्? = फलम्' },
        { id: 'sr244', title: 'कुत्र = Where!', content: '**"कुत्र" प्रश्न:**\n\n❓ बालकः कुत्र गच्छति?\n✅ बालकः **विद्यालयं** गच्छति।\n\n📍 Answer में स्थान आएगा:\n- गृहम् (घर)\n- विद्यालयम् (school)\n- उद्यानम् (park)\n- नगरम् (city)' },
        { id: 'sr245', title: 'कदा = When!', content: '**"कदा" प्रश्न:**\n\n❓ सः कदा आगच्छति?\n✅ सः **प्रातःकाले** आगच्छति।\n\n⏰ Time Words:\n- प्रातः (morning)\n- मध्याह्ने (noon)\n- सायम् (evening)\n- रात्रौ (night)' },
        { id: 'sr246', title: 'किमर्थम् = Why!', content: '**"किमर्थम्" प्रश्न:**\n\n❓ सः किमर्थम् पठति?\n✅ सः **विद्या-प्राप्त्यर्थम्** पठति।\n\n🎯 Reason/Purpose बताओ!\n\n**Pattern:** ___अर्थम्\n- धनार्थम् (धन के लिए)\n- सुखार्थम् (सुख के लिए)' },
        { id: 'sr247', title: 'कथम् = How!', content: '**"कथम्" प्रश्न:**\n\n❓ सः कथम् गच्छति?\n✅ सः **पादाभ्यां** गच्छति।\n\n🚶 Manner/Method बताओ!\n\n**तृतीया विभक्ति:**\n- वाहनेन (by vehicle)\n- बसयानेन (by bus)\n- पादाभ्याम् (by foot)' },
        { id: 'sr248', title: 'कति = How Many!', content: '**"कति" प्रश्न:**\n\n❓ अत्र कति छात्राः सन्ति?\n✅ अत्र **विंशतिः** छात्राः सन्ति।\n\n🔢 Numbers:\n- पञ्च (5), दश (10)\n- विंशतिः (20)\n- शतम् (100)' },
        { id: 'sr249', title: 'विशेषण-विशेष्य पहचानो!', content: '**विशेषण vs विशेष्य:**\n\n"**सुन्दरः** बालकः"\n\n📝 विशेषण = सुन्दरः (adjective)\n📝 विशेष्य = बालकः (noun)\n\n**Rule:**\nजो describe करे = विशेषण\nजिसे describe करें = विशेष्य' },
        { id: 'sr250', title: 'कर्ता-कर्म पहचानो!', content: '**"रामः फलं खादति"**\n\n👤 कर्ता = रामः (Who does?)\n   - प्रथमा विभक्ति\n\n🎯 कर्म = फलम् (What is done?)\n   - द्वितीया विभक्ति\n\n🏃 क्रिया = खादति (Action)' },
        { id: 'sr251', title: 'अव्यय = Never Change!', content: '**अव्यय पहचानो:**\n\n📌 अव्यय = Indeclinable\n📌 विभक्ति नहीं लगती\n📌 सदा same रहता है\n\n**Common अव्यय:**\nच, अपि, यदा, तदा, यत्र, तत्र, अत्र, सर्वत्र, कुत्र, कदा' },
        { id: 'sr252', title: 'यदा-तदा, यत्र-तत्र!', content: '**Correlatives:**\n\n⏰ **यदा...तदा** = When...Then\n   यदा सः आगच्छति तदा अहं गच्छामि।\n\n📍 **यत्र...तत्र** = Where...There\n   यत्र धूमः तत्र अग्निः।' },
        { id: 'sr253', title: 'वचन परिवर्तन Quick!', content: '**एकवचन → बहुवचन:**\n\n| एक | बहु |\n|----|-----|\n| बालकः | बालकाः |\n| फलम् | फलानि |\n| नदी | नद्यः |\n| पठति | पठन्ति |\n\n📌 क्रिया भी बदलो!' },
        { id: 'sr254', title: 'लिंग परिवर्तन Quick!', content: '**पुल्लिंग → स्त्रीलिंग:**\n\n| पुं | स्त्री |\n|-----|-------|\n| बालकः | बालिका |\n| छात्रः | छात्रा |\n| शिक्षकः | शिक्षिका |\n| देवः | देवी |' },
        { id: 'sr255', title: 'काल परिवर्तन Formula!', content: '**Tense Change:**\n\n⏰ **वर्तमान:** पठति\n⏪ **भूत:** अ + पठ + त् = अपठत्\n⏩ **भविष्यत्:** पठ + इष्यति = पठिष्यति\n\n**Formula:**\nभूत = अ + धातु + त्\nभविष्यत् = धातु + ष्यति' },
        { id: 'sr256', title: 'पर्यायवाची याद करो!', content: '**Common Synonyms:**\n\n💧 जलम् = वारि, नीरम्, पानीयम्\n🌳 वृक्षः = तरुः, द्रुमः, पादपः\n☀️ सूर्यः = रविः, भास्करः, दिनकरः\n🌍 पृथ्वी = धरा, भूमि, वसुंधरा' },
        { id: 'sr257', title: 'विलोम याद करो!', content: '**Common Antonyms:**\n\n| शब्द | विलोम |\n|------|--------|\n| सुखम् | दुःखम् |\n| सत्यम् | असत्यम् |\n| दिवा | रात्रौ |\n| आगमनम् | गमनम् |\n| उत्तरम् | दक्षिणम् |' },
        { id: 'sr258', title: 'शीर्षक कैसे दो?', content: '**Title देना:**\n\n1. मुख्य विषय पकड़ो\n2. 2-3 शब्द में\n3. संस्कृत में लिखो\n\n**Examples:**\n- वृक्षाणां महत्त्वम्\n- विद्यायाः लाभः\n- स्वच्छतायाः आवश्यकता\n- परोपकारस्य महिमा' },
        { id: 'sr259', title: 'पूर्ण वाक्य Rule!', content: '**Complete Sentence:**\n\n❌ Wrong: "गच्छति"\n✅ Right: "बालकः विद्यालयं गच्छति।"\n\n**Must Have:**\n1. कर्ता (Subject)\n2. क्रिया (Verb)\n3. पूर्ण विराम (।)\n\n📝 Always full sentence!' },
        { id: 'sr260', title: 'रेखांकित पद = Underlined!', content: '**रेखांकित पद का अर्थ:**\n\n❓ "**जलम्**" पदस्य अर्थः?\n✅ जलम् = पानी / वारि / नीरम्\n\n**Options:**\n1. पर्यायवाची दो\n2. हिंदी अर्थ दो\n3. एक शब्द में उत्तर' },
        { id: 'sr261', title: 'सत्य/असत्य Trick!', content: '**True/False Questions:**\n\n📖 गद्यांश से exactly match करो\n\n✅ **सत्यम्** = Statement matches passage\n❌ **असत्यम्** = Statement differs\n\n⚠️ एक शब्द भी अलग = असत्यम्!' },
        { id: 'sr262', title: 'प्रश्न निर्माण Easy!', content: '**प्रश्न बनाओ:**\n\n**वाक्य:** रामः विद्यालयं गच्छति।\n\n**प्रश्न:**\n1. **कः** विद्यालयं गच्छति?\n2. रामः **कुत्र** गच्छति?\n3. रामः **किं** करोति?\n\n🔄 उत्तर हटाओ → प्रश्नवाचक डालो' },
        { id: 'sr263', title: 'संधि विच्छेद Quick!', content: '**Common संधि:**\n\n| संधि | विच्छेद |\n|------|---------|\n| विद्यालयः | विद्या+आलयः |\n| महोत्सवः | महा+उत्सवः |\n| नरेन्द्रः | नर+इन्द्रः |\n| देवालयः | देव+आलयः |' },
        { id: 'sr264', title: 'अपठित Topics!', content: '**Common विषय:**\n\n📚 विद्या/शिक्षा\n🌳 पर्यावरण/वृक्ष\n🧹 स्वच्छता\n🇮🇳 देशभक्ति\n🐄 पशु-पक्षी\n👨‍👩‍👧 परिवार/गुरु\n🎉 त्योहार\n💧 जल संरक्षण\n\n📝 इन पर शब्दावली याद करो!' },
        { id: 'sr265', title: 'क्रियापद पहचानो!', content: '**Verb Identification:**\n\n**Endings:**\n- ति = He/She/It (एकवचन)\n- न्ति = They (बहुवचन)\n- सि = You (तुम)\n- मि = I (मैं)\n\n**Examples:**\nपठति, गच्छन्ति, करोषि, लिखामि' },
        { id: 'sr266', title: 'Time Words संस्कृत में!', content: '**समय शब्द:**\n\n🌅 प्रातः = Morning\n☀️ मध्याह्ने = Noon\n🌆 सायम् = Evening\n🌙 रात्रौ = Night\n📅 अद्य = Today\n📅 श्वः = Tomorrow\n📅 ह्यः = Yesterday' },
        { id: 'sr267', title: 'Place Words संस्कृत में!', content: '**स्थान शब्द:**\n\n🏠 गृहम् = Home\n🏫 विद्यालयः = School\n🏛️ मन्दिरम् = Temple\n🌳 उद्यानम् = Garden\n🛒 आपणः = Market\n🏙️ नगरम् = City\n🌲 वनम् = Forest' },
        { id: 'sr268', title: 'Fill in Blanks Trick!', content: '**उचित पद चुनो:**\n\n**Rule 1:** कर्ता-क्रिया match\nबालकः ___ (गच्छति/गच्छन्ति)\n✅ गच्छति (एकवचन-एकवचन)\n\n**Rule 2:** लिंग match\nसुन्दरा ___ (बालकः/बालिका)\n✅ बालिका (स्त्रीलिंग-स्त्रीलिंग)' },
        { id: 'sr269', title: 'अपठित Attempt Order!', content: '**Smart Strategy:**\n\n1️⃣ आसान प्रश्न पहले\n2️⃣ शब्दार्थ/विलोम\n3️⃣ कर्ता/कर्म/क्रिया\n4️⃣ कठिन प्रश्न बाद में\n\n⚠️ कोई प्रश्न न छोड़ो!\n⏱️ Time = 8-10 min max' },
        { id: 'sr270', title: 'अपठित = 4 Sure Marks!', content: '**Final Tips:**\n\n✅ 2 बार पढ़ो\n✅ पूर्ण वाक्य में उत्तर\n✅ व्याकरण सही करो\n✅ लिंग-वचन match करो\n✅ साफ लिखो\n\n🎯 Practice से Perfect!\n💯 4/4 marks possible!' }
      ],
      longAnswers: [
        {
          id: 'sl17',
          question: 'अपठित गद्यांश हल करने की विधि और उदाहरण',
          answer: `# अपठित गद्यांश हल करने की विधि

## अपठित गद्यांश क्या है?
- ऐसा गद्य जो पाठ्यक्रम में नहीं है
- Unseen Passage
- परीक्षा में पहली बार पढ़ रहे हैं

## अंक विभाजन
- **कुल अंक:** 4 marks
- **प्रश्न संख्या:** 4-5 प्रश्न
- **समय:** 8-10 minutes

---

## हल करने की विधि

### Step 1: पढ़ो (2 बार)
- पहली बार: समग्र अर्थ समझो
- दूसरी बार: विस्तार से पढ़ो

### Step 2: प्रश्न समझो
- क्या पूछा गया है
- प्रश्नवाचक शब्द पहचानो

### Step 3: उत्तर खोजो
- गद्यांश में उत्तर का स्थान खोजो
- रेखांकित करो

### Step 4: पूर्ण वाक्य में लिखो
- कर्ता + कर्म + क्रिया
- पूर्ण विराम (।) अवश्य लगाओ

---

## प्रश्नवाचक शब्द

| शब्द | अर्थ | उत्तर में |
|------|------|----------|
| कः/का | कौन | व्यक्ति/नाम |
| किम् | क्या | वस्तु |
| कुत्र | कहाँ | स्थान |
| कदा | कब | समय |
| कथम् | कैसे | विधि |
| किमर्थम् | क्यों | कारण |
| कति | कितने | संख्या |

---

## उदाहरण

### गद्यांश:
> अस्माकं देशस्य नाम भारतम् अस्ति। अत्र बहवः नद्यः प्रवहन्ति। गङ्गा यमुना च प्रसिद्धे नद्यौ स्तः। भारतं कृषिप्रधानं राष्ट्रम् अस्ति।

### प्रश्न और उत्तर:

**प्र.1** अस्माकं देशस्य नाम किम्?
**उ.** अस्माकं देशस्य नाम भारतम् अस्ति।

**प्र.2** भारते के नद्यौ प्रसिद्धे स्तः?
**उ.** भारते गङ्गा यमुना च प्रसिद्धे नद्यौ स्तः।

**प्र.3** भारतं कीदृशं राष्ट्रम् अस्ति?
**उ.** भारतं कृषिप्रधानं राष्ट्रम् अस्ति।

---

## महत्वपूर्ण टिप्स

1. ✅ पूर्ण वाक्य में उत्तर दो
2. ✅ व्याकरण सही हो
3. ✅ लिंग-वचन मिलाओ
4. ✅ कोई प्रश्न न छोड़ो
5. ✅ साफ-सुथरा लिखो

**Exam Tip:** अपठित = 4 सबसे आसान अंक! Practice करो!`
        },
        {
          id: 'sl18',
          question: 'अपठित गद्यांश के विभिन्न प्रश्न प्रकार',
          answer: `# अपठित गद्यांश - प्रश्न प्रकार

## 1. एक शब्द में उत्तर

**प्रश्न:** गद्यांशस्य उचितं शीर्षकं लिखत।
**उत्तर:** विद्यायाः महत्त्वम्

**प्रश्न:** "जलम्" इति पदस्य पर्यायवाची लिखत।
**उत्तर:** वारि / नीरम्

---

## 2. पूर्ण वाक्य में उत्तर

**प्रश्न:** बालकः कुत्र गच्छति?
**उत्तर:** बालकः विद्यालयं गच्छति।

---

## 3. व्याकरण आधारित

### कर्ता-कर्म-क्रिया
**वाक्य:** रामः पुस्तकं पठति।
- कर्तृपदम् = रामः
- कर्मपदम् = पुस्तकम्
- क्रियापदम् = पठति

### विशेषण-विशेष्य
**वाक्य:** सुन्दरः बालकः
- विशेषणम् = सुन्दरः
- विशेष्यम् = बालकः

---

## 4. परिवर्तन प्रश्न

### वचन परिवर्तन
| एकवचन | बहुवचन |
|--------|---------|
| बालकः | बालकाः |
| पठति | पठन्ति |

### लिंग परिवर्तन
| पुल्लिंग | स्त्रीलिंग |
|----------|-----------|
| छात्रः | छात्रा |
| शिक्षकः | शिक्षिका |

### काल परिवर्तन
| वर्तमान | भूत | भविष्यत् |
|---------|------|----------|
| पठति | अपठत् | पठिष्यति |

---

## 5. सत्य/असत्य

**कथन:** वृक्षाः ऑक्सीजनं ददति।
**उत्तर:** सत्यम् ✓

---

## 6. प्रश्न निर्माण

**वाक्य:** रामः विद्यालयं गच्छति।

**प्रश्न:**
1. कः विद्यालयं गच्छति?
2. रामः कुत्र गच्छति?
3. रामः किं करोति?

---

## 7. विलोम/पर्याय

| शब्द | विलोम |
|------|--------|
| सुखम् | दुःखम् |
| सत्यम् | असत्यम् |

| शब्द | पर्याय |
|------|--------|
| जलम् | वारि |
| सूर्यः | रविः |

**Exam Tip:** सभी प्रकार के प्रश्न आ सकते हैं। सबका अभ्यास करो!`
        }
      ]
    },
    {
      id: 'sanskrit-ch10',
      name: 'सुभाषित एवं श्लोक (Subhashit & Shlokas)',
      description: 'नीति श्लोक, सुभाषित, काव्य सौंदर्य - Important for all sections',
      flashcards: [
        // Flashcards sf271-sf300 (30 flashcards)
        { id: 'sf271', front: '"विद्या ददाति विनयम्" श्लोक पूर्ण करें', back: '**पूर्ण श्लोक:**\n\nविद्या ददाति विनयं विनयाद् याति पात्रताम्।\nपात्रत्वाद् धनमाप्नोति धनाद् धर्मं ततः सुखम्॥\n\n**अर्थ:**\nविद्या → विनय → योग्यता → धन → धर्म → सुख\n\n**Chain of Success!**' },
        { id: 'sf272', front: '"सत्यं वद, धर्मं चर" का अर्थ?', back: '**सत्यं वद धर्मं चर:**\n\n- सत्यं वद = सत्य बोलो\n- धर्मं चर = धर्म का आचरण करो\n\n**स्रोत:** तैत्तिरीय उपनिषद्\n\n**शिक्षा:** सत्य और धर्म जीवन के मूल आधार हैं।' },
        { id: 'sf273', front: '"अहिंसा परमो धर्मः" का पूर्ण श्लोक?', back: '**पूर्ण श्लोक:**\n\nअहिंसा परमो धर्मः धर्म हिंसा तथैव च।\n\n**अर्थ:**\n- अहिंसा सबसे बड़ा धर्म है\n- धर्म की रक्षा हेतु हिंसा भी धर्म है\n\n**स्रोत:** महाभारत' },
        { id: 'sf274', front: '"गुरुर्ब्रह्मा गुरुर्विष्णुः" श्लोक का अर्थ?', back: '**पूर्ण श्लोक:**\n\nगुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।\nगुरुः साक्षात् परब्रह्म तस्मै श्री गुरवे नमः॥\n\n**अर्थ:**\nगुरु = ब्रह्मा (सृष्टि) + विष्णु (पालन) + शिव (संहार)\nगुरु ही परमब्रह्म हैं।' },
        { id: 'sf275', front: '"वसुधैव कुटुम्बकम्" का अर्थ?', back: '**वसुधैव कुटुम्बकम्:**\n\n- वसुधा = पृथ्वी\n- एव = ही\n- कुटुम्बकम् = परिवार\n\n**अर्थ:** पूरी पृथ्वी एक परिवार है।\n\n**स्रोत:** महोपनिषद्\n\n**भाव:** विश्व बंधुत्व, वैश्विक एकता' },
        { id: 'sf276', front: '"कर्मण्येवाधिकारस्ते" श्लोक समझाएं', back: '**पूर्ण श्लोक:**\n\nकर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥\n\n**अर्थ:**\n- कर्म करो, फल की चिंता मत करो\n- फल के लिए कर्म मत करो\n- अकर्मण्य भी मत बनो\n\n**स्रोत:** भगवद्गीता 2.47' },
        { id: 'sf277', front: '"जननी जन्मभूमिश्च" का पूर्ण श्लोक?', back: '**पूर्ण श्लोक:**\n\nजननी जन्मभूमिश्च स्वर्गादपि गरीयसी।\n\n**अर्थ:**\n- जननी (माता) और जन्मभूमि (मातृभूमि)\n- स्वर्ग से भी महान हैं\n\n**भाव:** देशभक्ति और मातृ-सम्मान' },
        { id: 'sf278', front: '"उद्यमेन हि सिध्यन्ति" श्लोक का अर्थ?', back: '**पूर्ण श्लोक:**\n\nउद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।\nन हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥\n\n**अर्थ:**\n- उद्यम (परिश्रम) से काम होते हैं, इच्छा से नहीं\n- सोए शेर के मुख में हिरण नहीं जाते\n\n**शिक्षा:** मेहनत करो!' },
        { id: 'sf279', front: '"विद्या धनं सर्वधनप्रधानम्" अर्थ?', back: '**विद्या धनं सर्वधनप्रधानम्:**\n\n- विद्या रूपी धन\n- सभी धनों में श्रेष्ठ है\n\n**कारण:**\n1. चोर नहीं चुरा सकता\n2. बांटने से बढ़ती है\n3. कभी समाप्त नहीं होती\n4. सम्मान दिलाती है' },
        { id: 'sf280', front: '"यत्र नार्यस्तु पूज्यन्ते" श्लोक?', back: '**पूर्ण श्लोक:**\n\nयत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः।\nयत्रैतास्तु न पूज्यन्ते सर्वास्तत्राफलाः क्रियाः॥\n\n**अर्थ:**\n- जहाँ नारियों का सम्मान, वहाँ देवता निवास\n- जहाँ सम्मान नहीं, सब कार्य निष्फल\n\n**स्रोत:** मनुस्मृति' },
        { id: 'sf281', front: '"परोपकाराय पुण्याय" श्लोक?', back: '**पूर्ण श्लोक:**\n\nपरोपकाराय फलन्ति वृक्षाः\nपरोपकाराय वहन्ति नद्यः।\nपरोपकाराय दुहन्ति गावः\nपरोपकारार्थमिदं शरीरम्॥\n\n**अर्थ:** वृक्ष, नदी, गाय - सब परोपकार के लिए\nहमारा शरीर भी परोपकार के लिए है।' },
        { id: 'sf282', front: '"सर्वे भवन्तु सुखिनः" श्लोक?', back: '**पूर्ण श्लोक:**\n\nसर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद् दुःखभाग्भवेत्॥\n\n**अर्थ:**\n- सब सुखी हों\n- सब निरोग हों\n- सब शुभ देखें\n- कोई दुःखी न हो' },
        { id: 'sf283', front: '"मातृदेवो भव" का संदर्भ?', back: '**तैत्तिरीय उपनिषद्:**\n\nमातृदेवो भव। पितृदेवो भव।\nआचार्यदेवो भव। अतिथिदेवो भव।\n\n**अर्थ:**\n- माता को देवता मानो\n- पिता को देवता मानो\n- आचार्य को देवता मानो\n- अतिथि को देवता मानो' },
        { id: 'sf284', front: '"न हि ज्ञानेन सदृशं" श्लोक?', back: '**पूर्ण श्लोक:**\n\nन हि ज्ञानेन सदृशं पवित्रमिह विद्यते।\n\n**अर्थ:**\nज्ञान के समान पवित्र इस संसार में कुछ भी नहीं है।\n\n**स्रोत:** भगवद्गीता 4.38\n\n**भाव:** ज्ञान सर्वोच्च पवित्रता है।' },
        { id: 'sf285', front: '"आलस्यं हि मनुष्याणाम्" श्लोक?', back: '**पूर्ण श्लोक:**\n\nआलस्यं हि मनुष्याणां शरीरस्थो महान् रिपुः।\nनास्त्युद्यमसमो बन्धुः कृत्वा यं नावसीदति॥\n\n**अर्थ:**\n- आलस्य शरीर में रहने वाला महान शत्रु\n- उद्यम (परिश्रम) जैसा कोई मित्र नहीं' },
        { id: 'sf286', front: '"स्वधर्मे निधनं श्रेयः" का अर्थ?', back: '**पूर्ण श्लोक:**\n\nश्रेयान् स्वधर्मो विगुणः परधर्मात् स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥\n\n**अर्थ:**\n- अपना धर्म (कर्तव्य) दोषपूर्ण भी श्रेष्ठ\n- पराया धर्म अच्छा करके भी भयावह\n\n**स्रोत:** गीता 3.35' },
        { id: 'sf287', front: '"सत्यमेव जयते" का स्रोत?', back: '**सत्यमेव जयते नानृतम्:**\n\n**स्रोत:** मुण्डक उपनिषद्\n\n**अर्थ:**\n- सत्य की ही विजय होती है\n- असत्य की नहीं\n\n**महत्व:**\n- भारत का राष्ट्रीय आदर्श वाक्य\n- राजचिह्न में अंकित' },
        { id: 'sf288', front: '"अतिथि देवो भव" का अर्थ?', back: '**अतिथि देवो भव:**\n\n- अतिथि = Guest (जिसकी तिथि निश्चित न हो)\n- देवः = देवता\n- भव = होना चाहिए\n\n**अर्थ:** अतिथि को देवता के समान मानो।\n\n**स्रोत:** तैत्तिरीय उपनिषद्' },
        { id: 'sf289', front: '"दुर्जनः सज्जनं द्वेष्टि" सुभाषित?', back: '**पूर्ण श्लोक:**\n\nदुर्जनः सज्जनं द्वेष्टि दुर्जनो दुर्जनं प्रियम्।\nदुर्जनः सज्जनं नेच्छन् सज्जनः सज्जनं प्रियम्॥\n\n**अर्थ:**\n- दुर्जन सज्जन से द्वेष करता है\n- सज्जन सज्जन को प्रिय मानता है\n\n**स्रोत:** नीतिशतक' },
        { id: 'sf290', front: '"विनाशकाले विपरीत बुद्धिः" अर्थ?', back: '**विनाशकाले विपरीत बुद्धिः:**\n\n**अर्थ:**\n- विनाश का समय आने पर\n- बुद्धि विपरीत (उल्टी) हो जाती है\n\n**उदाहरण:**\n- रावण ने राम से युद्ध किया\n- दुर्योधन ने पांडवों को अपमानित किया\n\n**शिक्षा:** विनाश से पहले बुद्धि भ्रष्ट होती है।' },
        { id: 'sf291', front: '"क्षणशः कणशश्चैव" सुभाषित?', back: '**पूर्ण श्लोक:**\n\nक्षणशः कणशश्चैव विद्यामर्थं च साधयेत्।\nक्षणत्यागे कुतो विद्या कणत्यागे कुतो धनम्॥\n\n**अर्थ:**\n- क्षण-क्षण विद्या साधो\n- कण-कण धन साधो\n- क्षण त्यागोगे तो विद्या कहाँ?\n- कण त्यागोगे तो धन कहाँ?' },
        { id: 'sf292', front: '"जलबिन्दुनिपातेन" श्लोक?', back: '**पूर्ण श्लोक:**\n\nजलबिन्दुनिपातेन क्रमशः पूर्यते घटः।\nस हेतुः सर्वविद्यानां धर्मस्य च धनस्य च॥\n\n**अर्थ:**\n- जल की बूंद-बूंद से घड़ा भरता है\n- यही नियम विद्या, धर्म, धन में भी\n\n**शिक्षा:** धीरे-धीरे, लगातार प्रयास!' },
        { id: 'sf293', front: '"शठे शाठ्यं समाचरेत्" अर्थ?', back: '**शठे शाठ्यं समाचरेत्:**\n\n- शठे = दुष्ट के साथ\n- शाठ्यम् = दुष्टता\n- समाचरेत् = आचरण करो\n\n**अर्थ:** दुष्ट के साथ दुष्टता का व्यवहार उचित है।\n\n**पूर्व पंक्ति:** साधुभ्यो साधुता कार्या\n(सज्जनों से सज्जनता करो)' },
        { id: 'sf294', front: '"काव्यशास्त्रविनोदेन" श्लोक?', back: '**पूर्ण श्लोक:**\n\nकाव्यशास्त्रविनोदेन कालो गच्छति धीमताम्।\nव्यसनेन च मूर्खाणां निद्रया कलहेन वा॥\n\n**अर्थ:**\n- बुद्धिमान का समय काव्य-शास्त्र में बीतता है\n- मूर्खों का व्यसन, निद्रा, कलह में' },
        { id: 'sf295', front: '"यथा राजा तथा प्रजा" अर्थ?', back: '**यथा राजा तथा प्रजा:**\n\n- यथा = जैसा\n- राजा = नेता/शासक\n- तथा = वैसी\n- प्रजा = जनता\n\n**अर्थ:**\nजैसा राजा होता है, वैसी ही प्रजा बन जाती है।\n\n**शिक्षा:** नेतृत्व का प्रभाव!' },
        { id: 'sf296', front: '"पुस्तकस्था तु या विद्या" श्लोक?', back: '**पूर्ण श्लोक:**\n\nपुस्तकस्था तु या विद्या परहस्तगतं धनम्।\nकार्यकाले समुत्पन्ने न सा विद्या न तद् धनम्॥\n\n**अर्थ:**\n- पुस्तक में रखी विद्या और\n- दूसरे के हाथ का धन\n- जरूरत पड़ने पर काम नहीं आते\n\n**शिक्षा:** याद करो, अपने पास रखो!' },
        { id: 'sf297', front: '"दूरतः पर्वतः रम्यः" सुभाषित?', back: '**पूर्ण श्लोक:**\n\nदूरतः पर्वतः रम्यः वेश्या च मुखमण्डने।\nनिकटात् नैव शोभन्ते विद्वान् सर्वत्र शोभते॥\n\n**अर्थ:**\n- पर्वत दूर से सुंदर लगता है\n- विद्वान हर जगह शोभायमान होता है\n\n**शिक्षा:** आंतरिक गुण महत्वपूर्ण!' },
        { id: 'sf298', front: '"अश्वस्य भूषणं वेगः" श्लोक?', back: '**पूर्ण श्लोक:**\n\nअश्वस्य भूषणं वेगो मत्तं स्याद् गजभूषणम्।\nचातुर्यं भूषणं नार्याः उद्योगो नरभूषणम्॥\n\n**अर्थ:**\n- घोड़े का भूषण = वेग (गति)\n- हाथी का भूषण = मद (गर्व)\n- नारी का भूषण = चातुर्य\n- मनुष्य का भूषण = उद्योग (काम)' },
        { id: 'sf299', front: '"सहसा विदधीत न क्रियाम्" अर्थ?', back: '**सहसा विदधीत न क्रियाम्:**\n\n**अर्थ:**\n- जल्दबाजी में काम नहीं करना चाहिए\n- सोच-समझकर कार्य करो\n\n**पूर्ण श्लोक:**\nसहसा विदधीत न क्रियामविवेकः परमापदां पदम्।\n\n**शिक्षा:** अविवेक = विपत्तियों का घर' },
        { id: 'sf300', front: '"धर्मो रक्षति रक्षितः" अर्थ?', back: '**धर्मो रक्षति रक्षितः:**\n\n**अर्थ:**\n- धर्म की रक्षा करो\n- धर्म तुम्हारी रक्षा करेगा\n\n**स्रोत:** मनुस्मृति\n\n**समान:**\n- वृक्षो रक्षति रक्षितः\n- भाषा रक्षति रक्षितः' }
      ],
      mcqs: [
        // MCQs sm271-sm300 (30 MCQs)
        { id: 'sm271', question: '"विद्या ददाति विनयम्" के अनुसार विद्या क्या देती है?', options: ['धन', 'विनय', 'सुख', 'बल'], answer: 'विनय' },
        { id: 'sm272', question: '"वसुधैव कुटुम्बकम्" का अर्थ है?', options: ['परिवार बड़ा है', 'पृथ्वी परिवार है', 'कुटुंब सुखी है', 'वसुधा सुंदर है'], answer: 'पृथ्वी परिवार है' },
        { id: 'sm273', question: '"सत्यमेव जयते" किस उपनिषद् से है?', options: ['ईशोपनिषद्', 'केनोपनिषद्', 'मुण्डकोपनिषद्', 'कठोपनिषद्'], answer: 'मुण्डकोपनिषद्' },
        { id: 'sm274', question: '"कर्मण्येवाधिकारस्ते" किस ग्रंथ से है?', options: ['रामायण', 'महाभारत', 'भगवद्गीता', 'उपनिषद्'], answer: 'भगवद्गीता' },
        { id: 'sm275', question: '"अहिंसा परमो धर्मः" का स्रोत?', options: ['गीता', 'महाभारत', 'रामायण', 'वेद'], answer: 'महाभारत' },
        { id: 'sm276', question: '"यत्र नार्यस्तु पूज्यन्ते" कहाँ से है?', options: ['गीता', 'मनुस्मृति', 'वेद', 'उपनिषद्'], answer: 'मनुस्मृति' },
        { id: 'sm277', question: '"मातृदेवो भव" का स्रोत?', options: ['गीता', 'तैत्तिरीय उपनिषद्', 'रामायण', 'महाभारत'], answer: 'तैत्तिरीय उपनिषद्' },
        { id: 'sm278', question: '"उद्यमेन हि सिध्यन्ति" में क्या सिद्ध होते हैं?', options: ['मनोरथ', 'कार्य', 'स्वप्न', 'भाग्य'], answer: 'कार्य' },
        { id: 'sm279', question: '"आलस्यं हि मनुष्याणाम्" में आलस्य को क्या कहा?', options: ['मित्र', 'रिपु (शत्रु)', 'धन', 'बल'], answer: 'रिपु (शत्रु)' },
        { id: 'sm280', question: '"परोपकाराय फलन्ति वृक्षाः" - वृक्ष किसके लिए फलते हैं?', options: ['स्वार्थ', 'परोपकार', 'शोभा', 'छाया'], answer: 'परोपकार' },
        { id: 'sm281', question: '"सर्वे भवन्तु सुखिनः" में क्या कामना है?', options: ['धन की', 'विद्या की', 'सबके सुख की', 'मोक्ष की'], answer: 'सबके सुख की' },
        { id: 'sm282', question: '"जननी जन्मभूमिश्च" में क्या स्वर्ग से महान है?', options: ['धन', 'विद्या', 'माता और मातृभूमि', 'देवता'], answer: 'माता और मातृभूमि' },
        { id: 'sm283', question: '"विनाशकाले विपरीत बुद्धिः" का अर्थ?', options: ['बुद्धि तेज होती है', 'बुद्धि उल्टी होती है', 'बुद्धि सही होती है', 'बुद्धि खोती है'], answer: 'बुद्धि उल्टी होती है' },
        { id: 'sm284', question: '"यथा राजा तथा प्रजा" का अर्थ?', options: ['राजा अच्छा', 'प्रजा अच्छी', 'जैसा राजा वैसी प्रजा', 'राजा-प्रजा अलग'], answer: 'जैसा राजा वैसी प्रजा' },
        { id: 'sm285', question: '"गुरुर्ब्रह्मा" में गुरु को किसके समान कहा?', options: ['शिष्य', 'ब्रह्मा', 'राजा', 'देवता'], answer: 'ब्रह्मा' },
        { id: 'sm286', question: '"क्षणशः कणशश्चैव" में क्या संदेश है?', options: ['खर्च करो', 'बचत करो', 'आराम करो', 'सोओ'], answer: 'बचत करो' },
        { id: 'sm287', question: '"जलबिन्दुनिपातेन" में घड़ा कैसे भरता है?', options: ['एक बार में', 'बूंद-बूंद से', 'कभी नहीं', 'जल्दी'], answer: 'बूंद-बूंद से' },
        { id: 'sm288', question: '"धर्मो रक्षति रक्षितः" का अर्थ?', options: ['धर्म को मारो', 'धर्म बचाओ तो बचेगा', 'धर्म कमजोर', 'धर्म अनावश्यक'], answer: 'धर्म बचाओ तो बचेगा' },
        { id: 'sm289', question: '"न हि ज्ञानेन सदृशं" में ज्ञान को क्या कहा?', options: ['अपवित्र', 'पवित्रतम', 'साधारण', 'कठिन'], answer: 'पवित्रतम' },
        { id: 'sm290', question: '"अश्वस्य भूषणं वेगः" - घोड़े का भूषण?', options: ['रंग', 'वेग', 'आकार', 'बाल'], answer: 'वेग' },
        { id: 'sm291', question: '"सहसा विदधीत न क्रियाम्" में क्या संदेश?', options: ['जल्दी करो', 'जल्दबाजी मत करो', 'देर करो', 'कुछ मत करो'], answer: 'जल्दबाजी मत करो' },
        { id: 'sm292', question: '"पुस्तकस्था तु या विद्या" - पुस्तक की विद्या कब काम नहीं आती?', options: ['सदा', 'कभी नहीं', 'जरूरत के समय', 'परीक्षा में'], answer: 'जरूरत के समय' },
        { id: 'sm293', question: '"शठे शाठ्यं समाचरेत्" - दुष्ट से क्या करो?', options: ['प्रेम', 'दुष्टता', 'मित्रता', 'सेवा'], answer: 'दुष्टता' },
        { id: 'sm294', question: '"काव्यशास्त्रविनोदेन" - बुद्धिमान का समय कैसे बीतता है?', options: ['सोने में', 'काव्य में', 'खेलने में', 'लड़ने में'], answer: 'काव्य में' },
        { id: 'sm295', question: '"दूरतः पर्वतः रम्यः" - विद्वान कहाँ शोभता है?', options: ['दूर से', 'पास से', 'सर्वत्र', 'कहीं नहीं'], answer: 'सर्वत्र' },
        { id: 'sm296', question: 'भारत का राष्ट्रीय आदर्श वाक्य क्या है?', options: ['वसुधैव कुटुम्बकम्', 'सत्यमेव जयते', 'अहिंसा परमो धर्मः', 'जय हिंद'], answer: 'सत्यमेव जयते' },
        { id: 'sm297', question: '"अतिथि देवो भव" में अतिथि को क्या माना?', options: ['मित्र', 'शत्रु', 'देवता', 'सेवक'], answer: 'देवता' },
        { id: 'sm298', question: '"स्वधर्मे निधनं श्रेयः" किस ग्रंथ से है?', options: ['रामायण', 'गीता', 'वेद', 'उपनिषद्'], answer: 'गीता' },
        { id: 'sm299', question: '"उद्योगो नरभूषणम्" - मनुष्य का भूषण?', options: ['धन', 'उद्योग', 'रूप', 'बल'], answer: 'उद्योग' },
        { id: 'sm300', question: '"सत्यं वद धर्मं चर" का स्रोत?', options: ['गीता', 'तैत्तिरीय उपनिषद्', 'रामायण', 'महाभारत'], answer: 'तैत्तिरीय उपनिषद्' }
      ],
      reels: [
        // Reels sr271-sr300 (30 reels)
        { id: 'sr271', title: 'विद्या Chain of Success!', content: '**विद्या ददाति विनयम्:**\n\n📚 विद्या → विनय\n🎯 विनय → पात्रता (योग्यता)\n💰 पात्रता → धन\n🙏 धन → धर्म\n😊 धर्म → सुख\n\n🔗 Chain याद करो!\nExam में जरूर आता है!' },
        { id: 'sr272', title: 'वसुधैव कुटुम्बकम्!', content: '**World is One Family:**\n\n🌍 वसुधा = पृथ्वी\n👨‍👩‍👧‍👦 कुटुम्बकम् = परिवार\n\n**अर्थ:** पूरी दुनिया एक परिवार!\n\n📖 स्रोत: महोपनिषद्\n🇮🇳 भारतीय संस्कृति का मूल!' },
        { id: 'sr273', title: 'सत्यमेव जयते!', content: '**Truth Always Wins:**\n\n✅ सत्यम् = सत्य\n🏆 जयते = जीतता है\n\n📖 स्रोत: मुण्डक उपनिषद्\n🇮🇳 राष्ट्रीय आदर्श वाक्य!\n🦁 राजचिह्न में अंकित!\n\n💪 Always speak truth!' },
        { id: 'sr274', title: 'कर्मण्येवाधिकारस्ते!', content: '**गीता 2.47:**\n\n✅ कर्म करो\n❌ फल की चिंता मत करो\n❌ फल के लिए कर्म मत करो\n❌ अकर्मण्य भी मत बनो\n\n🎯 कर्मयोग का सार!\n📖 Krishna to Arjuna!' },
        { id: 'sr275', title: 'गुरु = ब्रह्मा + विष्णु + शिव!', content: '**गुरुर्ब्रह्मा गुरुर्विष्णुः:**\n\n🔱 गुरु = ब्रह्मा (Creator)\n🔱 गुरु = विष्णु (Preserver)\n🔱 गुरु = महेश्वर (Destroyer)\n🔱 गुरु = परब्रह्म\n\n🙏 तस्मै श्री गुरवे नमः!' },
        { id: 'sr276', title: 'अहिंसा परमो धर्मः!', content: '**Non-violence:**\n\n🕊️ अहिंसा = परम धर्म\n⚔️ BUT धर्म रक्षा हेतु हिंसा = भी धर्म!\n\n📖 स्रोत: महाभारत\n\n🎯 Balance समझो:\n- सामान्यतः अहिंसा\n- धर्म रक्षा में हिंसा भी!' },
        { id: 'sr277', title: 'जननी जन्मभूमिश्च!', content: '**माता और मातृभूमि:**\n\n👩 जननी = Mother\n🇮🇳 जन्मभूमि = Motherland\n✨ स्वर्गादपि गरीयसी = स्वर्ग से भी महान!\n\n❤️ देशभक्ति का श्लोक!\n🙏 माता का सम्मान!' },
        { id: 'sr278', title: 'उद्यमेन हि सिध्यन्ति!', content: '**मेहनत का महत्व:**\n\n💪 उद्यम = परिश्रम\n✅ कार्याणि सिध्यन्ति = काम होते हैं\n❌ मनोरथैः = इच्छा से नहीं\n\n🦁 सोए शेर के मुख में हिरण नहीं जाते!\n\n📝 Hard work = Success!' },
        { id: 'sr279', title: 'परोपकार के लिए जीवन!', content: '**परोपकाराय फलन्ति वृक्षाः:**\n\n🌳 वृक्ष = परोपकार के लिए फलते\n🌊 नदी = परोपकार के लिए बहती\n🐄 गाय = परोपकार के लिए दूध देती\n\n👤 हमारा शरीर भी परोपकार के लिए!' },
        { id: 'sr280', title: 'सर्वे भवन्तु सुखिनः!', content: '**सबके लिए प्रार्थना:**\n\n😊 सर्वे सुखिनः = सब सुखी हों\n🏥 सर्वे निरामयाः = सब निरोग हों\n👀 सर्वे भद्राणि = सब शुभ देखें\n😢 मा कश्चिद् दुःखभाग्भवेत् = कोई दुःखी न हो\n\n🙏 Universal Prayer!' },
        { id: 'sr281', title: 'मातृदेवो भव!', content: '**तैत्तिरीय उपनिषद्:**\n\n👩 मातृदेवो भव = माता देवता\n👨 पितृदेवो भव = पिता देवता\n👨‍🏫 आचार्यदेवो भव = गुरु देवता\n🧳 अतिथिदेवो भव = अतिथि देवता\n\n🙏 चारों को देवता मानो!' },
        { id: 'sr282', title: 'यत्र नार्यस्तु पूज्यन्ते!', content: '**नारी सम्मान:**\n\n👩 यत्र नार्यस्तु पूज्यन्ते = जहाँ नारी पूजित\n🙏 रमन्ते तत्र देवताः = वहाँ देवता रहते हैं\n\n📖 स्रोत: मनुस्मृति\n\n👸 Respect Women = Divine Presence!' },
        { id: 'sr283', title: 'आलस्य = शत्रु!', content: '**आलस्यं हि मनुष्याणाम्:**\n\n😴 आलस्य = शरीर में रहने वाला\n⚔️ महान् रिपुः = बड़ा शत्रु\n\n💪 नास्त्युद्यमसमो बन्धुः\n= परिश्रम जैसा कोई मित्र नहीं!\n\n🚫 Say NO to Laziness!' },
        { id: 'sr284', title: 'ज्ञान = पवित्रतम!', content: '**न हि ज्ञानेन सदृशम्:**\n\n📚 ज्ञान के समान\n✨ पवित्र कुछ नहीं!\n\n📖 स्रोत: गीता 4.38\n\n🎯 Knowledge is Supreme!\nPurest thing in world!' },
        { id: 'sr285', title: 'क्षण-क्षण, कण-कण!', content: '**क्षणशः कणशश्चैव:**\n\n⏰ क्षणशः = पल-पल\n📚 विद्या साधो\n\n💰 कणशः = कण-कण\n💵 धन साधो\n\n🎯 Time & Money = Precious!\nWaste mat karo!' },
        { id: 'sr286', title: 'बूंद-बूंद से घड़ा भरे!', content: '**जलबिन्दुनिपातेन:**\n\n💧 जल की बूंद-बूंद से\n🏺 घड़ा भर जाता है\n\n📚 यही नियम विद्या में\n💰 यही नियम धन में\n\n🎯 Small steps = Big success!' },
        { id: 'sr287', title: 'धर्म की रक्षा करो!', content: '**धर्मो रक्षति रक्षितः:**\n\n🛡️ धर्म की रक्षा करो\n✨ धर्म तुम्हारी रक्षा करेगा!\n\n📖 स्रोत: मनुस्मृति\n\n🌳 वृक्षो रक्षति रक्षितः\n= वृक्ष भी यही कहते हैं!' },
        { id: 'sr288', title: 'विनाशकाले विपरीत बुद्धिः!', content: '**विनाश से पहले:**\n\n⚠️ विनाश काल आने पर\n🧠 बुद्धि उल्टी हो जाती है\n\n📚 उदाहरण:\n- रावण\n- दुर्योधन\n- कंस\n\n🎯 सावधान रहो!' },
        { id: 'sr289', title: 'जैसा राजा वैसी प्रजा!', content: '**यथा राजा तथा प्रजा:**\n\n👑 जैसा नेता\n👥 वैसी जनता\n\n📚 Leader का प्रभाव:\n- अच्छा नेता = अच्छी जनता\n- बुरा नेता = बुरी जनता\n\n🎯 Leadership matters!' },
        { id: 'sr290', title: 'पुस्तक की विद्या = बेकार!', content: '**पुस्तकस्था तु या विद्या:**\n\n📖 पुस्तक में रखी विद्या\n💰 दूसरे के हाथ का धन\n\n❌ जरूरत पड़ने पर काम नहीं!\n\n✅ याद करो\n✅ अपने पास रखो\n✅ Practice करो!' },
        { id: 'sr291', title: 'जल्दबाजी मत करो!', content: '**सहसा विदधीत न क्रियाम्:**\n\n❌ जल्दबाजी में काम मत करो\n🧠 अविवेक = विपत्तियों का घर\n\n✅ सोचो\n✅ समझो\n✅ फिर करो\n\n⏸️ Pause before action!' },
        { id: 'sr292', title: 'दुष्ट से दुष्टता!', content: '**शठे शाठ्यं समाचरेत्:**\n\n😇 सज्जनों से = सज्जनता\n😈 दुष्टों से = दुष्टता\n\n🎯 व्यवहार अनुकूल होना चाहिए!\n\nSmart approach for different people!' },
        { id: 'sr293', title: 'बुद्धिमान vs मूर्ख!', content: '**काव्यशास्त्रविनोदेन:**\n\n🧠 बुद्धिमान का समय:\n📚 काव्य-शास्त्र में\n\n😴 मूर्खों का समय:\n❌ व्यसन में\n❌ नींद में\n❌ झगड़े में\n\n🎯 Use time wisely!' },
        { id: 'sr294', title: 'भूषण (Ornaments)!', content: '**अश्वस्य भूषणं वेगः:**\n\n🐎 घोड़ा = वेग (Speed)\n🐘 हाथी = मद (Pride)\n👩 नारी = चातुर्य (Cleverness)\n👨 मनुष्य = उद्योग (Work)\n\n🎯 Everyone has their own ornament!' },
        { id: 'sr295', title: 'विद्वान सर्वत्र शोभते!', content: '**दूरतः पर्वतः रम्यः:**\n\n🏔️ पर्वत = दूर से सुंदर\n\n📚 विद्वान = सर्वत्र शोभायमान!\n\n🎯 External beauty = distance dependent\n🎯 Internal quality = always shines!' },
        { id: 'sr296', title: 'स्वधर्मे निधनं श्रेयः!', content: '**गीता 3.35:**\n\n✅ अपना कर्तव्य = दोषपूर्ण भी श्रेष्ठ\n❌ पराया कर्तव्य = अच्छा भी भयावह\n\n🎯 अपना धर्म निभाओ!\n🎯 दूसरों की नकल मत करो!' },
        { id: 'sr297', title: 'Important श्लोक for Exam!', content: '**परीक्षा में आते हैं:**\n\n1. विद्या ददाति विनयम्\n2. सत्यमेव जयते\n3. वसुधैव कुटुम्बकम्\n4. कर्मण्येवाधिकारस्ते\n5. परोपकाराय फलन्ति वृक्षाः\n\n📝 इन्हें जरूर याद करो!' },
        { id: 'sr298', title: 'श्लोक के स्रोत याद करो!', content: '**स्रोत Important:**\n\n📖 गीता: कर्मण्येवाधिकारस्ते\n📖 उपनिषद्: सत्यमेव जयते\n📖 महाभारत: अहिंसा परमो धर्मः\n📖 मनुस्मृति: यत्र नार्यस्तु पूज्यन्ते\n\n🎯 Source पूछा जाता है!' },
        { id: 'sr299', title: 'श्लोक में अर्थ पूछा जाए!', content: '**अर्थ लिखने का तरीका:**\n\n1. शब्दार्थ लिखो\n2. पूरा अर्थ लिखो\n3. भाव/शिक्षा लिखो\n\n📝 Example:\nविद्या = ज्ञान\nददाति = देती है\nविनयम् = विनम्रता\n\n🎯 Complete answer = Full marks!' },
        { id: 'sr300', title: 'सुभाषित = 2-3 Marks Easy!', content: '**Scoring Tips:**\n\n✅ श्लोक याद करो (exact)\n✅ अर्थ समझो\n✅ स्रोत याद करो\n✅ भाव/शिक्षा लिखो\n\n🎯 सुभाषित Section = Easy marks!\n📝 Practice daily 2-3 shlokas!' }
      ],
      longAnswers: [
        {
          id: 'sl19',
          question: 'महत्वपूर्ण सुभाषित और उनके अर्थ',
          answer: `# महत्वपूर्ण सुभाषित

## 1. विद्या पर श्लोक

### विद्या ददाति विनयम्
\`\`\`
विद्या ददाति विनयं विनयाद् याति पात्रताम्।
पात्रत्वाद् धनमाप्नोति धनाद् धर्मं ततः सुखम्॥
\`\`\`
**अर्थ:** विद्या → विनय → योग्यता → धन → धर्म → सुख

### विद्या धनं सर्वधनप्रधानम्
- विद्या रूपी धन सभी धनों में श्रेष्ठ है

---

## 2. कर्म पर श्लोक

### कर्मण्येवाधिकारस्ते (गीता 2.47)
\`\`\`
कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
\`\`\`
**अर्थ:** कर्म करो, फल की चिंता मत करो।

### उद्यमेन हि सिध्यन्ति
\`\`\`
उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।
न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥
\`\`\`
**अर्थ:** परिश्रम से काम होते हैं, इच्छा से नहीं।

---

## 3. जीवन मूल्य

### सत्यमेव जयते (मुण्डक उपनिषद्)
- सत्य की विजय होती है
- भारत का राष्ट्रीय आदर्श वाक्य

### वसुधैव कुटुम्बकम् (महोपनिषद्)
- पूरी पृथ्वी एक परिवार है

### अहिंसा परमो धर्मः (महाभारत)
- अहिंसा सबसे बड़ा धर्म है

---

## 4. गुरु-माता-पिता

### गुरुर्ब्रह्मा गुरुर्विष्णुः
\`\`\`
गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।
गुरुः साक्षात् परब्रह्म तस्मै श्री गुरवे नमः॥
\`\`\`

### मातृदेवो भव (तैत्तिरीय उपनिषद्)
- माता, पिता, आचार्य, अतिथि = देवता

---

## 5. परोपकार

### परोपकाराय फलन्ति वृक्षाः
\`\`\`
परोपकाराय फलन्ति वृक्षाः
परोपकाराय वहन्ति नद्यः।
परोपकाराय दुहन्ति गावः
परोपकारार्थमिदं शरीरम्॥
\`\`\`

**Exam Tip:** श्लोक + अर्थ + स्रोत = Full marks!`
        },
        {
          id: 'sl20',
          question: 'श्लोकों के स्रोत और उनका महत्व',
          answer: `# श्लोकों के स्रोत

## भगवद्गीता से

| श्लोक | अध्याय |
|-------|--------|
| कर्मण्येवाधिकारस्ते | 2.47 |
| स्वधर्मे निधनं श्रेयः | 3.35 |
| न हि ज्ञानेन सदृशं | 4.38 |
| योगः कर्मसु कौशलम् | 2.50 |

---

## उपनिषदों से

| श्लोक | उपनिषद् |
|-------|---------|
| सत्यमेव जयते | मुण्डक |
| वसुधैव कुटुम्बकम् | महोपनिषद् |
| मातृदेवो भव | तैत्तिरीय |
| सत्यं वद धर्मं चर | तैत्तिरीय |

---

## महाभारत से

| श्लोक |
|-------|
| अहिंसा परमो धर्मः |
| धर्मो रक्षति रक्षितः |
| यतो धर्मस्ततो जयः |

---

## मनुस्मृति से

| श्लोक |
|-------|
| यत्र नार्यस्तु पूज्यन्ते |
| धर्मो रक्षति रक्षितः |

---

## नीतिशतक (भर्तृहरि) से

| श्लोक |
|-------|
| विद्या ददाति विनयम् |
| उद्यमेन हि सिध्यन्ति |
| परोपकाराय फलन्ति वृक्षाः |

---

## राष्ट्रीय महत्व

| श्लोक | उपयोग |
|-------|--------|
| सत्यमेव जयते | राष्ट्रीय आदर्श वाक्य |
| वसुधैव कुटुम्बकम् | विदेश नीति |
| अहिंसा परमो धर्मः | गांधी दर्शन |

**Exam Tip:** स्रोत याद करो - 1 mark का प्रश्न आता है!`
        }
      ]
    },
    {
      id: 'sanskrit-ch11',
      name: 'शब्दरूप एवं धातुरूप (Noun & Verb Forms)',
      description: 'शब्द रूपावली, धातु रूपावली, विभक्ति, लकार - Essential Grammar Tables',
      flashcards: [
        // Flashcards sf301-sf330 (30 flashcards)
        { id: 'sf301', front: 'विभक्ति क्या है और कितनी होती हैं?', back: '**विभक्ति (Case Endings):**\n\n- शब्द में लगने वाले प्रत्यय\n- संज्ञा का वाक्य में संबंध बताते हैं\n\n**7 विभक्तियाँ + संबोधन:**\n1. प्रथमा - कर्ता\n2. द्वितीया - कर्म\n3. तृतीया - करण\n4. चतुर्थी - संप्रदान\n5. पंचमी - अपादान\n6. षष्ठी - संबंध\n7. सप्तमी - अधिकरण\n+ संबोधन' },
        { id: 'sf302', front: '"राम" शब्द का प्रथमा विभक्ति रूप?', back: '**राम (अकारान्त पुल्लिंग):**\n\n**प्रथमा विभक्ति:**\n| वचन | रूप |\n|------|------|\n| एकवचन | रामः |\n| द्विवचन | रामौ |\n| बहुवचन | रामाः |\n\n**प्रयोग:** रामः गच्छति। (राम जाता है)' },
        { id: 'sf303', front: '"राम" शब्द का द्वितीया विभक्ति रूप?', back: '**राम - द्वितीया (कर्म):**\n\n| वचन | रूप |\n|------|------|\n| एकवचन | रामम् |\n| द्विवचन | रामौ |\n| बहुवचन | रामान् |\n\n**प्रयोग:** सीता रामं पश्यति।\n(सीता राम को देखती है)' },
        { id: 'sf304', front: '"राम" शब्द का तृतीया विभक्ति रूप?', back: '**राम - तृतीया (करण/साधन):**\n\n| वचन | रूप |\n|------|------|\n| एकवचन | रामेण |\n| द्विवचन | रामाभ्याम् |\n| बहुवचन | रामैः |\n\n**प्रयोग:** रामेण सह गच्छामि।\n(राम के साथ जाता हूँ)' },
        { id: 'sf305', front: '"राम" शब्द का चतुर्थी विभक्ति रूप?', back: '**राम - चतुर्थी (संप्रदान/के लिए):**\n\n| वचन | रूप |\n|------|------|\n| एकवचन | रामाय |\n| द्विवचन | रामाभ्याम् |\n| बहुवचन | रामेभ्यः |\n\n**प्रयोग:** रामाय फलं ददाति।\n(राम को फल देता है)' },
        { id: 'sf306', front: '"राम" शब्द का पंचमी विभक्ति रूप?', back: '**राम - पंचमी (अपादान/से):**\n\n| वचन | रूप |\n|------|------|\n| एकवचन | रामात् |\n| द्विवचन | रामाभ्याम् |\n| बहुवचन | रामेभ्यः |\n\n**प्रयोग:** रामात् पुस्तकं आनयति।\n(राम से पुस्तक लाता है)' },
        { id: 'sf307', front: '"राम" शब्द का षष्ठी विभक्ति रूप?', back: '**राम - षष्ठी (संबंध/का):**\n\n| वचन | रूप |\n|------|------|\n| एकवचन | रामस्य |\n| द्विवचन | रामयोः |\n| बहुवचन | रामाणाम् |\n\n**प्रयोग:** रामस्य पुस्तकम्।\n(राम की पुस्तक)' },
        { id: 'sf308', front: '"राम" शब्द का सप्तमी विभक्ति रूप?', back: '**राम - सप्तमी (अधिकरण/में):**\n\n| वचन | रूप |\n|------|------|\n| एकवचन | रामे |\n| द्विवचन | रामयोः |\n| बहुवचन | रामेषु |\n\n**प्रयोग:** रामे विश्वासः अस्ति।\n(राम में विश्वास है)' },
        { id: 'sf309', front: '"फल" (नपुंसकलिंग) शब्द का रूप?', back: '**फल - नपुंसकलिंग:**\n\n| विभक्ति | एक | द्वि | बहु |\n|---------|-----|-----|-----|\n| प्रथमा | फलम् | फले | फलानि |\n| द्वितीया | फलम् | फले | फलानि |\n| तृतीया | फलेन | फलाभ्याम् | फलैः |\n| षष्ठी | फलस्य | फलयोः | फलानाम् |\n\n**Note:** प्रथमा = द्वितीया (नपुंसक में)' },
        { id: 'sf310', front: '"लता" (स्त्रीलिंग आकारान्त) का रूप?', back: '**लता - स्त्रीलिंग:**\n\n| विभक्ति | एक | द्वि | बहु |\n|---------|-----|-----|-----|\n| प्रथमा | लता | लते | लताः |\n| द्वितीया | लताम् | लते | लताः |\n| तृतीया | लतया | लताभ्याम् | लताभिः |\n| षष्ठी | लतायाः | लतयोः | लतानाम् |\n| सप्तमी | लतायाम् | लतयोः | लतासु |' },
        { id: 'sf311', front: '"नदी" (ईकारान्त स्त्रीलिंग) का रूप?', back: '**नदी - स्त्रीलिंग:**\n\n| विभक्ति | एक | द्वि | बहु |\n|---------|-----|-----|-----|\n| प्रथमा | नदी | नद्यौ | नद्यः |\n| द्वितीया | नदीम् | नद्यौ | नदीः |\n| तृतीया | नद्या | नदीभ्याम् | नदीभिः |\n| षष्ठी | नद्याः | नद्योः | नदीनाम् |\n| सप्तमी | नद्याम् | नद्योः | नदीषु |' },
        { id: 'sf312', front: 'लकार क्या है और कितने होते हैं?', back: '**लकार (Tenses/Moods):**\n\n**10 लकार:**\n1. **लट्** - वर्तमान (Present)\n2. **लृट्** - भविष्यत् (Future)\n3. **लङ्** - भूत (Past)\n4. **लोट्** - आज्ञा (Imperative)\n5. **विधिलिङ्** - चाहिए (Potential)\n6. **लिट्** - परोक्ष भूत\n7. **लुट्** - अनद्यतन भविष्यत्\n8. **लुङ्** - सामान्य भूत\n9. **लृङ्** - हेतुहेतुमद्\n10. **आशीर्लिङ्** - आशीर्वाद' },
        { id: 'sf313', front: '"पठ्" धातु का लट् लकार (वर्तमान)?', back: '**पठ् (पढ़ना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | पठति | पठतः | पठन्ति |\n| मध्यम | पठसि | पठथः | पठथ |\n| उत्तम | पठामि | पठावः | पठामः |\n\n**प्रयोग:**\n- सः पठति (वह पढ़ता है)\n- अहं पठामि (मैं पढ़ता हूँ)' },
        { id: 'sf314', front: '"गम्" धातु का लट् लकार?', back: '**गम् (जाना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | गच्छति | गच्छतः | गच्छन्ति |\n| मध्यम | गच्छसि | गच्छथः | गच्छथ |\n| उत्तम | गच्छामि | गच्छावः | गच्छामः |\n\n**Note:** गम् → गच्छ (विशेष परिवर्तन)' },
        { id: 'sf315', front: '"पठ्" धातु का लृट् लकार (भविष्यत्)?', back: '**पठ् - लृट् लकार (Future):**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | पठिष्यति | पठिष्यतः | पठिष्यन्ति |\n| मध्यम | पठिष्यसि | पठिष्यथः | पठिष्यथ |\n| उत्तम | पठिष्यामि | पठिष्यावः | पठिष्यामः |\n\n**Formula:** धातु + इष्य + ति/सि/मि' },
        { id: 'sf316', front: '"पठ्" धातु का लङ् लकार (भूतकाल)?', back: '**पठ् - लङ् लकार (Past):**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | अपठत् | अपठताम् | अपठन् |\n| मध्यम | अपठः | अपठतम् | अपठत |\n| उत्तम | अपठम् | अपठाव | अपठाम |\n\n**Formula:** अ + धातु + त्/ः/म्' },
        { id: 'sf317', front: '"पठ्" धातु का लोट् लकार (आज्ञा)?', back: '**पठ् - लोट् लकार (Imperative):**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | पठतु | पठताम् | पठन्तु |\n| मध्यम | पठ | पठतम् | पठत |\n| उत्तम | पठानि | पठाव | पठाम |\n\n**प्रयोग:**\n- त्वं पठ (तू पढ़)\n- सः पठतु (वह पढ़े)' },
        { id: 'sf318', front: '"पठ्" धातु का विधिलिङ् लकार?', back: '**पठ् - विधिलिङ् (चाहिए):**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | पठेत् | पठेताम् | पठेयुः |\n| मध्यम | पठेः | पठेतम् | पठेत |\n| उत्तम | पठेयम् | पठेव | पठेम |\n\n**प्रयोग:**\n- सः पठेत् (उसे पढ़ना चाहिए)\n- अहं पठेयम् (मुझे पढ़ना चाहिए)' },
        { id: 'sf319', front: '"अस्" धातु (होना) का लट् लकार?', back: '**अस् (होना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | अस्ति | स्तः | सन्ति |\n| मध्यम | असि | स्थः | स्थ |\n| उत्तम | अस्मि | स्वः | स्मः |\n\n**प्रयोग:**\n- सः छात्रः अस्ति (वह छात्र है)\n- अहं छात्रः अस्मि (मैं छात्र हूँ)' },
        { id: 'sf320', front: '"कृ" धातु (करना) का लट् लकार?', back: '**कृ (करना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | करोति | कुरुतः | कुर्वन्ति |\n| मध्यम | करोषि | कुरुथः | कुरुथ |\n| उत्तम | करोमि | कुर्वः | कुर्मः |\n\n**प्रयोग:** सः कार्यं करोति।\n(वह काम करता है)' },
        { id: 'sf321', front: 'पुरुष क्या है? कितने होते हैं?', back: '**पुरुष (Person):**\n\n**3 पुरुष:**\n\n1. **प्रथम पुरुष** (Third Person)\n   - सः/सा/तत् (वह)\n   - तौ/ते/ताः (वे दो/वे सब)\n\n2. **मध्यम पुरुष** (Second Person)\n   - त्वम् (तू/तुम)\n   - युवाम्/यूयम् (तुम दो/तुम सब)\n\n3. **उत्तम पुरुष** (First Person)\n   - अहम् (मैं)\n   - आवाम्/वयम् (हम दो/हम सब)' },
        { id: 'sf322', front: 'वचन क्या है? कितने होते हैं?', back: '**वचन (Number):**\n\n**3 वचन:**\n\n1. **एकवचन** (Singular)\n   - एक के लिए\n   - रामः, फलम्, लता\n\n2. **द्विवचन** (Dual)\n   - दो के लिए\n   - रामौ, फले, लते\n\n3. **बहुवचन** (Plural)\n   - दो से अधिक\n   - रामाः, फलानि, लताः' },
        { id: 'sf323', front: '"भू" धातु (होना) का लट् लकार?', back: '**भू (होना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | भवति | भवतः | भवन्ति |\n| मध्यम | भवसि | भवथः | भवथ |\n| उत्तम | भवामि | भवावः | भवामः |\n\n**प्रयोग:**\n- सुखं भवति (सुख होता है)\n- शुभं भवतु (शुभ हो)' },
        { id: 'sf324', front: '"दा" धातु (देना) का लट् लकार?', back: '**दा (देना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | ददाति | दत्तः | ददति |\n| मध्यम | ददासि | दत्थः | दत्थ |\n| उत्तम | ददामि | दद्वः | दद्मः |\n\n**प्रयोग:** विद्या ददाति विनयम्।\n(विद्या विनय देती है)' },
        { id: 'sf325', front: '"खाद्" धातु (खाना) का लट् लकार?', back: '**खाद् (खाना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | खादति | खादतः | खादन्ति |\n| मध्यम | खादसि | खादथः | खादथ |\n| उत्तम | खादामि | खादावः | खादामः |\n\n**प्रयोग:** बालकः फलं खादति।' },
        { id: 'sf326', front: '"लिख्" धातु (लिखना) का रूप?', back: '**लिख् - विभिन्न लकार:**\n\n| लकार | प्रथम पुरुष एक |\n|-------|----------------|\n| लट् | लिखति |\n| लृट् | लेखिष्यति |\n| लङ् | अलिखत् |\n| लोट् | लिखतु |\n| विधिलिङ् | लिखेत् |\n\n**प्रयोग:** छात्रः पत्रं लिखति।' },
        { id: 'sf327', front: '"दृश्" धातु (देखना) का लट् लकार?', back: '**दृश् (देखना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | पश्यति | पश्यतः | पश्यन्ति |\n| मध्यम | पश्यसि | पश्यथः | पश्यथ |\n| उत्तम | पश्यामि | पश्यावः | पश्यामः |\n\n**Note:** दृश् → पश्य (विशेष परिवर्तन)' },
        { id: 'sf328', front: '"श्रु" धातु (सुनना) का लट् लकार?', back: '**श्रु (सुनना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | शृणोति | शृणुतः | शृण्वन्ति |\n| मध्यम | शृणोषि | शृणुथः | शृणुथ |\n| उत्तम | शृणोमि | शृणुवः | शृणुमः |\n\n**प्रयोग:** सः गीतं शृणोति।' },
        { id: 'sf329', front: '"वद्" धातु (बोलना) का लट् लकार?', back: '**वद् (बोलना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | वदति | वदतः | वदन्ति |\n| मध्यम | वदसि | वदथः | वदथ |\n| उत्तम | वदामि | वदावः | वदामः |\n\n**प्रयोग:** सत्यं वद। (सत्य बोलो)' },
        { id: 'sf330', front: '"हस्" धातु (हँसना) का लट् लकार?', back: '**हस् (हँसना) - लट् लकार:**\n\n| पुरुष | एक | द्वि | बहु |\n|-------|-----|-----|-----|\n| प्रथम | हसति | हसतः | हसन्ति |\n| मध्यम | हससि | हसथः | हसथ |\n| उत्तम | हसामि | हसावः | हसामः |\n\n**प्रयोग:** बालकाः हसन्ति।\n(बच्चे हँसते हैं)' }
      ],
      mcqs: [
        // MCQs sm301-sm330 (30 MCQs)
        { id: 'sm301', question: 'विभक्तियाँ कितनी होती हैं?', options: ['5', '6', '7', '8'], answer: '7' },
        { id: 'sm302', question: 'कर्ता किस विभक्ति में होता है?', options: ['प्रथमा', 'द्वितीया', 'तृतीया', 'षष्ठी'], answer: 'प्रथमा' },
        { id: 'sm303', question: 'कर्म किस विभक्ति में होता है?', options: ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी'], answer: 'द्वितीया' },
        { id: 'sm304', question: '"रामस्य" किस विभक्ति का रूप है?', options: ['चतुर्थी', 'पंचमी', 'षष्ठी', 'सप्तमी'], answer: 'षष्ठी' },
        { id: 'sm305', question: '"रामेण" किस विभक्ति का रूप है?', options: ['द्वितीया', 'तृतीया', 'चतुर्थी', 'पंचमी'], answer: 'तृतीया' },
        { id: 'sm306', question: '"रामे" किस विभक्ति का रूप है?', options: ['पंचमी', 'षष्ठी', 'सप्तमी', 'संबोधन'], answer: 'सप्तमी' },
        { id: 'sm307', question: 'लट् लकार किस काल के लिए है?', options: ['भूत', 'वर्तमान', 'भविष्यत्', 'आज्ञा'], answer: 'वर्तमान' },
        { id: 'sm308', question: 'लृट् लकार किस काल के लिए है?', options: ['भूत', 'वर्तमान', 'भविष्यत्', 'आज्ञा'], answer: 'भविष्यत्' },
        { id: 'sm309', question: 'लङ् लकार किस काल के लिए है?', options: ['भूत', 'वर्तमान', 'भविष्यत्', 'आज्ञा'], answer: 'भूत' },
        { id: 'sm310', question: 'लोट् लकार किसके लिए है?', options: ['वर्तमान', 'भूत', 'आज्ञा', 'भविष्यत्'], answer: 'आज्ञा' },
        { id: 'sm311', question: '"पठति" किस पुरुष का रूप है?', options: ['प्रथम', 'मध्यम', 'उत्तम', 'कोई नहीं'], answer: 'प्रथम' },
        { id: 'sm312', question: '"पठामि" किस पुरुष का रूप है?', options: ['प्रथम', 'मध्यम', 'उत्तम', 'कोई नहीं'], answer: 'उत्तम' },
        { id: 'sm313', question: '"पठसि" किस पुरुष का रूप है?', options: ['प्रथम', 'मध्यम', 'उत्तम', 'कोई नहीं'], answer: 'मध्यम' },
        { id: 'sm314', question: '"पठन्ति" किस वचन का रूप है?', options: ['एकवचन', 'द्विवचन', 'बहुवचन', 'कोई नहीं'], answer: 'बहुवचन' },
        { id: 'sm315', question: '"गच्छति" किस धातु का रूप है?', options: ['पठ्', 'गम्', 'भू', 'कृ'], answer: 'गम्' },
        { id: 'sm316', question: '"करोति" किस धातु का रूप है?', options: ['पठ्', 'गम्', 'भू', 'कृ'], answer: 'कृ' },
        { id: 'sm317', question: '"पश्यति" किस धातु का रूप है?', options: ['पठ्', 'दृश्', 'श्रु', 'वद्'], answer: 'दृश्' },
        { id: 'sm318', question: '"अपठत्" किस लकार का रूप है?', options: ['लट्', 'लृट्', 'लङ्', 'लोट्'], answer: 'लङ्' },
        { id: 'sm319', question: '"पठिष्यति" किस लकार का रूप है?', options: ['लट्', 'लृट्', 'लङ्', 'लोट्'], answer: 'लृट्' },
        { id: 'sm320', question: '"पठतु" किस लकार का रूप है?', options: ['लट्', 'लृट्', 'लङ्', 'लोट्'], answer: 'लोट्' },
        { id: 'sm321', question: '"फलानि" किस वचन का रूप है?', options: ['एकवचन', 'द्विवचन', 'बहुवचन', 'कोई नहीं'], answer: 'बहुवचन' },
        { id: 'sm322', question: '"रामौ" किस वचन का रूप है?', options: ['एकवचन', 'द्विवचन', 'बहुवचन', 'कोई नहीं'], answer: 'द्विवचन' },
        { id: 'sm323', question: 'संस्कृत में कितने वचन होते हैं?', options: ['2', '3', '4', '5'], answer: '3' },
        { id: 'sm324', question: 'संस्कृत में कितने पुरुष होते हैं?', options: ['2', '3', '4', '5'], answer: '3' },
        { id: 'sm325', question: '"अस्ति" किस धातु का रूप है?', options: ['अस्', 'भू', 'कृ', 'दा'], answer: 'अस्' },
        { id: 'sm326', question: '"भवति" किस धातु का रूप है?', options: ['अस्', 'भू', 'कृ', 'दा'], answer: 'भू' },
        { id: 'sm327', question: '"ददाति" किस धातु का रूप है?', options: ['अस्', 'भू', 'कृ', 'दा'], answer: 'दा' },
        { id: 'sm328', question: '"पठेत्" किस लकार का रूप है?', options: ['लट्', 'लोट्', 'विधिलिङ्', 'लृट्'], answer: 'विधिलिङ्' },
        { id: 'sm329', question: '"लतायाः" किस विभक्ति का रूप है?', options: ['चतुर्थी', 'पंचमी', 'षष्ठी', 'सप्तमी'], answer: 'षष्ठी' },
        { id: 'sm330', question: '"नद्याम्" किस विभक्ति का रूप है?', options: ['पंचमी', 'षष्ठी', 'सप्तमी', 'संबोधन'], answer: 'सप्तमी' }
      ],
      reels: [
        // Reels sr301-sr330 (30 reels)
        { id: 'sr301', title: '7 विभक्ति = 7 Superpowers!', content: '**विभक्ति याद करो:**\n\n1️⃣ प्रथमा = कर्ता (Who?)\n2️⃣ द्वितीया = कर्म (Whom?)\n3️⃣ तृतीया = करण (By/With)\n4️⃣ चतुर्थी = संप्रदान (For)\n5️⃣ पंचमी = अपादान (From)\n6️⃣ षष्ठी = संबंध (Of/\'s)\n7️⃣ सप्तमी = अधिकरण (In/On)' },
        { id: 'sr302', title: 'राम शब्द रूप Trick!', content: '**राम (पुल्लिंग अकारान्त):**\n\n📌 प्र: रामः, रामौ, रामाः\n📌 द्वि: रामम्, रामौ, रामान्\n📌 तृ: रामेण, रामाभ्याम्, रामैः\n📌 ष: रामस्य, रामयोः, रामाणाम्\n📌 स: रामे, रामयोः, रामेषु\n\n🎯 Most common शब्द रूप!' },
        { id: 'sr303', title: 'लता शब्द रूप!', content: '**लता (स्त्रीलिंग आकारान्त):**\n\n📌 प्र: लता, लते, लताः\n📌 द्वि: लताम्, लते, लताः\n📌 तृ: लतया, लताभ्याम्, लताभिः\n📌 ष: लतायाः, लतयोः, लतानाम्\n📌 स: लतायाम्, लतयोः, लतासु' },
        { id: 'sr304', title: 'फल शब्द रूप (नपुंसक)!', content: '**फल (नपुंसकलिंग):**\n\n📌 प्र: फलम्, फले, फलानि\n📌 द्वि: फलम्, फले, फलानि\n📌 (प्रथमा = द्वितीया!)\n📌 ष: फलस्य, फलयोः, फलानाम्\n📌 स: फले, फलयोः, फलेषु\n\n⚠️ नपुंसक में प्र = द्वि!' },
        { id: 'sr305', title: '10 लकार याद करो!', content: '**लकार = Tense/Mood:**\n\n⏰ **काल:**\n- लट् = Present\n- लृट् = Future\n- लङ् = Past\n\n📢 **आज्ञा:**\n- लोट् = Imperative\n\n💭 **संभावना:**\n- विधिलिङ् = Should/Would\n\n🎯 Main 5 याद करो!' },
        { id: 'sr306', title: 'पठ् धातु Master!', content: '**पठ् = To Read:**\n\n| लकार | रूप |\n|-------|------|\n| लट् | पठति |\n| लृट् | पठिष्यति |\n| लङ् | अपठत् |\n| लोट् | पठतु |\n| विधि | पठेत् |\n\n📚 Most common धातु!' },
        { id: 'sr307', title: 'गम् धातु Special!', content: '**गम् = To Go:**\n\n⚠️ गम् → गच्छ (विशेष!)\n\n| पुरुष | रूप |\n|-------|------|\n| प्रथम | गच्छति |\n| मध्यम | गच्छसि |\n| उत्तम | गच्छामि |\n\n🚶 Remember: गम् becomes गच्छ!' },
        { id: 'sr308', title: 'दृश् धातु Special!', content: '**दृश् = To See:**\n\n⚠️ दृश् → पश्य (विशेष!)\n\n| पुरुष | रूप |\n|-------|------|\n| प्रथम | पश्यति |\n| मध्यम | पश्यसि |\n| उत्तम | पश्यामि |\n\n👀 Remember: दृश् becomes पश्य!' },
        { id: 'sr309', title: '3 पुरुष = 3 Persons!', content: '**पुरुष:**\n\n1️⃣ **प्रथम** = 3rd Person\n   सः/सा (He/She)\n   ति/तः/न्ति\n\n2️⃣ **मध्यम** = 2nd Person\n   त्वम् (You)\n   सि/थः/थ\n\n3️⃣ **उत्तम** = 1st Person\n   अहम् (I)\n   मि/वः/मः' },
        { id: 'sr310', title: '3 वचन = Singular/Dual/Plural!', content: '**वचन:**\n\n1️⃣ **एकवचन** = Singular (1)\n   रामः, पठति\n\n2️⃣ **द्विवचन** = Dual (2)\n   रामौ, पठतः\n\n3️⃣ **बहुवचन** = Plural (3+)\n   रामाः, पठन्ति\n\n⚠️ संस्कृत में Dual भी है!' },
        { id: 'sr311', title: 'ति-तः-न्ति Formula!', content: '**प्रथम पुरुष Endings:**\n\n| वचन | लट् | लृट् | लङ् |\n|------|-----|------|-----|\n| एक | ति | ष्यति | त् |\n| द्वि | तः | ष्यतः | ताम् |\n| बहु | न्ति | ष्यन्ति | न् |\n\n🎯 Pattern याद करो!' },
        { id: 'sr312', title: 'सि-थः-थ Formula!', content: '**मध्यम पुरुष Endings:**\n\n| वचन | लट् |\n|------|-----|\n| एक | सि |\n| द्वि | थः |\n| बहु | थ |\n\n**Example:**\n- पठसि (तू पढ़ता है)\n- पठथः (तुम दो पढ़ते हो)\n- पठथ (तुम सब पढ़ते हो)' },
        { id: 'sr313', title: 'मि-वः-मः Formula!', content: '**उत्तम पुरुष Endings:**\n\n| वचन | लट् |\n|------|-----|\n| एक | मि |\n| द्वि | वः |\n| बहु | मः |\n\n**Example:**\n- पठामि (मैं पढ़ता हूँ)\n- पठावः (हम दो पढ़ते हैं)\n- पठामः (हम सब पढ़ते हैं)' },
        { id: 'sr314', title: 'भूतकाल = अ + धातु + त्!', content: '**लङ् लकार Formula:**\n\n🔤 **अ** + धातु + **त्/ः/म्**\n\n**Example:**\n- पठ् → अपठत् (He read)\n- गम् → अगच्छत् (He went)\n- लिख् → अलिखत् (He wrote)\n\n⏪ Past tense = अ prefix!' },
        { id: 'sr315', title: 'भविष्यत् = धातु + इष्य!', content: '**लृट् लकार Formula:**\n\n🔤 धातु + **इष्य** + ति/सि/मि\n\n**Example:**\n- पठ् → पठिष्यति (He will read)\n- गम् → गमिष्यति (He will go)\n- कृ → करिष्यति (He will do)\n\n⏩ Future = इष्य suffix!' },
        { id: 'sr316', title: 'आज्ञा = तु/हि!', content: '**लोट् लकार:**\n\n| पुरुष | एक |\n|-------|-----|\n| प्रथम | पठतु (वह पढ़े) |\n| मध्यम | पठ (तू पढ़) |\n\n📢 Commands:\n- गच्छतु (Let him go)\n- गच्छ (Go!)\n- पठ (Read!)' },
        { id: 'sr317', title: 'चाहिए = एत्!', content: '**विधिलिङ् लकार:**\n\n| पुरुष | एक |\n|-------|-----|\n| प्रथम | पठेत् |\n| मध्यम | पठेः |\n| उत्तम | पठेयम् |\n\n💭 Should/Would:\n- सः पठेत् (He should read)\n- त्वं पठेः (You should read)' },
        { id: 'sr318', title: 'अस् vs भू Difference!', content: '**दोनों = To Be:**\n\n📌 **अस्:**\n- अस्ति, स्तः, सन्ति\n- Static state\n\n📌 **भू:**\n- भवति, भवतः, भवन्ति\n- Becoming/Change\n\n🎯 अस्ति = is (permanent)\n🎯 भवति = becomes (change)' },
        { id: 'sr319', title: 'कृ धातु Special!', content: '**कृ = To Do:**\n\n⚠️ Irregular forms!\n\n| पुरुष | लट् |\n|-------|------|\n| प्र-एक | करोति |\n| प्र-बहु | कुर्वन्ति |\n| म-एक | करोषि |\n| उ-एक | करोमि |\n\n✋ करोति, कुर्वन्ति याद करो!' },
        { id: 'sr320', title: 'Common धातु List!', content: '**Exam में आने वाली धातु:**\n\n| धातु | अर्थ | लट् |\n|------|------|-----|\n| पठ् | पढ़ना | पठति |\n| गम् | जाना | गच्छति |\n| कृ | करना | करोति |\n| दृश् | देखना | पश्यति |\n| श्रु | सुनना | शृणोति |\n| वद् | बोलना | वदति |' },
        { id: 'sr321', title: 'विभक्ति प्रयोग!', content: '**कौन सी विभक्ति कब:**\n\n| शब्द | विभक्ति |\n|------|----------|\n| को | द्वितीया |\n| से (साधन) | तृतीया |\n| के लिए | चतुर्थी |\n| से (अलग) | पंचमी |\n| का/की/के | षष्ठी |\n| में/पर | सप्तमी |' },
        { id: 'sr322', title: 'तृतीया vs पंचमी!', content: '**दोनों में "से":**\n\n📌 **तृतीया** = By/With (साधन)\n- रामेण सह (राम के साथ)\n- लेखन्या लिखति (कलम से)\n\n📌 **पंचमी** = From (अलगाव)\n- गृहात् आगच्छति (घर से आता है)\n- वृक्षात् पतति (पेड़ से गिरता है)' },
        { id: 'sr323', title: 'षष्ठी = का/की/के!', content: '**षष्ठी विभक्ति:**\n\n📌 संबंध बताती है (Possession)\n\n**Example:**\n- रामस्य पुस्तकम् (राम की पुस्तक)\n- लतायाः पुष्पम् (लता का फूल)\n- फलस्य रसः (फल का रस)\n\n🔗 \'s या of के लिए!' },
        { id: 'sr324', title: 'सप्तमी = में/पर!', content: '**सप्तमी विभक्ति:**\n\n📌 स्थान बताती है (Location)\n\n**Example:**\n- रामे विश्वासः (राम में विश्वास)\n- गृहे तिष्ठति (घर में रहता है)\n- वृक्षे फलानि (पेड़ पर फल)\n\n📍 In/On/At के लिए!' },
        { id: 'sr325', title: 'नदी शब्द रूप!', content: '**नदी (ईकारान्त स्त्री):**\n\n📌 प्र: नदी, नद्यौ, नद्यः\n📌 द्वि: नदीम्, नद्यौ, नदीः\n📌 तृ: नद्या, नदीभ्याम्, नदीभिः\n📌 ष: नद्याः, नद्योः, नदीनाम्\n\n⚠️ ई → य (बहुवचन में)' },
        { id: 'sr326', title: 'धातु रूप Exam Pattern!', content: '**परीक्षा में पूछा जाता है:**\n\n1. धातु दी → रूप लिखो\n2. रूप दिया → धातु बताओ\n3. लकार बताओ\n4. पुरुष/वचन बताओ\n\n🎯 पठ्, गम्, कृ, भू, अस्\nये 5 धातु जरूर याद करो!' },
        { id: 'sr327', title: 'शब्द रूप Exam Pattern!', content: '**परीक्षा में पूछा जाता है:**\n\n1. शब्द + विभक्ति → रूप\n2. रूप दिया → विभक्ति बताओ\n3. वचन बताओ\n4. लिंग बताओ\n\n🎯 राम, लता, फल, नदी\nये 4 शब्द जरूर याद करो!' },
        { id: 'sr328', title: 'Quick Revision - विभक्ति!', content: '**7 विभक्ति = 7 Questions:**\n\n1️⃣ कः? (Who?) = प्रथमा\n2️⃣ कम्? (Whom?) = द्वितीया\n3️⃣ केन? (By?) = तृतीया\n4️⃣ कस्मै? (For?) = चतुर्थी\n5️⃣ कस्मात्? (From?) = पंचमी\n6️⃣ कस्य? (Whose?) = षष्ठी\n7️⃣ कस्मिन्? (In?) = सप्तमी' },
        { id: 'sr329', title: 'Quick Revision - लकार!', content: '**5 Main लकार:**\n\n⏰ लट् = अभी (Present)\n⏩ लृट् = बाद में (Future)\n⏪ लङ् = पहले (Past)\n📢 लोट् = करो! (Command)\n💭 विधि = चाहिए (Should)\n\n🎯 ये 5 सबसे important!' },
        { id: 'sr330', title: 'शब्द-धातु = Sure Marks!', content: '**Scoring Tips:**\n\n✅ 4-5 शब्द रूप याद करो\n✅ 5-6 धातु रूप याद करो\n✅ विभक्ति पहचानो\n✅ लकार पहचानो\n✅ पुरुष-वचन पहचानो\n\n🎯 Grammar = 6-8 marks easy!\n📝 Tables बनाकर याद करो!' }
      ],
      longAnswers: [
        {
          id: 'sl21',
          question: 'शब्द रूपावली - राम, लता, फल, नदी',
          answer: `# शब्द रूपावली

## 1. राम शब्द (पुल्लिंग अकारान्त)

| विभक्ति | एकवचन | द्विवचन | बहुवचन |
|---------|--------|---------|--------|
| प्रथमा | रामः | रामौ | रामाः |
| द्वितीया | रामम् | रामौ | रामान् |
| तृतीया | रामेण | रामाभ्याम् | रामैः |
| चतुर्थी | रामाय | रामाभ्याम् | रामेभ्यः |
| पंचमी | रामात् | रामाभ्याम् | रामेभ्यः |
| षष्ठी | रामस्य | रामयोः | रामाणाम् |
| सप्तमी | रामे | रामयोः | रामेषु |
| संबोधन | हे राम! | हे रामौ! | हे रामाः! |

---

## 2. लता शब्द (स्त्रीलिंग आकारान्त)

| विभक्ति | एकवचन | द्विवचन | बहुवचन |
|---------|--------|---------|--------|
| प्रथमा | लता | लते | लताः |
| द्वितीया | लताम् | लते | लताः |
| तृतीया | लतया | लताभ्याम् | लताभिः |
| चतुर्थी | लतायै | लताभ्याम् | लताभ्यः |
| पंचमी | लतायाः | लताभ्याम् | लताभ्यः |
| षष्ठी | लतायाः | लतयोः | लतानाम् |
| सप्तमी | लतायाम् | लतयोः | लतासु |

---

## 3. फल शब्द (नपुंसकलिंग)

| विभक्ति | एकवचन | द्विवचन | बहुवचन |
|---------|--------|---------|--------|
| प्रथमा | फलम् | फले | फलानि |
| द्वितीया | फलम् | फले | फलानि |
| तृतीया | फलेन | फलाभ्याम् | फलैः |
| षष्ठी | फलस्य | फलयोः | फलानाम् |
| सप्तमी | फले | फलयोः | फलेषु |

**Note:** नपुंसकलिंग में प्रथमा = द्वितीया

---

## 4. नदी शब्द (ईकारान्त स्त्रीलिंग)

| विभक्ति | एकवचन | द्विवचन | बहुवचन |
|---------|--------|---------|--------|
| प्रथमा | नदी | नद्यौ | नद्यः |
| द्वितीया | नदीम् | नद्यौ | नदीः |
| तृतीया | नद्या | नदीभ्याम् | नदीभिः |
| षष्ठी | नद्याः | नद्योः | नदीनाम् |
| सप्तमी | नद्याम् | नद्योः | नदीषु |

**Exam Tip:** ये 4 शब्द रूप याद करो = Full marks!`
        },
        {
          id: 'sl22',
          question: 'धातु रूपावली - पठ्, गम्, कृ, भू, अस्',
          answer: `# धातु रूपावली

## 1. पठ् धातु (पढ़ना)

### लट् लकार (वर्तमान)
| पुरुष | एकवचन | द्विवचन | बहुवचन |
|-------|--------|---------|--------|
| प्रथम | पठति | पठतः | पठन्ति |
| मध्यम | पठसि | पठथः | पठथ |
| उत्तम | पठामि | पठावः | पठामः |

### लृट् लकार (भविष्यत्)
| पुरुष | एकवचन |
|-------|--------|
| प्रथम | पठिष्यति |
| मध्यम | पठिष्यसि |
| उत्तम | पठिष्यामि |

### लङ् लकार (भूत)
| पुरुष | एकवचन |
|-------|--------|
| प्रथम | अपठत् |
| मध्यम | अपठः |
| उत्तम | अपठम् |

---

## 2. गम् धातु (जाना) - गच्छ

### लट् लकार
| पुरुष | एकवचन | द्विवचन | बहुवचन |
|-------|--------|---------|--------|
| प्रथम | गच्छति | गच्छतः | गच्छन्ति |
| मध्यम | गच्छसि | गच्छथः | गच्छथ |
| उत्तम | गच्छामि | गच्छावः | गच्छामः |

---

## 3. कृ धातु (करना)

### लट् लकार
| पुरुष | एकवचन | द्विवचन | बहुवचन |
|-------|--------|---------|--------|
| प्रथम | करोति | कुरुतः | कुर्वन्ति |
| मध्यम | करोषि | कुरुथः | कुरुथ |
| उत्तम | करोमि | कुर्वः | कुर्मः |

---

## 4. भू धातु (होना)

### लट् लकार
| पुरुष | एकवचन | द्विवचन | बहुवचन |
|-------|--------|---------|--------|
| प्रथम | भवति | भवतः | भवन्ति |
| मध्यम | भवसि | भवथः | भवथ |
| उत्तम | भवामि | भवावः | भवामः |

---

## 5. अस् धातु (होना)

### लट् लकार
| पुरुष | एकवचन | द्विवचन | बहुवचन |
|-------|--------|---------|--------|
| प्रथम | अस्ति | स्तः | सन्ति |
| मध्यम | असि | स्थः | स्थ |
| उत्तम | अस्मि | स्वः | स्मः |

---

## लकार सारांश

| धातु | लट् | लृट् | लङ् | लोट् | विधि |
|------|-----|------|-----|------|------|
| पठ् | पठति | पठिष्यति | अपठत् | पठतु | पठेत् |
| गम् | गच्छति | गमिष्यति | अगच्छत् | गच्छतु | गच्छेत् |
| कृ | करोति | करिष्यति | अकरोत् | करोतु | कुर्यात् |

**Exam Tip:** प्रथम पुरुष एकवचन सबसे important!`
        }
      ]
    },
    {
      id: 'sanskrit-ch12',
      name: 'परीक्षा अभ्यास (Exam Practice)',
      description: 'Model Questions, Important Topics, Last Minute Revision, Exam Strategy',
      flashcards: [
        // Flashcards sf331-sf360 (30 flashcards)
        { id: 'sf331', front: 'संस्कृत HSC परीक्षा का Pattern क्या है?', back: '**HSC Sanskrit Paper Pattern:**\n\n**कुल अंक:** 80 marks\n**समय:** 3 घंटे\n\n**Section-wise:**\n- गद्य (Prose): 9 marks\n- पद्य (Poetry): 8 marks\n- व्याकरण (Grammar): 16 marks\n- लेखन (Writing): 16 marks\n- अपठित (Unseen): 4 marks\n- नाटक (Drama): 8 marks\n- साहित्य (Literature): 6 marks\n- सुगम संस्कृतम्: 6 marks' },
        { id: 'sf332', front: 'परीक्षा में Time Management कैसे करें?', back: '**Time Management:**\n\n⏱️ **3 घंटे = 180 minutes**\n\n| Section | Time | Marks |\n|---------|------|-------|\n| गद्य | 20 min | 9 |\n| पद्य | 15 min | 8 |\n| व्याकरण | 30 min | 16 |\n| लेखन | 40 min | 16 |\n| अपठित | 10 min | 4 |\n| नाटक | 15 min | 8 |\n| अन्य | 20 min | 13 |\n| Revision | 30 min | - |' },
        { id: 'sf333', front: 'गद्य Section में क्या-क्या आता है?', back: '**गद्य (Prose) - 9 Marks:**\n\n1. **गद्यांश पर प्रश्न** (4-5 marks)\n   - अर्थ लिखो\n   - प्रश्नोत्तर\n\n2. **व्याकरण प्रश्न** (2-3 marks)\n   - संधि/समास\n   - कर्ता/कर्म\n\n3. **भाव/शीर्षक** (1-2 marks)\n\n**Important:** पाठ पूरा पढ़ो!' },
        { id: 'sf334', front: 'पद्य Section में क्या-क्या आता है?', back: '**पद्य (Poetry) - 8 Marks:**\n\n1. **पद्यांश का अर्थ** (3-4 marks)\n   - श्लोक का हिंदी अर्थ\n\n2. **प्रश्नोत्तर** (2-3 marks)\n   - कवि, ग्रंथ\n   - भाव\n\n3. **व्याकरण** (1-2 marks)\n   - संधि/समास\n   - अलंकार\n\n**Tip:** श्लोक याद करो!' },
        { id: 'sf335', front: 'व्याकरण Section का Breakdown?', back: '**व्याकरण - 16 Marks:**\n\n| Topic | Marks |\n|-------|-------|\n| संधि | 3 |\n| समास | 3 |\n| कृदन्त | 2 |\n| शब्द रूप | 2 |\n| धातु रूप | 2 |\n| विभक्ति | 2 |\n| परिवर्तन | 2 |\n\n**Tip:** Tables याद करो!' },
        { id: 'sf336', front: 'लेखन Section का Breakdown?', back: '**लेखन - 16 Marks:**\n\n| Topic | Marks |\n|-------|-------|\n| पत्र लेखन | 5 |\n| निबंध | 5 |\n| अनुच्छेद | 3 |\n| कथा/संवाद | 3 |\n\n**Important Topics:**\n- औपचारिक पत्र (अवकाश, शिकायत)\n- निबंध (विद्या, पर्यावरण, स्वच्छता)' },
        { id: 'sf337', front: 'अपठित Section कैसे करें?', back: '**अपठित - 4 Marks:**\n\n**Strategy:**\n1. गद्यांश 2 बार पढ़ो\n2. प्रश्न समझो\n3. उत्तर खोजो\n4. पूर्ण वाक्य में लिखो\n\n**Common प्रश्न:**\n- कः/कुत्र/कदा/कथम्\n- शीर्षक दो\n- शब्दार्थ लिखो\n- विलोम/पर्याय\n\n⏱️ Time: 10 min max' },
        { id: 'sf338', front: 'Most Important संधि कौन सी हैं?', back: '**Important संधि:**\n\n**स्वर संधि:**\n1. दीर्घ: विद्या + आलयः = विद्यालयः\n2. गुण: देव + इन्द्रः = देवेन्द्रः\n3. वृद्धि: महा + ऐश्वर्यम् = महैश्वर्यम्\n\n**व्यंजन संधि:**\n4. जगत् + नाथः = जगन्नाथः\n\n**विसर्ग संधि:**\n5. निः + आशा = निराशा\n\n🎯 ये 5 types जरूर!' },
        { id: 'sf339', front: 'Most Important समास कौन से हैं?', back: '**Important समास:**\n\n1. **तत्पुरुष:**\n   राजपुत्रः = राजा का पुत्र\n\n2. **कर्मधारय:**\n   नीलकमलम् = नीला कमल\n\n3. **द्विगु:**\n   त्रिलोकम् = तीन लोकों का समूह\n\n4. **द्वन्द्व:**\n   रामलक्ष्मणौ = राम और लक्ष्मण\n\n5. **बहुव्रीहि:**\n   पीताम्बरः = पीला वस्त्र जिसका' },
        { id: 'sf340', front: 'Important शब्द रूप कौन से याद करें?', back: '**Must Know शब्द रूप:**\n\n**पुल्लिंग:**\n- राम (अकारान्त)\n- हरि (इकारान्त)\n- साधु (उकारान्त)\n\n**स्त्रीलिंग:**\n- लता (आकारान्त)\n- नदी (ईकारान्त)\n- मति (इकारान्त)\n\n**नपुंसक:**\n- फल (अकारान्त)\n- वारि (इकारान्त)' },
        { id: 'sf341', front: 'Important धातु रूप कौन से याद करें?', back: '**Must Know धातु रूप:**\n\n**परस्मैपद:**\n1. पठ् (पढ़ना) - पठति\n2. गम् (जाना) - गच्छति\n3. कृ (करना) - करोति\n4. भू (होना) - भवति\n5. अस् (होना) - अस्ति\n\n**आत्मनेपद:**\n6. लभ् (पाना) - लभते\n7. सेव् (सेवा) - सेवते\n\n🎯 5 लकार में याद करो!' },
        { id: 'sf342', front: 'निबंध के Important Topics?', back: '**परीक्षा में आने वाले निबंध:**\n\n1. **विद्यायाः महत्त्वम्** ⭐\n2. **पर्यावरणम्** ⭐\n3. **स्वच्छता** ⭐\n4. **जलसंरक्षणम्**\n5. **वृक्षारोपणम्**\n6. **योगस्य महत्त्वम्**\n7. **राष्ट्रभक्तिः**\n8. **गुरोः महत्त्वम्**\n\n⭐ = Most likely!' },
        { id: 'sf343', front: 'पत्र लेखन के Important Topics?', back: '**परीक्षा में आने वाले पत्र:**\n\n**औपचारिक:**\n1. अवकाश हेतु प्रार्थना ⭐\n2. प्रमाण पत्र हेतु\n3. शिकायत पत्र\n4. पुस्तक हेतु\n\n**अनौपचारिक:**\n5. मित्र को पत्र\n6. माता-पिता को पत्र\n7. बधाई पत्र\n\n⭐ = Most common!' },
        { id: 'sf344', front: 'परीक्षा में श्लोक पूछे जाते हैं - कौन से?', back: '**Most Important श्लोक:**\n\n1. विद्या ददाति विनयम् ⭐\n2. सत्यमेव जयते\n3. वसुधैव कुटुम्बकम्\n4. कर्मण्येवाधिकारस्ते\n5. गुरुर्ब्रह्मा गुरुर्विष्णुः\n6. परोपकाराय फलन्ति वृक्षाः\n7. उद्यमेन हि सिध्यन्ति\n8. जननी जन्मभूमिश्च\n\n📝 अर्थ + स्रोत याद करो!' },
        { id: 'sf345', front: 'Last Minute Revision - व्याकरण Formulas?', back: '**Quick Formulas:**\n\n**संधि:**\n- अ + अ = आ (दीर्घ)\n- अ + इ = ए (गुण)\n- अ + उ = ओ (गुण)\n\n**लकार:**\n- लट् = Present (ति)\n- लृट् = Future (ष्यति)\n- लङ् = Past (अ___त्)\n\n**विभक्ति:**\n- प्रथमा = कर्ता (ः/औ/ाः)\n- द्वितीया = कर्म (म्/औ/ान्)' },
        { id: 'sf346', front: 'परीक्षा Hall में क्या करें?', back: '**Exam Day Tips:**\n\n✅ **Before Exam:**\n- Question paper पूरा पढ़ो\n- Easy questions पहले\n- Time divide करो\n\n✅ **During Exam:**\n- Clean handwriting\n- पूर्ण वाक्य में उत्तर\n- Margin छोड़ो\n\n✅ **After Writing:**\n- Revision करो\n- Spelling check\n- Number check' },
        { id: 'sf347', front: 'Common Mistakes to Avoid?', back: '**ये गलतियाँ मत करो:**\n\n❌ **व्याकरण में:**\n- विसर्ग (ः) भूलना\n- अनुस्वार (ं) गलत\n- हलन्त (्) missing\n\n❌ **लेखन में:**\n- अधूरा पत्र format\n- निबंध में heading नहीं\n\n❌ **General:**\n- Question number गलत\n- Attempt करना भूलना\n- Time waste' },
        { id: 'sf348', front: 'Marks कैसे बढ़ाएं?', back: '**Scoring Tips:**\n\n📈 **Extra Marks के लिए:**\n\n1. **श्लोक लिखो** (निबंध में)\n2. **उदाहरण दो** (व्याकरण में)\n3. **साफ लिखो**\n4. **Heading दो**\n5. **Points में लिखो**\n6. **Format follow करो** (पत्र)\n\n🎯 Presentation matters!' },
        { id: 'sf349', front: 'अनुच्छेद के Important Topics?', back: '**परीक्षा में आने वाले अनुच्छेद:**\n\n1. **मम विद्यालयः** ⭐\n2. **मम ग्रामः/नगरम्**\n3. **होलिकोत्सवः** ⭐\n4. **दीपावलिः** ⭐\n5. **मम प्रिय ग्रन्थः**\n6. **मम प्रिय शिक्षकः**\n7. **वसन्त ऋतुः**\n8. **स्वतन्त्रता दिवसः**\n\n📝 60-80 शब्द में लिखो!' },
        { id: 'sf350', front: 'कथा/संवाद के Topics?', back: '**Important Topics:**\n\n**कथा:**\n1. नीति कथा (पंचतंत्र से)\n2. सत्य की विजय\n3. परोपकार की कथा\n\n**संवाद:**\n1. गुरु-शिष्य संवाद ⭐\n2. माता-पुत्र संवाद\n3. दो मित्रों का संवाद ⭐\n4. डॉक्टर-रोगी संवाद\n\n📝 4-6 dialogues लिखो!' },
        { id: 'sf351', front: 'विभक्ति पहचान के Tricks?', back: '**विभक्ति Identification:**\n\n| Ending | विभक्ति |\n|--------|----------|\n| ः/औ/ाः | प्रथमा |\n| म्/औ/ान् | द्वितीया |\n| एण/भ्याम्/ैः | तृतीया |\n| स्य/योः/ाणाम् | षष्ठी |\n| ए/योः/ेषु | सप्तमी |\n\n🎯 Ending देखकर पहचानो!' },
        { id: 'sf352', front: 'लकार पहचान के Tricks?', back: '**लकार Identification:**\n\n| Feature | लकार |\n|---------|-------|\n| ति/न्ति (normal) | लट् |\n| ष्यति | लृट् |\n| अ___त् | लङ् |\n| तु/न्तु | लोट् |\n| एत्/एयुः | विधिलिङ् |\n\n🎯 Pattern देखकर पहचानो!' },
        { id: 'sf353', front: 'परीक्षा से एक दिन पहले क्या पढ़ें?', back: '**Last Day Revision:**\n\n✅ **Must Revise:**\n1. संधि-समास tables\n2. शब्द रूप (राम, लता, फल)\n3. धातु रूप (पठ्, गम्, कृ)\n4. 5-6 श्लोक with अर्थ\n5. पत्र format\n6. निबंध outline\n\n❌ **Don\'t:**\n- New topics मत पढ़ो\n- Panic मत करो\n- Late night मत पढ़ो' },
        { id: 'sf354', front: 'गद्य के Important पाठ?', back: '**HSC गद्य पाठ:**\n\n(Maharashtra Board)\n1. संस्कृतभाषायाः महत्त्वम्\n2. भारतमाता\n3. स्वामी विवेकानन्दः\n4. पर्यावरणम्\n\n**Focus:**\n- शब्दार्थ\n- प्रश्नोत्तर\n- व्याकरण\n- भाव\n\n📖 Notes बनाकर पढ़ो!' },
        { id: 'sf355', front: 'पद्य के Important पाठ?', back: '**HSC पद्य पाठ:**\n\n(Maharashtra Board)\n1. सुभाषितानि\n2. गीता श्लोक\n3. वन्दे मातरम्\n4. भर्तृहरि नीतिशतक\n\n**Focus:**\n- श्लोक याद करो\n- अर्थ समझो\n- कवि/ग्रंथ याद करो\n\n🎵 गाकर याद करो!' },
        { id: 'sf356', front: 'नाटक Section कैसे करें?', back: '**नाटक - 8 Marks:**\n\n**Approach:**\n1. पात्र परिचय\n2. कथानक समझो\n3. संवाद याद करो\n4. भाव/शिक्षा\n\n**प्रश्न Types:**\n- अर्थ/भाव लिखो\n- पात्र चरित्र\n- कथानक\n- व्याकरण\n\n📜 Dialogue style में लिखो!' },
        { id: 'sf357', front: 'साहित्य परिचय में क्या पढ़ें?', back: '**साहित्य परिचय:**\n\n**याद करो:**\n1. **वेद** - ऋग्, यजुः, साम, अथर्व\n2. **उपनिषद्** - ईश, केन, कठ\n3. **महाकाव्य** - रामायण, महाभारत\n4. **कवि** - कालिदास, भवभूति, भास\n5. **नाटक** - अभिज्ञानशाकुन्तलम्\n\n📚 Basic facts जरूर!' },
        { id: 'sf358', front: 'परीक्षा में 80+ कैसे लाएं?', back: '**80+ Marks Strategy:**\n\n🏆 **Formula:**\n\n1. **व्याकरण = 16/16**\n   Tables याद करो\n\n2. **लेखन = 14/16**\n   Format + Content\n\n3. **गद्य-पद्य = 15/17**\n   पाठ पढ़ो\n\n4. **अपठित = 4/4**\n   Practice करो\n\n5. **बाकी = 25-30**\n   Regular study\n\n📈 Total = 74-80+ possible!' },
        { id: 'sf359', front: 'Model Paper कैसे solve करें?', back: '**Model Paper Practice:**\n\n📝 **Steps:**\n\n1. **पहले पूरा पढ़ो** (5 min)\n2. **Easy questions** पहले करो\n3. **Time track** करो\n4. **Revision** के लिए 30 min बचाओ\n5. **Answer key** से check करो\n\n🎯 **Practice:**\n- Weekly 1 paper solve करो\n- Mistakes note करो\n- Improve करते जाओ' },
        { id: 'sf360', front: 'संस्कृत में Pass कैसे हों (Minimum)?', back: '**Passing Strategy (35 marks):**\n\n✅ **Sure Shot Marks:**\n\n| Section | Target |\n|---------|--------|\n| अपठित | 3/4 |\n| व्याकरण | 10/16 |\n| लेखन | 10/16 |\n| बाकी | 12/44 |\n| **Total** | **35** |\n\n🎯 **Focus:**\n- व्याकरण tables\n- पत्र format\n- Basic श्लोक\n\n💪 Easy to pass if prepared!' }
      ],
      mcqs: [
        // MCQs sm331-sm360 (30 MCQs)
        { id: 'sm331', question: 'HSC संस्कृत परीक्षा कितने अंकों की होती है?', options: ['60', '70', '80', '100'], answer: '80' },
        { id: 'sm332', question: 'व्याकरण Section में कितने अंक होते हैं?', options: ['10', '12', '16', '20'], answer: '16' },
        { id: 'sm333', question: 'लेखन Section में कितने अंक होते हैं?', options: ['10', '12', '16', '20'], answer: '16' },
        { id: 'sm334', question: 'अपठित गद्यांश में कितने अंक होते हैं?', options: ['2', '3', '4', '5'], answer: '4' },
        { id: 'sm335', question: 'निबंध में कितने अंक होते हैं?', options: ['3', '4', '5', '6'], answer: '5' },
        { id: 'sm336', question: 'पत्र लेखन में कितने अंक होते हैं?', options: ['3', '4', '5', '6'], answer: '5' },
        { id: 'sm337', question: 'गद्य Section में कितने अंक होते हैं?', options: ['6', '8', '9', '10'], answer: '9' },
        { id: 'sm338', question: 'पद्य Section में कितने अंक होते हैं?', options: ['6', '8', '9', '10'], answer: '8' },
        { id: 'sm339', question: 'परीक्षा का समय कितना होता है?', options: ['2 घंटे', '2.5 घंटे', '3 घंटे', '3.5 घंटे'], answer: '3 घंटे' },
        { id: 'sm340', question: 'संधि में कितने अंक होते हैं (approx)?', options: ['2', '3', '4', '5'], answer: '3' },
        { id: 'sm341', question: 'समास में कितने अंक होते हैं (approx)?', options: ['2', '3', '4', '5'], answer: '3' },
        { id: 'sm342', question: 'नाटक Section में कितने अंक होते हैं?', options: ['6', '8', '10', '12'], answer: '8' },
        { id: 'sm343', question: 'साहित्य परिचय में कितने अंक होते हैं?', options: ['4', '5', '6', '8'], answer: '6' },
        { id: 'sm344', question: 'अनुच्छेद में कितने शब्द लिखने चाहिए?', options: ['40-50', '50-60', '60-80', '100-120'], answer: '60-80' },
        { id: 'sm345', question: 'निबंध में कितने शब्द लिखने चाहिए?', options: ['100-150', '150-200', '200-250', '250-300'], answer: '200-250' },
        { id: 'sm346', question: 'Passing marks कितने हैं?', options: ['30', '33', '35', '40'], answer: '35' },
        { id: 'sm347', question: 'Distinction के लिए कितने marks चाहिए?', options: ['60', '65', '70', '75'], answer: '75' },
        { id: 'sm348', question: 'First Class के लिए कितने marks चाहिए?', options: ['45', '50', '55', '60'], answer: '60' },
        { id: 'sm349', question: 'संवाद में कम से कम कितने dialogues होने चाहिए?', options: ['2', '3', '4', '6'], answer: '4' },
        { id: 'sm350', question: 'पत्र में कितने भाग होते हैं?', options: ['5', '6', '7', '8'], answer: '7' },
        { id: 'sm351', question: 'निबंध में कितने भाग होते हैं?', options: ['2', '3', '4', '5'], answer: '3' },
        { id: 'sm352', question: '"विद्या ददाति विनयम्" किस निबंध में लिखेंगे?', options: ['पर्यावरण', 'विद्या का महत्व', 'स्वच्छता', 'योग'], answer: 'विद्या का महत्व' },
        { id: 'sm353', question: '"वृक्षो रक्षति रक्षितः" किस निबंध में?', options: ['विद्या', 'पर्यावरण/वृक्षारोपण', 'स्वच्छता', 'राष्ट्रभक्ति'], answer: 'पर्यावरण/वृक्षारोपण' },
        { id: 'sm354', question: 'भारत का राष्ट्रीय आदर्श वाक्य कौन सा है?', options: ['वसुधैव कुटुम्बकम्', 'सत्यमेव जयते', 'अहिंसा परमो धर्मः', 'जय हिंद'], answer: 'सत्यमेव जयते' },
        { id: 'sm355', question: 'कालिदास का प्रसिद्ध नाटक कौन सा है?', options: ['मृच्छकटिकम्', 'अभिज्ञानशाकुन्तलम्', 'मुद्राराक्षसम्', 'स्वप्नवासवदत्तम्'], answer: 'अभिज्ञानशाकुन्तलम्' },
        { id: 'sm356', question: 'रामायण के रचयिता कौन हैं?', options: ['वेदव्यास', 'वाल्मीकि', 'कालिदास', 'भवभूति'], answer: 'वाल्मीकि' },
        { id: 'sm357', question: 'महाभारत के रचयिता कौन हैं?', options: ['वाल्मीकि', 'वेदव्यास', 'कालिदास', 'तुलसीदास'], answer: 'वेदव्यास' },
        { id: 'sm358', question: 'वेद कितने हैं?', options: ['2', '3', '4', '5'], answer: '4' },
        { id: 'sm359', question: '"योगश्चित्तवृत्तिनिरोधः" किसने कहा?', options: ['व्यास', 'पतंजलि', 'शंकराचार्य', 'वाल्मीकि'], answer: 'पतंजलि' },
        { id: 'sm360', question: 'सबसे आसान marks किस section में मिलते हैं?', options: ['गद्य', 'पद्य', 'व्याकरण', 'अपठित'], answer: 'अपठित' }
      ],
      reels: [
        // Reels sr331-sr360 (30 reels)
        { id: 'sr331', title: 'HSC Sanskrit = 80 Marks!', content: '**Paper Pattern:**\n\n📝 Total: 80 marks\n⏱️ Time: 3 hours\n\n**Sections:**\n- गद्य: 9 marks\n- पद्य: 8 marks\n- व्याकरण: 16 marks\n- लेखन: 16 marks\n- अपठित: 4 marks\n- नाटक: 8 marks\n- अन्य: 19 marks\n\n🎯 Plan your time!' },
        { id: 'sr332', title: 'Time Management = Success!', content: '**3 घंटे = 180 min:**\n\n⏰ व्याकरण: 30 min\n⏰ लेखन: 40 min\n⏰ गद्य: 20 min\n⏰ पद्य: 15 min\n⏰ अन्य: 45 min\n⏰ Revision: 30 min\n\n🎯 Stick to time!\n⚠️ Don\'t waste on one Q!' },
        { id: 'sr333', title: 'Easy Marks = अपठित!', content: '**अपठित = 4 Easy Marks!**\n\n✅ No preparation needed\n✅ Answer is IN passage\n✅ Just read carefully\n✅ Write complete sentences\n\n🎯 Strategy:\n1. Read 2 times\n2. Find answers\n3. Write properly\n\n⏱️ 10 min = 4 marks!' },
        { id: 'sr334', title: 'व्याकरण = 16 Marks Gold!', content: '**व्याकरण Breakdown:**\n\n📊 संधि: 3 marks\n📊 समास: 3 marks\n📊 कृदन्त: 2 marks\n📊 शब्द रूप: 2 marks\n📊 धातु रूप: 2 marks\n📊 अन्य: 4 marks\n\n🎯 Tables याद = Full marks!\n📝 Practice daily!' },
        { id: 'sr335', title: 'लेखन = 16 Marks Easy!', content: '**लेखन Breakdown:**\n\n✍️ पत्र: 5 marks\n✍️ निबंध: 5 marks\n✍️ अनुच्छेद: 3 marks\n✍️ कथा/संवाद: 3 marks\n\n🎯 Format + Content = Full marks!\n\n⚠️ Format गलत = marks cut!' },
        { id: 'sr336', title: 'पत्र Format = 5 Sure Marks!', content: '**पत्र के 7 भाग:**\n\n1️⃣ प्रेषक का पता\n2️⃣ दिनांक\n3️⃣ प्राप्तकर्ता का पता\n4️⃣ विषय\n5️⃣ संबोधन\n6️⃣ विषय वस्तु\n7️⃣ समापन + हस्ताक्षर\n\n✅ All 7 = Full marks!' },
        { id: 'sr337', title: 'निबंध Structure!', content: '**निबंध के 3 भाग:**\n\n1️⃣ **प्रस्तावना** (Intro)\n   - विषय परिचय\n   - महत्व\n\n2️⃣ **विस्तार** (Body)\n   - 3-4 paragraphs\n   - Examples, श्लोक\n\n3️⃣ **उपसंहार** (Conclusion)\n   - सारांश\n   - संदेश' },
        { id: 'sr338', title: 'Important निबंध Topics!', content: '**Most Likely Topics:**\n\n⭐ विद्यायाः महत्त्वम्\n⭐ पर्यावरणम्\n⭐ स्वच्छता\n⭐ जलसंरक्षणम्\n⭐ योगस्य महत्त्वम्\n\n📝 इन 5 पर notes बनाओ!\n🎯 Outline + श्लोक = Full marks!' },
        { id: 'sr339', title: 'संधि Quick Revision!', content: '**Important संधि Types:**\n\n🔤 **दीर्घ:** अ+आ = आ\n🔤 **गुण:** अ+इ = ए\n🔤 **वृद्धि:** आ+ए = ऐ\n🔤 **यण:** इ+अ = य\n🔤 **अयादि:** ए+अ = अय\n\n📝 Examples याद करो!\n🎯 3 marks पक्के!' },
        { id: 'sr340', title: 'समास Quick Revision!', content: '**Important समास:**\n\n1️⃣ तत्पुरुष = का/के/को\n2️⃣ कर्मधारय = जैसा/वाला\n3️⃣ द्विगु = संख्या + समूह\n4️⃣ द्वन्द्व = और (दो चीजें)\n5️⃣ बहुव्रीहि = जिसका\n\n📝 विग्रह याद करो!\n🎯 3 marks पक्के!' },
        { id: 'sr341', title: 'शब्द रूप Must Know!', content: '**याद करने वाले शब्द:**\n\n👤 राम (पुल्लिंग)\n👩 लता (स्त्रीलिंग)\n📦 फल (नपुंसक)\n🌊 नदी (ईकारान्त)\n\n🎯 सब विभक्ति + वचन!\n📝 Tables बनाकर याद करो!' },
        { id: 'sr342', title: 'धातु रूप Must Know!', content: '**याद करने वाली धातु:**\n\n📖 पठ् = पढ़ना (पठति)\n🚶 गम् = जाना (गच्छति)\n✋ कृ = करना (करोति)\n🌱 भू = होना (भवति)\n⭐ अस् = होना (अस्ति)\n\n🎯 5 लकार में याद करो!' },
        { id: 'sr343', title: 'श्लोक = Bonus Marks!', content: '**निबंध में श्लोक डालो:**\n\n📚 विद्या: विद्या ददाति विनयम्\n🌳 पर्यावरण: वृक्षो रक्षति रक्षितः\n🧹 स्वच्छता: स्वच्छता परमो धर्मः\n🧘 योग: योगश्चित्तवृत्तिनिरोधः\n\n🎯 श्लोक = Extra marks!\n✨ Examiner impressed!' },
        { id: 'sr344', title: 'Common Mistakes!', content: '**ये गलतियाँ मत करो:**\n\n❌ विसर्ग (ः) भूलना\n❌ Format incomplete\n❌ Question number wrong\n❌ Word limit ignore\n❌ Spelling mistakes\n❌ Time waste\n\n✅ Double check everything!' },
        { id: 'sr345', title: 'Last Day Revision!', content: '**परीक्षा से 1 दिन पहले:**\n\n✅ **Revise:**\n- संधि-समास tables\n- शब्द-धातु रूप\n- 5-6 श्लोक\n- पत्र format\n\n❌ **Don\'t:**\n- New topics\n- Panic\n- Late night study\n\n😴 8 hours sleep = Better recall!' },
        { id: 'sr346', title: 'Exam Day Tips!', content: '**परीक्षा के दिन:**\n\n🌅 **Morning:**\n- Healthy breakfast\n- Reach early\n- All materials ready\n\n📝 **In Exam:**\n- Read paper fully\n- Easy questions first\n- Time track\n- Clean writing\n\n✅ **After:**\n- 30 min revision\n- Check numbers' },
        { id: 'sr347', title: '35 Marks = Pass!', content: '**Passing Strategy:**\n\n✅ अपठित: 3/4\n✅ व्याकरण: 10/16\n✅ लेखन: 10/16\n✅ बाकी: 12/44\n\n📊 Total: 35+ = Pass!\n\n🎯 Focus Areas:\n- Grammar tables\n- Letter format\n- Basic श्लोक\n\n💪 Easy if prepared!' },
        { id: 'sr348', title: '60 Marks = First Class!', content: '**First Class Strategy:**\n\n✅ अपठित: 4/4\n✅ व्याकरण: 14/16\n✅ लेखन: 14/16\n✅ गद्य-पद्य: 14/17\n✅ बाकी: 14/27\n\n📊 Total: 60+ = First Class!\n\n🎯 All sections matter!\n📝 Complete preparation!' },
        { id: 'sr349', title: '80 Marks = Topper!', content: '**Topper Strategy:**\n\n✅ व्याकरण: 16/16\n✅ लेखन: 15/16\n✅ अपठित: 4/4\n✅ गद्य-पद्य: 16/17\n✅ बाकी: 25/27\n\n📊 Total: 76-80!\n\n🎯 Perfect each section!\n📝 No silly mistakes!\n✨ Practice + Presentation!' },
        { id: 'sr350', title: 'अनुच्छेद Topics!', content: '**Important Topics:**\n\n🏫 मम विद्यालयः\n🏘️ मम ग्रामः\n🎨 होलिकोत्सवः\n🪔 दीपावलिः\n📚 मम प्रिय ग्रन्थः\n👨‍🏫 मम प्रिय शिक्षकः\n\n📝 60-80 शब्द\n🎯 Format: Intro-Body-End' },
        { id: 'sr351', title: 'संवाद Writing!', content: '**संवाद Format:**\n\nनाम: - वाक्य\nनाम: - वाक्य\n\n**Topics:**\n👨‍🏫 गुरु-शिष्य\n👨‍👩‍👦 माता-पुत्र\n👬 दो मित्र\n\n📝 4-6 dialogues\n🎯 Natural conversation!' },
        { id: 'sr352', title: 'विभक्ति Quick Test!', content: '**पहचानो:**\n\n❓ रामस्य = ?\n✅ षष्ठी\n\n❓ रामेण = ?\n✅ तृतीया\n\n❓ रामे = ?\n✅ सप्तमी\n\n❓ रामाय = ?\n✅ चतुर्थी\n\n🎯 Ending से पहचानो!' },
        { id: 'sr353', title: 'लकार Quick Test!', content: '**पहचानो:**\n\n❓ पठति = ?\n✅ लट् (Present)\n\n❓ अपठत् = ?\n✅ लङ् (Past)\n\n❓ पठिष्यति = ?\n✅ लृट् (Future)\n\n❓ पठतु = ?\n✅ लोट् (Command)\n\n🎯 Pattern से पहचानो!' },
        { id: 'sr354', title: 'साहित्य Quick Facts!', content: '**याद करो:**\n\n📖 वेद: 4 (ऋग्, यजुः, साम, अथर्व)\n📖 रामायण: वाल्मीकि\n📖 महाभारत: वेदव्यास\n📖 गीता: 18 अध्याय\n📖 कालिदास: शाकुन्तलम्\n\n🎯 1-2 marks sure!' },
        { id: 'sr355', title: 'Presentation Matters!', content: '**अच्छी Presentation:**\n\n✅ Clean handwriting\n✅ Proper margins\n✅ Headings underlined\n✅ Points numbered\n✅ Space between answers\n\n🎯 Good presentation = \n   Better impression = \n   More marks!' },
        { id: 'sr356', title: 'Question Paper Strategy!', content: '**Paper मिलने पर:**\n\n1️⃣ **5 min:** पूरा paper पढ़ो\n2️⃣ **Mark:** Easy questions\n3️⃣ **Start:** Easy से शुरू\n4️⃣ **Move:** Medium questions\n5️⃣ **Last:** Difficult questions\n6️⃣ **Revise:** 30 min बचाओ\n\n🎯 Smart approach = Better marks!' },
        { id: 'sr357', title: 'Don\'t Leave Blank!', content: '**कोई प्रश्न मत छोड़ो:**\n\n❌ Blank = 0 marks\n✅ Attempt = Possible marks\n\n🎯 **Strategy:**\n- कुछ भी लिखो\n- Related content\n- Partial answer\n- Formula/definition\n\n💡 Even 1 mark matters!' },
        { id: 'sr358', title: 'Word Limit = Important!', content: '**Word Limits:**\n\n📝 अनुच्छेद: 60-80 शब्द\n📝 निबंध: 200-250 शब्द\n📝 पत्र: 150-200 शब्द\n\n⚠️ Exceeding = Time waste\n⚠️ Too short = Marks cut\n\n🎯 Stay within limits!' },
        { id: 'sr359', title: 'Model Paper Practice!', content: '**Practice Plan:**\n\n📅 Weekly: 1 model paper\n⏱️ Time: 3 hours strict\n📝 Check: With answer key\n📊 Analyze: Weak areas\n🔄 Improve: Next paper\n\n🎯 10 papers = Confident!\n💯 Practice makes perfect!' },
        { id: 'sr360', title: 'संस्कृत = Easy Subject!', content: '**Final Message:**\n\n✅ संस्कृत = Scoring subject\n✅ Grammar = Sure marks\n✅ Writing = Format + Content\n✅ Regular practice = Success\n\n🎯 **Remember:**\n- Tables याद करो\n- Format follow करो\n- Clean writing\n- Time management\n\n💪 You can do it!\n🏆 All the best!' }
      ],
      longAnswers: [
        {
          id: 'sl23',
          question: 'HSC संस्कृत परीक्षा - पूर्ण मार्गदर्शिका',
          answer: `# HSC संस्कृत परीक्षा मार्गदर्शिका

## परीक्षा Pattern

**कुल अंक:** 80 marks
**समय:** 3 घंटे

### Section-wise Breakdown

| Section | Marks | Time (approx) |
|---------|-------|---------------|
| गद्य (Prose) | 9 | 20 min |
| पद्य (Poetry) | 8 | 15 min |
| व्याकरण (Grammar) | 16 | 30 min |
| लेखन (Writing) | 16 | 40 min |
| अपठित (Unseen) | 4 | 10 min |
| नाटक (Drama) | 8 | 15 min |
| साहित्य परिचय | 6 | 10 min |
| सुगम संस्कृतम् | 6 | 10 min |
| अन्य | 7 | 10 min |
| **Revision** | - | **30 min** |

---

## Section-wise Strategy

### 1. व्याकरण (16 marks) - Most Important!

**Topics:**
- संधि (3 marks)
- समास (3 marks)
- कृदन्त (2 marks)
- शब्द रूप (2 marks)
- धातु रूप (2 marks)
- विभक्ति (2 marks)
- परिवर्तन (2 marks)

**Strategy:** Tables याद करो = Full marks!

### 2. लेखन (16 marks) - Easy Marks!

| Topic | Marks | Key Point |
|-------|-------|-----------|
| पत्र | 5 | Format correct |
| निबंध | 5 | Structure + श्लोक |
| अनुच्छेद | 3 | 60-80 words |
| कथा/संवाद | 3 | 4-6 dialogues |

### 3. अपठित (4 marks) - Easiest!

- No preparation needed
- Answer is in passage
- Read carefully, write completely

---

## Scoring Guide

| Grade | Marks | How to Achieve |
|-------|-------|----------------|
| Pass | 35 | Basic preparation |
| Second Class | 45 | Average preparation |
| First Class | 60 | Good preparation |
| Distinction | 75 | Excellent preparation |

---

## Last Minute Tips

1. ✅ Revise grammar tables
2. ✅ Practice letter format
3. ✅ Memorize 5-6 श्लोक
4. ✅ Read one गद्य + पद्य पाठ
5. ✅ Sleep well before exam

**All the Best! 🎯**`
        },
        {
          id: 'sl24',
          question: 'Important Questions Bank - All Sections',
          answer: `# Important Questions Bank

## व्याकरण (Grammar)

### संधि
1. विद्यालयः = विद्या + आलयः (दीर्घ)
2. देवेन्द्रः = देव + इन्द्रः (गुण)
3. महोत्सवः = महा + उत्सवः (गुण)
4. नरेन्द्रः = नर + इन्द्रः (गुण)
5. सूर्योदयः = सूर्य + उदयः (गुण)

### समास
1. राजपुत्रः = राजा का पुत्र (तत्पुरुष)
2. नीलकमलम् = नीला कमल (कर्मधारय)
3. त्रिलोकम् = तीन लोकों का समूह (द्विगु)
4. रामलक्ष्मणौ = राम और लक्ष्मण (द्वन्द्व)
5. पीताम्बरः = पीला वस्त्र जिसका (बहुव्रीहि)

---

## लेखन (Writing)

### पत्र Topics
1. अवकाश हेतु प्रधानाचार्य को पत्र
2. प्रमाण पत्र हेतु प्रार्थना पत्र
3. मित्र को बधाई पत्र
4. पुस्तक हेतु प्रार्थना पत्र

### निबंध Topics
1. विद्यायाः महत्त्वम्
2. पर्यावरणम्
3. स्वच्छता
4. जलसंरक्षणम्
5. योगस्य महत्त्वम्

### अनुच्छेद Topics
1. मम विद्यालयः
2. दीपावलिः
3. होलिकोत्सवः
4. मम प्रिय ग्रन्थः

---

## Important श्लोक

### विद्या पर
\`\`\`
विद्या ददाति विनयं विनयाद् याति पात्रताम्।
पात्रत्वाद् धनमाप्नोति धनाद् धर्मं ततः सुखम्॥
\`\`\`

### कर्म पर
\`\`\`
कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
\`\`\`

### परोपकार पर
\`\`\`
परोपकाराय फलन्ति वृक्षाः
परोपकाराय वहन्ति नद्यः।
\`\`\`

---

## Quick Revision Tables

### विभक्ति-कारक
| विभक्ति | कारक | Example |
|---------|-------|---------|
| प्रथमा | कर्ता | रामः गच्छति |
| द्वितीया | कर्म | रामं पश्यति |
| तृतीया | करण | रामेण सह |
| षष्ठी | संबंध | रामस्य पुत्रः |
| सप्तमी | अधिकरण | रामे विश्वासः |

### लकार
| लकार | काल | Example |
|-------|------|---------|
| लट् | Present | पठति |
| लृट् | Future | पठिष्यति |
| लङ् | Past | अपठत् |
| लोट् | Command | पठतु |

**Practice these daily for best results!**`
        }
      ]
    }
  ]
};
