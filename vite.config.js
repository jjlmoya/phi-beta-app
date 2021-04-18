const path = require('path')
const vue = require('@vitejs/plugin-vue')

module.exports = {
    define: {
        'process.env': process.env
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    plugins: [
        vue()
    ]
}
