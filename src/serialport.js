import { SerialPort } from 'serialport';
// import { ReadlineParser } from '@serialport/parser-readline';

var lockerSerialPort = null;
var callbackMap = [];
var parser = null;
var mainOptions = null;

// export function connectPort(port, callback) {
//   lockerSerialPort = null;
//   lockerSerialPort = new SerialPort({
//     path: port,
//     baudRate: 921600,
//     autoOpen: false,
//     flowControl: false,
//     parity: 'none',
//     stopBits: 1
//   });

//   // lockerSerialPort.write('^');

//   parser = lockerSerialPort.pipe(new ReadlineParser({ delimiter: '\n' }));
//   lockerSerialPort.open(function(err) {
//     if (err) {
//       console.log('we are fucked ' + err);
//       // lockerSerialPort.close();
//       lockerSerialPort = null;
//       parser = null;
//       // store.dispatch('CardReader/onDisconnect');
//       return;
//     }
//     // ---------------- > is connected

//     lockerSerialPort.on('close', () => {
//       console.log('dejconectó el hds!!!');
//       //   // -------------- > Disconnected
//     });
//     //
//     parser.on('data', data => {
//       callback(data);
//     });
//   });
// }

export async function list() {
  return await SerialPort.list();
}
