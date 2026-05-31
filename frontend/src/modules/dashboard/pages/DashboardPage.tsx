import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
    Plus, Beef, Droplets, Pill, Hammer,
    Fuel, HardHat, HelpCircle, LucideIcon
} from 'lucide-react';
import MapTabs from '../../map/components/MapTabs'

import Navbar from '../../../components/Navbar';
import ResourceCard from '../components/ResourceCard';
import ConfirmDeleteModal from '../components/ConfirmDelete';
import CreateResourceModal from '../components/CreateCard';
import CommunityModal from '../components/MemberView';
import { ResourceType } from '../types/DashboardType';
import {
    getResources, createResource, updateResourceAmount, deleteResource,
    getUserRole,
    type Resource,
} from '../apis/dashboard.api';
import { MissionDrawer } from "../../missions/components/MissionDrawer";

const COMMUNITY_ID = '81e62fd2-8881-4229-a932-d799a1fda240';
const CURRENT_USER_ID = 'user-mock-12345';

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
    const [isCommuModalOpen, setIsCommuModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Resource | null>(null);

    const [isMissionDrawerOpen, setIsMissionDrawerOpen,] = useState(false);

    const [userRole, setUserRole] = useState<string>('');
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
    }, [resources]);

    useEffect(() => {
        getResources(COMMUNITY_ID)
            .then(setResources)
            .catch(err => console.error(err));

        getUserRole().then(role => setUserRole(role));
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

    // const isTracker = userRole.toUpperCase() === 'RESOURCE_TRACKER';

    const normalizedRole = userRole.toUpperCase();
    const isTracker = normalizedRole === "RESOURCE_TRACKER";
    const isScout = normalizedRole === "SCOUT";
    const isFinder = normalizedRole === "RESOURCE_FINDER";
    const canOpenMissionDrawer = isScout || isFinder;
    const missionDrawerRole: "scout" | "finder" = isScout ? "scout" : "finder";

    // const handleMainButtonClick = () => {
    //     if (isTracker) {
    //         setIsCreateModalOpen(true);
    //     } else {
    //         navigate('/notifications');
    //     }
    // };
    const handleMainButtonClick = () => {
        if (isTracker) {
            setIsCreateModalOpen(true);
            return;
        }

        if (canOpenMissionDrawer) {
            setIsMissionDrawerOpen(true);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col select-none relative">
            <div className="w-full h-16 relative z-9999">
                <Navbar
                    communityName="Community A"
                    isAuthenticated={true}
                    onCommunityClick={() => setIsCommuModalOpen(true)}
                />
            </div>

            <div className='w-full flex justify-center'>
                <main className="flex flex-col w-full gap-5 mt-10">
                    <div className="flex flex-col gap-5">
                        <div className='w-fit mx-15'><MapTabs /></div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mx-15">
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

                            {/* <button
                                onClick={handleMainButtonClick}
                                className="flex items-center gap-2 bg-[#0a1963] hover:bg-[#0f248a] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-colors cursor-pointer w-fit"
                            >
                                {isTracker ? (
                                    <>
                                        <Plus size={18} />
                                        Create Resource
                                    </>
                                ) : (
                                    <>
                                        <Bell size={18} />
                                        Mission Assignments
                                    </>
                                )}
                            </button> */}
                            {(isTracker ||
                                canOpenMissionDrawer) && (
                                    <button
                                        type="button"
                                        onClick={handleMainButtonClick}
                                        className="flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-[#0a1963] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#0f248a]"
                                    >
                                        {isTracker ? (
                                            <>
                                                <Plus size={18} />
                                                Create Resource
                                            </>
                                        ) : (
                                            <>
                                                <Bell size={18} />
                                                Mission Assignments
                                            </>
                                        )}
                                    </button>
                                )}
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
                                    isTracker={isTracker}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            {/* <ConfirmDeleteModal
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

            <CommunityModal
                isOpen={isCommuModalOpen}
                onClose={() => setIsCommuModalOpen(false)}
                currentUserId={CURRENT_USER_ID}
                currentCommunityId={COMMUNITY_ID}
                isTracker={isTracker}
            /> */}
            <ConfirmDeleteModal
                isOpen={isDeleteModalOpen}
                itemName={selectedItem?.name || ""}
                onClose={() =>
                    setIsDeleteModalOpen(false)
                }
                onConfirm={handleConfirmDelete}
            />

            <CreateResourceModal
                isOpen={isCreateModalOpen}
                onClose={() =>
                    setIsCreateModalOpen(false)
                }
                onCreate={handleCreateResource}
            />

            <CommunityModal
                isOpen={isCommuModalOpen}
                onClose={() =>
                    setIsCommuModalOpen(false)
                }
                currentUserId={CURRENT_USER_ID}
                currentCommunityId={COMMUNITY_ID}
                isTracker={isTracker}
            />

            <MissionDrawer
                isOpen={isMissionDrawerOpen}
                onClose={() =>
                    setIsMissionDrawerOpen(false)
                }
                role={missionDrawerRole}
                communityId={COMMUNITY_ID}
            />
        </div>
    );
};

export default DashboardPage;