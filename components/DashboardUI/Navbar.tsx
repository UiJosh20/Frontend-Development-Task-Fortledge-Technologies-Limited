import { Bell, ChevronDown, Search, Utensils } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 lg:left-64 right-0 bg-white border-b border-gray-200 z-20 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-3 lg:py-4">
        {/* Search Bar - Hidden on mobile, visible on tablet and up */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 lg:w-5 lg:h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm lg:text-base"
            />
          </div>
        </div>

        {/* Mobile Search Icon */}
        <div className="md:hidden">
          <Search className="w-5 h-5 text-gray-600" />
        </div>

        <div className="flex items-center gap-3 sm:gap-4 ml-auto md:ml-0">
          {/* Restaurant Selector */}
          <div className="flex items-center gap-2 cursor-pointer bg-gray-50 px-3 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-8 h-8 bg-[#FFE6CC] rounded-full flex items-center justify-center flex-shrink-0">
              <Utensils className="w-4 h-4 text-orange-600" />
            </div>
            <span className="font-medium text-sm hidden sm:inline">Delicious Burger</span>
            <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </div>

          {/* Notification Bell */}
          <div className="relative cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;