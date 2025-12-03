import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronDown, Star, BookOpen, Check, Filter, Download, Share2, Circle, Square, Diamond } from 'lucide-react';
import { Subject } from '../types';

interface MindMapViewProps {
  subjects: Subject[];
  onClose: () => void;
}

interface MindMapNode {
  id: string;
  label: string;
  children: MindMapNode[];
  type: 'subject' | 'chapter' | 'topic' | 'detail';
  expanded: boolean;
  starred?: boolean;
  count?: number;
}

const NODE_COLORS: Record<string, string> = {
  subject: 'bg-gradient-to-r from-purple-500 to-pink-500',
  chapter: 'bg-gradient-to-r from-blue-500 to-cyan-500',
  topic: 'bg-gradient-to-r from-green-500 to-emerald-500',
  detail: 'bg-gradient-to-r from-orange-400 to-yellow-400'
};

const NODE_ICONS: Record<string, React.ReactNode> = {
  subject: <Square className="w-4 h-4" />,
  chapter: <Circle className="w-4 h-4" />,
  topic: <Diamond className="w-4 h-4" />,
  detail: <Star className="w-3 h-3" />
};

const MindMapView: React.FC<MindMapViewProps> = ({ subjects, onClose }) => {
  const [mindMap, setMindMap] = useState<MindMapNode[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandAll, setExpandAll] = useState(false);
  const [starredNodes, setStarredNodes] = useState<Set<string>>(new Set());

  // Load starred nodes
  useEffect(() => {
    const saved = localStorage.getItem('7k-mindmap-starred');
    if (saved) {
      setStarredNodes(new Set(JSON.parse(saved)));
    }
  }, []);

  // Build mind map structure
  useEffect(() => {
    const buildMindMap = (): MindMapNode[] => {
      return subjects
        .filter(s => selectedSubject === 'all' || s.id === selectedSubject)
        .map(subject => {
          const subjectNode: MindMapNode = {
            id: subject.id,
            label: subject.name,
            type: 'subject',
            expanded: expandAll || selectedSubject !== 'all',
            children: subject.chapters.map(chapter => {
              // Extract topics from flashcards
              const topics = new Map<string, string[]>();
              
              chapter.flashcards?.forEach(card => {
                const topic = card.category || 'Key Points';
                if (!topics.has(topic)) {
                  topics.set(topic, []);
                }
                topics.get(topic)!.push(card.front);
              });
              
              // Add MCQ topics
              chapter.mcqs?.forEach(mcq => {
                const topic = 'MCQ Topics';
                if (!topics.has(topic)) {
                  topics.set(topic, []);
                }
                // Extract key terms from question
                const keyTerms = mcq.question.split(' ')
                  .filter(w => w.length > 4 && w[0] === w[0].toUpperCase())
                  .slice(0, 2)
                  .join(' ');
                if (keyTerms) {
                  topics.get(topic)!.push(keyTerms || mcq.question.slice(0, 30) + '...');
                }
              });
              
              const chapterNode: MindMapNode = {
                id: chapter.id,
                label: chapter.title,
                type: 'chapter',
                expanded: expandAll,
                count: (chapter.flashcards?.length || 0) + (chapter.mcqs?.length || 0),
                children: Array.from(topics.entries()).map(([topic, details]) => ({
                  id: `${chapter.id}-${topic}`,
                  label: topic,
                  type: 'topic' as const,
                  expanded: false,
                  count: details.length,
                  children: details.slice(0, 10).map((detail, idx) => ({
                    id: `${chapter.id}-${topic}-${idx}`,
                    label: detail.length > 40 ? detail.slice(0, 40) + '...' : detail,
                    type: 'detail' as const,
                    expanded: false,
                    children: []
                  }))
                }))
              };
              
              return chapterNode;
            })
          };
          
          return subjectNode;
        });
    };
    
    setMindMap(buildMindMap());
  }, [subjects, selectedSubject, expandAll]);

  const toggleNode = (nodeId: string) => {
    const toggleInTree = (nodes: MindMapNode[]): MindMapNode[] => {
      return nodes.map(node => {
        if (node.id === nodeId) {
          return { ...node, expanded: !node.expanded };
        }
        if (node.children.length > 0) {
          return { ...node, children: toggleInTree(node.children) };
        }
        return node;
      });
    };
    
    setMindMap(prev => toggleInTree(prev));
  };

  const toggleStar = (nodeId: string) => {
    setStarredNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      localStorage.setItem('7k-mindmap-starred', JSON.stringify(Array.from(newSet)));
      return newSet;
    });
  };

  const exportMindMap = () => {
    const buildText = (nodes: MindMapNode[], level: number = 0): string => {
      return nodes.map(node => {
        const indent = '  '.repeat(level);
        const prefix = level === 0 ? '# ' : level === 1 ? '## ' : level === 2 ? '- ' : '  - ';
        const line = `${indent}${prefix}${node.label}`;
        const children = node.children.length > 0 ? '\n' + buildText(node.children, level + 1) : '';
        return line + children;
      }).join('\n');
    };
    
    const content = buildText(mindMap);
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mindmap.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderNode = (node: MindMapNode, level: number = 0) => {
    const hasChildren = node.children.length > 0;
    const isStarred = starredNodes.has(node.id);
    
    // Filter by search
    if (searchQuery && !node.label.toLowerCase().includes(searchQuery.toLowerCase())) {
      // Check if any children match
      const childMatch = node.children.some(c => 
        c.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.children.some(gc => gc.label.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      if (!childMatch) return null;
    }
    
    return (
      <div key={node.id} className={`${level > 0 ? 'ml-6' : ''}`}>
        <div className={`group flex items-center gap-2 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ${
          level === 0 ? 'mb-2' : ''
        }`}>
          {/* Expand/Collapse */}
          {hasChildren ? (
            <button
              onClick={() => toggleNode(node.id)}
              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              {node.expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          ) : (
            <div className="w-6 h-6 flex items-center justify-center text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-current" />
            </div>
          )}
          
          {/* Node Type Icon */}
          <div className={`w-6 h-6 rounded flex items-center justify-center text-white ${NODE_COLORS[node.type]}`}>
            {NODE_ICONS[node.type]}
          </div>
          
          {/* Label */}
          <span className={`flex-1 ${
            node.type === 'subject' ? 'font-bold text-lg dark:text-white' :
            node.type === 'chapter' ? 'font-semibold dark:text-white' :
            node.type === 'topic' ? 'font-medium text-gray-700 dark:text-gray-300' :
            'text-sm text-gray-600 dark:text-gray-400'
          }`}>
            {node.label}
          </span>
          
          {/* Count Badge */}
          {node.count !== undefined && (
            <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
              {node.count}
            </span>
          )}
          
          {/* Star */}
          <button
            onClick={() => toggleStar(node.id)}
            className={`p-1 rounded opacity-0 group-hover:opacity-100 transition ${
              isStarred ? 'opacity-100' : ''
            }`}
          >
            <Star className={`w-4 h-4 ${
              isStarred ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'
            }`} />
          </button>
        </div>
        
        {/* Children */}
        {node.expanded && hasChildren && (
          <div className={`border-l-2 ${
            node.type === 'subject' ? 'border-purple-200 dark:border-purple-800' :
            node.type === 'chapter' ? 'border-blue-200 dark:border-blue-800' :
            'border-gray-200 dark:border-gray-700'
          }`}>
            {node.children.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Share2 className="w-6 h-6" /> Mind Map View
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm opacity-80 mt-1">
            Visual overview of all study content
          </p>
        </div>
        
        {/* Controls */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search */}
            <input
              type="text"
              placeholder="Filter nodes..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="flex-1 min-w-[200px] px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
            />
            
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
            
            {/* Expand/Collapse All */}
            <button
              onClick={() => setExpandAll(!expandAll)}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              {expandAll ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              {expandAll ? 'Collapse All' : 'Expand All'}
            </button>
            
            {/* Export */}
            <button
              onClick={exportMindMap}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
          
          {/* Legend */}
          <div className="flex gap-4 mt-3 text-xs">
            <span className="flex items-center gap-1">
              <div className={`w-4 h-4 rounded ${NODE_COLORS.subject}`} />
              <span className="text-gray-500 dark:text-gray-400">Subject</span>
            </span>
            <span className="flex items-center gap-1">
              <div className={`w-4 h-4 rounded ${NODE_COLORS.chapter}`} />
              <span className="text-gray-500 dark:text-gray-400">Chapter</span>
            </span>
            <span className="flex items-center gap-1">
              <div className={`w-4 h-4 rounded ${NODE_COLORS.topic}`} />
              <span className="text-gray-500 dark:text-gray-400">Topic</span>
            </span>
            <span className="flex items-center gap-1">
              <div className={`w-4 h-4 rounded ${NODE_COLORS.detail}`} />
              <span className="text-gray-500 dark:text-gray-400">Detail</span>
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {mindMap.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Share2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>No content to display</p>
            </div>
          ) : (
            <div className="space-y-2">
              {mindMap.map(node => renderNode(node))}
            </div>
          )}
        </div>
        
        {/* Starred Nodes */}
        {starredNodes.size > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-yellow-50 dark:bg-yellow-900/20">
            <div className="flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-yellow-700 dark:text-yellow-400 font-medium">
                {starredNodes.size} starred nodes
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MindMapView;
