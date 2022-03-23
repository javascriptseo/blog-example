module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@connectors(.*)$': '<rootDir>/src/connectors$1',
    '^@screens(.*)$': '<rootDir>/src/screens$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@validation(.*)$': '<rootDir>/src/validation$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@context(.*)$': '<rootDir>/src/context$1',
    '^@queries(.*)$': '<rootDir>/src/queries$1',
    '^@data(.*)$': '<rootDir>/src/data$1',
    '^@typeDefs(.*)$': '<rootDir>/src/types$1',
    '^@generated(.*)$': '<rootDir>/src/generated$1',
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  clearMocks: true,
};