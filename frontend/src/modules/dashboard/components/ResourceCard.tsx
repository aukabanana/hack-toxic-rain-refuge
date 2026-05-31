// import React from 'react';
// import { Trash2, Minus, Plus } from 'lucide-react';
// import type { ResourceCardProps } from '../types/DashboardType';

// const ResourceCard: React.FC<ResourceCardProps> = ({
//   id,
//   name,
//   quantity,
//   icon: Icon,
//   onIncrease,
//   onDecrease,
//   onDelete,
// }) => {
//   return (

//     <div className="relative bg-white rounded-[24px] p-7 shadow-sm border border-gray-100 flex flex-col items-center justify-between min-h-[300px] max-w-[260px] w-full mx-auto transition-all hover:shadow-lg">
      

//       <button
//         type="button"
//         onClick={() => onDelete(id)}
//         className="absolute top-5 right-5 text-red-400 hover:text-red-600 transition-colors cursor-pointer p-1 rounded-lg hover:bg-red-55"
//       >
//         <Trash2 size={22} />
//       </button>


//       <div className="w-24 h-24 bg-[#0a1963] text-white rounded-full flex items-center justify-center mb-4 shadow-inner">
//         <Icon size={44} />
//       </div>


//       <h3 className="text-xl font-black text-[#0a1963] mb-5 text-center px-2 line-clamp-2">
//         {name}
//       </h3>


//       <div className="flex items-center gap-5 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-100 w-full justify-between">

//         <button
//           type="button"
//           onClick={() => onDecrease(id)}
//           className="w-8 h-8 rounded-full bg-[#0a1963] text-white flex items-center justify-center hover:bg-[#0f248a] transition-colors cursor-pointer text-lg"
//         >
//           <Minus size={16} strokeWidth={2.5} />
//         </button>
        

//         <span className="font-black text-[#0a1963] text-xl min-w-7 text-center select-all">
//           {quantity}
//         </span>


//         <button
//           type="button"
//           onClick={() => onIncrease(id)}
//           className="w-8 h-8 rounded-full bg-[#0a1963] text-white flex items-center justify-center hover:bg-[#0f248a] transition-colors cursor-pointer text-lg"
//         >
//           <Plus size={16} strokeWidth={2.5} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResourceCard;


import React from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import type { ResourceCardProps } from '../types/DashboardType';

// 💡 1. ขยาย Interface Props เพิ่มเติม (หรือจะไปเพิ่มในไฟล์ DashboardType ก็ได้ครับ)
interface ExtendedResourceCardProps extends ResourceCardProps {
  isTracker: boolean; // 👈 รับค่าสถานะสิทธิ์มาจากหน้า Dashboard
}

const ResourceCard: React.FC<ExtendedResourceCardProps> = ({
  id,
  name,
  quantity,
  icon: Icon,
  onIncrease,
  onDecrease,
  onDelete,
  isTracker,
}) => {
  return (
    <div className="relative bg-white rounded-[24px] p-7 shadow-sm border border-gray-100 flex flex-col items-center justify-between min-h-[300px] max-w-[260px] w-full mx-auto transition-all hover:shadow-lg">
      
      {isTracker && (
        <button
          type="button"
          onClick={() => onDelete(id)}
          className="absolute top-5 right-5 text-red-400 hover:text-red-600 transition-colors cursor-pointer p-1 rounded-lg hover:bg-red-55"
        >
          <Trash2 size={22} />
        </button>
      )}

      <div className="w-24 h-24 bg-[#0a1963] text-white rounded-full flex items-center justify-center mb-4 shadow-inner">
        <Icon size={44} />
      </div>

      <h3 className="text-xl font-black text-[#0a1963] mb-5 text-center px-2 line-clamp-2">
        {name}
      </h3>

      <div className={`flex items-center gap-5 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-100 w-full ${
        isTracker ? 'justify-between' : 'justify-center'
      }`}>

        {isTracker && (
          <button
            type="button"
            onClick={() => onDecrease(id)}
            className="w-8 h-8 rounded-full bg-[#0a1963] text-white flex items-center justify-center hover:bg-[#0f248a] transition-colors cursor-pointer text-lg"
          >
            <Minus size={16} strokeWidth={2.5} />
          </button>
        )}
        
        <span className="font-black text-[#0a1963] text-xl min-w-7 text-center select-all">
          {quantity}
        </span>

        {isTracker && (
          <button
            type="button"
            onClick={() => onIncrease(id)}
            className="w-8 h-8 rounded-full bg-[#0a1963] text-white flex items-center justify-center hover:bg-[#0f248a] transition-colors cursor-pointer text-lg"
          >
            <Plus size={16} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;