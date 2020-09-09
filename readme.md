# Web Component Compiler

A NodeJS Based web component maker that takes a simple input script and outputs full HTML documents

### [Article](https://oddscenes.com/blog/component-compiler)

&nbsp;&nbsp;

<img src="https://oddscenes.s3.amazonaws.com/covers/component-compiler.png" width="500" />

&nbsp;&nbsp;

### Write Input Script
- Location: `/build/input.odd`

### Assets
- Logo: `/build/logo.svg`
- Hero Graphic: `/build/hero.svg`
- Info Graphic: `/build/info.svg`

### Output
- Directory: `/dist`

### Usage
- Compile: `node index.js`

### Dependencies
- NodeJS

## Layout Syntax
- No indentation
- `Element` = `Content`
- Multiple inputs separated by commas

## Supported Components
1. **title** = `My Page Title`
2. **banner** = `Banner Text`
3. **nav** = `item1`, `item2`, `item3`, `item4`, `(Button Text)`
4. **hero** = `Intro Text`, `(Button Text)`
5. **info** = `Info Headline`, `Info Subheadline`
6. **description** = `Info Text`
7. **footer** = `Contact Email`
