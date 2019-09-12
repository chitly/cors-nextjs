# cors-nextjs
This is an example when you develop a website with NextJS and want to create a cors proxy in your website.

## How to create cors proxy in you website
- create an api folder in pages folder.
    - `./pages/api/`
- create a file `cors.js` in api folder.
    - `./pages/api/cors.js`
- add this code in `cors.js`.
```js
import fetch from "isomorphic-unfetch";

const Cors = async (req, res) => {
  const { url } = req.query;
  try {
    const resProxy = await fetch(url);
    res.status(200).send(resProxy.body);
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

export default Cors;
```

- In this demo, I use fetch from `isomorphic-unfetch` package.
    - Because, it's easy to write same code `fetch` on client and server.

## How to use cors proxy in you website
- Normally, you fetch the url on client side like this.

```js
const res = await fetch("https://example.com/");
```

- But now, you have cors proxy api in your server.
    - So, you have to change your url by add the cors api and use the website domain you want to fetch as `url` parameter.

```js
const res = await fetch("/api/cors?url=https://example.com/");
```