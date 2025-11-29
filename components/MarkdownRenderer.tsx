
import React from 'react';

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  if (!content) return null;

  const lines = content.split('\n');

  return (
    <div className="space-y-3">
      {lines.map((line, index) => {
        // 1. Identify type and clean content
        let type = 'p';
        let cleanText = line;

        if (line.trim().startsWith('### ')) {
          type = 'h3';
          cleanText = line.trim().replace(/^###\s+/, '');
        } else if (line.trim().startsWith('#### ')) {
          type = 'h4';
          cleanText = line.trim().replace(/^####\s+/, '');
        } else if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
          type = 'li';
          cleanText = line.trim().replace(/^[*|-]\s+/, '');
        } else if (line.trim() === '') {
          return <br key={index} className="block content-[''] my-2" />;
        }

        // 2. Process Inline Formatting (Bold) on the cleaned text
        const parts = cleanText.split(/(\*\*.*?\*\*)/g);
        const children = parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold text-indigo-800 dark:text-indigo-300">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        // 3. Render based on type
        if (type === 'h3') {
           return <h3 key={index} className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mt-6 mb-2 border-b border-indigo-100 dark:border-indigo-800 pb-1">{children}</h3>;
        }
        
        if (type === 'h4') {
           return <h4 key={index} className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-4 mb-1">{children}</h4>;
        }
        
        if (type === 'li') {
           return (
             <div key={index} className="flex gap-3 ml-1 items-start">
               <span className="text-indigo-500 shrink-0 mt-1.5 text-xs">●</span>
               <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{children}</span>
             </div>
           );
        }

        return <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed">{children}</p>;
      })}
    </div>
  );
};

export default MarkdownRenderer;
