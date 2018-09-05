const express = require('express');
const apiRoutes = require('./app/routing/api');
const viewRoutes = require('./app/routing/views');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(apiRoutes);
app.use(viewRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));