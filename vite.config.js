import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'  /* Imported and added this plugin to the defineConfig 
                                        array below to deal with svg images */

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  
  /*Just an example of how config syntax for vite

  server: {
    port: 3000 //Some constant, never a hard coded value
  }*/


})
