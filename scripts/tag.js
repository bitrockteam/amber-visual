const gitTag = require('git-tag')();
const pkg = require('./../package.json');
const vers = `v${pkg.version}`;

gitTag.create(vers, vers, (err, res) => {
  console.log(err, res) 
});
