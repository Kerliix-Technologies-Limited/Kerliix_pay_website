import React from "react";
import { useSearchParams } from "react-router-dom";

const planData = {
  free: { name: "Free", price: 0 },
  developer: { name: "Developer", price: 5 },
  pro: { name: "Pro", price: 15 },
  enterprise: { name: "Enterprise", price: 99 },
};

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const planKey = searchParams.get("plan")?.toLowerCase();
  const selectedPlan = planData[planKey];

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <p className="text-red-600 font-semibold text-lg">
          Invalid plan selected. Please go back and choose a valid plan.
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-purple-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-700 mb-2 text-center">
          Checkout - {selectedPlan.name} Plan
        </h2>
        <p className="text-center text-gray-600 mb-6 text-lg">
          Total: <span className="font-semibold text-orange-500">${selectedPlan.price}</span>
        </p>
        <form className="space-y-4">
          <input className="w-full p-2 border rounded-lg" type="text" placeholder="Full Name" required />
          <input className="w-full p-2 border rounded-lg" type="email" placeholder="Email" required />
          <input className="w-full p-2 border rounded-lg" type="text" placeholder="Card Number" required />
          <input className="w-full p-2 border rounded-lg" type="text" placeholder="Expiry Date (MM/YY)" required />
          <input className="w-full p-2 border rounded-lg" type="text" placeholder="CVC" required />
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
            Complete Payment
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">Powered by KaliiPay</p>
      </div>
    </section>
  );
}
