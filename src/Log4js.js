const LType = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  FATAL: 'FATAL'
}

function isString(str) {
  return typeof str === 'string'
}

function padLeft(str, len) {
  const s = '' + str
  return s.length >= len ? s : padLeft('0' + s, len)
}

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
  this.level = LType[this.options.level] || LType.INFO
}

Logger.prototype.setLevel = function (level) {
  if (LType[level]) {
    this.level = LType[level]
  }
}

Logger.prototype.debug = function () {
  this.write(LType.DEBUG, Array.from(arguments))
}

Logger.prototype.info = function () {
  this.write(LType.INFO, Array.from(arguments))
}

Logger.prototype.warn = function () {
  this.write(LType.WARN, Array.from(arguments))
}

Logger.prototype.error = function () {
  this.write(LType.ERROR, Array.from(arguments))
}

Logger.prototype.fatal = function () {
  this.write(LType.FATAL, Array.from(arguments))
}

Logger.prototype.write = function () {
  const level = arguments[0]
  const args = arguments[1]
  
  if (level >= this.level) {
    const others = args.slice(1)

    let output = [
      '[' + 
      getDateTime() + 
      '] ' + 
      LType[level] + 
      ' ' + 
      this.name + 
      ' - ' + 
      args[0] + 
      '   '
    ]

    if (args.length > 1) {
      output = output.concat(others)
    } 

    console.log.apply(console.log, output)
  }
}


Logger.getLogger = function (name, options) {
  return new Logger(name, options)
}

module.exports = Logger
