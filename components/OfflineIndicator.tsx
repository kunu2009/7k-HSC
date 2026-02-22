import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

const OfflineIndicator: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showBackOnline, setShowBackOnline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setShowBackOnline(true);
      setTimeout(() => setShowBackOnline(false), 3000); // Hide "Back Online" after 3s
    };

    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOffline) {
    return (
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[60] bg-slate-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-slate-700 animate-pulse">
        <WifiOff size={16} className="text-red-400" />
        <span className="text-xs font-bold">Offline Mode</span>
      </div>
    );
  }

  if (showBackOnline) {
    return (
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[60] bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
        <Wifi size={16} />
        <span className="text-xs font-bold">Back Online</span>
      </div>
    );
  }

  return null;
};

export default OfflineIndicator;
