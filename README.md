# linkedin-fake 
A stub for use in testing Meteor apps. Stubs the oauth calls and allows you to fake stub more.

## Usage

If you are using LinkedIn authentication (`pauli:accounts-linkedin`), add this package like this:

`meteor add ryepdx:linkedin-fake`

Your app will no longer authenticate with LinkedIn when it's in development mode and will authenticate
with a fake user even if you do not have an internet connection. This package does not affect production
as it is a `debugOnly` package.

## About

This package is based on and forked from [emmerge:google-fake](https://github.com/emmerge/meteor-google-fake).

