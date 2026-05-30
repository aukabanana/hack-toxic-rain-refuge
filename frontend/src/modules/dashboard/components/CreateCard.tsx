import React, { useState } from 'react';
import { X, PackagePlus } from 'lucide-react';
import { ResourceType } from '../types/DashboardType';

interface CreateResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, type: ResourceType) => void;
}

const CreateResourceModal: React.FC<CreateResourceModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<ResourceType>(ResourceType.FOOD);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreate(name, type);
      setName(''); 
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0a1963]/40" onClick={onClose} />

      {/* Modal Box */}
      <form 
        onSubmit={handleSubmit}
        className="relative bg-white rounded-[2rem] shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200"
      >
        <button 
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-[#0a1963] text-white rounded-2xl flex items-center justify-center">
            <PackagePlus size={24} />
          </div>
          <h2 className="text-2xl font-black text-[#0a1963]">New Resource</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#0a1963] mb-2 ml-1">
              Resource Name
            </label>
            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Canned Soup, First Aid Kit"
              className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-[#0a1963] focus:bg-white rounded-2xl outline-none transition-all font-medium text-[#0a1963]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#0a1963] mb-2 ml-1">
              Category Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as ResourceType)}
              className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-[#0a1963] focus:bg-white rounded-2xl outline-none transition-all font-bold text-[#0a1963] appearance-none"
            >
              {Object.values(ResourceType).map((val) => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-10">
          <button
            type="submit"
            className="w-full py-4 bg-[#0a1963] hover:bg-[#152785] text-white rounded-2xl font-black text-lg transition-all shadow-lg shadow-blue-100 cursor-pointer"
          >
            Create Resource
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-2xl font-bold transition-all cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateResourceModal;