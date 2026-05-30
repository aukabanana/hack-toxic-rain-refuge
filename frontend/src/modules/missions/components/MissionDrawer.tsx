import React, { useState, useEffect } from 'react';

export interface Mission {
  id: string;
  title: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | 'UNKNOWN';
  isCompleted: boolean;
}

interface MissionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  role: 'scout' | 'finder';
  communityId: string;
}

export const MissionDrawer: React.FC<MissionDrawerProps> = ({ isOpen, onClose, role }) => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const fetchMissions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/missions');
      if (response.ok) {
        const data = await response.json();
        setMissions(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isOpen) fetchMissions();
  }, [isOpen]);

  const toggleMissionStatus = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`http://localhost:5000/api/missions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isCompleted: !currentStatus }),
      });
      if (response.ok) fetchMissions();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteMission = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/missions/${id}`, { method: 'DELETE' });
      if (response.ok) {
        fetchMissions();
        setDeleteTarget(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getRiskBadgeStyle = (risk: Mission['riskLevel']) => {
    switch (risk) {
      case 'CRITICAL': return 'bg-red-200 text-red-800';
      case 'HIGH': return 'bg-red-100 text-red-600';
      case 'MEDIUM': return 'bg-amber-100 text-amber-600';
      case 'UNKNOWN': return 'bg-gray-100 text-gray-600';
      default: return 'bg-green-100 text-green-600';
    }
  };

  return (
    <>
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/20" onClick={onClose} />
        
        <div className={`absolute inset-y-0 right-0 w-full md:w-1/2 bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4 border-b flex items-center justify-between">
            <button onClick={onClose} className="text-blue-900 font-bold text-2xl">&gt;</button>
            <h2 className="text-xl font-bold text-blue-900">Missions</h2>
            <div />
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {missions.map((mission) => (
              <div key={mission.id} className="flex items-center gap-2">
                <div className={`flex-1 bg-white p-4 rounded-xl border shadow-sm flex items-center justify-between gap-2 ${mission.isCompleted ? 'opacity-60 bg-gray-50' : ''}`}>
                  <div className="flex flex-col min-w-0">
                    <h4 className={`font-bold text-sm truncate ${mission.isCompleted ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {mission.title}
                    </h4>
                    {mission.isCompleted && <span className="text-[9px] font-bold text-green-600 uppercase">✅ COMPLETED</span>}
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 font-bold ${getRiskBadgeStyle(mission.riskLevel)}`}>
                    {mission.riskLevel}
                  </span>
                </div>

                {role === 'scout' && (
                  <div className="flex flex-row gap-2 flex-shrink-0">
                    <button 
                      onClick={() => toggleMissionStatus(mission.id, mission.isCompleted)}
                      className={`p-2 rounded-lg border transition-colors ${
                        mission.isCompleted 
                          ? 'bg-green-100 border-green-200 text-green-700' 
                          : 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100'
                      }`}
                    >
                      {mission.isCompleted ? '✅' : '🖋️'}
                    </button>
                    <button 
                      onClick={() => setDeleteTarget(mission.id)} 
                      className="p-2 bg-red-50 text-red-500 rounded-lg border border-red-200 hover:bg-red-100 transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {deleteTarget && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setDeleteTarget(null)} />
          <div className="bg-white p-6 rounded-xl shadow-2xl w-80 text-center border border-blue-100 relative z-10">
            <h3 className="text-blue-900 font-bold text-lg mb-2">Delete Mission</h3>
            <p className="text-gray-600 text-sm mb-6">Are you sure you want to delete this mission?</p>
            <div className="flex gap-3">
              <button 
                onClick={() => setDeleteTarget(null)}
                className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => handleDeleteMission(deleteTarget)}
                className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};