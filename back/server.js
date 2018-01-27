const fastify = require('fastify')();
const cors = require('cors');

const { mongoose } = require('./db/mongoose');
const { Task } = require('./models/task');

fastify.use(cors());

fastify.get('/tasks', async (req, res) => {
  Task.find().then((todos) => {
    res.send(todos);
  })
    .catch(e => res.send('An error occured', e));
});

fastify.post('/tasks', async (req, res) => {
  const task = new Task({
    title: req.body.title,
  });

  task.save().then((response) => {
    res.code(201).send(response);
  }, (e) => {
    console.log(e);
  });
});


fastify.listen(4000, (err) => {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});
