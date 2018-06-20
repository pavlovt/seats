module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  "rules": {
  	'no-unused-vars': 0,
  },
  "globals": {
    "$": true,
    "_": true,
    "api": true,
    "msg": true
  }
}