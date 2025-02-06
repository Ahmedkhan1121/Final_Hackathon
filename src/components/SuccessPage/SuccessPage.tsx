'use client'
import { useRouter } from 'next/navigation';
// // import { useEffect } from 'react';
import { FcPaid } from 'react-icons/fc'
// import { fireWorks } from '@/utils/coffetti';
function SuccessPage() {
  const homeNavig = useRouter();
//   useEffect(() => {
//     fireWorks();
//   },[]);
  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-200 to-slate-300">
    <div className="bg-white shadow-xl rounded-2xl flex flex-col items-center gap-4 p-6 text-center w-[90%] max-w-md transition-all duration-300 animate-fadeIn">
      <FcPaid className="text-8xl animate-bounce" />
      <h1 className="text-3xl font-bold text-gray-800">Thank You for Your Purchase!</h1>
      <p className="text-gray-600 text-sm leading-relaxed">
        🎊 Your order has been successfully placed, and we’re getting it ready for shipment.
      </p>
      <h4 className="text-gray-500 text-sm">📩 Need Help? Contact us at [Support Email]</h4>
      <h5 className="text-gray-500 text-sm">
        We appreciate your trust in us and look forward to serving you again! 😊
      </h5>
      <button
        className="mt-4 px-5 py-3 text-white bg-blue-500 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        onClick={() => homeNavig.push("/generatetracking")}
      >
        Generate Tracking Number
      </button>
    </div>
  </section>
  )
}

export default SuccessPage