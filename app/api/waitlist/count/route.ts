// app/api/waitlist/count/route.ts
import { NextResponse } from "next/server";
import { getWaitlistCount } from "@/lib/supabase/waitlist";

export async function GET() {
  try {
    const count = await getWaitlistCount();

    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch waitlist count:", error);
    return NextResponse.json(
      { error: "Failed to fetch waitlist count" },
      { status: 500 }
    );
  }
}
