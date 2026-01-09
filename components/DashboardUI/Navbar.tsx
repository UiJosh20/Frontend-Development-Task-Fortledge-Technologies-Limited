import { Bell, ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="md:fixed top-0 left-64 right-0 bg-white border-b border-gray-200 z-10 px-5 lg:px-10">
       <div className="flex items-center justify-between py-3 lg:py-4">
        {/* Search Bar - Hidden on mobile, visible on tablet and up */}
        <div className="w-10 h-10 bg-indigo-600 md:hidden lg:hidden rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
           G
          </div>
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

        <div className="flex items-center gap-4">
              <div className="relative cursor-pointer md:hidden block">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl bg-[#FFE6CC] p-2 rounded-full h-10 flex justify-center items-center">🍔</span>
            <span className="font-medium md:block hidden">Delicious Burger</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="relative cursor-pointer md:block hidden">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;