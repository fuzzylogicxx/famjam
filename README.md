# famjam

Family-friendly eateries, built on the JAMstack.

https://famjam.info/

## Contributing

Adding a café/restaurant

Check out /site/eateries/ for a bunch of .md files. Tossing a file in there following that format (YYYY-eatery-city.md) should do the trick.

Feel free to send me PR (Pull Request) of new eateries.

Note:
To be listed, eateries need to be …

After I merge in a PR, it will trigger a Netlify build that rebuilds the production site.

Development, Design Updates
I'm open to making the design better and adding nice features (sorting? automatic map generation?), but talk to me (laurence@fuzzylogic.me) first about it.

## Run it locally

### 1. Clone this repository:

```
git clone https://github.com/fuzzylogicxx/famjam.git famjam
```

### 2. Navigate to the directory

```
cd famjam
```

### 3. Install dependencies

```
npm install
```

### 4. Run Eleventy

```
npx eleventy
```

Or build and host locally for local development
```
npx eleventy --serve
```

Or build automatically when a template changes:
```
npx eleventy --watch
```

Or in debug mode:
```
DEBUG=* npx eleventy
```

