#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path'),
      credits     = require('./credits'),
      menu        = require('./exercises/menu'),
      hooray      = require('workshopper-hooray'),
      more        = require('workshopper-more'),

      appname     = 'noxepy',
      title       = 'Поехали в натив',
      subtitle    = '\x1b[23mВыбери упражнение и нажми \x1b[3mEnter\x1b[23m для запуска'


function fpath (f) {
  return path.join(__dirname, f)
}


workshopper({
  name        : appname,
  title       : title,
  subtitle    : subtitle,
  exerciseDir : fpath('./exercises/'),
  appDir      : __dirname,
  helpFile    : fpath('help.txt'),
  footerFile  : false,
  menu        : {
    fs: 'green',
    bg: 'black'
  },
  commands    : [
    {
      name    : 'credits',
      handler : credits
    },
    {
      name    : 'more',
      menu    : false,
      short   : 'm',
      handler : more
    }
  ],
  onComplete  : hooray
})
