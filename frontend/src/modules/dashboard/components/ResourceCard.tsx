import React from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import type { ResourceCardProps } from '../types/DashboardType';

const ResourceCard: React.FC<ResourceCardProps> = ({
  id,
  name,
  quantity,
  icon: Icon,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-between min-h-55 max-w-55 w-full mx-auto transition-all hover:shadow-md">
      
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors cursor-pointer"
      >
        <Trash2 size={18} />
      </button>

      <div className="w-20 h-20 bg-[#0a1963] text-white rounded-full flex items-center justify-center mb-3 shadow-inner">
        <Icon size={36} />
      </div>

      <h3 className="text-lg font-bold text-[#0a1963] mb-4 text-center">
        {name}
      </h3>

      {/* ส่วนควบคุมจำนวน บวกลบ */}
      <div className="flex items-center gap-4 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
        <button
          type="button"
          onClick={() => onDecrease(id)}
          className="w-6 h-6 rounded-full bg-[#0a1963] text-white flex items-center justify-center hover:bg-[#0f248a] transition-colors cursor-pointer"
        >
          <Minus size={14} />
        </button>
        
        <span className="font-bold text-[#0a1963] text-lg min-w-5 text-center">
          {quantity}
        </span>

        <button
          type="button"
          onClick={() => onIncrease(id)}
          className="w-6 h-6 rounded-full bg-[#0a1963] text-white flex items-center justify-center hover:bg-[#0f248a] transition-colors cursor-pointer"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;