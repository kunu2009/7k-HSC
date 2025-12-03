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
        previousPapers: [], 
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
            ]
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
            ]
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
            ]
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
            ]
          }
        ]
};
