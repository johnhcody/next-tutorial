Notes:

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

 - Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
 - Server-side Rendering is the pre-rendering method that generates the HTML on each request.

 Static Generation is recommended whenever possible 
  - Ask if you can pre-render a page ahead of a user's request.  If the answer is yes, then do static generation, if the answer is no, then do server-side rendering

use `getStaticProps` to render data with static generation.
 - WHen you export a page component, you can also export an `async` function called `getStaticProps`.
  - `getStaticProps` runs at build time in production, and inside the function, you can fetch external data and send it as props to the page.

``` 
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```
- Essentially, getStaticProps allows you to tell Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”
- `getStaticProps` only runs on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.
- Client-side rendering manages the routing dynamically without refreshing the page every time a user requests a different route. But server-side rendering is able to display a fully populated page on the first load for any route of the website, whereas client-side rendering displays a blank page first.
- `getStaticProps` can only be exported from a page. You can’t export it from non-page files.