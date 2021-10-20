# My Companio Node.js code challenge - Team Points Project

## What changed?

- Updated Node from **8.10** to **14.18.1**
- Converted everything to TypeScript and used [ts-auto-guard](https://github.com/rhys-vdw/ts-auto-guard) to have a runtime type checking `isPlayer` in `calculateTeamPoints.ts` in case bad data comes from our request
- Fixed the team points order to be descending instead of ascending in `calculateTeamPoints.ts` and changed the tests accordingly in `calculateTeamPoints.test.ts`
- Mocked the api call receiving nightly team points in `index.ts` (couldn't pass bad data because of TypeScript, it needs to be improved as right now we can't test the runtime type checking `isPlayer`)

## Usage

To get started clone the repo
```
git clone https://github.com/alex-j-b/nodejs-assignment.git
cd nodejs-assignment
```
install dependencies
```
npm i
```
and run
```
make run
```
for the tests
```
make test
```
