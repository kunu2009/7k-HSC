import { Subject } from '../types';
import { getReelColor } from './helpers';

export const HIS_SUBJECT: Subject = {
        id: 'his', 
        name: 'History', 
        icon: 'BookOpen', 
        color: 'bg-orange-500', 
        syllabus: '1. Renaissance in Europe and Development of Science\n2. European Colonialism\n3. India and European Colonialism\n4. Colonialism and the Marathas\n5. India: Social and Religious Reforms\n6. Struggle against Colonialism\n7. Decolonisation to Political Integration of India\n8. World Wars and India\n9. World: Decolonisation\n10. Cold War\n11. India Transformed Part 1\n12. India Transformed Part 2',
        paperPattern: '### History Paper Pattern (80 Marks)\n\n* **Q.1 Multiple Choice (20 Marks)**\n* **Q.2 Answer in Brief (12 Marks)**\n* **Q.3 Short Notes (12 Marks)**\n* **Q.4 Long Answers (16 Marks)**\n* **Q.5 Map Work (8 Marks)**\n* **Q.6 Project (Internal - 20 Marks)**',
        previousPapers: [], 
        chapters: [
          {
            id: 'his1',
            title: '1. Renaissance in Europe and Development of Science',
            description: 'Crusades, Renaissance, Science, Geographical Discoveries, Industrial Revolution.',
            summary: '**Renaissance**: Rebirth of art and learning in Europe.\n**Crusades**: Holy wars that opened trade and knowledge.\n**Science**: Rise of empiricism and inventions.\n**Discoveries**: Sea routes to Asia and America.\n**Industrial Revolution**: Shift to machine-based manufacturing.',
            detailedNotes: '### 1. Crusades and their Consequences\\n* **Crusades**: Religious wars fought by Christians to regain Jerusalem from Islamic rule (11th-13th century).\\n* **Causes**: Pope\'s appeal, desire for forgiveness of sins, political ambitions.\\n* **Consequences**: \\n    * End of Feudalism.\\n    * Increase in trade with the East.\\n    * Contact with Arab world brought new knowledge (Science, Math).\\n    * Rise of Italian city-states.\\n\\n### 2. Renaissance in Europe\\n* **Meaning**: "Rebirth" or revival of Greek and Roman learning.\\n* **Origin**: Started in Italy (14th century).\\n* **Humanism**: Shift from God-centric to Human-centric view. "Man is the measure of all things."\\n* **Art & Architecture**: Realistic art, use of perspective (Leonardo da Vinci, Michelangelo).\\n\\n### 3. Development of Science\\n* **Empiricism**: Knowledge based on observation and experiment.\\n* **Scientists**:\\n    * **Copernicus**: Heliocentric theory (Sun is center).\\n    * **Galileo**: Improved telescope, observed moons of Jupiter.\\n    * **Newton**: Laws of Motion and Gravity.\\n\\n### 4. Scientific Inventions\\n* **Printing Press**: Johannes Gutenberg (1440). Spread knowledge rapidly.\\n* **Gunpowder**: Changed warfare, ended dominance of knights.\\n* **Compass & Astrolabe**: Aided navigation.\\n\\n### 5. Geographical Discoveries\\n* **Causes**: Ottoman Turks blocked land route (1453), demand for spices, curiosity.\\n* **Explorers**:\\n    * **Bartholomew Diaz**: Reached Cape of Good Hope (Africa).\\n    * **Vasco da Gama**: Reached Calicut, India (1498).\\n    * **Christopher Columbus**: Discovered America (1492).\\n    * **Ferdinand Magellan**: First circumnavigation of the globe.\\n\\n### 6. Industrial Revolution\\n* **Meaning**: Transition from hand tools to power-driven machines.\\n* **Origin**: Started in England (18th century).\\n* **Why England?**: Iron & coal reserves, humid climate (textiles), colonies for raw material, naval power.\\n* **Inventions**: Steam Engine (James Watt), Spinning Jenny, Power Loom.\\n* **Impact**: Urbanization, rise of capitalism, colonization.',
            flashcards: [
              { id: 'f1', front: 'What were the Crusades?', back: 'Religious wars to regain Jerusalem from Islamic rule.' },
              { id: 'f2', front: 'One consequence of Crusades?', back: 'Decline of Feudalism and rise of trade.' },
              { id: 'f3', front: 'Where did Renaissance begin?', back: 'Italy (14th Century).' },
              { id: 'f4', front: 'What is Humanism?', back: 'Focus on human potential and achievements.' },
              { id: 'f5', front: 'Who invented the Printing Press?', back: 'Johannes Gutenberg (1440).' },
              { id: 'f6', front: 'Who proposed Heliocentric Theory?', back: 'Nicolaus Copernicus.' },
              { id: 'f7', front: 'Who improved the Telescope?', back: 'Galileo Galilei.' },
              { id: 'f8', front: 'Who discovered the sea route to India?', back: 'Vasco da Gama (1498).' },
              { id: 'f9', front: 'Who discovered America?', back: 'Christopher Columbus (1492).' },
              { id: 'f10', front: 'Who reached Cape of Good Hope?', back: 'Bartholomew Diaz.' },
              { id: 'f11', front: 'First to circumnavigate the globe?', back: 'Ferdinand Magellan.' },
              { id: 'f12', front: 'Where did Industrial Revolution begin?', back: 'England.' },
              { id: 'f13', front: 'Why did Industrial Revolution start in England?', back: 'Coal/Iron reserves, colonies, naval power.' },
              { id: 'f14', front: 'Who invented the Steam Engine?', back: 'James Watt.' },
              { id: 'f15', front: 'What is Empiricism?', back: 'Knowledge based on observation and experiment.' },
              { id: 'f16', front: 'Which city fell in 1453?', back: 'Constantinople (to Ottoman Turks).' },
              { id: 'f17', front: 'What blocked the land route to Asia?', back: 'Ottoman conquest of Constantinople.' },
              { id: 'f18', front: 'Who was "Henry the Navigator"?', back: 'Prince of Portugal who encouraged exploration.' },
              { id: 'f19', front: 'What is the "Cape of Storms"?', back: 'Original name of Cape of Good Hope.' },
              { id: 'f20', front: 'Who patronized Renaissance art?', back: 'Wealthy merchants (e.g., Medici family) and the Church.' },
              { id: 'f21', front: 'What is Metallurgy?', back: 'Science of extracting metals from ores.' },
              { id: 'f22', front: 'Who wrote "The Prince"?', back: 'Niccolo Machiavelli.' },
              { id: 'f23', front: 'Who is the "Father of Humanism"?', back: 'Petrarch.' },
              { id: 'f24', front: 'What was the main textile industry in England?', back: 'Cotton textile.' },
              { id: 'f25', front: 'What is Capitalism?', back: 'Economic system based on private ownership and profit.' },
              { id: 'f26', front: 'What is Colonialism?', back: 'Control by one power over a dependent area or people.' },
              { id: 'f27', front: 'Who was Queen Isabella?', back: 'Queen of Spain who funded Columbus.' },
              { id: 'f28', front: 'What is a "Factory"?', back: 'Place where goods are manufactured by machines.' },
              { id: 'f29', front: 'What is Urbanization?', back: 'Movement of people from villages to cities.' },
              { id: 'f30', front: 'Who invented the Flying Shuttle?', back: 'John Kay.' }
            ],
            mcqs: [
              { id: 'q1', question: 'The Crusades were fought to regain:', options: ['Rome', 'Jerusalem', 'Constantinople', 'Athens'], correctIndex: 1, explanation: 'Holy city for Christians.' },
              { id: 'q2', question: 'Renaissance started in:', options: ['France', 'England', 'Italy', 'Germany'], correctIndex: 2, explanation: 'Italy was the birthplace.' },
              { id: 'q3', question: 'Printing Press was invented by:', options: ['Caxton', 'Gutenberg', 'Bell', 'Edison'], correctIndex: 1, explanation: 'Johannes Gutenberg in 1440.' },
              { id: 'q4', question: 'Vasco da Gama landed at:', options: ['Goa', 'Mumbai', 'Calicut', 'Cochin'], correctIndex: 2, explanation: 'In 1498, welcomed by Zamorin.' },
              { id: 'q5', question: 'Industrial Revolution began in:', options: ['USA', 'France', 'Germany', 'England'], correctIndex: 3, explanation: 'Due to favorable conditions.' },
              { id: 'q6', question: 'Constantinople fell in:', options: ['1453', '1492', '1498', '1500'], correctIndex: 0, explanation: 'Captured by Ottoman Turks.' },
              { id: 'q7', question: 'Who discovered America?', options: ['Magellan', 'Columbus', 'Diaz', 'Cook'], correctIndex: 1, explanation: 'In 1492, thinking it was India.' },
              { id: 'q8', question: 'Heliocentric theory states:', options: ['Earth is center', 'Sun is center', 'Moon is center', 'None'], correctIndex: 1, explanation: 'Proposed by Copernicus.' },
              { id: 'q9', question: 'Steam Engine was improved by:', options: ['Newcomen', 'James Watt', 'Stephenson', 'Fulton'], correctIndex: 1, explanation: 'Made it efficient for industry.' },
              { id: 'q10', question: 'Cape of Good Hope is in:', options: ['India', 'America', 'Africa', 'Australia'], correctIndex: 2, explanation: 'Southern tip of Africa.' },
              { id: 'q11', question: 'First circumnavigation of earth was by:', options: ['Columbus', 'Magellan', 'Drake', 'Cook'], correctIndex: 1, explanation: 'Ferdinand Magellan\'s expedition.' },
              { id: 'q12', question: 'Humanism focuses on:', options: ['God', 'Nature', 'Human', 'Animals'], correctIndex: 2, explanation: 'Man is the measure of all things.' },
              { id: 'q13', question: 'Flying Shuttle was invented by:', options: ['Cartwright', 'Hargreaves', 'John Kay', 'Crompton'], correctIndex: 2, explanation: 'Revolutionized weaving.' },
              { id: 'q14', question: 'Spinning Jenny was invented by:', options: ['James Hargreaves', 'Arkwright', 'Watt', 'Kay'], correctIndex: 0, explanation: 'Spun multiple threads at once.' },
              { id: 'q15', question: 'Who reached the tip of Africa first?', options: ['Vasco da Gama', 'Bartholomew Diaz', 'Columbus', 'Cabral'], correctIndex: 1, explanation: 'Named it Cape of Storms.' },
              { id: 'q16', question: 'Empiricism relies on:', options: ['Faith', 'Observation', 'Tradition', 'Magic'], correctIndex: 1, explanation: 'Scientific observation and experiment.' },
              { id: 'q17', question: 'Galileo used telescope to observe:', options: ['Sun', 'Moon', 'Jupiter\'s moons', 'All of these'], correctIndex: 3, explanation: 'Made many astronomical discoveries.' },
              { id: 'q18', question: 'Which country funded Columbus?', options: ['Portugal', 'Spain', 'Italy', 'England'], correctIndex: 1, explanation: 'Queen Isabella of Spain.' },
              { id: 'q19', question: 'Industrial Revolution led to:', options: ['Ruralization', 'Urbanization', 'De-industrialization', 'None'], correctIndex: 1, explanation: 'Growth of factory towns.' },
              { id: 'q20', question: 'Who is called the Navigator?', options: ['King John', 'Prince Henry', 'Columbus', 'Magellan'], correctIndex: 1, explanation: 'Prince Henry of Portugal.' },
              { id: 'q21', question: 'Gunpowder originated in:', options: ['Europe', 'China', 'India', 'Arabia'], correctIndex: 1, explanation: 'Brought to Europe by Arabs.' },
              { id: 'q22', question: 'The "New World" refers to:', options: ['Asia', 'Africa', 'Americas', 'Europe'], correctIndex: 2, explanation: 'Discovered by Columbus.' },
              { id: 'q23', question: 'Textile industry uses:', options: ['Iron', 'Cotton', 'Coal', 'Steel'], correctIndex: 1, explanation: 'First industry to mechanize.' },
              { id: 'q24', question: 'Who wrote "Divine Comedy"?', options: ['Petrarch', 'Dante', 'Erasmus', 'More'], correctIndex: 1, explanation: 'Dante Alighieri.' },
              { id: 'q25', question: 'Leonardo da Vinci was a:', options: ['Painter', 'Scientist', 'Engineer', 'All of these'], correctIndex: 3, explanation: 'True Renaissance Man.' },
              { id: 'q26', question: 'Ottoman Turks captured Constantinople in:', options: ['14th Century', '15th Century', '16th Century', '17th Century'], correctIndex: 1, explanation: '1453 is in 15th Century.' },
              { id: 'q27', question: 'Who reached India in 1498?', options: ['Columbus', 'Vasco da Gama', 'Diaz', 'Magellan'], correctIndex: 1, explanation: 'At Calicut.' },
              { id: 'q28', question: 'Industrial Revolution started in which century?', options: ['16th', '17th', '18th', '19th'], correctIndex: 2, explanation: 'Mid-18th century (around 1750).' },
              { id: 'q29', question: 'Who invented the Power Loom?', options: ['Cartwright', 'Kay', 'Watt', 'Arkwright'], correctIndex: 0, explanation: 'Edmund Cartwright.' },
              { id: 'q30', question: 'Renaissance means:', options: ['Reform', 'Revolt', 'Rebirth', 'Review'], correctIndex: 2, explanation: 'Revival of learning.' }
            ],
            reels: [
              { id: 'r1', title: 'Renaissance', content: 'Rebirth of learning.\nItaly 14th Century.\nArt & Science.', color: getReelColor(0) },
              { id: 'r2', title: 'Crusades', content: 'Holy Wars.\nJerusalem.\nOpened trade.', color: getReelColor(1) },
              { id: 'r3', title: 'Printing Press', content: 'Gutenberg 1440.\nBooks for all.\nKnowledge spread.', color: getReelColor(2) },
              { id: 'r4', title: 'Copernicus', content: 'Sun is center.\nHeliocentric.\nScience wins.', color: getReelColor(3) },
              { id: 'r5', title: 'Galileo', content: 'Telescope.\nJupiter\'s moons.\nObservation.', color: getReelColor(4) },
              { id: 'r6', title: 'Vasco da Gama', content: '1498.\nReached India.\nSea route found.', color: getReelColor(5) },
              { id: 'r7', title: 'Columbus', content: '1492.\nFound America.\nNew World.', color: getReelColor(6) },
              { id: 'r8', title: 'Magellan', content: 'Circumnavigation.\nRound the world.\nProved Earth round.', color: getReelColor(7) },
              { id: 'r9', title: 'Industrial Rev', content: 'Machines.\nFactories.\nMass production.', color: getReelColor(8) },
              { id: 'r10', title: 'Steam Engine', content: 'James Watt.\nPower source.\nChanged world.', color: getReelColor(9) },
              { id: 'r11', title: 'Textile Industry', content: 'Spinning Jenny.\nPower Loom.\nCotton cloth.', color: getReelColor(0) },
              { id: 'r12', title: 'Constantinople', content: 'Fell 1453.\nTurks took over.\nScholars fled.', color: getReelColor(1) },
              { id: 'r13', title: 'Humanism', content: 'Focus on Man.\nPotential.\nReason.', color: getReelColor(2) },
              { id: 'r14', title: 'Leonardo', content: 'Mona Lisa.\nLast Supper.\nGenius.', color: getReelColor(3) },
              { id: 'r15', title: 'Michelangelo', content: 'David.\nSistine Chapel.\nArt master.', color: getReelColor(4) },
              { id: 'r16', title: 'Gunpowder', content: 'From China.\nChanged war.\nKnights fell.', color: getReelColor(5) },
              { id: 'r17', title: 'Compass', content: 'Navigation.\nDirection.\nExploration.', color: getReelColor(6) },
              { id: 'r18', title: 'Prince Henry', content: 'The Navigator.\nPortugal.\nSchool of nav.', color: getReelColor(7) },
              { id: 'r19', title: 'Bartholomew Diaz', content: 'Cape of Good Hope.\nTip of Africa.\nPath to East.', color: getReelColor(8) },
              { id: 'r20', title: 'England', content: 'Workshop of World.\nCoal & Iron.\nColonies.', color: getReelColor(9) },
              { id: 'r21', title: 'Urbanization', content: 'Villages to Cities.\nFactory jobs.\nCrowding.', color: getReelColor(0) },
              { id: 'r22', title: 'Capitalism', content: 'Profit motive.\nPrivate property.\nInvestment.', color: getReelColor(1) },
              { id: 'r23', title: 'Empiricism', content: 'Experiment.\nObservation.\nScientific method.', color: getReelColor(2) },
              { id: 'r24', title: 'Newton', content: 'Gravity.\nLaws of Motion.\nPhysics.', color: getReelColor(3) },
              { id: 'r25', title: 'Queen Isabella', content: 'Spain.\nFunded Columbus.\nEmpire builder.', color: getReelColor(4) },
              { id: 'r26', title: 'Spinning Jenny', content: 'Hargreaves.\nFaster thread.\nTextile boom.', color: getReelColor(5) },
              { id: 'r27', title: 'Power Loom', content: 'Cartwright.\nWeaving machine.\nFactory scale.', color: getReelColor(6) },
              { id: 'r28', title: 'Flying Shuttle', content: 'John Kay.\nFaster weaving.\nFirst step.', color: getReelColor(7) },
              { id: 'r29', title: 'New Trade Routes', content: 'Spices.\nGold.\nGlory.', color: getReelColor(8) },
              { id: 'r30', title: 'Modern Era', content: 'Science.\nReason.\nProgress.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl1-1',
                question: 'Explain the causes and consequences of the Renaissance in Europe.',
                mnemonic: 'CHART - Crusades, Humanism, Art, Rich patrons, Trade',
                answer: `### Causes of Renaissance

**1. Fall of Constantinople (1453)**
- Scholars fled to Italy with Greek and Roman manuscripts
- Spread classical knowledge to Western Europe

**2. Crusades Impact**
- Contact with Arab world brought new ideas
- Trade routes opened to the East
- Exposure to Greek philosophy preserved by Arabs

**3. Rise of Wealthy Patrons**
- Medici family in Florence sponsored artists
- Church commissioned religious art
- Rich merchants wanted portraits and decorations

**4. Invention of Printing Press (1440)**
- Gutenberg's movable type spread ideas rapidly
- Books became affordable to common people
- Knowledge no longer limited to monks

**5. Growth of Trade**
- Italian city-states (Venice, Florence) grew wealthy
- Surplus wealth funded art and learning
- Trade brought new ideas from East

### Consequences of Renaissance

**1. Humanism**
- Focus shifted from God to Human potential
- "Man is the measure of all things"
- Individual achievement celebrated

**2. Art Revolution**
- Realistic perspective developed
- Human anatomy studied scientifically
- Masters: Leonardo, Michelangelo, Raphael

**3. Scientific Method**
- Observation and experimentation valued
- Empiricism replaced blind faith
- Foundation for modern science

**4. Reformation**
- Questioning authority led to religious reform
- Martin Luther challenged Catholic Church
- Protestant movement began

**5. Age of Exploration**
- Curiosity led to geographical discoveries
- New sea routes to Asia discovered
- Colonialism began`
              },
              {
                id: 'hl1-2',
                question: 'Describe the causes and impact of the Industrial Revolution in England.',
                mnemonic: 'CLIMB - Coal, Labor, Investment, Markets, Britain',
                answer: `### Why Industrial Revolution Started in England

**1. Natural Resources**
- Abundant coal and iron ore deposits
- Rivers for water power and transportation
- Suitable climate for textile industry (humid)

**2. Capital Availability**
- Wealthy merchants with money to invest
- Strong banking system developed
- Profits from colonial trade

**3. Colonial Empire**
- Raw materials from colonies (cotton from India)
- Ready markets for finished goods
- Naval power protected trade routes

**4. Labor Supply**
- Enclosure Movement displaced farmers
- Large population for factory work
- Migration from villages to cities

**5. Stable Government**
- No wars on British soil
- Patent laws protected inventions
- Infrastructure development supported

### Key Inventions

| Invention | Inventor | Impact |
|-----------|----------|--------|
| Spinning Jenny | James Hargreaves | Multiple threads at once |
| Water Frame | Richard Arkwright | Water-powered spinning |
| Power Loom | Edmund Cartwright | Mechanized weaving |
| Steam Engine | James Watt | Powered factories |

### Impact of Industrial Revolution

**Economic Impact**
- Rise of factory system
- Mass production reduced costs
- Capitalism strengthened

**Social Impact**
- Urbanization (growth of cities)
- Rise of middle class
- Working class exploitation (child labor)

**Political Impact**
- Labor movements began
- Demand for political rights
- Trade unions formed

**Global Impact**
- Colonialism intensified
- European dominance worldwide
- Foundation of modern economy`
              },
              {
                id: 'hl1-3',
                question: 'Explain the contributions of Renaissance artists and scientists.',
                mnemonic: 'LMRC-GC - Leonardo, Michelangelo, Raphael, Copernicus, Galileo, Columbus',
                answer: `### Renaissance Artists

**1. Leonardo da Vinci (1452-1519)**
- "Universal Genius" - painter, sculptor, scientist, inventor
- Masterpieces: Mona Lisa, The Last Supper
- Studied human anatomy through dissection
- Designed flying machines, tanks (ahead of time)
- Pioneered sfumato technique (soft shading)

**2. Michelangelo (1475-1564)**
- Sculptor, painter, architect, poet
- Masterpieces: David (sculpture), Sistine Chapel ceiling
- Designed dome of St. Peter's Basilica
- Known for powerful human figures
- Spent 4 years painting Sistine Chapel

**3. Raphael (1483-1520)**
- Painter and architect
- Masterpiece: School of Athens
- Known for Madonna paintings
- Perfected High Renaissance style
- Harmonious compositions and soft colors

**4. Albrecht Dürer (1471-1528)**
- German painter and printmaker
- Master of woodcuts and engravings
- Brought Renaissance to Northern Europe
- Famous for self-portraits

### Renaissance Scientists

**1. Nicolaus Copernicus (1473-1543)**
- Proposed Heliocentric Theory (Sun at center)
- Challenged Ptolemaic geocentric view
- Published "On the Revolutions of Celestial Spheres"
- Foundation of modern astronomy

**2. Galileo Galilei (1564-1642)**
- "Father of Modern Science"
- Improved telescope, observed moons of Jupiter
- Supported Copernican theory
- Faced Inquisition for his views
- Discovered law of falling bodies

**3. Johannes Kepler (1571-1630)**
- Discovered laws of planetary motion
- Planets move in ellipses, not circles
- Supported Copernican system with mathematics

### Impact on Knowledge
| Field | Before Renaissance | After Renaissance |
|-------|-------------------|-------------------|
| **Art** | Flat, religious only | Realistic, perspective, secular |
| **Science** | Faith-based | Observation & experiment |
| **Education** | Latin, theology | Vernacular, humanities |
| **World View** | Earth-centered | Sun-centered |

### Legacy
- Scientific method established
- Human-centered worldview
- Foundation for Enlightenment
- Modern art techniques developed`
              }
            ]
          },
          {
            id: 'his2',
            title: '2. European Colonialism',
            description: 'Meaning, Causes, Consequences, Colonialism in America, Australia, Asia, Africa.',
            summary: '**Colonialism**: Control over another country for exploitation.\n**Causes**: Industrial Revolution, Raw Materials, Markets.\n**Regions**: America, Australia, Asia, Africa.\n**Impact**: Economic drain, cultural change, slavery.',
            detailedNotes: '### 1. Meaning and Nature of Colonialism\\n* **Definition**: Colonialism is the practice by which a powerful country controls another country or region to exploit its resources.\\n* **Imperialism**: The ideology or policy of extending a nation\'s authority by territorial acquisition.\\n* **Nature**: Initially for trade, then political control, then economic exploitation.\\n\\n### 2. Causes of Colonialism\\n* **Industrial Revolution**: Need for cheap raw materials (cotton, rubber, minerals) and markets for finished goods.\\n* **Surplus Population**: Europe\'s population grew, needed land to settle (e.g., in America, Australia).\\n* **Strategic Locations**: Naval bases to protect trade routes.\\n* **Mineral Wealth**: Gold, diamonds (Africa), spices (Asia).\\n* **"White Man\'s Burden"**: Belief that Europeans were superior and had a duty to "civilize" others.\\n\\n### 3. Colonialism in Different Regions\\n* **America**: \\n    * Spanish & Portuguese in South America.\\n    * British & French in North America.\\n    * 13 British Colonies became USA.\\n* **Australia & New Zealand**:\\n    * Discovered by Captain Cook.\\n    * Initially used as penal colonies (for convicts).\\n    * Indigenous people (Aborigines, Maoris) displaced.\\n* **Asia**:\\n    * India (British), Indonesia (Dutch), Indochina (French).\\n    * China: Opium Wars, "Spheres of Influence".\\n* **Africa**:\\n    * "Dark Continent" explored late (Stanley, Livingstone).\\n    * **Scramble for Africa**: Berlin Conference (1884) divided Africa among European powers.\\n\\n### 4. Consequences of Colonialism\\n* **Economic**: Drain of wealth, destruction of local industries.\\n* **Political**: Loss of independence, artificial borders.\\n* **Social**: Spread of Christianity, western education, slavery (Slave Trade).',
            flashcards: [
              { id: 'f1', front: 'What is Colonialism?', back: 'Control of one country by another for exploitation.' },
              { id: 'f2', front: 'What is Imperialism?', back: 'Policy of extending a nation\'s power and influence.' },
              { id: 'f3', front: 'Main economic cause of Colonialism?', back: 'Industrial Revolution (need for raw materials & markets).' },
              { id: 'f4', front: 'What was the "White Man\'s Burden"?', back: 'Belief that Europeans had a duty to civilize others.' },
              { id: 'f5', front: 'Who discovered Australia?', back: 'Captain James Cook.' },
              { id: 'f6', front: 'What were Australian colonies initially used for?', back: 'Penal colonies (for convicts).' },
              { id: 'f7', front: 'Who were the indigenous people of Australia?', back: 'Aborigines.' },
              { id: 'f8', front: 'Who were the indigenous people of New Zealand?', back: 'Maoris.' },
              { id: 'f9', front: 'Which conference divided Africa?', back: 'Berlin Conference (1884).' },
              { id: 'f10', front: 'What was the "Scramble for Africa"?', back: 'Race among European powers to colonize Africa.' },
              { id: 'f11', front: 'Which country colonized Indonesia?', back: 'Netherlands (Dutch).' },
              { id: 'f12', front: 'Which country colonized Indochina (Vietnam)?', back: 'France.' },
              { id: 'f13', front: 'What were the Opium Wars?', back: 'Wars between Britain and China over trade rights.' },
              { id: 'f14', front: 'How many colonies formed the USA?', back: '13 Colonies.' },
              { id: 'f15', front: 'Which European power dominated South America?', back: 'Spain and Portugal.' },
              { id: 'f16', front: 'What is "Drain of Wealth"?', back: 'Transfer of wealth from colony to colonizer.' },
              { id: 'f17', front: 'Who explored the interior of Africa?', back: 'David Livingstone and H.M. Stanley.' },
              { id: 'f18', front: 'What was the Slave Trade?', back: 'Transporting Africans to Americas for forced labor.' },
              { id: 'f19', front: 'Which country was known as the "Dark Continent"?', back: 'Africa.' },
              { id: 'f20', front: 'What is a "Sphere of Influence"?', back: 'Area where a foreign power claims exclusive rights (e.g., in China).' },
              { id: 'f21', front: 'Why did Europeans need new markets?', back: 'To sell surplus goods produced by factories.' },
              { id: 'f22', front: 'What raw material was needed for textile industry?', back: 'Cotton.' },
              { id: 'f23', front: 'Which canal shortened the route to Asia?', back: 'Suez Canal (1869).' },
              { id: 'f24', front: 'Who colonized Brazil?', back: 'Portugal.' },
              { id: 'f25', front: 'Who colonized Mexico?', back: 'Spain.' },
              { id: 'f26', front: 'What is Neo-Colonialism?', back: 'Economic control without direct political rule.' },
              { id: 'f27', front: 'Which Asian country was never colonized?', back: 'Thailand (Siam) and Japan.' },
              { id: 'f28', front: 'What was the "Open Door Policy"?', back: 'US policy for equal trade rights in China.' },
              { id: 'f29', front: 'Who was Cecil Rhodes?', back: 'British imperialist in Africa (Rhodesia named after him).' },
              { id: 'f30', front: 'What role did missionaries play?', back: 'Spread Christianity and western education.' }
            ],
            mcqs: [
              { id: 'q1', question: 'The main driver of Colonialism was:', options: ['Renaissance', 'Industrial Revolution', 'Reformation', 'French Revolution'], correctIndex: 1, explanation: 'Need for resources and markets.' },
              { id: 'q2', question: 'Berlin Conference (1884) is related to:', options: ['Partition of India', 'Partition of Africa', 'Partition of China', 'Partition of America'], correctIndex: 1, explanation: 'Scramble for Africa.' },
              { id: 'q3', question: 'Australia was discovered by:', options: ['Columbus', 'Magellan', 'Captain Cook', 'Vasco da Gama'], correctIndex: 2, explanation: 'James Cook.' },
              { id: 'q4', question: 'Indonesia was a colony of:', options: ['Britain', 'France', 'Dutch (Netherlands)', 'Portugal'], correctIndex: 2, explanation: 'Dutch East Indies.' },
              { id: 'q5', question: 'The "Dark Continent" referred to:', options: ['Asia', 'Africa', 'America', 'Australia'], correctIndex: 1, explanation: 'Due to lack of knowledge about its interior.' },
              { id: 'q6', question: 'Opium Wars were fought between:', options: ['India-China', 'Britain-China', 'Japan-China', 'USA-China'], correctIndex: 1, explanation: 'Over opium trade.' },
              { id: 'q7', question: 'Who coined the phrase "White Man\'s Burden"?', options: ['Kipling', 'Rhodes', 'Churchill', 'Curzon'], correctIndex: 0, explanation: 'Rudyard Kipling.' },
              { id: 'q8', question: 'Which country colonized Brazil?', options: ['Spain', 'Portugal', 'France', 'Britain'], correctIndex: 1, explanation: 'Portuguese is spoken there.' },
              { id: 'q9', question: 'Aborigines are indigenous to:', options: ['New Zealand', 'Australia', 'Canada', 'India'], correctIndex: 1, explanation: 'Native people of Australia.' },
              { id: 'q10', question: 'Maoris are indigenous to:', options: ['Australia', 'New Zealand', 'Fiji', 'Hawaii'], correctIndex: 1, explanation: 'Native people of NZ.' },
              { id: 'q11', question: 'Suez Canal was opened in:', options: ['1857', '1869', '1900', '1914'], correctIndex: 1, explanation: 'Reduced distance between Europe and Asia.' },
              { id: 'q12', question: 'How many British colonies formed USA?', options: ['10', '13', '50', '15'], correctIndex: 1, explanation: '13 Colonies.' },
              { id: 'q13', question: 'Indochina was a colony of:', options: ['Britain', 'France', 'Spain', 'USA'], correctIndex: 1, explanation: 'Vietnam, Laos, Cambodia.' },
              { id: 'q14', question: 'Which was NOT a cause of colonialism?', options: ['Raw materials', 'Markets', 'Spread of Democracy', 'Spread of Religion'], correctIndex: 2, explanation: 'Democracy was not a goal.' },
              { id: 'q15', question: 'David Livingstone explored:', options: ['Amazon', 'Africa', 'Himalayas', 'Antarctica'], correctIndex: 1, explanation: 'Missionary explorer.' },
              { id: 'q16', question: 'Cecil Rhodes is associated with:', options: ['India', 'China', 'Africa', 'Australia'], correctIndex: 2, explanation: 'Cape to Cairo railway dream.' },
              { id: 'q17', question: 'Which Asian country remained independent?', options: ['India', 'Thailand', 'Vietnam', 'Philippines'], correctIndex: 1, explanation: 'Buffer state between British and French.' },
              { id: 'q18', question: 'Slave trade connected:', options: ['Europe-Asia', 'Africa-America-Europe', 'Asia-America', 'None'], correctIndex: 1, explanation: 'Triangular trade.' },
              { id: 'q19', question: 'Congo was a personal colony of:', options: ['King Leopold II', 'Queen Victoria', 'Napoleon', 'Kaiser William'], correctIndex: 0, explanation: 'King of Belgium.' },
              { id: 'q20', question: 'Boer Wars were fought in:', options: ['India', 'South Africa', 'China', 'Egypt'], correctIndex: 1, explanation: 'British vs Dutch settlers.' },
              { id: 'q21', question: 'Tasmania is part of:', options: ['New Zealand', 'Australia', 'UK', 'USA'], correctIndex: 1, explanation: 'Island state.' },
              { id: 'q22', question: 'Which mineral attracted Europeans to South Africa?', options: ['Coal', 'Gold & Diamonds', 'Oil', 'Iron'], correctIndex: 1, explanation: 'Kimberley diamonds.' },
              { id: 'q23', question: 'Who controlled the spice trade before Europeans?', options: ['Arabs', 'Chinese', 'Indians', 'Romans'], correctIndex: 0, explanation: 'Arab merchants.' },
              { id: 'q24', question: 'Treaty of Nanking ended:', options: ['First Opium War', 'Second Opium War', 'Boer War', 'WWI'], correctIndex: 0, explanation: 'Humiliating treaty for China.' },
              { id: 'q25', question: 'Which country had the largest empire?', options: ['France', 'Spain', 'Britain', 'Germany'], correctIndex: 2, explanation: '"Sun never sets on British Empire".' },
              { id: 'q26', question: 'Penal colony means:', options: ['Holiday resort', 'Prison settlement', 'Trading post', 'Mining town'], correctIndex: 1, explanation: 'For convicts.' },
              { id: 'q27', question: 'Who were the Conquistadors?', options: ['French explorers', 'Spanish conquerors', 'British traders', 'Dutch sailors'], correctIndex: 1, explanation: 'Conquered Americas.' },
              { id: 'q28', question: 'Aztec civilization was in:', options: ['Peru', 'Mexico', 'Brazil', 'Chile'], correctIndex: 1, explanation: 'Destroyed by Cortes.' },
              { id: 'q29', question: 'Inca civilization was in:', options: ['Mexico', 'Peru', 'Canada', 'USA'], correctIndex: 1, explanation: 'Destroyed by Pizarro.' },
              { id: 'q30', question: 'Colonialism led to:', options: ['Equality', 'Exploitation', 'Freedom', 'Peace'], correctIndex: 1, explanation: 'Economic and social exploitation.' }
            ],
            reels: [
              { id: 'r1', title: 'Colonialism', content: 'Control & Exploit.\nPowerful vs Weak.\nEmpire building.', color: getReelColor(0) },
              { id: 'r2', title: 'Causes', content: 'Industrial Rev.\nRaw Materials.\nNew Markets.', color: getReelColor(1) },
              { id: 'r3', title: 'White Man\'s Burden', content: 'Civilizing mission.\nRacist ideology.\nJustification.', color: getReelColor(2) },
              { id: 'r4', title: 'Scramble for Africa', content: 'Berlin 1884.\nDivided like cake.\nNo African voice.', color: getReelColor(3) },
              { id: 'r5', title: 'Australia', content: 'Captain Cook.\nPenal Colony.\nConvicts sent.', color: getReelColor(4) },
              { id: 'r6', title: 'America', content: '13 Colonies.\nBritish rule.\nBecame USA.', color: getReelColor(5) },
              { id: 'r7', title: 'Opium Wars', content: 'Britain vs China.\nForced trade.\nHong Kong lost.', color: getReelColor(6) },
              { id: 'r8', title: 'Slave Trade', content: 'Triangular trade.\nHuman misery.\nLabor for Americas.', color: getReelColor(7) },
              { id: 'r9', title: 'Suez Canal', content: '1869.\nShortcut to Asia.\nTrade boom.', color: getReelColor(8) },
              { id: 'r10', title: 'British Empire', content: 'Sun never sets.\nLargest empire.\nGlobal power.', color: getReelColor(9) },
              { id: 'r11', title: 'Dutch East Indies', content: 'Indonesia.\nSpice Islands.\nDutch rule.', color: getReelColor(0) },
              { id: 'r12', title: 'French Indochina', content: 'Vietnam, Laos.\nCambodia.\nFrench culture.', color: getReelColor(1) },
              { id: 'r13', title: 'Belgian Congo', content: 'King Leopold.\nRubber terror.\nBrutal rule.', color: getReelColor(2) },
              { id: 'r14', title: 'South Africa', content: 'Gold & Diamonds.\nBoer Wars.\nApartheid roots.', color: getReelColor(3) },
              { id: 'r15', title: 'Aborigines', content: 'Australia\'s natives.\nDisplaced.\nCulture lost.', color: getReelColor(4) },
              { id: 'r16', title: 'Maoris', content: 'New Zealand.\nWarrior culture.\nTreaty of Waitangi.', color: getReelColor(5) },
              { id: 'r17', title: 'Conquistadors', content: 'Spain.\nGold hunt.\nDestroyed Aztecs.', color: getReelColor(6) },
              { id: 'r18', title: 'Drain of Wealth', content: 'Riches to Europe.\nPoverty in colonies.\nEconomic theft.', color: getReelColor(7) },
              { id: 'r19', title: 'Missionaries', content: 'Spread religion.\nSchools & Hospitals.\nCultural change.', color: getReelColor(8) },
              { id: 'r20', title: 'Railways', content: 'Built for trade.\nMoved troops.\nUnintended unity.', color: getReelColor(9) },
              { id: 'r21', title: 'Cash Crops', content: 'Cotton, Indigo.\nTea, Coffee.\nFood shortage.', color: getReelColor(0) },
              { id: 'r22', title: 'Divide & Rule', content: 'British policy.\nPit groups against.\nStay in power.', color: getReelColor(1) },
              { id: 'r23', title: 'Dark Continent', content: 'Africa.\nUnknown interior.\nExplored late.', color: getReelColor(2) },
              { id: 'r24', title: 'Livingstone', content: 'Explorer.\nDoctor.\nLost in Africa.', color: getReelColor(3) },
              { id: 'r25', title: 'Stanley', content: 'Journalist.\nFound Livingstone.\n"Dr. Livingstone, I presume?"', color: getReelColor(4) },
              { id: 'r26', title: 'Spheres of Influence', content: 'China divided.\nTrade zones.\nWeak govt.', color: getReelColor(5) },
              { id: 'r27', title: 'Open Door Policy', content: 'USA proposed.\nTrade for all.\nSave China integrity.', color: getReelColor(6) },
              { id: 'r28', title: 'Neo-Colonialism', content: 'Economic control.\nDebt traps.\nModern empire.', color: getReelColor(7) },
              { id: 'r29', title: 'Resistance', content: 'Revolts started.\nNationalism rose.\nFreedom struggle.', color: getReelColor(8) },
              { id: 'r30', title: 'Legacy', content: 'Language, Borders.\nConflicts today.\nGlobal connection.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl2-1',
                question: 'Explain the causes and nature of European colonialism.',
                mnemonic: 'CRIME - Capital, Raw materials, Industrial Revolution, Markets, Expansion',
                answer: `### Meaning of Colonialism
Colonialism is the practice by which a powerful country directly controls another territory, exploiting its resources and people for economic benefit.

### Causes of Colonialism

**1. Industrial Revolution**
- Factories needed cheap raw materials (cotton, rubber, minerals)
- Finished goods needed markets to sell
- Competition among European nations intensified

**2. Economic Motives**
- Search for gold, silver, precious stones
- Control over trade routes
- Investment opportunities in new lands

**3. Strategic Reasons**
- Naval bases for protecting trade routes
- Control of key waterways (Suez, Panama)
- Military advantage over rivals

**4. Population Pressure**
- Europe's growing population needed land
- Settlement colonies in America, Australia
- Employment for surplus population

**5. Ideological Justification**
- "White Man's Burden" - duty to civilize
- Spread Christianity
- Racial superiority complex

### Nature of Colonialism

**Phase 1: Trading Posts**
- Initial contact for trade only
- Small factories on coasts
- Limited interference in local affairs

**Phase 2: Political Control**
- Treaties with local rulers
- Military intervention
- Direct administration

**Phase 3: Economic Exploitation**
- Plantation economy
- Drain of wealth
- Destruction of local industries

### Types of Colonies
| Type | Example | Purpose |
|------|---------|---------|
| Settlement | Australia | European population |
| Plantation | Caribbean | Cash crops |
| Exploitation | India | Raw materials & markets |`
              },
              {
                id: 'hl2-2',
                question: 'Describe the impact of colonialism on colonized regions.',
                mnemonic: 'DEEP CUTS - Drain, Economy, Education, Political, Culture, Unity, Trade, Social',
                answer: `### Economic Impact

**Negative Effects**
- **Drain of Wealth**: Resources transferred to Europe
- **Deindustrialization**: Local handicrafts destroyed
- **Cash Crops**: Food crops replaced, famines resulted
- **Unfair Trade**: Bought raw materials cheap, sold goods expensive

**Some Positive Effects**
- Railways, roads, ports built (for colonial benefit)
- Modern banking system introduced
- New crops introduced (tea, coffee, rubber)

### Political Impact

**Negative Effects**
- Loss of independence and sovereignty
- Artificial borders dividing communities
- Puppet rulers and indirect rule

**Some Positive Effects**
- Unified administration over large areas
- Modern legal and judicial systems
- Concept of nation-state introduced

### Social Impact

**Negative Effects**
- Racial discrimination
- Slavery and forced labor
- Social hierarchy disrupted

**Some Positive Effects**
- Western education spread
- Social reforms (abolition of practices like Sati)
- Medical facilities introduced

### Cultural Impact

**Negative Effects**
- Local languages suppressed
- Traditional culture devalued
- Religious conversion pressures

**Some Positive Effects**
- Spread of English (global language)
- Printing press spread knowledge
- Cross-cultural exchange

### Long-term Legacy
- Colonial borders still cause conflicts
- Economic inequality between nations
- Neo-colonialism through debt and trade
- Cultural identity issues persist`
              },
              {
                id: 'hl2-3',
                question: 'Explain the colonization of Africa by European powers.',
                mnemonic: 'BERLIN SCRAMBLE - Berlin Conference, European rivalry, Resources, Livingstone, Imperialism, Nations divided',
                answer: `### Background
Africa was called the "Dark Continent" because Europeans knew little about its interior until the 19th century.

### Exploration Phase

**Key Explorers**:
- **David Livingstone**: Scottish missionary, explored Central Africa
- **Henry Stanley**: Journalist who found Livingstone
- **Mungo Park**: Explored Niger River

**Motives for Exploration**:
- Geographical curiosity
- Search for source of rivers (Nile, Niger)
- Missionary work
- Commercial interests

### Scramble for Africa (1880s-1914)

**Causes**:
1. Industrial Revolution needed raw materials
2. European rivalry and nationalism
3. "Civilizing mission" ideology
4. Strategic importance (Suez Canal)

**Berlin Conference (1884-85)**:
- Called by Otto von Bismarck
- 14 European nations attended
- Africa divided without African representation
- Rules for claiming territory established

### Colonial Powers in Africa

| Power | Territories | Key Features |
|-------|-------------|--------------|
| **Britain** | Egypt, Sudan, South Africa, Nigeria, Kenya | Cape to Cairo dream |
| **France** | Algeria, West Africa, Madagascar | Largest African empire |
| **Belgium** | Congo | Brutal exploitation (King Leopold) |
| **Germany** | Tanganyika, Namibia, Cameroon | Lost after WWI |
| **Portugal** | Angola, Mozambique | Oldest colonies |
| **Italy** | Libya, Somalia, Eritrea | Failed in Ethiopia |

### Impact on Africa

**Negative**:
- Artificial borders divided ethnic groups
- Exploitation of resources and labor
- Destruction of traditional societies
- Famines and population decline

**Some Infrastructure**:
- Railways (for resource extraction)
- Ports and roads
- Schools and hospitals (limited)

### Resistance
- **Ethiopia**: Only African country never colonized (defeated Italy at Adwa 1896)
- Various local resistances crushed
- Led to later independence movements`
              }
            ]
          },
          {
            id: 'his3',
            title: '3. India and European Colonialism',
            description: 'Arrival of Portuguese, Dutch, French, and British in India.',
            summary: '**Portuguese**: First to arrive (1498), last to leave (1961).\n**Dutch**: Focused on Indonesia.\n**French**: Rivals to British, lost Carnatic Wars.\n**British**: Established EIC (1600), won Plassey (1757), ruled India.',
            detailedNotes: '### 1. Portuguese in India\n* **Vasco da Gama**: Arrived at Calicut (1498), welcomed by Zamorin.\n* **Centers**: Goa, Daman, Diu, Bassein.\n* **Policy**: Cartaz system (passes for ships), aggressive conversion.\n* **Decline**: Rise of other powers, religious intolerance.\n* **Goa Liberation**: 1961 (Operation Vijay).\n\n### 2. Dutch in India\n* **United East India Company**: Formed in 1602.\n* **Centers**: Pulicat, Surat, Chinsura, Cochin.\n* **Focus**: Spice trade in Indonesia (Spice Islands).\n* **Decline**: Defeated by British in Battle of Bedara (1759).\n\n### 3. French in India\n* **French East India Company**: Formed in 1664 by Colbert.\n* **Centers**: Pondicherry (HQ), Chandernagore, Mahe, Karaikal.\n* **Dupleix**: Ambitious French Governor.\n* **Carnatic Wars**: Three wars between British and French (1746-1763).\n* **Result**: French defeated, restricted to few settlements.\n\n### 4. British in India\n* **East India Company (EIC)**: Formed in 1600 (Charter from Queen Elizabeth I).\n* **First Factory**: Surat (1613).\n* **Expansion**:\n    * **Battle of Plassey (1757)**: Defeated Siraj-ud-Daulah (Bengal).\n    * **Battle of Buxar (1764)**: Diwani rights of Bengal, Bihar, Odisha.\n* **Policies**: Subsidiary Alliance (Wellesley), Doctrine of Lapse (Dalhousie).\n\n### 5. Anglo-French Rivalry (Carnatic Wars)\n* **First War**: Extension of Austrian Succession War.\n* **Second War**: Interference in local succession disputes (Hyderabad, Carnatic).\n* **Third War**: Seven Years\' War in Europe. Battle of Wandiwash (1760) ended French power.',
            flashcards: [
              { id: 'f1', front: 'Who was the first European to reach India by sea?', back: 'Vasco da Gama (1498).' },
              { id: 'f2', front: 'Where did Vasco da Gama land?', back: 'Calicut (Kozhikode).' },
              { id: 'f3', front: 'Who was the Zamorin?', back: 'King of Calicut who welcomed Vasco da Gama.' },
              { id: 'f4', front: 'Which was the main Portuguese center in India?', back: 'Goa.' },
              { id: 'f5', front: 'When was Goa liberated?', back: '1961 (Operation Vijay).' },
              { id: 'f6', front: 'What was the Cartaz system?', back: 'Portuguese system of issuing passes for ships.' },
              { id: 'f7', front: 'When was the British East India Company formed?', back: '1600 (December 31).' },
              { id: 'f8', front: 'Where was the first British factory?', back: 'Surat (1613).' },
              { id: 'f9', front: 'When was the Battle of Plassey?', back: '1757.' },
              { id: 'f10', front: 'Who was defeated in Battle of Plassey?', back: 'Siraj-ud-Daulah (Nawab of Bengal).' },
              { id: 'f11', front: 'When was the Battle of Buxar?', back: '1764.' },
              { id: 'f12', front: 'What did British get after Buxar?', back: 'Diwani Rights (right to collect revenue) of Bengal, Bihar, Odisha.' },
              { id: 'f13', front: 'When was French East India Company formed?', back: '1664.' },
              { id: 'f14', front: 'Who was the most famous French Governor?', back: 'Joseph Dupleix.' },
              { id: 'f15', front: 'What were the Carnatic Wars?', back: 'Wars between British and French in South India.' },
              { id: 'f16', front: 'Which battle ended French power in India?', back: 'Battle of Wandiwash (1760).' },
              { id: 'f17', front: 'Where was the French headquarters?', back: 'Pondicherry (Puducherry).' },
              { id: 'f18', front: 'Who were the first to come and last to leave India?', back: 'Portuguese.' },
              { id: 'f19', front: 'Which Dutch company traded in India?', back: 'United East India Company (VOC).' },
              { id: 'f20', front: 'Why did Dutch leave India?', back: 'To focus on Indonesia (Spice Islands).' },
              { id: 'f21', front: 'Who introduced Subsidiary Alliance?', back: 'Lord Wellesley.' },
              { id: 'f22', front: 'Who introduced Doctrine of Lapse?', back: 'Lord Dalhousie.' },
              { id: 'f23', front: 'Which city was given as dowry to British?', back: 'Bombay (by Portuguese to Charles II).' },
              { id: 'f24', front: 'Who built Fort St. George?', back: 'British (in Madras).' },
              { id: 'f25', front: 'Who built Fort William?', back: 'British (in Calcutta).' },
              { id: 'f26', front: 'What was the "Black Hole Tragedy"?', back: 'Incident in Calcutta involving Siraj-ud-Daulah (1756).' },
              { id: 'f27', front: 'Who was Robert Clive?', back: 'British commander who won Battle of Plassey.' },
              { id: 'f28', front: 'What is "Blue Water Policy"?', back: 'Portuguese policy to control the sea (Almeida).' },
              { id: 'f29', front: 'Who was Albuquerque?', back: 'Real founder of Portuguese power in India (captured Goa 1510).' },
              { id: 'f30', front: 'Which European power did not have a strong navy?', back: 'None, all relied on naval power.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Vasco da Gama arrived in India in:', options: ['1492', '1498', '1510', '1600'], correctIndex: 1, explanation: 'Reached Calicut in 1498.' },
              { id: 'q2', question: 'First European power to establish trade in India:', options: ['British', 'French', 'Portuguese', 'Dutch'], correctIndex: 2, explanation: 'Portuguese arrived first.' },
              { id: 'q3', question: 'Battle of Plassey was fought in:', options: ['1757', '1764', '1857', '1761'], correctIndex: 0, explanation: 'Victory for British EIC.' },
              { id: 'q4', question: 'Goa was captured by Portuguese in:', options: ['1498', '1510', '1556', '1600'], correctIndex: 1, explanation: 'Albuquerque captured it from Sultan of Bijapur.' },
              { id: 'q5', question: 'French headquarters in India was:', options: ['Surat', 'Madras', 'Pondicherry', 'Calcutta'], correctIndex: 2, explanation: 'Puducherry remained French till 1954.' },
              { id: 'q6', question: 'British EIC received charter in:', options: ['1599', '1600', '1602', '1664'], correctIndex: 1, explanation: 'From Queen Elizabeth I.' },
              { id: 'q7', question: 'Battle of Wandiwash was between:', options: ['British-French', 'British-Dutch', 'British-Maratha', 'French-Portuguese'], correctIndex: 0, explanation: 'Decisive British victory in 1760.' },
              { id: 'q8', question: 'Siraj-ud-Daulah was Nawab of:', options: ['Oudh', 'Bengal', 'Hyderabad', 'Carnatic'], correctIndex: 1, explanation: 'Defeated at Plassey.' },
              { id: 'q9', question: 'Diwani Rights meant right to:', options: ['Make laws', 'Collect revenue', 'Wage war', 'Build forts'], correctIndex: 1, explanation: 'Given to British after Buxar.' },
              { id: 'q10', question: 'Bombay was given as dowry to:', options: ['Charles II', 'James I', 'William III', 'George I'], correctIndex: 0, explanation: 'By Portuguese king.' },
              { id: 'q11', question: 'Dupleix was Governor of:', options: ['British', 'French', 'Dutch', 'Portuguese'], correctIndex: 1, explanation: 'French Governor General.' },
              { id: 'q12', question: 'Subsidiary Alliance was introduced by:', options: ['Clive', 'Hastings', 'Wellesley', 'Dalhousie'], correctIndex: 2, explanation: 'To control Indian states.' },
              { id: 'q13', question: 'Doctrine of Lapse was introduced by:', options: ['Canning', 'Dalhousie', 'Curzon', 'Ripon'], correctIndex: 1, explanation: 'Annexed states without male heir.' },
              { id: 'q14', question: 'First British factory was at:', options: ['Madras', 'Bombay', 'Surat', 'Calcutta'], correctIndex: 2, explanation: 'Established in 1613.' },
              { id: 'q15', question: 'Dutch main interest was in:', options: ['India', 'China', 'Indonesia', 'Africa'], correctIndex: 2, explanation: 'Spice Islands.' },
              { id: 'q16', question: 'Cartaz system was used by:', options: ['British', 'French', 'Portuguese', 'Dutch'], correctIndex: 2, explanation: 'Naval trade passes.' },
              { id: 'q17', question: 'Battle of Buxar year:', options: ['1757', '1761', '1764', '1857'], correctIndex: 2, explanation: 'Confirmed British power.' },
              { id: 'q18', question: 'Who welcomed Vasco da Gama?', options: ['Akbar', 'Zamorin', 'Tipu Sultan', 'Shivaji'], correctIndex: 1, explanation: 'Hindu ruler of Calicut.' },
              { id: 'q19', question: 'Blue Water Policy is associated with:', options: ['Albuquerque', 'Almeida', 'Dupleix', 'Clive'], correctIndex: 1, explanation: 'Francisco de Almeida.' },
              { id: 'q20', question: 'Which city was NOT a French settlement?', options: ['Mahe', 'Karaikal', 'Chandernagore', 'Bombay'], correctIndex: 3, explanation: 'Bombay was British.' },
              { id: 'q21', question: 'Carnatic Wars were fought in:', options: ['Bengal', 'South India', 'Punjab', 'Maharashtra'], correctIndex: 1, explanation: 'Coromandel Coast region.' },
              { id: 'q22', question: 'Fort William is in:', options: ['Madras', 'Bombay', 'Calcutta', 'Delhi'], correctIndex: 2, explanation: 'British fort in Bengal.' },
              { id: 'q23', question: 'Fort St. George is in:', options: ['Madras', 'Bombay', 'Calcutta', 'Goa'], correctIndex: 0, explanation: 'First British fortress in India.' },
              { id: 'q24', question: 'Who won the Third Battle of Panipat (1761)?', options: ['Marathas', 'British', 'Abdali', 'Mughals'], correctIndex: 2, explanation: 'Ahmad Shah Abdali defeated Marathas.' },
              { id: 'q25', question: 'Portuguese lost Hooghly to:', options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'], correctIndex: 2, explanation: 'Mughals expelled them.' },
              { id: 'q26', question: 'British got Diwani of:', options: ['Bengal, Bihar, Odisha', 'Madras, Bombay', 'Punjab, Sindh', 'Delhi, Agra'], correctIndex: 0, explanation: 'Rich provinces.' },
              { id: 'q27', question: 'Who was "Tiger of Mysore"?', options: ['Hyder Ali', 'Tipu Sultan', 'Shivaji', 'Sambhaji'], correctIndex: 1, explanation: 'Fought British bravely.' },
              { id: 'q28', question: 'Treaty of Allahabad (1765) was signed by:', options: ['Clive', 'Hastings', 'Cornwallis', 'Wellesley'], correctIndex: 0, explanation: 'After Battle of Buxar.' },
              { id: 'q29', question: 'Goa was liberated in:', options: ['1947', '1950', '1961', '1971'], correctIndex: 2, explanation: 'Operation Vijay.' },
              { id: 'q30', question: 'Last European power to leave India:', options: ['British', 'French', 'Portuguese', 'Dutch'], correctIndex: 2, explanation: 'Left in 1961.' }
            ],
            reels: [
              { id: 'r1', title: 'Vasco da Gama', content: '1498.\nCalicut.\nSea route to India.', color: getReelColor(0) },
              { id: 'r2', title: 'Portuguese', content: 'First to come.\nLast to leave.\nGoa base.', color: getReelColor(1) },
              { id: 'r3', title: 'British EIC', content: '1600 Charter.\nTraders to Rulers.\n200 years Raj.', color: getReelColor(2) },
              { id: 'r4', title: 'French', content: 'Pondicherry.\nDupleix.\nLost to British.', color: getReelColor(3) },
              { id: 'r5', title: 'Plassey 1757', content: 'Clive vs Siraj.\nMir Jafar betrayed.\nBritish rule starts.', color: getReelColor(4) },
              { id: 'r6', title: 'Buxar 1764', content: 'Combined armies lost.\nDiwani Rights.\nReal power.', color: getReelColor(5) },
              { id: 'r7', title: 'Carnatic Wars', content: 'British vs French.\nSouth India.\nBritish won.', color: getReelColor(6) },
              { id: 'r8', title: 'Goa 1961', content: 'Operation Vijay.\nIndian Army.\nPortuguese out.', color: getReelColor(7) },
              { id: 'r9', title: 'Blue Water', content: 'Almeida\'s policy.\nControl the sea.\nMaster of Ocean.', color: getReelColor(8) },
              { id: 'r10', title: 'Albuquerque', content: 'Captured Goa 1510.\nReal founder.\nPortuguese power.', color: getReelColor(9) },
              { id: 'r11', title: 'Dutch', content: 'Indonesia focus.\nSpice trade.\nLeft India.', color: getReelColor(0) },
              { id: 'r12', title: 'Surat', content: 'First factory.\nTrade hub.\nMughal port.', color: getReelColor(1) },
              { id: 'r13', title: 'Bombay Dowry', content: 'Given to Charles II.\nBy Portuguese.\nRent -ú10/year.', color: getReelColor(2) },
              { id: 'r14', title: 'Fort St George', content: 'Madras.\nFirst fort.\nBritish base.', color: getReelColor(3) },
              { id: 'r15', title: 'Fort William', content: 'Calcutta.\nBengal power.\nBlack Hole tragedy.', color: getReelColor(4) },
              { id: 'r16', title: 'Dupleix', content: 'French Governor.\nClever strategies.\nDefeated by Clive.', color: getReelColor(5) },
              { id: 'r17', title: 'Wandiwash', content: '1760 Battle.\nFrench finished.\nBritish supreme.', color: getReelColor(6) },
              { id: 'r18', title: 'Subsidiary Alliance', content: 'Wellesley.\nBritish troops.\nIndian pays.', color: getReelColor(7) },
              { id: 'r19', title: 'Doctrine of Lapse', content: 'Dalhousie.\nNo heir = Annexed.\nJhansi lost.', color: getReelColor(8) },
              { id: 'r20', title: 'Diwani Rights', content: 'Tax collection.\nBengal, Bihar, Odisha.\nMoney power.', color: getReelColor(9) },
              { id: 'r21', title: 'Zamorin', content: 'King of Calicut.\nWelcomed Gama.\nSpice trade.', color: getReelColor(0) },
              { id: 'r22', title: 'Cartaz', content: 'Sea pass.\nPay Portuguese.\nOr sink.', color: getReelColor(1) },
              { id: 'r23', title: 'Siraj-ud-Daulah', content: 'Young Nawab.\nBetrayed.\nLost Plassey.', color: getReelColor(2) },
              { id: 'r24', title: 'Mir Jafar', content: 'Traitor.\nBecame puppet.\nSold Bengal.', color: getReelColor(3) },
              { id: 'r25', title: 'Robert Clive', content: 'Clerk to Conqueror.\nWon Plassey.\nFoundation of Empire.', color: getReelColor(4) },
              { id: 'r26', title: 'Tipu Sultan', content: 'Mysore Tiger.\nFought British.\nRocket man.', color: getReelColor(5) },
              { id: 'r27', title: 'Marathas', content: 'Strong rivals.\nAnglo-Maratha wars.\nLost eventually.', color: getReelColor(6) },
              { id: 'r28', title: 'Colonialism', content: 'Trade first.\nThen forts.\nThen rule.', color: getReelColor(7) },
              { id: 'r29', title: 'Impact', content: 'Drain of wealth.\nRailways built.\nUnity formed.', color: getReelColor(8) },
              { id: 'r30', title: '1947', content: 'Independence.\nBritish left.\nNew India.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl3-1',
                question: 'Describe the establishment of British power in India through the Battles of Plassey and Buxar.',
                mnemonic: 'POWER - Plassey, Officials bribed, War at Buxar, Empire started, Revenue rights',
                answer: `### Background
The British East India Company came to India in 1600 for trade. Gradually, they interfered in Indian politics to expand their power.

### Battle of Plassey (1757)

**Causes**
- Siraj-ud-Daulah became Nawab of Bengal (1756)
- He opposed British fortification of Calcutta
- Captured Fort William (Black Hole incident)
- British wanted to control Bengal's wealth

**Events**
- Robert Clive led British forces
- Mir Jafar (Commander of Bengal army) was bribed
- Battle was largely a conspiracy
- Very little actual fighting

**Results**
- Siraj-ud-Daulah killed, Mir Jafar made puppet Nawab
- British got 24 Parganas district
- Foundation of British Empire laid
- Bengal's wealth drained

### Battle of Buxar (1764)

**Causes**
- Mir Qasim (new Nawab) opposed British interference
- Alliance of Mir Qasim, Shuja-ud-Daulah (Awadh), Shah Alam II (Mughal)
- Real military confrontation unlike Plassey

**Results**
- Combined Indian forces defeated
- **Treaty of Allahabad (1765)** signed by Clive
- **Diwani Rights**: British got tax collection of Bengal, Bihar, Odisha
- Mughal Emperor became British pensioner

### Significance
| Plassey | Buxar |
|---------|-------|
| Political victory | Military victory |
| Conspiracy-based | Real battle |
| Foundation laid | Power confirmed |
| Bengal Nawab puppet | Diwani rights gained |`
              },
              {
                id: 'hl3-2',
                question: 'Compare the British and French struggle for supremacy in India (Carnatic Wars).',
                mnemonic: 'WARS - Wandiwash ended, Anglo-French rivalry, Regional alliances, Supremacy to British',
                answer: `### Background
Both British and French East India Companies competed for trade in India. Their rivalry in Europe extended to India, leading to three Carnatic Wars.

### First Carnatic War (1746-1748)

**Cause**: Extension of Austrian War of Succession in Europe
**Events**:
- French captured Madras (1746)
- Battle of Adyar: Small French force defeated Nawab's army

**Result**: Treaty of Aix-la-Chapelle - Madras returned to British

**Significance**: Showed European military superiority

### Second Carnatic War (1749-1754)

**Cause**: Succession disputes in Hyderabad and Carnatic
**Key Players**:
- Dupleix (French) supported Chanda Sahib, Muzaffar Jang
- British supported Muhammad Ali, Nasir Jang

**Key Events**:
- Clive's defense of Arcot (1751) - Famous 53-day siege
- French Governor Dupleix recalled

**Result**: French influence weakened

### Third Carnatic War (1756-1763)

**Cause**: Seven Years' War in Europe
**Key Events**:
- Count de Lally led French forces
- **Battle of Wandiwash (1760)** - Decisive British victory

**Result**: Treaty of Paris (1763) - French restricted to trade only

### Comparison Table

| Aspect | French | British |
|--------|--------|---------|
| Leadership | Dupleix, Lally | Clive, Eyre Coote |
| Navy | Weak | Strong |
| Government support | Less | More |
| Indian alliances | Fewer | More |
| Final outcome | Defeated | Supreme |

### Reasons for British Victory
1. Superior naval power
2. Better home government support
3. Efficient administration
4. Strategic Indian alliances`
              },
              {
                id: 'hl3-3',
                question: 'Describe the arrival and activities of Portuguese in India.',
                mnemonic: 'VASCO-GAB - Vasco da Gama, Albuquerque, Blue Water Policy, Sea passes (Cartaz), Goa captured',
                answer: `### Arrival of Portuguese

**Vasco da Gama's Voyage (1498)**:
- First European to reach India by sea
- Reached Calicut (Kozhikode) on May 20, 1498
- Welcomed by Zamorin (local king)
- Opened direct sea route from Europe to India
- Avoided Arab middlemen in spice trade

### Portuguese Policies

**1. Blue Water Policy (Francisco de Almeida)**
- Control the seas, not land
- Destroy Arab and Egyptian naval power
- Establish naval supremacy
- Battle of Diu (1509) - Defeated combined Arab-Egyptian fleet

**2. Territorial Expansion (Afonso de Albuquerque)**
- Real founder of Portuguese power in India
- Captured Goa (1510) from Sultan of Bijapur
- Established Portuguese capital at Goa
- Encouraged intermarriage with Indians
- Built forts at strategic locations

**3. Cartaz System**
- Compulsory passes for ships in Indian Ocean
- Ships without Cartaz could be attacked
- Monopolized Indian Ocean trade
- Created resentment among Indian traders

### Portuguese Settlements

| Settlement | Importance |
|------------|------------|
| **Goa** | Capital, headquarters |
| **Daman** | Trading post |
| **Diu** | Naval base |
| **Bassein** | Trade center |
| **Cochin** | First factory (1503) |

### Religious Policy
- Aggressive Christian conversion
- Inquisition established in Goa (1560)
- Destroyed Hindu temples
- Religious intolerance caused resentment

### Decline of Portuguese Power

**Causes**:
1. Religious intolerance alienated Indians
2. Rise of Dutch and British competition
3. Weak home government support
4. Marathas challenged their power

### Liberation of Goa (1961)
- Operation Vijay by Indian Army
- Portuguese: First to come, last to leave`
              }
            ]
          },
          {
            id: 'his4',
            title: '4. Colonialism and the Marathas',
            description: 'Maratha relations with European powers and Anglo-Maratha Wars.',
            summary: '**Portuguese**: Shivaji Maharaj built navy to counter them.\n**Dutch**: Factory at Vengurla.\n**French**: Trained Maratha artillery (Ibrahim Khan Gardi).\n**British**: Three Anglo-Maratha Wars led to end of Maratha Empire (1818).',
            detailedNotes: '### 1. Marathas and Portuguese\n* **Conflict**: Portuguese intolerance and sea control (Cartaz).\n* **Shivaji Maharaj**: Built a strong navy to protect Konkan coast.\n* **Sambhaji Maharaj**: Attacked Goa (1683).\n* **Chimaji Appa**: Captured Vasai (Bassein) from Portuguese in 1739.\n\n### 2. Marathas and Dutch\n* **Relations**: Mostly trade-based.\n* **Factory**: Dutch had a factory at Vengurla (Konkan).\n* **Policy**: Marathas allowed them to trade but kept them in check.\n\n### 3. Marathas and French\n* **Relations**: Friendly.\n* **Military Aid**: French trained Maratha artillery.\n* **Ibrahim Khan Gardi**: Trained by French, led Maratha artillery in Panipat (1761).\n* **Mahadji Shinde**: Modernized army with French help.\n\n### 4. Marathas and British (Anglo-Maratha Wars)\n* **First Anglo-Maratha War (1775-1782)**:\n    * Cause: British interference in Peshwa succession (Raghunathrao).\n    * Result: Maratha victory. **Treaty of Salbai (1782)**.\n* **Second Anglo-Maratha War (1803-1805)**:\n    * Cause: Peshwa Bajirao II signed **Treaty of Bassein (1802)** accepting Subsidiary Alliance.\n    * Result: British defeated Scindia and Bhonsle.\n* **Third Anglo-Maratha War (1817-1818)**:\n    * Cause: Pindari issue and Peshwa\'s attempt to regain independence.\n    * Result: Peshwa defeated at Koregaon and Ashti. End of Maratha Empire. Baji Rao II pensioned off to Bithur.\n\n### 5. Maratha Navy\n* **Father of Indian Navy**: Chhatrapati Shivaji Maharaj.\n* **Naval Forts**: Sindhudurg, Vijaydurg, Khanderi, Colaba.\n* **Kanhoji Angre**: Famous Maratha Admiral (Sarkhel) who fought British and Portuguese.',
            flashcards: [
              { id: 'f1', front: 'Who is known as the Father of Indian Navy?', back: 'Chhatrapati Shivaji Maharaj.' },
              { id: 'f2', front: 'Who captured Vasai from Portuguese?', back: 'Chimaji Appa (1739).' },
              { id: 'f3', front: 'Which treaty ended the First Anglo-Maratha War?', back: 'Treaty of Salbai (1782).' },
              { id: 'f4', front: 'Who signed the Treaty of Bassein (1802)?', back: 'Peshwa Bajirao II.' },
              { id: 'f5', front: 'What was the result of Third Anglo-Maratha War?', back: 'End of Maratha Empire (1818).' },
              { id: 'f6', front: 'Who was Kanhoji Angre?', back: 'Famous Maratha Naval Admiral (Sarkhel).' },
              { id: 'f7', front: 'Where did Dutch have a factory in Konkan?', back: 'Vengurla.' },
              { id: 'f8', front: 'Who led Maratha artillery in Panipat?', back: 'Ibrahim Khan Gardi.' },
              { id: 'f9', front: 'Who trained Ibrahim Khan Gardi?', back: 'The French.' },
              { id: 'f10', front: 'Which Maratha leader modernized army with French help?', back: 'Mahadji Shinde.' },
              { id: 'f11', front: 'When was the Battle of Panipat (Third)?', back: '1761.' },
              { id: 'f12', front: 'Who defeated Marathas at Panipat?', back: 'Ahmad Shah Abdali.' },
              { id: 'f13', front: 'What is "Cartaz"?', back: 'Portuguese naval trade pass.' },
              { id: 'f14', front: 'Which fort did Shivaji Maharaj build in sea?', back: 'Sindhudurg.' },
              { id: 'f15', front: 'Who was Raghunathrao?', back: 'Peshwa who sought British help, causing First War.' },
              { id: 'f16', front: 'Where was Bajirao II sent after defeat?', back: 'Bithur (near Kanpur).' },
              { id: 'f17', front: 'Who was the last Peshwa?', back: 'Bajirao II.' },
              { id: 'f18', front: 'What was the Subsidiary Alliance?', back: 'British system of keeping troops in Indian states at state\'s expense.' },
              { id: 'f19', front: 'Who attacked Goa in 1683?', back: 'Chhatrapati Sambhaji Maharaj.' },
              { id: 'f20', front: 'Why did Marathas build a navy?', back: 'To protect Konkan coast from Siddi, Portuguese, and British.' },
              { id: 'f21', front: 'What is "Chauth"?', back: 'Tax collected by Marathas (1/4th of revenue).' },
              { id: 'f22', front: 'What is "Sardeshmukhi"?', back: 'Additional 10% tax claimed by Marathas as head of region.' },
              { id: 'f23', front: 'Who was Nana Phadnavis?', back: 'Maratha statesman who held the confederacy together.' },
              { id: 'f24', front: 'Which British Governor General defeated Peshwa in 1818?', back: 'Lord Hastings.' },
              { id: 'f25', front: 'What happened to Pratap Singh (Satara)?', back: 'He was retained as nominal ruler after 1818.' },
              { id: 'f26', front: 'Who was the first Peshwa?', back: 'Balaji Vishwanath.' },
              { id: 'f27', front: 'Which European power was most friendly to Marathas?', back: 'French.' },
              { id: 'f28', front: 'What was the capital of Maratha Empire?', back: 'Satara (later Poona/Pune became center of power).' },
              { id: 'f29', front: 'Who founded the Maratha Empire?', back: 'Chhatrapati Shivaji Maharaj.' },
              { id: 'f30', front: 'What is "Guerilla Warfare"?', back: 'Ganimi Kava - hit and run tactics used by Marathas.' }
            ],
            mcqs: [
              { id: 'q1', question: 'First Anglo-Maratha War ended with Treaty of:', options: ['Surat', 'Purandar', 'Salbai', 'Bassein'], correctIndex: 2, explanation: 'Treaty of Salbai (1782) restored peace for 20 years.' },
              { id: 'q2', question: 'Treaty of Bassein (1802) was signed by:', options: ['Bajirao I', 'Bajirao II', 'Nana Phadnavis', 'Mahadji Shinde'], correctIndex: 1, explanation: 'Accepted Subsidiary Alliance.' },
              { id: 'q3', question: 'Maratha Empire ended in:', options: ['1761', '1802', '1818', '1857'], correctIndex: 2, explanation: 'After Third Anglo-Maratha War.' },
              { id: 'q4', question: 'Chimaji Appa captured Vasai from:', options: ['British', 'French', 'Portuguese', 'Dutch'], correctIndex: 2, explanation: 'In 1739 campaign.' },
              { id: 'q5', question: 'Kanhoji Angre was chief of:', options: ['Army', 'Navy', 'Cavalry', 'Artillery'], correctIndex: 1, explanation: 'Maratha Navy Admiral (Sarkhel).' },
              { id: 'q6', question: 'Dutch factory in Konkan was at:', options: ['Goa', 'Vengurla', 'Chaul', 'Dabhol'], correctIndex: 1, explanation: 'Trade center.' },
              { id: 'q7', question: 'Ibrahim Khan Gardi led:', options: ['Cavalry', 'Navy', 'Artillery', 'Infantry'], correctIndex: 2, explanation: 'Trained by French.' },
              { id: 'q8', question: 'Who is Father of Indian Navy?', options: ['Akbar', 'Shivaji Maharaj', 'Tipu Sultan', 'Ranjit Singh'], correctIndex: 1, explanation: 'Built first strong indigenous navy.' },
              { id: 'q9', question: 'Third Battle of Panipat was in:', options: ['1526', '1556', '1761', '1818'], correctIndex: 2, explanation: 'Marathas vs Abdali.' },
              { id: 'q10', question: 'Last Peshwa was:', options: ['Madhavrao', 'Narayanrao', 'Bajirao II', 'Raghunathrao'], correctIndex: 2, explanation: 'Exiled to Bithur.' },
              { id: 'q11', question: 'Mahadji Shinde modernized army with help of:', options: ['British', 'French', 'Portuguese', 'Dutch'], correctIndex: 1, explanation: 'French experts like De Boigne.' },
              { id: 'q12', question: 'Sambhaji Maharaj attacked Goa in:', options: ['1664', '1683', '1739', '1761'], correctIndex: 1, explanation: 'Almost captured it.' },
              { id: 'q13', question: 'Treaty of Salbai was signed in:', options: ['1775', '1782', '1802', '1818'], correctIndex: 1, explanation: 'Ended First Anglo-Maratha War.' },
              { id: 'q14', question: 'Who was Raghunathrao?', options: ['Peshwa', 'General', 'Admiral', 'Traitor'], correctIndex: 3, explanation: 'Sought British help against his own people.' },
              { id: 'q15', question: 'Sindhudurg fort is located in:', options: ['Mountain', 'Sea', 'River', 'Desert'], correctIndex: 1, explanation: 'Sea fort built by Shivaji Maharaj.' },
              { id: 'q16', question: 'Ganimi Kava means:', options: ['Naval war', 'Guerilla warfare', 'Open battle', 'Siege'], correctIndex: 1, explanation: 'Maratha war tactic.' },
              { id: 'q17', question: 'Who was Nana Phadnavis?', options: ['King', 'Peshwa', 'Minister', 'General'], correctIndex: 2, explanation: 'Famous Maratha administrator.' },
              { id: 'q18', question: 'Subsidiary Alliance meant:', options: ['Independence', 'British protection', 'French alliance', 'No army'], correctIndex: 1, explanation: 'Loss of sovereignty for protection.' },
              { id: 'q19', question: 'Bajirao II was exiled to:', options: ['Rangoon', 'Bithur', 'Andaman', 'London'], correctIndex: 1, explanation: 'Near Kanpur.' },
              { id: 'q20', question: 'Maratha capital was:', options: ['Delhi', 'Satara/Pune', 'Bombay', 'Nagpur'], correctIndex: 1, explanation: 'Satara (Seat of King), Pune (Seat of Peshwa).' },
              { id: 'q21', question: 'Chauth was a tax of:', options: ['10%', '25%', '50%', '33%'], correctIndex: 1, explanation: 'One-fourth of revenue.' },
              { id: 'q22', question: 'Sardeshmukhi was a tax of:', options: ['10%', '25%', '50%', '33%'], correctIndex: 0, explanation: 'Additional 10%.' },
              { id: 'q23', question: 'Who defeated Marathas in 1818?', options: ['Clive', 'Wellesley', 'Hastings', 'Dalhousie'], correctIndex: 2, explanation: 'Lord Hastings.' },
              { id: 'q24', question: 'Vengurla is in:', options: ['Goa', 'Konkan', 'Gujarat', 'Kerala'], correctIndex: 1, explanation: 'Maharashtra coast.' },
              { id: 'q25', question: 'Who built Vijaydurg?', options: ['British', 'Portuguese', 'Marathas', 'Siddi'], correctIndex: 2, explanation: 'Strengthened by Shivaji Maharaj.' },
              { id: 'q26', question: 'Portuguese main center was:', options: ['Bombay', 'Goa', 'Surat', 'Madras'], correctIndex: 1, explanation: 'Goa.' },
              { id: 'q27', question: 'British interfered in Maratha politics due to:', options: ['Trade', 'Succession dispute', 'Religion', 'Friendship'], correctIndex: 1, explanation: 'Raghunathrao asked for help.' },
              { id: 'q28', question: 'Who was Balaji Vishwanath?', options: ['First Peshwa', 'Last Peshwa', 'King', 'General'], correctIndex: 0, explanation: 'Made Peshwa post hereditary.' },
              { id: 'q29', question: 'Maratha artillery was famous at:', options: ['Plassey', 'Panipat', 'Buxar', 'Talikota'], correctIndex: 1, explanation: 'Though they lost, artillery was effective.' },
              { id: 'q30', question: 'End of Maratha power led to:', options: ['French rule', 'British supremacy', 'Mughal rule', 'Portuguese rule'], correctIndex: 1, explanation: 'British became paramount power in India.' }
            ],
            reels: [
              { id: 'r1', title: 'Shivaji Maharaj', content: 'Father of Navy.\nBuilt sea forts.\nChallenged Europeans.', color: getReelColor(0) },
              { id: 'r2', title: 'Maratha Navy', content: 'Kanhoji Angre.\nSarkhel.\nRuled the waves.', color: getReelColor(1) },
              { id: 'r3', title: 'Portuguese', content: 'Enemy #1.\nReligious intolerance.\nDefeated at Vasai.', color: getReelColor(2) },
              { id: 'r4', title: 'Chimaji Appa', content: 'Captured Vasai.\n1739.\nPortuguese humbled.', color: getReelColor(3) },
              { id: 'r5', title: 'First Anglo-Maratha', content: '1775-1782.\nMarathas WON.\nTreaty of Salbai.', color: getReelColor(4) },
              { id: 'r6', title: 'Treaty of Salbai', content: 'Peace for 20 years.\nMahadji Shinde role.\nBritish backed off.', color: getReelColor(5) },
              { id: 'r7', title: 'Second War', content: '1803-1805.\nBajirao II weak.\nSigned Bassein.', color: getReelColor(6) },
              { id: 'r8', title: 'Treaty of Bassein', content: '1802.\nSubsidiary Alliance.\nLost independence.', color: getReelColor(7) },
              { id: 'r9', title: 'Third War', content: '1817-1818.\nFinal showdown.\nMaratha Empire ends.', color: getReelColor(8) },
              { id: 'r10', title: 'Bajirao II', content: 'Last Peshwa.\nDefeated.\nSent to Bithur.', color: getReelColor(9) },
              { id: 'r11', title: 'French Connection', content: 'Trained artillery.\nIbrahim Khan Gardi.\nFriendly relations.', color: getReelColor(0) },
              { id: 'r12', title: 'Panipat 1761', content: 'Marathas vs Abdali.\nHuge loss.\nWeakened empire.', color: getReelColor(1) },
              { id: 'r13', title: 'Mahadji Shinde', content: 'Great General.\nModern army.\nProtector of Delhi.', color: getReelColor(2) },
              { id: 'r14', title: 'Nana Phadnavis', content: 'Maratha Machiavelli.\nWise minister.\nKept British away.', color: getReelColor(3) },
              { id: 'r15', title: 'Dutch', content: 'Vengurla factory.\nTrade only.\nNo war.', color: getReelColor(4) },
              { id: 'r16', title: 'Sindhudurg', content: 'Sea fort.\nBuilt by Shivaji.\nEngineering marvel.', color: getReelColor(5) },
              { id: 'r17', title: 'VijayDurg', content: 'Naval base.\nStrong fort.\nAngre\'s HQ.', color: getReelColor(6) },
              { id: 'r18', title: 'Ganimi Kava', content: 'Guerilla war.\nSurprise attacks.\nMaratha strength.', color: getReelColor(7) },
              { id: 'r19', title: 'Raghunathrao', content: 'Raghoba Dada.\nWanted to be Peshwa.\nInvited British.', color: getReelColor(8) },
              { id: 'r20', title: '1818', content: 'Fall of Peshwa.\nUnion Jack in Pune.\nBritish Raj begins.', color: getReelColor(9) },
              { id: 'r21', title: 'Sambhaji Maharaj', content: 'Attacked Goa.\n1683.\nAlmost won.', color: getReelColor(0) },
              { id: 'r22', title: 'Cartaz', content: 'Portuguese pass.\nSea dominance.\nMarathas fought it.', color: getReelColor(1) },
              { id: 'r23', title: 'Ibrahim Gardi', content: 'Loyal general.\nArtillery chief.\nDied at Panipat.', color: getReelColor(2) },
              { id: 'r24', title: 'Holkar', content: 'Indore rulers.\nFought British.\nYashwantrao Holkar.', color: getReelColor(3) },
              { id: 'r25', title: 'Bhosale', content: 'Nagpur rulers.\nPart of Confederacy.\nDefeated.', color: getReelColor(4) },
              { id: 'r26', title: 'Gaekwad', content: 'Baroda rulers.\nMaratha chiefs.\nRemained loyal.', color: getReelColor(5) },
              { id: 'r27', title: 'Scindia', content: 'Gwalior rulers.\nMahadji & Daulatrao.\nPowerful army.', color: getReelColor(6) },
              { id: 'r28', title: 'Confederacy', content: 'Maratha union.\n5 Chiefs.\nPeshwa head.', color: getReelColor(7) },
              { id: 'r29', title: 'Lord Hastings', content: 'British Governor.\nCrushed Marathas.\nEnded Pindaris.', color: getReelColor(8) },
              { id: 'r30', title: 'Legacy', content: 'Resistance.\nNaval power.\nNational pride.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl4-1',
                question: 'Explain the Three Anglo-Maratha Wars and their consequences.',
                mnemonic: 'WAR 3 - Wellesley wars, Alliances failed, Raghunathrao, 1818 end',
                answer: `### First Anglo-Maratha War (1775-1782)

**Cause**
- Raghunathrao (Raghoba Dada) wanted to become Peshwa
- He signed Treaty of Surat (1775) with British
- Other Maratha chiefs opposed British interference

**Key Events**
- Battle of Wadgaon (1779): British defeated
- Mahadji Shinde negotiated peace

**Result**: **Treaty of Salbai (1782)**
- British returned territories
- Recognized Madhavrao II as Peshwa
- Peace for 20 years

**Significance**: Marathas showed unity, British pushed back

### Second Anglo-Maratha War (1803-1805)

**Cause**
- Peshwa Bajirao II signed **Treaty of Bassein (1802)**
- Accepted Subsidiary Alliance after defeat by Holkars
- Scindia and Bhosale opposed this

**Key Events**
- Battle of Assaye: Wellesley defeated Scindia
- Battle of Argaon: Bhosale defeated
- Holkar fought back fiercely

**Result**
- Separate treaties with Scindia, Bhosale
- British controlled large territories
- Peshwa became British puppet

### Third Anglo-Maratha War (1817-1818)

**Cause**
- Peshwa tried to regain independence
- Attacked British Residency
- Pindari problem gave British excuse

**Key Events**
- Battle of Kirkee: Peshwa defeated
- Battle of Koregaon: Brave fight by Indian soldiers
- Battle of Ashti: Bajirao II surrendered

**Result**
- End of Maratha Empire
- Peshwa pensioned to Bithur
- British supreme in India

### Consequences

| First War | Second War | Third War |
|-----------|------------|-----------|
| Maratha victory | Partial British victory | Complete British victory |
| Treaty of Salbai | Subsidiary Alliance | End of Marathas |
| Unity maintained | Chiefs divided | Empire finished |`
              },
              {
                id: 'hl4-2',
                question: 'Describe the Maratha Navy and its significance.',
                mnemonic: 'NAVY - Naval forts, Angre family, Victory over enemies, Years of dominance',
                answer: `### Chhatrapati Shivaji Maharaj - Father of Indian Navy

**Why Navy Was Needed**
- Portuguese controlled Konkan coast
- Cartaz system taxed Indian ships
- Protection of trade and pilgrims
- Defense of coastal forts

**Naval Building**
- Started building warships in 1650s
- Established dockyards in Konkan
- Different types: Ghurabs, Gallivats
- Trained sailors from fishing communities

### Naval Forts

| Fort | Location | Significance |
|------|----------|--------------|
| Sindhudurg | Malvan | Engineering marvel, built 1664-67 |
| Vijaydurg | Devgad | Main naval base |
| Khanderi | Alibag | Guarded Bombay harbor |
| Colaba | Alibag | Strategic position |
| Suvarnadurg | Harnai | Protected coast |

### Kanhoji Angre - The Maratha Admiral

**Background**
- Appointed Sarkhel (Admiral) in 1698
- Controlled coast from Mumbai to Vengurla

**Achievements**
- Defeated British, Portuguese, Dutch fleets
- Called "Terror of the Seas"
- Protected Maratha trade

**Strategy**
- Guerilla warfare at sea
- Quick attacks, fast retreats
- Used local knowledge of coast

### Significance of Maratha Navy

**Military**
- First Indian naval power of modern times
- Challenged European supremacy at sea
- Protected coastal territories

**Economic**
- Safeguarded trade routes
- Revenue from sea trade
- Weakened Portuguese monopoly

**Political**
- Made Marathas a maritime power
- Increased respect in international affairs
- Set example for future Indian navies

**Legacy**
- Indian Navy adopted some traditions
- Navy Day (4th December) - Shivaji connection
- National pride in maritime heritage`
              },
              {
                id: 'hl4-3',
                question: 'Describe the role of Mahadji Shinde in Maratha history.',
                mnemonic: 'MAHADJI - Military modernizer, Arbiter of Delhi, Held confederacy, Alliance with French, Defender of Mughals, Jagir expansion, Iron discipline',
                answer: `### Early Life
- Born c. 1730 in Shinde (Scindia) family
- Rose from humble origins to great general
- Lost a leg in Battle of Panipat (1761) but continued fighting

### Military Achievements

**Army Modernization**
- Introduced European-style training
- Employed French officers like De Boigne
- Created disciplined infantry battalions
- Used modern artillery effectively

**Key Campaigns**
- Restored Maratha prestige after Panipat disaster
- Recaptured Delhi from Rohillas
- Defeated Rajput chiefs

### Political Role

**Protector of Mughal Emperor**
- Rescued Shah Alam II from captivity
- Made Mughals dependent on Marathas
- Became "Vakil-i-Mutlaq" (Regent Plenipotentiary)
- Controlled Delhi administration

**Maratha Confederacy**
- Maintained unity among Maratha chiefs
- Prevented internal conflicts
- Kept British at bay after First Anglo-Maratha War

### Treaty of Salbai (1782)

**His Role**
- Chief negotiator with British
- Secured favorable terms for Marathas
- Ensured 20 years of peace

### Legacy

| Achievement | Impact |
|-------------|--------|
| Military reform | Modern Maratha army |
| Delhi control | Maratha prestige restored |
| Diplomatic skill | Peace with British |
| Unity | Confederacy survived |

### Death and Aftermath
- Died in 1794
- His death weakened Maratha unity
- Led to eventual British dominance
- Remembered as greatest Maratha general after Shivaji`
              }
            ]
          },
          {
            id: 'his5',
            title: '5. India: Social and Religious Reforms',
            description: 'Social reform movements in 19th and 20th century India.',
            summary: '**Raja Ram Mohan Roy**: Brahmo Samaj, Sati abolition.\n**Phule**: Satyashodhak Samaj, Education.\n**Dayanand Saraswati**: Arya Samaj.\n**Vivekananda**: Ramakrishna Mission.\n**Ambedkar**: Dalit rights, Constitution.',
            detailedNotes: '### 1. Raja Ram Mohan Roy\n* **Title**: Father of Indian Renaissance.\n* **Organization**: Brahmo Samaj (1828).\n* **Contribution**: Abolition of Sati (1829) with help of Lord Bentinck. Opposed idol worship and caste system.\n* **Journal**: Mirat-ul-Akhbar, Sambad Kaumudi.\n\n### 2. Mahatma Jyotirao Phule\n* **Organization**: Satyashodhak Samaj (1873).\n* **Contribution**: First school for girls in Pune (1848). Worked for farmers and lower castes.\n* **Book**: Ghulamgiri (Slavery).\n* **Wife**: Savitribai Phule (First female teacher).\n\n### 3. Swami Dayanand Saraswati\n* **Organization**: Arya Samaj (1875).\n* **Motto**: "Go back to the Vedas".\n* **Book**: Satyarth Prakash.\n* **Contribution**: Shuddhi movement (reconversion).\n\n### 4. Swami Vivekananda\n* **Organization**: Ramakrishna Mission (1897).\n* **Guru**: Ramakrishna Paramhansa.\n* **Event**: Chicago Parliament of Religions (1893) - famous speech.\n* **Message**: Service to man is service to God.\n\n### 5. Sir Syed Ahmed Khan\n* **Movement**: Aligarh Movement.\n* **Institution**: Mohammedan Anglo-Oriental College (later Aligarh Muslim University).\n* **Goal**: Modern scientific education for Muslims.\n\n### 6. Rajarshi Shahu Maharaj\n* **Ruler**: Kolhapur State.\n* **Contribution**: Reservation for non-Brahmins (1902). Free and compulsory primary education (1917).\n* **Title**: "Rajarshi" given by Kurmi Kshatriya Sabha.\n\n### 7. Dr. Babasaheb Ambedkar\n* **Movement**: Dalit liberation.\n* **Events**: Mahad Satyagraha (1927), Kalaram Temple Entry (1930).\n* **Organization**: Bahishkrit Hitakarini Sabha.\n* **Constitution**: Chairman of Drafting Committee.\n* **Conversion**: Embraced Buddhism in 1956.\n\n### 8. Maharshi Dhondo Keshav Karve\n* **Contribution**: Women\'s education and widow remarriage.\n* **Institution**: First Women\'s University in India (SNDT, 1916).\n* **Award**: Bharat Ratna (1958).',
            flashcards: [
              { id: 'f1', front: 'Who founded Brahmo Samaj?', back: 'Raja Ram Mohan Roy (1828).' },
              { id: 'f2', front: 'When was Sati abolished?', back: '1829 (by Lord William Bentinck).' },
              { id: 'f3', front: 'Who founded Satyashodhak Samaj?', back: 'Mahatma Jyotirao Phule (1873).' },
              { id: 'f4', front: 'Who started the first school for girls in Pune?', back: 'Mahatma Phule and Savitribai Phule (1848).' },
              { id: 'f5', front: 'Who gave the call "Go back to Vedas"?', back: 'Swami Dayanand Saraswati.' },
              { id: 'f6', front: 'Who founded Arya Samaj?', back: 'Swami Dayanand Saraswati (1875).' },
              { id: 'f7', front: 'Who founded Ramakrishna Mission?', back: 'Swami Vivekananda (1897).' },
              { id: 'f8', front: 'When did Vivekananda speak at Chicago?', back: '1893.' },
              { id: 'f9', front: 'Who founded Aligarh Muslim University?', back: 'Sir Syed Ahmed Khan.' },
              { id: 'f10', front: 'Who wrote "Ghulamgiri"?', back: 'Mahatma Jyotirao Phule.' },
              { id: 'f11', front: 'Who wrote "Satyarth Prakash"?', back: 'Swami Dayanand Saraswati.' },
              { id: 'f12', front: 'Who led Mahad Satyagraha?', back: 'Dr. Babasaheb Ambedkar (1927).' },
              { id: 'f13', front: 'Who started the first Women\'s University?', back: 'Maharshi Dhondo Keshav Karve.' },
              { id: 'f14', front: 'Who introduced reservation in Kolhapur?', back: 'Rajarshi Shahu Maharaj (1902).' },
              { id: 'f15', front: 'Who is called Father of Indian Renaissance?', back: 'Raja Ram Mohan Roy.' },
              { id: 'f16', front: 'Who was the first female teacher of India?', back: 'Savitribai Phule.' },
              { id: 'f17', front: 'What was the Shuddhi movement?', back: 'Reconversion to Hinduism (Arya Samaj).' },
              { id: 'f18', front: 'Who founded Prarthana Samaj?', back: 'Dr. Atmaram Pandurang.' },
              { id: 'f19', front: 'Who established Mukti Sadan?', back: 'Pandita Ramabai.' },
              { id: 'f20', front: 'Who was the Chairman of Drafting Committee?', back: 'Dr. B.R. Ambedkar.' },
              { id: 'f21', front: 'When did Ambedkar embrace Buddhism?', back: '1956 (at Nagpur).' },
              { id: 'f22', front: 'Who started the newspaper "Mooknayak"?', back: 'Dr. B.R. Ambedkar.' },
              { id: 'f23', front: 'Who founded Bahishkrit Hitakarini Sabha?', back: 'Dr. B.R. Ambedkar.' },
              { id: 'f24', front: 'Who was Ramakrishna Paramhansa?', back: 'Guru of Swami Vivekananda.' },
              { id: 'f25', front: 'What is SNDT?', back: 'Shreemati Nathibai Damodar Thackersey Women\'s University.' },
              { id: 'f26', front: 'Who supported Widow Remarriage Act 1856?', back: 'Ishwar Chandra Vidyasagar.' },
              { id: 'f27', front: 'Who founded Theosophical Society in India?', back: 'Annie Besant.' },
              { id: 'f28', front: 'Who started "Sambad Kaumudi"?', back: 'Raja Ram Mohan Roy.' },
              { id: 'f29', front: 'Who was known as "Lokhitwadi"?', back: 'Gopal Hari Deshmukh.' },
              { id: 'f30', front: 'Who founded Seva Sadan?', back: 'Ramabai Ranade.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Brahmo Samaj was founded in:', options: ['1828', '1857', '1875', '1897'], correctIndex: 0, explanation: 'By Raja Ram Mohan Roy.' },
              { id: 'q2', question: 'Sati was abolished in:', options: ['1828', '1829', '1833', '1856'], correctIndex: 1, explanation: 'Regulation XVII of 1829.' },
              { id: 'q3', question: 'Satyashodhak Samaj was founded by:', options: ['Ambedkar', 'Phule', 'Shahu Maharaj', 'Karve'], correctIndex: 1, explanation: 'Mahatma Jyotirao Phule.' },
              { id: 'q4', question: 'Arya Samaj was founded in:', options: ['Bombay', 'Pune', 'Calcutta', 'Madras'], correctIndex: 0, explanation: 'In 1875 by Dayanand Saraswati.' },
              { id: 'q5', question: 'Ramakrishna Mission was founded by:', options: ['Ramakrishna', 'Vivekananda', 'Dayanand', 'Aurobindo'], correctIndex: 1, explanation: 'In 1897.' },
              { id: 'q6', question: 'First Women\'s University was established by:', options: ['Phule', 'Karve', 'Ambedkar', 'Ranade'], correctIndex: 1, explanation: 'Maharshi Karve in 1916.' },
              { id: 'q7', question: 'Mahad Satyagraha was for:', options: ['Temple entry', 'Water rights', 'Land rights', 'Forest rights'], correctIndex: 1, explanation: 'Right to use water from Chavdar Tale.' },
              { id: 'q8', question: 'Who wrote "Ghulamgiri"?', options: ['Ambedkar', 'Phule', 'Gandhi', 'Nehru'], correctIndex: 1, explanation: 'Dedicated to American abolitionists.' },
              { id: 'q9', question: 'Aligarh Movement was led by:', options: ['Jinnah', 'Syed Ahmed Khan', 'Iqbal', 'Azad'], correctIndex: 1, explanation: 'For Muslim education.' },
              { id: 'q10', question: 'Rajarshi Shahu Maharaj was ruler of:', options: ['Satara', 'Kolhapur', 'Baroda', 'Gwalior'], correctIndex: 1, explanation: 'Social reformer king.' },
              { id: 'q11', question: '"Go back to Vedas" was said by:', options: ['Vivekananda', 'Dayanand Saraswati', 'Ram Mohan Roy', 'Tilak'], correctIndex: 1, explanation: 'Arya Samaj motto.' },
              { id: 'q12', question: 'Chicago Parliament of Religions was in:', options: ['1890', '1893', '1897', '1900'], correctIndex: 1, explanation: 'Vivekananda\'s famous speech.' },
              { id: 'q13', question: 'Dr. Ambedkar embraced Buddhism in:', options: ['1947', '1950', '1956', '1960'], correctIndex: 2, explanation: 'At Deekshabhoomi, Nagpur.' },
              { id: 'q14', question: 'Savitribai Phule was:', options: ['Doctor', 'Teacher', 'Lawyer', 'Engineer'], correctIndex: 1, explanation: 'First female teacher.' },
              { id: 'q15', question: 'Who helped Raja Ram Mohan Roy ban Sati?', options: ['Dalhousie', 'Bentinck', 'Canning', 'Ripon'], correctIndex: 1, explanation: 'Lord William Bentinck.' },
              { id: 'q16', question: 'Shuddhi movement was started by:', options: ['Brahmo Samaj', 'Arya Samaj', 'Prarthana Samaj', 'Satyashodhak Samaj'], correctIndex: 1, explanation: 'To bring back converts.' },
              { id: 'q17', question: 'Bahishkrit Hitakarini Sabha was founded by:', options: ['Phule', 'Ambedkar', 'Shahu', 'Periyar'], correctIndex: 1, explanation: 'For depressed classes.' },
              { id: 'q18', question: 'Who founded Prarthana Samaj?', options: ['Ranade', 'Atmaram Pandurang', 'Bhandarkar', 'Tilak'], correctIndex: 1, explanation: 'In 1867 in Bombay.' },
              { id: 'q19', question: 'Pandita Ramabai founded:', options: ['Seva Sadan', 'Mukti Sadan', 'Sharda Sadan', 'All of these'], correctIndex: 3, explanation: 'Worked for women\'s welfare.' },
              { id: 'q20', question: 'Who is called "Modern Manu"?', options: ['Gandhi', 'Ambedkar', 'Nehru', 'Patel'], correctIndex: 1, explanation: 'Drafter of Constitution.' },
              { id: 'q21', question: 'Kalaram Temple Entry Satyagraha was in:', options: ['Pune', 'Nashik', 'Mumbai', 'Nagpur'], correctIndex: 1, explanation: 'Led by Ambedkar in 1930.' },
              { id: 'q22', question: 'Who started "Mirat-ul-Akhbar"?', options: ['Syed Ahmed', 'Ram Mohan Roy', 'Gandhi', 'Tilak'], correctIndex: 1, explanation: 'Persian newspaper.' },
              { id: 'q23', question: 'Who founded Theosophical Society HQ in Adyar?', options: ['Blavatsky', 'Annie Besant', 'Olcott', 'Vivekananda'], correctIndex: 1, explanation: 'Annie Besant popularized it.' },
              { id: 'q24', question: 'Widow Remarriage Act was passed in:', options: ['1829', '1856', '1872', '1891'], correctIndex: 1, explanation: 'Efforts of Vidyasagar.' },
              { id: 'q25', question: 'Who was "Lokhitwadi"?', options: ['Agarkar', 'Deshmukh', 'Ranade', 'Gokhale'], correctIndex: 1, explanation: 'Gopal Hari Deshmukh.' },
              { id: 'q26', question: 'Who founded Servants of India Society?', options: ['Tilak', 'Gokhale', 'Gandhi', 'Nehru'], correctIndex: 1, explanation: 'Gopal Krishna Gokhale (1905).' },
              { id: 'q27', question: 'Who started "Kesari" and "Maratha"?', options: ['Agarkar', 'Tilak', 'Gokhale', 'Phule'], correctIndex: 1, explanation: 'Lokmanya Tilak.' },
              { id: 'q28', question: 'Who was the first President of INC?', options: ['Dadabhai Naoroji', 'W.C. Bonnerjee', 'Hume', 'Tyabji'], correctIndex: 1, explanation: 'Womesh Chandra Bonnerjee (1885).' },
              { id: 'q29', question: 'Who wrote "Poverty and Un-British Rule in India"?', options: ['R.C. Dutt', 'Dadabhai Naoroji', 'Gandhi', 'Nehru'], correctIndex: 1, explanation: 'Drain Theory.' },
              { id: 'q30', question: 'Who founded Indian National Congress?', options: ['Gandhi', 'A.O. Hume', 'Tilak', 'Bose'], correctIndex: 1, explanation: 'Allan Octavian Hume (1885).' }
            ],
            reels: [
              { id: 'r1', title: 'Raja Ram Mohan Roy', content: 'Father of Renaissance.\nBanned Sati 1829.\nBrahmo Samaj.', color: getReelColor(0) },
              { id: 'r2', title: 'Sati Abolition', content: 'Cruel practice.\nWidow burning.\nStopped by Law.', color: getReelColor(1) },
              { id: 'r3', title: 'Mahatma Phule', content: 'Satyashodhak Samaj.\nGirls\' Education.\nFarmer\'s rights.', color: getReelColor(2) },
              { id: 'r4', title: 'Savitribai Phule', content: 'First Lady Teacher.\nFaced stones/mud.\nTaught girls.', color: getReelColor(3) },
              { id: 'r5', title: 'Dayanand Saraswati', content: 'Arya Samaj.\nBack to Vedas.\nShuddhi Movement.', color: getReelColor(4) },
              { id: 'r6', title: 'Swami Vivekananda', content: 'Chicago Speech.\nRamakrishna Mission.\nYouth Icon.', color: getReelColor(5) },
              { id: 'r7', title: 'Chicago 1893', content: '"Brothers & Sisters".\nHinduism represented.\nWorld applauded.', color: getReelColor(6) },
              { id: 'r8', title: 'Sir Syed Ahmed', content: 'Aligarh Movement.\nModern Education.\nMuslim reform.', color: getReelColor(7) },
              { id: 'r9', title: 'Shahu Maharaj', content: 'King of Kolhapur.\nReservation 1902.\nSocial Justice.', color: getReelColor(8) },
              { id: 'r10', title: 'Dr. Ambedkar', content: 'Constitution Maker.\nDalit Rights.\nMahad Satyagraha.', color: getReelColor(9) },
              { id: 'r11', title: 'Mahad Satyagraha', content: 'Water rights.\nChavdar Tale.\nHuman dignity.', color: getReelColor(0) },
              { id: 'r12', title: 'Kalaram Temple', content: 'Nashik 1930.\nTemple Entry.\nRight to worship.', color: getReelColor(1) },
              { id: 'r13', title: 'Maharshi Karve', content: 'Women\'s University.\nWidow Remarriage.\nBharat Ratna.', color: getReelColor(2) },
              { id: 'r14', title: 'Prarthana Samaj', content: 'Prayer Society.\nBombay 1867.\nSocial reform.', color: getReelColor(3) },
              { id: 'r15', title: 'Pandita Ramabai', content: 'Women\'s shelter.\nMukti Sadan.\nEducated women.', color: getReelColor(4) },
              { id: 'r16', title: 'Ghulamgiri', content: 'Book by Phule.\nAgainst caste.\nFor equality.', color: getReelColor(5) },
              { id: 'r17', title: 'Satyarth Prakash', content: 'Book by Dayanand.\nArya Samaj bible.\nVedic truth.', color: getReelColor(6) },
              { id: 'r18', title: 'Mooknayak', content: 'Ambedkar\'s paper.\nVoice of voiceless.\nStarted 1920.', color: getReelColor(7) },
              { id: 'r19', title: 'Dhamma Chakra', content: '1956 Nagpur.\nConversion.\nBuddhism embraced.', color: getReelColor(8) },
              { id: 'r20', title: 'SNDT', content: 'First Women\'s Univ.\nBy Karve.\nEmpowerment.', color: getReelColor(9) },
              { id: 'r21', title: 'Widow Remarriage', content: 'Act 1856.\nVidyasagar\'s effort.\nSocial change.', color: getReelColor(0) },
              { id: 'r22', title: 'Annie Besant', content: 'Theosophical Society.\nHome Rule League.\nIrish lady.', color: getReelColor(1) },
              { id: 'r23', title: 'Lokhitwadi', content: 'Gopal Hari Deshmukh.\nShatpatre.\nSocial critic.', color: getReelColor(2) },
              { id: 'r24', title: 'Dadabhai Naoroji', content: 'Grand Old Man.\nDrain Theory.\nWealth to UK.', color: getReelColor(3) },
              { id: 'r25', title: 'INC 1885', content: 'Congress born.\nA.O. Hume.\nFreedom struggle.', color: getReelColor(4) },
              { id: 'r26', title: 'Gokhale', content: 'Gandhi\'s Guru.\nServants of India.\nModerate leader.', color: getReelColor(5) },
              { id: 'r27', title: 'Tilak', content: 'Swaraj is my birthright.\nKesari newspaper.\nRadical leader.', color: getReelColor(6) },
              { id: 'r28', title: 'Agarkar', content: 'Rationalist.\nSudharak paper.\nSocial reform first.', color: getReelColor(7) },
              { id: 'r29', title: 'Periyar', content: 'Self-Respect Movement.\nSouth India.\nAnti-caste.', color: getReelColor(8) },
              { id: 'r30', title: 'Legacy', content: 'Modern India.\nEquality & Justice.\nConstitution.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl5-1',
                question: 'Describe the contribution of Raja Ram Mohan Roy to social reform in India.',
                mnemonic: 'REFORM - Religious unity, Education, Freedom of press, Opposition to Sati, Ram Mohan Roy, Modernization',
                answer: `### Introduction
Raja Ram Mohan Roy (1772-1833) is called the "Father of Indian Renaissance" and "Father of Modern India" for his pioneering efforts in social reform.

### Major Reforms

**1. Abolition of Sati**
- Sati: Widow burning alive on husband's funeral pyre
- Roy campaigned vigorously against it
- Studied scriptures to prove it not mandatory
- **Sati Regulation Act (1829)** passed by Lord Bentinck
- Major victory for human rights

**2. Education Reform**
- Advocated Western education
- Founded Hindu College (1817) - now Presidency
- Supported English as medium of instruction
- Believed in scientific and rational thinking

**3. Religious Reform**
- Opposed idol worship and rituals
- Founded **Brahmo Samaj (1828)**
- Promoted monotheism (one God)
- Translated Upanishads to show rational Hinduism

**4. Press Freedom**
- Started newspapers: Sambad Kaumudi, Mirat-ul-Akhbar
- Fought for freedom of press
- Petitioned against restrictions

**5. Women's Rights**
- Advocated women's education
- Supported widow remarriage
- Opposed polygamy
- Property rights for women

### Methods Used

| Method | Example |
|--------|---------|
| Scripture study | Proved Sati not mandatory |
| Petitions | To Governor General |
| Journalism | Newspapers for public opinion |
| Organizations | Brahmo Samaj |

### Legacy
- Pioneer of modern India
- Set template for future reformers
- Bridge between East and West
- Recognized globally (visited England)`
              },
              {
                id: 'hl5-2',
                question: 'Explain the work of Mahatma Jyotirao Phule for social justice.',
                mnemonic: 'PHULE - Poor upliftment, Helping women, Universal education, Liberation of lower castes, Equality for all',
                answer: `### Introduction
Mahatma Jyotirao Phule (1827-1890) was a pioneering social reformer from Maharashtra who fought against caste discrimination and worked for education of all.

### Educational Work

**Girls' Education**
- First girls' school in India (1848) with wife Savitribai
- Faced severe opposition from orthodox society
- Savitribai was pelted with stones and mud
- Continued despite threats

**Education for Lower Castes**
- Schools for Dalits and backward castes
- Free education provided
- Night schools for working adults
- Believed education was key to liberation

### Social Reform

**1. Satyashodhak Samaj (1873)**
- "Truth-Seekers' Society"
- Promoted equality and rationalism
- Rejected Brahmanical priesthood
- Marriages without priests

**2. Anti-Caste Movement**
- Fought against untouchability
- Opened his well to Dalits
- Organized Dalits and backward classes
- Wrote "Gulamgiri" (Slavery) - 1873

**3. Women's Rights**
- Widow remarriage support
- Founded home for widows
- Opposed child marriage
- Infanticide prevention center

### Literary Works

| Book | Theme |
|------|-------|
| Gulamgiri (1873) | Caste as slavery |
| Shetkaryacha Asud | Farmers' exploitation |
| Sarvajanik Satyadharma Pustak | Religion of truth |

### Recognition
- Title "Mahatma" given by people of Bombay
- Influenced Shahu Maharaj and Ambedkar
- Father of social revolution in Maharashtra

### Legacy
- Foundation of Dalit movement
- Inspiration for reservation policy
- Pioneer of women's education
- Model for rational reform`
              },
              {
                id: 'hl5-3',
                question: 'Describe the contributions of Dr. Babasaheb Ambedkar to Indian society.',
                mnemonic: 'AMBEDKAR - Annihilation of caste, Mahad satyagraha, Buddhist conversion, Education champion, Dalit rights, Kalaram temple, Architecture of Constitution, Rights for women',
                answer: `### Early Life & Education
- Born April 14, 1891 in Mhow (MP)
- Faced untouchability from childhood
- First untouchable to complete college education
- PhD from Columbia University, DSc from London

### Social Movements

**1. Mahad Satyagraha (1927)**
- Asserted Dalits' right to use public water
- Chavdar Tale (tank) in Mahad
- First civil rights movement in India
- Burned Manusmriti (Dec 25, 1927)

**2. Kalaram Temple Entry (1930)**
- Nashik temple entry movement
- 15,000 Dalits participated
- Lasted 5 years
- Highlighted temple discrimination

**3. Organizations Founded**
- Bahishkrit Hitakarini Sabha (1924)
- Independent Labour Party (1936)
- Scheduled Castes Federation (1942)

### Political Contributions

**Constitution of India**
- Chairman of Drafting Committee
- Chief architect of Constitution
- Included fundamental rights
- Protected minorities and Dalits

**Key Constitutional Provisions**
| Article | Provision |
|---------|-----------|
| Article 14 | Equality before law |
| Article 17 | Abolition of untouchability |
| Article 15 | No discrimination |
| Article 46 | Protection of SC/ST |

**As Law Minister**
- Hindu Code Bill for women's rights
- Property rights for women
- Divorce rights
- Inheritance equality

### Literary & Journalistic Work
- Mooknayak (newspaper)
- Bahishkrit Bharat
- "Annihilation of Caste"
- "Buddha and His Dhamma"

### Buddhist Conversion (1956)
- Embraced Buddhism at Nagpur (Oct 14, 1956)
- 5 lakh followers converted with him
- Rejected caste-based Hinduism
- Sought dignity through Buddhism

### Legacy
- Father of Indian Constitution
- Icon of social justice
- Bharat Ratna (1990 - posthumous)
- April 14 celebrated as Ambedkar Jayanti`
              }
            ]
          },
          {
            id: 'his6',
            title: '6. Struggle against Colonialism',
            description: 'Indian freedom struggle from 1857 to 1947.',
            summary: '**1857 Revolt**: First War of Independence.\n**INC**: Foundation 1885, Moderates & Extremists.\n**Revolutionaries**: Bhagat Singh, Savarkar, Bose.\n**Gandhi**: Non-cooperation, Civil Disobedience, Quit India.',
            detailedNotes: '### 1. Revolt of 1857\n* **Causes**: Economic exploitation, Doctrine of Lapse, Greased cartridges (Enfield Rifle).\n* **Leaders**: Bahadur Shah Zafar, Rani Laxmibai, Tatya Tope, Nana Saheb, Kunwar Singh.\n* **Result**: End of East India Company rule. Queen\'s Proclamation (1858).\n\n### 2. Indian National Congress (1885)\n* **Founder**: A.O. Hume.\n* **First Session**: Mumbai, W.C. Bonnerjee (President).\n* **Phases**: Moderate (1885-1905) vs Extremist (1905-1920).\n* **Extremist Leaders**: Lal-Bal-Pal (Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal).\n\n### 3. Armed Revolutionaries\n* **Vasudev Balwant Phadke**: First revolutionary.\n* **Chapekar Brothers**: Killed Rand (Plague Commissioner).\n* **Abhinav Bharat**: V.D. Savarkar.\n* **Anushilan Samiti**: Barindra Kumar Ghosh.\n* **Ghadar Party**: Lala Har Dayal (USA).\n* **HSRA**: Bhagat Singh, Rajguru, Sukhdev, Chandrashekhar Azad.\n* **Chittagong Armoury Raid**: Surya Sen.\n\n### 4. Mahatma Gandhi\'s Movements\n* **Non-Cooperation Movement (1920)**: Boycott of British goods/institutions. Chauri Chaura incident (1922) led to withdrawal.\n* **Civil Disobedience Movement (1930)**: Dandi March (Salt Satyagraha).\n* **Quit India Movement (1942)**: "Do or Die". Leaderless revolt.\n\n### 5. Azad Hind Sena\n* **Leader**: Subhash Chandra Bose (Netaji).\n* **Slogans**: "Give me blood, I will give you freedom", "Chalo Delhi".\n* **Formation**: Rasbihari Bose founded Indian Independence League.',
            flashcards: [
              { id: 'f1', front: 'When was the Revolt of 1857?', back: '1857.' },
              { id: 'f2', front: 'Who was the first martyr of 1857?', back: 'Mangal Pandey.' },
              { id: 'f3', front: 'Who led the revolt in Jhansi?', back: 'Rani Laxmibai.' },
              { id: 'f4', front: 'Who founded INC?', back: 'Allan Octavian Hume (1885).' },
              { id: 'f5', front: 'Who were Lal-Bal-Pal?', back: 'Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal.' },
              { id: 'f6', front: 'Who founded Abhinav Bharat?', back: 'Vinayak Damodar Savarkar.' },
              { id: 'f7', front: 'Who killed Rand?', back: 'Chapekar Brothers (Damodar and Balkrishna).' },
              { id: 'f8', front: 'Who founded Ghadar Party?', back: 'Lala Har Dayal.' },
              { id: 'f9', front: 'Who threw a bomb in Central Assembly?', back: 'Bhagat Singh and Batukeshwar Dutt.' },
              { id: 'f10', front: 'Who led Chittagong Armoury Raid?', back: 'Surya Sen (Master Da).' },
              { id: 'f11', front: 'When was Non-Cooperation Movement started?', back: '1920.' },
              { id: 'f12', front: 'Why was Non-Cooperation withdrawn?', back: 'Chauri Chaura incident (1922).' },
              { id: 'f13', front: 'When was Dandi March?', back: '12 March 1930.' },
              { id: 'f14', front: 'What was the slogan of Quit India?', back: 'Do or Die (Karenge ya Marenge).' },
              { id: 'f15', front: 'Who founded Azad Hind Sena?', back: 'Rasbihari Bose (Reorganized by Subhash Chandra Bose).' },
              { id: 'f16', front: 'Who gave the slogan "Jai Hind"?', back: 'Subhash Chandra Bose.' },
              { id: 'f17', front: 'Who was the last Mughal Emperor?', back: 'Bahadur Shah Zafar II.' },
              { id: 'f18', front: 'Who was the Governor General during 1857?', back: 'Lord Canning.' },
              { id: 'f19', front: 'What was the immediate cause of 1857 revolt?', back: 'Greased cartridges (Cow/Pig fat).' },
              { id: 'f20', front: 'Who wrote "The Indian War of Independence 1857"?', back: 'V.D. Savarkar.' },
              { id: 'f21', front: 'Who was known as "Punjab Kesari"?', back: 'Lala Lajpat Rai.' },
              { id: 'f22', front: 'Who said "Swaraj is my birthright"?', back: 'Bal Gangadhar Tilak.' },
              { id: 'f23', front: 'Who founded Forward Bloc?', back: 'Subhash Chandra Bose (1939).' },
              { id: 'f24', front: 'Who was the political guru of Gandhi?', back: 'Gopal Krishna Gokhale.' },
              { id: 'f25', front: 'When was the Jallianwala Bagh massacre?', back: '13 April 1919.' },
              { id: 'f26', front: 'Who ordered firing at Jallianwala Bagh?', back: 'General Dyer.' },
              { id: 'f27', front: 'Who killed General O\'Dwyer?', back: 'Udham Singh (in London).' },
              { id: 'f28', front: 'Who was the first woman President of INC?', back: 'Annie Besant.' },
              { id: 'f29', front: 'Who was the first Indian woman President of INC?', back: 'Sarojini Naidu.' },
              { id: 'f30', front: 'Who was called "Iron Man of India"?', back: 'Sardar Vallabhbhai Patel.' }
            ],
            mcqs: [
              { id: 'q1', question: 'The Revolt of 1857 started at:', options: ['Delhi', 'Meerut', 'Kanpur', 'Jhansi'], correctIndex: 1, explanation: 'Started by sepoys in Meerut.' },
              { id: 'q2', question: 'Who was the first President of INC?', options: ['Dadabhai Naoroji', 'W.C. Bonnerjee', 'A.O. Hume', 'Tilak'], correctIndex: 1, explanation: 'Womesh Chandra Bonnerjee.' },
              { id: 'q3', question: 'Partition of Bengal was announced by:', options: ['Curzon', 'Ripon', 'Lytton', 'Dalhousie'], correctIndex: 0, explanation: 'Lord Curzon in 1905.' },
              { id: 'q4', question: 'Surat Split of INC occurred in:', options: ['1905', '1906', '1907', '1916'], correctIndex: 2, explanation: 'Split between Moderates and Extremists.' },
              { id: 'q5', question: 'Home Rule League was started by:', options: ['Gandhi', 'Tilak & Annie Besant', 'Nehru', 'Bose'], correctIndex: 1, explanation: 'In 1916.' },
              { id: 'q6', question: 'Jallianwala Bagh massacre took place in:', options: ['Lahore', 'Amritsar', 'Delhi', 'Pune'], correctIndex: 1, explanation: 'Amritsar, Punjab.' },
              { id: 'q7', question: 'Chauri Chaura incident happened in:', options: ['1920', '1922', '1930', '1942'], correctIndex: 1, explanation: 'Led to withdrawal of Non-Cooperation Movement.' },
              { id: 'q8', question: 'Dandi March began on:', options: ['12 March 1930', '6 April 1930', '26 Jan 1930', '15 Aug 1930'], correctIndex: 0, explanation: 'To break Salt Law.' },
              { id: 'q9', question: 'Quit India Movement started in:', options: ['1940', '1942', '1945', '1947'], correctIndex: 1, explanation: 'August 1942.' },
              { id: 'q10', question: 'Who gave the slogan "Do or Die"?', options: ['Tilak', 'Gandhi', 'Bose', 'Nehru'], correctIndex: 1, explanation: 'During Quit India Movement.' },
              { id: 'q11', question: 'Azad Hind Sena was formed in:', options: ['India', 'Japan', 'Singapore', 'Germany'], correctIndex: 2, explanation: 'Reorganized in Singapore.' },
              { id: 'q12', question: 'Who was known as "Netaji"?', options: ['Gandhi', 'Nehru', 'Bose', 'Patel'], correctIndex: 2, explanation: 'Subhash Chandra Bose.' },
              { id: 'q13', question: 'Bhagat Singh was hanged in:', options: ['1929', '1930', '1931', '1932'], correctIndex: 2, explanation: 'March 23, 1931.' },
              { id: 'q14', question: 'Who founded "Abhinav Bharat"?', options: ['Savarkar', 'Phadke', 'Tilak', 'Ghosh'], correctIndex: 0, explanation: 'V.D. Savarkar.' },
              { id: 'q15', question: 'Who led the revolt in Kanpur?', options: ['Rani Laxmibai', 'Nana Saheb', 'Kunwar Singh', 'Begum Hazrat Mahal'], correctIndex: 1, explanation: 'Nana Saheb Peshwa.' },
              { id: 'q16', question: 'Queen\'s Proclamation was read at:', options: ['Delhi', 'Calcutta', 'Allahabad', 'Bombay'], correctIndex: 2, explanation: 'By Lord Canning in 1858.' },
              { id: 'q17', question: 'Who was the Viceroy during Partition of Bengal?', options: ['Curzon', 'Minto', 'Hardinge', 'Chelmsford'], correctIndex: 0, explanation: 'Lord Curzon.' },
              { id: 'q18', question: 'Lucknow Pact (1916) was between:', options: ['INC & British', 'INC & Muslim League', 'Gandhi & Ambedkar', 'None'], correctIndex: 1, explanation: 'Unity between Congress and League.' },
              { id: 'q19', question: 'Who started the newspaper "Kesari"?', options: ['Agarkar', 'Tilak', 'Gokhale', 'Phule'], correctIndex: 1, explanation: 'Lokmanya Tilak.' },
              { id: 'q20', question: 'Who was the first Indian to clear ICS?', options: ['S.N. Banerjee', 'Satyendranath Tagore', 'Aurobindo Ghosh', 'Bose'], correctIndex: 1, explanation: 'Satyendranath Tagore.' },
              { id: 'q21', question: 'Who founded "India House" in London?', options: ['Savarkar', 'Shyamji Krishna Varma', 'Madan Lal Dhingra', 'Cama'], correctIndex: 1, explanation: 'Revolutionary center.' },
              { id: 'q22', question: 'Who shot Curzon Wyllie?', options: ['Bhagat Singh', 'Madan Lal Dhingra', 'Udham Singh', 'Azad'], correctIndex: 1, explanation: 'In London.' },
              { id: 'q23', question: 'Kakori Conspiracy Case year:', options: ['1920', '1925', '1930', '1935'], correctIndex: 1, explanation: 'Train robbery by HRA.' },
              { id: 'q24', question: 'Who died due to lathi charge?', options: ['Tilak', 'Lala Lajpat Rai', 'Bipin Chandra Pal', 'Gokhale'], correctIndex: 1, explanation: 'Protesting Simon Commission.' },
              { id: 'q25', question: 'Simon Commission came to India in:', options: ['1927', '1928', '1929', '1930'], correctIndex: 1, explanation: 'All-white commission.' },
              { id: 'q26', question: 'Poona Pact (1932) was between:', options: ['Gandhi & Irwin', 'Gandhi & Ambedkar', 'Nehru & Jinnah', 'None'], correctIndex: 1, explanation: 'Regarding depressed classes.' },
              { id: 'q27', question: 'Who was the "Frontier Gandhi"?', options: ['Jinnah', 'Khan Abdul Ghaffar Khan', 'Azad', 'Iqbal'], correctIndex: 1, explanation: 'Leader of Khudai Khidmatgar.' },
              { id: 'q28', question: 'Mountbatten Plan date:', options: ['3 June 1947', '15 Aug 1947', '26 Jan 1950', '14 Aug 1947'], correctIndex: 0, explanation: 'Plan for partition.' },
              { id: 'q29', question: 'Who was the first Prime Minister of India?', options: ['Gandhi', 'Nehru', 'Patel', 'Prasad'], correctIndex: 1, explanation: 'Jawaharlal Nehru.' },
              { id: 'q30', question: 'Who was the first President of India?', options: ['Nehru', 'Rajendra Prasad', 'Ambedkar', 'Radhakrishnan'], correctIndex: 1, explanation: 'Dr. Rajendra Prasad.' }
            ],
            reels: [
              { id: 'r1', title: '1857 Revolt', content: 'First War.\nMangal Pandey.\nRani Laxmibai.', color: getReelColor(0) },
              { id: 'r2', title: 'Mangal Pandey', content: 'Barrackpore.\nRefused cartridges.\nHanged.', color: getReelColor(1) },
              { id: 'r3', title: 'Rani Laxmibai', content: 'Jhansi Ki Rani.\nFought bravely.\nDied in battle.', color: getReelColor(2) },
              { id: 'r4', title: 'INC 1885', content: 'Congress born.\nA.O. Hume.\nSafety Valve.', color: getReelColor(3) },
              { id: 'r5', title: 'Lal-Bal-Pal', content: 'Extremist trio.\nSwaraj demand.\nBoycott.', color: getReelColor(4) },
              { id: 'r6', title: 'Tilak', content: 'Swaraj is birthright.\nGanpati festival.\nShiv Jayanti.', color: getReelColor(5) },
              { id: 'r7', title: 'Partition of Bengal', content: '1905 Curzon.\nDivide & Rule.\nSwadeshi Movement.', color: getReelColor(6) },
              { id: 'r8', title: 'Jallianwala Bagh', content: '1919 Amritsar.\nGeneral Dyer.\nMassacre.', color: getReelColor(7) },
              { id: 'r9', title: 'Non-Cooperation', content: '1920 Gandhi.\nBoycott British.\nKhadi.', color: getReelColor(8) },
              { id: 'r10', title: 'Chauri Chaura', content: '1922 Violence.\nPolice station burnt.\nMovement stopped.', color: getReelColor(9) },
              { id: 'r11', title: 'Bhagat Singh', content: 'Inquilab Zindabad.\nAssembly Bomb.\nHanged 1931.', color: getReelColor(0) },
              { id: 'r12', title: 'Dandi March', content: '1930 Salt Law.\nSabarmati to Dandi.\nCivil Disobedience.', color: getReelColor(1) },
              { id: 'r13', title: 'Quit India', content: '1942.\nDo or Die.\nBritish Leave!', color: getReelColor(2) },
              { id: 'r14', title: 'Subhash Bose', content: 'Netaji.\nAzad Hind Sena.\nChalo Delhi.', color: getReelColor(3) },
              { id: 'r15', title: 'Savarkar', content: 'Abhinav Bharat.\nCellular Jail.\nHindutva.', color: getReelColor(4) },
              { id: 'r16', title: 'Chapekar Bros', content: 'Killed Rand.\nPune Plague.\nMartyrs.', color: getReelColor(5) },
              { id: 'r17', title: 'Surya Sen', content: 'Master Da.\nChittagong Raid.\nTeacher revolutionary.', color: getReelColor(6) },
              { id: 'r18', title: 'Chandrashekhar Azad', content: 'HSRA.\nKakori.\nShot himself.', color: getReelColor(7) },
              { id: 'r19', title: 'Sardar Patel', content: 'Iron Man.\nBardoli Satyagraha.\nUnited India.', color: getReelColor(8) },
              { id: 'r20', title: 'Ambedkar', content: 'Dalit Rights.\nPoona Pact.\nConstitution.', color: getReelColor(9) },
              { id: 'r21', title: 'Nehru', content: 'First PM.\nDiscovery of India.\nTryst with Destiny.', color: getReelColor(0) },
              { id: 'r22', title: 'Mountbatten', content: 'Last Viceroy.\nPartition Plan.\nIndia & Pakistan.', color: getReelColor(1) },
              { id: 'r23', title: 'Independence', content: '15 Aug 1947.\nFreedom at midnight.\nNew dawn.', color: getReelColor(2) },
              { id: 'r24', title: 'Ghadar Party', content: 'San Francisco.\nLala Har Dayal.\nArmed revolt.', color: getReelColor(3) },
              { id: 'r25', title: 'Home Rule', content: '1916.\nAnnie Besant.\nTilak.', color: getReelColor(4) },
              { id: 'r26', title: 'Simon Commission', content: 'Go Back Simon.\nNo Indians.\nLala Ji died.', color: getReelColor(5) },
              { id: 'r27', title: 'Udham Singh', content: 'London 1940.\nKilled O\'Dwyer.\nAvenged Jallianwala.', color: getReelColor(6) },
              { id: 'r28', title: 'Madam Cama', content: 'Flag in Germany.\nMother of Revolution.\nBrave lady.', color: getReelColor(7) },
              { id: 'r29', title: 'Khan Abdul Ghaffar', content: 'Frontier Gandhi.\nRed Shirts.\nNon-violence.', color: getReelColor(8) },
              { id: 'r30', title: 'Jai Hind', content: 'Slogan of Bose.\nSalutation.\nVictory to India.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl6-1',
                question: 'Describe the causes, events, and significance of the Revolt of 1857.',
                mnemonic: 'REVOLT - Religious interference, Economic drain, Various leaders, Old regime, Land policies, Trigger cartridge',
                answer: `### Introduction
The Revolt of 1857, also called the First War of Independence, was a major uprising against British rule in India.

### Causes

**Political Causes**
- Doctrine of Lapse annexed Indian states
- Annexation of Awadh (1856) hurt feelings
- Title and pension of Mughal Emperor threatened

**Economic Causes**
- Drain of wealth to Britain
- Destruction of Indian handicrafts
- Heavy land revenue
- Exploitation of peasants

**Military Causes**
- Indian sepoys treated badly
- No promotion for Indians
- Low salaries
- Sent to fight overseas (against religious beliefs)

**Social & Religious Causes**
- Western education threatened traditions
- Reforms seen as attack on religion
- Fear of forced conversion

**Immediate Cause**
- Enfield rifle cartridges greased with cow/pig fat
- Soldiers had to bite cartridge
- Offended both Hindu and Muslim soldiers

### Course of Events

| Leader | Place | Role |
|--------|-------|------|
| Mangal Pandey | Barrackpore | Started revolt (29 March 1857) |
| Bahadur Shah II | Delhi | Declared leader |
| Rani Laxmibai | Jhansi | Heroic resistance |
| Nana Saheb | Kanpur | Led uprising |
| Tantya Tope | Central India | Military leader |
| Begum Hazrat Mahal | Lucknow | Led Awadh revolt |

### Suppression
- British reinforcements arrived
- Delhi recaptured (Sept 1857)
- Lack of coordination among rebels
- Modern British weapons

### Significance

**Immediate**
- EIC rule ended
- Crown took over (1858)
- Queen's Proclamation promised equality

**Long-term**
- First national awakening
- United people against foreign rule
- Inspiration for freedom struggle
- Martyrs remembered as heroes`
              },
              {
                id: 'hl6-2',
                question: 'Explain the role of Mahatma Gandhi in the Indian freedom struggle.',
                mnemonic: 'GANDHI - Great leader, Ahimsa, Non-cooperation, Dandi March, Hunger strikes, Independence',
                answer: `### Introduction
Mahatma Gandhi (1869-1948) transformed the Indian freedom struggle into a mass movement through his philosophy of non-violence (Ahimsa) and truth (Satya).

### Early Life & South Africa
- Born in Porbandar, Gujarat
- Studied law in London
- In South Africa (1893-1914): Fought against racial discrimination
- Developed Satyagraha technique

### Major Movements in India

**1. Champaran Satyagraha (1917)**
- First civil disobedience in India
- Against indigo cultivation (Tinkathia system)
- Success gave confidence

**2. Non-Cooperation Movement (1920-22)**
- Against Rowlatt Act and Jallianwala Bagh
- Methods: Boycott of British goods, schools, courts
- Khadi promotion, Swadeshi
- Stopped after Chauri Chaura violence

**3. Civil Disobedience Movement (1930-34)**
- **Dandi March**: 12 March - 6 April 1930
- Broke Salt Law at Dandi
- 78 followers walked 385 km
- Massive civil disobedience across India
- Gandhi-Irwin Pact (1931)

**4. Quit India Movement (1942)**
- "Do or Die" call
- Demanded immediate British withdrawal
- Leaders arrested
- Underground resistance continued

### Philosophy & Methods

| Principle | Application |
|-----------|-------------|
| Ahimsa | Non-violence in all protests |
| Satya | Truth as weapon |
| Satyagraha | Civil disobedience |
| Sarvodaya | Welfare of all |
| Swadeshi | Indian goods |

### Contributions

**Political**
- Mass participation in freedom struggle
- Hindu-Muslim unity (Khilafat)
- Gave voice to peasants and workers

**Social**
- Untouchability removal (called Harijans)
- Women's participation
- Village upliftment

### Legacy
- Father of the Nation
- Inspired global leaders (MLK, Mandela)
- Philosophy relevant today`
              },
              {
                id: 'hl6-3',
                question: 'Describe the armed revolutionary movement in India and its impact on the freedom struggle.',
                mnemonic: 'ARMS - Armed youth, Revolutionary parties, Martyrs sacrifice, Spirit of nationalism',
                answer: `### Introduction
While Gandhian methods dominated India's freedom struggle, a parallel revolutionary movement believed in armed resistance against British rule. These revolutionaries believed that violent action was necessary to overthrow colonial oppression.

### Early Revolutionary Phase (1897-1914)

**Bengal & Maharashtra**
- Chapekar Brothers: Assassinated Rand (1897)
- Anushilan Samiti & Jugantar: Secret societies in Bengal
- **Alipore Bomb Case (1908)**: Khudiram Bose threw bomb at magistrate's carriage

**Key Figures**
| Revolutionary | Contribution |
|---------------|--------------|
| Bal Gangadhar Tilak | Inspired militant nationalism |
| Aurobindo Ghosh | Spiritual revolutionary |
| Khudiram Bose | First young martyr (age 18) |
| Prafulla Chaki | Muzaffarpur bombing |

### Hindustan Republican Association (HRA/HSRA)

**Formation & Leaders**
- Founded: 1924 at Kanpur
- Key leaders: Ram Prasad Bismil, Ashfaqullah Khan, Chandrashekhar Azad

**Major Actions**
- **Kakori Train Robbery (1925)**: Looted government treasury
- Ram Prasad Bismil, Ashfaqullah Khan executed (1927)

**HSRA (Hindustan Socialist Republican Association)**
- Renamed in 1928 to include Socialist ideology
- Leaders: Bhagat Singh, Sukhdev, Rajguru, Azad

### Bhagat Singh & Comrades

**Central Assembly Bombing (1929)**
- Bhagat Singh & Batukeshwar Dutt threw bombs
- Purpose: "To make the deaf hear"
- Voluntarily arrested to use trial as platform

**Lahore Conspiracy Case**
- Bhagat Singh, Sukhdev, Rajguru sentenced to death
- Executed on 23 March 1931
- Became martyrs and national heroes

### INA (Indian National Army)

**Formation**
- Originally formed by Capt. Mohan Singh (1942)
- Reorganized by **Subhas Chandra Bose** (1943)
- Also called "Azad Hind Fauj"

**Subhas Chandra Bose's Contribution**
- Escaped India (1941)
- Went to Germany, then Japan
- Called "Netaji"
- Gave slogan: "Give me blood, I will give you freedom"

**Rani Jhansi Regiment**
- Women's regiment of INA
- Led by Captain Lakshmi Sahgal

**Military Campaign**
- Attacked through Burma
- Captured Moirang (Manipur)
- Indian flag hoisted on Indian soil
- Defeated at Imphal/Kohima (1944)

### Impact on Freedom Struggle

**Immediate Effects**
| Impact | Description |
|--------|-------------|
| British Fear | Realized Indians ready to die |
| Youth Inspiration | Thousands joined nationalist movement |
| Naval Mutiny (1946) | Inspired by INA spirit |
| British Decision | Hastened decision to leave India |

**Long-term Legacy**
- Revolutionary nationalism complemented Gandhian methods
- Created cult of martyrdom
- Showed British that resistance would continue
- INA trials created widespread sympathy

### Conclusion
The armed revolutionary movement, though not directly successful in overthrowing British rule, played a crucial role in the freedom struggle. The sacrifices of revolutionaries inspired generations and demonstrated to the British that Indian resistance would never cease.`
              }
            ]
          },
          {
            id: 'his7',
            title: '7. Decolonisation to Political Integration of India',
            description: 'Integration of Princely States and liberation of French/Portuguese colonies.',
            summary: '**Sardar Patel**: Architect of Integration.\n**Princely States**: Junagadh, Hyderabad (Operation Polo), Kashmir.\n**French Colonies**: Puducherry (1954).\n**Portuguese Colonies**: Goa (Operation Vijay 1961).',
            detailedNotes: '### 1. Decolonisation\n* Process where colonial powers transferred power to indigenous people.\n* India became independent on 15th August 1947.\n\n### 2. Integration of Princely States\n* **Sardar Vallabhbhai Patel**: Used diplomacy and "Iron Hand" to integrate 500+ states.\n* **Instrument of Accession**: Legal document for joining India.\n\n### 3. Major Challenges\n* **Junagadh**: Nawab wanted to join Pakistan. People revolted. Nawab fled. Joined India (Feb 1948).\n* **Hyderabad**: Largest princely state. Nizam refused to join. Razakars (private militia) committed atrocities. **Operation Polo** (Police Action) in Sept 1948 led to surrender.\n* **Kashmir**: Raja Hari Singh wanted independence. Pakistan sent tribal raiders. Hari Singh signed Instrument of Accession (Oct 1947). Indian Army saved Srinagar.\n\n### 4. Integration of French Colonies\n* **Places**: Puducherry, Chandernagore, Mahe, Yanam, Karaikal.\n* **Process**: Peaceful negotiations. Chandernagore joined first (1949). Others in 1954.\n\n### 5. Liberation of Goa (Portuguese)\n* **Places**: Goa, Diu, Daman, Dadra, Nagar Haveli.\n* **Dadra & Nagar Haveli**: Liberated by Azad Gomantak Dal (1954).\n* **Goa**: Portuguese refused to leave. Satyagraha failed. Indian Army launched **Operation Vijay** (Dec 1961). Goa liberated on 19 Dec 1961.',
            flashcards: [
              { id: 'f1', front: 'Who integrated the Princely States?', back: 'Sardar Vallabhbhai Patel.' },
              { id: 'f2', front: 'Which operation liberated Hyderabad?', back: 'Operation Polo (1948).' },
              { id: 'f3', front: 'Which operation liberated Goa?', back: 'Operation Vijay (1961).' },
              { id: 'f4', front: 'Who was the ruler of Kashmir in 1947?', back: 'Raja Hari Singh.' },
              { id: 'f5', front: 'Who was the ruler of Hyderabad?', back: 'Nizam (Mir Osman Ali Khan).' },
              { id: 'f6', front: 'When was Goa liberated?', back: '19 December 1961.' },
              { id: 'f7', front: 'Which French colony joined India first?', back: 'Chandernagore.' },
              { id: 'f8', front: 'Who led the Azad Gomantak Dal?', back: 'Vishwanath Lawande, Raja Wakankar.' },
              { id: 'f9', front: 'What was the militia of Nizam called?', back: 'Razakars.' },
              { id: 'f10', front: 'Who was the head of Razakars?', back: 'Kasim Razvi.' },
              { id: 'f11', front: 'When did Hyderabad join India?', back: '17 September 1948.' },
              { id: 'f12', front: 'Who signed the Instrument of Accession for Kashmir?', back: 'Raja Hari Singh.' },
              { id: 'f13', front: 'Which state\'s Nawab fled to Pakistan?', back: 'Junagadh.' },
              { id: 'f14', front: 'When did Puducherry join India?', back: '1954 (De facto), 1962 (De jure).' },
              { id: 'f15', front: 'Who was the Prime Minister during Goa liberation?', back: 'Jawaharlal Nehru.' },
              { id: 'f16', front: 'What is the "Instrument of Accession"?', back: 'Legal document for states to join India.' },
              { id: 'f17', front: 'Who was the VP of Interim Government?', back: 'Jawaharlal Nehru.' },
              { id: 'f18', front: 'Who was the Home Minister who integrated states?', back: 'Sardar Patel.' },
              { id: 'f19', front: 'Which Portuguese colony was liberated in 1954?', back: 'Dadra and Nagar Haveli.' },
              { id: 'f20', front: 'Who was Dr. T.B. Cunha?', back: 'Goan freedom fighter.' },
              { id: 'f21', front: 'Who was Mohan Ranade?', back: 'Revolutionary in Goa liberation.' },
              { id: 'f22', front: 'What happened on 15 Aug 1947?', back: 'India got Independence.' },
              { id: 'f23', front: 'Why is 17 Sept celebrated in Marathwada?', back: 'Marathwada Liberation Day (Hyderabad joined India).' },
              { id: 'f24', front: 'Who was Swami Ramanand Tirth?', back: 'Leader of Hyderabad State Congress.' },
              { id: 'f25', front: 'Who was Sheikh Abdullah?', back: 'Leader of National Conference in Kashmir.' },
              { id: 'f26', front: 'How many princely states were there in India?', back: 'Over 562 princely states.' },
              { id: 'f27', front: 'What is "Police Action"?', back: 'Military operation disguised as police operation (used in Hyderabad).' },
              { id: 'f28', front: 'Who was V.P. Menon?', back: 'Secretary who helped Patel in state integration.' },
              { id: 'f29', front: 'Which state was largest by area among princely states?', back: 'Hyderabad.' },
              { id: 'f30', front: 'What was the Standstill Agreement?', back: 'Agreement to maintain status quo with princely states after independence.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Operation Polo was associated with:', options: ['Goa', 'Hyderabad', 'Kashmir', 'Junagadh'], correctIndex: 1, explanation: 'Police action against Nizam.' },
              { id: 'q2', question: 'Goa was liberated from:', options: ['British', 'French', 'Portuguese', 'Dutch'], correctIndex: 2, explanation: 'In 1961.' },
              { id: 'q3', question: 'Who was the "Iron Man of India"?', options: ['Nehru', 'Gandhi', 'Patel', 'Bose'], correctIndex: 2, explanation: 'Sardar Vallabhbhai Patel.' },
              { id: 'q4', question: 'Junagadh is located in:', options: ['Punjab', 'Gujarat', 'Bengal', 'Hyderabad'], correctIndex: 1, explanation: 'Saurashtra region.' },
              { id: 'q5', question: 'The ruler of Kashmir was:', options: ['Muslim', 'Hindu', 'Sikh', 'Christian'], correctIndex: 1, explanation: 'Hari Singh (Hindu ruler, Muslim majority).' },
              { id: 'q6', question: 'Razakars were associated with:', options: ['Junagadh', 'Kashmir', 'Hyderabad', 'Goa'], correctIndex: 2, explanation: 'Private army of Nizam.' },
              { id: 'q7', question: 'Puducherry was a colony of:', options: ['British', 'French', 'Portuguese', 'Dutch'], correctIndex: 1, explanation: 'French settlement.' },
              { id: 'q8', question: 'Operation Vijay (1961) was for:', options: ['Kargil', 'Goa', 'Hyderabad', 'Bangladesh'], correctIndex: 1, explanation: 'Liberation of Goa.' },
              { id: 'q9', question: 'Who led the Hyderabad State Congress?', options: ['Swami Ramanand Tirth', 'T.B. Cunha', 'Savarkar', 'Tilak'], correctIndex: 0, explanation: 'Fought against Nizam.' },
              { id: 'q10', question: 'Dadra and Nagar Haveli were liberated in:', options: ['1947', '1954', '1961', '1971'], correctIndex: 1, explanation: 'By Azad Gomantak Dal.' },
              { id: 'q11', question: 'The Nawab of Junagadh wanted to join:', options: ['India', 'Pakistan', 'China', 'USA'], correctIndex: 1, explanation: 'Against people\'s wish.' },
              { id: 'q12', question: 'Who was the last Viceroy of India?', options: ['Wavell', 'Mountbatten', 'Curzon', 'Canning'], correctIndex: 1, explanation: 'Lord Mountbatten.' },
              { id: 'q13', question: 'When did Kashmir accede to India?', options: ['Aug 1947', 'Oct 1947', 'Jan 1948', '1950'], correctIndex: 1, explanation: '26 October 1947.' },
              { id: 'q14', question: 'Who was General J.N. Chaudhuri?', options: ['Led Operation Polo', 'Led Operation Vijay', 'Led 1857 revolt', 'None'], correctIndex: 0, explanation: 'Military commander in Hyderabad.' },
              { id: 'q15', question: 'Dr. Ram Manohar Lohia is associated with:', options: ['Goa Liberation', 'Hyderabad', 'Kashmir', 'Junagadh'], correctIndex: 0, explanation: 'Civil Disobedience in Goa (1946).' },
              { id: 'q16', question: 'How many states were integrated by Patel?', options: ['362', '462', '562', '662'], correctIndex: 2, explanation: 'Over 562 princely states.' },
              { id: 'q17', question: 'V.P. Menon was:', options: ['Army Chief', 'Secretary', 'Governor', 'Judge'], correctIndex: 1, explanation: 'Helped Patel in integration.' },
              { id: 'q18', question: 'Mahe was a colony of:', options: ['British', 'French', 'Portuguese', 'Dutch'], correctIndex: 1, explanation: 'French settlement on Malabar coast.' },
              { id: 'q19', question: 'Yanam is now part of:', options: ['Kerala', 'Karnataka', 'Puducherry', 'Tamil Nadu'], correctIndex: 2, explanation: 'French settlement near Andhra.' },
              { id: 'q20', question: 'Karaikal is located near:', options: ['Chennai', 'Thiruvananthapuram', 'Nagappattinam', 'Cochin'], correctIndex: 2, explanation: 'In Tamil Nadu coast.' },
              { id: 'q21', question: 'First Governor General of free India:', options: ['Nehru', 'Patel', 'Mountbatten', 'Rajagopalachari'], correctIndex: 2, explanation: 'Lord Mountbatten till June 1948.' },
              { id: 'q22', question: 'First Indian Governor General:', options: ['Nehru', 'Patel', 'Prasad', 'Rajagopalachari'], correctIndex: 3, explanation: 'C. Rajagopalachari.' },
              { id: 'q23', question: 'Plebiscite means:', options: ['War', 'Vote by people', 'Treaty', 'Law'], correctIndex: 1, explanation: 'People\'s referendum.' },
              { id: 'q24', question: 'Article 370 is related to:', options: ['Goa', 'Hyderabad', 'Kashmir', 'Junagadh'], correctIndex: 2, explanation: 'Special status to J&K.' },
              { id: 'q25', question: 'Daman was a colony of:', options: ['British', 'French', 'Portuguese', 'Dutch'], correctIndex: 2, explanation: 'Portuguese territory.' },
              { id: 'q26', question: 'Diu island is in:', options: ['Arabian Sea', 'Bay of Bengal', 'Indian Ocean', 'Pacific'], correctIndex: 0, explanation: 'Off Gujarat coast.' },
              { id: 'q27', question: 'Sardar Patel died in:', options: ['1948', '1950', '1952', '1955'], correctIndex: 1, explanation: 'December 15, 1950.' },
              { id: 'q28', question: 'Statue of Unity is in:', options: ['Gujarat', 'Maharashtra', 'Delhi', 'Punjab'], correctIndex: 0, explanation: 'Tallest statue, for Sardar Patel.' },
              { id: 'q29', question: 'Kashmir dispute went to UN in:', options: ['1947', '1948', '1950', '1961'], correctIndex: 1, explanation: 'India approached UN.' },
              { id: 'q30', question: 'Sikkim merged with India in:', options: ['1947', '1961', '1971', '1975'], correctIndex: 3, explanation: 'Became 22nd state.' }
            ],
            reels: [
              { id: 'r1', title: 'Sardar Patel', content: 'Iron Man.\nUnited India.\n562 States.', color: getReelColor(0) },
              { id: 'r2', title: 'Operation Polo', content: 'Hyderabad 1948.\nPolice Action.\nNizam Surrendered.', color: getReelColor(1) },
              { id: 'r3', title: 'Operation Vijay', content: 'Goa 1961.\nPortuguese Out.\nIndia Complete.', color: getReelColor(2) },
              { id: 'r4', title: 'Junagadh', content: 'Nawab fled.\nPeople voted.\nJoined India.', color: getReelColor(3) },
              { id: 'r5', title: 'Kashmir', content: 'Hari Singh.\nTribal Attack.\nAccession.', color: getReelColor(4) },
              { id: 'r6', title: 'Razakars', content: 'Nizam\'s Army.\nTerror.\nDefeated.', color: getReelColor(5) },
              { id: 'r7', title: 'Puducherry', content: 'French Colony.\nPeaceful exit.\nUnion Territory.', color: getReelColor(6) },
              { id: 'r8', title: 'Swami Ramanand', content: 'Hyderabad struggle.\nFreedom fighter.\nLeader.', color: getReelColor(7) },
              { id: 'r9', title: 'Goa Freedom', content: 'Lohia 1946.\nSatyagraha.\nArmy 1961.', color: getReelColor(8) },
              { id: 'r10', title: 'Dadra Nagar', content: '1954.\nAzad Gomantak.\nFirst win.', color: getReelColor(9) },
              { id: 'r11', title: 'Instrument of Accession', content: 'Legal Paper.\nSign to join.\nOne Nation.', color: getReelColor(0) },
              { id: 'r12', title: 'Marathwada Day', content: '17 Sept.\nFreedom from Nizam.\nCelebration.', color: getReelColor(1) },
              { id: 'r13', title: 'T.B. Cunha', content: 'Father of Goa nationalism.\nExiled.\nPatriot.', color: getReelColor(2) },
              { id: 'r14', title: 'General Chaudhuri', content: 'Led Army.\nEntered Hyderabad.\nVictory.', color: getReelColor(3) },
              { id: 'r15', title: 'United India', content: 'Map complete.\nFrom Kashmir to Kanyakumari.\nJai Hind.', color: getReelColor(4) },
              { id: 'r16', title: 'V.P. Menon', content: 'Patel\'s Secretary.\nNegotiator.\nHero.', color: getReelColor(5) },
              { id: 'r17', title: '562 States', content: 'Princely States.\nAll joined.\nOne Nation.', color: getReelColor(6) },
              { id: 'r18', title: 'Mountbatten', content: 'Last Viceroy.\nFirst Gov-Gen.\nTransition.', color: getReelColor(7) },
              { id: 'r19', title: 'Sheikh Abdullah', content: 'Lion of Kashmir.\nNational Conference.\nLeader.', color: getReelColor(8) },
              { id: 'r20', title: 'Tribal Raiders', content: 'Pakistan sent.\nKashmir attacked.\nWar began.', color: getReelColor(9) },
              { id: 'r21', title: 'Mahe', content: 'French India.\nKerala coast.\nPeaceful.', color: getReelColor(0) },
              { id: 'r22', title: 'Yanam', content: 'French Colony.\nAndhra coast.\nSmall territory.', color: getReelColor(1) },
              { id: 'r23', title: 'Karaikal', content: 'French India.\nTamil Nadu.\nUnion Territory.', color: getReelColor(2) },
              { id: 'r24', title: 'Chandernagore', content: 'French Bengal.\nJoined first.\n1949.', color: getReelColor(3) },
              { id: 'r25', title: 'Daman', content: 'Portuguese.\nGujarat coast.\n1961.', color: getReelColor(4) },
              { id: 'r26', title: 'Diu', content: 'Island.\nPortuguese.\nLiberated.', color: getReelColor(5) },
              { id: 'r27', title: 'Sikkim', content: '1975.\n22nd State.\nReferendum.', color: getReelColor(6) },
              { id: 'r28', title: 'Article 370', content: 'Kashmir special.\nAutonomy.\nHistory.', color: getReelColor(7) },
              { id: 'r29', title: 'Statue of Unity', content: 'Tallest Statue.\nPatel tribute.\nGujarat.', color: getReelColor(8) },
              { id: 'r30', title: 'Integration', content: 'Diplomacy + Force.\nPatel\'s genius.\nSuccess.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl7-1',
                question: 'Explain the role of Sardar Vallabhbhai Patel in the integration of Princely States.',
                mnemonic: 'PATEL - Persuasion, Action, Tough decisions, Expertise, Liberation',
                answer: `### Introduction
Sardar Vallabhbhai Patel (1875-1950), the "Iron Man of India," integrated over 562 princely states into the Indian Union, making it one of the most remarkable achievements in history.

### The Challenge

**Situation at Independence**
- 562 princely states covered 40% of India
- States had three choices: Join India, Pakistan, or remain independent
- British paramountcy lapsed on 15 Aug 1947
- Danger of Balkanization (breaking into small states)

**Key Assistants**
- V.P. Menon: Secretary, drafted documents
- Lord Mountbatten: Convinced many rulers

### Methods Used

**1. Diplomacy**
- Personal meetings with rulers
- Appealing to patriotism
- Explaining benefits of joining India

**2. Instrument of Accession**
- Legal document for joining India
- Rulers surrendered defense, external affairs, communications
- Internal autonomy guaranteed initially

**3. Financial Incentives**
- Privy purses for rulers
- Retention of titles and privileges
- Respect for royal families

**4. Military Pressure (when needed)**
- Used threat of force
- Public movements supported
- Swift military action

### Major Challenges

| State | Problem | Solution |
|-------|---------|----------|
| Junagadh | Nawab wanted Pakistan | Plebiscite, people chose India |
| Hyderabad | Nizam wanted independence | Operation Polo (1948) |
| Kashmir | Pakistan invasion | Accession after military help |

### Significance

**National Unity**
- Created unified India
- Prevented foreign interference
- Strong central government

**Legacy**
- "Iron Man" title
- Statue of Unity built
- Father of Indian integration`
              },
              {
                id: 'hl7-2',
                question: 'Describe the liberation of Goa from Portuguese rule.',
                mnemonic: 'GOA FREE - Goa nationalism, Operation Vijay, Armed action, Freedom 1961, Resistance, Ended colonialism, European last',
                answer: `### Background

**Portuguese in India**
- First Europeans to arrive (1498)
- Last to leave (1961)
- Held Goa, Daman, Diu, Dadra, Nagar Haveli
- 450 years of colonial rule

**Why Liberation Was Difficult**
- Portugal refused negotiations
- NATO ally, international pressure
- Non-violence policy limited options

### Freedom Movement in Goa

**Leaders**
| Name | Contribution |
|------|--------------|
| T.B. Cunha | Father of Goa nationalism |
| Ram Manohar Lohia | Civil disobedience (1946) |
| Mohan Ranade | Revolutionary activities |
| Azad Gomantak Dal | Armed resistance |

**Methods Used**
- Satyagraha (non-violent protest)
- Underground activities
- Publicity of Portuguese atrocities
- International pressure

### Dadra & Nagar Haveli Liberation (1954)
- First Portuguese territory liberated
- Azad Gomantak Dal attacked
- Quick liberation on 2 August 1954
- Became part of India later

### Operation Vijay (1961)

**Decision to Act**
- 14 years of patience since independence
- Diplomatic efforts failed
- Portugal joined NATO, sought protection
- Nehruvian patience ran out

**Military Operation**
- Date: 17-19 December 1961
- Forces: Army, Navy, Air Force
- Commander: Major General K.P. Candeth
- Duration: 36 hours

**Result**
- Portuguese Governor General surrendered
- 3,000 Portuguese POWs
- Minimal casualties
- Goa, Daman, Diu liberated

### Significance

**National**
- End of all colonial rule in India
- National integration complete
- Victory for patience and firmness

**International**
- Criticized by Portugal, some Western nations
- Supported by Asian, African countries
- Set example for decolonization

### Legacy
- Goa Liberation Day: 19 December
- Goa became state in 1987
- Unique Indo-Portuguese culture preserved`
              },
              {
                id: 'hl7-3',
                question: 'Explain the process of integration of Hyderabad into the Indian Union.',
                mnemonic: 'POLO - Police action, Operation code, Liberation of Hyderabad, Osman Ali defeated',
                answer: `### Background

**About Hyderabad**
- Largest princely state in India
- Area: 82,698 sq miles (size of Britain)
- Population: 16 million (85% Hindu, 15% Muslim)
- Ruler: Nizam Mir Osman Ali Khan
- One of the richest men in the world

**Political Situation**
| Factor | Details |
|--------|---------|
| Ruler | Muslim Nizam over Hindu majority |
| Nizam's Wish | Independence or join Pakistan |
| Location | Land-locked, surrounded by India |
| Strategic | Heart of Deccan, vital for unity |

### Nizam's Resistance

**Steps Taken by Nizam**
- Refused to sign Instrument of Accession
- Signed Standstill Agreement (temporary)
- Sought international support
- Built up armed forces

**Razakars**
- Private militia of Ittehad-ul-Muslimeen
- Led by **Qasim Razvi**
- Committed atrocities against Hindus
- Killed thousands, looted property
- Prevented people from joining India

### India's Approach

**Diplomatic Efforts**
- Sardar Patel negotiated patiently
- Sent V.P. Menon for talks
- Mountbatten mediated
- All efforts failed due to Nizam's stubbornness

**Why Action Became Necessary**
- Razakar violence increasing
- Refugees fleeing to India
- Communist uprising in Telangana
- Pakistan's encouragement to Nizam
- National security threatened

### Operation Polo (Police Action)

**Preparation**
- Date: 13-17 September 1948
- Code name: Operation Polo
- Commander: Major General J.N. Chaudhuri
- Forces: Indian Army from all sides

**Military Campaign**
| Day | Events |
|-----|--------|
| 13 Sept | Operation begins |
| 14 Sept | Rapid advance |
| 15 Sept | Key towns captured |
| 17 Sept | Hyderabad city reached |
| 17 Sept | Nizam surrenders |

**Result**
- 5-day operation
- Minimal casualties
- Razakars surrendered
- Nizam signed Instrument of Accession
- Hyderabad integrated into India

### Aftermath

**Immediate**
- Military administration established
- Razakar leaders arrested (Qasim Razvi imprisoned)
- Peace restored
- Relief to suffering people

**Long-term**
- Nizam made Rajpramukh (ceremonial head)
- Given annual privy purse
- Hyderabad state later reorganized
- Split into Maharashtra, Karnataka, Andhra Pradesh (1956)

### Significance

**National**
- Ended hopes of Pakistan extending to Deccan
- Demonstrated India's resolve for unity
- Sardar Patel's greatest achievement

**Administrative**
- Proved integration possible without bloodshed
- Model for dealing with reluctant states

### Conclusion
Operation Polo was a swift and decisive action that ended the Nizam's dream of independence and completed the integration of the Indian Union. Sardar Patel's firm handling earned him the title "Iron Man of India."`
              }
            ]
          },
          {
            id: 'his8',
            title: '8. World Wars and India',
            description: 'Impact of WWI and WWII on India.',
            summary: '**WWI (1914-18)**: India supported Britain. League of Nations formed.\n**WWII (1939-45)**: Quit India Movement. UN formed.\n**Impact**: Industrial growth, Inflation, Political awakening.',
            detailedNotes: '### 1. World War I (1914-1918)\n* **Parties**: Allies (Britain, France, Russia, USA) vs Central Powers (Germany, Austria-Hungary, Ottoman Empire).\n* **India\'s Role**: Provided 1.3 million soldiers. Donated money.\n* **Impact on India**: \n    * **Economic**: Inflation, high taxes.\n    * **Political**: Home Rule League, Lucknow Pact (1916), Montague-Chelmsford Reforms (1919).\n    * **Social**: Exposure to world, confidence.\n\n### 2. World War II (1939-1945)\n* **Parties**: Allies (Britain, USA, USSR, France) vs Axis (Germany, Italy, Japan).\n* **India\'s Role**: 2.5 million soldiers. Base for operations against Japan.\n* **Impact on India**:\n    * **Political**: Congress resigned ministries (1939). Quit India Movement (1942). INA activities.\n    * **Economic**: War industries grew. Bengal Famine (1943).\n\n### 3. Aftermath\n* **WWI**: League of Nations (1920) - Failed to prevent WWII.\n* **WWII**: United Nations (1945) - To maintain peace. Decolonisation began.',
            flashcards: [
              { id: 'f1', front: 'When was WWI fought?', back: '1914-1918.' },
              { id: 'f2', front: 'When was WWII fought?', back: '1939-1945.' },
              { id: 'f3', front: 'Which organization was formed after WWI?', back: 'League of Nations (1920).' },
              { id: 'f4', front: 'Which organization was formed after WWII?', back: 'United Nations (1945).' },
              { id: 'f5', front: 'Who was the British PM during WWII?', back: 'Winston Churchill.' },
              { id: 'f6', front: 'Which country dropped atom bombs?', back: 'USA (on Hiroshima & Nagasaki).' },
              { id: 'f7', front: 'What was the immediate cause of WWI?', back: 'Assassination of Archduke Franz Ferdinand.' },
              { id: 'f8', front: 'What was the immediate cause of WWII?', back: 'Germany invaded Poland (1 Sept 1939).' },
              { id: 'f9', front: 'Did India support Britain in WWI?', back: 'Yes, hoping for self-rule.' },
              { id: 'f10', front: 'Did Congress support Britain in WWII?', back: 'No, they resigned in protest.' },
              { id: 'f11', front: 'When was the Bengal Famine?', back: '1943.' },
              { id: 'f12', front: 'Who were the Axis Powers?', back: 'Germany, Italy, Japan.' },
              { id: 'f13', front: 'Who were the Allied Powers?', back: 'Britain, USA, USSR, France.' },
              { id: 'f14', front: 'What is the "Atlantic Charter"?', back: '1941 declaration by USA & UK.' },
              { id: 'f15', front: 'When did Japan surrender?', back: 'August 1945.' },
              { id: 'f16', front: 'Who was the dictator of Italy?', back: 'Benito Mussolini.' },
              { id: 'f17', front: 'What was "Blitzkrieg"?', back: 'Lightning war tactic used by Germany.' },
              { id: 'f18', front: 'Which Indian leader supported Britain in WWI?', back: 'Gandhi (initially, hoping for reforms).' },
              { id: 'f19', front: 'What reforms came after WWI?', back: 'Montagu-Chelmsford Reforms (1919).' },
              { id: 'f20', front: 'What was the Treaty of Versailles?', back: 'Peace treaty after WWI (1919), blamed Germany.' },
              { id: 'f21', front: 'Who was President of USA during WWII?', back: 'Franklin D. Roosevelt (then Truman).' },
              { id: 'f22', front: 'Where is Pearl Harbor?', back: 'Hawaii, USA.' },
              { id: 'f23', front: 'What was D-Day?', back: 'Allied invasion of Normandy (June 6, 1944).' },
              { id: 'f24', front: 'What was "Operation Barbarossa"?', back: 'German invasion of USSR (1941).' },
              { id: 'f25', front: 'What was the Holocaust?', back: 'Nazi genocide of 6 million Jews.' },
              { id: 'f26', front: 'When did Pearl Harbor attack happen?', back: 'December 7, 1941.' },
              { id: 'f27', front: 'What cities were atom-bombed?', back: 'Hiroshima (Aug 6) and Nagasaki (Aug 9, 1945).' },
              { id: 'f28', front: 'What was the "Final Solution"?', back: 'Nazi plan for Jewish genocide.' },
              { id: 'f29', front: 'Who led USSR during WWII?', back: 'Joseph Stalin.' },
              { id: 'f30', front: 'What was Stalingrad?', back: 'Major battle where USSR defeated Germany (1942-43).' }
            ],
            mcqs: [
              { id: 'q1', question: 'WWI started in:', options: ['1914', '1918', '1939', '1945'], correctIndex: 0, explanation: 'July 1914.' },
              { id: 'q2', question: 'WWII ended in:', options: ['1942', '1945', '1947', '1950'], correctIndex: 1, explanation: 'September 1945.' },
              { id: 'q3', question: 'League of Nations was formed in:', options: ['1919', '1920', '1945', '1950'], correctIndex: 1, explanation: 'Headquarters in Geneva.' },
              { id: 'q4', question: 'United Nations was established on:', options: ['24 Oct 1945', '15 Aug 1947', '26 Jan 1950', '1 Jan 1945'], correctIndex: 0, explanation: 'UN Day.' },
              { id: 'q5', question: 'Who was the dictator of Germany?', options: ['Mussolini', 'Hitler', 'Stalin', 'Churchill'], correctIndex: 1, explanation: 'Adolf Hitler.' },
              { id: 'q6', question: 'Who was the dictator of Italy?', options: ['Hitler', 'Mussolini', 'Franco', 'Lenin'], correctIndex: 1, explanation: 'Benito Mussolini.' },
              { id: 'q7', question: 'Japan attacked which US base?', options: ['New York', 'Pearl Harbor', 'Washington', 'California'], correctIndex: 1, explanation: 'Dec 7, 1941.' },
              { id: 'q8', question: 'Which Indian industry grew during wars?', options: ['Textile & Steel', 'IT', 'Tourism', 'Agriculture'], correctIndex: 0, explanation: 'To supply war needs.' },
              { id: 'q9', question: 'The "Blitzkrieg" tactic was used by:', options: ['Britain', 'Germany', 'France', 'USA'], correctIndex: 1, explanation: 'Lightning War.' },
              { id: 'q10', question: 'Who won WWI?', options: ['Central Powers', 'Allies', 'Axis', 'None'], correctIndex: 1, explanation: 'Britain, France, etc.' },
              { id: 'q11', question: 'Treaty of Versailles was signed in:', options: ['1918', '1919', '1920', '1945'], correctIndex: 1, explanation: 'Blamed Germany for WWI.' },
              { id: 'q12', question: 'Archduke Franz Ferdinand was from:', options: ['Germany', 'Austria-Hungary', 'Serbia', 'Russia'], correctIndex: 1, explanation: 'His assassination started WWI.' },
              { id: 'q13', question: 'D-Day invasion was in:', options: ['1942', '1943', '1944', '1945'], correctIndex: 2, explanation: 'June 6, 1944.' },
              { id: 'q14', question: 'Operation Barbarossa was against:', options: ['France', 'Britain', 'USSR', 'USA'], correctIndex: 2, explanation: 'German invasion of Russia.' },
              { id: 'q15', question: 'Holocaust refers to:', options: ['War crimes', 'Genocide of Jews', 'Atomic bombing', 'Famines'], correctIndex: 1, explanation: '6 million Jews killed.' },
              { id: 'q16', question: 'Battle of Stalingrad was in:', options: ['1941', '1942-43', '1944', '1945'], correctIndex: 1, explanation: 'Turning point in Europe.' },
              { id: 'q17', question: 'Who was FDR?', options: ['British PM', 'US President', 'Soviet Leader', 'German General'], correctIndex: 1, explanation: 'Franklin D. Roosevelt.' },
              { id: 'q18', question: 'VE Day stands for:', options: ['Victory in Europe', 'Victory in East', 'Victory Everywhere', 'None'], correctIndex: 0, explanation: 'May 8, 1945.' },
              { id: 'q19', question: 'VJ Day stands for:', options: ['Victory in Japan', 'Victory in June', 'Victory Joint', 'None'], correctIndex: 0, explanation: 'August 15, 1945.' },
              { id: 'q20', question: 'Who dropped atom bombs?', options: ['Britain', 'USSR', 'USA', 'France'], correctIndex: 2, explanation: 'On Japan.' },
              { id: 'q21', question: 'Nagasaki was bombed on:', options: ['Aug 6', 'Aug 9', 'Aug 15', 'Sept 2'], correctIndex: 1, explanation: '1945.' },
              { id: 'q22', question: 'Central Powers included:', options: ['USA, UK', 'Germany, Austria-Hungary', 'France, Russia', 'Italy, Japan'], correctIndex: 1, explanation: 'WWI alliance.' },
              { id: 'q23', question: 'USA entered WWI in:', options: ['1914', '1915', '1917', '1918'], correctIndex: 2, explanation: 'After Zimmermann Telegram.' },
              { id: 'q24', question: 'Lusitania was a:', options: ['Battleship', 'Passenger ship', 'Submarine', 'Aircraft'], correctIndex: 1, explanation: 'Sunk by Germans.' },
              { id: 'q25', question: 'Woodrow Wilson was:', options: ['British PM', 'US President', 'French PM', 'German Kaiser'], correctIndex: 1, explanation: 'During WWI.' },
              { id: 'q26', question: 'Fourteen Points were proposed by:', options: ['Churchill', 'Wilson', 'Roosevelt', 'Stalin'], correctIndex: 1, explanation: 'For post-war peace.' },
              { id: 'q27', question: 'Nazi Party was in:', options: ['Italy', 'Germany', 'Japan', 'USSR'], correctIndex: 1, explanation: 'Led by Hitler.' },
              { id: 'q28', question: 'Fascism originated in:', options: ['Germany', 'Italy', 'Spain', 'Japan'], correctIndex: 1, explanation: 'Under Mussolini.' },
              { id: 'q29', question: 'Who was Anne Frank?', options: ['German spy', 'Jewish diarist', 'British nurse', 'French fighter'], correctIndex: 1, explanation: 'Holocaust victim.' },
              { id: 'q30', question: 'Nuremberg Trials were for:', options: ['War criminals', 'Peace talks', 'Trade agreements', 'None'], correctIndex: 0, explanation: 'Nazi leaders tried.' }
            ],
            reels: [
              { id: 'r1', title: 'WWI 1914', content: 'Archduke killed.\nWorld at war.\nTrenches.', color: getReelColor(0) },
              { id: 'r2', title: 'WWII 1939', content: 'Hitler invades.\nPoland falls.\nGlobal conflict.', color: getReelColor(1) },
              { id: 'r3', title: 'Pearl Harbor', content: 'Japan attacks.\nUSA enters.\nPacific War.', color: getReelColor(2) },
              { id: 'r4', title: 'Hiroshima', content: 'Atom Bomb.\nLittle Boy.\nDevastation.', color: getReelColor(3) },
              { id: 'r5', title: 'Indian Soldiers', content: 'Fought bravely.\nAfrica, Europe.\nVictoria Cross.', color: getReelColor(4) },
              { id: 'r6', title: 'League of Nations', content: 'Peace attempt.\nFailed.\nGeneva.', color: getReelColor(5) },
              { id: 'r7', title: 'United Nations', content: '1945.\nNew Hope.\nPrevent War.', color: getReelColor(6) },
              { id: 'r8', title: 'Hitler', content: 'Nazi leader.\nHolocaust.\nSuicide.', color: getReelColor(7) },
              { id: 'r9', title: 'Mussolini', content: 'Fascist.\nItaly.\nHanged.', color: getReelColor(8) },
              { id: 'r10', title: 'Bengal Famine', content: '1943.\nMillions died.\nMan-made.', color: getReelColor(9) },
              { id: 'r11', title: 'Archduke', content: 'Franz Ferdinand.\nAssassinated.\nWWI started.', color: getReelColor(0) },
              { id: 'r12', title: 'Trenches', content: 'WWI warfare.\nMud and death.\nStalemate.', color: getReelColor(1) },
              { id: 'r13', title: 'Versailles', content: 'Treaty 1919.\nBlamed Germany.\nSeeds of WWII.', color: getReelColor(2) },
              { id: 'r14', title: 'Nazis', content: 'Hitler\'s party.\nFascism.\nHorror.', color: getReelColor(3) },
              { id: 'r15', title: 'Holocaust', content: '6 Million Jews.\nGenocide.\nNever Again.', color: getReelColor(4) },
              { id: 'r16', title: 'D-Day', content: 'June 6 1944.\nNormandy.\nLiberation.', color: getReelColor(5) },
              { id: 'r17', title: 'Stalingrad', content: 'Turning point.\nGermany lost.\nRussia won.', color: getReelColor(6) },
              { id: 'r18', title: 'FDR', content: 'US President.\nNew Deal.\nWar leader.', color: getReelColor(7) },
              { id: 'r19', title: 'Churchill', content: 'British PM.\nNever surrender.\nVictory.', color: getReelColor(8) },
              { id: 'r20', title: 'Stalin', content: 'Soviet leader.\nRuthless.\nDefeated Hitler.', color: getReelColor(9) },
              { id: 'r21', title: 'Nagasaki', content: 'Fat Man bomb.\nAug 9.\nSurrender.', color: getReelColor(0) },
              { id: 'r22', title: 'INA', content: 'Indian National Army.\nAzad Hind.\nBose.', color: getReelColor(1) },
              { id: 'r23', title: 'Quit India', content: '1942.\nBritish busy.\nDo or Die.', color: getReelColor(2) },
              { id: 'r24', title: 'Nuremberg', content: 'War Trials.\nJustice.\nNazis punished.', color: getReelColor(3) },
              { id: 'r25', title: 'Anne Frank', content: 'Jewish girl.\nDiary.\nSymbol.', color: getReelColor(4) },
              { id: 'r26', title: 'VE Day', content: 'Victory Europe.\nMay 8 1945.\nCelebration.', color: getReelColor(5) },
              { id: 'r27', title: 'VJ Day', content: 'Victory Japan.\nAug 15.\nWar Over.', color: getReelColor(6) },
              { id: 'r28', title: 'Submarines', content: 'U-boats.\nGerman.\nAtlantic terror.', color: getReelColor(7) },
              { id: 'r29', title: 'Luftwaffe', content: 'German Air Force.\nBlitz London.\nBattle of Britain.', color: getReelColor(8) },
              { id: 'r30', title: 'War Legacy', content: 'UN formed.\nCold War.\nNew World.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl8-1',
                question: 'Explain the impact of World Wars on India.',
                mnemonic: 'IMPACTS - Industry grew, Mass movements, Political awakening, Army contribution, Consciousness, Trade, Sacrifice',
                answer: `### India's Contribution to World Wars

**World War I (1914-1918)**
- 1.3 million Indian soldiers served
- Rs. 146 crore donated to Britain
- Fought in Europe, Africa, Middle East
- 74,000 Indians died

**World War II (1939-1945)**
- 2.5 million Indian soldiers
- Indian territory used as base
- Fought against Japan in Burma
- Over 87,000 died

### Impact on India

**Political Impact**

| WWI Impact | WWII Impact |
|------------|-------------|
| Home Rule Movement (1916) | Quit India Movement (1942) |
| Lucknow Pact | Congress resigned ministries |
| Montagu-Chelmsford Reforms | Cripps Mission failure |
| Rowlatt Act → Protest | INA trial → Mass support |

**Economic Impact**

*Positive*
- War industries developed
- Tata Steel expanded
- New factories established
- Technical skills gained

*Negative*
- Heavy taxation
- Inflation increased
- **Bengal Famine (1943)**: 3 million died
- Agricultural disruption
- Rising prices

**Social Impact**
- Western ideas spread
- Confidence in Indian abilities
- Women entered workforce
- Questioning of British superiority

### Role in Independence

**After WWI**
- India expected self-rule
- Got Rowlatt Act instead
- Led to mass protests, Non-Cooperation

**After WWII**
- Britain economically weak
- Could not hold colonies
- INA trial united Indians
- Independence became inevitable

### Conclusion
World Wars weakened colonial powers and accelerated India's freedom struggle, proving that Indians could match any nation in capability.`
              },
              {
                id: 'hl8-2',
                question: 'Describe the role of Subhash Chandra Bose and INA in the freedom struggle.',
                mnemonic: 'BOSE - Brave leader, Outside help, Singapore HQ, Escape, Azad Hind',
                answer: `### Introduction
Subhash Chandra Bose (1897-1945), known as Netaji, believed in armed struggle for independence. He formed the Indian National Army (INA) to fight British rule.

### Early Life & Congress Career
- Born in Cuttack, Odisha
- ICS qualified (1920), resigned
- Joined Congress, became President twice (1938, 1939)
- Disagreed with Gandhi's methods
- Founded Forward Bloc (1939)

### Great Escape
- House arrest in Calcutta (1941)
- Escaped in disguise
- Traveled through Afghanistan, USSR
- Reached Germany (1941)
- Met Hitler seeking support

### Formation of INA

**Background**
- Captain Mohan Singh formed INA in Malaya
- From Indian POWs captured by Japan
- Bose took over leadership (1943)

**Structure**
| Unit | Named After |
|------|-------------|
| Regiment | Gandhi Brigade |
| Regiment | Azad Brigade |
| Regiment | Nehru Brigade |
| Women's Regiment | Rani Jhansi Regiment |

### Azad Hind Government (1943)
- Provisional Government of Free India
- Capital: Port Blair (later Rangoon)
- Own currency, postal stamps
- Recognized by Axis powers

### Military Campaign

**"Chalo Delhi" March**
- Entered India through Burma (1944)
- Captured Imphal briefly
- Raised Indian flag on Indian soil

**Setbacks**
- Japan losing war
- Supply problems
- Allied counter-offensive

### Significance

**During War**
- Inspired Indians worldwide
- Showed armed resistance possible
- Undermined British authority in army

**After War**
- **INA Trials** united India
- Showed British couldn't trust Indian army
- Major factor in British decision to quit

### Legacy
- "Jai Hind" slogan
- 23 January: Parakram Diwas
- Debate on his death (1945)
- Symbol of courage and sacrifice`
              },
              {
                id: 'hl8-3',
                question: 'Explain the impact of World War II on India.',
                mnemonic: 'IMPACT - Industrial growth, Military expansion, Political awakening, August movement, Communal tensions, Transfer of power',
                answer: `### Introduction
World War II (1939-1945) had far-reaching consequences on India's political, economic, and social life. It ultimately accelerated India's journey towards independence.

### Political Impact

**Congress Response**
| Year | Event |
|------|-------|
| 1939 | Britain declared war on India's behalf without consultation |
| 1939 | Congress ministries resigned in protest |
| 1940 | Individual Satyagraha launched |
| 1942 | Quit India Movement |
| 1942 | All major leaders arrested |

**Muslim League's Gains**
- Jinnah called Congress resignation "Day of Deliverance"
- Lahore Resolution (1940) - demanded Pakistan
- Grew stronger while Congress leaders in jail
- Two-Nation Theory gained support

**British Offers**
- **August Offer (1940)**: Dominion status after war - Rejected
- **Cripps Mission (1942)**: Dominion status, constitution by Indians - Failed
- **Wavell Plan (1945)**: Executive Council reform - Failed
- **Cabinet Mission (1946)**: Three-tier federation - Accepted then rejected

### Economic Impact

**Industrial Growth**
- War industries expanded
- Iron, steel, textiles, chemicals grew
- Indian capitalists profited
- Indigenous entrepreneurs emerged

**Negative Effects**
| Problem | Impact |
|---------|--------|
| Inflation | Prices rose sharply |
| Shortages | Essential goods scarce |
| Rationing | Government controlled supplies |
| Bengal Famine (1943) | 3 million died |

**Military Expenditure**
- India bore huge war expenses
- Sterling balances accumulated
- Britain became debtor to India

### Social Impact

**Military Expansion**
- Indian Army grew from 2 lakh to 25 lakh
- Exposure to world affairs
- Technical skills learned
- Questioning of British authority

**Refugee Crisis**
- Burma refugees fled to India
- Japanese threat to eastern India
- Civilians evacuated from coastal areas

### Quit India Movement (1942)

**Background**
- Cripps Mission failure
- Japanese advance
- Rising discontent

**"Do or Die" Call**
- 8 August 1942: Resolution passed
- Gandhi's call: "Do or Die"
- All leaders arrested next day

**Response**
- Underground movement
- Sabotage of communications
- Parallel governments formed
- Violent suppression by British

### Impact on Freedom Struggle

**Hastened Independence**
- Britain economically exhausted
- Labour Party came to power (1945)
- British public wanted troops home
- Empire became unsustainable

**Changed Dynamics**
- Congress-League divide widened
- INA trials united Indians
- Naval mutiny (1946) alarmed British
- Partition became inevitable

### Conclusion
World War II fundamentally changed India's relationship with Britain. A weakened Britain, combined with intensified nationalist movements and the changed global scenario, made Indian independence inevitable. The war's economic strain on Britain and the political awakening in India set the stage for the transfer of power in 1947.`
              }
            ]
          },
          {
            id: 'his9',
            title: '9. World: Decolonisation',
            description: 'Process of decolonisation in Asia and Africa.',
            summary: '**Asia**: Sri Lanka, Myanmar, Maldives.\n**Africa**: Ghana, Kenya, South Africa.\n**Bandung Conference**: 1955, Afro-Asian Unity.',
            detailedNotes: '### 1. Decolonisation in Asia\n* **Maldives**: British Protectorate (1887). Independence (1965).\n* **Sri Lanka (Ceylon)**: British colony. Independence (4 Feb 1948).\n* **Myanmar (Burma)**: Separated from India (1935). Independence (4 Jan 1948). Leader: Aung San.\n\n### 2. Decolonisation in Africa\n* **Bandung Conference (1955)**: Indonesia. 29 countries. Opposed colonialism. Laid foundation for NAM.\n* **Ghana (Gold Coast)**: First sub-Saharan country to gain independence (1957). Leader: Kwame Nkrumah.\n* **Kenya**: Mau Mau Uprising. Independence (1963). Leader: Jomo Kenyatta.\n* **South Africa**: Struggle against Apartheid. Nelson Mandela (ANC). Democracy in 1994.',
            flashcards: [
              { id: 'f1', front: 'When did Sri Lanka get independence?', back: '1948.' },
              { id: 'f2', front: 'When did Myanmar get independence?', back: '1948.' },
              { id: 'f3', front: 'Who was the leader of Ghana\'s independence?', back: 'Kwame Nkrumah.' },
              { id: 'f4', front: 'Who led Kenya to independence?', back: 'Jomo Kenyatta.' },
              { id: 'f5', front: 'What was the Mau Mau Uprising?', back: 'Anti-colonial revolt in Kenya.' },
              { id: 'f6', front: 'Where was the Asian-African Conference held?', back: 'Bandung (Indonesia) in 1955.' },
              { id: 'f7', front: 'Who was Nelson Mandela?', back: 'Anti-apartheid leader of South Africa.' },
              { id: 'f8', front: 'What is Apartheid?', back: 'Racial segregation policy in South Africa.' },
              { id: 'f9', front: 'When did Maldives become independent?', back: '1965.' },
              { id: 'f10', front: 'Who is called the "Father of Modern Burma"?', back: 'Aung San.' },
              { id: 'f11', front: 'What was Ghana earlier known as?', back: 'Gold Coast.' },
              { id: 'f12', front: 'When did South Africa become democratic?', back: '1994.' },
              { id: 'f13', front: 'Which organization did Mandela lead?', back: 'African National Congress (ANC).' },
              { id: 'f14', front: 'Who hosted the Bandung Conference?', back: 'President Sukarno (Indonesia).' },
              { id: 'f15', front: 'What does NAM stand for?', back: 'Non-Aligned Movement.' },
              { id: 'f16', front: 'Which country colonized Nigeria?', back: 'Britain.' },
              { id: 'f17', front: 'When did Nigeria get independence?', back: '1960.' },
              { id: 'f18', front: 'Who was Patrice Lumumba?', back: 'First PM of Democratic Republic of Congo.' },
              { id: 'f19', front: 'Who was Julius Nyerere?', back: 'First President of Tanzania (Ujamaa socialism).' },
              { id: 'f20', front: 'What was the FLN?', back: 'National Liberation Front of Algeria.' },
              { id: 'f21', front: 'When did Algeria gain independence?', back: '1962 (from France).' },
              { id: 'f22', front: 'Who was Robert Mugabe?', back: 'Leader of Zimbabwe.' },
              { id: 'f23', front: 'What was Rhodesia?', back: 'Former name of Zimbabwe.' },
              { id: 'f24', front: 'When did Vietnam gain independence?', back: '1954 (North) from France, 1975 (united).' },
              { id: 'f25', front: 'Who was Ho Chi Minh?', back: 'Leader of Vietnamese independence.' },
              { id: 'f26', front: 'When did Indonesia gain independence?', back: '1945 (declared), 1949 (recognized).' },
              { id: 'f27', front: 'Who was Sukarno?', back: 'First President of Indonesia.' },
              { id: 'f28', front: 'What was the "Wind of Change" speech?', back: 'British PM Macmillan\'s speech on African independence (1960).' },
              { id: 'f29', front: 'What is Pan-Africanism?', back: 'Movement for African unity and solidarity.' },
              { id: 'f30', front: 'Who was Desmond Tutu?', back: 'South African anti-apartheid activist and Archbishop.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Bandung Conference was held in:', options: ['1947', '1950', '1955', '1961'], correctIndex: 2, explanation: 'In Indonesia.' },
              { id: 'q2', question: 'First African country to get independence:', options: ['Kenya', 'Ghana', 'Nigeria', 'Egypt'], correctIndex: 1, explanation: 'In 1957.' },
              { id: 'q3', question: 'Apartheid was practiced in:', options: ['USA', 'India', 'South Africa', 'UK'], correctIndex: 2, explanation: 'Racial discrimination.' },
              { id: 'q4', question: 'Myanmar became independent in:', options: ['1947', '1948', '1950', '1952'], correctIndex: 1, explanation: 'Jan 4, 1948.' },
              { id: 'q5', question: 'Who was Jomo Kenyatta?', options: ['Leader of Ghana', 'Leader of Kenya', 'Leader of Egypt', 'Leader of Congo'], correctIndex: 1, explanation: 'First President of Kenya.' },
              { id: 'q6', question: 'Nelson Mandela was in prison for:', options: ['10 years', '15 years', '27 years', '30 years'], correctIndex: 2, explanation: 'Robben Island.' },
              { id: 'q7', question: 'Maldives is an island nation in:', options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'], correctIndex: 2, explanation: 'South of India.' },
              { id: 'q8', question: 'Kwame Nkrumah belonged to:', options: ['Kenya', 'Ghana', 'Uganda', 'Tanzania'], correctIndex: 1, explanation: 'Pan-African leader.' },
              { id: 'q9', question: 'Mau Mau uprising took place in:', options: ['Ghana', 'Kenya', 'South Africa', 'Egypt'], correctIndex: 1, explanation: 'Against British rule.' },
              { id: 'q10', question: 'Who became the first Black President of South Africa?', options: ['Desmond Tutu', 'Nelson Mandela', 'Thabo Mbeki', 'Zuma'], correctIndex: 1, explanation: 'In 1994.' },
              { id: 'q11', question: 'Algeria gained independence from:', options: ['Britain', 'France', 'Spain', 'Italy'], correctIndex: 1, explanation: 'After bloody war (1954-1962).' },
              { id: 'q12', question: 'Indonesia was colonized by:', options: ['Britain', 'France', 'Netherlands', 'Portugal'], correctIndex: 2, explanation: 'Dutch East Indies.' },
              { id: 'q13', question: 'Vietnam fought against:', options: ['Britain', 'France then USA', 'Spain', 'Portugal'], correctIndex: 1, explanation: 'Long struggle.' },
              { id: 'q14', question: 'Ho Chi Minh was leader of:', options: ['China', 'Vietnam', 'Korea', 'Cambodia'], correctIndex: 1, explanation: 'Communist leader.' },
              { id: 'q15', question: 'Robben Island is in:', options: ['India', 'Kenya', 'South Africa', 'Egypt'], correctIndex: 2, explanation: 'Where Mandela was imprisoned.' },
              { id: 'q16', question: 'Who gave "Wind of Change" speech?', options: ['Churchill', 'Macmillan', 'Thatcher', 'Attlee'], correctIndex: 1, explanation: 'In Cape Town, 1960.' },
              { id: 'q17', question: 'Congo was a colony of:', options: ['France', 'Belgium', 'Britain', 'Portugal'], correctIndex: 1, explanation: 'Belgian Congo.' },
              { id: 'q18', question: 'Patrice Lumumba was assassinated in:', options: ['1958', '1961', '1965', '1970'], correctIndex: 1, explanation: 'With foreign involvement.' },
              { id: 'q19', question: 'Tanzania was formed by merger of:', options: ['Kenya & Uganda', 'Tanganyika & Zanzibar', 'Ghana & Togo', 'None'], correctIndex: 1, explanation: 'In 1964.' },
              { id: 'q20', question: 'Which country had "Ujamaa" socialism?', options: ['Ghana', 'Kenya', 'Tanzania', 'Egypt'], correctIndex: 2, explanation: 'Under Nyerere.' },
              { id: 'q21', question: 'Rhodesia became:', options: ['Zambia', 'Zimbabwe', 'Malawi', 'Botswana'], correctIndex: 1, explanation: 'After independence struggle.' },
              { id: 'q22', question: 'Robert Mugabe led:', options: ['Kenya', 'South Africa', 'Zimbabwe', 'Nigeria'], correctIndex: 2, explanation: 'ZANU party.' },
              { id: 'q23', question: 'First Asian country to be colonized was:', options: ['India', 'Indonesia', 'Philippines', 'Vietnam'], correctIndex: 2, explanation: 'By Spain.' },
              { id: 'q24', question: 'Last African country to gain independence:', options: ['South Africa', 'Namibia', 'Zimbabwe', 'Angola'], correctIndex: 1, explanation: 'In 1990.' },
              { id: 'q25', question: 'Organisation of African Unity was formed in:', options: ['1960', '1963', '1970', '1975'], correctIndex: 1, explanation: 'Now African Union.' },
              { id: 'q26', question: 'Which country had "Negritude" movement?', options: ['Nigeria', 'Senegal', 'Ghana', 'Kenya'], correctIndex: 1, explanation: 'Leopold Senghor.' },
              { id: 'q27', question: 'Who was Desmond Tutu?', options: ['Politician', 'Archbishop', 'General', 'Writer'], correctIndex: 1, explanation: 'Anti-apartheid leader.' },
              { id: 'q28', question: 'Truth and Reconciliation Commission was in:', options: ['Kenya', 'Zimbabwe', 'South Africa', 'Nigeria'], correctIndex: 2, explanation: 'After apartheid ended.' },
              { id: 'q29', question: 'Suez Crisis was in:', options: ['1952', '1956', '1960', '1967'], correctIndex: 1, explanation: 'Egypt vs Britain, France, Israel.' },
              { id: 'q30', question: 'Who nationalized Suez Canal?', options: ['Nkrumah', 'Nasser', 'Mandela', 'Sukarno'], correctIndex: 1, explanation: 'Gamal Abdel Nasser of Egypt.' }
            ],
            reels: [
              { id: 'r1', title: 'Bandung 1955', content: 'Afro-Asian Unity.\nNo to Colonies.\nThird World.', color: getReelColor(0) },
              { id: 'r2', title: 'Kwame Nkrumah', content: 'Ghana Free.\nPan-Africanism.\nLeader.', color: getReelColor(1) },
              { id: 'r3', title: 'Jomo Kenyatta', content: 'Kenya Free.\nMau Mau.\nFather of Nation.', color: getReelColor(2) },
              { id: 'r4', title: 'Nelson Mandela', content: '27 Years Jail.\nNo Apartheid.\nRainbow Nation.', color: getReelColor(3) },
              { id: 'r5', title: 'Aung San', content: 'Burma Hero.\nAssassinated.\nFreedom.', color: getReelColor(4) },
              { id: 'r6', title: 'Apartheid', content: 'Racism.\nSegregation.\nEnded 1994.', color: getReelColor(5) },
              { id: 'r7', title: 'Sri Lanka', content: 'Ceylon.\n1948.\nIsland Nation.', color: getReelColor(6) },
              { id: 'r8', title: 'Maldives', content: 'Islands.\nBritish Base.\n1965.', color: getReelColor(7) },
              { id: 'r9', title: 'NAM Roots', content: 'Neutrality.\nPeace.\nCooperation.', color: getReelColor(8) },
              { id: 'r10', title: 'Freedom', content: 'Chains broken.\nNew Flags.\nSelf Rule.', color: getReelColor(9) },
              { id: 'r11', title: 'Algeria', content: 'Bloody War.\nFrance out.\n1962.', color: getReelColor(0) },
              { id: 'r12', title: 'Vietnam', content: 'Ho Chi Minh.\nLong struggle.\nUnited 1975.', color: getReelColor(1) },
              { id: 'r13', title: 'Indonesia', content: 'Sukarno.\nDutch out.\n1949.', color: getReelColor(2) },
              { id: 'r14', title: 'Congo', content: 'Lumumba.\nBelgian colony.\nChaos.', color: getReelColor(3) },
              { id: 'r15', title: 'Nigeria', content: 'Biggest Africa.\nBritish.\n1960.', color: getReelColor(4) },
              { id: 'r16', title: 'Tanzania', content: 'Nyerere.\nUjamaa.\nSocialism.', color: getReelColor(5) },
              { id: 'r17', title: 'Zimbabwe', content: 'Rhodesia.\nMugabe.\nStruggle.', color: getReelColor(6) },
              { id: 'r18', title: 'Namibia', content: 'Last colony.\n1990.\nSWAPO.', color: getReelColor(7) },
              { id: 'r19', title: 'OAU', content: 'African Unity.\n1963.\nNow AU.', color: getReelColor(8) },
              { id: 'r20', title: 'Suez Crisis', content: 'Nasser.\n1956.\nCanal.', color: getReelColor(9) },
              { id: 'r21', title: 'Wind of Change', content: 'Macmillan.\nBritish acceptance.\nAfrica free.', color: getReelColor(0) },
              { id: 'r22', title: 'Robben Island', content: 'Prison.\nMandela.\n27 years.', color: getReelColor(1) },
              { id: 'r23', title: 'Truth Commission', content: 'Reconciliation.\nHealing.\nSouth Africa.', color: getReelColor(2) },
              { id: 'r24', title: 'Desmond Tutu', content: 'Archbishop.\nPeace.\nNobel Prize.', color: getReelColor(3) },
              { id: 'r25', title: 'Pan-Africanism', content: 'Unity.\nIdentity.\nPride.', color: getReelColor(4) },
              { id: 'r26', title: 'Negritude', content: 'Black pride.\nSenghor.\nCulture.', color: getReelColor(5) },
              { id: 'r27', title: 'Third World', content: 'Non-aligned.\nDeveloping.\nBandung.', color: getReelColor(6) },
              { id: 'r28', title: 'Neo-colonialism', content: 'Economic control.\nNew chains.\nOngoing.', color: getReelColor(7) },
              { id: 'r29', title: 'African Union', content: 'Replaced OAU.\n2002.\nContinental body.', color: getReelColor(8) },
              { id: 'r30', title: 'Legacy', content: 'Free nations.\nChallenges remain.\nHope.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl9-1',
                question: 'Explain the process of decolonisation in Africa with special reference to Ghana and South Africa.',
                mnemonic: 'AFRICA FREE - African nationalism, Freedom fighters, Resistance, Independence, Colonialism ended, Apartheid fell',
                answer: `### Introduction
Decolonisation is the process by which colonies gained independence from European powers. Africa's struggle was particularly intense due to exploitation and racism.

### Ghana - First Sub-Saharan African Nation to Gain Independence

**Background**
- Known as Gold Coast (British colony)
- Rich in gold, cocoa
- Educated elite emerged

**Freedom Movement**
- **Kwame Nkrumah**: Leader of independence movement
- United Gold Coast Convention (UGCC)
- Later formed Convention People's Party (CPP)
- Slogan: "Self-Government Now"
- Organized strikes and boycotts

**Independence**
- Date: 6 March 1957
- First Prime Minister: Kwame Nkrumah
- Changed name to Ghana
- Inspired all African nations

### South Africa - Struggle Against Apartheid

**Apartheid System (1948-1994)**
| Feature | Description |
|---------|-------------|
| Definition | Racial segregation policy |
| Pass Laws | Blacks needed passes to move |
| Bantustans | Separate homelands for Blacks |
| Separate Amenities | Separate facilities by race |

**African National Congress (ANC)**
- Founded: 1912
- Fought for Black rights
- Initially non-violent
- Later armed resistance (Umkhonto we Sizwe)

**Nelson Mandela**
- Joined ANC (1944)
- Led Defiance Campaign
- Arrested (1962)
- **Rivonia Trial**: Sentenced to life imprisonment
- 27 years on Robben Island
- Symbol of anti-apartheid struggle

**End of Apartheid**
- International sanctions hurt South Africa
- F.W. de Klerk released Mandela (1990)
- Negotiations began
- First democratic elections: 1994
- Mandela became President

### Significance
- End of racism in Africa
- Truth and Reconciliation Commission
- Model for peaceful transition
- Rainbow Nation concept`
              },
              {
                id: 'hl9-2',
                question: 'Describe the Bandung Conference and its significance.',
                mnemonic: 'BANDUNG - Brotherhood, Asian-African unity, Non-alignment, Decolonisation, Unity, New world, Guidance',
                answer: `### Introduction
The Bandung Conference (1955) was a historic gathering of Asian and African nations, marking the first major assertion of Third World solidarity.

### Background

**Context**
- Cold War dividing world into two blocs
- Many nations recently independent
- Colonialism still existing in parts of Africa
- Need for collective voice

**Organizers**
- Indonesia, India, Burma, Ceylon, Pakistan (Colombo Powers)
- Initiative by Indonesian President Sukarno

### The Conference

**Details**
| Aspect | Information |
|--------|-------------|
| Date | 18-24 April 1955 |
| Place | Bandung, Indonesia |
| Participants | 29 countries |
| Theme | Afro-Asian Solidarity |

**Key Leaders Present**
- Jawaharlal Nehru (India)
- Zhou Enlai (China)
- Gamal Abdel Nasser (Egypt)
- Sukarno (Indonesia)
- U Nu (Burma)

### Ten Principles of Bandung

1. Respect for fundamental human rights
2. Respect for sovereignty and territorial integrity
3. Recognition of equality of all races
4. Non-intervention in internal affairs
5. Right of self-defense
6. Refusal to use collective defense for big powers
7. Refrain from aggression
8. Peaceful settlement of disputes
9. Promote mutual interests and cooperation
10. Respect for justice and international obligations

### Significance

**Political**
- First major Afro-Asian gathering
- Challenged Euro-centric world order
- Gave voice to colonized peoples
- Foundation for Non-Aligned Movement (NAM)

**Anti-Colonial**
- Strong condemnation of colonialism
- Supported independence movements
- Moral boost to freedom fighters

**Economic**
- Called for economic cooperation
- South-South cooperation concept
- Development agenda

### Legacy
- Led to Belgrade Conference (1961) and NAM
- Spirit of Bandung still invoked
- Symbol of Third World unity
- Beginning of Global South solidarity`
              },
              {
                id: 'hl9-3',
                question: 'Describe the process of decolonization in Africa with special reference to South Africa.',
                mnemonic: 'AFRICA FREE - Anti-colonial, Fight for rights, Racial equality, Independence, Colonialism ended, Apartheid, Freedom, Resistance, Elections, Equality achieved',
                answer: `### Introduction
Decolonization in Africa was a long and complex process. While most African nations gained independence in the 1950s-60s, South Africa's struggle against Apartheid continued until 1994.

### Decolonization Timeline

**Early Independence**
| Country | Year | Colonial Power | Leader |
|---------|------|----------------|--------|
| Ghana | 1957 | Britain | Kwame Nkrumah |
| Guinea | 1958 | France | Sekou Toure |
| Nigeria | 1960 | Britain | Nnamdi Azikiwe |
| Tanzania | 1961 | Britain | Julius Nyerere |
| Kenya | 1963 | Britain | Jomo Kenyatta |

**Year of Africa (1960)**
- 17 African countries gained independence
- Symbol of rapid decolonization
- UN membership increased

### South Africa: A Special Case

**Background**
- Union of South Africa (1910) - Dominion status
- White minority rule over Black majority
- Racial segregation policies

**Apartheid (1948-1994)**
- Meaning: "Separateness" in Afrikaans
- System of racial segregation
- Implemented by National Party

### Apartheid Laws

| Law | Provision |
|-----|-----------|
| Population Registration Act | Classified by race |
| Group Areas Act | Separate residential areas |
| Pass Laws | Blacks required to carry passes |
| Bantu Education Act | Inferior education for Blacks |
| Mixed Marriages Act | Interracial marriage banned |

### Resistance to Apartheid

**African National Congress (ANC)**
- Founded: 1912
- Initially: Peaceful protests, petitions
- Key leaders: Walter Sisulu, Oliver Tambo, Nelson Mandela

**Turning Points**
- **1960 Sharpeville Massacre**: Police killed 69 peaceful protesters
- ANC banned, went underground
- Armed wing "Umkhonto we Sizwe" formed (1961)
- Mandela arrested (1962), life sentence (1964)

**International Response**
- UN condemned Apartheid
- Economic sanctions imposed
- Sports boycotts (banned from Olympics)
- Cultural boycotts

### End of Apartheid

**Factors Leading to Change**
- International pressure
- Economic sanctions hurting economy
- Internal resistance growing
- New President F.W. de Klerk's reforms

**Process**
| Year | Event |
|------|-------|
| 1990 | Mandela released after 27 years |
| 1990 | ANC unbanned |
| 1991 | Apartheid laws repealed |
| 1993 | Mandela & de Klerk: Nobel Peace Prize |
| 1994 | First democratic elections |

### Nelson Mandela's Legacy

**Achievements**
- First Black President (1994-1999)
- Truth and Reconciliation Commission
- Rainbow Nation concept
- Forgiveness over revenge

**Global Symbol**
- Icon of anti-racism struggle
- Inspired movements worldwide
- Madiba: Beloved father figure

### Significance

**For Africa**
- End of white minority rule
- Inspiration for human rights movements
- Economic recovery began

**For World**
- Showed peaceful transition possible
- Model for conflict resolution
- Power of international solidarity

### Conclusion
The decolonization of Africa and the end of Apartheid in South Africa represent humanity's triumph over colonialism and racism. Nelson Mandela's example of forgiveness and reconciliation remains a beacon for conflict resolution worldwide.`
              }
            ]
          },
          {
            id: 'his10',
            title: '10. Cold War',
            description: 'Ideological conflict between USA and USSR.',
            summary: '**Cold War**: USA vs USSR.\n**Alliances**: NATO, Warsaw Pact, SEATO, CENTO.\n**NAM**: Non-Aligned Movement.\n**Organizations**: Commonwealth, SAARC.',
            detailedNotes: '### 1. Cold War (1945-1991)\n* **Definition**: State of political hostility without direct military conflict.\n* **Blocks**: \n    * **Capitalist**: USA (NATO).\n    * **Communist**: USSR (Warsaw Pact).\n* **Proxy Wars**: Korea, Vietnam, Afghanistan.\n\n### 2. Military Alliances\n* **NATO (1949)**: North Atlantic Treaty Organization. Attack on one is attack on all.\n* **Warsaw Pact (1955)**: Counter to NATO by USSR.\n* **SEATO (1954)**: South East Asia Treaty Organization.\n* **CENTO (1955)**: Central Treaty Organization (Baghdad Pact).\n\n### 3. Non-Aligned Movement (NAM)\n* **Founders**: Nehru (India), Tito (Yugoslavia), Nasser (Egypt), Sukarno (Indonesia), Nkrumah (Ghana).\n* **Principles**: Panchsheel, Peace, Independence, No military blocs.\n* **First Summit**: Belgrade (1961).\n\n### 4. Commonwealth of Nations\n* Association of former British colonies.\n* **Head**: British Monarch (Symbolic).\n* **Aim**: Democracy, Human Rights, Development.\n\n### 5. SAARC\n* **Full Form**: South Asian Association for Regional Cooperation.\n* **Established**: 1985 in Dhaka.\n* **Members**: India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Maldives, Afghanistan (joined later).\n* **HQ**: Kathmandu, Nepal.',
            flashcards: [
              { id: 'f1', front: 'What is Cold War?', back: 'Ideological war between USA and USSR.' },
              { id: 'f2', front: 'When was NATO formed?', back: '1949.' },
              { id: 'f3', front: 'When was Warsaw Pact formed?', back: '1955.' },
              { id: 'f4', front: 'Who were the founders of NAM?', back: 'Nehru, Tito, Nasser, Sukarno, Nkrumah.' },
              { id: 'f5', front: 'Where was the first NAM summit held?', back: 'Belgrade (1961).' },
              { id: 'f6', front: 'When was SAARC established?', back: '1985.' },
              { id: 'f7', front: 'Where is the HQ of SAARC?', back: 'Kathmandu, Nepal.' },
              { id: 'f8', front: 'What does SEATO stand for?', back: 'South East Asia Treaty Organization.' },
              { id: 'f9', front: 'What does CENTO stand for?', back: 'Central Treaty Organization.' },
              { id: 'f10', front: 'Which country joined SAARC last?', back: 'Afghanistan (2007).' },
              { id: 'f11', front: 'What is the Commonwealth?', back: 'Group of former British colonies.' },
              { id: 'f12', front: 'Who coined the term "Cold War"?', back: 'Bernard Baruch / Walter Lippmann.' },
              { id: 'f13', front: 'When did the Cold War end?', back: '1991 (Collapse of USSR).' },
              { id: 'f14', front: 'What is the "Iron Curtain"?', back: 'Boundary dividing Europe (Churchill\'s term).' },
              { id: 'f15', front: 'What are the Panchsheel principles?', back: 'Five principles of peaceful coexistence.' },
              { id: 'f16', front: 'What was the Korean War?', back: 'War between North (Communist) and South Korea (1950-53).' },
              { id: 'f17', front: 'What was the Vietnam War?', back: 'USA vs North Vietnam (1955-75), USA lost.' },
              { id: 'f18', front: 'Who was President during Cuban Missile Crisis?', back: 'John F. Kennedy (USA).' },
              { id: 'f19', front: 'Who was Soviet leader during Cuban Crisis?', back: 'Nikita Khrushchev.' },
              { id: 'f20', front: 'When was USSR dissolved?', back: '1991.' },
              { id: 'f21', front: 'Who was the last Soviet leader?', back: 'Mikhail Gorbachev.' },
              { id: 'f22', front: 'What was Glasnost?', back: 'Openness policy by Gorbachev.' },
              { id: 'f23', front: 'What was Perestroika?', back: 'Restructuring policy by Gorbachev.' },
              { id: 'f24', front: 'When was Sputnik launched?', back: '1957 (first artificial satellite).' },
              { id: 'f25', front: 'Who was the first man in space?', back: 'Yuri Gagarin (USSR, 1961).' },
              { id: 'f26', front: 'Who was the first man on moon?', back: 'Neil Armstrong (USA, 1969).' },
              { id: 'f27', front: 'What was the Marshall Plan?', back: 'US economic aid to rebuild Europe after WWII.' },
              { id: 'f28', front: 'What was the Truman Doctrine?', back: 'US policy to contain communism.' },
              { id: 'f29', front: 'What is MAD?', back: 'Mutually Assured Destruction (nuclear deterrence).' },
              { id: 'f30', front: 'When did China become communist?', back: '1949 (under Mao Zedong).' }
            ],
            mcqs: [
              { id: 'q1', question: 'NATO is a military alliance led by:', options: ['USSR', 'USA', 'UK', 'France'], correctIndex: 1, explanation: 'Capitalist bloc.' },
              { id: 'q2', question: 'Warsaw Pact was led by:', options: ['USA', 'China', 'USSR', 'Germany'], correctIndex: 2, explanation: 'Communist bloc.' },
              { id: 'q3', question: 'First NAM summit was held in:', options: ['Delhi', 'Cairo', 'Belgrade', 'Jakarta'], correctIndex: 2, explanation: 'Yugoslavia, 1961.' },
              { id: 'q4', question: 'SAARC was established in:', options: ['1980', '1985', '1990', '1995'], correctIndex: 1, explanation: 'Dec 8, 1985.' },
              { id: 'q5', question: 'Headquarters of SAARC is in:', options: ['Dhaka', 'Delhi', 'Kathmandu', 'Colombo'], correctIndex: 2, explanation: 'Nepal.' },
              { id: 'q6', question: 'Which is NOT a member of SAARC?', options: ['India', 'China', 'Pakistan', 'Bhutan'], correctIndex: 1, explanation: 'China is an observer.' },
              { id: 'q7', question: 'The Berlin Wall fell in:', options: ['1985', '1989', '1991', '1995'], correctIndex: 1, explanation: 'Symbol of Cold War end.' },
              { id: 'q8', question: 'Cuban Missile Crisis happened in:', options: ['1960', '1962', '1965', '1970'], correctIndex: 1, explanation: 'Peak of Cold War.' },
              { id: 'q9', question: 'Who was the first Secretary General of SAARC?', options: ['Abul Ahsan', 'Kofi Annan', 'Ban Ki-moon', 'None'], correctIndex: 0, explanation: 'From Bangladesh.' },
              { id: 'q10', question: 'Commonwealth Day is celebrated in:', options: ['March', 'May', 'August', 'December'], correctIndex: 0, explanation: 'Second Monday of March.' },
              { id: 'q11', question: 'Korean War started in:', options: ['1948', '1950', '1955', '1960'], correctIndex: 1, explanation: 'June 1950.' },
              { id: 'q12', question: 'Vietnam War ended in:', options: ['1970', '1973', '1975', '1980'], correctIndex: 2, explanation: 'Fall of Saigon.' },
              { id: 'q13', question: 'Sputnik was launched by:', options: ['USA', 'USSR', 'China', 'UK'], correctIndex: 1, explanation: '1957.' },
              { id: 'q14', question: 'First man in space was:', options: ['Neil Armstrong', 'Yuri Gagarin', 'John Glenn', 'Buzz Aldrin'], correctIndex: 1, explanation: 'Soviet cosmonaut, 1961.' },
              { id: 'q15', question: 'Moon landing was in:', options: ['1965', '1967', '1969', '1971'], correctIndex: 2, explanation: 'Apollo 11.' },
              { id: 'q16', question: 'Marshall Plan was for:', options: ['Asia', 'Europe', 'Africa', 'South America'], correctIndex: 1, explanation: 'Economic reconstruction.' },
              { id: 'q17', question: 'Truman Doctrine was to:', options: ['Spread communism', 'Contain communism', 'End colonialism', 'Promote trade'], correctIndex: 1, explanation: 'Containment policy.' },
              { id: 'q18', question: 'USSR dissolved in:', options: ['1989', '1990', '1991', '1992'], correctIndex: 2, explanation: 'December 1991.' },
              { id: 'q19', question: 'Gorbachev introduced:', options: ['Collectivization', 'Great Leap', 'Glasnost', 'Cultural Revolution'], correctIndex: 2, explanation: 'And Perestroika.' },
              { id: 'q20', question: 'China became communist in:', options: ['1945', '1949', '1955', '1960'], correctIndex: 1, explanation: 'Under Mao.' },
              { id: 'q21', question: 'Iron Curtain speech was by:', options: ['Truman', 'Churchill', 'Stalin', 'Eisenhower'], correctIndex: 1, explanation: 'At Fulton, Missouri (1946).' },
              { id: 'q22', question: 'Bay of Pigs invasion was in:', options: ['Cuba', 'Vietnam', 'Korea', 'Berlin'], correctIndex: 0, explanation: 'Failed US attempt (1961).' },
              { id: 'q23', question: 'Berlin Airlift was in:', options: ['1945', '1948-49', '1961', '1989'], correctIndex: 1, explanation: 'To supply West Berlin.' },
              { id: 'q24', question: 'Berlin Wall was built in:', options: ['1949', '1955', '1961', '1975'], correctIndex: 2, explanation: 'To stop emigration to West.' },
              { id: 'q25', question: 'MAD stands for:', options: ['Military Action Division', 'Mutually Assured Destruction', 'Modern Arms Development', 'None'], correctIndex: 1, explanation: 'Nuclear deterrence concept.' },
              { id: 'q26', question: 'Who was JFK?', options: ['Soviet leader', 'US President', 'British PM', 'Chinese leader'], correctIndex: 1, explanation: 'John F. Kennedy.' },
              { id: 'q27', question: 'Proxy wars were fought in:', options: ['Europe only', 'Asia, Africa, Latin America', 'North America', 'Australia'], correctIndex: 1, explanation: 'Third World countries.' },
              { id: 'q28', question: 'Afghanistan was invaded by USSR in:', options: ['1975', '1979', '1985', '1989'], correctIndex: 1, explanation: 'Soviet-Afghan War.' },
              { id: 'q29', question: 'Solidarity movement was in:', options: ['Hungary', 'Czechoslovakia', 'Poland', 'Romania'], correctIndex: 2, explanation: 'Led by Lech Walesa.' },
              { id: 'q30', question: 'Who was Ronald Reagan?', options: ['Soviet leader', 'US President', 'British PM', 'German Chancellor'], correctIndex: 1, explanation: 'During late Cold War.' }
            ],
            reels: [
              { id: 'r1', title: 'Cold War', content: 'USA vs USSR.\nNo Guns.\nSpies & Space.', color: getReelColor(0) },
              { id: 'r2', title: 'NATO', content: 'Western Alliance.\nDefend Europe.\nUSA Lead.', color: getReelColor(1) },
              { id: 'r3', title: 'Warsaw Pact', content: 'Eastern Alliance.\nIron Curtain.\nUSSR Lead.', color: getReelColor(2) },
              { id: 'r4', title: 'NAM', content: 'Neutral.\nPeace.\nThird Way.', color: getReelColor(3) },
              { id: 'r5', title: 'Nehru & Tito', content: 'Friends.\nFounders of NAM.\nVisionaries.', color: getReelColor(4) },
              { id: 'r6', title: 'SAARC', content: 'South Asia.\nCooperation.\nRegional Growth.', color: getReelColor(5) },
              { id: 'r7', title: 'Berlin Wall', content: 'Divided City.\nFell 1989.\nFreedom.', color: getReelColor(6) },
              { id: 'r8', title: 'Space Race', content: 'Sputnik.\nApollo 11.\nMoon Landing.', color: getReelColor(7) },
              { id: 'r9', title: 'Cuban Crisis', content: 'Missiles.\nNuclear Threat.\nClose Call.', color: getReelColor(8) },
              { id: 'r10', title: 'End of War', content: 'USSR Breaks.\n1991.\nNew World Order.', color: getReelColor(9) },
              { id: 'r11', title: 'Korean War', content: '1950-53.\nDivided Korea.\nProxy War.', color: getReelColor(0) },
              { id: 'r12', title: 'Vietnam War', content: 'USA vs North.\n1975 End.\nCommunist Win.', color: getReelColor(1) },
              { id: 'r13', title: 'Yuri Gagarin', content: 'First in Space.\nSoviet.\n1961.', color: getReelColor(2) },
              { id: 'r14', title: 'Neil Armstrong', content: 'Moon Walk.\n1969.\nOne small step.', color: getReelColor(3) },
              { id: 'r15', title: 'Marshall Plan', content: 'US Aid.\nRebuild Europe.\nContain USSR.', color: getReelColor(4) },
              { id: 'r16', title: 'Iron Curtain', content: 'Churchill coined.\nEast vs West.\nDivided Europe.', color: getReelColor(5) },
              { id: 'r17', title: 'Gorbachev', content: 'Last Soviet.\nGlasnost.\nReformer.', color: getReelColor(6) },
              { id: 'r18', title: 'Mao Zedong', content: 'Red China.\n1949.\nCommunist.', color: getReelColor(7) },
              { id: 'r19', title: 'Kennedy', content: 'JFK.\nCuban Crisis.\nAssassinated.', color: getReelColor(8) },
              { id: 'r20', title: 'Reagan', content: 'Star Wars.\nAnti-Soviet.\nEnd of Cold War.', color: getReelColor(9) },
              { id: 'r21', title: 'Bay of Pigs', content: 'Cuba 1961.\nUS Failure.\nEmbarrassment.', color: getReelColor(0) },
              { id: 'r22', title: 'Berlin Airlift', content: '1948-49.\nSupply city.\nWest wins.', color: getReelColor(1) },
              { id: 'r23', title: 'Afghanistan', content: 'Soviet invasion.\n1979-89.\nUSSR defeat.', color: getReelColor(2) },
              { id: 'r24', title: 'Solidarity', content: 'Poland.\nWalesa.\nFreedom.', color: getReelColor(3) },
              { id: 'r25', title: 'MAD', content: 'Nuclear deterrence.\nBalance of Terror.\nNo war.', color: getReelColor(4) },
              { id: 'r26', title: 'Proxy Wars', content: 'Superpowers fight.\nThird World.\nDevastation.', color: getReelColor(5) },
              { id: 'r27', title: 'Truman Doctrine', content: 'Containment.\nStop communism.\n1947.', color: getReelColor(6) },
              { id: 'r28', title: 'Panchsheel', content: 'Five Principles.\nIndia-China.\nPeace.', color: getReelColor(7) },
              { id: 'r29', title: 'Commonwealth', content: 'British legacy.\n54 Nations.\nCooperation.', color: getReelColor(8) },
              { id: 'r30', title: '1991', content: 'USSR ends.\nCold War over.\nNew Era.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl10-1',
                question: 'Explain the Cold War and its impact on world politics.',
                mnemonic: 'COLD WAR - Capitalism vs Communism, Organizations (NATO/Warsaw), Local proxy wars, Division of world',
                answer: `### Introduction
The Cold War (1945-1991) was an ideological, political, and economic conflict between the USA and USSR without direct military confrontation.

### Causes

**Ideological Differences**
| USA (Capitalist) | USSR (Communist) |
|------------------|------------------|
| Free market economy | State-controlled economy |
| Multi-party democracy | One-party state |
| Individual freedom | Collective good |
| Private property | State ownership |

**Post-WWII Factors**
- Division of Germany and Europe
- Soviet expansion in Eastern Europe
- Atomic bomb monopoly (initially US)
- Mutual suspicion and distrust

### Features of Cold War

**Military Alliances**
- NATO (1949): Western alliance led by USA
- Warsaw Pact (1955): Eastern alliance led by USSR
- Arms race: Nuclear weapons stockpiling

**Proxy Wars**
| War | Period | Result |
|-----|--------|--------|
| Korean War | 1950-53 | Division of Korea |
| Vietnam War | 1955-75 | Communist victory |
| Afghan War | 1979-89 | Soviet withdrawal |

**Space Race**
- Sputnik (1957): First satellite (USSR)
- Moon landing (1969): First man on moon (USA)

### Impact on World Politics

**Division of World**
- Iron Curtain divided Europe
- Third World caught between blocs
- Berlin Wall symbol of division

**Non-Aligned Movement**
- India, Yugoslavia, Egypt led
- Third option for new nations
- Promoted peace and neutrality

**End of Cold War**
- Gorbachev's reforms (Glasnost, Perestroika)
- Fall of Berlin Wall (1989)
- Dissolution of USSR (1991)
- US emerged as sole superpower

### Legacy
- UN remains important
- Regional conflicts continue
- Nuclear proliferation concerns
- New world order debates`
              },
              {
                id: 'hl10-2',
                question: 'Describe the Non-Aligned Movement and India\'s role in it.',
                mnemonic: 'NAM INDIA - Neutral position, Afro-Asian solidarity, Moral leadership, Independence, Nehru founder, Development focus, Anti-colonialism',
                answer: `### Introduction
The Non-Aligned Movement (NAM) was formed during Cold War as an alternative to joining either USA-led or USSR-led blocs.

### Formation

**Background**
- Cold War divided world
- New nations didn't want to join either bloc
- Need for independent voice

**Founders**
| Leader | Country |
|--------|---------|
| Jawaharlal Nehru | India |
| Josip Broz Tito | Yugoslavia |
| Gamal Abdel Nasser | Egypt |
| Sukarno | Indonesia |
| Kwame Nkrumah | Ghana |

**First Summit**: Belgrade, Yugoslavia (1961)

### Principles of NAM

**Five Principles (Panchsheel)**
1. Mutual respect for sovereignty
2. Non-aggression
3. Non-interference in internal affairs
4. Equality and mutual benefit
5. Peaceful coexistence

**Core Values**
- No military alliances with superpowers
- Anti-colonialism and anti-imperialism
- Economic development
- Peaceful settlement of disputes

### India's Role

**Nehru's Vision**
- Architect of NAM ideology
- Promoted Panchsheel (1954)
- Hosted Bandung Conference delegates
- Voice of developing world

**Key Contributions**

| Period | Action |
|--------|--------|
| 1950s | Panchsheel, anti-colonialism |
| 1960s | Kashmir mediation offers |
| 1970s | Support for liberation movements |
| 1980s | Indira Gandhi's leadership |
| 1990s | Economic focus |
| 2000s | South-South cooperation |

**NAM Summits in India**
- New Delhi (1983): Indira Gandhi as Chair
- New Delhi (2024): Ministerial conference

### Significance

**For Developing World**
- United voice in UN
- Focus on development
- South-South cooperation

**For India**
- Enhanced global standing
- Diplomatic flexibility
- Leadership role in Global South

### Challenges Today
- Cold War ended
- Relevance questioned
- Economic focus needed
- Climate change cooperation`
              },
              {
                id: 'hl10-3',
                question: 'Explain the Cold War and its impact on international relations.',
                mnemonic: 'COLD WAR - Capitalism vs Communism, Opposition without direct war, Loose alliances, Division of world, Weapons race, Arms buildup, Rivalry',
                answer: `### Introduction
The Cold War (1947-1991) was a period of political and military tension between the Western bloc (led by USA) and Eastern bloc (led by USSR) without direct military conflict between the superpowers.

### Origin of Cold War

**Causes**
| Factor | Description |
|--------|-------------|
| Ideological | Capitalism vs Communism |
| Political | Democracy vs Dictatorship |
| Economic | Free market vs State control |
| Power | Superpowers competing for dominance |

**Key Events Leading to Cold War**
- Yalta Conference (1945): Disagreements over Europe
- Iron Curtain Speech (1946): Churchill warned of Soviet expansion
- Truman Doctrine (1947): Containment of Communism
- Marshall Plan (1948): Economic aid to Europe

### Military Alliances

**NATO (1949)**
- North Atlantic Treaty Organization
- Led by USA
- 12 founding members
- Collective defense: Attack on one = Attack on all

**Warsaw Pact (1955)**
- Counter to NATO
- Led by USSR
- Eastern European nations
- Dissolved in 1991

**Other Alliances**
| Alliance | Region | Members |
|----------|--------|---------|
| SEATO | Southeast Asia | USA, UK, France, etc. |
| CENTO | Middle East | UK, Turkey, Iran, Pakistan |
| ANZUS | Pacific | Australia, NZ, USA |

### Major Cold War Events

**Crises**
- Berlin Blockade (1948-49)
- Korean War (1950-53)
- Cuban Missile Crisis (1962)
- Vietnam War (1955-75)
- Afghan War (1979-89)

**Arms Race**
- Nuclear weapons stockpiling
- Space race (Sputnik, Moon landing)
- SDI "Star Wars" program
- Mutual Assured Destruction (MAD)

**Détente Period (1970s)**
- Easing of tensions
- SALT I & II treaties
- Helsinki Accords (1975)
- Trade and cultural exchanges

### Impact on International Relations

**Division of World**
| Aspect | USA Bloc | USSR Bloc |
|--------|----------|-----------|
| Ideology | Capitalism | Communism |
| Government | Democracy | One-party |
| Economy | Free market | State-planned |
| Examples | Western Europe, Japan | Eastern Europe, Cuba |

**Third World Impact**
- Proxy wars in developing countries
- Aid linked to allegiance
- Arms supplied to allies
- Coup d'états supported

**On India**
- Remained non-aligned
- NAM leadership
- Received aid from both blocs
- 1971: Treaty with USSR

### End of Cold War

**Factors**
- Soviet economic crisis
- Gorbachev's reforms (Glasnost, Perestroika)
- Fall of Berlin Wall (1989)
- Eastern European revolutions

**Final Events**
| Year | Event |
|------|-------|
| 1989 | Berlin Wall falls |
| 1990 | Germany reunified |
| 1991 | Warsaw Pact dissolved |
| 1991 | USSR disintegrates |

### Legacy

**Positive**
- UN strengthened post-Cold War
- Arms control treaties
- Regional cooperation increased
- Decolonization accelerated

**Negative**
- Proxy war devastation
- Nuclear proliferation
- Regional conflicts
- Economic disparities

### Conclusion
The Cold War shaped international relations for nearly half a century. While it never escalated to direct warfare between superpowers, it led to numerous proxy conflicts and divided the world. Its end marked the beginning of a new world order with USA as the sole superpower.`
              }
            ]
          },
          {
            id: 'his11',
            title: '11. India Transformed - Part 1',
            description: 'Progress in Science, Technology, Defence and Foreign Policy.',
            summary: '**Foreign Policy**: NAM, Panchsheel.\n**Defence**: DRDO, Missiles (Agni, Prithvi), Nuclear Tests (Pokhran).\n**Space**: ISRO, Aryabhata, Chandrayaan.\n**Revolutions**: Green (Agri), White (Milk).',
            detailedNotes: '### 1. Foreign Policy\n* **Architect**: Jawaharlal Nehru.\n* **Principles**: Panchsheel (1954), Non-Alignment, Anti-Colonialism.\n* **Look East Policy**: P.V. Narasimha Rao (1991).\n\n### 2. Defence\n* **DRDO**: Defence Research and Development Organisation (1958).\n* **IGMDP**: Integrated Guided Missile Development Programme (Dr. APJ Abdul Kalam).\n    * **Missiles**: Prithvi (Surface-to-Surface), Agni (Ballistic), Akash (Surface-to-Air), Nag (Anti-Tank), Trishul.\n* **Nuclear Tests**:\n    * **Pokhran-I (1974)**: "Smiling Buddha". PM Indira Gandhi.\n    * **Pokhran-II (1998)**: "Operation Shakti". PM Vajpayee.\n\n### 3. Space Research (ISRO)\n* **Established**: 1969. HQ: Bengaluru.\n* **First Satellite**: Aryabhata (1975).\n* **Launch Vehicles**: SLV, ASLV, PSLV, GSLV.\n* **Missions**: Chandrayaan-1 (2008), Mangalyaan (MOM 2013).\n\n### 4. Scientific Revolutions\n* **Green Revolution**: M.S. Swaminathan. High Yielding Varieties (Wheat/Rice).\n* **White Revolution**: Dr. Verghese Kurien (Milkman of India). Operation Flood. Amul.\n* **Blue Revolution**: Fisheries.\n* **Yellow Revolution**: Oilseeds.',
            flashcards: [
              { id: 'f1', front: 'Who is the Missile Man of India?', back: 'Dr. A.P.J. Abdul Kalam.' },
              { id: 'f2', front: 'When was ISRO established?', back: '1969.' },
              { id: 'f3', front: 'What was India\'s first satellite?', back: 'Aryabhata (1975).' },
              { id: 'f4', front: 'When was Pokhran-I conducted?', back: '1974 (Smiling Buddha).' },
              { id: 'f5', front: 'When was Pokhran-II conducted?', back: '1998 (Operation Shakti).' },
              { id: 'f6', front: 'Who is the Father of Green Revolution in India?', back: 'M.S. Swaminathan.' },
              { id: 'f7', front: 'Who is the Father of White Revolution?', back: 'Dr. Verghese Kurien.' },
              { id: 'f8', front: 'What is IGMDP?', back: 'Integrated Guided Missile Development Programme.' },
              { id: 'f9', front: 'Name the 5 missiles of IGMDP.', back: 'Prithvi, Agni, Akash, Nag, Trishul (PATNA).' },
              { id: 'f10', front: 'What is "Look East Policy"?', back: 'Focus on SE Asia (1991).' },
              { id: 'f11', front: 'Where is DRDO HQ?', back: 'New Delhi.' },
              { id: 'f12', front: 'What is "Operation Flood"?', back: 'Dairy Development Program.' },
              { id: 'f13', front: 'When was Chandrayaan-1 launched?', back: '2008.' },
              { id: 'f14', front: 'When was Mangalyaan launched?', back: '2013.' },
              { id: 'f15', front: 'Who signed Panchsheel Agreement?', back: 'Nehru and Zhou Enlai (China).' },
              { id: 'f16', front: 'What is BARC?', back: 'Bhabha Atomic Research Centre (established 1954).' },
              { id: 'f17', front: 'When was India\'s first satellite Aryabhata launched?', back: 'April 19, 1975.' },
              { id: 'f18', front: 'What is BrahMos missile?', back: 'India-Russia supersonic cruise missile.' },
              { id: 'f19', front: 'Who went to space in 1984?', back: 'Rakesh Sharma aboard Soyuz T-11.' },
              { id: 'f20', front: 'What is INSAT?', back: 'Indian National Satellite System.' },
              { id: 'f21', front: 'When was DRDO established?', back: '1958.' },
              { id: 'f22', front: 'What is Agni-V?', back: 'Intercontinental ballistic missile (5000+ km range).' },
              { id: 'f23', front: 'What is Operation Shakti?', back: 'Pokhran-II nuclear tests (1998).' },
              { id: 'f24', front: 'Who headed Operation Shakti?', back: 'Dr. A.P.J. Abdul Kalam and Dr. R. Chidambaram.' },
              { id: 'f25', front: 'What is INS Arihant?', back: 'India\'s first nuclear-powered submarine.' },
              { id: 'f26', front: 'When was LPG reforms introduced?', back: '1991 (Liberalization, Privatization, Globalization).' },
              { id: 'f27', front: 'Who was Finance Minister during 1991 reforms?', back: 'Dr. Manmohan Singh.' },
              { id: 'f28', front: 'What is PSLV?', back: 'Polar Satellite Launch Vehicle.' },
              { id: 'f29', front: 'What is GSLV?', back: 'Geosynchronous Satellite Launch Vehicle.' },
              { id: 'f30', front: 'When was Chandrayaan-3 successful?', back: 'August 23, 2023 (South Pole landing).' }
            ],
            mcqs: [
              { id: 'q1', question: 'First nuclear test of India was in:', options: ['1971', '1974', '1998', '1999'], correctIndex: 1, explanation: 'Smiling Buddha.' },
              { id: 'q2', question: 'ISRO HQ is located in:', options: ['Delhi', 'Mumbai', 'Bengaluru', 'Chennai'], correctIndex: 2, explanation: 'Karnataka.' },
              { id: 'q3', question: 'Father of Indian Space Program:', options: ['Homi Bhabha', 'Vikram Sarabhai', 'Kalam', 'Raman'], correctIndex: 1, explanation: 'Dr. Vikram Sarabhai.' },
              { id: 'q4', question: 'Agni is a:', options: ['Tank', 'Aircraft', 'Missile', 'Submarine'], correctIndex: 2, explanation: 'Ballistic Missile.' },
              { id: 'q5', question: 'White Revolution is related to:', options: ['Cotton', 'Milk', 'Eggs', 'Fish'], correctIndex: 1, explanation: 'Dairy.' },
              { id: 'q6', question: 'Green Revolution started in:', options: ['1950s', '1960s', '1980s', '1990s'], correctIndex: 1, explanation: 'Mid-1960s.' },
              { id: 'q7', question: 'First Indian in space:', options: ['Kalpana Chawla', 'Rakesh Sharma', 'Sunita Williams', 'Ravish Malhotra'], correctIndex: 1, explanation: 'In 1984 aboard Soyuz T-11.' },
              { id: 'q8', question: 'Which PM initiated Look East Policy?', options: ['Rajiv Gandhi', 'Vajpayee', 'Narasimha Rao', 'Manmohan Singh'], correctIndex: 2, explanation: 'In 1991.' },
              { id: 'q9', question: 'Nag is an:', options: ['Anti-tank missile', 'Air-to-air missile', 'Surface-to-air missile', 'ICBM'], correctIndex: 0, explanation: 'Fire and forget.' },
              { id: 'q10', question: 'Tarapur Atomic Power Station is in:', options: ['Gujarat', 'Maharashtra', 'Tamil Nadu', 'Rajasthan'], correctIndex: 1, explanation: 'First nuclear plant.' },
              { id: 'q11', question: 'LPG reforms were introduced in:', options: ['1989', '1991', '1995', '2000'], correctIndex: 1, explanation: 'Liberalization, Privatization, Globalization.' },
              { id: 'q12', question: 'Who founded AMUL?', options: ['M.S. Swaminathan', 'Verghese Kurien', 'Tribhuvandas Patel', 'Norman Borlaug'], correctIndex: 2, explanation: 'Dr. Kurien developed it later.' },
              { id: 'q13', question: 'BrahMos missile is developed by India and:', options: ['France', 'USA', 'Russia', 'Israel'], correctIndex: 2, explanation: 'Joint venture.' },
              { id: 'q14', question: 'INS Arihant is:', options: ['Aircraft carrier', 'Nuclear submarine', 'Destroyer', 'Frigate'], correctIndex: 1, explanation: 'First Indian nuclear submarine.' },
              { id: 'q15', question: 'Chandrayaan-3 landed on which lunar region?', options: ['North Pole', 'South Pole', 'Equator', 'Mare Tranquillitatis'], correctIndex: 1, explanation: 'In August 2023.' },
              { id: 'q16', question: 'Who is the current ISRO Chairman (2023)?', options: ['K. Sivan', 'S. Somanath', 'A.S. Kiran Kumar', 'K. Radhakrishnan'], correctIndex: 1, explanation: 'Chandrayaan-3 era.' },
              { id: 'q17', question: 'Prithvi missile is a:', options: ['Surface-to-air', 'Surface-to-surface', 'Air-to-air', 'Anti-satellite'], correctIndex: 1, explanation: 'Tactical ballistic missile.' },
              { id: 'q18', question: 'India became nuclear weapons state in:', options: ['1974', '1998', '2000', '1991'], correctIndex: 1, explanation: 'Pokhran-II.' },
              { id: 'q19', question: 'First chairman of Atomic Energy Commission:', options: ['Homi Bhabha', 'Vikram Sarabhai', 'A.P.J. Kalam', 'Raja Ramanna'], correctIndex: 0, explanation: 'Father of Indian nuclear program.' },
              { id: 'q20', question: 'PSLV first successful launch was in:', options: ['1993', '1994', '1999', '2001'], correctIndex: 1, explanation: 'PSLV-D2.' },
              { id: 'q21', question: 'Aryabhata satellite was launched by:', options: ['PSLV', 'GSLV', 'Soviet rocket', 'SLV-3'], correctIndex: 2, explanation: 'Launched from USSR.' },
              { id: 'q22', question: 'Operation Blue Revolution relates to:', options: ['Dairy', 'Fisheries', 'Poultry', 'Horticulture'], correctIndex: 1, explanation: 'Fish production.' },
              { id: 'q23', question: 'When did Rakesh Sharma go to space?', options: ['1982', '1984', '1986', '1988'], correctIndex: 1, explanation: 'First Indian in space.' },
              { id: 'q24', question: 'SLV-3 was developed by:', options: ['Vikram Sarabhai', 'Homi Bhabha', 'A.P.J. Kalam', 'Satish Dhawan'], correctIndex: 2, explanation: 'First indigenous satellite launch vehicle.' },
              { id: 'q25', question: 'Akash missile is a:', options: ['Cruise missile', 'Surface-to-air missile', 'Ballistic missile', 'Anti-ship missile'], correctIndex: 1, explanation: 'Air defense system.' },
              { id: 'q26', question: 'ASTRA missile is:', options: ['Air-to-air', 'Surface-to-surface', 'Anti-tank', 'Anti-ship'], correctIndex: 0, explanation: 'Beyond visual range.' },
              { id: 'q27', question: 'India launched how many satellites in one mission (2017)?', options: ['50', '74', '104', '120'], correctIndex: 2, explanation: 'World record by PSLV-C37.' },
              { id: 'q28', question: 'Trishul missile is:', options: ['Long range', 'Medium range', 'Short range surface-to-air', 'ICBM'], correctIndex: 2, explanation: 'Naval and land based.' },
              { id: 'q29', question: 'Who was PM during Pokhran-II tests?', options: ['Narasimha Rao', 'Deve Gowda', 'Atal Bihari Vajpayee', 'I.K. Gujral'], correctIndex: 2, explanation: 'In May 1998.' },
              { id: 'q30', question: 'NavIC is India\'s:', options: ['Submarine', 'Navigation satellite system', 'Fighter jet', 'Aircraft carrier'], correctIndex: 1, explanation: 'Indian GPS alternative.' }
            ],
            reels: [
              { id: 'r1', title: 'ISRO', content: 'Space Agency.\nRockets.\nPride of India.', color: getReelColor(0) },
              { id: 'r2', title: 'Kalam Sir', content: 'Missile Man.\nPresident.\nInspiration.', color: getReelColor(1) },
              { id: 'r3', title: 'Pokhran', content: 'Nuclear Test.\nBoom.\nPower.', color: getReelColor(2) },
              { id: 'r4', title: 'Green Rev', content: 'Wheat & Rice.\nNo Hunger.\nSwaminathan.', color: getReelColor(3) },
              { id: 'r5', title: 'White Rev', content: 'Amul.\nMilk Flood.\nKurien.', color: getReelColor(4) },
              { id: 'r6', title: 'Chandrayaan', content: 'Moon Mission.\nWater found.\nHistory.', color: getReelColor(5) },
              { id: 'r7', title: 'Mangalyaan', content: 'Mars Orbiter.\nFirst Try.\nCheaper than movie.', color: getReelColor(6) },
              { id: 'r8', title: 'Vikram Sarabhai', content: 'Space Father.\nVisionary.\nLeader.', color: getReelColor(7) },
              { id: 'r9', title: 'Homi Bhabha', content: 'Nuclear Father.\nAtomic Energy.\nBARC.', color: getReelColor(8) },
              { id: 'r10', title: 'Agni Missile', content: 'Fire.\nLong Range.\nDefence.', color: getReelColor(9) },
              { id: 'r11', title: 'PSLV', content: 'Workhorse.\nReliable.\n104 satellites.', color: getReelColor(0) },
              { id: 'r12', title: 'DRDO', content: 'Defence Research.\nMake in India.\nStrength.', color: getReelColor(1) },
              { id: 'r13', title: 'BrahMos', content: 'Supersonic.\nIndia-Russia.\nDeadly.', color: getReelColor(2) },
              { id: 'r14', title: 'Arihant', content: 'Nuclear Sub.\nTriad Complete.\nDeterrence.', color: getReelColor(3) },
              { id: 'r15', title: 'Chandrayaan-3', content: 'Moon South Pole.\n2023.\nHistory Made.', color: getReelColor(4) },
              { id: 'r16', title: 'LPG Reforms', content: '1991.\nOpen Economy.\nGrowth.', color: getReelColor(5) },
              { id: 'r17', title: 'Rakesh Sharma', content: 'First Indian.\nSpace.\nSaare Jahan Se Achha.', color: getReelColor(6) },
              { id: 'r18', title: 'Operation Flood', content: 'Milk.\nRural Development.\nSuccess.', color: getReelColor(7) },
              { id: 'r19', title: 'Aryabhata', content: 'First Satellite.\n1975.\nBeginning.', color: getReelColor(8) },
              { id: 'r20', title: 'NavIC', content: 'Indian GPS.\nNavigation.\nSelf-reliant.', color: getReelColor(9) },
              { id: 'r21', title: 'GSAT', content: 'Communication.\nTV & Phone.\nConnecting India.', color: getReelColor(0) },
              { id: 'r22', title: 'Tarapur', content: 'First Nuclear Plant.\nMaharashtra.\nPower.', color: getReelColor(1) },
              { id: 'r23', title: 'Aditya-L1', content: 'Sun Mission.\n2023.\nSolar Study.', color: getReelColor(2) },
              { id: 'r24', title: 'GSLV', content: 'Heavy Lifter.\nGeosync.\nCryogenic.', color: getReelColor(3) },
              { id: 'r25', title: 'Prithvi', content: 'Earth.\nShort Range.\nFirst IGMDP.', color: getReelColor(4) },
              { id: 'r26', title: 'Akash', content: 'Sky.\nAir Defence.\nProtection.', color: getReelColor(5) },
              { id: 'r27', title: 'Nag', content: 'Cobra.\nAnti-Tank.\nFire & Forget.', color: getReelColor(6) },
              { id: 'r28', title: 'Trishul', content: 'Trident.\nShort Range.\nNavy & Army.', color: getReelColor(7) },
              { id: 'r29', title: 'Blue Revolution', content: 'Fish.\nAquaculture.\nProtein.', color: getReelColor(8) },
              { id: 'r30', title: 'Make in India', content: 'Self-reliance.\nManufacturing.\nAtmanirbhar.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl11-1',
                question: 'Explain India\'s achievements in Space Research.',
                mnemonic: 'SPACE - Satellites, PSLV, Aryabhata, Chandrayaan, Exploration',
                answer: `### Introduction
India's space program, run by ISRO (Indian Space Research Organisation), has achieved remarkable success, making India a global space power.

### History of ISRO

**Foundation**
- Founded: 1969
- HQ: Bengaluru
- Father: Dr. Vikram Sarabhai
- Vision: Space for national development

**Early Achievements**
| Year | Achievement |
|------|-------------|
| 1975 | Aryabhata - First satellite |
| 1980 | SLV-3 - First launch vehicle |
| 1984 | Rakesh Sharma in space |
| 1994 | PSLV first successful launch |

### Major Achievements

**1. Satellite Programs**
- INSAT: Communication satellites
- IRS: Remote sensing satellites
- GSAT: Advanced communication
- NavIC: Indian navigation system

**2. Launch Vehicles**
| Vehicle | Purpose |
|---------|---------|
| SLV | First indigenous launch |
| ASLV | Augmented SLV |
| PSLV | Polar orbit, workhorse |
| GSLV | Geostationary orbit |
| LVM3 | Heavy lift capability |

**3. Landmark Missions**

*Chandrayaan-1 (2008)*
- First lunar mission
- Discovered water on Moon
- 95 countries participated in data

*Mangalyaan/MOM (2013)*
- Mars Orbiter Mission
- First Asian country to Mars orbit
- First attempt success
- Budget: $74 million only

*Chandrayaan-3 (2023)*
- First to land on Moon's South Pole
- Vikram lander, Pragyan rover
- Historic achievement

### Significance

**National Pride**
- Technology self-reliance
- Cost-effective space missions
- Global recognition

**Practical Benefits**
- Weather forecasting
- Disaster management
- Communication
- Agriculture monitoring
- Education

**Commercial Success**
- Launches satellites for other countries
- 104 satellites in single mission (2017)
- Revenue generation`
              },
              {
                id: 'hl11-2',
                question: 'Describe the Green and White Revolutions and their impact on India.',
                mnemonic: 'REVOLUTIONS - Rice & Wheat, Enough food, Verghese Kurien, Operation Flood, Livestock, Upliftment, Technology, India self-sufficient, Organized dairy, Nutrition, Success',
                answer: `### Green Revolution

**Introduction**
The Green Revolution (1960s) was a transformation in Indian agriculture that made India self-sufficient in food production.

**Background**
- India faced food shortages, famines
- Dependent on food imports ("Ship to mouth")
- Growing population

**Architects**
- M.S. Swaminathan: Father of Green Revolution in India
- Norman Borlaug: Father of Green Revolution globally

**Key Features**
| Feature | Description |
|---------|-------------|
| HYV Seeds | High Yielding Varieties of wheat, rice |
| Irrigation | Canal, tubewell expansion |
| Fertilizers | Chemical fertilizers promoted |
| Mechanization | Tractors, harvesters |
| Credit | Banks provided agricultural loans |

**Impact**

*Positive*
- Food self-sufficiency achieved
- Wheat production tripled
- No more famines
- Export surplus

*Negative*
- Regional imbalance (Punjab, Haryana benefited more)
- Landless laborers didn't benefit
- Environmental concerns
- Water table decline

### White Revolution (Operation Flood)

**Introduction**
The White Revolution transformed India into world's largest milk producer.

**Architect**
- Dr. Verghese Kurien: "Milkman of India"
- Organization: AMUL (Anand Milk Union Limited)

**Background**
- India had low milk production
- Rural economy weak
- Middlemen exploited farmers

**Operation Flood (1970-1996)**
| Phase | Period | Achievement |
|-------|--------|-------------|
| Phase I | 1970-80 | Urban markets linked |
| Phase II | 1981-85 | Dairy cooperatives expanded |
| Phase III | 1985-96 | Self-sustaining industry |

**Impact**

*Economic*
- India became #1 milk producer
- From 20 million tonnes (1970) to 200+ million tonnes (2022)
- Rural income increased

*Social*
- Women empowerment (dairy managed by women)
- Cooperative movement strengthened
- Employment in villages

### Legacy
Both revolutions transformed rural India, ensuring food and nutritional security.`
              },
              {
                id: 'hl11-3',
                question: 'Describe India\'s nuclear program and its significance.',
                mnemonic: 'NUCLEAR - National security, Unique capability, Civilian use, Livermore & Bhabha, Energy, Arms capability, Research',
                answer: `### Introduction
India's nuclear program, started in 1944 under Dr. Homi Bhabha, serves both civilian (energy) and strategic (defense) purposes. India is a nuclear weapons state but follows a "No First Use" policy.

### History of Nuclear Program

**Pioneers**
| Scientist | Contribution |
|-----------|--------------|
| Dr. Homi J. Bhabha | Father of Indian Nuclear Program |
| Dr. Vikram Sarabhai | Space & Nuclear development |
| Dr. Raja Ramanna | Pokhran-I architect |
| Dr. R. Chidambaram | Pokhran-II team leader |
| Dr. APJ Abdul Kalam | Missile development |

**Timeline**
- 1944: Tata Institute of Fundamental Research (TIFR) founded
- 1948: Atomic Energy Act
- 1954: Department of Atomic Energy (DAE) created
- 1956: Asia's first nuclear reactor (Apsara) at Trombay
- 1974: Pokhran-I "Peaceful Nuclear Explosion"
- 1998: Pokhran-II nuclear tests

### Pokhran Tests

**Pokhran-I (1974)**
- Date: 18 May 1974
- Code name: "Smiling Buddha"
- PM: Indira Gandhi
- Purpose: Peaceful Nuclear Explosion (PNE)
- Yield: 12-15 kilotons
- Result: India joined nuclear club

**Pokhran-II (1998)**
- Date: 11 & 13 May 1998
- Code name: "Operation Shakti"
- PM: Atal Bihari Vajpayee
- Tests: 5 nuclear devices
- Types: Fission, thermonuclear, tactical

### Nuclear Policy

**No First Use (NFU)**
- India will not use nuclear weapons first
- Only retaliatory use if attacked
- Credible Minimum Deterrence

**Command Structure**
- Nuclear Command Authority (NCA)
- Political Council (PM as Chairman)
- Executive Council (NSA)
- Strategic Forces Command

### Civilian Nuclear Program

**Power Generation**
| Reactor Type | Locations |
|--------------|-----------|
| PHWR | Tarapur, Kalpakkam, Rawatbhata, etc. |
| VVER (Russian) | Kudankulam |
| Fast Breeder | Kalpakkam (PFBR) |

**Three-Stage Program**
1. Natural Uranium in PHWRs
2. Plutonium in Fast Breeders
3. Thorium-based reactors (future)

### International Agreements

**Nuclear Suppliers Group (NSG)**
- India outside NPT but civil nuclear deal (2008)
- Indo-US Nuclear Deal
- Access to uranium, technology

**Treaties Status**
| Treaty | India's Position |
|--------|-----------------|
| NPT | Not signed |
| CTBT | Not signed |
| FMCT | Supports |
| NSG membership | Seeking |

### Significance

**Strategic**
- Nuclear deterrent against adversaries
- Regional power status
- Security assurance

**Energy**
- Reduces dependence on fossil fuels
- Clean energy source
- Long-term sustainability

**Scientific**
- Indigenous technology development
- Human resource development
- International recognition

### Defense Applications

**Delivery Systems**
- Agni series (ballistic missiles)
- Prithvi series
- Submarine-launched (K-15, K-4)
- Aircraft-delivered

**Nuclear Triad**
- Land-based missiles
- Sea-based (INS Arihant submarine)
- Air-based (fighter aircraft)

### Conclusion
India's nuclear program symbolizes the country's scientific capability and strategic autonomy. Maintaining a credible minimum deterrent while pursuing peaceful uses ensures India's security and energy needs.`
              }
            ]
          },
          {
            id: 'his12',
            title: '12. India Transformed - Part 2',
            description: 'Social, Educational and Cultural transformation of India.',
            summary: '**Social**: RTI 2005, RTE 2009, Women Empowerment.\n**Sports**: 1983 World Cup, Olympics.\n**Culture**: Cinema, Tourism, Heritage.',
            detailedNotes: '### 1. Social Transformation\n* **Human Rights**: Protection of Human Rights Act (1993).\n* **RTI**: Right to Information Act (2005). Transparency.\n* **Women Empowerment**: Dowry Prohibition Act (1961), Domestic Violence Act (2005), Beti Bachao Beti Padhao.\n* **SC/ST**: Prevention of Atrocities Act (1989).\n\n### 2. Education\n* **Commissions**: Kothari Commission (1964-66).\n* **Policies**: National Policy on Education (1986).\n* **Schemes**: Sarva Shiksha Abhiyan (SSA), Mid-day Meal.\n* **RTE**: Right to Education Act (2009) - Free & compulsory education for 6-14 years.\n\n### 3. Health\n* **Achievements**: Eradication of Smallpox and Polio.\n* **Missions**: National Rural Health Mission (NRHM - 2005).\n\n### 4. Sports\n* **Asian Games**: First held in Delhi (1951).\n* **Cricket**: World Cup wins (1983 - Kapil Dev, 2011 - Dhoni).\n* **Olympics**: Abhinav Bindra (Gold 2008), Khashaba Jadhav (First individual medal 1952).\n\n### 5. Cultural Heritage & Tourism\n* **Tourism Types**: Heritage, Eco, Medical, Agro-tourism.\n* **Cinema**: Dadasaheb Phalke (Father of Indian Cinema). Raja Harishchandra (1913).\n* **Media**: AIR (Akashvani), Doordarshan (1959).',
            flashcards: [
              { id: 'f1', front: 'When was RTI Act passed?', back: '2005.' },
              { id: 'f2', front: 'When was RTE Act passed?', back: '2009.' },
              { id: 'f3', front: 'Who is the Father of Indian Cinema?', back: 'Dadasaheb Phalke.' },
              { id: 'f4', front: 'First Indian movie?', back: 'Raja Harishchandra (1913).' },
              { id: 'f5', front: 'When did India win first Cricket World Cup?', back: '1983.' },
              { id: 'f6', front: 'Who won India\'s first individual Olympic Gold?', back: 'Abhinav Bindra (Shooting, 2008).' },
              { id: 'f7', front: 'Who won India\'s first individual Olympic medal?', back: 'Khashaba Jadhav (Wrestling, 1952).' },
              { id: 'f8', front: 'When was the first Asian Games held?', back: '1951 (New Delhi).' },
              { id: 'f9', front: 'What is SSA?', back: 'Sarva Shiksha Abhiyan.' },
              { id: 'f10', front: 'When was Human Rights Act passed?', back: '1993.' },
              { id: 'f11', front: 'What is NRHM?', back: 'National Rural Health Mission (2005).' },
              { id: 'f12', front: 'When did color TV start in India?', back: '1982 (Asian Games).' },
              { id: 'f13', front: 'Who was the captain of 1983 World Cup team?', back: 'Kapil Dev.' },
              { id: 'f14', front: 'What is "Beti Bachao Beti Padhao"?', back: 'Save Girl Child, Educate Girl Child.' },
              { id: 'f15', front: 'Which disease was eradicated from India in 2014?', back: 'Polio.' },
              { id: 'f16', front: 'Who won 2011 Cricket World Cup for India?', back: 'MS Dhoni (Captain).' },
              { id: 'f17', front: 'Who is called "Flying Sikh"?', back: 'Milkha Singh.' },
              { id: 'f18', front: 'Who founded Doordarshan?', back: 'Government of India (1959).' },
              { id: 'f19', front: 'Who won India\'s first Gold in track at Olympics?', back: 'Neeraj Chopra (Javelin, Tokyo 2020).' },
              { id: 'f20', front: 'What is the "Golden Triangle" in tourism?', back: 'Delhi-Agra-Jaipur.' },
              { id: 'f21', front: 'When was UNESCO formed?', back: '1945.' },
              { id: 'f22', front: 'How many UNESCO World Heritage Sites does India have?', back: '42 (as of 2023).' },
              { id: 'f23', front: 'Who wrote India\'s National Song?', back: 'Bankim Chandra Chattopadhyay (Vande Mataram).' },
              { id: 'f24', front: 'When was Doordarshan started?', back: '1959 (Experimental), 1965 (Regular).' },
              { id: 'f25', front: 'Who is known as "Nightingale of India"?', back: 'Lata Mangeshkar / Sarojini Naidu.' },
              { id: 'f26', front: 'What is NHRC?', back: 'National Human Rights Commission (1993).' },
              { id: 'f27', front: 'Who is Major Dhyan Chand?', back: 'Legendary hockey player, 3 Olympic golds.' },
              { id: 'f28', front: 'When is National Sports Day?', back: 'August 29 (Dhyan Chand\'s birthday).' },
              { id: 'f29', front: 'First Indian woman to reach Olympics finals?', back: 'P.T. Usha (1984 Los Angeles).' },
              { id: 'f30', front: 'Who won Thomas Cup 2022 for India?', back: 'Indian Badminton Team (first ever).' }
            ],
            mcqs: [
              { id: 'q1', question: 'RTI Act came into force in:', options: ['2000', '2002', '2005', '2010'], correctIndex: 2, explanation: 'Right to Information.' },
              { id: 'q2', question: 'RTE guarantees education for ages:', options: ['0-6', '6-14', '14-18', '6-18'], correctIndex: 1, explanation: 'Fundamental Right.' },
              { id: 'q3', question: 'First Asian Games were held in:', options: ['Tokyo', 'Beijing', 'Delhi', 'Bangkok'], correctIndex: 2, explanation: 'In 1951.' },
              { id: 'q4', question: 'Who directed "Raja Harishchandra"?', options: ['Satyajit Ray', 'Dadasaheb Phalke', 'Raj Kapoor', 'Guru Dutt'], correctIndex: 1, explanation: 'First silent film.' },
              { id: 'q5', question: 'National Science Day is celebrated on:', options: ['28 Feb', '15 Aug', '26 Jan', '5 Sept'], correctIndex: 0, explanation: 'Raman Effect discovery.' },
              { id: 'q6', question: 'Major Dhyan Chand is associated with:', options: ['Cricket', 'Hockey', 'Football', 'Tennis'], correctIndex: 1, explanation: 'Wizard of Hockey.' },
              { id: 'q7', question: 'Mid-day Meal scheme is for:', options: ['College students', 'School children', 'Office workers', 'Farmers'], correctIndex: 1, explanation: 'To improve nutrition and attendance.' },
              { id: 'q8', question: 'First Indian woman to win Olympic medal:', options: ['P.T. Usha', 'Karnam Malleswari', 'Saina Nehwal', 'Mary Kom'], correctIndex: 1, explanation: 'Bronze in Weightlifting (2000).' },
              { id: 'q9', question: 'Golden Quadrilateral project is related to:', options: ['Railways', 'Roads', 'Airways', 'Waterways'], correctIndex: 1, explanation: 'Highway network.' },
              { id: 'q10', question: 'Metro Rail first started in:', options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'], correctIndex: 2, explanation: 'Kolkata Metro.' },
              { id: 'q11', question: 'Who won Olympic Gold in Javelin 2020?', options: ['Neeraj Chopra', 'Vikas Gowda', 'Milkha Singh', 'Anju Bobby George'], correctIndex: 0, explanation: 'Tokyo Olympics.' },
              { id: 'q12', question: 'Khelo India Programme is for:', options: ['Senior athletes', 'Youth sports', 'Paralympic', 'Cricket only'], correctIndex: 1, explanation: 'Sports development.' },
              { id: 'q13', question: 'First Indian to win individual World Championship:', options: ['P.V. Sindhu', 'Saina Nehwal', 'Viswanathan Anand', 'Pullela Gopichand'], correctIndex: 2, explanation: 'Chess (2000).' },
              { id: 'q14', question: 'Swachh Bharat Abhiyan launched in:', options: ['2012', '2014', '2016', '2018'], correctIndex: 1, explanation: 'Clean India Mission.' },
              { id: 'q15', question: 'Jan Dhan Yojana is related to:', options: ['Health', 'Education', 'Banking', 'Housing'], correctIndex: 2, explanation: 'Financial inclusion.' },
              { id: 'q16', question: 'Who is known as Wizard of Hockey?', options: ['Dhanraj Pillay', 'Balbir Singh', 'Dhyan Chand', 'Roop Singh'], correctIndex: 2, explanation: '3 Olympic golds.' },
              { id: 'q17', question: 'ICC Cricket World Cup 2011 final was in:', options: ['Delhi', 'Kolkata', 'Mumbai', 'Chennai'], correctIndex: 2, explanation: 'Wankhede Stadium.' },
              { id: 'q18', question: 'First Indian film to win Oscar:', options: ['Lagaan', 'Slumdog Millionaire', 'RRR', 'Salaam Bombay'], correctIndex: 1, explanation: '8 Academy Awards.' },
              { id: 'q19', question: 'Which film won Oscar for best song 2023?', options: ['RRR', 'Lagaan', 'Mother India', 'Devdas'], correctIndex: 0, explanation: 'Naatu Naatu.' },
              { id: 'q20', question: 'India\'s biggest film industry by volume:', options: ['Bollywood', 'Tollywood', 'Kollywood', 'Mollywood'], correctIndex: 1, explanation: 'Telugu films.' },
              { id: 'q21', question: 'First Bharat Ratna winner in sports:', options: ['Dhyan Chand', 'Sachin Tendulkar', 'Kapil Dev', 'Viswanathan Anand'], correctIndex: 1, explanation: 'In 2014.' },
              { id: 'q22', question: 'Incredible India campaign launched in:', options: ['2000', '2002', '2005', '2010'], correctIndex: 1, explanation: 'Tourism promotion.' },
              { id: 'q23', question: 'Taj Mahal is a:', options: ['Palace', 'Fort', 'Mausoleum', 'Temple'], correctIndex: 2, explanation: 'Built by Shah Jahan.' },
              { id: 'q24', question: 'MGNREGA guarantees employment for:', options: ['50 days', '100 days', '150 days', '200 days'], correctIndex: 1, explanation: 'Rural employment.' },
              { id: 'q25', question: 'Ayushman Bharat provides:', options: ['Education', 'Health insurance', 'Housing', 'Food'], correctIndex: 1, explanation: 'Rs 5 lakh coverage.' },
              { id: 'q26', question: 'Make in India launched in:', options: ['2012', '2014', '2016', '2018'], correctIndex: 1, explanation: 'Manufacturing initiative.' },
              { id: 'q27', question: 'Digital India launched in:', options: ['2013', '2015', '2017', '2019'], correctIndex: 1, explanation: 'Technology initiative.' },
              { id: 'q28', question: 'Statue of Unity is of:', options: ['Gandhi', 'Nehru', 'Sardar Patel', 'Ambedkar'], correctIndex: 2, explanation: 'World\'s tallest statue.' },
              { id: 'q29', question: 'Fit India Movement launched in:', options: ['2017', '2018', '2019', '2020'], correctIndex: 2, explanation: 'National Sports Day.' },
              { id: 'q30', question: 'P.V. Sindhu won Olympic medal in:', options: ['Rio 2016', 'Tokyo 2020', 'Both', 'Neither'], correctIndex: 2, explanation: 'Silver and Bronze.' }
            ],
            reels: [
              { id: 'r1', title: '1983 World Cup', content: 'Kapil\'s Devils.\nLords.\nChampions.', color: getReelColor(0) },
              { id: 'r2', title: 'RTI', content: 'Right to Know.\nTransparency.\nPower to People.', color: getReelColor(1) },
              { id: 'r3', title: 'RTE', content: 'School for all.\nFree Education.\nFuture.', color: getReelColor(2) },
              { id: 'r4', title: 'Polio Free', content: 'Two drops.\nVaccine.\nVictory.', color: getReelColor(3) },
              { id: 'r5', title: 'Dadasaheb Phalke', content: 'Cinema Father.\nSilent Era.\nBeginning.', color: getReelColor(4) },
              { id: 'r6', title: 'Abhinav Bindra', content: 'Gold Medal.\nShooting.\nBeijing 2008.', color: getReelColor(5) },
              { id: 'r7', title: 'Mary Kom', content: 'Boxing Queen.\nMagnificent Mary.\nChampion.', color: getReelColor(6) },
              { id: 'r8', title: 'Sachin', content: 'God of Cricket.\n100 Centuries.\nLegend.', color: getReelColor(7) },
              { id: 'r9', title: 'Metro', content: 'Fast travel.\nModern City.\nConnectivity.', color: getReelColor(8) },
              { id: 'r10', title: 'Incredible India', content: 'Tourism.\nCulture.\nWelcome.', color: getReelColor(9) },
              { id: 'r11', title: 'Neeraj Chopra', content: 'Javelin Gold.\nTokyo 2020.\nHistory.', color: getReelColor(0) },
              { id: 'r12', title: 'P.V. Sindhu', content: 'Badminton Star.\n2 Olympic Medals.\nChampion.', color: getReelColor(1) },
              { id: 'r13', title: 'Dhyan Chand', content: 'Hockey Wizard.\n3 Olympic Golds.\nNational Hero.', color: getReelColor(2) },
              { id: 'r14', title: 'Milkha Singh', content: 'Flying Sikh.\n400m.\nInspiration.', color: getReelColor(3) },
              { id: 'r15', title: 'Swachh Bharat', content: 'Clean India.\nToilets.\nHygiene.', color: getReelColor(4) },
              { id: 'r16', title: 'Jan Dhan', content: 'Bank for All.\nFinancial Inclusion.\nAccess.', color: getReelColor(5) },
              { id: 'r17', title: 'Digital India', content: 'Tech for All.\nInternet.\nE-governance.', color: getReelColor(6) },
              { id: 'r18', title: 'Taj Mahal', content: 'Love Symbol.\n7 Wonders.\nAgra.', color: getReelColor(7) },
              { id: 'r19', title: 'Bollywood', content: 'Dream Factory.\nMumbai.\nGlobal Reach.', color: getReelColor(8) },
              { id: 'r20', title: 'Yoga Day', content: 'June 21.\nUN Recognition.\nWellness.', color: getReelColor(9) },
              { id: 'r21', title: 'Virat Kohli', content: 'Run Machine.\nCaptain.\nModern Great.', color: getReelColor(0) },
              { id: 'r22', title: 'Mary Kom', content: 'Boxing Queen.\n6x World Champ.\nManipur Pride.', color: getReelColor(1) },
              { id: 'r23', title: 'Statue of Unity', content: 'Patel.\nTallest.\nGujarat.', color: getReelColor(2) },
              { id: 'r24', title: 'MGNREGA', content: '100 Days Work.\nRural Jobs.\nLivelihood.', color: getReelColor(3) },
              { id: 'r25', title: 'Ayushman', content: 'Health Insurance.\n5 Lakh.\nPoor\'s Shield.', color: getReelColor(4) },
              { id: 'r26', title: 'Khelo India', content: 'Youth Sports.\nTalent Hunt.\nOlympic Dream.', color: getReelColor(5) },
              { id: 'r27', title: 'UPI', content: 'Digital Payment.\nInstant.\nRevolution.', color: getReelColor(6) },
              { id: 'r28', title: 'Aadhaar', content: 'Identity.\n12 Digits.\nUnique.', color: getReelColor(7) },
              { id: 'r29', title: 'Thomas Cup', content: 'Badminton.\n2022.\nFirst Ever.', color: getReelColor(8) },
              { id: 'r30', title: 'RRR Oscar', content: 'Naatu Naatu.\nBest Song.\nGlobal Glory.', color: getReelColor(9) }
            ],
            longAnswers: [
              {
                id: 'hl12-1',
                question: 'Explain the importance of RTI and RTE Acts in transforming India.',
                mnemonic: 'RIGHTS - Right to info, Information power, Governance improved, Homework assigned, Transparency, Schools for all',
                answer: `### Right to Information Act (RTI) 2005

**Introduction**
The RTI Act empowers citizens to seek information from public authorities, promoting transparency and accountability.

**Background**
- Corruption was rampant
- Citizens had no access to government information
- Aruna Roy and activists campaigned for years

**Key Provisions**

| Feature | Description |
|---------|-------------|
| Scope | Covers all public authorities |
| Time Limit | 30 days to provide information |
| Fee | Rs. 10 application fee |
| Exemptions | National security, personal privacy |
| Appeal | Can appeal if information denied |

**Information Officers**
- Public Information Officer (PIO) at each office
- Appellate Authority for appeals
- Central/State Information Commissions

**Impact**

*Positive*
- Reduced corruption
- Empowered common citizens
- Exposed scams
- Improved governance

*Challenges*
- Delays in response
- Misuse of act
- RTI activists face threats

### Right to Education Act (RTE) 2009

**Introduction**
The RTE Act makes education a fundamental right for children aged 6-14 years.

**Key Provisions**

| Feature | Description |
|---------|-------------|
| Age Group | 6-14 years |
| Type | Free and compulsory |
| Responsibility | Government and local authorities |
| Private Schools | 25% seats for poor students |
| No Detention | Till Class 8 (later amended) |

**Quality Standards**
- Pupil-Teacher Ratio: 30:1
- Trained teachers mandatory
- Infrastructure standards
- No corporal punishment

**Impact**

*Positive*
- Enrollment increased significantly
- Girls' education improved
- Dropout rates reduced
- Infrastructure improved

*Challenges*
- Quality of education varies
- Learning outcomes still poor
- Teacher shortage in rural areas

### Significance

Both acts represent India's commitment to:
1. Democratic values
2. Inclusive development
3. Empowering citizens
4. Building human capital

They have transformed governance and education landscape of India.`
              },
              {
                id: 'hl12-2',
                question: 'Describe India\'s achievements in Sports.',
                mnemonic: 'SPORTS GLORY - Success stories, Players legendary, Olympics medals, Records broken, Tennis stars, Stars of cricket',
                answer: `### Introduction
Indian sports have evolved from a cricket-dominated field to global excellence in multiple disciplines.

### Cricket - National Passion

**World Cup Victories**
| Year | Captain | Final Against | Result |
|------|---------|---------------|--------|
| 1983 | Kapil Dev | West Indies | Won by 43 runs |
| 2011 | MS Dhoni | Sri Lanka | Won by 6 wickets |
| 2007 | MS Dhoni | T20 WC (Pakistan) | Won by 5 runs |

**Legendary Players**
- Sachin Tendulkar: 100 centuries, God of Cricket
- Virat Kohli: Modern great, run machine
- MS Dhoni: Greatest captain, finisher

### Olympics - Growing Success

**Historic Medals**
| Year | Athlete | Sport | Medal |
|------|---------|-------|-------|
| 1952 | K.D. Jadhav | Wrestling | Bronze |
| 2008 | Abhinav Bindra | Shooting | Gold |
| 2020 | Neeraj Chopra | Javelin | Gold |
| 2020 | Mirabai Chanu | Weightlifting | Silver |

**Hockey Legacy**
- 8 Olympic Golds (1928-1980)
- Major Dhyan Chand: Wizard of Hockey
- National Sports Day: August 29

### Badminton - New Era

**Champions**
| Player | Achievement |
|--------|-------------|
| P.V. Sindhu | 2 Olympic medals |
| Saina Nehwal | Olympic Bronze (2012) |
| Kidambi Srikanth | World #1 ranking |
| Thomas Cup 2022 | First ever win |

### Other Sports Excellence

**Tennis**
- Leander Paes: Olympic Bronze, Grand Slam titles
- Sania Mirza: World #1 Doubles

**Wrestling**
- Sushil Kumar: 2 Olympic medals
- Sakshi Malik: Olympic Bronze (Rio)
- Bajrang Punia: World medalist

**Boxing**
- Mary Kom: 6x World Champion
- Lovlina Borgohain: Olympic Bronze

### Government Initiatives

**Schemes**
| Initiative | Purpose |
|------------|---------|
| Khelo India | Youth sports development |
| Target Olympic Podium | Medal hopes supported |
| Fit India | Mass fitness movement |

### Significance
- National pride and unity
- Youth inspiration
- Global recognition
- Healthy lifestyle promotion`
              },
              {
                id: 'hl12-3',
                question: 'Describe the development of Indian cinema and its impact on society.',
                mnemonic: 'CINEMA - Cultural impact, Inspiration, Nationalism, Entertainment, Mass communication, Art form',
                answer: `### Introduction
Indian cinema, also known as Bollywood (Hindi) and regional industries, is the largest film industry in the world by number of films produced. It has played a significant role in shaping Indian society and culture.

### History of Indian Cinema

**Pioneers**
| Person | Contribution |
|--------|--------------|
| Dadasaheb Phalke | Father of Indian Cinema |
| Raja Harishchandra | First Indian feature film (1913) |
| Ardeshir Irani | First talkie - Alam Ara (1931) |
| Satyajit Ray | International recognition |

**Evolution Phases**
- Silent Era (1913-1931): Raja Harishchandra, Phalke's films
- Talkie Era (1931-1947): Alam Ara, mythological films
- Golden Era (1947-1970s): Parallel cinema, social themes
- Modern Era (1980s-present): Commercial success, global reach

### Regional Cinema

**Major Industries**
| Industry | Language | Notable Feature |
|----------|----------|-----------------|
| Bollywood | Hindi | Largest by revenue |
| Tollywood | Telugu | High production value |
| Kollywood | Tamil | Global audience |
| Sandalwood | Kannada | Parallel cinema tradition |
| Mollywood | Malayalam | Realistic stories |
| Bengali | Bengali | Art cinema pioneers |

### Social Impact

**Positive Contributions**
- Social awareness films (Mother India, Lagaan)
- National integration through songs
- Entertainment for masses
- Employment generation
- Indian culture abroad

**Social Issues Addressed**
| Film | Year | Issue |
|------|------|-------|
| Mother India | 1957 | Rural struggles |
| Lagaan | 2001 | Colonial oppression |
| Taare Zameen Par | 2007 | Dyslexia awareness |
| Padman | 2018 | Menstrual hygiene |
| Article 15 | 2019 | Caste discrimination |

### Economic Importance

**Industry Scale**
- Second largest cinema market (by admissions)
- Over 1,500 films per year
- Employs millions directly/indirectly
- Growing OTT presence

**Global Reach**
- Films released worldwide
- Indian diaspora audience
- International film festivals
- Collaborations with Hollywood

### Awards & Recognition

**National**
- Dadasaheb Phalke Award (Highest honor)
- National Film Awards
- Filmfare Awards

**International**
| Film | Achievement |
|------|-------------|
| Satyajit Ray | Honorary Oscar (1992) |
| Gandhi | 8 Oscars (1983) |
| Lagaan | Oscar nomination |
| RRR | Golden Globe, Oscar (2023) |

### Cultural Impact

**Music**
- Bollywood songs: Part of Indian life
- Playback singers legends (Lata, Kishore)
- Music directors (A.R. Rahman)
- Global recognition (Jai Ho - Oscar)

**Fashion & Lifestyle**
- Influenced fashion trends
- Hairstyles, dialogues copied
- Tourism boost (film locations)

### Challenges

**Issues Faced**
- Piracy
- Content regulation debates
- Nepotism accusations
- Competition from OTT platforms
- Social responsibility vs. entertainment

### Future

**Emerging Trends**
- OTT platforms growth (Netflix, Amazon, Hotstar)
- Pan-Indian films
- International collaborations
- Technological advances (VFX, 3D)
- Content diversity

### Conclusion
Indian cinema has evolved from silent films to a global entertainment powerhouse. It has not only entertained billions but also served as a mirror to society, addressing social issues and promoting cultural unity. The industry continues to evolve while remaining an integral part of Indian identity.`
              }
            ]
          },
        ]
};
