export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const { userId, reason } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Missing userId" });
  }

  // Сохраняем бан в файле / базе
  res.status(200).json({ ok: true, banned: userId, reason });
}