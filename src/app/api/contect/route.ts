import { sendContactFromEmail } from "@/lib/email-serviecs";
import { NextRequest, NextResponse } from "next/server";
import { any } from "zod";

interface ContactFromData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}


export async function POST(request: NextRequest) {
  try {
    const data: ContactFromData = await request.json();
    console.log("data", data);
    const result = await sendContactFromEmail(data);
    return NextResponse.json(
      {
        success: true,
        message: "mail send successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Failed to send mail" },
      { status: 500 }
    );
  }
}
