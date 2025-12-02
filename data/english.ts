import { Subject } from '../types';
import { getReelColor } from './helpers';

export const ENGLISH_SUBJECT: Subject = {
  id: 'eng',
  name: 'English',
  icon: 'BookA',
  color: 'bg-yellow-500',
  syllabus: '1. Prose\n2. Poetry\n3. Writing Skills\n4. Novel (Genre-Drama)',
  paperPattern: '### English Paper Pattern (80 Marks)\n\n* **Q.1 Prose (16 Marks)**\n* **Q.2 Poetry (14 Marks)**\n* **Q.3 Writing Skills (16 Marks)**\n* **Q.4 Novel (16 Marks)**\n* **Grammar & Vocabulary integrated**',
  previousPapers: [],
  chapters: [
    {
      id: 'eng1',
      title: '1.1 An Astrologer\'s Day',
      description: 'By R.K. Narayan - A story of fate and irony.',
      summary: '**Genre**: Short Story\n**Author**: R.K. Narayan\n**Theme**: Irony of fate, guilt, redemption\n\nAn astrologer who is actually a fraud meets a customer who turns out to be the man he thought he had killed years ago. Through clever manipulation, the astrologer saves himself and finds peace from his guilt.',
      detailedNotes: '### About the Author\nR.K. Narayan (1906-2001) was one of the most famous Indian writers in English. His stories are set in the fictional town of Malgudi.\n\n### Setting\n* Town Hall Road at night\n* Under a tamarind tree\n* Near a municipal boundary\n\n### Characters\n* **The Astrologer**: Shrewd, observant, practical, carries guilt from his past.\n* **Guru Nayak**: The antagonist, seeking revenge for attempted murder.\n* **The Wife**: Represents the astrologer\'s present peaceful life.\n\n### Plot Summary\n1. The astrologer sets up his business at night under artificial lighting.\n2. He has no real knowledge of astrology but uses psychology and intuition.\n3. Guru Nayak comes as a customer challenging his abilities.\n4. Through the conversation, we learn the astrologer stabbed Guru Nayak years ago and fled his village.\n5. The astrologer cleverly tells Guru Nayak that the attacker died in an accident.\n6. Guru Nayak leaves satisfied, and the astrologer finally finds peace.\n\n### Themes\n1. **Irony**: A fake astrologer predicts real truth about his own past.\n2. **Guilt and Redemption**: Years of guilt finally resolved.\n3. **Fate vs. Free Will**: The chance meeting seems destined.\n4. **Appearance vs. Reality**: The astrologer appears knowledgeable but is actually a fraud.\n\n### Literary Devices\n* **Situational Irony**: The astrologer meets his would-be victim.\n* **Suspense**: Built throughout the encounter with Guru Nayak.\n* **Foreshadowing**: The unusual gleam in Guru Nayak\'s eyes.\n* **Characterization**: Revealed through dialogue and actions.',
      flashcards: [
        { id: 'f1', front: 'Author of An Astrologer\'s Day?', back: 'R.K. Narayan.' },
        { id: 'f2', front: 'Name of the antagonist?', back: 'Guru Nayak.' },
        { id: 'f3', front: 'What is the fictional town in R.K. Narayan\'s stories?', back: 'Malgudi.' },
        { id: 'f4', front: 'Under which tree did the astrologer sit?', back: 'Tamarind tree.' },
        { id: 'f5', front: 'What did the astrologer tell Guru Nayak about his attacker?', back: 'That the attacker died in an accident four months ago.' },
        { id: 'f6', front: 'What is the main theme of the story?', back: 'Irony of fate and redemption from guilt.' },
        { id: 'f7', front: 'How much money did Guru Nayak give the astrologer?', back: 'A rupee.' },
        { id: 'f8', front: 'Why did the astrologer leave his village?', back: 'He had stabbed a man (Guru Nayak) and thought he had killed him.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The astrologer carried out his business under a ______ tree.', options: ['Banyan', 'Tamarind', 'Neem', 'Peepal'], correctIndex: 1, explanation: 'He sat under the boughs of a spreading tamarind tree.' },
        { id: 'q2', question: 'The astrologer told Guru Nayak that his attacker had died ______ months ago.', options: ['Two', 'Three', 'Four', 'Six'], correctIndex: 2, explanation: 'He said the attacker was crushed under a lorry four months ago.' },
        { id: 'q3', question: 'R.K. Narayan\'s stories are set in the fictional town of:', options: ['Malgudi', 'Mangalore', 'Mysore', 'Mumbai'], correctIndex: 0, explanation: 'Malgudi is a fictional South Indian town created by R.K. Narayan.' },
        { id: 'q4', question: 'The predominant literary device in this story is:', options: ['Metaphor', 'Simile', 'Irony', 'Personification'], correctIndex: 2, explanation: 'The story is built around situational irony - a fake astrologer reveals real truth.' },
        { id: 'q5', question: 'How did the astrologer feel after Guru Nayak left?', options: ['Scared', 'Relieved', 'Angry', 'Sad'], correctIndex: 1, explanation: 'He felt relieved that his past was finally resolved and Guru Nayak would stop searching.' }
      ],
      reels: [
        { id: 'r1', title: 'Fake Astrologer', content: 'He had NO knowledge of astrology!\nJust psychology & intuition.', color: getReelColor(0) },
        { id: 'r2', title: 'Past Crime', content: 'Years ago, he stabbed a man & fled.\nThat man was Guru Nayak!', color: getReelColor(1) },
        { id: 'r3', title: 'Twist of Fate', content: 'The "dead" victim came as a customer.\nPure irony!', color: getReelColor(2) },
        { id: 'r4', title: 'Clever Escape', content: '"Your attacker died 4 months ago."\nGuru Nayak believed it!', color: getReelColor(3) },
        { id: 'r5', title: 'Theme', content: 'Irony + Guilt + Redemption.\nFate brings closure.', color: getReelColor(4) },
        { id: 'r6', title: 'Setting', content: 'Under a tamarind tree.\nTown Hall Road at night.', color: getReelColor(5) },
        { id: 'r7', title: 'Author', content: 'R.K. Narayan\nMalgudi Days fame\n1906-2001', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng2',
      title: '1.2 On Saying Please',
      description: 'By A.G. Gardiner - Essay on courtesy and manners.',
      summary: '**Genre**: Essay\n**Author**: A.G. Gardiner\n**Theme**: Importance of courtesy and good manners in daily life.\n\nThe essay discusses how small courtesies like saying "please" and "thank you" make social life pleasant, even though discourtesy is not legally punishable.',
      detailedNotes: '### About the Author\nAlfred George Gardiner (1865-1946) was a British journalist and author. He wrote under the pen name "Alpha of the Plough."\n\n### Central Theme\nThe essay argues that while law punishes physical assault, there is no legal remedy for moral assault (rudeness). Yet, courtesy and good manners are essential for a civilized society.\n\n### Key Arguments\n1. **Law vs. Morality**: Physical assault is punishable, but rudeness is not.\n2. **Impact of Rudeness**: Discourtesy can ruin someone\'s entire day.\n3. **Chain Reaction**: Bad behavior spreads like infection.\n4. **Small Words Matter**: "Please" and "Thank you" are lubricants of social life.\n5. **Everyone Deserves Respect**: From a lift-man to a celebrity.\n\n### The Lift-Man Incident\n* A lift-man threw out a passenger who didn\'t say "Top please."\n* The passenger only said "Top" without courtesy.\n* Law sided with the passenger (physical assault).\n* But morally, the passenger was equally wrong.\n\n### The Conductor Example\n* A cheerful bus conductor spread positivity.\n* His pleasant manners made everyone\'s journey enjoyable.\n* Small courtesies create a pleasant atmosphere.\n\n### Important Quotes\n* "A civil tongue is the lubricant of social life."\n* "Courtesy costs nothing but pays well."\n* "Bad manners probably do more to poison the stream of general life than all the crimes."\n\n### Life Lessons\n1. Always use polite words.\n2. Treat everyone with respect regardless of status.\n3. Your behavior affects others\' mood.\n4. Courtesy is contagious - spread it!',
      flashcards: [
        { id: 'f1', front: 'Author of On Saying Please?', back: 'A.G. Gardiner (Alfred George Gardiner).' },
        { id: 'f2', front: 'Pen name of A.G. Gardiner?', back: 'Alpha of the Plough.' },
        { id: 'f3', front: 'What is the "lubricant of social life" according to the essay?', back: 'A civil tongue / Courtesy.' },
        { id: 'f4', front: 'Who threw a passenger out for not saying "please"?', back: 'The lift-man.' },
        { id: 'f5', front: 'What does the essay say about law and rudeness?', back: 'Law cannot punish rudeness (moral assault), only physical assault.' },
        { id: 'f6', front: 'What example shows positive effect of courtesy?', back: 'The cheerful bus conductor who spread positivity.' },
        { id: 'f7', front: 'Genre of On Saying Please?', back: 'Essay (Informal/Personal Essay).' }
      ],
      mcqs: [
        { id: 'q1', question: 'A.G. Gardiner wrote under the pen name:', options: ['Beta of the Plough', 'Alpha of the Plough', 'Gamma of the Stars', 'Delta of the Moon'], correctIndex: 1, explanation: 'Alpha of the Plough was his famous pen name.' },
        { id: 'q2', question: 'The lift-man threw out the passenger because:', options: ['He was rude', 'He didn\'t pay', 'He didn\'t say please', 'He was late'], correctIndex: 2, explanation: 'The passenger said only "Top" without adding "please."' },
        { id: 'q3', question: 'According to the essay, courtesy is:', options: ['A legal requirement', 'A moral necessity', 'Unnecessary', 'Only for educated people'], correctIndex: 1, explanation: 'Courtesy is not legally required but morally essential.' },
        { id: 'q4', question: 'The essay compares good manners to:', options: ['Money', 'Lubricant', 'Medicine', 'Food'], correctIndex: 1, explanation: 'Civil tongue is the lubricant of social life.' },
        { id: 'q5', question: 'The bus conductor example shows:', options: ['How to earn money', 'Positive effect of courtesy', 'How to drive', 'Legal requirements'], correctIndex: 1, explanation: 'His cheerful behavior made everyone\'s journey pleasant.' }
      ],
      reels: [
        { id: 'r1', title: 'The Lift-Man', content: 'Threw out a passenger\nwho didn\'t say "Please".\nLaw punished him, not the rude passenger.', color: getReelColor(0) },
        { id: 'r2', title: 'Law vs Morality', content: 'Physical assault = Punishable\nMoral assault = No legal remedy\nBut equally damaging!', color: getReelColor(1) },
        { id: 'r3', title: 'The Bus Conductor', content: 'Cheerful & polite.\nMade everyone\'s day better.\nCourtesy is contagious!', color: getReelColor(2) },
        { id: 'r4', title: 'Magic Words', content: '"Please" and "Thank you"\nCost nothing.\nPay everything!', color: getReelColor(3) },
        { id: 'r5', title: 'Chain Reaction', content: 'Rudeness spreads like disease.\nSo does kindness.\nChoose wisely!', color: getReelColor(4) },
        { id: 'r6', title: 'Key Quote', content: '"A civil tongue is the\nlubricant of social life."', color: getReelColor(5) },
        { id: 'r7', title: 'Author', content: 'A.G. Gardiner\nPen name: Alpha of the Plough\nBritish journalist', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng3',
      title: '1.3 The Cop and the Anthem',
      description: 'By O. Henry - A story of ironic twists.',
      summary: '**Genre**: Short Story\n**Author**: O. Henry (William Sydney Porter)\n**Theme**: Irony of fate, reformation vs. circumstances\n\nSoapy, a homeless man, tries to get arrested to spend winter in jail but fails repeatedly. When he finally decides to reform his life, he gets arrested for loitering.',
      detailedNotes: '### About the Author\nO. Henry (1862-1910) was an American short story writer known for his surprise endings. Real name: William Sydney Porter.\n\n### Setting\n* New York City\n* Madison Square\n* A church\n\n### Main Character\n**Soapy**: A homeless man (tramp) who wants to spend winter in Blackwell\'s Island prison where he\'ll get food and shelter.\n\n### Plot Summary\n**Soapy\'s attempts to get arrested:**\n1. **Restaurant**: Eats without paying - thrown out, not arrested.\n2. **Breaks window**: Runs away but cop doesn\'t suspect him.\n3. **Another restaurant**: Same result - kicked out.\n4. **Pretends to be drunk**: Cop thinks he\'s a Yale student celebrating.\n5. **Flirts with a woman**: She turns out to be willing!\n6. **Disturbs peace**: Cop thinks he\'s a celebrating fan.\n\n**The Turning Point:**\n* Passes a church, hears anthem (hymn).\n* Music reminds him of his better past.\n* Decides to reform - get a job, live honestly.\n\n**Ironic Ending:**\n* Just as he decides to change, a cop arrests him for loitering.\n* Sentenced to three months on Blackwell\'s Island.\n\n### Themes\n1. **Irony**: Gets what he wanted when he no longer wants it.\n2. **Fate vs. Free Will**: Circumstances overpower intentions.\n3. **Appearance vs. Reality**: Nothing is as it seems.\n4. **Power of Music**: The anthem triggers transformation.\n\n### O. Henry\'s Style\n* Surprise/Twist endings\n* Ironic situations\n* Sympathetic portrayal of common people\n* Humor mixed with pathos',
      flashcards: [
        { id: 'f1', front: 'Author of The Cop and the Anthem?', back: 'O. Henry (William Sydney Porter).' },
        { id: 'f2', front: 'Real name of O. Henry?', back: 'William Sydney Porter.' },
        { id: 'f3', front: 'What is Soapy trying to do throughout the story?', back: 'Get arrested to spend winter in Blackwell\'s Island prison.' },
        { id: 'f4', front: 'How many times does Soapy try to get arrested?', back: 'Six times.' },
        { id: 'f5', front: 'What triggers Soapy\'s desire to reform?', back: 'The church anthem (hymn/music).' },
        { id: 'f6', front: 'What is the ironic twist at the end?', back: 'He gets arrested for loitering just when he decides to reform.' },
        { id: 'f7', front: 'O. Henry is famous for what type of endings?', back: 'Surprise/Twist endings.' },
        { id: 'f8', front: 'Where is the story set?', back: 'New York City (Madison Square).' }
      ],
      mcqs: [
        { id: 'q1', question: 'Soapy wanted to get arrested to:', options: ['Escape enemies', 'Get shelter in winter', 'Meet a friend', 'Get famous'], correctIndex: 1, explanation: 'He wanted food and shelter at Blackwell\'s Island prison during winter.' },
        { id: 'q2', question: 'How many attempts did Soapy make to get arrested?', options: ['Four', 'Five', 'Six', 'Seven'], correctIndex: 2, explanation: 'He tried six different methods to get arrested.' },
        { id: 'q3', question: 'What made Soapy want to reform?', options: ['A sermon', 'A policeman', 'Church anthem', 'A friend'], correctIndex: 2, explanation: 'The anthem reminded him of his better past.' },
        { id: 'q4', question: 'O. Henry stories are known for:', options: ['Happy endings', 'Twist endings', 'Sad endings', 'No endings'], correctIndex: 1, explanation: 'O. Henry\'s signature style is the surprise/twist ending.' },
        { id: 'q5', question: 'At the end, Soapy is arrested for:', options: ['Theft', 'Fighting', 'Loitering', 'Drinking'], correctIndex: 2, explanation: 'He was arrested for loitering outside the church.' }
      ],
      reels: [
        { id: 'r1', title: 'Soapy\'s Goal', content: 'Get arrested!\nWinter is coming.\nJail = Food + Shelter', color: getReelColor(0) },
        { id: 'r2', title: 'Attempt #1', content: 'Ate at restaurant without paying.\nResult: Kicked out, not arrested!', color: getReelColor(1) },
        { id: 'r3', title: 'Attempt #2', content: 'Broke a shop window.\nResult: Cop didn\'t suspect him!', color: getReelColor(2) },
        { id: 'r4', title: 'The Anthem', content: 'Church music played.\nMemories of better days.\nSoapy decides to REFORM!', color: getReelColor(3) },
        { id: 'r5', title: 'TWIST!', content: 'Finally arrested!\nFor just standing there.\nIRONY at its best.', color: getReelColor(4) },
        { id: 'r6', title: 'O. Henry Style', content: 'Surprise endings!\nIronic situations.\nCommon people as heroes.', color: getReelColor(5) },
        { id: 'r7', title: 'Theme', content: 'When you want something = Can\'t get it.\nWhen you don\'t want = You get it!', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng1_4',
      title: '1.4 Big Data-Big Insights',
      description: 'Understanding the revolution of Big Data.',
      summary: '**Genre**: Informative Essay\n**Theme**: Technology and its impact\n\nThe chapter explains the concept of Big Data and its "4 Vs" (Volume, Velocity, Variety, Veracity). It details how Big Data is transforming various sectors like healthcare, education, banking, and sports.',
      detailedNotes: '### What is Big Data?\nMassive amount of data generated every second through internet, social media, sensors, etc.\n\n### The 4 Vs of Big Data\n1. **Volume**: Huge amount of data.\n2. **Velocity**: High speed of data generation.\n3. **Variety**: Different types of data (text, video, audio).\n4. **Veracity**: Uncertainty or accuracy of data.\n\n### Uses of Big Data\n1. **Location Tracking**: GPS, Google Maps, traffic patterns.\n2. **Understanding Weather Patterns**: Weather forecasting, disaster management.\n3. **Healthcare Industry**: Monitoring patient health (smart watches), predicting epidemics.\n4. **Banking & Finance**: Fraud detection, stock market analysis.\n5. **Sports**: Analyzing player performance, strategy (e.g., "Moneyball").\n6. **Advertising**: Targeted ads based on user behavior.\n7. **Education**: Personalized learning, tracking student progress.\n\n### Conclusion\nBig Data is the "new oil" of the digital economy. It helps in making data-driven decisions and improving efficiency across industries.',
      flashcards: [
        { id: 'f1', front: 'What are the 4 Vs of Big Data?', back: 'Volume, Velocity, Variety, Veracity.' },
        { id: 'f2', front: 'How does Big Data help in Healthcare?', back: 'Predicting epidemics, monitoring patients via wearables.' },
        { id: 'f3', front: 'How is Big Data used in Sports?', back: 'Analyzing player performance and game strategy.' },
        { id: 'f4', front: 'What is "Veracity" in Big Data?', back: 'The reliability or accuracy of the data.' },
        { id: 'f5', front: 'Example of Big Data in daily life?', back: 'Google Maps traffic updates, Netflix recommendations.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Which of the following is NOT one of the 4 Vs of Big Data?', options: ['Volume', 'Velocity', 'Victory', 'Variety'], correctIndex: 2, explanation: 'Victory is not a characteristic. The 4th V is Veracity.' },
        { id: 'q2', question: 'Big Data helps banking sector in:', options: ['Printing notes', 'Fraud detection', 'Cleaning offices', 'None'], correctIndex: 1, explanation: 'It detects unusual patterns to prevent fraud.' },
        { id: 'q3', question: 'GPS and Google Maps use Big Data for:', options: ['Location tracking', 'Cooking', 'Painting', 'Singing'], correctIndex: 0, explanation: 'Real-time traffic and location data.' },
        { id: 'q4', question: 'In education, Big Data helps in:', options: ['Building schools', 'Personalized learning', 'Printing books', 'Buying uniforms'], correctIndex: 1, explanation: 'Tailoring learning based on student performance.' }
      ],
      reels: [
        { id: 'r1', title: 'What is Big Data?', content: 'Massive Data.\nGenerated every second.\nNew Oil.', color: getReelColor(0) },
        { id: 'r2', title: 'The 4 Vs', content: 'Volume (Size)\nVelocity (Speed)\nVariety (Types)\nVeracity (Truth)', color: getReelColor(1) },
        { id: 'r3', title: 'Uses', content: 'Healthcare\nBanking\nSports\nAds', color: getReelColor(2) },
        { id: 'r4', title: 'Future', content: 'Data driven world.\nSmart decisions.\nBetter life.', color: getReelColor(3) }
      ]
    },
    {
      id: 'eng1_5',
      title: '1.5 The New Dress',
      description: 'By Virginia Woolf - A stream of consciousness story.',
      summary: '**Genre**: Short Story\n**Author**: Virginia Woolf\n**Theme**: Social anxiety, inferiority complex, appearance vs reality\n\nMabel Waring attends a party in a new yellow dress. She feels insecure, thinking everyone is mocking her dress. The story explores her inner thoughts and feelings of inadequacy.',
      detailedNotes: '### About the Author\nVirginia Woolf (1882-1941) was a British writer and pioneer of the "Stream of Consciousness" technique.\n\n### Stream of Consciousness\nA narrative style that depicts the continuous flow of thoughts in a character\'s mind.\n\n### Plot Summary\n1. **The Party**: Mabel arrives at Mrs. Dalloway\'s party.\n2. **The Dress**: She wears an old-fashioned yellow silk dress, made from a pattern book.\n3. **Insecurity**: She immediately feels she looks "wrong" and "dowdy" compared to others.\n4. **The Mirror**: Looking in the mirror confirms her fears (in her mind).\n5. **Inner Monologue**: She recalls her childhood, her poverty, and feels like a "fly in a saucer."\n6. **Interaction**: She talks to others but thinks they are lying or mocking her.\n7. **Departure**: She leaves the party early, resolving to change her life (read books, be better).\n\n### Themes\n1. **Social Anxiety**: Fear of being judged.\n2. **Inferiority Complex**: Feeling less than others.\n3. **Appearance vs Reality**: The dress might be fine, but her mind makes it a disaster.\n4. **Class Consciousness**: Mabel feels poor among the rich.\n\n### Key Metaphor\n**"Fly in a saucer"**: Mabel feels trapped and struggling, like a fly stuck in milk, trying to crawl out but failing.',
      flashcards: [
        { id: 'f1', front: 'Author of The New Dress?', back: 'Virginia Woolf.' },
        { id: 'f2', front: 'What narrative technique is used?', back: 'Stream of Consciousness.' },
        { id: 'f3', front: 'What color was Mabel\'s dress?', back: 'Yellow.' },
        { id: 'f4', front: 'What metaphor does Mabel use for herself?', back: 'A fly in a saucer.' },
        { id: 'f5', front: 'Who is the hostess of the party?', back: 'Mrs. Dalloway (Clarissa Dalloway).' },
        { id: 'f6', front: 'Why does Mabel feel insecure?', back: 'She thinks her dress is old-fashioned and everyone is mocking her.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Virginia Woolf is famous for which literary technique?', options: ['Rhyme', 'Stream of Consciousness', 'Sonnet', 'Haiku'], correctIndex: 1, explanation: 'Flow of thoughts.' },
        { id: 'q2', question: 'Mabel compared herself to a:', options: ['Queen', 'Fly in a saucer', 'Butterfly', 'Lion'], correctIndex: 1, explanation: 'Feeling trapped and insignificant.' },
        { id: 'q3', question: 'Mabel\'s dress was made of:', options: ['Cotton', 'Yellow Silk', 'Blue Velvet', 'Red Wool'], correctIndex: 1, explanation: 'Old-fashioned yellow silk dress.' },
        { id: 'q4', question: 'How did Mabel feel at the party?', options: ['Happy', 'Confident', 'Inferior and anxious', 'Angry'], correctIndex: 2, explanation: 'She felt she was the target of ridicule.' }
      ],
      reels: [
        { id: 'r1', title: 'The Dress', content: 'Yellow Silk.\nOld Fashioned.\nMabel\'s nightmare.', color: getReelColor(0) },
        { id: 'r2', title: 'Stream of Consciousness', content: 'Thoughts flowing.\nNo filter.\nInside her mind.', color: getReelColor(1) },
        { id: 'r3', title: 'The Fly', content: 'Fly in a saucer.\nStuck.\nStruggling.', color: getReelColor(2) },
        { id: 'r4', title: 'Insecurity', content: '"They are laughing!"\n"I look wrong!"\nMind games.', color: getReelColor(3) },
        { id: 'r5', title: 'Virginia Woolf', content: 'Modernist writer.\nPsychological depth.\n1882-1941', color: getReelColor(4) }
      ]
    },
    {
      id: 'eng1_6',
      title: '1.6 Into the Wild',
      description: 'Two parts: Lost in the Jungle & Tracking the Panther.',
      summary: '**Part 1**: Kiran Purandare (Lost in the Jungle)\n**Part 2**: Shaaz Jung (Tracking the Panther of Nagarhole)\n**Theme**: Wildlife conservation, adventure, respect for nature.',
      detailedNotes: '### Part 1: Lost in the Jungle (Kiran Purandare)\n* **Author**: Kiran Purandare (environmentalist, "Sakha Nagira").\n* **Incident**: He gets lost in the Umbarzara forest while monitoring bird nests.\n* **Experience**: Fear, panic, finding way by observing nature (droppings, sounds), survival instinct.\n* **Outcome**: He finally finds his way to Pitezari village.\n* **Lesson**: Respect nature, stay calm, trust instincts.\n\n### Part 2: Tracking the Panther of Nagarhole (Shaaz Jung)\n* **Author**: Shaaz Jung (Wildlife photographer).\n* **Subject**: Tracking a leopard named "Saya" (Black Panther) and "Scarface".\n* **Setting**: Nagarhole Tiger Reserve, Karnataka.\n* **Theme**: Passion for wildlife, patience in photography, conservation.\n* **BCRT**: Buffer Conflict Resolution Trust - formed by Shaaz to reduce human-animal conflict.',
      flashcards: [
        { id: 'f1', front: 'Who wrote "Lost in the Jungle"?', back: 'Kiran Purandare.' },
        { id: 'f2', front: 'Who wrote "Tracking the Panther of Nagarhole"?', back: 'Shaaz Jung.' },
        { id: 'f3', front: 'Which forest did Kiran Purandare get lost in?', back: 'Umbarzara.' },
        { id: 'f4', front: 'What is the name of the Black Panther?', back: 'Saya.' },
        { id: 'f5', front: 'What is BCRT?', back: 'Buffer Conflict Resolution Trust.' },
        { id: 'f6', front: 'Where is Nagarhole Tiger Reserve?', back: 'Karnataka.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Kiran Purandare is a famous:', options: ['Actor', 'Environmentalist/Writer', 'Doctor', 'Engineer'], correctIndex: 1, explanation: 'Known for his work in Nagzira.' },
        { id: 'q2', question: 'Shaaz Jung is known for photographing:', options: ['Lions', 'Leopards/Black Panther', 'Elephants', 'Birds'], correctIndex: 1, explanation: 'Famous for Saya the Black Panther.' },
        { id: 'q3', question: 'The village Kiran Purandare reached was:', options: ['Pitezari', 'Nagpur', 'Mumbai', 'Pune'], correctIndex: 0, explanation: 'He walked towards Pitezari.' },
        { id: 'q4', question: 'BCRT aims to resolve conflict between:', options: ['Humans and Animals', 'Two countries', 'Two villages', 'None'], correctIndex: 0, explanation: 'Human-Animal conflict in buffer zones.' }
      ],
      reels: [
        { id: 'r1', title: 'Lost in Jungle', content: 'Kiran Purandare.\nAlone.\nPanic.\nSurvival.', color: getReelColor(0) },
        { id: 'r2', title: 'Black Panther', content: 'Shaaz Jung.\nSaya.\nNagarhole.', color: getReelColor(1) },
        { id: 'r3', title: 'Nature', content: 'Respect it.\nFear it.\nLove it.', color: getReelColor(2) },
        { id: 'r4', title: 'Conservation', content: 'Save Tigers.\nSave Forests.\nCo-existence.', color: getReelColor(3) }
      ]
    },
    {
      id: 'eng1_7',
      title: '1.7 Why We Travel',
      description: 'By Pico Iyer - A philosophical essay on travel.',
      summary: '**Genre**: Travelogue/Essay\n**Author**: Pico Iyer\n**Theme**: Purpose and spiritual aspect of travel.\n\nTravel is not just seeing sights but a journey into oneself. It opens our minds, teaches humility, and helps us escape the routine.',
      detailedNotes: '### Key Arguments\n1. **To Lose and Find Ourselves**: We travel to escape routine and discover who we really are.\n2. **To Open Hearts and Eyes**: To learn about other cultures and perspectives.\n3. **To Become Young Fools**: To be amazed again, to not know everything.\n4. **Cultural Exchange**: We bring our values to them, and take theirs back.\n5. **Internal Journey**: The real voyage is the change in our thinking.\n\n### Quotes\n* "We travel, initially, to lose ourselves; and we travel, next, to find ourselves."\n* "Travel is the best way we have of rescuing the humanity of places, and saving them from abstraction."',
      flashcards: [
        { id: 'f1', front: 'Author of Why We Travel?', back: 'Pico Iyer.' },
        { id: 'f2', front: 'According to Iyer, why do we travel initially?', back: 'To lose ourselves.' },
        { id: 'f3', front: 'What does travel teach us?', back: 'Humility and openness.' },
        { id: 'f4', front: 'Travel helps us escape what?', back: 'Routine and ego.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Pico Iyer says we travel to ______ ourselves.', options: ['Lose and Find', 'Hide', 'Rich', 'Bore'], correctIndex: 0, explanation: 'Lose ourselves (escape) and find ourselves (discover).' },
        { id: 'q2', question: 'Travel makes us feel like ______ again.', options: ['Kings', 'Young fools', 'Teachers', 'Doctors'], correctIndex: 1, explanation: 'Curious and amazed like children.' },
        { id: 'q3', question: 'The essay emphasizes the ______ aspect of travel.', options: ['Financial', 'Spiritual/Internal', 'Physical', 'Political'], correctIndex: 1, explanation: 'It\'s about internal change.' }
      ],
      reels: [
        { id: 'r1', title: 'Why Travel?', content: 'Lose yourself.\nFind yourself.\nOpen your eyes.', color: getReelColor(0) },
        { id: 'r2', title: 'Pico Iyer', content: 'Travel Writer.\nPhilosopher.\nGlobal Soul.', color: getReelColor(1) },
        { id: 'r3', title: 'Lesson', content: 'Be a fool.\nBe curious.\nBe humble.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng1_8',
      title: '1.8 Voyaging Towards Excellence',
      description: 'By Achyut Godbole - An autobiography of a self-made man.',
      summary: '**Genre**: Autobiographical\n**Author**: Achyut Godbole\n**Theme**: Hard work, thirst for knowledge, humility, excellence.\n\nThe author describes his journey from a middle-class childhood in Solapur to becoming a successful CEO and writer. He emphasizes the importance of learning English, loving your work, and staying humble.',
      detailedNotes: '### Childhood\n* **Background**: Solapur, middle-class, rich cultural atmosphere (music, literature).\n* **Education**: IIT Mumbai. Felt inferior due to poor English.\n\n### Struggle & Success\n* **English**: He taught himself English by reading newspapers, dictionaries, and speaking to himself.\n* **Career**: Worked in IT (Tata, Patni, etc.), became CEO.\n* **Philosophy**: "Excellence is not a destination, it is a journey."\n* **Values**: Humility, curiosity, passion for arts and science.\n\n### Key Lessons\n1. **Inferiority Complex**: Can be overcome with hard work.\n2. **Language**: Is a tool, not intelligence, but important for communication.\n3. **Success**: Is not just money, but knowledge and contribution.',
      flashcards: [
        { id: 'f1', front: 'Who is the author of "Voyaging Towards Excellence"?', back: 'Achyut Godbole.' },
        { id: 'f2', front: 'Where did the author study engineering?', back: 'IIT Mumbai.' },
        { id: 'f3', front: 'What was the author\'s main fear at IIT?', back: 'Poor English.' },
        { id: 'f4', front: 'How did he improve his English?', back: 'Reading, dictionary, speaking to self.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Achyut Godbole is a famous writer in ______.', options: ['Hindi', 'Marathi', 'Gujarati', 'Tamil'], correctIndex: 1, explanation: 'He has written many books in Marathi (Musafir, Boardroom, etc.).' },
        { id: 'q2', question: 'The author defines success as ______.', options: ['Money', 'Power', 'Excellence/Knowledge', 'Fame'], correctIndex: 2, explanation: 'He values knowledge and excellence over money.' },
        { id: 'q3', question: 'The author suffered from an inferiority complex due to:', options: ['Poverty', 'Poor English', 'Bad grades', 'Looks'], correctIndex: 1, explanation: 'He couldn\'t speak fluent English initially.' }
      ],
      reels: [
        { id: 'r1', title: 'Achyut Godbole', content: 'IITian.\nCEO.\nWriter.\nLegend.', color: getReelColor(0) },
        { id: 'r2', title: 'Struggle', content: 'Poor English.\nFear.\nHard work.\nMastery.', color: getReelColor(1) },
        { id: 'r3', title: 'Excellence', content: 'Not a destination.\nA journey.\nKeep learning.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng2_1',
      title: '2.1 Song of the Open Road',
      description: 'By Walt Whitman - A poem about freedom and optimism.',
      summary: '**Poet**: Walt Whitman (American poet, "Father of Free Verse")\n**Theme**: Freedom, optimism, self-reliance, joy of travel.\n\nThe poet starts a journey on the open road, feeling free and healthy. He doesn\'t ask for good fortune; he is his own good fortune.',
      detailedNotes: '### Stanza Analysis\n1. **"Afoot and light-hearted..."**: He is happy and ready. The world is before him.\n2. **"Henceforth I ask not good-fortune..."**: He believes in himself. He is done with complaints ("indoor complaints").\n3. **"The long brown path..."**: Symbol of life\'s journey.\n4. **"Delicious burdens"**: Paradox. He carries his memories (burdens) with love. He doesn\'t want to get rid of them.\n\n### Figures of Speech\n* **Metaphor**: Road = Life.\n* **Paradox**: "Delicious burdens" (Burdens are usually heavy/bad, but here they are sweet memories).\n* **Repetition**: "I carry them..."',
      flashcards: [
        { id: 'f1', front: 'Who wrote "Song of the Open Road"?', back: 'Walt Whitman.' },
        { id: 'f2', front: 'What does the "Road" symbolize?', back: 'Journey of Life.' },
        { id: 'f3', front: 'Explain "Delicious burdens".', back: 'Sweet memories of people/places.' },
        { id: 'f4', front: 'What is "Free Verse"?', back: 'Poetry without rhyme or meter.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The poet describes himself as ______.', options: ['Sad and lonely', 'Light-hearted and free', 'Angry', 'Tired'], correctIndex: 1, explanation: '"Afoot and light-hearted I take to the open road."' },
        { id: 'q2', question: '"Delicious burdens" is an example of:', options: ['Simile', 'Paradox', 'Personification', 'Alliteration'], correctIndex: 1, explanation: 'Contradictory ideas (Delicious + Burden).' },
        { id: 'q3', question: 'The poet decides to whimper ______.', options: ['More', 'No more', 'Sometimes', 'Loudly'], correctIndex: 1, explanation: '"Done with indoor complaints, libraries, querulous criticisms."' }
      ],
      reels: [
        { id: 'r1', title: 'Open Road', content: 'Freedom.\nNo limits.\nMy own path.', color: getReelColor(0) },
        { id: 'r2', title: 'Walt Whitman', content: 'Free Verse.\nOptimism.\nDemocracy.', color: getReelColor(1) },
        { id: 'r3', title: 'Attitude', content: 'No complaints.\nNo excuses.\nJust go.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng2_2',
      title: '2.2 Indian Weavers',
      description: 'By Sarojini Naidu - Three stages of life woven into cloth.',
      summary: '**Poet**: Sarojini Naidu ("Nightingale of India")\n**Theme**: Cycle of life (Birth, Youth, Death).\n\nThe poem describes weavers weaving at three different times of the day, symbolizing the three stages of human life.',
      detailedNotes: '### Stanza 1: Morning (Birth)\n* **Time**: Break of day.\n* **Cloth**: Blue as the wing of a halcyon wild.\n* **For**: A new-born child.\n* **Mood**: Happy, fresh, bright.\n\n### Stanza 2: Evening (Youth/Adulthood)\n* **Time**: Fall of night.\n* **Cloth**: Purple and green (Peacock plumes).\n* **For**: Marriage veils of a queen.\n* **Mood**: Energetic, vibrant, royal.\n\n### Stanza 3: Night (Death)\n* **Time**: Moonlight chill.\n* **Cloth**: White as a feather and cloud.\n* **For**: A dead man\'s funeral shroud.\n* **Mood**: Solemn, cold, still.\n\n### Figures of Speech\n* **Simile**: "Blue as the wing...", "White as a feather..."\n* **Symbolism**: Times of day = Stages of life.',
      flashcards: [
        { id: 'f1', front: 'Who wrote "Indian Weavers"?', back: 'Sarojini Naidu.' },
        { id: 'f2', front: 'What does Morning symbolize?', back: 'Birth/Childhood.' },
        { id: 'f3', front: 'What does Night symbolize?', back: 'Death.' },
        { id: 'f4', front: 'What color is the marriage veil?', back: 'Purple and Green.' },
        { id: 'f5', front: 'What is a shroud?', back: 'Cloth to cover a dead body.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The weavers weave ______ at the break of day.', options: ['Robes for a newborn', 'Marriage veils', 'Funeral shroud', 'Curtains'], correctIndex: 0, explanation: 'Morning = Birth.' },
        { id: 'q2', question: 'The color associated with death in the poem is:', options: ['Black', 'White', 'Red', 'Grey'], correctIndex: 1, explanation: '"White as a feather and white as a cloud."' },
        { id: 'q3', question: 'Sarojini Naidu is known as:', options: ['Iron Lady', 'Nightingale of India', 'Queen of Poetry', 'Mother India'], correctIndex: 1, explanation: 'Bharat Kokila.' }
      ],
      reels: [
        { id: 'r1', title: 'Morning', content: 'Blue.\nNewborn.\nJoy.', color: getReelColor(0) },
        { id: 'r2', title: 'Evening', content: 'Purple & Green.\nMarriage.\nPassion.', color: getReelColor(1) },
        { id: 'r3', title: 'Night', content: 'White.\nDeath.\nPeace.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng2_3',
      title: '2.3 The Inchcape Rock',
      description: 'By Robert Southey - A ballad about poetic justice.',
      summary: '**Poet**: Robert Southey\n**Theme**: Poetic Justice ("As you sow, so shall you reap").\n\nThe Abbot of Aberbrothok places a bell on the dangerous Inchcape Rock to save sailors. The wicked Sir Ralph the Rover cuts the bell out of jealousy. Years later, Ralph himself crashes into the rock and dies.',
      detailedNotes: '### The Legend\n* **The Rock**: Dangerous reef near Scottish coast.\n* **The Bell**: Placed by the Abbot. Rang with waves to warn ships.\n* **Sir Ralph**: A pirate. He cut the bell to spite the Abbot and loot ships.\n\n### The Climax\n* Ralph sails away, gets rich, and returns.\n* A storm rises. It is dark.\n* They cannot hear the bell (because he cut it).\n* The ship strikes the Inchcape Rock.\n* Ralph dies in despair, hearing a "knell" like the bell.\n\n### Figures of Speech\n* **Alliteration**: "Surge\'s swell", "Birds of the sea".\n* **Onomatopoeia**: "Gurgling sound".\n* **Ballad**: A narrative poem telling a story.',
      flashcards: [
        { id: 'f1', front: 'Who wrote "The Inchcape Rock"?', back: 'Robert Southey.' },
        { id: 'f2', front: 'Who placed the bell on the rock?', back: 'The Abbot of Aberbrothok.' },
        { id: 'f3', front: 'Who cut the bell?', back: 'Sir Ralph the Rover.' },
        { id: 'f4', front: 'What is the moral of the poem?', back: 'Evil digs a pit for others but falls into it.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The Inchcape Rock was dangerous because:', options: ['It was full of sharks', 'It was hidden under water', 'It was haunted', 'It was too high'], correctIndex: 1, explanation: 'It was a submerged reef.' },
        { id: 'q2', question: 'Sir Ralph cut the bell because of:', options: ['Anger', 'Jealousy/Wickedness', 'Mistake', 'Storm'], correctIndex: 1, explanation: 'He wanted to spoil the Abbot\'s fame.' },
        { id: 'q3', question: 'The poem is a ______.', options: ['Sonnet', 'Ballad', 'Lyric', 'Ode'], correctIndex: 1, explanation: 'A story-telling poem.' }
      ],
      reels: [
        { id: 'r1', title: 'The Bell', content: 'Saved lives.\nBlessed Abbot.\nWarning sound.', color: getReelColor(0) },
        { id: 'r2', title: 'The Villain', content: 'Sir Ralph.\nJealous.\nCut the bell.', color: getReelColor(1) },
        { id: 'r3', title: 'Karma', content: 'Storm came.\nNo bell.\nCrash.\nDeath.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng2_4',
      title: '2.4 Have you Earned your Tomorrow',
      description: 'By Edgar Guest - An inspirational poem about kindness.',
      summary: '**Poet**: Edgar Guest ("People\'s Poet")\n**Theme**: Kindness, helpfulness, self-reflection.\n\nThe poet asks probing questions to the reader about how they spent their day. Did they help anyone? Did they make someone smile? If not, they haven\'t earned the right to live another day.',
      detailedNotes: '### Structure\n* **Questions**: The entire poem is a series of questions.\n* **Tone**: Interrogative, serious, reflective.\n* **Message**: We must do good deeds daily to justify our existence.\n\n### Key Questions\n* "Is anybody happier because you passed his way?"\n* "Did you give a cheerful greeting to the friend who came along?"\n* "Were you selfish pure and simple as you rushed along the way?"\n\n### Figures of Speech\n* **Interrogation**: The whole poem uses this.\n* **Alliteration**: "This day is almost over, and its toiling time is through".',
      flashcards: [
        { id: 'f1', front: 'Who wrote "Have you Earned your Tomorrow"?', back: 'Edgar Guest.' },
        { id: 'f2', front: 'What is the main figure of speech used?', back: 'Interrogation (Rhetorical Questions).' },
        { id: 'f3', front: 'What does the poet want us to do?', back: 'Help others and be kind.' },
        { id: 'f4', front: 'What happens if we don\'t do good deeds?', back: 'We haven\'t earned our tomorrow.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The poet addresses the reader as ______.', options: ['Friend', 'Stranger', 'You', 'Brother'], correctIndex: 2, explanation: 'Direct address to "You".' },
        { id: 'q2', question: 'The poem suggests that our future depends on our ______.', options: ['Money', 'Deeds/Actions', 'Luck', 'Plans'], correctIndex: 1, explanation: 'Good deeds earn us a tomorrow.' },
        { id: 'q3', question: 'Edgar Guest is known as the ______ poet.', options: ['Nature', 'War', 'People\'s', 'Love'], correctIndex: 2, explanation: 'He wrote simple, optimistic poems for common people.' }
      ],
      reels: [
        { id: 'r1', title: 'Question', content: 'Did you help?\nDid you smile?\nDid you care?', color: getReelColor(0) },
        { id: 'r2', title: 'Action', content: 'Don\'t just live.\nGive.\nShare.\nLove.', color: getReelColor(1) },
        { id: 'r3', title: 'Tomorrow', content: 'Earn it.\nDeserve it.\nBy doing good.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng2_5',
      title: '2.5 Father Returning Home',
      description: 'By Dilip Chitre - Alienation of an elderly man.',
      summary: '**Poet**: Dilip Chitre (Bilingual poet - Marathi/English)\n**Theme**: Alienation, generation gap, loneliness.\n\nThe poem depicts a dull evening in the life of an old father. He travels in a crowded train, unnoticed. At home, he is ignored by his children. He finds comfort only in his past or future (dreams).',
      detailedNotes: '### The Journey\n* **Train**: "Late evening train", "Silent commuters". He is alone in a crowd.\n* **Appearance**: "Soggy shirt", "Black raincoat stained with mud", "Bag full of books". Shows struggle and hard work.\n\n### At Home\n* **Food**: "Weak tea", "Stale chapati". Shows neglect.\n* **Children**: "Sullen children have often refused to share jokes and secrets".\n* **Escape**: He goes to the toilet to contemplate. He listens to the static on the radio. He dreams of ancestors or grandchildren.\n\n### Figures of Speech\n* **Simile**: "Like a word dropped from a long sentence."\n* **Imagery**: Visual description of the train, rain, and home.',
      flashcards: [
        { id: 'f1', front: 'Who wrote "Father Returning Home"?', back: 'Dilip Chitre.' },
        { id: 'f2', front: 'What does the "soggy shirt" indicate?', back: 'Rain and sweat/Hard work.' },
        { id: 'f3', front: 'Why does the father go to the toilet?', back: 'To be alone/contemplate.' },
        { id: 'f4', front: 'What do the children refuse to share?', back: 'Jokes and secrets.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The father travels by ______.', options: ['Bus', 'Car', 'Local Train', 'Walking'], correctIndex: 2, explanation: 'Mumbai local train setting.' },
        { id: 'q2', question: 'The line "Like a word dropped from a long sentence" is a ______.', options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'], correctIndex: 1, explanation: 'Uses "like".' },
        { id: 'q3', question: 'The father feels ______ in his own home.', options: ['Happy', 'Angry', 'Alienated/Stranger', 'Powerful'], correctIndex: 2, explanation: 'He is ignored and lonely.' }
      ],
      reels: [
        { id: 'r1', title: 'The Commute', content: 'Crowd.\nRain.\nSweat.\nSilence.', color: getReelColor(0) },
        { id: 'r2', title: 'The Home', content: 'Stale food.\nNo talk.\nIgnored.', color: getReelColor(1) },
        { id: 'r3', title: 'The Escape', content: 'Radio.\nDreams.\nPast & Future.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng2_6',
      title: '2.6 Money',
      description: 'By William H. Davies - True happiness vs Money.',
      summary: '**Poet**: William H. Davies (Welsh poet, "Tramp Poet")\n**Theme**: Money, happiness, false friends vs true friends.\n\nThe poet says that when he was rich, he had many false friends. But when he became poor, he found true happiness and true friends, even though they were few.',
      detailedNotes: '### Rich Man\'s World\n* **Friends**: "Many a false man as a friend came knocking all day at my door."\n* **Feeling**: Worried, anxious, no freedom.\n\n### Poor Man\'s World\n* **Friends**: Few, but real.\n* **Feeling**: Happy, free. "Poor men laugh" while "Rich men\'s wives hum like bees" (complaining).\n\n### Conclusion\n* Money is not evil, but it attracts fake people.\n* Poverty is not bad if you have joy.\n* "When I had money, money, O! My many friends proved all untrue."\n\n### Figures of Speech\n* **Inversion**: "For many a false man as a friend..."\n* **Simile**: "Like a child that holds a trumpet..."\n* **Repetition**: "Money, money, O!"',
      flashcards: [
        { id: 'f1', front: 'Who wrote "Money"?', back: 'William H. Davies.' },
        { id: 'f2', front: 'What happened when the poet was rich?', back: 'He had many false friends.' },
        { id: 'f3', front: 'What happened when the poet became poor?', back: 'He found true happiness.' },
        { id: 'f4', front: 'What do "Rich men\'s wives" do?', back: 'Hum like bees (Complain).' }
      ],
      mcqs: [
        { id: 'q1', question: 'The poet compares himself to a ______ with a trumpet.', options: ['Musician', 'Soldier', 'Child', 'King'], correctIndex: 2, explanation: 'He couldn\'t speak his mind (blow his trumpet) when rich.' },
        { id: 'q2', question: 'According to the poet, poor men need not go ______.', options: ['Down', 'Up', 'Away', 'Home'], correctIndex: 1, explanation: '"Poor men need not go up (to become rich) so much as rich men should come down."' },
        { id: 'q3', question: 'The poem celebrates the value of ______.', options: ['Wealth', 'Simplicity/Poverty', 'Power', 'Fame'], correctIndex: 1, explanation: 'True joy is in simplicity.' }
      ],
      reels: [
        { id: 'r1', title: 'Rich vs Poor', content: 'Rich = Fake friends.\nPoor = True friends.\nChoose wisely.', color: getReelColor(0) },
        { id: 'r2', title: 'Happiness', content: 'Not in gold.\nIn laughter.\nIn freedom.', color: getReelColor(1) },
        { id: 'r3', title: 'Lesson', content: 'Money blinds.\nPoverty reveals.\nBe real.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng2_7',
      title: '2.7 She Walks in Beauty',
      description: 'By Lord Byron - A poem praising inner and outer beauty.',
      summary: '**Poet**: Lord Byron (Romantic poet)\n**Theme**: Beauty (Physical and Spiritual), Harmony.\n\nThe poet describes a woman (his cousin by marriage) who looks beautiful in a black dress. He praises not just her face, but her mind and heart.',
      detailedNotes: '### The Description\n* **Appearance**: "Like the night of cloudless climes and starry skies." (Dark hair, bright eyes).\n* **Balance**: "One shade the more, one ray the less" would have spoiled her beauty. Perfect balance of dark and light.\n* **Face**: "Soft, so calm, yet eloquent."\n\n### Inner Beauty\n* Her external beauty reflects her inner goodness.\n* "A mind at peace with all below."\n* "A heart whose love is innocent."\n\n### Figures of Speech\n* **Simile**: "She walks in beauty, like the night..."\n* **Alliteration**: "Cloudless climes", "Starry skies".\n* **Antithesis**: "Dark and Bright".',
      flashcards: [
        { id: 'f1', front: 'Who wrote "She Walks in Beauty"?', back: 'Lord Byron.' },
        { id: 'f2', front: 'What is the woman compared to?', back: 'A cloudless, starry night.' },
        { id: 'f3', front: 'What two things are perfectly balanced in her?', back: 'Dark and Bright.' },
        { id: 'f4', front: 'What does her beauty reflect?', back: 'Her innocent heart and peaceful mind.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The poem praises the woman\'s ______.', options: ['Dress', 'Jewelry', 'Inner and Outer Beauty', 'Voice'], correctIndex: 2, explanation: 'Both physical and spiritual beauty.' },
        { id: 'q2', question: '"She walks in beauty, like the night" is a ______.', options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'], correctIndex: 1, explanation: 'Uses "like".' },
        { id: 'q3', question: 'The woman\'s love is described as ______.', options: ['Passionate', 'Innocent', 'Wild', 'Fake'], correctIndex: 1, explanation: '"A heart whose love is innocent."' }
      ],
      reels: [
        { id: 'r1', title: 'Beauty', content: 'Like the night.\nStarry skies.\nDark & Bright.', color: getReelColor(0) },
        { id: 'r2', title: 'Perfection', content: 'Perfect balance.\nSoft & Calm.\nEloquent.', color: getReelColor(1) },
        { id: 'r3', title: 'Soul', content: 'Peaceful mind.\nInnocent heart.\nTrue beauty.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng2_8',
      title: '2.8 Small Towns and Rivers',
      description: 'By Mamang Dai - Nature and life in Arunachal Pradesh.',
      summary: '**Poet**: Mamang Dai (Poet from Arunachal Pradesh)\n**Theme**: Nature, Death, Eternity, Preservation.\n\nThe poem describes the landscape of her hometown (Pasighat) and the river. It contrasts the permanence of nature (river) with the transience of human life (small towns).',
      detailedNotes: '### The Town\n* **Description**: "Small towns always remind me of death."\n* **Atmosphere**: Grim, silent, unchanging. "In the summer, winter, monsoon... it is always the same."\n\n### The River\n* **Description**: "The river has a soul." It cuts through the land like a torrent of grief.\n* **Significance**: It is eternal. It knows the immortality of water.\n\n### Beliefs\n* **Afterlife**: "We are all going to the same place." (Death is inevitable).\n* **Nature**: The river and mountains are permanent witnesses to human life and death.\n\n### Figures of Speech\n* **Personification**: "The river has a soul."\n* **Metaphor**: River = Grief/Eternity.\n* **Irony**: Small towns (human habitation) remind of death, while nature (river) reminds of life/eternity.',
      flashcards: [
        { id: 'f1', front: 'Who wrote "Small Towns and Rivers"?', back: 'Mamang Dai.' },
        { id: 'f2', front: 'What do small towns remind the poet of?', back: 'Death.' },
        { id: 'f3', front: 'What does the river have?', back: 'A soul.' },
        { id: 'f4', front: 'Where is the poet from?', back: 'Arunachal Pradesh.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The river is described as a torrent of ______.', options: ['Joy', 'Grief', 'Water', 'Mud'], correctIndex: 1, explanation: '"Like a torrent of grief."' },
        { id: 'q2', question: 'The poem contrasts ______ and ______.', options: ['City and Village', 'Life and Death', 'Rich and Poor', 'War and Peace'], correctIndex: 1, explanation: 'Permanence of nature vs transience of life.' },
        { id: 'q3', question: 'The poet believes that the river knows ______.', options: ['Everything', 'The immortality of water', 'The secrets of the town', 'The future'], correctIndex: 1, explanation: '"It knows the immortality of water."' }
      ],
      reels: [
        { id: 'r1', title: 'Small Towns', content: 'Remind of death.\nSilent.\nUnchanging.', color: getReelColor(0) },
        { id: 'r2', title: 'The River', content: 'Has a soul.\nEternal.\nTorrent of grief.', color: getReelColor(1) },
        { id: 'r3', title: 'Nature', content: 'Immortal.\nWitness.\nDivine.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng3_1',
      title: '3.1 Summary Writing',
      description: 'How to write a concise summary of a passage.',
      summary: '**Definition**: A brief statement or account of the main points of something.\n**Goal**: To reduce the text to 1/3rd of its original length while keeping the core meaning.',
      detailedNotes: '### Steps to Write a Summary\n1. **Read**: Read the passage twice to understand the central idea.\n2. **Select**: Highlight key points/sentences. Ignore examples, repetitions, and minor details.\n3. **Draft**: Write the points in your own words. Connect them logically.\n4. **Edit**: Check for grammar and flow. Ensure it is concise.\n5. **Title**: Give a suitable title.\n\n### Do\'s and Don\'ts\n* **Do**: Use your own words, keep it short, cover all main points.\n* **Don\'t**: Add your own opinion, give examples, repeat points, or copy sentences directly.',
      flashcards: [
        { id: 'f1', front: 'What is the ideal length of a summary?', back: 'About 1/3rd of the original text.' },
        { id: 'f2', front: 'Should you include examples in a summary?', back: 'No.' },
        { id: 'f3', front: 'Should you add your own opinion?', back: 'No.' },
        { id: 'f4', front: 'What is the first step in summary writing?', back: 'Read and understand the passage.' }
      ],
      mcqs: [
        { id: 'q1', question: 'A summary should be written in ______.', options: ['The author\'s words', 'Your own words', 'Poetic language', 'Bullet points'], correctIndex: 1, explanation: 'Always use your own words.' },
        { id: 'q2', question: 'Which of these should be EXCLUDED from a summary?', options: ['Main idea', 'Key arguments', 'Examples and repetitions', 'Conclusion'], correctIndex: 2, explanation: 'Examples and repetitions add unnecessary length.' },
        { id: 'q3', question: 'A good summary must always have a ______.', options: ['Picture', 'Title', 'Quote', 'Joke'], correctIndex: 1, explanation: 'A suitable title is mandatory.' }
      ],
      reels: [
        { id: 'r1', title: 'Summary', content: 'Short.\nSweet.\nTo the point.', color: getReelColor(0) },
        { id: 'r2', title: 'Rule of 3', content: 'Read.\nSelect.\nWrite.', color: getReelColor(1) },
        { id: 'r3', title: 'Don\'t', content: 'No examples.\nNo opinions.\nNo copying.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng3_2',
      title: '3.2 Mind Mapping',
      description: 'Visualizing ideas and concepts.',
      summary: '**Definition**: A graphical way to represent ideas and concepts.\n**Goal**: To structure information, helping you to better analyze, comprehend, synthesize, recall and generate new ideas.',
      detailedNotes: '### Components\n1. **Central Idea**: The main topic in the center.\n2. **Branches**: Major sub-topics radiating from the center.\n3. **Twigs**: Minor details branching off from the main branches.\n4. **Keywords**: Use single words or short phrases.\n5. **Images/Colors**: Use visuals to make it memorable.\n\n### Benefits\n* Improves memory and recall.\n* Makes complex information simple.\n* Boosts creativity.\n* Saves time in revision.',
      flashcards: [
        { id: 'f1', front: 'What is in the center of a Mind Map?', back: 'The Main Idea/Topic.' },
        { id: 'f2', front: 'What radiates from the central idea?', back: 'Branches (Sub-topics).' },
        { id: 'f3', front: 'Why use colors and images?', back: 'To improve memory and engagement.' },
        { id: 'f4', front: 'Mind mapping is a ______ tool.', back: 'Visual/Graphical.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Mind mapping helps in ______.', options: ['Confusing ideas', 'Structuring information', 'Writing long essays', 'Sleeping'], correctIndex: 1, explanation: 'It organizes thoughts visually.' },
        { id: 'q2', question: 'The main topic is placed ______ of the page.', options: ['At the top', 'At the bottom', 'In the center', 'In the corner'], correctIndex: 2, explanation: 'Central idea goes in the center.' },
        { id: 'q3', question: 'You should use ______ in a mind map.', options: ['Long sentences', 'Keywords', 'Paragraphs', 'Essays'], correctIndex: 1, explanation: 'Keywords are better for recall.' }
      ],
      reels: [
        { id: 'r1', title: 'Mind Map', content: 'Visual.\nCreative.\nEffective.', color: getReelColor(0) },
        { id: 'r2', title: 'Structure', content: 'Center.\nBranches.\nTwigs.', color: getReelColor(1) },
        { id: 'r3', title: 'Use it', content: 'For exams.\nFor planning.\nFor life.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng3_3',
      title: '3.3 Note Making',
      description: 'Organizing information systematically.',
      summary: '**Definition**: Recording important details from a source (text/speech) in a structured format.\n**Goal**: To keep a record for future reference and revision.',
      detailedNotes: '### Formats\n1. **Linear Format**: Headings, Sub-headings, Points (1, 1.1, 1.1.1).\n2. **Tree Diagram**: Hierarchical structure.\n3. **Flow Chart**: Process or sequence.\n4. **Table**: Comparison or classification.\n\n### Key Elements\n* **Title**: Clear and relevant.\n* **Indentation**: Shows hierarchy (Main point -> Sub point).\n* **Abbreviations**: Use standard or self-made abbreviations (e.g., "govt." for government) with a key.\n* **Keywords**: Avoid full sentences.',
      flashcards: [
        { id: 'f1', front: 'What is essential in Note Making?', back: 'Structure and Brevity.' },
        { id: 'f2', front: 'What shows the hierarchy of points?', back: 'Indentation.' },
        { id: 'f3', front: 'Can we use abbreviations in Note Making?', back: 'Yes, it is encouraged.' },
        { id: 'f4', front: 'Name one format of Note Making.', back: 'Tree Diagram / Flow Chart / Table.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Note Making is different from Note Taking because it is ______.', options: ['Faster', 'More structured/processed', 'Messy', 'Verbatim'], correctIndex: 1, explanation: 'Note Making involves processing and organizing.' },
        { id: 'q2', question: 'Which of these is NOT a format for Note Making?', options: ['Tree Diagram', 'Flow Chart', 'Essay', 'Table'], correctIndex: 2, explanation: 'Essay is long-form writing.' },
        { id: 'q3', question: 'A ______ is necessary to explain abbreviations used.', options: ['Key/Legend', 'Map', 'Picture', 'Title'], correctIndex: 0, explanation: 'Key helps decode abbreviations.' }
      ],
      reels: [
        { id: 'r1', title: 'Note Making', content: 'Organize.\nCondense.\nRemember.', color: getReelColor(0) },
        { id: 'r2', title: 'Formats', content: 'Tree.\nFlowchart.\nTable.', color: getReelColor(1) },
        { id: 'r3', title: 'Tips', content: 'Use keywords.\nUse symbols.\nKeep it short.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng3_4',
      title: '3.4 Statement of Purpose',
      description: 'Writing a personal essay for university admission.',
      summary: '**Definition**: A personal essay explaining why you want to join a specific course/university.\n**Goal**: To convince the admission committee of your suitability.',
      detailedNotes: '### Structure (5 Paragraphs)\n1. **Introduction**: Personal background, aim in life.\n2. **Why this field?**: Interest, inspiration, passion.\n3. **Qualities/Experience**: Achievements, hobbies, extracurriculars relevant to the field.\n4. **Why this University?**: Specific reasons (faculty, facilities, curriculum).\n5. **Conclusion**: Future goals and how this course helps.\n\n### Tips\n* Be honest and original.\n* Show, don\'t just tell.\n* Avoid slang and informal language.\n* Stick to the word limit (usually 500 words).',
      flashcards: [
        { id: 'f1', front: 'What is SOP?', back: 'Statement of Purpose.' },
        { id: 'f2', front: 'Who reads the SOP?', back: 'Admission Committee.' },
        { id: 'f3', front: 'What should the first paragraph contain?', back: 'Personal background and aim.' },
        { id: 'f4', front: 'Why is SOP important?', back: 'It distinguishes you from other applicants.' }
      ],
      mcqs: [
        { id: 'q1', question: 'SOP stands for ______.', options: ['Standard Operating Procedure', 'Statement of Purpose', 'State of Power', 'System of Planning'], correctIndex: 1, explanation: 'In college admissions context.' },
        { id: 'q2', question: 'The tone of an SOP should be ______.', options: ['Casual', 'Formal and Personal', 'Aggressive', 'Funny'], correctIndex: 1, explanation: 'Professional yet personal.' },
        { id: 'q3', question: 'In SOP, you should highlight your ______.', options: ['Weaknesses', 'Strengths and Goals', 'Family history', 'Complaints'], correctIndex: 1, explanation: 'Focus on why you are a good candidate.' }
      ],
      reels: [
        { id: 'r1', title: 'SOP', content: 'Your story.\nYour dream.\nYour future.', color: getReelColor(0) },
        { id: 'r2', title: 'Structure', content: 'Intro.\nPassion.\nExperience.\nWhy Us?', color: getReelColor(1) },
        { id: 'r3', title: 'Tip', content: 'Be unique.\nBe honest.\nBe you.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng3_5',
      title: '3.5 Drafting a Virtual Message',
      description: 'Conveying messages clearly and briefly.',
      summary: '**Definition**: Converting a telephonic conversation into a written message for a third party.\n**Goal**: To convey the correct information without ambiguity.',
      detailedNotes: '### Format\n* **Date**: Top left.\n* **Time**: Below date.\n* **To**: Name of receiver.\n* **Body**: The message (Who called? Why? What action is needed?).\n* **From**: Name of writer.\n\n### Key Points\n* Include only the most important details.\n* Use reported speech (Indirect speech).\n* Be polite and clear.\n* Do not add new information.',
      flashcards: [
        { id: 'f1', front: 'What is a Virtual Message?', back: 'A message drafted for someone else based on a call/info.' },
        { id: 'f2', front: 'What tense is usually used?', back: 'Indirect Speech (Past tense).' },
        { id: 'f3', front: 'What are the essential parts?', back: 'Date, Time, To, Body, From.' },
        { id: 'f4', front: 'Should you add your own opinion?', back: 'No.' }
      ],
      mcqs: [
        { id: 'q1', question: 'A virtual message is usually drafted when the receiver is ______.', options: ['Present', 'Absent/Unavailable', 'Sleeping', 'Busy'], correctIndex: 1, explanation: 'You take the message because they are not there.' },
        { id: 'q2', question: 'The message should be written in ______ speech.', options: ['Direct', 'Indirect', 'Poetic', 'Future'], correctIndex: 1, explanation: 'Reported speech.' },
        { id: 'q3', question: 'The most important thing in a message is ______.', options: ['Length', 'Accuracy', 'Handwriting', 'Paper quality'], correctIndex: 1, explanation: 'Information must be correct.' }
      ],
      reels: [
        { id: 'r1', title: 'Message', content: 'Who called?\nWhy?\nWhen?', color: getReelColor(0) },
        { id: 'r2', title: 'Format', content: 'Date & Time.\nTo & From.\nBody.', color: getReelColor(1) },
        { id: 'r3', title: 'Rule', content: 'Be brief.\nBe clear.\nNo gossip.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng3_6',
      title: '3.6 Group Discussion',
      description: 'Exchanging ideas in a group setting.',
      summary: '**Definition**: A formal discussion on a topic by a group of participants.\n**Goal**: To evaluate communication skills, leadership, teamwork, and knowledge.',
      detailedNotes: '### Skills Evaluated\n1. **Communication**: Fluency, clarity, listening skills.\n2. **Knowledge**: Content, facts, logic.\n3. **Leadership**: Initiating, guiding, summarizing.\n4. **Teamwork**: Respecting others, allowing others to speak, conflict resolution.\n\n### Do\'s and Don\'ts\n* **Do**: Listen carefully, speak clearly, respect others, maintain eye contact.\n* **Don\'t**: Interrupt aggressively, dominate the discussion, be rude, go off-topic.',
      flashcards: [
        { id: 'f1', front: 'What is GD?', back: 'Group Discussion.' },
        { id: 'f2', front: 'What is the ideal group size?', back: '8-12 members.' },
        { id: 'f3', front: 'Name one leadership skill in GD.', back: 'Initiating or Summarizing.' },
        { id: 'f4', front: 'Is listening important in GD?', back: 'Yes, as important as speaking.' }
      ],
      mcqs: [
        { id: 'q1', question: 'In a GD, you should ______.', options: ['Shout to be heard', 'Interrupt others', 'Listen and speak logically', 'Stay silent'], correctIndex: 2, explanation: 'Balance between listening and speaking.' },
        { id: 'q2', question: 'A good leader in GD ______.', options: ['Dominates everyone', 'Encourages others to speak', 'Argues loudly', 'Ignores the topic'], correctIndex: 1, explanation: 'Facilitates the discussion.' },
        { id: 'q3', question: 'Body language in GD should be ______.', options: ['Aggressive', 'Positive and Open', 'Lazy', 'Closed'], correctIndex: 1, explanation: 'Eye contact, nodding, sitting straight.' }
      ],
      reels: [
        { id: 'r1', title: 'GD Skills', content: 'Speak.\nListen.\nLead.', color: getReelColor(0) },
        { id: 'r2', title: 'Teamwork', content: 'Respect.\nCollaborate.\nConclude.', color: getReelColor(1) },
        { id: 'r3', title: 'Win', content: 'Be confident.\nBe logical.\nBe polite.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng4_1',
      title: '4.1 History of Novel',
      description: 'Evolution and elements of the novel.',
      summary: '**Definition**: A long narrative fiction which describes intimate human experiences normally in a prose form.\n**Origin**: Derived from Italian word "Novella" (new).',
      detailedNotes: '### History\n* **18th Century**: Rise of the novel (Industrial Revolution, Middle Class).\n* **First Novel**: "The Tale of Genji" (Murasaki Shikibu) - 1010 AD.\n* **First European Novel**: "Don Quixote" (Cervantes).\n* **Indian Novel**: "Rajmohan\'s Wife" (Bankim Chandra Chattopadhyaya).\n\n### Elements of Novel\n1. **Theme**: Central idea.\n2. **Plot**: The story/events.\n3. **Character**: People in the story.\n4. **Setting**: Place and time.\n5. **Conflict**: Struggle between forces.\n6. **Language/Style**: How it is written.\n\n### Types\n* Realistic, Picaresque, Historical, Epistolary, Gothic, Autobiographical, Allegorical, Utopian/Dystopian, Psychological, Stream of Consciousness.',
      flashcards: [
        { id: 'f1', front: 'What does "Novella" mean?', back: 'New.' },
        { id: 'f2', front: 'Who wrote the first Indian English novel?', back: 'Bankim Chandra Chattopadhyaya.' },
        { id: 'f3', front: 'What are the 6 elements of a novel?', back: 'Theme, Plot, Character, Setting, Conflict, Style.' },
        { id: 'f4', front: 'What is a Picaresque novel?', back: 'Adventures of a rogue/eccentric hero.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The novel as a literary genre gained popularity in the ______ century.', options: ['16th', '17th', '18th', '19th'], correctIndex: 2, explanation: 'With the rise of the middle class.' },
        { id: 'q2', question: '"Don Quixote" is written by ______.', options: ['Shakespeare', 'Cervantes', 'Milton', 'Dickens'], correctIndex: 1, explanation: 'Spanish writer Miguel de Cervantes.' },
        { id: 'q3', question: 'A novel written in the form of letters is called ______.', options: ['Gothic', 'Epistolary', 'Historical', 'Psychological'], correctIndex: 1, explanation: 'Epistola means letter.' }
      ],
      reels: [
        { id: 'r1', title: 'Novel', content: 'New.\nLong.\nProse.', color: getReelColor(0) },
        { id: 'r2', title: 'Elements', content: 'Plot.\nCharacter.\nSetting.\nTheme.', color: getReelColor(1) },
        { id: 'r3', title: 'Types', content: 'Gothic.\nSci-Fi.\nRealistic.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng4_2',
      title: '4.2 To Sir, With Love',
      description: 'By E.R. Braithwaite - Teacher-student relationship.',
      summary: '**Author**: E.R. Braithwaite (Guyanese-British)\n**Theme**: Racism, prejudice, student-teacher relationship, transformation.\n\nThe novel is autobiographical. Braithwaite, a black engineer, becomes a teacher in a rough London school. He faces racism and disrespect but wins the students over with patience, respect, and unconventional methods.',
      detailedNotes: '### Characters\n* **E.R. Braithwaite**: The narrator/teacher. Intelligent, patient, dignified.\n* **The Students**: Denham, Fernman, Potter, Miss Dare, Miss Phillips. Initially rude, later respectful.\n* **Mr. Florian**: The headmaster. Liberal views.\n\n### Plot Summary (Chapter 17)\n* **The Half-Yearly Report**: Students present reports on what they learned.\n* **Transformation**: The students conduct the program professionally. They show maturity and knowledge.\n* **Denham\'s Criticism**: Denham criticizes the P.T. class as useless.\n* **Miss Phillips\' Defense**: She coolly explains the importance of P.T., outwitting Denham.\n* **Braithwaite\'s Pride**: He feels proud of his "children" seeing them act like adults.',
      flashcards: [
        { id: 'f1', front: 'Who is the author of "To Sir, With Love"?', back: 'E.R. Braithwaite.' },
        { id: 'f2', front: 'What is the main theme?', back: 'Racism and Student-Teacher relationship.' },
        { id: 'f3', front: 'Who criticizes the P.T. class?', back: 'Denham.' },
        { id: 'f4', front: 'Who defends the P.T. class?', back: 'Miss Phillips.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The novel "To Sir, With Love" is ______ in nature.', options: ['Fictional', 'Autobiographical', 'Historical', 'Sci-Fi'], correctIndex: 1, explanation: 'Based on author\'s real life.' },
        { id: 'q2', question: 'The students initially treated the narrator with ______.', options: ['Respect', 'Love', 'Disrespect/Hostility', 'Fear'], correctIndex: 2, explanation: 'They were rude and racist.' },
        { id: 'q3', question: 'Miss Phillips proved to be ______ than she looked.', options: ['Weaker', 'Dumber', 'Tougher/Smarter', 'Meaner'], correctIndex: 2, explanation: 'She handled Denham effectively.' }
      ],
      reels: [
        { id: 'r1', title: 'The Teacher', content: 'Black Engineer.\nNo job.\nBecomes Teacher.', color: getReelColor(0) },
        { id: 'r2', title: 'The Challenge', content: 'Rude kids.\nRacism.\nDisrespect.', color: getReelColor(1) },
        { id: 'r3', title: 'The Victory', content: 'Respect.\nLove.\n"Sir".', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng4_3',
      title: '4.3 Around the World in 80 Days',
      description: 'By Jules Verne - An adventure novel.',
      summary: '**Author**: Jules Verne (French, "Father of Sci-Fi")\n**Theme**: Adventure, time, determination, loyalty.\n\nPhileas Fogg, a precise English gentleman, bets that he can travel around the world in 80 days. He travels with his servant Passepartout, saves Aouda, and is chased by Detective Fix.',
      detailedNotes: '### Characters\n* **Phileas Fogg**: Protagonist. Exact, calm, rich, determined.\n* **Passepartout**: French servant. Loyal, funny, emotional.\n* **Aouda**: Indian princess saved from Sati. Gentle, loving.\n* **Detective Fix**: Antagonist. Thinks Fogg is a bank robber.\n\n### Plot Summary (The End)\n* **The Mistake**: Fogg thinks he arrived 5 minutes late and lost the bet.\n* **The Twist**: He traveled East, so he gained a day (crossed International Date Line).\n* **The Win**: He realizes it just in time, rushes to the club, and wins the bet.\n* **The Prize**: Not just money, but love (Aouda).',
      flashcards: [
        { id: 'f1', front: 'Who is the main character?', back: 'Phileas Fogg.' },
        { id: 'f2', front: 'What was the bet amount?', back: '20,000 pounds.' },
        { id: 'f3', front: 'Who is the servant?', back: 'Passepartout.' },
        { id: 'f4', front: 'How did Fogg gain a day?', back: 'By traveling Eastward.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Phileas Fogg is a member of the ______ Club.', options: ['Reform', 'Rotary', 'Lions', 'Sports'], correctIndex: 0, explanation: 'Reform Club, London.' },
        { id: 'q2', question: 'Detective Fix follows Fogg because he thinks Fogg is a ______.', options: ['Spy', 'Bank Robber', 'Murderer', 'Prince'], correctIndex: 1, explanation: 'Robber of Bank of England.' },
        { id: 'q3', question: 'The most important reward Fogg gained was ______.', options: ['Money', 'Fame', 'Aouda/Love', 'Power'], correctIndex: 2, explanation: '"He had won a charming woman."' }
      ],
      reels: [
        { id: 'r1', title: 'The Bet', content: '80 Days.\nAround World.\n20,000 Pounds.', color: getReelColor(0) },
        { id: 'r2', title: 'The Journey', content: 'Train.\nShip.\nElephant.\nSledge.', color: getReelColor(1) },
        { id: 'r3', title: 'The Twist', content: 'Lost?\nNo!\nGained a day!', color: getReelColor(2) }
      ]
    },
    {
      id: 'eng4_4',
      title: '4.4 The Sign of Four',
      description: 'By Arthur Conan Doyle - A Sherlock Holmes mystery.',
      summary: '**Author**: Sir Arthur Conan Doyle\n**Theme**: Mystery, greed, justice, deduction.\n\nMary Morstan asks Sherlock Holmes to help her find her missing father and the sender of anonymous pearls. The mystery leads to a treasure, a wooden-legged man (Jonathan Small), and a pact called "The Sign of Four".',
      detailedNotes: '### Characters\n* **Sherlock Holmes**: The detective. Logical, observant, brilliant.\n* **Dr. Watson**: The narrator. Loyal friend, romantic (falls for Mary).\n* **Mary Morstan**: The client. Calm, refined.\n* **Thaddeus Sholto**: Son of Major Sholto. Nervous, eccentric.\n* **Jonathan Small**: The antagonist. Wooden-legged convict.\n\n### Plot Summary (Chapter 2 & 3)\n* **The Case**: Mary receives pearls every year. Now she is asked to meet the sender.\n* **The Clues**: A map with "The Sign of Four" (Jonathan Small, Mahomet Singh, Abdullah Khan, Dost Akbar).\n* **The Meeting**: They meet Thaddeus Sholto who reveals that Mary is heir to a great treasure (Agra Treasure).\n* **The Twist**: When they go to claim it, they find Bartholomew Sholto murdered and the treasure gone.',
      flashcards: [
        { id: 'f1', front: 'Who is the detective?', back: 'Sherlock Holmes.' },
        { id: 'f2', front: 'Who is the narrator?', back: 'Dr. Watson.' },
        { id: 'f3', front: 'What does Mary receive every year?', back: 'A pearl.' },
        { id: 'f4', front: 'Who is the wooden-legged man?', back: 'Jonathan Small.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Sherlock Holmes lives at ______.', options: ['221B Baker Street', '10 Downing Street', 'Buckingham Palace', 'Scotland Yard'], correctIndex: 0, explanation: 'Famous address.' },
        { id: 'q2', question: 'The treasure in the story is known as the ______ Treasure.', options: ['Agra', 'Delhi', 'Mumbai', 'London'], correctIndex: 0, explanation: 'Stolen from Agra Fort.' },
        { id: 'q3', question: 'Dr. Watson falls in love with ______.', options: ['Mrs. Hudson', 'Mary Morstan', 'Irene Adler', 'None'], correctIndex: 1, explanation: 'He marries her at the end.' }
      ],
      reels: [
        { id: 'r1', title: 'The Case', content: 'Missing Father.\nPearls.\nSign of Four.', color: getReelColor(0) },
        { id: 'r2', title: 'Holmes', content: 'Deduction.\nLogic.\nScience.', color: getReelColor(1) },
        { id: 'r3', title: 'The Hunt', content: 'Treasure.\nMurder.\nChase.', color: getReelColor(2) }
      ]
    }
  ]
};
