# Apollo GraphQL Server Running as a Firebase Functions

Firebase functions are not the same as Google Cloud Run functions so the way we interact with them is different. Local development and deployment both use the `firebase` command.

This repo loosely follows this firebase [get started](https://firebase.google.com/docs/functions/get-started?gen=2nd) document. It also borrows from [this discussion](https://github.com/apollographql/apollo-server/discussions/7772) although when I use the latter _as is_ I get an infinite loop error when attempting to run the function in the firebase emulator.

The directory structure has been flattened somewhat so that [src](./src), [package.json](package.json), and the various firebase files are at the root level instead of under a _functions_ directory.
