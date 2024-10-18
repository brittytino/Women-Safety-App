export default function handler(req, res) {
  const guidelines = [
    "Always be aware of your surroundings.",
    "Trust your instincts and act on them.",
    "Avoid walking alone at night.",
    "Keep your phone charged and accessible.",
  ];

  res.status(200).json(guidelines);
}
