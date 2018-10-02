# walk-the-file

> Find first occurrence of a file in filedir.

## Install
```
npm i --save walk-the-file
```

## Usage
```js
const findFile = require('walk-the-file');

// first occurence of index.html is in public

findFile('./', 'index.html');
//=> 'public/index.html'

## API

### findFile(dirString, fileName)

#### dirString

Type: `string`

#### fileName

Type: `string`

## License

MIT © [Tyler Boright](https://github.com/ru-lai)
