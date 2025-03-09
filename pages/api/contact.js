import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Utilise Gmail ou ton propre SMTP
      auth: {
        user: process.env.EMAIL_USER, // Ton email
        pass: process.env.EMAIL_PASS, // Ton mot de passe ou app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // Ton adresse email de réception
      subject: "Nouveau message de contact",
      text: message,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ message: "Message envoyé avec succès !" });
  } catch (error) {
    return res.status(500).json({ message: "Erreur lors de l'envoi" });
  }
}
