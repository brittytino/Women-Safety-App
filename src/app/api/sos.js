export default function handler(req, res) {
  // Implement the SOS logic here (e.g., send SMS, email, etc.)
  console.log("SOS triggered");
  res.status(200).json({ success: true });
}
