import{s as z,n as $,o as q,e as A}from"../chunks/scheduler.y4_yNQPW.js";import{S as B,i as F,s as b,g as u,B as G,f as c,c as g,h as x,j as E,x as C,k as v,a as m,y as h,d as w,A as M}from"../chunks/index.Egxh8LVy.js";import{f as j}from"../chunks/index.tptnM1PD.js";function T(I){let s,e,i="Hi,",y,_,a,t="I'm",n,d,r,V="Vidhu",D,S,p,L='<img src="/blog/vidhu.jpg" class="rounded-full h-64 w-64 inline-block " alt="vidhu pic"/>',H,k,f,N='<span class="text-purple-300">More about me</span> <span class="text-purple-400"><a href="/blog">in the blogs!</a></span>',P;return{c(){s=u("div"),e=u("span"),e.textContent=i,_=b(),a=u("span"),a.textContent=t,d=b(),r=u("span"),r.textContent=V,S=b(),p=u("span"),p.innerHTML=L,k=b(),f=u("div"),f.innerHTML=N,this.h()},l(l){s=x(l,"DIV",{class:!0});var o=E(s);e=x(o,"SPAN",{class:!0,"data-svelte-h":!0}),C(e)!=="svelte-72wftv"&&(e.textContent=i),_=g(o),a=x(o,"SPAN",{class:!0,"data-svelte-h":!0}),C(a)!=="svelte-1cwlxzb"&&(a.textContent=t),d=g(o),r=x(o,"SPAN",{class:!0,"data-svelte-h":!0}),C(r)!=="svelte-4p4dsp"&&(r.textContent=V),o.forEach(c),S=g(l),p=x(l,"SPAN",{class:!0,"data-svelte-h":!0}),C(p)!=="svelte-lr10tn"&&(p.innerHTML=L),k=g(l),f=x(l,"DIV",{class:!0,"data-svelte-h":!0}),C(f)!=="svelte-nmyi9h"&&(f.innerHTML=N),this.h()},h(){v(e,"class","text-purple-300"),v(a,"class","text-purple-300"),v(r,"class","text-purple-300 "),v(s,"class","text-9xl text-purple-400 py-16"),v(p,"class","text-purple-300 grid place-items-center"),v(f,"class","text-4xl text-purple-300 py-20")},m(l,o){m(l,s,o),h(s,e),h(s,_),h(s,a),h(s,d),h(s,r),m(l,S,o),m(l,p,o),m(l,k,o),m(l,f,o)},i(l){l&&(y||A(()=>{y=M(e,j,{delay:200}),y.start()})),l&&(n||A(()=>{n=M(a,j,{delay:800}),n.start()})),l&&(D||A(()=>{D=M(r,j,{delay:1e3}),D.start()})),l&&(H||A(()=>{H=M(p,j,{delay:1800}),H.start()})),l&&(P||A(()=>{P=M(f,j,{delay:2e3}),P.start()}))},o:$,d(l){l&&(c(s),c(S),c(p),c(k),c(f))}}}function J(I){let s,e,i,y="About Me",_,a,t=I[0]&&T();return{c(){s=b(),e=u("div"),i=u("div"),i.textContent=y,_=b(),a=u("div"),t&&t.c(),this.h()},l(n){G("svelte-jnj2cx",document.head).forEach(c),s=g(n),e=x(n,"DIV",{class:!0});var r=E(e);i=x(r,"DIV",{class:!0,"data-svelte-h":!0}),C(i)!=="svelte-1oji463"&&(i.textContent=y),_=g(r),a=x(r,"DIV",{class:!0});var V=E(a);t&&t.l(V),V.forEach(c),r.forEach(c),this.h()},h(){document.title=`\r
        Vidhu's Villa - About\r
    `,v(i,"class","my-16 bg-gray-700 text-6xl h-30 text-custom mx-auto grid place-items-center rounded-3xl svelte-7r3z11"),v(a,"class","flex flex-col items-center justify-center"),v(e,"class","flex flex-col bg-gray-700 h-screen overflow-hidden")},m(n,d){m(n,s,d),m(n,e,d),h(e,i),h(e,_),h(e,a),t&&t.m(a,null)},p(n,[d]){n[0]?t?d&1&&w(t,1):(t=T(),t.c(),w(t,1),t.m(a,null)):t&&(t.d(1),t=null)},i(n){w(t)},o:$,d(n){n&&(c(s),c(e)),t&&t.d()}}}function K(I,s,e){let i=!1;return q(()=>{e(0,i=!0)}),[i]}class U extends B{constructor(s){super(),F(this,s,K,J,z,{})}}export{U as component};