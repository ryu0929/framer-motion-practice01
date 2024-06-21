import { defineConfig } from 'vite'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //相対パスでビルドする
  root: './src', //開発ディレクトリ設定
  publicDir: 'public',
  module: {
    rules: [
      {
        // node_module内のcss
        test: /node_modules\/(.+)\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { url: false },
          },
        ],
      },
    ]
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.')[1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'images';
            }
            //ビルド時のCSS名を明記してコントロールする
            if(extType === 'css') {
              return `assets/css/style.css`;
            }
            return `assets/${extType}/[name][extname]`;
          },
          chunkFileNames: 'assets/js/[name].js',
          entryFileNames: 'assets/js/[name].js',
        },
      },
    },
})
