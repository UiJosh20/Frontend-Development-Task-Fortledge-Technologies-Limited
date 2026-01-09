"use client";

import { TrendingDown, TrendingUp, Salad, Soup, Coffee, Drumstick } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const revenueData = [
    { day: '01', lastWeek: 280, last6days: 270 },
    { day: '02', lastWeek: 200, last6days: 320 },
    { day: '03', lastWeek: 220, last6days: 380 },
    { day: '04', lastWeek: 180, last6days: 430 },
    { day: '05', lastWeek: 190, last6days: 490 },
    { day: '06', lastWeek: 240, last6days: 540 },
    { day: '07', lastWeek: 250, last6days: 590 },
    { day: '08', lastWeek: 200, last6days: 650 },
    { day: '09', lastWeek: 210, last6days: 700 },
    { day: '10', lastWeek: 180, last6days: 760 },
    { day: '11', lastWeek: 220, last6days: 810 },
    { day: '12', lastWeek: 240, last6days: 870 },
  ];

  const orderData = [
    { day: '01', lastWeek: 420, last6days: 380 },
    { day: '02', lastWeek: 450, last6days: 410 },
    { day: '03', lastWeek: 380, last6days: 450 },
    { day: '04', lastWeek: 490, last6days: 440 },
    { day: '05', lastWeek: 430, last6days: 490 },
    { day: '06', lastWeek: 520, last6days: 580 },
  ];

  const timeData = [
    { name: 'Morning', value: 28, color: '#E5E7EB' },
    { name: 'Evening', value: 32, color: '#A5B4FC' },
    { name: 'Afternoon', value: 40, color: '#6366F1' },
  ];

  const ratingData = [
    { name: 'Hygiene', value: 85, color: '#818CF8' },
    { name: 'Food Taste', value: 85, color: '#FB923C' },
    { name: 'Packaging', value: 92, color: '#22D3EE' },
  ];

  const mostOrderedFoods = [
    { name: 'Fresh Salad Bowl', price: 'IDR 45.000', icon: <Salad className="w-6 h-6" /> },
    { name: 'Chicken Noodles', price: 'IDR 75.000', icon: <Soup className="w-6 h-6" /> },
    { name: 'Smoothie Fruits', price: 'IDR 45.000', icon: <Coffee className="w-6 h-6" /> },
    { name: 'Hot Chicken Wings', price: 'IDR 45.000', icon: <Drumstick className="w-6 h-6" /> },
  ];

  return (
    <div className="mt-7 lg:mt-20 lg:ml-64 p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-2">Welcome to your restaurant dashboard</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Revenue Card */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div>
              <h2 className="text-gray-600 text-sm font-medium mb-2">Revenue</h2>
              <div className="text-2xl sm:text-3xl font-bold mb-2">IDR 7.852.000</div>
              <div className="flex items-center text-green-500 text-sm mb-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>2.1% vs last week</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Sales from 1-12 Dec, 2020</p>
            </div>
            <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 self-start">
              View Report
            </button>
          </div>

          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    fontSize: '12px'
                  }}
                />
                <Legend 
                  iconType="circle"
                  wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }}
                />
                <Bar 
                  dataKey="lastWeek" 
                  fill="#E5E7EB" 
                  name="Last Week" 
                  radius={[4, 4, 0, 0]} 
                />
                <Bar 
                  dataKey="last6days" 
                  fill="#6366F1" 
                  name="Last 6 days" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Time Card */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-gray-600 text-sm font-medium mb-2">Order Time</h2>
              <p className="text-gray-400 text-xs sm:text-sm">From 1-6 Dec, 2020</p>
            </div>
            <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">
              View Report
            </button>
          </div>

          <div className="relative flex justify-center items-center mb-6">
            <div className="w-48 h-48 sm:w-56 sm:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={timeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                  >
                    {timeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">1.890</div>
                <div className="text-xs sm:text-sm text-gray-500">orders</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {timeData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Your Rating Card */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-800 font-semibold mb-1">Your Rating</h2>
          <p className="text-gray-400 text-xs sm:text-sm mb-6">Lorem ipsum dolor sit amet, consectetur</p>

          <div className="relative h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ratingData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={80}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {ratingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Rating Labels - Responsive positioning */}
            {ratingData.map((item, index) => (
              <div
                key={index}
                className="absolute bg-white rounded-full shadow-lg px-3 py-1.5 sm:px-4 sm:py-2"
                style={{
                  top: index === 0 ? '15%' : index === 1 ? '50%' : '70%',
                  left: index === 0 ? '15%' : index === 1 ? '65%' : '10%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="text-center">
                  <div className="text-sm sm:text-lg font-bold">{item.value}%</div>
                  <div className="text-xs text-gray-500">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Ordered Food Card */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-800 font-semibold mb-1">Most Ordered Food</h2>
          <p className="text-gray-400 text-xs sm:text-sm mb-6">Adipiscing elit, sed do eiusmod tempor</p>

          <div className="space-y-4">
            {mostOrderedFoods.map((food, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center text-indigo-600">
                  {food.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{food.name}</div>
                </div>
                <div className="text-sm font-medium whitespace-nowrap">{food.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Card */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div>
              <h2 className="text-gray-600 text-sm font-medium mb-2">Order</h2>
              <div className="text-2xl sm:text-3xl font-bold mb-2">2.568</div>
              <div className="flex items-center text-red-500 text-sm mb-1">
                <TrendingDown className="w-4 h-4 mr-1" />
                <span>2.1% vs last week</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Sales from 1-6 Dec, 2020</p>
            </div>
            <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 self-start">
              View Report
            </button>
          </div>

          <div className="h-48 sm:h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    fontSize: '12px'
                  }}
                />
                <Legend 
                  iconType="circle"
                  wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="lastWeek" 
                  stroke="#E5E7EB" 
                  strokeWidth={2} 
                  name="Last Week" 
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="last6days" 
                  stroke="#6366F1" 
                  strokeWidth={2} 
                  name="Last 6 days" 
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;