import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import prerenderPkg from 'vite-plugin-prerender'

const prerender = prerenderPkg as unknown as (options: {
  staticDir: string
  routes: string[]
}) => Plugin

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: 'dist',
      routes: [
        '/',
      ],
    }),
  ],
  base: '/',
})