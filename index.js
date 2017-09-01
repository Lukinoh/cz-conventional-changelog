"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('./types.json');

module.exports = engine({
  types: conventionalCommitTypes.types
});
