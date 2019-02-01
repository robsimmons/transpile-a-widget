# Transpile a Widget

Each directory is a different example of a way to get pretty code
turned into highly-compatible JS code.
Go to each directory and run `npm init` to get started.

Every example also includes the ability to run `npm run prettier`
in order to make your code pretty. I'm an evangelist for [opinionated
code formatting](https://prettier.io/) for fun and profit.

## babel-ex

This represents probably the simplest thing you could possibly do.

The file `src/main.js` or `src/main.jsx`
will be transformed into `lib/main.js` once if you run `npm run build`,
and whenever the files change if you run `npm run watch`.
(NB: the watch script produces [no output when it successfully builds
after the first time](https://github.com/babel/babel/issues/7926).
This is confusing and arguably wrong.)

The original file in the `src/` directory can contain JS magic that's
incompatible with older browsers; the output in `lib` will be free of
these problems.

## webpack-ex

More complexity, more toolchain, more awesome.

The script `npm run build` runs exactly the same way it did before.
But `npm run watch` now starts a webpack server; if you go to
(http://localhost:8080/) after running `npm run watch`, you'll get
the same webpage view, but that webpage will reload whenever you
save your code, making for a more plesant dev experience.

## typescript-ex

TODO
