export const LEVEL_MAP = { DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, FATAL: 5 }
export const LEVEL_KEY = { 1: 'DEBUG', 2: 'INFO', 3: 'WARN', 4: 'ERROR', 5: 'FATAL' }

function padLeft(str, len) {
  const s = `${str}`
  return (s.length >= len) ? s : padLeft(`0${s}`, len)
}

function getDateTime() {
  let d = new Date()
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${padLeft(d.getHours(), 2)}:${padLeft(d.getMinutes(), 2)}:${padLeft(d.getSeconds(), 2)}:${d.getMilliseconds()}`
}

export default class Logger {
  constructor(name = 'LOG', options = {}) {
    this.name = name
    this.level = LEVEL_MAP[options.level] || LEVEL_MAP.INFO
  }

  setLevel(level) {
    if (LEVEL_MAP[level]) {
      this.level = LEVEL_MAP[level]
    }
  }

  debug(str) {
    this.write(LEVEL_MAP.DEBUG, str)
  }

  info(str) {
    this.write(LEVEL_MAP.INFO, str)
  }

  warn(str) {
    this.write(LEVEL_MAP.WARN, str)
  }

  error(str) {
    this.write(LEVEL_MAP.ERROR, str)
  }

  fatal(str) {
    this.write(LEVEL_MAP.FATAL, str)
  }

  write(level, str) {
    if (level >= this.level) {
      const log = console[LEVEL_KEY[level].toLowerCase()] ? console[LEVEL_KEY[level].toLowerCase()] : console.log
      log(`[${getDateTime()}] [${LEVEL_KEY[level]}] ${this.name} - ${str}`)
    }
  }
}
