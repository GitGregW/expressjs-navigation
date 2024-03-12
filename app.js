const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');
const path = require('path');
const express = require('express');
const app = express();

// Make the public directory publicly available (for css)
app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes);
app.use(usersRoutes);

app.listen(3000);