# paper2-client

Testing client for [paper2](https://github.com/emn-dev/paper2). Easy place to import and show parity or differences between paper2 vs [paperjs](https://github.com/paperjs/paper.js). Currently only concerned with nodejs functionality as you can view browser examples in the [docs](https://emn-dev.github.io/paper2/).

## Getting Started

- Require nodejs version >= `v22` ([Node.js Releases](https://nodejs.org/en/about/previous-releases))
- NOTE: Using `type=module` in package.json [module-vs-commonjs](https://nodejs.org/api/packages.html#type)
- Run `npm install`

## Testing

- Testing paper2 = `npm start`
- Testing paperjs (original) = `npm run start-paperjs`

## jsdom

- jsdom in this project is stuck at `v20.0.3` because of a bug in [paperjs - 2058](https://github.com/paperjs/paper.js/pull/2058)
- You can bump jsdom to latest and paper2 will work correctly, but paperjs will throw error
