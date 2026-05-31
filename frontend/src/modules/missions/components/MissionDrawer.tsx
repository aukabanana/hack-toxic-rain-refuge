import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Mission {
  id: string;
  title: string;
  description: string;
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
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

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
    setMissions(prev => prev.map(m => m.id === id ? { ...m, isCompleted: !currentStatus } : m));
    await fetch(`http://localhost:5000/api/missions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: !currentStatus }),
    });
  };

  const updateMissionRisk = async (id: string, newRisk: Mission['riskLevel']) => {
    setMissions(prev => prev.map(m => m.id === id ? { ...m, riskLevel: newRisk } : m));
    setOpenDropdownId(null);
    await fetch(`http://localhost:5000/api/missions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ riskLevel: newRisk }),
    });
  };

  const handleDeleteMission = async (id: string) => {
    setMissions(prev => prev.filter(m => m.id !== id));
    setDeleteTarget(null);
    await fetch(`http://localhost:5000/api/missions/${id}`, { method: 'DELETE' });
  };

  const getRiskBadgeStyle = (risk: Mission['riskLevel']) => {
    switch (risk) {
      case 'CRITICAL': return 'bg-red-200 text-red-800';
      case 'HIGH': return 'bg-red-100 text-red-600';
      case 'MEDIUM': return 'bg-amber-100 text-amber-600';
      default: return 'bg-green-100 text-green-600';
    }
  };

  return (
    <>
      <div className={`fixed inset-y-0 right-0 top-16 z-40 w-full md:w-1/2 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b flex items-center justify-between bg-white">
          <button onClick={onClose} className="text-blue-900 font-bold text-2xl">&gt;</button>
          <h2 className="text-xl font-bold text-blue-900">Missions</h2>
          <div className="w-8" />
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {missions.length > 0 ? (
            missions.map((mission) => (
              <div key={mission.id} className="flex items-center gap-3 bg-white p-4 rounded-xl border shadow-sm">
                {role === 'finder' && (
                  <input 
                    type="checkbox" 
                    checked={mission.isCompleted} 
                    onChange={() => toggleMissionStatus(mission.id, mission.isCompleted)}
                    className="w-6 h-6 rounded border-gray-300 accent-blue-900 cursor-pointer"
                  />
                )}

                <div className="flex-1 overflow-hidden">
                  <h4 className={`font-bold text-sm truncate ${mission.isCompleted ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                    {mission.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 truncate">{mission.description}</p>
                </div>

                {role === 'scout' ? (
                  <div className="relative">
                    <button 
                      onClick={() => setOpenDropdownId(openDropdownId === mission.id ? null : mission.id)}
                      className={`text-[10px] px-3 py-1 rounded-full font-bold cursor-pointer outline-none ${getRiskBadgeStyle(mission.riskLevel)}`}
                    >
                      {mission.riskLevel} ▾
                    </button>
                    <AnimatePresence>
                      {openDropdownId === mission.id && (
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute right-0 mt-2 w-28 bg-white border border-gray-100 rounded-2xl shadow-xl z-[100] overflow-hidden"
                        >
                          {(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL', 'UNKNOWN'] as const).map((level) => (
                            <button
                              key={level}
                              onClick={() => updateMissionRisk(mission.id, level)}
                              className="block w-full text-left px-4 py-2 text-[10px] hover:bg-gray-50 text-gray-700 transition-colors"
                            >
                              {level}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className={`text-[10px] px-3 py-1 rounded-full font-bold ${getRiskBadgeStyle(mission.riskLevel)}`}>
                    {mission.riskLevel}
                  </div>
                )}

                {role === 'scout' && (
                  <button onClick={() => setDeleteTarget(mission.id)} className="p-2 bg-red-50 text-red-500 rounded-lg border border-red-200">🗑️</button>
                )}
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2 select-none">
              <p className="text-xl font-black tracking-wider uppercase opacity-50">No Missions</p>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-y-0 right-0 top-16 left-0 z-30 bg-black/20" onClick={onClose} />
      )}

      {deleteTarget && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setDeleteTarget(null)} />
          <div className="bg-white p-6 rounded-xl shadow-2xl w-80 text-center relative z-10">
            <h3 className="text-blue-900 font-bold text-lg mb-2">Delete Mission</h3>
            <p className="text-gray-600 text-sm mb-6">Are you sure you want to delete this mission?</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteTarget(null)} className="flex-1 py-2 bg-white text-gray-700 border border-gray-300 font-bold rounded">Cancel</button>
              <button onClick={() => handleDeleteMission(deleteTarget)} className="flex-1 py-2 bg-blue-700 text-white font-bold rounded">Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};