import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin'; // eslint-disable-line import/no-unresolved
import typescriptParser from '@typescript-eslint/parser'; // eslint-disable-line import/no-unresolved
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import promisePlugin from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import securityPlugin from 'eslint-plugin-security';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import unicornPlugin from 'eslint-plugin-unicorn';
import globals from 'globals';

const baseRules = {
  'no-compare-neg-zero': 'error',
  'no-console': 'warn',
  'no-debugger': 'warn',
  'no-alert': 'warn',
  'no-empty': 'error',
  'no-constant-condition': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-semi': 'warn',
  'no-irregular-whitespace': 'error',
  'no-undef': 'error',
  'no-unsafe-finally': 'warn',
  curly: 'warn',
  'no-case-declarations': 'error',
  'no-else-return': 'warn',
  'no-implicit-coercion': 'error',
  'no-magic-numbers': [
    'warn',
    {
      ignoreArrayIndexes: true,
      ignore: [0, 1, 2]
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
  'id-denylist': ['warn', 'data', 'temp', 'tmp'],
  indent: ['warn', 2],
  'jsx-quotes': 'warn',
  'key-spacing': 'warn',
  'keyword-spacing': 'warn',
  'max-len': ['warn', 120], // eslint-disable-line no-magic-numbers
  'no-lonely-if': 'warn',
  'no-multiple-empty-lines': ['warn', { max: 1 }],
  'no-unneeded-ternary': 'warn',
  'object-curly-spacing': 'warn',
  'operator-linebreak': 'warn',
  'quote-props': ['error', 'as-needed'],
  quotes: ['warn', 'single', { avoidEscape: true }],
  semi: ['warn', 'always'],
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
  'arrow-parens': ['warn', 'as-needed'],
  'arrow-spacing': 'warn',
  'generator-star-spacing': ['warn', { before: false, after: true }],
  'no-class-assign': 'error',
  'no-var': 'error',
  'object-shorthand': 'warn',
  'dot-notation': 'error',
  'no-unused-vars': ['warn', { args: 'after-used' }],
  'prefer-const': 'warn',
  'prefer-rest-params': 'warn',
  'prefer-spread': 'warn',
  'prefer-template': 'warn',
  'template-curly-spacing': 'warn',
  'no-duplicate-imports': 'error',
  'yield-star-spacing': ['warn', { before: false, after: true }]
};

const modernRules = {
  'promise/always-return': 'warn',
  'promise/catch-or-return': 'warn',
  'promise/param-names': 'error',
  'promise/no-nesting': 'warn',
  'unicorn/better-regex': 'warn',
  'unicorn/catch-error-name': 'warn',
  'unicorn/consistent-function-scoping': 'warn',
  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'warn',
  'unicorn/explicit-length-check': 'warn',
  'unicorn/new-for-builtins': 'error',
  'unicorn/no-array-callback-reference': 'warn',
  'unicorn/no-array-for-each': 'warn',
  'unicorn/no-array-push-push': 'warn',
  'unicorn/no-console-spaces': 'warn',
  'unicorn/no-for-loop': 'warn',
  'unicorn/no-lonely-if': 'warn',
  'unicorn/no-new-array': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/no-null': 'off',
  'unicorn/no-process-exit': 'error',
  'unicorn/no-useless-undefined': 'warn',
  'unicorn/no-zero-fractions': 'warn',
  'unicorn/number-literal-case': 'warn',
  'unicorn/prefer-array-find': 'warn',
  'unicorn/prefer-array-flat': 'warn',
  'unicorn/prefer-array-flat-map': 'warn',
  'unicorn/prefer-array-some': 'warn',
  'unicorn/prefer-date-now': 'warn',
  'unicorn/prefer-default-parameters': 'warn',
  'unicorn/prefer-includes': 'warn',
  'unicorn/prefer-modern-dom-apis': 'warn',
  'unicorn/prefer-negative-index': 'warn',
  'unicorn/prefer-number-properties': 'warn',
  'unicorn/prefer-optional-catch-binding': 'warn',
  'unicorn/prefer-regexp-test': 'warn',
  'unicorn/prefer-set-has': 'warn',
  'unicorn/prefer-spread': 'warn',
  'unicorn/prefer-string-slice': 'warn',
  'unicorn/prefer-string-starts-ends-with': 'warn',
  'unicorn/prefer-string-trim-start-end': 'warn',
  'unicorn/prefer-ternary': 'warn',
  'unicorn/prefer-type-error': 'error',
  'unicorn/throw-new-error': 'error',
  'sonarjs/no-duplicated-branches': 'warn',
  'sonarjs/no-identical-functions': 'warn',
  'sonarjs/no-inverted-boolean-check': 'warn',
  'sonarjs/no-redundant-boolean': 'warn',
  'sonarjs/no-redundant-jump': 'warn',
  'sonarjs/no-same-line-conditional': 'warn',
  'sonarjs/no-unused-collection': 'warn',
  'sonarjs/prefer-immediate-return': 'warn',
  'sonarjs/prefer-single-boolean-return': 'warn',
  'security/detect-buffer-noassert': 'warn',
  'security/detect-child-process': 'warn',
  'security/detect-disable-mustache-escape': 'warn',
  'security/detect-eval-with-expression': 'warn',
  'security/detect-new-buffer': 'warn',
  'security/detect-no-csrf-before-method-override': 'warn',
  'security/detect-non-literal-fs-filename': 'warn',
  'security/detect-non-literal-regexp': 'warn',
  'security/detect-non-literal-require': 'warn',
  'security/detect-object-injection': 'off',
  'security/detect-possible-timing-attacks': 'warn',
  'security/detect-pseudoRandomBytes': 'warn',
  'security/detect-unsafe-regex': 'warn'
};

const reactRules = {
  'react/jsx-boolean-value': 'warn',
  'react/jsx-closing-bracket-location': 'warn',
  'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
  'react/jsx-fragments': ['warn', 'syntax'],
  'react/jsx-handler-names': 'warn',
  'react/jsx-key': 'error',
  'react/jsx-no-bind': ['warn', { ignoreRefs: true, allowArrowFunctions: true }],
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-target-blank': 'error',
  'react/jsx-no-undef': 'error',
  'react/jsx-no-useless-fragment': 'warn',
  'react/jsx-pascal-case': 'warn',
  'react/jsx-sort-props': ['warn', { callbacksLast: true, shorthandFirst: true }],
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
  'react/no-array-index-key': 'warn',
  'react/no-children-prop': 'error',
  'react/no-danger-with-children': 'error',
  'react/no-deprecated': 'warn',
  'react/no-direct-mutation-state': 'error',
  'react/no-find-dom-node': 'error',
  'react/no-is-mounted': 'error',
  'react/no-render-return-value': 'error',
  'react/no-string-refs': 'error',
  'react/no-unescaped-entities': 'warn',
  'react/no-unknown-property': 'error',
  'react/no-unsafe': 'warn',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-render-return': 'error',
  'react/self-closing-comp': 'warn',
  'react/sort-comp': 'warn',
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn'
};

const importRules = {
  'import/default': 'error',
  'import/export': 'error',
  'import/first': 'warn',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/newline-after-import': 'warn',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': 'warn',
  'import/no-commonjs': 'off',
  'import/no-cycle': 'error',
  'import/no-deprecated': 'warn',
  'import/no-duplicates': 'error',
  'import/no-dynamic-require': 'warn',
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'warn',
  'import/no-named-as-default-member': 'warn',
  'import/no-named-default': 'warn',
  'import/no-self-import': 'error',
  'import/no-unresolved': 'error',
  'import/no-useless-path-segments': 'warn',
  'import/no-webpack-loader-syntax': 'error',
  'import/order': [
    'warn',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
      alphabetize: { order: 'asc' }
    }
  ]
};

const typescriptRules = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': 'warn',
  // '@typescript-eslint/ban-types': 'error', // Deprecated in v8
  '@typescript-eslint/consistent-type-assertions': 'warn',
  '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
  '@typescript-eslint/consistent-type-imports': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  // '@typescript-eslint/member-delimiter-style': 'warn', // Deprecated/moved to stylistic
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-empty-function': 'warn',
  '@typescript-eslint/no-empty-interface': 'warn',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-extra-non-null-assertion': 'warn',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-inferrable-types': 'warn',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
  '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
  '@typescript-eslint/no-unsafe-assignment': 'warn',
  '@typescript-eslint/no-unsafe-call': 'warn',
  '@typescript-eslint/no-unsafe-member-access': 'warn',
  '@typescript-eslint/no-unsafe-return': 'warn',
  '@typescript-eslint/no-unused-vars': ['warn', { args: 'after-used' }],
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-as-const': 'warn',
  '@typescript-eslint/prefer-for-of': 'warn',
  '@typescript-eslint/prefer-function-type': 'warn',
  '@typescript-eslint/prefer-includes': 'warn',
  '@typescript-eslint/prefer-namespace-keyword': 'warn',
  '@typescript-eslint/prefer-nullish-coalescing': 'warn',
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/prefer-readonly': 'warn',
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/require-array-sort-compare': 'warn',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/restrict-template-expressions': 'warn',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/unbound-method': 'error'
};

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/coverage/**',
      '**/.turbo/**',
      '**/.cache/**',
      '**/public/**',
      '**/*.min.js',
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.cjs',
      '**/vendor/**'
    ]
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
      promise: promisePlugin,
      unicorn: unicornPlugin,
      sonarjs: sonarjsPlugin,
      security: securityPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...baseRules,
      ...modernRules,
      ...reactRules,
      ...importRules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...prettierConfig.rules
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs']
        }
      }
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        project: true,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin
    },
    rules: {
      ...typescriptRules,
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off'
    }
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    rules: {
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'security/detect-object-injection': 'off'
    }
  }
];

export const createConfig = (overrides = {}) => {
  const configs = [
    {
      ignores: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/.next/**',
        '**/coverage/**',
        '**/.turbo/**',
        '**/.cache/**',
        '**/public/**',
        '**/*.min.js',
        '**/*.config.js',
        '**/*.config.mjs',
        '**/*.config.cjs',
        '**/vendor/**'
      ]
    },
    {
      files: ['**/*.{js,jsx,mjs,cjs}'],
      languageOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2024
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      plugins: {
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
        'jsx-a11y': jsxA11yPlugin,
        import: importPlugin,
        promise: promisePlugin,
        unicorn: unicornPlugin,
        sonarjs: sonarjsPlugin,
        security: securityPlugin
      },
      rules: {
        ...js.configs.recommended.rules,
        ...baseRules,
        ...modernRules,
        ...reactRules,
        ...importRules,
        ...jsxA11yPlugin.configs.recommended.rules,
        ...prettierConfig.rules,
        ...overrides.rules
      },
      settings: {
        react: {
          version: 'detect'
        },
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs']
          }
        }
      }
    },
    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        parser: typescriptParser,
        parserOptions: {
          ecmaVersion: 2024,
          sourceType: 'module',
          project: true,
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      plugins: {
        '@typescript-eslint': typescriptPlugin
      },
      rules: {
        ...typescriptRules,
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off'
      }
    },
    {
      files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
      languageOptions: {
        globals: {
          ...globals.jest
        }
      },
      rules: {
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'security/detect-object-injection': 'off'
      }
    }
  ];

  if (overrides.extends) {
    configs.push(...overrides.extends);
  }

  return configs;
};