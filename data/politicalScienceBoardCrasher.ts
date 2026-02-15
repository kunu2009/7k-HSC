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
