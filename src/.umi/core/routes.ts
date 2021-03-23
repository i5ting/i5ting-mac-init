// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/i5ting/workspace/github/i5ting-mac-init/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "exact": false,
    "path": "/",
    "component": require('@/layouts/index.tsx').default,
    "routes": [
      {
        "exact": true,
        "path": "/",
        "component": require('@/pages/index').default
      },
      {
        "exact": true,
        "path": "/user",
        "component": require('@/pages/user').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
