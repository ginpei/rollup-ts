import express from 'express';
import { getName } from '../../models/Account';

const app = express();

app.get('/', (req, res) => {
  res.json(getName);
});

const port = 3000;
app.listen(port, () => process.stdout.write(`http://localhost:${port}\n`));
