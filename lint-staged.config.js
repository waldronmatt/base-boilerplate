const ymlConfig = require('@waldronmatt/lint-staged-config/yml');

module.exports = {
  '*': ['secretlint'],
  '**/*': ['prettier --cache --write --ignore-unknown'],
  '*.md': ['markdownlint'],
  ...ymlConfig,
};
