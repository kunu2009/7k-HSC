import React, { useEffect } from "react";
import { X, Maximize2 } from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer";

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  type?: "question" | "answer" | "both";
  question?: string;
}

const FullscreenModal: React.FC<FullscreenModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  type = "answer",
  question,
}) => {
  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-0 sm:p-4">
      <div className="bg-white dark:bg-slate-900 w-full h-full sm:h-auto sm:max-h-[95vh] sm:max-w-4xl sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 sm:p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <Maximize2 className="text-white" size={20} />
            <h2 className="font-bold text-white text-sm sm:text-lg">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Question Section */}
          {(type === "question" || type === "both") && question && (
            <div className="mb-4 sm:mb-6">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-3 sm:p-4 border-l-4 border-indigo-500">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2 text-xs sm:text-sm uppercase tracking-wide">
                  Question
                </h3>
                <p className="text-base sm:text-lg text-slate-800 dark:text-white font-medium">
                  {question}
                </p>
              </div>
            </div>
          )}

          {/* Answer/Content Section */}
          {(type === "answer" || type === "both") && (
            <div className="prose prose-sm sm:prose prose-slate dark:prose-invert max-w-none">
              <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                {type === "both" && (
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">
                    Model Answer
                  </h3>
                )}
                <div className="text-sm sm:text-base leading-relaxed">
                  <MarkdownRenderer content={content} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-100 dark:bg-slate-800 p-3 sm:p-4 border-t border-slate-200 dark:border-slate-700 shrink-0">
          <div className="flex justify-between items-center">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hidden sm:block">
              Press{" "}
              <kbd className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">
                ESC
              </kbd>{" "}
              to close
            </p>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenModal;
