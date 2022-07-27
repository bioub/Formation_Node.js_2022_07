const { EventEmitter } = require('events')

const events = new EventEmitter();

events.on('user.created', (user) => {
  console.log('on', user);
});

events.once('user.created', (user) => {
  console.log('once', user);
});

events.emit('user.created', {username: 'romain'});
events.emit('user.created', {username: 'toto'});
