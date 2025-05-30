import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

dotenv.config();
const prerender = false;
const POST = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");
  const phone = form.get("phone");
  const company = form.get("company");
  const message = form.get("message");
  const service = form.get("service");
  const hearAbout = form.get("hear-about");
  form.get("interest");
  const terms = form.get("terms");
  const termsChecked = terms === "on";
  const termsCheckedString = termsChecked ? "Sí" : "No";
  const recaptchaToken = form.get("g-recaptcha-response");
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secretKey}&response=${recaptchaToken}`
  });
  const verifyData = await verifyRes.json();
  if (!verifyData.success) {
    return new Response(JSON.stringify({ success: false, error: "Captcha inválido" }), { status: 400 });
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      // Tu correo de Google Workspace
      pass: process.env.GMAIL_PASS
      // App Password de Google
    }
  });
  try {
    await transporter.sendMail({
      from: `Web Codevsys <${email}>`,
      to: process.env.GMAIL_USER,
      // Destino: tu propio correo
      subject: `Nuevo contacto desde la web Codevsys: ${service}`,
      text: `Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Compañía: ${company}
 Servicio: ${service}
Mensaje: ${message}
¿Cómo nos enteraste?: ${hearAbout}
Terminos y Condiciones: ${termsCheckedString}`
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: String(error) }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
