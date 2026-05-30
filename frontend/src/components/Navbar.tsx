import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {

  communityName?: string | null;

  isAuthenticated?: boolean;

  username?: string | null;

  onLogout?: () => void;

  rightButtonLabel?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  communityName,
  isAuthenticated = false,
  username,
  onLogout,
  rightButtonLabel = 'Login',
}) => {
  const navigate = useNavigate();

  const handleNavigation = (): void => {
    if (rightButtonLabel === 'Register') {
      navigate('/register'); 
    } else {
      navigate('/login'); 
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#0a1963] shadow-md">
      
      {communityName ? (
        <button
          type="button"
          className="bg-white text-[#0a1963] font-bold px-4 py-1.5 rounded-md text-sm shadow-sm cursor-default"
        >
          {communityName}
        </button>
      ) : (
        <button
          type="button"
          className="bg-white text-[#8b1a34] font-bold px-4 py-1.5 rounded-md text-sm shadow-sm cursor-default"
        >
          No community
        </button>
      )}

      {/* ฝั่งขวา: ปุ่ม Action นำทางสลับหน้า */}
      {isAuthenticated ? (
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-sm md:text-base">
            {username || 'Username'}
          </span>
          <button
            type="button"
            onClick={onLogout}
            className="text-white hover:text-red-400 transition-colors cursor-pointer"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleNavigation} 
          className="bg-white text-[#0a1963] font-bold px-5 py-1 rounded-md text-sm shadow-sm hover:bg-gray-100 transition-colors cursor-pointer"
        >
          {rightButtonLabel}
        </button>
      )}
    </nav>
  );
};

export default Navbar;