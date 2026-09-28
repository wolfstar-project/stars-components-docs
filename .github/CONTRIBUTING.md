# Contributing

## Workflow

1. Fork and clone this repository.
2. Create a new branch in your fork based off the **main** branch.
3. Install the Mintlify CLI with `npm install --global mint`, then run `mint dev` to preview the site (see
   [README.md](../README.md)).
4. Make your changes.
5. Commit your changes, and push them.
6. Submit a Pull Request [here]!

## Contributing to the docs

**The issue tracker is only for issue reporting or proposals/suggestions. If you have a question, you can find us in
our [Discord Server][discord server]**.

**_Before committing and pushing your changes, please make sure the checks CI runs pass locally:_**

```bash
mint format     # must leave no diff
mint validate
pnpm install
pnpm lint
```

- Guide pages live under [`documentation/guide/`](../documentation/guide) and package landing pages under
  [`documentation/packages/`](../documentation/packages).
- Add every new page to the `navigation` section of [`docs.json`](../docs.json), or it will not appear on the site.
- The API reference under `documentation/api/` is generated. Do not edit it by hand; fix the source comments in
  [stars-components](https://github.com/wolfstar-project/stars-components) or
  [plugins](https://github.com/wolfstar-project/plugins) instead.
- Pull request titles follow [Conventional Commits](https://www.conventionalcommits.org), for example
  `docs(guide): explain plugin loading order`.

<!-- Link Dump -->

[discord server]: https://join.wolfstar.rocks
[here]: https://github.com/wolfstar-project/stars-components-docs/pulls
