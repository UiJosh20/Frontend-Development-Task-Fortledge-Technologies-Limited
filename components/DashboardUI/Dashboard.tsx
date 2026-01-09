"use client";

import { TrendingDown, TrendingUp } from 'lucide-react';
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
    { name: 'Fresh Salad Bowl', price: 'IDR 45.000', icon: '🥗' },
    { name: 'Chicken Noodles', price: 'IDR 75.000', icon: '🍜' },
    { name: 'Smoothie Fruits', price: 'IDR 45.000', icon: '🥤' },
    { name: 'Hot Chicken Wings', price: 'IDR 45.000', icon: '🍗' },
  ];

  return (
    <div className="ml-64 mt-20 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Revenue Card */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-gray-600 mb-2">Revenue</h2>
              <div className="text-3xl font-bold mb-2">IDR 7.852.000</div>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>2.1% vs last week</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">Sales from 1-12 Dec, 2020</p>
            </div>
            <button className="text-indigo-600 text-sm font-medium">View Report</button>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis hide />
              <Tooltip />
              <Legend />
              <Bar dataKey="lastWeek" fill="#E5E7EB" name="Last Week" radius={[0, 0, 0, 0]} width={20} />
              <Bar dataKey="last6days" fill="#6366F1" name="Last 6 days" radius={[0, 0, 0, 0]} width={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Order Time Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-gray-600 mb-2">Order Time</h2>
              <p className="text-gray-400 text-sm">From 1-6 Dec, 2020</p>
            </div>
            <button className="text-indigo-600 text-sm font-medium">View Report</button>
          </div>

          <div className="relative flex justify-center items-center mb-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={timeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">1.890</div>
                <div className="text-sm text-gray-500">orders</div>
              </div>
            </div>
          </div>

          <div className="space-y-2 flex justify-between mt-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                <span className="text-sm">Afternoon</span>
              </div>
              <span className="text-sm font-medium ms-4">40%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
                <span className="text-sm">Evening</span>
              </div>
              <span className="text-sm font-medium ms-4">32%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-sm">Morning</span>
              </div>
              <span className="text-sm font-medium ms-4">28%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Your Rating Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-gray-800 font-semibold mb-2">Your Rating</h2>
          <p className="text-gray-400 text-sm mb-6">Lorem ipsum dolor sit amet, consectetur</p>

          <div className="relative flex justify-center items-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={ratingData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={100}
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
            {ratingData.map((item, index) => (
              <div
                key={index}
                className="absolute bg-white rounded-full shadow-lg px-4 py-2"
                style={{
                  top: index === 0 ? '20%' : index === 1 ? '50%' : '70%',
                  left: index === 0 ? '20%' : index === 1 ? '60%' : '15%',
                }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">{item.value}%</div>
                  <div className="text-xs text-gray-500">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Ordered Food Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-gray-800 font-semibold mb-2">Most Ordered Food</h2>
          <p className="text-gray-400 text-sm mb-6">Adipiscing elit, sed do eiusmod tempor</p>

          <div className="space-y-4">
            {mostOrderedFoods.map((food, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {food.icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{food.name}</div>
                </div>
                <div className="text-sm font-medium">{food.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-gray-600 mb-2">Order</h2>
              <div className="text-3xl font-bold mb-2">2.568</div>
              <div className="flex items-center text-red-500 text-sm">
                <TrendingDown className="w-4 h-4 mr-1" />
                <span>2.1% vs last week</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">Sales from 1-6 Dec, 2020</p>
            </div>
            <button className="text-indigo-600 text-sm font-medium">View Report</button>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis hide />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="lastWeek" stroke="#E5E7EB" strokeWidth={2} name="Last Week" />
              <Line type="monotone" dataKey="last6days" stroke="#6366F1" strokeWidth={2} name="Last 6 days" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;