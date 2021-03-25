import { defineConfig } from "umi";

export default defineConfig({
  nodeModulesTransform: {
    type: "none"
  },
  antd: {},
  theme: {
    "@primary-color": "#0070cc",
    "@success-color": "#1e8e3e",
    "@info-color": "@primary-color",
    "@warning-color": "#ffc440",
    "@error-color": "#d93026",
    "@processing-color": "@primary-color",
    "@text-color": "fade(#000, 65%)",
    "@text-color-secondary": "fade(#000, 45%)",
    "@border-color-base": "#dedede",
    "@border-color-split": "#dedede",
    "@layout-body-background": "#fafafa",
    "@font-size-base": "12px",
    "@border-radius-base": "2px",
    "@border-radius-sm": "0",
    "@outline-width": "0",
    "@outline-color": "#737373",
    "@background-color-base": "hsv(0, 0, 96%)",
    "@btn-default-bg": "#fafafa",
    "@btn-default-border": "#dedede",
    "@radio-button-bg": "transparent",
    "@radio-button-checked-bg": "transparent",
    "@form-item-margin-bottom": "16px",
    "@input-height-lg": "36px",
    "@input-hover-border-color": "#737373",
    "@progress-radius": "0",
    "@table-header-bg": "#fafafa",
    "@table-row-hover-bg": "#fafafa",
    "@table-padding-vertical": "15px",
    "@tabs-card-gutter": "-1px",
    "@tabs-card-tab-active-border-top": "2px solid @primary-color",
    "@switch-color": "@success-color",
    "@breadcrumb-base-color": "@text-color",
    "@breadcrumb-last-item-color": "@text-color-secondary",
    "@slider-handle-border-width": "1px",
    "@slider-handle-shadow": "1px 1px 4px 0 rgba(0,0,0,.13)",
    "@slider-track-background-color": "@primary-color",
    "@slider-track-background-color-hover": "@primary-color",
    "@slider-handle-color": "#dedede",
    "@slider-handle-color-hover": "#dedede",
    "@slider-handle-color-focus": "#dedede",
    "@slider-handle-color-focus-shadow": "transparent",
    "@slider-handle-color-tooltip-open": "#ddd",
    "@alert-success-border-color": "#dff4e5",
    "@alert-success-bg-color": "#dff4e5",
    "@alert-info-border-color": "#e5f3ff",
    "@alert-info-bg-color": "#e5f3ff",
    "@alert-warning-border-color": "#fff7db",
    "@alert-warning-bg-color": "#fff7db",
    "@alert-error-border-color": "#fcebea",
    "@alert-error-bg-color": "#fcebea"
  },
  routes: [
    {
      exact: false,
      path: "/",
      component: "@/layouts/index.tsx",
      routes: [
        { exact: true, path: "/", component: "@/pages/home" },
        { exact: true, path: "/user", component: "@/pages/user" }
      ]
    }
  ]
});
