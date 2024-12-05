"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[673],{4114:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"API/asyncapi","title":"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f","description":"\u041a\u043e\u0434 \u0434\u043b\u044f AsyncAPI","source":"@site/docs/API/asyncapi.md","sourceDirName":"API","slug":"/API/asyncapi","permalink":"/fintech/docs/API/asyncapi","draft":false,"unlisted":false,"editUrl":"https://github.com/nastyabel/fintech/docs/API/asyncapi.md","tags":[],"version":"current","frontMatter":{"title":"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f","hide_table_of_contents":true},"sidebar":"tutorialSidebar","previous":{"title":"API","permalink":"/fintech/docs/category/api"},"next":{"title":"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f","permalink":"/fintech/docs/API/madebyhandapi"}}');var i=t(4848),a=t(8453);const o={title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",hide_table_of_contents:!0},c=void 0,r={},d=[{value:"\u041a\u043e\u0434 \u0434\u043b\u044f AsyncAPI",id:"\u043a\u043e\u0434-\u0434\u043b\u044f-asyncapi",level:3}];function p(n){const e={code:"code",h3:"h3",pre:"pre",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"\u043a\u043e\u0434-\u0434\u043b\u044f-asyncapi",children:"\u041a\u043e\u0434 \u0434\u043b\u044f AsyncAPI"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",children:"asyncapi: 3.0.0\ninfo:\n  title: \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435 Made by hand\n  version: 1.0.0\n  description: \u0421\u0435\u0440\u0432\u0438\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u043e \u043d\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u0445 \u0432 \u0447\u0430\u0442\u0435 \u043c\u0435\u0436\u0434\u0443 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u043e\u043c \u0438 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u043c\n\nservers:\n  production:\n    host: 'rabbitmq.in.madebyhand.com:5672'\n    protocol: amqp\n\nchannels:\n  chats/notifications:\n    address: chats/notifications\n    description: \u041a\u0430\u043d\u0430\u043b \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u043e \u043d\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u0445 \u0432 \u0447\u0430\u0442\u0435\n    messages:\n      message:\n        $ref: '#/components/messages/ChatNotification'\n\noperations:\n  chats/notifications:\n    action: send\n    channel:\n      $ref: '#/channels/chats~1notifications'\n    messages:\n      - $ref: '#/channels/chats~1notifications/messages/message'\n\ncomponents:\n  messages:\n    ChatNotification:\n      name: ChatNotification\n      title: \u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e \u043d\u043e\u0432\u043e\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438\n      payload:\n        type: object\n        properties:\n          userId:\n            type: string\n            description: ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e \u043d\u043e\u0432\u043e\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438\n          orderTitle:\n            type: string\n            description: \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0438\u0434\u0435\u0442 \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u044f \u0432 \u0447\u0430\u0442\u0435\n          senderName:\n            type: string\n            description: \u0418\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\n          message:\n            type: string\n            description: \u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\n"})})]})}function l(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var s=t(6540);const i={},a=s.createContext(i);function o(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);