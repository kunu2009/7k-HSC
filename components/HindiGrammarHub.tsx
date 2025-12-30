import React, { useState, useMemo } from 'react';
import { X, BookOpen, Search, ChevronDown, ChevronUp, Star, CheckCircle, Brain, FileText, PenTool, Sparkles, Target } from 'lucide-react';

interface HindiGrammarHubProps {
  onClose: () => void;
}

interface GrammarTopic {
  id: string;
  title: string;
  category: 'vyakaran' | 'rachna' | 'sahitya' | 'alankar' | 'chhand';
  definition: string;
  explanation: string;
  examples: { text: string; analysis?: string }[];
  types?: { name: string; description: string; example: string }[];
  examTips: string[];
  importance: 'high' | 'medium' | 'low';
}

const GRAMMAR_TOPICS: GrammarTopic[] = [
  // व्याकरण (Grammar)
  {
    id: 'g1',
    title: 'संज्ञा (Noun)',
    category: 'vyakaran',
    definition: 'किसी व्यक्ति, वस्तु, स्थान, भाव आदि के नाम को संज्ञा कहते हैं।',
    explanation: 'संज्ञा वाक्य में किसी व्यक्ति, जगह, चीज़, या विचार के नाम को दर्शाती है। यह हिंदी व्याकरण का मूल आधार है।',
    examples: [
      { text: 'राम (व्यक्तिवाचक)', analysis: 'एक विशेष व्यक्ति का नाम' },
      { text: 'पुस्तक (जातिवाचक)', analysis: 'एक जाति/वर्ग का नाम' },
      { text: 'सुंदरता (भाववाचक)', analysis: 'एक भाव/गुण का नाम' }
    ],
    types: [
      { name: 'व्यक्तिवाचक', description: 'किसी विशेष व्यक्ति, स्थान या वस्तु का नाम', example: 'गंगा, हिमालय, राम' },
      { name: 'जातिवाचक', description: 'एक पूरी जाति या श्रेणी का बोध', example: 'लड़का, नदी, पहाड़' },
      { name: 'भाववाचक', description: 'किसी भाव, गुण या दशा का बोध', example: 'सुंदरता, मिठास, बचपन' },
      { name: 'समूहवाचक', description: 'समूह या झुंड का बोध', example: 'सेना, कक्षा, भीड़' },
      { name: 'द्रव्यवाचक', description: 'किसी द्रव्य या पदार्थ का बोध', example: 'सोना, पानी, लोहा' }
    ],
    examTips: ['व्यक्तिवाचक और जातिवाचक में अंतर समझें', 'भाववाचक संज्ञाएं बनाना सीखें', 'प्रत्येक प्रकार के 5 उदाहरण याद करें'],
    importance: 'high'
  },
  {
    id: 'g2',
    title: 'सर्वनाम (Pronoun)',
    category: 'vyakaran',
    definition: 'संज्ञा के स्थान पर प्रयुक्त होने वाले शब्दों को सर्वनाम कहते हैं।',
    explanation: 'सर्वनाम का प्रयोग वाक्य में संज्ञा की पुनरावृत्ति से बचने के लिए किया जाता है। हिंदी में 11 मूल सर्वनाम हैं।',
    examples: [
      { text: 'मैं, तू, वह', analysis: 'पुरुषवाचक सर्वनाम' },
      { text: 'यह, वह', analysis: 'निश्चयवाचक सर्वनाम' },
      { text: 'कौन, क्या', analysis: 'प्रश्नवाचक सर्वनाम' }
    ],
    types: [
      { name: 'पुरुषवाचक', description: 'बोलने वाले, सुनने वाले या अन्य व्यक्ति के लिए', example: 'मैं, तू, वह' },
      { name: 'निश्चयवाचक', description: 'किसी निश्चित व्यक्ति या वस्तु के लिए', example: 'यह, वह' },
      { name: 'अनिश्चयवाचक', description: 'किसी अनिश्चित व्यक्ति या वस्तु के लिए', example: 'कोई, कुछ' },
      { name: 'संबंधवाचक', description: 'दो वाक्यों को जोड़ने के लिए', example: 'जो, सो' },
      { name: 'प्रश्नवाचक', description: 'प्रश्न पूछने के लिए', example: 'कौन, क्या' },
      { name: 'निजवाचक', description: 'अपने लिए', example: 'आप, अपना' }
    ],
    examTips: ['11 मूल सर्वनाम याद करें', 'सर्वनाम के भेद और उदाहरण', 'वाक्य में सर्वनाम पहचानना'],
    importance: 'high'
  },
  {
    id: 'g3',
    title: 'विशेषण (Adjective)',
    category: 'vyakaran',
    definition: 'जो शब्द संज्ञा या सर्वनाम की विशेषता बताए, उसे विशेषण कहते हैं।',
    explanation: 'विशेषण संज्ञा या सर्वनाम के गुण, दोष, संख्या, परिमाण आदि बताता है। जिसकी विशेषता बताई जाए उसे विशेष्य कहते हैं।',
    examples: [
      { text: 'काला कुत्ता', analysis: 'काला - गुणवाचक विशेषण' },
      { text: 'पाँच लड़के', analysis: 'पाँच - संख्यावाचक विशेषण' },
      { text: 'थोड़ा पानी', analysis: 'थोड़ा - परिमाणवाचक विशेषण' }
    ],
    types: [
      { name: 'गुणवाचक', description: 'गुण, दोष, रंग, आकार आदि', example: 'अच्छा, बुरा, लाल, गोल' },
      { name: 'संख्यावाचक', description: 'संख्या या क्रम बताना', example: 'एक, दो, पहला, दूसरा' },
      { name: 'परिमाणवाचक', description: 'मात्रा या परिमाण', example: 'थोड़ा, बहुत, कम, ज़्यादा' },
      { name: 'सार्वनामिक', description: 'सर्वनाम से बने', example: 'यह, वह, कोई, कुछ' }
    ],
    examTips: ['विशेषण और विशेष्य पहचानें', 'विशेषण की तुलनात्मक अवस्थाएं', 'प्रविशेषण का प्रयोग समझें'],
    importance: 'high'
  },
  {
    id: 'g4',
    title: 'क्रिया (Verb)',
    category: 'vyakaran',
    definition: 'जिस शब्द से किसी काम का करना या होना प्रकट हो, उसे क्रिया कहते हैं।',
    explanation: 'क्रिया वाक्य का आवश्यक अंग है। इसके बिना वाक्य अधूरा रहता है। क्रिया का मूल रूप धातु कहलाता है।',
    examples: [
      { text: 'राम पढ़ता है', analysis: 'पढ़ता है - सकर्मक क्रिया' },
      { text: 'बच्चा सोता है', analysis: 'सोता है - अकर्मक क्रिया' },
      { text: 'माँ बच्चे को खिलाती है', analysis: 'खिलाती है - प्रेरणार्थक क्रिया' }
    ],
    types: [
      { name: 'सकर्मक', description: 'कर्म की आवश्यकता हो', example: 'राम फल खाता है' },
      { name: 'अकर्मक', description: 'कर्म की आवश्यकता न हो', example: 'बच्चा सोता है' },
      { name: 'संयुक्त', description: 'दो क्रियाओं का मेल', example: 'वह पढ़ने लगा' },
      { name: 'प्रेरणार्थक', description: 'किसी को काम करने की प्रेरणा', example: 'माँ बच्चे को खिलाती है' }
    ],
    examTips: ['सकर्मक और अकर्मक में अंतर', 'धातु से क्रिया बनाना', 'क्रिया के काल पहचानें'],
    importance: 'high'
  },
  {
    id: 'g5',
    title: 'काल (Tense)',
    category: 'vyakaran',
    definition: 'क्रिया के जिस रूप से कार्य करने या होने का समय ज्ञात हो, उसे काल कहते हैं।',
    explanation: 'हिंदी में तीन काल होते हैं - भूतकाल, वर्तमानकाल, भविष्यत्काल। प्रत्येक के तीन-तीन उपभेद होते हैं।',
    examples: [
      { text: 'राम गया (भूतकाल)', analysis: 'बीते समय की क्रिया' },
      { text: 'राम जाता है (वर्तमान)', analysis: 'चालू समय की क्रिया' },
      { text: 'राम जाएगा (भविष्यत्)', analysis: 'आने वाले समय की क्रिया' }
    ],
    types: [
      { name: 'भूतकाल', description: 'बीते समय की क्रिया', example: 'गया, खाया, पढ़ा' },
      { name: 'वर्तमानकाल', description: 'चालू समय की क्रिया', example: 'जाता है, खाता है' },
      { name: 'भविष्यत्काल', description: 'आने वाले समय की क्रिया', example: 'जाएगा, खाएगा' }
    ],
    examTips: ['तीनों काल की पहचान', 'काल परिवर्तन करना', 'उपभेदों को समझें'],
    importance: 'high'
  },
  {
    id: 'g6',
    title: 'वाच्य (Voice)',
    category: 'vyakaran',
    definition: 'क्रिया के जिस रूप से यह ज्ञात हो कि वाक्य में कर्ता, कर्म या भाव में से किसकी प्रधानता है।',
    explanation: 'वाच्य तीन प्रकार के होते हैं। कर्तृवाच्य में कर्ता प्रधान, कर्मवाच्य में कर्म प्रधान, और भाववाच्य में भाव प्रधान होता है।',
    examples: [
      { text: 'राम पुस्तक पढ़ता है', analysis: 'कर्तृवाच्य - कर्ता प्रधान' },
      { text: 'पुस्तक पढ़ी जाती है', analysis: 'कर्मवाच्य - कर्म प्रधान' },
      { text: 'मुझसे चला नहीं जाता', analysis: 'भाववाच्य - भाव प्रधान' }
    ],
    types: [
      { name: 'कर्तृवाच्य', description: 'कर्ता प्रधान होता है', example: 'राम पुस्तक पढ़ता है' },
      { name: 'कर्मवाच्य', description: 'कर्म प्रधान होता है', example: 'पुस्तक राम द्वारा पढ़ी जाती है' },
      { name: 'भाववाच्य', description: 'भाव प्रधान, अकर्मक क्रिया', example: 'मुझसे चला नहीं जाता' }
    ],
    examTips: ['वाच्य परिवर्तन करना सीखें', 'कर्तृवाच्य से कर्मवाच्य बनाना', 'भाववाच्य के नियम'],
    importance: 'high'
  },
  // अलंकार (Figures of Speech)
  {
    id: 'a1',
    title: 'उपमा अलंकार',
    category: 'alankar',
    definition: 'जहाँ दो भिन्न वस्तुओं में समानता दिखाई जाए और सा, सी, सम, जैसा आदि शब्द प्रयुक्त हों।',
    explanation: 'उपमा में चार अंग होते हैं: उपमेय (जिसकी तुलना), उपमान (जिससे तुलना), साधारण धर्म (समान गुण), वाचक शब्द (तुलनासूचक)।',
    examples: [
      { text: 'मुख चंद्रमा के समान सुंदर है', analysis: 'उपमेय-मुख, उपमान-चंद्रमा, धर्म-सुंदर, वाचक-समान' },
      { text: 'पीपर पात सरिस मन डोला', analysis: 'उपमेय-मन, उपमान-पीपर पात, वाचक-सरिस' }
    ],
    examTips: ['उपमा के चारों अंग पहचानें', 'उपमा और रूपक में अंतर', 'वाचक शब्दों की सूची याद करें'],
    importance: 'high'
  },
  {
    id: 'a2',
    title: 'रूपक अलंकार',
    category: 'alankar',
    definition: 'जहाँ उपमेय में उपमान का आरोप हो, उपमेय और उपमान में कोई भेद न हो।',
    explanation: 'रूपक में उपमेय और उपमान एक मान लिए जाते हैं। "सा, जैसा" आदि वाचक शब्द नहीं होते।',
    examples: [
      { text: 'मुख-चंद्र', analysis: 'मुख को चंद्रमा कहा गया' },
      { text: 'उदित उदयगिरि मंच पर, रघुवर बाल-पतंग', analysis: 'राम को बाल-सूर्य कहा गया' }
    ],
    examTips: ['उपमा और रूपक में अंतर समझें', 'रूपक में वाचक शब्द नहीं होता', 'समास की तरह लिखा जाता है'],
    importance: 'high'
  },
  {
    id: 'a3',
    title: 'अनुप्रास अलंकार',
    category: 'alankar',
    definition: 'जहाँ एक ही वर्ण की बार-बार आवृत्ति हो, वहाँ अनुप्रास अलंकार होता है।',
    explanation: 'अनुप्रास में व्यंजन वर्णों की आवृत्ति से काव्य में लय और संगीतात्मकता आती है।',
    examples: [
      { text: 'चारु चंद्र की चंचल किरणें', analysis: 'च वर्ण की आवृत्ति' },
      { text: 'तरनि-तनूजा तट तमाल', analysis: 'त वर्ण की आवृत्ति' }
    ],
    types: [
      { name: 'छेकानुप्रास', description: 'एक वर्ण एक बार आवृत्त', example: 'बंदौं गुरु पद पदुम परागा' },
      { name: 'वृत्त्यनुप्रास', description: 'एक वर्ण अनेक बार आवृत्त', example: 'चारु चंद्र की चंचल किरणें' },
      { name: 'लाटानुप्रास', description: 'शब्द की आवृत्ति, अर्थ भिन्न', example: 'पूत सपूत तो क्यों धन संचय, पूत कपूत तो क्यों धन संचय' }
    ],
    examTips: ['वर्ण आवृत्ति पहचानें', 'अनुप्रास के भेद समझें', 'काव्य में प्रयोग देखें'],
    importance: 'high'
  },
  {
    id: 'a4',
    title: 'यमक अलंकार',
    category: 'alankar',
    definition: 'जहाँ एक शब्द दो या अधिक बार आए पर अर्थ भिन्न-भिन्न हो।',
    explanation: 'यमक में शब्दों की आवृत्ति होती है, अर्थ भिन्न होता है। यह अनुप्रास से भिन्न है जहाँ वर्णों की आवृत्ति होती है।',
    examples: [
      { text: 'कनक कनक ते सौगुनी, मादकता अधिकाय', analysis: 'कनक = सोना, धतूरा' },
      { text: 'काली घटा का घमंड घटा', analysis: 'घटा = बादल, कम होना' }
    ],
    examTips: ['यमक और अनुप्रास में अंतर', 'एक शब्द के भिन्न अर्थ', 'श्लेष से अंतर'],
    importance: 'medium'
  },
  {
    id: 'a5',
    title: 'श्लेष अलंकार',
    category: 'alankar',
    definition: 'जहाँ एक शब्द एक बार प्रयुक्त हो पर उसके एक से अधिक अर्थ निकलें।',
    explanation: 'श्लेष में शब्द एक बार आता है पर अर्थ कई होते हैं। यमक में शब्द बार-बार आता है।',
    examples: [
      { text: 'रहिमन पानी राखिए, बिन पानी सब सून', analysis: 'पानी = जल, चमक, इज्जत' },
      { text: 'मधुबन की छाती को देखो, सूखी कितनी इसकी कलियाँ', analysis: 'कलियाँ = फूल की कलियाँ, युवतियाँ' }
    ],
    examTips: ['श्लेष और यमक में अंतर', 'एक शब्द के अनेक अर्थ', 'संदर्भ से अर्थ पहचानें'],
    importance: 'medium'
  },
  // रचना (Composition)
  {
    id: 'r1',
    title: 'पत्र लेखन',
    category: 'rachna',
    definition: 'किसी व्यक्ति या संस्था को लिखित रूप में संदेश भेजना पत्र लेखन कहलाता है।',
    explanation: 'पत्र दो प्रकार के होते हैं: औपचारिक (कार्यालयी, व्यावसायिक) और अनौपचारिक (पारिवारिक, मित्रों को)।',
    examples: [
      { text: 'प्रधानाचार्य को अवकाश हेतु प्रार्थना पत्र', analysis: 'औपचारिक पत्र' },
      { text: 'मित्र को जन्मदिन की बधाई पत्र', analysis: 'अनौपचारिक पत्र' }
    ],
    types: [
      { name: 'औपचारिक पत्र', description: 'कार्यालयी, आवेदन, शिकायत', example: 'प्रधानाचार्य को पत्र, संपादक को पत्र' },
      { name: 'अनौपचारिक पत्र', description: 'पारिवारिक, मित्रों को', example: 'माता-पिता को पत्र, मित्र को पत्र' }
    ],
    examTips: ['पत्र का प्रारूप याद करें', 'औपचारिक में सेवा में, अनौपचारिक में प्रिय', 'विषय स्पष्ट लिखें'],
    importance: 'high'
  },
  {
    id: 'r2',
    title: 'निबंध लेखन',
    category: 'rachna',
    definition: 'किसी विषय पर क्रमबद्ध और व्यवस्थित रूप से विचार प्रकट करना निबंध कहलाता है।',
    explanation: 'निबंध में भूमिका, मुख्य भाग और उपसंहार होता है। विचार क्रमबद्ध और तार्किक होने चाहिए।',
    examples: [
      { text: 'प्रदूषण की समस्या', analysis: 'सामाजिक निबंध' },
      { text: 'मेरा प्रिय त्योहार', analysis: 'वर्णनात्मक निबंध' }
    ],
    types: [
      { name: 'वर्णनात्मक', description: 'किसी वस्तु, व्यक्ति का वर्णन', example: 'मेरा विद्यालय, होली' },
      { name: 'विचारात्मक', description: 'विचारों की अभिव्यक्ति', example: 'आदर्श विद्यार्थी, समय का महत्व' },
      { name: 'भावात्मक', description: 'भावनाओं की अभिव्यक्ति', example: 'माँ, देशप्रेम' }
    ],
    examTips: ['भूमिका आकर्षक हो', 'अनुच्छेद विभाजन करें', 'उपसंहार में सार दें'],
    importance: 'high'
  },
  {
    id: 'r3',
    title: 'संवाद लेखन',
    category: 'rachna',
    definition: 'दो या अधिक व्यक्तियों के बीच होने वाले वार्तालाप को लिखित रूप में प्रस्तुत करना।',
    explanation: 'संवाद स्वाभाविक, संक्षिप्त और विषयानुकूल होना चाहिए। प्रत्येक संवाद नई पंक्ति में लिखें।',
    examples: [
      { text: 'डॉक्टर और मरीज का संवाद', analysis: 'व्यावसायिक संवाद' },
      { text: 'दो मित्रों का संवाद', analysis: 'अनौपचारिक संवाद' }
    ],
    examTips: ['संवाद संक्षिप्त रखें', 'विषयानुकूल भाषा', 'क्रमबद्ध प्रस्तुति'],
    importance: 'medium'
  },
  {
    id: 'r4',
    title: 'सारांश लेखन',
    category: 'rachna',
    definition: 'किसी गद्यांश या पद्यांश के मुख्य भावों को संक्षेप में लिखना।',
    explanation: 'सारांश में मूल भाव को अपने शब्दों में लिखना होता है। यह मूल का एक-तिहाई होना चाहिए।',
    examples: [
      { text: 'गद्यांश का सारांश', analysis: 'मुख्य विचार संक्षेप में' }
    ],
    examTips: ['मूल भाव पहचानें', 'अपने शब्दों में लिखें', 'एक-तिहाई की सीमा'],
    importance: 'medium'
  },
  // समास (Compound)
  {
    id: 's1',
    title: 'समास',
    category: 'vyakaran',
    definition: 'दो या अधिक शब्दों से मिलकर बने नए शब्द को समास कहते हैं।',
    explanation: 'समास में शब्दों को जोड़कर संक्षिप्त बनाया जाता है। समास-विग्रह से मूल शब्द पता चलते हैं।',
    examples: [
      { text: 'राजपुत्र = राजा का पुत्र', analysis: 'तत्पुरुष समास' },
      { text: 'नीलकमल = नीला है जो कमल', analysis: 'कर्मधारय समास' }
    ],
    types: [
      { name: 'अव्ययीभाव', description: 'पहला पद प्रधान', example: 'यथाशक्ति, आजीवन' },
      { name: 'तत्पुरुष', description: 'दूसरा पद प्रधान', example: 'राजपुत्र, देशभक्ति' },
      { name: 'कर्मधारय', description: 'विशेषण-विशेष्य संबंध', example: 'नीलकमल, महात्मा' },
      { name: 'द्विगु', description: 'पहला पद संख्यावाचक', example: 'त्रिभुज, चौराहा' },
      { name: 'द्वंद्व', description: 'दोनों पद प्रधान', example: 'माता-पिता, सुख-दुख' },
      { name: 'बहुव्रीहि', description: 'तीसरा अर्थ प्रधान', example: 'लंबोदर (गणेश), दशानन (रावण)' }
    ],
    examTips: ['समास विग्रह करना सीखें', 'छह प्रकार याद करें', 'प्रत्येक के उदाहरण'],
    importance: 'high'
  },
  // संधि
  {
    id: 'sd1',
    title: 'संधि',
    category: 'vyakaran',
    definition: 'दो वर्णों के मिलने से होने वाले विकार को संधि कहते हैं।',
    explanation: 'संधि में निकटवर्ती वर्णों का मेल होता है। संधि-विच्छेद से मूल शब्द पता चलते हैं।',
    examples: [
      { text: 'विद्या + आलय = विद्यालय', analysis: 'स्वर संधि (दीर्घ)' },
      { text: 'सत् + जन = सज्जन', analysis: 'व्यंजन संधि' }
    ],
    types: [
      { name: 'स्वर संधि', description: 'स्वरों का मेल', example: 'हिम + आलय = हिमालय' },
      { name: 'व्यंजन संधि', description: 'व्यंजन + स्वर/व्यंजन', example: 'जगत् + नाथ = जगन्नाथ' },
      { name: 'विसर्ग संधि', description: 'विसर्ग का मेल', example: 'मनः + हर = मनोहर' }
    ],
    examTips: ['संधि विच्छेद करना', 'संधि बनाना', 'नियम याद करें'],
    importance: 'high'
  }
];

const HindiGrammarHub: React.FC<HindiGrammarHubProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'topics' | 'practice' | 'tips'>('topics');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [practiceMode, setPracticeMode] = useState(false);
  const [currentPracticeIndex, setCurrentPracticeIndex] = useState(0);
  const [showPracticeAnswer, setShowPracticeAnswer] = useState(false);

  const filteredTopics = useMemo(() => {
    return GRAMMAR_TOPICS.filter(t => {
      const matchesSearch = searchQuery === '' ||
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const highImportanceTopics = useMemo(() => 
    GRAMMAR_TOPICS.filter(t => t.importance === 'high'),
  []);

  const categories = [
    { id: 'all', name: 'सभी' },
    { id: 'vyakaran', name: 'व्याकरण' },
    { id: 'alankar', name: 'अलंकार' },
    { id: 'rachna', name: 'रचना' }
  ];

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'vyakaran': return 'bg-blue-900/30 text-blue-400';
      case 'alankar': return 'bg-purple-900/30 text-purple-400';
      case 'rachna': return 'bg-green-900/30 text-green-400';
      case 'sahitya': return 'bg-orange-900/30 text-orange-400';
      default: return 'bg-slate-600 text-slate-300';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="p-2 bg-orange-600 rounded-lg">
                  <BookOpen className="w-6 h-6" />
                </div>
                हिंदी व्याकरण हब
              </h2>
              <p className="text-slate-400 mt-1">Hindi Grammar Hub - संपूर्ण व्याकरण, अलंकार, रचना</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-slate-700/50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-white">{GRAMMAR_TOPICS.length}</div>
              <div className="text-xs text-slate-400">कुल विषय</div>
            </div>
            <div className="bg-blue-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">
                {GRAMMAR_TOPICS.filter(t => t.category === 'vyakaran').length}
              </div>
              <div className="text-xs text-blue-300">व्याकरण</div>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-purple-400">
                {GRAMMAR_TOPICS.filter(t => t.category === 'alankar').length}
              </div>
              <div className="text-xs text-purple-300">अलंकार</div>
            </div>
            <div className="bg-green-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-400">
                {GRAMMAR_TOPICS.filter(t => t.category === 'rachna').length}
              </div>
              <div className="text-xs text-green-300">रचना</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap">
            {[
              { id: 'topics', label: 'विषय (Topics)', icon: BookOpen },
              { id: 'practice', label: 'अभ्यास (Practice)', icon: Brain },
              { id: 'tips', label: 'परीक्षा टिप्स', icon: Target }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Topics Tab */}
          {activeTab === 'topics' && (
            <div>
              {/* Filters */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="खोजें..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                </div>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-orange-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Topics List */}
              <div className="space-y-3">
                {filteredTopics.map(topic => (
                  <div key={topic.id} className="bg-slate-700/50 rounded-xl overflow-hidden">
                    <div
                      onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                      className="p-4 cursor-pointer hover:bg-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            topic.importance === 'high' ? 'bg-red-900/50 text-red-400' :
                            topic.importance === 'medium' ? 'bg-yellow-900/50 text-yellow-400' :
                            'bg-green-900/50 text-green-400'
                          }`}>
                            {topic.importance === 'high' ? 'महत्वपूर्ण' : topic.importance === 'medium' ? 'मध्यम' : 'सामान्य'}
                          </div>
                          <div>
                            <h3 className="font-semibold text-white text-lg">{topic.title}</h3>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(topic.category)}`}>
                            {topic.category}
                          </span>
                          {expandedTopic === topic.id ? 
                            <ChevronUp className="w-5 h-5 text-slate-400" /> : 
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          }
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mt-2">{topic.definition}</p>
                    </div>

                    {expandedTopic === topic.id && (
                      <div className="border-t border-slate-600 p-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-orange-400 mb-2">विस्तृत विवरण</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{topic.explanation}</p>
                        </div>

                        {topic.types && topic.types.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-orange-400 mb-2">प्रकार/भेद</h4>
                            <div className="grid gap-2">
                              {topic.types.map((type, idx) => (
                                <div key={idx} className="bg-slate-600/50 rounded-lg p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Sparkles className="w-4 h-4 text-yellow-400" />
                                    <span className="font-medium text-white">{type.name}</span>
                                  </div>
                                  <p className="text-sm text-slate-400 mb-1">{type.description}</p>
                                  <p className="text-sm text-orange-300">उदाहरण: {type.example}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <h4 className="text-sm font-medium text-orange-400 mb-2">उदाहरण</h4>
                          <div className="space-y-2">
                            {topic.examples.map((ex, idx) => (
                              <div key={idx} className="bg-slate-600/50 rounded-lg p-3">
                                <p className="text-white font-medium">{ex.text}</p>
                                {ex.analysis && (
                                  <p className="text-sm text-slate-400 mt-1">→ {ex.analysis}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-orange-400 mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            परीक्षा टिप्स
                          </h4>
                          <ul className="space-y-1">
                            {topic.examTips.map((tip, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
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
            </div>
          )}

          {/* Practice Tab */}
          {activeTab === 'practice' && (
            <div>
              {!practiceMode ? (
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">व्याकरण अभ्यास</h3>
                  <p className="text-slate-400 mb-6">महत्वपूर्ण विषयों की परिभाषाएं और उदाहरण याद करें</p>
                  <p className="text-slate-300 mb-4">{highImportanceTopics.length} महत्वपूर्ण विषय</p>
                  <button
                    onClick={() => {
                      setPracticeMode(true);
                      setCurrentPracticeIndex(0);
                      setShowPracticeAnswer(false);
                    }}
                    className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    अभ्यास शुरू करें
                  </button>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-400">
                      प्रश्न {currentPracticeIndex + 1} / {highImportanceTopics.length}
                    </span>
                    <button
                      onClick={() => setPracticeMode(false)}
                      className="text-red-400 hover:text-red-300"
                    >
                      बंद करें
                    </button>
                  </div>

                  <div className="bg-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {highImportanceTopics[currentPracticeIndex].title} की परिभाषा बताएं
                    </h3>

                    {!showPracticeAnswer ? (
                      <button
                        onClick={() => setShowPracticeAnswer(true)}
                        className="w-full py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
                      >
                        उत्तर देखें
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 bg-slate-600 rounded-lg">
                          <h4 className="text-orange-400 font-medium mb-2">परिभाषा:</h4>
                          <p className="text-slate-200">{highImportanceTopics[currentPracticeIndex].definition}</p>
                        </div>
                        <div className="p-3 bg-orange-900/20 rounded-lg">
                          <h4 className="text-orange-400 font-medium mb-2">उदाहरण:</h4>
                          {highImportanceTopics[currentPracticeIndex].examples.slice(0, 2).map((ex, idx) => (
                            <p key={idx} className="text-sm text-orange-300">{ex.text}</p>
                          ))}
                        </div>
                        <button
                          onClick={() => {
                            if (currentPracticeIndex < highImportanceTopics.length - 1) {
                              setCurrentPracticeIndex(i => i + 1);
                              setShowPracticeAnswer(false);
                            } else {
                              setPracticeMode(false);
                            }
                          }}
                          className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                          {currentPracticeIndex < highImportanceTopics.length - 1 ? 'अगला →' : 'समाप्त'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tips Tab */}
          {activeTab === 'tips' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-400" />
                परीक्षा के लिए महत्वपूर्ण टिप्स
              </h3>

              <div className="grid gap-4">
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <h4 className="text-orange-400 font-medium mb-3">व्याकरण (Grammar)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      संज्ञा, सर्वनाम, विशेषण, क्रिया के सभी भेद याद करें
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      समास और संधि के नियम और विग्रह/विच्छेद अभ्यास करें
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      वाच्य परिवर्तन का अभ्यास करें
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      काल परिवर्तन के उदाहरण याद करें
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-700/50 rounded-xl p-4">
                  <h4 className="text-purple-400 font-medium mb-3">अलंकार (Figures of Speech)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      उपमा, रूपक, अनुप्रास, यमक, श्लेष - ये 5 अलंकार सबसे महत्वपूर्ण
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      उपमा के चारों अंग (उपमेय, उपमान, धर्म, वाचक) पहचानना सीखें
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      प्रत्येक अलंकार के 3-4 उदाहरण याद करें
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-700/50 rounded-xl p-4">
                  <h4 className="text-green-400 font-medium mb-3">रचना (Composition)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      पत्र लेखन का प्रारूप याद करें - औपचारिक और अनौपचारिक दोनों
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      निबंध में भूमिका, मुख्य भाग, उपसंहार का ध्यान रखें
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      5-6 महत्वपूर्ण निबंध तैयार रखें
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-900/20 rounded-xl p-4 border border-orange-800">
                  <h4 className="text-orange-400 font-medium mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    बोर्ड परीक्षा 2024 के लिए विशेष
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      व्याकरण से 15-20 अंक के प्रश्न आते हैं
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      समास और संधि हर साल पूछे जाते हैं
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      अलंकार पहचान के प्रश्न महत्वपूर्ण हैं
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      पत्र लेखन में प्रारूप पर पूरे अंक मिलते हैं
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HindiGrammarHub;
