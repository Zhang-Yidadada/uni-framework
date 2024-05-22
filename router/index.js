// router.js
import { createRouter, __dynamicImportComponent__ } from '@/packages/uni-simple-router'

import { routes } from './routes'

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [...routes],

  app: {
    setSideSlipGesture(to) {
      console.log(to)
      if (to.name === 'login') return 'none'
      return 'close'
    }
  }
})

export default router
