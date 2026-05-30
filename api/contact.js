const AGENTMAIL_API_KEY = process.env.AGENTMAIL_API_KEY;
const INBOX = process.env.CONTACT_INBOX || "blackchicken121@agentmail.to";

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  try {
    const { name, phone, email, service, message } = req.body || {};
    if (!name || !phone) return res.status(400).json({ ok: false, error: 'Name and phone required' });

    const leadText = [
      `New Lead from rays-hvac-v2`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || '—'}`,
      `Service: ${service || '—'}`,
      `Message: ${message || '—'}`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `Timestamp: ${new Date().toISOString()}`
    ].join('\n');

    // Store in AgentMail inbox
    const agentResp = await fetch(`https://api.agentmail.to/v0/inboxes/${INBOX}/messages/send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AGENTMAIL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: [INBOX],
        subject: `Lead: ${name} - ${service || 'General'}`,
        text: leadText
      })
    });

    const result = await agentResp.json();

    // Try to forward to Gmail too
    let forwardStatus = 'skipped';
    if (AGENTMAIL_API_KEY) {
      try {
        const forwardResp = await fetch(`https://api.agentmail.to/v0/inboxes/${INBOX}/messages/send`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AGENTMAIL_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            to: ['getclients4u@gmail.com'],
            subject: `Lead from Ray's HVAC: ${name}`,
            text: leadText
          })
        });
        forwardStatus = forwardResp.ok ? 'sent' : `blocked (${forwardResp.status})`;
      } catch(e) {
        forwardStatus = `error: ${e.message}`;
      }
    }

    return res.status(200).json({
      ok: true,
      stored: result?.id ? true : false,
      forward: forwardStatus,
      lead: { name, phone, email, service }
    });
  } catch(err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
