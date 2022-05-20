import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    server: {
        port: 3020,
        // proxy: {
        //     '/api': {
        //         target: 'http://resource-aliyun.dcloud.net.cn/r/crash/__UNI__E9B6D54/i',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '')
        //     }            
        // }
    }
})