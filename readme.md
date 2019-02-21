# ⌗ react-json-to-csv
A react button component to easily generate csv downloads of your json data. ✨

[![npm package version](https://badge.fury.io/js/react-json-to-csv.svg)](https://www.npmjs.com/package/react-json-to-csv)&nbsp;
[![npm downloads](https://img.shields.io/npm/dm/react-json-to-csv.svg)](https://www.npmjs.com/package/react-json-to-csv)&nbsp;
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

## Live Demo 
[https://react-json-to-csv.coston.io](https://react-json-to-csv.coston.io)

## Features
- Create a csv download from json data
- Lightweight
- Easy to use
- optional filename

## Install

Install with npm:
```sh
npm i react-json-to-csv
```
Or load from a CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/react-json-to-csv"></script>
```

## Example Usage
```jsx
import CsvDownload from 'react-json-to-csv'
...

<CsvDownload data={mockData} />
```

## Props

| Prop      | Type      | Requirement     | Default | Description                                         |
| --------- | --------- | ------------ | ------- | --------------------------------------------------- |
| data     | `object`  | `required` | `null`  | object or array of objects             |
| filename| `string`  | `optional` | "export.csv"  | The complete filename          |

## Contributing

Please help provide good data faster! Submit any issues and/or make a pull request!