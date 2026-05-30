import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  // รองรับข้อมูลกลุ่มจาก Backend
  communityName?: string | null;
  // รองรับสถานะการยืนยันตัวตนจาก Backend
  isAuthenticated?: boolean;
  // รองรับข้อมูลผู้ใช้งานจาก Backend
  username?: string | null;
  // ฟังก์ชันสำหรับอนาคตเมื่อกด Logout
  onLogout?: () => void;
  // ข้อความบนปุ่มฝั่งขวา (เช่น 'Login', 'Register')
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

  // ฟังก์ชันตรวจสอบเพื่อเปลี่ยนเส้นทางตามคำบนปุ่ม
  const handleNavigation = (): void => {
    if (rightButtonLabel === 'Register') {
      navigate('/regis'); // ถ้าปุ่มเป็น Register กดแล้วจะส่งไปหน้าสมัครสมาชิก
    } else {
      navigate('/loginp1'); // ถ้าปุ่มเป็น Login (หรือคำอื่น) กดแล้วจะส่งไปหน้าเข้าสู่ระบบตาม path ของคุณ
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
          onClick={handleNavigation} // <--- เรียกฟังก์ชันตรวจสอบเงื่อนไขสลับหน้าตรงนี้
          className="bg-white text-[#0a1963] font-bold px-5 py-1 rounded-md text-sm shadow-sm hover:bg-gray-100 transition-colors cursor-pointer"
        >
          {rightButtonLabel}
        </button>
      )}
    </nav>
  );
};

export default Navbar;