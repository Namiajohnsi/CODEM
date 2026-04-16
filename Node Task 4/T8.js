const express = require('express');
const app = express();

const users = [
    { username: "sai", email: "sai@mail.com", role: "student" }
];

app.get('/users/:username', (req, res) => {
    console.log("User requested:", req.params.username);

    const user = users.find(u => u.username === req.params.username);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
});

app.listen(3000);