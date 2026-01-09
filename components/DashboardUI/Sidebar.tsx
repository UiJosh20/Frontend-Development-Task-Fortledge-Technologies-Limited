import React from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  ClipboardList,
  Star,
  Settings,
  CreditCard,
  User,
  HelpCircle,
  Home,
  MessageCircleMore
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { 
      icon: <LayoutDashboard size={20} />, 
      label: 'Dashboard', 
      active: true 
    },
    { 
      icon: <ShoppingCart size={20} />, 
      label: 'Food Order', 
      active: false 
    },
    { 
      icon: <ClipboardList size={20} />, 
      label: 'Manage Menu', 
      active: false 
    },
    { 
      icon: <MessageCircleMore  size={20} />, 
      label: 'Customer Review', 
      active: false 
    },
  ];

  const otherItems = [
    { 
      icon: <Settings size={20} />, 
      label: 'Settings' 
    },
    { 
      icon: <CreditCard size={20} />, 
      label: 'Payment' 
    },
    { 
      icon: <User size={20} />, 
      label: 'Accounts' 
    },
    { 
      icon: <HelpCircle size={20} />, 
      label: 'Help' 
    },
  ];

  return (
    <aside className="w-full lg:w-64 bg-white md:h-screen hidden md:block lg:fixed lg:left-0 lg:top-0 border-r border-gray-200">
      <div className="p-4 lg:p-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
           G
          </div>
          <span className="font-bold text-xl hidden lg:inline">GOODFOOD</span>
        </div>

        {/* Menu Items Section */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider hidden lg:block">
            Menu
          </p>
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:gap-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-3 px-3 lg:px-4 py-3 rounded-lg lg:mb-1 cursor-pointer transition-colors flex-shrink-0 lg:w-full
                  ${item.active 
                    ? 'bg-indigo-50 text-indigo-600 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className="text-sm font-medium hidden lg:inline">
                  {item.label}
                </span>
                <span className="text-xs font-medium lg:hidden">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Other Items Section */}
        <div>
          <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider hidden lg:block">
            Others
          </p>
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:gap-1">
            {otherItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-3 px-3 lg:px-4 py-3 rounded-lg lg:mb-1 cursor-pointer text-gray-600 hover:bg-gray-50 transition-colors flex-shrink-0 lg:w-full"
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className="text-sm font-medium hidden lg:inline">
                  {item.label}
                </span>
                <span className="text-xs font-medium lg:hidden">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;