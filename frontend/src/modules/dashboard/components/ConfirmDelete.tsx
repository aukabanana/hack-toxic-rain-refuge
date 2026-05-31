import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  itemName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#0a1963]/40"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 flex flex-col items-center animate-in fade-in zoom-in duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="w-30 h-30 bg-red-100 text-(--color-red) rounded-full flex items-center justify-center mb-6">
          <AlertTriangle size={64} />
        </div>

        <h3 className="text-xl font-bold text-[#0a1963] mb-2 text-center">
          Confirm Deletion
        </h3>
        <p className="text-gray-500 text-center mb-8">
          Are you sure you want to delete <span className="font-bold text-(--color-red)">"{itemName}"</span>? This action cannot be undone.
        </p>

        <div className="flex flex-col w-full gap-3">
          <button
            onClick={onConfirm}
            className="w-full py-3 bg-red-950 hover:bg-red-700 text-white rounded-xl font-bold transition-colors shadow-lg cursor-pointer"
          >
            Yes, Delete it
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl font-bold transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;