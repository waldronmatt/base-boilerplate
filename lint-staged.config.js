module.exports = {
  '*': ['secretlint'],
  '*.{yml,yaml}': ['prettier --cache --write', 'yamllint --strict .'],
  '.github/workflows/*.{yml,yaml}': ['actionlint'],
  '*.md': ['prettier --cache --write', 'markdownlint'],
  '**/*': ['prettier --cache --write --ignore-unknown'],
};
