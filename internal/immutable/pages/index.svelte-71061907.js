import{S,i as C,s as I,F as ae,K as M,L as A,p as E,h as v,q as u,b as B,G as re,H as ue,I as fe,f as $,t as x,o as F,M as z,u as se,v as ie,J as D,w as le,n as O,N as Y,x as N,e as j,y as H,z as V,O as q,g as G,C as K,d as J,P as ce,Q as _e,l as T,m as W,a as me,c as pe,R as Q,T as de}from"../chunks/index-bb752419.js";const R={custom:Symbol("custom data")},U=function(){let n=new Map,e=new ResizeObserver(function(l){for(const a of l)n.get(a.target)(a)}),{observe:t,unobserve:i}=e;return e.observe=(l,a=()=>{})=>{t&&t.call(e,l),n.set(l,a)},e.unobserve=(l,a=()=>{})=>{i&&i.call(e,l),n.delete(l,a)},e}();function P(n={},e={}){for(const[t,i]of Object.entries(e))n[t]===void 0&&(n[t]=i);return n}const he=n=>P(n,{type:"display",x:0,y:0,size:500,min:400,max:1500,increase:100}),ge=n=>P(n,{type:"concept",x:0,y:0,text:"????"}),ye=n=>P(n,{type:"connection",x:0,y:0,text:"????",componentA:null,componentB:null});function X(n,e){if(!n.dataset||n.dataset.type)return n;for(let t=n;t!==e&&t!==null;t=t.parentElement){const{dataset:i}=t;if(!!i.type)return t}return null}function ve(n,{onBegin:e=()=>!0,onDrag:t=()=>{},onEnd:i=()=>{}}){function l(a){a.preventDefault();const r={node:n};if(!e({event:a,data:r}))return;const o=a.clientX,s=a.clientY;function c(h){const m=h.clientX-o,_=h.clientY-s;t({event:h,dx:m,dy:_,data:r})}function d(h){h.button===a.button&&(i({event:h,data:r}),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",d))}window.addEventListener("mousemove",c),window.addEventListener("mouseup",d)}return n.addEventListener("mousedown",l),{destroy(){n.removeEventListener("mousemove",l)}}}function be(n,e=()=>{}){function t(i){i.preventDefault(),e({event:i,node:n})}return n.addEventListener("wheel",t),{destroy(){n.removeEventListener("wheel",t)}}}function we(n){let e,t,i,l;const a=n[3].default,r=ae(a,n,n[2],null);return{c(){e=M("svg"),r&&r.c(),this.h()},l(o){e=A(o,"svg",{preserveAspectRatio:!0,"data-type":!0,class:!0,viewBox:!0});var s=E(e);r&&r.l(s),s.forEach(v),this.h()},h(){u(e,"preserveAspectRatio","xMidYMid meet"),u(e,"data-type",t=n[1].type),u(e,"class","w-full h-full bg-slate-500"),u(e,"viewBox",i=-n[1].x+" "+-n[1].y+" "+n[1].size+" "+n[1].size)},m(o,s){B(o,e,s),r&&r.m(e,null),n[4](e),l=!0},p(o,[s]){r&&r.p&&(!l||s&4)&&re(r,a,o,o[2],l?fe(a,o[2],s,null):ue(o[2]),null),(!l||s&2&&t!==(t=o[1].type))&&u(e,"data-type",t),(!l||s&2&&i!==(i=-o[1].x+" "+-o[1].y+" "+o[1].size+" "+o[1].size))&&u(e,"viewBox",i)},i(o){l||($(r,o),l=!0)},o(o){x(r,o),l=!1},d(o){o&&v(e),r&&r.d(o),n[4](null)}}}function Ee(n,e,t){let{$$slots:i={},$$scope:l}=e,{data:a={}}=e,{element:r}=e;F(()=>{t(0,r[R.custom]=a,r)});function o(s){z[s?"unshift":"push"](()=>{r=s,t(0,r)})}return n.$$set=s=>{"data"in s&&t(1,a=s.data),"element"in s&&t(0,r=s.element),"$$scope"in s&&t(2,l=s.$$scope)},[r,a,l,i,o]}class oe extends S{constructor(e){super(),C(this,e,Ee,we,I,{data:1,element:0})}}function $e(n){let e,t,i,l,a,r,o,s=n[0].text+"",c,d,h,m;return{c(){e=M("g"),t=M("rect"),o=M("text"),c=se(s),this.h()},l(_){e=A(_,"g",{"data-type":!0});var f=E(e);t=A(f,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,fill:!0}),E(t).forEach(v),o=A(f,"text",{x:!0,y:!0,"text-anchor":!0,"dominant-baseline":!0,fill:!0});var g=E(o);c=ie(g,s),g.forEach(v),f.forEach(v),this.h()},h(){u(t,"x",i=n[0].x-L-n[3]/2),u(t,"y",l=n[0].y-L-n[4]/2),u(t,"width",a=n[3]+L*2),u(t,"height",r=n[4]+L*2),u(t,"rx",10),u(t,"fill","black"),u(o,"x",d=n[0].x),u(o,"y",h=n[0].y),u(o,"text-anchor","middle"),u(o,"dominant-baseline","middle"),u(o,"fill","white"),u(e,"data-type",m=n[0].type)},m(_,f){B(_,e,f),D(e,t),D(e,o),D(o,c),n[5](o),n[6](e)},p(_,[f]){f&9&&i!==(i=_[0].x-L-_[3]/2)&&u(t,"x",i),f&17&&l!==(l=_[0].y-L-_[4]/2)&&u(t,"y",l),f&8&&a!==(a=_[3]+L*2)&&u(t,"width",a),f&16&&r!==(r=_[4]+L*2)&&u(t,"height",r),f&1&&s!==(s=_[0].text+"")&&le(c,s),f&1&&d!==(d=_[0].x)&&u(o,"x",d),f&1&&h!==(h=_[0].y)&&u(o,"y",h),f&1&&m!==(m=_[0].type)&&u(e,"data-type",m)},i:O,o:O,d(_){_&&v(e),n[5](null),n[6](null)}}}let L=8;function ke(n,e,t){let{data:i={}}=e,l,a,r=0,o=0;F(()=>(U.observe(a,d=>{const h=d.contentRect;t(3,r=h.width),t(4,o=h.height)}),t(1,l[R.custom]=i,l),()=>{U.unobserve(a)}));function s(d){z[d?"unshift":"push"](()=>{a=d,t(2,a)})}function c(d){z[d?"unshift":"push"](()=>{l=d,t(1,l)})}return n.$$set=d=>{"data"in d&&t(0,i=d.data)},[i,l,a,r,o,s,c]}class xe extends S{constructor(e){super(),C(this,e,ke,$e,I,{data:0})}}function ze(n){let e,t,i,l,a,r,o,s,c,d,h,m,_=n[0].text+"",f,g,b,w;return{c(){e=M("g"),t=M("line"),o=M("line"),m=M("text"),f=se(_),this.h()},l(p){e=A(p,"g",{"data-type":!0});var y=E(e);t=A(y,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0}),E(t).forEach(v),o=A(y,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0}),E(o).forEach(v),m=A(y,"text",{x:!0,y:!0,"text-anchor":!0,"dominant-baseline":!0,fill:!0});var k=E(m);f=ie(k,_),k.forEach(v),y.forEach(v),this.h()},h(){u(t,"x1",i=n[0].componentA.x),u(t,"y1",l=n[0].componentA.y),u(t,"x2",a=n[0].x),u(t,"y2",r=n[0].y),u(t,"stroke","white"),u(o,"x1",s=n[0].componentB.x),u(o,"y1",c=n[0].componentB.y),u(o,"x2",d=n[0].x),u(o,"y2",h=n[0].y),u(o,"stroke","white"),u(m,"x",g=n[0].x),u(m,"y",b=n[0].y),u(m,"text-anchor","middle"),u(m,"dominant-baseline","middle"),u(m,"fill","black"),u(e,"data-type",w=n[0].type)},m(p,y){B(p,e,y),D(e,t),D(e,o),D(e,m),D(m,f),n[2](e)},p(p,[y]){y&1&&i!==(i=p[0].componentA.x)&&u(t,"x1",i),y&1&&l!==(l=p[0].componentA.y)&&u(t,"y1",l),y&1&&a!==(a=p[0].x)&&u(t,"x2",a),y&1&&r!==(r=p[0].y)&&u(t,"y2",r),y&1&&s!==(s=p[0].componentB.x)&&u(o,"x1",s),y&1&&c!==(c=p[0].componentB.y)&&u(o,"y1",c),y&1&&d!==(d=p[0].x)&&u(o,"x2",d),y&1&&h!==(h=p[0].y)&&u(o,"y2",h),y&1&&_!==(_=p[0].text+"")&&le(f,_),y&1&&g!==(g=p[0].x)&&u(m,"x",g),y&1&&b!==(b=p[0].y)&&u(m,"y",b),y&1&&w!==(w=p[0].type)&&u(e,"data-type",w)},i:O,o:O,d(p){p&&v(e),n[2](null)}}}function Be(n,e,t){let{data:i={}}=e,l;F(()=>{t(1,l[R.custom]=i,l)});function a(r){z[r?"unshift":"push"](()=>{l=r,t(1,l)})}return n.$$set=r=>{"data"in r&&t(0,i=r.data)},[i,l,a]}class De extends S{constructor(e){super(),C(this,e,Be,ze,I,{data:0})}}function Le(n){let e,t,i,l;function a(s){n[1](s)}var r=Z[n[0].type];function o(s){let c={};return s[0]!==void 0&&(c.data=s[0]),{props:c}}return r&&(e=new r(o(n)),z.push(()=>Y(e,"data",a))),{c(){e&&N(e.$$.fragment),i=j()},l(s){e&&H(e.$$.fragment,s),i=j()},m(s,c){e&&V(e,s,c),B(s,i,c),l=!0},p(s,[c]){const d={};if(!t&&c&1&&(t=!0,d.data=s[0],q(()=>t=!1)),r!==(r=Z[s[0].type])){if(e){G();const h=e;x(h.$$.fragment,1,0,()=>{K(h,1)}),J()}r?(e=new r(o(s)),z.push(()=>Y(e,"data",a)),N(e.$$.fragment),$(e.$$.fragment,1),V(e,i.parentNode,i)):e=null}else r&&e.$set(d)},i(s){l||(e&&$(e.$$.fragment,s),l=!0)},o(s){e&&x(e.$$.fragment,s),l=!1},d(s){s&&v(i),e&&K(e,s)}}}const Z={display:oe,concept:xe,connection:De};function Me(n,e,t){let{data:i={}}=e;function l(a){i=a,t(0,i)}return n.$$set=a=>{"data"in a&&t(0,i=a.data)},[i,l]}class Ae extends S{constructor(e){super(),C(this,e,Me,Le,I,{data:0})}}function ee(n,e,t){const i=n.slice();return i[2]=e[t],i[3]=e,i[4]=t,i}function te(n,e){let t,i,l,a;function r(s){e[1](s,e[2],e[3],e[4])}let o={};return e[2]!==void 0&&(o.data=e[2]),i=new Ae({props:o}),z.push(()=>Y(i,"data",r)),{key:n,first:null,c(){t=j(),N(i.$$.fragment),this.h()},l(s){t=j(),H(i.$$.fragment,s),this.h()},h(){this.first=t},m(s,c){B(s,t,c),V(i,s,c),a=!0},p(s,c){e=s;const d={};!l&&c&1&&(l=!0,d.data=e[2],q(()=>l=!1)),i.$set(d)},i(s){a||($(i.$$.fragment,s),a=!0)},o(s){x(i.$$.fragment,s),a=!1},d(s){s&&v(t),K(i,s)}}}function Se(n){let e=[],t=new Map,i,l,a=n[0];const r=o=>o[2];for(let o=0;o<a.length;o+=1){let s=ee(n,a,o),c=r(s);t.set(c,e[o]=te(c,s))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();i=j()},l(o){for(let s=0;s<e.length;s+=1)e[s].l(o);i=j()},m(o,s){for(let c=0;c<e.length;c+=1)e[c].m(o,s);B(o,i,s),l=!0},p(o,[s]){s&1&&(a=o[0],G(),e=ce(e,s,r,1,o,a,t,i.parentNode,_e,te,i,ee),J())},i(o){if(!l){for(let s=0;s<a.length;s+=1)$(e[s]);l=!0}},o(o){for(let s=0;s<e.length;s+=1)x(e[s]);l=!1},d(o){for(let s=0;s<e.length;s+=1)e[s].d(o);o&&v(i)}}}function Ce(n,e,t){let{components:i=[]}=e;function l(a,r,o,s){o[s]=a,t(0,i)}return n.$$set=a=>{"components"in a&&t(0,i=a.components)},[i,l]}class Ie extends S{constructor(e){super(),C(this,e,Ce,Se,I,{components:0})}}function Re(n){let e;return{c(){e=T("div"),this.h()},l(t){e=W(t,"DIV",{class:!0}),E(e).forEach(v),this.h()},h(){u(e,"class","w-full h-full bg-blue-400")},m(t,i){B(t,e,i)},p:O,i:O,o:O,d(t){t&&v(e)}}}class Oe extends S{constructor(e){super(),C(this,e,null,Re,I,{})}}function Ye(n){let e,t,i;function l(r){n[8](r)}let a={};return n[0]!==void 0&&(a.components=n[0]),e=new Ie({props:a}),z.push(()=>Y(e,"components",l)),{c(){N(e.$$.fragment)},l(r){H(e.$$.fragment,r)},m(r,o){V(e,r,o),i=!0},p(r,o){const s={};!t&&o&1&&(t=!0,s.components=r[0],q(()=>t=!1)),e.$set(s)},i(r){i||($(e.$$.fragment,r),i=!0)},o(r){x(e.$$.fragment,r),i=!1},d(r){K(e,r)}}}function ne(n){let e,t,i;return t=new Oe({}),{c(){e=T("div"),N(t.$$.fragment),this.h()},l(l){e=W(l,"DIV",{class:!0});var a=E(e);H(t.$$.fragment,a),a.forEach(v),this.h()},h(){u(e,"class","absolute top-4 right-4 bottom-4 w-1/3 min-w-[288px] rounded-3xl overflow-hidden")},m(l,a){B(l,e,a),V(t,e,null),i=!0},i(l){i||($(t.$$.fragment,l),i=!0)},o(l){x(t.$$.fragment,l),i=!1},d(l){l&&v(e),K(t)}}}function Ne(n){let e,t,i,l,a,r,o,s;function c(_){n[9](_)}function d(_){n[10](_)}let h={$$slots:{default:[Ye]},$$scope:{ctx:n}};n[2]!==void 0&&(h.element=n[2]),n[1]!==void 0&&(h.data=n[1]),t=new oe({props:h}),z.push(()=>Y(t,"element",c)),z.push(()=>Y(t,"data",d));let m=n[3]&&ne();return{c(){e=T("div"),N(t.$$.fragment),a=me(),m&&m.c(),this.h()},l(_){e=W(_,"DIV",{class:!0});var f=E(e);H(t.$$.fragment,f),a=pe(f),m&&m.l(f),f.forEach(v),this.h()},h(){u(e,"class","w-full h-full relative")},m(_,f){B(_,e,f),V(t,e,null),D(e,a),m&&m.m(e,null),r=!0,o||(s=[Q(be.call(null,e,n[7])),Q(ve.call(null,e,{onBegin:n[4],onDrag:n[5],onEnd:n[6]}))],o=!0)},p(_,[f]){const g={};f&2049&&(g.$$scope={dirty:f,ctx:_}),!i&&f&4&&(i=!0,g.element=_[2],q(()=>i=!1)),!l&&f&2&&(l=!0,g.data=_[1],q(()=>l=!1)),t.$set(g),_[3]?m?f&8&&$(m,1):(m=ne(),m.c(),$(m,1),m.m(e,null)):m&&(G(),x(m,1,1,()=>{m=null}),J())},i(_){r||($(t.$$.fragment,_),$(m),r=!0)},o(_){x(t.$$.fragment,_),x(m),r=!1},d(_){_&&v(e),K(t),m&&m.d(),o=!1,de(s)}}}function Ve(n,e,t){let{components:i=[]}=e,l=he({}),a,r=null;function o({event:f,data:g}){const b=X(f.target,g.node);return b===null?!1:(g.isSelect=!0,g.closest_begin={element:b,data:b[R.custom],position:{x:b[R.custom].x,y:b[R.custom].y}},!0)}function s({event:f,dx:g,dy:b,data:w}){w.isSelect&&Math.abs(g)+Math.abs(b)>10&&(w.isSelect=!1);const{closest_begin:p}=w;if(p.data.x=p.position.x,p.data.y=p.position.y,!f.shiftKey){const y=Math.min(a.clientWidth,a.clientHeight),k=l.size/y;p.data.x+=g*k,p.data.y+=b*k}p.data===l&&t(1,l),t(0,i)}function c({event:f,data:g}){if(g.isSelect){g.closest_begin.data===l?t(3,r=null):t(3,r=g.closest_begin.element);return}const{closest_begin:b}=g,w=X(f.target,g.node);if(w===null||b===w)return;const p=w[R.custom];p!==l&&f.shiftKey&&t(0,i[i.length]=ye({x:(b.data.x+p.x)/2,y:(b.data.y+p.y)/2,componentA:b.data,componentB:p}),i)}function d({event:f,node:g}){if(X(f.target,g)!==a)return;const w=Math.sign(f.deltaY);if(w===0)return;let p=w*l.increase;if(w===-1){const k=l.size+p;k<=l.min&&(p=p-(k-l.min))}else{const k=l.size+p;k>=l.max&&(p=p-(k-l.max))}const y=p/2;t(1,l.size+=p,l),t(1,l.x+=y,l),t(1,l.y+=y,l)}function h(f){i=f,t(0,i)}function m(f){a=f,t(2,a)}function _(f){l=f,t(1,l)}return n.$$set=f=>{"components"in f&&t(0,i=f.components)},[i,l,a,r,o,s,c,d,h,m,_]}class Ke extends S{constructor(e){super(),C(this,e,Ve,Ne,I,{components:0})}}function je(n){let e,t,i,l,a;function r(s){n[1](s)}let o={};return n[0]!==void 0&&(o.components=n[0]),i=new Ke({props:o}),z.push(()=>Y(i,"components",r)),{c(){e=T("main"),t=T("div"),N(i.$$.fragment),this.h()},l(s){e=W(s,"MAIN",{class:!0});var c=E(e);t=W(c,"DIV",{class:!0});var d=E(t);H(i.$$.fragment,d),d.forEach(v),c.forEach(v),this.h()},h(){u(t,"class","w-screen h-screen"),u(e,"class","svelte-17zssja")},m(s,c){B(s,e,c),D(e,t),V(i,t,null),a=!0},p(s,[c]){const d={};!l&&c&1&&(l=!0,d.components=s[0],q(()=>l=!1)),i.$set(d)},i(s){a||($(i.$$.fragment,s),a=!0)},o(s){x(i.$$.fragment,s),a=!1},d(s){s&&v(e),K(i)}}}function qe(n,e,t){let i=[];for(let a=0;a<5;a++)i.push(ge({x:100,y:100,text:`Concept-${a}`}));i=i;function l(a){i=a,t(0,i)}return[i,l]}class Te extends S{constructor(e){super(),C(this,e,qe,je,I,{})}}export{Te as default};
