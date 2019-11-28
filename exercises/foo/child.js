const bindings = require('bindings')

var binding

try {
  binding = bindings({ module_root: process.argv[2], bindings: 'test' })
} catch (e) {
  console.error('Не могу нормально скомпилировать test addon: ошибка при поиске binding: ' + e.message)
}

console.log('Найден скомпилированный test binding файл')

if (!binding) {
  console.error('Не могу нормально скомпилировать test addon: binding не грузится')
}

if (binding.test !== 'OK') {
  console.error('Не могу нормально скомпилировать test addon: binding ведёт себя некорректно')
}

