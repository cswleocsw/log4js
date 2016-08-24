import { expect } from 'chai'
import Log4js from '../src/Log4js'
import Logger from '../src/Logger'

describe('Log4js', () => {
  it('#getLogger()', () => {
    expect(Log4js.getLogger()).to.be.an.instanceof(Logger)
  })
})
