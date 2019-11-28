#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path'),
      // menu        = require('./exercises/menu'),
      hooray      = require('workshopper-hooray')


function fpath(f) {
  return path.join(__dirname, f)
}


workshopper({
  name: 'noxepy',
  title: 'СПРАВОЧНИК РУССКОГО ХАКЕРА\n',
  subtitle: '\x1b[23mВыбери тему и жми \x1b[3mEnter\x1b[23m для приобщения:',
  exerciseDir: fpath('./exercises/'),
  appDir: __dirname,
  helpFile: fpath('./help.txt'),
  footerFile: false,
  languages: ['en', 'ru'],
  menu: {
    fs: 'green',
    bg: 'black'
  },
  onComplete: hooray
})
