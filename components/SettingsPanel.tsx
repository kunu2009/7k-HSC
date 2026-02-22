import React, { useState } from "react";
import {
  X,
  Settings,
  Moon,
  Sun,
  Eye,
  EyeOff,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  RotateCcw,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Palette,
  Timer,
  Trash2,
  Download,
  Upload,
  Sparkles,
  Leaf,
  Waves,
  Sunset,
  CloudMoon,
  Flower2,
} from "lucide-react";
import { Subject } from "../types";
import { db } from "../services/localDb";

// Theme definitions
export const THEMES = [
  {
    id: "light",
    name: "Light",
    icon: Sun,
    colors: { bg: "#ffffff", primary: "#3b82f6", accent: "#f1f5f9" },
    description: "Clean & bright",
  },
  {
    id: "dark",
    name: "Dark",
    icon: Moon,
    colors: { bg: "#0f172a", primary: "#6366f1", accent: "#1e293b" },
    description: "Easy on eyes",
  },
  {
    id: "timberwolf",
    name: "Timberwolf",
    icon: Sparkles,
    colors: { bg: "#d6d3cd", primary: "#7c7c7c", accent: "#e8e6e1" },
    description: "Warm & neutral",
  },
  {
    id: "ocean",
    name: "Ocean",
    icon: Waves,
    colors: { bg: "#0c4a6e", primary: "#38bdf8", accent: "#075985" },
    description: "Deep sea vibes",
  },
  {
    id: "sunset",
    name: "Sunset",
    icon: Sunset,
    colors: { bg: "#1f1523", primary: "#f97316", accent: "#3b1d32" },
    description: "Warm & cozy",
  },
  {
    id: "forest",
    name: "Forest",
    icon: Leaf,
    colors: { bg: "#14291a", primary: "#22c55e", accent: "#1a3a24" },
    description: "Nature inspired",
  },
  {
    id: "lavender",
    name: "Lavender",
    icon: Flower2,
    colors: { bg: "#faf5ff", primary: "#a855f7", accent: "#f3e8ff" },
    description: "Soft & calming",
  },
  {
    id: "midnight",
    name: "Midnight",
    icon: CloudMoon,
    colors: { bg: "#020617", primary: "#818cf8", accent: "#0f172a" },
    description: "Deep & focused",
  },
];

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  theme: string;
  setTheme: (value: string) => void;
  showCompletedSubjects: boolean;
  setShowCompletedSubjects: (value: boolean) => void;
  completedSubjects: Subject[];
  onResetOnboarding?: () => void;
  installPrompt?: any;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isOpen,
  onClose,
  darkMode,
  setDarkMode,
  theme,
  setTheme,
  showCompletedSubjects,
  setShowCompletedSubjects,
  completedSubjects,
  onResetOnboarding,
  installPrompt,
}) => {
  const [settings, setSettings] = useState(() => db.getSettings());
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);

  // Drag to close logic
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  if (!isOpen) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    if (diff > 0) {
      setDragY(diff);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (dragY > 150) {
      // Threshold to close
      onClose();
    } else {
      // Snap back
      setDragY(0);
    }
  };

  const handleToggleCompletedSubjects = () => {
    const newValue = !showCompletedSubjects;
    setShowCompletedSubjects(newValue);
    db.saveSettings({ showCompletedSubjects: newValue });
  };

  const handleToggleDarkMode = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);
    // Also update theme based on dark mode toggle
    const newTheme = newValue ? "dark" : "light";
    setTheme(newTheme);
    db.saveSettings({ darkMode: newValue, theme: newTheme });
  };

  const handleThemeChange = (themeId: string) => {
    setTheme(themeId);
    const isDark = !["light", "timberwolf", "lavender"].includes(themeId);
    setDarkMode(isDark);
    db.saveSettings({ theme: themeId, darkMode: isDark });
    setShowThemePicker(false);
  };

  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[0];

  const handleToggleSetting = (key: keyof typeof settings) => {
    const newValue = !settings[key];
    setSettings((prev) => ({ ...prev, [key]: newValue }));
    db.saveSettings({ [key]: newValue });
  };

  const handleClearProgress = () => {
    if (
      confirm(
        "This will clear ALL your study progress (MCQs, flashcards, etc). Are you sure?",
      )
    ) {
      localStorage.removeItem("7k-hsc-progress");
      localStorage.removeItem("7k-study-streak");
      localStorage.removeItem("7k-study-activity");
      alert("Progress cleared! Refresh the app.");
    }
  };

  const handleExportData = () => {
    const data = {
      profile: db.getUserProfile(),
      settings: db.getSettings(),
      progress: localStorage.getItem("7k-hsc-progress"),
      marks: localStorage.getItem("7k-hsc-previous-marks"),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `7k-hsc-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center backdrop-blur-sm transition-all"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white dark:bg-slate-900 w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl max-h-[85vh] overflow-hidden flex flex-col animate-slide-up shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateY(${dragY}px)`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        }}
      >
        {/* Drag Handle (Mobile only) */}
        <div className="w-full flex justify-center pt-3 pb-1 sm:hidden bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900">
          <div className="w-12 h-1.5 bg-white/20 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <Settings className="text-white" size={22} />
            <h2 className="font-bold text-white text-lg">Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Install App Banner */}
          {installPrompt && (
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Download size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Install App</h3>
                    <p className="text-purple-100 text-xs">
                      Add to home screen for offline access
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  installPrompt.prompt();
                  installPrompt.userChoice.then((choiceResult: any) => {
                    if (choiceResult.outcome === "accepted") {
                      console.log("User accepted the install prompt");
                    }
                    onClose();
                  });
                }}
                className="w-full bg-white text-purple-600 font-bold py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors"
              >
                Install Now
              </button>
            </div>
          )}

          {/* Appearance Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide px-1">
              Appearance
            </h3>

            {/* Quick Dark/Light Toggle */}
            <button
              onClick={handleToggleDarkMode}
              className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500" : "bg-amber-100 text-amber-500"}`}
                >
                  {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    {darkMode ? "Dark Mode" : "Light Mode"}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {darkMode ? "Easier on eyes at night" : "Bright and clear"}
                  </p>
                </div>
              </div>
              <div
                className={`w-12 h-7 rounded-full p-1 transition-colors ${darkMode ? "bg-indigo-500" : "bg-slate-300"}`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${darkMode ? "translate-x-5" : "translate-x-0"}`}
                />
              </div>
            </button>

            {/* Theme Picker Button */}
            <button
              onClick={() => setShowThemePicker(!showThemePicker)}
              className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: currentTheme.colors.primary + "20",
                  }}
                >
                  <Palette
                    size={20}
                    style={{ color: currentTheme.colors.primary }}
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    Theme: {currentTheme.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {currentTheme.description}
                  </p>
                </div>
              </div>
              <ChevronRight
                size={20}
                className={`text-slate-400 transition-transform ${showThemePicker ? "rotate-90" : ""}`}
              />
            </button>

            {/* Theme Grid */}
            {showThemePicker && (
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  Choose your theme
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {THEMES.map((t) => {
                    const IconComponent = t.icon;
                    const isActive = theme === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => handleThemeChange(t.id)}
                        className={`relative flex flex-col items-center p-3 rounded-xl transition-all ${
                          isActive
                            ? "ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-800"
                            : "hover:bg-slate-100 dark:hover:bg-slate-700"
                        }`}
                        style={{
                          backgroundColor: t.colors.bg,
                          ringColor: isActive ? t.colors.primary : undefined,
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center mb-1"
                          style={{ backgroundColor: t.colors.accent }}
                        >
                          <IconComponent
                            size={16}
                            style={{ color: t.colors.primary }}
                          />
                        </div>
                        <span
                          className="text-[10px] font-medium"
                          style={{ color: t.colors.primary }}
                        >
                          {t.name}
                        </span>
                        {isActive && (
                          <div
                            className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: t.colors.primary }}
                          >
                            <CheckCircle2 size={10} className="text-white" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Subjects Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide px-1">
              Subjects Display
            </h3>

            {/* Show Completed Subjects Toggle */}
            <button
              onClick={handleToggleCompletedSubjects}
              className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${showCompletedSubjects ? "bg-green-100 dark:bg-green-900/50 text-green-500" : "bg-slate-200 dark:bg-slate-700 text-slate-500"}`}
                >
                  {showCompletedSubjects ? (
                    <Eye size={20} />
                  ) : (
                    <EyeOff size={20} />
                  )}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    Show Completed Exams
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {showCompletedSubjects
                      ? "All subjects visible"
                      : "Only upcoming exams"}
                  </p>
                </div>
              </div>
              <div
                className={`w-12 h-7 rounded-full p-1 transition-colors ${showCompletedSubjects ? "bg-green-500" : "bg-slate-300 dark:bg-slate-600"}`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${showCompletedSubjects ? "translate-x-5" : "translate-x-0"}`}
                />
              </div>
            </button>

            {/* List of Completed Subjects */}
            {completedSubjects.length > 0 && (
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                    Exams Done ({completedSubjects.length})
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {completedSubjects.map((sub) => (
                    <span
                      key={sub.id}
                      className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium"
                    >
                      ✓ {sub.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Preferences Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide px-1">
              Preferences
            </h3>

            {/* Sound Toggle */}
            <button
              onClick={() => handleToggleSetting("soundEnabled")}
              className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${settings.soundEnabled ? "bg-blue-100 dark:bg-blue-900/50 text-blue-500" : "bg-slate-200 dark:bg-slate-700 text-slate-500"}`}
                >
                  {settings.soundEnabled ? (
                    <Volume2 size={20} />
                  ) : (
                    <VolumeX size={20} />
                  )}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    Sound Effects
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {settings.soundEnabled ? "Enabled" : "Muted"}
                  </p>
                </div>
              </div>
              <div
                className={`w-12 h-7 rounded-full p-1 transition-colors ${settings.soundEnabled ? "bg-blue-500" : "bg-slate-300 dark:bg-slate-600"}`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${settings.soundEnabled ? "translate-x-5" : "translate-x-0"}`}
                />
              </div>
            </button>

            {/* Notifications Toggle */}
            <button
              onClick={() => handleToggleSetting("notificationsEnabled")}
              className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${settings.notificationsEnabled ? "bg-purple-100 dark:bg-purple-900/50 text-purple-500" : "bg-slate-200 dark:bg-slate-700 text-slate-500"}`}
                >
                  {settings.notificationsEnabled ? (
                    <Bell size={20} />
                  ) : (
                    <BellOff size={20} />
                  )}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    Notifications
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {settings.notificationsEnabled
                      ? "Reminders on"
                      : "Reminders off"}
                  </p>
                </div>
              </div>
              <div
                className={`w-12 h-7 rounded-full p-1 transition-colors ${settings.notificationsEnabled ? "bg-purple-500" : "bg-slate-300 dark:bg-slate-600"}`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${settings.notificationsEnabled ? "translate-x-5" : "translate-x-0"}`}
                />
              </div>
            </button>
          </div>

          {/* Data Management */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide px-1">
              Data Management
            </h3>

            <button
              onClick={handleExportData}
              className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center">
                  <Download size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">
                    Export Data
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Download your progress backup
                  </p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-400" />
            </button>

            <button
              onClick={handleClearProgress}
              className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center">
                  <Trash2 size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">
                    Clear Progress
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Reset MCQs, flashcards data
                  </p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-400" />
            </button>

            {onResetOnboarding && (
              <button
                onClick={() => {
                  if (
                    confirm(
                      "This will reset your ENTIRE profile including subjects selection. Are you sure?",
                    )
                  ) {
                    onResetOnboarding();
                    onClose();
                  }
                }}
                className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center">
                    <RotateCcw size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      Reset Profile
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Start fresh, re-select subjects
                    </p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-slate-400" />
              </button>
            )}
          </div>

          {/* Info */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800">
            <p className="text-xs text-indigo-700 dark:text-indigo-300">
              <strong>💡 Tip:</strong> Completed exam subjects are automatically
              hidden from the Mega Board Crasher too!
            </p>
          </div>

          {/* App Info */}
          <div className="text-center py-2">
            <p className="text-xs text-slate-400">7K HSC Study App v2.0</p>
            <p className="text-xs text-slate-400">
              Made for HSC Maharashtra Board 2026
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SettingsPanel;
