import React from "react";

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  if (!content) return null;

  // Process inline formatting (bold, italic, etc.)
  const processInlineFormatting = (text: string): React.ReactNode[] => {
    // Handle **bold** and *italic*
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong
            key={i}
            className="font-bold text-indigo-700 dark:text-indigo-300"
          >
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (
        part.startsWith("*") &&
        part.endsWith("*") &&
        !part.startsWith("**")
      ) {
        return (
          <em key={i} className="italic">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Skip empty lines
    if (trimmedLine === "") {
      i++;
      continue;
    }

    // Handle tables
    if (trimmedLine.startsWith("|") && trimmedLine.endsWith("|")) {
      const tableRows: string[][] = [];
      let j = i;

      // Collect all table rows
      while (
        j < lines.length &&
        lines[j].trim().startsWith("|") &&
        lines[j].trim().endsWith("|")
      ) {
        const row = lines[j].trim();
        // Skip separator rows (|---|---|)
        if (!row.match(/^\|[\s-:|]+\|$/)) {
          const cells = row
            .split("|")
            .slice(1, -1)
            .map((cell) => cell.trim());
          tableRows.push(cells);
        }
        j++;
      }

      if (tableRows.length > 0) {
        elements.push(
          <div key={i} className="overflow-x-auto my-3">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-indigo-50 dark:bg-indigo-900/30">
                  {tableRows[0].map((cell, cellIdx) => (
                    <th
                      key={cellIdx}
                      className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-bold text-indigo-800 dark:text-indigo-200"
                    >
                      {processInlineFormatting(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className={
                      rowIdx % 2 === 0
                        ? "bg-white dark:bg-slate-800"
                        : "bg-slate-50 dark:bg-slate-700"
                    }
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-slate-700 dark:text-slate-300"
                      >
                        {processInlineFormatting(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
      }
      i = j;
      continue;
    }

    // Handle headers
    if (trimmedLine.startsWith("#### ")) {
      elements.push(
        <h4
          key={i}
          className="text-base font-bold text-slate-800 dark:text-slate-200 mt-4 mb-2"
        >
          {processInlineFormatting(trimmedLine.replace(/^####\s+/, ""))}
        </h4>,
      );
      i++;
      continue;
    }

    if (trimmedLine.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-lg font-bold text-indigo-800 dark:text-indigo-200 mt-5 mb-2 border-b border-indigo-100 dark:border-indigo-800 pb-1"
        >
          {processInlineFormatting(trimmedLine.replace(/^###\s+/, ""))}
        </h3>,
      );
      i++;
      continue;
    }

    // Handle numbered lists (1. 2. 3. etc.)
    if (trimmedLine.match(/^\d+\.\s+/)) {
      elements.push(
        <div key={i} className="flex gap-2 ml-2 items-start my-1">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0">
            {trimmedLine.match(/^\d+/)?.[0]}.
          </span>
          <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {processInlineFormatting(trimmedLine.replace(/^\d+\.\s+/, ""))}
          </span>
        </div>,
      );
      i++;
      continue;
    }

    // Handle bullet points (* or -)
    if (trimmedLine.startsWith("* ") || trimmedLine.startsWith("- ")) {
      elements.push(
        <div key={i} className="flex gap-2 ml-3 items-start my-1">
          <span className="text-indigo-500 shrink-0 mt-1.5 text-xs">●</span>
          <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {processInlineFormatting(trimmedLine.replace(/^[*-]\s+/, ""))}
          </span>
        </div>,
      );
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={i}
        className="text-slate-700 dark:text-slate-300 leading-relaxed my-1"
      >
        {processInlineFormatting(trimmedLine)}
      </p>,
    );
    i++;
  }

  return <div className="space-y-1">{elements}</div>;
};

export default MarkdownRenderer;
