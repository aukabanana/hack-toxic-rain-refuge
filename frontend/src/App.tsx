import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import { MissionDrawer, Mission } from './modules/missions/components/MissionDrawer.js';
const sampleMissions: Mission[] = [
  { id: '1', title: 'Food Search', description: 'Search for the food', riskLevel: 'High' },
  { id: '2', title: 'Refill Water', description: 'Search for the water place', riskLevel: 'Low' },
  { id: '3', title: 'Find new path', description: 'Explore new way', riskLevel: 'Low' },
  { id: '4', title: 'Explore new bunker', description: 'Search for the new bunker', riskLevel: 'High' },
  { id: '5', title: 'Meet people from another bunker', description: 'Find another survivor and exchange resources', riskLevel: 'Medium' },
];

function App() {
  const [isOpen, setIsOpen] = useState(true); // ตั้งเป็น true ไว้ให้เปิดค้างโชว์ตั้งแต่เริ่มเลยครับ
  const [role, setRole] = useState<'scout' | 'finder'>('finder'); // ใช้สลับดู 2 บทบาท

  return (
    <>
      <Outlet />

      <div className="fixed bottom-4 left-4 bg-slate-800 p-4 rounded-xl border border-slate-700 text-white z-50 shadow-2xl max-w-xs">
        <h1 className="text-xs font-bold mb-1">🛠️ ตัวทดสอบ Mission Panel</h1>
        <div className="flex gap-2 mb-2">
          <button onClick={() => setRole('finder')} className="px-2 py-1 bg-blue-600 text-[10px] rounded font-bold">โหมด Finder</button>
          <button onClick={() => setRole('scout')} className="px-2 py-1 bg-emerald-600 text-[10px] rounded font-bold">โหมด Scout</button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-[10px] text-slate-300 underline block">
          {isOpen ? '❌ ซ่อน Panel ขวา' : '👁️ เปิด Panel ขวา'}
        </button>
      </div>

      <MissionDrawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        role={role} 
        missions={sampleMissions} 
      />
    </>
  );
}

export default App;