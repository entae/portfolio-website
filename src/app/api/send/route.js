// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'ITC Portfolio <onboarding@resend.dev>',
//       to: ['delivered@resend.dev'],
//       subject: 'Hello world',
//       // react: EmailTemplate({ firstName: 'John' }),
//       react: <><p>Email Body</p></>
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }