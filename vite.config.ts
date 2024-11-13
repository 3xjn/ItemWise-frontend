import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@root': resolve(__dirname, "src"),
            '@pages': resolve(__dirname, "src/pages"),
            '@styles': resolve(__dirname, "src/styles"),
            '@components': resolve(__dirname, "src/components"),
            '@context': resolve(__dirname, "src/context"),
            '@utils': resolve(__dirname, "src/utils"),
        }
    }
})
