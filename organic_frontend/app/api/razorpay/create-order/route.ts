import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, currency = "INR", receipt = "receipt_" + Date.now() } = body;

    const keyId = "rzp_test_RTd9y3ngRanKxq";
    const keySecret = "bxH0R4Mbz5x3lC7XMWPezN4m";

    const basicAuth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Razorpay expects amount in subunits (paise)
        currency,
        receipt,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: data.error?.description || "Failed to create order" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      order: data,
      key: keyId,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
