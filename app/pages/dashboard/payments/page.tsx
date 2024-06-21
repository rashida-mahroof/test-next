import DashboardLayout from "@/app/components/layouts/dashboard-layout/page";


const Payments = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        {/* Breadcrumb */}
        <div className="bg-white p-4 shadow-md">
          <h2 className="font-bold text-lg mb-4">Global Advocacy and Legal Counsel &gt; Payments</h2>
          <p>The FTA cannot guarantee accurate allocation of your payment if the correct reference number is not quoted while making GIBAN payment.</p>
        </div>

        {/* Outstanding Payments */}
        <div className="bg-white p-4 shadow-md">
          <h2 className="font-bold text-xl mb-4">My Outstanding Payments (GIBAN Allocations / Payments via EmaraTax)</h2>
          <div className="border rounded-md p-4">
            <h3 className="font-bold text-lg">Total VAT Payments Due</h3>
            <p>Total Outstanding Amount: <span className="text-red-600">AED 0.00</span></p>
            <p>Overdue Amount: <span className="text-red-600">AED 0.00</span></p>
            <a href="#" className="text-blue-600 underline">Transaction History</a>
            <div className="mt-4 flex space-x-4">
              <button className="bg-blue-500 text-white p-2 rounded">Select & Pay</button>
              <button className="bg-yellow-500 text-white p-2 rounded">Pay All</button>
            </div>
          </div>
        </div>

        {/* Funds Available */}
        <div className="bg-white p-4 shadow-md">
          <h2 className="font-bold text-xl mb-4">Funds Available</h2>
          <div className="border rounded-md p-4">
            <h3 className="font-bold text-lg">Funds Available on Account - VAT</h3>
            <p>AED <span className="text-red-600">0.00</span></p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white p-2 rounded">View All</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payments;
