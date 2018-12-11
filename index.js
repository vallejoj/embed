import express from 'express';
import bp from 'body-parser';

import company from './routes/company';
import fake from './routes/fake';

const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./models');

app.use(bp.json());
app.use(express.static('public'));
company(app);
fake(app);

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`listening on port:${PORT}`);
});
