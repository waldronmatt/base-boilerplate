module.exports = {
  '!(*.{md,js,jsx,ts,tsx,css,scss})': [
    'prettier --cache --write --ignore-unknown',
  ],
  '*.md': ['markdownlint'],
  '*.{js,jsx,ts,tsx}': ['prettier --cache --write'],
  '*.{css,scss}': ['prettier --cache --write'],
  '*': ['secretlint'],
};
