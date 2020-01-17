const fs = require('fs')
fs.writeFileSync('./.env', `API_TOKEN=${process.env.API_TOKEN}\n`)
