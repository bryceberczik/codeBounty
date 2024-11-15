import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      // We have to set up our Vite client-side development server to proxy API requests to our server-side Node server at port 3001 in order to hit our GraphQL application.
     '/graphql': {
       target: 'http://localhost:3001',
       changeOrigin: true,
       secure: false,
     },
   },
  }
})
