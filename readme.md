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
<script src="https://cdn.jsdelivr.net/npm/react-json-to-csv" />
```

## Example Usage

```jsx
import CsvDownloadButton from 'react-json-to-csv'
...

<CsvDownloadButton data={mockData} />
```

## Props

| #   | Property  | Type       | Requirement | Default                   | Description                                                                   |
| --- | --------- | ---------- | ----------- | ------------------------- | ----------------------------------------------------------------------------- |
| 1   | data      | `[]`       | `required`  |                           | array of objects                                                              |
| 2   | filename  | `string`   | `optional`  | "export.csv"              | The filename. The `.csv` extention will be edded if not included in file name |
| 3   | delimiter | `string`   | `optional`  | ";"                       | fields separator                                                              |
| 4   | headers   | `string[]` | `optional`  | provided data object keys | List of columns that will be used in the final CSV file.                      |

## Typescript Support

Install types with npm

```sh
npm i --save-dev @types/react-json-to-csv
```

## Contributing

Please help provide good data faster! Submit any issues and/or make a pull request!
