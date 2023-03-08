# Refactoring 2nd edition tutorial source codes

### Technologies
- [JDK 11](https://openjdk.java.net/projects/jdk/11/)
- [NODE]()
- [JavaScript]()

## Build & Run

You need to download node first!

```
node init
npm install --save-dev mocha chai babel-register babel-preset-es201
```

Open up package.json and set your test script to the following:
"scripts": { "test": "mocha --watch --recursive --require babel-core/register" },
Create a .babelrc file in the project directory:
```
{
  "presets": ["es2015"]
}
```

## Run tests
Project consist of lost of module so dont try to run "npm run test" in root directory in project instead of this Try with js file name.
Example  
```
npm run test .\test\chapter06\content01\printOwingV04Final.test.js
```

In the root directory of your project, run the following commands:
```
npm run test
```