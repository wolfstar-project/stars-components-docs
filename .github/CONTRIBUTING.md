# Contributing

## Workflow

1. Fork and clone this repository.
2. Create a new branch in your fork based off the **main** branch.
3. Run `pnpm install`, then `pnpm dev` to preview the site (this fetches the aggregated API JSON and package
   versions first — see [README.md](../README.md)).
4. Make your changes.
5. Commit your changes, and push them.
6. Submit a Pull Request [here]!

## Contributing to the site

**The issue tracker is only for issue reporting or proposals/suggestions. If you have a question, you can find us in
our [Discord Server][discord server]**.

We highly suggest [Oxlint] to be installed in your text editor or IDE of your choice to ensure builds from GitHub
Actions do not fail.

**_Before committing and pushing your changes, please ensure that you do not have any linting errors by running
`pnpm lint`!_**

- Guide pages live under [`guide/`](/guide); hand-written package landing pages live under [`packages/`](/packages).
- The generated API reference under `api/` is never edited by hand — it's produced by `pnpm api` from JSON published
  by [wolfstar-project/docs](https://github.com/wolfstar-project/docs).

<!-- Link Dump -->

[discord server]: https://join.wolfstar.rocks
[here]: https://github.com/wolfstar-project/website/pulls
[oxlint]: https://oxc.rs/docs/guide/usage/linter.html
