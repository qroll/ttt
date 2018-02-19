# ttt

## implementation details

This project was created with `react-native init`.

The app uses Redux to manage the application state. For the purpose of this assignment, the state is not persisted.

## state slice

`user`: Simply keeps track of the current user.

`topics`: Normalized to simplify updates. Top Topics and All Topics are stored as arrays of ids. Currently the sort is performed in the reducer in lieu of retrieving the actual results from server.

## assumptions made/other info

1. Topics can be submitted anonymously. (user does not have to log in)
2. Any string <=255 characters is allowed, including whitespace-only strings.
3. The user has to manually refresh to view new topics.

## build instructions

First, follow the [set up instructions for developing with native code](https://facebook.github.io/react-native/docs/getting-started.html) for the corresponding development/target platforms.

1. Clone the project `git clone https://github.com/qroll/ttt` and run `npm install`
2. For Android, once Android Emulator is running: `npm run android`
3. For iOS: `npm run ios`

## test instructions

To run tests, use the following command:
`npm test`

## note

This app was compiled and tested for Android only.
