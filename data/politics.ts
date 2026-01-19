import { Subject } from '../types';
import { getReelColor } from './helpers';

export const POL_SUBJECT: Subject = {
        id: 'pol',
        name: 'Political Science', 
        icon: 'Building2', 
        color: 'bg-red-500', 
        syllabus: `### राज्यशास्त्र (Political Science) - Maharashtra HSC Syllabus

## पाठ्यक्रम (Syllabus) - 6 Chapters

**भाग 1: 1991 नंतरचे जग (The World since 1991)**

| Ch | Title (English) | Title (Marathi) | Key Topics |
|----|-----------------|-----------------|------------|
| 1 | The World since 1991 | १९९१ नंतरचे जग | Cold War End, USSR Collapse, Unipolarity, New World Order, Gulf War, 9/11, Multipolarity |
| 2 | Globalisation | जागतिकीकरण | Economic/Political/Cultural Globalisation, MNCs, WTO, LPG Reforms, Impact on India |
| 3 | Humanitarian Issues | मानवतावादी मुद्दे | Human Rights, UN Role, Refugees, Migration, Terrorism, Environment |

**भाग 2: समकालीन भारत (Contemporary India)**

| Ch | Title (English) | Title (Marathi) | Key Topics |
|----|-----------------|-----------------|------------|
| 4 | Challenges to Peace & Stability | शांतता व स्थिरतेला आव्हाने | Communalism, Regionalism, Casteism, Terrorism, Naxalism, National Integration |
| 5 | Good Governance | सुशासन | Democracy, E-Governance, RTI, Lokpal, Citizen's Charter, Transparency |
| 6 | India and the World | भारत आणि जग | Foreign Policy, Non-Alignment, India-Pakistan, India-China, SAARC, BRICS, G20 |

## परीक्षा विभाजन (Distribution of Marks)

| Section | Marks |
|---------|-------|
| Q.1 MCQs & Objectives | 20 |
| Q.2 Identify & Explain Concepts | 8 |
| Q.3 Distinguish Between | 8 |
| Q.4 Answer in Brief | 16 |
| Q.5 Long Answers | 16 |
| Q.6 Graph/Statistical Analysis | 12 |
| **Total** | **80** |

## अध्याय निहाय अंक (Chapter-wise Weightage)

| Chapter | Expected Marks |
|---------|---------------|
| 1. The World since 1991 | 12-14 |
| 2. Globalisation | 12-14 |
| 3. Humanitarian Issues | 10-12 |
| 4. Challenges to Peace | 12-14 |
| 5. Good Governance | 10-12 |
| 6. India and the World | 14-16 |`,
        paperPattern: `### Political Science Paper Pattern (80 Marks)
## Maharashtra HSC Board - Detailed Pattern

---

### Q.1: वस्तुनिष्ठ प्रश्न (Objective Questions) - 20 Marks

| Sub-Q | Type | Marks | Instructions |
|-------|------|-------|--------------|
| A | MCQs (1 mark × 5) | 5 | Choose correct option |
| B | Find odd word out | 2 | 2 sets of 4 words |
| C | Complete the correlation | 2 | A:B :: C:? format |
| D | State True/False with reason | 4 | 2 statements |
| E | Identify concept from statement | 4 | 2 statements given |
| F | Complete concept map | 3 | Fill boxes in diagram |

---

### Q.2: संकल्पना ओळखा व स्पष्ट करा (Identify & Explain) - 8 Marks

- **Given:** 5 statements describing concepts
- **Task:** Identify concept + Write 2 features
- **Answer:** Any 2 out of 5
- **Marks:** 4 marks each (2 for ID + 2 for features)

**Example:**
> Statement: "The process by which economies and societies are interconnected globally"
> Answer: Globalisation
> Features: 1. Flow of goods/services 2. Cultural exchange

---

### Q.3: फरक स्पष्ट करा (Distinguish Between) - 8 Marks

- **Given:** 5 pairs of concepts
- **Task:** Write 4 differences
- **Answer:** Any 2 out of 5
- **Marks:** 4 marks each (1 per point)

**Expected Pairs:**
- Soft Power vs Hard Power
- Unipolarity vs Multipolarity
- Globalization vs Localization
- E-Governance vs Good Governance
- Bilateral vs Multilateral relations

---

### Q.4: थोडक्यात उत्तरे (Answer in Brief) - 16 Marks

- **Given:** 5 questions
- **Task:** Answer in 50-60 words
- **Answer:** Any 4 out of 5
- **Marks:** 4 marks each

**Topics Usually Asked:**
- End of Cold War
- Features of Globalisation
- Challenges to National Integration
- Role of UN
- India's Foreign Policy principles

---

### Q.5: दीर्घ उत्तरे (Long Answers) - 16 Marks

- **Given:** 3 questions
- **Task:** Answer in 150-200 words
- **Answer:** Any 2 out of 3
- **Marks:** 8 marks each

**Tips for 8-mark answers:**
1. Introduction (1 mark)
2. Main content - 5-6 points (5-6 marks)
3. Conclusion (1 mark)
4. Use subheadings

**Important Long Answer Topics:**
- Impact of Globalisation on India
- Challenges to Peace in India
- Features of Good Governance
- India-Pakistan Relations
- India's Foreign Policy since 1991

---

### Q.6: आलेख/सांख्यिकी (Graph/Statistical Analysis) - 12 Marks

- **Given:** 2 passages/tables/graphs
- **Task:** Answer questions based on data
- **Answer:** All questions compulsory
- **Marks:** 6 marks each

**Types:**
1. Bar Graph / Pie Chart interpretation
2. Table data analysis
3. Timeline / Flow chart completion
4. Statistical data interpretation

---

## ⏰ Time Management (3 Hours)

| Section | Time |
|---------|------|
| Q.1 Objectives | 25 min |
| Q.2 Identify & Explain | 15 min |
| Q.3 Distinguish Between | 15 min |
| Q.4 Brief Answers | 35 min |
| Q.5 Long Answers | 40 min |
| Q.6 Graph/Data | 20 min |
| **Revision** | **10 min** |

---

## 📝 Exam Tips

1. **MCQs:** Read all options before choosing
2. **Concepts:** Learn definitions with examples
3. **Distinguish:** Make 4-point table format
4. **Brief:** Be precise, use keywords
5. **Long:** Structure with introduction + points + conclusion
6. **Graph:** Read data carefully, check units

## Important Current Affairs Topics (2024-25)
- G20 Summit India
- Russia-Ukraine War impact
- India-China Border situation
- New Parliament Building
- One Nation One Election debate
- Digital India initiatives`,
        previousPapers: [
          { year: '2025', title: 'HSC Political Science Feb 2025', link: '/papers/politics-2025.pdf' },
          { year: '2024', title: 'HSC Political Science Feb 2024', link: '/papers/politics-2024.pdf' },
          { year: '2023', title: 'HSC Political Science Feb 2023', link: '/papers/politics-2023.pdf' },
          { year: '2022', title: 'HSC Political Science Feb 2022', link: '/papers/politics-2022.pdf' },
          { year: '2021', title: 'HSC Political Science Feb 2021', link: '/papers/politics-2021.pdf' }
        ], 
        chapters: [
          {
            id: 'pol1',
            title: '1. The World since 1991',
            description: 'Post-Cold War era, Unipolarity, and New World Order.',
            summary: '**End of Cold War**: 1991 (Collapse of USSR)\n**New World Order**: US Hegemony (Unipolarity)\n**Key Events**: Gulf War, Disintegration of USSR, Rise of EU',
            detailedNotes: '### 1. End of Cold War (1991)\n* **Berlin Wall Fall**: 1989, symbolized end of division.\n* **Disintegration of USSR**: 1991, Gorbachev\'s reforms (Glasnost, Perestroika) failed to save it.\n* **End of Bipolarity**: World moved from two superpowers to one (USA).\n\n### 2. The New World Order\n* **Unipolarity**: USA became the sole superpower.\n* **Gulf War (1990-91)**: Iraq invaded Kuwait. US-led coalition liberated Kuwait (Operation Desert Storm).\n* **"Smart Bombs"**: Use of advanced technology in war.\n\n### 3. Humanitarian Intervention\n* **Changing Role of UN**: From peacekeeping to peace enforcement.\n* **Yugoslavia**: Ethnic conflict, NATO intervention.\n* **Somalia**: US intervention for famine relief and order.\n\n### 4. Terrorism\n* **9/11 Attacks (2001)**: Al-Qaeda attacked USA (World Trade Center, Pentagon).\n* **War on Terror**: US launched Operation Enduring Freedom (Afghanistan) and Operation Iraqi Freedom (Iraq).\n\n### 5. Multipolarity\n* **Rise of New Centers**: European Union (EU), China, Japan, India, Russia.\n* **Regional Organizations**: ASEAN, SAARC, BRICS.\n* **Shift**: From Unipolar to Multipolar world.',
            flashcards: [
              { id: 'f1', front: 'When did the Cold War end?', back: '1991 (Disintegration of USSR).' },
              { id: 'f2', front: 'What event symbolized the fall of communism?', back: 'Fall of Berlin Wall (1989).' },
              { id: 'f3', front: 'Who was the last leader of USSR?', back: 'Mikhail Gorbachev.' },
              { id: 'f4', front: 'What were Gorbachev\'s reforms?', back: 'Glasnost (Openness) and Perestroika (Restructuring).' },
              { id: 'f5', front: 'What is Unipolarity?', back: 'International system dominated by one superpower (USA).' },
              { id: 'f6', front: 'What was Operation Desert Storm?', back: 'US-led coalition war to liberate Kuwait from Iraq (1991).' },
              { id: 'f7', front: 'Who was the Iraqi leader during Gulf War?', back: 'Saddam Hussein.' },
              { id: 'f8', front: 'What happened on 9/11?', back: 'Terrorist attacks on USA by Al-Qaeda (2001).' },
              { id: 'f9', front: 'What is "New World Order"?', back: 'Term used by George H.W. Bush for post-Cold War era.' },
              { id: 'f10', front: 'Which country disintegrated into 15 republics?', back: 'USSR (Soviet Union).' },
              { id: 'f11', front: 'What is NATO?', back: 'North Atlantic Treaty Organization (US-led military alliance).' },
              { id: 'f12', front: 'What is the European Union (EU)?', back: 'Economic and political union of European countries.' },
              { id: 'f13', front: 'What is the currency of EU?', back: 'Euro.' },
              { id: 'f14', front: 'What is ASEAN?', back: 'Association of Southeast Asian Nations.' },
              { id: 'f15', front: 'What is SAARC?', back: 'South Asian Association for Regional Cooperation.' },
              { id: 'f16', front: 'What was Operation Enduring Freedom?', back: 'US war in Afghanistan against Taliban/Al-Qaeda.' },
              { id: 'f17', front: 'What was Operation Iraqi Freedom?', back: 'US invasion of Iraq in 2003.' },
              { id: 'f18', front: 'What is Multipolarity?', back: 'World power distributed among multiple centers (China, EU, India, etc.).' },
              { id: 'f19', front: 'Who are the BRICS members?', back: 'Brazil, Russia, India, China, South Africa.' },
              { id: 'f20', front: 'What is Humanitarian Intervention?', back: 'Intervention to protect human rights (e.g., Somalia, Yugoslavia).' },
              { id: 'f21', front: 'What is "Soft Power"?', back: 'Influence through culture, values, and diplomacy (not military).' },
              { id: 'f22', front: 'What is "Hard Power"?', back: 'Influence through military and economic coercion.' },
              { id: 'f23', front: 'When was the Berlin Wall built?', back: '1961 (Fell in 1989).' },
              { id: 'f24', front: 'What is Globalization?', back: 'Integration of world economies and cultures.' },
              { id: 'f25', front: 'Who was Boris Yeltsin?', back: 'First President of Russia after USSR collapse.' },
              { id: 'f26', front: 'What is the Maastricht Treaty?', back: 'Treaty that formed the European Union (1992).' },
              { id: 'f27', front: 'What is the Schengen Area?', back: 'Passport-free travel zone in Europe.' },
              { id: 'f28', front: 'What is the "Clash of Civilizations"?', back: 'Theory by Samuel Huntington about cultural conflicts.' },
              { id: 'f29', front: 'What is the "End of History"?', back: 'Theory by Francis Fukuyama about triumph of liberal democracy.' },
              { id: 'f30', front: 'What is the G20?', back: 'Group of 20 major economies.' }
            ],
            mcqs: [
              { id: 'q1', question: 'USSR disintegrated in:', options: ['1989', '1990', '1991', '1992'], correctIndex: 2, explanation: 'December 1991 marked the end of Soviet Union.' },
              { id: 'q2', question: 'Berlin Wall fell in:', options: ['1989', '1990', '1991', '1961'], correctIndex: 0, explanation: 'November 9, 1989.' },
              { id: 'q3', question: 'Operation Desert Storm was related to:', options: ['Afghanistan', 'Iraq-Kuwait', 'Vietnam', 'Korea'], correctIndex: 1, explanation: 'Liberation of Kuwait from Iraq.' },
              { id: 'q4', question: 'Who introduced Glasnost and Perestroika?', options: ['Stalin', 'Lenin', 'Gorbachev', 'Putin'], correctIndex: 2, explanation: 'Mikhail Gorbachev\'s reforms.' },
              { id: 'q5', question: '9/11 attacks occurred in:', options: ['1999', '2000', '2001', '2002'], correctIndex: 2, explanation: 'September 11, 2001.' },
              { id: 'q6', question: 'Maastricht Treaty established:', options: ['NATO', 'UN', 'EU', 'ASEAN'], correctIndex: 2, explanation: 'European Union formed in 1992.' },
              { id: 'q7', question: 'First Gulf War was in:', options: ['1980', '1990', '2003', '2010'], correctIndex: 1, explanation: '1990-1991.' },
              { id: 'q8', question: 'Which country is NOT in BRICS?', options: ['Brazil', 'Russia', 'India', 'USA'], correctIndex: 3, explanation: 'USA is not a member. S is South Africa.' },
              { id: 'q9', question: 'Unipolar world means dominance of:', options: ['Two powers', 'One power', 'Many powers', 'No power'], correctIndex: 1, explanation: 'One superpower (USA).' },
              { id: 'q10', question: 'Operation Enduring Freedom was in:', options: ['Iraq', 'Afghanistan', 'Libya', 'Syria'], correctIndex: 1, explanation: 'War in Afghanistan post-9/11.' },
              { id: 'q11', question: 'Euro is currency of:', options: ['USA', 'UK', 'EU', 'ASEAN'], correctIndex: 2, explanation: 'European Union currency.' },
              { id: 'q12', question: 'SAARC headquarters is in:', options: ['Delhi', 'Kathmandu', 'Dhaka', 'Colombo'], correctIndex: 1, explanation: 'Kathmandu, Nepal.' },
              { id: 'q13', question: 'Who coined "End of History"?', options: ['Huntington', 'Fukuyama', 'Marx', 'Hegel'], correctIndex: 1, explanation: 'Francis Fukuyama.' },
              { id: 'q14', question: 'Saddam Hussein was leader of:', options: ['Iran', 'Iraq', 'Syria', 'Kuwait'], correctIndex: 1, explanation: 'President of Iraq.' },
              { id: 'q15', question: 'Taliban ruled:', options: ['Iraq', 'Pakistan', 'Afghanistan', 'Iran'], correctIndex: 2, explanation: 'Afghanistan regime.' },
              { id: 'q16', question: 'Al-Qaeda leader was:', options: ['Saddam', 'Osama bin Laden', 'Gaddafi', 'Assad'], correctIndex: 1, explanation: 'Mastermind of 9/11.' },
              { id: 'q17', question: 'NATO is a ______ alliance.', options: ['Economic', 'Military', 'Cultural', 'Political'], correctIndex: 1, explanation: 'North Atlantic Treaty Organization.' },
              { id: 'q18', question: 'Which is a soft power?', options: ['Army', 'Sanctions', 'Movies/Culture', 'Nuclear bomb'], correctIndex: 2, explanation: 'Cultural influence.' },
              { id: 'q19', question: 'Yugoslavia broke up into:', options: ['2 states', '3 states', 'Multiple states', 'Did not break'], correctIndex: 2, explanation: 'Serbia, Croatia, Bosnia, etc.' },
              { id: 'q20', question: 'ASEAN is organization of:', options: ['South Asia', 'South East Asia', 'East Asia', 'West Asia'], correctIndex: 1, explanation: 'Association of Southeast Asian Nations.' },
              { id: 'q21', question: 'Iron Curtain referred to:', options: ['Berlin Wall', 'China', 'Division of Europe', 'US border'], correctIndex: 2, explanation: 'Division between East and West Europe.' },
              { id: 'q22', question: 'Cold War was between:', options: ['USA-UK', 'USA-USSR', 'UK-France', 'Germany-Russia'], correctIndex: 1, explanation: 'Ideological conflict.' },
              { id: 'q23', question: 'Bipolarity ended with:', options: ['WWII', 'Korean War', 'USSR collapse', '9/11'], correctIndex: 2, explanation: 'Collapse of Soviet Union.' },
              { id: 'q24', question: 'New World Order speech by:', options: ['Clinton', 'Bush Sr.', 'Obama', 'Reagan'], correctIndex: 1, explanation: 'George H.W. Bush.' },
              { id: 'q25', question: 'Operation Iraqi Freedom year:', options: ['1991', '2001', '2003', '2011'], correctIndex: 2, explanation: 'US invasion of Iraq.' },
              { id: 'q26', question: 'Brexit means:', options: ['Britain entering EU', 'Britain exiting EU', 'Brazil exit', 'None'], correctIndex: 1, explanation: 'UK leaving European Union.' },
              { id: 'q27', question: 'G20 summit 2023 was in:', options: ['USA', 'China', 'India', 'Brazil'], correctIndex: 2, explanation: 'Held in New Delhi.' },
              { id: 'q28', question: 'Which is NOT a permanent member of UN Security Council?', options: ['USA', 'Russia', 'China', 'India'], correctIndex: 3, explanation: 'India is not a permanent member yet.' },
              { id: 'q29', question: 'Human Rights Day:', options: ['Dec 10', 'Jan 26', 'Aug 15', 'Oct 24'], correctIndex: 0, explanation: 'December 10.' },
              { id: 'q30', question: 'Globalization involves flow of:', options: ['Goods', 'Capital', 'People/Ideas', 'All of these'], correctIndex: 3, explanation: 'Multidimensional flow.' }
            ],
            reels: [
              { id: 'r1', title: 'End of Cold War', content: '1991.\nUSSR collapsed.\nBipolarity ended.', color: getReelColor(0) },
              { id: 'r2', title: 'Berlin Wall', content: 'Fell 1989.\nSymbol of division gone.\nGermany reunited.', color: getReelColor(1) },
              { id: 'r3', title: 'Unipolarity', content: 'One superpower.\nUSA dominance.\nNew World Order.', color: getReelColor(2) },
              { id: 'r4', title: 'Gulf War', content: '1990-91.\nIraq vs Coalition.\nOperation Desert Storm.', color: getReelColor(3) },
              { id: 'r5', title: '9/11 Attacks', content: '2001.\nAl-Qaeda.\nWar on Terror began.', color: getReelColor(4) },
              { id: 'r6', title: 'European Union', content: 'Economic union.\nEuro currency.\nBorderless travel.', color: getReelColor(5) },
              { id: 'r7', title: 'ASEAN', content: 'Southeast Asia.\nEconomic growth.\nRegional peace.', color: getReelColor(6) },
              { id: 'r8', title: 'BRICS', content: 'Emerging economies.\nBrazil, Russia, India.\nChina, South Africa.', color: getReelColor(7) },
              { id: 'r9', title: 'Multipolarity', content: 'Many powers.\nNo single dominance.\nBalance of power.', color: getReelColor(8) },
              { id: 'r10', title: 'Gorbachev', content: 'Last USSR leader.\nReforms failed.\nEnded Cold War.', color: getReelColor(9) },
              { id: 'r11', title: 'Glasnost', content: 'Openness.\nFreedom of speech.\nGorbachev\'s policy.', color: getReelColor(0) },
              { id: 'r12', title: 'Perestroika', content: 'Restructuring.\nEconomic reform.\nFailed to save USSR.', color: getReelColor(1) },
              { id: 'r13', title: 'Saddam Hussein', content: 'Iraqi dictator.\nInvaded Kuwait.\nDefeated in Gulf War.', color: getReelColor(2) },
              { id: 'r14', title: 'Osama bin Laden', content: 'Al-Qaeda leader.\nPlanned 9/11.\nKilled in 2011.', color: getReelColor(3) },
              { id: 'r15', title: 'Afghanistan War', content: '2001-2021.\nLongest US war.\nAgainst Taliban.', color: getReelColor(4) },
              { id: 'r16', title: 'Iraq War', content: '2003 invasion.\nWMD claims.\nSaddam removed.', color: getReelColor(5) },
              { id: 'r17', title: 'Soft Power', content: 'Culture, Values.\nHollywood, Yoga.\nAttraction not force.', color: getReelColor(6) },
              { id: 'r18', title: 'Hard Power', content: 'Military might.\nEconomic sanctions.\nCoercion.', color: getReelColor(7) },
              { id: 'r19', title: 'Human Rights', content: 'Universal rights.\nUN protection.\nIntervention.', color: getReelColor(8) },
              { id: 'r20', title: 'Globalization', content: 'Connected world.\nTrade, Internet.\nGlobal village.', color: getReelColor(9) },
              { id: 'r21', title: 'Maastricht Treaty', content: '1992.\nCreated EU.\nEuropean integration.', color: getReelColor(0) },
              { id: 'r22', title: 'Schengen', content: 'No borders.\nTravel freely.\nEurope united.', color: getReelColor(1) },
              { id: 'r23', title: 'Rise of China', content: 'Economic giant.\nMilitary power.\nChallenging US.', color: getReelColor(2) },
              { id: 'r24', title: 'Rise of India', content: 'Growing economy.\nIT hub.\nGlobal player.', color: getReelColor(3) },
              { id: 'r25', title: 'Vladimir Putin', content: 'Russian leader.\nRestoring power.\nChallenging West.', color: getReelColor(4) },
              { id: 'r26', title: 'Terrorism', content: 'Global threat.\nNon-state actors.\nViolence for politics.', color: getReelColor(5) },
              { id: 'r27', title: 'Climate Change', content: 'Global issue.\nKyoto, Paris.\nNeeds cooperation.', color: getReelColor(6) },
              { id: 'r28', title: 'Technology', content: 'Internet revolution.\nInformation age.\nChanged warfare.', color: getReelColor(7) },
              { id: 'r29', title: 'Migration', content: 'Refugee crisis.\nPeople moving.\nGlobal challenge.', color: getReelColor(8) },
              { id: 'r30', title: 'New World Order', content: 'Post-1991.\nComplex world.\nUncertain future.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'pl1-1',
                question: 'Explain the major changes in world politics after 1991.',
                mnemonic: 'CHANGES - Cold War ended, Hegemony of USA, Alliances changed, New world order, Globalization, Emerging powers, Security threats',
                answer: `### Introduction
The year 1991 marked a turning point in world politics with the collapse of the Soviet Union, ending the Cold War era and ushering in a new world order.

### Major Changes

**1. End of Bipolarity**
- Cold War (1945-1991) ended
- USSR dissolved into 15 republics
- Warsaw Pact disbanded
- Communist ideology weakened

**2. Rise of Unipolarity**
- USA emerged as sole superpower
- No military/economic rival
- "New World Order" announced by Bush
- American dominance in global affairs

**3. Economic Transformations**
| Change | Impact |
|--------|--------|
| Market economy spread | Socialism declined |
| Globalization accelerated | World interconnected |
| WTO established (1995) | Trade liberalized |
| MNCs grew powerful | Cross-border operations |

**4. Regional Organizations**
- European Union strengthened (Maastricht 1992)
- ASEAN expanded
- SAARC continued
- African Union formed (2002)

**5. New Security Challenges**
- **Terrorism**: 9/11 attacks (2001)
- **Cyber warfare**: New threat domain
- **Climate change**: Global security issue
- **Nuclear proliferation**: More nuclear states

**6. Shift Towards Multipolarity**
- China's rise as economic power
- India's emergence
- Russia's resurgence under Putin
- BRICS formation (2009)

### Significance

**For Developing Countries**
- More trade opportunities
- Technology access
- But also vulnerability to global forces

**For International Relations**
- UN's role changed
- Humanitarian intervention debates
- Human rights globalized

### Conclusion
The post-1991 world is characterized by globalization, new power centers, and complex security challenges unlike the simpler bipolar world of the Cold War.`
              },
              {
                id: 'pl1-2',
                question: 'Discuss the concepts of Unipolarity and Multipolarity in contemporary world.',
                mnemonic: 'POLES - Power distribution, One superpower, Leadership, Emerging nations, Several powers',
                answer: `### Introduction
The distribution of power in the international system determines whether it is unipolar, bipolar, or multipolar.

### Unipolarity (1991-2008)

**Definition**
A system where one state dominates military, economic, and diplomatic spheres.

**Features of US Unipolarity**
| Aspect | US Dominance |
|--------|--------------|
| Military | Largest defense budget |
| Economy | World's largest GDP |
| Technology | Leader in innovation |
| Culture | Hollywood, English language |
| Institutions | NATO, IMF influence |

**Examples of US Actions**
- Gulf War (1991)
- Kosovo Intervention (1999)
- Afghanistan War (2001)
- Iraq War (2003)

**Criticisms**
- Unilateralism (acting alone)
- Disregard for UN at times
- "World Policeman" critique
- Imposing values on others

### Multipolarity (2008 onwards)

**Definition**
A system where several states share power, no single dominant state.

**Emerging Powers**
| Power | Basis of Influence |
|-------|-------------------|
| China | Economic strength, manufacturing |
| India | Population, IT sector, democracy |
| Russia | Energy resources, military |
| EU | Economic bloc, soft power |
| Brazil | Regional power, resources |

**Characteristics**
- Balance of power
- Multiple alliances
- Regional powers gain importance
- Complex diplomacy required

**Benefits**
- Checks on any single power
- More voices in global affairs
- Democratic international order

**Challenges**
- More complex negotiations
- Risk of regional conflicts
- Unclear leadership on global issues

### India's Position

**Advantages of Multipolarity for India**
- Strategic autonomy
- Multiple partnerships (US, Russia, EU)
- Leadership role in Global South
- Economic opportunities

**India's Actions**
- Non-alignment updated (multi-alignment)
- BRICS, SCO membership
- Act East Policy
- Quad participation

### Conclusion
The world is transitioning from unipolarity to multipolarity, creating both opportunities and challenges for countries like India.`
              }
            ],
            // Board Exam Questions - Chapter 1: World since 1991
            boardQuestions: {
              q1a_mcq: [
                { id: 'bq1a1', question: 'Cold War ended in:', options: ['1989', '1991', '2001', '1985'], correctIndex: 1, explanation: 'USSR collapsed in 1991.' },
                { id: 'bq1a2', question: 'Which country emerged as the sole superpower after Cold War?', options: ['Russia', 'China', 'USA', 'UK'], correctIndex: 2, explanation: 'USA became the unipolar power.' },
                { id: 'bq1a3', question: 'USSR was disintegrated in:', options: ['1989', '1991', '1985', '2000'], correctIndex: 1, explanation: 'December 1991.' },
                { id: 'bq1a4', question: 'Berlin Wall fell in:', options: ['1985', '1989', '1991', '2001'], correctIndex: 1, explanation: 'November 1989.' },
                { id: 'bq1a5', question: '9/11 attack occurred in:', options: ['2000', '2001', '2002', '2003'], correctIndex: 1, explanation: 'September 11, 2001.' },
                { id: 'bq1a6', question: 'Fukuyama wrote:', options: ['Clash of Civilizations', 'End of History', 'New World Order', 'Third Wave'], correctIndex: 1, explanation: 'Francis Fukuyama.' },
                { id: 'bq1a7', question: 'Samuel Huntington wrote:', options: ['End of History', 'Clash of Civilizations', 'Third Wave', 'Soft Power'], correctIndex: 1, explanation: 'Published in 1996.' },
                { id: 'bq1a8', question: 'Multipolarity means:', options: ['One power centre', 'Two power centres', 'Multiple power centres', 'No power centre'], correctIndex: 2, explanation: 'Many centres of power.' },
                { id: 'bq1a9', question: 'BRICS does NOT include:', options: ['Brazil', 'Russia', 'Japan', 'India'], correctIndex: 2, explanation: 'Japan is not a BRICS member.' },
                { id: 'bq1a10', question: 'Gulf War (Operation Desert Storm) occurred in:', options: ['1989', '1991', '2001', '2003'], correctIndex: 1, explanation: 'Against Iraq in 1991.' }
              ],
              q1b_oddOneOut: [
                { id: 'bq1b1', set: ['NATO', 'Warsaw Pact', 'ASEAN', 'SEATO'], answer: 'ASEAN', explanation: 'Others were Cold War military alliances; ASEAN is economic/political.' },
                { id: 'bq1b2', set: ['USA', 'UK', 'France', 'USSR'], answer: 'USSR', explanation: 'Others are Western bloc; USSR was Eastern bloc.' },
                { id: 'bq1b3', set: ['Gorbachev', 'Yeltsin', 'Putin', 'Obama'], answer: 'Obama', explanation: 'Others are Russian leaders; Obama is American.' },
                { id: 'bq1b4', set: ['Glasnost', 'Perestroika', 'Shock Therapy', 'Brexit'], answer: 'Brexit', explanation: 'Others relate to USSR reforms/transition; Brexit is UK leaving EU.' },
                { id: 'bq1b5', set: ['Iraq', 'Afghanistan', 'Syria', 'Canada'], answer: 'Canada', explanation: 'Others faced US military intervention post-1991.' }
              ],
              q1c_correlation: [
                { id: 'bq1c1', a: 'Capitalism', b: 'USA', c: 'Communism', answer: 'USSR', explanation: 'USSR followed Communism as state ideology.' },
                { id: 'bq1c2', a: 'Glasnost', b: 'Openness', c: 'Perestroika', answer: 'Restructuring', explanation: 'Perestroika means economic restructuring.' },
                { id: 'bq1c3', a: 'Berlin Wall', b: '1989', c: 'USSR Collapse', answer: '1991', explanation: 'USSR collapsed in December 1991.' },
                { id: 'bq1c4', a: 'End of History', b: 'Fukuyama', c: 'Clash of Civilizations', answer: 'Huntington', explanation: 'Samuel Huntington wrote Clash of Civilizations.' },
                { id: 'bq1c5', a: 'Unipolarity', b: 'Single power', c: 'Multipolarity', answer: 'Multiple powers', explanation: 'Multipolarity has multiple power centres.' }
              ],
              q1d_trueFalse: [
                { id: 'bq1d1', statement: 'Cold War was an armed conflict between USA and USSR.', answer: false, reason: 'Cold War was ideological, political, and economic rivalry without direct military conflict between superpowers.' },
                { id: 'bq1d2', statement: 'Berlin Wall symbolized the division between East and West.', answer: true, reason: 'The Berlin Wall divided communist East Germany from democratic West Germany, symbolizing the Iron Curtain.' },
                { id: 'bq1d3', statement: 'USSR still exists today.', answer: false, reason: 'USSR disintegrated in December 1991 into 15 independent republics including Russia.' },
                { id: 'bq1d4', statement: 'Gorbachev introduced Glasnost and Perestroika reforms.', answer: true, reason: 'Mikhail Gorbachev introduced these reforms in the late 1980s to modernize the Soviet system.' },
                { id: 'bq1d5', statement: '9/11 attacks occurred in 2000.', answer: false, reason: '9/11 attacks occurred on September 11, 2001, not 2000.' },
                { id: 'bq1d6', statement: 'New World Order emphasizes cooperation and democracy.', answer: true, reason: 'New World Order refers to international cooperation, democracy, and rule-based global governance after Cold War.' }
              ],
              q1e_identifyConcept: [
                { id: 'bq1e1', statement: 'A global system where one country dominates international politics, economy, and military.', answer: 'Unipolarity', features: ['USA as sole superpower after 1991', 'Post-Cold War world order until 2008'] },
                { id: 'bq1e2', statement: 'A global system with multiple centres of power sharing influence.', answer: 'Multipolarity', features: ['Rise of China, India, EU as power centres', 'No single dominant nation'] },
                { id: 'bq1e3', statement: 'Policy of openness introduced by Gorbachev in USSR.', answer: 'Glasnost', features: ['Freedom of speech and press', 'Reduced censorship and secrecy'] },
                { id: 'bq1e4', statement: 'Economic restructuring policy in Soviet Union.', answer: 'Perestroika', features: ['Market elements introduced', 'Decentralization of economy'] },
                { id: 'bq1e5', statement: 'Rivalry between USA and USSR without direct military confrontation.', answer: 'Cold War', features: ['Ideological conflict (1947-1991)', 'Proxy wars in Korea, Vietnam, Afghanistan'] },
                { id: 'bq1e6', statement: 'Theory stating liberal democracy is the final form of government.', answer: 'End of History (Fukuyama)', features: ['Published after USSR collapse', 'Claimed Western liberal democracy triumphed'] }
              ],
              q1f_conceptMap: [
                { id: 'bq1f1', topic: 'Cold War Blocs', structure: 'Cold War → [___] + [___]', blanks: ['Western Bloc (USA/NATO)', 'Eastern Bloc (USSR/Warsaw Pact)'] },
                { id: 'bq1f2', topic: 'USSR Reforms', structure: 'Gorbachev → [___] + [___]', blanks: ['Glasnost (Openness)', 'Perestroika (Restructuring)'] },
                { id: 'bq1f3', topic: 'World Order', structure: 'Bipolarity → [___] → [___]', blanks: ['Unipolarity (1991-2008)', 'Multipolarity (21st century)'] },
                { id: 'bq1f4', topic: 'US Interventions', structure: 'Gulf War [___] → Afghanistan [___] → Iraq [___]', blanks: ['1991', '2001', '2003'] }
              ],
              q2_identifyExplain: [
                { id: 'bq2a1', statement: 'A world order where the United States emerged as the single dominant power after 1991.', concept: 'Unipolarity', features: ['USA as sole superpower with unmatched military and economic power', 'Ability to shape international norms and intervene globally (Gulf War, Yugoslavia)'] },
                { id: 'bq2a2', statement: 'The ideological, political, and economic rivalry between USA and USSR from 1947 to 1991.', concept: 'Cold War', features: ['Division of world into Western and Eastern blocs', 'Arms race, nuclear deterrence, and proxy wars in Korea, Vietnam, Afghanistan'] },
                { id: 'bq2a3', statement: 'The collapse of the Soviet political and economic system leading to independence of 15 republics.', concept: 'Disintegration of USSR', features: ['End of communist rule in Eastern Europe', 'Russia emerged as successor state with UN seat and nuclear weapons'] },
                { id: 'bq2a4', statement: 'A theory by Francis Fukuyama stating that liberal democracy represents the final form of government.', concept: 'End of History Thesis', features: ['Victory of Western liberal democracy over communism', 'Criticized as premature given rise of authoritarianism in 21st century'] },
                { id: 'bq2a5', statement: 'A world system where multiple countries or groups hold significant power.', concept: 'Multipolarity', features: ['Rise of China, India, EU, Russia as power centres', 'More democratic international order with complex diplomacy'] }
              ],
              q3_distinguish: [
                { id: 'bq3a1', pair: ['Unipolarity', 'Multipolarity'], points: [
                  { aspect: 'Definition', first: 'Single dominant power in world politics', second: 'Multiple centres of power sharing influence' },
                  { aspect: 'Example', first: 'USA after 1991', second: 'USA, China, India, EU, Russia today' },
                  { aspect: 'Decision Making', first: 'Dominated by single power', second: 'Requires negotiation among powers' },
                  { aspect: 'Stability', first: 'Predictable but can be hegemonic', second: 'Balanced but complex diplomacy' }
                ]},
                { id: 'bq3a2', pair: ['Cold War', 'Hot War'], points: [
                  { aspect: 'Nature', first: 'Ideological and political rivalry', second: 'Actual armed military conflict' },
                  { aspect: 'Direct Confrontation', first: 'No direct military fighting between superpowers', second: 'Direct military engagement' },
                  { aspect: 'Duration', first: 'Can last decades (1947-1991)', second: 'Usually shorter, intense periods' },
                  { aspect: 'Methods', first: 'Propaganda, proxy wars, arms race', second: 'Actual use of military weapons' }
                ]},
                { id: 'bq3a3', pair: ['Glasnost', 'Perestroika'], points: [
                  { aspect: 'Meaning', first: 'Openness/Transparency', second: 'Restructuring/Reform' },
                  { aspect: 'Focus', first: 'Political freedom, media freedom', second: 'Economic reforms and decentralization' },
                  { aspect: 'Aim', first: 'Free speech, reduced censorship', second: 'Modernize Soviet economy' },
                  { aspect: 'Introduced By', first: 'Gorbachev in late 1980s', second: 'Gorbachev in late 1980s' }
                ]},
                { id: 'bq3a4', pair: ['Capitalism', 'Communism'], points: [
                  { aspect: 'Ownership', first: 'Private ownership of property', second: 'State/collective ownership of property' },
                  { aspect: 'Economy', first: 'Market-driven, profit motive', second: 'Centrally planned economy' },
                  { aspect: 'Leader', first: 'USA and Western bloc', second: 'USSR and Eastern bloc' },
                  { aspect: 'Current Status', first: 'Dominant global system', second: 'Limited to few countries' }
                ]},
                { id: 'bq3a5', pair: ['NATO', 'Warsaw Pact'], points: [
                  { aspect: 'Full Form', first: 'North Atlantic Treaty Organization', second: 'Treaty of Friendship, Cooperation and Mutual Assistance' },
                  { aspect: 'Led By', first: 'USA and Western powers', second: 'USSR and Eastern European states' },
                  { aspect: 'Purpose', first: 'Collective defense against Soviet threat', second: 'Counter NATO and protect socialism' },
                  { aspect: 'Current Status', first: 'Still exists and expanded eastward', second: 'Dissolved in 1991' }
                ]}
              ],
              q4_briefAnswers: [
                { id: 'bq4a1', question: 'Explain the causes of disintegration of USSR.', answer: '**Causes of USSR Disintegration:**\n\n1. **Economic Crisis**: Centrally planned economy failed to compete with West. Consumer goods shortages.\n\n2. **Political Reforms**: Glasnost (openness) led to criticism; Perestroika created uncertainty.\n\n3. **Nationalism**: Ethnic groups in republics (Baltic states, Ukraine) demanded independence.\n\n4. **Arms Race**: Heavy military spending (25% GDP) drained resources.\n\n5. **Leadership**: Gorbachev\'s reforms weakened party control. August 1991 coup failed.\n\n**Result**: USSR dissolved December 26, 1991 into 15 independent republics.' },
                { id: 'bq4a2', question: 'What is the New World Order?', answer: '**New World Order:**\n\n1. **Definition**: Term for post-Cold War international system based on cooperation, democracy, and multilateralism.\n\n2. **Features**:\n   - USA as sole superpower (Unipolarity)\n   - Emphasis on human rights and democracy\n   - UN, WTO gaining importance\n   - Globalization connecting economies\n\n3. **Key Events**: Gulf War 1991 (UN-sanctioned coalition), NATO expansion, spread of market economy.\n\n4. **Criticism**: Seen by some as Western/US dominance.' },
                { id: 'bq4a3', question: 'Describe the significance of 9/11 attacks on world politics.', answer: '**Significance of 9/11 (September 11, 2001):**\n\n1. **War on Terror**: USA launched global war - Afghanistan invaded (2001), Iraq (2003).\n\n2. **Security Changes**: Patriot Act, stricter surveillance, new agencies (DHS).\n\n3. **International Relations**: "With us or against us" - countries forced to choose sides.\n\n4. **Islamic World**: Increased West-Muslim tensions, Islamophobia.\n\n5. **Global Impact**: Terrorism became top security priority worldwide.' },
                { id: 'bq4a4', question: 'Explain multipolarity with examples.', answer: '**Multipolarity:**\n\n1. **Definition**: International system with power distributed among multiple states.\n\n2. **Emerging Powers**:\n   - China: Economic giant, Belt and Road\n   - India: Growing economy, nuclear power\n   - EU: Economic bloc, soft power\n   - Russia: Energy resources, military\n\n3. **Examples**: BRICS, G20, SCO, Regional organizations\n\n4. **For India**: Strategic autonomy, multiple partnerships (US, Russia, EU).' },
                { id: 'bq4a5', question: 'What were the main features of the Cold War?', answer: '**Features of Cold War (1947-1991):**\n\n1. **Ideological Rivalry**: Capitalism vs Communism\n\n2. **Military Alliances**: NATO (West) vs Warsaw Pact (East)\n\n3. **Arms Race**: Nuclear weapons buildup, MAD doctrine\n\n4. **Proxy Wars**: Korea, Vietnam, Afghanistan\n\n5. **Space Race**: Sputnik, Moon landing\n\n6. **No Direct War**: Superpowers never directly fought\n\n7. **Division of Europe**: Iron Curtain, Berlin Wall' }
              ],
              q5_longAnswers: [
                { id: 'bq5a1', question: 'Describe the causes and consequences of USSR disintegration and its impact on world politics. (8 marks)', mnemonic: 'ENAGL + CUSP', answer: '**Disintegration of USSR: Causes and Consequences**\n\n### Introduction\nThe USSR collapsed on December 26, 1991, ending the Cold War era.\n\n### Causes\n\n**1. Economic Crisis**\n- Centralized planning failed\n- 25% GDP on military drained economy\n- Consumer goods shortages\n\n**2. Political Reforms (Glasnost & Perestroika)**\n- Glasnost: Allowed criticism, exposed failures\n- Perestroika: Created economic uncertainty\n\n**3. Rise of Nationalism**\n- Baltic States demanded independence\n- Ukraine, Central Asian republics followed\n\n**4. Arms Race Exhaustion**\n- Could not match US technology (SDI)\n- Afghanistan war (1979-89) drained resources\n\n**5. Weak Leadership**\n- Gorbachev unable to manage transition\n- August 1991 coup failed, weakened center\n\n### Consequences\n\n**1. End of Cold War** - Bipolar world ended, USA as sole superpower\n\n**2. Birth of New States** - 15 independent republics, CIS formed\n\n**3. Economic Transition** - Shock therapy, privatization, oligarchs\n\n**4. Geopolitical Changes** - NATO expansion, EU enlargement\n\n### Impact on World Politics\n- Power Structure: Bipolar → Unipolar → Multipolar\n- Capitalism/Democracy seen as victorious\n- Globalization accelerated\n\n### Conclusion\nUSSR collapse reshaped international relations for the 21st century.' },
                { id: 'bq5a2', question: 'Explain the transition from Unipolarity to Multipolarity. What are its implications for India? (8 marks)', mnemonic: 'URMC + BASI', answer: '**Transition from Unipolarity to Multipolarity**\n\n### Introduction\nPost-1991 world shifted from bipolar (USA vs USSR) to unipolar (USA dominant) to emerging multipolar order.\n\n### Phase 1: Unipolarity (1991-2008)\n- USA as single superpower ("Unipolar Moment")\n- US interventions: Gulf War (1991), Kosovo (1999), Afghanistan (2001), Iraq (2003)\n- "End of History" optimism\n\n### Phase 2: Transition to Multipolarity (2008-Present)\n\n**Factors Driving Change:**\n1. **Rise of China** - Economic superpower, military modernization, BRI\n2. **India Emergence** - Fast-growing economy, nuclear power, IT sector\n3. **Russia Resurgence** - Energy resources, military interventions\n4. **European Union** - Economic bloc, soft power\n5. **US Relative Decline** - 2008 Financial Crisis, Middle East overstretch\n\n### Features of Multipolarity\n- Multiple power centres (no single dominant nation)\n- Complex diplomacy required\n- Regional powers gain influence\n- New institutions: BRICS, SCO, G20\n\n### Implications for India\n\n**Benefits:**\n- Strategic autonomy - independent foreign policy\n- Multiple partners - USA, Russia, EU, Japan\n- Global South leadership\n- Economic opportunities from various sources\n\n**India\'s Actions:**\n- Multi-alignment (not non-alignment)\n- BRICS, SCO membership\n- Quad participation (USA, Japan, Australia)\n- Act East Policy (ASEAN engagement)\n\n**Challenges:**\n- Balancing US-Russia, US-China relations\n- China as competitor (border disputes, BRI)\n\n### Conclusion\nMultipolar world offers India greater opportunities for strategic autonomy and global influence.' }
              ],
              q6_analysis: [
                { id: 'bq6a1', type: 'timeline', title: 'Cold War to Multipolarity Timeline', data: '1947 - Cold War begins (Truman Doctrine) | 1949 - NATO formed | 1955 - Warsaw Pact | 1989 - Berlin Wall falls | 1991 - USSR collapses (Unipolarity) | 2001 - 9/11 attacks | 2008 - Financial Crisis (US decline begins) | 2020s - Multipolarity evident', questions: ['Identify the period of Bipolarity.', 'When did Unipolarity begin?', 'What events mark transition to Multipolarity?'] },
                { id: 'bq6a2', type: 'comparison', title: 'World Order Comparison', data: 'Bipolarity (1947-1991): USA vs USSR, Two blocs, Proxy wars | Unipolarity (1991-2008): USA dominant, Liberal order, Interventions | Multipolarity (2008-present): Multiple powers, Complex diplomacy', questions: ['Distinguish between the three world orders.', 'Which order is most suitable for developing countries like India? Explain.'] }
              ]
            }

          },
          {
            id: 'pol2',
            title: '2. Key Concepts and Issues since 1991 : Globalisation',
            description: 'Economic, Political, Cultural and Technological aspects of Globalisation.',
            summary: '**Globalisation**: Integration of economies and societies\n**Economic**: Liberalisation, Privatisation, MNCs\n**Political**: Role of State, International Organizations\n**Cultural**: Cultural Homogenisation vs Glocalisation\n**Technological**: Internet, Communication revolution',
            detailedNotes: '### 1. Introduction to Globalisation\\nGlobalisation is a process of international integration arising from the interchange of world views, products, ideas, and other aspects of culture. It gained momentum after the end of the Cold War in 1991.\\n\\n### 2. Economic Issues\\n* **Liberalisation**: Reducing government restrictions on economy.\\n* **Privatisation**: Transfer of ownership from public to private sector.\\n* **MNCs/TNCs**: Multi-National Corporations operate in many countries (e.g., Apple, Google, Tata).\\n* **WTO**: World Trade Organization regulates international trade.\\n* **Flow of Capital**: Investment moves freely across borders.\\n\\n### 3. Political Issues\\n* **State Sovereignty**: Debate on whether state power is declining.\\n* **International Organizations**: UN, IMF, World Bank influence policies.\\n* **Non-State Actors**: NGOs (Amnesty International, Greenpeace) and Terrorist groups play a role.\\n* **Human Rights**: Global concern for human rights violations.\\n\\n### 4. Cultural Issues\\n* **Cultural Homogenisation**: Western culture spreading globally (McDonaldization).\\n* **Glocalisation**: Global culture adapting to local needs (e.g., McAloo Tikki).\\n* **Cultural Hybridisation**: Mixing of cultures.\\n\\n### 5. Technological Issues\\n* **Communication Revolution**: Internet, Mobile phones, Satellite TV.\\n* **Information Age**: Instant access to information.\\n* **Social Media**: Facebook, Twitter connecting people globally.\\n\\n### 6. Ideological Issues\\n* **Liberal Democracy**: Spread of democratic values.\\n* **Market Economy**: Capitalism as the dominant economic model.',
            flashcards: [
              { id: 'f1', front: 'What is Globalisation?', back: 'Integration of national economies and societies with the world.' },
              { id: 'f2', front: 'When did Globalisation gain momentum?', back: 'After 1991 (End of Cold War).' },
              { id: 'f3', front: 'What is Liberalisation?', back: 'Removing government restrictions on economy.' },
              { id: 'f4', front: 'What is Privatisation?', back: 'Selling government companies to private sector.' },
              { id: 'f5', front: 'Full form of MNC?', back: 'Multi-National Corporation.' },
              { id: 'f6', front: 'Full form of WTO?', back: 'World Trade Organization.' },
              { id: 'f7', front: 'What is Glocalisation?', back: 'Global products adapted to local culture.' },
              { id: 'f8', front: 'What is McDonaldization?', back: 'Spread of Western fast food culture globally.' },
              { id: 'f9', front: 'What are Non-State Actors?', back: 'Organizations not part of government (NGOs, MNCs).' },
              { id: 'f10', front: 'Example of an NGO?', back: 'Amnesty International, Greenpeace.' },
              { id: 'f11', front: 'What is Cultural Homogenisation?', back: 'World becoming culturally similar (Westernised).' },
              { id: 'f12', front: 'What is the Communication Revolution?', back: 'Rapid growth of Internet, Mobile, Satellite TV.' },
              { id: 'f13', front: 'Does Globalisation reduce State Sovereignty?', back: 'Debatable; state power is changing, not necessarily ending.' },
              { id: 'f14', front: 'What is TNC?', back: 'Trans-National Corporation.' },
              { id: 'f15', front: 'What is GATT?', back: 'General Agreement on Tariffs and Trade (predecessor to WTO).' },
              { id: 'f16', front: 'What is Outsourcing?', back: 'Contracting work to external agencies (often abroad).' },
              { id: 'f17', front: 'What is BPO?', back: 'Business Process Outsourcing.' },
              { id: 'f18', front: 'What is KPO?', back: 'Knowledge Process Outsourcing.' },
              { id: 'f19', front: 'What is the "Global Village"?', back: 'World connected like a village due to technology.' },
              { id: 'f20', front: 'Impact of Globalisation on Agriculture?', back: 'Competition, new markets, corporate farming.' },
              { id: 'f21', front: 'What is "Soft Power"?', back: 'Influence through culture and values (not military).' },
              { id: 'f22', front: 'What is "Hard Power"?', back: 'Influence through military and economic force.' },
              { id: 'f23', front: 'What is "Smart Power"?', back: 'Combination of Soft and Hard Power.' },
              { id: 'f24', front: 'Role of IMF?', back: 'Financial stability and loans to countries.' },
              { id: 'f25', front: 'Role of World Bank?', back: 'Loans for development projects.' },
              { id: 'f26', front: 'What is Consumerism?', back: 'Culture of increasing consumption of goods.' },
              { id: 'f27', front: 'Impact on Environment?', back: 'Pollution, climate change, resource depletion.' },
              { id: 'f28', front: 'What is the "Digital Divide"?', back: 'Gap between those with and without internet access.' },
              { id: 'f29', front: 'What is "Brain Drain"?', back: 'Migration of skilled professionals to developed countries.' },
              { id: 'f30', front: 'Is Globalisation only economic?', back: 'No, it is also political, cultural, and technological.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Globalisation gained momentum after:', options: ['1945', '1991', '2001', '2010'], correctIndex: 1, explanation: 'After the end of Cold War and Soviet disintegration.' },
              { id: 'q2', question: 'WTO was established in:', options: ['1991', '1995', '2000', '1948'], correctIndex: 1, explanation: '1st January 1995.' },
              { id: 'q3', question: 'Which is NOT a feature of Globalisation?', options: ['Liberalisation', 'Privatisation', 'Nationalism', 'Interdependence'], correctIndex: 2, explanation: 'Nationalism often opposes Globalisation.' },
              { id: 'q4', question: 'Glocalisation means:', options: ['Global + Local', 'Global + Legal', 'Global + Liberal', 'None'], correctIndex: 0, explanation: 'Adapting global products to local tastes.' },
              { id: 'q5', question: 'Amnesty International is an example of:', options: ['MNC', 'NGO', 'IGO', 'TNC'], correctIndex: 1, explanation: 'Non-Governmental Organization.' },
              { id: 'q6', question: 'McDonaldization refers to:', options: ['Food quality', 'Cultural homogenisation', 'Health issues', 'Pricing'], correctIndex: 1, explanation: 'Spread of Western fast-food culture.' },
              { id: 'q7', question: 'Which technology drove Globalisation?', options: ['Steam Engine', 'Internet', 'Printing Press', 'Radio'], correctIndex: 1, explanation: 'Internet and communication revolution.' },
              { id: 'q8', question: 'Liberalisation means:', options: ['More restrictions', 'Less restrictions', 'No trade', 'State control'], correctIndex: 1, explanation: 'Reducing government control.' },
              { id: 'q9', question: 'Privatisation means:', options: ['Public to Private', 'Private to Public', 'Closing companies', 'None'], correctIndex: 0, explanation: 'Transfer of ownership to private sector.' },
              { id: 'q10', question: 'MNC stands for:', options: ['Multi-National Corporation', 'Multi-National Council', 'Many Nations Club', 'None'], correctIndex: 0, explanation: 'Corporations operating in many countries.' },
              { id: 'q11', question: 'Who regulates international trade?', options: ['UN', 'WTO', 'WHO', 'UNESCO'], correctIndex: 1, explanation: 'World Trade Organization.' },
              { id: 'q12', question: 'Non-State actors include:', options: ['Governments', 'NGOs & Terrorists', 'Armies', 'Police'], correctIndex: 1, explanation: 'Groups other than the state government.' },
              { id: 'q13', question: 'Concept of "Global Village" is related to:', options: ['Agriculture', 'Technology', 'Politics', 'War'], correctIndex: 1, explanation: 'Marshall McLuhan\'s concept due to media.' },
              { id: 'q14', question: 'Outsourcing is a feature of:', options: ['Socialism', 'Globalisation', 'Feudalism', 'Communism'], correctIndex: 1, explanation: 'Sending work to cheaper locations.' },
              { id: 'q15', question: 'BPO stands for:', options: ['Business Process Outsourcing', 'Bank Process Office', 'Business Public Office', 'None'], correctIndex: 0, explanation: 'Outsourcing business tasks.' },
              { id: 'q16', question: 'Soft Power relies on:', options: ['Military', 'Culture & Values', 'Money', 'Force'], correctIndex: 1, explanation: 'Attraction rather than coercion.' },
              { id: 'q17', question: 'Hard Power relies on:', options: ['Culture', 'Military & Economy', 'Diplomacy', 'Ideas'], correctIndex: 1, explanation: 'Coercion and payment.' },
              { id: 'q18', question: 'Human Rights are:', options: ['National', 'Universal', 'Regional', 'Optional'], correctIndex: 1, explanation: 'Apply to all humans everywhere.' },
              { id: 'q19', question: 'Environmental issues are:', options: ['Local', 'Global', 'Personal', 'None'], correctIndex: 1, explanation: 'Climate change affects the whole world.' },
              { id: 'q20', question: 'The "End of History" thesis was given by:', options: ['Huntington', 'Fukuyama', 'Marx', 'Weber'], correctIndex: 1, explanation: 'Francis Fukuyama.' },
              { id: 'q21', question: 'Clash of Civilizations was written by:', options: ['Fukuyama', 'Huntington', 'Amartya Sen', 'Rawls'], correctIndex: 1, explanation: 'Samuel P. Huntington.' },
              { id: 'q22', question: 'Which is a negative impact of Globalisation?', options: ['Economic growth', 'Cultural exchange', 'Inequality', 'Technology'], correctIndex: 2, explanation: 'Widening gap between rich and poor.' },
              { id: 'q23', question: 'SEZ stands for:', options: ['Special Economic Zone', 'State Economic Zone', 'Social Economic Zone', 'None'], correctIndex: 0, explanation: 'Zones with liberal economic laws.' },
              { id: 'q24', question: 'FDI stands for:', options: ['Foreign Direct Investment', 'Free Direct Income', 'Foreign Development Index', 'None'], correctIndex: 0, explanation: 'Investment from abroad.' },
              { id: 'q25', question: 'Which sector grew most in India due to Globalisation?', options: ['Agriculture', 'Service (IT)', 'Mining', 'Fishing'], correctIndex: 1, explanation: 'IT and Service sector boom.' },
              { id: 'q26', question: 'Consumerism promotes:', options: ['Saving', 'Buying goods', 'Recycling', 'Fasting'], correctIndex: 1, explanation: 'Culture of consumption.' },
              { id: 'q27', question: 'Transnational Corporations are also called:', options: ['NGOs', 'MNCs', 'IGOs', 'PSUs'], correctIndex: 1, explanation: 'Similar to MNCs.' },
              { id: 'q28', question: 'Globalisation leads to:', options: ['Isolation', 'Interdependence', 'War', 'Stagnation'], correctIndex: 1, explanation: 'Countries depend on each other.' },
              { id: 'q29', question: 'Which country is a major player in Globalisation?', options: ['North Korea', 'USA', 'Cuba', 'Iran'], correctIndex: 1, explanation: 'USA drives many global trends.' },
              { id: 'q30', question: '1991 Economic Reforms in India were led by:', options: ['Indira Gandhi', 'Manmohan Singh', 'Vajpayee', 'Modi'], correctIndex: 1, explanation: 'As Finance Minister under PM Rao.' }
            ],
            reels: [
              { id: 'r1', title: 'Globalisation', content: 'Integration of world.\nEconomies & Cultures.\nPost-1991 era.', color: getReelColor(0) },
              { id: 'r2', title: 'Liberalisation', content: 'Free market.\nLess rules.\nOpen economy.', color: getReelColor(1) },
              { id: 'r3', title: 'Privatisation', content: 'Sell PSUs.\nPrivate ownership.\nEfficiency focus.', color: getReelColor(2) },
              { id: 'r4', title: 'MNCs', content: 'Multi-National Corp.\nApple, Google, Tata.\nGlobal presence.', color: getReelColor(3) },
              { id: 'r5', title: 'WTO', content: 'World Trade Org.\nRegulates trade.\nSince 1995.', color: getReelColor(4) },
              { id: 'r6', title: 'Glocalisation', content: 'Global + Local.\nMcAloo Tikki.\nThink Global, Act Local.', color: getReelColor(5) },
              { id: 'r7', title: 'McDonaldization', content: 'Fast food culture.\nStandardization.\nCultural spread.', color: getReelColor(6) },
              { id: 'r8', title: 'Internet', content: 'World Wide Web.\nInstant info.\nConnected world.', color: getReelColor(7) },
              { id: 'r9', title: 'Mobile Revolution', content: 'Smartphones.\nCommunication.\nApps & Social Media.', color: getReelColor(8) },
              { id: 'r10', title: 'NGOs', content: 'Non-Govt Orgs.\nCivil Society.\nSocial causes.', color: getReelColor(9) },
              { id: 'r11', title: 'Human Rights', content: 'Universal rights.\nUN Declaration.\nDignity for all.', color: getReelColor(0) },
              { id: 'r12', title: 'Environment', content: 'Climate Change.\nGlobal Warming.\nShared responsibility.', color: getReelColor(1) },
              { id: 'r13', title: 'State Sovereignty', content: 'Power of State.\nChallenged by Globalisation.\nBut still relevant.', color: getReelColor(2) },
              { id: 'r14', title: 'Outsourcing', content: 'Jobs go abroad.\nCost saving.\nBPO & KPO.', color: getReelColor(3) },
              { id: 'r15', title: 'Soft Power', content: 'Culture, Movies.\nYoga, Bollywood.\nAttraction power.', color: getReelColor(4) },
              { id: 'r16', title: 'Hard Power', content: 'Military might.\nEconomic sanctions.\nCoercion.', color: getReelColor(5) },
              { id: 'r17', title: 'Global Village', content: 'Connected world.\nDistance shrinks.\nMedia effect.', color: getReelColor(6) },
              { id: 'r18', title: 'Consumerism', content: 'Buy more.\nShopping malls.\nMaterialism.', color: getReelColor(7) },
              { id: 'r19', title: 'FDI', content: 'Foreign Investment.\nCapital flow.\nEconomic growth.', color: getReelColor(8) },
              { id: 'r20', title: 'Digital Divide', content: 'Haves & Have-nots.\nInternet access gap.\nInequality.', color: getReelColor(9) },
              { id: 'r21', title: 'Terrorism', content: 'Global threat.\nCross-border.\nNon-state actors.', color: getReelColor(0) },
              { id: 'r22', title: 'Migration', content: 'People moving.\nFor jobs, safety.\nBrain Drain.', color: getReelColor(1) },
              { id: 'r23', title: 'Cultural Hybrid', content: 'Mixing cultures.\nFusion music.\nFusion food.', color: getReelColor(2) },
              { id: 'r24', title: 'Trade Barriers', content: 'Tariffs, Quotas.\nReduced by WTO.\nFree Trade.', color: getReelColor(3) },
              { id: 'r25', title: 'Interdependence', content: 'Countries rely on each other.\nTrade, Energy.\nPeace incentive.', color: getReelColor(4) },
              { id: 'r26', title: '1991 Reforms', content: 'India opens up.\nLPG Model.\nManmohan Singh.', color: getReelColor(5) },
              { id: 'r27', title: 'Social Media', content: 'Facebook, Insta.\nGlobal connection.\nFake news too.', color: getReelColor(6) },
              { id: 'r28', title: 'Containerization', content: 'Shipping goods.\nStandard boxes.\nCheaper trade.', color: getReelColor(7) },
              { id: 'r29', title: 'Smart Power', content: 'Soft + Hard.\nClever strategy.\nEffective diplomacy.', color: getReelColor(8) },
              { id: 'r30', title: 'Future?', content: 'More connected?\nOr deglobalisation?\nTime will tell.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'pl3',
                question: 'Explain the concept of Globalisation and its impact on Indian economy. (8 marks)',
                mnemonic: 'LPG + MNC - Liberalisation, Privatisation, Globalisation + MNCs',
                answer: `### Concept of Globalisation

**Definition**: Globalisation is the process of integration of national economies into the global economy through trade, investment, technology, and cultural exchange.

**Key Features**:
1. **Free movement** of goods, services, capital, and labor
2. **Interconnected** world economies
3. **Spread** of technology and information
4. **Cultural exchange** and homogenization

### Impact on Indian Economy

**Positive Impacts**:
| Aspect | Impact |
|--------|--------|
| FDI Inflow | Increased foreign investment (IT, Telecom) |
| GDP Growth | Higher economic growth rate (7-8% average) |
| Employment | New jobs in IT, BPO, KPO sectors |
| Technology | Access to latest technology and innovation |
| Consumer Choice | More products and services available |
| Competition | Improved quality and lower prices |

**Negative Impacts**:
| Aspect | Impact |
|--------|--------|
| Agriculture | Distress due to competition |
| MSMEs | Small industries struggled |
| Inequality | Rich-poor gap widened |
| Cultural | Western influence on local culture |
| Environment | Pollution and resource exploitation |

### Conclusion
Globalisation has been a double-edged sword for India - bringing growth but also creating challenges that need to be addressed through inclusive policies.`
              },
              {
                id: 'pl4',
                question: 'Discuss the role of Non-State Actors in International Relations with examples. (8 marks)',
                mnemonic: 'MNT - MNCs, NGOs, Terrorists',
                answer: `### Non-State Actors

**Definition**: Entities that participate in international relations but are not states or governments.

### Types of Non-State Actors

**1. Multinational Corporations (MNCs)**:
- Companies operating in multiple countries
- Examples: Apple, Google, Reliance, Tata
- Influence: Economic policy, employment, technology transfer
- Impact: Can be larger than some country economies

**2. Non-Governmental Organizations (NGOs)**:
| Type | Examples | Role |
|------|----------|------|
| Humanitarian | Red Cross, Doctors Without Borders | Emergency relief |
| Human Rights | Amnesty International | Advocacy |
| Environmental | Greenpeace, WWF | Conservation |
| Development | Oxfam, CARE | Poverty reduction |

**3. Terrorist Organizations**:
- Use violence for political aims
- Examples: Al-Qaeda, ISIS
- Impact: Force states to cooperate on security
- Challenge to state sovereignty

**4. Media**:
- CNN, BBC - Shape global opinion
- Social media - Instant information spread

**5. Religious Groups**:
- Vatican, Islamic organizations
- Soft power and cultural influence

### Significance
- Challenge traditional state-centric view
- Shape global agenda
- Can be positive (development) or negative (terrorism)
- Growing influence in 21st century

### Conclusion
Non-state actors have become crucial players in international relations, both complementing and challenging state authority in various domains.`
              }
            ],
            // Board Exam Questions - Chapter 2: Globalisation
            boardQuestions: {
              q1a_mcq: [
                { id: 'bq2a1', question: 'Globalisation gained momentum after:', options: ['1985', '1991', '2001', '1975'], correctIndex: 1, explanation: 'After Cold War end and LPG reforms in India.' },
                { id: 'bq2a2', question: 'WTO was established in:', options: ['1991', '1995', '2000', '1948'], correctIndex: 1, explanation: 'WTO replaced GATT on 1st January 1995.' },
                { id: 'bq2a3', question: 'LPG in economics stands for:', options: ['Liquified Petroleum Gas', 'Liberalisation Privatisation Globalisation', 'Local Political Governance', 'Liberal Progressive Government'], correctIndex: 1, explanation: '1991 Indian economic reforms.' },
                { id: 'bq2a4', question: 'Which is NOT a feature of Globalisation?', options: ['Liberalisation', 'Privatisation', 'Protectionism', 'Free Trade'], correctIndex: 2, explanation: 'Protectionism opposes free trade and globalisation.' },
                { id: 'bq2a5', question: 'MNC stands for:', options: ['Multi-National Corporation', 'Multi-National Council', 'Monetary National Control', 'Marketing National Company'], correctIndex: 0, explanation: 'Companies operating in multiple countries.' },
                { id: 'bq2a6', question: 'Glocalisation means:', options: ['Global isolation', 'Global + Local adaptation', 'Global colonisation', 'Global + Legal framework'], correctIndex: 1, explanation: 'Adapting global products to local tastes (e.g., McAloo Tikki).' },
                { id: 'bq2a7', question: 'McDonaldization is an example of:', options: ['Cultural Homogenisation', 'Glocalisation', 'Protectionism', 'Nationalism'], correctIndex: 0, explanation: 'Spread of Western fast-food culture globally.' },
                { id: 'bq2a8', question: 'BPO stands for:', options: ['Business Process Outsourcing', 'Bank Private Office', 'Business Public Organisation', 'Bureau of Public Operations'], correctIndex: 0, explanation: 'Outsourcing business processes to other countries.' },
                { id: 'bq2a9', question: 'India\'s 1991 economic reforms were led by:', options: ['Indira Gandhi', 'Manmohan Singh', 'A.B. Vajpayee', 'Rajiv Gandhi'], correctIndex: 1, explanation: 'As Finance Minister under PM P.V. Narasimha Rao.' },
                { id: 'bq2a10', question: 'FDI stands for:', options: ['Foreign Direct Investment', 'Federal Development Index', 'Free Domestic Industry', 'Foreign Development Initiative'], correctIndex: 0, explanation: 'Investment from foreign companies in domestic economy.' }
              ],
              q1b_oddOneOut: [
                { id: 'bq2b1', set: ['WTO', 'IMF', 'World Bank', 'Greenpeace'], answer: 'Greenpeace', explanation: 'Others are International Economic Organizations; Greenpeace is an NGO.' },
                { id: 'bq2b2', set: ['Liberalisation', 'Privatisation', 'Globalisation', 'Nationalism'], answer: 'Nationalism', explanation: 'Others are components of LPG reforms; Nationalism often opposes globalisation.' },
                { id: 'bq2b3', set: ['Apple', 'Google', 'ISRO', 'Microsoft'], answer: 'ISRO', explanation: 'Others are MNCs; ISRO is Indian government space agency.' },
                { id: 'bq2b4', set: ['Cultural Homogenisation', 'Glocalisation', 'Westernisation', 'Protectionism'], answer: 'Protectionism', explanation: 'Others are cultural aspects of globalisation; Protectionism is anti-globalisation economic policy.' },
                { id: 'bq2b5', set: ['IT Sector', 'BPO', 'Agriculture', 'KPO'], answer: 'Agriculture', explanation: 'Others are service sectors that grew rapidly due to globalisation; Agriculture faced challenges.' }
              ],
              q1c_correlation: [
                { id: 'bq2c1', a: 'WTO', b: '1995', c: 'GATT', answer: '1947', explanation: 'GATT was established in 1947, WTO replaced it in 1995.' },
                { id: 'bq2c2', a: 'Liberalisation', b: 'Less restrictions', c: 'Protectionism', answer: 'More restrictions', explanation: 'Protectionism imposes trade barriers, opposite of liberalisation.' },
                { id: 'bq2c3', a: 'Soft Power', b: 'Culture and Values', c: 'Hard Power', answer: 'Military and Economy', explanation: 'Hard power uses force/money; Soft power uses attraction.' },
                { id: 'bq2c4', a: 'MNC', b: 'Multi-National Corporation', c: 'TNC', answer: 'Trans-National Corporation', explanation: 'Both refer to companies operating across nations.' },
                { id: 'bq2c5', a: 'McDonaldization', b: 'Cultural Homogenisation', c: 'McAloo Tikki', answer: 'Glocalisation', explanation: 'McAloo Tikki is Indian adaptation of global McDonald\'s menu.' }
              ],
              q1d_trueFalse: [
                { id: 'bq2d1', statement: 'Globalisation is only an economic phenomenon.', answer: false, reason: 'Globalisation is multi-dimensional: economic, political, cultural, and technological.' },
                { id: 'bq2d2', statement: 'WTO replaced GATT in 1995.', answer: true, reason: 'World Trade Organization succeeded General Agreement on Tariffs and Trade on 1st January 1995.' },
                { id: 'bq2d3', statement: 'Globalisation always benefits all sections of society equally.', answer: false, reason: 'Globalisation has led to increased inequality, with benefits concentrated among skilled/educated.' },
                { id: 'bq2d4', statement: 'India opened its economy through LPG reforms in 1991.', answer: true, reason: 'Liberalisation, Privatisation, Globalisation reforms were introduced during economic crisis.' },
                { id: 'bq2d5', statement: 'Cultural Homogenisation means preservation of local cultures.', answer: false, reason: 'Cultural Homogenisation refers to spread of Western/dominant cultures, often at expense of local traditions.' },
                { id: 'bq2d6', statement: 'Glocalisation is adapting global products to local tastes.', answer: true, reason: 'Example: McDonald\'s offering McAloo Tikki in India adapts to local vegetarian preferences.' }
              ],
              q1e_identifyConcept: [
                { id: 'bq2e1', statement: 'A process of international integration through exchange of products, ideas, and cultures.', answer: 'Globalisation', features: ['Gained momentum after 1991', 'Multi-dimensional: economic, political, cultural, technological'] },
                { id: 'bq2e2', statement: 'Reducing government control and regulations on business and trade.', answer: 'Liberalisation', features: ['Part of LPG reforms', 'Promotes free market economy'] },
                { id: 'bq2e3', statement: 'Transfer of ownership from government to private sector.', answer: 'Privatisation', features: ['Selling PSUs to private companies', 'Improves efficiency through competition'] },
                { id: 'bq2e4', statement: 'Adapting global products and practices to local preferences.', answer: 'Glocalisation', features: ['Global + Local', 'Example: McAloo Tikki, Bollywood fusion music'] },
                { id: 'bq2e5', statement: 'Spread of Western culture leading to uniformity across the world.', answer: 'Cultural Homogenisation', features: ['McDonaldization', 'English language dominance', 'Western lifestyle adoption'] },
                { id: 'bq2e6', statement: 'Companies that operate in multiple countries with production facilities across borders.', answer: 'MNCs/TNCs', features: ['Examples: Apple, Google, Tata, Samsung', 'Move capital, technology, and jobs globally'] }
              ],
              q1f_conceptMap: [
                { id: 'bq2f1', topic: 'LPG Reforms', structure: '1991 Reforms → [___] + [___] + [___]', blanks: ['Liberalisation', 'Privatisation', 'Globalisation'] },
                { id: 'bq2f2', topic: 'Types of Globalisation', structure: 'Globalisation → [___] + [___] + [___] + [___]', blanks: ['Economic', 'Political', 'Cultural', 'Technological'] },
                { id: 'bq2f3', topic: 'International Economic Organizations', structure: 'Global Trade → [___] (1947) → [___] (1995)', blanks: ['GATT', 'WTO'] },
                { id: 'bq2f4', topic: 'Power Types', structure: 'International Influence → [___] (Force) + [___] (Culture) = [___]', blanks: ['Hard Power', 'Soft Power', 'Smart Power'] }
              ],
              q2_identifyExplain: [
                { id: 'bq2ia1', statement: 'A process where economies, societies, and cultures become integrated through trade, investment, and technology.', concept: 'Globalisation', features: ['Multi-dimensional phenomenon covering economic, political, cultural, technological spheres', 'Accelerated after Cold War end (1991) and technological revolution (Internet, communication)'] },
                { id: 'bq2ia2', statement: 'The economic policy reforms introduced in India in 1991 to liberalize economy and attract foreign investment.', concept: 'LPG Reforms (Liberalisation, Privatisation, Globalisation)', features: ['Introduced during balance of payments crisis under PM Narasimha Rao and FM Manmohan Singh', 'Reduced license raj, opened economy to FDI, privatised PSUs, integrated India with global economy'] },
                { id: 'bq2ia3', statement: 'The spread of a dominant culture leading to uniformity across the world, often called Westernisation.', concept: 'Cultural Homogenisation', features: ['Examples: English as global language, Hollywood movies, Western fashion and food (McDonaldization)', 'Criticism: Loss of local traditions, languages, and cultural diversity'] },
                { id: 'bq2ia4', statement: 'Adapting global products and practices to suit local tastes and preferences.', concept: 'Glocalisation', features: ['Examples: McAloo Tikki in India, Bollywood-Hollywood collaborations, local language dubbing of global content', 'Represents balance between global integration and local identity preservation'] },
                { id: 'bq2ia5', statement: 'International organization that regulates and promotes free trade between nations.', concept: 'WTO (World Trade Organization)', features: ['Established 1995 replacing GATT (1947)', 'Sets rules for international trade, resolves disputes, promotes trade liberalisation'] }
              ],
              q3_distinguish: [
                { id: 'bq2d1', pair: ['Liberalisation', 'Privatisation'], points: [
                  { aspect: 'Meaning', first: 'Reducing government restrictions on economy', second: 'Transferring government ownership to private sector' },
                  { aspect: 'Focus', first: 'Rules and regulations', second: 'Ownership of enterprises' },
                  { aspect: 'Example', first: 'Removing license raj, reducing import duties', second: 'Disinvestment in BSNL, Air India sale' },
                  { aspect: 'Aim', first: 'Create competitive, free market environment', second: 'Improve efficiency through private management' }
                ]},
                { id: 'bq2d2', pair: ['Cultural Homogenisation', 'Glocalisation'], points: [
                  { aspect: 'Meaning', first: 'World becoming culturally uniform/Western', second: 'Adapting global to local preferences' },
                  { aspect: 'Direction', first: 'One-way: dominant culture spreading', second: 'Two-way: adaptation and mixing' },
                  { aspect: 'Example', first: 'McDonald\'s, Starbucks, English language', second: 'McAloo Tikki, Bollywood songs in Hollywood' },
                  { aspect: 'Impact', first: 'Loss of local cultural diversity', second: 'Preservation of local identity with global access' }
                ]},
                { id: 'bq2d3', pair: ['Soft Power', 'Hard Power'], points: [
                  { aspect: 'Method', first: 'Attraction through culture, values, policies', second: 'Coercion through military force and economic sanctions' },
                  { aspect: 'Resources', first: 'Culture, political values, foreign policies', second: 'Armed forces, economic leverage' },
                  { aspect: 'Example', first: 'Bollywood, Yoga, Hollywood, American pop culture', second: 'Military intervention, trade wars, sanctions' },
                  { aspect: 'Coined By', first: 'Joseph Nye', second: 'Traditional concept in IR' }
                ]},
                { id: 'bq2d4', pair: ['MNC', 'Domestic Company'], points: [
                  { aspect: 'Operations', first: 'Multiple countries', second: 'Single country' },
                  { aspect: 'Examples', first: 'Apple, Google, Samsung, Tata', second: 'Local businesses serving domestic market' },
                  { aspect: 'Capital', first: 'Global investments, FDI', second: 'Domestic capital' },
                  { aspect: 'Influence', first: 'Shape global economy and politics', second: 'Limited to national economy' }
                ]},
                { id: 'bq2d5', pair: ['GATT', 'WTO'], points: [
                  { aspect: 'Full Form', first: 'General Agreement on Tariffs and Trade', second: 'World Trade Organization' },
                  { aspect: 'Established', first: '1947', second: '1995' },
                  { aspect: 'Nature', first: 'Agreement/Treaty', second: 'Permanent Organization' },
                  { aspect: 'Coverage', first: 'Mainly goods', second: 'Goods, services, intellectual property' }
                ]}
              ],
              q4_briefAnswers: [
                { id: 'bq2ba1', question: 'Explain the concept of Globalisation and its dimensions.', answer: '**Globalisation:**\n\n**Definition**: Process of international integration through exchange of products, ideas, cultures, and worldviews.\n\n**Dimensions:**\n\n1. **Economic**: Free trade, FDI, MNCs, WTO, liberalised markets\n\n2. **Political**: Role of international organizations (UN, IMF), human rights discourse, declining state sovereignty\n\n3. **Cultural**: Spread of Western culture (McDonaldization), Glocalisation, cultural exchange\n\n4. **Technological**: Internet revolution, social media, instant communication, digital economy\n\n**India Context**: LPG reforms 1991 integrated India with global economy, IT sector boom, call centers/BPOs.' },
                { id: 'bq2ba2', question: 'What are the positive and negative impacts of Globalisation on India?', answer: '**Impact of Globalisation on India:**\n\n**Positive:**\n1. Economic growth - GDP rose from $270B (1991) to $3.5T+ (2023)\n2. IT sector boom - Bangalore as Silicon Valley of India\n3. FDI inflow - Technology transfer, job creation\n4. Consumer choice - Access to global brands, products\n5. Higher living standards for middle class\n\n**Negative:**\n1. **Inequality** - Rich-poor gap widened\n2. **Agriculture crisis** - Farmers face global competition\n3. **Cultural erosion** - Western values replacing traditions\n4. **Job losses** - Traditional industries declined\n5. **Environment** - Pollution, resource exploitation\n6. **Digital divide** - Rural areas left behind' },
                { id: 'bq2ba3', question: 'Explain the role of MNCs in Globalisation.', answer: '**Role of MNCs in Globalisation:**\n\n**Definition**: Multi-National Corporations operate in multiple countries with production/service facilities globally.\n\n**Role:**\n1. **Capital Flow**: Bring FDI, technology, management skills\n2. **Job Creation**: Employ millions across countries\n3. **Technology Transfer**: Introduce new methods, R&D\n4. **Economic Integration**: Link national economies globally\n5. **Competition**: Force local firms to improve quality\n\n**Examples**: Apple, Google, Samsung, Tata, Reliance\n\n**Criticism:**\n- Exploit cheap labor\n- Transfer profits to home country\n- Influence host country policies\n- Environmental damage' },
                { id: 'bq2ba4', question: 'Distinguish between Cultural Homogenisation and Glocalisation.', answer: '**Cultural Homogenisation vs Glocalisation:**\n\n**Cultural Homogenisation:**\n- World becoming culturally uniform\n- Spread of Western/dominant culture\n- Examples: McDonald\'s, Hollywood, English language\n- Criticism: Loss of local traditions, languages\n\n**Glocalisation (Global + Local):**\n- Adapting global products to local tastes\n- Preserves local identity with global access\n- Examples:\n  - McAloo Tikki in India\n  - Bollywood song remixes\n  - Hindi dubbed Hollywood movies\n- Represents cultural negotiation, not domination\n\n**Conclusion**: Glocalisation offers middle path between complete Westernisation and isolation.' },
                { id: 'bq2ba5', question: 'What is the Digital Divide? How does it affect globalisation?', answer: '**Digital Divide:**\n\n**Definition**: Gap between those with access to digital technology (Internet, computers) and those without.\n\n**Dimensions:**\n1. **Global**: Developed vs Developing countries\n2. **National**: Urban vs Rural areas\n3. **Social**: Rich vs Poor, Educated vs Uneducated\n\n**Impact on Globalisation:**\n- Unequal benefits from digital economy\n- Rural areas excluded from e-commerce, online education\n- Skilled workers benefit, unskilled left behind\n- Creates new form of inequality\n\n**India Context:**\n- Digital India initiative to bridge gap\n- Jan Dhan-Aadhaar-Mobile (JAM) trinity\n- Still significant rural-urban divide' }
              ],
              q5_longAnswers: [
                { id: 'bq2la1', question: 'Explain the concept of Globalisation. Discuss its economic, political, cultural, and technological dimensions. What are its impacts on India? (8 marks)', mnemonic: 'EPCT + India', answer: '**Globalisation: Concept and Dimensions**\n\n### Introduction\nGlobalisation is the process of international integration through exchange of products, ideas, cultures, and worldviews. It accelerated after 1991 with Cold War end and technological revolution.\n\n### Definition\nGlobalisation involves free movement of goods, capital, technology, ideas, and people across national boundaries, creating an interconnected world.\n\n### Dimensions of Globalisation\n\n**1. Economic Globalisation**\n- Free trade and removal of trade barriers\n- FDI (Foreign Direct Investment) flows\n- MNCs operating across borders\n- WTO regulating international trade\n- Capital and labor mobility\n\n**2. Political Globalisation**\n- Rise of international organizations (UN, IMF, World Bank)\n- Human rights as global concern\n- Debate on declining state sovereignty\n- Global governance mechanisms\n\n**3. Cultural Globalisation**\n- Spread of Western culture (McDonaldization)\n- Glocalisation (adapting global to local)\n- Cultural exchange and hybridization\n- English as global language\n\n**4. Technological Globalisation**\n- Internet and communication revolution\n- Social media connecting billions\n- Digital economy and e-commerce\n- Technology transfer across borders\n\n### Impact on India\n\n**Positive:**\n- IT sector boom (Infosys, TCS, Wipro)\n- Economic growth and rising middle class\n- Access to global technology and brands\n- Higher education opportunities abroad\n\n**Negative:**\n- Increased inequality (rich-poor gap)\n- Agricultural distress\n- Cultural erosion concerns\n- Digital divide\n\n### Conclusion\nGlobalisation has transformed India into a significant player in the global economy while also creating challenges that need to be addressed through inclusive policies.' },
                { id: 'bq2la2', question: 'What is Cultural Homogenisation? How does Glocalisation provide an alternative? Discuss with examples. (8 marks)', mnemonic: 'CHoM + GloL', answer: '**Cultural Homogenisation and Glocalisation**\n\n### Introduction\nGlobalisation has profound cultural impacts, leading to debates about cultural uniformity versus diversity.\n\n### Cultural Homogenisation\n\n**Definition**: Process where dominant (often Western) culture spreads globally, leading to cultural uniformity.\n\n**Features:**\n1. **McDonaldization**: Fast food culture spreading worldwide\n2. **Hollywood Dominance**: American films and entertainment\n3. **English Language**: Becoming global lingua franca\n4. **Western Lifestyle**: Jeans, pop music, consumerism\n5. **Uniformity**: Same brands, same products everywhere\n\n**Concerns:**\n- Loss of local languages and traditions\n- Erosion of indigenous cultures\n- Cultural imperialism accusations\n- Identity crisis among youth\n\n### Glocalisation as Alternative\n\n**Definition**: Adapting global products and practices to local tastes and preferences (Global + Local).\n\n**Examples:**\n1. **Food**: McAloo Tikki (vegetarian burger in India), Teriyaki McBurger (Japan)\n2. **Entertainment**: Bollywood incorporating Western music styles while maintaining Indian themes\n3. **Technology**: Smartphones with local language support\n4. **Business**: MNCs adapting products for local markets\n5. **Fashion**: Fusion wear combining Western and Indian elements\n\n### India Context\n\n**Cultural Homogenisation Examples:**\n- Popularity of English-medium education\n- Western birthday celebrations replacing traditional ones\n- Fast food chains in every city\n\n**Glocalisation Examples:**\n- Diwali-themed advertisements by global brands\n- Hindi dubbing of Hollywood movies\n- Indian music remixes of Western songs\n- Khadi-inspired global fashion\n\n### Conclusion\nGlocalisation offers a middle path that allows societies to benefit from globalisation while preserving local cultural identity. It represents negotiation rather than domination, enabling cultural diversity within global interconnection.' }
              ],
              q6_analysis: [
                { id: 'bq2an1', type: 'timeline', title: 'Globalisation Timeline', data: '1947 - GATT established | 1991 - India LPG reforms | 1995 - WTO replaces GATT | 2000s - IT boom in India | 2008 - Global Financial Crisis | 2020s - Digital Economy growth', questions: ['Identify the key economic reform year for India.', 'Which organization succeeded GATT?', 'How did 2008 crisis affect globalisation?'] },
                { id: 'bq2an2', type: 'comparison', title: 'Globalisation Impact Comparison', data: 'Benefits: Economic growth, Technology access, Consumer choice, Job creation in services | Challenges: Inequality, Cultural erosion, Agricultural distress, Digital divide', questions: ['Are benefits of globalisation equally distributed? Explain.', 'Which sector in India gained most from globalisation?', 'How can negative impacts be addressed?'] },
                { id: 'bq2an3', type: 'concept_map', title: 'Types of Power in Globalisation', data: 'Soft Power (Culture, Values) + Hard Power (Military, Economy) = Smart Power | Examples: India - Yoga/Bollywood (Soft), USA - Military bases (Hard)', questions: ['Define Soft Power with examples.', 'Why is Smart Power considered effective in modern diplomacy?'] }
              ]
            }

          },
          {
            id: 'pol3',
            title: '3. Key Concepts and Issues since 1991 : Humanitarian Issues',
            description: 'Environment, Poverty, Gender and Human Rights.',
            summary: '**Environment**: Stockholm to Paris Agreement\n**Poverty**: Development vs Poverty, Gender issues\n**Human Rights**: Universal Declaration, Rights of Women and Children',
            detailedNotes: '### 1. Environment and Sustainability\\n* **Stockholm Conference (1972)**: First major conference on environment.\\n* **Brundtland Commission (1987)**: Defined "Sustainable Development" (meeting needs of present without compromising future).\\n* **Rio Earth Summit (1992)**: Agenda 21, UNFCCC.\\n* **Kyoto Protocol (1997)**: Reduce Greenhouse Gas emissions.\\n* **Paris Agreement (2015)**: Limit global warming to below 2-�C.\\n\\n### 2. Poverty and Development\\n* **Traditional View**: Lack of food, clothing, shelter (Material).\\n* **Modern View**: Lack of opportunities, voice, dignity (Non-material).\\n* **UN SDGs**: 17 Sustainable Development Goals to end poverty by 2030.\\n* **India\'s Approach**: Poverty Alleviation programs + Economic Growth.\\n\\n### 3. Gender Issues\\n* **Gender vs Sex**: Sex is biological; Gender is social construct.\\n* **Gender Inequality**: Wage gap, political underrepresentation, violence.\\n* **Empowerment**: Giving power to women to make choices.\\n* **CEDAW (1979)**: Convention on Elimination of All Forms of Discrimination Against Women.\\n\\n### 4. Human Rights\\n* **UDHR (1948)**: Universal Declaration of Human Rights.\\n* **Three Generations of Rights**:\\n  1. **Civil & Political** (Liberty)\\n  2. **Economic, Social & Cultural** (Equality)\\n  3. **Collective/Developmental** (Fraternity)\\n* **Human Rights in India**: NHRC, Fundamental Rights.',
            flashcards: [
              { id: 'f1', front: 'What is Sustainable Development?', back: 'Development that meets present needs without compromising future generations.' },
              { id: 'f2', front: 'First Earth Summit was held in?', back: 'Rio de Janeiro (1992).' },
              { id: 'f3', front: 'Kyoto Protocol is related to?', back: 'Reducing Greenhouse Gas emissions.' },
              { id: 'f4', front: 'Paris Agreement (2015) goal?', back: 'Limit global temperature rise below 2-�C.' },
              { id: 'f5', front: 'Stockholm Conference year?', back: '1972.' },
              { id: 'f6', front: 'What is Material Poverty?', back: 'Lack of basic needs like food, shelter, money.' },
              { id: 'f7', front: 'What is Non-material Poverty?', back: 'Lack of voice, dignity, rights, opportunities.' },
              { id: 'f8', front: 'Difference between Sex and Gender?', back: 'Sex is biological; Gender is socially constructed.' },
              { id: 'f9', front: 'What is the "Glass Ceiling"?', back: 'Invisible barrier preventing women from rising to top positions.' },
              { id: 'f10', front: 'Full form of CEDAW?', back: 'Convention on Elimination of All Forms of Discrimination Against Women.' },
              { id: 'f11', front: 'When was UDHR adopted?', back: '10th December 1948.' },
              { id: 'f12', front: 'Human Rights Day is celebrated on?', back: '10th December.' },
              { id: 'f13', front: 'What are First Generation Rights?', back: 'Civil and Political Rights (Liberty).' },
              { id: 'f14', front: 'What are Second Generation Rights?', back: 'Economic, Social and Cultural Rights (Equality).' },
              { id: 'f15', front: 'What are Third Generation Rights?', back: 'Collective Rights (Development, Environment, Peace).' },
              { id: 'f16', front: 'Who is Malala Yousafzai?', back: 'Nobel laureate for girls\' education rights.' },
              { id: 'f17', front: 'Who is Greta Thunberg?', back: 'Environmental activist.' },
              { id: 'f18', front: 'What is the Chipko Movement?', back: 'Tree hugging movement to protect forests in India.' },
              { id: 'f19', front: 'Full form of NHRC?', back: 'National Human Rights Commission.' },
              { id: 'f20', front: 'What is HDI?', back: 'Human Development Index.' },
              { id: 'f21', front: 'Who developed HDI?', back: 'Mahbub ul Haq and Amartya Sen.' },
              { id: 'f22', front: 'What is Agenda 21?', back: 'Action plan from Rio Earth Summit (1992).' },
              { id: 'f23', front: 'What is Eco-feminism?', back: 'Movement connecting women\'s oppression with nature\'s exploitation.' },
              { id: 'f24', front: 'How many SDGs are there?', back: '17 Goals.' },
              { id: 'f25', front: 'Target year for SDGs?', back: '2030.' },
              { id: 'f26', front: 'What is "Green Peace"?', back: 'International environmental NGO.' },
              { id: 'f27', front: 'What is Amnesty International?', back: 'International Human Rights NGO.' },
              { id: 'f28', front: 'What is the "Poverty Line"?', back: 'Minimum income level to secure basic necessities.' },
              { id: 'f29', front: 'What is "Empowerment"?', back: 'Process of becoming stronger and more confident in controlling one\'s life.' },
              { id: 'f30', front: 'What is Climate Change?', back: 'Long-term shifts in temperatures and weather patterns.' }
            ],
            mcqs: [
              { id: 'q1', question: 'First Earth Summit (1992) was held in:', options: ['Stockholm', 'Rio de Janeiro', 'Paris', 'Kyoto'], correctIndex: 1, explanation: 'Rio de Janeiro, Brazil.' },
              { id: 'q2', question: 'Sustainable Development concept was popularized by:', options: ['Brundtland Commission', 'UN', 'World Bank', 'IMF'], correctIndex: 0, explanation: 'In the report "Our Common Future" (1987).' },
              { id: 'q3', question: 'Kyoto Protocol (1997) deals with:', options: ['Trade', 'Human Rights', 'Climate Change', 'Terrorism'], correctIndex: 2, explanation: 'Reducing Greenhouse Gases.' },
              { id: 'q4', question: 'Human Rights Day is on:', options: ['10 Dec', '2 Oct', '15 Aug', '26 Jan'], correctIndex: 0, explanation: 'Anniversary of UDHR adoption.' },
              { id: 'q5', question: 'CEDAW protects rights of:', options: ['Children', 'Women', 'Refugees', 'Workers'], correctIndex: 1, explanation: 'Women (Discrimination elimination).' },
              { id: 'q6', question: 'Gender is:', options: ['Biological', 'Social construct', 'Natural', 'Fixed'], correctIndex: 1, explanation: 'Defined by society and culture.' },
              { id: 'q7', question: 'First Generation Rights are:', options: ['Economic', 'Social', 'Civil & Political', 'Cultural'], correctIndex: 2, explanation: 'Liberty-oriented rights.' },
              { id: 'q8', question: 'Paris Agreement (2015) aims to limit temp rise to:', options: ['1.5-2-�C', '3-�C', '4-�C', '5-�C'], correctIndex: 0, explanation: 'Well below 2 degrees Celsius.' },
              { id: 'q9', question: 'Chipko Movement started in:', options: ['Kerala', 'Uttarakhand', 'Punjab', 'Assam'], correctIndex: 1, explanation: 'To protect trees.' },
              { id: 'q10', question: 'HDI includes:', options: ['Health, Education, Income', 'Health, Happiness, Income', 'Education, Peace, Income', 'None'], correctIndex: 0, explanation: 'Life expectancy, Education, Per capita income.' },
              { id: 'q11', question: 'Amartya Sen is associated with:', options: ['Capability Approach', 'Neoliberalism', 'Marxism', 'Realism'], correctIndex: 0, explanation: 'Development as Freedom.' },
              { id: 'q12', question: 'Glass Ceiling refers to barriers for:', options: ['Men', 'Women', 'Children', 'Elderly'], correctIndex: 1, explanation: 'In career advancement.' },
              { id: 'q13', question: 'Agenda 21 is related to:', options: ['Human Rights', 'Environment', 'Trade', 'Space'], correctIndex: 1, explanation: 'Sustainable development plan.' },
              { id: 'q14', question: 'Stockholm Conference was in:', options: ['1972', '1982', '1992', '2002'], correctIndex: 0, explanation: 'First major environmental conference.' },
              { id: 'q15', question: 'Green Peace is an:', options: ['MNC', 'NGO', 'Govt Body', 'Army'], correctIndex: 1, explanation: 'Environmental NGO.' },
              { id: 'q16', question: 'Amnesty International works for:', options: ['Environment', 'Human Rights', 'Animal Rights', 'Trade'], correctIndex: 1, explanation: 'Human Rights protection.' },
              { id: 'q17', question: 'SDGs target year is:', options: ['2020', '2025', '2030', '2050'], correctIndex: 2, explanation: 'Agenda 2030.' },
              { id: 'q18', question: 'Number of SDGs:', options: ['10', '15', '17', '20'], correctIndex: 2, explanation: '17 Goals.' },
              { id: 'q19', question: 'Right to Development is:', options: ['1st Gen', '2nd Gen', '3rd Gen', 'None'], correctIndex: 2, explanation: 'Collective right.' },
              { id: 'q20', question: 'Eco-feminism links:', options: ['Economy & Women', 'Ecology & Women', 'Education & Women', 'None'], correctIndex: 1, explanation: 'Nature and Women exploitation.' },
              { id: 'q21', question: 'Narmada Bachao Andolan leader:', options: ['Medha Patkar', 'Sunderlal Bahuguna', 'Vandana Shiva', 'None'], correctIndex: 0, explanation: 'Against large dams.' },
              { id: 'q22', question: 'Waterman of India:', options: ['Rajendra Singh', 'Anna Hazare', 'Kejriwal', 'Modi'], correctIndex: 0, explanation: 'Water conservationist.' },
              { id: 'q23', question: 'International Women\'s Day:', options: ['8 March', '10 Dec', '5 June', '1 May'], correctIndex: 0, explanation: 'Celebrates women.' },
              { id: 'q24', question: 'World Environment Day:', options: ['8 March', '10 Dec', '5 June', '1 May'], correctIndex: 2, explanation: 'Raises awareness.' },
              { id: 'q25', question: 'Poverty is:', options: ['Only lack of money', 'Multi-dimensional', 'Only lack of food', 'None'], correctIndex: 1, explanation: 'Includes health, education, standard of living.' },
              { id: 'q26', question: 'NHRC was established in:', options: ['1993', '1950', '1947', '2000'], correctIndex: 0, explanation: 'Protection of Human Rights Act.' },
              { id: 'q27', question: 'Right to Information (RTI) Act year:', options: ['2000', '2005', '2010', '2015'], correctIndex: 1, explanation: 'Empowers citizens.' },
              { id: 'q28', question: 'Which gas causes Global Warming?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'], correctIndex: 2, explanation: 'Greenhouse gas.' },
              { id: 'q29', question: 'Ozone layer protects from:', options: ['Infrared', 'UV Rays', 'X-Rays', 'Gamma Rays'], correctIndex: 1, explanation: 'Ultraviolet radiation.' },
              { id: 'q30', question: 'Acid Rain is caused by:', options: ['SO2 & NO2', 'CO2', 'O3', 'H2O'], correctIndex: 0, explanation: 'Sulfur and Nitrogen oxides.' }
            ],
            reels: [
              { id: 'r1', title: 'Humanitarian Issues', content: 'Environment, Poverty.\nGender, Human Rights.\nGlobal concern.', color: getReelColor(0) },
              { id: 'r2', title: 'Environment', content: 'Climate Change.\nGlobal Warming.\nSave Earth.', color: getReelColor(1) },
              { id: 'r3', title: 'Stockholm 1972', content: 'First Conference.\nEnvironment focus.\nUNEP born.', color: getReelColor(2) },
              { id: 'r4', title: 'Rio 1992', content: 'Earth Summit.\nAgenda 21.\nSustainable Dev.', color: getReelColor(3) },
              { id: 'r5', title: 'Kyoto Protocol', content: '1997 Japan.\nCut Emissions.\nGreenhouse Gases.', color: getReelColor(4) },
              { id: 'r6', title: 'Paris Agreement', content: '2015 France.\nBelow 2-�C.\nGlobal pact.', color: getReelColor(5) },
              { id: 'r7', title: 'Sustainability', content: 'For future.\nBalance needs.\nEco-friendly.', color: getReelColor(6) },
              { id: 'r8', title: 'Poverty', content: 'Not just money.\nLack of voice.\nDeprivation.', color: getReelColor(7) },
              { id: 'r9', title: 'Material Poverty', content: 'Food, Clothing.\nShelter, Water.\nBasic needs.', color: getReelColor(8) },
              { id: 'r10', title: 'Non-material', content: 'Dignity, Rights.\nFreedom, Voice.\nOpportunity.', color: getReelColor(9) },
              { id: 'r11', title: 'Gender vs Sex', content: 'Sex = Bio.\nGender = Social.\nRoles & Norms.', color: getReelColor(0) },
              { id: 'r12', title: 'Empowerment', content: 'Women Power.\nDecision making.\nEquality.', color: getReelColor(1) },
              { id: 'r13', title: 'Glass Ceiling', content: 'Invisible barrier.\nStops promotion.\nBreak it!', color: getReelColor(2) },
              { id: 'r14', title: 'CEDAW', content: 'Women\'s Rights.\nNo discrimination.\nUN Convention.', color: getReelColor(3) },
              { id: 'r15', title: 'Human Rights', content: 'Universal.\nInalienable.\nFor everyone.', color: getReelColor(4) },
              { id: 'r16', title: 'UDHR 1948', content: 'Dec 10.\nEleanor Roosevelt.\n30 Articles.', color: getReelColor(5) },
              { id: 'r17', title: '1st Gen Rights', content: 'Civil & Political.\nLiberty.\nBlue Rights.', color: getReelColor(6) },
              { id: 'r18', title: '2nd Gen Rights', content: 'Eco, Soc, Cultural.\nEquality.\nRed Rights.', color: getReelColor(7) },
              { id: 'r19', title: '3rd Gen Rights', content: 'Collective.\nFraternity.\nGreen Rights.', color: getReelColor(8) },
              { id: 'r20', title: 'Child Rights', content: 'Education.\nProtection.\nNo Child Labor.', color: getReelColor(9) },
              { id: 'r21', title: 'Malala', content: 'Education activist.\nNobel Prize.\nBrave girl.', color: getReelColor(0) },
              { id: 'r22', title: 'Greta', content: 'Climate Strike.\nFridays for Future.\nYouth voice.', color: getReelColor(1) },
              { id: 'r23', title: 'Chipko', content: 'Hug trees.\nSave forests.\nIndia\'s pride.', color: getReelColor(2) },
              { id: 'r24', title: 'HDI', content: 'Human Dev Index.\nHealth, Edu, Income.\nBetter measure.', color: getReelColor(3) },
              { id: 'r25', title: 'Amartya Sen', content: 'Capability Approach.\nFreedom is key.\nNobel economist.', color: getReelColor(4) },
              { id: 'r26', title: 'Gender Gap', content: 'Wage gap.\nPolitical gap.\nClose it!', color: getReelColor(5) },
              { id: 'r27', title: 'Eco-feminism', content: 'Women & Nature.\nBoth exploited.\nProtect both.', color: getReelColor(6) },
              { id: 'r28', title: 'Water Crisis', content: 'Save water.\nEvery drop counts.\nFuture war?', color: getReelColor(7) },
              { id: 'r29', title: 'Climate Action', content: 'SDG 13.\nAct now.\nBefore too late.', color: getReelColor(8) },
              { id: 'r30', title: 'Hope', content: 'We can change.\nSustainable future.\nTogether.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'pl5',
                question: 'Trace the evolution of International Environmental Agreements from Stockholm to Paris. (8 marks)',
                mnemonic: 'SBRKP - Stockholm, Brundtland, Rio, Kyoto, Paris',
                answer: `### Evolution of Environmental Agreements

**1. Stockholm Conference (1972)**:
- First major UN conference on environment
- Theme: "Only One Earth"
- Outcome: UNEP (United Nations Environment Programme) established
- Declaration with 26 principles
- Began international environmental cooperation

**2. Brundtland Commission (1987)**:
- Report: "Our Common Future"
- Introduced concept of **Sustainable Development**
- Definition: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs"

**3. Rio Earth Summit (1992)**:
| Outcome | Description |
|---------|-------------|
| Agenda 21 | Action plan for sustainable development |
| UNFCCC | Framework Convention on Climate Change |
| CBD | Convention on Biological Diversity |
| Rio Declaration | 27 principles on environment |

**4. Kyoto Protocol (1997)**:
- Legally binding emission reduction targets
- Developed countries to reduce emissions by 5%
- Concept of Carbon Credits introduced
- USA did not ratify

**5. Paris Agreement (2015)**:
- Goal: Limit warming to below 2°C, preferably 1.5°C
- **NDCs**: Nationally Determined Contributions
- All countries participate (unlike Kyoto)
- India's commitments included

### Conclusion
From Stockholm's awareness to Paris's global commitment, environmental cooperation has evolved significantly, though implementation remains a challenge.`
              },
              {
                id: 'pl6',
                question: 'Discuss the Three Generations of Human Rights with examples. (8 marks)',
                mnemonic: 'LEF - Liberty, Equality, Fraternity',
                answer: `### Three Generations of Human Rights

**Based on French Revolution ideals**: Liberty, Equality, Fraternity

### First Generation Rights (Blue Rights - Liberty)

**Category**: Civil and Political Rights

| Rights | Examples |
|--------|----------|
| Civil | Right to life, liberty, privacy |
| Political | Right to vote, freedom of speech |
| Legal | Fair trial, equality before law |

- **Origin**: 17th-18th century (Enlightenment)
- **Focus**: Freedom FROM state interference
- **Document**: ICCPR (International Covenant on Civil and Political Rights)

### Second Generation Rights (Red Rights - Equality)

**Category**: Economic, Social and Cultural Rights

| Rights | Examples |
|--------|----------|
| Economic | Right to work, fair wages |
| Social | Education, healthcare, housing |
| Cultural | Participate in cultural life |

- **Origin**: 19th-20th century (Socialist movements)
- **Focus**: Freedom TO (positive rights - state must provide)
- **Document**: ICESCR (International Covenant on Economic, Social and Cultural Rights)

### Third Generation Rights (Green Rights - Fraternity)

**Category**: Collective/Solidarity Rights

| Rights | Examples |
|--------|----------|
| Development | Right to development |
| Environment | Clean environment |
| Peace | Freedom from war |
| Self-determination | Right of peoples |

- **Origin**: Post-colonial era (1970s onwards)
- **Focus**: Group rights, global cooperation needed
- **Emerging**: Still evolving

### In India
- **Fundamental Rights** (Part III): Mostly 1st and 2nd generation
- **DPSPs** (Part IV): 2nd generation
- **Article 51**: 3rd generation (International peace)

### Conclusion
All three generations are interdependent and indivisible - true human dignity requires all.`
              }
            ],
            // Board Exam Questions - Chapter 3: Humanitarian Issues (Environment, Poverty, Gender, Human Rights)
            boardQuestions: {
              q1a_mcq: [
                { id: 'bq3a1', question: 'Stockholm Conference (Only One Earth) was held in:', options: ['1972', '1982', '1992', '2015'], correctIndex: 0, explanation: 'First major UN environment conference, Stockholm 1972.' },
                { id: 'bq3a2', question: 'Brundtland Commission popularised Sustainable Development in:', options: ['1972', '1987', '1992', '1997'], correctIndex: 1, explanation: 'Report Our Common Future (1987).' },
                { id: 'bq3a3', question: 'Rio Earth Summit (Agenda 21) year:', options: ['1972', '1987', '1992', '1997'], correctIndex: 2, explanation: 'Rio de Janeiro 1992.' },
                { id: 'bq3a4', question: 'Kyoto Protocol targets:', options: ['Human Rights', 'Trade Tariffs', 'Greenhouse Gas Emissions', 'Gender Equality'], correctIndex: 2, explanation: 'Kyoto 1997 set binding emission cuts for developed states.' },
                { id: 'bq3a5', question: 'Paris Agreement aims to limit warming to:', options: ['Below 2C', 'Below 4C', 'Exactly 3C', 'No target'], correctIndex: 0, explanation: 'Goal well below 2C, pursuing 1.5C.' },
                { id: 'bq3a6', question: 'UDHR was adopted on:', options: ['26 Jan 1950', '10 Dec 1948', '15 Aug 1947', '2 Oct 1869'], correctIndex: 1, explanation: 'Universal Declaration of Human Rights, 10 December 1948.' },
                { id: 'bq3a7', question: 'CEDAW (1979) focuses on:', options: ['Children', 'Women', 'Refugees', 'Workers'], correctIndex: 1, explanation: 'Convention on the Elimination of All Forms of Discrimination Against Women.' },
                { id: 'bq3a8', question: 'NHRC in India was established in:', options: ['1947', '1950', '1993', '2005'], correctIndex: 2, explanation: 'Under Protection of Human Rights Act 1993.' },
                { id: 'bq3a9', question: 'Number of Sustainable Development Goals (SDGs):', options: ['10', '12', '15', '17'], correctIndex: 3, explanation: '17 SDGs (Agenda 2030).' },
                { id: 'bq3a10', question: 'Gender refers to:', options: ['Biological sex', 'Socially constructed roles', 'Genetic traits only', 'None'], correctIndex: 1, explanation: 'Gender is socially defined roles and norms.' }
              ],
                  q1b_oddOneOut: [
                    { id: 'bq3b1', set: ['UDHR', 'ICCPR', 'ICESCR', 'SEZ'], answer: 'SEZ', explanation: 'Others are human rights instruments; SEZ is economic policy.' },
                    { id: 'bq3b2', set: ['Stockholm 1972', 'Rio 1992', 'Kyoto 1997', 'NAFTA 1994'], answer: 'NAFTA 1994', explanation: 'NAFTA is trade agreement, others are environment conferences/treaty.' },
                    { id: 'bq3b3', set: ['Material Poverty', 'Non-material Poverty', 'HDI', 'Glass Ceiling'], answer: 'Glass Ceiling', explanation: 'Glass Ceiling is gender barrier; others are poverty/development measures.' },
                    { id: 'bq3b4', set: ['CEDAW', 'UDHR', 'SDG 5', 'TRIPS'], answer: 'TRIPS', explanation: 'TRIPS is trade/IP; others protect human/gender rights.' },
                    { id: 'bq3b5', set: ['Eco-feminism', 'Chipko Movement', 'Greenpeace', 'IMF'], answer: 'IMF', explanation: 'IMF is financial institution; others relate to environment/activism.' }
                  ],
                  q1c_correlation: [
                    { id: 'bq3c1', a: 'Sustainable Development', b: 'Brundtland Report', c: 'Human Rights', answer: 'UDHR 1948', explanation: 'UDHR 1948 foundational human rights document.' },
                    { id: 'bq3c2', a: 'Stockholm', b: '1972', c: 'Rio Earth Summit', answer: '1992', explanation: 'Key environment milestones 1972 and 1992.' },
                    { id: 'bq3c3', a: 'CEDAW', b: 'Women', c: 'CRC', answer: 'Children', explanation: 'CRC protects child rights.' },
                    { id: 'bq3c4', a: 'SDGs', b: '17 Goals', c: 'Target Year', answer: '2030', explanation: 'Agenda 2030 target year.' },
                    { id: 'bq3c5', a: 'First Generation', b: 'Civil & Political', c: 'Second Generation', answer: 'Economic Social Cultural', explanation: 'Classification of rights generations.' }
                  ],
                  q1d_trueFalse: [
                    { id: 'bq3d1', statement: 'Gender is purely biological.', answer: false, reason: 'Gender is socially constructed roles and expectations.' },
                    { id: 'bq3d2', statement: 'Paris Agreement replaced Kyoto Protocol.', answer: true, reason: 'Paris (2015) is the current climate framework involving all parties.' },
                    { id: 'bq3d3', statement: 'UDHR is legally binding like a treaty.', answer: false, reason: 'UDHR is a declaration; ICCPR/ICESCR are binding covenants.' },
                    { id: 'bq3d4', statement: 'SDG 5 focuses on Gender Equality.', answer: true, reason: 'SDG 5 aims to achieve gender equality and empower all women and girls.' },
                    { id: 'bq3d5', statement: 'Eco-feminism links exploitation of women and nature.', answer: true, reason: 'Eco-feminism argues patriarchy harms both women and environment.' },
                    { id: 'bq3d6', statement: 'Human Rights Day is observed on 10 December.', answer: true, reason: 'Commemorates UDHR adoption on 10 Dec 1948.' }
                  ],
                  q1e_identifyConcept: [
                    { id: 'bq3e1', statement: 'Development that meets present needs without compromising future generations.', answer: 'Sustainable Development', features: ['Brundtland Report 1987', 'Balance economy, society, environment'] },
                    { id: 'bq3e2', statement: 'Invisible barrier that prevents women from reaching top positions.', answer: 'Glass Ceiling', features: ['Workplace discrimination', 'Leads to low female leadership'] },
                    { id: 'bq3e3', statement: 'Rights that are universal, inalienable, and interdependent.', answer: 'Human Rights', features: ['UDHR 1948', 'Civil, political, economic, social, cultural rights'] },
                    { id: 'bq3e4', statement: 'Movement connecting oppression of women with exploitation of nature.', answer: 'Eco-feminism', features: ['Environmental justice with gender lens', 'Vandana Shiva as key voice'] },
                    { id: 'bq3e5', statement: 'UN Convention adopted in 1979 to eliminate discrimination against women.', answer: 'CEDAW', features: ['Women equality', 'States report on progress'] },
                    { id: 'bq3e6', statement: 'UN plan with 17 goals to end poverty, protect planet, ensure prosperity.', answer: 'SDGs (Agenda 2030)', features: ['Target year 2030', 'Goals include poverty, gender, climate'] }
                  ],
                  q1f_conceptMap: [
                    { id: 'bq3f1', topic: 'Climate Agreements', structure: 'Stockholm 1972 → Rio 1992 → Kyoto 1997 → Paris 2015', blanks: ['Stockholm', 'Rio', 'Kyoto', 'Paris'] },
                    { id: 'bq3f2', topic: 'Generations of Rights', structure: '1st Gen [___] + 2nd Gen [___] + 3rd Gen [___]', blanks: ['Civil & Political', 'Economic Social Cultural', 'Collective (Development/Environment/Peace)'] },
                    { id: 'bq3f3', topic: 'SDG Pillars', structure: 'SDGs → People + Planet + Prosperity + Peace + Partnership', blanks: ['People', 'Planet', 'Prosperity', 'Peace', 'Partnership'] },
                    { id: 'bq3f4', topic: 'Gender Equality', structure: 'Barriers → [___] + [___] + [___]', blanks: ['Patriarchy', 'Glass Ceiling', 'Wage Gap'] }
                  ],
                  q2_identifyExplain: [
                    { id: 'bq3ia1', statement: 'Framework of rights that are universal, inalienable, and interdependent, proclaimed in 1948.', concept: 'UDHR (Universal Declaration of Human Rights)', features: ['30 Articles covering civil, political, economic, social, cultural rights', 'Foundation for ICCPR and ICESCR'] },
                    { id: 'bq3ia2', statement: 'Development paradigm balancing economic growth with social equity and environmental protection.', concept: 'Sustainable Development', features: ['Coined by Brundtland Commission 1987', 'Meets present needs without harming future generations'] },
                    { id: 'bq3ia3', statement: 'UN treaty aiming to eliminate discrimination against women.', concept: 'CEDAW 1979', features: ['Legally binding on ratifying states', 'Regular state reporting to CEDAW Committee'] },
                    { id: 'bq3ia4', statement: 'Global agenda with 17 goals including no poverty, zero hunger, gender equality, climate action.', concept: 'SDGs (Sustainable Development Goals)', features: ['Adopted 2015, target year 2030', 'Universal goals for all countries'] },
                    { id: 'bq3ia5', statement: 'National body in India set up in 1993 to protect human rights.', concept: 'NHRC (National Human Rights Commission)', features: ['Monitors rights violations, issues recommendations', 'Created under Protection of Human Rights Act 1993'] }
                  ],
                  q3_distinguish: [
                    { id: 'bq3d1', pair: ['Sex', 'Gender'], points: [
                      { aspect: 'Basis', first: 'Biological (chromosomes, anatomy)', second: 'Socially constructed roles and norms' },
                      { aspect: 'Changeability', first: 'Fixed at birth', second: 'Varies across cultures and time' },
                      { aspect: 'Examples', first: 'Male, Female, Intersex', second: 'Masculine, Feminine roles; division of labour' },
                      { aspect: 'Implications', first: 'Biological traits', second: 'Inequality arises from gendered roles (wage gap)' }
                    ]},
                    { id: 'bq3d2', pair: ['Material Poverty', 'Non-material Poverty'], points: [
                      { aspect: 'Definition', first: 'Lack of basic needs (food, shelter, income)', second: 'Lack of dignity, voice, opportunities' },
                      { aspect: 'Measurement', first: 'Income/consumption lines', second: 'Capabilities, participation, rights' },
                      { aspect: 'Policy Response', first: 'Subsidies, direct transfers', second: 'Empowerment, education, inclusion' },
                      { aspect: 'Example', first: 'Below poverty line households', second: 'Social exclusion despite income' }
                    ]},
                    { id: 'bq3d3', pair: ['Sustainable Development', 'Economic Growth Only'], points: [
                      { aspect: 'Focus', first: 'Triple bottom line (economy, society, environment)', second: 'GDP increase regardless of social/environment costs' },
                      { aspect: 'Time Horizon', first: 'Long-term intergenerational equity', second: 'Short-term output gains' },
                      { aspect: 'Indicators', first: 'SDGs, HDI, ESG metrics', second: 'GDP, per capita income' },
                      { aspect: 'Outcome', first: 'Inclusive and green growth', second: 'Potential inequality and ecological damage' }
                    ]},
                    { id: 'bq3d4', pair: ['Civil & Political Rights', 'Economic Social Cultural Rights'], points: [
                      { aspect: 'Nature', first: 'Liberty (freedom from state interference)', second: 'Equality (state provides/supports services)' },
                      { aspect: 'Examples', first: 'Speech, vote, fair trial', second: 'Education, health, work, housing' },
                      { aspect: 'Instruments', first: 'ICCPR', second: 'ICESCR' },
                      { aspect: 'Obligation', first: 'Respect/Protect', second: 'Fulfil through positive action' }
                    ]},
                    { id: 'bq3d5', pair: ['NGO', 'IGO'], points: [
                      { aspect: 'Composition', first: 'Non-government actors (civil society)', second: 'Member states governments' },
                      { aspect: 'Examples', first: 'Amnesty International, Greenpeace', second: 'UN, World Bank, WTO' },
                      { aspect: 'Authority', first: 'Moral influence, advocacy', second: 'Treaty-based legal authority' },
                      { aspect: 'Role', first: 'Campaign, monitor, implement projects', second: 'Set rules, fund, enforce agreements' }
                    ]}
                  ],
                  q4_briefAnswers: [
                    { id: 'bq3ba1', question: 'Explain Sustainable Development with key milestones.', answer: '**Sustainable Development:**\n- Defined by Brundtland Report (1987): meet present needs without harming future generations.\n- Milestones: Stockholm 1972 (awareness), Rio 1992 (Agenda 21, UNFCCC), Kyoto 1997 (binding cuts for developed states), Paris 2015 (all parties NDCs, below 2C).\n- Balance economy, society, environment.' },
                    { id: 'bq3ba2', question: 'What are the Three Generations of Human Rights?', answer: '**Three Generations:**\n1. **First (Civil & Political)**: life, speech, vote, fair trial (ICCPR).\n2. **Second (Economic, Social, Cultural)**: education, health, work, housing (ICESCR).\n3. **Third (Collective/Solidarity)**: development, environment, peace, self-determination.\nAll rights are universal and interdependent.' },
                    { id: 'bq3ba3', question: 'Write a note on CEDAW.', answer: '**CEDAW (1979):**\n- UN treaty to eliminate discrimination against women.\n- Obligates states to reform laws, ensure equality in politics, work, family, education.\n- Monitoring by CEDAW Committee through periodic reports.\n- India ratified 1993 (with reservations).\n- Supports SDG 5 (Gender Equality).' },
                    { id: 'bq3ba4', question: 'How is poverty multidimensional?', answer: '**Multidimensional Poverty:**\n- Beyond income: includes health, education, housing, dignity, voice.\n- Measured by MPI (health, education, living standards).\n- Causes: unemployment, discrimination, lack of assets.\n- Solutions: social protection, jobs, education, empowerment.' },
                    { id: 'bq3ba5', question: 'What is Eco-feminism? Give an example.', answer: '**Eco-feminism:**\n- Links environmental degradation with patriarchy and women\'s oppression.\n- Advocates gender-just environmental policies.\n- Examples: Chipko movement (women led forest protection), Vandana Shiva\'s activism.' }
                  ],
                  q5_longAnswers: [
                    { id: 'bq3la1', question: 'Trace the evolution of global environmental governance from Stockholm to Paris. (8 marks)', mnemonic: 'SRKP -> Stockholm, Rio, Kyoto, Paris', answer: '**Evolution of Environmental Governance**\n\n**Stockholm 1972**: First UN environment meet, Only One Earth, created UNEP.\n\n**Brundtland 1987**: Our Common Future, defined Sustainable Development.\n\n**Rio 1992 (Earth Summit)**: Agenda 21 action plan, UNFCCC (climate framework), CBD (biodiversity), Rio Declaration principles.\n\n**Kyoto Protocol 1997**: Binding emission cuts for developed nations; carbon credits idea.\n\n**Paris Agreement 2015**: Universal NDCs, goal below 2C (pursue 1.5C), transparency and finance provisions.\n\n**Analysis**: Shift from awareness to binding targets to universal participation; implementation and climate justice remain key challenges.' },
                    { id: 'bq3la2', question: 'Discuss Human Rights: generations, key instruments, and India\'s institutional safeguards. (8 marks)', mnemonic: 'GKI -> Generations, Key instruments, India', answer: '**Human Rights Overview**\n\n**Generations**:\n- 1st: Civil & Political (liberty)\n- 2nd: Economic, Social, Cultural (equality)\n- 3rd: Collective (development, environment, peace)\n\n**Key Instruments**:\n- UDHR 1948 (declaration)\n- ICCPR & ICESCR (binding covenants)\n- CEDAW 1979 (women), CRC 1989 (children), CRPD 2006 (disability)\n\n**India Safeguards**:\n- Constitution Part III (Fundamental Rights), Part IV (DPSPs)\n- NHRC 1993; State HRCs\n- Key laws: RTI 2005, POSH 2013, RTE 2009, MGNREGA 2005\n- Judiciary: Public Interest Litigation, Article 32/226 writs\n\n**Conclusion**: Rights are universal and indivisible; enforcement needs institutions plus social awareness.' }
                  ],
                  q6_analysis: [
                    { id: 'bq3an1', type: 'timeline', title: 'Environment Milestones', data: '1972 Stockholm | 1987 Brundtland | 1992 Rio (Agenda 21, UNFCCC) | 1997 Kyoto | 2015 Paris (NDCs)', questions: ['Which summit coined Sustainable Development?', 'Which agreement introduced NDCs?', 'How did Kyoto and Paris differ?'] },
                    { id: 'bq3an2', type: 'comparison', title: 'Rights Generations Comparison', data: '1st Gen: Civil/Political (liberty) | 2nd Gen: Economic/Social/Cultural (equality) | 3rd Gen: Collective (development/environment/peace)', questions: ['Which generation covers right to vote?', 'Where does right to health fit?', 'Why are rights called indivisible?'] },
                    { id: 'bq3an3', type: 'chart', title: 'Poverty is Multidimensional', data: 'Income + Health + Education + Living Standards + Voice/Participation', questions: ['Why is poverty more than low income?', 'Name two non-income indicators.', 'How can policy address multidimensional poverty?'] }
                  ]
            }

          },
          {
            id: 'pol4',
            title: '4. Key Concepts and Issues since 1991 : Peace, Stability and Role of the State',
            description: 'Role of State, Nation-Building, Peace and Stability.',
            summary: '**State**: Sovereignty, Government, Territory, Population\n**Nation-Building**: National Integration, Challenges\n**Peace & Stability**: Essential for development, Terrorism as threat',
            detailedNotes: '### 1. The State\\n**Definition**: A community of persons, permanently occupying a definite territory, independent of external control, and possessing an organized government.\\n**4 Elements**:\\n1. **Population**: People living in the state.\\n2. **Territory**: Defined geographical area.\\n3. **Government**: Agency to enforce will of state.\\n4. **Sovereignty**: Supreme power (Internal & External).\\n\\n### 2. Nation vs State\\n* **Nation**: Cultural/Psychological concept (feeling of oneness).\\n* **State**: Political/Legal concept (institutions and laws).\\n* **Nation-State**: When a cultural nation has its own political state.\\n\\n### 3. Role of the State\\n* **Security**: Protecting from external aggression.\\n* **Law and Order**: Maintaining internal peace.\\n* **Economic Development**: Infrastructure, growth.\\n* **Welfare State**: Education, health, social security.\\n* **Nation Building**: Fostering unity among diverse people.\\n\\n### 4. Challenges to Peace and Stability\\n* **Terrorism**: Use of violence to create fear for political goals.\\n* **Naxalism (LWE)**: Armed insurgency against the state (Red Corridor).\\n* **Regionalism**: Excessive loyalty to one\'s region over nation.\\n* **Communalism**: Religious hatred and violence.\\n* **Casteism**: Discrimination based on caste.\\n\\n### 5. National Integration\\nProcess of bringing together culturally and socially discrete groups into a single territorial unit and the establishment of a national identity. "Unity in Diversity" is India\'s strength.',
            flashcards: [
              { id: 'f1', front: 'What are the 4 elements of State?', back: 'Population, Territory, Government, Sovereignty.' },
              { id: 'f2', front: 'What is Sovereignty?', back: 'Supreme power of the state (Internal and External).' },
              { id: 'f3', front: 'Difference between Nation and State?', back: 'Nation is cultural/psychological; State is political/legal.' },
              { id: 'f4', front: 'What is Nationalism?', back: 'Feeling of oneness and loyalty towards one\'s nation.' },
              { id: 'f5', front: 'What is National Integration?', back: 'Process of uniting diverse people into a single nation.' },
              { id: 'f6', front: 'What is a Welfare State?', back: 'State that protects and promotes economic and social well-being of citizens.' },
              { id: 'f7', front: 'What is Terrorism?', back: 'Use of violence and intimidation in pursuit of political aims.' },
              { id: 'f8', front: 'What is Naxalism?', back: 'Left Wing Extremism (Maoist insurgency) in India.' },
              { id: 'f9', front: 'Where did Naxalism start?', back: 'Naxalbari village in West Bengal (1967).' },
              { id: 'f10', front: 'What is the "Red Corridor"?', back: 'Region affected by Naxalite insurgency in India.' },
              { id: 'f11', front: 'What is Regionalism?', back: 'Excessive loyalty to one\'s region over the nation.' },
              { id: 'f12', front: 'What is Communalism?', back: 'Allegiance to one\'s own religious group rather than wider society.' },
              { id: 'f13', front: 'What is Secularism in India?', back: 'Equal treatment of all religions by the state.' },
              { id: 'f14', front: 'What is "Good Governance"?', back: 'Governance that is accountable, transparent, responsive, and inclusive.' },
              { id: 'f15', front: 'What is Civil Society?', back: 'Non-governmental organizations and institutions manifesting interests of citizens.' },
              { id: 'f16', front: 'What is Human Security?', back: 'Protection of individuals from threats like hunger, disease, and repression.' },
              { id: 'f17', front: 'What is Traditional Security?', back: 'Protection of state borders and sovereignty (Military focus).' },
              { id: 'f18', front: 'What is a "Failed State"?', back: 'State that has lost control over its territory and cannot provide basic services.' },
              { id: 'f19', front: 'What is RTI?', back: 'Right to Information Act (2005).' },
              { id: 'f20', front: 'What is Lokpal?', back: 'Anti-corruption ombudsman body.' },
              { id: 'f21', front: 'Article 1 of Indian Constitution says?', back: 'India, that is Bharat, shall be a Union of States.' },
              { id: 'f22', front: 'What is "Unity in Diversity"?', back: 'Coexistence of diverse cultures within a unified nation.' },
              { id: 'f23', front: 'Role of State in Economy?', back: 'Regulation, infrastructure, and development planning.' },
              { id: 'f24', front: 'What is Internal Sovereignty?', back: 'Supreme authority within the territory.' },
              { id: 'f25', front: 'What is External Sovereignty?', back: 'Independence from foreign control.' },
              { id: 'f26', front: 'What is "Soft State"?', back: 'State with weak enforcement of laws (Gunnar Myrdal\'s term).' },
              { id: 'f27', front: 'What is Conflict Resolution?', back: 'Methods to facilitate peaceful ending of conflict.' },
              { id: 'f28', front: 'What is E-Governance?', back: 'Use of IT for delivering government services.' },
              { id: 'f29', front: 'What is "Sons of the Soil" theory?', back: 'Preference for local people in jobs (Regionalism).' },
              { id: 'f30', front: 'Why is Peace essential?', back: 'For development, progress, and human well-being.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Which is NOT an element of State?', options: ['Population', 'Territory', 'Religion', 'Sovereignty'], correctIndex: 2, explanation: 'Religion is not a mandatory element.' },
              { id: 'q2', question: 'Sovereignty means:', options: ['Supreme Power', 'Wealth', 'Population', 'Territory'], correctIndex: 0, explanation: 'Absolute and uncontrolled power.' },
              { id: 'q3', question: 'Nation is primarily a ______ concept.', options: ['Political', 'Legal', 'Psychological', 'Economic'], correctIndex: 2, explanation: 'Based on feeling of oneness.' },
              { id: 'q4', question: 'Naxalism started in:', options: ['1947', '1967', '1991', '2000'], correctIndex: 1, explanation: 'In Naxalbari, West Bengal.' },
              { id: 'q5', question: 'RTI Act was passed in:', options: ['2000', '2005', '2010', '2014'], correctIndex: 1, explanation: 'Right to Information Act, 2005.' },
              { id: 'q6', question: 'Good Governance does NOT include:', options: ['Transparency', 'Accountability', 'Corruption', 'Rule of Law'], correctIndex: 2, explanation: 'It aims to eliminate corruption.' },
              { id: 'q7', question: 'Civil Society includes:', options: ['Army', 'Police', 'NGOs', 'Courts'], correctIndex: 2, explanation: 'Non-state, voluntary groups.' },
              { id: 'q8', question: 'Red Corridor is associated with:', options: ['Terrorism', 'Naxalism', 'Regionalism', 'Communalism'], correctIndex: 1, explanation: 'Areas affected by Maoist insurgency.' },
              { id: 'q9', question: 'Unity in Diversity is a feature of:', options: ['USA', 'India', 'China', 'Japan'], correctIndex: 1, explanation: 'Indian cultural characteristic.' },
              { id: 'q10', question: 'Welfare State focuses on:', options: ['War', 'Profit', 'Social Well-being', 'Colonialism'], correctIndex: 2, explanation: 'Health, education, social security.' },
              { id: 'q11', question: 'Who defined State?', options: ['Garner', 'Plato', 'Aristotle', 'Marx'], correctIndex: 0, explanation: 'J.W. Garner gave the 4 elements definition.' },
              { id: 'q12', question: 'Internal Sovereignty means:', options: ['Freedom from foreign rule', 'Supreme power within borders', 'Power of UN', 'None'], correctIndex: 1, explanation: 'Authority over all citizens and associations.' },
              { id: 'q13', question: 'External Sovereignty means:', options: ['Freedom from foreign control', 'Power within borders', 'Police power', 'None'], correctIndex: 0, explanation: 'Independence in international relations.' },
              { id: 'q14', question: 'Human Security focuses on:', options: ['State borders', 'Individual well-being', 'Military', 'Weapons'], correctIndex: 1, explanation: 'Freedom from want and fear.' },
              { id: 'q15', question: 'Regionalism can lead to:', options: ['National Unity', 'Separatism', 'Globalisation', 'Peace'], correctIndex: 1, explanation: 'Demand for separate state or country.' },
              { id: 'q16', question: 'Communalism is based on:', options: ['Region', 'Language', 'Religion', 'Caste'], correctIndex: 2, explanation: 'Religious identity and antagonism.' },
              { id: 'q17', question: 'Secularism means:', options: ['No religion', 'State religion', 'Equal respect for all religions', 'Anti-religion'], correctIndex: 2, explanation: 'Indian model of secularism.' },
              { id: 'q18', question: 'Lokpal is an institution to check:', options: ['Inflation', 'Corruption', 'Population', 'Pollution'], correctIndex: 1, explanation: 'Anti-corruption ombudsman.' },
              { id: 'q19', question: 'E-Governance uses:', options: ['Paper', 'ICT', 'Radio', 'TV'], correctIndex: 1, explanation: 'Information and Communication Technology.' },
              { id: 'q20', question: 'Article 1 describes India as:', options: ['Federation', 'Confederation', 'Union of States', 'Unitary State'], correctIndex: 2, explanation: 'Union of States.' },
              { id: 'q21', question: 'Terrorism aims to create:', options: ['Peace', 'Fear', 'Wealth', 'Love'], correctIndex: 1, explanation: 'Psychological warfare.' },
              { id: 'q22', question: 'Nation Building requires:', options: ['Division', 'Integration', 'Conflict', 'War'], correctIndex: 1, explanation: 'Uniting the people.' },
              { id: 'q23', question: 'Soft State concept was given by:', options: ['Amartya Sen', 'Gunnar Myrdal', 'Nehru', 'Gandhi'], correctIndex: 1, explanation: 'In his book "Asian Drama".' },
              { id: 'q24', question: 'Which is a threat to peace?', options: ['Education', 'Development', 'Terrorism', 'Health'], correctIndex: 2, explanation: 'Violence disrupts peace.' },
              { id: 'q25', question: 'State is a ______ institution.', options: ['Social', 'Political', 'Economic', 'Religious'], correctIndex: 1, explanation: 'Political organization.' },
              { id: 'q26', question: 'Government is an element of:', options: ['Nation', 'State', 'Society', 'Community'], correctIndex: 1, explanation: 'One of the 4 elements.' },
              { id: 'q27', question: 'Sons of the Soil theory is related to:', options: ['Nationalism', 'Regionalism', 'Globalisation', 'Secularism'], correctIndex: 1, explanation: 'Local jobs for local people.' },
              { id: 'q28', question: 'Which is NOT a role of state?', options: ['Security', 'Welfare', 'Promoting one religion', 'Law & Order'], correctIndex: 2, explanation: 'Secular state does not promote one religion.' },
              { id: 'q29', question: 'Failed State example:', options: ['USA', 'Somalia', 'India', 'Japan'], correctIndex: 1, explanation: 'Often cited as a failed state.' },
              { id: 'q30', question: 'Peace is necessary for:', options: ['Destruction', 'Development', 'Chaos', 'Anarchy'], correctIndex: 1, explanation: 'Progress requires stability.' }
            ],
            reels: [
              { id: 'r1', title: 'The State', content: 'Population, Territory.\nGovernment, Sovereignty.\n4 Elements.', color: getReelColor(0) },
              { id: 'r2', title: 'Sovereignty', content: 'Supreme Power.\nInternal & External.\nNo higher authority.', color: getReelColor(1) },
              { id: 'r3', title: 'Nation vs State', content: 'Nation = Heart.\nState = Law.\nNation-State = Both.', color: getReelColor(2) },
              { id: 'r4', title: 'Role of State', content: 'Security, Order.\nWelfare, Justice.\nDevelopment.', color: getReelColor(3) },
              { id: 'r5', title: 'Welfare State', content: 'For the people.\nHealth, Education.\nSocial Security.', color: getReelColor(4) },
              { id: 'r6', title: 'Terrorism', content: 'Violence for politics.\nCreates fear.\nGlobal threat.', color: getReelColor(5) },
              { id: 'r7', title: 'Naxalism', content: 'Red Corridor.\nMaoist insurgency.\nInternal threat.', color: getReelColor(6) },
              { id: 'r8', title: 'Regionalism', content: 'My region first.\nSons of Soil.\nThreat to unity.', color: getReelColor(7) },
              { id: 'r9', title: 'Communalism', content: 'Religion vs Religion.\nHatred & Riots.\nDivide & Rule.', color: getReelColor(8) },
              { id: 'r10', title: 'Secularism', content: 'All religions equal.\nNo state religion.\nHarmony.', color: getReelColor(9) },
              { id: 'r11', title: 'National Integration', content: 'Unity in Diversity.\nOne Nation.\nEmotional bond.', color: getReelColor(0) },
              { id: 'r12', title: 'Good Governance', content: 'Transparent.\nAccountable.\nResponsive.', color: getReelColor(1) },
              { id: 'r13', title: 'RTI 2005', content: 'Right to Info.\nAsk the Govt.\nPower to people.', color: getReelColor(2) },
              { id: 'r14', title: 'Lokpal', content: 'Stop Corruption.\nOmbudsman.\nJan Lokpal.', color: getReelColor(3) },
              { id: 'r15', title: 'Civil Society', content: 'NGOs, Unions.\nVoice of people.\nWatchdogs.', color: getReelColor(4) },
              { id: 'r16', title: 'Human Security', content: 'Freedom from fear.\nFreedom from want.\nIndividual focus.', color: getReelColor(5) },
              { id: 'r17', title: 'Peace', content: 'No war.\nStability.\nGrowth.', color: getReelColor(6) },
              { id: 'r18', title: 'Conflict Resolution', content: 'Dialogue.\nNegotiation.\nWin-Win.', color: getReelColor(7) },
              { id: 'r19', title: 'Failed State', content: 'Chaos.\nNo govt control.\nAnarchy.', color: getReelColor(8) },
              { id: 'r20', title: 'Soft State', content: 'Weak laws.\nCorruption.\nIndiscipline.', color: getReelColor(9) },
              { id: 'r21', title: 'Article 1', content: 'Union of States.\nIndestructible Union.\nBharat.', color: getReelColor(0) },
              { id: 'r22', title: 'Casteism', content: 'Discrimination.\nSocial evil.\nInequality.', color: getReelColor(1) },
              { id: 'r23', title: 'E-Governance', content: 'Digital India.\nOnline services.\nEfficiency.', color: getReelColor(2) },
              { id: 'r24', title: 'Nation Building', content: 'Making a nation.\nShared identity.\nHard work.', color: getReelColor(3) },
              { id: 'r25', title: 'Garner', content: 'Defined State.\n4 Elements.\nPolitical Science.', color: getReelColor(4) },
              { id: 'r26', title: 'Internal Security', content: 'Police.\nLaw & Order.\nPeace within.', color: getReelColor(5) },
              { id: 'r27', title: 'External Security', content: 'Army.\nBorders.\nDefense.', color: getReelColor(6) },
              { id: 'r28', title: 'Unity', content: 'United we stand.\nDivided we fall.\nStrength.', color: getReelColor(7) },
              { id: 'r29', title: 'Diversity', content: 'Languages.\nCultures.\nBeautiful mix.', color: getReelColor(8) },
              { id: 'r30', title: 'Future', content: 'Strong State.\nPeaceful Nation.\nDeveloped India.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'pl7',
                question: 'Discuss the four essential elements of a State with examples. (8 marks)',
                mnemonic: 'PTGS - Population, Territory, Government, Sovereignty',
                answer: `### Four Essential Elements of State

**Definition of State (J.W. Garner)**: A community of persons, permanently occupying a definite territory, independent of external control, and possessing an organized government.

### 1. Population

**Description**: People who live within the state's boundaries.

| Aspect | Details |
|--------|---------|
| Requirement | No fixed number required |
| Examples | India (1.4 billion), Vatican (800) |
| Diversity | Can be homogeneous or heterogeneous |
| Citizenship | Legal membership of state |

### 2. Territory

**Description**: Defined geographical area with recognized boundaries.

| Component | Description |
|-----------|-------------|
| Land | Territorial land within borders |
| Water | Rivers, lakes, territorial waters (12 nautical miles) |
| Airspace | Air above territory |
| Examples | India (3.3 million sq km), Singapore (721 sq km) |

### 3. Government

**Description**: Political organization that makes and enforces laws.

| Type | Examples |
|------|----------|
| Democratic | India, USA, UK |
| Authoritarian | North Korea, China |
| Monarchy | Saudi Arabia, Bhutan |
| Function | Legislature, Executive, Judiciary |

### 4. Sovereignty

**Description**: Supreme power of the state.

| Type | Meaning | Example |
|------|---------|---------|
| Internal | Authority over all within territory | Laws apply to all citizens |
| External | Independence from foreign control | Conduct foreign policy independently |

**Key Features**:
- Absolute and unlimited
- Permanent (survives change of government)
- Indivisible (cannot be shared)
- Exclusive (only one sovereign)

### Conclusion
All four elements are essential - absence of any one means it is not a state. For example, Palestine lacks full territorial control and recognized sovereignty, hence its statehood is disputed.`
              },
              {
                id: 'pl8',
                question: 'Analyze the challenges to National Integration in India and measures to address them. (8 marks)',
                mnemonic: 'RCCLR - Regionalism, Communalism, Casteism, Linguism, Remedies',
                answer: `### Challenges to National Integration

**National Integration**: The process of uniting people of different backgrounds into a single national identity while respecting diversity.

### Major Challenges

**1. Communalism**:
| Aspect | Description |
|--------|-------------|
| Meaning | Religious hatred and violence |
| Examples | Riots, hate speech, polarization |
| Impact | Divides society, breaks trust |

**2. Regionalism**:
| Aspect | Description |
|--------|-------------|
| Meaning | Excessive loyalty to one's region |
| Examples | Demand for separate states, "Sons of Soil" |
| Impact | Separatist movements, migration issues |

**3. Casteism**:
| Aspect | Description |
|--------|-------------|
| Meaning | Discrimination based on caste |
| Examples | Untouchability, caste violence |
| Impact | Social divisions, inequality |

**4. Linguistic Issues**:
| Aspect | Description |
|--------|-------------|
| Meaning | Language-based disputes |
| Examples | Hindi imposition protests, language politics |
| Impact | Regional tensions |

**5. Terrorism and Naxalism**:
- Internal security threats
- Red Corridor (Naxal areas)
- Cross-border terrorism

### Measures to Address

**Constitutional Measures**:
- Fundamental Rights (Art. 14-18: Equality)
- Directive Principles (Uniform Civil Code)
- Fundamental Duties (Art. 51A)

**Legal Measures**:
- UAPA (Unlawful Activities Prevention Act)
- SC/ST Prevention of Atrocities Act
- Religious Institutions (Prevention of Misuse) Act

**Institutional Measures**:
- National Integration Council
- National Foundation for Communal Harmony
- NHRC

**Educational and Social**:
- Value education
- Cultural exchange programs
- Media sensitization

### Conclusion
India's "Unity in Diversity" requires continuous effort through education, dialogue, development, and strong institutions to maintain national integration.`
              }
            ]
          },
          {
            id: 'pol5',
            title: '5. Contemporary India : Good Governance',
            description: 'Meaning, Features, Initiatives like RTI, Lokpal.',
            summary: '**Good Governance**: Accountable, Transparent, Responsive\n**Initiatives**: RTI Act 2005, Lokpal, E-Governance\n**Citizen Centric**: Focus on citizen welfare',
            detailedNotes: '### 1. Meaning of Governance\\nGovernance is the process of decision-making and the process by which decisions are implemented (or not implemented). It can be used in several contexts such as corporate governance, international governance, national governance and local governance.\\n\\n### 2. Good Governance\\nAccording to the World Bank (1992), Good Governance is "the manner in which power is exercised in the management of a country\'s economic and social resources for development."\\n\\n**8 Characteristics of Good Governance**:\\n1. **Participation**: All men and women should have a voice.\\n2. **Rule of Law**: Legal frameworks should be fair and enforced impartially.\\n3. **Transparency**: Information is freely available and directly accessible.\\n4. **Responsiveness**: Institutions try to serve all stakeholders.\\n5. **Consensus Oriented**: Mediation of different interests to reach a broad consensus.\\n6. **Equity and Inclusiveness**: All groups feel they have a stake in society.\\n7. **Effectiveness and Efficiency**: Results meet needs while making best use of resources.\\n8. **Accountability**: Decision-makers are accountable to the public.\\n\\n### 3. Initiatives for Good Governance in India\\n* **RTI Act 2005**: Right to Information to ensure transparency.\\n* **Lokpal and Lokayukta Act 2013**: To investigate corruption charges against public functionaries.\\n* **Citizen\'s Charter**: Document representing the commitment of the organization towards standards, quality and timeframe of service delivery.\\n* **E-Governance**: Use of ICT to deliver government services (Digital India, MyGov).\\n* **Right to Public Services Acts**: Statutory laws guaranteeing time-bound delivery of services.\\n* **Social Audit**: Assessing the performance of a scheme by the people (e.g., in MGNREGA).',
            flashcards: [
              { id: 'f1', front: 'What is Governance?', back: 'Process of decision-making and implementation.' },
              { id: 'f2', front: 'How many characteristics of Good Governance?', back: '8 Characteristics.' },
              { id: 'f3', front: 'What is Accountability?', back: 'Answerability of decision-makers to the public.' },
              { id: 'f4', front: 'What is Transparency?', back: 'Openness and free flow of information.' },
              { id: 'f5', front: 'What is Rule of Law?', back: 'Fair legal frameworks enforced impartially.' },
              { id: 'f6', front: 'What is RTI Act?', back: 'Right to Information Act, 2005.' },
              { id: 'f7', front: 'What is Lokpal?', back: 'Anti-corruption ombudsman at the Centre.' },
              { id: 'f8', front: 'What is Lokayukta?', back: 'Anti-corruption ombudsman at the State level.' },
              { id: 'f9', front: 'What is Citizen\'s Charter?', back: 'Commitment of an organization to service standards.' },
              { id: 'f10', front: 'What is E-Governance?', back: 'Electronic Governance (using ICT for services).' },
              { id: 'f11', front: 'What is SMART Governance?', back: 'Simple, Moral, Accountable, Responsive, Transparent.' },
              { id: 'f12', front: 'What is Social Audit?', back: 'Audit of schemes by the community/people.' },
              { id: 'f13', front: 'First state to pass Lokayukta Act?', back: 'Maharashtra (1971).' },
              { id: 'f14', front: 'When was Lokpal Act passed?', back: '2013.' },
              { id: 'f15', front: 'What is CPGRAMS?', back: 'Centralized Public Grievance Redress and Monitoring System.' },
              { id: 'f16', front: 'What is "Minimum Government, Maximum Governance"?', back: 'Motto focusing on efficiency and citizen-centricity.' },
              { id: 'f17', front: 'What is Whistleblower Protection Act?', back: 'Protects people who expose corruption (2014).' },
              { id: 'f18', front: 'What is MyGov?', back: 'Citizen engagement platform of Government of India.' },
              { id: 'f19', front: 'What is Digital India?', back: 'Flagship program to transform India into a digitally empowered society.' },
              { id: 'f20', front: 'What is "Yogakshema"?', back: 'Welfare of the people (mentioned in Arthashastra).' },
              { id: 'f21', front: 'Who wrote Arthashastra?', back: 'Kautilya (Chanakya).' },
              { id: 'f22', front: 'What is Responsiveness?', back: 'Serving stakeholders within a reasonable timeframe.' },
              { id: 'f23', front: 'What is Equity?', back: 'Fairness and inclusiveness for all groups.' },
              { id: 'f24', front: 'What is Consensus Oriented?', back: 'Reaching a broad agreement on what is best for the group.' },
              { id: 'f25', front: 'What is Effectiveness?', back: 'Producing results that meet needs.' },
              { id: 'f26', front: 'What is Efficiency?', back: 'Making best use of resources.' },
              { id: 'f27', front: 'What is Ombudsman?', back: 'Official appointed to investigate individuals\' complaints against maladministration.' },
              { id: 'f28', front: 'Good Governance Day is on?', back: '25th December (Atal Bihari Vajpayee\'s birthday).' },
              { id: 'f29', front: 'What is Right to Service Act?', back: 'Guarantees time-bound delivery of public services.' },
              { id: 'f30', front: 'World Bank defined Good Governance in which year?', back: '1992.' }
            ],
            mcqs: [
              { id: 'q1', question: 'RTI Act was enacted in:', options: ['2000', '2005', '2010', '2015'], correctIndex: 1, explanation: '12th October 2005.' },
              { id: 'q2', question: 'Lokpal and Lokayukta Act was passed in:', options: ['2011', '2012', '2013', '2014'], correctIndex: 2, explanation: 'Following the anti-corruption movement.' },
              { id: 'q3', question: 'Which is NOT a feature of Good Governance?', options: ['Transparency', 'Accountability', 'Corruption', 'Rule of Law'], correctIndex: 2, explanation: 'Corruption is the opposite of Good Governance.' },
              { id: 'q4', question: 'First state to establish Lokayukta:', options: ['Maharashtra', 'Odisha', 'Rajasthan', 'Karnataka'], correctIndex: 0, explanation: 'Maharashtra in 1971.' },
              { id: 'q5', question: 'SMART Governance stands for:', options: ['Simple, Moral, Accountable, Responsive, Transparent', 'Smart, Mobile, Active, Real, Tech', 'Social, Moral, Active, Real, True', 'None'], correctIndex: 0, explanation: 'Acronym for Good Governance attributes.' },
              { id: 'q6', question: 'Good Governance Day is celebrated on:', options: ['25 Dec', '2 Oct', '15 Aug', '26 Jan'], correctIndex: 0, explanation: 'Birth anniversary of Atal Bihari Vajpayee.' },
              { id: 'q7', question: 'CPGRAMS is a portal for:', options: ['Tax', 'Grievance Redressal', 'Passport', 'Visa'], correctIndex: 1, explanation: 'Public grievances.' },
              { id: 'q8', question: 'Social Audit is associated with:', options: ['MGNREGA', 'Defense', 'Space', 'Railways'], correctIndex: 0, explanation: 'Mandatory in MGNREGA.' },
              { id: 'q9', question: 'Ombudsman in India is called:', options: ['Lokpal', 'CBI', 'CVC', 'CAG'], correctIndex: 0, explanation: 'Lokpal (Centre) and Lokayukta (State).' },
              { id: 'q10', question: 'Citizen\'s Charter is:', options: ['Legal document', 'Commitment to service', 'Constitution', 'Bill'], correctIndex: 1, explanation: 'Declaration of service standards.' },
              { id: 'q11', question: 'Kautilya\'s Arthashastra focuses on:', options: ['War', 'Welfare of people', 'Religion', 'Art'], correctIndex: 1, explanation: 'Yogakshema (Welfare).' },
              { id: 'q12', question: 'E-Governance improves:', options: ['Transparency', 'Efficiency', 'Accessibility', 'All of these'], correctIndex: 3, explanation: 'Uses technology for better delivery.' },
              { id: 'q13', question: 'Whistleblower Protection Act year:', options: ['2010', '2014', '2018', '2020'], correctIndex: 1, explanation: 'Protects those who expose wrongdoings.' },
              { id: 'q14', question: 'MyGov platform was launched in:', options: ['2014', '2015', '2016', '2017'], correctIndex: 0, explanation: 'For citizen engagement.' },
              { id: 'q15', question: 'Digital India aims to make India:', options: ['Digitally Empowered', 'Rich', 'Powerful', 'Green'], correctIndex: 0, explanation: 'Knowledge economy.' },
              { id: 'q16', question: 'Rule of Law means:', options: ['King is supreme', 'Law is supreme', 'Police is supreme', 'None'], correctIndex: 1, explanation: 'No one is above the law.' },
              { id: 'q17', question: 'Transparency means:', options: ['Secrecy', 'Openness', 'Confusion', 'Darkness'], correctIndex: 1, explanation: 'Free flow of information.' },
              { id: 'q18', question: 'Accountability is towards:', options: ['Boss', 'Public', 'Self', 'Family'], correctIndex: 1, explanation: 'Answerable to the people.' },
              { id: 'q19', question: 'Responsiveness means serving within:', options: ['No time limit', 'Reasonable timeframe', 'Years', 'Decades'], correctIndex: 1, explanation: 'Timely action.' },
              { id: 'q20', question: 'Equity ensures:', options: ['Equality', 'Inclusiveness', 'Fairness', 'All of these'], correctIndex: 3, explanation: 'No one is left behind.' },
              { id: 'q21', question: 'Consensus Oriented means:', options: ['Majority rule', 'Broad agreement', 'Dictatorship', 'Minority rule'], correctIndex: 1, explanation: 'Agreement that suits best interest.' },
              { id: 'q22', question: 'Effectiveness means:', options: ['Doing right things', 'Doing things right', 'Doing nothing', 'Doing fast'], correctIndex: 0, explanation: 'Achieving goals.' },
              { id: 'q23', question: 'Efficiency means:', options: ['Doing right things', 'Doing things right', 'Wasting resources', 'Slow work'], correctIndex: 1, explanation: 'Optimal use of resources.' },
              { id: 'q24', question: 'Participation involves:', options: ['Only men', 'Only women', 'All citizens', 'Only rich'], correctIndex: 2, explanation: 'Voice for everyone.' },
              { id: 'q25', question: 'Right to Service Act was first passed by:', options: ['Madhya Pradesh', 'Bihar', 'Maharashtra', 'Kerala'], correctIndex: 0, explanation: 'MP in 2010.' },
              { id: 'q26', question: 'Consumer Protection Act 2019 replaced Act of:', options: ['1986', '1990', '2000', '2010'], correctIndex: 0, explanation: 'Updated consumer rights.' },
              { id: 'q27', question: 'Second ARC was headed by:', options: ['Veerappa Moily', 'Manmohan Singh', 'Modi', 'Ambedkar'], correctIndex: 0, explanation: 'Administrative Reforms Commission.' },
              { id: 'q28', question: 'World Bank report 1992 title:', options: ['Governance and Development', 'Poverty', 'Health', 'Education'], correctIndex: 0, explanation: 'Defined Good Governance.' },
              { id: 'q29', question: 'Minimum Government, Maximum Governance is associated with:', options: ['NDA Govt', 'UPA Govt', 'Left Front', 'None'], correctIndex: 0, explanation: 'PM Modi\'s slogan.' },
              { id: 'q30', question: 'Civil Society plays a role in:', options: ['Making laws', 'Holding govt accountable', 'Running govt', 'None'], correctIndex: 1, explanation: 'Watchdog function.' }
            ],
            reels: [
              { id: 'r1', title: 'Governance', content: 'Decision making.\nImplementation.\nProcess.', color: getReelColor(0) },
              { id: 'r2', title: 'Good Governance', content: 'Accountable.\nTransparent.\nResponsive.', color: getReelColor(1) },
              { id: 'r3', title: '8 Features', content: 'Participation.\nRule of Law.\nEquity.', color: getReelColor(2) },
              { id: 'r4', title: 'Accountability', content: 'Answerable.\nTo the people.\nResponsibility.', color: getReelColor(3) },
              { id: 'r5', title: 'Transparency', content: 'Openness.\nNo secrets.\nRTI.', color: getReelColor(4) },
              { id: 'r6', title: 'Rule of Law', content: 'Fair laws.\nImpartial.\nJustice.', color: getReelColor(5) },
              { id: 'r7', title: 'RTI 2005', content: 'Right to Info.\nAsk questions.\nGet answers.', color: getReelColor(6) },
              { id: 'r8', title: 'Lokpal', content: 'Anti-corruption.\nOmbudsman.\nClean India.', color: getReelColor(7) },
              { id: 'r9', title: 'Lokayukta', content: 'State level.\nWatchdog.\nJustice.', color: getReelColor(8) },
              { id: 'r10', title: 'Citizen Charter', content: 'Service promise.\nQuality.\nTimeframe.', color: getReelColor(9) },
              { id: 'r11', title: 'E-Governance', content: 'Digital services.\nOnline.\nFast & Easy.', color: getReelColor(0) },
              { id: 'r12', title: 'Digital India', content: 'Empowerment.\nConnectivity.\nFuture.', color: getReelColor(1) },
              { id: 'r13', title: 'MyGov', content: 'Participate.\nShare ideas.\nEngage.', color: getReelColor(2) },
              { id: 'r14', title: 'Social Audit', content: 'People\'s check.\nMGNREGA.\nTransparency.', color: getReelColor(3) },
              { id: 'r15', title: 'Whistleblower', content: 'Expose wrong.\nProtection.\nBrave.', color: getReelColor(4) },
              { id: 'r16', title: 'SMART', content: 'Simple.\nMoral.\nAccountable.', color: getReelColor(5) },
              { id: 'r17', title: 'Kautilya', content: 'Arthashastra.\nYogakshema.\nWelfare.', color: getReelColor(6) },
              { id: 'r18', title: 'Responsiveness', content: 'Timely service.\nListening.\nActing.', color: getReelColor(7) },
              { id: 'r19', title: 'Equity', content: 'Inclusion.\nFairness.\nFor all.', color: getReelColor(8) },
              { id: 'r20', title: 'Efficiency', content: 'Best use.\nResources.\nResults.', color: getReelColor(9) },
              { id: 'r21', title: 'Consensus', content: 'Agreement.\nBest interest.\nTogether.', color: getReelColor(0) },
              { id: 'r22', title: 'Participation', content: 'Voice.\nVote.\nInvolvement.', color: getReelColor(1) },
              { id: 'r23', title: 'Right to Service', content: 'Time bound.\nGuaranteed.\nDuty.', color: getReelColor(2) },
              { id: 'r24', title: 'Consumer Rights', content: 'Safety.\nInformation.\nRedressal.', color: getReelColor(3) },
              { id: 'r25', title: 'Ombudsman', content: 'Public defender.\nInvestigator.\nNeutral.', color: getReelColor(4) },
              { id: 'r26', title: 'CPGRAMS', content: 'Grievance portal.\nComplain online.\nGet solution.', color: getReelColor(5) },
              { id: 'r27', title: 'Min Govt', content: 'Max Governance.\nLess red tape.\nMore action.', color: getReelColor(6) },
              { id: 'r28', title: 'Good Gov Day', content: 'Dec 25.\nVajpayee.\nCelebration.', color: getReelColor(7) },
              { id: 'r29', title: 'Civil Society', content: 'NGOs.\nActivists.\nPartners.', color: getReelColor(8) },
              { id: 'r30', title: 'Future', content: 'Clean Govt.\nHappy Citizens.\nGreat Nation.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'pl9',
                question: 'Explain the Eight Characteristics of Good Governance as defined by the World Bank. (8 marks)',
                mnemonic: 'PART RACE - Participation, Accountability, Rule of law, Transparency, Responsiveness, Consensus, Equity, Effectiveness',
                answer: `### Eight Characteristics of Good Governance

**World Bank Definition (1992)**: "Good Governance is the manner in which power is exercised in the management of a country's economic and social resources for development."

### The Eight Characteristics

**1. Participation**:
| Aspect | Description |
|--------|-------------|
| Meaning | All citizens can have a voice |
| Methods | Voting, consultations, public hearings |
| Requirement | Freedom of association and expression |

**2. Rule of Law**:
| Aspect | Description |
|--------|-------------|
| Meaning | Fair legal frameworks enforced impartially |
| Features | Independent judiciary, police |
| Basis | Constitution and human rights |

**3. Transparency**:
| Aspect | Description |
|--------|-------------|
| Meaning | Information freely available |
| Examples | RTI Act, open budgets |
| Purpose | Enables informed decisions |

**4. Responsiveness**:
| Aspect | Description |
|--------|-------------|
| Meaning | Serving stakeholders within reasonable time |
| Examples | Citizen's Charter, service guarantees |
| Purpose | Timely redressal of grievances |

**5. Consensus Oriented**:
| Aspect | Description |
|--------|-------------|
| Meaning | Mediating different interests |
| Goal | Broad agreement on what is best |
| Method | Dialogue and negotiation |

**6. Equity and Inclusiveness**:
| Aspect | Description |
|--------|-------------|
| Meaning | All groups feel they have a stake |
| Focus | Marginalized sections included |
| Goal | Social justice |

**7. Effectiveness and Efficiency**:
| Aspect | Description |
|--------|-------------|
| Effectiveness | Producing results that meet needs |
| Efficiency | Optimal use of resources |
| Goal | Value for money |

**8. Accountability**:
| Aspect | Description |
|--------|-------------|
| Meaning | Decision-makers answerable to public |
| Types | Political, administrative, legal |
| Mechanisms | Lokpal, CAG, Parliament |

### India's Initiatives
- RTI Act 2005 (Transparency)
- Lokpal Act 2013 (Accountability)
- E-Governance (Efficiency)
- Social Audit (Participation)

### Conclusion
Good governance is essential for development. India is progressing but challenges remain in implementation.`
              },
              {
                id: 'pl10',
                question: 'Discuss the Right to Information Act 2005 and its significance for Good Governance. (8 marks)',
                mnemonic: 'TRACK - Transparency, Responsibility, Accountability, Citizen power, Knowledge',
                answer: `### Right to Information Act, 2005

**Enacted**: 12th October 2005
**Objective**: To provide for setting out the practical regime of right to information for citizens to secure access to information under the control of public authorities.

### Key Provisions

**1. Right of Citizens**:
| Right | Details |
|-------|---------|
| Request | Any citizen can request information |
| Time limit | 30 days (48 hours in case of life/liberty) |
| Fee | Nominal application fee |
| Appeals | Two-tier appeal system |

**2. Public Authorities' Duties**:
- Proactive disclosure (Section 4)
- Designate PIOs (Public Information Officers)
- Maintain records properly
- Respond within time limits

**3. Information Covered**:
| Included | Excluded (Section 8) |
|----------|---------------------|
| Records, documents | National security |
| Files, contracts | Personal privacy |
| Opinions, data | Cabinet papers |
| Email, samples | Trade secrets |

### Institutional Framework

| Authority | Level | Role |
|-----------|-------|------|
| CIC | Central | Central Information Commission (Appellate) |
| SIC | State | State Information Commission (Appellate) |
| PIO | Department | First point of contact |
| FAA | Department | First Appellate Authority |

### Significance for Good Governance

**1. Transparency**:
- Opens government functioning to public scrutiny
- Reduces secrecy in administration

**2. Accountability**:
- Officials answerable for decisions
- Reasons for decisions must be provided

**3. Citizen Empowerment**:
- Shift from "Need to Know" to "Right to Know"
- Informed participation in democracy

**4. Anti-Corruption**:
- Exposes wrongdoing
- Deterrent effect on corrupt practices

**5. Better Service Delivery**:
- Pressure to perform
- Citizen feedback mechanism

### Challenges
- Low awareness in rural areas
- Delays in responses
- Attacks on RTI activists
- Misuse for vexatious requests

### Conclusion
RTI is a powerful tool for good governance, transforming citizen-government relationship from subjects to stakeholders. It's called the "Master Key" to democracy.`
              }
            ]
          },
          {
            id: 'pol6',
            title: '6. India and the World',
            description: 'Foreign Policy, Relations with Major Powers and Neighbors.',
            summary: '**Foreign Policy**: Non-Alignment, Panchsheel\n**Relations**: USA (Strategic), Russia (Defense), China (Complex)\n**Neighbors**: Pakistan (Conflict), Bangladesh (Friendly)',
            detailedNotes: '### 1. Determinants of Foreign Policy\\n* **Geography**: Location, size, borders.\\n* **History**: Colonial past, ancient culture.\\n* **Economy**: Development needs, trade, energy.\\n* **Polity**: Democracy, federal structure.\\n* **International Environment**: Cold War, Globalization, Terrorism.\\n\\n### 2. Principles of Foreign Policy\\n* **Panchsheel (1954)**: Five principles of peaceful coexistence (with China).\\n* **Non-Alignment (NAM)**: Not joining any power bloc (USA/USSR), independent policy.\\n* **Anti-Colonialism & Anti-Racism**: Supporting freedom struggles (e.g., South Africa).\\n\\n### 3. India and Major Powers\\n* **USA**: From "estranged democracies" to "strategic partners". Civil Nuclear Deal (2008), Defense trade, Diaspora.\\n* **Russia**: Time-tested friend. Major defense supplier (S-400, BrahMos). Energy security.\\n* **China**: "Hindi-Chini Bhai Bhai" to 1962 War. Border disputes (LAC). Cooperation in BRICS, SCO. Competition in Asia.\\n\\n### 4. India and Neighbors\\n* **Pakistan**: Partition trauma. Kashmir issue. Wars (1947, 65, 71, 99). Cross-border terrorism. Indus Waters Treaty.\\n* **Bangladesh**: India\'s role in 1971 Liberation. Land Boundary Agreement (2015). Water sharing (Teesta issue).\\n* **Sri Lanka**: Cultural ties (Buddhism). Ethnic conflict (Tamils). 13th Amendment. Fishermen issue.\\n* **Nepal**: Open border. Roti-Beti relationship. Hydro-power potential.\\n\\n### 5. India and the World\\n* **UN**: Founding member. Largest contributor to Peacekeeping. Demand for permanent UNSC seat.\\n* **Regional Groups**: SAARC (South Asia), BIMSTEC (Bay of Bengal), ASEAN (Act East Policy).\\n* **Global Groups**: G20 (Presidency 2023), BRICS, SCO, QUAD.',
            flashcards: [
              { id: 'f1', front: 'Architect of India\'s Foreign Policy?', back: 'Jawaharlal Nehru.' },
              { id: 'f2', front: 'What is NAM?', back: 'Non-Aligned Movement.' },
              { id: 'f3', front: 'First NAM Summit?', back: 'Belgrade (1961).' },
              { id: 'f4', front: 'Panchsheel Agreement signed between?', back: 'India and China (1954).' },
              { id: 'f5', front: 'Simla Agreement year?', back: '1972 (Indira Gandhi & Z.A. Bhutto).' },
              { id: 'f6', front: 'Lahore Declaration year?', back: '1999 (Vajpayee & Nawaz Sharif).' },
              { id: 'f7', front: 'Indus Waters Treaty signed in?', back: '1960 (Mediated by World Bank).' },
              { id: 'f8', front: 'Tashkent Agreement year?', back: '1966 (After 1965 War).' },
              { id: 'f9', front: 'Look East Policy launched by?', back: 'P.V. Narasimha Rao (1991).' },
              { id: 'f10', front: 'Act East Policy launched by?', back: 'Narendra Modi (2014).' },
              { id: 'f11', front: 'What is Gujral Doctrine?', back: 'Non-reciprocity with neighbors.' },
              { id: 'f12', front: 'India\'s nuclear tests years?', back: '1974 (Smiling Buddha) & 1998 (Operation Shakti).' },
              { id: 'f13', front: 'Operation Vijay was for?', back: 'Kargil War (1999).' },
              { id: 'f14', front: 'Operation Meghdoot was for?', back: 'Siachen Glacier (1984).' },
              { id: 'f15', front: 'IPKF full form?', back: 'Indian Peace Keeping Force (in Sri Lanka).' },
              { id: 'f16', front: 'SAARC established in?', back: '1985.' },
              { id: 'f17', front: 'SAARC HQ?', back: 'Kathmandu, Nepal.' },
              { id: 'f18', front: 'BRICS members?', back: 'Brazil, Russia, India, China, South Africa.' },
              { id: 'f19', front: 'SCO HQ?', back: 'Beijing, China.' },
              { id: 'f20', front: 'India\'s demand in UN?', back: 'Permanent seat in Security Council.' },
              { id: 'f21', front: 'McMahon Line?', back: 'Border between India and China.' },
              { id: 'f22', front: 'Radcliffe Line?', back: 'Border between India and Pakistan.' },
              { id: 'f23', front: 'Durand Line?', back: 'Border between Pakistan and Afghanistan.' },
              { id: 'f24', front: 'Kaladan Project with?', back: 'Myanmar.' },
              { id: 'f25', front: 'Maitree Express runs between?', back: 'India and Bangladesh.' },
              { id: 'f26', front: 'Samjhauta Express runs between?', back: 'India and Pakistan.' },
              { id: 'f27', front: '2+2 Dialogue is with?', back: 'USA, Japan, Australia, Russia.' },
              { id: 'f28', front: 'QUAD members?', back: 'India, USA, Japan, Australia.' },
              { id: 'f29', front: 'Look West Policy focuses on?', back: 'West Asia (Middle East).' },
              { id: 'f30', front: 'Connect Central Asia Policy year?', back: '2012.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Architect of India\'s Foreign Policy:', options: ['Gandhi', 'Nehru', 'Patel', 'Bose'], correctIndex: 1, explanation: 'Jawaharlal Nehru shaped it.' },
              { id: 'q2', question: 'Panchsheel was signed in:', options: ['1950', '1952', '1954', '1962'], correctIndex: 2, explanation: 'Agreement with China.' },
              { id: 'q3', question: 'First NAM Summit was held in:', options: ['Delhi', 'Cairo', 'Belgrade', 'Bandung'], correctIndex: 2, explanation: 'In 1961.' },
              { id: 'q4', question: 'Simla Agreement was signed between:', options: ['Shastri-Ayub', 'Indira-Bhutto', 'Vajpayee-Sharif', 'Modi-Imran'], correctIndex: 1, explanation: 'After 1971 War.' },
              { id: 'q5', question: 'Kargil War took place in:', options: ['1990', '1995', '1999', '2001'], correctIndex: 2, explanation: 'Operation Vijay.' },
              { id: 'q6', question: 'Indus Waters Treaty was mediated by:', options: ['UN', 'USA', 'World Bank', 'USSR'], correctIndex: 2, explanation: 'Signed in 1960.' },
              { id: 'q7', question: 'Tashkent Agreement followed which war:', options: ['1947', '1965', '1971', '1999'], correctIndex: 1, explanation: 'Shastri ji died there.' },
              { id: 'q8', question: 'India\'s first nuclear test code name:', options: ['Smiling Buddha', 'Shakti', 'Vijay', 'Parakram'], correctIndex: 0, explanation: 'In 1974.' },
              { id: 'q9', question: 'India\'s second nuclear test code name:', options: ['Smiling Buddha', 'Operation Shakti', 'Thunder', 'Storm'], correctIndex: 1, explanation: 'In 1998 at Pokhran.' },
              { id: 'q10', question: 'Look East Policy was launched in:', options: ['1985', '1991', '1998', '2014'], correctIndex: 1, explanation: 'By PM Narasimha Rao.' },
              { id: 'q11', question: 'SAARC was founded in:', options: ['Delhi', 'Kathmandu', 'Dhaka', 'Colombo'], correctIndex: 2, explanation: 'First summit in Dhaka.' },
              { id: 'q12', question: 'HQ of SAARC is in:', options: ['Delhi', 'Kathmandu', 'Dhaka', 'Islamabad'], correctIndex: 1, explanation: 'Nepal capital.' },
              { id: 'q13', question: 'Which country is NOT in SAARC:', options: ['India', 'Pakistan', 'China', 'Bhutan'], correctIndex: 2, explanation: 'China is an observer.' },
              { id: 'q14', question: 'McMahon Line divides:', options: ['India-Pak', 'India-China', 'India-Nepal', 'India-Bhutan'], correctIndex: 1, explanation: 'Eastern sector border.' },
              { id: 'q15', question: 'Radcliffe Line divides:', options: ['India-Pak', 'India-China', 'India-Nepal', 'India-Myanmar'], correctIndex: 0, explanation: 'Drawn during Partition.' },
              { id: 'q16', question: 'IPKF was sent to:', options: ['Maldives', 'Sri Lanka', 'Nepal', 'Bhutan'], correctIndex: 1, explanation: 'To enforce Indo-Sri Lanka Accord.' },
              { id: 'q17', question: 'Bangladesh was liberated in:', options: ['1947', '1965', '1971', '1975'], correctIndex: 2, explanation: 'With India\'s help.' },
              { id: 'q18', question: 'Gujral Doctrine advocates:', options: ['Reciprocity', 'Non-reciprocity', 'Aggression', 'Isolation'], correctIndex: 1, explanation: 'Giving more to neighbors.' },
              { id: 'q19', question: '2+2 Dialogue is primarily with:', options: ['USA', 'China', 'Pakistan', 'Nepal'], correctIndex: 0, explanation: 'Strategic dialogue.' },
              { id: 'q20', question: 'QUAD includes India, USA, Japan and:', options: ['Russia', 'China', 'Australia', 'UK'], correctIndex: 2, explanation: 'Quadrilateral Security Dialogue.' },
              { id: 'q21', question: 'BRICS was originally:', options: ['BRIC', 'RICS', 'BICS', 'BRIS'], correctIndex: 0, explanation: 'South Africa joined later.' },
              { id: 'q22', question: 'SCO stands for:', options: ['South Cooperation Org', 'Shanghai Cooperation Org', 'State Cooperation Org', 'None'], correctIndex: 1, explanation: 'Eurasian political group.' },
              { id: 'q23', question: 'India\'s "Iron Brother" (traditional friend):', options: ['USA', 'UK', 'Russia', 'Japan'], correctIndex: 2, explanation: 'Strong defense ties.' },
              { id: 'q24', question: 'Chabahar Port is in:', options: ['Pakistan', 'Iran', 'Afghanistan', 'Oman'], correctIndex: 1, explanation: 'Developed by India.' },
              { id: 'q25', question: 'Gwadar Port is in:', options: ['Iran', 'Pakistan', 'India', 'Sri Lanka'], correctIndex: 1, explanation: 'Developed by China.' },
              { id: 'q26', question: 'Hambantota Port is in:', options: ['India', 'Maldives', 'Sri Lanka', 'Bangladesh'], correctIndex: 2, explanation: 'Leased to China.' },
              { id: 'q27', question: 'Which PM signed Lahore Declaration:', options: ['Indira Gandhi', 'Rajiv Gandhi', 'Vajpayee', 'Modi'], correctIndex: 2, explanation: 'Bus diplomacy.' },
              { id: 'q28', question: 'Which PM signed Tashkent Agreement:', options: ['Nehru', 'Shastri', 'Indira', 'Morarji'], correctIndex: 1, explanation: 'In 1966.' },
              { id: 'q29', question: 'Article 51 of Constitution deals with:', options: ['Fundamental Rights', 'International Peace', 'President', 'Parliament'], correctIndex: 1, explanation: 'Directive Principle.' },
              { id: 'q30', question: 'India\'s nuclear doctrine:', options: ['First Use', 'No First Use', 'Full Use', 'None'], correctIndex: 1, explanation: 'Retaliation only.' }
            ],
            reels: [
              { id: 'r1', title: 'Foreign Policy', content: 'National Interest.\nWorld Peace.\nIndependence.', color: getReelColor(0) },
              { id: 'r2', title: 'Panchsheel', content: '5 Principles.\nPeaceful Coexistence.\n1954.', color: getReelColor(1) },
              { id: 'r3', title: 'NAM', content: 'Non-Aligned.\nNot Neutral.\nIndependent Voice.', color: getReelColor(2) },
              { id: 'r4', title: 'Nehru', content: 'Architect.\nVisionary.\nWorld Leader.', color: getReelColor(3) },
              { id: 'r5', title: 'Indo-Pak Wars', content: '1947, 1965.\n1971, 1999.\nConflict.', color: getReelColor(4) },
              { id: 'r6', title: '1971 War', content: 'Bangladesh born.\nPakistan surrender.\nIndia wins.', color: getReelColor(5) },
              { id: 'r7', title: 'Kargil 1999', content: 'High altitude.\nOperation Vijay.\nVictory.', color: getReelColor(6) },
              { id: 'r8', title: 'Simla Agreement', content: '1972.\nBilateralism.\nLoC defined.', color: getReelColor(7) },
              { id: 'r9', title: 'Lahore Declaration', content: '1999.\nBus Yatra.\nPeace attempt.', color: getReelColor(8) },
              { id: 'r10', title: 'Indus Treaty', content: 'Water sharing.\nWorld Bank.\nSurvived wars.', color: getReelColor(9) },
              { id: 'r11', title: 'Indo-China 1962', content: 'Border war.\nBetrayal.\nDefeat.', color: getReelColor(0) },
              { id: 'r12', title: 'McMahon Line', content: 'Border.\nArunachal.\nDisputed by China.', color: getReelColor(1) },
              { id: 'r13', title: 'Tibet Issue', content: 'Dalai Lama.\nAsylum in India.\nChina angry.', color: getReelColor(2) },
              { id: 'r14', title: 'Galwan Valley', content: '2020 Clash.\nBrave soldiers.\nStandoff.', color: getReelColor(3) },
              { id: 'r15', title: 'Indo-US Ties', content: 'Strategic Partners.\nDemocracies.\nStronger now.', color: getReelColor(4) },
              { id: 'r16', title: 'Nuclear Deal', content: '123 Agreement.\nCivil Nuclear.\nEnergy.', color: getReelColor(5) },
              { id: 'r17', title: 'Indo-Russia', content: 'Old friend.\nTrust.\nDefense.', color: getReelColor(6) },
              { id: 'r18', title: 'Defense Ties', content: 'MiG, Sukhoi.\nBrahMos.\nS-400.', color: getReelColor(7) },
              { id: 'r19', title: 'S-400 Missile', content: 'Air Defense.\nFrom Russia.\nGame changer.', color: getReelColor(8) },
              { id: 'r20', title: 'Indo-Bangladesh', content: 'Friendly.\nLand Boundary.\nConnectivity.', color: getReelColor(9) },
              { id: 'r21', title: 'Land Boundary', content: 'Enclaves swapped.\nBorder fixed.\nHistoric.', color: getReelColor(0) },
              { id: 'r22', title: 'Water Sharing', content: 'Teesta River.\nDispute.\nNeeds solution.', color: getReelColor(1) },
              { id: 'r23', title: 'Indo-Sri Lanka', content: 'Neighbors.\nCultural ties.\nFishermen issue.', color: getReelColor(2) },
              { id: 'r24', title: 'Tamil Issue', content: '13th Amendment.\nDevolution.\nRights.', color: getReelColor(3) },
              { id: 'r25', title: 'Fishermen', content: 'Crossing border.\nArrests.\nHumanitarian.', color: getReelColor(4) },
              { id: 'r26', title: 'SAARC', content: 'South Asia.\nRegional coop.\nStalled by Pak.', color: getReelColor(5) },
              { id: 'r27', title: 'ASEAN', content: 'Act East.\nTrade.\nSoutheast Asia.', color: getReelColor(6) },
              { id: 'r28', title: 'BRICS', content: 'Emerging economies.\nGlobal South.\nNew order.', color: getReelColor(7) },
              { id: 'r29', title: 'G20 Presidency', content: 'Vasudhaiva Kutumbakam.\nOne Earth.\nOne Family.', color: getReelColor(8) },
              { id: 'r30', title: 'UN Seat', content: 'Security Council.\nPermanent Seat.\nIndia deserves.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'pl11',
                question: 'Explain the Panchsheel Principles and their relevance in contemporary international relations. (8 marks)',
                mnemonic: 'MINTI - Mutual respect, Integrity, Non-aggression, Non-interference, Peaceful coexistence',
                answer: `### Panchsheel (Five Principles of Peaceful Coexistence)

**Origin**: Signed in the Preamble of the Agreement on Trade and Intercourse between Tibet Region of China and India, **29 April 1954**.

**Signatories**: Jawaharlal Nehru (India) and Zhou Enlai (China)

### The Five Principles

| No. | Principle | Meaning |
|-----|-----------|---------|
| 1 | Mutual Respect for Territorial Integrity and Sovereignty | Respecting each other's borders and independence |
| 2 | Mutual Non-Aggression | Not attacking each other |
| 3 | Mutual Non-Interference in Internal Affairs | Not meddling in domestic matters |
| 4 | Equality and Mutual Benefit | Equal partnership, win-win relations |
| 5 | Peaceful Coexistence | Living together in peace despite differences |

### Historical Significance

**Positive Aspects**:
- Foundation of NAM philosophy
- Alternative to Cold War bloc politics
- Influenced Afro-Asian relations
- Bandung Conference (1955) adopted these principles

**Limitations**:
- 1962 Indo-China War: China violated these principles
- More idealistic than practical
- Did not prevent border disputes

### Contemporary Relevance

**Still Relevant**:
| Context | Application |
|---------|-------------|
| UN Charter | Article 2 echoes these principles |
| ASEAN | Treaty of Amity and Cooperation based on similar principles |
| SCO | Shanghai Cooperation Organization adopts similar norms |
| India-China | Still referenced in bilateral talks |

**Modern Challenges**:
- Terrorism (non-state actors)
- Cyber warfare
- Economic coercion
- Climate change (shared responsibility)

### India's Position Today
- Multi-alignment (not non-alignment)
- Respects sovereignty but acts against terrorism
- "Neighbourhood First" policy
- Strategic autonomy

### Conclusion
While the idealism of Panchsheel was tested by 1962, its core principles remain foundational to international law and diplomacy. India continues to advocate peaceful resolution of disputes while defending its interests.`
              },
              {
                id: 'pl12',
                question: 'Discuss the evolution of India-USA relations from the Cold War to Strategic Partnership. (8 marks)',
                mnemonic: 'ECND - Estranged, Cold War tilt, Nuclear deal, Defense partnership',
                answer: `### Evolution of India-USA Relations

### Phase 1: Cold War Era (1947-1991)

**"Estranged Democracies"**:
| Factor | Impact |
|--------|--------|
| NAM | India's non-alignment seen negatively by US |
| Pakistan | USA's ally against USSR (SEATO, CENTO) |
| Soviet Tilt | India-USSR Treaty of Friendship (1971) |
| Nuclear | India's 1974 test strained relations |
| Sanctions | Technology denial, restrictions |

**Key Events**:
- 1971 War: USS Enterprise sent to Bay of Bengal
- PL-480 Food aid dependency
- Limited cooperation

### Phase 2: Post-Cold War Transition (1991-2000)

**Improving Relations**:
- Economic liberalization opened doors
- Common democratic values emphasized
- But 1998 nuclear tests led to sanctions

### Phase 3: Strategic Partnership (2000-Present)

**Turning Point**: Visit of PM Vajpayee (2000) and President Clinton

| Milestone | Year | Significance |
|-----------|------|--------------|
| NSSP | 2004 | Next Steps in Strategic Partnership |
| Civil Nuclear Deal | 2005-08 | 123 Agreement, ended India's isolation |
| DTTI | 2012 | Defense Trade and Technology Initiative |
| Major Defense Partner | 2016 | Same status as NATO allies |
| 2+2 Dialogue | 2018 | Foreign + Defense Ministers meeting |
| QUAD Revival | 2017 | Indo-Pacific cooperation |
| iCET | 2023 | Initiative on Critical and Emerging Technology |

### Areas of Cooperation Today

| Domain | Examples |
|--------|----------|
| Defense | COMCASA, BECA, LEMOA agreements |
| Trade | $190+ billion bilateral trade |
| Diaspora | 4.4 million Indian-Americans |
| Technology | Space, semiconductors, AI |
| Counter-terrorism | Intelligence sharing |
| Climate | Clean energy partnership |

### Challenges Remain
- CAATSA sanctions (S-400 issue)
- Trade differences
- Immigration (H-1B visas)
- Russia relationship

### Conclusion
From estranged democracies to indispensable partners - the relationship has transformed dramatically. Both countries now share convergent interests in a rules-based Indo-Pacific order.`
              }
            ]
          },
          {
            id: 'pol7',
            title: '7. Revision Pack - High Yield Crash Course',
            description: 'Last 24h checklist with 10 MCQs and three 8-markers for rapid recall.',
            summary: '**Use in final day**: 10 high-yield MCQs, 3 eight-markers, quick reels\n**Focus areas**: World since 1991, Globalisation, Humanitarian issues, Governance, India & World\n**Checklist**: Skim → MCQs → 8-mark outlines → reels mnemonics',
            detailedNotes: '### How to use (last 24 hours)\n- 20 min: Skim summaries of chapters 1-6.\n- 25 min: Attempt the 10 MCQs below (closed book).\n- 30 min: Draft bullet outlines for the three 8-markers.\n- 10 min: Lock dates/stats (1991 LPG, WTO 1995, RTI 2005, G20 India 2023, QUAD revival 2017).\n- 5 min: Breathe + sleep.\n\n### Last-24h Checklist\n1. **World since 1991**: USSR fall impacts; unipolar → multipolar shifts.\n2. **Globalisation**: LPG reforms, WTO role, homogenisation vs glocalisation.\n3. **Humanitarian issues**: UN role, refugees/migration, terrorism, climate justice.\n4. **Peace/Integration**: Communalism, regionalism, casteism + remedies (education, federal balance, dialogue).\n5. **Governance**: RTI 2005, e-governance examples, citizen charter, social audit.\n6. **India & World**: NAM legacy to multi-alignment; QUAD/BRICS/SCO positions; NFU doctrine.\n7. **Data points**: Article 51 (international peace), SAARC 1985, Panchsheel 1954, Act East 1991, Act West focus Gulf.\n\n### Rapid recall anchors\n- 8-marker structure: Intro → 5-6 bullets → conclusion.\n- Mnemonics: ENAGL (USSR causes), LPG (reforms), PAVERS (peace threats), TRACK (RTI significance), BALANCE (multi-alignment steps).',
            flashcards: [
              { id: 'rf1', front: '8-marker skeleton', back: 'Intro (1) + 5-6 bullets (6) + conclusion (1); add dates/examples.' },
              { id: 'rf2', front: 'UN peacekeeping hook', back: 'India stays among top troop contributors; mandates now include protection of civilians.' },
              { id: 'rf3', front: 'Globalisation balance', back: 'Open markets (LPG 1991) + safeguard culture (glocalisation) + welfare cushions.' },
              { id: 'rf4', front: 'India\'s stance', back: 'Strategic autonomy with multi-alignment across QUAD, BRICS, SCO, G20.' }
            ],
            mcqs: [
              { id: 'rq1', question: 'Which year marks the start of India\'s LPG reforms?', options: ['1985', '1991', '1996', '2000'], correctIndex: 1, explanation: '1991 crisis triggered liberalisation, privatisation, globalisation.' },
              { id: 'rq2', question: 'WTO formally replaced GATT in:', options: ['1989', '1991', '1995', '2001'], correctIndex: 2, explanation: 'World Trade Organization began in 1995 (Uruguay Round outcome).' },
              { id: 'rq3', question: 'Article 51 of the Indian Constitution urges:', options: ['Abolition of titles', 'Promotion of international peace', 'Uniform civil code', 'Right to property'], correctIndex: 1, explanation: 'Directive Principle promoting peace, dispute resolution, and respect for international law.' },
              { id: 'rq4', question: 'The Right to Information Act was enacted in:', options: ['1999', '2002', '2005', '2010'], correctIndex: 2, explanation: 'RTI, 2005 operationalised transparency and accountability.' },
              { id: 'rq5', question: 'QUAD was effectively revived at officials level in:', options: ['2001', '2007', '2011', '2017'], correctIndex: 3, explanation: 'Post-2017 Indo-Pacific focus revived the grouping.' },
              { id: 'rq6', question: 'Which is NOT a permanent member of the UN Security Council?', options: ['India', 'Russia', 'China', 'France'], correctIndex: 0, explanation: 'India seeks a permanent seat; current P5 exclude India.' },
              { id: 'rq7', question: 'India\'s nuclear doctrine emphasises:', options: ['First Use', 'No First Use', 'Massive first strike', 'Flexible first strike'], correctIndex: 1, explanation: 'Declared NFU with credible minimum deterrence.' },
              { id: 'rq8', question: 'Citizen\'s Charter best represents which good-governance pillar?', options: ['Equity', 'Rule of Law', 'Responsiveness', 'Participation'], correctIndex: 2, explanation: 'It sets service standards and timelines to respond to citizens.' },
              { id: 'rq9', question: 'Which is a non-state actor in global politics?', options: ['Parliament of India', 'Supreme Court of India', 'Greenpeace', 'RBI'], correctIndex: 2, explanation: 'NGOs like Greenpeace operate across borders influencing agendas.' },
              { id: 'rq10', question: 'India is consistently among top troop contributors to:', options: ['NATO missions', 'UN Peacekeeping', 'CSTO deployments', 'OPEC operations'], correctIndex: 1, explanation: 'India deploys large contingents to UN peacekeeping missions.' }
            ],
            reels: [
              { id: 'rr1', title: 'Exam Eve Flow', content: 'Skim core notes.\nAttempt MCQs.\nOutline 8-markers.\nSleep.', color: getReelColor(0) },
              { id: 'rr2', title: 'Date Drops', content: '1991-LPG.\n1995-WTO.\n2005-RTI.\n2017-QUAD revival.\n2023-G20 India.', color: getReelColor(1) },
              { id: 'rr3', title: 'Hooks to Cite', content: 'Article 51.\nNFU doctrine.\nUN peacekeeping lead.\nPanchsheel 1954.', color: getReelColor(2) }
            ],
            longAnswers: [
              {
                id: 'rl1',
                question: 'Analyse the impact of globalisation on India\'s economy, politics, and culture. (8 marks)',
                mnemonic: 'EPC-TIGER (Economy, Politics, Culture - Trade, Investment, Governance, Equality, Roots)',
                answer: `### Impact of Globalisation on India

**Introduction**: 1991 LPG reforms + 1995 WTO entry integrated India with global markets.

### Economy (TIG)
- **Trade Boom**: Exports/services surged; IT/BPO hubs emerged.
- **Investment**: FDI inflows; technology and capital access improved.
- **Growth vs Gaps**: Higher GDP, but regional and sectoral inequality widened; external shocks (2008) felt quickly.

### Politics/Governance (E)
- **Regulatory Shifts**: Competition law, SEBI strengthening, IPR compliance.
- **Policy Space Debate**: WTO rules constrain tariffs/subsidies; need safety nets.
- **State Role**: From controller to facilitator; PPPs and disinvestment.

### Culture/Society (R)
- **Connectivity**: Internet/social media globalise tastes and activism.
- **Homogenisation vs Glocalisation**: Western formats adapted locally (OTT, food, music).
- **Migration/Diaspora**: Remittances and soft power rise; brain drain concerns persist.

### Conclusion
Globalisation catalysed growth and openness but demands balanced policies—productivity + inclusion + cultural confidence.`
              },
              {
                id: 'rl2',
                question: 'Evaluate India\'s multi-alignment strategy in the 21st century. (8 marks)',
                mnemonic: 'BALANCE - Build many ties, Autonomy, Leverage coalitions, Avoid entanglement, Neighbourhood first, Crisis hedging, Economic gains',
                answer: `### India\'s Multi-Alignment Strategy

**Introduction**: Shift from Cold War non-alignment to issue-based multi-alignment in a multipolar world.

### Drivers
- **China Factor**: Border tensions + Indo-Pacific competition.
- **Growth Goals**: Technology, energy, capital from diverse partners.
- **System Fluidity**: No single hegemon; coalitions by issue.

### Practice
- **QUAD/Indo-Pacific** for maritime security; **BRICS/SCO** for Eurasian balance; **G20** for economic voice.
- **US Partnership** (tech/defense) balanced with **Russia ties** (legacy hardware, energy).
- **Neighbourhood First** + **Act East/West** to anchor regionally.

### Benefits
- Strategic autonomy preserved; more options in crises.
- Diversified defense sourcing and energy security.
- Leadership image for Global South (Voice of Global South Summit).

### Risks/Constraints
- Managing contradictions (CAATSA risk, China sensitivities).
- Resource bandwidth to engage multiple forums.
- Perception of drift if positions seem ambiguous.

### Conclusion
Multi-alignment maximises space and leverage but needs clear red-lines, capacity building, and consistent messaging.`
              },
              {
                id: 'rl3',
                question: 'Assess the UN\'s role in peacekeeping and human rights protection after 1991. (8 marks)',
                mnemonic: 'PROTECT - Peacekeeping, R2P, OHCHR, Troops from Global South, Enforcement gaps, Council reform, Trust building',
                answer: `### UN After 1991: Peace & Rights

**Introduction**: Post-Cold War UN moved from traditional monitoring to complex mandates including state-building and rights protection.

### Peacekeeping Evolution
- **Robust Mandates**: Protection of civilians, DDR (Disarmament, Demobilisation, Reintegration) e.g., Sierra Leone, Liberia.
- **Global South Troops**: India, Bangladesh, Rwanda among top contributors.
- **Challenges**: Slow deployments, mandate-resource gap, safety of peacekeepers.

### Human Rights Pillar
- **Institutions**: OHCHR strengthened; Human Rights Council (2006) replaced Commission; ICC prosecutes core crimes (complementary to states).
- **Norms**: Responsibility to Protect (2005) links rights to security; women/children in conflict focus.

### Constraints
- **Veto Politics**: Syria, Ukraine illustrate paralysis; selective action hurts credibility.
- **Abuse Concerns**: Misconduct cases require stricter accountability.

### Reform & Way Forward
- **Council Reform**: Wider representation (G4/Africa demands) to improve legitimacy.
- **Performance**: Better training, funding, tech (drones, medevac) and clear exit strategies.

### Conclusion
UN remains essential but must adapt—credible enforcement, inclusive decision-making, and rights-centric operations build trust.`
              }
            ]
          }
        ]
};
