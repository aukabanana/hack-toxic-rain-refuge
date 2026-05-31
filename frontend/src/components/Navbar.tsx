import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  communityName?: string | null;
  isAuthenticated?: boolean;
  username?: string | null;
  rightButtonLabel?: string;
  onCommunityClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  communityName,
  isAuthenticated = false,
  rightButtonLabel = 'Login',
  onCommunityClick,
}) => {
  const navigate = useNavigate();

  const handleNavigation = (): void => {
    if (rightButtonLabel === 'Register') {
      navigate('/register');
    } else {
      navigate('/login');
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await fetch('http://localhost:3000/logout', {
        method: 'POST',
        credentials: 'include',
      });
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const [username] = useState<string>(
    () => localStorage.getItem('username') || 'Unknown'
  );

  return (
    <nav className="flex top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#0a1963] shadow-md">
      {communityName ? (
        <button
          type="button"
          onClick={onCommunityClick} 
          className="bg-white text-[#0a1963] font-bold px-4 py-1.5 rounded-md text-sm shadow-sm hover:bg-gray-100 transition-colors cursor-pointer"
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

      {isAuthenticated ? (
        <div className="flex items-center gap-6">
          <p className="text-sm font-bold text-(--color-off-white) md:text-[24px]">
            {username}
          </p>

          <button
            type="button"
            onClick={handleLogout}
            className="text-white hover:text-red-400 transition-colors cursor-pointer"
            title="Logout"
          >
            <LogOut
              strokeWidth={3}
              className="size-6 text-(--color-off-white)"
            />
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