const LEVEL_MAP = {
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  FATAL: 5
}

const LEVEL_KEY = {
  1: 'DEBUG',
  2: 'INFO',
  3: 'WARN',
  4: 'ERROR',
  5: 'FATAL'
}

/**
 *
 * @param {string} str - string
 * @returns {boolean} - bool
 */
function isString(str) {
  return typeof str === 'string'
}

/**
 *
 * @param {string} str - string
 * @param {number} len - length
 * @returns {string} - string
 */
function padLeft(str, len) {
  const s = '' + str
  return s.length >= len ? s : padLeft('0' + s, len)
}

/**
 *
 * @returns {string} - date time string
 */
function getDateTime() {
  let d = new Date()
  return d.getFullYear() + 
    '-' + 
    (d.getMonth() + 1) + 
    '-' + 
    d.getDate() + ' ' +  
    padLeft(d.getHours(), 2) + 
    ':' + 
    padLeft(d.getMinutes(), 2) + 
    ':' + 
    padLeft(d.getSeconds(), 2) + 
    ':' + 
    d.getMilliseconds()
}

function Logger(name, options) {
  this.name = name || 'Log4js'
  this.options = options || {}
  this.level = LEVEL_MAP[this.options.level] || LEVEL_MAP.INFO
}

Logger.prototype.setLevel = function (level) {
  if (LEVEL_MAP[level]) {
    this.level = LEVEL_MAP[level]
  }
}

Logger.prototype.debug = function () {
  this.write(LEVEL_MAP.DEBUG, Array.from(arguments))
}

Logger.prototype.info = function () {
  this.write(LEVEL_MAP.INFO, Array.from(arguments))
}

Logger.prototype.warn = function () {
  this.write(LEVEL_MAP.WARN, Array.from(arguments))
}

Logger.prototype.error = function () {
  this.write(LEVEL_MAP.ERROR, Array.from(arguments))
}

Logger.prototype.fatal = function () {
  this.write(LEVEL_MAP.FATAL, Array.from(arguments))
}

Logger.prototype.write = function () {
  const level = arguments[0]
  const others = arguments[1]
  
  if (level >= this.level) {
    const args = others.slice(1)

    let output = [
      '[' + 
      getDateTime() + 
      '] ' + 
      LEVEL_KEY[level] + 
      ' ' + 
      this.name + 
      ' - ' + others[0] + '   '
    ]

    let a

    if (others.length > 1) {
      output = output.concat(args)
    } 

    console.log.apply(console.log, output)
  }
}


Logger.getLogger = function (name, options) {
  return new Logger(name, options)
}

module.exports = Logger
