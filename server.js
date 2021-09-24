require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync DB');
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome' });
})

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/item.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
