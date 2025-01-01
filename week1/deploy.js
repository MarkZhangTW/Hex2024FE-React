const ghpages = require('gh-pages');

const distDir = './dist';

ghpages.publish(distDir, {
  add: true,
  dest: 'week1'
}, () => {
  console.log('Deploy completed!');
})
