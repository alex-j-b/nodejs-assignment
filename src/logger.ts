'use strict'

import log4js from 'log4js'

const LOG = log4js.getLogger()
const level = process.env.LOG_LEVEL || 'trace'

LOG.level = level


// Bridge to handle all logging using singleton logger instance and giving us
// the opportunity to decorate each log e.g. with an aws request ID which is
// very helpful when analyzing cloudwatch logs
export class Logger {
  static trace(...args) {
    LOG.trace.apply(LOG, arguments)
  }

  static debug(...args) {
    LOG.debug.apply(LOG, arguments)
  }

  static info(...args) {
    LOG.info.apply(LOG, arguments)
  }

  static warn(...args) {
    LOG.warn.apply(LOG, arguments)
  }

  static error(...args) {
    LOG.error.apply(LOG, arguments)
  }

  static fatal(...args) {
    LOG.fatal.apply(LOG, arguments)
  }
}
