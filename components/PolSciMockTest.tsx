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
  Calendar,
} from "lucide-react";

interface PolSciMockTestProps {
  onClose: () => void;
}

// February 2024 Board Paper Data
const MOCK_PAPER_2024 = {
  title: "Political Science - February 2024",
  totalMarks: 80,
  duration: 180,

  sections: [
    {
      id: "q1a_2024",
      type: "mcq",
      title: "Q.1(A) Choose the correct alternative",
      marks: 5,
      instructions:
        "Choose the correct alternative and complete the following statements",
      questions: [
        {
          id: "q1a1_2024",
          question:
            "Today ___ countries of the European Union are part of the Schengen Area.",
          options: ["20", "22", "30", "32"],
          correct: 1,
          marks: 1,
        },
        {
          id: "q1a2_2024",
          question:
            "In ___ Economic System the public and private sector play an important role.",
          options: ["Mixed", "Communist", "Socialist", "Capitalist"],
          correct: 0,
          marks: 1,
        },
        {
          id: "q1a3_2024",
          question:
            "The United Nations set up the World Commission on Environment and Development in the year ___.",
          options: ["1967", "1983", "1990", "2001"],
          correct: 1,
          marks: 1,
        },
        {
          id: "q1a4_2024",
          question: "The Planning Commission was replaced by the ___ Aayog.",
          options: ["Election", "Economic", "Social", "NITI"],
          correct: 3,
          marks: 1,
        },
        {
          id: "q1a5_2024",
          question: "___ joined BRICS in 2010.",
          options: ["Japan", "Bhutan", "South Africa", "Nepal"],
          correct: 2,
          marks: 1,
        },
      ],
    },
    {
      id: "q1b_2024",
      type: "incorrect_pair",
      title: "Q.1(B) Identify the incorrect pair",
      marks: 3,
      instructions:
        "Identify the incorrect pair in every set, correct it and rewrite",
      questions: [
        {
          id: "q1b1_2024",
          question: "Identify the incorrect pair:",
          pairs: [
            "(a) Rise of China and India – Emergence of multipolarity",
            "(b) Ethnic Nationalism – Principle of self determination",
            "(c) Currency of European Union – Dollar",
          ],
          incorrectIndex: 2,
          correction: "Currency of European Union – Euro",
          marks: 1,
        },
        {
          id: "q1b2_2024",
          question: "Identify the incorrect pair:",
          pairs: [
            "(a) Adult Franchise in India – 20 years completed",
            "(b) National Policy for the Empowerment of Women – 2001",
            "(c) Planning Commission of India – 1950",
          ],
          incorrectIndex: 0,
          correction: "Adult Franchise in India – 18 years completed",
          marks: 1,
        },
        {
          id: "q1b3_2024",
          question: "Identify the incorrect pair:",
          pairs: [
            "(a) Trade unions – Political institutions",
            "(b) Birth and death certificate – Administrative machinery",
            "(c) International Organisation – Asian Development Bank",
          ],
          incorrectIndex: 0,
          correction:
            "Trade unions – Economic/Social institutions (not Political)",
          marks: 1,
        },
      ],
    },
    {
      id: "q1c_2024",
      type: "complete_sentence",
      title: "Q.1(C) Complete the statements",
      marks: 4,
      instructions:
        "Complete the following statements by using the appropriate options",
      questions: [
        {
          id: "q1c1_2024",
          question:
            "There was growth in international economic relations, because ___.",
          options: [
            "(a) spread of globalisation",
            "(b) availability of foreign capital",
            "(c) of increased connectivity through mobile phones",
          ],
          correct: 0,
          marks: 1,
        },
        {
          id: "q1c2_2024",
          question: "Planning Commission was setup in India, ___.",
          options: [
            "(a) to increase agricultural productivity",
            "(b) to develop industries",
            "(c) to improve the standard of living of the people and overall development",
          ],
          correct: 2,
          marks: 1,
        },
        {
          id: "q1c3_2024",
          question: "Unilever is a transnational company because ___.",
          options: [
            "(a) it does not consider any particular country as its base",
            "(b) it functions in all sectors",
            "(c) it operates in all countries",
          ],
          correct: 0,
          marks: 1,
        },
        {
          id: "q1c4_2024",
          question: "There was growth of regionalism, because ___.",
          options: [
            "(a) of disintegration of Russia",
            "(b) of multipolarity in the world order",
            "(c) of end of American supremacy",
          ],
          correct: 1,
          marks: 1,
        },
      ],
    },
    {
      id: "q1d_2024",
      type: "concept",
      title: "Q.1(D) State the appropriate concept",
      marks: 4,
      instructions: "State the appropriate concept for the given statements",
      questions: [
        {
          id: "q1d1_2024",
          statement:
            "When a state influences other states without the use of military force.",
          answer: "Soft Power",
          marks: 1,
        },
        {
          id: "q1d2_2024",
          statement:
            "The introduction of high yielding variety of seeds and increased use of irrigation methods.",
          answer: "Green Revolution",
          marks: 1,
        },
        {
          id: "q1d3_2024",
          statement:
            "The person that investigates allegations or grievances arising out of the conduct of public servants in India.",
          answer: "Lokpal / Lokayukta / Ombudsman",
          marks: 1,
        },
        {
          id: "q1d4_2024",
          statement:
            "The instrument of a country to establish, maintain and develop relations with the rest of the world.",
          answer: "Foreign Policy",
          marks: 1,
        },
      ],
    },
    {
      id: "q1e_2024",
      type: "odd_one",
      title: "Q.1(E) Find the odd word",
      marks: 4,
      instructions: "Find the odd word in the given set and rewrite",
      questions: [
        {
          id: "q1e1_2024",
          question: "Prime Ministers of India:",
          set: [
            "Lal Bahadur Shastri",
            "Narendra Modi",
            "Dr. Babasaheb Ambedkar",
            "Atal Bihari Vajpayee",
          ],
          answer: "Dr. Babasaheb Ambedkar",
          reason:
            "Dr. Ambedkar was never PM. He was Chairman of Drafting Committee of Constitution. Others were PMs.",
          marks: 1,
        },
        {
          id: "q1e2_2024",
          question: "International Financial Institutions:",
          set: [
            "International Monetary Fund",
            "Asian Development Bank",
            "World Bank",
            "Maharashtra Bank",
          ],
          answer: "Maharashtra Bank",
          reason:
            "Maharashtra Bank is a private/state bank, not an international financial institution like IMF, ADB, World Bank.",
          marks: 1,
        },
        {
          id: "q1e3_2024",
          question: "Environmental Issues:",
          set: [
            "Climate change",
            "Deforestation",
            "Pollution",
            "Political parties",
          ],
          answer: "Political parties",
          reason:
            "Political parties are not an environmental issue. Climate change, deforestation, and pollution are environmental concerns.",
          marks: 1,
        },
        {
          id: "q1e4_2024",
          question: "Members of SAARC:",
          set: ["India", "Nepal", "Sri Lanka", "China"],
          answer: "China",
          reason:
            "China is NOT a SAARC member. SAARC members: India, Pakistan, Bangladesh, Nepal, Sri Lanka, Bhutan, Maldives, Afghanistan.",
          marks: 1,
        },
      ],
    },
    {
      id: "q3_2024",
      type: "true_false",
      title: "Q.3 True or False with Reasons",
      marks: 10,
      instructions:
        "State whether the following statements are True or False with reasons (Any FIVE out of 7)",
      required: 5,
      questions: [
        {
          id: "q3_1_2024",
          statement:
            "The decade of 1980s is seen as the golden age of humanitarian intervention.",
          answer: false,
          modelAnswer:
            "**FALSE**\n\nThe 1990s (not 1980s) is considered the golden age of humanitarian intervention because:\n- Cold War ended in 1991\n- UN Security Council could act without superpower rivalry\n- Major interventions: Somalia (1992), Bosnia (1995), Kosovo (1999)\n- The 1980s was still marked by Cold War rivalry blocking interventions.",
          marks: 2,
        },
        {
          id: "q3_2_2024",
          statement: "Globalisation introduced the concept of Market Economy.",
          answer: true,
          modelAnswer:
            "**TRUE**\n\nGlobalisation promoted market economy worldwide:\n- LPG reforms (Liberalization, Privatization, Globalization) in 1991 in India\n- Shift from socialist/mixed economy to market economy\n- Private sector expansion\n- Reduced government control on prices\n- Free trade and competition\n- Consumer choice increased\n\nGlobalisation made market economy the dominant economic model globally.",
          marks: 2,
        },
        {
          id: "q3_3_2024",
          statement:
            "Planning Commission was established to promote development in agricultural sector.",
          answer: false,
          modelAnswer:
            "**FALSE**\n\nPlanning Commission was established for OVERALL DEVELOPMENT, not just agriculture.\n\n- Set up in 1950\n- Purpose: Comprehensive economic planning\n- Covered: Industry, agriculture, infrastructure, social sectors\n- Formulated Five Year Plans for all sectors\n- Agriculture was one of many focus areas\n- Replaced by NITI Aayog in 2015",
          marks: 2,
        },
        {
          id: "q3_4_2024",
          statement:
            "Good governance aims at efficient use of natural resources.",
          answer: true,
          modelAnswer:
            "**TRUE**\n\nGood governance includes efficient resource management:\n- Sustainable development goals\n- Environmental protection policies\n- Preventing over-exploitation of resources\n- Transparency in resource allocation\n- Intergenerational equity\n- Conservation for future generations\n\nEfficient use of natural resources is a key principle of good governance.",
          marks: 2,
        },
        {
          id: "q3_5_2024",
          statement:
            "National freedom movement in India played an important role in national integration.",
          answer: true,
          modelAnswer:
            "**TRUE**\n\nFreedom movement united India:\n- Brought together people of all religions, castes, regions\n- Common goal of independence from British\n- Leaders like Gandhi, Nehru united masses\n- Congress party became national platform\n- Developed sense of Indian nationalism\n- Regional movements merged into national movement\n- Created shared national identity",
          marks: 2,
        },
        {
          id: "q3_6_2024",
          statement:
            "Lokayukta can investigate complaints against political executives.",
          answer: true,
          modelAnswer:
            "**TRUE**\n\nLokayukta has jurisdiction over political executives:\n- Can investigate Chief Minister (in most states)\n- Ministers and MLAs/MLCs\n- State government officials\n- Karnataka Lokayukta investigated CM Yeddyurappa\n- Anti-corruption ombudsman at state level\n- Established under state Lokayukta Acts",
          marks: 2,
        },
        {
          id: "q3_7_2024",
          statement: "Democracy is required to establish national integration.",
          answer: true,
          modelAnswer:
            "**TRUE**\n\nDemocracy promotes national integration:\n- Equal political rights for all citizens\n- Representation for all sections including minorities\n- Constitutional provisions for equality\n- Peaceful resolution of conflicts through dialogue\n- Federal structure accommodates regional diversity\n- Reservation policies address historical inequities\n- Democratic participation creates sense of belonging",
          marks: 2,
        },
      ],
    },
    {
      id: "q4_2024",
      type: "correlation",
      title: "Q.4 Explain the Correlation",
      marks: 9,
      instructions:
        "Explain the correlation between the following (Any THREE out of 5)",
      required: 3,
      questions: [
        {
          id: "q4_1_2024",
          concepts: "Economic Interest and Trade Blocs",
          modelAnswer:
            "**Correlation: Economic Interest and Trade Blocs**\n\n**What are Trade Blocs:**\nRegional groups of countries with preferential trade agreements.\n\n**Connection:**\n- Countries form trade blocs to promote their economic interests\n- Reduce tariffs and barriers within the bloc\n- Protect bloc members from external competition\n\n**Examples:**\n- EU (European Union) - single market, common currency\n- ASEAN - Southeast Asian economic cooperation\n- NAFTA/USMCA - North American free trade\n\n**Benefits:**\n- Larger markets for exports\n- Cheaper imports within bloc\n- Collective bargaining power\n- Economic growth through trade\n\n**Conclusion:** Trade blocs are formed primarily to serve economic interests of member countries.",
          marks: 3,
        },
        {
          id: "q4_2_2024",
          concepts: "India and Africa",
          modelAnswer:
            "**Correlation: India and Africa**\n\n**Historical Ties:**\n- Anti-colonial solidarity during freedom struggles\n- NAM founders together\n- Indian diaspora in Africa (especially East Africa)\n\n**Economic Cooperation:**\n- India-Africa Summit since 2008\n- Trade: $90+ billion\n- Indian investment in Africa\n- Duty-free access for African goods\n\n**Development Partnership:**\n- Indian Technical and Economic Cooperation (ITEC)\n- Pan-African e-Network Project\n- Soft loans for infrastructure\n- Capacity building programs\n\n**Strategic Interests:**\n- UN Security Council reform support\n- Indian Ocean security cooperation\n- Counter-terrorism cooperation\n\n**Conclusion:** India-Africa relations are based on historical solidarity and mutual development interests.",
          marks: 3,
        },
        {
          id: "q4_3_2024",
          concepts: "Good Governance and E-Governance",
          modelAnswer:
            "**Correlation: Good Governance and E-Governance**\n\n**How E-Governance Promotes Good Governance:**\n\n**1. Transparency:**\n- Online RTI applications\n- Public information on websites\n- Open data portals\n\n**2. Accountability:**\n- Online tracking of applications\n- Automated service delivery\n- Digital audit trails\n\n**3. Efficiency:**\n- Reduced paperwork and delays\n- 24/7 service availability\n- Faster processing\n\n**4. Citizen Participation:**\n- Online feedback mechanisms\n- E-voting in some countries\n- Digital public consultations\n\n**Examples:**\n- DigiLocker, UMANG app\n- e-Courts, e-Hospitals\n- Direct Benefit Transfer (DBT)\n\n**Conclusion:** E-governance is a powerful tool to achieve good governance objectives.",
          marks: 3,
        },
        {
          id: "q4_4_2024",
          concepts: "GATT and World Trade Organisation",
          modelAnswer:
            "**Correlation: GATT and WTO**\n\n**GATT (General Agreement on Tariffs and Trade):**\n- Established: 1948\n- Purpose: Reduce tariffs and trade barriers\n- Informal arrangement, not an organization\n- Limited to goods trade\n\n**WTO (World Trade Organization):**\n- Established: 1995, replacing GATT\n- Formal international organization\n- Headquarters: Geneva\n- Covers goods, services, intellectual property\n\n**Connection:**\n- WTO incorporated GATT rules\n- Built on GATT's foundation\n- More comprehensive and binding\n- Dispute settlement mechanism\n- 164 member countries\n\n**Conclusion:** WTO is the evolution of GATT into a formal organization with expanded scope.",
          marks: 3,
        },
        {
          id: "q4_5_2024",
          concepts: "Globalisation and Culture",
          modelAnswer:
            "**Correlation: Globalisation and Culture**\n\n**Impact of Globalisation on Culture:**\n\n**Positive Effects:**\n- Cultural exchange and understanding\n- Spread of Indian culture globally (Yoga, Bollywood, cuisine)\n- Access to world literature, music, art\n- Multiculturalism\n\n**Negative Effects:**\n- Cultural homogenization (Westernization)\n- Threat to local cultures and languages\n- Consumerism and materialism\n- Loss of traditional values\n\n**Examples in India:**\n- Western fast food chains\n- English language dominance\n- Hollywood and Netflix influence\n- But also global interest in Indian culture\n\n**Conclusion:** Globalisation is a double-edged sword for culture - it spreads cultures but can also threaten local traditions.",
          marks: 3,
        },
      ],
    },
    {
      id: "q5_2024",
      type: "opinion",
      title: "Q.5 Express Your Opinion",
      marks: 12,
      instructions:
        "Express your opinion in 25 to 30 words on the following (Any THREE out of 5)",
      required: 3,
      questions: [
        {
          id: "q5_1_2024",
          topic: "There is a need to protect the environment.",
          modelAnswer:
            "**Opinion:**\nYes, protecting the environment is essential. Climate change, pollution, and deforestation threaten human survival, biodiversity, and future generations. Sustainable development requires balancing economic growth with environmental conservation for a livable planet.",
          marks: 4,
        },
        {
          id: "q5_2_2024",
          topic: "E-governance speeds up governmental processes.",
          modelAnswer:
            "**Opinion:**\nYes, e-governance significantly accelerates governmental processes through online applications, digital approvals, and automated workflows. Services like passport, driving license, and tax filing now take days instead of weeks, benefiting citizens greatly.",
          marks: 4,
        },
        {
          id: "q5_3_2024",
          topic: "India's role in the Indian Ocean.",
          modelAnswer:
            "**Opinion:**\nIndia plays a crucial role in Indian Ocean security as a regional power. With 7,516 km coastline, India ensures maritime security, combats piracy, provides humanitarian assistance, and balances Chinese influence through SAGAR (Security and Growth for All in the Region) policy.",
          marks: 4,
        },
        {
          id: "q5_4_2024",
          topic: "Regionalism in international politics.",
          modelAnswer:
            "**Opinion:**\nRegionalism strengthens international politics by promoting regional cooperation, economic integration, and collective problem-solving. Organizations like EU, ASEAN, and SAARC address regional issues effectively. However, excessive regionalism can create trade barriers and rivalries.",
          marks: 4,
        },
        {
          id: "q5_5_2024",
          topic: "Positive and negative aspects of globalisation.",
          modelAnswer:
            "**Opinion:**\nGlobalisation has positive aspects like economic growth, technology transfer, and cultural exchange. However, negative aspects include widening inequality, cultural homogenization, and environmental degradation. A balanced approach ensuring benefits reach all sections is needed.",
          marks: 4,
        },
      ],
    },
    {
      id: "q6_2024",
      type: "short_answer",
      title: "Q.6 Answer (80-100 words)",
      marks: 10,
      instructions:
        "Answer the following questions in 80 to 100 words (Any TWO out of 4)",
      required: 2,
      questions: [
        {
          id: "q6_1_2024",
          question:
            "Discuss the political issues in the context of globalization.",
          modelAnswer:
            "**Political Issues in Globalisation:**\n\n**1. Reduced State Sovereignty:**\n- International organizations (IMF, WTO) influence domestic policies\n- Countries must comply with global trade rules\n\n**2. Democratic Deficit:**\n- Decision-making shifted to non-elected bodies\n- Citizens have less control over economic policies\n\n**3. Rise of Nationalism:**\n- Backlash against globalisation (Brexit, Trump)\n- Protectionism increasing\n\n**4. Human Rights vs. Trade:**\n- Trade deals with human rights violators\n- Labor rights concerns in global supply chains\n\n**5. Digital Sovereignty:**\n- Data governance issues\n- Control over internet\n\n**Conclusion:** Globalisation creates political tensions between national sovereignty and international integration.",
          marks: 5,
        },
        {
          id: "q6_2_2024",
          question:
            "What is women empowerment? Explain the measures undertaken for it.",
          modelAnswer:
            "**Women Empowerment:**\n\n**Definition:** Process of enabling women to have control over their lives, participate in decision-making, and achieve equality with men.\n\n**Measures Undertaken:**\n\n**1. Constitutional:**\n- Article 14, 15, 16 (Equality)\n- 73rd/74th Amendment (33% reservation in local bodies)\n\n**2. Legislative:**\n- Domestic Violence Act, 2005\n- Sexual Harassment at Workplace Act, 2013\n- Maternity Benefit Act (26 weeks leave)\n\n**3. Schemes:**\n- Beti Bachao Beti Padhao\n- Sukanya Samriddhi Yojana\n- MUDRA loans for women\n- One Stop Centre (Sakhi)\n\n**4. Economic:**\n- Self-Help Groups\n- Skill development programs",
          marks: 5,
        },
        {
          id: "q6_3_2024",
          question:
            "Explain the features of structural dimension to create national unity.",
          modelAnswer:
            "**Structural Dimension of National Unity:**\n\n**1. Federal Structure:**\n- Division of powers (Union, State, Concurrent Lists)\n- Autonomy for states with strong Centre\n- Accommodates regional diversity\n\n**2. Constitutional Framework:**\n- Single citizenship\n- Uniform civil code (directive principle)\n- Fundamental Rights for all\n\n**3. National Institutions:**\n- Election Commission\n- Supreme Court\n- UPSC for unified civil services\n\n**4. National Symbols:**\n- Flag, Anthem, Emblem\n- National language (Hindi in Devanagari)\n\n**5. Economic Integration:**\n- Single market\n- GST (one nation, one tax)\n- Inter-state connectivity\n\n**Conclusion:** Structural dimensions provide institutional framework for national unity.",
          marks: 5,
        },
        {
          id: "q6_4_2024",
          question:
            "Explain various institutions protecting rights of different sections in India.",
          modelAnswer:
            "**Institutions Protecting Rights in India:**\n\n**1. National Human Rights Commission (NHRC):**\n- Investigates human rights violations\n- Recommends action and compensation\n\n**2. National Commission for Women (NCW):**\n- Protects women's rights\n- Reviews laws affecting women\n\n**3. National Commission for SCs/STs:**\n- Safeguards rights of Scheduled Castes and Tribes\n- Monitors implementation of reservations\n\n**4. National Commission for Minorities:**\n- Protects minority rights\n- Investigates complaints\n\n**5. National Commission for Protection of Child Rights:**\n- Ensures child rights implementation\n\n**6. Central Information Commission:**\n- Ensures Right to Information\n\n**Conclusion:** Multiple commissions protect diverse sections of society.",
          marks: 5,
        },
      ],
    },
    {
      id: "q7_2024",
      type: "long_answer",
      title: "Q.7 Answer (150-200 words)",
      marks: 10,
      instructions:
        "Answer the following questions in 150 to 200 words with reference to the given points (Any ONE out of 2)",
      required: 1,
      questions: [
        {
          id: "q7_1_2024",
          question: "Explain the principles of Indian foreign policy:",
          points: [
            "(1) Non-Alignment",
            "(2) Sovereignty and territorial integrity",
            "(3) Non-intervention in the internal affairs",
            "(4) Belief in peaceful co-existence",
            "(5) Active participation in international organisations",
          ],
          modelAnswer:
            "### Principles of Indian Foreign Policy\n\n**(1) Non-Alignment:**\n- India was a founder of Non-Aligned Movement (1961)\n- Independent foreign policy not aligned to any superpower bloc\n- Strategic autonomy in current multipolar world\n- Decisions based on national interest, not bloc loyalty\n\n**(2) Sovereignty and Territorial Integrity:**\n- Respect for all nations' sovereignty\n- Protection of India's territorial integrity\n- Opposition to aggression and occupation\n- Kashmir is integral part of India\n\n**(3) Non-intervention in Internal Affairs:**\n- Based on Panchsheel principles (1954)\n- No interference in other countries' internal matters\n- Expects similar respect from others\n- However, supports human rights universally\n\n**(4) Belief in Peaceful Co-existence:**\n- Settle disputes through dialogue, not war\n- Promotes world peace and disarmament\n- Opposed to nuclear weapons proliferation\n- Regional stability through cooperation\n\n**(5) Active Participation in International Organisations:**\n- Founding member of UN\n- Largest contributor to UN peacekeeping\n- Active in WTO, IMF, World Bank\n- Seeks permanent UNSC seat\n- Leads developing nations' voice\n\n**Conclusion:** Indian foreign policy is guided by principles ensuring national interest while contributing to global peace and development.",
          marks: 10,
        },
        {
          id: "q7_2_2024",
          question: "Discuss the role of the state in contemporary period:",
          points: [
            "(1) Governance",
            "(2) Economic development",
            "(3) Welfare",
            "(4) Nation building",
            "(5) Peace and Order",
          ],
          modelAnswer:
            "### Role of State in Contemporary Period\n\n**(1) Governance:**\n- Formulating and implementing public policies\n- Ensuring rule of law and justice\n- Providing administrative machinery\n- E-governance for efficient delivery\n- Maintaining transparency and accountability\n\n**(2) Economic Development:**\n- Creating conducive environment for growth\n- Infrastructure development\n- Attracting investment (FDI, domestic)\n- Regulating markets and preventing monopolies\n- Supporting MSMEs and startups\n- Managing monetary and fiscal policy\n\n**(3) Welfare:**\n- Social security schemes (pension, insurance)\n- Healthcare (Ayushman Bharat)\n- Education (Right to Education)\n- Food security (PDS, Mid-day Meals)\n- Housing for poor (PMAY)\n- Employment generation (MGNREGA)\n\n**(4) Nation Building:**\n- Promoting national identity\n- Ensuring national integration\n- Managing diversity (linguistic, religious)\n- Constitutional values promotion\n- Addressing regional imbalances\n\n**(5) Peace and Order:**\n- Internal security maintenance\n- Law enforcement\n- Defense against external threats\n- Counter-terrorism\n- Disaster management\n\n**Conclusion:** The contemporary state plays multifaceted roles balancing development, welfare, and security while adapting to globalisation challenges.",
          marks: 10,
        },
      ],
    },
  ],
};

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

// Available papers
const AVAILABLE_PAPERS = [
  { id: "2024", data: MOCK_PAPER_2024, year: "2024", month: "February" },
  { id: "2023", data: MOCK_PAPER_2023, year: "2023", month: "March" },
];

const PolSciMockTest: React.FC<PolSciMockTestProps> = ({ onClose }) => {
  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);
  const [testState, setTestState] = useState<
    "select" | "intro" | "running" | "submitted"
  >("select");

  // Get selected paper
  const selectedPaper =
    AVAILABLE_PAPERS.find((p) => p.id === selectedPaperId)?.data ||
    MOCK_PAPER_2023;

  const [timeLeft, setTimeLeft] = useState(selectedPaper.duration * 60);
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
    selectedPaper.sections.forEach((section) => {
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
    setTestState("select");
    setSelectedPaperId(null);
    setTimeLeft(selectedPaper.duration * 60);
    setAnswers({});
    setFlaggedQuestions(new Set());
    setShowResults(false);
    setSelfMarks({});
    setCurrentSection(0);
  };

  const selectPaper = (paperId: string) => {
    setSelectedPaperId(paperId);
    const paper = AVAILABLE_PAPERS.find((p) => p.id === paperId)?.data;
    if (paper) {
      setTimeLeft(paper.duration * 60);
    }
    setTestState("intro");
  };

  const renderPaperSelection = () => (
    <div className="flex flex-col items-center p-4 sm:p-6 text-center pb-8">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
        <FileText size={32} className="text-white" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
        Political Science Mock Tests
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Select a board exam paper to practice
      </p>

      <div className="w-full max-w-md space-y-3">
        {AVAILABLE_PAPERS.map((paper) => (
          <button
            key={paper.id}
            onClick={() => selectPaper(paper.id)}
            className="w-full bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all flex items-center gap-4 text-left"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
              <Calendar className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 dark:text-white">
                {paper.month} {paper.year}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Board Examination Paper
              </p>
              <div className="flex gap-2 mt-1">
                <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded">
                  80 Marks
                </span>
                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 px-2 py-0.5 rounded">
                  3 Hours
                </span>
              </div>
            </div>
            <ChevronRight className="text-slate-400" size={20} />
          </button>
        ))}
      </div>

      <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl w-full max-w-md">
        <p className="text-sm text-amber-700 dark:text-amber-300">
          <strong>💡 Tip:</strong> Practice with real board exam papers to
          understand the pattern and scoring.
        </p>
      </div>
    </div>
  );

  const renderIntro = () => (
    <div className="flex flex-col items-center p-4 sm:p-6 text-center pb-8">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
        <FileText size={32} className="text-white" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
        {selectedPaper.title}
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
    const section = selectedPaper.sections[currentSection];

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
        {selectedPaper.sections.map((section) => (
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
                        {answers[q.id] !== undefined && (
                          <p
                            className={`${answers[q.id] === q.incorrectIndex ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                          >
                            Your answer:{" "}
                            {q.pairs[answers[q.id]] || "Not answered"}
                            {answers[q.id] === q.incorrectIndex ? " ✓" : " ✗"}
                          </p>
                        )}
                        {answers[q.id] === undefined && (
                          <p className="text-slate-400 italic">Not answered</p>
                        )}
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
                {testState === "select"
                  ? "Political Science Mock Tests"
                  : selectedPaper.title}
              </h2>
              {testState === "running" && (
                <p className="text-white/80 text-xs">
                  Section {currentSection + 1} of{" "}
                  {selectedPaper.sections.length}
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
          {testState === "select" && renderPaperSelection()}
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
                {selectedPaper.sections.map((_, idx) => (
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

              {currentSection === selectedPaper.sections.length - 1 ? (
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
                        selectedPaper.sections.length - 1,
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
