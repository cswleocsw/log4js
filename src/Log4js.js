import Logger from './Logger'

class LogFactory {
  getLogger(name) {
    let logger = new Logger(name)
    return logger
  }
}
export default new LogFactory()
