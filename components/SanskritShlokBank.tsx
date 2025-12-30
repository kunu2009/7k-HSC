import React, { useState } from 'react';
import { X, BookOpen, Volume2, Copy, CheckCircle, Search, Star, ChevronDown, ChevronUp, Sparkles, Quote } from 'lucide-react';

interface SanskritShlokBankProps {
  onClose: () => void;
}

interface Shlok {
  id: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  source: string;
  chapter: string;
  importance: 'high' | 'medium';
  grammar?: string;
}

const SanskritShlokBank: React.FC<SanskritShlokBankProps> = ({ onClose }) => {
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [expandedShlok, setExpandedShlok] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const chapters = [
    { id: 'all', name: 'सभी पाठ' },
    { id: 'subhashit', name: 'सुभाषित' },
    { id: 'vidya', name: 'विद्या महिमा' },
    { id: 'dharma', name: 'धर्म एवं नीति' },
    { id: 'prakruti', name: 'प्रकृति वर्णन' },
    { id: 'mahapurush', name: 'महापुरुष' }
  ];

  const shloks: Shlok[] = [
    // Vidya (Education) Shloks
    {
      id: 'v1',
      sanskrit: 'विद्या ददाति विनयं विनयाद्याति पात्रताम्।\nपात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥',
      transliteration: 'Vidyā dadāti vinayaṁ vinayādyāti pātratām,\nPātratvaāddhanamāpnoti dhanāddharmam tataḥ sukham.',
      meaning: 'विद्या विनय (नम्रता) देती है, विनय से योग्यता आती है, योग्यता से धन मिलता है, धन से धर्म होता है और धर्म से सुख प्राप्त होता है।',
      source: 'हितोपदेश',
      chapter: 'vidya',
      importance: 'high',
      grammar: 'ददाति - दा धातु, लट् लकार, प्रथम पुरुष, एकवचन'
    },
    {
      id: 'v2',
      sanskrit: 'विद्या नाम नरस्य रूपमधिकं प्रच्छन्नगुप्तं धनम्।\nविद्या भोगकरी यशःसुखकरी विद्या गुरूणां गुरुः॥',
      transliteration: 'Vidyā nāma narasya rūpamadhikaṁ pracchanaguptaṁ dhanam,\nVidyā bhogakarī yaśaḥsukhakarī vidyā gurūṇāṁ guruḥ.',
      meaning: 'विद्या मनुष्य का श्रेष्ठ रूप है, छिपा हुआ धन है। विद्या भोग देने वाली, यश और सुख देने वाली है। विद्या गुरुओं की भी गुरु है।',
      source: 'नीतिशतकम्',
      chapter: 'vidya',
      importance: 'high'
    },
    {
      id: 'v3',
      sanskrit: 'अविद्यानां च अनेकानि पुस्तकानि च अत्र वै।\nएक अक्षरं तु गुरोः प्रोक्तं कोटि ग्रन्थ समं भवेत्॥',
      transliteration: 'Avidyānāṁ ca anekāni pustakāni ca atra vai,\nEka akṣaraṁ tu guroḥ proktaṁ koṭi grantha samaṁ bhavet.',
      meaning: 'अविद्वानों के पास अनेक पुस्तकें होती हैं, परंतु गुरु द्वारा कहा गया एक अक्षर भी करोड़ ग्रंथों के समान है।',
      source: 'सुभाषितावली',
      chapter: 'vidya',
      importance: 'medium'
    },
    // Subhashit (Good Sayings)
    {
      id: 's1',
      sanskrit: 'आलस्यं हि मनुष्याणां शरीरस्थो महान् रिपुः।\nनास्त्युद्यमसमो बन्धुः कृत्वा यं नावसीदति॥',
      transliteration: 'Ālasyaṁ hi manuṣyāṇāṁ śarīrastho mahān ripuḥ,\nNāstyudyamasamo bandhuḥ kṛtvā yaṁ nāvasīdati.',
      meaning: 'आलस्य मनुष्य के शरीर में रहने वाला सबसे बड़ा शत्रु है। परिश्रम के समान कोई मित्र नहीं है, जिसे करके मनुष्य कभी दुखी नहीं होता।',
      source: 'हितोपदेश',
      chapter: 'subhashit',
      importance: 'high',
      grammar: 'आलस्यम् - नपुंसकलिंग, प्रथमा विभक्ति, एकवचन'
    },
    {
      id: 's2',
      sanskrit: 'उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।\nन हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥',
      transliteration: 'Udyamena hi sidhyanti kāryāṇi na manorathaiḥ,\nNa hi suptasya siṁhasya praviśanti mukhe mṛgāḥ.',
      meaning: 'कार्य परिश्रम से सिद्ध होते हैं, केवल इच्छा करने से नहीं। सोए हुए सिंह के मुख में हिरण स्वयं प्रवेश नहीं करते।',
      source: 'पंचतंत्र',
      chapter: 'subhashit',
      importance: 'high'
    },
    {
      id: 's3',
      sanskrit: 'परोपकाराय फलन्ति वृक्षाः परोपकाराय वहन्ति नद्यः।\nपरोपकाराय दुहन्ति गावः परोपकारार्थमिदं शरीरम्॥',
      transliteration: 'Paropakārāya phalanti vṛkṣāḥ paropakārāya vahanti nadyaḥ,\nParopakārāya duhanti gāvaḥ paropakārārthamidaṁ śarīram.',
      meaning: 'वृक्ष दूसरों के लिए फल देते हैं, नदियाँ दूसरों के लिए बहती हैं, गाय दूसरों के लिए दूध देती हैं। यह शरीर भी परोपकार के लिए ही है।',
      source: 'सुभाषितरत्नभाण्डागारम्',
      chapter: 'subhashit',
      importance: 'high'
    },
    {
      id: 's4',
      sanskrit: 'सत्यं ब्रूयात् प्रियं ब्रूयात् न ब्रूयात् सत्यमप्रियम्।\nप्रियं च नानृतं ब्रूयात् एष धर्मः सनातनः॥',
      transliteration: 'Satyaṁ brūyāt priyaṁ brūyāt na brūyāt satyamapriyam,\nPriyaṁ ca nānṛtaṁ brūyāt eṣa dharmaḥ sanātanaḥ.',
      meaning: 'सत्य बोलो, प्रिय बोलो, अप्रिय सत्य मत बोलो। प्रिय लगने वाला झूठ भी मत बोलो। यही सनातन धर्म है।',
      source: 'मनुस्मृति',
      chapter: 'dharma',
      importance: 'high',
      grammar: 'ब्रूयात् - ब्रू धातु, विधिलिङ् लकार'
    },
    // Dharma (Ethics)
    {
      id: 'd1',
      sanskrit: 'अहिंसा परमो धर्मः धर्म हिंसा तथैव च।\nप्राणिनां रक्षणं धर्मः प्राणिनां वधो न धर्मः॥',
      transliteration: 'Ahiṁsā paramo dharmaḥ dharma hiṁsā tathaiva ca,\nPrāṇināṁ rakṣaṇaṁ dharmaḥ prāṇināṁ vadho na dharmaḥ.',
      meaning: 'अहिंसा परम धर्म है। प्राणियों की रक्षा धर्म है, प्राणियों का वध धर्म नहीं है।',
      source: 'महाभारत',
      chapter: 'dharma',
      importance: 'high'
    },
    {
      id: 'd2',
      sanskrit: 'मातृदेवो भव। पितृदेवो भव।\nआचार्यदेवो भव। अतिथिदेवो भव॥',
      transliteration: 'Mātṛdevo bhava. Pitṛdevo bhava.\nĀcāryadevo bhava. Atithidevo bhava.',
      meaning: 'माता को देवता मानो। पिता को देवता मानो। आचार्य (गुरु) को देवता मानो। अतिथि को देवता मानो।',
      source: 'तैत्तिरीय उपनिषद्',
      chapter: 'dharma',
      importance: 'high',
      grammar: 'भव - भू धातु, लोट् लकार, मध्यम पुरुष, एकवचन'
    },
    {
      id: 'd3',
      sanskrit: 'धर्मो रक्षति रक्षितः।\nधर्म एव हतो हन्ति धर्मो रक्षति रक्षितः॥',
      transliteration: 'Dharmo rakṣati rakṣitaḥ.\nDharma eva hato hanti dharmo rakṣati rakṣitaḥ.',
      meaning: 'जो धर्म की रक्षा करता है, धर्म उसकी रक्षा करता है। जो धर्म को नष्ट करता है, धर्म उसे नष्ट करता है।',
      source: 'मनुस्मृति',
      chapter: 'dharma',
      importance: 'high'
    },
    // Prakruti (Nature)
    {
      id: 'p1',
      sanskrit: 'वसुधैव कुटुम्बकम्।\nअयं निजः परो वेति गणना लघुचेतसाम्।\nउदारचरितानां तु वसुधैव कुटुम्बकम्॥',
      transliteration: 'Vasudhaiva kuṭumbakam.\nAyaṁ nijaḥ paro veti gaṇanā laghucetasām,\nUdāracaritānāṁ tu vasudhaiva kuṭumbakam.',
      meaning: 'यह अपना है, यह पराया है - ऐसी सोच संकुचित मनवालों की है। उदार चरित्र वालों के लिए तो सम्पूर्ण पृथ्वी ही परिवार है।',
      source: 'महोपनिषद्',
      chapter: 'prakruti',
      importance: 'high'
    },
    {
      id: 'p2',
      sanskrit: 'यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः।\nयत्रैतास्तु न पूज्यन्ते सर्वास्तत्राफलाः क्रियाः॥',
      transliteration: 'Yatra nāryastu pūjyante ramante tatra devatāḥ,\nYatraitāstu na pūjyante sarvāstatrāphalāḥ kriyāḥ.',
      meaning: 'जहाँ नारियों की पूजा होती है, वहाँ देवता निवास करते हैं। जहाँ उनका सम्मान नहीं होता, वहाँ सभी कार्य निष्फल होते हैं।',
      source: 'मनुस्मृति',
      chapter: 'dharma',
      importance: 'high'
    },
    // Mahapurush
    {
      id: 'm1',
      sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
      transliteration: "Karmaṇyevādhikāraste mā phaleṣu kadācana,\nMā karmaphalaheturbhūrmā te saṅgo'stvakarmaṇi.",
      meaning: 'तुम्हारा अधिकार केवल कर्म करने में है, फल में कभी नहीं। कर्मफल की इच्छा मत करो, और अकर्म में भी आसक्त मत होओ।',
      source: 'श्रीमद्भगवद्गीता (2.47)',
      chapter: 'mahapurush',
      importance: 'high',
      grammar: 'कर्मणि - कर्म शब्द, सप्तमी विभक्ति, एकवचन'
    },
    {
      id: 'm2',
      sanskrit: 'योगः कर्मसु कौशलम्।\nबुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते॥',
      transliteration: 'Yogaḥ karmasu kauśalam.\nBuddhiyukto jahātīha ubhe sukṛtaduṣkṛte.',
      meaning: 'कर्मों में कुशलता ही योग है। बुद्धियुक्त व्यक्ति इस लोक में पुण्य और पाप दोनों को त्याग देता है।',
      source: 'श्रीमद्भगवद्गीता (2.50)',
      chapter: 'mahapurush',
      importance: 'high'
    },
    {
      id: 'm3',
      sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
      transliteration: 'Yadā yadā hi dharmasya glānirbhavati bhārata,\nAbhyutthānamadharmasya tadātmānaṁ sṛjāmyaham.',
      meaning: 'हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं अपने आप को प्रकट करता हूँ।',
      source: 'श्रीमद्भगवद्गीता (4.7)',
      chapter: 'mahapurush',
      importance: 'high'
    },
    {
      id: 'm4',
      sanskrit: 'परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥',
      transliteration: 'Paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām,\nDharmasaṁsthāpanārthāya sambhavāmi yuge yuge.',
      meaning: 'साधुओं की रक्षा के लिए, दुष्टों के विनाश के लिए और धर्म की स्थापना के लिए मैं युग-युग में प्रकट होता हूँ।',
      source: 'श्रीमद्भगवद्गीता (4.8)',
      chapter: 'mahapurush',
      importance: 'high'
    },
    {
      id: 's5',
      sanskrit: 'गुणाः पूजास्थानं गुणिषु न च लिङ्गं न च वयः।',
      transliteration: 'Guṇāḥ pūjāsthānaṁ guṇiṣu na ca liṅgaṁ na ca vayaḥ.',
      meaning: 'गुणवान व्यक्तियों में गुण ही पूजनीय होते हैं, न कि लिंग (स्त्री-पुरुष) या आयु।',
      source: 'नीतिशतकम्',
      chapter: 'subhashit',
      importance: 'medium'
    },
    {
      id: 's6',
      sanskrit: 'विनाशकाले विपरीत बुद्धिः।',
      transliteration: 'Vināśakāle viparīta buddhiḥ.',
      meaning: 'विनाश का समय आने पर बुद्धि विपरीत हो जाती है।',
      source: 'रामायण',
      chapter: 'subhashit',
      importance: 'medium'
    }
  ];

  const filteredShloks = shloks.filter(s => {
    const matchChapter = selectedChapter === 'all' || s.chapter === selectedChapter;
    const matchSearch = s.sanskrit.includes(searchTerm) || 
                       s.meaning.includes(searchTerm) ||
                       s.transliteration.toLowerCase().includes(searchTerm.toLowerCase());
    return matchChapter && matchSearch;
  });

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">📜</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">संस्कृत श्लोक बैंक</h2>
                  <p className="text-amber-100 text-sm mt-1">
                    Sanskrit Shlok Bank - Alhad Textbook
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="text-white" size={24} />
              </button>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="p-4 border-b border-slate-700 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="श्लोक खोजें... (Search shloks)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {chapters.map(ch => (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChapter(ch.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    selectedChapter === ch.id
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {ch.name}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="p-3 bg-slate-800/50 flex items-center justify-between text-sm">
            <span className="text-slate-400">
              <BookOpen className="inline mr-1" size={16} />
              {filteredShloks.length} श्लोक
            </span>
            <span className="text-amber-400">
              <Star className="inline mr-1" size={16} />
              HSC परीक्षा के लिए महत्वपूर्ण
            </span>
          </div>

          {/* Shloks List */}
          <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
            {filteredShloks.map(shlok => (
              <div
                key={shlok.id}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
              >
                <div
                  onClick={() => setExpandedShlok(expandedShlok === shlok.id ? null : shlok.id)}
                  className="p-4 cursor-pointer hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {shlok.importance === 'high' && (
                          <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs flex items-center gap-1">
                            <Star size={10} /> Important
                          </span>
                        )}
                        <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded text-xs">
                          {shlok.source}
                        </span>
                      </div>
                      <p className="text-amber-200 font-sanskrit text-lg leading-relaxed whitespace-pre-line">
                        {shlok.sanskrit}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedShlok === shlok.id ? (
                        <ChevronUp className="text-slate-400" size={20} />
                      ) : (
                        <ChevronDown className="text-slate-400" size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {expandedShlok === shlok.id && (
                  <div className="border-t border-slate-700">
                    {/* Transliteration */}
                    <div className="p-4 bg-slate-800/50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-blue-400 font-medium text-sm flex items-center gap-2">
                          <Volume2 size={14} />
                          Transliteration (उच्चारण)
                        </h4>
                        <button
                          onClick={() => copyText(shlok.transliteration, `${shlok.id}-trans`)}
                          className="text-slate-400 hover:text-white text-xs flex items-center gap-1"
                        >
                          {copiedId === `${shlok.id}-trans` ? <CheckCircle size={12} className="text-green-400" /> : <Copy size={12} />}
                        </button>
                      </div>
                      <p className="text-slate-300 text-sm italic whitespace-pre-line">
                        {shlok.transliteration}
                      </p>
                    </div>

                    {/* Meaning */}
                    <div className="p-4 border-t border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-green-400 font-medium text-sm flex items-center gap-2">
                          <Quote size={14} />
                          अर्थ (Meaning)
                        </h4>
                        <button
                          onClick={() => copyText(shlok.meaning, `${shlok.id}-meaning`)}
                          className="text-slate-400 hover:text-white text-xs flex items-center gap-1"
                        >
                          {copiedId === `${shlok.id}-meaning` ? <CheckCircle size={12} className="text-green-400" /> : <Copy size={12} />}
                        </button>
                      </div>
                      <p className="text-slate-200">
                        {shlok.meaning}
                      </p>
                    </div>

                    {/* Grammar (if available) */}
                    {shlok.grammar && (
                      <div className="p-4 border-t border-slate-700 bg-purple-500/5">
                        <h4 className="text-purple-400 font-medium text-sm flex items-center gap-2 mb-2">
                          <Sparkles size={14} />
                          व्याकरण (Grammar)
                        </h4>
                        <p className="text-slate-300 text-sm">
                          {shlok.grammar}
                        </p>
                      </div>
                    )}

                    {/* Copy Full */}
                    <div className="p-3 border-t border-slate-700 bg-slate-800/30">
                      <button
                        onClick={() => copyText(`${shlok.sanskrit}\n\n${shlok.transliteration}\n\nअर्थ: ${shlok.meaning}`, `${shlok.id}-full`)}
                        className="w-full py-2 bg-amber-500/20 text-amber-400 rounded-lg text-sm hover:bg-amber-500/30 transition-colors flex items-center justify-center gap-2"
                      >
                        {copiedId === `${shlok.id}-full` ? (
                          <><CheckCircle size={14} /> Copied!</>
                        ) : (
                          <><Copy size={14} /> Copy Full Shlok</>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-700 bg-slate-800/50">
            <p className="text-center text-slate-400 text-sm">
              📖 Based on Maharashtra Board Sanskrit Alhad Textbook
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanskritShlokBank;
