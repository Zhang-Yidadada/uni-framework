// vite.config.js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import vitePluginUniRouter from './packages/uni-simple-router/compiler'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginUniRouter({
      pluginPath: `./packages/uni-simple-router`
    }),
    uni()
  ]
})
