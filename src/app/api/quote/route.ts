import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, area, budget, description } = body;

    if (!name || !email || !phone || !description) {
      return NextResponse.json({ error: "Fyll i alla obligatoriska fält" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Serverfel" }, { status: 500 });
    }

    const emailHtml = `
      <h2>Ny offertförfrågan från byggforetag-i-stockholm.se</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px;font-weight:bold;width:140px;">Namn</td><td style="padding:10px;">${name}</td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px;font-weight:bold;">E-post</td><td style="padding:10px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px;font-weight:bold;">Telefon</td><td style="padding:10px;"><a href="tel:${phone}">${phone}</a></td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px;font-weight:bold;">Projekttyp</td><td style="padding:10px;">${service || "Ej angivet"}</td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px;font-weight:bold;">Område</td><td style="padding:10px;">${area || "Ej angivet"}</td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px;font-weight:bold;">Budget</td><td style="padding:10px;">${budget || "Ej angivet"}</td></tr>
        <tr><td style="padding:10px;font-weight:bold;vertical-align:top;">Beskrivning</td><td style="padding:10px;">${description}</td></tr>
      </table>
      <br/><p style="color:#666;font-size:12px;">Skickat via byggforetag-i-stockholm.se</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Offertförfrågan <noreply@byggforetag-i-stockholm.se>",
        to: ["offert@byggforetag-i-stockholm.se"],
        reply_to: email,
        subject: `Ny offert: ${service || "Byggprojekt"} – ${name}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Kunde inte skicka" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json({ error: "Serverfel" }, { status: 500 });
  }
}
