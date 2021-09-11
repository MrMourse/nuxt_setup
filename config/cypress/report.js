const report = require('multiple-cucumber-html-reporter')
report.generate({
  jsonDir: './reports/cucumber-json',
  reportPath: './reports/report.html',
  metadata: {
    browser: { name: 'electron', version: '79' },
    device: 'Local test machine',
    platform: {
      name: 'mac',
      version: 'Catalina'
    }
  }
})
