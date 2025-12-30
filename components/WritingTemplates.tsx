import React, { useState } from 'react';
import { X, FileText, Copy, CheckCircle, BookOpen, PenTool, Mail, Newspaper, Star, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface WritingTemplatesProps {
  onClose: () => void;
}

interface Template {
  id: string;
  type: string;
  title: string;
  language: 'english' | 'hindi';
  marks: number;
  format: string;
  example: string;
  tips: string[];
}

const WritingTemplates: React.FC<WritingTemplatesProps> = ({ onClose }) => {
  const [selectedLang, setSelectedLang] = useState<'all' | 'english' | 'hindi'>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const templates: Template[] = [
    // English Templates
    {
      id: 'formal-letter-eng',
      type: 'letter',
      title: 'Formal/Official Letter',
      language: 'english',
      marks: 4,
      format: `**FORMAL LETTER FORMAT**

[Your Address]
_____________
_____________
[Date]

[Receiver's Designation]
[Receiver's Address]
_____________
_____________

Subject: ________________

Respected Sir/Madam,

[Opening Para - State the purpose]
_________________________________

[Body Para - Details/Explanation]
_________________________________

[Closing Para - Request/Action expected]
_________________________________

Thanking you,
Yours faithfully,
[Your Name]`,
      example: `123, Green Park Society,
Pune - 411001.
15th January, 2024

The Municipal Commissioner,
Pune Municipal Corporation,
Pune - 411001.

Subject: Request to repair damaged road in our locality

Respected Sir,

I am writing this letter on behalf of the residents of Green Park Society, Pune, to bring to your notice the deplorable condition of the road in our area.

The road connecting our society to the main highway has developed numerous potholes and cracks. During the monsoon season, these potholes fill with water, making it extremely difficult for vehicles and pedestrians to navigate. Several accidents have already occurred, and senior citizens face great difficulty in commuting.

I humbly request you to kindly take immediate action and repair the road at the earliest. The residents would be highly grateful for your prompt attention to this matter.

Thanking you,
Yours faithfully,
Amit Sharma
(Secretary, Green Park Society)`,
      tips: [
        'Use formal salutation: Respected Sir/Madam',
        'Subject line should be clear and specific',
        'Maintain formal tone throughout',
        'End with Yours faithfully (if name not known) or Yours sincerely (if name known)',
        'Keep paragraphs short and focused',
        'Avoid informal language and contractions'
      ]
    },
    {
      id: 'informal-letter-eng',
      type: 'letter',
      title: 'Informal/Personal Letter',
      language: 'english',
      marks: 4,
      format: `**INFORMAL LETTER FORMAT**

[Your Address]
_____________
_____________
[Date]

Dear [Friend's Name],

[Opening - Greeting/Enquiry about health]
_________________________________

[Body - Main content of letter]
_________________________________

[Closing - Wishes/Future plans]
_________________________________

With love/Best regards,
[Your Name]`,
      example: `45, Shivaji Nagar,
Mumbai - 400001.
20th December, 2024

Dear Rahul,

How are you? I hope this letter finds you in good health and high spirits. I was delighted to receive your letter after such a long time.

I am writing to share some wonderful news with you! I have scored 92% in my HSC board exams and have secured admission to Ferguson College, Pune, for my B.A. course. I will be studying Political Science, which has always been my passion. Our batch has some really talented students, and I am excited about the college life ahead.

I remember how we used to dream about our college days during our school time. It would be wonderful if you could visit me in Pune during the vacation. We could explore the city together and relive our old memories.

Convey my regards to uncle and aunty. I am eagerly waiting for your reply.

With love,
Priya`,
      tips: [
        'Use warm and friendly tone',
        'Start with enquiry about well-being',
        'Share personal experiences and feelings',
        'End with wishes and future plans',
        'Use Dear [Name] for salutation',
        'Sign off with love, warm regards, or best wishes'
      ]
    },
    {
      id: 'essay-eng',
      type: 'essay',
      title: 'Essay Writing',
      language: 'english',
      marks: 4,
      format: `**ESSAY FORMAT**

**Title: _________________**

**Introduction** (50-60 words)
- Hook/Attention grabber
- Background information
- Thesis statement

**Body Paragraphs** (150-200 words)
- Paragraph 1: First main point with examples
- Paragraph 2: Second main point with examples
- Paragraph 3: Third main point with examples

**Conclusion** (40-50 words)
- Summary of main points
- Final thought/Call to action`,
      example: `**Importance of Education in Modern Society**

*Introduction:*
"Education is the most powerful weapon which you can use to change the world," said Nelson Mandela. In today's rapidly evolving society, education has become more crucial than ever before. It not only empowers individuals but also transforms nations.

*Body:*
Firstly, education provides essential skills and knowledge required for personal development. An educated person can think critically, solve problems effectively, and make informed decisions. This intellectual growth enables individuals to lead meaningful and productive lives.

Secondly, education plays a vital role in economic development. Educated individuals contribute to the workforce with specialized skills, driving innovation and productivity. Countries with higher literacy rates consistently show better economic growth and lower unemployment rates.

Thirdly, education promotes social harmony and equality. It breaks the barriers of caste, class, and gender discrimination. When people are educated, they become more tolerant, understanding, and accepting of diverse perspectives.

*Conclusion:*
In conclusion, education is the cornerstone of a progressive society. It empowers individuals, strengthens economies, and promotes social harmony. Therefore, ensuring quality education for all should be our collective responsibility.`,
      tips: [
        'Start with an interesting hook - quote, question, or fact',
        'Keep introduction concise but engaging',
        'Each body paragraph should have one main idea',
        'Use transitional words: Firstly, Secondly, Moreover, Furthermore',
        'Support points with examples and facts',
        'Conclusion should summarize without introducing new ideas',
        'Maintain consistent tone and style'
      ]
    },
    {
      id: 'report-eng',
      type: 'report',
      title: 'Report Writing',
      language: 'english',
      marks: 4,
      format: `**REPORT FORMAT**

**[TITLE OF THE REPORT]**
By: [Your Name], [Designation]

**Introduction:**
[State the purpose and occasion]

**Details of the Event/Issue:**
- Date and Time:
- Venue:
- Participants/Attendees:

**Activities/Proceedings:**
[Describe what happened in sequence]

**Conclusion:**
[Summary and impact]

**Reported by:**
[Your Name]
[Date]`,
      example: `**REPORT ON ANNUAL SPORTS DAY CELEBRATION**
By: Sneha Patil, School Reporter

**Introduction:**
The Annual Sports Day of Vidya Niketan High School was celebrated with great enthusiasm on 15th January 2024 in the school playground.

**Details:**
- Date: 15th January 2024
- Time: 9:00 AM to 4:00 PM
- Venue: School Playground
- Chief Guest: Mr. Ajay Devgan, District Sports Officer

**Proceedings:**
The event began with the lighting of the ceremonial torch by the chief guest. Students from all four houses - Red, Blue, Green, and Yellow - participated in various track and field events including 100m race, relay race, long jump, and shot put.

The highlight of the day was the march past, where students displayed remarkable discipline and coordination. Various cultural performances including a pyramid formation and aerobics display entertained the audience.

**Conclusion:**
The Yellow House emerged as the overall champion. The event concluded with prize distribution by the chief guest. The Sports Day was a grand success, promoting sportsmanship and team spirit among students.

**Reported by:**
Sneha Patil
16th January 2024`,
      tips: [
        'Use third person narrative',
        'Be objective and factual',
        'Include all relevant details - 5 W\'s (Who, What, When, Where, Why)',
        'Organize information logically',
        'Avoid personal opinions unless asked',
        'Use past tense for reporting events'
      ]
    },
    {
      id: 'speech-eng',
      type: 'speech',
      title: 'Speech Writing',
      language: 'english',
      marks: 4,
      format: `**SPEECH FORMAT**

**Opening:**
- Greeting: "Respected Principal, teachers, and my dear friends..."
- Occasion reference
- Introduce topic

**Body:**
- Main point 1 with examples
- Main point 2 with examples
- Main point 3 with examples
- Use rhetorical questions
- Include quotes/statistics

**Conclusion:**
- Summarize key points
- Call to action
- Thank the audience`,
      example: `**Speech on Environmental Protection**

Respected Principal, teachers, and my dear friends,

Good morning to one and all!

Today, I stand before you to speak on a topic that concerns each one of us - Environmental Protection.

Friends, our planet Earth is our only home. Yet, we are destroying it every single day. Do you know that we lose 4.7 million hectares of forest every year? That's equivalent to losing a football field of forest every second!

Climate change is no longer a distant threat - it's happening right now. The recent floods in Kerala, droughts in Maharashtra, and rising temperatures across the globe are clear warnings. As Mahatma Gandhi rightly said, "The Earth provides enough to satisfy every man's needs, but not every man's greed."

What can we do? Start small. Plant trees, reduce plastic use, conserve water, and spread awareness. Remember, we don't inherit the Earth from our ancestors; we borrow it from our children.

Let us pledge today to be responsible citizens and protect our environment. The time to act is now!

Thank you for your patient listening.`,
      tips: [
        'Begin with appropriate salutation based on audience',
        'Use "I" and address audience directly',
        'Include rhetorical questions to engage audience',
        'Use quotes from famous personalities',
        'Include relevant statistics and facts',
        'End with a strong call to action',
        'Keep language simple and powerful'
      ]
    },
    // Hindi Templates
    {
      id: 'formal-letter-hin',
      type: 'letter',
      title: 'औपचारिक पत्र',
      language: 'hindi',
      marks: 4,
      format: `**औपचारिक पत्र प्रारूप**

सेवा में,
[प्राप्तकर्ता का पदनाम]
[प्राप्तकर्ता का पता]
_____________

दिनांक: _____________

विषय: _________________

महोदय/महोदया,

[प्रथम अनुच्छेद - पत्र लिखने का उद्देश्य]
_________________________________

[द्वितीय अनुच्छेद - विस्तृत विवरण]
_________________________________

[तृतीय अनुच्छेद - निवेदन/अपेक्षा]
_________________________________

धन्यवाद सहित,
आपका आज्ञाकारी शिष्य/विश्वासी
[नाम]
[कक्षा/पता]`,
      example: `सेवा में,
श्रीमान प्रधानाचार्य महोदय,
विद्या निकेतन उच्च माध्यमिक विद्यालय,
पुणे - 411001

दिनांक: 15 जनवरी 2024

विषय: तीन दिन के अवकाश हेतु प्रार्थना पत्र

महोदय,

सविनय निवेदन है कि मैं आपके विद्यालय की कक्षा बारहवीं 'अ' का छात्र हूँ। मुझे अपनी बड़ी बहन के विवाह समारोह में भाग लेना है जो 18 जनवरी 2024 को निर्धारित है।

इस समारोह में परिवार के सभी सदस्यों की उपस्थिति अनिवार्य है और मुझे कई जिम्मेदारियाँ सौंपी गई हैं। यह एक पारिवारिक कार्यक्रम होने के कारण मेरी उपस्थिति आवश्यक है।

अतः श्रीमान से विनम्र निवेदन है कि मुझे दिनांक 17 जनवरी से 19 जनवरी 2024 तक तीन दिन का अवकाश प्रदान करने की कृपा करें। इस अवधि में छूटे हुए पाठ्यक्रम की मैं अपने सहपाठियों से पूर्ति कर लूँगा।

धन्यवाद सहित,
आपका आज्ञाकारी शिष्य
राहुल शर्मा
कक्षा: बारहवीं 'अ'
अनुक्रमांक: 25`,
      tips: [
        'सेवा में से पत्र प्रारंभ करें',
        'विषय स्पष्ट एवं संक्षिप्त लिखें',
        'महोदय/महोदया से संबोधन करें',
        'शिष्टाचारपूर्ण भाषा का प्रयोग करें',
        'आज्ञाकारी शिष्य/विनीत से समाप्त करें',
        'दिनांक एवं हस्ताक्षर अवश्य लिखें'
      ]
    },
    {
      id: 'informal-letter-hin',
      type: 'letter',
      title: 'अनौपचारिक पत्र',
      language: 'hindi',
      marks: 4,
      format: `**अनौपचारिक पत्र प्रारूप**

[भेजने वाले का पता]
_____________
_____________
दिनांक: _____________

प्रिय [नाम],

[सादर प्रणाम/नमस्ते]

[प्रथम अनुच्छेद - कुशलक्षेम]
_________________________________

[द्वितीय अनुच्छेद - मुख्य विषय]
_________________________________

[तृतीय अनुच्छेद - समापन]
_________________________________

तुम्हारा/तुम्हारी
[नाम]`,
      example: `45, शिवाजी नगर,
मुंबई - 400001
दिनांक: 20 दिसंबर 2024

प्रिय मित्र राहुल,

सप्रेम नमस्कार।

आशा है तुम सकुशल होगे। तुम्हारा पत्र मिला, पढ़कर बहुत खुशी हुई। बहुत दिनों बाद तुम्हारी चिट्ठी आई, इसलिए मन प्रसन्न हो गया।

मित्र, तुम्हें बताते हुए अत्यंत हर्ष हो रहा है कि मैंने बारहवीं की परीक्षा में 92% अंक प्राप्त किए हैं। मेरा दाखिला फर्ग्युसन कॉलेज, पुणे में राजनीति विज्ञान विषय में हो गया है। कॉलेज का वातावरण बहुत अच्छा है और यहाँ पढ़ाई के साथ-साथ अनेक गतिविधियाँ होती हैं।

याद है, स्कूल में हम दोनों कॉलेज जाने के सपने देखा करते थे? अब वह सपना साकार हो रहा है। गर्मी की छुट्टियों में अवश्य पुणे आना। हम साथ में शहर घूमेंगे और पुरानी यादों को ताज़ा करेंगे।

माताजी और पिताजी को मेरा प्रणाम कहना। तुम्हारे उत्तर की प्रतीक्षा में।

तुम्हारा मित्र
प्रिया`,
      tips: [
        'मित्र/सखी को प्रिय से संबोधित करें',
        'स्नेहपूर्ण एवं आत्मीय भाषा का प्रयोग करें',
        'व्यक्तिगत अनुभव साझा करें',
        'कुशलक्षेम की पूछताछ से प्रारंभ करें',
        'परिवार के सदस्यों को प्रणाम लिखें',
        'तुम्हारा/तुम्हारी मित्र से समाप्त करें'
      ]
    },
    {
      id: 'essay-hin',
      type: 'essay',
      title: 'निबंध लेखन',
      language: 'hindi',
      marks: 4,
      format: `**निबंध प्रारूप**

**शीर्षक: _________________**

**भूमिका/प्रस्तावना** (40-50 शब्द)
- विषय का परिचय
- उद्धरण या कहावत

**विषय विस्तार** (150-180 शब्द)
- मुख्य बिंदु 1
- मुख्य बिंदु 2
- मुख्य बिंदु 3
- उदाहरण एवं प्रमाण

**उपसंहार** (30-40 शब्द)
- सारांश
- निष्कर्ष`,
      example: `**विद्यार्थी जीवन में अनुशासन का महत्व**

*भूमिका:*
"अनुशासन ही जीवन है" - यह उक्ति पूर्णतः सत्य है। अनुशासन वह शक्ति है जो मनुष्य को सफलता की ऊँचाइयों तक पहुँचाती है। विशेषकर विद्यार्थी जीवन में अनुशासन की भूमिका अत्यंत महत्वपूर्ण है।

*विषय विस्तार:*
प्रथमतः, अनुशासन से विद्यार्थी समय का सदुपयोग करना सीखता है। नियमित दिनचर्या से पढ़ाई, खेल और विश्राम सभी के लिए पर्याप्त समय मिलता है। जो विद्यार्थी समय का सम्मान करता है, समय उसका सम्मान करता है।

द्वितीयतः, अनुशासित विद्यार्थी में एकाग्रता की क्षमता विकसित होती है। नियमित अभ्यास से मन स्थिर रहता है और विषय को गहराई से समझने में सहायता मिलती है।

तृतीयतः, अनुशासन से चरित्र निर्माण होता है। अनुशासित व्यक्ति समाज में सम्मान पाता है। स्वामी विवेकानंद ने कहा था - "शिक्षा वह है जो मनुष्य का चरित्र निर्माण करे।"

*उपसंहार:*
अतः स्पष्ट है कि विद्यार्थी जीवन में अनुशासन अत्यावश्यक है। यह न केवल शैक्षिक सफलता दिलाता है अपितु जीवन के हर क्षेत्र में सफलता की कुंजी है। विद्यार्थियों को अनुशासन को अपना जीवन-मंत्र बनाना चाहिए।`,
      tips: [
        'शीर्षक आकर्षक एवं विषयानुकूल रखें',
        'भूमिका में कहावत या उद्धरण का प्रयोग करें',
        'प्रथमतः, द्वितीयतः जैसे क्रमवाचक शब्दों का प्रयोग करें',
        'उदाहरण एवं प्रमाण दें',
        'महापुरुषों के कथन सम्मिलित करें',
        'उपसंहार में मुख्य बिंदुओं का सारांश दें',
        'भाषा शुद्ध एवं प्रवाहपूर्ण रखें'
      ]
    },
    {
      id: 'summary-hin',
      type: 'summary',
      title: 'सारांश लेखन',
      language: 'hindi',
      marks: 3,
      format: `**सारांश लेखन प्रारूप**

**मूल गद्यांश का शीर्षक: _______**

**सारांश:**
[मूल गद्यांश के मुख्य बिंदु संक्षेप में]
- मुख्य विचार
- महत्वपूर्ण तथ्य
- निष्कर्ष

**शब्द सीमा:** मूल का लगभग 1/3`,
      example: `**मूल गद्यांश:**
"भारत एक कृषि प्रधान देश है। यहाँ की लगभग 70% जनसंख्या कृषि पर निर्भर है। खेती हमारी अर्थव्यवस्था की रीढ़ है। हमारे देश में विभिन्न प्रकार की फसलें उगाई जाती हैं जैसे गेहूँ, चावल, गन्ना, कपास आदि। हरित क्रांति के बाद खाद्यान्न उत्पादन में आत्मनिर्भरता प्राप्त हुई। परंतु अभी भी किसानों को कई समस्याओं का सामना करना पड़ता है जैसे सिंचाई की कमी, उचित मूल्य न मिलना, बिचौलियों द्वारा शोषण आदि। सरकार को किसानों के हित में ठोस कदम उठाने चाहिए।"

**सारांश:**
भारत कृषि प्रधान देश है जहाँ 70% आबादी खेती पर निर्भर है। हरित क्रांति से खाद्यान्न आत्मनिर्भरता मिली। किंतु किसान अभी भी सिंचाई, उचित मूल्य एवं बिचौलियों की समस्याओं से जूझ रहे हैं। सरकारी सहायता आवश्यक है।`,
      tips: [
        'मूल गद्यांश को ध्यानपूर्वक पढ़ें',
        'मुख्य बिंदुओं को रेखांकित करें',
        'अनावश्यक विवरण हटाएँ',
        'अपने शब्दों में लिखें',
        'मूल की 1/3 शब्द सीमा में रहें',
        'क्रमबद्धता बनाए रखें'
      ]
    }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'letter', name: 'Letter / पत्र' },
    { id: 'essay', name: 'Essay / निबंध' },
    { id: 'report', name: 'Report' },
    { id: 'speech', name: 'Speech' },
    { id: 'summary', name: 'Summary / सारांश' }
  ];

  const filteredTemplates = templates.filter(t => {
    const matchLang = selectedLang === 'all' || t.language === selectedLang;
    const matchType = selectedType === 'all' || t.type === selectedType;
    return matchLang && matchType;
  });

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">✍️</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Writing Templates</h2>
                  <p className="text-emerald-100 text-sm mt-1">
                    Letter, Essay, Report & Speech Formats
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

          {/* Filters */}
          <div className="p-4 border-b border-slate-700 flex flex-wrap gap-3">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedLang('all')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedLang === 'all' ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedLang('english')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedLang === 'english' ? 'bg-yellow-500 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setSelectedLang('hindi')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedLang === 'hindi' ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                हिंदी
              </button>
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-sm"
            >
              {types.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          {/* Templates List */}
          <div className="p-4 space-y-4 max-h-[65vh] overflow-y-auto">
            {filteredTemplates.map(template => (
              <div
                key={template.id}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
              >
                <div
                  onClick={() => setExpandedTemplate(expandedTemplate === template.id ? null : template.id)}
                  className="p-4 cursor-pointer hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        template.language === 'english' ? 'bg-yellow-500' : 'bg-orange-500'
                      }`}>
                        <PenTool className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{template.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            template.language === 'english' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-orange-500/20 text-orange-400'
                          }`}>
                            {template.language === 'english' ? 'English' : 'हिंदी'}
                          </span>
                          <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs">
                            {template.marks} marks
                          </span>
                        </div>
                      </div>
                    </div>
                    {expandedTemplate === template.id ? (
                      <ChevronUp className="text-slate-400" size={20} />
                    ) : (
                      <ChevronDown className="text-slate-400" size={20} />
                    )}
                  </div>
                </div>

                {expandedTemplate === template.id && (
                  <div className="border-t border-slate-700">
                    {/* Format Section */}
                    <div className="p-4 bg-slate-800/50">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-emerald-400 font-medium flex items-center gap-2">
                          <FileText size={16} />
                          Format
                        </h4>
                        <button
                          onClick={() => copyToClipboard(template.format, `${template.id}-format`)}
                          className="text-slate-400 hover:text-white text-sm flex items-center gap-1"
                        >
                          {copiedId === `${template.id}-format` ? (
                            <><CheckCircle size={14} className="text-green-400" /> Copied!</>
                          ) : (
                            <><Copy size={14} /> Copy</>
                          )}
                        </button>
                      </div>
                      <pre className="text-slate-300 text-sm whitespace-pre-wrap bg-slate-900 rounded-xl p-4 border border-slate-700">
                        {template.format}
                      </pre>
                    </div>

                    {/* Example Section */}
                    <div className="p-4 border-t border-slate-700">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-blue-400 font-medium flex items-center gap-2">
                          <Sparkles size={16} />
                          Example
                        </h4>
                        <button
                          onClick={() => copyToClipboard(template.example, `${template.id}-example`)}
                          className="text-slate-400 hover:text-white text-sm flex items-center gap-1"
                        >
                          {copiedId === `${template.id}-example` ? (
                            <><CheckCircle size={14} className="text-green-400" /> Copied!</>
                          ) : (
                            <><Copy size={14} /> Copy</>
                          )}
                        </button>
                      </div>
                      <pre className="text-slate-300 text-sm whitespace-pre-wrap bg-slate-900 rounded-xl p-4 border border-slate-700 max-h-60 overflow-y-auto">
                        {template.example}
                      </pre>
                    </div>

                    {/* Tips Section */}
                    <div className="p-4 border-t border-slate-700 bg-slate-800/30">
                      <h4 className="text-amber-400 font-medium flex items-center gap-2 mb-3">
                        <Star size={16} />
                        Tips for Scoring
                      </h4>
                      <ul className="space-y-2">
                        {template.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                            <span className="text-emerald-400 mt-0.5">✓</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-700 bg-slate-800/50">
            <p className="text-center text-slate-400 text-sm">
              📝 Practice these formats for better marks in writing section
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingTemplates;
