import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts}', 'tests/unit/**/*.{test,spec}.{js,ts}'],
    exclude: ['node_modules', 'dist', 'tests/e2e'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/types/**'
      ]
    },
    setupFiles: ['./tests/setup.ts']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Mock all image imports
      '@/assets/img/presidents/washington.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/adams-john.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/jefferson.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/madison.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/monroe.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/adams-john-quincy.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/jackson.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/vanburen-martin.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/harrison-william.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/tyler-john.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/polk-james.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/taylor-zachary.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/fillmore-millard.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/pierce-franklin.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/buchanan-james.jpeg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/lincoln.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/johnson-andrew.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/grant-ulysses.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/hayes-rutherford.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/garfield-james.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/arthur-chester.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/cleveland-grover.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/harrison-benjamin.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/mckinley-william.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/roosevelt-theodore.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/taft-william.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/wilson-woodrow.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/harding-warren.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/coolidge-calvin.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/hoover-herbert.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/roosevelt-franklin.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/truman-harry.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/eisenhower-dwight.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/kennedy.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/johnson-lyndon.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/nixon-richard.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/ford-gerald.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/carter-jimmy.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/reagan-ronald.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/bush-george-hw.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/clinton-bill.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/bush-george-w.webp': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/obama.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/trump.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url)),
      '@/assets/img/presidents/biden.jpg': fileURLToPath(new URL('./tests/__mocks__/fileMock.ts', import.meta.url))
    }
  }
})
