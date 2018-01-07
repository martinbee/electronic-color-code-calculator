module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/require-default-props": 0,
    "spaced-comment": 0,
    "no-console": 0
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "jest"
  ],
  "parser": "babel-eslint",
};
