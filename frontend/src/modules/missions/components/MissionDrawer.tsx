import React from 'react';

export interface Mission {
  id: string;
  title: string;
  description: string;
  riskLevel: 'High' | 'Medium' | 'Low'; 
}

interface MissionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  role: 'scout' | 'finder'; 
  missions: Mission[];
}

export const MissionDrawer: React.FC<MissionDrawerProps> = ({ isOpen, onClose, role, missions }) => {
  if (!isOpen) return null;

  const getRiskBadgeStyle = (risk: 'High' | 'Medium' | 'Low') => {
    switch (risk) {
      case 'High': return 'bg-red-100 text-red-600 font-medium border border-red-200'; 
      case 'Medium': return 'bg-amber-100 text-amber-600 font-medium border border-amber-200'; 
      case 'Low': return 'bg-green-100 text-green-600 font-medium border border-green-200'; 
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    
    <div className="fixed inset-y-0 right-0 w-full md:w-1/2 bg-white shadow-2xl border-l border-gray-200 z-50 flex flex-col transition-transform duration-300">
      
      <div className="p-4 flex items-center border-b border-gray-100 bg-white">
        <button onClick={onClose} className="text-blue-900 hover:text-blue-700 font-bold text-2xl p-2 focus:outline-none">
          &gt;
        </button>
        <div className="flex-1 text-center mr-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 tracking-wide">Missions</h2>
          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md uppercase font-bold">
            Role: {role === 'scout' ? '⚡ Scout' : '📦 Resource Finder'}
          </span>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4 bg-gray-50/50">
        {missions.map((mission) => (
          <div key={mission.id} className="flex items-center gap-2 md:gap-4">
            
            {role === 'finder' && (
              <div className="flex-shrink-0 pl-1">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-gray-300 text-blue-900 focus:ring-blue-900 cursor-pointer"
                />
              </div>
            )}

            <div className="flex-1 bg-white p-4 md:p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between gap-2 md:gap-4 min-w-0">
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-800 text-sm md:text-base truncate">{mission.title}</h4>
                <p className="text-[11px] md:text-xs text-slate-500 mt-1 break-words line-clamp-2 md:line-clamp-none">
                  {mission.description}
                </p>
              </div>
              <span className={`text-[10px] md:text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full flex-shrink-0 ${getRiskBadgeStyle(mission.riskLevel)}`}>
                {mission.riskLevel}
              </span>
            </div>

            {role === 'scout' && (
              <div className="flex flex-col gap-1.5 md:gap-2 flex-shrink-0">
                <button 
                  onClick={() => console.log(`Edit mission: ${mission.id}`)}
                  className="p-2 md:p-2.5 bg-blue-50 text-blue-900 hover:bg-blue-100 rounded-lg border border-blue-200 transition-all flex items-center justify-center shadow-sm"
                  title="Edit Mission"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                </button>

                <button 
                  onClick={() => console.log(`Delete mission: ${mission.id}`)}
                  className="p-2 md:p-2.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg border border-red-200 transition-all flex items-center justify-center shadow-sm"
                  title="Delete Mission"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
};