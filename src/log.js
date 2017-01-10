const _logMsg = (scope, tag, msg) => {
  return `[${scope}] [${tag}] ${msg}`;
};

const Log = {
  v: (tag, msg) => {
    console.log(_logMsg('verbose', tag, msg));
  },
  d: (tag, msg) => {
    console.debug(_logMsg('debug', tag, msg));
  },
  i: (tag, msg) => {
    console.info(_logMsg('info', tag, msg));
  },
  w: (tag, msg) => {
    console.warn(_logMsg('warning', tag, msg));
  },
  e: (tag, msg) => {
    console.error(_logMsg('error', tag, msg));
  }
};

export default Log;
