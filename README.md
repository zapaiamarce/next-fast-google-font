### next-fast-google-font

## Install

```
yarn add next-fast-google-font
```

## Use

```jsx
// pages/_document

import Document, { Html, Head, Main, NextScript } from "next/document";
import FastGoogleFont from "next-fast-google-font";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <FastGoogleFont href="https://fonts.googleapis.com/css2?family=Lato&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```


## Inspired by

https://csswizardry.com/2020/05/the-fastest-google-fonts/