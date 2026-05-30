// Ray's HVAC v2 - Lead Capture API
// Uses AgentMail for lead storage

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  try {
    const { name, phone, email, service, message } = req.body || {};
    if (!name || !phone) return res.status(400).json({ ok: false, error: 'Name and phone required' });

    const AGENTMAIL_API_KEY = process.env.AGENTMAIL_API_KEY || "am_us_pod_6f05b873d33c7df1510aa84725fa71c5ed0a9a1403294fa2502a7c0ec0974451";
    const INBOX = process.env.CONTACT_INBOX || "blackchicken121@agentmail.to";

    const leadText = [
      `New Lead from rays-hvac-llc.com`,
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
        subject: `New Lead: ${name} - ${service || 'General'}`,
        text: leadText
      })
    });

    const result = await agentResp.json();
    const stored = result?.message_id ? true : false;

    // Try to forward to Gmail
    let forwardStatus = 'skipped';
    try {
      const fwdResp = await fetch(`https://api.agentmail.to/v0/inboxes/${INBOX}/messages/send`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AGENTMAIL_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: ['getclients4u@gmail.com'],
          subject: `Ray's HVAC Lead: ${name}`,
          text: leadText
        })
      });
      forwardStatus = fwdResp.ok ? 'sent' : `blocked (${fwdResp.status})`;
    } catch(fwdErr) {
      forwardStatus = `error: ${fwdErr.message}`;
    }

    return res.status(200).json({ ok: true, stored, forward: forwardStatus });
  } catch(err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
