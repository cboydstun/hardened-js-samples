// https://www.youtube.com/watch?v=UXR0O-CufTk
// https://github.com/tc39/proposal-eventual-send
// import { E } from '@agoric/far';
// // Invoke pipelined RPCs.
// const fileP = E(
//   E(target).openDirectory(dirName)
// ).openFile(fileName);
// // Process the read results after a round trip.
// E(fileP).read().then(contents => {
//   console.log('file contents', contents);
//   // We don't use the result of this send.
//   E(fileP, { _oneway: true }).append('fire-and-forget');
// });


// https://www.npmjs.com/package/@endo/captp
// import { E, makeCapTP } from '@endo/captp';
// // Create a message dispatcher and bootstrap.
// // Messages on myconn are exchanged with JSON-able objects.
// const { dispatch, getBootstrap, abort } = makeCapTP('myid', myconn.send, myBootstrap);
// myconn.onReceive = obj => dispatch(obj);
// // Get the remote's bootstrap object and call a remote method.
// E(getBootstrap()).method(args).then(res => console.log('got res', res));
// // Tear down the CapTP connection if it fails (e.g. connection is closed).
// abort(Error('Connection aborted by user.'));