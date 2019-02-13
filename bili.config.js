/** @type {import('bili').Config} */
const config = {
  input: 'src/index.ts',
  banner: true,
  output: {
    moduleName: 'popupCentered',
    format: ['cjs', 'es', 'iife-min'],
  },
  plugins: {
    typescript2: {
      useTsconfigDeclarationDir: true
    }
  }
}

export default config