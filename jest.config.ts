module.exports = {
  transform: {
    '^.+\\.ts$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
          },
          target: 'es2020',
        },
        module: {
          type: 'commonjs',
        },
      },
    ],
  },
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts', '**/?(*.)+(spec|test).ts'],
};
