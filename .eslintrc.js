module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'prettier',
    'prettier/react'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  },
  plugins: [
    'react',
    'react-native'
]
}
