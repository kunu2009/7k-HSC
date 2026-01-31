import React, { useState } from 'react';
import { X, Map, CheckCircle, XCircle, Trophy, RotateCcw, Eye, EyeOff, Target, Lightbulb } from 'lucide-react';

interface ArtsMapMasterProps {
  onClose: () => void;
}

const ArtsMapMaster: React.FC<ArtsMapMasterProps> = ({ onClose }) => {
  const [activeSubject, setActiveSubject] = useState<'geography' | 'history'>('geography');
  const [currentMap, setCurrentMap] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [completedMaps, setCompletedMaps] = useState<number[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const maps = {
    geography: [
      {
        title: 'Major Ports of India',
        description: 'Identify the major ports on India\'s coastline',
        locations: [
          { name: 'Kandla', state: 'Gujarat', type: 'Major Port', hint: 'Northernmost port on west coast' },
          { name: 'Mumbai', state: 'Maharashtra', type: 'Major Port', hint: 'India\'s largest port' },
          { name: 'JNPT', state: 'Maharashtra', type: 'Major Port', hint: 'Container port near Mumbai' },
          { name: 'Mormugao', state: 'Goa', type: 'Major Port', hint: 'Iron ore export hub' },
          { name: 'New Mangalore', state: 'Karnataka', type: 'Major Port', hint: 'POL imports' },
          { name: 'Kochi', state: 'Kerala', type: 'Major Port', hint: 'Natural harbour' },
          { name: 'Chennai', state: 'Tamil Nadu', type: 'Major Port', hint: 'East coast hub' },
          { name: 'Ennore', state: 'Tamil Nadu', type: 'Major Port', hint: 'Coal terminal' },
          { name: 'Tuticorin', state: 'Tamil Nadu', type: 'Major Port', hint: 'Southern tip' },
          { name: 'Vishakhapatnam', state: 'Andhra Pradesh', type: 'Major Port', hint: 'Deepest port' },
          { name: 'Paradip', state: 'Odisha', type: 'Major Port', hint: 'Iron ore export' },
          { name: 'Kolkata', state: 'West Bengal', type: 'Major Port', hint: 'Riverine port' },
          { name: 'Haldia', state: 'West Bengal', type: 'Major Port', hint: 'Auxiliary to Kolkata' },
        ]
      },
      {
        title: 'Major Airports of India',
        description: 'Locate the international airports of India',
        locations: [
          { name: 'Indira Gandhi International', state: 'Delhi', type: 'International', hint: 'Capital city' },
          { name: 'Chhatrapati Shivaji Maharaj', state: 'Mumbai', type: 'International', hint: 'Financial capital' },
          { name: 'Kempegowda International', state: 'Bengaluru', type: 'International', hint: 'IT hub' },
          { name: 'Rajiv Gandhi International', state: 'Hyderabad', type: 'International', hint: 'Telangana' },
          { name: 'Netaji Subhas Chandra Bose', state: 'Kolkata', type: 'International', hint: 'Eastern gateway' },
          { name: 'Chennai International', state: 'Chennai', type: 'International', hint: 'Southern metro' },
          { name: 'Cochin International', state: 'Kochi', type: 'International', hint: 'First PPP airport' },
          { name: 'Sardar Vallabhbhai Patel', state: 'Ahmedabad', type: 'International', hint: 'Gujarat' },
          { name: 'Goa International', state: 'Goa', type: 'International', hint: 'Tourism hub' },
          { name: 'Jaipur International', state: 'Jaipur', type: 'International', hint: 'Pink city' },
        ]
      },
      {
        title: 'Iron & Steel Plants',
        description: 'Identify major steel plants of India',
        locations: [
          { name: 'Rourkela Steel Plant', state: 'Odisha', type: 'Public Sector', hint: 'German collaboration' },
          { name: 'Bhilai Steel Plant', state: 'Chhattisgarh', type: 'Public Sector', hint: 'Russian collaboration' },
          { name: 'Durgapur Steel Plant', state: 'West Bengal', type: 'Public Sector', hint: 'British collaboration' },
          { name: 'Bokaro Steel Plant', state: 'Jharkhand', type: 'Public Sector', hint: 'Russian collaboration' },
          { name: 'TISCO Jamshedpur', state: 'Jharkhand', type: 'Private Sector', hint: 'Oldest in India (1907)' },
          { name: 'IISCO Burnpur', state: 'West Bengal', type: 'Public Sector', hint: 'Near Asansol' },
          { name: 'Salem Steel Plant', state: 'Tamil Nadu', type: 'Public Sector', hint: 'Stainless steel' },
          { name: 'Visakhapatnam Steel Plant', state: 'Andhra Pradesh', type: 'Public Sector', hint: 'Shore-based' },
        ]
      },
      {
        title: 'Oil Refineries of India',
        description: 'Locate major oil refineries',
        locations: [
          { name: 'Jamnagar Refinery', state: 'Gujarat', type: 'Private', hint: 'World\'s largest (Reliance)' },
          { name: 'Mumbai Refinery', state: 'Maharashtra', type: 'Public', hint: 'BPCL' },
          { name: 'Kochi Refinery', state: 'Kerala', type: 'Public', hint: 'BPCL' },
          { name: 'Chennai Refinery', state: 'Tamil Nadu', type: 'Public', hint: 'IOCL (Narimanam)' },
          { name: 'Vizag Refinery', state: 'Andhra Pradesh', type: 'Public', hint: 'HPCL' },
          { name: 'Haldia Refinery', state: 'West Bengal', type: 'Public', hint: 'IOCL' },
          { name: 'Barauni Refinery', state: 'Bihar', type: 'Public', hint: 'IOCL' },
          { name: 'Mathura Refinery', state: 'Uttar Pradesh', type: 'Public', hint: 'IOCL' },
          { name: 'Panipat Refinery', state: 'Haryana', type: 'Public', hint: 'IOCL' },
          { name: 'Numaligarh Refinery', state: 'Assam', type: 'Public', hint: 'NRL' },
        ]
      },
      {
        title: 'Nuclear Power Stations',
        description: 'Identify nuclear power plants of India',
        locations: [
          { name: 'Tarapur', state: 'Maharashtra', type: 'BWR/PHWR', hint: 'First in India (1969)' },
          { name: 'Rawatbhata (RAPP)', state: 'Rajasthan', type: 'PHWR', hint: 'Near Kota' },
          { name: 'Kalpakkam (MAPS)', state: 'Tamil Nadu', type: 'PHWR', hint: 'First indigenous' },
          { name: 'Narora', state: 'Uttar Pradesh', type: 'PHWR', hint: 'Near Delhi' },
          { name: 'Kakrapar', state: 'Gujarat', type: 'PHWR', hint: 'On Tapi river' },
          { name: 'Kaiga', state: 'Karnataka', type: 'PHWR', hint: 'Western Ghats' },
          { name: 'Kudankulam', state: 'Tamil Nadu', type: 'VVER', hint: 'Russian collaboration, largest' },
        ]
      },
    ],
    history: [
      {
        title: 'World War I - Key Locations',
        description: 'Identify important WWI battlefields and regions',
        locations: [
          { name: 'Sarajevo', state: 'Bosnia', type: 'Event', hint: 'Assassination of Franz Ferdinand' },
          { name: 'Verdun', state: 'France', type: 'Battle', hint: 'Longest battle (1916)' },
          { name: 'Somme', state: 'France', type: 'Battle', hint: 'First use of tanks' },
          { name: 'Gallipoli', state: 'Turkey', type: 'Campaign', hint: 'Dardanelles campaign' },
          { name: 'Versailles', state: 'France', type: 'Treaty', hint: 'Peace treaty signed' },
          { name: 'Lusitania', state: 'Atlantic', type: 'Event', hint: 'Ship sunk by Germany' },
        ]
      },
      {
        title: 'World War II - Key Locations',
        description: 'Identify important WWII events and places',
        locations: [
          { name: 'Pearl Harbor', state: 'USA', type: 'Event', hint: 'Japanese attack (1941)' },
          { name: 'Normandy', state: 'France', type: 'Operation', hint: 'D-Day landings' },
          { name: 'Stalingrad', state: 'Russia', type: 'Battle', hint: 'Turning point in East' },
          { name: 'Hiroshima', state: 'Japan', type: 'Event', hint: 'First atomic bomb' },
          { name: 'Nagasaki', state: 'Japan', type: 'Event', hint: 'Second atomic bomb' },
          { name: 'Berlin', state: 'Germany', type: 'Event', hint: 'Fall of Nazi Germany' },
          { name: 'Dunkirk', state: 'France', type: 'Evacuation', hint: 'Allied evacuation' },
          { name: 'Midway', state: 'Pacific', type: 'Battle', hint: 'Naval turning point' },
        ]
      },
      {
        title: 'Cold War Flashpoints',
        description: 'Key locations during the Cold War era',
        locations: [
          { name: 'Berlin Wall', state: 'Germany', type: 'Symbol', hint: 'Divided East & West' },
          { name: 'Cuba', state: 'Caribbean', type: 'Crisis', hint: 'Missile crisis (1962)' },
          { name: 'Korea', state: 'Asia', type: 'War', hint: 'Divided at 38th parallel' },
          { name: 'Vietnam', state: 'Asia', type: 'War', hint: 'US involvement 1955-75' },
          { name: 'Afghanistan', state: 'Asia', type: 'Invasion', hint: 'Soviet invasion (1979)' },
        ]
      },
      {
        title: 'Age of Exploration',
        description: 'Key locations from the Age of Discovery',
        locations: [
          { name: 'Lisbon', state: 'Portugal', type: 'Origin', hint: 'Starting point of voyages' },
          { name: 'Cape of Good Hope', state: 'South Africa', type: 'Route', hint: 'Discovered by Dias' },
          { name: 'Calicut', state: 'India', type: 'Destination', hint: 'Vasco da Gama landed' },
          { name: 'San Salvador', state: 'Bahamas', type: 'Discovery', hint: 'Columbus first landing' },
          { name: 'Strait of Magellan', state: 'South America', type: 'Route', hint: 'First circumnavigation' },
        ]
      },
    ]
  };

  const currentMaps = maps[activeSubject];
  const currentMapData = currentMaps[currentMap];

  const handleComplete = () => {
    if (!completedMaps.includes(currentMap)) {
      setCompletedMaps([...completedMaps, currentMap]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className={`bg-gradient-to-r ${activeSubject === 'geography' ? 'from-emerald-600 to-teal-600' : 'from-orange-600 to-amber-600'} text-white p-6`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Map size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Arts Map Master</h2>
                <p className="text-white/80">Practice map-based questions for board exams</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Subject Toggle */}
        <div className="flex border-b">
          {[
            { id: 'geography', name: 'Geography Maps', icon: '🌍', color: 'emerald' },
            { id: 'history', name: 'History Maps', icon: '📜', color: 'orange' }
          ].map(subject => (
            <button
              key={subject.id}
              onClick={() => {
                setActiveSubject(subject.id as any);
                setCurrentMap(0);
                setShowAnswers(false);
                setSelectedLocation(null);
              }}
              className={`flex-1 py-4 font-semibold flex items-center justify-center gap-2 transition ${
                activeSubject === subject.id
                  ? `text-${subject.color}-600 border-b-2 border-${subject.color}-600 bg-${subject.color}-50`
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl">{subject.icon}</span>
              {subject.name}
            </button>
          ))}
        </div>

        {/* Map Selection */}
        <div className="p-4 border-b bg-gray-50">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {currentMaps.map((map, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentMap(idx);
                  setShowAnswers(false);
                  setSelectedLocation(null);
                }}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition flex items-center gap-2 ${
                  currentMap === idx
                    ? `bg-${activeSubject === 'geography' ? 'emerald' : 'orange'}-500 text-white`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {completedMaps.includes(idx) && <CheckCircle size={16} className="text-green-400" />}
                {map.title}
              </button>
            ))}
          </div>
        </div>

        {/* Map Content */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{currentMapData.title}</h3>
              <p className="text-gray-600">{currentMapData.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAnswers(!showAnswers)}
                className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition ${
                  showAnswers ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {showAnswers ? <Eye size={18} /> : <EyeOff size={18} />}
                {showAnswers ? 'Hide Answers' : 'Show Answers'}
              </button>
            </div>
          </div>

          {/* Location Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {currentMapData.locations.map((location, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedLocation(selectedLocation === location.name ? null : location.name)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                  selectedLocation === location.name
                    ? `border-${activeSubject === 'geography' ? 'emerald' : 'orange'}-500 bg-${activeSubject === 'geography' ? 'emerald' : 'orange'}-50`
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeSubject === 'geography' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {showAnswers ? location.name : '???'}
                      </h4>
                      {showAnswers && (
                        <p className="text-sm text-gray-600">{location.state}</p>
                      )}
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeSubject === 'geography' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {location.type}
                  </span>
                </div>
                
                {selectedLocation === location.name && (
                  <div className="mt-3 pt-3 border-t">
                    <div className="flex items-start gap-2">
                      <Lightbulb size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Hint:</span> {location.hint}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className={`mt-6 p-4 rounded-xl ${
            activeSubject === 'geography' ? 'bg-emerald-50 border border-emerald-200' : 'bg-orange-50 border border-orange-200'
          }`}>
            <h4 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
              <Target size={18} />
              Exam Tips for Map Questions
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Always mark the exact location with a dot and write the name clearly</li>
              <li>• Practice on blank outline maps regularly</li>
              <li>• Remember state-wise grouping for easy recall</li>
              <li>• Map questions usually carry 8 marks in HSC</li>
              <li>• Use index numbers when multiple locations are asked</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Progress: {completedMaps.length}/{currentMaps.length} maps completed
            </span>
            <div className="flex gap-1">
              {currentMaps.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    completedMaps.includes(idx)
                      ? activeSubject === 'geography' ? 'bg-emerald-500' : 'bg-orange-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setShowAnswers(false);
                setSelectedLocation(null);
                setCompletedMaps([]);
              }}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition flex items-center gap-2"
            >
              <RotateCcw size={18} />
              Reset
            </button>
            <button
              onClick={handleComplete}
              className={`px-4 py-2 rounded-lg font-medium text-white transition flex items-center gap-2 ${
                activeSubject === 'geography' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              <CheckCircle size={18} />
              Mark Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtsMapMaster;
