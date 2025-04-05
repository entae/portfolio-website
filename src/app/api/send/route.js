// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  // try {
  //   const data = await resend.emails.send({
  //     from: fromEmail,
  //     to: ["intae98@hotmail.com"],
  //     subject: "Hello world",
  //     react: (
  //       <>
  //       <p>Email Body</p></>
  //     )
  //   });
  //   return NextResponse.json(data);
  // } catch (error) {
  //   return NextResponse.json({ error });
  // }
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    console.log("Sending email with:", {email, subject, message});

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      console.log("Resend API Error:", error);
      return NextResponse.json({ error: error.message || error  }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error.message || error },
      { status: 500 }
    );
  }
}
