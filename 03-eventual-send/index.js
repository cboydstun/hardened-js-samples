// https://www.youtube.com/watch?v=UXR0O-CufTk
// https://github.com/tc39/proposal-eventual-send

import { E } from '@agoric/far';

// Invoke pipelined RPCs.
const fileP = E(
  E(target).openDirectory(dirName)
).openFile(fileName);
// Process the read results after a round trip.
E(fileP).read().then(contents => {
  console.log('file contents', contents);
  // We don't use the result of this send.
  E(fileP, { _oneway: true }).append('fire-and-forget');
});