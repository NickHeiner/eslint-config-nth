/* eslint-disable no-magic-numbers */
module.exports = {
  parserOptions: {
    "ecmaVersion": 2019
  },
  rules: {
    'no-compare-neg-zero': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-alert': 'warn',
    'no-empty': 'error',
    'no-constant-condition': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'warn',
    'no-irregular-whitespace': 'error',
    'no-unsafe-finally': 'warn',
    curly: 'warn',
    'no-case-declarations': 'error',
    'no-else-return': 'warn',
    'no-implicit-coercion': 'error',
    'no-magic-numbers': [
      'warn',
      {
        ignoreArrayIndexes: true,
        ignore: [
          0,
          1,
          2
        ]
      }
    ],
    'no-use-before-define': 'error',
    'no-multi-spaces': 'warn',
    'no-param-reassign': 'warn',
    'no-return-assign': 'error',
    'no-return-await': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-useless-call': 'error',
    'no-useless-return': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'require-await': 'warn',
    'array-bracket-spacing': 'warn',
    'block-spacing': 'warn',
    'brace-style': 'warn',
    camelcase: 'warn',
    'comma-dangle': 'warn',
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    'func-call-spacing': 'warn',
    'id-blacklist': [
      'warn',
      'data',
      'temp',
      'tmp'
    ],
    indent: [
      'warn',
      2
    ],
    'jsx-quotes': 'warn',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'max-len': [
      'warn',
      120
    ],
    'no-lonely-if': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1
      }
    ],
    'no-unneeded-ternary': 'warn',
    'object-curly-spacing': 'warn',
    'operator-linebreak': 'warn',
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true
      }
    ],
    semi: [
      'warn',
      'always'
    ],
    'semi-spacing': 'warn',
    'space-before-blocks': 'warn',
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': 'warn',
    'template-tag-spacing': 'warn',
    'arrow-body-style': 'warn',
    'arrow-parens': [
      'warn',
      'as-needed'
    ],
    'arrow-spacing': 'warn',
    'generator-star-spacing': [
      'warn',
      {
        before: false,
        after: true
      }
    ],
    'no-class-assign': 'error',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'dot-notation': 'error',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'template-curly-spacing': 'warn',
    'no-duplicate-imports': 'error',
    'yield-star-spacing': [
      'warn',
      {
        before: false,
        after: true
      }
    ]
  }
};
