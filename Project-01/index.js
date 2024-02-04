const express = require("express");
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();
const PORT = 8090;

// Using Middleware to parse url-encoded data
app.use(express.urlencoded({ extended: false }));

// Display all user first names
app.get('/users', (request, response) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>`;

    response.send(html);
});

// Display all user information
app.get('/api/users', (request, response) => {
    return response.json(users);
});

// Display single user information
app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const updatedData = req.body;

        // TODO: Implement the logic to update the user with the given id
        const index = users.findIndex((user) => user.id === id);

        if (index !== -1) {
            users[index] = { ...users[index], ...updatedData };
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
                if (err) {
                    console.error('Error writing to JSON file:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                return res.json({ status: "success", message: 'User updated successfully' });
            });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    })
    .delete((req, res) => {
        const id = Number(req.params.id);

        // TODO: Implement the logic to delete the user with the given id
        const index = users.findIndex((user) => user.id === id);

        if (index !== -1) {
            users.splice(index, 1);
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
                if (err) {
                    console.error('Error writing to JSON file:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                return res.json({ status: "success", message: 'User deleted successfully' });
            });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    });

// Create a new user
app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            console.error('Error writing to JSON file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json({ status: "success", id: users.length });
    });
});

app.listen(PORT, () => console.log(`Server Started at Port : ${PORT}`));
