import Stripe from "stripe";
import { NextResponse } from "next/server";


// let ceo1 = new ClassName(AA);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Recharge Wallet",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/failed`,
    });

    //return NextResponse.json({ id: session.id });
    return NextResponse.json({ url: session.url });

  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}