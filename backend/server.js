const app = require('./app');
const { port } = require('./config/env');

app.listen(port, () => {
  console.log(`QS360KE API listening on http://localhost:${port}`);
});
