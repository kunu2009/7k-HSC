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
            ],
            longAnswers: [
              {
                id: 'socl1-1',
                question: 'Define Sociology and explain its nature and scope.',
                mnemonic: 'SCOPE - Science of society, Comte founder, Origin from Latin+Greek, Pure science, Empirical study',
                answer: `### Definition of Sociology

**Meaning**: Sociology is the scientific study of society, social relationships, social institutions, and human social behavior.

**Etymology**:
- Socius (Latin) = Companion/Society
- Logos (Greek) = Study/Science
- Sociology = Science of Society

### Founders of Sociology

| Thinker | Contribution |
|---------|--------------|
| Auguste Comte | Father of Sociology (coined term 1838) |
| Emile Durkheim | Father of Modern Sociology |
| Max Weber | Verstehen (understanding) approach |
| Karl Marx | Class conflict theory |
| Herbert Spencer | Social Darwinism |

### Nature of Sociology

**1. Social Science**
- Studies human society and social life
- Focuses on groups, not individuals

**2. Empirical Science**
- Based on observation and evidence
- Not philosophical speculation

**3. Pure Science**
- Knowledge for its own sake
- Not applied immediately

**4. Generalizing Science**
- Looks for patterns and trends
- Makes generalizations about social behavior

**5. Abstract Science**
- Studies abstract concepts (norms, values)
- Not concrete objects

### Scope of Sociology

**A. Formalistic School (Narrow View)**
- Thinkers: Georg Simmel, Leopold von Wiese
- Sociology studies only forms of social relationships
- Focus: Pure sociology separate from other sciences

**B. Synthetic School (Broader View)**
- Thinkers: Durkheim, Sorokin
- Sociology studies all aspects of society
- Includes: Family, religion, economy, politics

### Importance of Sociology

1. **Understanding Society**: Comprehend social problems
2. **Policy Making**: Helps in social planning
3. **Social Reform**: Identify issues for change
4. **Self-awareness**: Understand our place in society
5. **Career Opportunities**: Research, social work, HR

### Conclusion
Sociology provides scientific understanding of human society, helping us analyze social relationships, institutions, and problems for better social planning and reform.`
              },
              {
                id: 'socl1-2',
                question: 'Explain the contributions of Auguste Comte and Emile Durkheim to Sociology.',
                mnemonic: 'COMTE DURKHEIM - Comte coined term, Organic theory, Modes of thought, Three stages, Empirical method / Durkheim modernized, Universal, Rules, Knowledge, Hierarchy, Empirical, Integration, Moral facts',
                answer: `### Auguste Comte (1798-1857)

**Title**: Father of Sociology

**Background**:
- French philosopher
- Born in Montpellier, France
- Coined term "Sociology" in 1838
- Initially called it "Social Physics"

**Major Contributions**:

**1. Law of Three Stages**
| Stage | Mode of Thought | Explanation |
|-------|-----------------|-------------|
| Theological | Religious | Events explained by gods/supernatural |
| Metaphysical | Abstract | Events explained by abstract forces |
| Positive/Scientific | Scientific | Events explained by observation and laws |

**2. Hierarchy of Sciences**
- Mathematics → Astronomy → Physics → Chemistry → Biology → Sociology
- Each science builds on the previous
- Sociology is the "queen of sciences"

**3. Positivism**
- Knowledge must be based on observation
- Scientific method for studying society
- Rejected speculation and theology

**4. Social Statics and Social Dynamics**
- Statics: Study of social order (how society maintains stability)
- Dynamics: Study of social change (how society progresses)

### Emile Durkheim (1858-1917)

**Title**: Father of Modern Sociology

**Background**:
- French sociologist
- Born in Épinal, France
- First professor of sociology
- Made sociology an academic discipline

**Major Contributions**:

**1. Social Facts**
- External to individuals
- Constraining on individuals
- General in society
- Examples: Laws, norms, beliefs

**2. Division of Labour**
| Type | Society | Basis |
|------|---------|-------|
| Mechanical Solidarity | Traditional | Similarity, shared beliefs |
| Organic Solidarity | Modern | Interdependence, specialization |

**3. Study of Suicide**
| Type | Cause |
|------|-------|
| Egoistic | Low social integration |
| Altruistic | Over-integration (sacrifice) |
| Anomic | Breakdown of norms |
| Fatalistic | Excessive regulation |

**4. Rules of Sociological Method**
- Treat social facts as "things"
- Observe objectively
- Compare across societies

**5. Religion**
- Sacred vs Profane distinction
- Religion promotes social cohesion
- "Elementary Forms of Religious Life"

### Comparison

| Aspect | Comte | Durkheim |
|--------|-------|----------|
| Title | Father of Sociology | Father of Modern Sociology |
| Focus | General development | Empirical research |
| Method | Philosophical | Scientific-empirical |
| Key Work | Positive Philosophy | Rules of Sociological Method |

### Conclusion
Comte laid the foundation of sociology as a discipline, while Durkheim established it as an empirical science with rigorous methods. Together, their contributions shaped modern sociology.`
              },
              {
                id: 'socl1-3',
                question: 'Discuss the relationship between Sociology and other Social Sciences.',
                mnemonic: 'RELATIONSHIP - Related disciplines, Economics overlaps, Law connects, Anthropology similar, Together they study, Inter-disciplinary, Overlapping concerns, Notable differences, Shared subjects, Historical connections, Inter-dependent, Psychology connects',
                answer: `### Introduction

Sociology is one of several social sciences that study human behavior and society. While each has its own focus, they share many common areas and methods.

### Sociology and History

**Similarities**:
- Both study human society
- Both analyze change over time
- Use documentary evidence

**Differences**:
| Sociology | History |
|-----------|---------|
| Studies general patterns | Studies unique events |
| Present-focused | Past-focused |
| Generalizing | Particularizing |
| Scientific method | Historical method |

**Relationship**: "Sociology without history is rootless; History without sociology is fruitless" - G.E. Howard

### Sociology and Economics

**Similarities**:
- Both study human behavior
- Both analyze institutions
- Interest in development

**Differences**:
| Sociology | Economics |
|-----------|-----------|
| All social relationships | Economic relationships |
| Qualitative focus | Quantitative focus |
| Social factors | Economic factors |
| Society as whole | Production, consumption, distribution |

**Relationship**: Economic activities are embedded in social relations (Karl Polanyi)

### Sociology and Political Science

**Similarities**:
- Both study power
- Both analyze institutions
- Interest in social organization

**Differences**:
| Sociology | Political Science |
|-----------|-------------------|
| All social relations | Political relations |
| Society as whole | State and government |
| Informal power too | Formal political power |

**Relationship**: Political behavior is shaped by social factors

### Sociology and Psychology

**Similarities**:
- Both study human behavior
- Interest in personality
- Analyze attitudes

**Differences**:
| Sociology | Psychology |
|-----------|------------|
| Group behavior | Individual behavior |
| Social factors | Mental processes |
| Social institutions | Individual mind |

**Overlapping Area**: Social Psychology

### Sociology and Anthropology

**Similarities**:
- Both study culture
- Both analyze society
- Similar methods (fieldwork)

**Differences**:
| Sociology | Anthropology |
|-----------|--------------|
| Modern societies | Traditional/tribal societies |
| Large-scale studies | Small community studies |
| Complex societies | Simple societies |

**Relationship**: Very close disciplines, sometimes called "twin sisters"

### Sociology and Law

**Connection**:
- Laws reflect social norms
- Legal institutions are social institutions
- Sociology of law studies this relationship

### Inter-disciplinary Nature

**Modern Trends**:
| Sub-field | Combines |
|-----------|----------|
| Political Sociology | Sociology + Politics |
| Economic Sociology | Sociology + Economics |
| Historical Sociology | Sociology + History |
| Social Psychology | Sociology + Psychology |

### Conclusion

Social sciences are inter-related and inter-dependent. While each has its distinct focus and methods, they complement each other in understanding human society. Modern research increasingly uses inter-disciplinary approaches for comprehensive understanding.`
              }
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
            ],
            longAnswers: [
              {
                id: 'socl2-1',
                question: 'Define Social Group and explain its characteristics and types.',
                mnemonic: 'GROUPS - Gathering, Rules, Organization, Unity, Purpose, Shared identity',
                answer: `### Definition of Social Group

**Meaning**: A social group is a collection of two or more individuals who interact with each other, share common identity, interests, or goals, and have a sense of unity.

**According to Sociologists**:
- **Ogburn & Nimkoff**: "A group is a collection of individuals among whom there is interaction"
- **Maclver & Page**: "A group is any collection of human beings brought into social relationship with one another"

### Characteristics of Social Group

| Characteristic | Description |
|----------------|-------------|
| **Mutual Awareness** | Members know they belong to the group |
| **Interaction** | Regular communication and exchange |
| **Common Interest** | Shared goals or purposes |
| **Sense of Unity** | "We" feeling among members |
| **Group Norms** | Shared rules of behavior |
| **Structure** | Defined roles and positions |

### Types of Social Groups

**1. Primary Groups (C.H. Cooley)**

| Feature | Description |
|---------|-------------|
| Size | Small |
| Relations | Face-to-face, intimate |
| Duration | Long-lasting |
| Example | Family, Friends, Neighborhood |

**Characteristics**:
- Personal relationships
- Emotional bonds
- Spontaneous development
- Informal structure
- Total personality involvement

**2. Secondary Groups**

| Feature | Description |
|---------|-------------|
| Size | Large |
| Relations | Impersonal, formal |
| Duration | May be temporary |
| Example | Organizations, Unions, Parties |

**Characteristics**:
- Goal-oriented
- Formal rules
- Limited interaction
- Replaceable members
- Segmental involvement

**3. In-group and Out-group (W.G. Sumner)**

| Type | Feeling | Example |
|------|---------|---------|
| In-group | "We" | Our family, Our team |
| Out-group | "They" | Other teams, Rivals |

**4. Reference Group (Robert Merton)**
- Group we compare ourselves with
- May or may not be actual member
- Influences our behavior and aspirations
- Example: Celebrities, Role models

### Importance of Social Groups

1. **Socialization**: Learn social norms and values
2. **Identity Formation**: Sense of belonging
3. **Social Control**: Groups regulate behavior
4. **Emotional Support**: Fulfillment of needs
5. **Division of Labor**: Cooperation for goals

### Conclusion
Social groups are fundamental to human society, providing identity, support, and social organization essential for individual and collective well-being.`
              },
              {
                id: 'socl2-2',
                question: 'Distinguish between Primary and Secondary Groups with examples.',
                mnemonic: 'PRIMARY - Personal, Relationships intimate, Informal, Meaningful, Affection, Relatives, Youthful bonds / SECONDARY - Structured, Efficiency, Contractual, Organization, Norms, Detached, Associations, Rules, You can leave',
                answer: `### Introduction

Social groups are classified into Primary and Secondary groups based on the nature of relationships among members. This distinction was first made by C.H. Cooley in 1909.

### Primary Groups

**Definition**: Small groups characterized by intimate, face-to-face interaction and personal relationships.

**Coined by**: Charles Horton Cooley

**Characteristics**:
| Feature | Description |
|---------|-------------|
| Size | Small |
| Relationship | Personal, intimate |
| Contact | Face-to-face, direct |
| Duration | Long-lasting |
| Structure | Informal |
| Goals | No specific goals |
| Membership | Involuntary (born into) |

**Examples**:
1. Family
2. Peer group / Friends
3. Play group
4. Neighborhood
5. Village community

**Functions**:
- Primary socialization
- Emotional security
- Identity formation
- Personality development

### Secondary Groups

**Definition**: Large groups characterized by impersonal, formal relationships focused on specific goals.

**Characteristics**:
| Feature | Description |
|---------|-------------|
| Size | Large |
| Relationship | Impersonal, formal |
| Contact | Indirect (often through representatives) |
| Duration | May be temporary |
| Structure | Formal, bureaucratic |
| Goals | Specific objectives |
| Membership | Voluntary (choice to join) |

**Examples**:
1. Political parties
2. Trade unions
3. Educational institutions
4. Corporate organizations
5. Professional associations

**Functions**:
- Achieve specific goals
- Division of labor
- Economic activities
- Political organization

### Comparison Table

| Basis | Primary Group | Secondary Group |
|-------|---------------|-----------------|
| **Size** | Small | Large |
| **Relations** | Intimate, personal | Impersonal, formal |
| **Contact** | Face-to-face | Indirect |
| **Structure** | Informal | Formal/Bureaucratic |
| **Goals** | General welfare | Specific objectives |
| **Membership** | Often involuntary | Usually voluntary |
| **Duration** | Permanent | May be temporary |
| **Interest** | Total personality | Segmental (limited aspect) |
| **Control** | Informal (praise/shame) | Formal (rules/laws) |
| **Example** | Family | Trade Union |

### Interdependence

**Primary to Secondary**:
- Values learned in family shape work behavior
- Family support enables organizational participation

**Secondary to Primary**:
- Work schedule affects family time
- Economic conditions impact family life

### Changes in Modern Society

**Trends**:
1. Decline of joint families
2. Rise of nuclear families
3. Increased secondary group participation
4. Virtual communities (online groups)

### Conclusion
Both primary and secondary groups are essential for society. Primary groups provide emotional foundation while secondary groups achieve complex social goals. Modern society sees increasing importance of secondary groups while primary groups remain fundamental for socialization and emotional well-being.`
              },
              {
                id: 'socl2-3',
                question: 'Explain the concept of Reference Group and its importance in socialization.',
                mnemonic: 'REFERENCE - Role models, Evaluation standard, Frame of reference, Expectations set, Relative deprivation, Norms borrowed, Comparison, Expectations',
                answer: `### Introduction

The concept of Reference Group was developed by Herbert Hyman (1942) and elaborated by Robert K. Merton. It refers to any group that individuals use as a standard for self-evaluation and behavior.

### Definition

**Reference Group**: A group that serves as a point of reference for individuals in forming their attitudes, values, and behaviors.

**According to Merton**: "Groups to which individuals relate themselves as parts or to which they aspire to relate themselves psychologically"

### Types of Reference Groups

**1. Based on Membership**

| Type | Description | Example |
|------|-------------|---------|
| Membership Reference Group | Person is a member | Own family, workplace |
| Non-membership Reference Group | Person is NOT a member | Celebrities, elite class |

**2. Based on Function**

| Type | Function | Example |
|------|----------|---------|
| Normative | Sets norms and values | Family teaching values |
| Comparative | Used for comparison | Comparing grades with toppers |

**3. Based on Attitude**

| Type | Attitude | Example |
|------|----------|---------|
| Positive Reference Group | Aspire to join/imitate | Role models, successful people |
| Negative Reference Group | Avoid/oppose | Groups one rejects |

### Characteristics of Reference Groups

1. **Standard of Comparison**: Used to evaluate oneself
2. **Source of Norms**: Provides behavioral guidelines
3. **May be Real or Imaginary**: Can be actual or idealized
4. **Multiple Groups**: Person can have several reference groups
5. **Dynamic**: Changes over time and context

### Role in Socialization

**1. Value Formation**
- Individuals adopt values of reference groups
- Learn what is desirable/undesirable

**2. Behavior Shaping**
| Aspect | Process |
|--------|---------|
| Dress | Imitate style of reference group |
| Language | Adopt speech patterns |
| Attitudes | Form opinions based on reference group |

**3. Aspiration Setting**
- Career goals influenced by reference groups
- Educational aspirations shaped

**4. Identity Formation**
- Self-concept developed through comparison
- Social identity shaped

### Relative Deprivation

**Concept**: Feeling of deprivation by comparing with reference group

**Example**:
- Middle-class person feels poor when comparing with upper class
- Villager feels backward comparing with city dweller

**Significance**:
- Explains social discontent
- Drives social mobility
- Can cause frustration

### Importance of Reference Groups

| Area | Importance |
|------|------------|
| **Consumer Behavior** | Buying decisions influenced |
| **Political Attitudes** | Voting behavior shaped |
| **Career Choices** | Professional aspirations set |
| **Social Conformity** | Behavior regulated |
| **Self-evaluation** | Self-esteem affected |

### Examples in Daily Life

1. **Students**: Use toppers as reference for grades
2. **Teenagers**: Use celebrities for fashion/lifestyle
3. **Professionals**: Use successful people in field
4. **Social Climbers**: Use upper class for behavior

### Criticism

1. **Multiple Groups**: Confusion when references conflict
2. **Unrealistic Standards**: Can lead to frustration
3. **Relative Nature**: Not absolute standards

### Conclusion
Reference groups play a crucial role in socialization by providing standards for behavior, values, and self-evaluation. Understanding this concept helps explain why people behave the way they do and how social influence operates in society.`
              }
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
            ],
            longAnswers: [
              {
                id: 'socl3-1',
                question: 'Define Social Stratification and explain its major forms.',
                mnemonic: 'STRATIFICATION - Strata layers, Types many, Ranks fixed, Ascribed or achieved, Tradition or money, Inequality, Forms differ, Inherited or earned, Caste class estate, Access varies, Theories explain, Inequality persists, Origin differs, Nation-specific',
                answer: `### Definition of Social Stratification

**Meaning**: Social Stratification is the division of society into hierarchical layers (strata) based on unequal distribution of resources, prestige, and power.

**Etymology**: Stratum (Latin) = Layer

**According to Sociologists**:
- **Gisbert**: "The division of society into permanent groups or categories linked with each other by the relationship of superiority and subordination"
- **Ogburn & Nimkoff**: "Process by which individuals and groups are ranked in a more or less enduring hierarchy of status"

### Characteristics of Social Stratification

| Characteristic | Description |
|----------------|-------------|
| **Universal** | Found in all societies |
| **Social** | Based on social factors, not individual |
| **Ancient** | Existed since early civilizations |
| **Diverse** | Takes different forms |
| **Consequential** | Affects life chances |

### Major Forms of Stratification

**1. Caste System**

| Feature | Description |
|---------|-------------|
| Basis | Birth (ascribed status) |
| Mobility | None (closed system) |
| Marriage | Endogamous (within caste) |
| Occupation | Fixed by birth |
| Location | India, Nepal, parts of Asia |

**Varna System**:
1. Brahmin (Priests, scholars)
2. Kshatriya (Warriors, rulers)
3. Vaishya (Merchants, traders)
4. Shudra (Servants, laborers)
5. Dalits/Untouchables (Outside varna)

**2. Class System**

| Feature | Description |
|---------|-------------|
| Basis | Economic factors (achieved status) |
| Mobility | Possible (open system) |
| Marriage | No restrictions |
| Occupation | Based on merit/opportunity |
| Location | Modern industrial societies |

**Classes**:
- Upper Class (wealthy, powerful)
- Middle Class (professionals, managers)
- Working Class (manual laborers)
- Lower Class (poor, unemployed)

**3. Estate System (Feudal)**

| Estate | Members |
|--------|---------|
| First | Clergy (Church) |
| Second | Nobility (Lords) |
| Third | Commoners (Peasants, merchants) |

- Found in Medieval Europe
- Based on land ownership
- Limited mobility

**4. Slavery**

| Feature | Description |
|---------|-------------|
| Status | Person as property |
| Rights | None |
| Most extreme | Form of inequality |
| Now | Abolished worldwide |

### Comparison of Forms

| Basis | Caste | Class | Estate |
|-------|-------|-------|--------|
| **Membership** | Birth | Achievement | Birth/land |
| **Mobility** | None | Possible | Limited |
| **Marriage** | Endogamy | Open | Within estate |
| **System** | Closed | Open | Semi-closed |

### Conclusion
Social stratification takes various forms depending on the society's history, culture, and economy. While caste is rigid and birth-based, class allows mobility through achievement. Understanding these forms helps analyze inequality in different societies.`
              },
              {
                id: 'socl3-2',
                question: 'Compare and contrast Caste and Class systems of stratification.',
                mnemonic: 'CASTE vs CLASS - Closed vs Open, Ascribed vs Achieved, Sacred vs Secular, Traditional vs Modern, Economic vs Ritual',
                answer: `### Introduction

Caste and Class are two major forms of social stratification. While caste is primarily found in India, class is the dominant form in modern industrial societies. Both create inequality but differ fundamentally in their basis and characteristics.

### Caste System

**Definition**: A system of social stratification based on birth, with rigid hierarchy and no possibility of mobility.

**Origin**: Ancient India (possibly from Varna system)

**Characteristics**:
| Feature | Description |
|---------|-------------|
| Basis | Birth (ascribed) |
| Hierarchy | Religious/ritual purity |
| Mobility | Not possible |
| Marriage | Endogamy (within caste) |
| Occupation | Fixed by birth |
| Commensality | Restrictions on eating together |
| Sanctions | Religious and social |

### Class System

**Definition**: A system of social stratification based on economic factors, with hierarchy but possibility of mobility.

**Origin**: Industrial Revolution, Capitalism

**Characteristics**:
| Feature | Description |
|---------|-------------|
| Basis | Economic (achieved) |
| Hierarchy | Wealth and income |
| Mobility | Possible (up or down) |
| Marriage | No restrictions |
| Occupation | Based on merit |
| Commensality | No restrictions |
| Sanctions | Economic and legal |

### Comparison Table

| Aspect | Caste | Class |
|--------|-------|-------|
| **Basis** | Birth, hereditary | Economic, achievement |
| **Status** | Ascribed (given at birth) | Achieved (earned) |
| **Mobility** | Closed (no movement) | Open (movement possible) |
| **Marriage** | Endogamous | Exogamous allowed |
| **Occupation** | Fixed, hereditary | Based on merit |
| **Nature** | Religious, ritual | Secular, economic |
| **Sanctions** | Religious, social ostracism | Legal, economic |
| **Consciousness** | Strong caste identity | Class consciousness varies |
| **Example** | Indian society | Western industrial societies |

### Similarities

1. **Both create hierarchy**: Unequal layers in society
2. **Both affect life chances**: Access to resources, opportunities
3. **Both involve inequality**: Unequal distribution of wealth, status
4. **Both influence lifestyle**: Different standards of living
5. **Both affect social interaction**: Who you associate with

### Changes in Modern India

**Declining Caste Features**:
- Constitutional abolition of untouchability
- Reservation policies
- Urbanization reducing caste visibility
- Inter-caste marriages increasing
- Occupational mobility

**Rise of Class Elements**:
- Economic status becoming important
- Education opening opportunities
- Middle class growing
- Consumerism spreading

**Interaction of Caste and Class**:
| Scenario | Example |
|----------|---------|
| High caste, High class | Brahmin businessman |
| High caste, Low class | Poor Brahmin priest |
| Low caste, High class | Dalit entrepreneur |
| Low caste, Low class | Dalit laborer |

### Theoretical Perspectives

**Marxist View**:
- Class is fundamental
- Caste is false consciousness
- Economic relations determine everything

**Weberian View**:
- Class, Status, Power are separate dimensions
- Caste combines status and economic factors

### Conclusion
While caste and class differ fundamentally in their basis and characteristics, in contemporary India, both systems coexist and interact. Modern India sees a complex interplay where economic class is becoming increasingly important while caste identity remains socially significant.`
              },
              {
                id: 'socl3-3',
                question: 'Explain the concept of Social Mobility and its types.',
                mnemonic: 'MOBILITY - Movement in hierarchy, Open systems, Barriers exist, Individual or group, Lateral or vertical, Intergenerational, Types many, You can rise or fall',
                answer: `### Definition of Social Mobility

**Meaning**: Social Mobility refers to the movement of individuals or groups from one social position to another in the stratification system.

**According to Sorokin**: "By social mobility is understood any transition of an individual or social object from one social position to another"

### Characteristics

| Feature | Description |
|---------|-------------|
| Movement | Change in social position |
| Direction | Can be up or down |
| Individual/Group | Can affect one person or many |
| System-dependent | More in open, less in closed systems |

### Types of Social Mobility

**1. Vertical Mobility**

Movement up or down in the social hierarchy.

| Type | Direction | Example |
|------|-----------|---------|
| Upward | Low to High | Clerk becomes manager |
| Downward | High to Low | Businessman goes bankrupt |

**Examples of Upward Mobility**:
- Education leading to better job
- Entrepreneurship creating wealth
- Political rise

**Examples of Downward Mobility**:
- Job loss
- Business failure
- Economic crisis affecting status

**2. Horizontal Mobility**

Movement within the same social level.

| Feature | Description |
|---------|-------------|
| Level | Remains same |
| Position | Changes |
| Status | Similar |

**Examples**:
- Teacher in one school joins another school
- Clerk transfers to different department
- Doctor moves from one hospital to another

**3. Intergenerational Mobility**

Movement across generations (parent to child).

| Type | Direction | Example |
|------|-----------|---------|
| Upward | Child higher than parent | Farmer's son becomes doctor |
| Downward | Child lower than parent | Businessman's son becomes clerk |
| Static | Same position | Doctor's son becomes doctor |

**4. Intragenerational Mobility**

Movement within one person's lifetime.

| Feature | Description |
|---------|-------------|
| Span | One generation |
| Individual | Same person |
| Timeline | During career/life |

**Example**: Person starts as junior clerk, retires as senior manager

**5. Structural Mobility**

Movement due to changes in society's structure.

| Cause | Effect |
|-------|--------|
| Industrialization | New occupations created |
| Economic growth | More middle-class jobs |
| Technology | Old jobs disappear, new emerge |

### Factors Affecting Social Mobility

**1. Individual Factors**
| Factor | Impact |
|--------|--------|
| Education | Increases opportunities |
| Skills | Enhances employability |
| Motivation | Drives achievement |

**2. Social Factors**
| Factor | Impact |
|--------|--------|
| Family background | Initial resources |
| Social networks | Connections help |
| Discrimination | Barriers for some groups |

**3. Structural Factors**
| Factor | Impact |
|--------|--------|
| Economic development | Creates opportunities |
| Government policies | Reservations, scholarships |
| Type of stratification | Caste limits, class allows |

### Mobility in Different Systems

| System | Mobility Level | Reason |
|--------|---------------|--------|
| Caste | Very low | Birth determines position |
| Estate | Low | Land-based hierarchy |
| Class | High | Achievement-based |

### Social Mobility in India

**Traditional Period**:
- Limited by caste
- Occupation fixed
- Little vertical mobility

**Modern Period**:
- Constitutional provisions
- Education expansion
- Reservation policies
- Urbanization

**Current Trends**:
1. Sanskritization (adopting upper caste practices)
2. Westernization
3. Education as mobility channel
4. Political power for lower castes

### Conclusion
Social mobility is essential for a dynamic society. While closed systems like caste restrict mobility, open class systems encourage it. Modern India sees increasing mobility through education, urbanization, and government policies, though barriers persist.`
              }
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
            ],
            longAnswers: [
              {
                id: 'socl4-1',
                question: 'Define Social Change and explain its characteristics.',
                mnemonic: 'CHANGE - Continuous, Historical, All societies, Natural, General, Everywhere',
                answer: `### Definition of Social Change

**Meaning**: Social Change refers to alterations in the social structure, culture, social institutions, and patterns of behavior in society over time.

**According to Sociologists**:
- **Kingsley Davis**: "Social change is meant only such alterations as occur in social organization"
- **MacIver**: "Social change refers to a change in social relationships"
- **Gillin & Gillin**: "Social change means variations from the accepted modes of life"

### Characteristics of Social Change

| Characteristic | Description |
|----------------|-------------|
| **Universal** | Found in all societies, everywhere |
| **Continuous** | Never stops, always happening |
| **Temporal** | Takes place over time |
| **Community-based** | Affects groups, not just individuals |
| **Inevitable** | Cannot be stopped or prevented |
| **Uneven** | Different rates in different societies |

### Nature of Social Change

**1. Universal Phenomenon**
- No society is static
- Change varies in degree and pace
- Both simple and complex societies change

**2. Chain Reaction**
- One change leads to another
- Interconnected changes
- Example: Industrialization → Urbanization → Family change

**3. Direction Varies**
| Direction | Meaning | Example |
|-----------|---------|--------|
| Progress | Improvement | Education spread |
| Decline | Deterioration | Environmental degradation |
| Cyclical | Rise and fall | Fashion trends |

**4. Multi-causal**
- No single cause
- Multiple factors interact
- Complex causation

### Factors of Social Change

**Internal Factors**:
| Factor | Example |
|--------|--------|
| Demographic | Population growth/decline |
| Technological | New inventions |
| Economic | Industrialization |
| Cultural | New ideas, values |
| Political | Revolutions, reforms |

**External Factors**:
- Cultural diffusion
- War and conquest
- Natural disasters
- Contact with other societies

### Importance of Studying Social Change

1. **Understanding Society**: How societies evolve
2. **Predicting Trends**: Future developments
3. **Policy Making**: Planning social programs
4. **Social Reform**: Deliberate intervention
5. **Historical Understanding**: Past to present

### Conclusion
Social change is universal, continuous, and inevitable. Understanding its characteristics helps us comprehend societal transformation and plan for the future.`
              },
              {
                id: 'socl4-2',
                question: 'Explain the major theories of Social Change.',
                mnemonic: 'THEORIES - Traditional to modern, Historical stages, Evolution, Oscillation, Revolution, Internal conflict, External factors, Structural changes',
                answer: `### Introduction

Various sociological theories explain how and why social change occurs. These theories offer different perspectives on the nature, direction, and causes of change.

### 1. Evolutionary Theory

**Proponents**: Auguste Comte, Herbert Spencer

**Main Idea**: Society evolves from simple to complex forms, like biological evolution.

**Comte's Law of Three Stages**:
| Stage | Thought Pattern | Society Type |
|-------|----------------|-------------|
| Theological | Religious/Supernatural | Traditional |
| Metaphysical | Abstract forces | Transitional |
| Positive/Scientific | Scientific laws | Modern |

**Spencer's Social Darwinism**:
- Society evolves like organisms
- "Survival of the fittest"
- Simple → Complex structures

**Criticism**:
- Too optimistic about progress
- Ethnocentric (Western = advanced)
- Ignores decline and regression

### 2. Cyclical Theory

**Proponents**: Oswald Spengler, Arnold Toynbee

**Main Idea**: Societies rise, flourish, and decline in cycles.

**Spengler's View**:
| Stage | Characteristics |
|-------|----------------|
| Birth | New civilization emerges |
| Growth | Development, creativity |
| Maturity | Peak achievement |
| Decline | Decay, eventual death |

**Toynbee's Challenge-Response**:
- Civilizations rise in response to challenges
- Success depends on creative response
- Failure leads to decline

**Criticism**:
- Deterministic
- Ignores human agency
- Difficult to predict cycles

### 3. Conflict Theory

**Proponent**: Karl Marx

**Main Idea**: Change results from conflict between opposing groups.

**Marxist View**:
| Concept | Explanation |
|---------|------------|
| Historical Materialism | Economic conditions drive history |
| Class Conflict | Bourgeoisie vs. Proletariat |
| Dialectical Change | Thesis → Antithesis → Synthesis |
| Revolution | Overthrow of exploiting class |

**Stages of Society (Marx)**:
1. Primitive Communism
2. Slave Society
3. Feudalism
4. Capitalism
5. Socialism
6. Communism

**Criticism**:
- Overemphasis on economic factors
- Revolution not always outcome
- Doesn't explain all societies

### 4. Functionalist Theory

**Proponents**: Talcott Parsons, Emile Durkheim

**Main Idea**: Society changes to maintain equilibrium and adapt.

**Key Concepts**:
- Differentiation: Society becomes more specialized
- Integration: New mechanisms maintain unity
- Adaptation: Society adjusts to environment

**Criticism**:
- Conservative bias
- Ignores conflict
- Slow to explain rapid change

### 5. Modernization Theory

**Main Idea**: Traditional societies become modern through development.

**Features of Modernization**:
| Traditional | Modern |
|-------------|--------|
| Rural | Urban |
| Agricultural | Industrial |
| Religious | Secular |
| Ascribed status | Achieved status |

**Criticism**:
- Western-centric
- Ignores exploitation
- Not universal path

### Comparison of Theories

| Theory | Cause of Change | Direction |
|--------|----------------|----------|
| Evolutionary | Natural progress | Linear (upward) |
| Cyclical | Internal dynamics | Circular |
| Conflict | Class struggle | Revolutionary |
| Functionalist | Adaptation | Equilibrium |
| Modernization | Development | Traditional to Modern |

### Conclusion
Each theory offers valuable insights into social change. A comprehensive understanding requires considering multiple perspectives, as change is complex and multi-causal.`
              },
              {
                id: 'socl4-3',
                question: 'Discuss the agents of Social Change with examples.',
                mnemonic: 'AGENTS - Activism, Government, Education, Networks, Technology, Social movements',
                answer: `### Introduction

Agents of social change are the forces, institutions, and individuals that bring about transformation in society. They can be intentional (planned reforms) or unintentional (technological innovations).

### Major Agents of Social Change

### 1. Education

**Role**: Education is a powerful agent that transforms attitudes, values, and behavior.

**How Education Causes Change**:
| Aspect | Impact |
|--------|--------|
| Knowledge | Awareness of rights and issues |
| Values | Modern, rational thinking |
| Mobility | Enables social and economic rise |
| Questioning | Challenges traditions |

**Examples in India**:
- Spread of education reduced child marriage
- Women's education led to empowerment
- Technical education drove industrialization

### 2. Technology

**Role**: Innovations in technology transform how society functions.

**Types of Technological Change**:
| Type | Example | Impact |
|------|---------|--------|
| Agricultural | Tractors, HYV seeds | Green Revolution |
| Industrial | Machines, factories | Urbanization |
| Communication | Mobile, Internet | Information revolution |
| Medical | Vaccines, treatments | Longer life span |

**Impact of Digital Technology**:
- Changed communication patterns
- E-commerce transforming markets
- Social media enabling movements
- Work from home culture

### 3. Mass Media

**Role**: Spreads information, creates awareness, shapes public opinion.

**Types and Impact**:
| Medium | Reach | Impact |
|--------|-------|--------|
| Newspapers | Literate population | Awareness, opinion formation |
| Television | Mass audience | Entertainment, information |
| Social Media | Global, instant | Mobilization, trends |

**Examples**:
- Anna Hazare's anti-corruption movement (media coverage)
- #MeToo movement (social media)
- Awareness campaigns (health, sanitation)

### 4. Legislation (Law)

**Role**: Laws can mandate change and prohibit harmful practices.

**Examples of Social Legislation in India**:
| Law | Year | Change Brought |
|-----|------|---------------|
| Sati Prohibition | 1829 | Ended widow burning |
| Child Marriage Restraint | 1929 | Raised marriage age |
| Hindu Code Bills | 1955-56 | Women's rights in marriage |
| Dowry Prohibition | 1961 | Penalized dowry |
| Right to Education | 2009 | Universal education |

**Limitations**:
- Law alone cannot change attitudes
- Implementation challenges
- Social acceptance needed

### 5. Social Movements

**Role**: Organized collective action to bring change.

**Types**:
| Type | Goal | Example |
|------|------|--------|
| Reform | Modify existing system | Women's rights movement |
| Revolutionary | Complete change | Independence movement |
| Resistance | Oppose change | Anti-globalization |
| Alternative | Create alternatives | Cooperative movements |

**Famous Social Movements in India**:
- Independence Movement
- Chipko Movement (environmental)
- Anti-Caste Movements
- Women's Movements
- LGBTQ+ Rights Movement

### 6. Economic Changes

**Role**: Economic development transforms society.

**Impact of Liberalization (1991)**:
| Aspect | Change |
|--------|--------|
| Employment | New job types, IT sector |
| Consumption | Global brands, mall culture |
| Lifestyle | Changed aspirations |
| Family | Women working, nuclear families |

### 7. Urbanization

**Role**: Rural to urban migration transforms values and relationships.

**Changes Due to Urbanization**:
- Weakening of caste restrictions
- Nuclear families increase
- Anonymity reduces social control
- New occupations emerge

### 8. Globalization

**Role**: Connects societies worldwide, leading to cultural exchange.

**Impact**:
- Cultural diffusion (food, fashion, ideas)
- Economic integration
- Information exchange
- Westernization debates

### Interrelation of Agents

Agents don't work in isolation:
- Education + Technology → Skilled workforce
- Media + Movements → Awareness campaigns
- Law + Education → Implementation success

### Conclusion
Social change results from the complex interplay of multiple agents. Understanding these agents helps in planning deliberate social transformation and addressing societal challenges.`
              }
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
            ],
            longAnswers: [
              {
                id: 'socl5-1',
                question: 'Explain the concept of Unity in Diversity in Indian Society.',
                mnemonic: 'UNITY - United nation, National symbols, Integration factors, Traditions shared, Year-round festivals',
                answer: `### Introduction

"Unity in Diversity" is a defining characteristic of Indian society. Despite vast differences in religion, language, culture, and ethnicity, India remains united as one nation.

### Diversity in India

**Religious Diversity**:
| Religion | Population % (approx) |
|----------|----------------------|
| Hinduism | 79.8% |
| Islam | 14.2% |
| Christianity | 2.3% |
| Sikhism | 1.7% |
| Buddhism | 0.7% |
| Jainism | 0.4% |
| Others | 0.9% |

**Linguistic Diversity**:
- 22 Official languages (8th Schedule)
- 1,600+ languages and dialects
- Different scripts (Devanagari, Tamil, etc.)

**Cultural Diversity**:
- Regional cuisines
- Traditional dresses
- Art forms (classical, folk)
- Festivals (regional variations)

**Ethnic Diversity**:
- Dravidian, Aryan, Mongoloid groups
- Tribal populations
- Regional identities

### Factors Promoting Unity

**1. Constitutional Unity**
| Element | Role |
|---------|------|
| Single Citizenship | One national identity |
| Fundamental Rights | Equal rights for all |
| Directive Principles | Common goals |
| Secular State | No state religion |

**2. National Symbols**
- National Flag (Tiranga)
- National Anthem (Jana Gana Mana)
- National Emblem (Ashoka Chakra)
- National Animal, Bird, Flower

**3. Common History**
- Freedom struggle united all
- Shared heroes (Gandhi, Nehru, Bose)
- Colonial experience
- Post-independence nation building

**4. Pilgrimage Centers**
- Char Dham (four corners)
- Varanasi, Ayodhya, Mathura
- Ajmer Sharif, Golden Temple
- Creates national circulation

**5. Festivals**
| Festival | Spread |
|----------|--------|
| Diwali | Pan-India |
| Eid | All states |
| Christmas | Urban, Christian areas |
| Holi | North, spreading nationwide |

**6. Interregional Exchange**
- All-India services (IAS, IPS)
- National institutions (IITs, IIMs)
- National sports teams
- Bollywood and popular culture

### Challenges to Unity

| Challenge | Description |
|-----------|-------------|
| Communalism | Religious conflicts |
| Regionalism | State vs national identity |
| Casteism | Caste-based divisions |
| Linguistic conflicts | Language politics |
| Separatism | Demands for independence |

### Mechanisms to Maintain Unity

**Constitutional Provisions**:
- Article 1: India as Union of States
- Article 51A: Fundamental Duties
- Special provisions for diverse groups

**Institutional Mechanisms**:
- National Integration Council
- Human Rights Commission
- Minority Commission

### Sociological Significance

1. **Composite Culture**: Synthesis of different traditions
2. **Syncretism**: Blending of religious practices
3. **Secularism**: Respect for all religions
4. **Accommodation**: Living with differences

### Conclusion
Unity in Diversity is not just a slogan but a lived reality in India. While challenges exist, the nation has shown remarkable ability to maintain unity despite its vast diversity, making it a unique example in the world.`
              },
              {
                id: 'socl5-2',
                question: 'Describe the features and changes in the Indian Family System.',
                mnemonic: 'FAMILY - Four types, Arranged marriage, Men headed, Inheritance, Living together, Younger generations changing',
                answer: `### Introduction

The family is the basic unit of Indian society. Indian family system has distinct features and is undergoing significant changes due to modernization.

### Types of Family in India

**1. Based on Structure**
| Type | Composition | Features |
|------|-------------|----------|
| Joint Family | 3+ generations | Common property, kitchen |
| Nuclear Family | Parents + children | Separate residence |
| Extended Family | Nuclear + relatives | Not common residence |

**2. Based on Authority**
| Type | Head | Example |
|------|------|--------|
| Patriarchal | Male (father) | Most of India |
| Matriarchal | Female (mother) | Khasi, Nair communities |

**3. Based on Residence**
| Type | After Marriage |
|------|----------------|
| Patrilocal | Wife goes to husband's home |
| Matrilocal | Husband goes to wife's home |
| Neolocal | New independent residence |

### Features of Traditional Joint Family

**Characteristics**:
| Feature | Description |
|---------|-------------|
| Common Residence | All members under one roof |
| Common Property | Ancestral property shared |
| Common Kitchen | Eating together |
| Common Worship | Family deity |
| Patriarchal Authority | Eldest male as head (Karta) |
| Coparcenary | Male inheritance rights |

**Functions of Joint Family**:
1. Economic: Pooled resources, shared expenses
2. Educational: Socialization of children
3. Recreational: Joint celebrations
4. Protective: Security for all members
5. Religious: Common rituals

### Changes in Indian Family

**Structural Changes**:
| Traditional | Modern |
|-------------|--------|
| Joint families dominant | Nuclear families increasing |
| Large families | Small families (2 children) |
| Extended kinship | Limited kinship ties |

**Functional Changes**:
| Aspect | Change |
|--------|--------|
| Authority | Less patriarchal |
| Decision making | More democratic |
| Women's role | Economic participation |
| Children | More attention, fewer children |

**Causes of Change**:
1. **Industrialization**: Migration to cities for work
2. **Urbanization**: Space constraints in cities
3. **Education**: Changed aspirations
4. **Women's Employment**: Economic independence
5. **Legislation**: Property rights for women
6. **Individualism**: Personal freedom valued

### Marriage in India

**Types Based on Number**:
| Type | Definition | Status |
|------|------------|--------|
| Monogamy | One spouse | Legal norm |
| Polygyny | Multiple wives | Illegal (except Muslims) |
| Polyandry | Multiple husbands | Very rare (tribal areas) |

**Types Based on Choice**:
| Type | Who Decides | Trend |
|------|-------------|-------|
| Arranged Marriage | Family | Still dominant |
| Love Marriage | Individual | Increasing |
| Love-cum-arranged | Both | Growing |

**Rules of Marriage**:
| Rule | Meaning |
|------|--------|
| Endogamy | Within same group (caste) |
| Exogamy | Outside one's gotra |
| Hypergamy | Woman marrying higher status |
| Hypogamy | Woman marrying lower status |

### Contemporary Trends

**New Family Forms**:
- Single-parent families
- Live-in relationships
- Same-sex partnerships (emerging)
- DINK (Double Income No Kids)

**Challenges**:
| Issue | Concern |
|-------|--------|
| Elderly care | Who looks after aged parents? |
| Work-life balance | Dual career couples |
| Divorce | Increasing rates |
| Domestic violence | Still prevalent |

### Conclusion
The Indian family system is in transition, balancing traditional values with modern realities. While nuclear families are increasing, family ties remain important in Indian culture.`
              },
              {
                id: 'socl5-3',
                question: 'Analyze the changes in Indian society due to Modernization and Globalization.',
                mnemonic: 'MODERN GLOBAL - Migration, Occupations, Dress, Education, Religion, Nuclear families / Goods, Lifestyle, Opportunities, Business, Attitudes, Language',
                answer: `### Introduction

Modernization and Globalization are two major forces transforming Indian society. While modernization began with colonialism and continued post-independence, globalization accelerated after 1991 economic reforms.

### Understanding the Concepts

**Modernization**:
- Transition from traditional to modern society
- Involves industrialization, urbanization, rationalization
- Adoption of scientific thinking and technology

**Globalization**:
- Integration of world economies and cultures
- Free flow of goods, services, capital, ideas
- Interconnected world through technology

### Changes Due to Modernization

**1. Economic Changes**
| Aspect | Traditional | Modern |
|--------|-------------|--------|
| Economy | Agricultural | Industrial/Service |
| Work | Family-based | Factory/Office |
| Income | Subsistence | Wage-based |
| Market | Local | National/Global |

**2. Social Structure Changes**
| Institution | Change |
|-------------|--------|
| Caste | Weakening, but not eliminated |
| Joint Family | Declining, nuclear rising |
| Marriage | More individual choice |
| Gender roles | Women entering workforce |

**3. Cultural Changes**
- Scientific thinking vs superstition
- Secular attitudes growing
- Western influence in lifestyle
- English education spreading

### Changes Due to Globalization (Post-1991)

**1. Economic Transformation**
| Sector | Impact |
|--------|--------|
| IT/ITES | Major employer, global recognition |
| Retail | Malls, supermarkets |
| Finance | Foreign banks, investments |
| Manufacturing | MNCs, exports |

**2. Consumer Culture**
| Aspect | Change |
|--------|--------|
| Brands | Global brands popular |
| Food | Fast food chains (McDonald's, Pizza Hut) |
| Fashion | Western wear, global trends |
| Entertainment | Hollywood, Netflix, social media |

**3. Communication Revolution**
- Mobile phone penetration
- Internet and social media
- 24/7 news channels
- Digital payments

**4. Employment Changes**
| Traditional | New |
|-------------|-----|
| Government jobs | Private sector |
| Local companies | MNCs |
| Lifetime employment | Job mobility |
| Seniority-based | Performance-based |

### Impact on Different Sections

**Urban Middle Class**:
- Major beneficiaries
- New consumption patterns
- Career opportunities
- Changed lifestyles

**Rural Areas**:
- Uneven impact
- Agriculture neglected
- Migration to cities
- Digital divide

**Women**:
| Positive | Negative |
|----------|----------|
| Employment opportunities | Double burden |
| Economic independence | Work-family conflict |
| Education access | New forms of exploitation |

**Youth**:
- New career options
- Global exposure
- Changed aspirations
- Identity questions

### Debates and Concerns

**Cultural Concerns**:
| Issue | Argument |
|-------|----------|
| Westernization | Losing Indian identity? |
| Consumerism | Materialism over values |
| Language | English vs regional languages |
| Traditional values | Erosion of family values |

**Economic Concerns**:
- Inequality increasing
- Agriculture crisis
- Informal sector neglected
- Environmental degradation

**Social Concerns**:
- Rural-urban divide
- Digital divide
- Generational conflicts
- Mental health issues

### Sociological Perspectives

**Optimistic View**:
- Progress and development
- Breaking traditional barriers
- Individual freedom
- Global opportunities

**Critical View**:
- Imperialism in new form
- Cultural homogenization
- Increased inequality
- Loss of local traditions

### Conclusion
Modernization and Globalization have transformed Indian society in complex ways. While offering opportunities for development and individual advancement, they also create challenges of inequality, cultural change, and social disruption. A balanced approach that harnesses benefits while protecting vulnerable sections is needed.`
              }
            ]
          },
          {
            id: 'soc6',
            title: '6. Market as a Social Institution',
            description: 'Understanding markets, exchange, and economic sociology.',
            summary: '**Market**: Social institution for exchange\n**Types**: Weekly, Periodic, Permanent\n**Features**: Buyers, Sellers, Competition, Price mechanism\n**Social Embeddedness**: Markets shaped by social relations',
            detailedNotes: `### 1. Understanding Markets

**Definition**: A market is a social institution where exchange of goods and services takes place.

**Key Sociological Insight**: Markets are not just economic - they are embedded in social relations, culture, and power structures.

### 2. Types of Markets

**A. Based on Time**
* **Weekly Markets (Haat)**: Rural areas, specific days
* **Periodic Markets**: Seasonal fairs (mela)
* **Permanent Markets**: Daily operation, urban areas

**B. Based on Goods**
* **Commodity Markets**: Physical goods
* **Labour Markets**: Employment exchange
* **Capital Markets**: Stocks, shares, bonds
* **Land Markets**: Real estate

### 3. Features of Markets

1. **Buyers and Sellers**: Essential participants
2. **Competition**: Multiple sellers/buyers
3. **Price Mechanism**: Supply-demand determines price
4. **Information**: Knowledge about goods/prices
5. **Regulation**: Rules governing exchange

### 4. Social Embeddedness (Karl Polanyi)

Markets are not separate from society - they are:
* Shaped by social relationships
* Influenced by cultural norms
* Regulated by institutions
* Affected by power relations

**Examples**:
* Caste determines who can sell what
* Gender affects market participation
* Trust networks in business

### 5. Commodification

**Definition**: Converting non-market things into market commodities

**Examples**:
* Labour power becoming wage work
* Land becoming real estate
* Water becoming bottled product
* Education becoming service industry

### 6. Globalization and Markets

* **MNCs**: Transnational corporations
* **Free Trade**: Reduced barriers
* **Consumer Culture**: Global brands
* **Digital Markets**: E-commerce revolution

### 7. Informal Economy

* **Street Vendors**: Unregulated sellers
* **Home-based Work**: Women workers
* **Features**: No job security, low wages
* **Size in India**: 80%+ workforce`,
            flashcards: [
              { id: 'soc6f1', front: 'What is a market in sociology?', back: 'A social institution where exchange of goods and services takes place, embedded in social relations' },
              { id: 'soc6f2', front: 'Who gave the concept of Social Embeddedness?', back: 'Karl Polanyi' },
              { id: 'soc6f3', front: 'What is a Weekly Market called in rural India?', back: 'Haat (हाट)' },
              { id: 'soc6f4', front: 'What is commodification?', back: 'Converting non-market things into market commodities (e.g., water, education)' },
              { id: 'soc6f5', front: 'What percentage of Indian workforce is in informal economy?', back: 'Over 80%' },
              { id: 'soc6f6', front: 'What are the main types of markets based on goods?', back: 'Commodity, Labour, Capital, and Land markets' },
              { id: 'soc6f7', front: 'What is a periodic market?', back: 'Seasonal fairs or melas that occur periodically' },
              { id: 'soc6f8', front: 'What determines price in a market?', back: 'Supply and demand mechanism' },
              { id: 'soc6f9', front: 'How does caste affect markets?', back: 'It determines who can sell what and creates occupational hierarchies' },
              { id: 'soc6f10', front: 'What is informal economy?', back: 'Unregulated economic activities like street vending, home-based work' },
              { id: 'soc6f11', front: 'Features of informal sector?', back: 'No job security, low wages, no benefits, unregulated' },
              { id: 'soc6f12', front: 'What is a labour market?', back: 'Market where workers sell their labor power for wages' },
              { id: 'soc6f13', front: 'What is capital market?', back: 'Market for stocks, shares, bonds, and financial instruments' },
              { id: 'soc6f14', front: 'How has globalization affected markets?', back: 'MNCs, free trade, consumer culture, e-commerce' },
              { id: 'soc6f15', front: 'What is social embeddedness of markets?', back: 'Markets are shaped by social relationships, culture, and power structures' },
              { id: 'soc6f16', front: 'Example of commodification of nature?', back: 'Bottled water - converting free natural resource into commodity' },
              { id: 'soc6f17', front: 'What are MNCs?', back: 'Multinational/Transnational Corporations operating across countries' },
              { id: 'soc6f18', front: 'How does gender affect markets?', back: 'Women face barriers in market participation, relegated to informal work' },
              { id: 'soc6f19', front: 'What is free trade?', back: 'Trade with reduced barriers, tariffs, and restrictions between countries' },
              { id: 'soc6f20', front: 'What is consumer culture?', back: 'Society oriented around consumption, global brands, advertising' },
              { id: 'soc6f21', front: 'What is e-commerce?', back: 'Digital/online markets - buying and selling over internet' },
              { id: 'soc6f22', front: 'What are trust networks in business?', back: 'Social relationships that enable business transactions based on trust' },
              { id: 'soc6f23', front: 'Why are markets called social institutions?', back: 'They operate within social norms, relationships, and cultural contexts' },
              { id: 'soc6f24', front: 'What is a commodity?', back: 'Any good or service that can be bought and sold in the market' },
              { id: 'soc6f25', front: 'How is education commodified?', back: 'Private schools, coaching classes, education as service industry' },
              { id: 'soc6f26', front: 'What regulates market behavior?', back: 'Laws, social norms, institutions, and cultural values' },
              { id: 'soc6f27', front: 'Difference between formal and informal economy?', back: 'Formal: regulated, taxed, benefits; Informal: unregulated, no benefits' },
              { id: 'soc6f28', front: 'Who are street vendors?', back: 'Informal sellers on streets without permanent shops or licenses' },
              { id: 'soc6f29', front: 'What is land market?', back: 'Real estate market where land and property are bought and sold' },
              { id: 'soc6f30', front: 'Role of information in markets?', back: 'Buyers and sellers need information about prices, quality for fair exchange' }
            ],
            mcqs: [
              { id: 'soc6q1', question: 'Markets are embedded in:', options: ['Only economic factors', 'Social relations and culture', 'Government rules only', 'None of these'], correctIndex: 1, explanation: 'Karl Polanyi showed markets are socially embedded.' },
              { id: 'soc6q2', question: 'Weekly market in rural India is called:', options: ['Mandi', 'Haat', 'Mall', 'Bazaar'], correctIndex: 1, explanation: 'Haat is the traditional weekly market in villages.' },
              { id: 'soc6q3', question: 'Commodification means:', options: ['Making things free', 'Converting things into sellable goods', 'Banning sale', 'Government control'], correctIndex: 1, explanation: 'Converting non-market things into market commodities.' },
              { id: 'soc6q4', question: 'What percentage of Indian workforce is in informal sector?', options: ['20%', '50%', '80%+', '10%'], correctIndex: 2, explanation: 'Over 80% workers are in unorganized/informal sector.' },
              { id: 'soc6q5', question: 'Who gave the concept of social embeddedness?', options: ['Marx', 'Weber', 'Polanyi', 'Durkheim'], correctIndex: 2, explanation: 'Karl Polanyi introduced social embeddedness of markets.' },
              { id: 'soc6q6', question: 'Labour market involves:', options: ['Selling land', 'Selling labor for wages', 'Selling stocks', 'Selling commodities'], correctIndex: 1, explanation: 'Workers sell their labor power in exchange for wages.' },
              { id: 'soc6q7', question: 'Periodic markets are:', options: ['Daily markets', 'Seasonal fairs', 'Online shops', 'Wholesale markets'], correctIndex: 1, explanation: 'Melas and fairs occurring at intervals.' },
              { id: 'soc6q8', question: 'Price in market is determined by:', options: ['Government', 'Sellers only', 'Supply and demand', 'Buyers only'], correctIndex: 2, explanation: 'Price mechanism based on supply-demand.' },
              { id: 'soc6q9', question: 'Informal economy features:', options: ['Job security', 'High wages', 'No regulation', 'Benefits'], correctIndex: 2, explanation: 'Informal sector is unregulated, no job security.' },
              { id: 'soc6q10', question: 'MNC stands for:', options: ['Market National Company', 'Multinational Corporation', 'Modern National Company', 'Market New Concept'], correctIndex: 1, explanation: 'Multinational/Transnational Corporations.' },
              { id: 'soc6q11', question: 'Capital market deals with:', options: ['Vegetables', 'Labour', 'Stocks and shares', 'Land'], correctIndex: 2, explanation: 'Financial instruments like stocks, bonds.' },
              { id: 'soc6q12', question: 'Caste affects markets by:', options: ['Increasing competition', 'Determining occupations', 'Reducing prices', 'None'], correctIndex: 1, explanation: 'Caste-based occupational restrictions in traditional markets.' },
              { id: 'soc6q13', question: 'E-commerce refers to:', options: ['Electric shops', 'Online buying/selling', 'Export commerce', 'Emergency commerce'], correctIndex: 1, explanation: 'Digital markets on internet.' },
              { id: 'soc6q14', question: 'Street vendors are part of:', options: ['Formal economy', 'Informal economy', 'Government sector', 'Corporate sector'], correctIndex: 1, explanation: 'Unregulated sellers in informal sector.' },
              { id: 'soc6q15', question: 'Globalization promotes:', options: ['Local markets only', 'Free trade and MNCs', 'Barter system', 'Isolation'], correctIndex: 1, explanation: 'Globalization expands free trade, MNCs, consumer culture.' },
              { id: 'soc6q16', question: 'Trust networks help in:', options: ['Competition', 'Business transactions', 'Price rise', 'Unemployment'], correctIndex: 1, explanation: 'Social trust enables business relationships.' },
              { id: 'soc6q17', question: 'Consumer culture is characterized by:', options: ['No advertising', 'Global brands', 'Self-sufficiency', 'Barter'], correctIndex: 1, explanation: 'Consumption-oriented society with global brands.' },
              { id: 'soc6q18', question: 'Bottled water is example of:', options: ['Free good', 'Commodification', 'Public good', 'Common property'], correctIndex: 1, explanation: 'Natural resource converted into commodity.' },
              { id: 'soc6q19', question: 'Home-based workers are mostly:', options: ['Men', 'Women', 'Children', 'Elderly'], correctIndex: 1, explanation: 'Women predominantly in home-based informal work.' },
              { id: 'soc6q20', question: 'Free trade means:', options: ['No cost goods', 'Reduced trade barriers', 'Government monopoly', 'No trade'], correctIndex: 1, explanation: 'Trade with reduced tariffs and restrictions.' },
              { id: 'soc6q21', question: 'Markets as social institutions means:', options: ['Only economic', 'Embedded in social norms', 'Isolated from society', 'Government run'], correctIndex: 1, explanation: 'Markets operate within social contexts.' },
              { id: 'soc6q22', question: 'Labour commodification means:', options: ['Free labour', 'Labour as sellable service', 'Unpaid work', 'Forced labour'], correctIndex: 1, explanation: 'Labour power becoming wage work.' },
              { id: 'soc6q23', question: 'Real estate market is:', options: ['Labour market', 'Land market', 'Capital market', 'Commodity market'], correctIndex: 1, explanation: 'Buying and selling of land and property.' },
              { id: 'soc6q24', question: 'Information in markets helps:', options: ['Hiding prices', 'Fair exchange', 'Monopoly', 'Cheating'], correctIndex: 1, explanation: 'Knowledge about prices/quality enables fair deals.' },
              { id: 'soc6q25', question: 'Gender affects market participation because:', options: ['Men shop more', 'Women face barriers', 'No effect', 'Equal access'], correctIndex: 1, explanation: 'Women face social barriers in market participation.' },
              { id: 'soc6q26', question: 'Mandi is a:', options: ['Weekly haat', 'Wholesale market', 'Online shop', 'Street vendor'], correctIndex: 1, explanation: 'Agricultural wholesale market.' },
              { id: 'soc6q27', question: 'Private coaching is example of:', options: ['Public good', 'Commodification of education', 'Free service', 'Government scheme'], correctIndex: 1, explanation: 'Education converted into market service.' },
              { id: 'soc6q28', question: 'Competition in markets involves:', options: ['Single seller', 'Multiple buyers/sellers', 'No buyers', 'Monopoly only'], correctIndex: 1, explanation: 'Multiple participants competing.' },
              { id: 'soc6q29', question: 'Regulation of markets comes from:', options: ['Laws only', 'Social norms only', 'Laws, norms, institutions', 'No regulation'], correctIndex: 2, explanation: 'Multiple sources regulate market behavior.' },
              { id: 'soc6q30', question: 'Permanent markets are found in:', options: ['Villages only', 'Urban areas mainly', 'Forests', 'Mountains'], correctIndex: 1, explanation: 'Daily operation markets in cities/towns.' }
            ],
            reels: [
              { id: 'soc6r1', title: 'Market = Social', content: 'Not just economic!\nEmbedded in society.\nKarl Polanyi.', color: getReelColor(0) },
              { id: 'soc6r2', title: 'Haat', content: 'Weekly market.\nRural India.\nSpecific days.', color: getReelColor(1) },
              { id: 'soc6r3', title: 'Commodification', content: 'Water → Bottle.\nEducation → Service.\nLabour → Wages.', color: getReelColor(2) },
              { id: 'soc6r4', title: 'Informal Sector', content: '80%+ workers.\nNo security.\nStreet vendors.', color: getReelColor(3) },
              { id: 'soc6r5', title: 'Market Types', content: 'Commodity, Labour.\nCapital, Land.\nAll different!', color: getReelColor(4) },
              { id: 'soc6r6', title: 'Price Mechanism', content: 'Supply + Demand.\nDetermines price.\nMarket forces.', color: getReelColor(5) },
              { id: 'soc6r7', title: 'MNCs', content: 'Multinational Corps.\nGlobal operations.\nBig brands.', color: getReelColor(6) },
              { id: 'soc6r8', title: 'E-commerce', content: 'Online shopping.\nDigital markets.\nAmazon, Flipkart.', color: getReelColor(7) },
              { id: 'soc6r9', title: 'Trust Networks', content: 'Social relationships.\nEnable business.\nWithout contracts.', color: getReelColor(8) },
              { id: 'soc6r10', title: 'Caste & Market', content: 'Who sells what?\nOccupational limits.\nSocial hierarchy.', color: getReelColor(9) },
              { id: 'soc6r11', title: 'Gender & Market', content: 'Women: barriers.\nHome-based work.\nInformal sector.', color: getReelColor(10) },
              { id: 'soc6r12', title: 'Free Trade', content: 'Reduced barriers.\nGlobal trade.\nWTO rules.', color: getReelColor(11) },
              { id: 'soc6r13', title: 'Consumer Culture', content: 'Buy, buy, buy!\nGlobal brands.\nAdvertising power.', color: getReelColor(12) },
              { id: 'soc6r14', title: 'Labour Market', content: 'Sell your work.\nWages in return.\nEmployment exchange.', color: getReelColor(13) },
              { id: 'soc6r15', title: 'Capital Market', content: 'Stocks & Shares.\nBonds, investments.\nBSE, NSE.', color: getReelColor(14) },
              { id: 'soc6r16', title: 'Mela/Fair', content: 'Periodic market.\nSeasonal events.\nCultural + Commerce.', color: getReelColor(15) },
              { id: 'soc6r17', title: 'Street Vendors', content: 'Footpath sellers.\nNo license.\nDaily struggle.', color: getReelColor(16) },
              { id: 'soc6r18', title: 'Formal vs Informal', content: 'Regulated vs Not.\nBenefits vs None.\n20% vs 80%.', color: getReelColor(17) },
              { id: 'soc6r19', title: 'Land Market', content: 'Real estate.\nProperty deals.\nBig money!', color: getReelColor(18) },
              { id: 'soc6r20', title: 'Social Embeddedness', content: 'Markets in society.\nNot separate.\nPolanyi\'s idea.', color: getReelColor(19) },
              { id: 'soc6r21', title: 'Globalization', content: 'World is connected.\nMNCs everywhere.\nLocal → Global.', color: getReelColor(20) },
              { id: 'soc6r22', title: 'Competition', content: 'Many sellers.\nMany buyers.\nBetter prices.', color: getReelColor(21) },
              { id: 'soc6r23', title: 'Regulation', content: 'Laws control.\nNorms guide.\nFair play.', color: getReelColor(22) },
              { id: 'soc6r24', title: 'Information', content: 'Know the price.\nKnow the quality.\nFair exchange.', color: getReelColor(23) },
              { id: 'soc6r25', title: 'Mandi', content: 'Wholesale market.\nAgricultural goods.\nFarmers sell.', color: getReelColor(24) },
              { id: 'soc6r26', title: 'Education Market', content: 'Private schools.\nCoaching classes.\nFees, fees, fees!', color: getReelColor(25) },
              { id: 'soc6r27', title: 'Water Commodity', content: 'Free → Bottled.\nBisleri, Aquafina.\nNature for sale.', color: getReelColor(26) },
              { id: 'soc6r28', title: 'Home Workers', content: 'Work from home.\nMostly women.\nLow wages.', color: getReelColor(27) },
              { id: 'soc6r29', title: 'Market Features', content: 'Buyers + Sellers.\nCompetition.\nPrice mechanism.', color: getReelColor(28) },
              { id: 'soc6r30', title: 'Markets Matter', content: 'Exchange hub.\nSocial institution.\nEconomy + Society.', color: getReelColor(29) }
            ],
            longAnswers: [
              {
                id: 'socl6-1',
                question: 'Explain the concept of Market as a Social Institution.',
                mnemonic: 'MARKET SOCIAL - Many buyers sellers, Affected by culture, Rules govern, Kith networks, Exchange hub, Trust matters, Social embeddedness, Organization, Caste class impact, Institutions shape, Allocation, Laws regulate',
                answer: `### Introduction

From a sociological perspective, markets are not merely economic spaces but social institutions shaped by culture, power relations, and social norms. This view challenges the purely economic understanding of markets.

### Definition

**Economic View**: Market is a place where buyers and sellers exchange goods for money through price mechanism.

**Sociological View**: Market is a social institution embedded in social relations, cultural values, and power structures.

### Karl Polanyi's Contribution

**Social Embeddedness**: Markets are embedded in social relations.

**Key Ideas**:
| Concept | Meaning |
|---------|--------|
| Embeddedness | Markets exist within society |
| Reciprocity | Exchange based on mutual obligation |
| Redistribution | Centralized collection and distribution |
| Market Exchange | Price-based exchange |

**Polanyi's Argument**:
- Markets are not natural or universal
- They were created through deliberate policy
- Social relations always shape economic activity

### Features of Market as Social Institution

**1. Social Relations**
- Trust between buyers and sellers
- Kinship networks in business
- Caste-based occupations
- Community-based trade

**2. Cultural Values**
| Aspect | Example |
|--------|--------|
| Bargaining | Expected in Indian markets |
| Credit | Based on trust, reputation |
| Festival sales | Religious occasions |
| Auspicious timing | Muhurat for transactions |

**3. Power Relations**
- Big vs small traders
- Monopoly vs competition
- Gender in markets (who sells what)
- Caste hierarchy in certain trades

**4. Regulation**
| Type | Source |
|------|--------|
| Formal | Laws, contracts |
| Informal | Social norms, customs |
| Traditional | Caste rules |
| Modern | Consumer protection |

### Types of Markets in India

**Based on Time**:
| Type | Description | Example |
|------|-------------|--------|
| Weekly (Haat) | Specific days | Rural weekly markets |
| Periodic | Seasonal | Melas, fairs |
| Permanent | Daily | Urban markets, shops |

**Based on Goods**:
| Market Type | What's Traded |
|-------------|---------------|
| Commodity | Physical goods |
| Labour | Work for wages |
| Capital | Stocks, shares |
| Land | Real estate |

### Social Dimensions of Market

**1. Caste and Market**
- Traditional caste-based occupations
- Certain castes in certain trades
- Changing but not eliminated

**2. Gender and Market**
| Aspect | Pattern |
|--------|--------|
| Vendors | Women in specific goods |
| Home-based work | Mostly women |
| Informal sector | Women predominant |
| Formal sector | Men dominant |

**3. Class and Market**
- Rich vs poor consumers
- Differential access
- Credit availability varies

### Conclusion
Markets are social institutions shaped by relations, culture, and power. Understanding this helps us see markets as more than just economic mechanisms.`
              },
              {
                id: 'socl6-2',
                question: 'Discuss the concept of Commodification with examples.',
                mnemonic: 'COMMODITY - Changed to sellable, Objects for market, Money value assigned, Made purchasable, Originally free, Daily needs, Increasing trend, Transformation, You pay for everything',
                answer: `### Definition of Commodification

**Meaning**: Commodification is the process by which things that were previously not traded in markets become commodities to be bought and sold.

**Karl Marx**: A commodity is something that can be bought and sold, having exchange value.

### Process of Commodification

**Traditional → Commodified**:
| Before | After |
|--------|-------|
| Free | Priced |
| Shared | Private |
| Common | Owned |
| Given | Sold |

### Examples of Commodification

**1. Water**
| Traditional | Commodified |
|-------------|-------------|
| Free from wells, rivers | Bottled water (Bisleri, Aquafina) |
| Community resource | Private business |
| Right | Product |

**Issues**:
- Poor cannot afford clean water
- Groundwater exploitation
- Corporate control of water

**2. Education**
| Traditional | Commodified |
|-------------|-------------|
| Gurukul system | Private schools |
| Knowledge sharing | Tuition industry |
| Low/no fees | Expensive education |

**Examples**:
- Private coaching (IIT, Medical)
- International schools
- Online courses
- Deemed universities

**3. Healthcare**
| Traditional | Commodified |
|-------------|-------------|
| Community healers | Private hospitals |
| Accessible healthcare | Corporate hospitals |
| Affordable treatment | Medical tourism |

**Issues**:
- High treatment costs
- Insurance-based access
- Rural-urban divide

**4. Labour**
| Traditional | Commodified |
|-------------|-------------|
| Work for family | Work for wages |
| Skills passed down | Skilled workers hired |
| Household work | Domestic workers |

**Features of Labour Market**:
- Wages determined by market
- Workers as "human resources"
- Contractual relationships

**5. Knowledge/Information**
| Traditional | Commodified |
|-------------|-------------|
| Freely shared | Intellectual property |
| Public domain | Patents, copyrights |
| Common knowledge | Data as product |

**6. Care Work**
| Traditional | Commodified |
|-------------|-------------|
| Family care for elderly | Old age homes |
| Mother's childcare | Day care centers |
| Home cooking | Food delivery apps |

**7. Surrogate Motherhood**
- Controversial commodification
- Women's bodies in market
- Ethical debates

### Consequences of Commodification

**Positive**:
| Aspect | Benefit |
|--------|--------|
| Efficiency | Better quality through competition |
| Choice | Multiple options |
| Employment | Job creation |
| Innovation | New products and services |

**Negative**:
| Concern | Impact |
|---------|--------|
| Inequality | Access depends on money |
| Exploitation | Workers, nature exploited |
| Values | Everything has price |
| Community | Shared resources privatized |

### Sociological Critique

**Marx's View**:
- Commodity fetishism: We forget human labor behind products
- Alienation: Workers estranged from their work
- Class exploitation: Capitalists profit from workers

**Polanyi's View**:
- "Fictitious commodities": Land, Labor, Money
- These cannot be true commodities
- Society must protect itself from total commodification

### Resistance to Commodification

| Movement | Against |
|----------|--------|
| Water movements | Water privatization |
| Education activists | Private education |
| Open source | Knowledge commodification |
| Commons movements | Land privatization |

### Conclusion
Commodification is a growing trend in capitalism where more aspects of life become marketable products. While it can bring efficiency, it raises concerns about inequality, exploitation, and the nature of society itself.`
              },
              {
                id: 'socl6-3',
                question: 'Explain the impact of Globalization on Indian markets and economy.',
                mnemonic: 'GLOBALIZATION - Global brands, Liberalization, Open economy, Business MNCs, Access worldwide, Local affected, Infrastructure, Zones export, Advantages, Trade, Investment, Opportunities, Networks',
                answer: `### Introduction

Globalization refers to the integration of world economies through free flow of goods, services, capital, and ideas. India's markets have transformed significantly since the 1991 liberalization.

### Economic Reforms of 1991

**Background**:
- Balance of payments crisis
- IMF loan conditions
- P.V. Narasimha Rao government
- Finance Minister: Manmohan Singh

**LPG Reforms**:
| Reform | Meaning |
|--------|--------|
| Liberalization | Removing restrictions |
| Privatization | Private sector role |
| Globalization | Opening to world |

### Changes in Indian Markets

**1. Retail Sector**
| Before | After |
|--------|-------|
| Kirana stores | Supermarkets, malls |
| Local shops | Global chains |
| Personal service | Self-service |

**Examples**:
- Big Bazaar, Reliance Retail
- Walmart (now Flipkart)
- Amazon, Flipkart (e-commerce)

**2. Consumer Goods**
| Sector | Global Brands |
|--------|---------------|
| Food | McDonald's, KFC, Domino's |
| Beverages | Coca-Cola, Pepsi, Starbucks |
| Clothing | Zara, H&M, Nike |
| Electronics | Samsung, Apple, Sony |

**3. Services Sector**
| Industry | Impact |
|----------|--------|
| IT/ITES | Export boom (Infosys, TCS, Wipro) |
| BPO | Call centers, back offices |
| Banking | Foreign banks, insurance |
| Telecom | Mobile revolution |

**4. Labour Market**
| Change | Description |
|--------|-------------|
| New jobs | IT, retail, services |
| Contract work | Less permanent employment |
| Skill demand | English, computer skills |
| Migration | Brain drain, blue-collar migration |

### Impact on Different Groups

**Winners**:
| Group | Benefit |
|-------|--------|
| Urban middle class | Jobs, consumer goods |
| IT professionals | High salaries, global mobility |
| English-educated | Employment opportunities |
| Entrepreneurs | Access to capital, markets |

**Losers**:
| Group | Challenge |
|-------|----------|
| Small traders | Competition from big retailers |
| Farmers | Import competition, low prices |
| Traditional artisans | Mass-produced goods |
| Informal workers | Job insecurity |

### Debates on Globalization

**Positive View**:
| Argument | Evidence |
|----------|----------|
| Growth | GDP growth increased |
| Choice | More products available |
| Efficiency | Competition improves quality |
| Jobs | New sectors created |

**Critical View**:
| Concern | Evidence |
|---------|----------|
| Inequality | Rich-poor gap widening |
| Job insecurity | Contract, gig work |
| Cultural loss | Westernization |
| Environment | Pollution, exploitation |

### Special Economic Zones (SEZs)

**Features**:
- Tax benefits for companies
- Export-oriented production
- Foreign investment attracted

**Criticisms**:
- Land acquisition issues
- Farmers displaced
- Labour rights concerns

### Social Impact

**Consumption Patterns**:
| Traditional | Globalized |
|-------------|------------|
| Local products | Global brands |
| Savings culture | Consumer loans |
| Need-based | Aspiration-based |

**Cultural Changes**:
- Fast food culture
- Mall culture
- Valentine's Day celebrations
- English media dominance

### Resistance to Globalization

| Movement/Group | Issue |
|----------------|-------|
| Swadeshi Jagran Manch | Promoting local goods |
| Farmers' movements | Against corporate agriculture |
| Anti-retail FDI | Protecting small traders |
| Make in India | Domestic manufacturing |

### Conclusion
Globalization has transformed Indian markets, bringing both opportunities and challenges. While it has driven growth and offered new choices, concerns about inequality, cultural change, and vulnerability of weaker sections remain important policy issues.`
              }
            ]
          },
          {
            id: 'soc7',
            title: '7. Pattern of Social Inequality and Exclusion',
            description: 'Caste, Class, Gender discrimination and social exclusion in India.',
            summary: '**Social Inequality**: Unequal distribution of resources\n**Caste Discrimination**: Untouchability, occupational restrictions\n**Gender Inequality**: Patriarchy, women\'s subordination\n**Social Exclusion**: Dalits, Tribals, Minorities marginalized',
            detailedNotes: `### 1. Understanding Social Inequality

**Definition**: Unequal distribution of resources, opportunities, and rewards in society.

**Dimensions of Inequality**:
* Economic (wealth, income)
* Social (status, prestige)
* Political (power, representation)
* Cultural (recognition, respect)

### 2. Caste-based Inequality

**Historical Background**:
* Varna system → Jati system
* Hierarchy: Brahmin, Kshatriya, Vaishya, Shudra
* Untouchables (Dalits) outside the system

**Forms of Discrimination**:
* **Untouchability**: Physical and social distance
* **Occupational Restrictions**: Caste-based jobs
* **Residential Segregation**: Separate localities
* **Educational Denial**: Access to schools
* **Temple Entry Ban**: Religious exclusion

**Constitutional Provisions**:
* Article 17: Abolishes untouchability
* Article 15: Prohibits discrimination
* SC/ST Prevention of Atrocities Act
* Reservations in education and jobs

### 3. Tribal Exclusion

**Adivasis/Scheduled Tribes**:
* 8.6% of India's population
* Forest dwellers, indigenous peoples
* Displaced by development projects

**Issues**:
* Land alienation
* Forest rights denied
* Displacement for dams, mining
* Poverty and illiteracy

**Key Legislation**:
* Forest Rights Act 2006
* PESA Act 1996

### 4. Gender Inequality

**Patriarchy**: Male dominance in society

**Forms**:
* **Economic**: Wage gap, property denial
* **Educational**: Lower literacy for women
* **Political**: Under-representation
* **Domestic**: Unpaid care work, violence
* **Cultural**: Son preference, dowry

**Indicators**:
* Sex ratio: 940 females per 1000 males
* Female literacy: 65% vs Male 82%
* Women in Parliament: ~14%

### 5. Disability and Exclusion

**Issues faced**:
* Physical barriers
* Social stigma
* Employment discrimination
* Educational exclusion

**Rights of Persons with Disabilities Act 2016**

### 6. Religious Minorities

**Muslims, Christians, Sikhs, etc.**:
* Educational backwardness
* Employment discrimination
* Communal violence
* Stereotyping

**Sachar Committee Report**: Documented Muslim marginalization

### 7. Other Backward Classes (OBCs)

* 52% of population (Mandal Commission)
* Socially and educationally backward
* 27% reservation in central services`,
            flashcards: [
              { id: 'soc7f1', front: 'What is social inequality?', back: 'Unequal distribution of resources, opportunities, and rewards in society' },
              { id: 'soc7f2', front: 'Article 17 of Indian Constitution?', back: 'Abolishes untouchability' },
              { id: 'soc7f3', front: 'Article 15 of Indian Constitution?', back: 'Prohibits discrimination on grounds of caste, religion, sex, etc.' },
              { id: 'soc7f4', front: 'What percentage of India is tribal (ST)?', back: '8.6% of population' },
              { id: 'soc7f5', front: 'What is patriarchy?', back: 'System of male dominance in society' },
              { id: 'soc7f6', front: 'Sex ratio in India?', back: 'About 940 females per 1000 males' },
              { id: 'soc7f7', front: 'What is untouchability?', back: 'Practice of physical and social distance from lower castes' },
              { id: 'soc7f8', front: 'Forest Rights Act was passed in?', back: '2006' },
              { id: 'soc7f9', front: 'Sachar Committee studied?', back: 'Condition of Muslims in India' },
              { id: 'soc7f10', front: 'OBC reservation percentage?', back: '27% in central government services' },
              { id: 'soc7f11', front: 'Mandal Commission estimated OBC population?', back: '52% of India\'s population' },
              { id: 'soc7f12', front: 'What is social exclusion?', back: 'Process by which groups are denied full participation in society' },
              { id: 'soc7f13', front: 'What is Varna system?', back: 'Four-fold division: Brahmin, Kshatriya, Vaishya, Shudra' },
              { id: 'soc7f14', front: 'Where were Dalits in Varna system?', back: 'Outside the system - considered "outcastes"' },
              { id: 'soc7f15', front: 'PESA Act year?', back: '1996 - Panchayats Extension to Scheduled Areas' },
              { id: 'soc7f16', front: 'Main issue facing tribals?', back: 'Land alienation and displacement by development projects' },
              { id: 'soc7f17', front: 'Female literacy rate in India?', back: 'About 65% (compared to 82% male literacy)' },
              { id: 'soc7f18', front: 'Women in Indian Parliament?', back: 'About 14% representation' },
              { id: 'soc7f19', front: 'What is wage gap?', back: 'Women earning less than men for same work' },
              { id: 'soc7f20', front: 'What is son preference?', back: 'Cultural preference for male children over females' },
              { id: 'soc7f21', front: 'SC/ST Atrocities Act?', back: 'Law to prevent crimes against Scheduled Castes and Tribes' },
              { id: 'soc7f22', front: 'Dimensions of inequality?', back: 'Economic, Social, Political, Cultural' },
              { id: 'soc7f23', front: 'What is residential segregation?', back: 'Different castes living in separate localities' },
              { id: 'soc7f24', front: 'Rights of Persons with Disabilities Act?', back: '2016 - protects disabled persons\' rights' },
              { id: 'soc7f25', front: 'What is caste-based occupation?', back: 'Traditional jobs assigned by birth in a caste' },
              { id: 'soc7f26', front: 'How does gender inequality show in education?', back: 'Lower literacy, dropout rates higher for girls' },
              { id: 'soc7f27', front: 'What is communal violence?', back: 'Violence between religious communities' },
              { id: 'soc7f28', front: 'Who are Adivasis?', back: 'Indigenous/tribal peoples of India' },
              { id: 'soc7f29', front: 'What causes tribal displacement?', back: 'Dams, mining, industries, development projects' },
              { id: 'soc7f30', front: 'What is dowry?', back: 'Payment made by bride\'s family to groom\'s family at marriage' }
            ],
            mcqs: [
              { id: 'soc7q1', question: 'Article 17 deals with:', options: ['Right to education', 'Abolition of untouchability', 'Right to vote', 'Freedom of speech'], correctIndex: 1, explanation: 'Article 17 abolishes untouchability in India.' },
              { id: 'soc7q2', question: 'Tribal population in India is about:', options: ['2%', '8.6%', '15%', '25%'], correctIndex: 1, explanation: 'Scheduled Tribes are 8.6% of population.' },
              { id: 'soc7q3', question: 'Patriarchy means:', options: ['Women\'s rule', 'Equal society', 'Male dominance', 'Child rule'], correctIndex: 2, explanation: 'System where men hold primary power.' },
              { id: 'soc7q4', question: 'Forest Rights Act was passed in:', options: ['1996', '2001', '2006', '2010'], correctIndex: 2, explanation: 'FRA 2006 recognized tribal forest rights.' },
              { id: 'soc7q5', question: 'Sachar Committee reported on:', options: ['Women', 'Muslims', 'Dalits', 'Tribals'], correctIndex: 1, explanation: 'Studied social, economic condition of Muslims.' },
              { id: 'soc7q6', question: 'OBC reservation is:', options: ['7.5%', '15%', '27%', '50%'], correctIndex: 2, explanation: 'Mandal Commission recommended 27%.' },
              { id: 'soc7q7', question: 'Mandal Commission estimated OBC population at:', options: ['25%', '40%', '52%', '65%'], correctIndex: 2, explanation: 'About 52% of India\'s population.' },
              { id: 'soc7q8', question: 'Article 15 prohibits:', options: ['Property', 'Discrimination', 'Voting', 'Speech'], correctIndex: 1, explanation: 'Prohibits discrimination on various grounds.' },
              { id: 'soc7q9', question: 'Sex ratio in India is approximately:', options: ['1000:1000', '940:1000', '900:1000', '980:1000'], correctIndex: 1, explanation: '940 females per 1000 males.' },
              { id: 'soc7q10', question: 'Women in Parliament are about:', options: ['5%', '14%', '33%', '50%'], correctIndex: 1, explanation: 'About 14% representation.' },
              { id: 'soc7q11', question: 'Untouchability is a form of:', options: ['Class inequality', 'Caste discrimination', 'Gender bias', 'Age discrimination'], correctIndex: 1, explanation: 'Based on caste hierarchy.' },
              { id: 'soc7q12', question: 'PESA Act was passed in:', options: ['1990', '1996', '2000', '2006'], correctIndex: 1, explanation: 'Panchayats Extension to Scheduled Areas 1996.' },
              { id: 'soc7q13', question: 'Varna system has how many categories?', options: ['Two', 'Three', 'Four', 'Five'], correctIndex: 2, explanation: 'Brahmin, Kshatriya, Vaishya, Shudra.' },
              { id: 'soc7q14', question: 'Dalits were:', options: ['Brahmins', 'Kshatriyas', 'Outside Varna system', 'Vaishyas'], correctIndex: 2, explanation: 'Considered "outcastes" or untouchables.' },
              { id: 'soc7q15', question: 'Main cause of tribal displacement:', options: ['Education', 'Development projects', 'Marriage', 'Religion'], correctIndex: 1, explanation: 'Dams, mining, industries cause displacement.' },
              { id: 'soc7q16', question: 'Female literacy in India is about:', options: ['45%', '55%', '65%', '75%'], correctIndex: 2, explanation: 'About 65% compared to 82% male.' },
              { id: 'soc7q17', question: 'Disability rights Act was passed in:', options: ['2006', '2010', '2016', '2020'], correctIndex: 2, explanation: 'Rights of Persons with Disabilities Act 2016.' },
              { id: 'soc7q18', question: 'Social exclusion means:', options: ['Inclusion', 'Denied participation', 'Equal access', 'Freedom'], correctIndex: 1, explanation: 'Groups denied full participation in society.' },
              { id: 'soc7q19', question: 'Dowry is payment by:', options: ['Groom\'s family', 'Bride\'s family', 'Government', 'Temple'], correctIndex: 1, explanation: 'Bride\'s family pays to groom\'s family.' },
              { id: 'soc7q20', question: 'Son preference leads to:', options: ['Gender equality', 'Skewed sex ratio', 'More girls', 'Balance'], correctIndex: 1, explanation: 'Results in fewer females, sex-selective abortion.' },
              { id: 'soc7q21', question: 'Wage gap affects:', options: ['Men', 'Women', 'Both equally', 'Neither'], correctIndex: 1, explanation: 'Women earn less than men for same work.' },
              { id: 'soc7q22', question: 'Residential segregation is based on:', options: ['Income only', 'Caste', 'Age', 'Gender'], correctIndex: 1, explanation: 'Different castes in separate localities.' },
              { id: 'soc7q23', question: 'Adivasis means:', options: ['Muslims', 'Christians', 'Indigenous tribes', 'Brahmins'], correctIndex: 2, explanation: 'Original/indigenous inhabitants.' },
              { id: 'soc7q24', question: 'Communal violence is between:', options: ['Classes', 'Genders', 'Religious groups', 'Age groups'], correctIndex: 2, explanation: 'Violence between religious communities.' },
              { id: 'soc7q25', question: 'Economic inequality includes:', options: ['Status only', 'Wealth and income', 'Power only', 'Culture only'], correctIndex: 1, explanation: 'Unequal distribution of wealth and income.' },
              { id: 'soc7q26', question: 'SC/ST Atrocities Act protects:', options: ['Upper castes', 'Dalits and tribals', 'OBCs', 'Minorities'], correctIndex: 1, explanation: 'Scheduled Castes and Scheduled Tribes.' },
              { id: 'soc7q27', question: 'Temple entry ban was on:', options: ['Women', 'Dalits', 'Tribals', 'All'], correctIndex: 1, explanation: 'Dalits were denied temple entry.' },
              { id: 'soc7q28', question: 'Unpaid care work is mostly done by:', options: ['Men', 'Women', 'Children', 'Government'], correctIndex: 1, explanation: 'Women do most household unpaid work.' },
              { id: 'soc7q29', question: 'Political inequality means:', options: ['Economic gap', 'Unequal power/representation', 'Social status', 'Culture'], correctIndex: 1, explanation: 'Unequal power and political representation.' },
              { id: 'soc7q30', question: 'Caste-based occupation means:', options: ['Choosing any job', 'Job assigned by birth', 'Government jobs', 'Private jobs'], correctIndex: 1, explanation: 'Traditional jobs determined by caste of birth.' }
            ],
            reels: [
              { id: 'soc7r1', title: 'Social Inequality', content: 'Unequal resources.\nUnequal opportunities.\nUnequal rewards.', color: getReelColor(0) },
              { id: 'soc7r2', title: 'Article 17', content: 'Abolishes untouchability.\nFundamental Right.\nConstitutional ban.', color: getReelColor(1) },
              { id: 'soc7r3', title: 'Caste System', content: 'Varna → Jati.\nHierarchy by birth.\nDalits excluded.', color: getReelColor(2) },
              { id: 'soc7r4', title: 'Untouchability', content: 'Social distance.\nPhysical exclusion.\nNow illegal!', color: getReelColor(3) },
              { id: 'soc7r5', title: 'Tribals', content: '8.6% population.\nAdivasis.\nForest dwellers.', color: getReelColor(4) },
              { id: 'soc7r6', title: 'Tribal Issues', content: 'Land alienation.\nDisplacement.\nForest rights denied.', color: getReelColor(5) },
              { id: 'soc7r7', title: 'Patriarchy', content: 'Male dominance.\nWomen subordinate.\nStructural power.', color: getReelColor(6) },
              { id: 'soc7r8', title: 'Gender Gap', content: 'Wage inequality.\nEducation gap.\nPolitical under-rep.', color: getReelColor(7) },
              { id: 'soc7r9', title: 'Sex Ratio', content: '940:1000.\nFewer females.\nSon preference.', color: getReelColor(8) },
              { id: 'soc7r10', title: 'Sachar Committee', content: 'Muslim condition.\nBackwardness documented.\n2006 report.', color: getReelColor(9) },
              { id: 'soc7r11', title: 'OBC Facts', content: '52% population.\n27% reservation.\nMandal Commission.', color: getReelColor(10) },
              { id: 'soc7r12', title: 'Forest Rights Act', content: '2006 law.\nTribal land rights.\nJungle adhikar.', color: getReelColor(11) },
              { id: 'soc7r13', title: 'Article 15', content: 'No discrimination!\nCaste, religion, sex.\nEquality ensured.', color: getReelColor(12) },
              { id: 'soc7r14', title: 'Dimensions', content: 'Economic, Social.\nPolitical, Cultural.\nAll connected!', color: getReelColor(13) },
              { id: 'soc7r15', title: 'Disability', content: 'Physical barriers.\nSocial stigma.\n2016 Act protects.', color: getReelColor(14) },
              { id: 'soc7r16', title: 'Dowry Evil', content: 'Bride\'s family pays.\nIllegal but exists.\nGender violence.', color: getReelColor(15) },
              { id: 'soc7r17', title: 'Women Literacy', content: '65% female.\n82% male.\nStill a gap!', color: getReelColor(16) },
              { id: 'soc7r18', title: 'Social Exclusion', content: 'Denied participation.\nMarginalized groups.\nSystematic process.', color: getReelColor(17) },
              { id: 'soc7r19', title: 'Varna System', content: 'Four categories.\nBrahmin to Shudra.\nHierarchy!', color: getReelColor(18) },
              { id: 'soc7r20', title: 'Dalits', content: 'Outside Varna.\nHistorically oppressed.\nFight for rights.', color: getReelColor(19) },
              { id: 'soc7r21', title: 'Reservations', content: 'Affirmative action.\nSC/ST/OBC quota.\nConstitutional.', color: getReelColor(20) },
              { id: 'soc7r22', title: 'Communal Violence', content: 'Religious conflict.\nRiots, killings.\nSocial division.', color: getReelColor(21) },
              { id: 'soc7r23', title: 'PESA 1996', content: 'Tribal self-governance.\nScheduled areas.\nLocal power.', color: getReelColor(22) },
              { id: 'soc7r24', title: 'Unpaid Work', content: 'Women do more.\nHousehold labour.\nNot counted GDP!', color: getReelColor(23) },
              { id: 'soc7r25', title: 'Atrocities Act', content: 'SC/ST protection.\nPrevents crimes.\nStrict punishment.', color: getReelColor(24) },
              { id: 'soc7r26', title: 'Women Parliament', content: 'Only 14%.\nUnder-represented.\nNeed 33%!', color: getReelColor(25) },
              { id: 'soc7r27', title: 'Temple Entry', content: 'Was denied to Dalits.\nSocial reform changed.\nStill issues remain.', color: getReelColor(26) },
              { id: 'soc7r28', title: 'Displacement', content: 'Dams, mining.\nTribals suffer.\nDevelopment cost.', color: getReelColor(27) },
              { id: 'soc7r29', title: 'Minorities', content: 'Muslims, Christians.\nFacing discrimination.\nNeed protection.', color: getReelColor(28) },
              { id: 'soc7r30', title: 'Inequality Types', content: 'Caste, Class, Gender.\nReligion, Disability.\nAll intersect!', color: getReelColor(29) }
            ],
            longAnswers: [
              {
                id: 'socl7-1',
                question: 'Explain the concept of Social Exclusion with examples from Indian society.',
                mnemonic: 'EXCLUSION - Excluding groups, X marks outcasts, Community denied, Livelihood limited, Untouchability, Social barriers, Institutions block, Outcasts, Networks denied',
                answer: `### Definition of Social Exclusion

**Meaning**: Social Exclusion refers to the process by which certain groups are systematically denied access to resources, opportunities, rights, and participation in mainstream society.

**According to Sociologists**:
- A multidimensional process involving denial of resources, rights, goods and services
- Inability to participate in normal relationships and activities
- Different from poverty - it emphasizes process and multiple dimensions

### Dimensions of Social Exclusion

| Dimension | Description |
|-----------|-------------|
| **Economic** | Denial of jobs, income, property |
| **Social** | Exclusion from social networks, relationships |
| **Political** | No voice, representation, voting barriers |
| **Cultural** | Stigma, stereotypes, cultural devaluation |
| **Spatial** | Residential segregation, ghettos |

### Social Exclusion in India

**1. Caste-based Exclusion (Dalits)**

| Form | Example |
|------|--------|
| Untouchability | Physical distance, separate wells |
| Occupational | Only "polluting" jobs allowed |
| Residential | Separate colonies |
| Social | Barred from temples, public spaces |
| Economic | Denied land, loans |
| Educational | Discrimination in schools |

**Constitutional Response**:
- Article 17: Abolition of Untouchability
- SC/ST Prevention of Atrocities Act (1989)
- Reservation in education and jobs

**2. Tribal Exclusion (Adivasis)**

| Issue | Impact |
|-------|--------|
| Land alienation | Displaced from ancestral lands |
| Forest rights | Traditional rights denied |
| Development projects | Dams, mining displace tribals |
| Cultural | Languages, practices marginalized |
| Geographic | Remote areas, poor connectivity |

**3. Gender-based Exclusion (Women)**

| Sphere | Exclusion |
|--------|----------|
| Economic | Wage gap, unpaid domestic work |
| Political | Under-representation (14% in Parliament) |
| Educational | Lower literacy rates |
| Social | Mobility restrictions, safety concerns |
| Property | Denied inheritance traditionally |

**4. Religious Minorities**

| Issue | Example |
|-------|--------|
| Housing | Difficulty renting in Hindu areas |
| Employment | Discrimination in hiring |
| Education | Access issues |
| Stereotyping | Media representation |

**5. Persons with Disabilities**

| Barrier | Nature |
|---------|--------|
| Physical | No ramps, inaccessible buildings |
| Social | Stigma, discrimination |
| Economic | Limited employment |
| Educational | Lack of special facilities |

### Intersectionality

**Concept**: Multiple identities combine to create unique experiences of exclusion.

**Examples**:
- Dalit woman faces caste + gender discrimination
- Tribal disabled person faces tribal + disability exclusion
- Muslim woman in rural area faces religion + gender + location barriers

### Government Measures

| Measure | Purpose |
|---------|--------|
| Reservation | Representation in education, jobs |
| Special Acts | Protection against atrocities |
| Welfare schemes | Economic support |
| Rights-based laws | MGNREGA, RTE, Food Security |

### Conclusion
Social exclusion is a multidimensional process affecting various groups in India. Addressing it requires not just economic measures but social, cultural, and political inclusion strategies.`
              },
              {
                id: 'socl7-2',
                question: 'Discuss Gender Inequality in Indian society and measures to address it.',
                mnemonic: 'GENDER - Girls disadvantaged, Education gap, Needs unmet, Domestic work, Employment barriers, Rights violated',
                answer: `### Understanding Gender Inequality

**Definition**: Gender inequality refers to unequal treatment and opportunities based on gender, typically disadvantaging women in patriarchal societies.

**Patriarchy**: System where men hold power and women are subordinated.

### Forms of Gender Inequality in India

**1. Economic Inequality**

| Aspect | Data/Example |
|--------|-------------|
| Work participation | Women 20.3% vs Men 57.3% (2019) |
| Wage gap | Women earn 19% less for same work |
| Unpaid work | Women do 10x more household work |
| Property ownership | Only 13% women own land |

**2. Educational Inequality**

| Indicator | Female | Male |
|-----------|--------|------|
| Literacy Rate (2011) | 65% | 82% |
| Higher Education | Lower enrollment |
| Dropout rates | Higher for girls |

**Reasons for Educational Gap**:
- Preference for son's education
- Early marriage
- Safety concerns
- Domestic responsibilities

**3. Health Inequality**

| Issue | Description |
|-------|-------------|
| Malnutrition | Higher among women |
| Maternal mortality | Still significant |
| Sex-selective abortion | Female foeticide |
| Sex ratio | 940 females per 1000 males (2011) |

**4. Political Inequality**

| Level | Women's Representation |
|-------|------------------------|
| Parliament (Lok Sabha) | ~14% |
| State Assemblies | ~9% |
| Panchayats | 33% (reserved) |
| Cabinet | Limited |

**5. Violence Against Women**

| Type | Prevalence |
|------|------------|
| Domestic violence | 1 in 3 women (NFHS) |
| Sexual harassment | Widespread |
| Dowry deaths | ~8,000/year |
| Rape | Every 16 minutes (reported) |

### Root Causes

**Patriarchal Values**:
- Son preference
- Women as property
- Honor linked to women's behavior
- Restricted mobility

**Socialization**:
- Gender roles from childhood
- Different expectations
- Media stereotypes

### Measures to Address Gender Inequality

**1. Constitutional Provisions**

| Article | Provision |
|---------|----------|
| Article 14 | Equality before law |
| Article 15 | No discrimination on sex |
| Article 15(3) | Special provisions for women |
| Article 39 | Equal pay for equal work |

**2. Legislation**

| Law | Year | Purpose |
|-----|------|--------|
| Dowry Prohibition Act | 1961 | Ban dowry |
| PCPNDT Act | 1994 | Prevent sex selection |
| Domestic Violence Act | 2005 | Protection from abuse |
| Sexual Harassment Act | 2013 | Workplace safety |
| Maternity Benefit Act | 2017 | Extended leave |

**3. Government Schemes**

| Scheme | Purpose |
|--------|--------|
| Beti Bachao Beti Padhao | Save and educate girl child |
| Sukanya Samriddhi | Savings for girl children |
| One Stop Centre | Support for violence victims |
| Mahila Shakti Kendra | Women empowerment |

**4. Social Movements**

- Women's movement in India
- #MeToo movement
- Pink Chaddi Campaign
- Self-Help Groups

### Challenges Remaining

| Challenge | Issue |
|-----------|-------|
| Implementation | Laws exist but not enforced |
| Attitudes | Patriarchal mindset persists |
| Reporting | Low reporting of crimes |
| Economic | Women's work undervalued |

### Conclusion
Gender inequality is deeply rooted in Indian society. While legal measures and policies have improved, changing patriarchal attitudes and ensuring implementation remain key challenges. Women's empowerment requires economic independence, education, political participation, and freedom from violence.`
              },
              {
                id: 'socl7-3',
                question: 'Explain the concept of Caste Discrimination and constitutional measures against it.',
                mnemonic: 'CASTE - Constitution protects, Abolition of untouchability, Scheduled status, Tribal rights, Equality provisions',
                answer: `### Understanding Caste Discrimination

**Caste System**: Hierarchical social stratification based on birth, where position is ascribed and mobility restricted.

**Discrimination**: Unequal treatment and denial of opportunities based on caste identity.

### Forms of Caste Discrimination

**1. Untouchability**

| Practice | Description |
|----------|-------------|
| Physical distance | Maintaining distance from "lower" castes |
| Separate facilities | Different wells, temples, paths |
| Occupational restriction | Only "polluting" jobs assigned |
| Social exclusion | Barred from community events |

**2. Economic Discrimination**

| Form | Example |
|------|--------|
| Land denial | Not allowed to own land |
| Employment | Caste-based jobs only |
| Wage disparity | Lower wages for same work |
| Credit denial | Banks discriminating |

**3. Social Discrimination**

| Aspect | Practice |
|--------|----------|
| Marriage | Endogamy enforced |
| Dining | Cannot eat together |
| Housing | Residential segregation |
| Education | Discrimination in schools |

**4. Violence**

| Type | Incidents |
|------|----------|
| Atrocities | Physical attacks |
| Honor killings | Inter-caste marriage |
| Social boycott | Economic exclusion |
| Humiliation | Public shaming |

### Constitutional Measures

**1. Fundamental Rights**

| Article | Provision |
|---------|----------|
| Article 14 | Equality before law |
| Article 15 | Prohibition of discrimination |
| Article 15(4) | Special provisions for SC/ST |
| Article 16 | Equal opportunity in public employment |
| Article 17 | **Abolition of Untouchability** |

**Article 17 (Special Importance)**:
- Untouchability is abolished
- Its practice in any form is forbidden
- Enforcement of any disability is an offense
- Punishable by law

**2. Directive Principles**

| Article | Provision |
|---------|----------|
| Article 38 | Minimize inequalities |
| Article 46 | Promote educational/economic interests of SC/ST |

**3. Specific Protections**

| Article | Content |
|---------|--------|
| Article 330 | Reserved seats in Lok Sabha |
| Article 332 | Reserved seats in State Assemblies |
| Article 335 | Claims in services and posts |
| Article 338 | National Commission for SC |
| Article 339 | Control of Union over ST administration |

### Legislative Measures

**1. Protection of Civil Rights Act, 1955**
- Originally "Untouchability Offences Act"
- Renamed in 1976
- Punishment for practicing untouchability

**2. SC/ST (Prevention of Atrocities) Act, 1989**

| Feature | Detail |
|---------|--------|
| Purpose | Prevent crimes against SC/ST |
| Offenses | 22 specific offenses listed |
| Punishment | Stricter than normal law |
| Special Courts | Fast-track trials |
| Victim support | Compensation, rehabilitation |

**Offenses under the Act**:
- Forcing to eat obnoxious substances
- Dumping waste on land
- Public insult
- Social or economic boycott
- Assault on SC/ST women
- Land grabbing

**3. Reservation Policy**

| Sector | Reservation |
|--------|-------------|
| Central Services | 15% SC, 7.5% ST |
| Educational Institutions | 15% SC, 7.5% ST |
| Promotions | For SC/ST employees |
| Panchayats | Proportional reservation |

### Institutional Mechanisms

| Institution | Role |
|-------------|------|
| National Commission for SC | Investigate complaints, monitor safeguards |
| National Commission for ST | Similar for tribal issues |
| Special Courts | Quick trial of atrocity cases |
| SC/ST Welfare Ministry | Policy implementation |

### Challenges in Implementation

| Challenge | Issue |
|-----------|-------|
| Attitude change | Laws cannot change mindsets alone |
| Underreporting | Victims fear retaliation |
| Police apathy | Poor investigation |
| Acquittal rates | High due to weak prosecution |
| Social boycott | Continues despite laws |

### Conclusion
The Constitution provides comprehensive protection against caste discrimination, but implementation remains a challenge. Social change requires not just legal measures but education, economic empowerment, and attitudinal transformation.`
              }
            ]
          },
          {
            id: 'soc8',
            title: '8. Challenges of Cultural Diversity',
            description: 'Managing diversity, communalism, regionalism, and national integration.',
            summary: '**Cultural Diversity**: Multiple cultures coexisting\n**Communalism**: Religion-based politics\n**Regionalism**: Region-based identity\n**Secularism**: State neutrality towards religion',
            detailedNotes: `### 1. Understanding Cultural Diversity

**Definition**: Existence of multiple cultural groups in a society with different languages, religions, traditions.

**India's Diversity**:
* 22 Official languages
* 6 Major religions
* Multiple ethnic groups
* Various regional cultures

### 2. Unity in Diversity

**Factors of Unity**:
* Constitution
* National symbols
* Common history
* Secular state
* Federal structure

**Challenges**:
* Communalism
* Regionalism
* Casteism
* Linguistic conflicts

### 3. Communalism

**Definition**: Using religion for political purposes, creating religious divisions.

**Features**:
* Religious identity as political identity
* "Us vs Them" mentality
* Stereotyping other communities
* Violence and riots

**Historical Events**:
* Partition 1947
* 1984 anti-Sikh riots
* 1992 Babri demolition
* 2002 Gujarat riots

**Causes**:
* Political manipulation
* Economic competition
* Historical grievances
* Media stereotyping

### 4. Regionalism

**Definition**: Strong attachment to one's region over nation.

**Types**:
* Demand for statehood
* Sons of soil movements
* Inter-state disputes (water, border)
* Separatism

**Examples**:
* Telangana movement
* Gorkhaland demand
* Vidarbha statehood demand
* North-East insurgencies

### 5. Secularism in India

**Indian Secularism** (Different from Western):
* State supports all religions equally
* No state religion
* Freedom of religion
* State can reform religious practices

**Challenges**:
* Vote bank politics
* Religious mobilization
* Minority appeasement debate
* Uniform Civil Code debate

### 6. National Integration

**Definition**: Process of unifying diverse groups into one nation.

**Methods**:
* Constitutional provisions
* Education
* National symbols and holidays
* Inter-state exchange programs
* Media and communication

### 7. Managing Diversity

**Constitutional Provisions**:
* Article 29, 30: Minority rights
* Article 350A, 350B: Language rights
* Sixth Schedule: Tribal areas

**Policies**:
* Three-language formula
* Reservation policies
* Minority welfare schemes`,
            flashcards: [
              { id: 'soc8f1', front: 'What is cultural diversity?', back: 'Multiple cultural groups coexisting with different languages, religions, traditions' },
              { id: 'soc8f2', front: 'How many official languages in India?', back: '22 scheduled languages' },
              { id: 'soc8f3', front: 'What is communalism?', back: 'Using religion for political purposes, creating religious divisions' },
              { id: 'soc8f4', front: 'What is regionalism?', back: 'Strong attachment to one\'s region over the nation' },
              { id: 'soc8f5', front: 'What is Indian secularism?', back: 'State supports all religions equally, no state religion, but can reform religious practices' },
              { id: 'soc8f6', front: 'When was Partition of India?', back: '1947' },
              { id: 'soc8f7', front: 'When was Babri Masjid demolished?', back: '1992' },
              { id: 'soc8f8', front: 'What is national integration?', back: 'Process of unifying diverse groups into one nation' },
              { id: 'soc8f9', front: 'Article 29 and 30 protect?', back: 'Minority rights - cultural and educational' },
              { id: 'soc8f10', front: 'What is Sons of Soil movement?', back: 'Movement demanding jobs/rights for locals over migrants' },
              { id: 'soc8f11', front: 'Example of regionalism in India?', back: 'Telangana movement, Gorkhaland demand, Vidarbha movement' },
              { id: 'soc8f12', front: 'What is vote bank politics?', back: 'Appealing to specific religious/caste groups for votes' },
              { id: 'soc8f13', front: 'Three-language formula is?', back: 'Policy for Hindi, English, and one regional language in schools' },
              { id: 'soc8f14', front: 'Sixth Schedule deals with?', back: 'Administration of tribal areas in North-East' },
              { id: 'soc8f15', front: 'What causes communal riots?', back: 'Political manipulation, economic competition, historical grievances, stereotyping' },
              { id: 'soc8f16', front: 'Difference between Indian and Western secularism?', back: 'Western: separation of religion and state; Indian: equal treatment of all religions' },
              { id: 'soc8f17', front: 'What is Uniform Civil Code?', back: 'Single set of personal laws for all citizens regardless of religion' },
              { id: 'soc8f18', front: 'Major religions in India?', back: 'Hinduism, Islam, Christianity, Sikhism, Buddhism, Jainism' },
              { id: 'soc8f19', front: 'What are inter-state disputes?', back: 'Conflicts between states over water, borders, resources' },
              { id: 'soc8f20', front: 'What was 1984 anti-Sikh riots?', back: 'Violence against Sikhs after Indira Gandhi\'s assassination' },
              { id: 'soc8f21', front: 'What is separatism?', back: 'Demand for separate nation/independence from India' },
              { id: 'soc8f22', front: 'North-East insurgencies are form of?', back: 'Separatism/Regionalism' },
              { id: 'soc8f23', front: 'What unifies diverse India?', back: 'Constitution, national symbols, common history, secular state' },
              { id: 'soc8f24', front: 'What is minority appeasement?', back: 'Criticism that some parties favor minorities for votes' },
              { id: 'soc8f25', front: 'Article 350A relates to?', back: 'Instruction in mother tongue at primary stage' },
              { id: 'soc8f26', front: 'How many major religions in India?', back: 'Six major religions' },
              { id: 'soc8f27', front: 'What is ethnic conflict?', back: 'Conflict between different ethnic/cultural groups' },
              { id: 'soc8f28', front: 'How does media affect communalism?', back: 'Can spread stereotypes, hate speech, or promote harmony' },
              { id: 'soc8f29', front: 'What is linguistic conflict?', back: 'Conflict over language status, use in education/government' },
              { id: 'soc8f30', front: 'Role of education in national integration?', back: 'Promotes understanding, common values, secular outlook' }
            ],
            mcqs: [
              { id: 'soc8q1', question: 'Number of scheduled languages in India:', options: ['18', '22', '28', '32'], correctIndex: 1, explanation: 'Constitution recognizes 22 scheduled languages.' },
              { id: 'soc8q2', question: 'Communalism means:', options: ['Community living', 'Religion-based politics', 'Rural development', 'Social work'], correctIndex: 1, explanation: 'Using religion to divide for political gains.' },
              { id: 'soc8q3', question: 'Partition of India was in:', options: ['1942', '1947', '1950', '1952'], correctIndex: 1, explanation: 'India-Pakistan partition in 1947.' },
              { id: 'soc8q4', question: 'Regionalism is based on:', options: ['Religion', 'Class', 'Region/territory', 'Gender'], correctIndex: 2, explanation: 'Attachment to one\'s region over nation.' },
              { id: 'soc8q5', question: 'Indian secularism means:', options: ['Anti-religion', 'Equal treatment of all religions', 'State religion', 'No religion'], correctIndex: 1, explanation: 'Principled distance from all religions.' },
              { id: 'soc8q6', question: 'Babri Masjid was demolished in:', options: ['1984', '1990', '1992', '2002'], correctIndex: 2, explanation: '6th December 1992.' },
              { id: 'soc8q7', question: 'Article 29-30 protect:', options: ['Majority rights', 'Minority rights', 'State rights', 'Corporate rights'], correctIndex: 1, explanation: 'Cultural and educational rights of minorities.' },
              { id: 'soc8q8', question: 'Telangana movement is example of:', options: ['Communalism', 'Regionalism', 'Casteism', 'Feminism'], correctIndex: 1, explanation: 'Demand for separate state based on region.' },
              { id: 'soc8q9', question: 'Three-language formula includes:', options: ['Only Hindi', 'Hindi, English, Regional', 'Only English', 'Sanskrit'], correctIndex: 1, explanation: 'Hindi, English, and one regional language.' },
              { id: 'soc8q10', question: 'Sixth Schedule is for:', options: ['Women', 'Tribal areas', 'Urban areas', 'Coastal areas'], correctIndex: 1, explanation: 'Administration of tribal areas in North-East.' },
              { id: 'soc8q11', question: 'Sons of Soil demands:', options: ['More land', 'Jobs for locals', 'Independence', 'Religion'], correctIndex: 1, explanation: 'Preference for local people in jobs/resources.' },
              { id: 'soc8q12', question: 'Vote bank politics targets:', options: ['All voters equally', 'Specific community groups', 'Only rich', 'Only poor'], correctIndex: 1, explanation: 'Appealing to specific caste/religious groups.' },
              { id: 'soc8q13', question: '1984 riots were against:', options: ['Muslims', 'Christians', 'Sikhs', 'Hindus'], correctIndex: 2, explanation: 'Anti-Sikh violence after Indira Gandhi\'s assassination.' },
              { id: 'soc8q14', question: 'Uniform Civil Code means:', options: ['Uniform dress code', 'Same personal laws for all', 'Same education', 'Same taxes'], correctIndex: 1, explanation: 'Single set of personal laws regardless of religion.' },
              { id: 'soc8q15', question: 'National integration means:', options: ['Division', 'Unifying diverse groups', 'Separation', 'Isolation'], correctIndex: 1, explanation: 'Process of creating national unity.' },
              { id: 'soc8q16', question: 'Major religions in India are:', options: ['3', '4', '5', '6'], correctIndex: 3, explanation: 'Hinduism, Islam, Christianity, Sikhism, Buddhism, Jainism.' },
              { id: 'soc8q17', question: 'Inter-state disputes are about:', options: ['Language only', 'Water, borders, resources', 'Religion only', 'Caste only'], correctIndex: 1, explanation: 'States conflict over resources, boundaries.' },
              { id: 'soc8q18', question: 'Separatism demands:', options: ['Reform', 'Independence', 'Reservation', 'Election'], correctIndex: 1, explanation: 'Demand for separate nation.' },
              { id: 'soc8q19', question: 'North-East insurgencies are form of:', options: ['Communalism', 'Regionalism/Separatism', 'Casteism', 'Classism'], correctIndex: 1, explanation: 'Demand for independence or autonomy.' },
              { id: 'soc8q20', question: 'Western secularism differs from Indian because:', options: ['Same', 'Complete separation vs equal treatment', 'No difference', 'India is anti-religion'], correctIndex: 1, explanation: 'Western: strict separation; Indian: equal support.' },
              { id: 'soc8q21', question: 'Linguistic conflicts arise over:', options: ['Religion', 'Language status and use', 'Caste', 'Class'], correctIndex: 1, explanation: 'Disputes over official language, medium of instruction.' },
              { id: 'soc8q22', question: 'Education promotes national integration by:', options: ['Division', 'Common values and understanding', 'Competition', 'Conflict'], correctIndex: 1, explanation: 'Develops secular outlook, mutual understanding.' },
              { id: 'soc8q23', question: 'Media can spread communalism through:', options: ['Good news only', 'Stereotypes and hate speech', 'Education', 'Sports'], correctIndex: 1, explanation: 'Biased reporting, stereotyping communities.' },
              { id: 'soc8q24', question: 'Constitutional unity factors include:', options: ['Only flag', 'Constitution, symbols, federal structure', 'Only anthem', 'Only map'], correctIndex: 1, explanation: 'Multiple constitutional provisions for unity.' },
              { id: 'soc8q25', question: 'Article 350B relates to:', options: ['Religion', 'Language development', 'Caste', 'Tribes'], correctIndex: 1, explanation: 'Special Officer for linguistic minorities.' },
              { id: 'soc8q26', question: 'Gorkhaland demand is for:', options: ['New country', 'Separate state', 'More seats', 'Language'], correctIndex: 1, explanation: 'Demand for separate state for Gorkhas.' },
              { id: 'soc8q27', question: 'Gujarat riots occurred in:', options: ['1992', '1999', '2002', '2008'], correctIndex: 2, explanation: '2002 Gujarat communal violence.' },
              { id: 'soc8q28', question: 'Minority welfare schemes aim to:', options: ['Divide', 'Uplift minorities', 'Discriminate', 'Separate'], correctIndex: 1, explanation: 'Educational and economic development of minorities.' },
              { id: 'soc8q29', question: 'Ethnic conflict is between:', options: ['Classes', 'Genders', 'Cultural groups', 'Age groups'], correctIndex: 2, explanation: 'Different ethnic/cultural communities.' },
              { id: 'soc8q30', question: 'Diversity in India is managed through:', options: ['Force only', 'Constitution and policies', 'Ignoring differences', 'Separation'], correctIndex: 1, explanation: 'Constitutional provisions, policies, education.' }
            ],
            reels: [
              { id: 'soc8r1', title: 'Cultural Diversity', content: '22 languages.\n6 religions.\nMany cultures!', color: getReelColor(0) },
              { id: 'soc8r2', title: 'Communalism', content: 'Religion + Politics.\nDivides society.\nRiots result.', color: getReelColor(1) },
              { id: 'soc8r3', title: 'Regionalism', content: 'My region first!\nState demands.\nSeparatism risk.', color: getReelColor(2) },
              { id: 'soc8r4', title: 'Indian Secularism', content: 'Equal to all religions.\nNot anti-religion.\nState neutrality.', color: getReelColor(3) },
              { id: 'soc8r5', title: 'Partition 1947', content: 'India-Pakistan split.\nCommunal violence.\nMass migration.', color: getReelColor(4) },
              { id: 'soc8r6', title: 'Unity Factors', content: 'Constitution.\nNational symbols.\nFederal structure.', color: getReelColor(5) },
              { id: 'soc8r7', title: 'Babri 1992', content: 'Mosque demolished.\nCommunal riots.\nHindu-Muslim divide.', color: getReelColor(6) },
              { id: 'soc8r8', title: 'Article 29-30', content: 'Minority rights.\nCultural protection.\nEducational freedom.', color: getReelColor(7) },
              { id: 'soc8r9', title: 'Sons of Soil', content: 'Jobs for locals.\nAnti-migrant.\nRegional identity.', color: getReelColor(8) },
              { id: 'soc8r10', title: 'Vote Bank', content: 'Target community.\nGet votes.\nDivisive politics.', color: getReelColor(9) },
              { id: 'soc8r11', title: 'Telangana', content: 'State demand.\nAchieved 2014.\nRegionalism example.', color: getReelColor(10) },
              { id: 'soc8r12', title: 'Three Languages', content: 'Hindi + English.\n+ Regional language.\nSchool policy.', color: getReelColor(11) },
              { id: 'soc8r13', title: '1984 Riots', content: 'Anti-Sikh violence.\nIndira assassination.\nThousands killed.', color: getReelColor(12) },
              { id: 'soc8r14', title: 'UCC Debate', content: 'One personal law.\nAll religions same.\nControversial!', color: getReelColor(13) },
              { id: 'soc8r15', title: 'Sixth Schedule', content: 'Tribal autonomy.\nNorth-East areas.\nSelf-governance.', color: getReelColor(14) },
              { id: 'soc8r16', title: 'National Integration', content: 'Unity efforts.\nDiverse → One.\nIndia united.', color: getReelColor(15) },
              { id: 'soc8r17', title: 'Separatism', content: 'Want independence.\nNorth-East issues.\nKashmir problem.', color: getReelColor(16) },
              { id: 'soc8r18', title: '6 Religions', content: 'Hindu, Muslim, Christian.\nSikh, Buddhist, Jain.\nAll Indian!', color: getReelColor(17) },
              { id: 'soc8r19', title: 'Inter-state Disputes', content: 'Water sharing.\nBorder conflicts.\nKaveri, Krishna.', color: getReelColor(18) },
              { id: 'soc8r20', title: 'Media Role', content: 'Can unite.\nCan divide.\nResponsibility!', color: getReelColor(19) },
              { id: 'soc8r21', title: 'Linguistic Conflict', content: 'Hindi imposition.\nSouth protest.\nLanguage wars.', color: getReelColor(20) },
              { id: 'soc8r22', title: 'Gujarat 2002', content: 'Godhra train.\nCommunal riots.\nThousands died.', color: getReelColor(21) },
              { id: 'soc8r23', title: 'Education Unity', content: 'Common values.\nSecular outlook.\nMutual respect.', color: getReelColor(22) },
              { id: 'soc8r24', title: 'Minority Schemes', content: 'Welfare programs.\nEducation, jobs.\nGovernment support.', color: getReelColor(23) },
              { id: 'soc8r25', title: 'Gorkhaland', content: 'State demand.\nWest Bengal hills.\nOngoing movement.', color: getReelColor(24) },
              { id: 'soc8r26', title: 'Riot Causes', content: 'Politics + Economics.\nHistory + Media.\nAll combine!', color: getReelColor(25) },
              { id: 'soc8r27', title: 'Managing Diversity', content: 'Constitution helps.\nPolicies support.\nDialogue needed.', color: getReelColor(26) },
              { id: 'soc8r28', title: 'Challenges', content: 'Communalism.\nRegionalism.\nCasteism.', color: getReelColor(27) },
              { id: 'soc8r29', title: 'North-East', content: 'Multiple insurgencies.\nEthnic issues.\nAutonomy demands.', color: getReelColor(28) },
              { id: 'soc8r30', title: 'India Diverse', content: 'Many in One!\nUnity in Diversity.\nStrength!', color: getReelColor(29) }
            ],
            longAnswers: [
              {
                id: 'socl8-1',
                question: 'What is Communalism? Discuss its causes and consequences in India.',
                mnemonic: 'COMMUNALISM - Community vs nation, Other religions opposed, Majority-minority conflict, Muslim-Hindu tension, Unity broken, National integration threatened, Alienation, Loyalty to religion, Incidents of violence, Suspicion, Manipulation by politicians',
                answer: `### Definition of Communalism

**Meaning**: Communalism is an ideology that promotes the interests of one religious community over others, often leading to conflict and violence.

**According to Bipin Chandra**: "Communalism is the belief that because a group of people follow a particular religion they have, as a result, common social, political and economic interests."

### Characteristics of Communalism

| Feature | Description |
|---------|-------------|
| Religious Identity | Primary basis of group identity |
| Political Ideology | Religion used for political gains |
| Hostility | Against other religious communities |
| Exclusivism | "Our" community vs "Their" community |
| Violence Potential | Can lead to riots, attacks |

### Stages of Communalism (Bipin Chandra)

| Stage | Belief |
|-------|--------|
| **Mild** | Followers of same religion have common interests |
| **Moderate** | Interests of different religions are different |
| **Extreme** | Interests are incompatible and hostile |

### Causes of Communalism in India

**1. Historical Factors**

| Factor | Impact |
|--------|--------|
| Colonial policy | Divide and rule |
| Separate electorates | Community-based voting |
| Partition trauma | Hindu-Muslim distrust |
| Historical narratives | Selective interpretations |

**2. Political Factors**

| Factor | How it works |
|--------|-------------|
| Vote bank politics | Appealing to religious communities |
| Communal parties | Using religion for mobilization |
| Hate speeches | Inciting communal passions |
| Electoral benefits | Polarization for votes |

**3. Economic Factors**

| Factor | Mechanism |
|--------|----------|
| Competition | For jobs, business, resources |
| Scapegoating | Blaming other community for problems |
| Economic insecurity | Making others the enemy |

**4. Social Factors**

| Factor | Role |
|--------|------|
| Residential segregation | Living in separate areas |
| Educational segregation | Separate schools |
| Social distance | Limited inter-community contact |
| Stereotypes | Prejudices about other community |

**5. Media Role**
- Sensationalism
- Biased reporting
- Social media rumors
- Hate speech online

### Major Communal Incidents in India

| Incident | Year | Impact |
|----------|------|--------|
| Partition | 1947 | Millions killed, displaced |
| Anti-Sikh riots | 1984 | Thousands killed |
| Babri Masjid | 1992 | Nationwide riots |
| Gujarat riots | 2002 | Over 1000 killed |
| Muzaffarnagar | 2013 | Violence, displacement |

### Consequences of Communalism

**1. Social Consequences**
| Impact | Description |
|--------|-------------|
| Distrust | Between communities |
| Segregation | Ghettoization |
| Trauma | Psychological impact |
| Family destruction | Widows, orphans |

**2. Economic Consequences**
- Property destruction
- Business losses
- Displacement
- Development setback

**3. Political Consequences**
- National unity threatened
- Democratic values undermined
- Communal polarization
- International image damaged

### Measures to Combat Communalism

| Measure | Action |
|---------|--------|
| Education | Secular, rational education |
| Law enforcement | Swift action against perpetrators |
| Media responsibility | Ethical reporting |
| Political will | Not using religion for votes |
| Civil society | Peace committees, dialogue |
| Legal measures | Hate speech laws |

### Conclusion
Communalism remains a major challenge to India's secular fabric and national integration. Combating it requires political will, legal action, educational reform, and promoting inter-community dialogue and understanding.`
              },
              {
                id: 'socl8-2',
                question: 'Explain Regionalism in India. What are its causes and effects?',
                mnemonic: 'REGIONALISM - Regional identity, Economic disparities, Groups demand, Insurgency, Outsider notion, Nationalism vs region, Autonomy demands, Language issues, Interstate conflicts, State demands, Migration issues',
                answer: `### Definition of Regionalism

**Meaning**: Regionalism is the feeling of loyalty and attachment to a particular region over the nation, sometimes leading to demands for autonomy or separate statehood.

**Types**:
1. **Supra-state Regionalism**: Identity larger than state (South India, North-East)
2. **Inter-state Regionalism**: Disputes between states
3. **Intra-state Regionalism**: Within a state (Telangana in Andhra)

### Forms of Regionalism

| Form | Example |
|------|--------|
| Demand for separate state | Telangana, Uttarakhand |
| Greater autonomy | Kashmir, North-East |
| Sons of soil movement | Maharashtra, Karnataka |
| Resource disputes | Cauvery water, Krishna water |
| Border disputes | Belagavi between Karnataka-Maharashtra |

### Causes of Regionalism

**1. Geographical Factors**

| Factor | Impact |
|--------|--------|
| Natural barriers | Mountains, rivers create distinct regions |
| Climate differences | Different lifestyles |
| Resource distribution | Uneven development |
| Distance from center | North-East feels neglected |

**2. Historical Factors**

| Factor | Example |
|--------|--------|
| Pre-independence identities | Princely states |
| Linguistic movements | State reorganization |
| Colonial policies | Differential treatment |
| Cultural heritage | Regional kingdoms' legacy |

**3. Economic Factors**

| Factor | Manifestation |
|--------|---------------|
| Uneven development | Some states richer |
| Resource allocation | Disputes over sharing |
| Migration | Competition for jobs |
| Investment patterns | Coastal vs interior |

**Examples of Economic Disputes**:
- Cauvery water (Karnataka-Tamil Nadu)
- Krishna water (Andhra-Telangana-Karnataka)
- Mining resources
- Central funds allocation

**4. Cultural-Linguistic Factors**

| Factor | Impact |
|--------|--------|
| Language identity | States reorganized on linguistic basis |
| Script differences | Tamil, Telugu, Kannada pride |
| Cultural distinctiveness | Regional art, food, dress |
| Hindi imposition fears | South Indian resistance |

**5. Political Factors**

| Factor | How it operates |
|--------|----------------|
| Regional parties | Mobilize regional identity |
| Electoral politics | Regional issues win votes |
| Central neglect | Real or perceived |
| Power-sharing | Autonomy demands |

### Major Regionalist Movements in India

| Region/State | Movement/Issue |
|--------------|----------------|
| **North-East** | Insurgencies, autonomy demands |
| **Punjab** | Khalistan movement (1980s) |
| **Kashmir** | Autonomy/separatism |
| **Tamil Nadu** | Anti-Hindi, Dravidian movement |
| **Telangana** | Separate state (achieved 2014) |
| **Maharashtra** | Sons of soil, Shiv Sena |
| **Assam** | Anti-foreigner movement |
| **Gorkhaland** | Separate state demand |

### Effects of Regionalism

**Negative Effects**:

| Effect | Description |
|--------|-------------|
| National unity | Threatens integration |
| Inter-state conflicts | Disputes, violence |
| Parochialism | "Outsider" discrimination |
| Development hindrance | Resources wasted on conflicts |
| Violence | Ethnic clashes, insurgency |

**Positive Effects**:

| Effect | Description |
|--------|-------------|
| Decentralization | Power to regions |
| Cultural preservation | Regional identity protected |
| Development focus | Regional issues addressed |
| Democratic expression | Articulation of local aspirations |
| Administrative efficiency | Smaller states more manageable |

### Constitutional Response

| Provision | Purpose |
|-----------|--------|
| Article 3 | Parliament can create new states |
| Fifth Schedule | Tribal areas administration |
| Sixth Schedule | Autonomous councils in NE |
| Article 371 | Special provisions for states |
| Inter-State Council | Resolve disputes |

### Managing Regionalism

| Approach | Measure |
|----------|--------|
| Balanced development | Reduce disparities |
| Cultural accommodation | Respect regional identities |
| Power sharing | Federal arrangements |
| Dialogue | Resolve conflicts peacefully |
| Constitutional flexibility | New states when needed |

### Conclusion
Regionalism is both a challenge and an expression of India's diversity. While extreme regionalism threatens national unity, accommodating regional aspirations within a federal framework strengthens democracy and ensures balanced development.`
              },
              {
                id: 'socl8-3',
                question: 'Discuss the concept of Secularism in India and challenges to it.',
                mnemonic: 'SECULAR - State neutral, Equal respect all religions, Constitution guarantees, Universal values, Laws protect, All religions freedom, Religious minorities rights',
                answer: `### Definition of Secularism

**Western Concept**: Complete separation of religion and state (as in USA, France).

**Indian Concept**: Equal respect for all religions by the state, not separation but equidistance.

**42nd Amendment (1976)**: Added "Secular" to Preamble.

### Indian Model of Secularism

| Feature | Explanation |
|---------|-------------|
| No state religion | India doesn't have official religion |
| Equal treatment | All religions treated equally |
| Religious freedom | Right to practice any religion |
| Non-interference | State doesn't interfere in religion |
| Reform allowed | State can reform religious practices |

### Constitutional Provisions

**Preamble**: "Secular" Republic

**Fundamental Rights**:

| Article | Provision |
|---------|----------|
| Article 14 | Equality before law |
| Article 15 | No discrimination on religion |
| Article 25 | Freedom of conscience and religion |
| Article 26 | Freedom to manage religious affairs |
| Article 27 | No tax for religious promotion |
| Article 28 | No religious instruction in state schools |
| Article 29-30 | Minority rights |

**Directive Principles**:
- Article 44: Uniform Civil Code (not implemented)

### Features of Indian Secularism

**1. Principled Distance**
- State maintains distance from all religions
- But can intervene for reform (e.g., abolishing Sati)

**2. Equal Respect (Sarva Dharma Sambhava)**
- All religions respected equally
- Government supports all religious festivals
- Religious holidays for all communities

**3. Religious Reform**
- State has reformed Hindu personal law
- Abolished untouchability
- Can reform practices against human rights

**4. Minority Protection**
- Special provisions for minorities
- Right to establish educational institutions
- Protection of religious and linguistic identity

### Comparison: Western vs Indian Secularism

| Aspect | Western | Indian |
|--------|---------|--------|
| State-Religion | Complete separation | Principled distance |
| Religion in public | Excluded | Accommodated |
| Personal law | Uniform civil law | Multiple personal laws |
| Religious support | None by state | State supports all equally |
| Example | France, USA | India |

### Challenges to Secularism in India

**1. Communalism**

| Issue | Impact |
|-------|--------|
| Religious politics | Vote bank politics |
| Communal violence | Riots, targeted attacks |
| Hate speech | Inciting religious hatred |
| Polarization | Community divisions |

**2. Multiple Personal Laws**

| Community | Personal Law |
|-----------|-------------|
| Hindu | Hindu Marriage Act, Succession Act |
| Muslim | Muslim Personal Law (Shariat) |
| Christian | Indian Christian Marriage Act |
| Parsi | Parsi Marriage and Divorce Act |

**Controversy**: Uniform Civil Code debate

**3. Minority Appeasement Debate**
- Some argue minorities are appeased
- Others say minorities are vulnerable
- Politicization of the issue

**4. Majoritarian Pressures**
- Demands for Hindu Rashtra
- Cow protection violence
- Love Jihad narratives
- Conversion controversies

**5. Religious Fundamentalism**
- All religions have extremist elements
- Rise of religious nationalism
- Social media amplification

**6. Politicization of Religion**

| Manifestation | Example |
|---------------|--------|
| Temple-Mosque disputes | Ayodhya, Gyanvapi |
| Religious symbols | Hijab controversy |
| Dietary practices | Beef ban issues |
| Festivals | Loudspeaker controversies |

### Maintaining Secularism

| Approach | Action |
|----------|--------|
| Education | Secular, rational curriculum |
| Law enforcement | Swift action against violence |
| Political ethics | Not using religion for votes |
| Media responsibility | Non-sensational reporting |
| Civil society | Interfaith dialogue |
| Judicial vigilance | Protecting secular values |

### Conclusion
Indian secularism, with its unique model of equal respect for all religions, faces significant challenges from communalism, politicization of religion, and fundamentalism. Maintaining secularism requires commitment from state, society, and citizens to the constitutional values of equality, liberty, and fraternity.`
              }
            ]
          },
          {
            id: 'soc9',
            title: '9. Structural and Cultural Change',
            description: 'Colonialism, modernization, globalization, and social change in India.',
            summary: '**Colonialism**: Foreign rule transforming society\n**Modernization**: Traditional to modern transition\n**Globalization**: World interconnectedness\n**Social Change**: Transformation in society structure',
            detailedNotes: `### 1. Understanding Social Change

**Definition**: Transformation in social structure, relationships, values, and institutions over time.

**Types of Change**:
* Structural change (institutions)
* Cultural change (values, beliefs)
* Evolutionary change (gradual)
* Revolutionary change (rapid)

### 2. Colonialism in India

**Impact on Indian Society**:
* New administrative system
* Legal system changes
* Economic exploitation
* Education reforms
* Social reform movements

**Land Reforms**:
* Permanent Settlement (1793)
* Ryotwari System
* Mahalwari System
* Displacement of traditional systems

**Industrialization Under Colonialism**:
* Deindustrialization of handicrafts
* Railways for extraction
* Limited industrial development
* Drain of wealth

### 3. Urbanization

**Colonial Cities**:
* Hill stations (Shimla, Darjeeling)
* Port cities (Mumbai, Chennai, Kolkata)
* Administrative centers

**Post-Independence Urbanization**:
* Migration to cities
* Slum development
* Urban-rural divide
* Smart cities initiative

### 4. Modernization

**Features**:
* Industrialization
* Urbanization
* Rationalization
* Democratization
* Secularization

**Indian Experience**:
* Five Year Plans
* Green Revolution
* Technological changes
* Social legislation
* Constitutional reforms

### 5. Secularization

**Definition**: Decline of religious influence on social institutions.

**Indian Context**:
* Religion remains important
* Separation of state and religion
* Scientific temper promoted
* Coexistence of religious and secular

### 6. Westernization

**M.N. Srinivas** coined term:
* Adoption of Western lifestyle
* Changes in food, dress, language
* Values and ideologies
* Educational patterns

**Critique**:
* Not same as modernization
* Cultural imperialism concerns
* Selective adoption

### 7. Sanskritization

**M.N. Srinivas** concept:
* Lower castes adopting upper caste practices
* Vegetarianism, rituals
* Claiming higher status
* Mobility within caste system

**Limitations**:
* Doesn't change hierarchy
* Only positional change
* Reinforces caste system

### 8. Globalization

**Definition**: Increased interconnectedness across world in economy, culture, politics.

**Economic Globalization**:
* 1991 LPG reforms
* MNCs in India
* Service sector growth
* IT revolution

**Cultural Globalization**:
* Global media
* Consumer culture
* Lifestyle changes
* Cultural homogenization

**Critiques**:
* Inequality increases
* Cultural imperialism
* Environmental damage
* Job losses in some sectors`,
            flashcards: [
              { id: 'soc9f1', front: 'What is social change?', back: 'Transformation in social structure, relationships, values, and institutions over time' },
              { id: 'soc9f2', front: 'Types of social change?', back: 'Structural, Cultural, Evolutionary (gradual), Revolutionary (rapid)' },
              { id: 'soc9f3', front: 'What was Permanent Settlement?', back: 'Land revenue system (1793) creating Zamindars as landowners' },
              { id: 'soc9f4', front: 'What is modernization?', back: 'Transition from traditional to modern society with industrialization, urbanization, democratization' },
              { id: 'soc9f5', front: 'Who coined "Westernization"?', back: 'M.N. Srinivas' },
              { id: 'soc9f6', front: 'What is Westernization?', back: 'Adoption of Western lifestyle, values, food, dress, language' },
              { id: 'soc9f7', front: 'Who coined "Sanskritization"?', back: 'M.N. Srinivas' },
              { id: 'soc9f8', front: 'What is Sanskritization?', back: 'Lower castes adopting upper caste practices to claim higher status' },
              { id: 'soc9f9', front: 'What is secularization?', back: 'Decline of religious influence on social institutions' },
              { id: 'soc9f10', front: 'What is globalization?', back: 'Increased interconnectedness across world in economy, culture, politics' },
              { id: 'soc9f11', front: 'When did India open economy?', back: '1991 - LPG (Liberalization, Privatization, Globalization) reforms' },
              { id: 'soc9f12', front: 'What is deindustrialization?', back: 'Destruction of traditional handicrafts/industries under colonialism' },
              { id: 'soc9f13', front: 'Examples of colonial port cities?', back: 'Mumbai (Bombay), Chennai (Madras), Kolkata (Calcutta)' },
              { id: 'soc9f14', front: 'What was Ryotwari system?', back: 'Land revenue collected directly from cultivators' },
              { id: 'soc9f15', front: 'What is cultural imperialism?', back: 'Dominant culture imposing values on others, criticism of Westernization' },
              { id: 'soc9f16', front: 'What is Green Revolution?', back: 'Agricultural modernization with high-yield seeds, irrigation, fertilizers' },
              { id: 'soc9f17', front: 'Limitation of Sanskritization?', back: 'Doesn\'t change caste hierarchy, only positional change, reinforces system' },
              { id: 'soc9f18', front: 'MNC stands for?', back: 'Multi-National Corporation' },
              { id: 'soc9f19', front: 'LPG reforms stand for?', back: 'Liberalization, Privatization, Globalization' },
              { id: 'soc9f20', front: 'What is drain of wealth?', back: 'Transfer of resources from India to Britain during colonialism' },
              { id: 'soc9f21', front: 'What is urbanization?', back: 'Growth of cities and migration from rural to urban areas' },
              { id: 'soc9f22', front: 'Colonial hill stations examples?', back: 'Shimla, Darjeeling, Ooty, Mussoorie' },
              { id: 'soc9f23', front: 'What is cultural globalization?', back: 'Global spread of cultural products, media, consumer culture' },
              { id: 'soc9f24', front: 'Five Year Plans were for?', back: 'Planned economic development and modernization of India' },
              { id: 'soc9f25', front: 'Mahalwari system was?', back: 'Land revenue collected from village community as a whole' },
              { id: 'soc9f26', front: 'Critique of globalization?', back: 'Increases inequality, cultural imperialism, environmental damage' },
              { id: 'soc9f27', front: 'What replaced handicrafts under colonialism?', back: 'British manufactured goods (Lancashire textiles)' },
              { id: 'soc9f28', front: 'What is IT revolution in India?', back: 'Growth of information technology sector, Bangalore, outsourcing' },
              { id: 'soc9f29', front: 'What is evolutionary change?', back: 'Gradual, slow change over long period' },
              { id: 'soc9f30', front: 'What is revolutionary change?', back: 'Rapid, fundamental change in short period' }
            ],
            mcqs: [
              { id: 'soc9q1', question: 'Social change means change in:', options: ['Only economy', 'Structure, relationships, values', 'Only politics', 'Only religion'], correctIndex: 1, explanation: 'Comprehensive transformation in society.' },
              { id: 'soc9q2', question: 'Permanent Settlement was introduced in:', options: ['1793', '1857', '1947', '1991'], correctIndex: 0, explanation: 'By Cornwallis in 1793.' },
              { id: 'soc9q3', question: 'Who coined Sanskritization?', options: ['Weber', 'Durkheim', 'M.N. Srinivas', 'Marx'], correctIndex: 2, explanation: 'M.N. Srinivas in his study of Coorg.' },
              { id: 'soc9q4', question: 'Westernization was coined by:', options: ['M.N. Srinivas', 'Nehru', 'Gandhi', 'Ambedkar'], correctIndex: 0, explanation: 'Srinivas described changes due to British contact.' },
              { id: 'soc9q5', question: 'LPG reforms began in:', options: ['1947', '1977', '1991', '2001'], correctIndex: 2, explanation: 'Manmohan Singh\'s 1991 economic reforms.' },
              { id: 'soc9q6', question: 'Globalization means:', options: ['Isolation', 'World interconnectedness', 'Localization', 'Nationalism'], correctIndex: 1, explanation: 'Integration across world.' },
              { id: 'soc9q7', question: 'Sanskritization involves:', options: ['Upper adopting lower practices', 'Lower adopting upper practices', 'Western practices', 'No change'], correctIndex: 1, explanation: 'Lower castes copying upper caste customs.' },
              { id: 'soc9q8', question: 'Deindustrialization under colonialism meant:', options: ['More industries', 'Destruction of handicrafts', 'Modernization', 'Development'], correctIndex: 1, explanation: 'Traditional industries destroyed.' },
              { id: 'soc9q9', question: 'Colonial port city:', options: ['Delhi', 'Jaipur', 'Mumbai', 'Lucknow'], correctIndex: 2, explanation: 'Mumbai (Bombay) was major port city.' },
              { id: 'soc9q10', question: 'Hill station developed by British:', options: ['Mumbai', 'Chennai', 'Shimla', 'Kolkata'], correctIndex: 2, explanation: 'Shimla was summer capital.' },
              { id: 'soc9q11', question: 'Secularization means:', options: ['More religion', 'Decline of religious influence', 'New religion', 'Anti-religion'], correctIndex: 1, explanation: 'Reduced religious control over institutions.' },
              { id: 'soc9q12', question: 'Drain of wealth refers to:', options: ['Indian exports', 'Resource transfer to Britain', 'Trade profit', 'Investment'], correctIndex: 1, explanation: 'Wealth flowing from India to Britain.' },
              { id: 'soc9q13', question: 'Ryotwari system collected revenue from:', options: ['Zamindars', 'Cultivators directly', 'Village community', 'Merchants'], correctIndex: 1, explanation: 'Direct collection from farmers.' },
              { id: 'soc9q14', question: 'LPG stands for:', options: ['Liquified Petroleum Gas', 'Liberalization Privatization Globalization', 'Local People Governance', 'None'], correctIndex: 1, explanation: 'Economic reforms components.' },
              { id: 'soc9q15', question: 'Green Revolution involved:', options: ['Environment only', 'High-yield seeds, irrigation', 'Green colour', 'Forest only'], correctIndex: 1, explanation: 'Agricultural modernization.' },
              { id: 'soc9q16', question: 'Limitation of Sanskritization:', options: ['Changes hierarchy', 'Doesn\'t change hierarchy', 'Ends caste', 'Promotes equality'], correctIndex: 1, explanation: 'Only positional change, system remains.' },
              { id: 'soc9q17', question: 'MNC stands for:', options: ['Ministry of National Council', 'Multi-National Corporation', 'Many National Companies', 'None'], correctIndex: 1, explanation: 'Corporations operating in multiple countries.' },
              { id: 'soc9q18', question: 'Cultural globalization spreads:', options: ['Only economy', 'Media and consumer culture', 'Only politics', 'Only religion'], correctIndex: 1, explanation: 'Global cultural products and lifestyles.' },
              { id: 'soc9q19', question: 'Five Year Plans were for:', options: ['Education only', 'Planned economic development', 'Defence only', 'Religion'], correctIndex: 1, explanation: 'Comprehensive development planning.' },
              { id: 'soc9q20', question: 'Evolutionary change is:', options: ['Rapid', 'Gradual', 'Revolutionary', 'Sudden'], correctIndex: 1, explanation: 'Slow change over long period.' },
              { id: 'soc9q21', question: 'Revolutionary change is:', options: ['Slow', 'Gradual', 'Rapid and fundamental', 'No change'], correctIndex: 2, explanation: 'Quick fundamental transformation.' },
              { id: 'soc9q22', question: 'IT revolution in India centered in:', options: ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata'], correctIndex: 2, explanation: 'Bangalore as IT hub.' },
              { id: 'soc9q23', question: 'Cultural imperialism is criticism of:', options: ['Sanskritization', 'Westernization/Globalization', 'Traditionalism', 'Nationalism'], correctIndex: 1, explanation: 'Western dominance over cultures.' },
              { id: 'soc9q24', question: 'Mahalwari system collected from:', options: ['Individual farmer', 'Zamindar', 'Village community', 'British'], correctIndex: 2, explanation: 'Community-based collection.' },
              { id: 'soc9q25', question: 'Urbanization means:', options: ['Rural growth', 'Growth of cities', 'Agriculture', 'Forest'], correctIndex: 1, explanation: 'Migration to and expansion of cities.' },
              { id: 'soc9q26', question: 'Lancashire textiles replaced Indian:', options: ['Agriculture', 'Handicrafts', 'Forests', 'Rivers'], correctIndex: 1, explanation: 'British manufactured goods destroyed Indian textiles.' },
              { id: 'soc9q27', question: 'Critique of globalization includes:', options: ['Only benefits', 'Inequality increase', 'Perfect equality', 'No critique'], correctIndex: 1, explanation: 'Growing gap between rich and poor.' },
              { id: 'soc9q28', question: 'Colonialism brought to India:', options: ['No change', 'New legal and administrative system', 'Only problems', 'Only benefits'], correctIndex: 1, explanation: 'Transformed structures while exploiting.' },
              { id: 'soc9q29', question: 'Smart cities initiative is for:', options: ['Rural areas', 'Urban development', 'Agriculture', 'Forests'], correctIndex: 1, explanation: 'Modern urban development program.' },
              { id: 'soc9q30', question: 'Modernization features include:', options: ['Only religion', 'Industrialization, urbanization, rationalization', 'Only tradition', 'No change'], correctIndex: 1, explanation: 'Multiple dimensions of modern society.' }
            ],
            reels: [
              { id: 'soc9r1', title: 'Social Change', content: 'Structure transforms.\nValues shift.\nSociety evolves!', color: getReelColor(0) },
              { id: 'soc9r2', title: 'Colonialism Impact', content: 'New systems came.\nWealth drained.\nSociety changed.', color: getReelColor(1) },
              { id: 'soc9r3', title: 'Permanent Settlement', content: 'Zamindars created.\n1793 law.\nLand ownership changed.', color: getReelColor(2) },
              { id: 'soc9r4', title: 'Deindustrialization', content: 'Handicrafts destroyed.\nBritish goods came.\nWeavers suffered.', color: getReelColor(3) },
              { id: 'soc9r5', title: 'Sanskritization', content: 'Srinivas concept.\nLower copies upper.\nStatus seeking.', color: getReelColor(4) },
              { id: 'soc9r6', title: 'Westernization', content: 'Srinivas again!\nWestern lifestyle.\nFood, dress, values.', color: getReelColor(5) },
              { id: 'soc9r7', title: 'Modernization', content: 'Industry grows.\nCities expand.\nTradition fades.', color: getReelColor(6) },
              { id: 'soc9r8', title: 'Secularization', content: 'Religion declines.\nIn institutions.\nScience rises.', color: getReelColor(7) },
              { id: 'soc9r9', title: 'Globalization', content: 'World connects!\n1991 reforms.\nMNCs arrive.', color: getReelColor(8) },
              { id: 'soc9r10', title: 'LPG 1991', content: 'Liberalization.\nPrivatization.\nGlobalization!', color: getReelColor(9) },
              { id: 'soc9r11', title: 'Port Cities', content: 'Mumbai, Chennai.\nKolkata grew.\nColonial centers.', color: getReelColor(10) },
              { id: 'soc9r12', title: 'Hill Stations', content: 'Shimla, Darjeeling.\nBritish escape.\nCool retreats.', color: getReelColor(11) },
              { id: 'soc9r13', title: 'Drain of Wealth', content: 'Resources flowed.\nIndia to Britain.\nExploitation!', color: getReelColor(12) },
              { id: 'soc9r14', title: 'Green Revolution', content: 'New seeds came.\nIrrigation spread.\nYields increased.', color: getReelColor(13) },
              { id: 'soc9r15', title: 'Five Year Plans', content: 'Planned growth.\nNehru\'s vision.\nModernization path.', color: getReelColor(14) },
              { id: 'soc9r16', title: 'Sanskritization Limit', content: 'Caste stays!\nOnly position changes.\nHierarchy remains.', color: getReelColor(15) },
              { id: 'soc9r17', title: 'IT Revolution', content: 'Bangalore booms!\nOutsourcing grows.\nIndia shines.', color: getReelColor(16) },
              { id: 'soc9r18', title: 'Cultural Globalization', content: 'Global media.\nConsumer culture.\nLifestyles change.', color: getReelColor(17) },
              { id: 'soc9r19', title: 'MNCs in India', content: 'Big companies.\nGlobal presence.\nJobs + Issues.', color: getReelColor(18) },
              { id: 'soc9r20', title: 'Urbanization', content: 'Cities grow.\nMigration increases.\nSlums develop.', color: getReelColor(19) },
              { id: 'soc9r21', title: 'Cultural Imperialism', content: 'West dominates.\nLocal fades.\nCritique raised.', color: getReelColor(20) },
              { id: 'soc9r22', title: 'Ryotwari System', content: 'Direct collection.\nFrom farmers.\nColonial revenue.', color: getReelColor(21) },
              { id: 'soc9r23', title: 'Revolutionary Change', content: 'Fast transformation.\nFundamental shift.\nNew society!', color: getReelColor(22) },
              { id: 'soc9r24', title: 'Evolutionary Change', content: 'Slow process.\nGradual shift.\nOver generations.', color: getReelColor(23) },
              { id: 'soc9r25', title: 'M.N. Srinivas', content: 'Great sociologist.\nSanskritization coined.\nWesternization too!', color: getReelColor(24) },
              { id: 'soc9r26', title: 'Globalization Critique', content: 'Inequality grows.\nEnvironment suffers.\nJobs lost.', color: getReelColor(25) },
              { id: 'soc9r27', title: 'Smart Cities', content: 'Modern urban.\nTechnology-driven.\nFuture India.', color: getReelColor(26) },
              { id: 'soc9r28', title: 'Social Reform', content: 'Colonial era.\nSati banned.\nWidow remarriage.', color: getReelColor(27) },
              { id: 'soc9r29', title: 'Structural Change', content: 'Institutions transform.\nLaws change.\nNew systems.', color: getReelColor(28) },
              { id: 'soc9r30', title: 'India Transformed', content: 'Colony to nation.\nTraditional to modern.\nStill changing!', color: getReelColor(29) }
            ],
            longAnswers: [
              {
                id: 'socl9-1',
                question: 'Explain the impact of Colonialism on Indian society.',
                mnemonic: 'COLONIALISM - Control by foreigners, Opposition grew, Land systems changed, Official English, New education, Infrastructure, Alienation of Indians, Laws changed, Industrialization blocked, Society transformed, Manufacturing destroyed',
                answer: `### Introduction

**Colonialism**: The policy or practice of acquiring political control over another country, exploiting it economically, and influencing its culture.

**British Rule in India**: 1757 (Battle of Plassey) to 1947 (Independence)

### Impact on Indian Society

**1. Economic Impact**

| Change | Effect |
|--------|--------|
| Drain of Wealth | Resources extracted to Britain |
| De-industrialization | Traditional industries destroyed |
| Commercialization | Cash crops instead of food crops |
| New land systems | Permanent Settlement, Ryotwari |
| Railways | For colonial trade, not development |

**Land Revenue Systems**:
| System | Region | Feature |
|--------|--------|--------|
| Permanent Settlement | Bengal | Zamindars as landlords |
| Ryotwari | Madras, Bombay | Direct with cultivators |
| Mahalwari | UP, Punjab | Village as unit |

**Consequences**:
- Peasant impoverishment
- Famines (Bengal 1943)
- Landlordism
- Landless laborers increased

**2. Administrative Impact**

| Change | Description |
|--------|-------------|
| Centralized rule | Bureaucratic administration |
| Legal system | Common law, courts |
| Police | New system of policing |
| Civil services | ICS for administration |
| Local bodies | Municipal corporations |

**3. Educational Impact**

| Change | Effect |
|--------|--------|
| English education | Macaulay's Minute (1835) |
| Western knowledge | Science, literature introduced |
| Traditional learning | Sanskrit, Persian declined |
| New elite | English-educated middle class |
| Universities | Calcutta, Bombay, Madras (1857) |

**4. Social Impact**

**Social Reform**:
| Reform | Year | Reformer |
|--------|------|----------|
| Sati abolition | 1829 | Bentinck, Raja Ram Mohan Roy |
| Widow Remarriage | 1856 | Ishwar Chandra Vidyasagar |
| Age of Consent | 1891 | Raised marriage age |

**New Social Classes**:
- English-educated middle class
- Industrial workers (mills, railways)
- Modern professionals (lawyers, doctors)
- New landlord class

**5. Cultural Impact**

| Aspect | Change |
|--------|--------|
| Language | English as official, elite language |
| Dress | Western clothing adopted |
| Ideas | Liberalism, nationalism introduced |
| Religion | Christian missions, Hindu reform |
| Arts | New forms, Western influence |

**6. Political Impact**

| Development | Significance |
|-------------|-------------|
| National consciousness | Unity against British |
| Political organizations | Congress (1885) |
| Modern politics | Elections, parties |
| Press freedom | Newspapers, debates |

### Contradictions of Colonialism

**Colonial Intentions vs Outcomes**:
| Intention | Unintended Outcome |
|-----------|-------------------|
| English education for clerks | Created nationalist leaders |
| Railways for trade | Connected Indians |
| Press for administration | Spread nationalist ideas |
| Legal system | Provided tools for rights |

### Sociological Perspectives

**Positive View** (Modernization):
- Introduced modernity
- Ended social evils
- United diverse India
- Modern institutions

**Critical View** (Exploitation):
- Economic exploitation
- Racism and discrimination
- Destroyed traditional economy
- Psychological colonization

### Legacy of Colonialism

| Aspect | Continued Impact |
|--------|------------------|
| Language | English remains important |
| Law | Common law system |
| Administration | Bureaucratic structure |
| Education | English-medium preference |
| Infrastructure | Railways, ports |
| Economy | Dependent development patterns |

### Conclusion
Colonialism transformed Indian society profoundly, bringing both modernization and exploitation. Its impact on economy, society, culture, and politics continues to shape contemporary India. Understanding colonialism helps explain many current social patterns and challenges.`
              },
              {
                id: 'socl9-2',
                question: 'Explain the concepts of Sanskritization and Westernization as processes of social change.',
                mnemonic: 'SANSK-WEST - Status climbing, Adopting upper practices, New rituals, Srinivas coined, Kits of behavior / Western dress, Education English, Style modern, Technology adopted',
                answer: `### Introduction

M.N. Srinivas, a renowned Indian sociologist, introduced the concepts of Sanskritization and Westernization to explain social change in India.

### Sanskritization

**Definition**: The process by which lower castes adopt the customs, rituals, beliefs, and lifestyle of higher castes (especially Brahmins) to improve their social status.

**Coined by**: M.N. Srinivas (1952) in "Religion and Society among the Coorgs of South India"

### Features of Sanskritization

| Feature | Description |
|---------|-------------|
| Imitation | Lower castes copy upper caste practices |
| Status aspiration | Desire to move up in hierarchy |
| Group process | Entire community adopts changes |
| Time-consuming | Takes generations |
| Positional change | Status improves, not structure |

### What is Adopted?

| Aspect | Changes |
|--------|--------|
| Diet | Vegetarianism adopted |
| Rituals | Brahminical rituals followed |
| Occupation | "Polluting" occupations abandoned |
| Dress | Upper caste styles |
| Worship | Sanskrit mantras, priests |
| Social customs | Dowry, restrictions on women |

### Examples of Sanskritization

| Community | Changes Adopted |
|-----------|----------------|
| Nadars (Tamil Nadu) | Claimed Kshatriya status |
| Ezhavas (Kerala) | Temple entry movement |
| Yadavs (North India) | Claimed descent from Krishna |
| Oraons (Jharkhand) | Adopted Hindu practices |

### Critique of Sanskritization

| Criticism | Explanation |
|-----------|-------------|
| Accepts hierarchy | Doesn't challenge caste system |
| Imitates oppressors | Adopts dominant group's values |
| Women suffer | Adopts restrictions on women |
| False consciousness | Legitimizes inequality |
| Limited mobility | Status change, not structural change |

---

### Westernization

**Definition**: The changes in Indian society and culture brought about by contact with Western (British) civilization, affecting technology, institutions, ideology, and values.

**Coined by**: M.N. Srinivas

### Features of Westernization

| Feature | Description |
|---------|-------------|
| Technology | Modern technology adopted |
| Institutions | Education, law, administration |
| Values | Individualism, equality, rationalism |
| Lifestyle | Dress, food, entertainment |
| Language | English proficiency |

### Levels of Westernization

| Level | Description | Example |
|-------|-------------|--------|
| Material | Technology, goods | Cars, phones, appliances |
| Institutional | Systems, organizations | Universities, courts |
| Ideological | Values, beliefs | Democracy, human rights |
| Behavioral | Lifestyle, manners | Dining etiquette, dress |

### Examples of Westernization

| Sphere | Changes |
|--------|--------|
| Education | English medium, Western curriculum |
| Dress | Suits, jeans, Western fashion |
| Food | Fast food, dining out culture |
| Entertainment | Hollywood, English music |
| Family | Nuclear families, individual choice |
| Gender | Women's education, employment |

### Critique of Westernization

| Criticism | Explanation |
|-----------|-------------|
| Cultural imperialism | Western domination continues |
| Elitist | Only urban, educated benefit |
| Identity loss | Indian culture marginalized |
| Not selective | Both good and bad adopted |
| Homogenization | Global culture destroys local |

---

### Comparison: Sanskritization vs Westernization

| Aspect | Sanskritization | Westernization |
|--------|-----------------|----------------|
| Source | Indian (upper caste) | Western/British |
| Direction | Rural, traditional | Urban, modern |
| Who adopts | Lower castes | Educated elite |
| Time | Centuries old | Colonial period onwards |
| Ideology | Hierarchical | Egalitarian (in theory) |
| Effect on caste | Reinforces | Weakens (potentially) |

### Other Related Concepts (Srinivas)

| Concept | Meaning |
|---------|--------|
| Modernization | Rationalization, secularization |
| Dominant Caste | Economically/politically powerful caste |
| Vote Bank | Caste-based voting patterns |

### Conclusion
Sanskritization and Westernization are two important processes of social change in India. While Sanskritization operates within the caste framework, Westernization brings external influences. Both have complex impacts on Indian society, neither wholly positive nor negative.`
              },
              {
                id: 'socl9-3',
                question: 'Discuss the process of Modernization in India and its impact on society.',
                mnemonic: 'MODERN - Migration urban, Organization formal, Development goals, Education spread, Rationalization, Nationalism',
                answer: `### Definition of Modernization

**Meaning**: Modernization is the process of transition from a traditional, rural, agrarian society to a modern, urban, industrial society.

**Key Features**:
- Rationalization
- Industrialization
- Urbanization
- Secularization
- Democratization

### Characteristics of Modernization

| Aspect | Traditional | Modern |
|--------|-------------|--------|
| Economy | Agriculture | Industry, Services |
| Society | Rural | Urban |
| Values | Religious | Secular, Rational |
| Status | Ascribed | Achieved |
| Family | Joint | Nuclear |
| Politics | Monarchy/Feudal | Democracy |
| Education | Traditional | Modern, Scientific |

### Modernization in India

**Phases**:

| Phase | Period | Characteristics |
|-------|--------|----------------|
| Colonial | 1757-1947 | Western education, administration |
| Nehruvian | 1947-1990 | Planned development, industrialization |
| Liberalization | 1991-present | Globalization, privatization |

### Impact of Modernization

**1. Economic Modernization**

| Change | Impact |
|--------|--------|
| Industrialization | Factory production, urban jobs |
| Green Revolution | Agricultural productivity |
| Service sector | IT, BPO, banking growth |
| Infrastructure | Transport, communication |

**Economic Indicators**:
- GDP growth increased
- Middle class expanded
- Poverty reduced (though still high)
- Inequality persists

**2. Social Modernization**

| Institution | Change |
|-------------|--------|
| Family | Nuclear families increasing |
| Marriage | Age rising, choice increasing |
| Gender | Women's education, employment |
| Caste | Occupational link weakening |

**Changes in Social Structure**:

| Aspect | Traditional | Modern |
|--------|-------------|--------|
| Joint family | Common | Declining |
| Caste occupation | Rigid | Flexible |
| Women's role | Domestic | Public participation |
| Social mobility | Limited | Increased |

**3. Political Modernization**

| Feature | Development |
|---------|-------------|
| Democracy | Universal adult franchise |
| Participation | Political parties, elections |
| Decentralization | Panchayati Raj |
| Rights | Constitutional guarantees |

**4. Cultural Modernization**

| Sphere | Change |
|--------|--------|
| Education | Modern, scientific |
| Media | Mass media, internet |
| Values | Rational, individual |
| Religion | Secularization (partial) |

**5. Technological Modernization**

| Sector | Innovation |
|--------|------------|
| Agriculture | Tractors, HYV, irrigation |
| Industry | Automation, computers |
| Communication | Mobile, internet |
| Transport | Roads, railways, aviation |

### Challenges of Modernization

**1. Uneven Development**

| Gap | Disparity |
|-----|----------|
| Rural-Urban | Cities develop faster |
| Regional | Some states lag behind |
| Class | Rich-poor divide widens |
| Gender | Women still disadvantaged |

**2. Cultural Tensions**

| Conflict | Nature |
|----------|--------|
| Traditional vs Modern | Value conflicts |
| Religion vs Secularism | Identity politics |
| Local vs Global | Cultural homogenization fears |
| Generations | Intergenerational conflicts |

**3. Environmental Costs**

| Problem | Cause |
|---------|-------|
| Pollution | Industrial, vehicular |
| Deforestation | Development projects |
| Water scarcity | Over-extraction |
| Climate change | Carbon emissions |

### Theories of Modernization

**1. Classical Theory** (Rostow, Parsons):
- Linear progress from traditional to modern
- Western model as ideal
- Criticized for being Western-centric

**2. Dependency Theory**:
- Modernization creates dependency
- Core-periphery exploitation
- Underdevelopment by development

**3. Multiple Modernities**:
- Different paths to modernity
- No single Western model
- India has its own path

### Indian Path to Modernity

| Feature | Indian Specificity |
|---------|-------------------|
| Tradition | Modernity coexists with tradition |
| Religion | Secularization partial |
| Family | Joint family adapting, not disappearing |
| Caste | Changing but persisting |
| Democracy | Vibrant despite challenges |

### Conclusion
Modernization in India has brought significant changes in economy, society, politics, and culture. However, it has been uneven and incomplete, with traditional elements persisting alongside modern ones. Understanding this complex process is essential for addressing contemporary challenges and planning for the future.`
              }
            ]
          }
        ]
};
