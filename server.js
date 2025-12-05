import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ status: "API is running" });
});

// Example endpoint:
app.post("/unban", (req, res) => {
	const { userId } = req.body;

	if (!userId) return res.status(400).json({ error: "Missing userId" });

	return res.json({
		ok: true,
		message: `User ${userId} unbanned (example endpoint)`
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API running on port " + PORT));
