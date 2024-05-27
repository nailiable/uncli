<div align="center">
  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><g fill="#db2777"><path d="M208 76a28 28 0 0 1-28 28h-28V76a28 28 0 0 1 28-28a28 28 0 0 1 28 28M76 48a28 28 0 0 0-28 28a28 28 0 0 0 28 28h28V76a28 28 0 0 0-28-28m104 104h-28v28a28 28 0 0 0 28 28a28 28 0 0 0 28-28a28 28 0 0 0-28-28M48 180a28 28 0 0 0 28 28a28 28 0 0 0 28-28v-28H76a28 28 0 0 0-28 28" opacity=".2"/><path d="M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40"/></g></svg>
  <h1>uncli</h1>
  <p>Try to make a web page to managing all frontend project configurations.</p>
</div>

Try to make a simple command: just run `uncli` in the project root directory, and then you can manage all the configurations of the project through the web page.

## Features

- [x] **Plugin System**
- [x] **Command Line Interface**
- [x] **Web Interface**

## Integration

- [x] **package.json management**
- [ ] **uncli.json management**
- [ ] **.gitignore management**
- [ ] **.npmignore management**
- [ ] **.editorconfig management**
- [ ] **.eslintrc management**
- [ ] **.prettierrc management**
- [ ] **.stylelintrc management**
- [ ] **.browserslistrc management**
- [ ] **.babelrc management**
- [ ] **tsconfig.json management**
- [ ] **.env management**

## Problem

Now, although there are tools like `c12` that can easily read `xx.config.js` / `xx.config.ts` configuration, but there is no good tool to programmatically edit these configuration files. So currently, we can only do `json` / `yaml` configuration files, but these configuration files are not as flexible as `js` / `ts` configuration files.
