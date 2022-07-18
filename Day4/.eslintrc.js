// module.exports =
// {
//     "rules":
//     {
//       "semi" :[
//         "error",
//         "always"
//       ]
//     }
// }

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended' , 'plugin:prettier/recommended'],
  // rules: {
  //   semi: ['error', 'never'],
  // },
  env: {
    browser: true,
  },
}
// rules
// config
// plugins
