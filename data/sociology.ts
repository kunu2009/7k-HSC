import { Subject } from '../types';
import { getReelColor } from './helpers';

export const SOC_SUBJECT: Subject = {
        id: 'soc',
        name: 'Sociology', 
        icon: 'Users', 
        color: 'bg-pink-500', 
        syllabus: '1. Introduction to Sociology\n2. Social Groups\n3. Social Stratification\n4. Social Change\n5. Indian Society',
        paperPattern: '### Sociology Paper Pattern (80 Marks)\n\n* **Q.1 MCQs (20 Marks)**\n* **Q.2-Q.5 Short Answers (40 Marks)**\n* **Q.6 Long Answers (20 Marks)**',
        previousPapers: [], 
        chapters: [
          {
            id: 'soc1',
            title: '1. Introduction to Sociology',
            description: 'Meaning, Scope, Importance of Sociology.',
            summary: '**Sociology**: Study of society\n**Father**: Auguste Comte (1838)\n**Word Origin**: Latin "Socius" + Greek "Logos"\n**Focus**: Social relationships, institutions, behavior',
            detailedNotes: '### 1. Meaning of Sociology\n**Definition**: Systematic study of society, social relationships, and social institutions.\n\n**Etymology**:\n* Socius (Latin) = Companion/Society\n* Logos (Greek) = Study/Science\n* Sociology = Science of Society\n\n### 2. Founders & Thinkers\n* **Auguste Comte**: Father of Sociology (coined term in 1838)\n* **Emile Durkheim**: Father of Modern Sociology\n* **Max Weber**: Verstehen (understanding) approach\n* **Karl Marx**: Class conflict theory\n* **Herbert Spencer**: Social Darwinism\n\n### 3. Nature of Sociology\n* **Social Science**: Studies human society\n* **Empirical**: Based on observation\n* **Generalizing**: Finds patterns\n* **Pure Science**: Knowledge for its own sake\n* **Abstract**: Concepts, not concrete\n\n### 4. Scope of Sociology\n**A. Formalistic School** (Simmel, Wiese):\n* Study only forms of social relationships\n* Narrow scope\n\n**B. Synthetic School** (Durkheim, Sorokin):\n* Study all aspects of society\n* Broader scope\n\n### 5. Importance of Sociology\n* Understand social problems\n* Policy making\n* Social planning\n* Self-awareness\n* Career opportunities',
            flashcards: [
              { id: 'f1', front: 'Father of Sociology?', back: 'Auguste Comte (coined term in 1838)' },
              { id: 'f2', front: 'Father of Modern Sociology?', back: 'Emile Durkheim' },
              { id: 'f3', front: 'Meaning of Socius?', back: 'Companion or Society (Latin)' },
              { id: 'f4', front: 'Max Weber is known for?', back: 'Verstehen (understanding) approach' },
              { id: 'f5', front: 'Karl Marx theory?', back: 'Class conflict theory' }
            ],
            mcqs: [
              { id: 'q1', question: 'Term "Sociology" was coined by:', options: ['Durkheim', 'Weber', 'Comte', 'Marx'], correctIndex: 2, explanation: 'Auguste Comte coined it in 1838.' },
              { id: 'q2', question: 'Sociology is derived from:', options: ['Greek only', 'Latin only', 'Latin + Greek', 'French'], correctIndex: 2, explanation: 'Socius (Latin) + Logos (Greek).' },
              { id: 'q3', question: 'Synthetic School advocates:', options: ['Narrow scope', 'Broader scope', 'No scope', 'Limited scope'], correctIndex: 1, explanation: 'Study all aspects of society.' }
            ],
            reels: [
              { id: 'r1', title: 'Sociology', content: 'Socius + Logos.\nScience of Society.\nStudy of social life.', color: getReelColor(0) },
              { id: 'r2', title: 'Auguste Comte', content: 'Father of Sociology.\nCoined term in 1838.\nFrench philosopher.', color: getReelColor(1) },
              { id: 'r3', title: 'Durkheim', content: 'Father of Modern Sociology.\nSocial Facts.\nSuicide study.', color: getReelColor(2) },
              { id: 'r4', title: 'Weber', content: 'Verstehen approach.\nUnderstanding.\nInterpretive sociology.', color: getReelColor(3) },
              { id: 'r5', title: 'Marx', content: 'Class conflict.\nBourgeoisie vs Proletariat.\nCommunism.', color: getReelColor(4) }
            ]
          },
          {
            id: 'soc2',
            title: '2. Social Groups',
            description: 'Primary, Secondary, In-group, Out-group.',
            summary: '**Social Group**: 2+ people with interaction\n**Primary Group**: Family, friends (intimate)\n**Secondary Group**: Organizations (formal)\n**Reference Group**: For comparison/aspiration',
            detailedNotes: '### 1. Meaning of Social Group\nA collection of two or more individuals who interact with each other and share common identity.\n\n**Characteristics**:\n* Mutual awareness\n* Interaction\n* Common interest/goal\n* Sense of unity\n* Group norms\n\n### 2. Types of Groups\n\n**A. Primary Groups** (C.H. Cooley)\n* Small, intimate, face-to-face\n* Examples: Family, Play group, Neighborhood\n* Features: Personal, Informal, Permanent\n\n**B. Secondary Groups**\n* Large, formal, impersonal\n* Examples: Political party, Trade union, School\n* Features: Formal, Goal-oriented, Temporary\n\n**C. In-group vs Out-group** (W.G. Sumner)\n* In-group: "We" feeling (our family, our team)\n* Out-group: "They" feeling (others, rivals)\n\n**D. Reference Group** (Merton)\n* Group we compare ourselves with\n* May or may not be member\n* Examples: Celebrities, Role models\n\n### 3. Importance of Groups\n* Socialization\n* Identity formation\n* Social control\n* Emotional support\n* Division of labor',
            flashcards: [
              { id: 'f1', front: 'Who gave concept of Primary Group?', back: 'C.H. Cooley' },
              { id: 'f2', front: 'Example of Primary Group?', back: 'Family, Friends, Play group' },
              { id: 'f3', front: 'Who gave In-group/Out-group concept?', back: 'W.G. Sumner' },
              { id: 'f4', front: 'Reference Group concept by?', back: 'Robert K. Merton' },
              { id: 'f5', front: 'Secondary groups are?', back: 'Large, formal, impersonal (e.g., Organizations)' }
            ],
            mcqs: [
              { id: 'q1', question: 'Family is a ______ group.', options: ['Secondary', 'Primary', 'Reference', 'Out-group'], correctIndex: 1, explanation: 'Small, intimate, face-to-face relations.' },
              { id: 'q2', question: 'Trade Union is a ______ group.', options: ['Primary', 'Secondary', 'Informal', 'None'], correctIndex: 1, explanation: 'Formal organization with specific goals.' },
              { id: 'q3', question: '"We" feeling indicates:', options: ['Out-group', 'In-group', 'Reference group', 'Secondary group'], correctIndex: 1, explanation: 'Sense of belonging to one\'s own group.' }
            ],
            reels: [
              { id: 'r1', title: 'Social Group', content: '2+ people.\nInteraction.\nCommon identity.', color: getReelColor(0) },
              { id: 'r2', title: 'Primary', content: 'Family, Friends.\nIntimate, Personal.\nCooley\'s concept.', color: getReelColor(1) },
              { id: 'r3', title: 'Secondary', content: 'Organizations.\nFormal, Impersonal.\nGoal-oriented.', color: getReelColor(2) },
              { id: 'r4', title: 'In-group', content: '"We" feeling.\nOur team, Our family.\nSumner\'s concept.', color: getReelColor(3) },
              { id: 'r5', title: 'Reference', content: 'Compare ourselves.\nAspirational.\nMerton\'s concept.', color: getReelColor(4) }
            ]
          },
          {
            id: 'soc3',
            title: '3. Social Stratification',
            description: 'Caste, Class, Inequality in society.',
            summary: '**Stratification**: Layers in society\n**Types**: Caste (closed), Class (open)\n**Caste**: Birth-based, rigid\n**Class**: Economic-based, flexible',
            detailedNotes: '### 1. Meaning\nSocial Stratification is the division of society into layers or strata based on inequality.\n\n### 2. Forms of Stratification\n\n**A. Caste System**\n* Based on birth (ascribed status)\n* Rigid, closed system\n* Hindu society: Brahmin, Kshatriya, Vaishya, Shudra\n* Features: Hereditary, Endogamy, Hierarchy, Occupation fixed\n\n**B. Class System**\n* Based on economic factors (achieved status)\n* Flexible, open system\n* Classes: Upper, Middle, Lower\n* Features: Acquired, Exogamy allowed, Mobility possible\n\n**C. Estate System**\n* Medieval Europe\n* Three estates: Clergy, Nobility, Commoners\n\n**D. Slavery**\n* Most extreme form\n* Person as property\n* Abolished worldwide\n\n### 3. Theories\n* **Functionalist** (Davis & Moore): Inequality is functional, motivates people\n* **Conflict** (Marx): Exploitation by dominant class\n* **Weber**: Class + Status + Power\n\n### 4. Social Mobility\n* **Vertical**: Moving up or down\n* **Horizontal**: Same level, different position\n* **Intergenerational**: Across generations\n* **Intragenerational**: Within one\'s lifetime',
            flashcards: [
              { id: 'f1', front: 'Caste system is based on?', back: 'Birth (ascribed status) - rigid, closed' },
              { id: 'f2', front: 'Class system is based on?', back: 'Economic factors (achieved status) - flexible, open' },
              { id: 'f3', front: 'Four Varnas in Hindu society?', back: 'Brahmin, Kshatriya, Vaishya, Shudra' },
              { id: 'f4', front: 'Weber\'s three dimensions?', back: 'Class, Status, Power' },
              { id: 'f5', front: 'Vertical mobility means?', back: 'Moving up or down in social hierarchy' }
            ],
            mcqs: [
              { id: 'q1', question: 'Caste system is a ______ system.', options: ['Open', 'Closed', 'Flexible', 'Modern'], correctIndex: 1, explanation: 'Based on birth, no mobility possible traditionally.' },
              { id: 'q2', question: 'Class is based on:', options: ['Birth', 'Religion', 'Economic factors', 'Caste'], correctIndex: 2, explanation: 'Wealth, income, occupation determine class.' },
              { id: 'q3', question: 'Weber added ______ to class analysis.', options: ['Caste', 'Status & Power', 'Religion', 'None'], correctIndex: 1, explanation: 'Three dimensions: Class, Status, Power.' }
            ],
            reels: [
              { id: 'r1', title: 'Stratification', content: 'Layers in society.\nBased on inequality.\nHierarchy.', color: getReelColor(0) },
              { id: 'r2', title: 'Caste', content: 'Birth-based.\nClosed system.\nRigid hierarchy.', color: getReelColor(1) },
              { id: 'r3', title: 'Class', content: 'Economic-based.\nOpen system.\nMobility possible.', color: getReelColor(2) },
              { id: 'r4', title: 'Varnas', content: 'Brahmin (Priests).\nKshatriya (Warriors).\nVaishya (Traders).\nShudra (Servants).', color: getReelColor(3) },
              { id: 'r5', title: 'Weber', content: 'Class + Status + Power.\nMulti-dimensional.\nBeyond just money.', color: getReelColor(4) }
            ]
          },
          {
            id: 'soc4',
            title: '4. Social Change',
            description: 'Meaning, Factors, Types of Change.',
            summary: '**Social Change**: Transformation in society\n**Factors**: Technology, Economy, Culture, Politics\n**Types**: Evolution, Revolution, Reform\n**Agents**: Education, Media, Legislation',
            detailedNotes: '### 1. Meaning\nSocial Change refers to alterations in the social structure, culture, and behavior patterns of society over time.\n\n### 2. Characteristics\n* Universal: Happens everywhere\n* Continuous: Never stops\n* Temporal: Takes time\n* Community change: Not individual\n* Chain reaction: One change leads to another\n\n### 3. Factors of Change\n\n**A. Internal Factors**\n* Demographic: Population changes\n* Technological: New inventions\n* Economic: Industrialization, Globalization\n* Cultural: New values, ideas\n\n**B. External Factors**\n* Cultural diffusion\n* War and conflict\n* Natural disasters\n* Contact with other societies\n\n### 4. Types of Social Change\n* **Evolution**: Gradual, slow change\n* **Revolution**: Sudden, radical change\n* **Reform**: Deliberate, planned change\n\n### 5. Theories of Change\n* **Linear** (Comte): Society progresses in stages\n* **Cyclical** (Spengler): Rise and fall patterns\n* **Evolutionary** (Spencer): Simple to complex\n* **Conflict** (Marx): Change through class struggle\n\n### 6. Agents of Change\n* Education\n* Mass media\n* Legislation\n* Social movements\n* Globalization',
            flashcards: [
              { id: 'f1', front: 'What is social change?', back: 'Alterations in social structure, culture, and behavior over time' },
              { id: 'f2', front: 'Revolution is what type of change?', back: 'Sudden and radical change' },
              { id: 'f3', front: 'Evolution is what type of change?', back: 'Gradual and slow change' },
              { id: 'f4', front: 'Marx\'s theory of change?', back: 'Change through class struggle/conflict' },
              { id: 'f5', front: 'Name agents of social change.', back: 'Education, Media, Legislation, Social movements' }
            ],
            mcqs: [
              { id: 'q1', question: 'Social change is:', options: ['Individual', 'Community-based', 'Temporary', 'Rare'], correctIndex: 1, explanation: 'Affects the whole community, not just individuals.' },
              { id: 'q2', question: 'French Revolution is an example of:', options: ['Evolution', 'Reform', 'Revolution', 'None'], correctIndex: 2, explanation: 'Sudden radical change in society.' },
              { id: 'q3', question: 'Cyclical theory was given by:', options: ['Comte', 'Marx', 'Spencer', 'Spengler'], correctIndex: 3, explanation: 'Oswald Spengler - rise and fall of civilizations.' }
            ],
            reels: [
              { id: 'r1', title: 'Social Change', content: 'Transformation in society.\nUniversal & Continuous.\nAlways happening!', color: getReelColor(0) },
              { id: 'r2', title: 'Factors', content: 'Technology, Economy.\nCulture, Politics.\nDemography.', color: getReelColor(1) },
              { id: 'r3', title: 'Evolution', content: 'Slow & Gradual.\nNatural process.\nOver generations.', color: getReelColor(2) },
              { id: 'r4', title: 'Revolution', content: 'Sudden & Radical.\nFrench Revolution.\nComplete overhaul.', color: getReelColor(3) },
              { id: 'r5', title: 'Agents', content: 'Education, Media.\nLaws, Movements.\nGlobalization.', color: getReelColor(4) }
            ]
          },
          {
            id: 'soc5',
            title: '5. Indian Society',
            description: 'Unity in Diversity, Family, Marriage.',
            summary: '**Unity in Diversity**: Many cultures, one nation\n**Joint Family**: Traditional, extended\n**Nuclear Family**: Modern, parents + children\n**Marriage Types**: Monogamy, Polygyny, Polyandry',
            detailedNotes: '### 1. Unity in Diversity\nIndia has diverse religions, languages, cultures, but remains united as one nation.\n\n**Factors of Unity**:\n* Constitution\n* National symbols (Flag, Anthem)\n* Common history\n* Festivals\n* Pilgrimages\n\n### 2. Indian Family System\n\n**A. Joint Family**\n* Three or more generations\n* Common property\n* Common kitchen\n* Patriarchal authority\n* Declining now\n\n**B. Nuclear Family**\n* Parents + children only\n* Separate residence\n* Individual property\n* Growing in cities\n\n### 3. Marriage in India\n\n**Types**:\n* **Monogamy**: One spouse\n* **Polygyny**: One husband, multiple wives\n* **Polyandry**: One wife, multiple husbands (rare)\n\n**Forms**:\n* **Arranged Marriage**: Family decides\n* **Love Marriage**: Individual choice\n* **Endogamy**: Within same group (caste)\n* **Exogamy**: Outside the group (gotra)\n\n### 4. Changes in Indian Society\n* Urbanization\n* Industrialization\n* Women empowerment\n* Education spread\n* Nuclear families increasing\n* Inter-caste marriages\n* Legal reforms (dowry prohibition, divorce laws)',
            flashcards: [
              { id: 'f1', front: 'Unity in Diversity means?', back: 'Many cultures, religions, languages but one nation' },
              { id: 'f2', front: 'Joint family has?', back: 'Three or more generations living together' },
              { id: 'f3', front: 'Nuclear family has?', back: 'Parents and their children only' },
              { id: 'f4', front: 'Endogamy means?', back: 'Marriage within same group (caste)' },
              { id: 'f5', front: 'Exogamy means?', back: 'Marriage outside one\'s group (gotra)' }
            ],
            mcqs: [
              { id: 'q1', question: 'Joint family is:', options: ['Modern', 'Traditional', 'Western', 'Urban'], correctIndex: 1, explanation: 'Traditional Indian family system.' },
              { id: 'q2', question: 'Marrying within same caste is:', options: ['Exogamy', 'Endogamy', 'Monogamy', 'Polygyny'], correctIndex: 1, explanation: 'Endo = within, gamy = marriage.' },
              { id: 'q3', question: 'One husband, multiple wives is:', options: ['Polyandry', 'Monogamy', 'Polygyny', 'Endogamy'], correctIndex: 2, explanation: 'Poly = many, gyny = women.' }
            ],
            reels: [
              { id: 'r1', title: 'Unity in Diversity', content: 'Many religions.\nMany languages.\nOne Nation!', color: getReelColor(0) },
              { id: 'r2', title: 'Joint Family', content: '3+ generations.\nCommon property.\nTraditional.', color: getReelColor(1) },
              { id: 'r3', title: 'Nuclear Family', content: 'Parents + Kids.\nModern.\nUrban trend.', color: getReelColor(2) },
              { id: 'r4', title: 'Endogamy', content: 'Marry within group.\nSame caste.\nTraditional norm.', color: getReelColor(3) },
              { id: 'r5', title: 'Changes', content: 'Urbanization.\nWomen empowerment.\nInter-caste marriage.', color: getReelColor(4) }
            ]
          }
        ]
};
