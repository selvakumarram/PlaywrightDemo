# PlaywrightDemo

#Installation:
cd mkdir demoProject
npm init --y

##Install devDependencies:
npm install @types/jest --dev-save
npm install jest --dev-save
npm install jest-playwright-preset --dev-save
npm install playwright --dev-save
npm install typescript --dev-save
npm install ts-jest --dev-save

##Jest Configurations:
"jest": {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "testTimeout": 120000
  }
