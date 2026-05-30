import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Plus, Beef, Droplets, Pill, Hammer,
    Fuel, HardHat, HelpCircle, LucideIcon
} from 'lucide-react';

import Navbar from '../../../components/Navbar';
import ResourceCard from '../components/ResourceCard';
import ConfirmDeleteModal from '../components/ConfirmDelete';
import CreateResourceModal from '../components/CreateCard';
import { ResourceItem, ResourceType } from '../types/DashboardType';

const iconMapping: Record<ResourceType, LucideIcon> = {
    [ResourceType.FOOD]: Beef,
    [ResourceType.WATER]: Droplets,
    [ResourceType.MEDICINE]: Pill,
    [ResourceType.TOOL]: Hammer,
    [ResourceType.FUEL]: Fuel,
    [ResourceType.EQUIPMENT]: HardHat,
    [ResourceType.OTHER]: HelpCircle,
};

export const DashboardPage: React.FC = () => {
    const [resources, setResources] = useState<ResourceItem[]>(() => {
        try {
            const saved = localStorage.getItem('resources');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('resources', JSON.stringify(resources));
    }, [resources]);

    const navigate = useNavigate();


    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ResourceItem | null>(null);

    const daysToSurvive = 0;

    const handleCreateResource = (name: string, type: ResourceType) => {
        const newItem: ResourceItem = {
            id: Date.now().toString(),
            name,
            type,
            quantity: 0,
        };
        setResources(prev => [...prev, newItem]);
    };

    const handleIncrease = (id: string) => {
        setResources(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const handleDecrease = (id: string) => {
        setResources(prev => prev.map(item => item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item));
    };

    const handleDeleteRequest = (id: string) => {
        const item = resources.find(r => r.id === id);
        if (item) {
            setSelectedItem(item);
            setIsDeleteModalOpen(true);
        }
    };

    const handleConfirmDelete = () => {
        if (selectedItem) {
            setResources(prev => prev.filter(item => item.id !== selectedItem.id));
            setIsDeleteModalOpen(false);
            setSelectedItem(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col select-none relative">
            <div className="w-full h-16 relative z-[9999]">
                <Navbar communityName="Community A" isAuthenticated={true} username="Username" onLogout={() => { }} />
            </div>

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 pt-16 relative z-10">
                <div className="flex items-center gap-2 bg-gray-200/60 p-1 rounded-xl w-fit">
                    <button onClick={() => navigate('/toxic-zone-map')} className="px-4 py-2 rounded-lg text-sm font-bold text-gray-500 transition-all cursor-pointer">Toxic Zone Map</button>
                    <button className="px-4 py-2 rounded-lg text-sm font-bold bg-[#0a1963] text-white shadow-sm">Resources Tracker</button>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                        <div className='flex flex-col'>
                            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0a1963]">
                                The number of days we can survive : <span className="text-red-600 font-black">{daysToSurvive}</span>
                            </h2>
                            <h2 className="text-lg sm:text-xl text-[#0a1963]">
                                The number of days we can survive : <span className="text-red-600 font-black">{daysToSurvive}</span>
                            </h2>
                        </div>

                        <button
                            onClick={() => setIsCreateModalOpen(true)}
                            className="flex items-center gap-2 bg-[#0a1963] hover:bg-[#0f248a] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-colors cursor-pointer w-fit"
                        >
                            <Plus size={18} />
                            Create Resource
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
                        {resources.map(item => (
                            <ResourceCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                quantity={item.quantity}
                                icon={iconMapping[item.type]}
                                onIncrease={handleIncrease}
                                onDecrease={handleDecrease}
                                onDelete={handleDeleteRequest}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <ConfirmDeleteModal
                isOpen={isDeleteModalOpen}
                itemName={selectedItem?.name || ''}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
            />

            <CreateResourceModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onCreate={handleCreateResource}
            />
        </div>
    );
};

export default DashboardPage;

