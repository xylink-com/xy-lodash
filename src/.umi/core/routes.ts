// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/chenjiaojiao/project/toolkit/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/chenjiaojiao/project/toolkit/node_modules/@umijs/preset-dumi/lib/theme/layout')})],
    "component": (props) => {
      const React = require('react');
      const renderArgs = require('../../../node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs').default(props);

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            require('dumi-theme-default/src/builtins/Previewer.tsx').default,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${uuid} not found :(`;
      }
    }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/chenjiaojiao/project/toolkit/node_modules/@umijs/preset-dumi/lib/theme/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/chenjiaojiao/project/toolkit/node_modules/dumi-theme-default/src/layout.tsx')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__README.en-US.md' */'/Users/chenjiaojiao/project/toolkit/guide/README.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/README.en-US.md",
          "updatedTime": 1607073908000,
          "title": "Toolkit by xylink",
          "hero": {
            "title": "A general tool library",
            "desc": "<div class=\"markdown\"><p>Easy to use, Easy to write</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/zh-CN/pages/document"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/813f5ed9-6bc4-43d4-9f74-ec81ecf35733/k7htg6n4_w144_h144.png",
              "title": "Trusty",
              "desc": "<div class=\"markdown\"><p>All tool functions are extracted from the XYlink SDK and client project. After the project has been tempered, you can rest assured to eat</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/7659205c-6637-4fa2-8529-d32e5818304b/k7htflfb_w144_h144.png",
              "title": "Spirituality",
              "desc": "<div class=\"markdown\"><p>All APIs pursue simplicity, and complex functions can be implemented with very little code.</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/6319a122-e8b8-497f-9b45-37cfbe77edaa/k7htfx7t_w144_h144.png",
              "title": "Open source",
              "desc": "<div class=\"markdown\"><p>All tool functions are all open source, if you have a better IDEA, welcome to PR and make your own contribution to world peace</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020-xylink</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Toolkit",
              "heading": "toolkit"
            },
            {
              "depth": 2,
              "value": "Feature List",
              "heading": "feature-list"
            },
            {
              "depth": 2,
              "value": "License",
              "heading": "license"
            }
          ],
          "locale": "en-US"
        },
        "title": "Toolkit by xylink"
      },
      {
        "path": "/zh-CN",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__README.zh-CN.md' */'/Users/chenjiaojiao/project/toolkit/guide/README.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/README.zh-CN.md",
          "updatedTime": 1607073647000,
          "title": "xy-lodash - React utils Library of Xylink",
          "hero": {
            "title": "通用工具函数库",
            "desc": "<div class=\"markdown\"><p>为项目而生，拒绝做代码搬运工</p></div>",
            "actions": [
              {
                "text": "快速开始",
                "link": "/zh-CN/pages/document"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/813f5ed9-6bc4-43d4-9f74-ec81ecf35733/k7htg6n4_w144_h144.png",
              "title": "可靠",
              "desc": "<div class=\"markdown\"><p>所有工具函数都是XYlink SDK、客户端项目上抽离出来的，经过项目千锤百炼，可放心食用</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/7659205c-6637-4fa2-8529-d32e5818304b/k7htflfb_w144_h144.png",
              "title": "简洁",
              "desc": "<div class=\"markdown\"><p>所有Api追求简洁，极少的代码就可以实现复杂的功能。</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/6319a122-e8b8-497f-9b45-37cfbe77edaa/k7htfx7t_w144_h144.png",
              "title": "开源",
              "desc": "<div class=\"markdown\"><p>所有工具函数全部开源，如果你有更好的IDEA，欢迎PR，为世界和平做出自己的一份贡献</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020-xylink</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Toolkit",
              "heading": "toolkit"
            },
            {
              "depth": 2,
              "value": "Feature List",
              "heading": "feature-list"
            },
            {
              "depth": 2,
              "value": "License",
              "heading": "license"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "xy-lodash - React utils Library of Xylink"
      },
      {
        "path": "/zh-CN/pages/clone-deep",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__cloneDeep.zh-CN.md' */'/Users/chenjiaojiao/project/toolkit/guide/pages/cloneDeep.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/cloneDeep.zh-CN.md",
          "updatedTime": null,
          "slugs": [
            {
              "depth": 1,
              "value": "CloneDeep",
              "heading": "clonedeep"
            },
            {
              "depth": 2,
              "value": "例子",
              "heading": "例子"
            }
          ],
          "title": "CloneDeep",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/pages",
            "title": "文档"
          }
        },
        "title": "CloneDeep"
      },
      {
        "path": "/pages/document",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__document.en-US.md' */'/Users/chenjiaojiao/project/toolkit/guide/pages/document.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/document.en-US.md",
          "updatedTime": 1607073647000,
          "order": 1,
          "nav": {
            "title": "Document",
            "order": 1,
            "path": "/pages"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Getting Started",
              "heading": "getting-started"
            },
            {
              "depth": 2,
              "value": "Install",
              "heading": "install"
            },
            {
              "depth": 2,
              "value": "Update",
              "heading": "update"
            },
            {
              "depth": 2,
              "value": "Use",
              "heading": "use"
            },
            {
              "depth": 2,
              "value": "Feature List：",
              "heading": "feature-list："
            }
          ],
          "title": "Getting Started",
          "locale": "en-US"
        },
        "title": "Getting Started"
      },
      {
        "path": "/zh-CN/pages/document",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__document.zh-CN.md' */'/Users/chenjiaojiao/project/toolkit/guide/pages/document.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/document.zh-CN.md",
          "updatedTime": 1607073647000,
          "order": 1,
          "nav": {
            "title": "文档",
            "order": 1,
            "path": "/zh-CN/pages"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "更新",
              "heading": "更新"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 2,
              "value": "功能列表：",
              "heading": "功能列表："
            }
          ],
          "title": "快速上手",
          "locale": "zh-CN"
        },
        "title": "快速上手"
      },
      {
        "path": "/pages/fscreen",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__fscreen.en-US.md' */'/Users/chenjiaojiao/project/toolkit/guide/pages/fscreen.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/fscreen.en-US.md",
          "updatedTime": 1607073647000,
          "slugs": [
            {
              "depth": 1,
              "value": "FullScreen",
              "heading": "fullscreen"
            },
            {
              "depth": 2,
              "value": "Example",
              "heading": "example"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Methods",
              "heading": "methods"
            },
            {
              "depth": 4,
              "value": "1. request(ele)",
              "heading": "1-requestele"
            },
            {
              "depth": 4,
              "value": "2. exit(key, value)",
              "heading": "2-exitkey-value"
            },
            {
              "depth": 4,
              "value": "3. clearAll()",
              "heading": "3-clearall"
            },
            {
              "depth": 4,
              "value": "4. init(ele, cb)",
              "heading": "4-initele-cb"
            }
          ],
          "title": "FullScreen",
          "locale": "en-US",
          "nav": {
            "path": "/pages",
            "title": "Document"
          }
        },
        "title": "FullScreen"
      },
      {
        "path": "/zh-CN/pages/fscreen",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__fscreen.zh-CN.md' */'/Users/chenjiaojiao/project/toolkit/guide/pages/fscreen.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/fscreen.zh-CN.md",
          "updatedTime": 1607073647000,
          "slugs": [
            {
              "depth": 1,
              "value": "FullScreen",
              "heading": "fullscreen"
            },
            {
              "depth": 2,
              "value": "例子",
              "heading": "例子"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "方法",
              "heading": "方法"
            },
            {
              "depth": 4,
              "value": "1. request(ele)",
              "heading": "1-requestele"
            },
            {
              "depth": 4,
              "value": "2. exit(key, value)",
              "heading": "2-exitkey-value"
            },
            {
              "depth": 4,
              "value": "3. clearAll()",
              "heading": "3-clearall"
            },
            {
              "depth": 4,
              "value": "4. init(ele, cb)",
              "heading": "4-initele-cb"
            }
          ],
          "title": "FullScreen",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/pages",
            "title": "文档"
          }
        },
        "title": "FullScreen"
      },
      {
        "path": "/pages/store",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__store.en-US.md' */'/Users/chenjiaojiao/project/toolkit/guide/pages/store.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/store.en-US.md",
          "updatedTime": 1607073647000,
          "slugs": [
            {
              "depth": 1,
              "value": "Store",
              "heading": "store"
            },
            {
              "depth": 2,
              "value": "例子",
              "heading": "例子"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "方法",
              "heading": "方法"
            },
            {
              "depth": 4,
              "value": "1. get(key)",
              "heading": "1-getkey"
            },
            {
              "depth": 4,
              "value": "2. set(key, value)",
              "heading": "2-setkey-value"
            },
            {
              "depth": 4,
              "value": "3. remove(key)",
              "heading": "3-removekey"
            },
            {
              "depth": 4,
              "value": "4. clear()",
              "heading": "4-clear"
            },
            {
              "depth": 4,
              "value": "5. clear()",
              "heading": "5-clear"
            }
          ],
          "title": "Store",
          "locale": "en-US",
          "nav": {
            "path": "/pages",
            "title": "Document"
          }
        },
        "title": "Store"
      },
      {
        "path": "/zh-CN/pages/store",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__store.zh-CN.md' */'/Users/chenjiaojiao/project/toolkit/guide/pages/store.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/store.zh-CN.md",
          "updatedTime": 1607073647000,
          "slugs": [
            {
              "depth": 1,
              "value": "Store",
              "heading": "store"
            },
            {
              "depth": 2,
              "value": "例子",
              "heading": "例子"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "方法",
              "heading": "方法"
            },
            {
              "depth": 4,
              "value": "1. get(key)",
              "heading": "1-getkey"
            },
            {
              "depth": 4,
              "value": "2. set(key, value)",
              "heading": "2-setkey-value"
            },
            {
              "depth": 4,
              "value": "3. remove(key)",
              "heading": "3-removekey"
            },
            {
              "depth": 4,
              "value": "4. clear()",
              "heading": "4-clear"
            },
            {
              "depth": 4,
              "value": "5. clear()",
              "heading": "5-clear"
            }
          ],
          "title": "Store",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/pages",
            "title": "文档"
          }
        },
        "title": "Store"
      },
      {
        "path": "/zh-CN/pages",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/pages/document"
      },
      {
        "path": "/pages",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/pages/document"
      }
    ],
    "title": "Toolkit",
    "component": (props) => props.children
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
