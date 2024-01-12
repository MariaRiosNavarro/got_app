import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default {
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_VUE_API,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
};
