const Logger = require('../src/Logger');


// 注意 transformTimestampToStr & transformStrToTimestamp
// 原本走tz會受冬季節約時間影響，改用utcOffset是透過運算調整
test('xxx', () => {
  const logger = Logger.getLogger('QQ')

  expect(logger).toBeInstanceOf(Logger)
})
