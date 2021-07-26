import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'vue-iframe-template',
  plugins: [vue()],
  server:{
    port:8585
  }
})
