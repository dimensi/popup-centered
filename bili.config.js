module.exports = {
  input: 'src/index.ts',
  format: ['umd', 'es', 'iife-min'],
  banner: true,
  moduleName: 'PopupCentered',
  plugin: [
    require('rollup-plugin-clear')({
      targets: ['./dist/']
    })
  ],
  exports: 'named'
}