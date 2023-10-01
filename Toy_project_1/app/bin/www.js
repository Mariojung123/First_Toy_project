'use strict';

const app = require('../app');
const PORT = 3000;

app.listen(PORT, () => {
  console.log('서버 가동');
});

// 'use strict';

// const app = require('../app');
// const PORT = 3000;
// const dbConfig = require(__dirname + '../vscdb.js');
// const conn = dbConfig.init();
// dbConfig.connect(conn);

// app.listen(PORT, () => {
//   console.log('서버 가동');
// });
