/**
 * Political Science HSC Board Exam Crasher
 * Complete PYQ Bank + Important Questions + Model Answers
 * For exam on 18th February 2026
 *
 * Structure:
 * - Chapter-wise Important Questions
 * - Previous Year Questions (2019-2025)
 * - Model Answers in Board Format
 * - Last-minute key points
 */

export const POLITICAL_SCIENCE_BOARD_CRASHER = {
  subject: "Political Science",
  examDate: "2026-02-18",
  totalMarks: 80,
  duration: "3 hours",
  daysLeft: 2,

  // ==================== CHAPTER 1: THE WORLD SINCE 1991 ====================
  chapter1: {
    title: "The World since 1991",
    weightage: "12-14 marks",

    mustKnowConcepts: [
      {
        term: "Cold War",
        definition:
          "Ideological, political, and economic rivalry between USA and USSR (1947-1991) without direct military confrontation.",
      },
      {
        term: "Bipolarity",
        definition:
          "International system with two superpowers (USA and USSR) dominating world politics.",
      },
      {
        term: "Unipolarity",
        definition:
          "International system dominated by single superpower (USA) after 1991.",
      },
      {
        term: "Multipolarity",
        definition:
          "International system with multiple power centers (USA, China, India, EU, Russia).",
      },
      {
        term: "Glasnost",
        definition:
          "Policy of openness and transparency introduced by Gorbachev in USSR.",
      },
      {
        term: "Perestroika",
        definition:
          "Economic restructuring policy of Gorbachev to modernize Soviet economy.",
      },
      {
        term: "New World Order",
        definition:
          "Post-Cold War international system emphasizing cooperation, democracy, and US leadership.",
      },
      {
        term: "Soft Power",
        definition:
          "Ability to influence through culture, values, and diplomacy rather than military force.",
      },
      {
        term: "Hard Power",
        definition:
          "Influence through military strength and economic coercion.",
      },
      {
        term: "End of History",
        definition:
          "Fukuyama's thesis that liberal democracy is the final form of government.",
      },
      {
        term: "Clash of Civilizations",
        definition:
          "Huntington's theory that future conflicts will be between civilizations/cultures.",
      },
    ],

    importantDates: [
      { year: 1947, event: "Cold War began (Truman Doctrine)" },
      { year: 1949, event: "NATO formed" },
      { year: 1955, event: "Warsaw Pact formed" },
      { year: 1961, event: "Berlin Wall built" },
      { year: 1989, event: "Berlin Wall fell (November 9)" },
      { year: 1991, event: "USSR disintegrated (December 26)" },
      { year: 1991, event: "Gulf War - Operation Desert Storm" },
      { year: 1992, event: "Maastricht Treaty - EU formed" },
      { year: 2001, event: "9/11 attacks on USA" },
      { year: 2001, event: "War on Terror - Afghanistan" },
      { year: 2003, event: "Iraq War - Operation Iraqi Freedom" },
    ],

    pyqMCQs: [
      // Feb 2024
      {
        q: "USSR disintegrated in:",
        options: ["1989", "1990", "1991", "1992"],
        correct: 2,
        year: 2024,
      },
      {
        q: "Berlin Wall fell in:",
        options: ["1987", "1989", "1991", "1993"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Perestroika means:",
        options: ["Openness", "Restructuring", "Revolution", "Reform"],
        correct: 1,
        year: 2024,
      },
      // Feb 2023
      {
        q: "Cold War ended with:",
        options: [
          "German unification",
          "USSR collapse",
          "Vietnam War",
          "Gulf War",
        ],
        correct: 1,
        year: 2023,
      },
      {
        q: "Who introduced Glasnost?",
        options: ["Stalin", "Brezhnev", "Gorbachev", "Yeltsin"],
        correct: 2,
        year: 2023,
      },
      {
        q: "Unipolar world means:",
        options: [
          "Two superpowers",
          "One superpower",
          "Many powers",
          "No superpower",
        ],
        correct: 1,
        year: 2023,
      },
      // Feb 2022
      {
        q: "New World Order was announced by:",
        options: ["Clinton", "Bush Sr.", "Reagan", "Obama"],
        correct: 1,
        year: 2022,
      },
      {
        q: "9/11 attacks occurred in:",
        options: ["1999", "2000", "2001", "2002"],
        correct: 2,
        year: 2022,
      },
      {
        q: "Operation Desert Storm was related to:",
        options: ["Afghanistan", "Iraq-Kuwait", "Vietnam", "Korea"],
        correct: 1,
        year: 2022,
      },
      // Feb 2021
      {
        q: "NATO is a _____ alliance.",
        options: ["Economic", "Military", "Cultural", "Political"],
        correct: 1,
        year: 2021,
      },
      {
        q: "BRICS includes:",
        options: ["Japan", "Germany", "South Africa", "USA"],
        correct: 2,
        year: 2021,
      },
      {
        q: "Euro is the currency of:",
        options: ["USA", "UK", "EU", "ASEAN"],
        correct: 2,
        year: 2021,
      },
      // Feb 2020
      {
        q: "First Gulf War was in:",
        options: ["1989", "1991", "2001", "2003"],
        correct: 1,
        year: 2020,
      },
      {
        q: "End of History thesis by:",
        options: ["Huntington", "Fukuyama", "Marx", "Weber"],
        correct: 1,
        year: 2020,
      },
      {
        q: "Clash of Civilizations written by:",
        options: ["Fukuyama", "Huntington", "Marx", "Nehru"],
        correct: 1,
        year: 2020,
      },
      // Feb 2019
      {
        q: "Maastricht Treaty formed:",
        options: ["NATO", "UN", "EU", "SAARC"],
        correct: 2,
        year: 2019,
      },
      {
        q: "Warsaw Pact was led by:",
        options: ["USA", "UK", "USSR", "France"],
        correct: 2,
        year: 2019,
      },
      {
        q: "Cold War was between:",
        options: ["USA-UK", "USA-USSR", "UK-France", "USSR-China"],
        correct: 1,
        year: 2019,
      },
      // Additional Important MCQs
      {
        q: "Al-Qaeda leader was:",
        options: ["Saddam Hussein", "Osama bin Laden", "Gaddafi", "Assad"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Taliban ruled:",
        options: ["Iraq", "Pakistan", "Afghanistan", "Syria"],
        correct: 2,
        year: "Imp",
      },
      {
        q: "Iron Curtain referred to:",
        options: [
          "Berlin Wall",
          "China border",
          "Division of Europe",
          "US-Mexico border",
        ],
        correct: 2,
        year: "Imp",
      },
      {
        q: "Bipolarity ended with:",
        options: ["WWII", "Korean War", "USSR collapse", "9/11"],
        correct: 2,
        year: "Imp",
      },
      {
        q: "G20 Summit 2023 was in:",
        options: ["USA", "China", "India", "Brazil"],
        correct: 2,
        year: "Imp",
      },
      {
        q: "ASEAN is organization of:",
        options: ["South Asia", "Southeast Asia", "East Asia", "Central Asia"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "SAARC headquarters is in:",
        options: ["Delhi", "Kathmandu", "Dhaka", "Colombo"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Last leader of USSR was:",
        options: ["Stalin", "Gorbachev", "Yeltsin", "Putin"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "First President of Russia after USSR:",
        options: ["Putin", "Gorbachev", "Yeltsin", "Medvedev"],
        correct: 2,
        year: "Imp",
      },
      {
        q: "War on Terror started after:",
        options: ["Gulf War", "9/11 attacks", "Cold War", "Vietnam War"],
        correct: 1,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "What is Unipolarity? (4 marks)",
        year: 2024,
        modelAnswer: `**Unipolarity:**

1. **Definition**: International system where one state (superpower) dominates global politics, economy, and military.

2. **Example**: USA after 1991 (Post-Cold War)

3. **Features**:
   - Single dominant power
   - Ability to shape international norms
   - Can intervene anywhere (Gulf War, Kosovo)
   - Other states cannot challenge militarily

4. **Period**: 1991 to approximately 2008 (until rise of China, BRICS)`,
      },
      {
        q: "Explain the causes of USSR disintegration. (4 marks)",
        year: 2023,
        modelAnswer: `**Causes of USSR Disintegration:**

1. **Economic Crisis**:
   - Centrally planned economy failed
   - 25% GDP spent on military
   - Consumer goods shortages

2. **Failed Reforms**:
   - Glasnost (openness) exposed failures
   - Perestroika created economic chaos

3. **Nationalism**:
   - Baltic states demanded independence
   - Ethnic republics sought freedom

4. **Arms Race Exhaustion**:
   - Could not match US technology (Star Wars/SDI)
   - Afghanistan war (1979-89) drained resources

5. **Leadership Crisis**:
   - Gorbachev lost control
   - August 1991 coup failed`,
      },
      {
        q: "What is the New World Order? (4 marks)",
        year: 2022,
        modelAnswer: `**New World Order:**

1. **Definition**: Term for post-Cold War international system announced by US President George H.W. Bush in 1991.

2. **Features**:
   - US as sole superpower
   - Emphasis on democracy and human rights
   - UN and international organizations strengthened
   - Market economy as model

3. **Principles**:
   - Rule-based international order
   - Collective security through UN
   - Spread of liberal democracy

4. **Criticism**: Seen by some as Western/American hegemony disguised as global order.`,
      },
      {
        q: "Distinguish between Cold War and Hot War. (4 marks)",
        year: 2021,
        modelAnswer: `**Cold War vs Hot War:**

| Aspect | Cold War | Hot War |
|--------|----------|---------|
| **Nature** | Ideological rivalry | Actual military conflict |
| **Direct Fighting** | No direct combat between superpowers | Direct armed engagement |
| **Methods** | Propaganda, proxy wars, arms race | Use of weapons, casualties |
| **Duration** | Lasted 44 years (1947-1991) | Usually shorter, intense |
| **Example** | USA-USSR rivalry | World War I, II |`,
      },
    ],

    pyqLongAnswers: [
      {
        q: "Describe the causes and consequences of USSR disintegration and its impact on world politics. (8 marks)",
        year: 2024,
        modelAnswer: `### Disintegration of USSR: Causes and Consequences

#### Introduction
The USSR (Soviet Union) collapsed on December 26, 1991, ending the Cold War era and dramatically reshaping world politics.

#### Causes of Disintegration

**1. Economic Crisis**
- Centrally planned economy failed to compete with West
- 25% of GDP spent on military spending
- Severe shortage of consumer goods
- Inefficient industries and agriculture

**2. Failed Reforms**
- Glasnost (openness) exposed system failures
- Perestroika (restructuring) created economic chaos
- People demanded more freedom and change

**3. Rise of Nationalism**
- Baltic States (Estonia, Latvia, Lithuania) demanded independence
- Ukraine, Central Asian republics followed
- Ethnic tensions suppressed for decades erupted

**4. Arms Race Exhaustion**
- Could not match US technology (SDI/Star Wars program)
- Afghanistan war (1979-89) drained resources and morale

**5. Leadership Crisis**
- Gorbachev's reforms weakened Communist Party control
- August 1991 coup attempt failed but exposed weakness
- Boris Yeltsin emerged as alternative leader

#### Consequences

**1. End of Cold War**
- Bipolar world ended
- USA emerged as sole superpower (Unipolarity)

**2. Birth of New States**
- 15 independent republics formed
- Russia became successor state with UN seat
- CIS (Commonwealth of Independent States) formed

**3. Economic Transition**
- "Shock therapy" to market economy
- Privatization led to rise of oligarchs
- Economic hardship for common people

**4. Geopolitical Changes**
- NATO expanded eastward
- European Union enlarged
- Balance of power shifted completely

#### Impact on World Politics

| Aspect | Impact |
|--------|--------|
| Power Structure | Bipolar → Unipolar → Multipolar |
| Ideology | Capitalism/Democracy seen as victorious |
| Globalization | Accelerated without Soviet alternative |
| International Orgs | UN, WTO gained importance |

#### Conclusion
The USSR collapse was a watershed moment in world history, ending the Cold War and creating the foundation for today's multipolar world order.`,
      },
      {
        q: "Explain the transition from Unipolarity to Multipolarity and its implications for India. (8 marks)",
        year: 2023,
        modelAnswer: `### Transition from Unipolarity to Multipolarity

#### Introduction
Since 1991, the world has transitioned from bipolar (USA vs USSR) to unipolar (USA alone) to an emerging multipolar order.

#### Phase 1: Unipolarity (1991-2008)

**Definition**: Single superpower dominance

**Features of US Unipolarity**:
- Largest military and economy
- Shaped international norms
- NATO expansion
- Interventions: Gulf War (1991), Kosovo (1999), Afghanistan (2001), Iraq (2003)

**Criticisms**:
- Unilateralism (acting alone)
- "World policeman" image
- Sometimes bypassed UN

#### Phase 2: Transition to Multipolarity (2008-Present)

**Factors Causing Shift**:

1. **Rise of China**
   - World's second-largest economy
   - Belt and Road Initiative (BRI)
   - Military modernization

2. **India's Emergence**
   - Fast-growing major economy
   - Nuclear power, IT sector leader
   - Growing diplomatic influence

3. **Russia's Resurgence**
   - Under Putin, asserting power
   - Energy resources leverage
   - Military interventions (Syria, Ukraine)

4. **European Union**
   - Economic bloc, soft power
   - Climate leadership

5. **US Relative Decline**
   - 2008 Financial Crisis
   - Afghanistan/Iraq overstretch
   - Domestic political divisions

#### Characteristics of Multipolarity
- Multiple power centers
- Complex diplomacy required
- Regional powers gain importance
- New institutions: BRICS, SCO, G20

#### Implications for India

**Benefits**:
| Benefit | Explanation |
|---------|-------------|
| Strategic Autonomy | Independent foreign policy choices |
| Multiple Partners | Can engage USA, Russia, EU, Japan simultaneously |
| Global South Leadership | Voice for developing nations |
| Economic Opportunities | Trade and investment from multiple sources |

**India's Strategies**:
- Multi-alignment (not non-alignment)
- BRICS, SCO membership
- Quad (with USA, Japan, Australia)
- Act East Policy (ASEAN engagement)

**Challenges**:
- Balancing US-Russia, US-China relations
- China as competitor (border issues, BRI)
- Managing multiple strategic partnerships

#### Conclusion
Multipolar world offers India unprecedented opportunities for strategic autonomy and global influence, but requires skilful diplomacy to navigate complex relationships.`,
      },
    ],

    // ==================== TEXTBOOK EXERCISES - CHAPTER 1 ====================
    textbookExercises: {
      title: "Chapter 1 - Textbook Exercises with Answers",

      // Q.1 (A) MCQs
      mcqs: [
        {
          q: "One of the important trends in the post 1989 international relations was",
          options: [
            "End of bipolarity",
            "Rise of regionalism in Asia",
            "End of non-alignment",
            "Demand for a new international economic order",
          ],
          correct: 0,
          answer: "End of bipolarity",
          explanation:
            "Post 1989, the Cold War ended with USSR's collapse (1991), ending the bipolar world order dominated by USA and USSR.",
        },
        {
          q: "The 'Maastricht' Treaty is with reference to",
          options: [
            "United Nations Peace Keeping Force",
            "European Union",
            "American interventions in Kuwait",
            "Creation of BRICS",
          ],
          correct: 1,
          answer: "European Union",
          explanation:
            "The Maastricht Treaty (1992) formally established the European Union, creating a political and economic union among European nations.",
        },
      ],

      // Q.1 (B) Concept Identification
      conceptIdentification: [
        {
          statement:
            "When a state influences other states without the use of military force.",
          answer: "Soft Power",
          explanation:
            "Soft Power refers to the ability to influence others through attraction, persuasion, culture, values, and diplomacy rather than coercion or military force. Examples: Hollywood, American universities, cultural exchange programs.",
        },
        {
          statement:
            "A state with a leading position in international politics with abilities to influence global politics and fulfill its own interest.",
          answer: "Superpower",
          explanation:
            "A Superpower is a dominant state with supreme military, economic, political, and cultural influence globally. Post-1991, USA became the sole superpower (Unipolarity). Currently, we are moving towards multipolarity with China, India, EU emerging as power centers.",
        },
      ],

      // Q.2 (A) Concept Maps
      conceptMaps: [
        {
          title: "BIMSTEC Countries",
          question: "Complete the concept map for BIMSTEC countries",
          answer: {
            centerNode: "BIMSTEC COUNTRIES",
            members: [
              "India",
              "Myanmar",
              "Bangladesh",
              "Sri Lanka",
              "Thailand",
              "Nepal",
              "Bhutan",
            ],
            fullForm:
              "Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation",
            established: "1997",
            headquarters: "Dhaka, Bangladesh",
            note: "BIMSTEC = 7 countries around Bay of Bengal",
          },
        },
        {
          title: "Shanghai Cooperation Organisation (SCO) Founders",
          question: "Complete the concept map for SCO Founders",
          answer: {
            centerNode: "SCO Founders (2001)",
            founders: [
              "China",
              "Russia",
              "Kazakhstan",
              "Kyrgyzstan",
              "Tajikistan",
              "Uzbekistan",
            ],
            laterMembers: ["India (2017)", "Pakistan (2017)"],
            headquarters: "Beijing, China",
            focus: "Security, economic, political cooperation in Eurasia",
            note: "Originally called 'Shanghai Five' (1996), became SCO in 2001",
          },
        },
      ],

      // Q.2 (B) Map-based Questions
      mapQuestions: [
        {
          question: "Name any four countries in the Schengen area.",
          answer: [
            "France",
            "Germany",
            "Italy",
            "Spain",
            "Netherlands",
            "Belgium",
            "Austria",
            "Greece",
            "Portugal",
            "Poland",
          ],
          note: "Any 4 from: France, Germany, Italy, Spain, Netherlands, Belgium, Austria, Greece, Portugal, Poland, Czech Republic, Hungary, Sweden, Finland, Denmark, etc. (27 countries total)",
          explanation:
            "The Schengen Area is a zone of 27 European countries that have abolished passport and border controls at their mutual borders, allowing free movement of people.",
        },
        {
          question:
            "Name any two non-European Union countries within Schengen area.",
          answer: ["Switzerland", "Norway", "Iceland", "Liechtenstein"],
          note: "Any 2 from: Switzerland, Norway, Iceland, Liechtenstein",
          explanation:
            "These 4 countries are part of Schengen area but NOT members of European Union. They participate in free movement but not in EU's political/economic integration.",
        },
      ],

      // Q.3 True/False with Reasons
      trueFalse: [
        {
          statement: "SAARC is important for trade in South Asia.",
          answer: true,
          reason: `**TRUE**

**Reasons:**
1. **Regional Trade**: SAARC promotes intra-regional trade among South Asian nations (India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Maldives, Afghanistan)

2. **SAFTA Agreement**: South Asian Free Trade Area (SAFTA) under SAARC aims to reduce tariffs and boost trade

3. **Economic Cooperation**: Joint efforts for economic development, poverty reduction, and improving living standards

4. **Trade Facilitation**: Simplified customs procedures, trade documentation, and reduced barriers

5. **Connectivity**: Infrastructure projects to improve physical connectivity for trade

**However**: SAARC's effectiveness limited due to India-Pakistan tensions, but trade remains a core objective.`,
        },
        {
          statement:
            "'Maastricht' Treaty was signed for the defence of Europe.",
          answer: false,
          reason: `**FALSE**

**Reasons:**
1. **Actual Purpose**: The Maastricht Treaty (1992) was signed to create the EUROPEAN UNION - a political and economic union, NOT for defence

2. **Key Provisions**:
   - Established European Union (EU)
   - Created common citizenship
   - Laid foundation for common currency (Euro)
   - Established three pillars: Economic, Foreign Policy, Justice

3. **Defence Organization**: NATO (North Atlantic Treaty Organization, 1949) is the defence alliance for Europe and North America, NOT Maastricht Treaty

4. **Economic Focus**: Maastricht focused on economic integration, single market, and monetary union

**Note**: Defence coordination exists under EU's Common Foreign and Security Policy, but this was NOT the main purpose of Maastricht Treaty.`,
        },
        {
          statement:
            "The decade of 1980s is seen as the golden age of humanitarian intervention.",
          answer: false,
          reason: `**FALSE**

**Reasons:**
1. **Correct Period**: The 1990s (not 1980s) is considered the golden age of humanitarian intervention

2. **Why 1990s**:
   - Cold War ended (1991) - no superpower rivalry to block interventions
   - UN Security Council could act more freely
   - Rise of "Responsibility to Protect" concept

3. **Major Interventions in 1990s**:
   - Somalia (1992-93)
   - Bosnia (1992-95)
   - Rwanda response (1994)
   - Kosovo (1999)
   - East Timor (1999)

4. **1980s Context**: During Cold War, USA-USSR rivalry often blocked UN humanitarian interventions due to veto power

**Note**: Post-2000, humanitarian intervention became controversial after Iraq (2003) and Libya (2011).`,
        },
      ],

      // Q.4 Express Your Opinion
      opinionQuestions: [
        {
          topic: "Humanitarian intervention",
          modelAnswer: `**Opinion on Humanitarian Intervention:**

**Definition**: Humanitarian intervention refers to the use of military force by external powers to protect civilians from mass atrocities like genocide, war crimes, and ethnic cleansing within a sovereign state.

**Arguments FOR:**
1. **Moral Responsibility**: International community has duty to protect innocent lives (R2P doctrine)
2. **Human Rights**: Sovereignty cannot be a shield for human rights violations
3. **Success Cases**: Kosovo (1999) prevented further ethnic cleansing
4. **International Norms**: Strengthens global human rights standards

**Arguments AGAINST:**
1. **Sovereignty Violation**: Interferes with internal affairs of states
2. **Selective Application**: Powerful nations intervene only where it suits their interests
3. **Misuse**: Can be used to justify regime change (Libya 2011)
4. **Unintended Consequences**: May worsen situation or lead to prolonged conflicts

**My Opinion**: Humanitarian intervention is justified ONLY when:
- Clear evidence of mass atrocities
- UN Security Council authorization
- Peaceful means exhausted
- Clear exit strategy exists

**Conclusion**: While protecting human lives is paramount, interventions must be genuinely humanitarian and not disguised imperialism.`,
        },
        {
          topic: "Regionalism in international politics",
          modelAnswer: `**Opinion on Regionalism in International Politics:**

**Definition**: Regionalism refers to the process of countries in a geographic region coming together for economic, political, or security cooperation.

**Examples of Regional Organizations:**
| Region | Organization |
|--------|--------------|
| Europe | European Union (EU) |
| South Asia | SAARC |
| Southeast Asia | ASEAN |
| Africa | African Union (AU) |
| Eurasia | SCO |

**Benefits of Regionalism:**
1. **Economic Integration**: Free trade, common markets, increased prosperity (EU single market)
2. **Peace & Stability**: Reduces conflicts between member states
3. **Collective Bargaining**: Smaller states gain stronger voice internationally
4. **Shared Solutions**: Regional problems solved regionally (ASEAN on South China Sea)

**Challenges:**
1. **Sovereignty Concerns**: States hesitant to cede powers
2. **Bilateral Conflicts**: India-Pakistan tensions hamper SAARC
3. **Unequal Partners**: Dominance by larger members
4. **Nationalism**: Rising nationalism threatens regional cooperation

**My Opinion**: Regionalism is ESSENTIAL in today's globalized world because:
- No country can solve transnational problems alone (climate, terrorism)
- Economic development requires larger markets
- Collective security more effective than individual

**Conclusion**: Regionalism complements, not replaces, global multilateralism. India should actively engage in SAARC, BIMSTEC, SCO while strengthening bilateral ties.`,
        },
      ],

      // Q.6 Short Answer (80-100 words) - 5 marks each
      shortAnswers: [
        {
          question: "Explain the term soft power with examples.",
          marks: 5,
          modelAnswer: `**Soft Power:**

**Definition**: Soft power is the ability of a country to influence other countries and shape their preferences through attraction, persuasion, and appeal rather than coercion or military force.

**Coined by**: Joseph Nye (American political scientist)

**Contrast with Hard Power:**
| Soft Power | Hard Power |
|------------|------------|
| Attraction & persuasion | Coercion & force |
| Culture, values, policies | Military, economic sanctions |
| Long-term influence | Immediate results |

**Sources of Soft Power:**
1. **Culture**: Movies, music, art, cuisine
2. **Political Values**: Democracy, human rights, rule of law
3. **Foreign Policies**: Aid, diplomacy, multilateral engagement
4. **Education**: Universities, exchange programs
5. **Technology & Innovation**: Brands, products, innovation

**Examples of Soft Power:**

**USA:**
- Hollywood movies and TV shows
- American universities (Harvard, MIT)
- Tech giants (Google, Apple, Microsoft)
- English language dominance
- Pop culture (McDonald's, Coca-Cola)

**India:**
- Bollywood films
- Yoga and spirituality
- Indian cuisine globally
- IT industry reputation
- Indian diaspora influence
- Buddhism and Gandhian philosophy

**China:**
- Confucius Institutes (language & culture centers)
- Belt and Road Initiative (economic diplomacy)
- Manufacturing hub image

**Importance**: In modern world, soft power often more effective than military force for long-term influence and building relationships.`,
        },
      ],

      // Q.7 Long Answer (150-200 words) - 10 marks
      longAnswers: [
        {
          question:
            "Discuss the European Union with help of given points: (a) History (b) European Commission (c) European Parliament (d) European Council (e) European Court of Justice",
          marks: 10,
          modelAnswer: `### The European Union (EU)

#### Introduction
The European Union is a unique political and economic union of 27 European countries, representing one of the most successful examples of regional integration in the world.

#### (a) History of EU

**Post-WWII Context:**
- Europe devastated by two World Wars
- Need for peace and economic recovery
- Desire to prevent future conflicts

**Timeline of Integration:**

| Year | Event |
|------|-------|
| 1951 | European Coal and Steel Community (ECSC) - 6 countries |
| 1957 | Treaty of Rome - European Economic Community (EEC) |
| 1967 | Merger Treaty - Combined all communities |
| 1992 | **Maastricht Treaty** - Created European Union |
| 1999 | Euro currency introduced |
| 2007 | Lisbon Treaty - Reformed EU institutions |
| 2020 | Brexit - UK left EU |

**Founding Members (6)**: France, Germany, Italy, Belgium, Netherlands, Luxembourg

**Current Members**: 27 countries (after UK's exit)

#### (b) European Commission

**Role**: Executive body of EU - "Government of EU"

**Functions:**
1. **Proposes Legislation**: Only body that can initiate EU laws
2. **Implements Decisions**: Enforces EU policies and budget
3. **Guardian of Treaties**: Ensures member states follow EU rules
4. **External Representation**: Negotiates trade deals for EU

**Structure:**
- 27 Commissioners (one from each member state)
- President of Commission (currently Ursula von der Leyen)
- Headquarters: Brussels, Belgium

#### (c) European Parliament

**Role**: Legislative body - Represents EU citizens directly

**Functions:**
1. **Passes Laws**: Together with Council of EU
2. **Approves Budget**: Controls EU spending
3. **Democratic Oversight**: Supervises other EU institutions
4. **Elects Commission President**: Approves Commission members

**Structure:**
- 705 Members of European Parliament (MEPs)
- Directly elected by EU citizens every 5 years
- Headquarters: Strasbourg (plenary), Brussels (committees)

**Significance**: Only directly elected EU institution - represents democratic voice

#### (d) European Council

**Role**: Sets political direction and priorities of EU

**Functions:**
1. **Strategic Direction**: Defines EU's overall political agenda
2. **Major Decisions**: Handles sensitive political issues
3. **Conflict Resolution**: Resolves disputes between member states
4. **Treaty Amendments**: Discusses changes to EU treaties

**Composition:**
- Heads of State/Government of all 27 members
- President of European Council (currently Charles Michel)
- President of European Commission
- Meets at least 4 times per year (Summits)

**Note**: Does NOT pass laws - that's done by Council of EU (different body)

#### (e) European Court of Justice (ECJ)

**Role**: Judicial body - Supreme court of EU

**Functions:**
1. **Interprets EU Law**: Ensures uniform application across all members
2. **Settles Disputes**: Between member states, EU institutions, businesses, individuals
3. **Reviews Legislation**: Checks if EU laws are valid
4. **Preliminary Rulings**: Advises national courts on EU law

**Structure:**
- One judge from each member state (27 judges)
- 11 Advocates General (provide legal opinions)
- Location: Luxembourg

**Importance**: ECJ rulings are binding and supreme over national courts in EU matters

#### Significance of EU

| Achievement | Details |
|-------------|---------|
| Peace | No war between members since formation |
| Single Market | Free movement of goods, services, capital, people |
| Common Currency | Euro used by 20 countries |
| Global Influence | World's largest single market and trade bloc |
| Human Rights | Strong protection through EU Charter |

#### Challenges

1. **Brexit**: UK's departure weakened EU
2. **Migration Crisis**: Strains on unity
3. **Economic Disparities**: Rich vs. poorer members
4. **Rise of Nationalism**: Eurosceptic movements

#### Conclusion
The European Union remains the world's most ambitious and successful regional integration project. Despite challenges like Brexit, it continues to serve as a model of peaceful cooperation, economic integration, and shared governance among nations.`,
        },
      ],
    },
  },

  // ==================== CHAPTER 2: GLOBALISATION ====================
  chapter2: {
    title: "Globalisation",
    weightage: "12-14 marks",

    mustKnowConcepts: [
      {
        term: "Globalisation",
        definition:
          "Integration of national economies and societies through trade, investment, technology, and cultural exchange.",
      },
      {
        term: "Liberalisation",
        definition:
          "Reducing government restrictions on economy, trade, and business.",
      },
      {
        term: "Privatisation",
        definition:
          "Transfer of ownership from public (government) sector to private sector.",
      },
      {
        term: "MNC/TNC",
        definition:
          "Multinational/Transnational Corporation - companies operating in multiple countries.",
      },
      {
        term: "WTO",
        definition:
          "World Trade Organization - regulates international trade, formed 1995.",
      },
      {
        term: "Glocalisation",
        definition: "Adapting global products to local tastes and preferences.",
      },
      {
        term: "McDonaldization",
        definition:
          "Spread of Western fast-food culture and standardization globally.",
      },
      {
        term: "Outsourcing/BPO",
        definition:
          "Contracting business processes to external (often foreign) providers.",
      },
      {
        term: "FDI",
        definition:
          "Foreign Direct Investment - investment from foreign entities.",
      },
      {
        term: "Digital Divide",
        definition:
          "Gap between those with and without access to internet/technology.",
      },
      {
        term: "Brain Drain",
        definition:
          "Migration of skilled professionals from developing to developed countries.",
      },
    ],

    pyqMCQs: [
      {
        q: "Globalisation gained momentum after:",
        options: ["1945", "1991", "2001", "1971"],
        correct: 1,
        year: 2024,
      },
      {
        q: "WTO was established in:",
        options: ["1991", "1995", "2000", "1948"],
        correct: 1,
        year: 2024,
      },
      {
        q: "LPG stands for:",
        options: [
          "Liquefied Petroleum Gas",
          "Liberalisation Privatisation Globalisation",
          "Local Provincial Government",
          "None",
        ],
        correct: 1,
        year: 2023,
      },
      {
        q: "Glocalisation means:",
        options: ["Only Global", "Only Local", "Global + Local", "None"],
        correct: 2,
        year: 2023,
      },
      {
        q: "MNC stands for:",
        options: [
          "Multinational Corporation",
          "Municipal National Council",
          "Many Nations Club",
          "None",
        ],
        correct: 0,
        year: 2022,
      },
      {
        q: "Which is NOT a feature of Globalisation?",
        options: [
          "Free trade",
          "Integration",
          "Nationalism",
          "Interdependence",
        ],
        correct: 2,
        year: 2022,
      },
      {
        q: "BPO stands for:",
        options: [
          "Business Process Outsourcing",
          "Bank Public Office",
          "Business Public Organization",
          "None",
        ],
        correct: 0,
        year: 2021,
      },
      {
        q: "1991 reforms in India were led by:",
        options: ["Vajpayee", "Manmohan Singh", "Indira Gandhi", "Modi"],
        correct: 1,
        year: 2021,
      },
      {
        q: "FDI means:",
        options: [
          "Foreign Direct Investment",
          "Free Distribution of Income",
          "Foreign Development Index",
          "None",
        ],
        correct: 0,
        year: 2020,
      },
      {
        q: "Which grew most in India due to Globalisation?",
        options: ["Agriculture", "Service/IT sector", "Mining", "Fishing"],
        correct: 1,
        year: 2020,
      },
      // Additional Important MCQs
      {
        q: "IMF stands for:",
        options: [
          "Indian Monetary Fund",
          "International Monetary Fund",
          "International Marketing Federation",
          "None",
        ],
        correct: 1,
        year: "Imp",
      },
      {
        q: "World Bank provides:",
        options: [
          "Military aid",
          "Development loans",
          "Free grants only",
          "Political support",
        ],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Soft Power includes:",
        options: [
          "Military",
          "Nuclear weapons",
          "Culture and values",
          "Economic sanctions",
        ],
        correct: 2,
        year: "Imp",
      },
      {
        q: "Hard Power includes:",
        options: [
          "Diplomacy",
          "Cultural exchange",
          "Military force",
          "Tourism",
        ],
        correct: 2,
        year: "Imp",
      },
      {
        q: "GATT was replaced by:",
        options: ["IMF", "WTO", "World Bank", "UN"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "NGO stands for:",
        options: [
          "National Government Organization",
          "Non-Governmental Organization",
          "New Global Order",
          "None",
        ],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Amnesty International is an example of:",
        options: ["MNC", "NGO", "IGO", "Government body"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Global Village concept refers to:",
        options: [
          "UN headquarters",
          "World connected by technology",
          "European Union",
          "ASEAN countries",
        ],
        correct: 1,
        year: "Imp",
      },
      {
        q: "SEZ stands for:",
        options: [
          "Special Economic Zone",
          "State Economic Zone",
          "Southern Economic Zone",
          "None",
        ],
        correct: 0,
        year: "Imp",
      },
      {
        q: "Which is negative impact of Globalisation?",
        options: [
          "Technology access",
          "Economic growth",
          "Increasing inequality",
          "Cultural exchange",
        ],
        correct: 2,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "What is Globalisation? Explain its features. (4 marks)",
        year: 2024,
        modelAnswer: `**Globalisation:**

1. **Definition**: Globalisation is the process of integration of national economies, societies, and cultures through trade, investment, technology transfer, and cultural exchange.

2. **Features**:
   - **Economic Integration**: Free flow of goods, services, capital across borders
   - **Technological Connectivity**: Internet, mobile phones connecting people globally
   - **Cultural Exchange**: Spread of ideas, values, lifestyles across nations
   - **Interdependence**: Countries relying on each other for resources, markets
   - **Role of MNCs**: Multinational corporations operating worldwide
   - **International Organizations**: WTO, IMF, World Bank regulating global economy`,
      },
      {
        q: "Explain the role of MNCs in Globalisation. (4 marks)",
        year: 2023,
        modelAnswer: `**Role of MNCs in Globalisation:**

1. **Definition**: Multinational Corporations are companies operating in multiple countries with headquarters in one country.

2. **Economic Role**:
   - Bring Foreign Direct Investment (FDI)
   - Create employment opportunities
   - Transfer technology and skills
   - Improve productivity and quality

3. **Examples**: Apple, Google, Microsoft, Tata, Reliance

4. **Impact on Host Countries**:
   | Positive | Negative |
   |----------|----------|
   | Jobs | May exploit workers |
   | Technology | Profit sent abroad |
   | Competition improves quality | Local businesses struggle |
   | Economic growth | Cultural influence |

5. **Conclusion**: MNCs are key drivers of Globalisation but need regulation.`,
      },
      {
        q: "Distinguish between Globalisation and Localisation. (4 marks)",
        year: 2022,
        modelAnswer: `**Globalisation vs Localisation:**

| Aspect | Globalisation | Localisation |
|--------|---------------|--------------|
| **Definition** | Integration of world economies and cultures | Focus on local production and consumption |
| **Focus** | Global markets and connections | Local markets and traditions |
| **Trade** | Free trade across borders | Protect local industries |
| **Culture** | Cultural exchange/homogenisation | Preserve local culture |
| **Example** | McDonalds worldwide | Support local restaurants |
| **Slogan** | "Think Global" | "Think Local" |

**Note**: Glocalisation = Global + Local (adapting global to local)`,
      },
      {
        q: "What is Liberalisation? Explain its features. (4 marks)",
        year: 2021,
        modelAnswer: `**Liberalisation:**

1. **Definition**: Reducing government restrictions and controls on economy, allowing free market forces to operate.

2. **Features**:
   - Removal of industrial licensing (License Raj ended)
   - Reduction in import tariffs and quotas
   - Opening economy to foreign investment (FDI)
   - Deregulation of industries
   - Privatisation of public sector units

3. **In India (1991)**:
   - Finance Minister: Manmohan Singh
   - PM: P.V. Narasimha Rao
   - Reduced fiscal deficit
   - Opened sectors to private players

4. **Impact**: Economic growth, competition, consumer choice`,
      },
      {
        q: "Explain the concept of Digital Divide. (4 marks)",
        year: 2020,
        modelAnswer: `**Digital Divide:**

1. **Definition**: Gap between those who have access to digital technology (internet, computers, smartphones) and those who don't.

2. **Types**:
   - **Global**: Between developed and developing nations
   - **National**: Between urban and rural areas
   - **Social**: Between rich and poor, educated and uneducated

3. **Causes**:
   - Income inequality
   - Lack of infrastructure in rural areas
   - Low digital literacy
   - High cost of devices and internet

4. **Impact**:
   - Unequal access to information and opportunities
   - Education gap widens
   - Economic disparity increases

5. **Solutions**: Digital India, BharatNet, subsidized smartphones`,
      },
      {
        q: "Distinguish between Soft Power and Hard Power. (4 marks)",
        year: "Imp",
        modelAnswer: `**Soft Power vs Hard Power:**

| Aspect | Soft Power | Hard Power |
|--------|------------|------------|
| **Definition** | Influence through attraction | Influence through coercion |
| **Methods** | Culture, values, diplomacy | Military force, economic sanctions |
| **Nature** | Persuasive, attractive | Coercive, forceful |
| **Examples** | Hollywood, Yoga, Bollywood | Army, nuclear weapons |
| **Cost** | Low cost, long-term | High cost, short-term |
| **India's Use** | Soft power diplomacy (Buddhism, Ayurveda) | Limited hard power |

**Smart Power**: Combination of both soft and hard power`,
      },
    ],

    pyqLongAnswers: [
      {
        q: "Explain the concept of Globalisation and its impact on Indian economy. (8 marks)",
        year: 2024,
        modelAnswer: `### Globalisation and Its Impact on Indian Economy

#### Introduction
Globalisation is the integration of national economies into the global economy. India embraced globalisation through the 1991 LPG (Liberalisation, Privatisation, Globalisation) reforms.

#### Concept of Globalisation

**Definition**: Process of international integration through exchange of world views, products, ideas, and culture.

**Dimensions of Globalisation**:
1. **Economic**: Trade liberalisation, FDI, MNCs
2. **Political**: International organizations, global governance
3. **Cultural**: Spread of values, lifestyles, media
4. **Technological**: Internet, communication revolution

#### India's 1991 Reforms (LPG)

| Component | Measures |
|-----------|----------|
| Liberalisation | Reduced licensing, opened sectors |
| Privatisation | Disinvestment of PSUs |
| Globalisation | Reduced tariffs, allowed FDI |

#### Positive Impact on Indian Economy

1. **GDP Growth**
   - Average 7-8% growth rate
   - One of fastest-growing major economies

2. **Foreign Investment**
   - FDI inflow increased significantly
   - IT, Telecom, Automobile sectors benefited

3. **Service Sector Boom**
   - IT and BPO industry flourished
   - India became "Back Office of the World"
   - Companies: TCS, Infosys, Wipro

4. **Consumer Benefits**
   - More choices of products
   - Better quality due to competition
   - Lower prices in many sectors

5. **Technology Transfer**
   - Access to latest technologies
   - Innovation and R&D improved

#### Negative Impact on Indian Economy

1. **Agriculture Distress**
   - Competition from imports
   - Farmer suicides increased
   - MSP issues

2. **Small Industry Struggle**
   - MSMEs faced MNC competition
   - Many closed down

3. **Inequality Widened**
   - Rich became richer
   - Rural-urban divide grew
   - Regional disparities

4. **Environmental Damage**
   - Pollution increased
   - Resource exploitation
   - Climate concerns

5. **Cultural Impact**
   - Western influence on youth
   - Consumerism increased
   - Traditional values affected

#### Conclusion
Globalisation has been a double-edged sword for India. While it brought economic growth and opportunities, it also created challenges of inequality and sustainability that need addressing through inclusive policies.`,
      },
    ],

    // ==================== TEXTBOOK EXERCISES - CHAPTER 2 ====================
    textbookExercises: {
      title: "Chapter 2 - Textbook Exercises with Answers",

      // Q.1 (A) MCQs
      mcqs: [
        {
          q: "The term 'Globalisation' was first coined by",
          options: [
            "Theodore Levitt",
            "Marshall McLuhan",
            "Milton Friedman",
            "Adam Smith",
          ],
          correct: 0,
          answer: "Theodore Levitt",
          explanation:
            "Theodore Levitt, an American economist, coined the term 'Globalisation' in 1983 in his article 'Globalization of Markets' published in Harvard Business Review.",
        },
        {
          q: "The 'Global Village' concept was given by",
          options: [
            "Theodore Levitt",
            "Marshall McLuhan",
            "Karl Marx",
            "Joseph Nye",
          ],
          correct: 1,
          answer: "Marshall McLuhan",
          explanation:
            "Marshall McLuhan, a Canadian philosopher, introduced the concept of 'Global Village' in 1962, suggesting that electronic media would shrink the world into a village.",
        },
        {
          q: "LPG reforms in India started in",
          options: ["1989", "1990", "1991", "1992"],
          correct: 2,
          answer: "1991",
          explanation:
            "The LPG (Liberalisation, Privatisation, Globalisation) reforms were introduced in India in 1991 under PM Narasimha Rao and Finance Minister Manmohan Singh to address the balance of payments crisis.",
        },
        {
          q: "WTO was established in",
          options: ["1992", "1993", "1994", "1995"],
          correct: 3,
          answer: "1995",
          explanation:
            "The World Trade Organization (WTO) was established on 1st January 1995, replacing GATT (General Agreement on Tariffs and Trade). Its headquarters is in Geneva, Switzerland.",
        },
        {
          q: "Which is NOT a dimension of Globalisation?",
          options: ["Economic", "Political", "Cultural", "Military"],
          correct: 3,
          answer: "Military",
          explanation:
            "The three main dimensions of Globalisation are Economic (trade, investment), Political (governance, international relations), and Cultural (ideas, values, media). Military is not considered a dimension of globalisation.",
        },
      ],

      // Q.1 (B) Concept Identification
      conceptIdentification: [
        {
          statement:
            "The process of integrating various economies of the world without creating any hindrances in the free flow of goods, services, technology and labour.",
          answer: "Globalisation",
          explanation:
            "Globalisation refers to the increasing interconnectedness and interdependence of world economies, cultures, and populations through cross-border trade, investment, technology transfer, and migration.",
        },
        {
          statement:
            "The policy under which government allows free flow of trade, investment and technology between countries.",
          answer: "Liberalisation",
          explanation:
            "Liberalisation means removing restrictions and barriers to allow free movement of goods, services, and capital. In India, 1991 reforms liberalised trade, reduced licensing, and opened economy to foreign investment.",
        },
        {
          statement:
            "The transfer of ownership from public sector to private sector.",
          answer: "Privatisation",
          explanation:
            "Privatisation involves transferring government-owned enterprises to private ownership. In India, it included disinvestment of PSUs (Public Sector Undertakings) and allowing private sector in previously reserved areas.",
        },
        {
          statement:
            "Companies that operate in multiple countries with production facilities and assets in more than one country.",
          answer:
            "Multinational Corporations (MNCs) / Transnational Corporations (TNCs)",
          explanation:
            "MNCs/TNCs are large companies that operate across national borders. Examples: Apple, Microsoft, Toyota, Samsung. They bring FDI, technology, and employment but also raise concerns about profit repatriation and local industry competition.",
        },
      ],

      // Q.2 (A) Concept Maps
      conceptMaps: [
        {
          title: "Dimensions of Globalisation",
          question: "Complete the concept map for Dimensions of Globalisation",
          answer: {
            centerNode: "DIMENSIONS OF GLOBALISATION",
            members: [
              "Economic Dimension",
              "Political Dimension",
              "Cultural Dimension",
            ],
            details: {
              Economic:
                "Trade, FDI, MNCs, Financial flows, WTO, IMF, World Bank",
              Political:
                "International cooperation, Global governance, UN, Regional organizations",
              Cultural:
                "Ideas, values, media, technology, language, lifestyle, food",
            },
            note: "All three dimensions are interconnected and influence each other",
          },
        },
        {
          title: "Effects of Globalisation on India",
          question:
            "Complete the concept map for Effects of Globalisation on India",
          answer: {
            centerNode: "EFFECTS OF GLOBALISATION ON INDIA",
            members: ["Positive Effects", "Negative Effects"],
            positive: [
              "Economic growth",
              "IT/BPO boom",
              "FDI inflow",
              "Technology transfer",
              "Consumer choices",
              "Employment in services",
            ],
            negative: [
              "Agricultural distress",
              "MSME closures",
              "Inequality",
              "Environmental damage",
              "Cultural erosion",
              "Job losses in traditional sectors",
            ],
            note: "Globalisation is a double-edged sword with both benefits and challenges",
          },
        },
      ],

      // Q.3 True/False with Reasons (Remember: Skip Chapter 2 for True/False in exam as per Mind Faces!)
      trueFalse: [
        {
          statement:
            "Globalisation only has positive effects on developing countries.",
          answer: false,
          reason:
            "**FALSE**\n\n**Reasons:**\n1. **Negative Effects Exist**: Globalisation has both positive AND negative effects\n\n2. **For Developing Countries - Negatives:**\n   - Increased inequality between rich and poor\n   - Local industries face MNC competition\n   - Agricultural sector suffers due to imports\n   - Cultural erosion and westernisation\n   - Brain drain of skilled workers\n   - Environmental degradation\n\n3. **Unequal Benefits**: Developed countries often benefit more from globalisation than developing countries\n\n4. **India's Experience**: While IT sector boomed, farmers' suicides increased; urban areas gained while rural areas lagged\n\n**Conclusion**: Globalisation is a double-edged sword, not purely positive.",
        },
        {
          statement:
            "The World Trade Organization (WTO) was established to promote free trade.",
          answer: true,
          reason:
            "**TRUE**\n\n**Reasons:**\n1. **Purpose**: WTO was established on 1st January 1995 specifically to promote and regulate international trade\n\n2. **Functions of WTO:**\n   - Administering trade agreements\n   - Forum for trade negotiations\n   - Handling trade disputes\n   - Monitoring national trade policies\n   - Technical assistance to developing countries\n\n3. **Principles:**\n   - Most Favoured Nation (MFN) - treat all trading partners equally\n   - National Treatment - treat foreign goods same as domestic\n   - Reduction of tariffs and trade barriers\n\n4. **Replaced GATT**: WTO replaced the General Agreement on Tariffs and Trade (GATT, 1947)\n\n5. **Members**: 164 countries (India joined in 1995)\n\n**Headquarters**: Geneva, Switzerland",
        },
        {
          statement:
            "Liberalisation means increasing government control over the economy.",
          answer: false,
          reason:
            "**FALSE**\n\n**Reasons:**\n1. **Opposite Meaning**: Liberalisation means REDUCING (not increasing) government control and restrictions\n\n2. **Definition**: Liberalisation refers to removal of government restrictions on:\n   - Trade (reducing tariffs, quotas)\n   - Investment (allowing FDI)\n   - Industry (abolishing licensing)\n   - Finance (deregulating banks)\n\n3. **India's Liberalisation (1991):**\n   - Abolished industrial licensing (License Raj)\n   - Reduced import duties\n   - Allowed foreign investment\n   - Opened up reserved sectors\n\n4. **Aim**: To promote free market economy, competition, and efficiency\n\n**Contrast**: Government control over economy is characteristic of socialist/command economy, not liberalisation.",
        },
      ],

      // Q.4 Express Your Opinion
      opinionQuestions: [
        {
          topic: "Globalisation and its impact on Indian economy",
          modelAnswer:
            "**Opinion on Globalisation's Impact on Indian Economy:**\n\n**Definition**: Globalisation is the process of increasing interconnectedness among countries through trade, investment, technology, and cultural exchange.\n\n**Positive Impact:**\n1. **Economic Growth**: India's GDP growth accelerated after 1991 reforms\n2. **IT Revolution**: India became a global IT hub (TCS, Infosys, Wipro)\n3. **Foreign Investment**: FDI inflows increased significantly\n4. **Consumer Benefits**: More choices, better quality, competitive prices\n5. **Employment**: Service sector jobs increased\n6. **Technology**: Access to global technologies improved\n\n**Negative Impact:**\n1. **Inequality**: Gap between rich and poor widened\n2. **Agriculture Crisis**: Farmer distress, suicides increased\n3. **Local Industry**: Small industries faced MNC competition\n4. **Employment**: Traditional sector job losses\n5. **Environment**: Pollution and resource exploitation increased\n\n**My Opinion**: Globalisation has been beneficial for India's economic development, but its benefits have not been evenly distributed. The government must ensure:\n- Inclusive growth policies\n- Support for agriculture and MSMEs\n- Skill development for workers\n- Environmental protection\n\n**Conclusion**: Globalisation should be managed, not rejected - we need 'Globalisation with a human face'.",
        },
        {
          topic: "Role of MNCs in developing countries",
          modelAnswer:
            "**Opinion on Role of MNCs in Developing Countries:**\n\n**Definition**: MNCs (Multinational Corporations) are companies that operate in multiple countries with production facilities and assets across borders.\n\n**Positive Role:**\n\n| Benefit | Explanation |\n|---------|-------------|\n| Investment | Bring FDI, capital formation |\n| Employment | Create jobs (direct and indirect) |\n| Technology | Transfer advanced technologies |\n| Skills | Training and skill development |\n| Competition | Improve efficiency and quality |\n| Tax Revenue | Contribute to government revenue |\n| Infrastructure | Develop local infrastructure |\n\n**Negative Role:**\n\n| Concern | Explanation |\n|---------|-------------|\n| Profit Repatriation | Profits sent to home country |\n| Local Competition | Small businesses suffer |\n| Exploitation | Sometimes exploit labour, resources |\n| Cultural Impact | Promote consumerism, westernisation |\n| Tax Avoidance | Use legal loopholes to avoid taxes |\n| Influence | Can influence government policies |\n\n**My Opinion**: MNCs play an important role in developing countries but need regulation:\n- Ensure fair wages and working conditions\n- Promote technology transfer\n- Require local sourcing and partnerships\n- Prevent tax avoidance\n- Protect environment\n\n**Conclusion**: MNCs should be partners in development, not exploiters. Balanced policies can maximize benefits while minimizing negative impacts.",
        },
      ],

      // Q.5 Short Answer
      shortAnswers: [
        {
          question: "Explain the concept of Globalisation.",
          marks: 5,
          modelAnswer:
            "**Globalisation:**\n\n**Definition**: Globalisation is the process of increasing integration and interdependence among countries through the free flow of goods, services, capital, technology, ideas, and people across national borders.\n\n**Term Origin**: Coined by Theodore Levitt (1983)\n\n**Key Features:**\n1. **Economic Integration**: Free trade, removal of tariff barriers\n2. **Financial Integration**: Cross-border investment (FDI, FII)\n3. **Technological Integration**: Internet, communication revolution\n4. **Cultural Exchange**: Ideas, values, lifestyle spreading globally\n\n**Drivers of Globalisation:**\n- Technology (internet, transport)\n- Trade liberalisation (WTO)\n- MNCs and TNCs\n- International organizations (IMF, World Bank)\n\n**Dimensions:**\n\n| Dimension | Examples |\n|-----------|----------|\n| Economic | Trade, FDI, MNCs |\n| Political | UN, global governance |\n| Cultural | Hollywood, social media |\n\n**Examples**: McDonald's in India, Indian IT services globally, Chinese products worldwide\n\n**Conclusion**: Globalisation has made the world a 'Global Village' with both opportunities and challenges.",
        },
        {
          question: "What are the effects of LPG reforms on Indian economy?",
          marks: 5,
          modelAnswer:
            "**Effects of LPG Reforms (1991) on Indian Economy:**\n\n**Background**: LPG reforms were introduced in 1991 under PM Narasimha Rao and FM Manmohan Singh to address balance of payments crisis.\n\n**L - Liberalisation Effects:**\n- Industrial licensing abolished\n- Private sector allowed in more sectors\n- Import restrictions reduced\n- Competition increased\n\n**P - Privatisation Effects:**\n- Disinvestment of PSUs started\n- Efficiency improved in many sectors\n- Stock market grew\n- Some job losses in public sector\n\n**G - Globalisation Effects:**\n- FDI inflows increased\n- IT/BPO sector boomed\n- MNCs entered India\n- Exports grew significantly\n\n**Positive Effects:**\n1. GDP growth accelerated (3.5% to 6-8%)\n2. Foreign exchange reserves increased\n3. Technology and quality improved\n4. Consumer choices expanded\n5. India became IT superpower\n\n**Negative Effects:**\n1. Agriculture neglected\n2. Inequality increased\n3. Small industries suffered\n4. Job losses in traditional sectors\n\n**Conclusion**: LPG reforms transformed India from a closed economy to an emerging market, though challenges of inclusive growth remain.",
        },
      ],

      // Q.7 Long Answer (150-200 words) - 10 marks
      longAnswers: [
        {
          question:
            "Discuss the positive and negative impact of Globalisation on India.",
          marks: 10,
          modelAnswer:
            "### Impact of Globalisation on India\n\n#### Introduction\nGlobalisation refers to the increasing integration of world economies through trade, investment, technology, and cultural exchange. India embraced globalisation through the LPG reforms of 1991.\n\n#### Positive Impact of Globalisation\n\n**1. Economic Growth**\n- GDP growth rate increased from 3.5% to 6-8%\n- India became one of fastest growing economies\n- Foreign exchange reserves improved significantly\n\n**2. IT and Service Sector Revolution**\n- India became the 'Back Office of the World'\n- BPO, IT services industry flourished\n- Companies: TCS, Infosys, Wipro became global\n- Created millions of skilled jobs\n\n**3. Foreign Investment**\n- FDI inflows increased significantly\n- Technology transfer improved\n- Modern management practices adopted\n- Sectors: Auto, Telecom, Retail benefited\n\n**4. Consumer Benefits**\n- More choices of products and services\n- Better quality due to competition\n- Lower prices in many sectors\n- Access to global brands\n\n**5. Infrastructure Development**\n- Roads, ports, airports improved\n- Telecom revolution (mobile phones)\n- Digital infrastructure expanded\n\n**6. Global Recognition**\n- India's soft power increased\n- Bollywood, Yoga, Cuisine spread globally\n- Indian diaspora strengthened\n\n#### Negative Impact of Globalisation\n\n**1. Agricultural Distress**\n- Competition from subsidised imports\n- Farmer suicides increased\n- MSP and procurement issues\n- Rural unemployment grew\n\n**2. Small Industry Struggle**\n- MSMEs faced MNC competition\n- Many traditional industries closed\n- Artisans and craftsmen suffered\n- Local products lost market\n\n**3. Growing Inequality**\n\n| Aspect | Result |\n|--------|--------|\n| Income | Rich-poor gap widened |\n| Regional | Urban-rural divide grew |\n| Sectoral | Services grew, agriculture declined |\n\n**4. Environmental Damage**\n- Industrial pollution increased\n- Natural resources exploited\n- Climate change concerns grew\n- Deforestation accelerated\n\n**5. Cultural Impact**\n- Western influence on youth\n- Consumerism and materialism increased\n- Traditional values eroded\n- Family structures changed\n\n**6. Job Insecurity**\n- Contract and gig jobs increased\n- Traditional sector job losses\n- Brain drain of skilled workers\n\n#### Way Forward\n\n1. **Inclusive Policies**: Ensure benefits reach all sections\n2. **Agricultural Support**: MSP, insurance, irrigation\n3. **MSME Protection**: Credit, technology, marketing support\n4. **Skill Development**: Train workers for global economy\n5. **Environmental Regulations**: Sustainable development\n\n#### Conclusion\nGlobalisation has been a double-edged sword for India. While it brought economic growth and opportunities, it also created challenges of inequality and sustainability. The need is for 'Globalisation with a human face' - embracing benefits while protecting vulnerable sections.",
        },
        {
          question:
            "Explain the role of state in the era of globalisation with respect to economic development and social change.",
          marks: 10,
          modelAnswer:
            "### Role of State in the Era of Globalisation\n\n#### Introduction\nGlobalisation has transformed the role of state from a direct provider to a facilitator and regulator. However, the state remains crucial for ensuring economic development and social change benefit all citizens.\n\n#### Changed Role of State\n\n**Before Globalisation:**\n- State as primary producer (PSUs)\n- Controlled economy (License Raj)\n- Limited foreign trade\n- Protective policies\n\n**After Globalisation:**\n- State as facilitator and regulator\n- Market-friendly policies\n- Open economy\n- Competition promoted\n\n#### Role in Economic Development\n\n**1. Policy Framework**\n- Creating conducive environment for investment\n- Trade policies and agreements\n- Industrial policies\n- Financial sector regulations\n\n**2. Infrastructure Development**\n- Roads, railways, ports, airports\n- Digital infrastructure\n- Power and energy\n- Public-Private Partnerships (PPP)\n\n**3. Investment Promotion**\n- FDI policy liberalisation\n- Special Economic Zones (SEZs)\n- Make in India initiative\n- Ease of Doing Business reforms\n\n**4. Regulation and Supervision**\n- Competition Commission (CCI)\n- Consumer protection\n- Environmental regulations\n- Labour laws\n\n**5. Human Capital Development**\n- Education system improvement\n- Skill development programs\n- Research and innovation support\n\n#### Role in Social Change\n\n**1. Inclusive Growth**\n\n| Program | Purpose |\n|---------|----------|\n| MGNREGA | Rural employment guarantee |\n| Jan Dhan | Financial inclusion |\n| Ayushman Bharat | Health insurance |\n| PM Kisan | Farmer income support |\n\n**2. Education**\n- Right to Education Act\n- Skill India Mission\n- Higher education expansion\n- Digital education (SWAYAM)\n\n**3. Healthcare**\n- Public hospitals and PHCs\n- Health insurance schemes\n- Disease control programs\n- Vaccination drives\n\n**4. Social Security**\n- Pension schemes\n- Insurance programs\n- Food security (PDS)\n- Housing (PMAY)\n\n**5. Empowerment**\n- Women empowerment programs\n- SC/ST welfare\n- Minority welfare\n- Disability support\n\n**6. Legal Reforms**\n- Labour law amendments\n- Land acquisition reforms\n- Bankruptcy code\n- Digital governance\n\n#### Balancing Act\n\nThe state must balance:\n- **Growth vs. Equity**: Economic growth with social justice\n- **Market vs. Regulation**: Free markets with necessary controls\n- **Global vs. Local**: International integration with domestic protection\n- **Present vs. Future**: Current needs with sustainable development\n\n#### Challenges\n\n1. Limited resources for social spending\n2. Pressure from international institutions\n3. Competition among states for investment\n4. Balancing business interests with public welfare\n\n#### Conclusion\nIn the era of globalisation, the state's role has evolved but not diminished. The state remains essential as:\n- **Enabler**: Creating conditions for development\n- **Regulator**: Ensuring fair play and protecting citizens\n- **Provider**: Delivering essential services to all\n- **Protector**: Safeguarding vulnerable sections\n\nThe goal should be 'Inclusive Globalisation' where economic growth benefits all sections of society.",
        },
      ],
    },
  },

  // ==================== CHAPTER 3: HUMANITARIAN ISSUES ====================
  chapter3: {
    title: "Humanitarian Issues",
    weightage: "10-12 marks",

    mustKnowConcepts: [
      {
        term: "Human Rights",
        definition:
          "Universal rights inherent to all human beings regardless of nationality, sex, religion, etc.",
      },
      {
        term: "UDHR",
        definition:
          "Universal Declaration of Human Rights - adopted by UN in 1948.",
      },
      {
        term: "Refugees",
        definition:
          "People forced to flee their country due to persecution, war, or violence.",
      },
      {
        term: "UNHCR",
        definition:
          "United Nations High Commissioner for Refugees - UN agency for refugees.",
      },
      {
        term: "Migration",
        definition:
          "Movement of people from one place to another for various reasons.",
      },
      {
        term: "Terrorism",
        definition:
          "Use of violence against civilians for political, religious, or ideological goals.",
      },
      {
        term: "Climate Change",
        definition:
          "Long-term change in global temperatures and weather patterns.",
      },
      {
        term: "Humanitarian Intervention",
        definition: "Use of force to protect human rights in another country.",
      },
    ],

    pyqMCQs: [
      {
        q: "UDHR was adopted in:",
        options: ["1945", "1948", "1950", "1991"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Human Rights Day is on:",
        options: ["Oct 24", "Dec 10", "Jan 26", "Aug 15"],
        correct: 1,
        year: 2023,
      },
      {
        q: "UNHCR deals with:",
        options: ["Trade", "Refugees", "Health", "Children"],
        correct: 1,
        year: 2022,
      },
      {
        q: "Paris Agreement is related to:",
        options: ["Trade", "Human Rights", "Climate Change", "War"],
        correct: 2,
        year: 2021,
      },
      {
        q: "Terrorism is a _____ threat.",
        options: ["Local", "National", "Global", "None"],
        correct: 2,
        year: 2020,
      },
    ],

    pyqShortAnswers: [
      {
        q: "What are Human Rights? (4 marks)",
        year: 2024,
        modelAnswer: `**Human Rights:**

1. **Definition**: Fundamental rights inherent to all human beings regardless of race, sex, nationality, religion, or any other status.

2. **Source**: Universal Declaration of Human Rights (UDHR) - 1948

3. **Types**:
   - **Civil Rights**: Life, liberty, equality before law
   - **Political Rights**: Vote, form associations, speech
   - **Economic Rights**: Work, fair wages, rest
   - **Social Rights**: Education, health, social security
   - **Cultural Rights**: Participate in cultural life

4. **Protection**: UN Human Rights Council, national commissions (NHRC in India)`,
      },
      {
        q: "Explain the refugee crisis as a global issue. (4 marks)",
        year: 2023,
        modelAnswer: `**Refugee Crisis:**

1. **Definition**: Mass displacement of people due to war, persecution, or natural disasters.

2. **Causes**:
   - Wars (Syria, Ukraine, Afghanistan)
   - Persecution (Rohingya in Myanmar)
   - Climate change (environmental refugees)
   - Economic hardship

3. **Scale**: Over 100 million displaced globally (UNHCR 2023)

4. **Challenges**:
   - Host country burden
   - Integration difficulties
   - Political tensions
   - Human trafficking

5. **Solutions**: UNHCR assistance, resettlement, addressing root causes`,
      },
    ],

    // ==================== TEXTBOOK EXERCISES - CHAPTER 3 ====================
    textbookExercises: {
      title: "Chapter 3 - Textbook Exercises with Answers",

      // Q.1 (A) MCQs
      mcqs: [
        {
          q: "The Rio de Janeiro Earth Summit (1992) focused on -",
          options: [
            "Environment and development",
            "Nuclear non-proliferation",
            "International trade",
            "Gender issues",
          ],
          correct: 0,
          answer: "Environment and development",
          explanation:
            "The Rio Earth Summit (1992), also known as UNCED, focused on sustainable development - balancing economic growth with environmental protection. It produced Agenda 21 and the Rio Declaration on Environment and Development.",
        },
        {
          q: "Today the Indian approach to gender issues focuses on -",
          options: ["Education", "Welfare", "Development", "Empowerment"],
          correct: 3,
          answer: "Empowerment",
          explanation:
            "India's approach to gender issues has evolved from Welfare (1950s-70s) → Development (1980s) → Empowerment (1990s onwards). Current focus is on empowering women to make their own choices through education, economic independence, and political participation.",
        },
      ],

      // Q.1 (D) State Concept
      conceptIdentification: [
        {
          statement:
            "Introduction of high yielding variety of seeds and irrigation methods",
          answer: "Green Revolution",
          explanation:
            "The Green Revolution (1960s-70s) was an agricultural transformation that introduced High Yielding Variety (HYV) seeds, chemical fertilizers, pesticides, and modern irrigation techniques. Led by M.S. Swaminathan in India, it made India self-sufficient in food production.",
        },
        {
          statement:
            "Think tank of the Government of India, providing both directional and policy inputs",
          answer: "NITI Aayog",
          explanation:
            "NITI Aayog (National Institution for Transforming India) was established in 2015, replacing the Planning Commission. It serves as a think tank providing strategic policy vision and fostering cooperative federalism. CEO is appointed by PM.",
        },
      ],

      // Q.3 True/False with Reasons
      trueFalse: [
        {
          statement:
            "Planning Commission was created to promote agriculture in India.",
          answer: false,
          reason:
            "**FALSE**\n\n**Reasons:**\n\n1. **Actual Purpose**: The Planning Commission was created in 1950 to formulate Five Year Plans for the overall ECONOMIC DEVELOPMENT of India, not specifically for agriculture.\n\n2. **Functions of Planning Commission:**\n   - Prepare Five Year Plans\n   - Allocate resources among sectors\n   - Set development priorities\n   - Monitor plan implementation\n   - Assess resources\n\n3. **Scope**: It covered ALL sectors including:\n   - Industry\n   - Infrastructure\n   - Agriculture\n   - Social sectors (education, health)\n   - Defense\n\n4. **Replaced**: Planning Commission was replaced by NITI Aayog in 2015\n\n5. **Agricultural Focus**: While agriculture was ONE sector, the main purpose was comprehensive economic planning for the entire nation.\n\n**Note**: Bodies specifically for agriculture include Ministry of Agriculture, ICAR (Indian Council of Agricultural Research), etc.",
        },
        {
          statement:
            "National Commission for Women was set up to protect rights for women in India.",
          answer: true,
          reason:
            "**TRUE**\n\n**Reasons:**\n\n1. **Purpose**: The National Commission for Women (NCW) was established specifically to protect and promote the rights and interests of women in India.\n\n2. **Establishment**: Set up in 1992 under the National Commission for Women Act, 1990.\n\n3. **Functions of NCW:**\n   - Review Constitutional and legal safeguards for women\n   - Recommend amendments to laws\n   - Investigate complaints regarding violation of women's rights\n   - Advise government on policy matters\n   - Inspect jails, remand homes for women\n   - Fund litigation for women\n\n4. **Composition:**\n   - Chairperson (nominated by Central Govt)\n   - 5 Members\n   - Member Secretary\n\n5. **Powers**: Quasi-judicial body with powers of civil court\n\n6. **Achievements**:\n   - Domestic Violence Act advocacy\n   - Sexual Harassment guidelines\n   - Dowry case investigations\n   - Awareness programs\n\n**Headquarters**: New Delhi",
        },
      ],

      // Q.4 Co-relation (Note: Skip Chapter 3 for Co-relation in exam as per Mind Faces!)
      coRelation: [
        {
          concepts: "Women Empowerment and Sustainable Development",
          modelAnswer:
            "**Co-relation: Women Empowerment and Sustainable Development**\n\n**Connection**: Women empowerment is ESSENTIAL for achieving sustainable development. The two are mutually reinforcing.\n\n**How Women Empowerment leads to Sustainable Development:**\n\n1. **Economic Growth**:\n   - Women's workforce participation increases GDP\n   - Women reinvest 90% of earnings in family (men only 35%)\n   - Economic independence reduces poverty\n\n2. **Environmental Sustainability**:\n   - Women are primary users of natural resources\n   - Educated women make sustainable choices\n   - Women's participation in environmental governance improves outcomes\n\n3. **Social Development**:\n   - Educated mothers = healthier, educated children\n   - Lower fertility rates = sustainable population\n   - Women's participation reduces gender inequality\n\n4. **SDG Connection**:\n   - SDG 5 (Gender Equality) is linked to all other SDGs\n   - Cannot achieve sustainable development without women's participation\n\n**Examples**:\n- Self-Help Groups (SHGs) promoting sustainable livelihoods\n- Women-led forest conservation (Chipko Movement)\n- Grameen Bank microfinance model\n\n**Conclusion**: Empowering women is not just a goal but a means to achieve comprehensive sustainable development.",
        },
        {
          concepts: "Poverty and Development",
          modelAnswer:
            "**Co-relation: Poverty and Development**\n\n**Connection**: Poverty and development are INVERSELY related - as development increases, poverty decreases. However, the relationship is complex.\n\n**How Development Reduces Poverty:**\n\n1. **Economic Development**:\n   - Creates employment opportunities\n   - Raises income levels\n   - Improves living standards\n   - Increases tax revenue for social programs\n\n2. **Social Development**:\n   - Education improves employability\n   - Healthcare increases productivity\n   - Social security provides safety net\n\n3. **Infrastructure Development**:\n   - Roads connect markets\n   - Electricity enables enterprise\n   - Digital access opens opportunities\n\n**How Poverty Hinders Development:**\n\n1. **Low Human Capital**: Malnutrition, poor health, lack of education\n2. **Low Savings**: No capital for investment\n3. **Debt Trap**: Borrowing at high interest\n4. **Social Exclusion**: Marginalized from opportunities\n\n**Vicious Cycle of Poverty**:\nPoverty → Low income → Low savings → Low investment → Low productivity → Poverty\n\n**Breaking the Cycle**:\n- Government programs (MGNREGA, PDS, scholarships)\n- Inclusive growth policies\n- Focus on human development (education, health)\n- Financial inclusion\n\n**Conclusion**: Development must be INCLUSIVE to effectively reduce poverty - growth alone is not enough.",
        },
      ],

      // Q.5 Express Opinion (Note: Skip Chapter 4 for Opinion, but Ch 3 is included)
      opinionQuestions: [
        {
          topic: "There is a need to protect the environment",
          modelAnswer:
            "**Opinion: Need to Protect the Environment**\n\n**Statement**: Yes, there is an URGENT need to protect the environment for the survival of present and future generations.\n\n**Reasons for Environmental Protection:**\n\n1. **Climate Change Crisis**:\n   - Global temperatures rising\n   - Extreme weather events increasing\n   - Sea levels rising, threatening coastal areas\n   - Paris Agreement goal: Limit warming to 1.5°C\n\n2. **Biodiversity Loss**:\n   - Species extinction at alarming rate\n   - Ecosystem services threatened\n   - Food security at risk\n\n3. **Resource Depletion**:\n   - Fossil fuels running out\n   - Groundwater depletion\n   - Deforestation reducing carbon sinks\n\n4. **Health Impact**:\n   - Air pollution causing diseases\n   - Water contamination\n   - Pandemics linked to environmental destruction\n\n5. **Future Generations**:\n   - Sustainable development = meeting present needs without compromising future\n   - Intergenerational equity principle\n\n**Measures Needed**:\n- Renewable energy transition\n- Sustainable consumption patterns\n- Conservation of forests and wildlife\n- International cooperation (UNFCCC, CBD)\n- Individual responsibility\n\n**Conclusion**: Environment protection is not a choice but a necessity. The cost of inaction is far greater than the cost of action.",
        },
      ],

      // Q.6 Short Answers (80-100 words) - 5 marks each
      shortAnswers: [
        {
          question: "What is the Green Revolution?",
          marks: 5,
          modelAnswer:
            "**Green Revolution:**\n\n**Definition**: The Green Revolution was an agricultural transformation (1960s-70s) that dramatically increased food production through modern farming techniques.\n\n**Key Features**:\n- **HYV Seeds**: High Yielding Variety seeds (wheat by Norman Borlaug, rice)\n- **Irrigation**: Expansion of canals, tubewells\n- **Chemical Inputs**: Fertilizers, pesticides, herbicides\n- **Mechanization**: Tractors, harvesters, modern equipment\n\n**Father of Green Revolution**:\n- Global: Norman Borlaug (Nobel Prize 1970)\n- India: M.S. Swaminathan\n\n**Impact on India**:\n\n| Positive | Negative |\n|----------|----------|\n| Food self-sufficiency | Regional disparity (Punjab vs East) |\n| Reduced imports | Environmental damage |\n| Farmer income increased | Groundwater depletion |\n| Industrial growth | Small farmer marginalization |\n\n**Phases**:\n- First: 1960s-70s (wheat, rice in Punjab, Haryana)\n- Second: Focus on Eastern India, pulses, oilseeds\n\n**Conclusion**: While Green Revolution achieved food security, sustainable agriculture practices are now needed.",
        },
        {
          question:
            "What is empowerment and suggest measures for empowerment of women?",
          marks: 5,
          modelAnswer:
            "**Women Empowerment:**\n\n**Definition**: Empowerment means giving women the power, authority, and resources to make their own decisions and control their lives.\n\n**Dimensions of Empowerment**:\n1. **Economic**: Financial independence, property rights\n2. **Social**: Education, health, freedom from discrimination\n3. **Political**: Voting, contesting elections, decision-making\n4. **Legal**: Equal rights, protection from violence\n\n**Measures for Women Empowerment:**\n\n**1. Constitutional & Legal**:\n- Article 14, 15, 16 (Equality)\n- 73rd & 74th Amendments (33% reservation in local bodies)\n- Domestic Violence Act, Sexual Harassment Act\n\n**2. Government Schemes**:\n- Beti Bachao Beti Padhao\n- Sukanya Samriddhi Yojana\n- Mahila Shakti Kendra\n- MUDRA loans for women entrepreneurs\n- One Stop Centre (Sakhi)\n\n**3. Education**:\n- Free education for girls\n- Scholarships (CBSE Udaan, etc.)\n- Skill development programs\n\n**4. Economic**:\n- Self-Help Groups (SHGs)\n- Microfinance\n- Women entrepreneurship support\n\n**5. Health**:\n- Janani Suraksha Yojana\n- Free healthcare programs\n\n**Conclusion**: True empowerment requires multi-dimensional approach - legal, economic, social, and political.",
        },
      ],

      // Q.7 Long Answer (150-200 words) - 10 marks
      longAnswers: [
        {
          question:
            "Explain conditions of women in India with help of given points: (a) Economic inequality (b) Trafficking & exploitation (c) Literacy rate (d) Political representation",
          marks: 10,
          modelAnswer:
            "### Conditions of Women in India\n\n#### Introduction\nDespite constitutional guarantees of equality, women in India continue to face multiple challenges across economic, social, and political spheres.\n\n#### (a) Economic Inequality\n\n**Current Situation**:\n- Female Labour Force Participation Rate: Only 25% (one of lowest globally)\n- Wage Gap: Women earn 19% less than men for same work\n- Property Ownership: Only 12.9% women own land\n- Unpaid Work: Women spend 5x more time on unpaid domestic work\n\n**Causes**:\n- Patriarchal attitudes about women's roles\n- Lack of safe workplaces\n- Care responsibilities limiting work options\n- Limited access to credit and resources\n\n**Measures**:\n- Equal Remuneration Act\n- Maternity Benefit Act (26 weeks paid leave)\n- MUDRA loans for women entrepreneurs\n- Property rights under Hindu Succession Act\n\n#### (b) Trafficking and Exploitation\n\n**Scale of Problem**:\n- India is source, transit, and destination for trafficking\n- Women trafficked for: domestic work, sex work, forced marriage, bonded labor\n- Child marriage persists (23% girls married before 18)\n\n**Forms of Exploitation**:\n\n| Type | Prevalence |\n|------|------------|\n| Domestic violence | 30% women face it |\n| Sexual harassment | Widespread in workplaces, public spaces |\n| Dowry deaths | ~7,000 annually |\n| Acid attacks | Hundreds of cases |\n\n**Legal Protection**:\n- Immoral Traffic (Prevention) Act\n- Protection of Children from Sexual Offences (POCSO) Act\n- Dowry Prohibition Act\n- Sexual Harassment at Workplace Act\n\n#### (c) Literacy Rate\n\n**Statistics**:\n- Female literacy: 70.3% (Male: 84.7%)\n- Gender gap: 14.4 percentage points\n- Rural-urban divide significant\n\n**Challenges**:\n- Dropout rates higher for girls (household work, early marriage)\n- Safety concerns about schools\n- Preference for educating boys\n- Lack of female teachers in rural areas\n\n**Government Initiatives**:\n- Right to Education Act (free education 6-14 years)\n- Beti Bachao Beti Padhao\n- Mid-day meal scheme\n- Kasturba Gandhi Balika Vidyalaya (residential schools)\n- Scholarships for girls\n\n#### (d) Political Representation\n\n**Current Status**:\n- Lok Sabha: Only 14.4% women MPs (78 out of 543)\n- State Assemblies: Average 9% women\n- Panchayats: 46% women (due to 33% reservation + state extensions)\n\n**Progress Made**:\n- 73rd & 74th Constitutional Amendments: 33% reservation in local bodies\n- Several states increased to 50% (Bihar, Uttarakhand, etc.)\n- Women's Reservation Bill (33% in Parliament) passed in 2023\n\n**Barriers**:\n- Patriarchal political culture\n- Lack of funding for women candidates\n- Violence against women in politics\n- Proxy representation (husbands controlling women members)\n\n#### Way Forward\n\n1. **Education**: Universal female education with focus on quality\n2. **Economic Independence**: Skill development, entrepreneurship support\n3. **Legal Enforcement**: Strict implementation of protective laws\n4. **Political Empowerment**: Implement 33% reservation in Parliament\n5. **Attitude Change**: Challenge patriarchal mindsets through awareness\n\n#### Conclusion\n\nWhile significant progress has been made in women's conditions since independence, much remains to be done. A multi-pronged approach addressing economic, social, educational, and political dimensions is essential for true gender equality. The goal should be not just equality but equity - providing women with opportunities to achieve their full potential.",
        },
      ],
    },
  },

  // ==================== CHAPTER 4: CHALLENGES TO PEACE & STABILITY ====================
  chapter4: {
    title: "Challenges to Peace and Stability in India",
    weightage: "12-14 marks",

    mustKnowConcepts: [
      {
        term: "Communalism",
        definition:
          "Using religion for political purposes, leading to inter-religious conflicts.",
      },
      {
        term: "Regionalism",
        definition: "Strong attachment to one's region over national identity.",
      },
      {
        term: "Casteism",
        definition:
          "Discrimination based on caste; affects politics and society.",
      },
      {
        term: "Terrorism",
        definition:
          "Use of violence for political aims; internal (Naxalism) and cross-border.",
      },
      {
        term: "Naxalism/Left-Wing Extremism",
        definition:
          "Armed communist movement in tribal areas of central-eastern India.",
      },
      {
        term: "National Integration",
        definition: "Unity of diverse groups into a single national identity.",
      },
      {
        term: "Secularism",
        definition:
          "State neutrality in religious matters; equal treatment of all religions.",
      },
    ],

    pyqMCQs: [
      {
        q: "Communalism means:",
        options: [
          "Unity",
          "Using religion for politics",
          "Regional loyalty",
          "Caste pride",
        ],
        correct: 1,
        year: 2024,
      },
      {
        q: "Naxalism started in:",
        options: ["1947", "1967", "1991", "2001"],
        correct: 1,
        year: 2023,
      },
      {
        q: "National Integration means:",
        options: [
          "Economic growth",
          "Unity in diversity",
          "Military strength",
          "None",
        ],
        correct: 1,
        year: 2022,
      },
      {
        q: "Secularism means:",
        options: [
          "Against religion",
          "State neutrality in religion",
          "Promoting one religion",
          "None",
        ],
        correct: 1,
        year: 2021,
      },
      {
        q: "Regionalism is based on:",
        options: ["Religion", "Caste", "Region/Language", "Class"],
        correct: 2,
        year: 2020,
      },
      // Additional Important MCQs
      {
        q: "Red Corridor refers to:",
        options: [
          "Kashmir",
          "Northeast",
          "Naxal-affected areas",
          "Coastal areas",
        ],
        correct: 2,
        year: "Imp",
      },
      {
        q: "Article 370 was related to:",
        options: ["Punjab", "Kashmir", "Assam", "Tamil Nadu"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Sons of the soil movement is related to:",
        options: ["Communalism", "Regionalism", "Casteism", "Terrorism"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "AFSPA stands for:",
        options: [
          "Armed Forces Special Powers Act",
          "Anti-Fascist Security Protection Act",
          "Army Forces Safety Protection Act",
          "None",
        ],
        correct: 0,
        year: "Imp",
      },
      {
        q: "National Integration Council is headed by:",
        options: [
          "President",
          "Prime Minister",
          "Home Minister",
          "Chief Justice",
        ],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Insurgency in Northeast is mainly due to:",
        options: ["Religion", "Ethnic demands", "Caste", "Economic"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Linguistic states were created in:",
        options: ["1947", "1950", "1956", "1965"],
        correct: 2,
        year: "Imp",
      },
      {
        q: "Unity in diversity is feature of:",
        options: ["USA", "UK", "India", "China"],
        correct: 2,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "What is Communalism? Explain its impact. (4 marks)",
        year: 2024,
        modelAnswer: `**Communalism:**

1. **Definition**: Using religious identity for political purposes, creating hostility between religious groups.

2. **Features**:
   - Views own religion as superior
   - Sees other religions as threats
   - Uses religion for political mobilization
   - Creates "us vs them" mentality

3. **Impact on India**:
   - **Social**: Inter-religious violence, riots
   - **Political**: Divisive politics, vote-bank
   - **Economic**: Development suffers
   - **National Security**: Weakens unity

4. **Examples**: 1947 Partition, 1984 anti-Sikh riots, 1992 Babri demolition aftermath, 2002 Gujarat

5. **Solution**: Secular education, strict laws, interfaith dialogue`,
      },
      {
        q: "Explain Naxalism as a challenge to internal security. (4 marks)",
        year: 2023,
        modelAnswer: `**Naxalism:**

1. **Definition**: Armed left-wing extremist movement following Maoist ideology, started in Naxalbari, West Bengal (1967).

2. **Causes**:
   - Land inequality
   - Tribal exploitation
   - Forest rights denial
   - Governance failure in remote areas

3. **Affected Areas**: Red Corridor - Jharkhand, Chhattisgarh, Odisha, Bihar, Maharashtra, Andhra Pradesh

4. **Impact**:
   - Violence against security forces
   - Development work hampered
   - Investment deterred
   - Loss of lives

5. **Government Response**:
   - Security operations (CRPF, state police)
   - Development programs
   - Surrender and rehabilitation
   - Forest Rights Act implementation`,
      },
    ],

    pyqLongAnswers: [
      {
        q: "Discuss the major challenges to peace and stability in India. (8 marks)",
        year: 2024,
        modelAnswer: `### Major Challenges to Peace and Stability in India

#### Introduction
Despite being a successful democracy, India faces multiple challenges to internal peace and stability.

#### 1. Communalism

**Definition**: Using religion for political mobilization

**Impact**:
- Inter-religious violence
- Social divisions
- Political polarization

**Examples**: Partition (1947), Gujarat (2002)

**Solutions**: Secular education, strict law enforcement

#### 2. Regionalism

**Definition**: Excessive attachment to region over nation

**Causes**:
- Language differences
- Economic disparities
- Historical grievances

**Examples**: Demand for separate states, sons-of-soil movements

**Impact**: Threats to national unity

#### 3. Casteism

**Definition**: Discrimination based on caste

**Impact**:
- Social inequality
- Caste-based violence
- Political manipulation

**Solutions**: Education, reservation, strict laws

#### 4. Terrorism

**Types**:
| Internal | External |
|----------|----------|
| Naxalism | Cross-border terrorism |
| Insurgencies (NE) | Pakistan-sponsored |

**Impact**: Loss of lives, economic damage, fear

#### 5. Naxalism/Left-Wing Extremism

**Causes**: Land issues, tribal exploitation, governance failure

**Affected Areas**: Red Corridor (Jharkhand, Chhattisgarh, etc.)

**Government Response**: Security operations + development

#### Measures for National Integration

1. **Constitutional**: Fundamental Rights, Directive Principles
2. **Institutional**: National Integration Council
3. **Educational**: Value education, national symbols
4. **Cultural**: Ek Bharat Shreshtha Bharat
5. **Economic**: Balanced regional development

#### Conclusion
India's unity depends on addressing these challenges through inclusive development, good governance, and promoting national consciousness while respecting diversity.`,
      },
    ],

    // ==================== TEXTBOOK EXERCISES - CHAPTER 4 ====================
    textbookExercises: {
      title: "Chapter 4 - Textbook Exercises with Answers",

      // Q.1 (A) MCQs
      mcqs: [
        {
          q: "'Unity in diversity' is one of the important Indian values associated with",
          options: [
            "Panchayati Raj",
            "National integration",
            "Concept of a nation",
            "Concept of 'melting pot'",
          ],
          correct: 1,
          answer: "National integration",
          explanation:
            "'Unity in diversity' is the core principle of National Integration in India. It means bringing together different religions, languages, cultures, and communities into one united nation while respecting their diversity.",
        },
        {
          q: "Charu Majumdar is associated with the",
          options: [
            "JKLF",
            "Naxal movement",
            "Hizb-ul-Mujahideen",
            "Assam Oil Blockage",
          ],
          correct: 1,
          answer: "Naxal movement",
          explanation:
            "Charu Majumdar was one of the founders of the Naxalite movement in India. He led the Naxalbari uprising in 1967 in West Bengal. The movement is named after Naxalbari village. He founded CPI (Marxist-Leninist).",
        },
      ],

      // Q.1 (B) Identify incorrect pair
      incorrectPairs: [
        {
          pairs: [
            {
              item1: "Jawaharlal Nehru",
              item2: "Discovery of India",
              correct: true,
            },
            {
              item1: "Struggle for rights of Tamil",
              item2: "LTTE",
              correct: true,
            },
            {
              item1: "National Integration Council",
              item2: "Article 370",
              correct: false,
            },
          ],
          incorrectPair: "National Integration Council - Article 370",
          correction:
            "National Integration Council - National Unity / Promoting Integration",
          explanation:
            "Article 370 was related to the special status of Jammu & Kashmir (now abrogated in 2019), NOT to National Integration Council. The NIC was set up in 1961 to promote national integration and address communal harmony issues.",
        },
      ],

      // Q.2 (A) Odd One Out
      oddOneOut: [
        {
          set: ["Naxalism", "Nationalism", "Terrorism", "Extremism"],
          answer: "Nationalism",
          reason:
            "Nationalism is a POSITIVE concept (love for one's nation, patriotism), while Naxalism, Terrorism, and Extremism are all NEGATIVE concepts that pose threats to peace and stability. Nationalism promotes unity; the others cause destruction.",
        },
      ],

      // Q.1 (D) / Q.2 (B) State Concept
      conceptIdentification: [
        {
          statement:
            "Threat to use violence with an intention to create panic in the society",
          answer: "Terrorism",
          explanation:
            "Terrorism is the unlawful use of violence and intimidation, especially against civilians, to create fear and panic in society for political, religious, or ideological purposes. It aims to coerce governments and populations through terror.",
        },
        {
          statement:
            "Involvement of people in decision making process of state",
          answer:
            "Political Participation / Democratic Participation / Participatory Democracy",
          explanation:
            "Political participation refers to citizens' involvement in the political process, including voting, contesting elections, joining political parties, participating in protests, engaging with representatives, and contributing to policy discussions.",
        },
      ],

      // Q.2 (A) / Q.3 (A) Concept Map
      conceptMaps: [
        {
          title: "Values of National Integration",
          question:
            "Complete the concept map for Values of National Integration",
          answer: {
            centerNode: "VALUES OF NATIONAL INTEGRATION",
            members: [
              "Unity in Diversity",
              "Secularism",
              "Tolerance",
              "Equality",
              "Brotherhood",
              "Patriotism",
              "Respect for all religions",
              "Linguistic harmony",
              "Cultural unity",
              "National consciousness",
            ],
            note: "These values help bind the diverse Indian society into one nation",
            importance:
              "Essential for maintaining peace, stability, and progress of the nation",
          },
        },
      ],

      // Q.3 (B) True/False with Reasons
      trueFalse: [
        {
          statement:
            "Democracy is required to establish national integration and social transformation.",
          answer: true,
          reason:
            "**TRUE**\n\n**Reasons:**\n\n1. **Democracy Promotes Inclusion**:\n   - All citizens have equal political rights\n   - Minorities get representation\n   - Decision-making is participatory\n   - Creates sense of belonging\n\n2. **Democracy Enables Social Transformation**:\n   - Constitutional provisions for equality (Articles 14-18)\n   - Reservation policies for disadvantaged groups\n   - Legal framework against discrimination\n   - Freedom to organize and demand rights\n\n3. **Democracy and National Integration**:\n   - Federal structure accommodates regional diversity\n   - Multiple languages recognized (8th Schedule)\n   - Religious freedom guaranteed (Articles 25-28)\n   - Peaceful resolution of conflicts through dialogue\n\n4. **Examples**:\n   - Linguistic reorganization of states (1956) through democratic process\n   - Reservation policies transformed social hierarchy\n   - Panchayati Raj empowered local communities\n\n**Conclusion**: Democracy provides the framework for addressing grievances peacefully, ensuring representation for all, and bringing about social change without violence.",
        },
        {
          statement:
            "National movement in India played an important role in national integration.",
          answer: true,
          reason:
            "**TRUE**\n\n**Reasons:**\n\n1. **United Diverse Groups**:\n   - People from all religions, castes, regions joined together\n   - Common goal of independence transcended differences\n   - Congress became umbrella organization for all\n\n2. **Created National Consciousness**:\n   - Sense of 'Indian' identity emerged\n   - Shared symbols: flag, anthem, leaders\n   - National heroes from all regions (Bhagat Singh, Netaji, Gandhi)\n\n3. **Values of Integration**:\n   - Gandhi's emphasis on Hindu-Muslim unity\n   - Secularism as foundation principle\n   - 'Unity in diversity' became national motto\n\n4. **Institutional Foundation**:\n   - Indian National Congress (1885) - first all-India organization\n   - Constituent Assembly included all groups\n   - Constitution reflected integration values\n\n5. **Mass Movements**:\n   - Non-Cooperation, Civil Disobedience, Quit India\n   - Participation from all sections of society\n   - Created bonds across regional and religious lines\n\n**Conclusion**: The national movement was the crucible in which Indian national identity was forged, laying the foundation for post-independence national integration.",
        },
      ],

      // Q.4 Co-relation (Note: Skip Ch 3 & 5 for Co-relation as per Mind Faces)
      coRelation: [
        {
          concepts: "National Unity and Regional Aspirations",
          modelAnswer:
            "**Co-relation: National Unity and Regional Aspirations**\n\n**Connection**: National unity and regional aspirations are not contradictory but need to be balanced. Healthy regional aspirations can coexist with national unity in a federal democracy.\n\n**Understanding the Relationship:**\n\n**1. Regional Aspirations - What are they?**\n- Demands for linguistic states\n- Economic development of backward regions\n- Protection of local culture and identity\n- Greater autonomy in governance\n- Representation in central government\n\n**2. How They Can THREATEN National Unity:**\n- Separatist movements (Kashmir, Northeast insurgencies)\n- Sons-of-soil movements against migrants\n- Inter-state disputes (water, borders)\n- Linguistic chauvinism\n- Regional parties prioritizing region over nation\n\n**3. How They Can STRENGTHEN National Unity:**\n- Linguistic reorganization (1956) accommodated regional aspirations, strengthening unity\n- Federal structure allows regional expression within national framework\n- Regional development reduces grievances\n- Cultural diversity celebrated as national asset\n\n**4. Balancing Act:**\n\n| Accommodating Aspirations | Maintaining Unity |\n|---------------------------|-------------------|\n| State autonomy | Strong Centre |\n| Regional languages | Hindi + English link |\n| Local governance | National integration programs |\n| Cultural expression | Common citizenship |\n\n**5. Constitutional Framework:**\n- Division of powers (Union, State, Concurrent lists)\n- Article 1: India as Union of States\n- Equal representation in Rajya Sabha not based on population\n- Governor as Centre's representative\n\n**6. Success Stories:**\n- Creation of new states (Jharkhand, Uttarakhand, Telangana) resolved regional demands peacefully\n- Regional parties becoming coalition partners at Centre\n- Sixth Schedule for Northeast tribal areas\n\n**Conclusion**: The key is to address legitimate regional aspirations through democratic means while maintaining national unity. Suppression of aspirations leads to alienation; accommodation leads to integration.",
        },
      ],

      // Q.5 Express Opinion (Note: Skip Ch 4 for Opinion as per Mind Faces!)
      opinionQuestions: [
        {
          topic: "Peace and stability are needed for the nation's progress",
          modelAnswer:
            "**Opinion: Peace and Stability for Nation's Progress**\n\n**Statement**: Yes, peace and stability are ESSENTIAL prerequisites for a nation's progress and development.\n\n**Reasons:**\n\n**1. Economic Development**:\n- Investment (both domestic and foreign) requires stability\n- Businesses cannot operate in conflict zones\n- Tourism depends on peaceful environment\n- Example: J&K's economy suffered due to militancy; improving now\n\n**2. Social Development**:\n- Education systems disrupted by violence\n- Healthcare services cannot reach conflict areas\n- Brain drain from unstable regions\n- Social capital destroyed by communal conflicts\n\n**3. Infrastructure**:\n- Development projects halted in disturbed areas\n- Resources diverted to security instead of development\n- Naxal-affected areas lack basic infrastructure\n\n**4. Human Capital**:\n- Youth radicalized instead of educated\n- Skilled people migrate to peaceful areas\n- Psychological trauma affects productivity\n\n**5. National Image**:\n- Instability damages international reputation\n- Reduces soft power\n- Affects diplomatic relations\n\n**Examples:**\n- Northeast: Development accelerated after peace accords\n- Punjab: Post-militancy economic boom\n- Rwanda: Remarkable progress after genocide ended\n\n**Counter-argument Addressed**:\n- Some argue conflict drives change (revolutions)\n- But sustainable progress requires peace\n- Democratic change is more lasting than violent change\n\n**Conclusion**: As Mahatma Gandhi said, 'There is no way to peace, peace is the way.' Progress and development can only be sustained in an environment of peace and stability.",
        },
      ],

      // Q.6 Short Answers (80-100 words) - 5 marks each
      shortAnswers: [
        {
          question: "What is left wing extremism in India?",
          marks: 5,
          modelAnswer:
            "**Left Wing Extremism (LWE) / Naxalism in India:**\n\n**Definition**: Armed revolutionary movement based on Maoist ideology, seeking to overthrow the state through violent armed struggle.\n\n**Origin**:\n- Started in Naxalbari, West Bengal (1967)\n- Named 'Naxalism' after the village\n- Founded by Charu Majumdar, Kanu Sanyal\n- Inspired by Mao Zedong's ideology\n\n**Ideology**:\n- Armed struggle against exploitation\n- Support for peasants and tribals\n- Overthrow of 'bourgeois' state\n- Establish communist rule\n\n**Affected Areas (Red Corridor)**:\n- Chhattisgarh, Jharkhand, Odisha\n- Bihar, Maharashtra, Andhra Pradesh/Telangana\n- Parts of West Bengal, Madhya Pradesh\n\n**Major Groups**:\n- CPI (Maoist) - banned organization\n- People's Liberation Guerrilla Army (PLGA)\n\n**Causes**:\n\n| Social | Economic | Governance |\n|--------|----------|------------|\n| Tribal exploitation | Land alienation | Poor development |\n| Caste discrimination | Forest rights denial | Absence of state services |\n| Social inequality | Unemployment | Police excesses |\n\n**Government Response**:\n- **Security**: CRPF deployment, anti-Naxal operations\n- **Development**: Aspirational Districts Programme\n- **Rights**: Forest Rights Act (2006)\n- **Surrender Policy**: Rehabilitation of surrendered Naxals\n\n**Conclusion**: Addressing root causes (development deficit, tribal rights) is crucial alongside security measures.",
        },
        {
          question: "Explain cross border terrorism in Jammu and Kashmir",
          marks: 5,
          modelAnswer:
            "**Cross-Border Terrorism in Jammu & Kashmir:**\n\n**Definition**: Terrorist activities planned, trained, funded, and supported from across the border (Pakistan) but executed in India, particularly in Jammu & Kashmir.\n\n**Background**:\n- Started after 1989 militancy eruption\n- Pakistan's support to militant groups\n- Kashmir claimed by Pakistan\n- Exploitation of local grievances\n\n**Major Terrorist Groups**:\n- Lashkar-e-Taiba (LeT)\n- Jaish-e-Mohammed (JeM)\n- Hizbul Mujahideen\n- Al-Badr\n- Harkat-ul-Mujahideen\n\n**Major Attacks**:\n\n| Year | Attack |\n|------|--------|\n| 2001 | Parliament attack |\n| 2008 | Mumbai attacks (26/11) |\n| 2016 | Uri attack (19 soldiers killed) |\n| 2016 | Pathankot airbase attack |\n| 2019 | Pulwama attack (40 CRPF killed) |\n\n**Pakistan's Role**:\n- Training camps in PoK\n- ISI coordination\n- Financial support\n- Safe havens for terrorists\n\n**India's Response**:\n- **Military**: Surgical strikes (2016), Balakot airstrike (2019)\n- **Diplomatic**: Isolating Pakistan internationally, FATF pressure\n- **Security**: Border fencing, anti-infiltration grid\n- **Political**: Article 370 abrogation (2019), direct governance\n\n**Impact**:\n- Loss of thousands of lives (civilians, soldiers)\n- Economic damage to Kashmir\n- Hindrance to development\n- Regional instability\n- Human rights concerns\n\n**Conclusion**: Cross-border terrorism remains India's most serious security challenge, requiring comprehensive approach including international pressure on Pakistan to dismantle terror infrastructure.",
        },
      ],
    },
  },

  // ==================== CHAPTER 5: GOOD GOVERNANCE ====================
  chapter5: {
    title: "Good Governance",
    weightage: "10-12 marks",

    mustKnowConcepts: [
      {
        term: "Good Governance",
        definition:
          "Transparent, accountable, participatory, and responsive administration.",
      },
      {
        term: "E-Governance",
        definition:
          "Use of ICT (Information and Communication Technology) for government services.",
      },
      {
        term: "RTI",
        definition:
          "Right to Information Act, 2005 - citizens can request government information.",
      },
      {
        term: "Lokpal",
        definition:
          "Anti-corruption ombudsman at central level (Lokpal and Lokayuktas Act, 2013).",
      },
      {
        term: "Lokayukta",
        definition: "Anti-corruption ombudsman at state level.",
      },
      {
        term: "Citizen's Charter",
        definition:
          "Document stating standards of service delivery to citizens.",
      },
      {
        term: "Transparency",
        definition: "Openness in government functioning and decision-making.",
      },
      {
        term: "Accountability",
        definition: "Government being answerable to citizens for its actions.",
      },
    ],

    pyqMCQs: [
      {
        q: "RTI Act was passed in:",
        options: ["2000", "2005", "2010", "2015"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Lokpal is for:",
        options: ["State", "Centre", "Panchayat", "All"],
        correct: 1,
        year: 2023,
      },
      {
        q: "E-Governance uses:",
        options: ["Letters", "ICT/Technology", "Telegraph", "None"],
        correct: 1,
        year: 2022,
      },
      {
        q: "Good Governance includes:",
        options: ["Secrecy", "Transparency", "Authoritarianism", "None"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Citizen's Charter is about:",
        options: ["Service standards", "Military", "Trade", "None"],
        correct: 0,
        year: 2020,
      },
      // Additional Important MCQs
      {
        q: "RTI application fee is:",
        options: ["Rs. 5", "Rs. 10", "Rs. 50", "Rs. 100"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Information under RTI must be given within:",
        options: ["15 days", "30 days", "45 days", "60 days"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "First Lokpal of India:",
        options: [
          "Anna Hazare",
          "Justice Pinaki Chandra Ghose",
          "Arvind Kejriwal",
          "None",
        ],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Digital India was launched in:",
        options: ["2010", "2014", "2015", "2020"],
        correct: 2,
        year: "Imp",
      },
      {
        q: "CPGRAMS is for:",
        options: [
          "Education",
          "Public Grievance Redressal",
          "Health",
          "Defense",
        ],
        correct: 1,
        year: "Imp",
      },
      {
        q: "CIC stands for:",
        options: [
          "Central Information Commission",
          "Central Investigation Committee",
          "Chief Information Controller",
          "None",
        ],
        correct: 0,
        year: "Imp",
      },
      {
        q: "DBT stands for:",
        options: [
          "Direct Benefit Transfer",
          "Digital Bank Transaction",
          "Development Budget Transfer",
          "None",
        ],
        correct: 0,
        year: "Imp",
      },
      {
        q: "Lokayukta functions at:",
        options: [
          "Central level",
          "State level",
          "District level",
          "Village level",
        ],
        correct: 1,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "What is Good Governance? Explain its features. (4 marks)",
        year: 2024,
        modelAnswer: `**Good Governance:**

1. **Definition**: Efficient, transparent, accountable, and responsive administration that ensures public welfare.

2. **Features**:
   - **Participation**: Citizen involvement in decision-making
   - **Transparency**: Openness in government functioning
   - **Accountability**: Government answerable to people
   - **Rule of Law**: Equal application of laws
   - **Responsiveness**: Quick response to citizen needs
   - **Consensus-oriented**: Balancing diverse interests
   - **Equity**: Fair treatment to all citizens
   - **Efficiency**: Optimal use of resources

3. **Measures in India**: RTI, Lokpal, E-Governance, Citizen's Charter`,
      },
      {
        q: "Explain the importance of RTI Act. (4 marks)",
        year: 2023,
        modelAnswer: `**Right to Information (RTI) Act, 2005:**

1. **Definition**: Law giving citizens right to request information from public authorities.

2. **Importance**:
   - **Transparency**: Opens government functioning to scrutiny
   - **Accountability**: Makes officials answerable
   - **Empowerment**: Citizens can question government
   - **Anti-corruption**: Deters corrupt practices
   - **Democratic**: Promotes informed participation

3. **Key Provisions**:
   - Information within 30 days
   - Rs. 10 application fee
   - Central and State Information Commissions
   - Exemptions for security-related matters

4. **Impact**: Exposed scams, improved governance`,
      },
    ],

    pyqLongAnswers: [
      {
        q: "Explain the concept of Good Governance and measures taken in India to promote it. (8 marks)",
        year: 2023,
        modelAnswer: `### Good Governance in India

#### Introduction
Good Governance means effective, transparent, and accountable administration that serves public interest.

#### Concept of Good Governance

**Definition**: UNDP defines good governance as participatory, consensus-oriented, accountable, transparent, responsive, effective, equitable, and follows rule of law.

#### Pillars of Good Governance

| Pillar | Meaning |
|--------|---------|
| Participation | Citizen involvement |
| Transparency | Open functioning |
| Accountability | Answerable to public |
| Rule of Law | Equal treatment |
| Responsiveness | Quick service delivery |
| Efficiency | Optimal resource use |
| Equity | Fairness to all |

#### Measures in India

**1. Right to Information (RTI) Act, 2005**
- Citizens can seek government information
- 30-day response time
- Central/State Information Commissions
- Promotes transparency and accountability

**2. Lokpal and Lokayuktas Act, 2013**
- Anti-corruption ombudsman
- Lokpal at Centre, Lokayukta at States
- Investigates corruption against public servants

**3. E-Governance Initiatives**
- Digital India Programme
- Common Service Centres
- Online services (passport, driving license, etc.)
- Direct Benefit Transfer (DBT)

**4. Citizen's Charter**
- Service delivery standards
- Time-bound services
- Grievance redressal

**5. Other Measures**
- Right to Services Acts (state level)
- Social Audit
- Public Grievance Redressal (CPGRAMS)
- Whistleblower Protection

#### Challenges
- Implementation gaps
- Digital divide
- Bureaucratic resistance
- Awareness deficit

#### Conclusion
India has made significant progress in governance reforms. However, effective implementation and citizen awareness are key to achieving good governance goals.`,
      },
    ],

    // ==================== TEXTBOOK EXERCISES - CHAPTER 5 ====================
    textbookExercises: {
      title: "Chapter 5 - Textbook Exercises with Answers",

      // Q.1 (A) MCQs
      mcqs: [
        {
          q: "The concept of Lokpal is taken from",
          options: ["United States", "United Kingdom", "Sweden", "Russia"],
          correct: 2,
          answer: "Sweden",
          explanation:
            "The concept of Lokpal (Ombudsman) is borrowed from Sweden. Sweden was the first country to establish the institution of Ombudsman in 1809. The word 'Ombudsman' itself is Swedish, meaning 'representative' or 'agent'.",
        },
        {
          q: "The concept of 'Citizens Charter' is part of",
          options: [
            "POSDCORB",
            "Development administration",
            "Good governance",
            "NGO activity",
          ],
          correct: 2,
          answer: "Good governance",
          explanation:
            "Citizens Charter is a key component of Good Governance. It is a document that defines the standards of service delivery by government departments to citizens, including time limits, quality standards, and grievance redressal mechanisms. It was first introduced in UK (1991) and adopted in India (1997).",
        },
      ],

      // Q.1 (B) State Concept
      conceptIdentification: [
        {
          statement:
            "Person investigating complaints against government officials",
          answer: "Ombudsman / Lokpal / Lokayukta",
          explanation:
            "An Ombudsman is an independent official appointed to investigate citizens' complaints against government officials and maladministration. In India, Lokpal (at Central level) and Lokayukta (at State level) serve this function. They are anti-corruption institutions that can investigate complaints of corruption and misconduct against public servants.",
        },
      ],

      // Q.2 (A) Concept Map
      conceptMaps: [
        {
          title: "Values of Good Governance",
          question: "Complete the concept map for Values of Good Governance",
          answer: {
            centerNode: "VALUES OF GOOD GOVERNANCE",
            members: [
              "Participation",
              "Rule of Law",
              "Transparency",
              "Responsiveness",
              "Consensus Oriented",
              "Equity and Inclusiveness",
              "Effectiveness and Efficiency",
              "Accountability",
            ],
            note: "These 8 values were identified by UNDP (United Nations Development Programme) as pillars of good governance",
            additionalInfo:
              "The question shows 'Accountable' as one value - the complete list includes all 8 UNDP values",
          },
        },
      ],

      // Q.2 (B) / Q.3 True/False with Reasons
      trueFalse: [
        {
          statement:
            "Lokayukta can investigate complaints against political executives.",
          answer: true,
          reason:
            "**TRUE**\n\n**Reasons:**\n\n1. **Jurisdiction of Lokayukta**:\n   - Lokayukta is a state-level anti-corruption ombudsman\n   - Can investigate complaints against political executives including:\n     - Chief Minister (in most states)\n     - Ministers\n     - MLAs/MLCs\n     - State government officials\n\n2. **Powers**:\n   - Receive complaints of corruption and misconduct\n   - Conduct investigations\n   - Recommend action to competent authority\n   - Powers of civil court for investigation\n\n3. **Legal Framework**:\n   - Established under state Lokayukta Acts\n   - Karnataka was first state (1984)\n   - Most states now have Lokayukta\n\n4. **Example**:\n   - Karnataka Lokayukta investigated and recommended action against Chief Minister B.S. Yeddyurappa in 2011\n\n5. **Variations**:\n   - Jurisdiction varies by state\n   - Some states include CM, others don't\n   - Maharashtra Lokayukta can investigate CM\n\n**Note**: At Central level, Lokpal can investigate PM (with some restrictions), Ministers, and MPs.",
        },
        {
          statement:
            "Good Governance aims at efficient use of natural resources.",
          answer: true,
          reason:
            "**TRUE**\n\n**Reasons:**\n\n1. **Definition of Good Governance**:\n   - Good governance means efficient, effective, transparent, and accountable management of public affairs\n   - Includes sustainable use of resources\n\n2. **UNDP Values Include**:\n   - **Effectiveness and Efficiency**: Making best use of resources\n   - This explicitly includes natural resources\n\n3. **Environmental Governance**:\n   - Good governance encompasses environmental governance\n   - Sustainable development requires efficient resource use\n   - Prevents exploitation and wastage\n\n4. **Resource Management Aspects**:\n   - Water resource management\n   - Forest and land management\n   - Mineral resource allocation\n   - Energy efficiency\n\n5. **Government Initiatives**:\n   - Environmental clearance processes\n   - Forest Conservation Act\n   - Water conservation policies\n   - Renewable energy promotion\n\n6. **Intergenerational Equity**:\n   - Good governance considers future generations\n   - Cannot deplete resources unsustainably\n\n**Conclusion**: Efficient use of natural resources is integral to good governance as it ensures sustainable development and equitable distribution for present and future generations.",
        },
      ],

      // Q.3 Co-relation (Note: Skip Ch 3 & 5 for Co-relation as per Mind Faces - but including for completeness)
      coRelation: [
        {
          concepts: "Good Governance and E-Governance",
          modelAnswer:
            "**Co-relation: Good Governance and E-Governance**\n\n**Connection**: E-Governance is a TOOL to achieve Good Governance. They are complementary concepts where technology enables better governance.\n\n**What is Good Governance?**\n- Efficient, transparent, accountable administration\n- Citizen-centric approach\n- Rule of law and participation\n- Values: Transparency, Accountability, Responsiveness, etc.\n\n**What is E-Governance?**\n- Use of ICT (Information and Communication Technology) in government\n- Digital delivery of services\n- Electronic interactions between government and citizens\n\n**How E-Governance Promotes Good Governance:**\n\n| Good Governance Value | E-Governance Contribution |\n|----------------------|---------------------------|\n| **Transparency** | RTI portals, online budgets, public data |\n| **Accountability** | Digital trails, audit systems, tracking |\n| **Responsiveness** | Quick service delivery, online grievances |\n| **Efficiency** | Reduced paperwork, faster processing |\n| **Participation** | Online consultations, feedback systems |\n| **Equity** | Services to remote areas via CSCs |\n\n**Examples in India:**\n- **Digital India Programme**: Comprehensive e-governance initiative\n- **Aadhaar**: Digital identity for service delivery\n- **DBT (Direct Benefit Transfer)**: Eliminates middlemen\n- **UMANG App**: Unified access to government services\n- **DigiLocker**: Digital document storage\n- **e-Courts**: Online case status, filing\n\n**Benefits:**\n1. Reduces corruption (less human interface)\n2. Increases speed and efficiency\n3. 24/7 service availability\n4. Better record management\n5. Data-driven decision making\n\n**Challenges:**\n- Digital divide (rural vs urban)\n- Digital literacy gaps\n- Infrastructure limitations\n- Cybersecurity concerns\n\n**Conclusion**: E-Governance is essential for achieving good governance in the 21st century. It transforms governance from 'government-centric' to 'citizen-centric'.",
        },
      ],

      // Q.4 Express Opinion
      opinionQuestions: [
        {
          topic: "E-governance speeds up governmental processes",
          modelAnswer:
            "**Opinion: E-Governance Speeds Up Governmental Processes**\n\n**Statement**: Yes, E-governance significantly speeds up governmental processes by leveraging technology for efficient service delivery.\n\n**How E-Governance Speeds Up Processes:**\n\n**1. Reduced Processing Time**:\n- Online applications processed faster\n- No physical file movement delays\n- Automated workflows\n- Example: Passport - 3-4 weeks to 1 week with e-application\n\n**2. Elimination of Manual Steps**:\n- Digital signatures instead of physical\n- Auto-verification using databases (Aadhaar)\n- Pre-filled forms from existing data\n\n**3. 24/7 Availability**:\n- Services accessible anytime\n- No waiting for office hours\n- No queue at counters\n\n**4. Parallel Processing**:\n- Multiple approvals can happen simultaneously\n- Real-time status updates\n- Bottlenecks easily identified\n\n**Examples of Speed Improvement**:\n\n| Service | Before | After E-Governance |\n|---------|--------|--------------------|\n| Passport | 30-45 days | 7-10 days |\n| Income Tax Refund | 6-12 months | 1-3 months |\n| Driving License | 15-30 days | Same day (some states) |\n| Land Records | Weeks | Minutes |\n\n**5. Direct Benefit Transfer**:\n- Subsidies reach within hours\n- No intermediaries causing delays\n- Bank account credited directly\n\n**Conclusion**: E-governance has revolutionized service delivery speed. What took weeks now takes days or even hours.",
        },
        {
          topic: "E-governance brought administration closer to people",
          modelAnswer:
            "**Opinion: E-Governance Brought Administration Closer to People**\n\n**Statement**: Yes, E-governance has bridged the gap between government and citizens, making administration more accessible and citizen-friendly.\n\n**How E-Governance Brought Administration Closer:**\n\n**1. Anytime, Anywhere Access**:\n- Services from home via internet\n- Mobile apps (UMANG, mAadhaar)\n- No need to visit government offices\n- 24/7 availability\n\n**2. Common Service Centres (CSCs)**:\n- 4+ lakh CSCs across rural India\n- Government services at village level\n- 'Sarkar aapke dwar' (Government at your doorstep)\n\n**3. Single Window Systems**:\n- Multiple services at one portal\n- No running to different offices\n- Example: eSevakendras, MeeSeva\n\n**4. Grievance Redressal**:\n- Online complaint systems (CPGRAMS)\n- Track complaint status\n- Time-bound response\n- Direct communication with officials\n\n**5. Information Access**:\n- RTI online\n- Government data portals (data.gov.in)\n- Scheme information easily available\n- Beneficiary lists online\n\n**6. Reduced Middlemen**:\n- Direct interaction with government\n- DBT eliminates agents\n- Less corruption, more trust\n\n**Examples**:\n- **DigiLocker**: Documents always accessible\n- **e-Hospital**: Appointment from home\n- **PM-KISAN**: Money directly to farmers\n- **SWAYAM**: Education at doorstep\n\n**Impact**:\n- Empowered citizens\n- Reduced distance to administration\n- Greater trust in government\n- Inclusive service delivery\n\n**Conclusion**: E-governance has democratized access to government services, truly bringing administration closer to the common citizen, especially in remote areas.",
        },
      ],

      // Q.5 Short Answer (80-100 words) - 5 marks
      shortAnswers: [
        {
          question:
            "Explain various institutions protecting rights of different sections in India.",
          marks: 5,
          modelAnswer:
            "**Institutions Protecting Rights of Different Sections in India:**\n\n**1. National Human Rights Commission (NHRC)**:\n- Protects human rights of all citizens\n- Established: 1993 under Protection of Human Rights Act\n- Investigates violations by public servants\n- Quasi-judicial powers\n\n**2. National Commission for Women (NCW)**:\n- Protects rights of women\n- Established: 1992\n- Reviews laws, investigates complaints\n- Advises government on women's issues\n\n**3. National Commission for Scheduled Castes (NCSC)**:\n- Constitutional body (Article 338)\n- Protects SC rights against discrimination\n- Monitors implementation of safeguards\n\n**4. National Commission for Scheduled Tribes (NCST)**:\n- Constitutional body (Article 338A)\n- Protects tribal rights\n- Monitors forest rights implementation\n\n**5. National Commission for Minorities (NCM)**:\n- Protects minority community rights\n- Established: 1992 (statutory in 1993)\n- Muslims, Christians, Sikhs, Buddhists, Jains, Parsis\n\n**6. National Commission for Backward Classes (NCBC)**:\n- Constitutional body (102nd Amendment, 2018)\n- Protects OBC rights\n- Advises on inclusion in OBC list\n\n**7. National Commission for Protection of Child Rights (NCPCR)**:\n- Protects child rights\n- Established: 2007 under CPCR Act, 2005\n- Monitors child rights violations\n\n**8. Central Information Commission (CIC)**:\n- Protects right to information\n- Hears RTI appeals\n- Promotes transparency\n\n**State Level**: Each state has State Human Rights Commission, State Women Commission, etc.\n\n**Conclusion**: India has comprehensive institutional framework to protect rights of all sections, ensuring inclusive governance.",
        },
      ],

      // Q.6 Long Answer (150-200 words) - 10 marks
      longAnswers: [
        {
          question:
            "Explain in detail the following values of Good Governance: (a) Participation (b) Transparency (c) Responsiveness (d) Accountability",
          marks: 10,
          modelAnswer:
            "### Values of Good Governance\n\n#### Introduction\nGood governance is the process of decision-making and implementation that is participatory, transparent, accountable, effective, and equitable. The UNDP has identified 8 characteristics of good governance. Here we discuss four key values:\n\n#### (a) Participation\n\n**Definition**: Involvement of citizens in decision-making processes of the state at all levels.\n\n**Importance**:\n- Democracy means 'rule by the people'\n- Ensures policies reflect people's needs\n- Creates ownership and compliance\n- Strengthens legitimacy of government\n\n**Forms of Participation**:\n1. **Electoral**: Voting in elections\n2. **Consultative**: Public hearings, surveys\n3. **Direct**: Gram Sabha, referendums\n4. **Civil Society**: NGOs, pressure groups\n5. **Digital**: Online feedback, e-consultations\n\n**Examples in India**:\n- Gram Sabha meetings in Panchayati Raj\n- Public hearings for environmental clearance\n- MyGov.in portal for citizen engagement\n- Pre-budget consultations\n\n**Challenges**:\n- Low voter turnout\n- Elite capture of participatory forums\n- Lack of awareness\n- Limited access for marginalized groups\n\n#### (b) Transparency\n\n**Definition**: Free flow of information about government operations, decisions, and processes to the public.\n\n**Importance**:\n- Enables informed citizenship\n- Prevents corruption and misuse\n- Builds trust in government\n- Essential for accountability\n\n**Elements of Transparency**:\n1. **Access to Information**: RTI Act, 2005\n2. **Open Data**: data.gov.in portal\n3. **Public Disclosure**: Asset declarations, budgets\n4. **Media Freedom**: Press reporting on government\n\n**Initiatives in India**:\n\n| Initiative | Purpose |\n|------------|----------|\n| RTI Act | Access to government information |\n| e-Procurement | Open tendering process |\n| GFR Rules | Financial transparency |\n| Proactive Disclosure | Suo motu information sharing |\n\n**Benefits**:\n- Reduced corruption\n- Better public scrutiny\n- Improved decision-making\n- Enhanced credibility\n\n#### (c) Responsiveness\n\n**Definition**: Government institutions and processes serving all stakeholders within a reasonable timeframe.\n\n**Importance**:\n- Citizen satisfaction\n- Efficient service delivery\n- Trust in administration\n- Addresses grievances promptly\n\n**Indicators of Responsiveness**:\n1. Time taken to deliver services\n2. Quality of services\n3. Grievance redressal speed\n4. Adaptability to changing needs\n\n**Measures to Ensure Responsiveness**:\n- **Citizens Charter**: Service delivery standards\n- **Right to Service Acts**: Time-bound delivery (state level)\n- **Sevottam Model**: Quality management framework\n- **CPGRAMS**: Online grievance portal\n- **e-Governance**: Quick service delivery\n\n**Examples**:\n- Passport Seva Kendras - service in 7-10 days\n- Income Tax refund within 90 days\n- RTI response within 30 days\n\n**Challenges**:\n- Bureaucratic delays\n- Staff shortages\n- Infrastructure gaps\n- Attitude issues\n\n#### (d) Accountability\n\n**Definition**: Government and its officials being answerable for their decisions and actions to the public.\n\n**Importance**:\n- Prevents abuse of power\n- Ensures responsible behavior\n- Builds public trust\n- Improves performance\n\n**Types of Accountability**:\n\n| Type | Mechanism |\n|------|------------|\n| **Political** | Elections, Parliament |\n| **Administrative** | Departmental hierarchy |\n| **Legal** | Courts, tribunals |\n| **Social** | Media, civil society |\n| **Financial** | CAG audit, PAC |\n\n**Institutions for Accountability**:\n1. **Parliament/Legislature**: Questions, debates, committees\n2. **Comptroller and Auditor General (CAG)**: Financial audit\n3. **Lokpal/Lokayukta**: Anti-corruption\n4. **Central Vigilance Commission (CVC)**: Vigilance\n5. **Judiciary**: Judicial review\n6. **Media**: Public scrutiny\n\n**Mechanisms**:\n- RTI Act for information\n- Social audit of schemes (MGNREGA)\n- Outcome budgeting\n- Performance appraisals\n- Asset declarations\n\n#### Interconnection of Values\n\nThese four values are interconnected:\n- **Transparency** enables **accountability**\n- **Participation** ensures **responsiveness**\n- **Accountability** promotes **transparency**\n- All four together constitute **good governance**\n\n#### Conclusion\n\nParticipation, transparency, responsiveness, and accountability are the four pillars of good governance. India has made significant progress through RTI Act, e-governance, Lokpal, and citizen engagement platforms. However, effective implementation remains the key challenge. Good governance is not just an end but a means to achieve development, justice, and citizen welfare.",
        },
      ],
    },
  },

  // ==================== CHAPTER 6: INDIA AND THE WORLD ====================
  chapter6: {
    title: "India and the World",
    weightage: "14-16 marks",

    mustKnowConcepts: [
      {
        term: "Foreign Policy",
        definition:
          "Strategy of a country in dealing with other nations to protect its interests.",
      },
      {
        term: "Non-Alignment",
        definition:
          "Not joining any military bloc; independent foreign policy. India's policy during Cold War.",
      },
      {
        term: "Panchsheel",
        definition:
          "Five Principles of Peaceful Coexistence (1954, India-China agreement).",
      },
      {
        term: "NAM",
        definition:
          "Non-Aligned Movement - group of countries not aligned with superpowers.",
      },
      {
        term: "SAARC",
        definition: "South Asian Association for Regional Cooperation (1985).",
      },
      {
        term: "BRICS",
        definition:
          "Brazil, Russia, India, China, South Africa - emerging economies grouping.",
      },
      {
        term: "G20",
        definition: "Group of 20 major economies; India hosted 2023 summit.",
      },
      {
        term: "SCO",
        definition:
          "Shanghai Cooperation Organisation - Eurasian political/security alliance.",
      },
      {
        term: "Quad",
        definition:
          "Quadrilateral Security Dialogue - India, USA, Japan, Australia.",
      },
      {
        term: "Act East Policy",
        definition:
          "India's policy to engage with Southeast Asia and East Asia (since 2014).",
      },
    ],

    pyqMCQs: [
      {
        q: "Panchsheel was signed in:",
        options: ["1947", "1950", "1954", "1962"],
        correct: 2,
        year: 2024,
      },
      {
        q: "SAARC headquarters is in:",
        options: ["Delhi", "Colombo", "Kathmandu", "Dhaka"],
        correct: 2,
        year: 2024,
      },
      {
        q: "G20 Summit 2023 was hosted by:",
        options: ["USA", "China", "India", "Brazil"],
        correct: 2,
        year: 2024,
      },
      {
        q: "NAM was founded in:",
        options: ["1955", "1961", "1971", "1991"],
        correct: 1,
        year: 2023,
      },
      {
        q: "India-China war occurred in:",
        options: ["1947", "1962", "1971", "1999"],
        correct: 1,
        year: 2023,
      },
      {
        q: "India-Pakistan wars:",
        options: ["1947, 1965, 1971", "1947, 1962", "1947 only", "None"],
        correct: 0,
        year: 2022,
      },
      {
        q: "Kargil conflict was in:",
        options: ["1998", "1999", "2000", "2001"],
        correct: 1,
        year: 2022,
      },
      {
        q: "BRICS summit 2023 added new members from:",
        options: ["Europe", "Middle East/Africa", "Americas", "None"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Act East Policy replaced:",
        options: ["Act West", "Look East", "Act North", "None"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Quad includes:",
        options: [
          "India-China-Japan-USA",
          "India-USA-Japan-Australia",
          "India-Russia-USA",
          "None",
        ],
        correct: 1,
        year: 2020,
      },
      // Additional Important MCQs
      {
        q: "Simla Agreement was signed in:",
        options: ["1947", "1971", "1972", "1999"],
        correct: 2,
        year: "Imp",
      },
      {
        q: "Indus Waters Treaty was signed in:",
        options: ["1947", "1960", "1971", "1999"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "India became nuclear power in:",
        options: ["1974", "1998", "2001", "2008"],
        correct: 0,
        year: "Imp",
      },
      {
        q: "Pokhran-II tests were in:",
        options: ["1974", "1998", "2001", "2008"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "CPEC passes through:",
        options: [
          "Kashmir",
          "PoK (Pakistan-occupied Kashmir)",
          "Punjab",
          "Rajasthan",
        ],
        correct: 1,
        year: "Imp",
      },
      {
        q: "LAC stands for:",
        options: [
          "Line of Actual Control",
          "Land Access Control",
          "Legal Action Committee",
          "None",
        ],
        correct: 0,
        year: "Imp",
      },
      {
        q: "Galwan Valley clash occurred in:",
        options: ["2019", "2020", "2021", "2022"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "India is permanent member of UN Security Council:",
        options: [
          "Yes",
          "No, but seeking",
          "Applied but rejected",
          "Not interested",
        ],
        correct: 1,
        year: "Imp",
      },
      {
        q: "BIMSTEC includes:",
        options: [
          "Bay of Bengal countries",
          "European countries",
          "African countries",
          "American countries",
        ],
        correct: 0,
        year: "Imp",
      },
      {
        q: "First NAM summit was held in:",
        options: ["Delhi", "Cairo", "Belgrade", "Jakarta"],
        correct: 2,
        year: "Imp",
      },
      {
        q: "India-US Nuclear Deal was in:",
        options: ["2005", "2008", "2010", "2014"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "SCO full form is:",
        options: [
          "Shanghai Cooperation Organisation",
          "South Central Organisation",
          "Security Council Organisation",
          "None",
        ],
        correct: 0,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "What is Panchsheel? Explain its principles. (4 marks)",
        year: 2024,
        modelAnswer: `**Panchsheel (Five Principles of Peaceful Coexistence):**

1. **Background**: Agreement between India and China, signed April 29, 1954.

2. **Context**: Regarding Tibet, introduced by Nehru and Zhou Enlai.

3. **Five Principles**:
   1. Mutual respect for territorial integrity and sovereignty
   2. Mutual non-aggression
   3. Mutual non-interference in internal affairs
   4. Equality and mutual benefit
   5. Peaceful coexistence

4. **Significance**:
   - Foundation of India's foreign policy
   - Adopted by Non-Aligned Movement
   - Still relevant for international relations

5. **Irony**: China violated these principles in 1962 war.`,
      },
      {
        q: "Explain India's relations with Pakistan. (4 marks)",
        year: 2023,
        modelAnswer: `**India-Pakistan Relations:**

1. **Background**: Both countries created from Partition (1947)

2. **Wars**:
   - 1947-48: First Kashmir War
   - 1965: Second India-Pakistan War
   - 1971: Bangladesh Liberation War
   - 1999: Kargil Conflict

3. **Major Issues**:
   | Issue | Status |
   |-------|--------|
   | Kashmir | Core dispute |
   | Cross-border terrorism | Major irritant |
   | Water sharing | Indus Waters Treaty (1960) |
   | Trade | Minimal |

4. **Peace Efforts**:
   - Simla Agreement (1972)
   - Lahore Declaration (1999)
   - Composite Dialogue process
   - Back-channel talks

5. **Current Status**: Strained due to terrorism, no dialogue`,
      },
      {
        q: "What is BRICS? Explain its significance. (4 marks)",
        year: 2022,
        modelAnswer: `**BRICS:**

1. **Full Form**: Brazil, Russia, India, China, South Africa

2. **Formation**:
   - BRIC: 2009 (Brazil, Russia, India, China)
   - BRICS: 2010 (South Africa added)

3. **New Members (2024)**: Iran, Saudi Arabia, UAE, Egypt, Ethiopia

4. **Significance**:
   - 40%+ of world population
   - Combined GDP over $25 trillion
   - Alternative to Western-dominated institutions
   - New Development Bank (NDB) established

5. **For India**:
   - Platform for voice on global issues
   - Economic cooperation opportunities
   - South-South cooperation
   - Counter to Western dominance`,
      },
    ],

    pyqLongAnswers: [
      {
        q: "Discuss India's foreign policy since 1991. What are its main features? (8 marks)",
        year: 2024,
        modelAnswer: `### India's Foreign Policy Since 1991

#### Introduction
The end of Cold War (1991) and India's economic liberalization marked a shift in India's foreign policy from non-alignment to multi-alignment.

#### Major Shifts Post-1991

**1. From Idealism to Pragmatism**
- Economic interests became priority
- Ideology took backseat
- Engagement with all powers

**2. From Non-Alignment to Multi-Alignment**
- Cold War context gone
- Strategic partnerships with multiple powers
- Not bound to one bloc

#### Main Features

**1. Economic Diplomacy**
- Trade and investment focus
- Bilateral trade agreements
- WTO engagement
- FDI promotion

**2. Strategic Partnerships**
| Partner | Areas |
|---------|-------|
| USA | Defense, technology, trade |
| Russia | Defense, nuclear energy |
| EU | Trade, climate, technology |
| Japan | Infrastructure, defense |
| Israel | Defense, agriculture |

**3. Neighborhood First**
- SAARC engagement
- Bilateral relations focus
- Connectivity projects
- But challenges with Pakistan, China

**4. Act East Policy (2014)**
- Replaced Look East (1992)
- ASEAN engagement
- East Asia economic ties
- Indo-Pacific strategy

**5. Extended Neighborhood**
- Middle East (energy, diaspora)
- Central Asia (connectivity)
- Africa (development partnership)

**6. Multilateral Engagement**
| Forum | India's Role |
|-------|-------------|
| BRICS | Founding member |
| SCO | Member since 2017 |
| G20 | Host in 2023 |
| Quad | Core member |
| UN | Seeking permanent UNSC seat |

#### India's Interests Pursued

1. **Security**: Counter-terrorism cooperation
2. **Economy**: Trade, investment, technology
3. **Diaspora**: Protection, engagement
4. **Global Role**: Leadership, rule-making

#### Challenges

1. China's rise and border tensions
2. Pakistan-sponsored terrorism
3. Balancing US-Russia ties
4. Climate commitments vs development

#### Conclusion
India has transformed into an active global player, pursuing national interests through flexible, multi-directional foreign policy while maintaining strategic autonomy.`,
      },
      {
        q: "Explain India's relations with China. Discuss areas of cooperation and conflict. (8 marks)",
        year: 2023,
        modelAnswer: `### India-China Relations

#### Introduction
India-China relations are characterized by both cooperation and conflict, often described as "Cooperation and Competition."

#### Historical Background

| Year | Event |
|------|-------|
| 1950 | India recognizes PRC |
| 1954 | Panchsheel Agreement |
| 1962 | India-China War |
| 1988 | Rajiv Gandhi visit, thaw begins |
| 2003 | Special Representatives dialogue |
| 2020 | Galwan Valley clash |

#### Areas of Conflict

**1. Border Dispute**
- 3,488 km Line of Actual Control (LAC)
- Aksai Chin (occupied by China)
- Arunachal Pradesh (claimed by China)
- Multiple standoffs (Doklam 2017, Galwan 2020)

**2. Tibet Issue**
- India hosts Dalai Lama
- Tibet recognized as part of China
- But irritant in relations

**3. Pakistan Factor**
- China supports Pakistan
- CPEC through PoK
- Blocks India's NSG membership

**4. Strategic Competition**
- Belt and Road Initiative (BRI) concerns
- Indian Ocean presence
- Nuclear supplier group
- UN Security Council seat

#### Areas of Cooperation

**1. Economic Relations**
- Trade: $130+ billion (one of largest)
- But huge trade deficit for India
- Investment opportunities

**2. Multilateral Forums**
| Forum | Cooperation |
|-------|-------------|
| BRICS | Economic issues |
| SCO | Security, connectivity |
| Climate | Paris Agreement |
| WTO | Developing country interests |

**3. Regional Stability**
- Confidence Building Measures
- Border talks (Special Representatives)
- Military-to-military dialogue

#### India's Approach

1. **Firm on Sovereignty**: No compromise on borders
2. **Dialogue**: Diplomatic channels open
3. **Strategic Autonomy**: Not joining anti-China alliance
4. **Quad**: But engaging on Indo-Pacific
5. **Economic Measures**: Restrictions on Chinese apps, FDI

#### Conclusion
India-China relations remain complex, requiring careful management of differences while exploring cooperation opportunities. Resolving the border issue is key to stable long-term relations.`,
      },
    ],

    // ==================== TEXTBOOK EXERCISES - CHAPTER 6 ====================
    textbookExercises: {
      title: "Chapter 6 - Textbook Exercises with Answers",

      // Q.1 (A) MCQs
      mcqs: [
        {
          q: "The core of non-alignment was",
          options: [
            "Independent understanding of world affairs",
            "Participation in cold war",
            "Democratic socialism as policy",
            "Policy of regionalism",
          ],
          correct: 0,
          answer: "Independent understanding of world affairs",
          explanation:
            "The core of Non-Alignment was maintaining an independent foreign policy, not aligning with either USA or USSR during Cold War, and judging each international issue on its merits rather than following any bloc. India under Nehru pioneered this approach along with Yugoslavia, Egypt, Ghana, and Indonesia.",
        },
        {
          q: "Farakka Agreement about sharing of river waters is between India and",
          options: ["Bangladesh", "Pakistan", "China", "Nepal"],
          correct: 0,
          answer: "Bangladesh",
          explanation:
            "The Farakka Agreement (1996) is a treaty between India and Bangladesh for sharing the waters of River Ganga at Farakka Barrage near the India-Bangladesh border. The 30-year treaty ensures equitable distribution of water, especially during lean season (January-May).",
        },
      ],

      // Q.1 (B) Identify incorrect pair
      incorrectPairs: [
        {
          pairs: [
            { item1: "NATO", item2: "Europe", correct: true },
            { item1: "ANZUS", item2: "Africa", correct: false },
            { item1: "SEATO", item2: "South East Asia", correct: true },
            { item1: "CENTO", item2: "West Asia", correct: true },
          ],
          incorrectPair: "ANZUS - Africa",
          correction:
            "ANZUS - Pacific / Oceania (Australia, New Zealand, United States)",
          explanation:
            "ANZUS is a security treaty between Australia, New Zealand, and the United States (1951) for the Pacific region, NOT Africa. The name comes from Australia-New Zealand-United States. It is a collective security agreement for the Pacific/Oceania region.",
        },
      ],

      // Q.2 / Q.3 True/False with Reasons
      trueFalse: [
        {
          statement: "Myanmar has been a traditional friend of India.",
          answer: true,
          reason:
            "**TRUE**\n\n**Reasons:**\n\n1. **Historical Ties**:\n   - Shared Buddhist heritage\n   - Part of British India until 1937\n   - Cultural and civilizational links\n   - Common border (1,643 km)\n\n2. **Diplomatic Relations**:\n   - India recognized Myanmar's independence (1948)\n   - Maintained relations even during military rule\n   - 'Act East Policy' prioritizes Myanmar\n\n3. **Cooperation Areas**:\n\n| Area | Examples |\n|------|----------|\n| Connectivity | India-Myanmar-Thailand Highway, Kaladan Project |\n| Security | Counter-insurgency cooperation (NE India) |\n| Economic | Bilateral trade, investment |\n| Energy | Oil and gas cooperation |\n| Development | India's development assistance |\n\n4. **Strategic Importance**:\n   - Gateway to Southeast Asia\n   - Counters China's influence\n   - BIMSTEC partner\n\n5. **Recent Developments**:\n   - India balanced approach after 2021 military coup\n   - Continued humanitarian assistance\n   - Maintaining people-to-people ties\n\n**Conclusion**: Myanmar remains strategically important for India's Act East Policy and neighborhood diplomacy.",
        },
        {
          statement:
            "In changing world order of 1990s, the issue of terrorism has been dominant.",
          answer: true,
          reason:
            "**TRUE**\n\n**Reasons:**\n\n1. **Post-Cold War Context**:\n   - End of bipolar world (1991)\n   - New security challenges emerged\n   - Non-state actors became major threat\n\n2. **Rise of Terrorism in 1990s**:\n   - Afghanistan became terror hub after Soviet withdrawal\n   - Al-Qaeda formed (1988), grew in 1990s\n   - Taliban took over Afghanistan (1996)\n   - Kashmir militancy intensified\n\n3. **Major Terror Incidents (1990s)**:\n\n| Year | Incident |\n|------|----------|\n| 1993 | World Trade Center bombing (first) |\n| 1993 | Mumbai serial blasts |\n| 1998 | US Embassy bombings (Kenya, Tanzania) |\n| 1999 | IC-814 hijacking (Kandahar) |\n\n4. **Global Response**:\n   - UN resolutions against terrorism\n   - Counter-terrorism cooperation increased\n   - Intelligence sharing mechanisms\n\n5. **Culmination - 9/11 (2001)**:\n   - Changed global security paradigm\n   - 'War on Terror' declared\n   - Terrorism became THE dominant issue\n\n**Conclusion**: Terrorism emerged as dominant security challenge in 1990s, fundamentally reshaping international relations.",
        },
        {
          statement:
            "The Sagarmala project is a comprehensive road connectivity plan.",
          answer: false,
          reason:
            "**FALSE**\n\n**Reasons:**\n\n1. **Actual Purpose**: Sagarmala is a PORT-LED development project, NOT a road connectivity plan.\n\n2. **What is Sagarmala?**:\n   - Launched: 2015 by Ministry of Shipping\n   - Objective: Port modernization and port-led industrialization\n   - Name: 'Sagarmala' means 'String of the Sea'\n\n3. **Components of Sagarmala**:\n   - Port Modernization (upgrading existing ports)\n   - Port Connectivity (roads, rail to ports)\n   - Port-led Industrialization (SEZs near ports)\n   - Coastal Community Development\n\n4. **Key Features**:\n   - Covers 12 major ports\n   - 200+ minor ports included\n   - Investment of ₹8 lakh crore planned\n   - 415 projects identified\n\n5. **Road Connectivity Project is Different**:\n   - Bharatmala: Comprehensive road connectivity plan\n   - Sagarmala: Port and coastal development\n\n6. **Goals of Sagarmala**:\n   - Reduce logistics cost\n   - Boost coastal shipping\n   - Create employment in coastal areas\n   - Increase port capacity\n\n**Conclusion**: Sagarmala is about PORT development and coastal connectivity, while Bharatmala is the road connectivity project.",
        },
      ],

      // Extra Question by Vrunda Mam
      extraQuestions: [
        {
          source: "Vrunda Mam - Extra Question",
          question: "Explain the principles of Indian Foreign Policy",
          marks: 5,
          modelAnswer:
            "**Principles of Indian Foreign Policy:**\n\n**Introduction**: India's foreign policy has been guided by certain core principles since independence, largely shaped by Jawaharlal Nehru.\n\n**(i) Non-Alignment (NAM)**:\n- Not aligning with any military bloc (USA or USSR during Cold War)\n- Independent foreign policy decisions\n- Judging each issue on merit\n- India was founding member of NAM (1961, Belgrade)\n- Still relevant: 'Strategic Autonomy' today\n\n**(ii) Non-Intervention**:\n- Not interfering in internal affairs of other countries\n- Respecting sovereignty of all nations\n- Opposing external interference in any country\n- Based on Westphalian principle of sovereignty\n- India opposed interventions in Iraq, Libya\n\n**(iii) Territorial Integrity**:\n- Respecting boundaries of all nations\n- Not supporting separatist movements\n- Defending own territorial integrity firmly\n- No compromise on sovereignty issues\n- Example: Firm stand on Kashmir, Arunachal\n\n**(iv) Belief in Peaceful Coexistence**:\n- Panchsheel (Five Principles) - 1954\n  1. Mutual respect for territorial integrity\n  2. Mutual non-aggression\n  3. Mutual non-interference\n  4. Equality and mutual benefit\n  5. Peaceful coexistence\n- Preference for dialogue over war\n- Diplomatic resolution of disputes\n\n**(v) Active Participation in International Forums**:\n- Strong support for United Nations\n- Largest contributor to UN peacekeeping\n- Active in multilateral forums (BRICS, SCO, G20)\n- Voice for Global South\n- Seeking permanent UNSC seat\n- Climate change leadership (ISA - International Solar Alliance)\n\n**Conclusion**: These principles have provided continuity to India's foreign policy while adapting to changing global circumstances.",
        },
      ],

      // Q.3 Express Opinion
      opinionQuestions: [
        {
          topic: "India's role in the Indian Ocean",
          modelAnswer:
            "**Opinion: India's Role in the Indian Ocean**\n\n**Statement**: India has a vital and growing role in the Indian Ocean region as a net security provider and regional leader.\n\n**India's Significance**:\n- 7,500+ km coastline\n- Located at center of Indian Ocean\n- 90% of trade by sea\n- Strategic location controlling sea lanes\n\n**India's Role:**\n\n**1. Security Provider**:\n- Indian Navy patrols IOR (Indian Ocean Region)\n- Anti-piracy operations (Gulf of Aden)\n- Humanitarian assistance (2004 Tsunami, COVID)\n- SAGAR vision: Security and Growth for All in the Region\n\n**2. Economic Hub**:\n- Sagarmala port development\n- Blue Economy initiatives\n- Fishing and marine resources\n- Seabed mining potential\n\n**3. Connectivity Projects**:\n| Project | Purpose |\n|---------|----------|\n| Chabahar Port (Iran) | Access to Afghanistan, Central Asia |\n| Sittwe Port (Myanmar) | Northeast connectivity |\n| Colombo Port | Transshipment hub |\n\n**4. Multilateral Engagement**:\n- Indian Ocean Rim Association (IORA) - active member\n- Indian Ocean Naval Symposium (IONS) - founder\n- QUAD - Indo-Pacific security\n- Bilateral naval exercises (Malabar, MILAN)\n\n**5. Countering China**:\n- China's 'String of Pearls' strategy\n- India's 'Necklace of Diamonds' response\n- Monitoring Chinese submarines\n- Andaman & Nicobar Command\n\n**Challenges**:\n- Limited naval capacity\n- China's growing presence\n- Piracy and non-traditional threats\n- Island nations' diverse interests\n\n**Conclusion**: India must enhance its naval capabilities and diplomatic engagement to fulfill its potential as the leading power in the Indian Ocean - its 'natural area of interest'.",
        },
      ],

      // Q.4 Short Answers (80-100 words) - 5 marks each
      shortAnswers: [
        {
          question: "Write a note on India's relations with Africa.",
          marks: 5,
          modelAnswer:
            "**India's Relations with Africa:**\n\n**Historical Ties**:\n- Ancient trade links (East African coast)\n- Shared colonial experience\n- Gandhi's formative years in South Africa\n- NAM partnership during Cold War\n- India supported anti-apartheid movement\n\n**Current Relations**:\n\n**1. India-Africa Forum Summit (IAFS)**:\n- Platform for India-Africa cooperation\n- Three summits held (2008, 2011, 2015)\n- Comprehensive partnership\n\n**2. Economic Engagement**:\n\n| Aspect | Details |\n|--------|----------|\n| Trade | $98 billion (2023) |\n| Investment | $75+ billion Indian investment |\n| LOCs | $12 billion Lines of Credit |\n| Sectors | Pharma, IT, agriculture, mining |\n\n**3. Development Partnership**:\n- Pan-Africa e-Network (telemedicine, education)\n- Capacity building (ITEC scholarships)\n- 189 projects in 42 African countries\n- COVID vaccine supply (Vaccine Maitri)\n\n**4. Strategic Interests**:\n- 54 African votes in UN\n- Natural resources (oil, minerals)\n- Counter China's influence\n- Indian diaspora (2.5+ million)\n\n**5. Key Partners**:\n- South Africa (BRICS, IBSA)\n- Ethiopia, Kenya, Tanzania, Mauritius, Nigeria\n\n**Conclusion**: Africa is crucial for India's global aspirations, and India offers a development partnership model different from China's debt-trap approach.",
        },
        {
          question: "Discuss briefly India-China relations.",
          marks: 5,
          modelAnswer:
            "**India-China Relations:**\n\n**Historical Background**:\n- 'Hindi-Chini Bhai Bhai' (1950s)\n- Panchsheel Agreement (1954)\n- 1962 War - major setback\n- Relations normalized gradually (1988 Rajiv Gandhi visit)\n\n**Areas of Conflict**:\n\n| Issue | Details |\n|-------|----------|\n| Border Dispute | 3,488 km LAC, Aksai Chin, Arunachal Pradesh |\n| Recent Clashes | Doklam (2017), Galwan (2020) |\n| Tibet | Dalai Lama in India irritates China |\n| Pakistan | China-Pakistan axis, CPEC through PoK |\n| Strategic | BRI, NSG membership block, UNSC seat |\n\n**Areas of Cooperation**:\n- Trade: $135+ billion (but huge deficit for India)\n- BRICS, SCO membership\n- Climate change negotiations\n- WTO - developing country interests\n\n**Recent Developments**:\n- Galwan clash (2020) - 20 Indian soldiers martyred\n- Disengagement ongoing\n- India banned Chinese apps\n- FDI restrictions on China\n\n**India's Approach**:\n1. Firm on sovereignty - no compromise on borders\n2. Diplomatic dialogue continues\n3. Strategic autonomy maintained\n4. Quad engagement for Indo-Pacific balance\n5. Economic diversification from China\n\n**Conclusion**: India-China relations are complex - 'cooperation and competition' coexist. Border resolution is key to normalizing ties.",
        },
      ],

      // Q.5 Long Answer (150-200 words) - 10 marks
      longAnswers: [
        {
          question:
            "Explain the factors influencing Indian Foreign Policy: (a) Geography (b) History (c) International System/Economy (d) Polity",
          marks: 10,
          modelAnswer:
            "### Factors Influencing Indian Foreign Policy\n\n#### Introduction\nForeign policy is the strategy a country uses to deal with other nations. India's foreign policy is shaped by multiple factors including geography, history, international system, economy, and domestic politics.\n\n#### (a) Geography\n\n**Location and Significance**:\n- South Asian subcontinent - dominant position\n- 7,516 km coastline along Indian Ocean\n- Shares borders with 7 countries\n- Strategic location between East and West\n\n**Geographic Influences**:\n\n| Geographic Factor | Policy Impact |\n|------------------|----------------|\n| Himalayas | Border security with China, Nepal |\n| Indian Ocean | Naval power, SAGAR vision, maritime security |\n| Land borders | Neighborhood First policy |\n| Central location | Bridge between regions |\n\n**Specific Examples**:\n- **Pakistan border**: Kashmir dispute, security focus\n- **China border**: LAC management, buffer states (Nepal, Bhutan)\n- **Bangladesh**: River water sharing, migration issues\n- **Indian Ocean**: Sea lane protection, anti-piracy\n- **Strategic passages**: Malacca Strait dependency for trade\n\n**Geostrategic Priorities**:\n1. Securing borders (continental)\n2. Controlling Indian Ocean (maritime)\n3. Ensuring energy security (Gulf region)\n4. Connectivity to Central Asia (landlocked challenge)\n\n#### (b) History\n\n**Colonial Legacy**:\n- British rule shaped modern borders\n- Partition trauma - Pakistan relations\n- Commonwealth membership\n- English language advantage\n\n**Historical Influences**:\n\n| Historical Event | Policy Impact |\n|-----------------|----------------|\n| Partition (1947) | Pakistan hostility, Kashmir issue |\n| 1962 War | China distrust, military modernization |\n| 1971 War | Regional dominance, Bangladesh creation |\n| Cold War | Non-alignment policy |\n| 1991 Soviet collapse | Economic reforms, Look East |\n\n**Freedom Movement Legacy**:\n- Gandhian principles of peace and non-violence\n- Anti-colonial solidarity with Global South\n- Support for independence movements\n- NAM leadership with newly independent nations\n\n**Cultural Diplomacy**:\n- Buddhist heritage links (East Asia, Southeast Asia)\n- Hindu cultural ties (Nepal, Bali, Mauritius)\n- Indian diaspora as soft power\n\n#### (c) International System and Economy\n\n**Global Order Impact**:\n\n| Era | International System | India's Response |\n|-----|---------------------|------------------|\n| Cold War (1947-1991) | Bipolar (USA vs USSR) | Non-Alignment |\n| Post-Cold War (1991-2008) | Unipolar (USA) | Economic reforms, US engagement |\n| Current | Multipolar emerging | Multi-alignment, strategic autonomy |\n\n**Economic Factors**:\n\n**1. Trade Dependencies**:\n- Energy imports (80% crude oil from abroad)\n- Gulf region crucial (oil + 9 million diaspora)\n- Trade partners determine relations (USA, EU, China)\n\n**2. Economic Diplomacy**:\n- FDI attraction shapes policy\n- WTO membership and negotiations\n- Regional trade agreements (SAFTA, bilateral FTAs)\n\n**3. Development Needs**:\n- Technology access (nuclear deal with USA)\n- Infrastructure investment needs\n- Skill and investment partnerships\n\n**4. Economic Instruments**:\n- Lines of Credit to Africa, neighbors\n- Development assistance as soft power\n- Economic sanctions as foreign policy tool\n\n**International Organizations**:\n- UN: Peacekeeping, UNSC seat aspiration\n- BRICS, SCO, G20: Multipolar platforms\n- IMF, World Bank: Quota and voice reforms\n\n#### (d) Polity (Domestic Politics)\n\n**Constitutional Framework**:\n- Executive (PM, Cabinet) drives foreign policy\n- Parliament's role limited but influential\n- President's ceremonial role in treaties\n- MEA (Ministry of External Affairs) implements\n\n**Domestic Political Factors**:\n\n| Factor | Influence on Foreign Policy |\n|--------|-----------------------------|\n| Public opinion | Pakistan policy, nationalism |\n| Elections | Hard stance before elections |\n| Coalition politics | Regional parties' influence |\n| Diaspora | Relations with USA, Gulf |\n| Media | Public pressure on government |\n\n**Interest Groups**:\n- Business lobbies (trade policy)\n- Ethnic groups (Tamil Nadu on Sri Lanka)\n- Strategic community (think tanks)\n- Civil society (human rights, environment)\n\n**Political Leadership**:\n- PM's vision shapes policy (Nehru's NAM, Modi's Act East)\n- MEA execution and expertise\n- NSA's role in security matters\n\n**Federal Concerns**:\n- Border states' interests (West Bengal-Bangladesh, Tamil Nadu-Sri Lanka)\n- Water disputes (Punjab-Pakistan, West Bengal-Bangladesh)\n- Migration issues (Northeast-Bangladesh/Myanmar)\n\n**Continuity and Change**:\n- Core principles remain (sovereignty, territorial integrity)\n- Tactics change with governments\n- Bipartisan consensus on major issues (China, Pakistan)\n\n#### Interplay of Factors\n\nThese factors don't work in isolation:\n\n- **Geography + History** → Pakistan policy (Partition + shared border)\n- **Economy + International System** → US nuclear deal (energy needs + unipolar moment)\n- **Polity + Geography** → Tamil Nadu influence on Sri Lanka policy\n- **History + Economy** → Relations with UK, Commonwealth\n\n#### Conclusion\n\nIndian foreign policy is a product of multiple interacting factors. Geography provides the constant backdrop, history shapes perceptions and relationships, the international system sets the context, the economy creates dependencies and opportunities, and domestic politics influences priorities and approach. A successful foreign policy must balance all these factors while advancing national interests.\n\nIndia's transition from 'non-alignment' to 'multi-alignment' reflects adaptation to changing international system while maintaining core principles established at independence.",
        },
      ],
    },
  },

  // ==================== MIND FACES EXAM STRATEGY (2026) ====================
  mindFacesTips: {
    source: "Mind Faces (MF) © 2026",
    note: "Follow this guide for BEST MARKS in Political Science Board Exam!",

    paperPattern: {
      totalMarks: 80,
      duration: "3 hours",
      questions: [
        { q: "Q.1", marks: 20, breakdown: "A(5)+B(3)+C(4)+D(4)+E(4)" },
        { q: "Q.2", marks: 9, breakdown: "A(4) Concept Map + B(5) Map Q" },
        { q: "Q.3", marks: 10, breakdown: "Any 5/7 × 2m (T/F + Reason)" },
        { q: "Q.4", marks: 9, breakdown: "Any 3/5 × 3m (Co-relation)" },
        {
          q: "Q.5",
          marks: 12,
          breakdown: "Any 3/5 × 4m (Opinion 25-30 words)",
        },
        { q: "Q.6", marks: 10, breakdown: "Any 2/4 × 5m (80-100 words)" },
        { q: "Q.7", marks: 10, breakdown: "Any 1/2 × 10m (150-200 words)" },
      ],
    },

    questionPatterns: [
      {
        question: "Q.1(A)",
        type: "MCQ / Fill in blanks",
        marks: "5 marks (5×1)",
        tip: "Choose correct alternative. Read all options carefully before answering.",
        icon: "📝",
        priority: "high",
      },
      {
        question: "Q.1(B)",
        type: "Identify incorrect pair & correct it",
        marks: "3 marks (3×1)",
        tip: "Look for wrong matches in given pairs. Write the correct pairing.",
        icon: "🔄",
        priority: "high",
      },
      {
        question: "Q.1(C)",
        type: "Complete sentence (MCQ type)",
        marks: "4 marks (4×1)",
        tip: "Choose appropriate option to complete the sentence.",
        icon: "✏️",
        priority: "high",
      },
      {
        question: "Q.1(D)",
        type: "State appropriate concept",
        marks: "4 marks (4×1)",
        tip: "Identify the concept from given statement. Learn definitions well!",
        icon: "💡",
        priority: "high",
      },
      {
        question: "Q.1(E)",
        type: "Find odd man out",
        marks: "4 marks (4×1)",
        tip: "Find which item doesn't belong to the group. Give reason.",
        icon: "🎯",
        priority: "high",
      },
      {
        question: "Q.2(A)",
        type: "Complete Concept Map",
        marks: "4 marks",
        tip: "Will ONLY be asked from Chapter 1, 4, 5. Practice drawing concept maps!",
        chapters: [1, 4, 5],
        icon: "🗺️",
        priority: "high",
      },
      {
        question: "Q.2(B)",
        type: "Map Observation Question",
        marks: "5 marks",
        tip: "Activity-based question. Observe the given Map and answer questions.",
        icon: "🌍",
        priority: "high",
      },
      {
        question: "Q.3",
        type: "True/False with Reason",
        marks: "10 marks (Any 5/7 × 2m)",
        tip: "Skip Chapter 2 for this question. 1 mark for T/F + 1 mark for correct reason. Do from Textual Exercises!",
        skipChapters: [2],
        icon: "✓✗",
        priority: "high",
      },
      {
        question: "Q.4",
        type: "Explain Co-relation",
        marks: "9 marks (Any 3/5 × 3m)",
        tip: "Leave Chapter 3 & 5 for this question. Show connection between two concepts. Refer to Textual Exercises only!",
        skipChapters: [3, 5],
        icon: "🔗",
        priority: "high",
      },
      {
        question: "Q.5",
        type: "Express Opinion (25-30 words)",
        marks: "12 marks (Any 3/5 × 4m)",
        tip: "Skip Chapter 4 for this question. State your opinion clearly with 2-3 supporting points.",
        skipChapters: [4],
        icon: "💬",
        priority: "high",
      },
      {
        question: "Q.6",
        type: "Answer in 80-100 words",
        marks: "10 marks (Any 2/4 × 5m)",
        tip: "Leave any 1 Chapter of your choice. Focus on probable questions! Write intro + 4-5 points.",
        icon: "📖",
        priority: "high",
      },
      {
        question: "Q.7",
        type: "Detailed Answer (150-200 words)",
        marks: "10 marks (Any 1/2 × 10m)",
        tip: "Will ONLY be from Chapters 1, 2, 3, 5, 6. Write intro + 6-8 detailed points + conclusion. Use headings!",
        chapters: [1, 2, 3, 5, 6],
        icon: "📚",
        priority: "high",
      },
    ],

    probableQuestions80to100: [
      {
        chapter: 2,
        chapterName: "Globalisation",
        question:
          "Discuss the Role of the state towards achieving objectives of Economic Development and Social Change.",
        marks: "5 marks (80-100 words)",
        modelAnswer: `**Role of State in Economic Development & Social Change:**

**1. Economic Development:**
- **Planning & Policy**: Creating 5-year plans, economic policies (LPG reforms)
- **Infrastructure**: Building roads, railways, ports, digital infrastructure
- **Investment**: Public sector enterprises, attracting FDI
- **Regulation**: Controlling monopolies, ensuring fair competition
- **Financial Inclusion**: Banking services, Jan Dhan Yojana

**2. Social Change:**
- **Education**: Establishing schools, universities, skill programs
- **Healthcare**: Public hospitals, insurance schemes (Ayushman Bharat)
- **Social Welfare**: Reservations, subsidies, MGNREGA
- **Legal Reforms**: Women's rights, child protection laws
- **Awareness**: Campaigns against social evils

**3. Balancing Growth & Equity:**
- Inclusive growth policies
- Poverty alleviation programs
- Rural development initiatives

**Conclusion:** The state acts as facilitator, regulator, and protector to ensure both economic progress and social justice.`,
      },
      {
        chapter: 3,
        chapterName: "Humanitarian Issues",
        question: "Explain various measures for Empowerment of Women in India.",
        marks: "5 marks (80-100 words)",
        modelAnswer: `**Measures for Women Empowerment in India:**

**1. Constitutional Provisions:**
- Article 14: Equality before law
- Article 15(3): Special provisions for women
- Article 39: Equal pay for equal work
- 73rd & 74th Amendments: 33% reservation in local bodies

**2. Legal Measures:**
- Dowry Prohibition Act (1961)
- Protection of Women from Domestic Violence Act (2005)
- Sexual Harassment at Workplace Act (2013)
- Maternity Benefit Act (2017)

**3. Government Schemes:**
- Beti Bachao Beti Padhao
- Sukanya Samriddhi Yojana
- Mahila Shakti Kendra
- One Stop Centre (Sakhi)
- MUDRA loans for women entrepreneurs

**4. Educational Initiatives:**
- Free education up to certain levels
- Scholarship programs for girls
- Women's universities and colleges

**5. Economic Empowerment:**
- Self-Help Groups (SHGs)
- Women's entrepreneurship programs
- Skill development initiatives

**Conclusion:** Multi-pronged approach combining legal, social, and economic measures is essential for true women empowerment.`,
      },
      {
        chapter: 3,
        chapterName: "Humanitarian Issues",
        question: "Explain Green Revolution in detail.",
        marks: "80-100 words",
        modelAnswer: `**Green Revolution in India:**

**Introduction:** The Green Revolution (1960s-70s) was an agricultural transformation that made India self-sufficient in food production.

**Key Features:**
- **High Yielding Variety (HYV) Seeds**: Wheat (Norman Borlaug), Rice
- **Irrigation**: Expansion of canals, tubewells
- **Chemical Inputs**: Fertilizers, pesticides
- **Mechanization**: Tractors, harvesters

**Father:** M.S. Swaminathan (India), Norman Borlaug (Global)

**Impact:**
| Positive | Negative |
|----------|----------|
| Food self-sufficiency | Regional disparities (Punjab vs. Eastern states) |
| Reduced imports | Environmental damage |
| Farmer income rise | Groundwater depletion |
| Industrial growth | Loss of soil fertility |
| Economic growth | Small farmer marginalization |

**Second Green Revolution:**
- Focus on Eastern India
- Pulses and oilseeds
- Sustainable practices

**Conclusion:** While Green Revolution achieved food security, sustainable agriculture is now the focus.`,
      },
      {
        chapter: 4,
        chapterName: "Challenges in Indian Politics",
        question: "Explain cross-border terrorism in Jammu & Kashmir.",
        marks: "80-100 words",
        modelAnswer: `**Cross-Border Terrorism in Jammu & Kashmir:**

**Definition:** Cross-border terrorism refers to terrorist activities planned, trained, and funded from across the border (Pakistan) but executed in India.

**Background:**
- Started after 1989 militancy
- Pakistan's support to militant groups
- Kashmir claimed by Pakistan

**Major Terrorist Groups:**
- Lashkar-e-Taiba (LeT)
- Jaish-e-Mohammed (JeM)
- Hizbul Mujahideen
- Al-Badr

**Major Attacks:**
| Year | Attack |
|------|--------|
| 2001 | Parliament attack |
| 2008 | Mumbai attacks (26/11) |
| 2016 | Uri attack |
| 2019 | Pulwama attack |

**India's Response:**
- **Military**: Surgical strikes (2016), Balakot airstrike (2019)
- **Diplomatic**: Isolating Pakistan internationally
- **Security**: Border fencing, anti-infiltration grid
- **Political**: Article 370 abrogation (2019)

**Impact:**
- Loss of lives (civilians, soldiers)
- Economic damage to Kashmir
- Hindrance to development
- Regional instability

**Conclusion:** Cross-border terrorism remains a serious challenge requiring comprehensive approach including international pressure on Pakistan.`,
      },
      {
        chapter: 4,
        chapterName: "Challenges in Indian Politics",
        question: "What is left-wing extremism in India?",
        marks: "80-100 words",
        modelAnswer: `**Left-Wing Extremism (LWE) / Naxalism in India:**

**Definition:** Armed revolutionary movement based on Maoist ideology, seeking to overthrow the state through violent means.

**Origin:**
- Started in Naxalbari, West Bengal (1967)
- Named "Naxalism" after the village
- Inspired by Mao Zedong's ideology

**Ideology:**
- Armed struggle against exploitation
- Support for peasants and tribals
- Overthrow of "bourgeois" state
- Establish communist rule

**Affected Areas (Red Corridor):**
- Chhattisgarh, Jharkhand, Odisha
- Bihar, Maharashtra, Andhra Pradesh
- Parts of West Bengal, Madhya Pradesh

**Major Groups:**
- CPI (Maoist) - banned
- People's Liberation Guerrilla Army (PLGA)

**Causes:**
| Social | Economic | Governance |
|--------|----------|------------|
| Tribal exploitation | Land alienation | Poor development |
| Caste discrimination | Forest rights denial | Absence of state services |
| Social inequality | Unemployment | Police excesses |

**Government Response:**
- **Security**: CRPF deployment, anti-Naxal operations
- **Development**: Integrated Action Plan (IAP)
- **Rights**: Forest Rights Act (2006)
- **Surrender Policy**: Rehabilitation of surrendered Naxals

**Conclusion:** Addressing root causes like development deficit and tribal rights is crucial alongside security measures.`,
      },
    ],

    chapterStrategy: [
      {
        chapter: 1,
        name: "World since 1991",
        conceptMap: true,
        trueFalse: true,
        coRelation: true,
        opinion: true,
        longAnswer: true,
        tip: "Focus on Cold War, USSR collapse, Unipolarity vs Multipolarity",
      },
      {
        chapter: 2,
        name: "Globalisation",
        conceptMap: false,
        trueFalse: false,
        coRelation: true,
        opinion: true,
        longAnswer: true,
        tip: "SKIP for True/False. Important for long answers on state's role.",
      },
      {
        chapter: 3,
        name: "Humanitarian Issues",
        conceptMap: false,
        trueFalse: true,
        coRelation: false,
        opinion: true,
        longAnswer: true,
        tip: "SKIP for Co-relation. Focus on Women Empowerment, Green Revolution.",
      },
      {
        chapter: 4,
        name: "Challenges in Indian Politics",
        conceptMap: true,
        trueFalse: true,
        coRelation: true,
        opinion: false,
        longAnswer: false,
        tip: "SKIP for Opinion & Long Answer. Focus on Terrorism, Naxalism for 80-100 words.",
      },
      {
        chapter: 5,
        name: "Good Governance",
        conceptMap: true,
        trueFalse: true,
        coRelation: false,
        opinion: true,
        longAnswer: true,
        tip: "SKIP for Co-relation. Important for Concept Map.",
      },
      {
        chapter: 6,
        name: "India and World",
        conceptMap: false,
        trueFalse: true,
        coRelation: true,
        opinion: true,
        longAnswer: true,
        tip: "All sections applicable. Focus on India's foreign policy, relations with neighbors.",
      },
    ],
  },

  // ==================== LAST MINUTE KEY POINTS ====================
  lastMinutePoints: {
    importantDates: [
      "1947 - India-Pakistan Independence",
      "1954 - Panchsheel Agreement",
      "1961 - NAM founded (Belgrade)",
      "1962 - India-China War",
      "1971 - Bangladesh Liberation War",
      "1985 - SAARC founded",
      "1989 - Berlin Wall falls",
      "1991 - USSR collapses, LPG reforms in India",
      "1992 - Look East Policy begins",
      "1995 - WTO established",
      "1999 - Kargil Conflict",
      "2001 - 9/11 attacks",
      "2005 - RTI Act passed",
      "2009 - BRIC formed (BRICS 2010)",
      "2013 - Lokpal Act passed",
      "2014 - Act East Policy",
      "2023 - G20 Summit in India",
    ],

    importantPersons: [
      "Mikhail Gorbachev - Last USSR leader, Glasnost/Perestroika",
      "Boris Yeltsin - First Russian President",
      "George H.W. Bush - New World Order speech",
      "Francis Fukuyama - End of History thesis",
      "Samuel Huntington - Clash of Civilizations",
      "Jawaharlal Nehru - Panchsheel, Non-Alignment",
      "Manmohan Singh - 1991 LPG reforms",
    ],

    importantOrganizations: [
      "UN (1945) - International peace and security",
      "NATO (1949) - Western military alliance",
      "Warsaw Pact (1955-1991) - Soviet bloc alliance",
      "NAM (1961) - Non-aligned countries",
      "SAARC (1985) - South Asian cooperation",
      "WTO (1995) - International trade",
      "EU (1992) - European integration",
      "BRICS (2009) - Emerging economies",
      "SCO (2001) - Eurasian cooperation",
      "Quad (2007/2017) - Indo-Pacific security",
      "G20 (1999) - Major economies",
    ],

    fullForms: [
      "USSR - Union of Soviet Socialist Republics",
      "NATO - North Atlantic Treaty Organization",
      "EU - European Union",
      "ASEAN - Association of Southeast Asian Nations",
      "SAARC - South Asian Association for Regional Cooperation",
      "BRICS - Brazil, Russia, India, China, South Africa",
      "NAM - Non-Aligned Movement",
      "SCO - Shanghai Cooperation Organisation",
      "WTO - World Trade Organization",
      "IMF - International Monetary Fund",
      "FDI - Foreign Direct Investment",
      "MNC - Multinational Corporation",
      "BPO - Business Process Outsourcing",
      "RTI - Right to Information",
      "UDHR - Universal Declaration of Human Rights",
      "UNHCR - United Nations High Commissioner for Refugees",
      "LPG - Liberalisation, Privatisation, Globalisation",
    ],

    examTips: [
      "1-mark MCQ: Read all options carefully",
      "4-mark short: Definition + 3-4 points + example",
      "8-mark long: Introduction + Body (5-6 points with subheadings) + Conclusion",
      "Use tables for distinguish between questions",
      "Underline key terms in answers",
      "Time management: 25 min for Q1, 15+15 for Q2-Q3, 35 for Q4, 40 for Q5, 20 for Q6",
      "Include current examples (G20, Ukraine war, etc.)",
    ],
  },

  // ==================== TEXTBOOK BACK EXERCISES ====================
  textbookExercises: {
    chapter1: {
      title: "Chapter 1: The World Since 1991",
      exercises: [
        {
          type: "concept",
          q: "State the appropriate concept: When a state influences other states without the use of military force.",
          answer: "Soft Power",
          marks: 1,
        },
        {
          type: "concept",
          q: "State the appropriate concept: A state with a leading position in international politics with abilities to influence global politics and fulfill its own interest.",
          answer: "Superpower",
          marks: 1,
        },
        {
          type: "conceptMap",
          q: "Complete the concept map: BIMSTEC Countries",
          answer:
            "India, Bangladesh, Myanmar, Sri Lanka, Thailand, Nepal, Bhutan",
          marks: 4,
        },
        {
          type: "conceptMap",
          q: "Complete the concept map: Shanghai Cooperation Organisation (Founders)",
          answer:
            "China, Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Uzbekistan",
          marks: 4,
        },
        {
          type: "map",
          q: "Name any four countries in the Schengen area.",
          answer:
            "Germany, France, Italy, Spain, Netherlands, Belgium, Austria, Portugal, Greece, Poland (any 4)",
          marks: 2,
        },
        {
          type: "map",
          q: "Name any two non-European Union countries within Schengen area.",
          answer: "Switzerland, Norway, Iceland, Liechtenstein (any 2)",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "SAARC is important for trade in South Asia.",
          answer:
            "TRUE. SAARC promotes economic cooperation, preferential trading arrangement (SAFTA), reduces tariffs, and enhances regional connectivity among member nations.",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "'Maastricht' Treaty was signed for the defence of Europe.",
          answer:
            "FALSE. The Maastricht Treaty (1992) was signed for European integration and creation of the European Union, not specifically for defence. It established common citizenship, single currency (Euro), and common foreign policy.",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "The decade of 1980s is seen as the golden age of humanitarian intervention.",
          answer:
            "FALSE. The 1990s is considered the golden age of humanitarian intervention, not the 1980s. After the Cold War, interventions in Somalia, Bosnia, Kosovo, and East Timor occurred in the 1990s.",
          marks: 2,
        },
        {
          type: "opinion",
          q: "Express your opinion on: Humanitarian intervention",
          answer:
            "Humanitarian intervention refers to military action by states or international organizations to protect human rights. Arguments FOR: Responsibility to Protect (R2P), prevent genocide/ethnic cleansing. Arguments AGAINST: Violation of sovereignty, selective application, can be misused. My Opinion: Justified only with UN authorization and as last resort to prevent mass atrocities.",
          marks: 4,
        },
        {
          type: "opinion",
          q: "Express your opinion on: Regionalism in international politics",
          answer:
            "Regionalism involves cooperation among countries in a geographical region. Positive aspects: Economic integration (EU, ASEAN), collective security, bargaining power. Negative aspects: May exclude others, trade diversion. My Opinion: Regionalism is beneficial for development but should not become exclusive blocs that undermine global cooperation.",
          marks: 4,
        },
        {
          type: "shortAnswer",
          q: "Explain the term soft power with examples.",
          answer:
            "Soft Power (coined by Joseph Nye) is the ability to influence others through attraction rather than coercion. Sources: Culture (Hollywood, Bollywood), Values (democracy, human rights), Foreign policies (aid, diplomacy). Examples: American soft power through Hollywood films, music, universities. India's soft power through yoga, cuisine, IT sector, Bollywood. Japan's anime and technology. Unlike hard power (military force), soft power wins hearts and minds.",
          marks: 5,
        },
        {
          type: "longAnswer",
          q: "Discuss the European Union with help of given points: (a) History (b) European Commission (c) European Parliament (d) European Council (e) European Court of Justice",
          answer: `**European Union**

**(a) History:**
- 1951: European Coal and Steel Community (ECSC) formed
- 1957: Treaty of Rome - European Economic Community (EEC)
- 1992: Maastricht Treaty - EU formally established
- 2002: Euro currency introduced
- Currently 27 member states (after Brexit 2020)

**(b) European Commission:**
- Executive body of EU
- Proposes legislation
- Implements decisions
- Headquarters in Brussels
- One Commissioner from each member state

**(c) European Parliament:**
- Directly elected legislative body
- 705 members (MEPs)
- Co-decides laws with Council
- Approves EU budget
- Meets in Strasbourg and Brussels

**(d) European Council:**
- Heads of state/government
- Sets EU's overall political direction
- Summit meetings quarterly
- President serves 2.5 year term

**(e) European Court of Justice:**
- Supreme court of EU
- Located in Luxembourg
- Interprets EU law
- Ensures uniform application
- Rulings binding on all member states`,
          marks: 10,
        },
      ],
    },
    chapter2: {
      title: "Chapter 2: Evolving World Order",
      exercises: [
        {
          type: "mcq",
          q: "One of the important trends in the post 1989 international relations was:",
          options: [
            "End of bipolarity",
            "Rise of regionalism in Asia",
            "End of non-alignment",
            "Demand for new international economic order",
          ],
          correct: 0,
          answer:
            "End of bipolarity - After 1989 (fall of Berlin Wall), the bipolar world order ended, leading to US unipolarity.",
          marks: 1,
        },
        {
          type: "mcq",
          q: "The 'Maastricht' Treaty is with reference to:",
          options: [
            "United Nations Peace Keeping Force",
            "European Union",
            "American interventions in Kuwait",
            "Creation of BRICS",
          ],
          correct: 1,
          answer:
            "European Union - The Maastricht Treaty (1992) formally created the European Union.",
          marks: 1,
        },
      ],
    },
    chapter3: {
      title: "Chapter 3: Contemporary Issues",
      exercises: [
        {
          type: "mcq",
          q: "The Rio de Janeiro Earth Summit (1992) focused on:",
          options: [
            "Environment and development",
            "Nuclear non-proliferation",
            "International trade",
            "Gender issues",
          ],
          correct: 0,
          answer:
            "Environment and development - The Earth Summit addressed sustainable development and environmental protection.",
          marks: 1,
        },
        {
          type: "mcq",
          q: "Today the Indian approach to gender issues focuses on:",
          options: ["Education", "Welfare", "Development", "Empowerment"],
          correct: 3,
          answer:
            "Empowerment - Current approach focuses on women's empowerment through political participation, economic independence, and legal rights.",
          marks: 1,
        },
        {
          type: "concept",
          q: "Introduction of high yielding variety of seeds and irrigation methods.",
          answer: "Green Revolution",
          marks: 1,
        },
        {
          type: "concept",
          q: "Think tank of the Government of India, providing both directional and policy inputs.",
          answer: "NITI Aayog (National Institution for Transforming India)",
          marks: 1,
        },
        {
          type: "trueFalse",
          q: "Planning Commission was created to promote agriculture in India.",
          answer:
            "FALSE. Planning Commission (1950) was created for overall economic planning and development, not specifically for agriculture. It formulated Five Year Plans for balanced economic growth across all sectors.",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "National Commission for Women was set up to protect rights for women in India.",
          answer:
            "TRUE. NCW was established in 1992 under the National Commission for Women Act, 1990 to review constitutional and legal safeguards for women, recommend remedial measures, and address complaints related to women's rights.",
          marks: 2,
        },
        {
          type: "correlation",
          q: "Explain the co-relation between Women Empowerment and Sustainable Development.",
          answer:
            "Women empowerment and sustainable development are interconnected. Empowered women contribute to economic growth, educated women make better health/environmental choices, gender equality ensures balanced development, women's participation improves governance. SDG 5 (Gender Equality) is linked to all other SDGs.",
          marks: 3,
        },
        {
          type: "correlation",
          q: "Explain the co-relation between Poverty and Development.",
          answer:
            "Poverty and development are inversely related. Development reduces poverty through employment, education, and healthcare. Poverty hinders development by limiting human capital and productivity. Inclusive development is essential - growth must reach all sections. Poverty is both cause and consequence of underdevelopment.",
          marks: 3,
        },
        {
          type: "opinion",
          q: "There is a need to protect the environment.",
          answer:
            "Yes, environmental protection is crucial. Reasons: Climate change threatens survival, biodiversity loss affects ecosystem balance, pollution causes health problems, natural resources are depleting. Actions needed: Sustainable development, renewable energy, conservation, international cooperation (Paris Agreement). Future generations depend on our environmental stewardship today.",
          marks: 4,
        },
        {
          type: "shortAnswer",
          q: "What is the Green Revolution?",
          answer:
            "Green Revolution (1960s-70s) was agricultural transformation using: High Yielding Variety (HYV) seeds, modern irrigation (tube wells, canals), chemical fertilizers and pesticides, mechanization of farming. Results: Increased food production, self-sufficiency in food grains. Criticism: Benefited large farmers, regional disparities, environmental concerns.",
          marks: 5,
        },
        {
          type: "shortAnswer",
          q: "What is empowerment? Suggest measures for empowerment of women.",
          answer: `**Empowerment**: Process of gaining power and control over one's life, decisions, and resources.

**Measures for Women Empowerment:**
1. **Education**: Free and compulsory education, scholarships
2. **Economic**: Self-Help Groups, MUDRA loans, skill development
3. **Political**: Reservation in Panchayats/local bodies, encourage leadership
4. **Legal**: Strong laws against dowry, domestic violence, harassment
5. **Health**: Maternal health programs, nutrition schemes
6. **Social**: Awareness campaigns against discrimination, change mindsets`,
          marks: 5,
        },
        {
          type: "longAnswer",
          q: "Explain conditions of women in India: (a) Economic inequality (b) Trafficking exploration (c) Literacy rate (d) Political representation",
          answer: `**Conditions of Women in India**

**(a) Economic Inequality:**
- Wage gap: Women earn 20-30% less for same work
- Low workforce participation (22% vs 75% men)
- Unpaid domestic work not valued
- Limited access to credit and property
- Glass ceiling in corporate sector

**(b) Trafficking and Exploitation:**
- Human trafficking for forced labor, prostitution
- Immoral Traffic Prevention Act exists but enforcement weak
- Domestic violence affects 1 in 3 women
- Dowry deaths still occur despite laws
- Workplace harassment (Vishakha Guidelines, POSH Act)

**(c) Literacy Rate:**
- Female literacy: 65.46% (Census 2011)
- Gender gap: Male 82%, Female 65%
- Rural-urban divide significant
- Dropout rates higher for girls
- Government schemes: Beti Bachao Beti Padhao

**(d) Political Representation:**
- Parliament: Only 14% women MPs
- 33% reservation in Panchayats successful
- Women's Reservation Bill pending for Parliament
- More women in local governance
- Need for greater political empowerment`,
          marks: 10,
        },
      ],
    },
    chapter4: {
      title: "Chapter 4: India's Challenges",
      exercises: [
        {
          type: "mcq",
          q: "'Unity in diversity' is one of the important Indian value associated with:",
          options: [
            "Panchayati Raj",
            "National integration",
            "Concept of a nation",
            "Concept of 'melting pot'",
          ],
          correct: 1,
          answer:
            "National integration - Unity in diversity is the cornerstone of India's national integration, celebrating pluralism.",
          marks: 1,
        },
        {
          type: "mcq",
          q: "Charu Majumdar is associated with the:",
          options: [
            "JKLF",
            "Naxal movement",
            "Hizb-ul-Mujahideen",
            "Assam Oil Blockage",
          ],
          correct: 1,
          answer:
            "Naxal movement - Charu Majumdar was the founder and leader of the Naxalite movement that began in Naxalbari, West Bengal in 1967.",
          marks: 1,
        },
        {
          type: "incorrectPair",
          q: "Identify the incorrect pair: (i) Jawaharlal Nehru - Discovery of India (ii) Struggle for rights of Tamil - LTTE (iii) National Integration Council - Article 370",
          answer:
            "(iii) is incorrect. National Integration Council was formed in 1961 to address communal harmony, not related to Article 370. Article 370 gave special status to J&K. Correct pair: National Integration Council - Communal harmony.",
          marks: 1,
        },
        {
          type: "oddOne",
          q: "Find the odd one: Naxalism, Nationalism, Terrorism, Extremism",
          answer:
            "Nationalism - It is positive (love for nation), while Naxalism, Terrorism, and Extremism are negative/violent ideologies.",
          marks: 1,
        },
        {
          type: "concept",
          q: "Threat/use of violence with an intention to create panic in the society.",
          answer: "Terrorism",
          marks: 1,
        },
        {
          type: "concept",
          q: "Involvement of people in decision making process of state.",
          answer: "Participatory Democracy / Democratic Participation",
          marks: 1,
        },
        {
          type: "conceptMap",
          q: "Complete the concept map: Values of National Integration",
          answer:
            "Democracy, Secularism, Unity in Diversity, Tolerance, Fraternity, Social Justice, Equality",
          marks: 4,
        },
        {
          type: "trueFalse",
          q: "Democracy is required to establish national integration and social transformation.",
          answer:
            "TRUE. Democracy provides framework for peaceful resolution of conflicts, representation of diverse groups, rule of law, and inclusive governance essential for national integration and social change.",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "National movement in India played an important role in national integration.",
          answer:
            "TRUE. The freedom movement united diverse Indians against colonial rule, created national consciousness, brought together different castes/religions/regions, and established foundation for democratic, secular republic.",
          marks: 2,
        },
        {
          type: "correlation",
          q: "Explain the co-relation between National Unity and Regional Aspirations.",
          answer:
            "National unity and regional aspirations can coexist through federalism. Regional aspirations (language, culture, development) are legitimate democratic demands. Healthy regionalism strengthens national unity through diversity. Problems arise only when regionalism becomes separatism. Constitution accommodates regional diversity through states reorganization, language rights, and special provisions.",
          marks: 3,
        },
        {
          type: "opinion",
          q: "Peace and stability are needed for the nation's progress.",
          answer:
            "Yes, peace and stability are prerequisites for development. Reasons: Investment flows to stable regions, education and healthcare need peaceful environment, economic activities require law and order, social progress impossible amidst violence. Examples: Conflict areas face underdevelopment (J&K, Northeast before). Peace dividend enables human development. However, unjust peace maintaining inequality is unsustainable.",
          marks: 4,
        },
        {
          type: "shortAnswer",
          q: "What is left wing extremism in India?",
          answer: `**Left Wing Extremism (LWE) / Naxalism:**

**Origin**: Started in 1967 at Naxalbari, West Bengal
**Leaders**: Charu Majumdar, Kanu Sanyal
**Ideology**: Maoist/Communist, armed revolution against state
**Causes**: Poverty, landlessness, tribal exploitation, governance failure
**Affected Areas**: Red corridor (Chhattisgarh, Jharkhand, Odisha, parts of Maharashtra, AP)
**Government Response**: Security operations + development (SAMADHAN doctrine)
**Current Status**: Declining but still a security challenge`,
          marks: 5,
        },
        {
          type: "shortAnswer",
          q: "Explain cross border terrorism in Jammu and Kashmir.",
          answer: `**Cross Border Terrorism in J&K:**

**Definition**: Terrorism sponsored/supported from across international borders (Pakistan)
**Origins**: Post-1989 insurgency, after Soviet withdrawal from Afghanistan
**Groups**: Lashkar-e-Taiba, Jaish-e-Mohammed, Hizbul Mujahideen
**Methods**: Infiltration, training camps in PoK, financing, arms supply
**Major Attacks**: Parliament attack (2001), Mumbai (2008), Uri (2016), Pulwama (2019)
**India's Response**: Border fencing, surgical strikes, diplomatic pressure, Balakot airstrikes
**Current Status**: Article 370 abrogated (2019), reduced violence, enhanced security`,
          marks: 5,
        },
      ],
    },
    chapter5: {
      title: "Chapter 5: Good Governance",
      exercises: [
        {
          type: "mcq",
          q: "The concept of Lokpal is taken from:",
          options: ["United States", "United Kingdom", "Sweden", "Russia"],
          correct: 2,
          answer:
            "Sweden - The concept of Ombudsman (Lokpal) originated in Sweden in 1809.",
          marks: 1,
        },
        {
          type: "mcq",
          q: "The concept of 'citizens charter' is part of:",
          options: [
            "POSDCORB",
            "Development administration",
            "Good governance",
            "NGO activity",
          ],
          correct: 2,
          answer:
            "Good governance - Citizens Charter ensures transparency, accountability and citizen-centric services.",
          marks: 1,
        },
        {
          type: "concept",
          q: "Person investigating complaints against government officials.",
          answer: "Ombudsman / Lokpal / Lokayukta",
          marks: 1,
        },
        {
          type: "conceptMap",
          q: "Complete the concept map: Values of Good Governance",
          answer:
            "Participation, Rule of Law, Transparency, Responsiveness, Accountability, Consensus Oriented, Equity, Effectiveness, Efficiency",
          marks: 4,
        },
        {
          type: "trueFalse",
          q: "Lokayukta can investigate complaints against political executives.",
          answer:
            "TRUE. Lokayukta at state level can investigate complaints of corruption and maladministration against ministers, MLAs, and public servants. First established in Maharashtra (1971).",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "Good Governance aims at efficient use of natural resources.",
          answer:
            "TRUE. Good governance includes sustainable development, environmental protection, and efficient resource management for present and future generations.",
          marks: 2,
        },
        {
          type: "correlation",
          q: "Explain co-relation between Good Governance and E-Governance.",
          answer:
            "E-Governance is a tool to achieve good governance. E-Governance enables: Transparency through online services, accessibility 24/7, reduced corruption by minimizing human contact, efficiency through digital processes, citizen participation through portals. Examples: Digital India, e-filing, online grievance redressal. E-Governance makes good governance principles operational.",
          marks: 3,
        },
        {
          type: "opinion",
          q: "E-governance speeds up governmental processes.",
          answer:
            "Yes, e-governance accelerates government functioning. Benefits: Online applications reduce waiting time, instant approvals possible, paperless reduces delays, data accessibility improves decisions, tracking enables monitoring. Examples: Passport Seva, GST portal, DigiLocker. However, digital divide and cybersecurity remain challenges. Overall, e-governance significantly improves speed and efficiency.",
          marks: 4,
        },
        {
          type: "opinion",
          q: "E-governance brought administration closer to people.",
          answer:
            "Yes, e-governance bridges gap between government and citizens. Ways: 24/7 access to services (no office visits), information transparency, grievance redressal portals, mobile governance, reduced intermediaries. Examples: UMANG app, MyGov platform, e-District services. Digital inclusion initiatives extend reach to villages. E-governance democratizes access to government services.",
          marks: 4,
        },
        {
          type: "shortAnswer",
          q: "Explain various institutions protecting rights of different sections in India.",
          answer: `**Rights Protection Institutions:**

1. **National Human Rights Commission (NHRC)**: Protects human rights violations
2. **National Commission for Women (NCW)**: Women's rights and complaints
3. **National Commission for Minorities (NCM)**: Minority rights protection
4. **National Commission for SC/ST**: Scheduled Castes/Tribes safeguards
5. **National Commission for Backward Classes**: OBC rights
6. **Child Rights Commission**: Children's protection
7. **Lokpal/Lokayukta**: Anti-corruption ombudsman
8. **Central/State Information Commissions**: RTI implementation`,
          marks: 5,
        },
        {
          type: "longAnswer",
          q: "Explain in detail the values of Good Governance: (a) Participation (b) Transparency (c) Responsiveness (d) Accountability",
          answer: `**Values of Good Governance**

**(a) Participation:**
- Involvement of citizens in decision-making
- Voting, public consultations, civil society engagement
- Decentralization through Panchayati Raj
- Right to Information enables informed participation
- Participatory budgeting in some areas

**(b) Transparency:**
- Open government, free flow of information
- RTI Act 2005 ensures access to information
- E-governance portals publish data
- Proactive disclosure of policies
- Reduces corruption, builds trust

**(c) Responsiveness:**
- Government addresses citizen needs promptly
- Grievance redressal mechanisms
- Time-bound service delivery (Citizens Charter)
- Feedback mechanisms
- Adaptive policies based on outcomes

**(d) Accountability:**
- Answerability of public officials
- Parliamentary oversight, CAG audits
- Judicial review of executive actions
- Lokpal/Lokayukta for corruption
- Performance audits and social audits
- Media and civil society as watchdogs`,
          marks: 10,
        },
      ],
    },
    chapter6: {
      title: "Chapter 6: India's Foreign Policy",
      exercises: [
        {
          type: "mcq",
          q: "The core of non-alignment was:",
          options: [
            "Independent understanding of world affairs",
            "Participation in cold war",
            "Democratic socialism as policy",
            "Policy of regionalism",
          ],
          correct: 0,
          answer:
            "Independent understanding of world affairs - NAM meant independent foreign policy, not alignment with either superpower bloc.",
          marks: 1,
        },
        {
          type: "mcq",
          q: "Farakka Agreement about sharing of river waters is between India and:",
          options: ["Bangladesh", "Pakistan", "China", "Nepal"],
          correct: 0,
          answer:
            "Bangladesh - The Farakka Agreement (1996) governs sharing of Ganga waters between India and Bangladesh.",
          marks: 1,
        },
        {
          type: "incorrectPair",
          q: "Identify incorrect pair: (a) NATO - Europe (b) ANZUS - Africa (c) SEATO - South East Asia (d) CENTO - West Asia",
          answer:
            "(b) ANZUS - Africa is incorrect. ANZUS (Australia, New Zealand, United States Security Treaty) is for Pacific region, not Africa. Correct: ANZUS - Pacific/Oceania.",
          marks: 1,
        },
        {
          type: "trueFalse",
          q: "Myanmar has been a traditional friend of India.",
          answer:
            "TRUE. India and Myanmar share historical ties, Buddhist heritage, 1600 km border, cultural links with Northeast India. India follows 'Act East' policy with Myanmar. Cooperation in connectivity (Kaladan project), counter-insurgency.",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "In changing world order of 1990s, the issue of terrorism has been dominant.",
          answer:
            "TRUE. Post-Cold War, terrorism emerged as major global security challenge. 9/11 (2001) made it dominant issue. Global War on Terror, UN resolutions, international cooperation against terrorism became central to world politics.",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "The Sagarmala project is a comprehensive road connectivity plan.",
          answer:
            "FALSE. Sagarmala is a port-led development and coastal connectivity initiative, not road connectivity. It focuses on port modernization, coastal shipping, and port-linked industrialization. Road connectivity is under Bharatmala project.",
          marks: 2,
        },
        {
          type: "opinion",
          q: "India's role in the Indian Ocean.",
          answer:
            "India's strategic interest in Indian Ocean is vital. Role: Security provider (anti-piracy), SAGAR (Security and Growth for All in the Region) doctrine, Quad partnership, disaster relief (2004 tsunami), humanitarian assistance. Challenges: Chinese presence (string of pearls), protecting sea lanes. India must balance being net security provider with inclusive development for all Indian Ocean nations.",
          marks: 4,
        },
        {
          type: "shortAnswer",
          q: "Write a note on India's relations with Africa.",
          answer: `**India-Africa Relations:**

**Historical**: NAM partnership, solidarity against colonialism
**Political**: India-Africa Forum Summit, UN cooperation
**Economic**: Trade $70 billion+, Indian investments, IT, pharma
**Development**: ITEC program, scholarships, capacity building
**Healthcare**: Generic medicines (Pharmacy of Global South), COVID vaccines
**Security**: Training, joint exercises, counter-terrorism
**Diaspora**: Large Indian community in East/South Africa
**Challenges**: China's growing influence in Africa`,
          marks: 5,
        },
        {
          type: "shortAnswer",
          q: "Discuss briefly India-China relations.",
          answer: `**India-China Relations:**

**Historical**: Panchsheel (1954), 1962 War, boundary dispute
**Border Issues**: LAC undefined, Aksai Chin, Arunachal Pradesh claims
**Recent Tensions**: Doklam (2017), Galwan (2020)
**Trade**: $100+ billion, trade deficit concerns
**Cooperation**: BRICS, SCO, climate change
**Competition**: Strategic rivalry, Indian Ocean, influence in South Asia
**Current Status**: Complex relationship - cooperation + competition
**Way Forward**: Dialogue, confidence building measures, peaceful resolution`,
          marks: 5,
        },
        {
          type: "longAnswer",
          q: "Explain the factors influencing Indian foreign policy: (a) Geography (b) History (c) International System (d) Economy (e) Polity",
          answer: `**Factors Influencing Indian Foreign Policy**

**(a) Geography:**
- Strategic location: Land bridge between West & East Asia
- Indian Ocean centrality: Sea lanes, trade routes
- Neighbors: 7 land borders, complex relations
- Himalayan barrier: China, natural defense
- Natural resources: Access to energy sources

**(b) History:**
- Colonial experience: Anti-imperialism, NAM
- Partition legacy: Pakistan relations
- Civilizational ties: Cultural diplomacy
- Independence struggle values: Peace, non-violence

**(c) International System:**
- Cold War: Non-alignment
- Post-Cold War: Strategic autonomy
- Multipolarity: Multi-alignment approach
- Global institutions: UN, WTO, reform advocacy

**(d) Economy:**
- Trade relations: Market access needs
- Energy security: Oil/gas imports
- Investment: FDI attraction
- Technology: Partnerships for development
- Economic growth: Shapes diplomatic priorities

**(e) Polity:**
- Democratic values: Human rights advocacy
- Federal structure: State involvement in foreign policy
- Coalition politics: Domestic consensus needed
- Public opinion: Shapes policy options
- Parliament: Oversight and debate`,
          marks: 10,
        },
        {
          type: "shortAnswer",
          q: "Explain the principles of Indian Foreign Policy.",
          answer: `**Principles of Indian Foreign Policy:**

1. **Non-Alignment (NAM)**: Independent policy, not joining military blocs
2. **Panchsheel (Five Principles)**:
   - Mutual respect for sovereignty
   - Non-aggression
   - Non-interference in internal affairs
   - Equality and mutual benefit
   - Peaceful coexistence
3. **Sovereignty & Territorial Integrity**: Respect for nation-state system
4. **Non-Intervention**: No interference in internal affairs
5. **Peaceful Settlement of Disputes**: Dialogue over confrontation
6. **Active Participation in International Organizations**: UN, regional bodies
7. **South-South Cooperation**: Solidarity with developing nations`,
          marks: 5,
        },
      ],
    },
  },

  // ==================== CO-RELATION QUESTIONS (Q.4 - 9 MARKS) ====================
  coRelations: {
    instructions:
      "Explain the co-relation between the following (Any 3 out of 5, 3 marks each). Skip Chapter 3 & 5 for this question type as per Mind Faces.",
    questions: [
      {
        id: 1,
        q: "Hard Power and Soft Power",
        answer: `**Co-relation between Hard Power and Soft Power:**

Both are tools of foreign policy to achieve national interests:

**Hard Power**: Use of military force and economic coercion
- Military strength, sanctions, threats
- Immediate but temporary results
- Creates fear and resentment

**Soft Power**: Influence through attraction without coercion
- Culture, values, diplomacy
- Long-term sustainable influence
- Wins hearts and minds

**Co-relation**:
1. Both aim to influence other states
2. Complement each other (Smart Power = Hard + Soft)
3. Soft power is more cost-effective
4. Hard power may be needed when soft power fails
5. Balance of both creates effective foreign policy

**Example**: USA uses both - military (hard) and Hollywood/universities (soft)`,
        chapter: 1,
        marks: 3,
      },
      {
        id: 2,
        q: "Globalisation and Culture",
        answer: `**Co-relation between Globalisation and Culture:**

Globalisation has significant impact on culture worldwide:

**Positive Effects**:
1. Cultural exchange and diversity awareness
2. Spread of ideas, art, music globally
3. Access to world literature, films, food
4. Cross-cultural understanding increases

**Negative Effects**:
1. Cultural homogenization (Westernization)
2. Local cultures under threat
3. Loss of traditional practices
4. Dominance of English language

**Co-relation**:
- Globalisation accelerates cultural interaction
- Technology enables instant cultural transmission
- Creates hybrid cultures (Glocalization)
- Both enriches and threatens local identities
- Need for cultural preservation alongside openness

**Example**: Spread of yoga globally (Indian soft power) vs McDonald's culture`,
        chapter: 2,
        marks: 3,
      },
      {
        id: 3,
        q: "Women Empowerment and Sustainable Development Goals (SDGs)",
        answer: `**Co-relation between Women Empowerment and SDGs:**

Women empowerment is central to achieving SDGs:

**SDG 5 - Gender Equality**:
- End discrimination against women
- Eliminate violence, trafficking
- Equal opportunities in leadership

**Impact on Other SDGs**:
1. **SDG 1 (No Poverty)**: Economically empowered women reduce family poverty
2. **SDG 2 (Zero Hunger)**: Women farmers increase food security
3. **SDG 3 (Good Health)**: Educated mothers have healthier children
4. **SDG 4 (Quality Education)**: Educated women educate next generation
5. **SDG 8 (Decent Work)**: Women's participation boosts economy

**Co-relation**:
- Gender equality is both a goal AND means to other goals
- Women empowerment multiplies development impact
- Cannot achieve sustainable development without women
- Intersectionality: Women face multiple disadvantages

**Conclusion**: Empowering women accelerates all 17 SDGs`,
        chapter: 3,
        marks: 3,
      },
      {
        id: 4,
        q: "National Unity and Regional Aspirations",
        answer: `**Co-relation between National Unity and Regional Aspirations:**

Both can coexist in a healthy democracy:

**National Unity**:
- Common identity, shared values
- Constitutional framework
- Defense, foreign policy unity

**Regional Aspirations**:
- Language, culture preservation
- Economic development demands
- Political autonomy desires

**Co-relation**:
1. Federal system accommodates both
2. Healthy regionalism strengthens unity through diversity
3. States reorganization (1956) balanced both
4. Problems arise only when regionalism becomes separatism
5. Dialogue and accommodation key to harmony

**Constitutional Provisions**:
- Article 1: Union of States
- Seventh Schedule: Division of powers
- Special provisions for some states

**Example**: Linguistic states movement resolved through accommodation, not suppression

**Conclusion**: Regional aspirations within constitutional framework strengthen national unity`,
        chapter: 4,
        marks: 3,
      },
      {
        id: 5,
        q: "Good Governance and E-Governance",
        answer: `**Co-relation between Good Governance and E-Governance:**

E-Governance is a tool to achieve Good Governance:

**Good Governance Values**:
- Participation, Transparency, Accountability
- Responsiveness, Rule of Law
- Effectiveness, Equity

**E-Governance Enables**:
1. **Transparency**: Online information, RTI portals
2. **Accessibility**: 24/7 services, anywhere access
3. **Accountability**: Digital trail, tracking systems
4. **Efficiency**: Faster processing, less paperwork
5. **Reduced Corruption**: Minimal human contact

**Examples**:
- Digital India, e-District, UMANG app
- GST portal, Income tax e-filing
- Passport Seva, online grievance redressal

**Co-relation**:
- E-Governance operationalizes good governance principles
- Technology bridges gap between government and citizens
- Makes government responsive and citizen-centric
- Reduces bureaucratic delays and red tape

**Challenges**: Digital divide, cybersecurity, digital literacy`,
        chapter: 5,
        marks: 3,
      },
      {
        id: 6,
        q: "India and Bangladesh",
        answer: `**Co-relation between India and Bangladesh:**

Close bilateral relationship based on shared history and geography:

**Historical Ties**:
- India supported Bangladesh liberation (1971)
- Shared cultural, linguistic heritage (Bengal)
- Common colonial past

**Areas of Cooperation**:
1. **Trade**: Growing bilateral trade, connectivity
2. **Security**: Counter-terrorism, border management
3. **Connectivity**: Waterways, railways, roads
4. **Water Sharing**: Ganga (Farakka), Teesta negotiations
5. **Energy**: Power exports from India
6. **Development**: Indian credit lines, projects

**Issues**:
- Teesta water sharing pending
- Illegal migration concerns
- Border incidents
- Rohingya refugee situation

**Recent Progress**:
- Land Boundary Agreement (2015)
- Bus, train services resumed
- BBIN corridor initiative

**Conclusion**: Strategic partnership based on mutual benefit and shared destiny`,
        chapter: 6,
        marks: 3,
      },
      {
        id: 7,
        q: "Lokpal and Eradication of Corruption",
        answer: `**Co-relation between Lokpal and Eradication of Corruption:**

Lokpal is institutional mechanism to fight corruption:

**What is Lokpal?**
- Anti-corruption ombudsman at central level
- Lokpal and Lokayuktas Act, 2013
- Concept from Sweden (Ombudsman, 1809)

**Powers of Lokpal**:
1. Investigate corruption complaints against public servants
2. Jurisdiction over PM (with safeguards), Ministers, MPs
3. Can direct CBI investigation
4. Prosecution powers

**How it Helps Eradicate Corruption**:
1. Independent body outside executive control
2. Fast-track investigation and prosecution
3. Deterrent effect on potential corrupt officials
4. Protects whistleblowers
5. Covers wide range of public servants

**Limitations**:
- Cannot eliminate corruption alone
- Needs strong political will
- Depends on effective implementation
- Judicial delays in prosecution

**Co-relation**: Lokpal is necessary but not sufficient condition for ending corruption. Needs complementary measures: RTI, digitization, electoral reforms, citizen awareness.`,
        chapter: 5,
        marks: 3,
      },
      {
        id: 8,
        q: "Indian Society and Gender Inequality",
        answer: `**Co-relation between Indian Society and Gender Inequality:**

Gender inequality is deeply rooted in Indian society:

**Manifestations of Inequality**:
1. **Economic**: Wage gap (20-30% less), low workforce participation
2. **Social**: Patriarchy, son preference, dowry
3. **Political**: Low representation in Parliament (~14%)
4. **Educational**: Lower female literacy (65% vs 82% male)
5. **Health**: Maternal mortality, malnutrition

**Root Causes in Society**:
- Patriarchal mindset and traditions
- Religious and cultural practices
- Economic dependence on men
- Lack of education and awareness
- Weak law enforcement

**Government Measures**:
- Constitutional guarantees (Art 14, 15, 16)
- Laws: Dowry Prohibition, PCPNDT, POSH Act
- Schemes: Beti Bachao Beti Padhao, Sukanya Samriddhi

**Co-relation**:
- Social attitudes perpetuate inequality
- Legal measures alone insufficient
- Need social transformation alongside laws
- Education and economic independence key

**Conclusion**: Changing societal mindset essential for true gender equality`,
        chapter: 3,
        marks: 3,
      },
      {
        id: 9,
        q: "Human Rights and Humanitarian Intervention",
        answer: `**Co-relation between Human Rights and Humanitarian Intervention:**

Humanitarian intervention aims to protect human rights:

**Human Rights**:
- Universal rights inherent to all humans
- UDHR (1948), international covenants
- Right to life, liberty, dignity

**Humanitarian Intervention**:
- Military action to protect human rights in another state
- Responsibility to Protect (R2P) doctrine
- UN-authorized or unilateral

**Co-relation**:
1. Human rights violations trigger intervention
2. Intervention justified to prevent genocide, ethnic cleansing
3. Tension between sovereignty and human rights
4. R2P: Sovereignty not absolute if state fails to protect

**Examples**:
- Kosovo (1999), Libya (2011), East Timor
- Rwanda: Failure to intervene led to genocide

**Debates**:
- Sovereignty vs human rights
- Selective application (why some countries, not others?)
- Misuse for regime change
- UN authorization essential

**Conclusion**: Human rights protection may justify intervention, but needs international legitimacy and last resort`,
        chapter: 1,
        marks: 3,
      },
      {
        id: 10,
        q: "Economic Interest and Formation of Trade Blocs",
        answer: `**Co-relation between Economic Interest and Trade Blocs:**

Trade blocs formed primarily due to economic interests:

**What are Trade Blocs?**
- Regional groupings for preferential trade
- Examples: EU, NAFTA/USMCA, ASEAN, MERCOSUR

**Economic Interests Driving Formation**:
1. **Larger Markets**: Access to bigger consumer base
2. **Reduced Tariffs**: Lower costs, competitive prices
3. **Economies of Scale**: Mass production benefits
4. **Investment Flows**: Attract FDI within bloc
5. **Bargaining Power**: Collective negotiation strength

**Benefits**:
- Increased intra-bloc trade
- Economic growth and employment
- Specialization based on comparative advantage
- Technology and knowledge transfer

**Concerns**:
- Trade diversion from non-members
- Dominance of larger economies
- Loss of some policy autonomy

**Co-relation**:
- Economic interests are PRIMARY driver
- Political cooperation follows economic
- Mutual economic benefit sustains blocs
- Economic crises test bloc solidarity

**Example**: EU started as coal/steel community (economic), evolved to political union`,
        chapter: 2,
        marks: 3,
      },
      {
        id: 11,
        q: "India and Africa",
        answer: `**Co-relation between India and Africa:**

Growing strategic partnership based on shared interests:

**Historical Ties**:
- NAM solidarity, anti-colonialism
- Indian diaspora in East/South Africa
- Mahatma Gandhi's South Africa connection

**Areas of Cooperation**:
1. **Trade**: $70+ billion, growing rapidly
2. **Investment**: Indian companies in telecom, pharma, IT
3. **Development**: ITEC program, capacity building
4. **Healthcare**: Generic medicines, "Pharmacy of Global South"
5. **Education**: Scholarships, training programs
6. **Security**: Joint exercises, training

**India-Africa Forum Summit**:
- Platform for India-Africa engagement
- Development assistance commitments
- South-South cooperation model

**Strategic Significance**:
- Africa's UN votes important for India
- Natural resources for Indian industry
- Maritime security in Indian Ocean
- Counter to China's growing influence

**Co-relation**:
- Mutual benefit drives partnership
- Development cooperation, not exploitation
- Win-win approach differs from colonial patterns

**Conclusion**: India-Africa partnership based on equality and shared development`,
        chapter: 6,
        marks: 3,
      },
      {
        id: 12,
        q: "GATT and WTO",
        answer: `**Co-relation between GATT and WTO:**

WTO evolved from and replaced GATT:

**GATT (1947-1995)**:
- General Agreement on Tariffs and Trade
- Provisional arrangement, not organization
- Focused mainly on goods trade
- 8 rounds of negotiations (last: Uruguay Round)

**WTO (1995-present)**:
- World Trade Organization
- Formal international organization
- Covers goods, services, intellectual property
- Dispute settlement mechanism

**Co-relation/Evolution**:
1. WTO incorporated and expanded GATT
2. GATT rules still apply for goods trade
3. WTO added GATS (services), TRIPS (IP)
4. Stronger dispute settlement in WTO
5. WTO has legal personality, GATT didn't

**Key Differences**:
| Aspect | GATT | WTO |
|--------|------|-----|
| Status | Agreement | Organization |
| Scope | Goods only | Goods + Services + IP |
| Enforcement | Weak | Binding dispute settlement |
| Membership | Contracting parties | Member states |

**Conclusion**: WTO is institutionalized, expanded version of GATT framework`,
        chapter: 2,
        marks: 3,
      },
      {
        id: 13,
        q: "End of Cold War and Rise of New States",
        answer: `**Co-relation between End of Cold War and Rise of New States:**

Cold War's end led to emergence of new nation-states:

**End of Cold War (1991)**:
- USSR disintegration
- End of bipolar world
- Ideological victory of liberal democracy

**New States Emerged**:
1. **From USSR**: 15 republics (Russia, Ukraine, Baltic states, Central Asian states)
2. **From Yugoslavia**: Slovenia, Croatia, Bosnia, Serbia, Montenegro, Kosovo, North Macedonia
3. **Other**: Eritrea (from Ethiopia), East Timor, South Sudan

**Co-relation Explained**:
1. Cold War suppressed nationalist movements
2. Superpower control prevented fragmentation
3. End of Cold War removed external constraints
4. Ethnic nationalism resurged
5. Self-determination demands fulfilled

**Factors Leading to New States**:
- Ethnic/linguistic nationalism
- Economic disparities within federations
- Democratic aspirations
- International support (recognition)

**Consequences**:
- Redrawing of world map
- Ethnic conflicts (Yugoslavia, Caucasus)
- Transition challenges
- New foreign policy alignments

**Conclusion**: Cold War's end unleashed suppressed nationalisms, reshaping global political map`,
        chapter: 1,
        marks: 3,
      },
      {
        id: 14,
        q: "Poverty and Development",
        answer: `**Co-relation between Poverty and Development:**

Poverty and development are inversely related:

**Relationship**:
- Development reduces poverty
- Poverty hinders development
- Vicious cycle: poverty → low development → more poverty

**How Development Reduces Poverty**:
1. Economic growth creates jobs
2. Better education increases earning capacity
3. Healthcare improves productivity
4. Infrastructure connects to markets
5. Social protection provides safety net

**How Poverty Hinders Development**:
1. Low human capital (education, health)
2. Limited savings and investment
3. Low productivity
4. Social instability
5. Demand constraint

**Approach to Break Cycle**:
- Inclusive growth (not just GDP)
- Direct poverty alleviation programs
- Investment in human development
- Social security measures
- Empowerment of marginalized

**Indian Context**:
- MGNREGA, Food Security Act
- Skill development programs
- Financial inclusion (Jan Dhan)
- SDG 1: No Poverty target

**Conclusion**: Poverty reduction and development must go hand-in-hand for sustainable progress`,
        chapter: 3,
        marks: 3,
      },
      {
        id: 15,
        q: "Jammu & Kashmir and Cross-Border Terrorism",
        answer: `**Co-relation between J&K and Cross-Border Terrorism:**

J&K has been primary target of cross-border terrorism:

**What is Cross-Border Terrorism?**
- Terrorism planned, financed, trained from across international border
- State-sponsored terrorism from Pakistan

**Why J&K is Target**:
1. Disputed territory (Pakistan's claim)
2. Muslim-majority region
3. Proximity to Pakistan/PoK
4. Strategic location
5. History of insurgency (post-1989)

**Terror Infrastructure**:
- Training camps in PoK
- ISI coordination
- Terror groups: LeT, JeM, HM
- Financing through hawala, fake currency

**Major Attacks**:
- Parliament (2001), Mumbai (2008)
- Uri (2016), Pulwama (2019)

**India's Response**:
1. Enhanced border security, fencing
2. Surgical strikes (2016, Balakot 2019)
3. Diplomatic isolation of Pakistan
4. Article 370 abrogation (2019)
5. Development initiatives

**Co-relation**:
- J&K's unresolved status exploited by Pakistan
- Cross-border terrorism aims to destabilize J&K
- Both are interlinked security challenges

**Conclusion**: Addressing cross-border terrorism essential for peace in J&K`,
        chapter: 4,
        marks: 3,
      },
      {
        id: 16,
        q: "India and Non-Alignment Movement (NAM)",
        answer: `**Co-relation between India and NAM:**

India was founding member and leader of NAM:

**What is NAM?**
- Non-Aligned Movement (1961, Belgrade)
- Countries not aligned with either Cold War bloc
- Founders: Nehru (India), Nasser (Egypt), Tito (Yugoslavia)

**India's Role in NAM**:
1. **Ideological Leadership**: Panchsheel principles
2. **First Conference**: Bandung (1955) precursor
3. **Consistent Membership**: Active throughout Cold War
4. **Voice of Third World**: Advocated NIEO
5. **Peace Advocacy**: Opposed bloc politics

**Principles India Championed**:
- Peaceful coexistence
- Non-interference
- Anti-colonialism, anti-racism
- Disarmament
- Economic justice

**NAM's Relevance Today**:
- 120 member countries
- Multipolar world makes autonomy relevant
- South-South cooperation platform
- Reform of global institutions

**India's Current Approach**:
- "Multi-alignment" or "Strategic autonomy"
- Engages all major powers
- Issue-based partnerships
- NAM principles still guide policy

**Conclusion**: NAM shaped India's independent foreign policy tradition`,
        chapter: 6,
        marks: 3,
      },
      {
        id: 17,
        q: "Good Governance and Transparency",
        answer: `**Co-relation between Good Governance and Transparency:**

Transparency is fundamental pillar of good governance:

**What is Transparency?**
- Openness in government functioning
- Access to information for citizens
- Clear rules, procedures, decisions

**How Transparency Enables Good Governance**:
1. **Reduces Corruption**: Secrecy breeds corruption
2. **Accountability**: Officials answerable when visible
3. **Informed Participation**: Citizens engage meaningfully
4. **Trust Building**: Open government gains legitimacy
5. **Better Decisions**: Public scrutiny improves quality

**Transparency Mechanisms in India**:
- Right to Information Act (2005)
- Proactive disclosure requirements
- E-governance portals
- Open budgets, audits
- Media freedom

**RTI Act Features**:
- Citizens can seek government information
- 30-day response timeline
- Information Commissions for appeals
- Penalties for non-compliance

**Challenges**:
- Exemptions misused
- Delays in response
- RTI activists face threats
- Digital divide limits access

**Co-relation**:
- Without transparency, other governance values fail
- Transparency is prerequisite for accountability
- Foundation of citizen-government relationship

**Conclusion**: Transparent governance is accountable governance`,
        chapter: 5,
        marks: 3,
      },
      {
        id: 18,
        q: "India and Russia",
        answer: `**Co-relation between India and Russia:**

Time-tested strategic partnership spanning decades:

**Historical Foundation**:
- Indo-Soviet Treaty of Peace (1971)
- Soviet support during 1971 war
- Defense cooperation since 1960s
- Consistent UN support

**Areas of Cooperation**:
1. **Defense**: Major arms supplier (S-400, Brahmos, Sukhoi)
2. **Nuclear Energy**: Kudankulam power plant
3. **Space**: Joint programs, GLONASS
4. **Energy**: Oil, gas investments (Sakhalin)
5. **Economic**: Trade, investment (though limited)

**Strategic Significance**:
- Reliable partner unlike Western conditionality
- UN Security Council support
- Balances relations with China
- Technology transfer

**Annual Summits**:
- Regular high-level exchanges
- 2+2 Dialogue mechanism
- Special & Privileged Strategic Partnership

**Challenges**:
- Russia-China closeness
- Russia-Pakistan growing ties
- US pressure on defense deals (CAATSA)
- Limited economic engagement

**India's Balancing Act**:
- Maintain Russia ties
- Develop US partnership
- Strategic autonomy approach

**Conclusion**: Russia remains India's most trusted strategic partner despite changing geopolitics`,
        chapter: 6,
        marks: 3,
      },
    ],
  },

  // ==================== MIND FACES PROBABLE QUESTIONS 2026 ====================
  probableQuestions2026: {
    q80_100Words: [
      {
        q: "Discuss the Role of the state towards achieving objectives of Economic Development and Social Change. (Chapter 2)",
        answer: `**Role of State in Economic Development & Social Change:**

**Economic Development:**
1. **Planning**: NITI Aayog (replaced Planning Commission), Five Year Plans
2. **Investment**: Public sector in infrastructure, strategic industries
3. **Regulation**: Controlling monopolies, consumer protection
4. **Redistribution**: Progressive taxation, subsidies
5. **Liberalization**: LPG reforms (1991), ease of doing business

**Social Change:**
1. **Education**: RTE Act, scholarships, skill development
2. **Healthcare**: Ayushman Bharat, public health programs
3. **Social Justice**: Reservations, anti-discrimination laws
4. **Women Empowerment**: Legal reforms, schemes like BBBP
5. **Poverty Alleviation**: MGNREGA, food security

**Conclusion**: State plays dual role as enabler and provider for inclusive development.`,
        marks: 5,
        chapter: 2,
      },
      {
        q: "Explain various measures for Empowerment of Women in India. (Chapter 3)",
        answer: `**Measures for Women Empowerment in India:**

**Constitutional Provisions:**
- Article 14: Equality before law
- Article 15(3): Special provisions for women
- Article 39: Equal pay for equal work
- 73rd/74th Amendments: 33% reservation in local bodies

**Legislative Measures:**
- Dowry Prohibition Act, PCPNDT Act
- Protection of Women from Domestic Violence Act
- Sexual Harassment at Workplace Act (POSH)
- Maternity Benefit Amendment Act

**Government Schemes:**
- Beti Bachao Beti Padhao
- Sukanya Samriddhi Yojana
- MUDRA loans for women entrepreneurs
- One Stop Centre (Sakhi centres)

**Economic Measures:**
- Self-Help Groups (SHGs)
- Skill development programs
- Microfinance initiatives

**Conclusion**: Multi-pronged approach needed for true empowerment.`,
        marks: 5,
        chapter: 3,
      },
      {
        q: "Explain Green Revolution in detail. (Chapter 3)",
        answer: `**Green Revolution in India:**

**Definition**: Agricultural transformation (1960s-70s) using modern technology to increase food production.

**Background**: Food crisis, dependence on imports (PL-480), famine threats

**Key Features:**
1. High Yielding Variety (HYV) seeds - IR-8 rice, Mexican wheat
2. Chemical fertilizers and pesticides
3. Modern irrigation - tube wells, canals
4. Mechanization - tractors, harvesters
5. Institutional credit and support

**Architects**: M.S. Swaminathan (India), Norman Borlaug (Global)

**Impact:**
- Positive: Self-sufficiency, Green Revolution states (Punjab, Haryana)
- Negative: Regional disparity, environmental damage, small farmer exclusion

**Current**: Second Green Revolution, sustainable agriculture focus

**Conclusion**: Revolutionary for food security but needs sustainable approach.`,
        marks: 5,
        chapter: 3,
      },
      {
        q: "Explain cross-border terrorism in Jammu & Kashmir. (Chapter 4)",
        answer: `**Cross-Border Terrorism in J&K:**

**Definition**: Terrorism planned, financed, trained, and executed with support from across international border (Pakistan).

**Historical Background:**
- Post-1989 insurgency began
- Afghan Mujahideen diverted to Kashmir
- ISI (Pakistan intelligence) involvement

**Major Terror Groups:**
- Lashkar-e-Taiba, Jaish-e-Mohammed
- Hizbul Mujahideen

**Methods:**
- Infiltration across LoC
- Terror financing (hawala, fake currency)
- Training camps in Pakistan-occupied Kashmir
- Radicalization and recruitment

**Major Attacks**: Parliament (2001), Mumbai (2008), Uri (2016), Pulwama (2019)

**India's Response:**
- Surgical strikes (2016), Balakot airstrike (2019)
- Border fencing, enhanced surveillance
- Diplomatic isolation of Pakistan
- Article 370 abrogation (2019)

**Conclusion**: Continues to be major security challenge requiring multi-pronged response.`,
        marks: 5,
        chapter: 4,
      },
      {
        q: "What is left-wing extremism in India? (Chapter 4)",
        answer: `**Left-Wing Extremism (LWE) / Naxalism:**

**Definition**: Armed movement inspired by Maoist ideology aiming to overthrow state through revolution.

**Origin**: 1967, Naxalbari village, West Bengal
**Founders**: Charu Majumdar, Kanu Sanyal

**Ideology:**
- Maoist/Communist revolution
- Land to the tiller
- Overthrow of 'feudal' state

**Causes:**
- Landlessness and poverty
- Tribal displacement and exploitation
- Governance vacuum
- Forest rights denial

**Affected Areas**: Red Corridor - Chhattisgarh, Jharkhand, Odisha, Bihar, Andhra Pradesh, Maharashtra

**Government Response:**
- Security operations
- Development schemes (roads, schools, healthcare)
- Surrender and rehabilitation policy
- SAMADHAN doctrine

**Current Status**: Declining but still active in certain pockets

**Conclusion**: Requires balanced approach of security + development.`,
        marks: 5,
        chapter: 4,
      },
    ],
    q150_200Words: [
      {
        q: "Explain in detail the European Union. (Chapter 1)",
        chapter: 1,
        points: [
          "History",
          "European Commission",
          "European Parliament",
          "European Council",
          "European Court of Justice",
        ],
      },
      {
        q: "Discuss the impact of Globalisation. (Chapter 2)",
        chapter: 2,
        points: [
          "Impact on Technology",
          "Social Impact",
          "Cultural Impact",
          "Political Impact",
          "Economic Impact",
        ],
      },
      {
        q: "Explain factors influencing Indian foreign policy. (Chapter 6)",
        chapter: 6,
        points: [
          "History",
          "Economics",
          "Polity",
          "Geography",
          "International System",
        ],
      },
      {
        q: "Explain the principles of Indian foreign policy. (Chapter 6)",
        chapter: 6,
        points: [
          "Non-Alignment",
          "Sovereignty and territorial integrity",
          "Non-intervention in internal affairs",
          "Belief in peaceful co-existence",
          "Active participation in international organisations",
        ],
      },
      {
        q: "Discuss the role of state in contemporary period. (Chapter 2)",
        chapter: 2,
        points: [
          "Governance",
          "Economic development",
          "Welfare",
          "Nation building",
          "Peace and Order",
        ],
      },
    ],
  },
};

export default POLITICAL_SCIENCE_BOARD_CRASHER;
