const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const { createUsersTable, createProductsTable } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Create tables if they don't exist
createUsersTable();
createProductsTable();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
