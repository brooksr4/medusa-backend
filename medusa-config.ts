import { defineConfig } from "@medusajs/framework"
import { loadEnv } from "@medusajs/framework/utils"
import path from "path"

// ✅ Explicitly pass __dirname so it works in Render
loadEnv(process.env.NODE_ENV || "production", path.resolve(__dirname))

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
    _resolve: "@medusajs/modules-sdk",
    _resolveOptions: {
      modulesV2: {
        __allowList__: true,
      },
    },
  },
})
