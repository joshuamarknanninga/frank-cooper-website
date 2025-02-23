// vite.config.js
export default defineConfig({
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables" as *;`
        }
      }
    }
  })