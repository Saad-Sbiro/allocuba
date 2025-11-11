import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for assets
  server: {
    port: 3000,
    open: true,
    host: true,
    allowedHosts: [
      'c1164248a968.ngrok-free.app',
      '.ngrok-free.app',
      '.ngrok.io'
    ]
  },
  preview: {
    port: 3000,
    host: true,
    allowedHosts: [
      'c1164248a968.ngrok-free.app',
      '.ngrok-free.app',
      '.ngrok.io'
    ]
  }
})

