# Transpile a Widget

Each directory is a different example of a way to get pretty code
turned into highly-compatible JS code.
Go to each directory and run `npm init` to get started.

## babel-ex

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

TODO

## typescript-ex

TODO
