// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//     Plus, Beef, Droplets, Pill, Hammer,
//     Fuel, HardHat, HelpCircle, LucideIcon
// } from 'lucide-react';

// import Navbar from '../../../components/Navbar';
// import ResourceCard from '../components/ResourceCard';
// import ConfirmDeleteModal from '../components/ConfirmDelete';
// import CreateResourceModal from '../components/CreateCard';
// import { ResourceType } from '../types/DashboardType';
// import {
//     getResources, createResource, updateResourceAmount, deleteResource,
//     type Resource,
// } from '../apis/dashboard.api';

// const COMMUNITY_ID = '81e62fd2-8881-4229-a932-d799a1fda240';

// const iconMapping: Record<ResourceType, LucideIcon> = {
//     [ResourceType.FOOD]: Beef,
//     [ResourceType.WATER]: Droplets,
//     [ResourceType.MEDICINE]: Pill,
//     [ResourceType.TOOL]: Hammer,
//     [ResourceType.FUEL]: Fuel,
//     [ResourceType.EQUIPMENT]: HardHat,
//     [ResourceType.OTHER]: HelpCircle,
// };

// const unitMapping: Record<ResourceType, string> = {
//     [ResourceType.FOOD]: 'portion',
//     [ResourceType.WATER]: 'liter',
//     [ResourceType.MEDICINE]: 'pack',
//     [ResourceType.TOOL]: 'piece',
//     [ResourceType.FUEL]: 'liter',
//     [ResourceType.EQUIPMENT]: 'piece',
//     [ResourceType.OTHER]: 'unit',
// };

// export const DashboardPage: React.FC = () => {
//     const navigate = useNavigate();
//     const [resources, setResources] = useState<Resource[]>([]);
//     const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//     const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
//     const [selectedItem, setSelectedItem] = useState<Resource | null>(null);

//     const daysToSurvive = React.useMemo(() => {
//         const memberCount = 1; 

//         const totalWater = resources
//             .filter(r => r.type === 'WATER')
//             .reduce((sum, r) => sum + r.amount, 0);

//         const totalFood = resources
//             .filter(r => r.type === 'FOOD')
//             .reduce((sum, r) => sum + r.amount, 0);

//         const daysFromWater = totalWater / (memberCount * 2);
//         const daysFromFood = totalFood / (memberCount * 3);

//         const minDays = Math.min(daysFromWater, daysFromFood);
        
//         return Math.floor(minDays);
//     }, [resources]);


//     const resourceStats = React.useMemo(() => {
//         if (resources.length === 0) {
//             return {
//                 max: { name: 'None', amount: 0 },
//                 min: { name: 'None', amount: 0 }
//             };
//         }
//         const maxItem = resources.reduce((prev, current) => 
//             (prev.amount > current.amount) ? prev : current
//         );
//         const minItem = resources.reduce((prev, current) => 
//             (prev.amount < current.amount) ? prev : current
//         );
//         return {
//             max: { name: maxItem.name, amount: maxItem.amount },
//             min: { name: minItem.name, amount: minItem.amount }
//         };
//     }, [resources])

//     useEffect(() => {
//         getResources(COMMUNITY_ID)
//             .then(setResources)
//             .catch(err => console.error(err));
//     }, []);


//     const handleCreateResource = async (name: string, type: ResourceType) => {
//         try {
//             const unit = unitMapping[type];
//             const newResource = await createResource(COMMUNITY_ID, name, type, unit);
//             setResources(prev => [...prev, newResource]);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const handleIncrease = async (id: string) => {
//         try {
//             const updated = await updateResourceAmount(id, 'increase');
//             setResources(prev => prev.map(item => item.id === id ? updated : item));
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const handleDecrease = async (id: string) => {
//         try {
//             const updated = await updateResourceAmount(id, 'decrease');
//             setResources(prev => prev.map(item => item.id === id ? updated : item));
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const handleDeleteRequest = (id: string) => {
//         const item = resources.find(r => r.id === id);
//         if (item) {
//             setSelectedItem(item);
//             setIsDeleteModalOpen(true);
            
//         }
//     };

//     const handleConfirmDelete = async () => {
//         if (selectedItem) {
//             try {
//                 await deleteResource(selectedItem.id);
//                 setResources(prev => prev.filter(item => item.id !== selectedItem.id));
//                 setIsDeleteModalOpen(false);
//                 setSelectedItem(null);
//             } catch (err) {
//                 console.error(err);
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 flex flex-col select-none relative">
//             <div className="w-full h-16 relative z-[9999]">
//                 <Navbar communityName="Community A" isAuthenticated={true} username="Username" />
//             </div>

//             <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 pt-16 relative z-10">
//                 <div className="flex items-center gap-2 bg-gray-200/60 p-1 rounded-xl w-fit">
//                     <button onClick={() => navigate('/toxic-zone-map')} className="px-4 py-2 rounded-lg text-sm font-bold text-gray-500 transition-all cursor-pointer">Toxic Zone Map</button>
//                     <button className="px-4 py-2 rounded-lg text-sm font-bold bg-[#0a1963] text-white shadow-sm">Resources Tracker</button>
//                 </div>

//                 <div className="flex flex-col gap-8">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
//                         <div className="flex flex-col">
//                             <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0a1963]">
//                                 The number of days we can survive : <span className="text-red-600 font-black">{daysToSurvive}</span>
//                             </h2>
//                             <p className='text-green-700 font-medium'>The number of maximum resource is: 
//                                 <span className='underline font-black'>{resourceStats.max.name}</span> ({resourceStats.max.amount})
//                             </p>
//                             <p className='text-(--color-red) font-medium'>The number of minimum resource is: 
//                                 <span className='underline font-black'>{resourceStats.min.name}</span> ({resourceStats.min.amount})
//                             </p>
//                         </div>

//                         <button
//                             onClick={() => setIsCreateModalOpen(true)}
//                             className="flex items-center gap-2 bg-[#0a1963] hover:bg-[#0f248a] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-colors cursor-pointer w-fit"
//                         >
//                             <Plus size={18} />
//                             Create Resource
//                         </button>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
//                         {resources.map(item => (
//                             <ResourceCard
//                                 key={item.id}
//                                 id={item.id}
//                                 name={item.name}
//                                 quantity={item.amount}
//                                 icon={iconMapping[item.type as ResourceType]}
//                                 onIncrease={handleIncrease}
//                                 onDecrease={handleDecrease}
//                                 onDelete={handleDeleteRequest}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </main>

//             <ConfirmDeleteModal
//                 isOpen={isDeleteModalOpen}
//                 itemName={selectedItem?.name || ''}
//                 onClose={() => setIsDeleteModalOpen(false)}
//                 onConfirm={handleConfirmDelete}
//             />

//             <CreateResourceModal
//                 isOpen={isCreateModalOpen}
//                 onClose={() => setIsCreateModalOpen(false)}
//                 onCreate={handleCreateResource}
//             />
//         </div>
//     );
// };

// export default DashboardPage;




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
import CommunityModal from '../components/MemberView'; // Import โมดอลรายชื่อสมาชิกเข้ามา
import { ResourceType } from '../types/DashboardType';
import {
    getResources, createResource, updateResourceAmount, deleteResource,
    type Resource,
} from '../apis/dashboard.api';

const COMMUNITY_ID = '81e62fd2-8881-4229-a932-d799a1fda240';
const CURRENT_USER_ID = 'user-mock-12345'; // ตัวแปรจำลองไอดีผู้ใช้ปัจจุบันที่ล็อกอินอยู่

const iconMapping: Record<ResourceType, LucideIcon> = {
    [ResourceType.FOOD]: Beef,
    [ResourceType.WATER]: Droplets,
    [ResourceType.MEDICINE]: Pill,
    [ResourceType.TOOL]: Hammer,
    [ResourceType.FUEL]: Fuel,
    [ResourceType.EQUIPMENT]: HardHat,
    [ResourceType.OTHER]: HelpCircle,
};

const unitMapping: Record<ResourceType, string> = {
    [ResourceType.FOOD]: 'portion',
    [ResourceType.WATER]: 'liter',
    [ResourceType.MEDICINE]: 'pack',
    [ResourceType.TOOL]: 'piece',
    [ResourceType.FUEL]: 'liter',
    [ResourceType.EQUIPMENT]: 'piece',
    [ResourceType.OTHER]: 'unit',
};

export const DashboardPage: React.FC = () => {
    const navigate = useNavigate();
    const [resources, setResources] = useState<Resource[]>([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isCommuModalOpen, setIsCommuModalOpen] = useState(false); // เพิ่ม State สำหรับเปิดปิดโมดอลคอมมู
    const [selectedItem, setSelectedItem] = useState<Resource | null>(null);

    const daysToSurvive = React.useMemo(() => {
        const memberCount = 1; 

        const totalWater = resources
            .filter(r => r.type === 'WATER')
            .reduce((sum, r) => sum + r.amount, 0);

        const totalFood = resources
            .filter(r => r.type === 'FOOD')
            .reduce((sum, r) => sum + r.amount, 0);

        const daysFromWater = totalWater / (memberCount * 2);
        const daysFromFood = totalFood / (memberCount * 3);

        const minDays = Math.min(daysFromWater, daysFromFood);
        
        return Math.floor(minDays);
    }, [resources]);


    const resourceStats = React.useMemo(() => {
        if (resources.length === 0) {
            return {
                max: { name: 'None', amount: 0 },
                min: { name: 'None', amount: 0 }
            };
        }
        const maxItem = resources.reduce((prev, current) => 
            (prev.amount > current.amount) ? prev : current
        );
        const minItem = resources.reduce((prev, current) => 
            (prev.amount < current.amount) ? prev : current
        );
        return {
            max: { name: maxItem.name, amount: maxItem.amount },
            min: { name: minItem.name, amount: minItem.amount }
        };
    }, [resources])

    useEffect(() => {
        getResources(COMMUNITY_ID)
            .then(setResources)
            .catch(err => console.error(err));
    }, []);


    const handleCreateResource = async (name: string, type: ResourceType) => {
        try {
            const unit = unitMapping[type];
            const newResource = await createResource(COMMUNITY_ID, name, type, unit);
            setResources(prev => [...prev, newResource]);
        } catch (err) {
            console.error(err);
        }
    };

    const handleIncrease = async (id: string) => {
        try {
            const updated = await updateResourceAmount(id, 'increase');
            setResources(prev => prev.map(item => item.id === id ? updated : item));
        } catch (err) {
            console.error(err);
        }
    };

    const handleDecrease = async (id: string) => {
        try {
            const updated = await updateResourceAmount(id, 'decrease');
            setResources(prev => prev.map(item => item.id === id ? updated : item));
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteRequest = (id: string) => {
        const item = resources.find(r => r.id === id);
        if (item) {
            setSelectedItem(item);
            setIsDeleteModalOpen(true);
            
        }
    };

    const handleConfirmDelete = async () => {
        if (selectedItem) {
            try {
                await deleteResource(selectedItem.id);
                setResources(prev => prev.filter(item => item.id !== selectedItem.id));
                setIsDeleteModalOpen(false);
                setSelectedItem(null);
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col select-none relative">
            <div className="w-full h-16 relative z-[9999]">
                {/* ส่งฟังก์ชันเปิด Modal ไปให้ Navbar ทางพร็อพส์ onCommunityClick */}
                <Navbar 
                    communityName="Community A" 
                    isAuthenticated={true} 
                    username="Username" 
                    onCommunityClick={() => setIsCommuModalOpen(true)}
                />
            </div>

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 pt-16 relative z-10">
                <div className="flex items-center gap-2 bg-gray-200/60 p-1 rounded-xl w-fit">
                    <button onClick={() => navigate('/toxic-zone-map')} className="px-4 py-2 rounded-lg text-sm font-bold text-gray-500 transition-all cursor-pointer">Toxic Zone Map</button>
                    <button className="px-4 py-2 rounded-lg text-sm font-bold bg-[#0a1963] text-white shadow-sm">Resources Tracker</button>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                        <div className="flex flex-col">
                            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0a1963]">
                                The number of days we can survive : <span className="text-red-600 font-black">{daysToSurvive}</span>
                            </h2>
                            <p className='text-green-700 font-medium'>The number of maximum resource is: 
                                <span className='underline font-black'>{resourceStats.max.name}</span> ({resourceStats.max.amount})
                            </p>
                            <p className='text-(--color-red) font-medium'>The number of minimum resource is: 
                                <span className='underline font-black'>{resourceStats.min.name}</span> ({resourceStats.min.amount})
                            </p>
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
                                quantity={item.amount}
                                icon={iconMapping[item.type as ResourceType]}
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

            {/* ติดตั้ง CommunityModal ไว้ตรงนี้ */}
            <CommunityModal 
                isOpen={isCommuModalOpen}
                onClose={() => setIsCommuModalOpen(false)}
                currentUserId={CURRENT_USER_ID}
                currentCommunityId={COMMUNITY_ID}
            />
        </div>
    );
};

export default DashboardPage;