# flameforge-database

## Getting Started

First of all install dependencies with the following command (you will never use `npm i` if no new dependencies are added, if you do that I will break your face ;) )

```bash
npm ci
```

Once dependencies are correctly installed you can start to code and continue to improve what I've started :kiss:

Have FUN!!!

---

## Generate Entities

To generate entities from a database (Don't forget to replace options to access to your targeted database with good credentials.)

```bash
npx typeorm-model-generator -h localhost -d auth -p 3306 -u root -x admin -e mysql -o .
```

---

## How to publish

To publish a new version you can execute one of those npm script (you don't need to build or commit before executing a script, it do it for you and also change the version of the package)

```bash
npm run major-release (example: 1.0.0 ---> 2.0.0)
npm run major-release-candidate (example: 1.0.0 ---> 2.0.0.rc)
npm run minor-release (example: 1.0.0 ---> 1.1.0)
npm run minor-candidate (example: 1.0.0 ---> 1.1.0.rc)
npm run next-release-candidate (example: 1.1.0.rc ---> 1.1.0.rc.1)
npm run patch-release (example: 1.0.0 ---> 1.0.1)
npm run patch-release-candidate (example: 1.0.0 ---> 1.0.1.rc)
npm run pre-release (example: 1.0.0 ---> 1.0.1.rc.1)
```

You can find more details in the `npm-version` [documentaion](https://docs.npmjs.com/cli/v6/commands/npm-version) and more details of `semver` [repository](https://github.com/npm/node-semver#functions)
