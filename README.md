<div align="center">
  <a href="https://www.npmjs.com/package/send-to-git-cli">
    <img src="https://img.shields.io/npm/v/send-to-git-cli.svg?maxAge=86400" alt="Last npm Registry Version">
  </a>
  <a href="https://travis-ci.org/ramasilveyra/send-to-git-cli?branch=master">
    <img src="https://travis-ci.org/ramasilveyra/send-to-git-cli.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://codecov.io/github/ramasilveyra/send-to-git-cli?branch=master">
    <img src="https://img.shields.io/codecov/c/github/ramasilveyra/send-to-git-cli.svg?branch=master" alt="Code coverage">
  </a>
</div>

<h1 align="center">send-to-git-cli</h1>

<p align="center"><b>Keeps in sync a folder and their files with a folder of a git repository.</b></p>

<h2 align="center">Table of Contents</h2>

- [Install](#install)
- [Example](#example)
- [Usage](#usage)
- [Related](#related)
- [Contribute](#contribute)
- [License](#license)

<h2 align="center">Install</h2>

**Node.js v6.5 or newer** is required.

Via the yarn client:

```bash
$ yarn global add send-to-git-cli
```

Via the npm client:

```bash
$ npm install --global send-to-git-cli
```

<h2 align="center">Example</h2>

Example to add the content of the folder `./some-files` to `git@github.com:some-org/some-repo.git` on the folder `public_html`.

```bash
send-to-git --s "./some-files/**" --d ./public_html --r git@github.com:some-org/some-repo.git
```

<h2 align="center">Usage</h2>

### --source, -s

Type: `string` `Array`<br>
**Required**

Glob or array of globs to read.

### --destination, -d

Type: `string`<br>
**Required**

Relative destination path.

### --remote, -r

Type: `string`<br>
**Required**

git repository url.

#### --branch, -b

Type: `string`<br>
Default: `'master'`

Branch to add and push the changes.

#### --commit-message, -cm

Type: `string`<br>
Default: `'Release'`

Commit message for the changes.

<h2 align="center">Related</h2>

- [send-to-git](https://github.com/ramasilveyra/send-to-git) API for this module.

<h2 align="center">Contribute</h2>

Feel free to dive in! [Open an issue](https://github.com/ramasilveyra/send-to-git-cli/issues/new) or submit PRs.

send-to-git-cli follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

<h2 align="center">License</h2>

[MIT](LICENSE.md)
