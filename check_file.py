import json

with open('data/politics.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Chapter 3 Board Questions - Humanitarian Issues
ch3_board_questions = '''            // Board Exam Questions - Chapter 3: Humanitarian Issues (Environment, Poverty, Gender, Human Rights)
            boardQuestions: {
              q1a_mcq: [
                { id: 'bq3a1', question: 'Stockholm Conference (Only One Earth) was held in:', options: ['1972', '1982', '1992', '2015'], correctIndex: 0, explanation: 'First major UN environment conference, Stockholm 1972.' },
                { id: 'bq3a2', question: 'Brundtland Commission popularised Sustainable Development in:', options: ['1972', '1987', '1992', '1997'], correctIndex: 1, explanation: 'Report Our Common Future (1987).' },
                { id: 'bq3a3', question: 'Rio Earth Summit (Agenda 21) year:', options: ['1972', '1987', '1992', '1997'], correctIndex: 2, explanation: 'Rio de Janeiro 1992.' },
                { id: 'bq3a4', question: 'Kyoto Protocol targets:', options: ['Human Rights', 'Trade Tariffs', 'Greenhouse Gas Emissions', 'Gender Equality'], correctIndex: 2, explanation: 'Kyoto 1997 set binding emission cuts for developed states.' },
                { id: 'bq3a5', question: 'Paris Agreement aims to limit warming to:', options: ['Below 2C', 'Below 4C', 'Exactly 3C', 'No target'], correctIndex: 0, explanation: 'Goal well below 2C, pursuing 1.5C.' },
                { id: 'bq3a6', question: 'UDHR was adopted on:', options: ['26 Jan 1950', '10 Dec 1948', '15 Aug 1947', '2 Oct 1869'], correctIndex: 1, explanation: 'Universal Declaration of Human Rights, 10 December 1948.' },
                { id: 'bq3a7', question: 'CEDAW (1979) focuses on:', options: ['Children', 'Women', 'Refugees', 'Workers'], correctIndex: 1, explanation: 'Convention on the Elimination of All Forms of Discrimination Against Women.' },
                { id: 'bq3a8', question: 'NHRC in India was established in:', options: ['1947', '1950', '1993', '2005'], correctIndex: 2, explanation: 'Under Protection of Human Rights Act 1993.' },
                { id: 'bq3a9', question: 'Number of Sustainable Development Goals (SDGs):', options: ['10', '12', '15', '17'], correctIndex: 3, explanation: '17 SDGs (Agenda 2030).' },
                { id: 'bq3a10', question: 'Gender refers to:', options: ['Biological sex', 'Socially constructed roles', 'Genetic traits only', 'None'], correctIndex: 1, explanation: 'Gender is socially defined roles and norms.' }
              ],
                  q1b_oddOneOut: [
                    { id: 'bq3b1', set: ['UDHR', 'ICCPR', 'ICESCR', 'SEZ'], answer: 'SEZ', explanation: 'Others are human rights instruments; SEZ is economic policy.' },
                    { id: 'bq3b2', set: ['Stockholm 1972', 'Rio 1992', 'Kyoto 1997', 'NAFTA 1994'], answer: 'NAFTA 1994', explanation: 'NAFTA is trade agreement, others are environment conferences/treaty.' },
                    { id: 'bq3b3', set: ['Material Poverty', 'Non-material Poverty', 'HDI', 'Glass Ceiling'], answer: 'Glass Ceiling', explanation: 'Glass Ceiling is gender barrier; others are poverty/development measures.' },
                    { id: 'bq3b4', set: ['CEDAW', 'UDHR', 'SDG 5', 'TRIPS'], answer: 'TRIPS', explanation: 'TRIPS is trade/IP; others protect human/gender rights.' },
                    { id: 'bq3b5', set: ['Eco-feminism', 'Chipko Movement', 'Greenpeace', 'IMF'], answer: 'IMF', explanation: 'IMF is financial institution; others relate to environment/activism.' }
                  ],
                  q1c_correlation: [
                    { id: 'bq3c1', a: 'Sustainable Development', b: 'Brundtland Report', c: 'Human Rights', answer: 'UDHR 1948', explanation: 'UDHR 1948 foundational human rights document.' },
                    { id: 'bq3c2', a: 'Stockholm', b: '1972', c: 'Rio Earth Summit', answer: '1992', explanation: 'Key environment milestones 1972 and 1992.' },
                    { id: 'bq3c3', a: 'CEDAW', b: 'Women', c: 'CRC', answer: 'Children', explanation: 'CRC protects child rights.' },
                    { id: 'bq3c4', a: 'SDGs', b: '17 Goals', c: 'Target Year', answer: '2030', explanation: 'Agenda 2030 target year.' },
                    { id: 'bq3c5', a: 'First Generation', b: 'Civil & Political', c: 'Second Generation', answer: 'Economic Social Cultural', explanation: 'Classification of rights generations.' }
                  ],
                  q1d_trueFalse: [
                    { id: 'bq3d1', statement: 'Gender is purely biological.', answer: false, reason: 'Gender is socially constructed roles and expectations.' },
                    { id: 'bq3d2', statement: 'Paris Agreement replaced Kyoto Protocol.', answer: true, reason: 'Paris (2015) is the current climate framework involving all parties.' },
                    { id: 'bq3d3', statement: 'UDHR is legally binding like a treaty.', answer: false, reason: 'UDHR is a declaration; ICCPR/ICESCR are binding covenants.' },
                    { id: 'bq3d4', statement: 'SDG 5 focuses on Gender Equality.', answer: true, reason: 'SDG 5 aims to achieve gender equality and empower all women and girls.' },
                    { id: 'bq3d5', statement: 'Eco-feminism links exploitation of women and nature.', answer: true, reason: 'Eco-feminism argues patriarchy harms both women and environment.' },
                    { id: 'bq3d6', statement: 'Human Rights Day is observed on 10 December.', answer: true, reason: 'Commemorates UDHR adoption on 10 Dec 1948.' }
                  ],
                  q1e_identifyConcept: [
                    { id: 'bq3e1', statement: 'Development that meets present needs without compromising future generations.', answer: 'Sustainable Development', features: ['Brundtland Report 1987', 'Balance economy, society, environment'] },
                    { id: 'bq3e2', statement: 'Invisible barrier that prevents women from reaching top positions.', answer: 'Glass Ceiling', features: ['Workplace discrimination', 'Leads to low female leadership'] },
                    { id: 'bq3e3', statement: 'Rights that are universal, inalienable, and interdependent.', answer: 'Human Rights', features: ['UDHR 1948', 'Civil, political, economic, social, cultural rights'] },
                    { id: 'bq3e4', statement: 'Movement connecting oppression of women with exploitation of nature.', answer: 'Eco-feminism', features: ['Environmental justice with gender lens', 'Vandana Shiva as key voice'] },
                    { id: 'bq3e5', statement: 'UN Convention adopted in 1979 to eliminate discrimination against women.', answer: 'CEDAW', features: ['Women equality', 'States report on progress'] },
                    { id: 'bq3e6', statement: 'UN plan with 17 goals to end poverty, protect planet, ensure prosperity.', answer: 'SDGs (Agenda 2030)', features: ['Target year 2030', 'Goals include poverty, gender, climate'] }
                  ],
                  q1f_conceptMap: [
                    { id: 'bq3f1', topic: 'Climate Agreements', structure: 'Stockholm 1972 → Rio 1992 → Kyoto 1997 → Paris 2015', blanks: ['Stockholm', 'Rio', 'Kyoto', 'Paris'] },
                    { id: 'bq3f2', topic: 'Generations of Rights', structure: '1st Gen [___] + 2nd Gen [___] + 3rd Gen [___]', blanks: ['Civil & Political', 'Economic Social Cultural', 'Collective (Development/Environment/Peace)'] },
                    { id: 'bq3f3', topic: 'SDG Pillars', structure: 'SDGs → People + Planet + Prosperity + Peace + Partnership', blanks: ['People', 'Planet', 'Prosperity', 'Peace', 'Partnership'] },
                    { id: 'bq3f4', topic: 'Gender Equality', structure: 'Barriers → [___] + [___] + [___]', blanks: ['Patriarchy', 'Glass Ceiling', 'Wage Gap'] }
                  ],
                  q2_identifyExplain: [
                    { id: 'bq3ia1', statement: 'Framework of rights that are universal, inalienable, and interdependent, proclaimed in 1948.', concept: 'UDHR (Universal Declaration of Human Rights)', features: ['30 Articles covering civil, political, economic, social, cultural rights', 'Foundation for ICCPR and ICESCR'] },
                    { id: 'bq3ia2', statement: 'Development paradigm balancing economic growth with social equity and environmental protection.', concept: 'Sustainable Development', features: ['Coined by Brundtland Commission 1987', 'Meets present needs without harming future generations'] },
                    { id: 'bq3ia3', statement: 'UN treaty aiming to eliminate discrimination against women.', concept: 'CEDAW 1979', features: ['Legally binding on ratifying states', 'Regular state reporting to CEDAW Committee'] },
                    { id: 'bq3ia4', statement: 'Global agenda with 17 goals including no poverty, zero hunger, gender equality, climate action.', concept: 'SDGs (Sustainable Development Goals)', features: ['Adopted 2015, target year 2030', 'Universal goals for all countries'] },
                    { id: 'bq3ia5', statement: 'National body in India set up in 1993 to protect human rights.', concept: 'NHRC (National Human Rights Commission)', features: ['Monitors rights violations, issues recommendations', 'Created under Protection of Human Rights Act 1993'] }
                  ],
                  q3_distinguish: [
                    { id: 'bq3d1', pair: ['Sex', 'Gender'], points: [
                      { aspect: 'Basis', first: 'Biological (chromosomes, anatomy)', second: 'Socially constructed roles and norms' },
                      { aspect: 'Changeability', first: 'Fixed at birth', second: 'Varies across cultures and time' },
                      { aspect: 'Examples', first: 'Male, Female, Intersex', second: 'Masculine, Feminine roles; division of labour' },
                      { aspect: 'Implications', first: 'Biological traits', second: 'Inequality arises from gendered roles (wage gap)' }
                    ]},
                    { id: 'bq3d2', pair: ['Material Poverty', 'Non-material Poverty'], points: [
                      { aspect: 'Definition', first: 'Lack of basic needs (food, shelter, income)', second: 'Lack of dignity, voice, opportunities' },
                      { aspect: 'Measurement', first: 'Income/consumption lines', second: 'Capabilities, participation, rights' },
                      { aspect: 'Policy Response', first: 'Subsidies, direct transfers', second: 'Empowerment, education, inclusion' },
                      { aspect: 'Example', first: 'Below poverty line households', second: 'Social exclusion despite income' }
                    ]},
                    { id: 'bq3d3', pair: ['Sustainable Development', 'Economic Growth Only'], points: [
                      { aspect: 'Focus', first: 'Triple bottom line (economy, society, environment)', second: 'GDP increase regardless of social/environment costs' },
                      { aspect: 'Time Horizon', first: 'Long-term intergenerational equity', second: 'Short-term output gains' },
                      { aspect: 'Indicators', first: 'SDGs, HDI, ESG metrics', second: 'GDP, per capita income' },
                      { aspect: 'Outcome', first: 'Inclusive and green growth', second: 'Potential inequality and ecological damage' }
                    ]},
                    { id: 'bq3d4', pair: ['Civil & Political Rights', 'Economic Social Cultural Rights'], points: [
                      { aspect: 'Nature', first: 'Liberty (freedom from state interference)', second: 'Equality (state provides/supports services)' },
                      { aspect: 'Examples', first: 'Speech, vote, fair trial', second: 'Education, health, work, housing' },
                      { aspect: 'Instruments', first: 'ICCPR', second: 'ICESCR' },
                      { aspect: 'Obligation', first: 'Respect/Protect', second: 'Fulfil through positive action' }
                    ]},
                    { id: 'bq3d5', pair: ['NGO', 'IGO'], points: [
                      { aspect: 'Composition', first: 'Non-government actors (civil society)', second: 'Member states governments' },
                      { aspect: 'Examples', first: 'Amnesty International, Greenpeace', second: 'UN, World Bank, WTO' },
                      { aspect: 'Authority', first: 'Moral influence, advocacy', second: 'Treaty-based legal authority' },
                      { aspect: 'Role', first: 'Campaign, monitor, implement projects', second: 'Set rules, fund, enforce agreements' }
                    ]}
                  ],
                  q4_briefAnswers: [
                    { id: 'bq3ba1', question: 'Explain Sustainable Development with key milestones.', answer: '**Sustainable Development:**\n- Defined by Brundtland Report (1987): meet present needs without harming future generations.\n- Milestones: Stockholm 1972 (awareness), Rio 1992 (Agenda 21, UNFCCC), Kyoto 1997 (binding cuts for developed states), Paris 2015 (all parties NDCs, below 2C).\n- Balance economy, society, environment.' },
                    { id: 'bq3ba2', question: 'What are the Three Generations of Human Rights?', answer: '**Three Generations:**\n1. **First (Civil & Political)**: life, speech, vote, fair trial (ICCPR).\n2. **Second (Economic, Social, Cultural)**: education, health, work, housing (ICESCR).\n3. **Third (Collective/Solidarity)**: development, environment, peace, self-determination.\nAll rights are universal and interdependent.' },
                    { id: 'bq3ba3', question: 'Write a note on CEDAW.', answer: '**CEDAW (1979):**\n- UN treaty to eliminate discrimination against women.\n- Obligates states to reform laws, ensure equality in politics, work, family, education.\n- Monitoring by CEDAW Committee through periodic reports.\n- India ratified 1993 (with reservations).\n- Supports SDG 5 (Gender Equality).' },
                    { id: 'bq3ba4', question: 'How is poverty multidimensional?', answer: '**Multidimensional Poverty:**\n- Beyond income: includes health, education, housing, dignity, voice.\n- Measured by MPI (health, education, living standards).\n- Causes: unemployment, discrimination, lack of assets.\n- Solutions: social protection, jobs, education, empowerment.' },
                    { id: 'bq3ba5', question: 'What is Eco-feminism? Give an example.', answer: '**Eco-feminism:**\n- Links environmental degradation with patriarchy and women\'s oppression.\n- Advocates gender-just environmental policies.\n- Examples: Chipko movement (women led forest protection), Vandana Shiva\'s activism.' }
                  ],
                  q5_longAnswers: [
                    { id: 'bq3la1', question: 'Trace the evolution of global environmental governance from Stockholm to Paris. (8 marks)', mnemonic: 'SRKP -> Stockholm, Rio, Kyoto, Paris', answer: '**Evolution of Environmental Governance**\n\n**Stockholm 1972**: First UN environment meet, Only One Earth, created UNEP.\n\n**Brundtland 1987**: Our Common Future, defined Sustainable Development.\n\n**Rio 1992 (Earth Summit)**: Agenda 21 action plan, UNFCCC (climate framework), CBD (biodiversity), Rio Declaration principles.\n\n**Kyoto Protocol 1997**: Binding emission cuts for developed nations; carbon credits idea.\n\n**Paris Agreement 2015**: Universal NDCs, goal below 2C (pursue 1.5C), transparency and finance provisions.\n\n**Analysis**: Shift from awareness to binding targets to universal participation; implementation and climate justice remain key challenges.' },
                    { id: 'bq3la2', question: 'Discuss Human Rights: generations, key instruments, and India\'s institutional safeguards. (8 marks)', mnemonic: 'GKI -> Generations, Key instruments, India', answer: '**Human Rights Overview**\n\n**Generations**:\n- 1st: Civil & Political (liberty)\n- 2nd: Economic, Social, Cultural (equality)\n- 3rd: Collective (development, environment, peace)\n\n**Key Instruments**:\n- UDHR 1948 (declaration)\n- ICCPR & ICESCR (binding covenants)\n- CEDAW 1979 (women), CRC 1989 (children), CRPD 2006 (disability)\n\n**India Safeguards**:\n- Constitution Part III (Fundamental Rights), Part IV (DPSPs)\n- NHRC 1993; State HRCs\n- Key laws: RTI 2005, POSH 2013, RTE 2009, MGNREGA 2005\n- Judiciary: Public Interest Litigation, Article 32/226 writs\n\n**Conclusion**: Rights are universal and indivisible; enforcement needs institutions plus social awareness.' }
                  ],
                  q6_analysis: [
                    { id: 'bq3an1', type: 'timeline', title: 'Environment Milestones', data: '1972 Stockholm | 1987 Brundtland | 1992 Rio (Agenda 21, UNFCCC) | 1997 Kyoto | 2015 Paris (NDCs)', questions: ['Which summit coined Sustainable Development?', 'Which agreement introduced NDCs?', 'How did Kyoto and Paris differ?'] },
                    { id: 'bq3an2', type: 'comparison', title: 'Rights Generations Comparison', data: '1st Gen: Civil/Political (liberty) | 2nd Gen: Economic/Social/Cultural (equality) | 3rd Gen: Collective (development/environment/peace)', questions: ['Which generation covers right to vote?', 'Where does right to health fit?', 'Why are rights called indivisible?'] },
                    { id: 'bq3an3', type: 'chart', title: 'Poverty is Multidimensional', data: 'Income + Health + Education + Living Standards + Voice/Participation', questions: ['Why is poverty more than low income?', 'Name two non-income indicators.', 'How can policy address multidimensional poverty?'] }
                  ]
            }
'''

# Chapter 1 Board Questions (keeping for reference)

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

# Find the insertion point (before pol4)
search_str = "          },\n          {\n            id: 'pol4',"
insert_point = content.find(search_str)

if insert_point != -1:
    # Insert board questions before the closing }
    # We need to insert after the ] that closes longAnswers
    # The structure is: longAnswers: [...]\n          },
    # We want: longAnswers: [...],\n            boardQuestions: {...}\n          },
    
    # Find the ] that closes longAnswers (before pol4)
    look_back = content[:insert_point].rfind(']')
    if look_back != -1:
        # Insert after the ]
        new_content = content[:look_back+1] + ',\n' + ch3_board_questions + content[look_back+1:]

        with open('data/politics.ts', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Chapter 3 (Humanitarian Issues) board questions added successfully!")
    else:
        print("Could not find ] before pol4")
else:
    print("Could not find pol4 marker")


