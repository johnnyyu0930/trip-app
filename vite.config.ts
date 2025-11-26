import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 設定 base 為 './' 確保在 GitHub Pages 子路徑下資源能正確讀取
  base: './',
})