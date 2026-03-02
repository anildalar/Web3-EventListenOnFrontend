'use client'

import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Page() {

  const [amount, setAmount] = useState<number>(100);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const recharge = async () => {
  try {
    setLoading(true);

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    });

    const data = await res.json();

    if (!data.url) {
      throw new Error("Unable to create checkout session");
    }

    // Stripe 2025+ method
    //redirect the page on data.url
    //window.location.href = "https://google.com"
    window.location.href = data.url;

  } catch (err: any) {
    console.error(err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container">
      <form
        className="w-25 offset-3 mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          recharge();
        }}
      >
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="form-control"
        />

        <button
          type="submit"
          disabled={loading}
          className="btn w-100 btn-success mt-4"
        >
          {loading ? "Processing..." : "Recharge Now"}
        </button>

        {error && (
          <div className="text-danger mt-3">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}