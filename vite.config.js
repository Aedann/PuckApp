import { defineConfig } from 'vite'


import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  	],
  base : '/PuckApp/',

})


/*  

server: {
origin: "http://localhost:4173",
}

import { VitePWA } from 'vite-plugin-pwa'
  VitePWA({ 
		includeAssets: ['vite.svg'],
		registerType: 'autoUpdate',
		devOptions: {enabled: true},
		injectRegister: 'auto',
		manifest: {
		  name: 'Puck App',
		  short_name: 'Puck0',
		  description: 'Puck Tracker Official Application',
		  theme_color: '#ffffff',
		  icons: [
			{
			  src: 'vite.svg',
			  type: 'image/svg+xml'
			},
		  ]
		},
		workbox: {
			globPatterns: ['**$/*.{js,css,html,ico,png,svg}']
		},
	}),

*/
