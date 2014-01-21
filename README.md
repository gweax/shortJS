# Short JS

You're smarter than Uglify, YUI Compressor and Closure Comiler combined? Proof it by writing hand-optimized code as short as possible.

## What?

The goal is to write a function that solves a defined problem. However, we don't care about code style, legibility, patterns or JSLint. We only care for the number of characters. The less the better.

Sort of a JS1K with reversed goals. JS1k is to stuff as many presents as possible into Santa's bag. Short JS is to stuff that one present into Santa's trouser pocket.

## Fineprint

- Use elements of EcmaScript 5 only, no libraries, no DOM.
- Code must be runnable in Node, Chrome and Firefox.
- Only implement the function body. Don't change the signature. Don't change parameter names.
- What counts is the length of the function body, including `return` and the usage of parameters.
- Random means uniformly distributed pseudo random.

## The problems

### Get a random string of characters (current best: 100 Chars)

Implement the following function:

    /**
     * Get a random string made from the letters A-Z, a-z and the digits 0-9.
     *
     * @param {number} len - The length of the string
     * @return {string} - A random string of length 'len'.
     */
    function getRandomString(len) {

    }

Don't change the function signature, don't change parameter names, just implement the function body.
