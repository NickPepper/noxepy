const path         = require('path'),
      varstring    = require('varstring'),
      getos        = require('getos'),
      fs           = require('fs'),
      instructions = require('./exercises/foo/vars.json').instructions


const out     = path.join(__dirname, 'exercises/foo/problem.md'),
      problem = fs.readFileSync(out, 'utf-8')


getos(function (err, os) {
  if (err) {
    throw err
  }

  var lookup = os.dist ? os.dist : os.os
  var markdown = varstring(problem, instructions[lookup] || instructions.Other)

  fs.writeFileSync(out, markdown, 'utf8')
})
