const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a valid number
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... further logic to fetch user data, including error handling for non-existent user ...
  //Example of handling non existent user
  const user = users.find(user => user.id === parseInt(userId));
  if(!user){
    return res.status(404).json({ error: 'User not found' });
  }
  res.json({ id: userId });
});
const users = [{id:1, name: "John"}, {id:2, name: "Jane"}];
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});