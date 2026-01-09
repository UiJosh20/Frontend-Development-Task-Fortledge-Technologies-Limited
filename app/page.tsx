import React from 'react';
import { Search, Bell, ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';
import Navbar from '@/components/DashboardUI/Navbar';
import Dashboard from '@/components/DashboardUI/Dashboard';
import Sidebar from '@/components/DashboardUI/Sidebar';


export default function App() {
  return (
    <div className="bg-gray-50">
      <Sidebar />
      <Navbar />
      <Dashboard />
    </div>
  );
}