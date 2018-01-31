'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), // Contract interface
'0x87a095001820Dbd889261A6cC8024d3137C2C6C8' // Contract address on network
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFxQjs7Ozs7O0FBRTVCLElBQU0sZUFBZSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzFCLEtBQUEsQUFBSyxNQUFNLDBCQURFLEFBQ2IsQUFBMkIsWUFBWTtBQUQxQixBQUViLDZDQUZKLEFBQWlCLEFBRWdDLEFBR2pEO0FBTGlCOztrQkFLakIsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3ptZXNzaW5nL0Rlc2t0b3AvTWVzc2luZ19Bcm91bmQvZXRoLWtpY2tzdGFydGVyIn0=