
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
    const location = useLocation();
    const isMyRecordActive = location.pathname === '/my-record';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="w-full bg-header-1 shadow-[0px_3px_6px_#00000029] px-4 sm:px-6 lg:px-[56px]">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-row justify-between items-center w-full py-2 lg:py-0">
                    {/* Logo - Click to go to Dashboard */}
                    <Link to="/" className="w-[72px] sm:w-[100px] lg:w-[144px] hover:opacity-80 transition-opacity">
                        <img
                            src="/images/img_logo.svg"
                            className="w-full h-auto"
                            alt="Logo"
                        />
                    </Link>

                    {/* Right side: Navigation Menu + Menu Icon */}
                    <div className="flex flex-row items-center">
                        {/* Navigation Menu - Hidden on mobile, visible on larger screens */}
                        <nav className="hidden lg:flex flex-row justify-center items-center gap-0">
                            {/* Records Link - Active state when on my-record page */}
                            <Link
                                to="/my-record"
                                className="flex flex-row gap-2 justify-center items-center px-2 py-2 hover:opacity-80 transition-opacity cursor-pointer"
                            >
                                <img
                                    src="/images/img_icon_memo.svg"
                                    className="w-[32px] h-[32px]"
                                    alt="Records"
                                />
                                <span className={`text-[16px] font-light leading-[23px] ${isMyRecordActive ? 'text-yellow-400' : 'text-global-1'
                                    }`}>
                                    自分の記録
                                </span>
                            </Link>

                            {/* Challenge Link */}
                            <div className="flex flex-row gap-2 justify-center items-center px-2 py-2">
                                <Link
                                    to=""
                                    className="flex flex-row gap-2 justify-center items-center px-2 py-2 hover:opacity-80 transition-opacity cursor-pointer"
                                >
                                    <img
                                        src="/images/img_icon_challenge.svg"
                                        className="w-[32px] h-[32px]"
                                        alt="Challenge"
                                    />
                                    <span className="text-[16px] font-light leading-[23px] text-global-1">
                                        チャレンジ
                                    </span>
                                </Link>
                            </div>

                            {/* Notifications Link */}
                            <div className="flex flex-row justify-start items-center px-2 py-2">
                                <Link
                                    to=""
                                    className="flex flex-row gap-2 justify-center items-center px-2 py-2 hover:opacity-80 transition-opacity cursor-pointer"
                                >
                                    <img
                                        src="/images/img_icon_info.svg"
                                        className="w-[32px] h-[32px]"
                                        alt="Info"
                                    />
                                    <div className="flex flex-row justify-between items-start ml-[-8px] mr-2">
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="flex flex-row justify-center items-center px-1 bg-header-2 rounded-[8px]">
                                                <span className="text-[10px] font-normal leading-[13px] text-center text-global-1">
                                                    1
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-[16px] font-light leading-[23px] text-global-1 self-end">
                                            お知らせ
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </nav>

                        {/* Menu Icon - Close to navigation menu */}
                        <div className="ml-4">
                            <button
                                className="p-2 hover:opacity-80 transition-opacity"
                                aria-label="Open menu"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <img
                                    src="/images/img_icon_menu.svg"
                                    className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
                                    alt="Menu"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu - Works on all screen sizes */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </header>
    );
};

export default Header;