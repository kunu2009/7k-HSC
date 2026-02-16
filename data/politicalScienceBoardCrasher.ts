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

      // Q.5 Short Answer
      shortAnswers: [
        {
          question: "Explain the term soft power with examples.",
          marks: 4,
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

      // Q.6 Long Answer
      longAnswers: [
        {
          question:
            "Discuss the European Union with help of given points: (a) History (b) European Commission (c) European Parliament (d) European Council (e) European Court of Justice",
          marks: 8,
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
          marks: 4,
          modelAnswer:
            "**Globalisation:**\n\n**Definition**: Globalisation is the process of increasing integration and interdependence among countries through the free flow of goods, services, capital, technology, ideas, and people across national borders.\n\n**Term Origin**: Coined by Theodore Levitt (1983)\n\n**Key Features:**\n1. **Economic Integration**: Free trade, removal of tariff barriers\n2. **Financial Integration**: Cross-border investment (FDI, FII)\n3. **Technological Integration**: Internet, communication revolution\n4. **Cultural Exchange**: Ideas, values, lifestyle spreading globally\n\n**Drivers of Globalisation:**\n- Technology (internet, transport)\n- Trade liberalisation (WTO)\n- MNCs and TNCs\n- International organizations (IMF, World Bank)\n\n**Dimensions:**\n\n| Dimension | Examples |\n|-----------|----------|\n| Economic | Trade, FDI, MNCs |\n| Political | UN, global governance |\n| Cultural | Hollywood, social media |\n\n**Examples**: McDonald's in India, Indian IT services globally, Chinese products worldwide\n\n**Conclusion**: Globalisation has made the world a 'Global Village' with both opportunities and challenges.",
        },
        {
          question: "What are the effects of LPG reforms on Indian economy?",
          marks: 4,
          modelAnswer:
            "**Effects of LPG Reforms (1991) on Indian Economy:**\n\n**Background**: LPG reforms were introduced in 1991 under PM Narasimha Rao and FM Manmohan Singh to address balance of payments crisis.\n\n**L - Liberalisation Effects:**\n- Industrial licensing abolished\n- Private sector allowed in more sectors\n- Import restrictions reduced\n- Competition increased\n\n**P - Privatisation Effects:**\n- Disinvestment of PSUs started\n- Efficiency improved in many sectors\n- Stock market grew\n- Some job losses in public sector\n\n**G - Globalisation Effects:**\n- FDI inflows increased\n- IT/BPO sector boomed\n- MNCs entered India\n- Exports grew significantly\n\n**Positive Effects:**\n1. GDP growth accelerated (3.5% to 6-8%)\n2. Foreign exchange reserves increased\n3. Technology and quality improved\n4. Consumer choices expanded\n5. India became IT superpower\n\n**Negative Effects:**\n1. Agriculture neglected\n2. Inequality increased\n3. Small industries suffered\n4. Job losses in traditional sectors\n\n**Conclusion**: LPG reforms transformed India from a closed economy to an emerging market, though challenges of inclusive growth remain.",
        },
      ],

      // Q.6 Long Answer
      longAnswers: [
        {
          question:
            "Discuss the positive and negative impact of Globalisation on India.",
          marks: 8,
          modelAnswer:
            "### Impact of Globalisation on India\n\n#### Introduction\nGlobalisation refers to the increasing integration of world economies through trade, investment, technology, and cultural exchange. India embraced globalisation through the LPG reforms of 1991.\n\n#### Positive Impact of Globalisation\n\n**1. Economic Growth**\n- GDP growth rate increased from 3.5% to 6-8%\n- India became one of fastest growing economies\n- Foreign exchange reserves improved significantly\n\n**2. IT and Service Sector Revolution**\n- India became the 'Back Office of the World'\n- BPO, IT services industry flourished\n- Companies: TCS, Infosys, Wipro became global\n- Created millions of skilled jobs\n\n**3. Foreign Investment**\n- FDI inflows increased significantly\n- Technology transfer improved\n- Modern management practices adopted\n- Sectors: Auto, Telecom, Retail benefited\n\n**4. Consumer Benefits**\n- More choices of products and services\n- Better quality due to competition\n- Lower prices in many sectors\n- Access to global brands\n\n**5. Infrastructure Development**\n- Roads, ports, airports improved\n- Telecom revolution (mobile phones)\n- Digital infrastructure expanded\n\n**6. Global Recognition**\n- India's soft power increased\n- Bollywood, Yoga, Cuisine spread globally\n- Indian diaspora strengthened\n\n#### Negative Impact of Globalisation\n\n**1. Agricultural Distress**\n- Competition from subsidised imports\n- Farmer suicides increased\n- MSP and procurement issues\n- Rural unemployment grew\n\n**2. Small Industry Struggle**\n- MSMEs faced MNC competition\n- Many traditional industries closed\n- Artisans and craftsmen suffered\n- Local products lost market\n\n**3. Growing Inequality**\n\n| Aspect | Result |\n|--------|--------|\n| Income | Rich-poor gap widened |\n| Regional | Urban-rural divide grew |\n| Sectoral | Services grew, agriculture declined |\n\n**4. Environmental Damage**\n- Industrial pollution increased\n- Natural resources exploited\n- Climate change concerns grew\n- Deforestation accelerated\n\n**5. Cultural Impact**\n- Western influence on youth\n- Consumerism and materialism increased\n- Traditional values eroded\n- Family structures changed\n\n**6. Job Insecurity**\n- Contract and gig jobs increased\n- Traditional sector job losses\n- Brain drain of skilled workers\n\n#### Way Forward\n\n1. **Inclusive Policies**: Ensure benefits reach all sections\n2. **Agricultural Support**: MSP, insurance, irrigation\n3. **MSME Protection**: Credit, technology, marketing support\n4. **Skill Development**: Train workers for global economy\n5. **Environmental Regulations**: Sustainable development\n\n#### Conclusion\nGlobalisation has been a double-edged sword for India. While it brought economic growth and opportunities, it also created challenges of inequality and sustainability. The need is for 'Globalisation with a human face' - embracing benefits while protecting vulnerable sections.",
        },
        {
          question:
            "Explain the role of state in the era of globalisation with respect to economic development and social change.",
          marks: 8,
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
  },

  // ==================== MIND FACES EXAM STRATEGY (2026) ====================
  mindFacesTips: {
    source: "Mind Faces (MF) © 2026",
    note: "Follow this guide for BEST MARKS in Political Science Board Exam!",

    questionPatterns: [
      {
        question: "Q.1 A to E",
        type: "Objectives",
        tip: "Compulsory from all chapters. Do Textual Exercises properly!",
        icon: "📝",
        priority: "high",
      },
      {
        question: "Q.2 A",
        type: "Concept Map",
        tip: "Will ONLY be asked from Chapter 1, 4, 5",
        chapters: [1, 4, 5],
        icon: "🗺️",
        priority: "high",
      },
      {
        question: "Q.2 B",
        type: "Map Observation",
        tip: "Activity-based question. Observe the given Map and answer.",
        icon: "🌍",
        priority: "medium",
      },
      {
        question: "Q.3",
        type: "True/False (Attempt any 5/7)",
        tip: "Skip Chapter 2 for this question. Do True/False from Textual Exercises mostly.",
        skipChapters: [2],
        icon: "✓✗",
        priority: "high",
      },
      {
        question: "Q.4",
        type: "Co-relation (Attempt any 3/5)",
        tip: "Leave Chapter 3 & 5 for this question. Refer to Textual Exercises only!",
        skipChapters: [3, 5],
        icon: "🔗",
        priority: "high",
      },
      {
        question: "Q.5",
        type: "Express Opinion (25-30 words, Any 3/5)",
        tip: "Skip Chapter 4 for this question.",
        skipChapters: [4],
        icon: "💬",
        priority: "medium",
      },
      {
        question: "Q.6",
        type: "Answer in 80-100 words (Any 2/4)",
        tip: "Leave any 1 Chapter of your choice. Focus on probable questions below!",
        icon: "📖",
        priority: "high",
      },
      {
        question: "Q.7",
        type: "Explain in 150-200 words",
        tip: "Will ONLY be from Chapters 1, 2, 3, 5, 6. Leave any 1 Chapter of your choice. Refer to Textual Exercises as well as the chapter!",
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
        marks: "80-100 words",
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
        marks: "80-100 words",
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
};

export default POLITICAL_SCIENCE_BOARD_CRASHER;
