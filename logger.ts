import winston = require('winston')

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'stagelinq.log', level: 'info' }),
    new winston.transports.Console({ format: winston.format.simple(), level: 'info' })
  ],
})