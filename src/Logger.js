const debug = require('debug/dist/debug')

const LogSeverity = {
  DEFAULT: 0,
  DEBUG: 100,
  INFO: 200,
  NOTICE: 300,
  WARNING: 400,
  ERROR: 500,
  CRITICAL: 600,
  ALERT: 700,
  EMERGENCY: 800
}

const LogLevel = {
  0: 'DEFAILT',
  100: 'DEBUG',
  200: 'INFO',
  300: 'NOTICE',
  400: 'WARNING',
  500: 'ERROR',
  600: 'CRITICAL',
  700: 'ALERT',
  800: 'EMERGENCY'
}

function padLeft(str, len) {
  const s = '' + str
  return s.length >= len ? s : padLeft('0' + s, len)
}

function getDateTime() {
  let d = new Date()
  return (
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1) +
    '-' +
    d.getDate() +
    ' ' +
    padLeft(d.getHours(), 2) +
    ':' +
    padLeft(d.getMinutes(), 2) +
    ':' +
    padLeft(d.getSeconds(), 2) +
    ':' +
    d.getMilliseconds()
  )
}

class Logger {
  constructor(name = 'Log4js', options = {}) {
    this.name = name || 'Log4js'
    this.options = options || {}
    this.logger = debug(this.name)
  }

  static getLogger(name, options) {
    return new Logger(name, options)
  }

  write() {
    const level = arguments[0]
    const args = arguments[1]
    const info = `${LogLevel[level]} ${getDateTime()}`
    const output = [info].concat(args)
    this.logger.apply(this.logger, output)
  }

  log(...args) {
    this.write(LogSeverity.DEFAULT, args)
  }

  debug(...args) {
    this.write(LogSeverity.DEBUG, args)
  }

  info(...args) {
    this.write(LogSeverity.INFO, args)
  }

  notice(...args) {
    this.write(LogSeverity.NOTICE, args)
  }

  warning(...args) {
    this.write(LogSeverity.WARNING, args)
  }

  error(...args) {
    this.write(LogSeverity.ERROR, args)
  }

  crit(...args) {
    this.write(LogSeverity.CRITICAL, args)
  }

  alter(...args) {
    this.write(LogSeverity.ALERT, args)
  }

  emerg(...args) {
    this.write(LogSeverity.EMERGENCY, args)
  }
}

module.exports = Logger
