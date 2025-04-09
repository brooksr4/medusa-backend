import { defineConfig } from "@medusajs/framework"
import { loadEnv } from "@medusajs/framework/utils"

loadEnv()

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: {
    // 👇 THIS IS CRITICAL for stopping Workflows from loading
    _resolve: "@medusajs/modules-sdk",
    _resolveOptions: {
      modulesV2: {
        __allowList__: true,
      },
    },
  },
})

