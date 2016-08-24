import { expect } from 'chai'
import Logger, { LEVEL_MAP, LEVEL_KEY } from '../src/Logger'

describe('Logger', () => {

  describe('enum', () => {
    it('LEVEL_MAP', () => {
      expect(LEVEL_MAP['DEBUG']).to.be.equal(1)
      expect(LEVEL_MAP['INFO']).to.be.equal(2)
      expect(LEVEL_MAP['WARN']).to.be.equal(3)
      expect(LEVEL_MAP['ERROR']).to.be.equal(4)
      expect(LEVEL_MAP['FATAL']).to.be.equal(5)
    })

    it('LEVEL_MAP', () => {
      expect(LEVEL_KEY[1]).to.be.equal('DEBUG')
      expect(LEVEL_KEY[2]).to.be.equal('INFO')
      expect(LEVEL_KEY[3]).to.be.equal('WARN')
      expect(LEVEL_KEY[4]).to.be.equal('ERROR')
      expect(LEVEL_KEY[5]).to.be.equal('FATAL')
    })
  })

  it('#debug()', (done) => {
    const logger = new Logger('debug', { level: 'DEBUG' })
    try {
      logger.debug('this is a message')
      done()
    } catch (e) {
      console.log(e)
    }
  })

  it('#info()', (done) => {
    const logger = new Logger('info')
    try {
      logger.info('this is a message')
      done()
    } catch (e) {
      console.log(e)
    }
  })

  it('#warn()', (done) => {
    const logger = new Logger('warn')
    try {
      logger.warn('this is a message')
      done()
    } catch (e) {
      console.log(e)
    }
  })

  it('#error()', (done) => {
    const logger = new Logger('error')
    try {
      logger.error('this is a message')
      done()
    } catch (e) {
      console.log(e)
    }
  })

  it('#fatal()', (done) => {
    const logger = new Logger('fatal')
    try {
      logger.fatal('this is a message')
      done()
    } catch (e) {
      console.log(e)
    }
  })
})
