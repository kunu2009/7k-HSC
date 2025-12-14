import json

with open('data/politics.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Chapter 2 Board Questions - Globalisation
ch2_board_questions = '''            // Board Exam Questions - Chapter 2: Globalisation
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
                { id: 'bq2a9', question: 'India\\'s 1991 economic reforms were led by:', options: ['Indira Gandhi', 'Manmohan Singh', 'A.B. Vajpayee', 'Rajiv Gandhi'], correctIndex: 1, explanation: 'As Finance Minister under PM P.V. Narasimha Rao.' },
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
                { id: 'bq2c5', a: 'McDonaldization', b: 'Cultural Homogenisation', c: 'McAloo Tikki', answer: 'Glocalisation', explanation: 'McAloo Tikki is Indian adaptation of global McDonald\\'s menu.' }
              ],
              q1d_trueFalse: [
                { id: 'bq2d1', statement: 'Globalisation is only an economic phenomenon.', answer: false, reason: 'Globalisation is multi-dimensional: economic, political, cultural, and technological.' },
                { id: 'bq2d2', statement: 'WTO replaced GATT in 1995.', answer: true, reason: 'World Trade Organization succeeded General Agreement on Tariffs and Trade on 1st January 1995.' },
                { id: 'bq2d3', statement: 'Globalisation always benefits all sections of society equally.', answer: false, reason: 'Globalisation has led to increased inequality, with benefits concentrated among skilled/educated.' },
                { id: 'bq2d4', statement: 'India opened its economy through LPG reforms in 1991.', answer: true, reason: 'Liberalisation, Privatisation, Globalisation reforms were introduced during economic crisis.' },
                { id: 'bq2d5', statement: 'Cultural Homogenisation means preservation of local cultures.', answer: false, reason: 'Cultural Homogenisation refers to spread of Western/dominant cultures, often at expense of local traditions.' },
                { id: 'bq2d6', statement: 'Glocalisation is adapting global products to local tastes.', answer: true, reason: 'Example: McDonald\\'s offering McAloo Tikki in India adapts to local vegetarian preferences.' }
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
                  { aspect: 'Example', first: 'McDonald\\'s, Starbucks, English language', second: 'McAloo Tikki, Bollywood songs in Hollywood' },
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
                { id: 'bq2ba1', question: 'Explain the concept of Globalisation and its dimensions.', answer: '**Globalisation:**\\n\\n**Definition**: Process of international integration through exchange of products, ideas, cultures, and worldviews.\\n\\n**Dimensions:**\\n\\n1. **Economic**: Free trade, FDI, MNCs, WTO, liberalised markets\\n\\n2. **Political**: Role of international organizations (UN, IMF), human rights discourse, declining state sovereignty\\n\\n3. **Cultural**: Spread of Western culture (McDonaldization), Glocalisation, cultural exchange\\n\\n4. **Technological**: Internet revolution, social media, instant communication, digital economy\\n\\n**India Context**: LPG reforms 1991 integrated India with global economy, IT sector boom, call centers/BPOs.' },
                { id: 'bq2ba2', question: 'What are the positive and negative impacts of Globalisation on India?', answer: '**Impact of Globalisation on India:**\\n\\n**Positive:**\\n1. Economic growth - GDP rose from $270B (1991) to $3.5T+ (2023)\\n2. IT sector boom - Bangalore as Silicon Valley of India\\n3. FDI inflow - Technology transfer, job creation\\n4. Consumer choice - Access to global brands, products\\n5. Higher living standards for middle class\\n\\n**Negative:**\\n1. **Inequality** - Rich-poor gap widened\\n2. **Agriculture crisis** - Farmers face global competition\\n3. **Cultural erosion** - Western values replacing traditions\\n4. **Job losses** - Traditional industries declined\\n5. **Environment** - Pollution, resource exploitation\\n6. **Digital divide** - Rural areas left behind' },
                { id: 'bq2ba3', question: 'Explain the role of MNCs in Globalisation.', answer: '**Role of MNCs in Globalisation:**\\n\\n**Definition**: Multi-National Corporations operate in multiple countries with production/service facilities globally.\\n\\n**Role:**\\n1. **Capital Flow**: Bring FDI, technology, management skills\\n2. **Job Creation**: Employ millions across countries\\n3. **Technology Transfer**: Introduce new methods, R&D\\n4. **Economic Integration**: Link national economies globally\\n5. **Competition**: Force local firms to improve quality\\n\\n**Examples**: Apple, Google, Samsung, Tata, Reliance\\n\\n**Criticism:**\\n- Exploit cheap labor\\n- Transfer profits to home country\\n- Influence host country policies\\n- Environmental damage' },
                { id: 'bq2ba4', question: 'Distinguish between Cultural Homogenisation and Glocalisation.', answer: '**Cultural Homogenisation vs Glocalisation:**\\n\\n**Cultural Homogenisation:**\\n- World becoming culturally uniform\\n- Spread of Western/dominant culture\\n- Examples: McDonald\\'s, Hollywood, English language\\n- Criticism: Loss of local traditions, languages\\n\\n**Glocalisation (Global + Local):**\\n- Adapting global products to local tastes\\n- Preserves local identity with global access\\n- Examples:\\n  - McAloo Tikki in India\\n  - Bollywood song remixes\\n  - Hindi dubbed Hollywood movies\\n- Represents cultural negotiation, not domination\\n\\n**Conclusion**: Glocalisation offers middle path between complete Westernisation and isolation.' },
                { id: 'bq2ba5', question: 'What is the Digital Divide? How does it affect globalisation?', answer: '**Digital Divide:**\\n\\n**Definition**: Gap between those with access to digital technology (Internet, computers) and those without.\\n\\n**Dimensions:**\\n1. **Global**: Developed vs Developing countries\\n2. **National**: Urban vs Rural areas\\n3. **Social**: Rich vs Poor, Educated vs Uneducated\\n\\n**Impact on Globalisation:**\\n- Unequal benefits from digital economy\\n- Rural areas excluded from e-commerce, online education\\n- Skilled workers benefit, unskilled left behind\\n- Creates new form of inequality\\n\\n**India Context:**\\n- Digital India initiative to bridge gap\\n- Jan Dhan-Aadhaar-Mobile (JAM) trinity\\n- Still significant rural-urban divide' }
              ],
              q5_longAnswers: [
                { id: 'bq2la1', question: 'Explain the concept of Globalisation. Discuss its economic, political, cultural, and technological dimensions. What are its impacts on India? (8 marks)', mnemonic: 'EPCT + India', answer: '**Globalisation: Concept and Dimensions**\\n\\n### Introduction\\nGlobalisation is the process of international integration through exchange of products, ideas, cultures, and worldviews. It accelerated after 1991 with Cold War end and technological revolution.\\n\\n### Definition\\nGlobalisation involves free movement of goods, capital, technology, ideas, and people across national boundaries, creating an interconnected world.\\n\\n### Dimensions of Globalisation\\n\\n**1. Economic Globalisation**\\n- Free trade and removal of trade barriers\\n- FDI (Foreign Direct Investment) flows\\n- MNCs operating across borders\\n- WTO regulating international trade\\n- Capital and labor mobility\\n\\n**2. Political Globalisation**\\n- Rise of international organizations (UN, IMF, World Bank)\\n- Human rights as global concern\\n- Debate on declining state sovereignty\\n- Global governance mechanisms\\n\\n**3. Cultural Globalisation**\\n- Spread of Western culture (McDonaldization)\\n- Glocalisation (adapting global to local)\\n- Cultural exchange and hybridization\\n- English as global language\\n\\n**4. Technological Globalisation**\\n- Internet and communication revolution\\n- Social media connecting billions\\n- Digital economy and e-commerce\\n- Technology transfer across borders\\n\\n### Impact on India\\n\\n**Positive:**\\n- IT sector boom (Infosys, TCS, Wipro)\\n- Economic growth and rising middle class\\n- Access to global technology and brands\\n- Higher education opportunities abroad\\n\\n**Negative:**\\n- Increased inequality (rich-poor gap)\\n- Agricultural distress\\n- Cultural erosion concerns\\n- Digital divide\\n\\n### Conclusion\\nGlobalisation has transformed India into a significant player in the global economy while also creating challenges that need to be addressed through inclusive policies.' },
                { id: 'bq2la2', question: 'What is Cultural Homogenisation? How does Glocalisation provide an alternative? Discuss with examples. (8 marks)', mnemonic: 'CHoM + GloL', answer: '**Cultural Homogenisation and Glocalisation**\\n\\n### Introduction\\nGlobalisation has profound cultural impacts, leading to debates about cultural uniformity versus diversity.\\n\\n### Cultural Homogenisation\\n\\n**Definition**: Process where dominant (often Western) culture spreads globally, leading to cultural uniformity.\\n\\n**Features:**\\n1. **McDonaldization**: Fast food culture spreading worldwide\\n2. **Hollywood Dominance**: American films and entertainment\\n3. **English Language**: Becoming global lingua franca\\n4. **Western Lifestyle**: Jeans, pop music, consumerism\\n5. **Uniformity**: Same brands, same products everywhere\\n\\n**Concerns:**\\n- Loss of local languages and traditions\\n- Erosion of indigenous cultures\\n- Cultural imperialism accusations\\n- Identity crisis among youth\\n\\n### Glocalisation as Alternative\\n\\n**Definition**: Adapting global products and practices to local tastes and preferences (Global + Local).\\n\\n**Examples:**\\n1. **Food**: McAloo Tikki (vegetarian burger in India), Teriyaki McBurger (Japan)\\n2. **Entertainment**: Bollywood incorporating Western music styles while maintaining Indian themes\\n3. **Technology**: Smartphones with local language support\\n4. **Business**: MNCs adapting products for local markets\\n5. **Fashion**: Fusion wear combining Western and Indian elements\\n\\n### India Context\\n\\n**Cultural Homogenisation Examples:**\\n- Popularity of English-medium education\\n- Western birthday celebrations replacing traditional ones\\n- Fast food chains in every city\\n\\n**Glocalisation Examples:**\\n- Diwali-themed advertisements by global brands\\n- Hindi dubbing of Hollywood movies\\n- Indian music remixes of Western songs\\n- Khadi-inspired global fashion\\n\\n### Conclusion\\nGlocalisation offers a middle path that allows societies to benefit from globalisation while preserving local cultural identity. It represents negotiation rather than domination, enabling cultural diversity within global interconnection.' }
              ],
              q6_analysis: [
                { id: 'bq2an1', type: 'timeline', title: 'Globalisation Timeline', data: '1947 - GATT established | 1991 - India LPG reforms | 1995 - WTO replaces GATT | 2000s - IT boom in India | 2008 - Global Financial Crisis | 2020s - Digital Economy growth', questions: ['Identify the key economic reform year for India.', 'Which organization succeeded GATT?', 'How did 2008 crisis affect globalisation?'] },
                { id: 'bq2an2', type: 'comparison', title: 'Globalisation Impact Comparison', data: 'Benefits: Economic growth, Technology access, Consumer choice, Job creation in services | Challenges: Inequality, Cultural erosion, Agricultural distress, Digital divide', questions: ['Are benefits of globalisation equally distributed? Explain.', 'Which sector in India gained most from globalisation?', 'How can negative impacts be addressed?'] },
                { id: 'bq2an3', type: 'concept_map', title: 'Types of Power in Globalisation', data: 'Soft Power (Culture, Values) + Hard Power (Military, Economy) = Smart Power | Examples: India - Yoga/Bollywood (Soft), USA - Military bases (Hard)', questions: ['Define Soft Power with examples.', 'Why is Smart Power considered effective in modern diplomacy?'] }
              ]
            }
'''

# Chapter 1 Board Questions (keeping for reference)
ch1_board_questions = '''            // Board Exam Questions - Chapter 1: World since 1991
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
                { id: 'bq4a1', question: 'Explain the causes of disintegration of USSR.', answer: '**Causes of USSR Disintegration:**\\n\\n1. **Economic Crisis**: Centrally planned economy failed to compete with West. Consumer goods shortages.\\n\\n2. **Political Reforms**: Glasnost (openness) led to criticism; Perestroika created uncertainty.\\n\\n3. **Nationalism**: Ethnic groups in republics (Baltic states, Ukraine) demanded independence.\\n\\n4. **Arms Race**: Heavy military spending (25% GDP) drained resources.\\n\\n5. **Leadership**: Gorbachev\\'s reforms weakened party control. August 1991 coup failed.\\n\\n**Result**: USSR dissolved December 26, 1991 into 15 independent republics.' },
                { id: 'bq4a2', question: 'What is the New World Order?', answer: '**New World Order:**\\n\\n1. **Definition**: Term for post-Cold War international system based on cooperation, democracy, and multilateralism.\\n\\n2. **Features**:\\n   - USA as sole superpower (Unipolarity)\\n   - Emphasis on human rights and democracy\\n   - UN, WTO gaining importance\\n   - Globalization connecting economies\\n\\n3. **Key Events**: Gulf War 1991 (UN-sanctioned coalition), NATO expansion, spread of market economy.\\n\\n4. **Criticism**: Seen by some as Western/US dominance.' },
                { id: 'bq4a3', question: 'Describe the significance of 9/11 attacks on world politics.', answer: '**Significance of 9/11 (September 11, 2001):**\\n\\n1. **War on Terror**: USA launched global war - Afghanistan invaded (2001), Iraq (2003).\\n\\n2. **Security Changes**: Patriot Act, stricter surveillance, new agencies (DHS).\\n\\n3. **International Relations**: "With us or against us" - countries forced to choose sides.\\n\\n4. **Islamic World**: Increased West-Muslim tensions, Islamophobia.\\n\\n5. **Global Impact**: Terrorism became top security priority worldwide.' },
                { id: 'bq4a4', question: 'Explain multipolarity with examples.', answer: '**Multipolarity:**\\n\\n1. **Definition**: International system with power distributed among multiple states.\\n\\n2. **Emerging Powers**:\\n   - China: Economic giant, Belt and Road\\n   - India: Growing economy, nuclear power\\n   - EU: Economic bloc, soft power\\n   - Russia: Energy resources, military\\n\\n3. **Examples**: BRICS, G20, SCO, Regional organizations\\n\\n4. **For India**: Strategic autonomy, multiple partnerships (US, Russia, EU).' },
                { id: 'bq4a5', question: 'What were the main features of the Cold War?', answer: '**Features of Cold War (1947-1991):**\\n\\n1. **Ideological Rivalry**: Capitalism vs Communism\\n\\n2. **Military Alliances**: NATO (West) vs Warsaw Pact (East)\\n\\n3. **Arms Race**: Nuclear weapons buildup, MAD doctrine\\n\\n4. **Proxy Wars**: Korea, Vietnam, Afghanistan\\n\\n5. **Space Race**: Sputnik, Moon landing\\n\\n6. **No Direct War**: Superpowers never directly fought\\n\\n7. **Division of Europe**: Iron Curtain, Berlin Wall' }
              ],
              q5_longAnswers: [
                { id: 'bq5a1', question: 'Describe the causes and consequences of USSR disintegration and its impact on world politics. (8 marks)', mnemonic: 'ENAGL + CUSP', answer: '**Disintegration of USSR: Causes and Consequences**\\n\\n### Introduction\\nThe USSR collapsed on December 26, 1991, ending the Cold War era.\\n\\n### Causes\\n\\n**1. Economic Crisis**\\n- Centralized planning failed\\n- 25% GDP on military drained economy\\n- Consumer goods shortages\\n\\n**2. Political Reforms (Glasnost & Perestroika)**\\n- Glasnost: Allowed criticism, exposed failures\\n- Perestroika: Created economic uncertainty\\n\\n**3. Rise of Nationalism**\\n- Baltic States demanded independence\\n- Ukraine, Central Asian republics followed\\n\\n**4. Arms Race Exhaustion**\\n- Could not match US technology (SDI)\\n- Afghanistan war (1979-89) drained resources\\n\\n**5. Weak Leadership**\\n- Gorbachev unable to manage transition\\n- August 1991 coup failed, weakened center\\n\\n### Consequences\\n\\n**1. End of Cold War** - Bipolar world ended, USA as sole superpower\\n\\n**2. Birth of New States** - 15 independent republics, CIS formed\\n\\n**3. Economic Transition** - Shock therapy, privatization, oligarchs\\n\\n**4. Geopolitical Changes** - NATO expansion, EU enlargement\\n\\n### Impact on World Politics\\n- Power Structure: Bipolar → Unipolar → Multipolar\\n- Capitalism/Democracy seen as victorious\\n- Globalization accelerated\\n\\n### Conclusion\\nUSSR collapse reshaped international relations for the 21st century.' },
                { id: 'bq5a2', question: 'Explain the transition from Unipolarity to Multipolarity. What are its implications for India? (8 marks)', mnemonic: 'URMC + BASI', answer: '**Transition from Unipolarity to Multipolarity**\\n\\n### Introduction\\nPost-1991 world shifted from bipolar (USA vs USSR) to unipolar (USA dominant) to emerging multipolar order.\\n\\n### Phase 1: Unipolarity (1991-2008)\\n- USA as single superpower ("Unipolar Moment")\\n- US interventions: Gulf War (1991), Kosovo (1999), Afghanistan (2001), Iraq (2003)\\n- "End of History" optimism\\n\\n### Phase 2: Transition to Multipolarity (2008-Present)\\n\\n**Factors Driving Change:**\\n1. **Rise of China** - Economic superpower, military modernization, BRI\\n2. **India Emergence** - Fast-growing economy, nuclear power, IT sector\\n3. **Russia Resurgence** - Energy resources, military interventions\\n4. **European Union** - Economic bloc, soft power\\n5. **US Relative Decline** - 2008 Financial Crisis, Middle East overstretch\\n\\n### Features of Multipolarity\\n- Multiple power centres (no single dominant nation)\\n- Complex diplomacy required\\n- Regional powers gain influence\\n- New institutions: BRICS, SCO, G20\\n\\n### Implications for India\\n\\n**Benefits:**\\n- Strategic autonomy - independent foreign policy\\n- Multiple partners - USA, Russia, EU, Japan\\n- Global South leadership\\n- Economic opportunities from various sources\\n\\n**India\\'s Actions:**\\n- Multi-alignment (not non-alignment)\\n- BRICS, SCO membership\\n- Quad participation (USA, Japan, Australia)\\n- Act East Policy (ASEAN engagement)\\n\\n**Challenges:**\\n- Balancing US-Russia, US-China relations\\n- China as competitor (border disputes, BRI)\\n\\n### Conclusion\\nMultipolar world offers India greater opportunities for strategic autonomy and global influence.' }
              ],
              q6_analysis: [
                { id: 'bq6a1', type: 'timeline', title: 'Cold War to Multipolarity Timeline', data: '1947 - Cold War begins (Truman Doctrine) | 1949 - NATO formed | 1955 - Warsaw Pact | 1989 - Berlin Wall falls | 1991 - USSR collapses (Unipolarity) | 2001 - 9/11 attacks | 2008 - Financial Crisis (US decline begins) | 2020s - Multipolarity evident', questions: ['Identify the period of Bipolarity.', 'When did Unipolarity begin?', 'What events mark transition to Multipolarity?'] },
                { id: 'bq6a2', type: 'comparison', title: 'World Order Comparison', data: 'Bipolarity (1947-1991): USA vs USSR, Two blocs, Proxy wars | Unipolarity (1991-2008): USA dominant, Liberal order, Interventions | Multipolarity (2008-present): Multiple powers, Complex diplomacy', questions: ['Distinguish between the three world orders.', 'Which order is most suitable for developing countries like India? Explain.'] }
              ]
            }
'''

# Find the insertion point (before pol3)
search_str = "          },\n          {\n            id: 'pol3',"
insert_point = content.find(search_str)

if insert_point != -1:
    # Insert board questions before the closing }
    # We need to insert after the ] that closes longAnswers
    # The structure is: longAnswers: [...]\n          },
    # We want: longAnswers: [...],\n            boardQuestions: {...}\n          },
    
    # Find the ] that closes longAnswers (before pol3)
    look_back = content[:insert_point].rfind(']')
    if look_back != -1:
        # Insert after the ]
        new_content = content[:look_back+1] + ',\n' + ch2_board_questions + content[look_back+1:]
        
        with open('data/politics.ts', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Chapter 2 (Globalisation) board questions added successfully!")
    else:
        print("Could not find ] before pol3")
else:
    print("Could not find pol3 marker")


