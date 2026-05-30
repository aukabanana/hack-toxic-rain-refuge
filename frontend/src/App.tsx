import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import { MissionDrawer } from './modules/missions/components/MissionDrawer.js';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [role, setRole] = useState<'scout' | 'finder'>('finder');

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
        communityId="mock-community-id-123"
      />
    </>
  );
}

export default App;