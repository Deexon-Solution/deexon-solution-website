import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { fullName, email, phone, businessName, location, service, description } = data;
    if (!fullName || !email || !phone || !service || !description) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "Deexonsolution247@gmail.com",
        pass: "lfwg mdvc uslg owex"
      },
      family: 4,
      connectionTimeout: 1e4,
      greetingTimeout: 1e4,
      socketTimeout: 1e4
    });
    try {
      await transporter.verify();
      console.log("SMTP connection verified ");
    } catch (verifyError) {
      console.error("SMTP verification failed :", verifyError);
      return new Response(
        JSON.stringify({ error: "Email configuration error" }),
        { status: 500 }
      );
    }
    const mailOptions = {
      from: `"Deexon Website" <${"Deexonsolution247@gmail.com"}>`,
      to: "Deexonsolution247@gmail.com",
      subject: "New Consultation Request",
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `
    };
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully 📧");
    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
  } catch (error) {
    console.error("Email sending error ❌:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
