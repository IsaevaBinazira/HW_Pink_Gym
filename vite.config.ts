
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: path.resolve(dirname, 'tsconfig.app.json'),
      entryRoot: 'src',
      include: ['src/index.ts', 'src/components/ui/**/*.ts', 'src/components/ui/**/*.tsx'],
      exclude: ['**/*.stories.ts', '**/*.stories.tsx'],
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      name: 'PinkGymUIKit',
      formats: ['es'],
      fileName: 'pink-gym-ui-kit',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
