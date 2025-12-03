import React, { useState, useEffect } from 'react';
import { FileText, X, Plus, Save, Trash2, Download, Search, Tag, Clock, Edit2, Eye, ChevronDown, ChevronUp, Star, FolderOpen } from 'lucide-react';
import { Subject } from '../types';

interface StudyNotesProps {
  subjects: Subject[];
  onClose: () => void;
}

interface Note {
  id: string;
  title: string;
  content: string;
  subject?: string;
  chapter?: string;
  tags: string[];
  createdAt: number;
  updatedAt: number;
  starred: boolean;
  color?: string;
}

const COLORS = [
  'bg-white dark:bg-gray-800',
  'bg-yellow-50 dark:bg-yellow-900/30',
  'bg-green-50 dark:bg-green-900/30',
  'bg-blue-50 dark:bg-blue-900/30',
  'bg-pink-50 dark:bg-pink-900/30',
  'bg-purple-50 dark:bg-purple-900/30',
];

const StudyNotes: React.FC<StudyNotesProps> = ({ subjects, onClose }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [filterStarred, setFilterStarred] = useState(false);
  const [showSubjectPicker, setShowSubjectPicker] = useState(false);
  
  // Editor state
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editTags, setEditTags] = useState<string[]>([]);
  const [editSubject, setEditSubject] = useState<string>('');
  const [editChapter, setEditChapter] = useState<string>('');
  const [editColor, setEditColor] = useState<string>('bg-white dark:bg-gray-800');
  const [newTag, setNewTag] = useState('');

  // Load notes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('7k-study-notes');
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('7k-study-notes', JSON.stringify(notes));
  }, [notes]);

  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'Untitled Note',
      content: '',
      tags: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
      starred: false,
      color: 'bg-white dark:bg-gray-800'
    };
    setNotes(prev => [newNote, ...prev]);
    setSelectedNote(newNote);
    setEditTitle(newNote.title);
    setEditContent(newNote.content);
    setEditTags([]);
    setEditSubject('');
    setEditChapter('');
    setEditColor(newNote.color || COLORS[0]);
    setIsEditing(true);
  };

  const saveNote = () => {
    if (!selectedNote) return;
    
    const updatedNote: Note = {
      ...selectedNote,
      title: editTitle || 'Untitled Note',
      content: editContent,
      tags: editTags,
      subject: editSubject || undefined,
      chapter: editChapter || undefined,
      color: editColor,
      updatedAt: Date.now()
    };
    
    setNotes(prev => prev.map(n => n.id === selectedNote.id ? updatedNote : n));
    setSelectedNote(updatedNote);
    setIsEditing(false);
  };

  const deleteNote = (noteId: string) => {
    if (window.confirm('Delete this note?')) {
      setNotes(prev => prev.filter(n => n.id !== noteId));
      if (selectedNote?.id === noteId) {
        setSelectedNote(null);
        setIsEditing(false);
      }
    }
  };

  const toggleStar = (noteId: string) => {
    setNotes(prev => prev.map(n => 
      n.id === noteId ? { ...n, starred: !n.starred } : n
    ));
  };

  const addTag = () => {
    if (newTag.trim() && !editTags.includes(newTag.trim())) {
      setEditTags([...editTags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setEditTags(editTags.filter(t => t !== tag));
  };

  const exportNote = (note: Note) => {
    const content = `# ${note.title}\n\n${note.content}\n\n---\n${note.subject ? `Subject: ${note.subject}\n` : ''}${note.chapter ? `Chapter: ${note.chapter}\n` : ''}Tags: ${note.tags.join(', ') || 'None'}\nCreated: ${new Date(note.createdAt).toLocaleString()}\nUpdated: ${new Date(note.updatedAt).toLocaleString()}`;
    
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${note.title.replace(/[^a-z0-9]/gi, '_')}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportAllNotes = () => {
    const content = notes.map(note => 
      `# ${note.title}\n\n${note.content}\n\n---\n`
    ).join('\n\n');
    
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'all_notes.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filter notes
  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSubject = filterSubject === 'all' || note.subject === filterSubject;
    const matchesStarred = !filterStarred || note.starred;
    return matchesSearch && matchesSubject && matchesStarred;
  });

  const getSubjectChapters = () => {
    const subject = subjects.find(s => s.name === editSubject);
    return subject?.chapters || [];
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-6xl h-[90vh] flex overflow-hidden">
        {/* Sidebar - Notes List */}
        <div className="w-80 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5" /> Study Notes
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <X className="w-5 h-5 dark:text-white" />
              </button>
            </div>
            
            {/* Search */}
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
              />
            </div>
            
            {/* Filters */}
            <div className="flex gap-2">
              <select
                value={filterSubject}
                onChange={e => setFilterSubject(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
              >
                <option value="all">All Subjects</option>
                {subjects.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
              <button
                onClick={() => setFilterStarred(!filterStarred)}
                className={`p-2 rounded-lg border ${filterStarred ? 'bg-yellow-100 border-yellow-300 dark:bg-yellow-900/30' : 'border-gray-200 dark:border-gray-700'}`}
              >
                <Star className={`w-4 h-4 ${filterStarred ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} />
              </button>
            </div>
          </div>
          
          {/* New Note Button */}
          <button
            onClick={createNewNote}
            className="m-4 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <Plus className="w-5 h-5" /> New Note
          </button>
          
          {/* Notes List */}
          <div className="flex-1 overflow-y-auto p-2">
            {filteredNotes.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>No notes yet</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredNotes.map(note => (
                  <button
                    key={note.id}
                    onClick={() => {
                      setSelectedNote(note);
                      setEditTitle(note.title);
                      setEditContent(note.content);
                      setEditTags(note.tags);
                      setEditSubject(note.subject || '');
                      setEditChapter(note.chapter || '');
                      setEditColor(note.color || COLORS[0]);
                      setIsEditing(false);
                    }}
                    className={`w-full text-left p-3 rounded-xl transition ${note.color || COLORS[0]} ${
                      selectedNote?.id === note.id 
                        ? 'ring-2 ring-purple-500' 
                        : 'hover:ring-1 hover:ring-gray-300 dark:hover:ring-gray-600'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium dark:text-white line-clamp-1">{note.title}</h3>
                      {note.starred && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                      {note.content || 'No content'}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {formatDate(note.updatedAt)}
                      {note.subject && (
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                          {note.subject}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Export All */}
          {notes.length > 0 && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={exportAllNotes}
                className="w-full px-4 py-2 text-sm text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Export All Notes
              </button>
            </div>
          )}
        </div>
        
        {/* Main Content - Note Editor/Viewer */}
        <div className="flex-1 flex flex-col">
          {selectedNote ? (
            <>
              {/* Editor Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isEditing ? (
                    <>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveNote}
                        className="px-4 py-1.5 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600 flex items-center gap-1"
                      >
                        <Save className="w-4 h-4" /> Save
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-1.5 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600 flex items-center gap-1"
                      >
                        <Edit2 className="w-4 h-4" /> Edit
                      </button>
                    </>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleStar(selectedNote.id)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <Star className={`w-5 h-5 ${selectedNote.starred ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} />
                  </button>
                  <button
                    onClick={() => exportNote(selectedNote)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <Download className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={() => deleteNote(selectedNote.id)}
                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-500"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Editor Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {isEditing ? (
                  <div className="max-w-3xl mx-auto space-y-4">
                    {/* Title */}
                    <input
                      type="text"
                      value={editTitle}
                      onChange={e => setEditTitle(e.target.value)}
                      placeholder="Note title..."
                      className="w-full text-2xl font-bold bg-transparent border-none outline-none dark:text-white"
                    />
                    
                    {/* Subject & Chapter */}
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">Subject</label>
                        <select
                          value={editSubject}
                          onChange={e => {
                            setEditSubject(e.target.value);
                            setEditChapter('');
                          }}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        >
                          <option value="">No subject</option>
                          {subjects.map(s => (
                            <option key={s.id} value={s.name}>{s.name}</option>
                          ))}
                        </select>
                      </div>
                      {editSubject && (
                        <div className="flex-1">
                          <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">Chapter</label>
                          <select
                            value={editChapter}
                            onChange={e => setEditChapter(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                          >
                            <option value="">No chapter</option>
                            {getSubjectChapters().map(c => (
                              <option key={c.id} value={c.title}>{c.title}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                    
                    {/* Color Picker */}
                    <div>
                      <label className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">Note Color</label>
                      <div className="flex gap-2">
                        {COLORS.map(color => (
                          <button
                            key={color}
                            onClick={() => setEditColor(color)}
                            className={`w-8 h-8 rounded-lg ${color} border-2 ${editColor === color ? 'border-purple-500' : 'border-gray-200 dark:border-gray-700'}`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div>
                      <label className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">Tags</label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {editTags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm flex items-center gap-1">
                            <Tag className="w-3 h-3" /> {tag}
                            <button onClick={() => removeTag(tag)} className="ml-1 hover:text-red-500">×</button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newTag}
                          onChange={e => setNewTag(e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addTag())}
                          placeholder="Add tag..."
                          className="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
                        />
                        <button
                          onClick={addTag}
                          className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg text-sm hover:bg-purple-200"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <label className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">Content (supports basic markdown)</label>
                      <textarea
                        value={editContent}
                        onChange={e => setEditContent(e.target.value)}
                        placeholder="Write your notes here...

You can use basic formatting:
- **bold** for emphasis
- *italic* for terms
- # Heading
- - Bullet points
- 1. Numbered lists"
                        className="w-full h-96 p-4 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white resize-none font-mono text-sm"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold dark:text-white mb-4">{selectedNote.title}</h1>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedNote.subject && (
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm flex items-center gap-1">
                          <FolderOpen className="w-3 h-3" /> {selectedNote.subject}
                        </span>
                      )}
                      {selectedNote.chapter && (
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">
                          {selectedNote.chapter}
                        </span>
                      )}
                      {selectedNote.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="prose dark:prose-invert max-w-none">
                      {selectedNote.content.split('\n').map((line, idx) => {
                        // Basic markdown rendering
                        if (line.startsWith('# ')) {
                          return <h1 key={idx} className="text-2xl font-bold mt-6 mb-2">{line.slice(2)}</h1>;
                        }
                        if (line.startsWith('## ')) {
                          return <h2 key={idx} className="text-xl font-bold mt-4 mb-2">{line.slice(3)}</h2>;
                        }
                        if (line.startsWith('### ')) {
                          return <h3 key={idx} className="text-lg font-bold mt-3 mb-1">{line.slice(4)}</h3>;
                        }
                        if (line.startsWith('- ')) {
                          return <li key={idx} className="ml-4">{line.slice(2)}</li>;
                        }
                        if (line.match(/^\d+\. /)) {
                          return <li key={idx} className="ml-4 list-decimal">{line.replace(/^\d+\. /, '')}</li>;
                        }
                        if (line === '') {
                          return <br key={idx} />;
                        }
                        // Bold and italic
                        const formatted = line
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>');
                        return <p key={idx} className="my-1" dangerouslySetInnerHTML={{ __html: formatted }} />;
                      })}
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500">
                      <p>Created: {new Date(selectedNote.createdAt).toLocaleString()}</p>
                      <p>Last updated: {new Date(selectedNote.updatedAt).toLocaleString()}</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <div className="text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium">Select a note or create a new one</h3>
                <p className="text-sm mt-2">Your study notes will be saved locally</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyNotes;
