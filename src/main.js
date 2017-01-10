import Log from './log';

if (typeof window !== 'undefined') {
  window.Log = Log;
}

module.exports = Log;
