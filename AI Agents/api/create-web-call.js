export default async function handler(req, res) {
  const response = await fetch("https://api.retellai.com/v1/create-web-call", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RETELL_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      agent_id: "agent_1bfa4aa9ab1a71f76d3d38f56c"
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
