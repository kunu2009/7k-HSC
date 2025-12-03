import React, { useState, useEffect } from 'react';
import { X, Cloud, Hash, Shuffle, Filter, ChevronRight, Search, ExternalLink, Download, Star, TrendingUp } from 'lucide-react';
import { Subject } from '../types';

interface KeywordCloudProps {
  subjects: Subject[];
  onClose: () => void;
}

interface Keyword {
  word: string;
  count: number;
  subjects: string[];
  chapters: string[];
  importance: number; // 1-10
}

// Common stop words to filter out
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should',
  'may', 'might', 'must', 'shall', 'can', 'need', 'dare', 'ought', 'used',
  'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from', 'as', 'into',
  'through', 'during', 'before', 'after', 'above', 'below', 'between',
  'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when',
  'where', 'why', 'how', 'all', 'each', 'few', 'more', 'most', 'other',
  'some', 'such', 'no', 'not', 'only', 'own', 'same', 'so', 'than', 'too',
  'very', 'just', 'and', 'but', 'if', 'or', 'because', 'until', 'while',
  'although', 'though', 'since', 'unless', 'this', 'that', 'these', 'those',
  'what', 'which', 'who', 'whom', 'whose', 'it', 'its', 'he', 'she', 'they',
  'them', 'his', 'her', 'their', 'our', 'your', 'my', 'i', 'you', 'we',
  'called', 'known', 'also', 'one', 'two', 'three', 'many', 'any', 'etc'
]);

const KeywordCloud: React.FC<KeywordCloudProps> = ({ subjects, onClose }) => {
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'count' | 'alphabetical' | 'importance'>('count');
  const [minCount, setMinCount] = useState(2);
  const [selectedKeyword, setSelectedKeyword] = useState<Keyword | null>(null);
  const [starred, setStarred] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'cloud' | 'list'>('cloud');

  // Load starred keywords
  useEffect(() => {
    const saved = localStorage.getItem('7k-starred-keywords');
    if (saved) {
      setStarred(new Set(JSON.parse(saved)));
    }
  }, []);

  // Extract keywords from content
  useEffect(() => {
    const wordMap: Record<string, { count: number; subjects: Set<string>; chapters: Set<string> }> = {};
    
    subjects.forEach(subject => {
      if (selectedSubject !== 'all' && subject.id !== selectedSubject) return;
      
      subject.chapters.forEach(chapter => {
        const processText = (text: string) => {
          // Extract words
          const words = text.toLowerCase()
            .replace(/[^a-zA-Z\u0900-\u097F\s]/g, ' ') // Keep English and Hindi characters
            .split(/\s+/)
            .filter(w => w.length > 2 && !STOP_WORDS.has(w));
          
          words.forEach(word => {
            if (!wordMap[word]) {
              wordMap[word] = { count: 0, subjects: new Set(), chapters: new Set() };
            }
            wordMap[word].count += 1;
            wordMap[word].subjects.add(subject.name);
            wordMap[word].chapters.add(chapter.title);
          });
        };
        
        // Process flashcards
        chapter.flashcards?.forEach(card => {
          processText(card.front);
          processText(card.back);
        });
        
        // Process MCQs
        chapter.mcqs?.forEach(mcq => {
          processText(mcq.question);
          mcq.options.forEach(opt => processText(opt));
        });
        
        // Process long answers
        chapter.longAnswers?.forEach(la => {
          processText(la.question);
          processText(la.answer);
        });
      });
    });
    
    // Convert to array and calculate importance
    const keywordList: Keyword[] = Object.entries(wordMap)
      .filter(([_, data]) => data.count >= minCount)
      .map(([word, data]) => ({
        word,
        count: data.count,
        subjects: Array.from(data.subjects),
        chapters: Array.from(data.chapters),
        importance: Math.min(10, Math.ceil(data.count / 3) + data.subjects.size + data.chapters.size / 2)
      }));
    
    // Sort
    const sorted = [...keywordList];
    if (sortBy === 'count') {
      sorted.sort((a, b) => b.count - a.count);
    } else if (sortBy === 'alphabetical') {
      sorted.sort((a, b) => a.word.localeCompare(b.word));
    } else {
      sorted.sort((a, b) => b.importance - a.importance);
    }
    
    setKeywords(sorted);
  }, [subjects, selectedSubject, minCount, sortBy]);

  // Filter by search
  const filteredKeywords = keywords.filter(k => 
    k.word.includes(searchQuery.toLowerCase())
  );

  const toggleStar = (word: string) => {
    setStarred(prev => {
      const newStarred = new Set(prev);
      if (newStarred.has(word)) {
        newStarred.delete(word);
      } else {
        newStarred.add(word);
      }
      localStorage.setItem('7k-starred-keywords', JSON.stringify(Array.from(newStarred)));
      return newStarred;
    });
  };

  const exportKeywords = () => {
    const content = keywords.map(k => 
      `${k.word} (${k.count}) - ${k.subjects.join(', ')}`
    ).join('\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'keywords.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getWordSize = (count: number, maxCount: number) => {
    const minSize = 12;
    const maxSize = 36;
    const ratio = count / maxCount;
    return minSize + (maxSize - minSize) * ratio;
  };

  const getWordColor = (importance: number) => {
    const colors = [
      'text-gray-400', 'text-gray-500', 'text-blue-400', 'text-blue-500',
      'text-green-400', 'text-green-500', 'text-purple-400', 'text-purple-500',
      'text-orange-400', 'text-orange-500', 'text-red-500'
    ];
    return colors[Math.min(importance, colors.length - 1)];
  };

  const maxCount = keywords.length > 0 ? keywords[0].count : 1;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Cloud className="w-6 h-6" /> Keyword Cloud
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm opacity-80 mt-1">
            {filteredKeywords.length} important keywords extracted
          </p>
        </div>
        
        {/* Controls */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search keywords..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
              />
            </div>
            
            {/* Subject filter */}
            <select
              value={selectedSubject}
              onChange={e => setSelectedSubject(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
            >
              <option value="all">All Subjects</option>
              {subjects.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
            
            {/* Sort */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as typeof sortBy)}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
            >
              <option value="count">By Frequency</option>
              <option value="importance">By Importance</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
            
            {/* Min count */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Min:</span>
              <input
                type="number"
                value={minCount}
                onChange={e => setMinCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 px-2 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm text-center"
                min="1"
              />
            </div>
            
            {/* View toggle */}
            <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setViewMode('cloud')}
                className={`px-3 py-2 text-sm ${viewMode === 'cloud' ? 'bg-violet-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}
              >
                <Cloud className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 text-sm ${viewMode === 'list' ? 'bg-violet-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}
              >
                <Hash className="w-4 h-4" />
              </button>
            </div>
            
            {/* Export */}
            <button
              onClick={exportKeywords}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-hidden flex">
          {/* Main content */}
          <div className={`flex-1 overflow-y-auto p-6 ${selectedKeyword ? 'w-2/3' : 'w-full'}`}>
            {filteredKeywords.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Cloud className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>No keywords found</p>
              </div>
            ) : viewMode === 'cloud' ? (
              /* Cloud View */
              <div className="flex flex-wrap gap-2 justify-center items-center min-h-[300px]">
                {filteredKeywords.slice(0, 100).map(keyword => (
                  <button
                    key={keyword.word}
                    onClick={() => setSelectedKeyword(keyword)}
                    className={`px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                      starred.has(keyword.word) ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''
                    } ${getWordColor(keyword.importance)} ${
                      selectedKeyword?.word === keyword.word ? 'ring-2 ring-violet-500' : ''
                    }`}
                    style={{ fontSize: `${getWordSize(keyword.count, maxCount)}px` }}
                  >
                    {keyword.word}
                    {starred.has(keyword.word) && <Star className="w-3 h-3 inline ml-1 text-yellow-500 fill-yellow-500" />}
                  </button>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-2">
                {filteredKeywords.map((keyword, idx) => (
                  <button
                    key={keyword.word}
                    onClick={() => setSelectedKeyword(keyword)}
                    className={`w-full text-left p-3 rounded-xl transition ${
                      selectedKeyword?.word === keyword.word 
                        ? 'bg-violet-100 dark:bg-violet-900/30 ring-2 ring-violet-500'
                        : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400 w-8">{idx + 1}</span>
                        <span className={`font-medium ${getWordColor(keyword.importance)}`}>
                          {keyword.word}
                        </span>
                        {starred.has(keyword.word) && (
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">
                          {keyword.count}×
                        </span>
                        <span>{keyword.subjects.length} subjects</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Detail Panel */}
          {selectedKeyword && (
            <div className="w-1/3 border-l border-gray-200 dark:border-gray-700 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold dark:text-white">{selectedKeyword.word}</h3>
                  <button
                    onClick={() => toggleStar(selectedKeyword.word)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <Star className={`w-5 h-5 ${
                      starred.has(selectedKeyword.word) 
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-gray-400'
                    }`} />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-violet-500">{selectedKeyword.count}</p>
                    <p className="text-xs text-gray-500">Occurrences</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-purple-500">{selectedKeyword.importance}</p>
                    <p className="text-xs text-gray-500">Importance</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Found in Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedKeyword.subjects.map(sub => (
                      <span key={sub} className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded text-sm">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Found in Chapters:</h4>
                  <div className="space-y-1 max-h-48 overflow-y-auto">
                    {selectedKeyword.chapters.map(ch => (
                      <div key={ch} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        {ch}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedKeyword(null)}
                  className="w-full py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Close Details
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Starred Keywords Bar */}
        {starred.size > 0 && (
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-yellow-50 dark:bg-yellow-900/20">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-yellow-700 dark:text-yellow-400">Starred:</span>
              <div className="flex-1 flex flex-wrap gap-2">
                {Array.from(starred).slice(0, 10).map(word => (
                  <span key={word} className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded text-sm">
                    {word}
                  </span>
                ))}
                {starred.size > 10 && (
                  <span className="text-sm text-yellow-600">+{starred.size - 10} more</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeywordCloud;
