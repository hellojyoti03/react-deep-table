## Welcome to react-deep-table 👋

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/react-deep-table) [![node version](https://img.shields.io/node/v/react-deep-table?color=blue&style=flat)](https://www.npmjs.com/package/react-deep-table) [![CDNJS](https://img.shields.io/cdnjs/v/axios.svg?style=flat-square)](https://cdnjs.com/libraries/react-deep-table) [![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=axios&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=react-deep-table) [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/hellojyoti03/react-deep-table) [![Build status](https://img.shields.io/github/actions/workflow/status/hellojyoti03/react-deep-table/ci.yml?branch=main&label=CI&logo=github&style=flat-square)](https://github.com/hellojyoti03/react-deep-table/actions/workflows/ci.yml) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-deep-table) [![downloads](https://img.shields.io/npm/dm/react-deep-table.svg?label=monthly%20downloads)](https://www.npmjs.com/package/react-deep-table) [![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](https://github.com/react-deep-table/blob/main/LICENSE) [![Known Vulnerabilities](https://snyk.io/test/npm/react-deep-table/badge.svg)](https://snyk.io/test/npm/react-deep-table)

## Introduction

`react-deep-table` is a powerful and customizable React library for creating feature-rich, dynamic tables with unlimited nested rows. Simplify complex data representation with intuitive expand/collapse functionality and seamless performance. Perfect for building scalable and interactive data grids in modern React applications .

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Version](#version-information)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)
- [Contributing](#contributing)
- [Issues](#issues)
- [New_Feature](#new_feature)
- [Contact](#contact)

## Features

- no external script loading, i.e. no dependencies on SDKs
- supports tree shaking with ES modules
- use own style pop-up window
- share buttons for:
	- Facebook
	- Twitter
	- Email
	- Instagram

## Installation

You can install `react-deep-table` via npm or yarn:

```bash
npm install react-deep-table
```

or

```bash
yarn add react-deep-table
```

## Version Information

### Current Version: 2.1.8

This is an alpha version of `react-deep-table`. It includes the latest features and improvements but may also contain bugs or unfinished functionality. We encourage developers to test this version but recommend using it in non-production environments.

### Previous Stable Version: 2.1.5

If you prefer stability over new features, you may choose to use the latest stable version. It is well-tested and suitable for production environments. You can install it by running:

## Usage

To use `react-deep-table`, import the desired components and render them in your React application. Below is a basic example:

### Basic Example

```javascript
import React from "react";
import {
Table
} from "react-deep-table";

const TableComponent = () => {
	const demoData = [
    {
      id: 1,
      name: "Category 1",
      value: "Value 1",
      status: "Active",
      date: "2024-12-03",
      children: [
        {
          id: 2,
          name: "Subcategory 1.1",
          value: "Value 1.1",
          status: "Inactive",
          date: "2024-11-20",
          children: [
            { id: 3, name: "Item 1.1.1", value: "Value 1.1.1", status: "Active", date: "2024-11-10" },
          ],
        },
        {
          id: 4,
          name: "Subcategory 1.2",
          value: "Value 1.2",
          status: "Active",
          date: "2024-10-30",
        },
      ],
    },
  ];

	const headerData = ['ID', 'Name', 'Value', 'Status', 'Date']
  

	return (
		<div>
			 <Table body={demoData} header={headerData} />
		</div>
	);
};

export default TableComponent;
```

## Customization

`react-deep-table` customize the buttons by applying your own styles and configurations. Here’s how you can enhance the appearance and behavior of your buttons:

### Custom Children

You can pass any React node as children to the share buttons, allowing you to use custom images, SVGs, or text. This gives you the flexibility to design buttons that fit your application's branding.

### Example

```javascript
let COSTUM_STYLE_OBJECT = {
  border: '1px solid #ddd',
  headerColor: "#007BFF",
  footerColor: "#28A745",
  bodyColor: "#F8F9FA",
  tableColor : "#FFFFFF",
}


<Table costumStyle={COSTUM_STYLE_OBJECT}  costumClass = 'react-deep-table'>
```
## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/hellojyoti03/react-deep-table/blob/main/LICENSE) file for more information.

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](https://github.com/hellojyoti03/react-deep-table/blob/main/CONTRIBUTING.md) for guidelines on how to get started.

## Issues

If you encounter any issues, please read our [ISSUES.md](https://github.com/hellojyoti03/react-deep-table/blob/main/ISSUES.md) for guidlines how to submit a issue .

## New_Feature

We welcome contributing a new feature to `react-deep-table` Please read our [NEW_FEATURE.md](https://github.com/hellojyoti03/react-deep-table/blob/main/NEW_FEATURE.md) for guidelines for how to propose a new feature.

## Contact

For any questions or feedback, please reach out to [jyotiprakash.panigrahi055@gmail.com].
