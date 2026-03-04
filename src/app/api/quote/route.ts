import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { namn, email, telefon, kategori, beskrivning } = body

    await resend.emails.send({
      from: 'Alljuridik.se <noreply@alljuridik.se>',
      to: 'info@alljuridik.se',
      subject: `Nytt juridiskt ärende – ${kategori}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #001F3F; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 20px;">⚖️ Nytt ärende – Alljuridik.se</h1>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Namn:</td>
                <td style="padding: 8px 0; color: #111827;">${namn}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">E-post:</td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Telefon:</td>
                <td style="padding: 8px 0; color: #111827;">${telefon || 'Ej angivet'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Kategori:</td>
                <td style="padding: 8px 0;">
                  <span style="background: rgba(212,175,55,0.15); color: #C9A96E; padding: 2px 10px; border-radius: 20px; font-size: 13px;">${kategori}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Ärende:</td>
                <td style="padding: 8px 0; color: #111827; line-height: 1.6;">${beskrivning}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: white; border-left: 4px solid #D4AF37; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #6b7280;">Svara inom 24 h enligt Alljuridik.se's löfte till kunden.</p>
            </div>
          </div>
          <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 16px;">
            © Alljuridik.se 2026 – Automatiskt genererat meddelande
          </p>
        </div>
      `,
    })

    // Auto-reply to customer
    await resend.emails.send({
      from: 'Alljuridik.se <noreply@alljuridik.se>',
      to: email,
      subject: 'Vi har mottagit ditt ärende – svar inom 24 h',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #001F3F; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 20px;">⚖️ Alljuridik.se</h1>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <h2 style="color: #001F3F; margin-top: 0;">Hej ${namn}!</h2>
            <p style="color: #374151; line-height: 1.6;">
              Vi har mottagit ditt ärende och arbetar nu med att hitta rätt jurist för dig.
            </p>
            <div style="background: white; border-radius: 8px; padding: 16px; margin: 20px 0; border: 1px solid #e5e7eb;">
              <h3 style="color: #001F3F; margin-top: 0; font-size: 15px;">Nästa steg:</h3>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <p style="margin: 0; color: #374151;">✅ <strong>Steg 1:</strong> Vi granskar ditt ärende (inom 2-4 timmar)</p>
                <p style="margin: 0; color: #374151;">✅ <strong>Steg 2:</strong> Vi matchar dig med en specialist inom ${kategori}</p>
                <p style="margin: 0; color: #374151;">✅ <strong>Steg 3:</strong> Juristen kontaktar dig inom 24 h</p>
              </div>
            </div>
            <p style="color: #6b7280; font-size: 13px;">
              Har du frågor? Kontakta oss på <a href="mailto:info@alljuridik.se" style="color: #D4AF37;">info@alljuridik.se</a>
            </p>
          </div>
          <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 16px;">
            © Alljuridik.se 2026 · <a href="https://www.alljuridik.se/integritetspolicy" style="color: #9ca3af;">Integritetspolicy</a>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
