import React, { useState, useEffect } from 'react';
import { X, Plus, ChevronDown } from 'lucide-react';

interface MemberUser {
    username: string;
    telephone: string;
}

interface CommunityMemberType {
    id: string;
    role: 'RESOURCE_TRACKER' | 'RESOURCE_FINDER' | 'SCOUT' | 'SURVIVOR';
    user: MemberUser;
}

interface CommunityModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentUserId: string;
    currentCommunityId: string;
}

interface UserSearchResult {
    id: string;
    username: string;
    telephone: string;
    isInCurrentCommunity: boolean;
}

const CommunityModal: React.FC<CommunityModalProps> = ({ isOpen, onClose, currentUserId, currentCommunityId }) => {
    // === 1. ประกาศ STATE ทั้งหมดไว้บนสุด ===
    const [members, setMembers] = useState<CommunityMemberType[]>([]);
    const [commuName, setCommuName] = useState<string>('');
    const [userRole, setUserRole] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [allUsers, setAllUsers] = useState<UserSearchResult[]>([]);
    


    // === 2. USEEFFECT สำหรับจัดการ FETCH DATA และ SET STATE (ย้าย setAllUsers มาไว้ที่นี่) ===
    useEffect(() => {
        if (isOpen) {
            const fetchCommunityData = async () => {
                try {
                    setLoading(true);
                    setCommuName("Community A");
                    setUserRole("RESOURCE_TRACKER");

                    setMembers([
                        {
                            id: "cm-001",
                            role: "RESOURCE_TRACKER",
                            user: { username: "Auka Xiang Non (Leader)", telephone: "081-234-5678" }
                        },
                        {
                            id: "cm-002",
                            role: "SCOUT",
                            user: { username: "jdsifoisa", telephone: "089-876-5432" }
                        },
                        {
                            id: "cm-003",
                            role: "RESOURCE_FINDER",
                            user: { username: "TUJFI", telephone: "085-555-4433" }
                        },
                        {
                            id: "cm-004",
                            role: "SCOUT",
                            user: { username: "jdJIdm", telephone: "086-123-4567" }
                        }
                    ]);

                    // ย้ายการกำหนดค่าเริ่มต้นของ AllUsers มาไว้ในนี้ เพื่อป้องกัน Infinite Loop
                    setAllUsers([
                        {
                            id: 'u-001',
                            username: 'John',
                            telephone: '0801111111',
                            isInCurrentCommunity: false,
                        },
                        {
                            id: 'u-002',
                            username: 'Alice',
                            telephone: '0802222222',
                            isInCurrentCommunity: true,
                        },
                        {
                            id: 'u-003',
                            username: 'Bob',
                            telephone: '0803333333',
                            isInCurrentCommunity: false,
                        },
                    ]);

                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching community data:", error);
                    setLoading(false);
                }
            };
            fetchCommunityData();
        }
    }, [isOpen, currentUserId, currentCommunityId]);

    // === 3. ฟังก์ชันการทำงานต่างๆ (LOGIC HANDLERS) ===
    const toggleDropdown = (id: string) => {
        setActiveDropdownId(activeDropdownId === id ? null : id);
    };

    const handleRoleChange = async (communityMemberId: string, newRole: 'RESOURCE_TRACKER' | 'RESOURCE_FINDER' | 'SCOUT' | 'SURVIVOR') => {
        try {
            setMembers(prev => prev.map(m => m.id === communityMemberId ? { ...m, role: newRole } : m));
            setActiveDropdownId(null);

            console.log(`ส่งคำขอไป Backend: เปลี่ยนสถานะ Member ID ${communityMemberId} เป็น ${newRole}`);
        } catch (err) {
            console.error("Failed to update role:", err);
        }
    };


    // === 4. ฟังก์ชันและตัวแปรตัวช่วยคำนวณ (HELPERS / DERIVED STATE) ===
    const filteredUsers = allUsers.filter(user =>
        user.username.toLowerCase().includes(search.toLowerCase())
    );

    const leadTracker = members.find(m => m.role === 'RESOURCE_TRACKER');
    const otherMembers = leadTracker ? members.filter(m => m.id !== leadTracker.id) : members;
    const hasTrackerPermission = userRole === 'RESOURCE_TRACKER';
    const [selectedUser, setSelectedUser] = useState<UserSearchResult | null>(null);

    const getRoleStyle = (role: string) => {
        switch (role) {
            case 'SCOUT':
                return 'bg-[#e6f4fe] text-[#2b6cb0] hover:bg-[#d4edfe]';
            case 'RESOURCE_FINDER':
                return 'bg-[#edfbf2] text-[#2f855a] hover:bg-[#e1f7e9]';
            case 'RESOURCE_TRACKER':
                return 'bg-[#fefce8] text-[#854d0e] hover:bg-[#fef9c3]';
            default:
                return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
        }
    };

    // === 5. EARLY RETURN (ต้องอยู่หลัง Hooks ทั้งหมด) ===
    if (!isOpen) return null;
    const handleAddMember = () => {
    if (!selectedUser) return;

    const newMember: CommunityMemberType = {
        id: `cm-${Date.now()}`,
        role: 'SURVIVOR',
        user: {
            username: selectedUser.username,
            telephone: selectedUser.telephone,
        },
    };

    setMembers(prev => [...prev, newMember]);

    setSearch('');
    setSelectedUser(null);
};


    return (
        <>
            <div className="absolute inset-0 z-10" onClick={() => { setActiveDropdownId(null); onClose(); }} />

            <div className="absolute top-20 left-6 z-10 w-full max-w-2xl rounded-[2rem] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-[#0A192F] border border-gray-50/50 animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between pb-4">
                    <h2 className="text-2xl font-bold tracking-tight text-[#0a1963]">{commuName || "Loading..."}</h2>
                    <button onClick={onClose} className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer">
                        <X size={20} />
                    </button>
                </div>

                {loading ? (
                    <div className="py-12 text-center text-gray-400 font-medium">Loading data</div>
                ) : (
                    <div className="flex flex-col">

                        {leadTracker && (
                            <div className="flex items-center justify-between py-3 px-2">
                                <div className="flex flex-col">
                                    <p className="text-base font-bold text-gray-800">{leadTracker.user.username}</p>
                                    <p className="text-xs font-semibold text-gray-400 mt-0.5 tracking-wide">{leadTracker.user.telephone}</p>
                                </div>
                                <div className="px-5 py-2 text-xs font-extrabold bg-[#fefce8] text-[#854d0e] rounded-full tracking-wider select-none">
                                    TRACKER ★
                                </div>
                            </div>
                        )}


                        <div className="px-2 my-2">
                            <div className="border-t border-gray-100 w-full"></div>
                        </div>


                        <div className="max-h-[220px] overflow-y-auto space-y-3 pr-1">
                            {otherMembers.map((member) => (
                                <div key={member.id} className="flex items-center justify-between py-1 px-2 rounded-2xl relative">


                                    <div className="flex flex-col">
                                        <p className="text-base font-bold text-gray-800">{member.user.username}</p>
                                        <p className="text-xs font-semibold text-gray-400 mt-0.5 tracking-wide">{member.user.telephone}</p>
                                    </div>


                                    <div className="relative">
                                        {hasTrackerPermission ? (
                                            <button
                                                onClick={() => toggleDropdown(member.id)}
                                                className={`flex items-center gap-2 px-5 py-2 text-xs font-extrabold rounded-full tracking-wider transition-all cursor-pointer ${getRoleStyle(member.role)}`}
                                            >
                                                <span>{member.role === 'RESOURCE_FINDER' ? 'RESOURCE FINDER' : member.role}</span>
                                                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdownId === member.id ? 'rotate-180' : ''}`} />
                                            </button>
                                        ) : (

                                            <div className={`px-5 py-2 text-xs font-extrabold rounded-full tracking-wider select-none ${getRoleStyle(member.role).split(' hover:')[0]}`}>
                                                {member.role === 'RESOURCE_FINDER' ? 'RESOURCE FINDER' : member.role}
                                            </div>
                                        )}

                                        {activeDropdownId === member.id && (
                                            <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-[11111] animate-in fade-in slide-in-from-top-2 duration-150">
                                                <button
                                                    onClick={() => handleRoleChange(member.id, 'SCOUT')}
                                                    className="w-full text-left px-4 py-2 text-xs font-extrabold text-[#2b6cb0] hover:bg-[#e6f4fe] transition-colors"
                                                >
                                                    SCOUT
                                                </button>
                                                <button
                                                    onClick={() => handleRoleChange(member.id, 'RESOURCE_FINDER')}
                                                    className="w-full text-left px-4 py-2 text-xs font-extrabold text-[#2f855a] hover:bg-[#edfbf2] transition-colors"
                                                >
                                                    RESOURCE FINDER
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            ))}
                        </div>

                        {hasTrackerPermission && (
                            <div className="mt-4 flex gap-3 items-start">

                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Search user..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:border-[#0a1963]"
                                    />

                                    {search && (
                                        <div className="mt-2 max-h-[200px] overflow-y-auto rounded-xl border border-gray-100 bg-white">

                                            {filteredUsers.map((user) => (
                                                <div
                                                    key={user.id}
                                                    onClick={() => {
                                                        setSelectedUser(user);
                                                        setSearch(user.username);
                                                    }}
                                                    className="px-4 py-3 border-b border-gray-50 cursor-pointer hover:bg-gray-50"
                                                >
                                                    <div>
                                                        <p className="text-sm font-semibold">
                                                            {user.username}
                                                        </p>
                                                        <p className="text-xs text-gray-400">
                                                            {user.telephone}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={handleAddMember}
                                    className="flex items-center gap-1.5 px-6 py-2.5 text-sm font-bold text-white bg-[#1a1f2c] hover:bg-[#2d3748] rounded-xl shadow-md transition-all cursor-pointer"
                                >
                                    <Plus size={16} />
                                    <span>เพิ่มสมาชิก</span>
                                </button>

                            </div>
                        )}

                    </div>
                )}
            </div>
        </>
    );
};

export default CommunityModal;