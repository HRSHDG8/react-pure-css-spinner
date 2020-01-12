# react-pure-css-spinner

> lightweight spinner library

[![NPM](https://img.shields.io/npm/v/react-pure-css-spinner.svg)](https://www.npmjs.com/package/react-pure-css-spinner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-pure-css-spinner
```

# Usage

## Basic
```tsx
import * as React from 'react'

import Spinner, { SpinnerType } from 'react-pure-css-spinner';

class App extends React.Component {
  render () {
    return (
      <Spinner />
    )
  }
}
```
## Passing Props
<h3>The component takes in two props type and color</h3>
<u>Type</u> :<ul>
<li> Optional paramter, defaults to Default Spinner
<li> Used to change type of loader
<li> pass and paramter from SpinnerType as type={SpinnerType.Classic}
</ul>

<u>Color</u> :
<ul>
<li> Optional paramter, defaults to black color
<li> Used to change color of loader
<li> pass any valid html color string paramter as <ul>
<li>color="black"
<li> color="rgb(0,0,0)"
<li> color="rgba(0,0,0,1)"
</ul>
</ul>

```tsx
import * as React from 'react'

import Spinner, { SpinnerType } from 'react-pure-css-spinner';

class App extends React.Component {
  render () {
    return (
      <Spinner type={SpinnerType.SingleCirclePulse} color="rgba(128,0,128,1)" />
    )
  }
}
```

## License

MIT © [HRSHDG8](https://github.com/HRSHDG8)
