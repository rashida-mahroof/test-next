"use client"
import DashboardLayout from '@/app/components/layouts/dashboard-layout/page'
import React from 'react'
import { useState } from 'react';
function DashBoard() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { name: 'Registration Overview', id: 'overview' },
    { name: 'Taxable Person Details', id: 'details' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Account Access', id: 'access' }
  ];
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Section */}
        <div className="bg-white p-4 shadow-md">
          <h2 className="font-bold text-xl mb-4">Required Actions</h2>
          <div className="border rounded-md p-4">
            <p className="text-gray-500">No data</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-4 shadow-md">
          <h2 className="font-bold text-xl mb-4">Most Used Services</h2>
          <div className="space-y-4">
            <a href="#" className="block p-4 border rounded-md hover:bg-gray-200">Amend Taxable Person Details</a>
            <a href="#" className="block p-4 border rounded-md hover:bg-gray-200">VAT - New Registration</a>
            <a href="#" className="block p-4 border rounded-md hover:bg-gray-200">Tax Group - New Registration</a>
          </div>
        </div>
      </div>
     {/* Tabs */}
     <div className="bg-white p-4 shadow-md">
          <div className="border-b">
            <nav className="-mb-px flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 border-b-2 ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } font-medium text-sm`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === 'overview' && (
              <div>
                <h3 className="font-bold text-lg mb-4">Registration Overview</h3>
                <table className="min-w-full bg-white border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="w-1/4 px-4 py-2 border">Registration Type</th>
                      <th className="w-1/4 px-4 py-2 border">Registration Status</th>
                      <th className="w-1/4 px-4 py-2 border">TRN/WHK No.</th>
                      <th className="w-1/4 px-4 py-2 border">GIBAN</th>
                      <th className="w-1/4 px-4 py-2 border">Effective Date of Registration</th>
                      <th className="w-1/4 px-4 py-2 border">Application Reference Number</th>
                      <th className="w-1/4 px-4 py-2 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Corporate Tax</td>
                      <td className="border px-4 py-2">In Review</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">101000418924</td>
                      <td className="border px-4 py-2">...</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Value Added Tax</td>
                      <td className="border px-4 py-2">Suspended</td>
                      <td className="border px-4 py-2">100012592000VG</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">30/12/0000</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">...</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">VAT Clearing Company - TINCO</td>
                      <td className="border px-4 py-2">Not Registered</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">...</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Excise Tax</td>
                      <td className="border px-4 py-2">Not Registered</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">...</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Warehouse Keeper</td>
                      <td className="border px-4 py-2">Not Registered</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">-</td>
                      <td className="border px-4 py-2">...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'details' && (
              <div>
                <h3 className="font-bold text-lg mb-4">Taxable Person Details</h3>
                <p>Details content goes here...</p>
              </div>
            )}
            {activeTab === 'certificates' && (
              <div>
                <h3 className="font-bold text-lg mb-4">Certificates</h3>
                <p>Certificates content goes here...</p>
              </div>
            )}
            {activeTab === 'access' && (
              <div>
                <h3 className="font-bold text-lg mb-4">Account Access</h3>
                <p>Account Access content goes here...</p>
              </div>
            )}
          </div>
        </div>
    </DashboardLayout>
  )
}

export default DashBoard