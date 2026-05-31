import React, { useState } from 'react';
import { User, Lock, CloudRain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InputGroup from '../components/InputGroup';
import SubmitButton from '../components/SubmitButton';
import Navbar from '../../../components/Navbar';
import { loginUser } from '../apis/auth.api';
import { getMyCommunity } from '../../dashboard/apis/dashboard.api';

export const LoginPage1: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const data = await loginUser({ username, password });

            const community = await getMyCommunity(data.userId);
            if (community) {
                localStorage.setItem('communityId', community.id);
                localStorage.setItem('communityName', community.name);
            }

            navigate('/map');
        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col bg-[#050f3e] overflow-hidden select-none">
            <Navbar communityName={null} isAuthenticated={false} rightButtonLabel="Register" />
            <div className="flex-1 flex pt-16">

                <div className="hidden md:flex md:w-3/5 relative bg-[#050f3e] overflow-hidden px-10 py-10 flex-col justify-between">
                    <div className="z-10 flex items-center gap-2 text-white/40 mt-6">
                        <CloudRain size={24} />
                        <div className="flex flex-col leading-none">
                            <span className="font-bold text-xs tracking-wider uppercase">Toxic Rain</span>
                            <span className="text-[10px]">Refuge</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="flex flex-col justify-center items-start gap-3 z-10 my-auto">
                        <h1 className='text-2xl md:text-5xl font-extrabold text-white'>Start Toxic Rain Refuge</h1>
                        <h1 className='text-lg md:text-xl text-white'>Welcome back, Surivor. The rain hasn't stopped. Pick up where your team left off</h1>
                    </div>
                    <div className="z-10 text-white/30 text-xs mb-2">Northgate Refuge · 24 survivors accounted for</div>
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[80px]" />
                    <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-blue-500/10 rounded-full blur-[60px]" />
                    <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-red-800/40 border border-red-500/50 flex items-center justify-center text-[10px] text-white">⊕</div>
                    <div className="absolute top-1/4 right-1/3 w-6 h-6 rounded-full bg-red-900/40 border border-red-500/40 flex items-center justify-center text-[10px] text-white">⚠</div>
                    <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-emerald-950/50 border border-emerald-500/40 flex items-center justify-center text-[10px] text-white">𐩺</div>
                    <div className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full bg-blue-950/50 border border-blue-500/40 flex items-center justify-center text-[10px] text-white">💧</div>
                    <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-slate-800/40 border border-slate-400/30 flex items-center justify-center text-[10px] text-white">⌂</div>
                </div>

                <div className="w-full md:w-2/5 bg-white flex flex-col justify-center items-center px-8 sm:px-16 py-12 shadow-2xl z-10">
                    <div className="w-full max-w-sm flex flex-col gap-6 justify-center">
                        <h1 className="text-3xl font-bold text-gray-900 tracking-wide md:text-left mb-2">Login</h1>

                        {error && (
                            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
                            <InputGroup label="Username" type="text" placeholder="Enter username" icon={User} value={username} onChange={e => setUsername(e.target.value)} />
                            <InputGroup label="Password" type="password" placeholder="Enter password" icon={Lock} value={password} onChange={e => setPassword(e.target.value)} />
                            <div className="mt-2">
                                <SubmitButton label={loading ? 'Logging in...' : 'Login'} />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage1;