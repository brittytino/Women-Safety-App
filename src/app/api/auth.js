import { connectToDatabase } from "../../../utils/mongodb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { email, password } = req.body;

  const { db } = await connectToDatabase();

  const user = await db.collection("users").find({ email });
  if (!user) {
    return res.status(401).json({ success: false });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ success: false });
  }

  res.status(200).json({ success: true });
}
