// vite.config.js
import { VitePWA } from "file:///C:/Users/User/Desktop/Study/shop_list/node_modules/vite-plugin-pwa/dist/index.js";
import { defineConfig } from "file:///C:/Users/User/Desktop/Study/shop_list/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/User/Desktop/Study/shop_list/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [vue(), VitePWA({
    registerType: "autoUpdate",
    injectRegister: false,
    pwaAssets: {
      disabled: false,
      config: true
    },
    manifest: {
      name: "shop_list",
      short_name: "shop_list",
      description: "shop list",
      theme_color: "#72b6e0"
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true
    },
    devOptions: {
      enabled: false,
      navigateFallback: "index.html",
      suppressWarnings: true,
      type: "module"
    }
  })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcU3R1ZHlcXFxcc2hvcF9saXN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcU3R1ZHlcXFxcc2hvcF9saXN0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Vc2VyL0Rlc2t0b3AvU3R1ZHkvc2hvcF9saXN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdnVlKCksIFZpdGVQV0Eoe1xuICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgIGluamVjdFJlZ2lzdGVyOiBmYWxzZSxcblxuICAgIHB3YUFzc2V0czoge1xuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlnOiB0cnVlLFxuICAgIH0sXG5cbiAgICBtYW5pZmVzdDoge1xuICAgICAgbmFtZTogJ3Nob3BfbGlzdCcsXG4gICAgICBzaG9ydF9uYW1lOiAnc2hvcF9saXN0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnc2hvcCBsaXN0JyxcbiAgICAgIHRoZW1lX2NvbG9yOiAnIzcyYjZlMCcsXG4gICAgfSxcblxuICAgIHdvcmtib3g6IHtcbiAgICAgIGdsb2JQYXR0ZXJuczogWycqKi8qLntqcyxjc3MsaHRtbCxzdmcscG5nLGljb30nXSxcbiAgICAgIGNsZWFudXBPdXRkYXRlZENhY2hlczogdHJ1ZSxcbiAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgZGV2T3B0aW9uczoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnaW5kZXguaHRtbCcsXG4gICAgICBzdXBwcmVzc1dhcm5pbmdzOiB0cnVlLFxuICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgfSxcbiAgfSldLFxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVMsZUFBZTtBQUNyVSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFHaEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxRQUFRO0FBQUEsSUFDdkIsY0FBYztBQUFBLElBQ2QsZ0JBQWdCO0FBQUEsSUFFaEIsV0FBVztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUVBLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxjQUFjLENBQUMsZ0NBQWdDO0FBQUEsTUFDL0MsdUJBQXVCO0FBQUEsTUFDdkIsY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFFQSxZQUFZO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxrQkFBa0I7QUFBQSxNQUNsQixrQkFBa0I7QUFBQSxNQUNsQixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
