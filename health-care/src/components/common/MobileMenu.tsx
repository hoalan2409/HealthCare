import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const location = useLocation();

    if (!isOpen) return null;

    // Close menu when clicking outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const menuItems = [
        {
            id: 'my-record',
            text: '自分の記録',
            path: '/my-record',
            available: true
        },
        {
            id: 'weight-graph',
            text: '体重グラフ',
            path: '/',
            available: false
        },
        {
            id: 'goal',
            text: '目標',
            path: '/',
            available: false
        },
        {
            id: 'selected-course',
            text: '選択中のコース',
            path: '/',
            available: false
        },
        {
            id: 'column-list',
            text: 'コラム一覧',
            path: '/column',
            available: true
        },
        {
            id: 'settings',
            text: '設定',
            path: '/',
            available: false
        }
    ];

    return (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
            onClick={handleBackdropClick}
        >
            {/* Remove Button - Positioned above the menu */}
            <div className="fixed right-4 top-4 z-60">
                <button
                    onClick={onClose}
                    className="w-8 h-8 bg-[#2E2E2E] rounded flex items-center justify-center hover:bg-[#404040] transition-colors"
                >
                    <img
                        src="/images/remove.svg"
                        className="w-5 h-5"
                        alt="Close menu"
                    />
                </button>
            </div>

            {/* Menu Container - Only takes the space it needs */}
            <div className="fixed right-0 top-16 w-[280px] bg-[#2E2E2E] shadow-lg">
                {/* Menu Items */}
                <nav className="px-4 py-4">
                    {menuItems.map((item, index) => (
                        <div key={item.id}>
                            {item.available ? (
                                <Link
                                    to={item.path}
                                    onClick={onClose}
                                    className={`flex items-center py-4 px-3 text-white hover:bg-[#707070] transition-colors ${location.pathname === item.path ? 'bg-[#707070]' : ''
                                        }`}
                                >
                                    <span className="text-base font-light">{item.text}</span>
                                </Link>
                            ) : (
                                <div className="flex items-center py-4 px-3 text-gray-400 cursor-not-allowed">
                                    <span className="text-base font-light">{item.text}</span>
                                </div>
                            )}
                            {index < menuItems.length - 1 && (
                                <div className="h-px bg-[#707070] w-full"></div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;
