// import React from 'react';
// import type { LucideIcon } from 'lucide-react';

// interface InputGroupProps {
//   label: string;
//   type?: 'text' | 'password' | 'tel' | 'email';
//   placeholder: string;
//   icon?: LucideIcon;
// }

// const InputGroup: React.FC<InputGroupProps> = ({ 
//   label, 
//   type = 'text', 
//   placeholder, 
//   icon: Icon 
// }) => {
//   return (
//     <div className="flex flex-col gap-1 w-full">
//       <label className="text-sm font-semibold text-gray-800">
//         {label}
//       </label>
//       <div className="relative flex items-center">
//         {Icon && (
//           <div className="absolute left-3 text-slate-700 pointer-events-none">
//             <Icon size={18} />
//           </div>
//         )}
//         <input
//           type={type}
//           placeholder={placeholder}
//           className={`w-full py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all ${
//             Icon ? 'pl-10 pr-4' : 'px-4'
//           }`}
//         />
//       </div>
//     </div>
//   );
// };

// export default InputGroup;


import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface InputGroupProps {
  label: string;
  type?: 'text' | 'password' | 'tel' | 'email';
  placeholder: string;
  icon?: LucideIcon;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, type = 'text', placeholder, icon: Icon, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-semibold text-gray-800">{label}</label>
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3 text-slate-700 pointer-events-none">
            <Icon size={18} />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all ${Icon ? 'pl-10 pr-4' : 'px-4'}`}
        />
      </div>
    </div>
  );
};

export default InputGroup;