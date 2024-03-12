const indexRoutes = require('./routes/index');
const path = require('path');
const express = require('express');
const app = express();

// Make the public directory publicly available (for css)
app.use(express.static(path.join(__dirname, 'public')));
app.use(indexRoutes);

app.listen(3000);