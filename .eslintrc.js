module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0,
    // 'no-console': 0,
    'no-undef': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  "globals": {
    "$": true,
    "_": true,
    "api": true,
    "msg": true
  }
}