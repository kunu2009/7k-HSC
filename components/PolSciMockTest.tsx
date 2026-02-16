import React, { useState, useEffect, useCallback } from "react";
import {
  X,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  Send,
  Eye,
  FileText,
  Award,
  RotateCcw,
  Play,
  Pause,
  Flag,
} from "lucide-react";

interface PolSciMockTestProps {
  onClose: () => void;
}

// March 2023 Board Paper Data
const MOCK_PAPER_2023 = {
  title: "Political Science - March 2023",
  totalMarks: 80,
  duration: 180, // 3 hours in minutes

  sections: [
    {
      id: "q1a",
      type: "mcq",
      title: "Q.1(A) Choose the correct alternative",
      marks: 5,
      instructions: "Choose the correct alternative from the brackets",
      questions: [
        {
          id: "q1a1",
          question: "Soviet Union disintegrated in ___.",
          options: ["1991", "1989", "1998", "2000"],
          correct: 0,
          marks: 1,
        },
        {
          id: "q1a2",
          question:
            "Until the coming in of a foreign channel, ___ was the only TV broadcaster in India.",
          options: ["Sony", "Zee", "Doordarshan", "Star"],
          correct: 2,
          marks: 1,
        },
        {
          id: "q1a3",
          question:
            "As per the Census Report 2011, the female literacy rate is ___.",
          options: ["65.46%", "70%", "44.50%", "58%"],
          correct: 0,
          marks: 1,
        },
        {
          id: "q1a4",
          question:
            "Naxalism began as a protest against the feudal order in 1967 at Naxalbari in ___.",
          options: ["Goa", "West Bengal", "Bihar", "Kerala"],
          correct: 1,
          marks: 1,
        },
        {
          id: "q1a5",
          question:
            "The 1971 war between India and Pakistan led to the creation of ___.",
          options: ["Bangladesh", "Sri Lanka", "Indonesia", "Myanmar"],
          correct: 0,
          marks: 1,
        },
      ],
    },
    {
      id: "q1b",
      type: "incorrect_pair",
      title: "Q.1(B) Identify the incorrect pair",
      marks: 3,
      instructions:
        "Identify the incorrect pair in every set, correct it and rewrite",
      questions: [
        {
          id: "q1b1",
          question: "Identify the incorrect pair:",
          pairs: [
            "(A) Eritrea – Independent from Ethiopia",
            "(B) East Timor – Independent from Indonesia",
            "(C) Chechnya – Wants independence from Britain",
          ],
          incorrectIndex: 2,
          correction: "Chechnya – Wants independence from Russia",
          marks: 1,
        },
        {
          id: "q1b2",
          question: "Identify the incorrect pair:",
          pairs: [
            "(A) Rules and regulations to govern international trade – GATT 1948",
            "(B) World Trade Organisation (WTO) – 2000",
            "(C) Globalisation – 1991",
          ],
          incorrectIndex: 1,
          correction: "World Trade Organisation (WTO) – 1995",
          marks: 1,
        },
        {
          id: "q1b3",
          question: "Identify the incorrect pair:",
          pairs: [
            "(A) NITI Aayog – 2015",
            "(B) Beginning of economic reforms – 1991",
            "(C) National Policy for the Empowerment of Women – 2018",
          ],
          incorrectIndex: 2,
          correction: "National Policy for the Empowerment of Women – 2001",
          marks: 1,
        },
      ],
    },
    {
      id: "q1c",
      type: "complete_sentence",
      title: "Q.1(C) Complete the statements",
      marks: 4,
      instructions:
        "Complete the following statements by using the appropriate options",
      questions: [
        {
          id: "q1c1",
          question:
            "The post cold war world order was dominated by the United States, because ___.",
          options: [
            "(A) in economic sphere, socialist system of economy was given up by most countries",
            "(B) with the disintegration of Yugoslavia new states emerged",
            "(C) there was no challenge to American economic and military power",
          ],
          correct: 2,
          marks: 1,
        },
        {
          id: "q1c2",
          question: "India is a developing country, because ___.",
          options: [
            "(A) it is rich in crude oil",
            "(B) it needs financial investment in industry for its development",
            "(C) it is largest in terms of population",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "q1c3",
          question:
            "India was forced to take loan from the International Monetary Fund in 1990, because ___.",
          options: [
            "(A) of inflation there was public outrage",
            "(B) to speed up the process of industrialisation",
            "(C) it faced an economic crisis in the decade of 1980",
          ],
          correct: 2,
          marks: 1,
        },
        {
          id: "q1c4",
          question:
            "There have been tensions between India and Pakistan since independence, because ___.",
          options: [
            "(A) of Jammu-Kashmir issue",
            "(B) of dispute over the sharing of Brahmaputra river water",
            "(C) of Tibet issue",
          ],
          correct: 0,
          marks: 1,
        },
      ],
    },
    {
      id: "q1d",
      type: "concept",
      title: "Q.1(D) State the appropriate concept",
      marks: 4,
      instructions: "State the appropriate concept for the given statements",
      questions: [
        {
          id: "q1d1",
          statement:
            "When a state influences other states without the use of military force.",
          answer: "Soft Power",
          marks: 1,
        },
        {
          id: "q1d2",
          statement: "A company that is operating in several countries.",
          answer:
            "Multinational Corporation (MNC) / Transnational Corporation (TNC)",
          marks: 1,
        },
        {
          id: "q1d3",
          statement:
            "Introduction of high yielding variety of seeds and irrigation methods.",
          answer: "Green Revolution",
          marks: 1,
        },
        {
          id: "q1d4",
          statement:
            "A state in which all segments of the society are involved in the making of policy.",
          answer: "Participatory Democracy / Democratic Governance",
          marks: 1,
        },
      ],
    },
    {
      id: "q1e",
      type: "odd_one",
      title: "Q.1(E) Find the odd word",
      marks: 4,
      instructions: "Find the odd word in the given set and write",
      questions: [
        {
          id: "q1e1",
          question: "BRICS Members:",
          set: ["India", "Russia", "China", "America"],
          answer: "America",
          reason:
            "America is not a BRICS member. BRICS = Brazil, Russia, India, China, South Africa",
          marks: 1,
        },
        {
          id: "q1e2",
          question: "Intellectual Property:",
          set: ["Patent", "Trademark", "Copyright", "Education"],
          answer: "Education",
          reason:
            "Education is not a type of Intellectual Property Rights (IPR). Patent, Trademark, and Copyright are forms of IPR.",
          marks: 1,
        },
        {
          id: "q1e3",
          question: "Challenges to National Unity:",
          set: ["Linguism", "Regionalism", "Nationalism", "Communalism"],
          answer: "Nationalism",
          reason:
            "Nationalism promotes unity, while Linguism, Regionalism, and Communalism are challenges/threats to national unity.",
          marks: 1,
        },
        {
          id: "q1e4",
          question: "India-China Border States:",
          set: ["Arunachal Pradesh", "Sikkim", "Dalai Lama", "Meghalaya"],
          answer: "Dalai Lama",
          reason:
            "Dalai Lama is a person (Tibetan spiritual leader), not a state. The others are Indian states.",
          marks: 1,
        },
      ],
    },
    {
      id: "q3",
      type: "true_false",
      title: "Q.3 True or False with Reasons",
      marks: 10,
      instructions:
        "State whether the following statements are True or False with reasons (Any FIVE out of 7)",
      required: 5,
      questions: [
        {
          id: "q3_1",
          statement:
            "The National Commission for Women was created to protect the rights of women.",
          answer: true,
          modelAnswer:
            "**TRUE**\n\nThe National Commission for Women (NCW) was established in 1992 under the National Commission for Women Act, 1990. Its main purpose is to:\n- Review constitutional and legal safeguards for women\n- Recommend amendments to laws\n- Investigate complaints regarding violation of women's rights\n- Advise government on policy matters affecting women\n\nThus, it was indeed created to protect women's rights.",
          marks: 2,
        },
        {
          id: "q3_2",
          statement:
            "Lokayukta can investigate complaints against political executives.",
          answer: true,
          modelAnswer:
            "**TRUE**\n\nLokayukta is a state-level anti-corruption ombudsman that can investigate complaints against:\n- Chief Minister (in most states)\n- Ministers\n- MLAs/MLCs\n- State government officials\n\nKarnataka Lokayukta famously investigated CM B.S. Yeddyurappa in 2011. The jurisdiction varies by state but generally includes political executives.",
          marks: 2,
        },
        {
          id: "q3_3",
          statement:
            "The decade of 1980s is seen as the golden age of humanitarian intervention.",
          answer: false,
          modelAnswer:
            "**FALSE**\n\nThe 1990s (not 1980s) is considered the golden age of humanitarian intervention because:\n- Cold War ended in 1991, removing superpower rivalry blocks\n- UN Security Council could act more freely\n- Major interventions: Somalia (1992), Bosnia (1995), Kosovo (1999), East Timor (1999)\n\nDuring the 1980s, Cold War rivalries often blocked humanitarian interventions.",
          marks: 2,
        },
        {
          id: "q3_4",
          statement:
            "Democracy is required to establish national integration and social transformation.",
          answer: true,
          modelAnswer:
            "**TRUE**\n\nDemocracy promotes national integration and social transformation through:\n- Equal political rights for all citizens\n- Representation for minorities\n- Constitutional provisions for equality (Articles 14-18)\n- Peaceful resolution of conflicts through dialogue\n- Reservation policies for disadvantaged groups\n- Federal structure accommodating regional diversity\n\nDemocracy provides the framework for inclusive development.",
          marks: 2,
        },
        {
          id: "q3_5",
          statement: "Traditional administration was efficient.",
          answer: false,
          modelAnswer:
            "**FALSE**\n\nTraditional administration was NOT efficient because:\n- Excessive paperwork and red tape\n- Slow decision-making process\n- Lack of transparency\n- Corruption and favoritism\n- No accountability mechanisms\n- Citizen-unfriendly processes\n- Limited use of technology\n\nThis led to the need for good governance reforms and e-governance.",
          marks: 2,
        },
        {
          id: "q3_6",
          statement: "National Integration Council was efficient.",
          answer: true,
          modelAnswer:
            "**TRUE**\n\nThe National Integration Council (NIC) has been efficient in:\n- Promoting national integration since 1961\n- Addressing communal harmony issues\n- Bringing together political leaders across parties\n- Formulating policies against communalism\n- Responding to communal incidents\n- Promoting secular values\n\nHowever, some argue its effectiveness has been limited in preventing all communal incidents.",
          marks: 2,
        },
        {
          id: "q3_7",
          statement:
            "Planning Commission was created to promote agriculture in India.",
          answer: false,
          modelAnswer:
            "**FALSE**\n\nPlanning Commission was created in 1950 for OVERALL ECONOMIC DEVELOPMENT of India, not specifically for agriculture.\n\nIts functions included:\n- Formulating Five Year Plans\n- Allocating resources among ALL sectors (industry, agriculture, infrastructure, social sectors)\n- Setting development priorities\n- Monitoring plan implementation\n\nAgriculture was just one of many sectors covered. It was replaced by NITI Aayog in 2015.",
          marks: 2,
        },
      ],
    },
    {
      id: "q4",
      type: "correlation",
      title: "Q.4 Explain the Correlation",
      marks: 9,
      instructions:
        "Explain the correlation between the following (Any THREE out of 5)",
      required: 3,
      questions: [
        {
          id: "q4_1",
          concepts: "India – Bangladesh",
          modelAnswer:
            "**Correlation: India – Bangladesh**\n\n**Historical Connection:**\n- India helped Bangladesh gain independence in 1971\n- Shared cultural and linguistic ties (Bengali)\n- Common border of 4,096 km (longest for India)\n\n**Areas of Cooperation:**\n- Trade and connectivity (rail, road, waterways)\n- River water sharing (Ganga, Teesta)\n- Security cooperation (counter-terrorism)\n- Power supply from India\n\n**Challenges:**\n- Illegal migration and border issues\n- Teesta water dispute\n- Rohingya refugee crisis\n\n**Conclusion:** India-Bangladesh relations are crucial for regional stability and mutual development.",
          marks: 3,
        },
        {
          id: "q4_2",
          concepts: "Lokpal – Eradication of Corruption",
          modelAnswer:
            "**Correlation: Lokpal – Eradication of Corruption**\n\n**What is Lokpal:**\n- Central anti-corruption ombudsman\n- Established under Lokpal and Lokayuktas Act, 2013\n- First Lokpal: Justice Pinaki Chandra Ghose (2019)\n\n**How Lokpal Helps Eradicate Corruption:**\n- Investigates corruption complaints against:\n  - Prime Minister (with safeguards)\n  - Ministers, MPs\n  - Group A, B, C, D officers\n- Has prosecution powers\n- Can attach property of accused\n- Independent of government\n\n**Limitations:**\n- Delayed appointments\n- Heavy pendency of cases\n- Limited awareness among citizens\n\n**Conclusion:** Lokpal is a key institutional mechanism for fighting corruption at the highest levels.",
          marks: 3,
        },
        {
          id: "q4_3",
          concepts: "Indian Society – Gender Inequality",
          modelAnswer:
            "**Correlation: Indian Society – Gender Inequality**\n\n**Manifestations of Gender Inequality:**\n- Lower female literacy (65% vs 82% male)\n- Wage gap (women earn 19% less)\n- Low workforce participation (25%)\n- Domestic violence (30% women face it)\n- Child marriage and dowry\n\n**Root Causes in Indian Society:**\n- Patriarchal mindset\n- Son preference\n- Limited property rights historically\n- Safety concerns restricting mobility\n\n**Measures to Address:**\n- Constitutional provisions (Articles 14, 15, 16)\n- Laws (Domestic Violence Act, Sexual Harassment Act)\n- Schemes (Beti Bachao Beti Padhao)\n- 33% reservation in local bodies\n\n**Conclusion:** Gender inequality is a persistent challenge requiring sustained social change.",
          marks: 3,
        },
        {
          id: "q4_4",
          concepts: "Human Rights – Humanitarian Intervention",
          modelAnswer:
            "**Correlation: Human Rights – Humanitarian Intervention**\n\n**Connection:**\n- Humanitarian intervention occurs when human rights are massively violated\n- Justification: Responsibility to Protect (R2P) doctrine\n\n**When Intervention Occurs:**\n- Genocide\n- Ethnic cleansing\n- War crimes\n- Crimes against humanity\n\n**Examples:**\n- Kosovo (1999) - NATO intervention\n- Libya (2011) - UN-authorized\n- Rwanda (1994) - failure to intervene\n\n**Debate:**\n- For: Moral duty to protect civilians\n- Against: Violates sovereignty, can be misused\n\n**Conclusion:** Human rights violations can justify intervention, but must be genuinely humanitarian and preferably UN-authorized.",
          marks: 3,
        },
        {
          id: "q4_5",
          concepts: "National Unity – Regional Aspirations",
          modelAnswer:
            "**Correlation: National Unity – Regional Aspirations**\n\n**Balancing Act:**\n- Regional aspirations and national unity can coexist in federal democracy\n- Healthy regionalism strengthens democracy\n\n**How Regional Aspirations Threaten Unity:**\n- Separatist movements\n- Sons-of-soil movements\n- Inter-state disputes\n\n**How They Can Strengthen Unity:**\n- Linguistic reorganization (1956) accommodated aspirations\n- New states (Jharkhand, Telangana) resolved demands peacefully\n- Regional parties participate in national governance\n\n**Constitutional Framework:**\n- Federal structure with strong Centre\n- State autonomy in State List subjects\n- Regional languages recognized\n\n**Conclusion:** Accommodating legitimate regional aspirations through democratic means strengthens national unity.",
          marks: 3,
        },
      ],
    },
    {
      id: "q5",
      type: "opinion",
      title: "Q.5 Express Your Opinion",
      marks: 12,
      instructions:
        "Express your opinion in 25 to 30 words on the following (Any THREE out of 5)",
      required: 3,
      questions: [
        {
          id: "q5_1",
          topic: "E-governance speeds up governmental processes.",
          modelAnswer:
            "**Opinion:**\nYes, e-governance significantly speeds up governmental processes by enabling online applications, digital approvals, automated workflows, and 24/7 service availability. Examples include passport services reduced from 45 days to 7-10 days, and instant Aadhaar verification.",
          marks: 4,
        },
        {
          id: "q5_2",
          topic: "Peace and stability are needed for the nation's progress.",
          modelAnswer:
            "**Opinion:**\nYes, peace and stability are essential prerequisites for progress as they attract investment, enable education and healthcare delivery, allow infrastructure development, and prevent brain drain. Conflict zones like Kashmir have suffered economically due to instability.",
          marks: 4,
        },
        {
          id: "q5_3",
          topic: "Environmental degradation will create a lot of problems.",
          modelAnswer:
            "**Opinion:**\nYes, environmental degradation creates multiple problems including climate change, health issues from pollution, water scarcity, food insecurity, biodiversity loss, and natural disasters. This threatens sustainable development and affects future generations disproportionately.",
          marks: 4,
        },
        {
          id: "q5_4",
          topic: "Liberal Democracy is essential.",
          modelAnswer:
            "**Opinion:**\nYes, liberal democracy is essential as it guarantees fundamental rights, ensures rule of law, provides representation to all sections, enables peaceful change of government, protects minorities, and promotes individual freedom while maintaining social order.",
          marks: 4,
        },
        {
          id: "q5_5",
          topic:
            "Due to globalisation consumers get qualitative goods and services.",
          modelAnswer:
            "**Opinion:**\nYes, globalisation has improved quality of goods and services through increased competition, technology transfer, global quality standards, and consumer choice. MNCs bring world-class products and services to Indian consumers at competitive prices.",
          marks: 4,
        },
      ],
    },
    {
      id: "q6",
      type: "short_answer",
      title: "Q.6 Answer (80-100 words)",
      marks: 10,
      instructions:
        "Answer the following questions in 80 to 100 words (Any TWO out of 4)",
      required: 2,
      questions: [
        {
          id: "q6_1",
          question: "What is left wing extremism?",
          modelAnswer:
            "**Left Wing Extremism (Naxalism):**\n\n**Definition:** Armed revolutionary movement based on Maoist ideology seeking to overthrow the state through violent struggle.\n\n**Origin:** Started in Naxalbari, West Bengal (1967) by Charu Majumdar.\n\n**Ideology:** Armed struggle for peasants/tribals, overthrow of 'bourgeois' state.\n\n**Affected Areas:** Red Corridor - Chhattisgarh, Jharkhand, Odisha, Bihar, Maharashtra.\n\n**Causes:**\n- Tribal exploitation and land alienation\n- Forest rights denial\n- Governance failure and development deficit\n\n**Government Response:** Security operations + development (Aspirational Districts Programme) + surrender policy.",
          marks: 5,
        },
        {
          id: "q6_2",
          question:
            "Explain the Fundamental Principles of Indian Foreign Policy.",
          modelAnswer:
            "**Fundamental Principles of Indian Foreign Policy:**\n\n**1. Non-Alignment:** Independent foreign policy, not aligning with any bloc. India was NAM founder.\n\n**2. Panchsheel (Five Principles):**\n- Mutual respect for territorial integrity\n- Non-aggression\n- Non-interference\n- Equality and mutual benefit\n- Peaceful coexistence\n\n**3. Anti-Colonialism:** Supporting independence movements worldwide.\n\n**4. Support for UN:** Active participation, largest peacekeeping contributor.\n\n**5. Neighborhood First:** Priority to South Asian neighbors.\n\n**6. Strategic Autonomy:** Independent decision-making on global issues.\n\n**7. Global South Leadership:** Voice for developing nations.",
          marks: 5,
        },
        {
          id: "q6_3",
          question: "Explain various measures for empowerment of women.",
          modelAnswer:
            "**Measures for Women Empowerment:**\n\n**1. Constitutional Provisions:**\n- Article 14 (Equality), Article 15(3) (Special provisions)\n- 73rd/74th Amendments (33% reservation in local bodies)\n\n**2. Legislative Measures:**\n- Domestic Violence Act, 2005\n- Sexual Harassment at Workplace Act, 2013\n- Maternity Benefit Act (26 weeks leave)\n\n**3. Government Schemes:**\n- Beti Bachao Beti Padhao\n- Sukanya Samriddhi Yojana\n- MUDRA loans for women entrepreneurs\n- One Stop Centre (Sakhi)\n\n**4. Economic Empowerment:**\n- Self-Help Groups (SHGs)\n- Skill development programs\n\n**5. Institutional:**\n- National Commission for Women",
          marks: 5,
        },
        {
          id: "q6_4",
          question:
            "Discuss some of the specific programmes that aim to bring good governance in India.",
          modelAnswer:
            "**Programmes for Good Governance in India:**\n\n**1. Right to Information Act (2005):**\n- Access to government information\n- Promotes transparency and accountability\n\n**2. Digital India Programme:**\n- E-governance services\n- Digital infrastructure\n- Digital literacy\n\n**3. Direct Benefit Transfer (DBT):**\n- Subsidies directly to bank accounts\n- Eliminates middlemen and leakages\n\n**4. Citizens Charter:**\n- Service delivery standards\n- Time-bound services\n\n**5. Lokpal and Lokayukta:**\n- Anti-corruption ombudsman\n\n**6. CPGRAMS:**\n- Online grievance redressal\n\n**7. E-Courts:**\n- Digital case management\n- Online case status",
          marks: 5,
        },
      ],
    },
    {
      id: "q7",
      type: "long_answer",
      title: "Q.7 Answer (150-200 words)",
      marks: 10,
      instructions:
        "Answer the following questions in 150 to 200 words with reference to the given points (Any ONE out of 2)",
      required: 1,
      questions: [
        {
          id: "q7_1",
          question: "Explain the factors influencing Indian foreign policy:",
          points: [
            "(a) History",
            "(b) Economics",
            "(c) Polity",
            "(d) Geography",
            "(e) International System",
          ],
          modelAnswer:
            "### Factors Influencing Indian Foreign Policy\n\n**(a) History:**\n- Colonial experience shapes anti-imperialist stance\n- Partition trauma affects Pakistan relations\n- 1962 war creates China distrust\n- Freedom movement legacy of non-violence and peace\n\n**(b) Economics:**\n- Energy import dependence (80% crude oil)\n- Trade relationships determine engagements\n- FDI attraction shapes policies\n- Development needs drive partnerships\n\n**(c) Polity:**\n- Democratic values shape foreign policy\n- Public opinion influences decisions (especially on Pakistan)\n- Coalition politics and regional parties' interests\n- PM's vision (Nehru's NAM, Modi's Act East)\n\n**(d) Geography:**\n- Strategic location in Indian Ocean\n- 7,516 km coastline - maritime security priority\n- Land borders with 7 countries\n- Himalayan borders with China/Pakistan\n\n**(e) International System:**\n- Cold War → Non-Alignment\n- Post-Cold War → US engagement\n- Current multipolar → Strategic autonomy\n- Rise of China shapes regional policy\n\n**Conclusion:** Indian foreign policy is shaped by interplay of these factors, requiring balance between principles and pragmatism.",
          marks: 10,
        },
        {
          id: "q7_2",
          question: "Explain the impact of globalisation:",
          points: [
            "(a) Impact on Technology",
            "(b) Social Impact",
            "(c) Cultural Impact",
            "(d) Political Impact",
            "(e) Economic Impact",
          ],
          modelAnswer:
            "### Impact of Globalisation\n\n**(a) Impact on Technology:**\n- Technology transfer to developing countries\n- IT revolution in India (TCS, Infosys global companies)\n- Internet and communication revolution\n- Access to global innovations\n- Digital transformation of services\n\n**(b) Social Impact:**\n- Improved living standards for some\n- Widening inequality between rich and poor\n- Changes in family structures\n- New employment opportunities in services\n- Brain drain of skilled professionals\n\n**(c) Cultural Impact:**\n- Western influence on youth (food, fashion, lifestyle)\n- Spread of English language\n- Global entertainment (Hollywood, Netflix)\n- Cultural homogenization concerns\n- But also spread of Indian culture globally (Yoga, Bollywood)\n\n**(d) Political Impact:**\n- Reduced state sovereignty in economic matters\n- Rise of international organizations (WTO, IMF influence)\n- Global governance mechanisms\n- Human rights and democracy promotion\n- But also nationalist backlash in many countries\n\n**(e) Economic Impact:**\n- Increased trade and FDI\n- Growth of service sector\n- Job creation in IT, BPO\n- But agricultural distress and MSME struggles\n- Consumer benefits: quality, choice, lower prices\n\n**Conclusion:** Globalisation is a double-edged sword with both benefits and challenges requiring balanced policies.",
          marks: 10,
        },
      ],
    },
  ],
};

const PolSciMockTest: React.FC<PolSciMockTestProps> = ({ onClose }) => {
  const [testState, setTestState] = useState<"intro" | "running" | "submitted">(
    "intro",
  );
  const [timeLeft, setTimeLeft] = useState(MOCK_PAPER_2023.duration * 60); // in seconds
  const [isPaused, setIsPaused] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(
    new Set(),
  );
  const [showResults, setShowResults] = useState(false);
  const [selfMarks, setSelfMarks] = useState<Record<string, number>>({});

  // Timer
  useEffect(() => {
    if (testState !== "running" || isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTestState("submitted");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testState, isPaused]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const calculateAutoScore = () => {
    let score = 0;
    MOCK_PAPER_2023.sections.forEach((section) => {
      if (section.type === "mcq" || section.type === "complete_sentence") {
        section.questions.forEach((q: any) => {
          if (answers[q.id] === q.correct) {
            score += q.marks;
          }
        });
      }
      if (section.type === "odd_one") {
        section.questions.forEach((q: any) => {
          if (answers[q.id] === q.answer) {
            score += q.marks;
          }
        });
      }
    });
    return score;
  };

  const submitTest = () => {
    setTestState("submitted");
    setShowResults(true);
  };

  const restartTest = () => {
    setTestState("intro");
    setTimeLeft(MOCK_PAPER_2023.duration * 60);
    setAnswers({});
    setFlaggedQuestions(new Set());
    setShowResults(false);
    setSelfMarks({});
    setCurrentSection(0);
  };

  const renderIntro = () => (
    <div className="flex flex-col items-center p-4 sm:p-6 text-center pb-8">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
        <FileText size={32} className="text-white" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
        {MOCK_PAPER_2023.title}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-6">
        Board Examination Mock Test
      </p>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-md">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-4 rounded-xl">
          <Clock className="mx-auto text-blue-500 mb-1 sm:mb-2" size={20} />
          <p className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-300">
            3 Hours
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400">Duration</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-3 sm:p-4 rounded-xl">
          <Award className="mx-auto text-green-500 mb-1 sm:mb-2" size={20} />
          <p className="text-xl sm:text-2xl font-bold text-green-700 dark:text-green-300">
            80 Marks
          </p>
          <p className="text-xs text-green-600 dark:text-green-400">
            Total Marks
          </p>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl mb-6 w-full max-w-md">
        <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">
          Instructions:
        </h3>
        <ul className="text-sm text-amber-700 dark:text-amber-300 text-left space-y-1">
          <li>• All questions are compulsory</li>
          <li>• MCQs will be auto-graded</li>
          <li>• For subjective questions, model answers will be shown</li>
          <li>• You can self-evaluate and give yourself marks</li>
          <li>• Timer will run throughout the test</li>
        </ul>
      </div>

      <button
        onClick={() => setTestState("running")}
        className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <Play size={20} />
        Start Test
      </button>
    </div>
  );

  const renderQuestion = () => {
    const section = MOCK_PAPER_2023.sections[currentSection];

    return (
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 pb-4">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-3 sm:p-4 text-white">
          <h3 className="font-bold text-base sm:text-lg">{section.title}</h3>
          <p className="text-white/80 text-xs sm:text-sm">
            {section.instructions}
          </p>
          <p className="text-white/60 text-xs mt-1">Marks: {section.marks}</p>
        </div>

        {/* Questions - No max-height, let parent handle scroll */}
        <div className="space-y-3 sm:space-y-4">
          {section.type === "mcq" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <p className="font-medium text-slate-800 dark:text-white text-sm sm:text-base">
                    <span className="text-indigo-500 mr-2">{idx + 1}.</span>
                    {q.question}
                  </p>
                  <button
                    onClick={() => toggleFlag(q.id)}
                    className={`p-1 rounded ${flaggedQuestions.has(q.id) ? "text-red-500" : "text-slate-400"}`}
                  >
                    <Flag size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt: string, optIdx: number) => (
                    <button
                      key={optIdx}
                      onClick={() => handleAnswer(q.id, optIdx)}
                      className={`p-2 sm:p-3 rounded-lg text-sm text-left transition-all ${
                        answers[q.id] === optIdx
                          ? "bg-indigo-500 text-white"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

          {section.type === "incorrect_pair" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm"
              >
                <p className="font-medium text-slate-800 dark:text-white mb-3">
                  <span className="text-indigo-500 mr-2">{idx + 1}.</span>
                  {q.question}
                </p>
                <div className="space-y-2 mb-3">
                  {q.pairs.map((pair: string, pIdx: number) => (
                    <button
                      key={pIdx}
                      onClick={() => handleAnswer(q.id, pIdx)}
                      className={`w-full p-3 rounded-lg text-sm text-left transition-all ${
                        answers[q.id] === pIdx
                          ? "bg-red-500 text-white"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {pair}
                    </button>
                  ))}
                </div>
                <textarea
                  placeholder="Write the correct pair..."
                  value={answers[`${q.id}_correction`] || ""}
                  onChange={(e) =>
                    handleAnswer(`${q.id}_correction`, e.target.value)
                  }
                  className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm"
                  rows={2}
                />
              </div>
            ))}

          {section.type === "complete_sentence" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm"
              >
                <p className="font-medium text-slate-800 dark:text-white mb-3">
                  <span className="text-indigo-500 mr-2">{idx + 1}.</span>
                  {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt: string, optIdx: number) => (
                    <button
                      key={optIdx}
                      onClick={() => handleAnswer(q.id, optIdx)}
                      className={`w-full p-3 rounded-lg text-sm text-left transition-all ${
                        answers[q.id] === optIdx
                          ? "bg-indigo-500 text-white"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

          {section.type === "concept" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm"
              >
                <p className="font-medium text-slate-800 dark:text-white mb-3">
                  <span className="text-indigo-500 mr-2">{idx + 1}.</span>
                  {q.statement}
                </p>
                <input
                  type="text"
                  placeholder="Write the concept..."
                  value={answers[q.id] || ""}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                />
              </div>
            ))}

          {section.type === "odd_one" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm"
              >
                <p className="font-medium text-slate-800 dark:text-white mb-2">
                  <span className="text-indigo-500 mr-2">{idx + 1}.</span>
                  {q.question}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {q.set.map((item: string, iIdx: number) => (
                    <button
                      key={iIdx}
                      onClick={() => handleAnswer(q.id, item)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        answers[q.id] === item
                          ? "bg-rose-500 text-white"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}

          {section.type === "true_false" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm"
              >
                <p className="font-medium text-slate-800 dark:text-white mb-3">
                  <span className="text-indigo-500 mr-2">{idx + 1}.</span>
                  {q.statement}
                </p>
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => handleAnswer(`${q.id}_tf`, true)}
                    className={`flex-1 p-3 rounded-lg font-bold ${
                      answers[`${q.id}_tf`] === true
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    TRUE
                  </button>
                  <button
                    onClick={() => handleAnswer(`${q.id}_tf`, false)}
                    className={`flex-1 p-3 rounded-lg font-bold ${
                      answers[`${q.id}_tf`] === false
                        ? "bg-red-500 text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    FALSE
                  </button>
                </div>
                <textarea
                  placeholder="Write your reason..."
                  value={answers[`${q.id}_reason`] || ""}
                  onChange={(e) =>
                    handleAnswer(`${q.id}_reason`, e.target.value)
                  }
                  className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm"
                  rows={3}
                />
              </div>
            ))}

          {(section.type === "correlation" ||
            section.type === "opinion" ||
            section.type === "short_answer" ||
            section.type === "long_answer") &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm"
              >
                <p className="font-medium text-slate-800 dark:text-white mb-2">
                  <span className="text-indigo-500 mr-2">{idx + 1}.</span>
                  {q.question || q.topic || q.concepts}
                </p>
                {q.points && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {q.points.map((p: string, pIdx: number) => (
                      <span
                        key={pIdx}
                        className="text-xs bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded text-slate-600 dark:text-slate-300"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
                <textarea
                  placeholder={`Write your answer... (${section.type === "opinion" ? "25-30 words" : section.type === "short_answer" ? "80-100 words" : "150-200 words"})`}
                  value={answers[q.id] || ""}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm"
                  rows={
                    section.type === "long_answer"
                      ? 10
                      : section.type === "short_answer"
                        ? 6
                        : 4
                  }
                />
              </div>
            ))}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const autoScore = calculateAutoScore();
    const totalSelfMarks = Object.values(selfMarks).reduce((a, b) => a + b, 0);

    return (
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 pb-6">
        {/* Score Summary */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 sm:p-6 text-white text-center">
          <Award size={36} className="mx-auto mb-2 sm:mb-3" />
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Test Completed!
          </h2>
          <div className="flex justify-center gap-4 sm:gap-8">
            <div>
              <p className="text-2xl sm:text-3xl font-bold">{autoScore}</p>
              <p className="text-xs sm:text-sm text-white/80">Auto-graded</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold">{totalSelfMarks}</p>
              <p className="text-xs sm:text-sm text-white/80">Self-evaluated</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold">
                {autoScore + totalSelfMarks}/80
              </p>
              <p className="text-xs sm:text-sm text-white/80">Total</p>
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        {MOCK_PAPER_2023.sections.map((section) => (
          <div
            key={section.id}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">
                {section.title}
              </h3>
            </div>
            <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
              {section.questions.map((q: any, idx: number) => {
                const isCorrect =
                  section.type === "mcq" || section.type === "complete_sentence"
                    ? answers[q.id] === q.correct
                    : section.type === "odd_one"
                      ? answers[q.id] === q.answer
                      : null;

                return (
                  <div
                    key={q.id}
                    className={`p-3 sm:p-4 rounded-xl ${
                      isCorrect === true
                        ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                        : isCorrect === false
                          ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                          : "bg-slate-50 dark:bg-slate-700"
                    }`}
                  >
                    <p className="font-medium text-slate-800 dark:text-white mb-2 text-sm sm:text-base">
                      {idx + 1}.{" "}
                      {q.question || q.statement || q.topic || q.concepts}
                    </p>

                    {/* Show correct answer for auto-graded */}
                    {(section.type === "mcq" ||
                      section.type === "complete_sentence") && (
                      <div className="text-sm">
                        <p className="text-slate-600 dark:text-slate-400">
                          Your answer:{" "}
                          <span
                            className={
                              isCorrect ? "text-green-600" : "text-red-600"
                            }
                          >
                            {q.options[answers[q.id]] || "Not answered"}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-green-600 dark:text-green-400">
                            Correct: {q.options[q.correct]}
                          </p>
                        )}
                      </div>
                    )}

                    {section.type === "odd_one" && (
                      <div className="text-sm">
                        <p className="text-slate-600 dark:text-slate-400">
                          Your answer:{" "}
                          <span
                            className={
                              isCorrect ? "text-green-600" : "text-red-600"
                            }
                          >
                            {answers[q.id] || "Not answered"}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-green-600 dark:text-green-400">
                            Correct: {q.answer} - {q.reason}
                          </p>
                        )}
                      </div>
                    )}

                    {section.type === "incorrect_pair" && (
                      <div className="text-sm">
                        <p className="text-green-600 dark:text-green-400">
                          Incorrect pair: {q.pairs[q.incorrectIndex]}
                        </p>
                        <p className="text-blue-600 dark:text-blue-400">
                          Correction: {q.correction}
                        </p>
                      </div>
                    )}

                    {section.type === "concept" && (
                      <div className="text-sm">
                        <p className="text-slate-600 dark:text-slate-400">
                          Your answer: {answers[q.id] || "Not answered"}
                        </p>
                        <p className="text-green-600 dark:text-green-400">
                          Expected: {q.answer}
                        </p>
                      </div>
                    )}

                    {/* Subjective questions with model answer and self-grading */}
                    {(section.type === "true_false" ||
                      section.type === "correlation" ||
                      section.type === "opinion" ||
                      section.type === "short_answer" ||
                      section.type === "long_answer") && (
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                          <p className="text-xs text-slate-500 mb-1">
                            Your Answer:
                          </p>
                          <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                            {section.type === "true_false"
                              ? `${answers[`${q.id}_tf`] === true ? "TRUE" : answers[`${q.id}_tf`] === false ? "FALSE" : "Not answered"}\n\nReason: ${answers[`${q.id}_reason`] || "Not provided"}`
                              : answers[q.id] || "Not answered"}
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                          <p className="text-xs text-green-600 dark:text-green-400 mb-1">
                            Model Answer:
                          </p>
                          <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                            {q.modelAnswer}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            Self-evaluate ({q.marks} marks):
                          </span>
                          <input
                            type="number"
                            min="0"
                            max={q.marks}
                            value={selfMarks[q.id] || 0}
                            onChange={(e) =>
                              setSelfMarks((prev) => ({
                                ...prev,
                                [q.id]: Math.min(
                                  q.marks,
                                  Math.max(0, parseInt(e.target.value) || 0),
                                ),
                              }))
                            }
                            className="w-16 p-2 rounded border dark:bg-slate-700 dark:border-slate-600 text-center"
                          />
                          <span className="text-sm text-slate-500">
                            / {q.marks}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Restart Button */}
        <button
          onClick={restartTest}
          className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-2"
        >
          <RotateCcw size={20} />
          Restart Test
        </button>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-slate-100 dark:bg-slate-900 w-full h-full sm:h-auto sm:max-h-[95vh] sm:max-w-4xl sm:rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 sm:p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <FileText className="text-white" size={20} />
            <div>
              <h2 className="font-bold text-white text-sm sm:text-base">
                {MOCK_PAPER_2023.title}
              </h2>
              {testState === "running" && (
                <p className="text-white/80 text-xs">
                  Section {currentSection + 1} of{" "}
                  {MOCK_PAPER_2023.sections.length}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            {testState === "running" && (
              <>
                <div
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-mono font-bold text-sm ${
                    timeLeft < 600
                      ? "bg-red-500 text-white animate-pulse"
                      : "bg-white/20 text-white"
                  }`}
                >
                  <Clock size={14} className="inline mr-1 sm:mr-2" />
                  {formatTime(timeLeft)}
                </div>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="p-2 bg-white/20 rounded-lg text-white"
                >
                  {isPaused ? <Play size={18} /> : <Pause size={18} />}
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="p-2 bg-white/20 rounded-lg text-white hover:bg-white/30"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          {testState === "intro" && renderIntro()}
          {testState === "running" && !showResults && renderQuestion()}
          {(testState === "submitted" || showResults) && renderResults()}
        </div>

        {/* Footer Navigation - only when running */}
        {testState === "running" && !showResults && (
          <div className="bg-white dark:bg-slate-800 border-t dark:border-slate-700 p-2 sm:p-4 shrink-0">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() =>
                  setCurrentSection(Math.max(0, currentSection - 1))
                }
                disabled={currentSection === 0}
                className="px-2 sm:px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center gap-1 sm:gap-2 disabled:opacity-50 text-sm"
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Section dots - scrollable on mobile */}
              <div className="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar flex-1 justify-center px-2">
                {MOCK_PAPER_2023.sections.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSection(idx)}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full text-xs font-bold shrink-0 ${
                      idx === currentSection
                        ? "bg-indigo-500 text-white"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              {currentSection === MOCK_PAPER_2023.sections.length - 1 ? (
                <button
                  onClick={submitTest}
                  className="px-3 sm:px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg flex items-center gap-1 sm:gap-2 font-bold text-sm"
                >
                  <Send size={18} />
                  <span className="hidden sm:inline">Submit</span>
                </button>
              ) : (
                <button
                  onClick={() =>
                    setCurrentSection(
                      Math.min(
                        MOCK_PAPER_2023.sections.length - 1,
                        currentSection + 1,
                      ),
                    )
                  }
                  className="px-2 sm:px-4 py-2 bg-indigo-500 text-white rounded-lg flex items-center gap-1 sm:gap-2 text-sm"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PolSciMockTest;
