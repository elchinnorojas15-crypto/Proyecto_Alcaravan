/** Compute Engine 0.173.0 */
import{$d as $i,$e as Di,Ae as Wr,Be as Mt,Ce as Yr,De as on,Ee as Hn,Fe as p,Ge as Ii,He as Wn,Le as Ni,Me as Gi,Ne as $n,Oe as Mi,Pe as Oi,Qd as wi,Qe as Ot,Re as Yn,Se as Me,Te as B,Ue as Y,Ve as ji,We as Ui,Xe as sn,Ye as En,Ze as Bi,_d as qr,_e as qi,ad as yi,ae as Ft,af as Vi,bd as xi,be as Ei,bf as jt,ce as It,cf as Ut,de as qn,ee as zi,ef as Hi,fe as ht,ff as Wi,ge as Ci,gf as Yi,he as gt,hf as Zr,ie as Ge,if as Zi,je as Te,jf as Ki,ke as Dr,kf as Bt,le as Si,me as ki,ne as Vr,oe as Nt,pe as _t,qe as Pi,re as Dn,se as Gt,te as Hr,ue as Vn,ve as Ri,we as Ai,xe as Ti,ye as Li,ze as Fi}from"./chunk-UMF7DJYD.js";import{a as Br}from"./chunk-EPQBOIX4.js";import{F as bi,H as vi}from"./chunk-GWH7EXMQ.js";import{e as mt}from"./chunk-7SGWDGIK.js";import{Eb as pi,Ec as mi,Ia as _,La as wn,Ld as hi,Le as gi,Ph as Ze,Td as jr,We as _i,a as Re,ad as Tt,b as pt,ec as Or,gb as Mr,gc as di,kb as dt,ll as Lt,ya as O,za as E}from"./chunk-3ML7YZCG.js";import{r as Ur}from"./chunk-GRCAVB6X.js";import{f as Gr}from"./chunk-PYWK5YJO.js";import{Aa as Pe,Cb as xn,Fb as ct,Ka as U,Q as nn,S as ri,Tb as tn,gc as Ne,ib as oi,ic as Nr,k as yn,l as Un,lc as li,ob as ii,pb as si,qb as Bn,qc as W,sb as ai}from"./chunk-MZ7EMIZ4.js";import{V as ui,W as fi,Z as ci,b as oe,j as rn}from"./chunk-PSQZ3JCG.js";var Xi=2**24,Dt=new WeakMap;function qt(e,n){return Number.isInteger(e)&&Number.isInteger(n)&&e>=-Xi&&n<=Xi&&e<=n}function Kr(e,n,t,r,o){if(!e.boundVars||!qt(t,r))return;let i=Dt.get(e.boundVars);i||Dt.set(e.boundVars,i=new Map);let s=e.var(n);s!==void 0&&i.set(n,{min:t,max:r,code:o,reference:s})}function Xr(e){e.boundVars&&Dt.delete(e.boundVars)}function Jr(e,n,t,r=0){if(r>32)return;if(O(e))return!e.isComplex&&qt(e.re,e.re)?{min:e.re,max:e.re,code:String(e.re)}:void 0;if(E(e)){let l=n.boundVars?Dt.get(n.boundVars)?.get(e.symbol):void 0;return l&&l.reference===n.var(e.symbol)?l:void 0}if(!_(e)||qn(e)||!t(e.operator)||!["Add","Subtract","Negate","Multiply"].includes(e.operator))return;let o=e.ops.map(l=>Jr(l,n,t,r+1));if(o.some(l=>l===void 0))return;let i=o;if(e.operator==="Negate"&&i.length===1){let l=i[0];return{min:-l.max,max:-l.min,code:`(-(${l.code}))`}}if(e.operator==="Subtract"&&i.length===2){let[l,u]=i,f=l.min-u.max,c=l.max-u.min;return qt(f,c)?{min:f,max:c,code:`(${l.code} - ${u.code})`}:void 0}if(!["Add","Multiply"].includes(e.operator)||i.length===0)return;let s=e.operator==="Multiply",a=i[0];for(let l of i.slice(1)){let u=s?[a.min*l.min,a.min*l.max,a.max*l.min,a.max*l.max]:[a.min+l.min,a.max+l.max],f=Math.min(...u),c=Math.max(...u);if(!qt(f,c))return;a={min:f,max:c,code:`(${a.code} ${s?"*":"+"} ${l.code})`}}return a}var ou=new Set(["Add","Subtract","Negate","Multiply","Divide","Rational","Power","Sqrt","Root"]);function es(e){if(O(e))return!e.isComplex&&e.isFinite===!0;if(!_(e)||!ou.has(e.operator))return!1;if(e.operator==="Power"){let n=e.ops[1];if(n===void 0||!O(n)||!(Math.abs(n.re)<=4096))return!1}return e.ops.every(es)}function Zn(e){if(!es(e))return;let n=O(e)?e:e.evaluate();return O(n)&&!n.isComplex&&n.isFinite===!0?n:void 0}function bt(e){if(!O(e))return;let n=e.numericValue,t=typeof n=="number"?new oe(n):n.bignumRe;return t!==void 0&&t.isFinite()?t:void 0}function no(e,n,t){let r=()=>{let i=oe.ZERO;for(let s of e){let a=bt(s);if(a===void 0)return;i=i.add(a)}if(n.length>0){let s=oe.ZERO;for(let a of n){let l=bt(a);if(l===void 0)return;s=s.add(l)}i=i.add(s.mul(oe.PI))}return i},o=oe.precision;try{oe.precision=50;let i=r();if(i===void 0)return;if(i.isZero())return t(i);let s=i.significand<0n?-i.significand:i.significand,a=i.exponent+s.toString().length;if(a>1e4)return;oe.precision=Math.max(50,a+30);let l=r();return l===void 0?void 0:t(l)}finally{oe.precision=o}}var iu=26e6,su=5e4,au=1e-4,ns=`
uniform highp uint _gpu_zero_u;
highp float _gpu_opq(highp float v) {
  return uintBitsToFloat(floatBitsToUint(v) ^ _gpu_zero_u);
}

highp vec2 _gpu_two_sum(highp float fa, highp float fb) {
  highp float a = _gpu_opq(fa);
  highp float b = _gpu_opq(fb);
  highp float s = _gpu_opq(a + b);
  highp float bb = _gpu_opq(s - a);
  return vec2(s, _gpu_opq(a - _gpu_opq(s - bb)) + _gpu_opq(b - bb));
}

highp vec2 _gpu_two_prod(highp float fa, highp float fb) {
  highp float a = _gpu_opq(fa);
  highp float b = _gpu_opq(fb);
  highp float p = _gpu_opq(a * b);
  highp uint ua = floatBitsToUint(a);
  highp uint ub = floatBitsToUint(b);
  if (!(abs(p) >= 1e-30 && abs(p) <= 1e30) || (ua & 0x7F800000u) == 0u || (ub & 0x7F800000u) == 0u) return vec2(p, 0.0);
  highp uint up = floatBitsToUint(p);
  highp uint ma = (ua & 0x7FFFFFu) | 0x800000u;
  highp uint mb = (ub & 0x7FFFFFu) | 0x800000u;
  highp uint mp = (up & 0x7FFFFFu) | 0x800000u;
  highp int sc = int((ua >> 23) & 0xFFu) + int((ub >> 23) & 0xFFu) - 300;
  highp int s = int((up >> 23) & 0xFFu) - 150 - sc;
  highp uint a1 = ma >> 12;
  highp uint a0 = ma & 0xFFFu;
  highp uint b1 = mb >> 12;
  highp uint b0 = mb & 0xFFFu;
  highp uint lo = a0 * b0 + ((a1 * b0 + a0 * b1) << 12) + ((a1 * b1) << 24);
  highp uint d = lo - (mp << uint(s));
  highp int r = (d & 0x80000000u) != 0u ? -int(~d + 1u) : int(d);
  highp float sgn = ((ua ^ ub) & 0x80000000u) != 0u ? -1.0 : 1.0;
  highp int h = sc / 2;
  return vec2(p, sgn * float(r) * uintBitsToFloat(uint(h + 127) << 23) * uintBitsToFloat(uint(sc - h + 127) << 23));
}

highp vec4 _gpu_xred_fix(highp vec4 a) {
  highp float r = a.x;
  highp float lo = a.y;
  highp float k = floor(_gpu_opq((r + lo) * 0.636619772) + 0.5);
  highp vec2 t = _gpu_two_sum(r, -(k * 1.5703125));
  r = t.x;
  lo += t.y;
  t = _gpu_two_sum(r, -(k * 4.8375129699707031e-4));
  r = t.x;
  lo += t.y;
  lo -= k * 7.5495336204767227e-8 + k * 2.5632829192545614e-12;
  highp float q = a.z + k;
  return vec4(r, lo, q - 4.0 * floor(q / 4.0), a.w);
}

highp vec4 _gpu_xred(highp float x, highp float khi, highp float klo, highp float xmax) {
  highp vec2 pe = _gpu_two_prod(x, khi);
  highp vec2 qe = _gpu_two_prod(x, klo);
  highp float p = pe.x;
  highp float k = floor(_gpu_opq(p * 0.636619772) + 0.5);
  highp float kh = floor(k / 4096.0);
  highp float kl = k - kh * 4096.0;
  highp vec2 s = _gpu_two_sum((kh * 1.5703125) * 4096.0, kl * 1.5703125);
  highp float r = _gpu_opq(p - s.x);
  highp vec2 t = _gpu_two_sum(r, -(kh * 4.8375129699707031e-4) * 4096.0);
  r = t.x;
  highp float lo = t.y;
  t = _gpu_two_sum(r, -(kl * 4.8375129699707031e-4));
  r = t.x;
  lo += t.y;
  t = _gpu_two_sum(r, -(kh * 7.5495336204767227e-8) * 4096.0);
  r = t.x;
  lo += t.y;
  t = _gpu_two_sum(r, -(kl * 7.5495336204767227e-8));
  r = t.x;
  lo += t.y;
  lo -= k * 2.5632829192545614e-12 + k * 6.1230317691118863e-17;
  t = _gpu_two_sum(r, -s.y);
  r = t.x;
  lo += t.y;
  t = _gpu_two_sum(r, pe.y);
  r = t.x;
  lo += t.y;
  t = _gpu_two_sum(r, qe.x);
  r = t.x;
  lo += t.y + qe.y;
  return _gpu_xred_fix(vec4(r, lo, k, abs(x) <= xmax ? 1.0 : 0.0));
}

highp vec4 _gpu_xred_add(highp vec4 a, highp vec4 b) {
  highp vec2 s = _gpu_two_sum(a.x, b.x);
  return _gpu_xred_fix(vec4(s.x, a.y + b.y + s.y, a.z + b.z, a.w * b.w));
}

highp vec2 _gpu_xsin(highp vec4 a) {
  highp vec2 rr = _gpu_two_sum(a.x, a.y);
  highp float rh = rr.x;
  highp float rl = rr.y;
  highp float r2 = rh * rh;
  highp float ts = (rh * r2) * (-0.166666667 + r2 * (8.33333333e-3 + r2 * (-1.98412698e-4 + r2 * 2.75573192e-6)));
  highp vec2 sn = _gpu_two_sum(rh, (rl - 0.5 * rl * r2) + ts);
  highp vec2 p2 = _gpu_two_prod(rh, rh);
  highp float tc = (p2.x * p2.x) * (4.16666667e-2 + p2.x * (-1.38888889e-3 + p2.x * (2.48015873e-5 + p2.x * -2.75573192e-7)));
  highp vec2 c1 = _gpu_two_sum(1.0, -0.5 * p2.x);
  highp vec2 cs = _gpu_two_sum(c1.x, c1.y + (-0.5 * (p2.y + 2.0 * rh * rl) + tc));
  if (a.z == 0.0) return sn;
  if (a.z == 1.0) return cs;
  if (a.z == 2.0) return -sn;
  return -cs;
}

highp float _gpu_xfract(highp vec2 s, highp float ohi, highp float olo, highp float ok) {
  highp float sx = _gpu_opq(s.x);
  highp float sy = _gpu_opq(s.y);
  highp vec2 pe = _gpu_two_prod(sx, ohi);
  highp vec2 a = _gpu_two_sum(pe.x, -floor(pe.x));
  highp float small = a.y + (pe.y + sy * ohi + sx * olo);
  highp float h = _gpu_opq(a.x + small);
  if (h >= 1.0) {
    highp float d = _gpu_opq(a.x - 1.0) + small;
    h = d >= 0.0 ? d : 0.99999994;
  }
  if (h < 0.0) {
    h = _gpu_opq(h + 1.0);
    if (h >= 1.0) h = 0.99999994;
  }
  return ok > 0.5 ? h : uintBitsToFloat(0x7FC00000u);
}

highp float _gpu_xhash_sin(highp vec4 a, highp float ohi, highp float olo) {
  return _gpu_xfract(_gpu_xsin(a), ohi, olo, a.w);
}

highp float _gpu_xhash_cos(highp vec4 a, highp float ohi, highp float olo) {
  highp float q = a.z + 1.0;
  return _gpu_xfract(_gpu_xsin(vec4(a.x, a.y, q - 4.0 * floor(q / 4.0), a.w)), ohi, olo, a.w);
}
`,Qr=new WeakMap;function Ji(e){let n=e.naming;if(n===void 0)return;let t=Qr.get(n);return t===void 0&&(t={bounds:[],warnings:[]},Qr.set(n,t)),t}function ts(e,n){let t=e.naming===void 0?void 0:Qr.get(e.naming),r=[],o=[];if(t===void 0)return{bounds:r,warnings:o};for(let{bound:i,text:s}of t.bounds)n.includes(s)&&!r.some(a=>a.operand===i.operand&&a.maxAbs===i.maxAbs)&&r.push({...i});for(let{warning:i,text:s}of t.warnings)n.includes(s)&&!o.some(a=>a.code===i.code&&a.value===i.value)&&o.push({...i});return{bounds:r,warnings:o}}var lu=new Set(["Sin","Cos","Tan","Cot","Sec","Csc"]);function Vt(e){let n=Zn(e);return n===void 0?void 0:n.re}function rs(e){if(!_(e))return!1;let n=t=>{let r=Vt(t);return r!==void 0&&Math.abs(r)>=1e3};if(e.operator==="Multiply"&&e.ops.some(n))return!0;if(e.operator==="Divide"){let t=e.ops[1]===void 0?void 0:Vt(e.ops[1]);if(t!==void 0&&t!==0&&Math.abs(t)<=.001)return!0}return e.operator==="Dot"&&e.ops.some(t=>(_(t,"List")||_(t,"Tuple"))&&t.ops.some(n))?!0:e.ops.some(rs)}function uu(e){let n=(t,r,o)=>{if(!_(t))return!1;if(lu.has(t.operator))return o||t.ops.some(rs)||t.ops.some(i=>n(i,!1,!1));if(!r)return t.ops.some(i=>n(i,!1,!1));switch(t.operator){case"Multiply":{let i=t.ops.some(s=>{let a=Vt(s);return a!==void 0&&Math.abs(a)>=1e3});return t.ops.some(s=>n(s,!0,o||i))}case"Divide":{let i=t.ops[1]===void 0?void 0:Vt(t.ops[1]),s=i!==void 0&&i!==0&&Math.abs(i)<=.001;return n(t.ops[0],!0,o||s)||t.ops[1]!==void 0&&n(t.ops[1],!1,!1)}case"Negate":case"Add":case"Subtract":case"Abs":return t.ops.some(i=>n(i,!0,o));default:return t.ops.some(i=>n(i,!1,!1))}};return n(e,!0,!1)}function os(e,n){return n===void 0||n.size===0||!_(e)?!1:n.has(e.operator)||e.ops.some(t=>os(t,n))}function is(e,n){return E(e)?n.varsKeys?.has(e.symbol)===!0?!0:n.boundVars?.has(e.symbol)===!0?!1:e.value===void 0:!1}function eo(e,n){if(E(e))return e.type.matches("integer")?2**24:is(e,n)?1/0:void 0;let t=o=>{if(O(o)){if(o.isComplex)return;let i=o.re;return Number.isInteger(i)&&Math.abs(i)<2**24?1:Number.isInteger(i*256)&&Math.abs(i)<2**16?256:void 0}if(E(o))return o.type.matches("integer")?1:void 0;if(_(o)){if(["Floor","Ceil","Round","Truncate"].includes(o.operator))return o.nops===1&&o.ops[0]!==void 0&&eo(o.ops[0],n)!==void 0?1:void 0;if(["Add","Subtract","Negate"].includes(o.operator)){let i=1;for(let s of o.ops){let a=t(s);if(a===void 0)return;a===256&&(i=256)}return i}if(o.operator==="Multiply")return o.ops.every(i=>t(i)===1)?1:void 0}},r=t(e);if(r!==void 0)return r===1?2**24:2**16}function fu(e,n,t){let r,o=e;if(_(e,"Multiply")&&e.nops===2){let[g,v]=O(e.ops[0])?[e.ops[0],e.ops[1]]:[e.ops[1],e.ops[0]];if(!O(g)||g.isComplex||!Number.isFinite(g.re)||Math.abs(g.re)>su)return;r=g,o=v}if(!_(o,"Sin")&&!_(o,"Cos")||p.isComplexValued(o))return;let i=o.ops[0];if(i===void 0)return;let s=[],a=[],l=[],u=g=>O(g)&&!g.isComplex&&Number.isFinite(g.re),f=g=>t(g)==="scalar"&&!p.isComplexValued(g),c=e.engine,m=(g,v,x)=>{if(!f(x))return!1;let y=eo(x,n);return y===void 0?!1:(s.push({k:g,pi:v,x,exactBelow:y}),!0)},d=g=>{let v=Zn(g);if(v!==void 0)return a.push(v),!0;let x=p.piMultiple(g),y=x===void 0?void 0:Zn(x);if(y!==void 0)return l.push(y),!0;let P=x!==void 0,w=x??g;if(_(w,"Negate")&&w.ops[0]!==void 0)return m(c.number(-1),P,w.ops[0]);if(_(w,"Multiply")){let S=w.ops.findIndex(u);if(S>=0){let z=w.ops.filter((T,I)=>I!==S);return z.length!==1?!1:m(w.ops[S],P,z[0])}}if(!P&&_(w,"Dot")&&w.nops===2){let[S,z]=w.ops,[T,I]=_(z,"List")||_(z,"Tuple")?[S,z]:[z,S];if(!(_(I,"List")||_(I,"Tuple"))||!I.ops.every(u)||t(T)!==I.nops||T.isPure===!1)return!1;let b=k=>{if(E(T))return is(T,n)?1/0:void 0;if(_(T,"List")||_(T,"Tuple")){let R=T.ops[k];return R===void 0?void 0:eo(R,n)}};for(let k=0;k<I.nops;k++){if(I.ops[k].re===0)continue;let R=b(k);if(R===void 0)return!1;s.push({k:I.ops[k],pi:!1,x:{vector:T,index:k},exactBelow:R})}return!0}return m(c.One,P,w)};if((_(i,"Add")?i.ops:[i]).every(d)&&!(s.length===0||s.length>4))return{outer:r,trig:o.operator,terms:s,literals:a,piFactors:l}}function Qi(e,n){if(e===void 0)return{hi:1,lo:0,residual:0};let t=oe.precision;try{oe.precision=50;let r=bt(e)??new oe(e.re);n&&(r=r.mul(oe.PI));let o=Math.fround(r.toNumber()),i=r.sub(new oe(o)),s=Math.fround(i.toNumber()),a=Math.abs(i.sub(new oe(s)).toNumber());return{hi:o,lo:s,residual:a}}finally{oe.precision=t}}function cu(e){if(!Number.isFinite(e))return e;let n=Math.fround(e);return n>e&&(n=Math.fround(n*(1-2**-24))),n}var pu=["x","y","z","w"];function Kn(e,n,t,r,o,i,s){if(os(n,o.foldExcludedOps)||!uu(n))return;let a=x=>{let y=s();return Ji(o)?.warnings.push({text:y,warning:{code:"float32-unsafe-argument",kind:"correctness",value:n.toString(),message:`The operand of \`${e}\` amplifies a trigonometric value by a constant of magnitude 1000 or more, so its float32 value on ${o.language??"a shader"} can have no relation to the exact value (a sine hash such as \`fract(43758.5\xB7sin(12.9898\xB7x))\`). ${x}`}}),y},l=o.language==="glsl"&&t&&i(n)==="scalar"?fu(n,o,i):void 0;if(l===void 0)return a(o.language==="glsl"?"The exact form covers `Mod(O\xB7sin(\u03A3 K\xB7x + c), 1)` (or `cos`, or a `Dot` with a list of numbers) with |O| \u2264 50000 and each x an input or an integer-valued expression.":"This target has no exact form.");let u;if(l.literals.length+l.piFactors.length>0&&(u=no(l.literals,l.piFactors,x=>{let y=oe.PI.div(2),P=x.div(y).round(),w=x.sub(P.mul(y)),S=P.sub(P.div(4).floor().mul(4)).toNumber(),z=Math.fround(w.toNumber()),T=Math.fround(w.sub(new oe(z)).toNumber());return{hi:z,lo:T,q:S}}),u===void 0))return a("The constant term of the trigonometric argument is too large to reduce exactly.");let f=n.engine,c=Qi(l.outer,!1),m=[],d=[];for(let x of l.terms){let y=Qi(x.k,x.pi),P,w;if("vector"in x.x){let z=x.x.vector,T=_(z,"List")||_(z,"Tuple")?z.ops[x.x.index]:void 0;P=T!==void 0?r(T):`(${r(z)}).${pu[x.x.index]}`,w=f.function("At",[x.x.vector,f.number(x.x.index+1)]).toString()}else P=r(x.x),w=x.x.toString();let S=cu(Math.min(iu/Math.abs(y.hi),y.residual>0?au/(Math.abs(c.hi)*y.residual):1/0,x.exactBelow));m.push(`_gpu_xred(${P}, ${B(y.hi,"glsl")}, ${B(y.lo,"glsl")}, ${B(S,"glsl")})`),d.push({operand:w,maxAbs:S})}u!==void 0&&(u.hi!==0||u.lo!==0||u.q!==0)&&m.push(`vec4(${B(u.hi,"glsl")}, ${B(u.lo,"glsl")}, ${B(u.q,"glsl")}, 1.0)`);let h=m.reduce((x,y)=>`_gpu_xred_add(${x}, ${y})`),g=`_gpu_xhash_${l.trig==="Sin"?"sin":"cos"}(${h}, ${B(c.hi,"glsl")}, ${B(c.lo,"glsl")})`,v=Ji(o);for(let x of d)v?.bounds.push({bound:x,text:g});return g}var Ht=new Set([..."abs acos acosh all any arrayLength asin asinh atan atan2 atanh".split(" "),..."atomicAdd atomicAnd atomicCompareExchangeWeak atomicExchange atomicLoad atomicMax atomicMin atomicOr atomicStore atomicSub atomicXor".split(" "),..."bitcast ceil clamp cos cosh countLeadingZeros countOneBits countTrailingZeros cross degrees determinant distance dot dot4I8Packed dot4U8Packed dpdx dpdxCoarse dpdxFine dpdy dpdyCoarse dpdyFine exp exp2 extractBits faceForward firstLeadingBit firstTrailingBit floor fma fract frexp fwidth fwidthCoarse fwidthFine insertBits inverseSqrt ldexp length log log2 max min mix modf normalize pack2x16float pack2x16snorm pack2x16unorm pack4x8snorm pack4x8unorm pack4xI8 pack4xI8Clamp pack4xU8 pack4xU8Clamp pow quadBroadcast quadSwapDiagonal quadSwapX quadSwapY quantizeToF16 radians reflect refract reverseBits round saturate select sign sin sinh smoothstep sqrt step storageBarrier subgroupAdd subgroupAll subgroupAnd subgroupAny subgroupBallot subgroupBroadcast subgroupBroadcastFirst subgroupElect subgroupExclusiveAdd subgroupExclusiveMul subgroupInclusiveAdd subgroupInclusiveMul subgroupMax subgroupMin subgroupMul subgroupOr subgroupShuffle subgroupShuffleDown subgroupShuffleUp subgroupShuffleXor subgroupXor tan tanh textureBarrier textureDimensions textureGather textureGatherCompare textureLoad textureNumLayers textureNumLevels textureNumSamples textureSample textureSampleBaseClampToEdge textureSampleBias textureSampleCompare textureSampleCompareLevel textureSampleGrad textureSampleLevel textureStore transpose trunc unpack2x16float unpack2x16snorm unpack2x16unorm unpack4x8snorm unpack4x8unorm unpack4xI8 unpack4xU8 workgroupBarrier workgroupUniformLoad".split(" "),..."bool f16 f32 i32 u32 array atomic ptr sampler sampler_comparison buffer_view".split(" "),...[2,3,4].flatMap(e=>["","f","h","i","u"].map(n=>`vec${e}${n}`)),...[2,3,4].flatMap(e=>[2,3,4].flatMap(n=>["","f","h"].map(t=>`mat${e}x${n}${t}`))),..."texture_1d texture_2d texture_2d_array texture_3d texture_cube texture_cube_array texture_depth_2d texture_depth_2d_array texture_depth_cube texture_depth_cube_array texture_depth_multisampled_2d texture_external texture_multisampled_2d texture_storage_1d texture_storage_2d texture_storage_2d_array texture_storage_3d".split(" ")]);function as(e,n,t,r){let o=r===1?"f32":`vec${r}f`,i=r===1?4:r===2?8:16;return{symbol:e,name:n,struct:`CE_List_${o}`,group:t.group,binding:t.binding,element:o,components:r,lengthOffset:0,dataOffset:i,stride:i,minBindingSize:2*i}}function ls(e){let n=new Set,t=`
`;for(let r of e)n.has(r.struct)||(n.add(r.struct),t+=`struct ${r.struct} { len: u32, data: array<${r.element}> }
`);for(let r of e)t+=`@group(${r.group}) @binding(${r.binding}) var<storage, read> ${r.name}: ${r.struct};
`;return t}function to(e,n){return n===1?`_gpu_sbat_${e}`:`_gpu_sbatp${n}_${e}`}function ro(e,n){return`_gpu_sb${e}_${n}`}function us(e){return`f32(min(${e}.len, arrayLength(&${e}.data)))`}function fs(e,n){return new RegExp(`(?<![\\w$.])${n}\\.(len|data)\\b`).test(e)}function cs(e){let n=new Set,t="",r=/(?<![\w$])_gpu_sb(at|atp[234]|sum|prod|max|min|mean)_([A-Za-z_]\w*)\s*\(/g,o;for(;(o=r.exec(e))!==null;){let i=`${o[1]}_${o[2]}`;if(n.has(i))continue;n.add(i);let s=o[1],a=o[2];s==="at"?t+=ss(a,1):s.startsWith("atp")?t+=ss(a,Number(s.slice(3))):t+=du(s,a)}return t}function ss(e,n){let t=n===1?"f32":`vec${n}f`,r=n===1?"_gpu_nan()":`${t}(_gpu_nan())`;return`
fn ${to(e,n)}(_gpu_i: f32) -> ${t} {
  // 1-based; negative counts from the end; anything else \u2192 NaN. The list
  // has ${e}.len elements, and a len above the elements that the buffer
  // holds gives NaN. The float guard runs before the int cast; the int
  // guard catches the rounding of f32(len) above 2^24.
  let _gpu_n = ${e}.len;
  let _gpu_b = f32(_gpu_n);
  if (_gpu_n > arrayLength(&${e}.data) || _gpu_isnonfinite(_gpu_i) || !(_gpu_i >= -_gpu_b && _gpu_i <= _gpu_b) || _gpu_i != floor(_gpu_i) || _gpu_i == 0.0) {
    return ${r};
  }
  let _gpu_k = i32(_gpu_i);
  let _gpu_j = select(i32(_gpu_n) + _gpu_k, _gpu_k - 1, _gpu_k > 0);
  if (_gpu_j < 0 || u32(_gpu_j) >= _gpu_n) {
    return ${r};
  }
  return ${e}.data[_gpu_j];
}
`}function du(e,n){let t=`fn ${ro(e,n)}() -> f32 {
  // A len above the elements that the buffer holds gives NaN.
  let _gpu_n = ${n}.len;`,r=(a,l)=>`  for (var _gpu_k = ${a}; _gpu_k < _gpu_n; _gpu_k++) {
    ${l}
  }`,o=`${n}.data[_gpu_k]`,i=`_gpu_n > arrayLength(&${n}.data)`;if(e==="max"||e==="min")return`
${t}
  if (_gpu_n == 0u || ${i}) {
    return _gpu_nan();
  }
  var _gpu_a = ${n}.data[0];
${r("1u",`_gpu_a = _gpu_${e}(_gpu_a, ${o});`)}
  return _gpu_a;
}
`;if(e==="mean")return`
${t}
  if (_gpu_n == 0u || ${i}) {
    return _gpu_nan();
  }
  var _gpu_a = 0.0;
${r("0u",`_gpu_a += ${o};`)}
  return _gpu_a / f32(_gpu_n);
}
`;let s=e==="sum";return`
${t}
  if (${i}) {
    return _gpu_nan();
  }
  var _gpu_a = ${s?"0.0":"1.0"};
${r("0u",`_gpu_a ${s?"+=":"*="} ${o};`)}
  return _gpu_a;
}
`}var mu=1e4,hu=1e6,gu=8,_u=2e3,ps=100;function ds(e,n,t){if(n.userFunctions===void 0||!Or(e))return e;let r=e.engine,o=new oo(r,n,t);if(!o.mentionsUserCall(e))return e;let i;try{i=o.expand(e,ms,bu,new Set)}catch(a){if(a===Xn)return e;throw a}if(i===e||!o.sharesACallAcrossBodies())return e;let s=gu*o.sourceSize(e);if(o.writtenSize(i)>s||vu(i,s)>s||i.isValid!==!0)return e;for(let a of o.substituted)n.symbolDeps?.add(a);return i}var ms=new Set,bu="";function vu(e,n){let t=[],r=new Set,o=c=>{if(!r.has(c)){if(r.add(c),_(c))for(let m of c.ops)o(m);t.push(c)}};o(e),t.reverse();let i=[-1],s=new Map,a=(c,m,d)=>{let h=`${c}:${m}:${d}`,g=s.get(h);return g===void 0&&(g=i.length,i.push(c),s.set(h,g)),g},l=new Map;t.forEach((c,m)=>l.set(c,m));let u=new Map([[e,new Set([0])]]),f=0;for(let c of t){let m=u.get(c);if(f+=m.size,f>n)return f;if(!_(c))continue;let d=new Set(Ft(c).map(h=>h.index));c.ops.forEach((h,g)=>{let v=u.get(h);if(v===void 0&&u.set(h,v=new Set),d.has(g))for(let x of m)v.add(a(x,l.get(c),g));else for(let x of m)v.add(x)})}return f}var Xn=Symbol("over budget"),oo=class{constructor(n,t,r){this.engine=n;this.target=t;this.options=r}engine;target;options;calls=new Map;bodiesOf=new Map;nodes=new WeakMap;frames=[];mentions=new WeakMap;ids=new WeakMap;idOfSpelling=new Map;paths=new WeakMap;distinctNodes=0;pureSeen=new Set;substituted=new Set;substitutions=0;isShaderScalar(n){let t=this.target.loweredSymbolType?.(n);return t==="f32"||t==="float"}isHeadOverridden(n){return this.options.isOverridden(n)||this.target.unrollSkipHeads?.has(n)===!0||this.target.overridesHead?.(n)===!0}isUserFunction(n){return this.isHeadOverridden(n)?!1:p.userFunctionLiteral(this.engine,n)!==void 0}sourceSize(n){let t=Yn(n),r=new Set,o=new Set,i=[n];for(;i.length>0;){let s=i.pop();if(o.has(s)||!_(s))continue;o.add(s),i.push(...s.ops);let a=s.operator;if(r.has(a)||!this.isUserFunction(a))continue;r.add(a);let l=p.userFunctionLiteral(this.engine,a);l!==void 0&&(t+=Yn(l.ops[0]),i.push(l.ops[0]))}return t}writtenSize(n){let t=new Map,r=[n],o=new Set;for(;r.length>0;){let u=r.pop();if(!o.has(u)&&(o.add(u),!!_(u)))for(let f of u.ops)t.set(f,(t.get(f)??0)+1),r.push(f)}let i=u=>(t.get(u)??0)>=2&&this.pathCount(u)>=$i,s=new Map,a=u=>{let f=s.get(u);if(f!==void 0)return f;let c=1;if(_(u))for(let m of u.ops)c+=i(m)?1:a(m);return s.set(u,c),c},l=a(n);for(let u of o)i(u)&&(l+=a(u));return l}charge(n){this.pathCount(n)}pathCount(n){let t=this.paths.get(n);if(t!==void 0)return t;let r=1;if(_(n)){for(let o of n.ops)if(r+=this.pathCount(o),r>hu)throw Xn}if(this.paths.set(n,r),this.distinctNodes+=1,this.distinctNodes>mu)throw Xn;return r}checkPure(n){if(!Or(n,this.pureSeen))throw Xn}idOf(n){let t=this.ids.get(n);if(t!==void 0)return t;let r=_(n)?`${n.operator}(${n.ops.map(i=>this.idOf(i)).join(",")})`:JSON.stringify(n.json),o=this.idOfSpelling.get(r);return o===void 0&&(o=this.idOfSpelling.size,this.idOfSpelling.set(r,o)),this.ids.set(n,o),o}callKey(n,t){return`${n}(${t.map(r=>this.idOf(r)).join(",")})`}mentionsUserCall(n){if(!_(n))return!1;let t=this.mentions.get(n);if(t!==void 0)return t;let r=this.isUserFunction(n.operator)||n.ops.some(o=>this.mentionsUserCall(o));return this.mentions.set(n,r),r}sharesACallAcrossBodies(){for(let n of this.bodiesOf.values())if(n.size>1)return!0;return!1}expand(n,t,r,o){if(!_(n)||!this.mentionsUserCall(n)||n.operator==="Function"||this.isHeadOverridden(n.operator))return n;if(t.size>0){let u=this.expandNode(n,t,r,o);return this.charge(u),u}let i=this.nodes.get(n);if(i!==void 0){for(let u of i.keys)this.record(u,r);return i.result}let s={body:r,keys:new Set};this.frames.push(s);let a;try{a=this.expandNode(n,t,r,o)}finally{this.frames.pop()}this.charge(a),this.nodes.set(n,{result:a,keys:s.keys});let l=this.frames[this.frames.length-1];if(l!==void 0&&l.body===r)for(let u of s.keys)l.keys.add(u);return a}record(n,t){let r=this.bodiesOf.get(n);r===void 0&&(r=new Set,this.bodiesOf.set(n,r)),r.add(t);let o=this.frames[this.frames.length-1];o!==void 0&&o.body===t&&o.keys.add(n)}expandNode(n,t,r,o){let i=this.unrolledClause(n,t,r,o);if(i!==void 0)return i;let s=Ze(n);if((n.operator==="Sum"||n.operator==="Product")&&s.length>0)throw Xn;if(s.length>0){if(n.localScope===void 0)return n;let u=new Set([...t,...s]),f=n.ops.map(m=>this.expand(m,u,r,o));if(f.every((m,d)=>m===n.ops[d]))return n;let c=_i(n.localScope,this.engine,n.operator,f);return c===void 0?n:this.engine.function(n.operator,f,{scope:c})}let a=n.ops.map(u=>this.expand(u,t,r,o)),l=n.operator;if(this.isUserFunction(l)&&!t.has(l)&&!o.has(l)){let u=this.callKey(l,a);this.record(u,r);let f=t.size===0,c=f?this.calls.get(u):void 0;if(c!==void 0)return c;for(let d of a)this.checkPure(d);let m=p.substitutedUserFunctionBody(this.engine,l,a,this.target,t.size>0?yu(t):void 0,d=>this.isShaderScalar(d));if(m!==void 0){if(this.substitutions+=1,this.substitutions>_u)throw Xn;o.add(l);let d;try{d=this.expand(m,t,u,o)}finally{o.delete(l)}return this.substituted.add(l),f&&this.calls.set(u,d),d}}if(a.every((u,f)=>u===n.ops[f]))return n;if(l==="Which"){let u=this.nestedWhich(a);if(u!==void 0)return u}return this.engine.function(l,a)}nestedWhich(n){if(n.length<6||n.length%2!==0)return;let t=n[n.length-2];if(!E(t)||t.symbol!=="True")return;let r=this.engine.function("Which",n.slice(n.length-4),{form:"structural"});for(let o=n.length-6;o>=0;o-=2)r=this.engine.function("Which",[n[o],n[o+1],this.engine.True,r],{form:"structural"});return r}unrolledClause(n,t,r,o){let i=n.operator;if(i!=="Sum"&&i!=="Product"||n.nops!==2)return;let[s,a]=n.ops;if(!_(a,"Limits")||a.nops!==3)return;let[l,u,f]=a.ops;if(!this.mentionsUserCall(s)||!E(l))return;let c=l.symbol;if(!O(u)||!O(f))return;let m=u.re,d=f.re;if(!Number.isSafeInteger(m)||!Number.isSafeInteger(d)||d<m)return;let h=d-m+1;if(h>ps||!Ot(h,Yn(s),ps)||s.isPure!==!0||(this.checkPure(s),p.isComplexValuedUnderIndices(s,[c]))||Lt(s).has(c))return;let v=[];for(let x=m;x<=d;x++){let y=s.subs({[c]:this.engine.number(x)});v.push(this.expand(y,t,r,o))}return v.length===1?v[0]:this.engine.function(i==="Sum"?"Add":"Multiply",v,{form:"structural"})}};function yu(e){return{scalarNames:ms,localNames:e}}var Ke=5e4;function Wt(e,n,t=Ke){let r=new Map,o=new Map,i=[],s=[],a=new Set,l=[[e,0,hs(e,n?.isCallerMapped)]];for(;l.length>0;){let A=l[l.length-1],[L,M,N]=A;if(M<N.length){A[1]=M+1;let te=N[M];r.has(te)||l.push([te,0,hs(te,n?.isCallerMapped)]);continue}if(l.pop(),r.has(L))continue;let q=N.map(te=>r.get(te)),Z=_(L)&&N.length!==L.nops,H=_(L)?`${Z?`R${L.nops}`:""}${L.operator}(${q.join(",")})`:E(L)?`S${L.symbol}`:`L${JSON.stringify(L.json)}`,ee=o.get(H);ee===void 0&&(ee=i.length,o.set(H,ee),i.push(L),s.push(q),Z&&a.add(ee)),r.set(L,ee)}let u=r.get(e),f=i.length,c=new Map,m=A=>{let L=c.get(A);if(L===void 0){let M=i[A];L=_(M)&&!a.has(A)?xu(M):new Array(s[A].length).fill(void 0),c.set(A,L)}return L},d=new Map,h=A=>{let L=d.get(A);if(L===void 0){let M=i[A];L=_(M)&&!a.has(A)?Ei(M):s[A].map((N,q)=>q),d.set(A,L)}return L},g=new Map,v=A=>{let L=g.get(A);if(L===void 0){L=new Set;let M=i[A];E(M)&&L.add(M.symbol);for(let N of s[A])for(let q of v(N))L.add(q);g.set(A,L)}return L},x=[new Set],y=[-1],P=[void 0],w=(A,L)=>{for(let M=L;M>=0;M=y[M]){if(x[M].has(A))return!0;let N=P[M];if(N!==void 0){if(N.opaque)return!1;if(N.boundNames.length>0){let q=v(A);if(N.boundNames.some(Z=>q.has(Z)))return!1}}}return!1},S=A=>{for(let L=A;L>=0;L=y[L])if(P[L]?.inert===!0)return!0;return!1},z=0,T=[[u,0,0]];for(x[0].add(u),z=1;T.length>0;){let A=T[T.length-1],[L,M,N]=A,q=h(L);if(N>=q.length){T.pop();continue}A[2]=N+1;let Z=q[N],H=s[L][Z],ee=M,te=m(L)[Z];if(te!==void 0&&(ee=x.length,x.push(new Set),y.push(M),P.push(te)),z+=1,z>t)return z;if(!S(ee)){if(w(H,ee))continue;x[ee].add(H)}T.push([H,ee,0])}let I=new Array(f);for(let A=0;A<f;A++)I[A]=n!==void 0&&n.isCallerMapped(i[A]);let b=new Array(f).fill(0);b[u]=1;for(let A=f-1;A>=0;A--)if(!I[A])for(let L of s[A])b[L]=Math.min(2,b[L]+b[A]);let k=new Array(f);for(let A=0;A<f;A++)k[A]=n!==void 0&&n.share!==!1&&A!==u&&b[A]>=2&&n.mayRecord(i[A]);let R=new Array(f),C=new Array(f),G=0;for(let A=0;A<f;A++){let L=1;for(let N of s[A])L+=R[N];R[A]=L;let M=1;if(I[A])M=L;else for(let N of s[A])M+=k[N]?1:C[N];C[A]=M,k[A]&&(G+=M)}return Math.max(z,G+C[u])}function xu(e){let n=new Array(e.nops).fill(void 0),t=e.operator;if(t==="Block"){let o=Ze(e);for(let i=0;i<e.nops;i++)n[i]={inert:!1,opaque:!1,boundNames:o};return n}if(t==="Function"||t==="Loop"){let o=Ze(e);for(let i=0;i<e.nops;i++)n[i]=i===0?{inert:!1,opaque:!0,boundNames:o}:{inert:!0,opaque:!1,boundNames:o};return n}let r=e.operatorDefinition;if(r?.scoped===!0){let o=Number.POSITIVE_INFINITY;try{for(let s of r.bindingSites?.(e.ops,"post")??[])s.path.length>0&&(o=Math.min(o,s.path[0]))}catch{o=Number.POSITIVE_INFINITY}Number.isFinite(o)||(o=0);let i=Ze(e);for(let s=0;s<e.nops;s++)n[s]=s<o?{inert:!1,opaque:!0,boundNames:i}:{inert:!0,opaque:o===0,boundNames:i}}for(let o of Ft(e)){let i=n[o.index];n[o.index]={inert:o.inert||(i?.inert??!1),opaque:i?.opaque??!1,boundNames:i?.boundNames??[]}}return n}function hs(e,n){if(!_(e))return[];if(e.operator==="When"&&e.nops===2&&n?.(e)!==!0){if(E(e.ops[1],"True"))return[e.ops[0]];if(E(e.ops[1],"False"))return[]}return e.ops}var Ln={__proto__:null,Add:["+",11],Negate:["-",14],Subtract:["-",11],Multiply:["*",12],Divide:["/",13],Equal:["==",8],NotEqual:["!=",8],LessEqual:["<=",9],GreaterEqual:[">=",9],Less:["<",9],Greater:[">",9],And:["&&",4],Or:["||",3],Not:["!",14]},tt=256;function it(e,n){if(!(n<=tt))throw new gt({code:"inline-collection-too-large",kind:"capability",message:`Could not compile \`${e}\`: a constant collection of ${n} elements is above the ${tt} elements a shader array constructor takes on this target. Ship the collection as a texture (a \`storage: sampler2D\` input, read with \`At\`) instead.`})}var wu=new Set(["attribute","const","uniform","varying","buffer","shared","coherent","volatile","restrict","readonly","writeonly","layout","centroid","flat","smooth","noperspective","patch","sample","in","out","inout","precision","invariant","precise","subroutine","lowp","mediump","highp","struct","break","continue","do","for","while","switch","case","default","if","else","discard","return","void","bool","int","uint","float","double","vec2","vec3","vec4","dvec2","dvec3","dvec4","bvec2","bvec3","bvec4","ivec2","ivec3","ivec4","uvec2","uvec3","uvec4","mat2","mat3","mat4","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","dmat2","dmat3","dmat4","sampler2D","sampler3D","samplerCube","sampler2DArray","sampler2DShadow","samplerCubeShadow","isampler2D","usampler2D","atomic_uint","image2D","true","false","filter","texture","asm","class","union","enum","typedef","template","this","packed","goto","inline","noinline","public","static","extern","external","interface","long","short","half","fixed","unsigned","superp","input","output","hvec2","hvec3","hvec4","fvec2","fvec3","fvec4","sizeof","cast","namespace","using"]),$u=new Set(["alias","break","case","const","const_assert","continue","continuing","default","diagnostic","discard","else","enable","false","fn","for","if","let","loop","override","requires","return","struct","switch","true","var","while","bool","f16","f32","i32","u32","vec2","vec3","vec4","vec2f","vec3f","vec4f","vec2i","vec3i","vec4i","vec2u","vec3u","vec4u","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","array","atomic","ptr","sampler","sampler_comparison","texture_1d","texture_2d","texture_2d_array","texture_3d","texture_cube","texture_cube_array","texture_multisampled_2d","function","private","workgroup","uniform","storage","read","write","read_write","texture","sample","filter","as","async","attribute","auto","binding","cast","compile","do","enum","extern","external","inline","instance","interface","match","namespace","new","null","of","operator","public","reference","self","set","shared","static","super","template","this","typedef","union","unless","using","virtual","where"]);function Eu(e){return e==="wgsl"?$u:e==="glsl"?wu:new Set}function qe(e,n){if(Eu(n).has(e))throw new Error(`"${e}" is a reserved word in ${n??"this shader language"} and cannot be used as a variable name. Rename it before compiling to a GPU target (fail closed, D6).`);return e}function io(e,n,t){if(!/\breturn\b/.test(n))return;let r=n.split(`
`),o=r.length===1;for(let i of r){let s=i.length-i.trimStart().length;for(let a of i.matchAll(/\breturn\b/g))if(!(!o&&a.index===s))throw new Error(`Could not compile ${Te(e)}: an early \`Return\` here has no ${t.toUpperCase()} lowering \u2014 the emitted source would place a \`return\` where the language requires an expression (\`${i.trim()}\`). A shader function returns once, at the end of its body, so a \`Return\` inside a conditional \u2014 or one that IS the body's final value \u2014 cannot be emitted. Rewrite it as a conditional VALUE, or evaluate instead.`)}}function gs(e,n,t){let r=n.includes(`
`);if(!r&&!/\breturn\b/.test(n))return;let o=t.toUpperCase(),i=(r?n.split(`
`)[0]:n).trim();throw new Error(`Could not compile ${Te(e)}: this route emits a single ${o} EXPRESSION, but the body lowers to ${r?"a statement sequence":"a bare `return` statement"} (\`${i}${r?"\u2026":""}\`). ${o} has no expression-level block or immediately-invoked function to wrap statements in, so there is no valid emission for this position. Compile a statement body with compile() instead \u2014 that route emits a function body.`)}function fn(e,n,t){let r=on(n);if(r===void 0)return;let o=t.toUpperCase();if(r==="Assign"){if(t!=="wgsl")return;throw new Error(`Could not compile ${Te(e)}: this route emits a single WGSL EXPRESSION, but the body is an assignment. WGSL assignment is a STATEMENT (unlike GLSL, where it is an operator), so the emitted \`\u2026 = <target> = <value>\` is not valid source. Compile a statement body with compile() instead \u2014 that route emits a function body.`)}throw new Error(`Could not compile ${Te(e)}: this route emits a single ${o} EXPRESSION, but the body is a declaration. A declaration is a STATEMENT in ${o}, so the emitted \`${t==="wgsl"?"var s: f32":"float s"}\`-shaped source is not valid in an expression position \u2014 and it carries no initializer, so the declared value would be silently DROPPED. Compile a statement body with compile() instead \u2014 that route emits a function body.`)}function ne(e){return e?.language==="wgsl"?"vec2f":"vec2"}function _s(e,n,t){let r=Ui(e,n);return`${ne(t)}(${B(r.re,t?.language)}, ${B(r.im,t?.language)})`}function je(e){return e?.language==="wgsl"?"vec3f":"vec3"}function bs(e,n,t){if(_(e)&&["Rgb","Hsv","Hsl","Tuple"].includes(e.operator)&&!qn(e,t.cse?.harvestOptions)&&!t.foldExcludedOps?.has(e.operator)){let r="_gpu_srgb_to_oklch(";if(n.startsWith(r)&&n.endsWith(")"))return`_gpu_srgb_roundtrip(${n.slice(r.length,-1)})`}return`_gpu_oklch_to_srgb(${n})`}var zu=new Set(["Rgb","Hsv","Hsl","Oklab","Oklch"]),Cu=new Set(["oklch","oklab","lab","rgb","hsl","hsv"]);function vs(e,n,t){let r=e.slice(0,3),o=`${je(t)}(${r.map(s=>n(s)).join(", ")})`;return r.every(s=>O(s)&&s.im===0&&Number.isFinite(s.re))?o:`_gpu_finite_color(${o})`}function Fe(e,n,t,r){if(_(n,"List"))throw new Error(`Could not compile \`${e}\`: a list is not a color \u2014 a color operand must be a color, a color string or a tuple of 3 or 4 components.`);if(!_(n)||n.operator!=="Tuple"){if(Vn(n))throw new Error(`Could not compile \`${e}\`: this operator takes a COLOR, and a tuple is color COMPONENTS, not a color. Build a color from the components first \u2014 \`AsRgb((r, g, b))\` reads them as 0-1 sRGB, and \`ColorFromColorspace(components, space)\` reads them in any named space.`);if(Si(n))throw new Error(`Could not compile \`${e}\`: cannot settle the color space of the operand at compile time \u2014 it holds a converted color at one of the positions its value comes from, and a shader color is a bare vector with no run-time tag, so the channels cannot be converted back to OKLCh.`);return E(n)&&r?.loweredSymbolType!==void 0&&Aa.get(r.loweredSymbolType)?.add(n.symbol),Su(t(n),Dr(n))}let o=n.ops;if(o.length<3||o.length>4)throw new Error(`Could not compile \`${e}\`: a tuple of ${o.length} components is not a color \u2014 a color tuple has 3 components, or 4 with the fourth read as alpha.`);return ln(e,o),dn(o.slice(0,3),je(r)),`_gpu_srgb_to_oklch(${je(r)}(${o.slice(0,3).map(i=>t(i)).join(", ")}))`}function Jn(e,n,t,r){if(!(_(n)&&n.operator==="Tuple")&&Vn(n)){let i=p.aggregateComponentCount(n);if(i===4&&Js(e),i!==void 0&&i!==3)throw new Error(`Could not compile \`${e}\`: a tuple of ${i} components is not a color \u2014 color components are 3 channels, or 4 with the fourth read as alpha.`);return`_gpu_srgb_to_oklch(${t(n)})`}return Fe(e,n,t,r)}function Su(e,n){switch(n){case"rgb":return`_gpu_srgb_to_oklch(${e})`;case"oklab":return`_gpu_oklab_to_oklch(${e})`;case"hsl":return`_gpu_srgb_to_oklch(_gpu_hsl_to_rgb(${e}))`;case"hsv":return`_gpu_srgb_to_oklch(_gpu_hsv_to_rgb(${e}))`;default:return e}}function ln(e,n){n.length<=3||Js(e)}function Js(e){throw new Error(`Could not compile \`${e}\`: an alpha (4th) operand is not representable on the GPU target \u2014 color values are \`vec3\` (OKLCh) end to end, with no alpha channel. Drop the alpha operand and pass it separately (e.g. as a uniform) at the framebuffer boundary.`)}function ge(e,n){let t=n[0]?.engine;if(t===void 0)return!1;try{let r=t.function(e,[...n],{form:"structural"}).type;return Ne(Nr(r.type))}catch{return!1}}function so(e,n){if(Pi(e,n)==="complex")throw new Error(`Could not compile \`${e}\`: its value is not real for these operands, and the shader targets have no complex lane for it`)}function _e(e,n,t){return p.isComplexValued(e)?n(e):(En(void 0,e),`${ne(t)}(${n(e)}, 0.0)`)}function ce(e,n,t,r,o=!1){if(!p.foldValueImpure(n))return t(n);if(!p.canHoist(r)||!o&&j(n)!=="scalar")throw new Error(`Could not compile \`${e}\`: an impure (Random) operand cannot be bound to a temporary at this position \u2014 a repeated draw would shift every later value in the shader.`);Je(e,[n],r);let i=p.tempVar(r),s=o?ne(r):r.language==="wgsl"?"f32":"float",a=r.language==="wgsl"?`var ${i}: ${s}`:`${s} ${i}`;return p.hoistStatement(r,`${a} = ${t(n)};`),De([n],r),i}function Qs(e){let n=e.hoist?.unit;if(n!==void 0)return _(n,"Assign")?n.ops[1]:_(n,"Declare")?p.declareValueOperand(n.ops):n}var Pn;function ku(e,n){let t=0;for(;t<e.length&&t<n.length&&e[t]===n[t];)t+=1;if(t===n.length)return!0;if(t===e.length||t===0)return!1;let r=e[t-1];if(!_(r))return!1;let o=(l,u)=>l===u||E(l)&&l.engine._getSymbolValue(l.symbol)===u,i=r.ops,s=i.findIndex(l=>o(l,e[t])),a=-1;for(let l=i.length-1;l>=0&&a<0;l--)o(i[l],n[t])&&(a=l);return s>=0&&a>=0&&s<a}var ea=Symbol("gpuDrawOrder");function dr(e){let n=new Error(e);return n[ea]=!0,n}function Pu(e){let n=new Set,t=r=>{if(n.has(r))return!1;if(n.add(r),E(r)){if(!p.foldValueImpure(r))return!1;let o=r.engine._getSymbolValue(r.symbol);return o!==void 0&&t(o)}if(!_(r))return!1;if(Eo(r)){let o=r.engine.lookupDefinition(r.operator);if(!pt(o)||o.operator.isUserFunctionDefinition||o.operator.drawsRandom!==!0)return!0}return r.ops.some(t)};return t(e)}function Yt(e){return Pn!==void 0&&p.foldValueImpure(e)}function Ru(e,n,t){if(Pn!==void 0||!(e instanceof Error)||e[ea]!==!0||t===void 0||Pu(t))return;let r={inline:!1,reordered:!1};Pn=r;let o;try{o=n()}finally{Pn=void 0}if(r.reordered)throw e;return o}var bo=new WeakMap;function Je(e,n,t){if(Pn!==void 0)return;let r=()=>{throw dr(`Could not compile \`${e}\`: an operand that draws a random value would be bound to a temporary ahead of the rest of its statement, and a draw written before it would then come after it.`)},o=t.hoist,i=Qs(t),s=o===void 0?void 0:bo.get(o),a=n.find(v=>p.foldValueImpure(v))??n[0],l=1,u=2,f=new Map,c=v=>{let x=f.get(v);if(x!==void 0)return x;let y=0;if(v===a)y=l;else if(s?.has(v))y=0;else if(E(v))y=p.foldValueImpure(v)?u:0;else if(_(v)){for(let P of v.ops)if(y=c(P),y!==0)break;y===0&&Eo(v)&&(y=u)}return f.set(v,y),y},m=()=>{if(i===void 0)return!1;let v=new Map,x=n.reduce((y,P)=>y+$t(P,v),0);return $t(i,v)===x},d=(v,x)=>{let y=x.get(v);if(y!==void 0)return y;let P=v===a?1:0;if(_(v))for(let w of v.ops)P+=d(w,x);return x.set(v,P),P},h=i===void 0?0:c(i);h===u&&r();let g=i!==void 0&&d(i,new Map)>1;(h===0||g)&&!m()&&r()}function De(e,n){let t=n.hoist;if(t===void 0)return;let r=bo.get(t)??new Set;for(let o of e)r.add(o);bo.set(t,r)}var ur=[2,3,4];function na(e){return(e?[["_gpu_fmod","f32"],...ur.map(t=>[`_gpu_fmod${t}`,`vec${t}f`])]:[["_gpu_fmod","float"],...ur.map(t=>[`_gpu_fmod${t}`,`vec${t}`])]).map(([t,r])=>e?`fn ${t}(x: ${r}, y: ${r}) -> ${r} {
  let r = x % y;
  let p = sign(r) * sign(y);
  return (r - y * ((p - abs(p)) * 0.5)) % y;
}`:`${r} ${t}(${r} x, ${r} y) {
  ${r} r = mod(mod(x, y), y);
  r = r + y * (1.0 - step(0.0, r * sign(y)));
  return r - y * step(abs(y), r * sign(y));
}`).join(`
`)}var Au=`
${na(!1)}
`,Tu=`
${na(!0)}
`;function mr(e,n,t,r){if(p.isComplexValued(e)||p.isComplexValued(n))return;let o=r.language==="wgsl",i=j(e),s=j(n),a=m=>m==="scalar"||typeof m=="number";if(!a(i)||!a(s))return;if(i==="scalar"&&s==="scalar")return`_gpu_fmod(${t(e)}, ${t(n)})`;if(typeof i=="number"&&typeof s=="number"&&i!==s)return;let l=typeof i=="number"?i:s,u=le(l,o),f=i==="scalar"?`${u}(${t(e)})`:t(e),c=s==="scalar"?`${u}(${t(n)})`:t(n);return`_gpu_fmod${l}(${f}, ${c})`}var Lu=`
fn _gpu_tanh(x: f32) -> f32 {
  return select(tanh(x), sign(x), abs(x) > 10.0);
}
${ur.map(e=>`fn _gpu_tanh${e}(x: vec${e}f) -> vec${e}f {
  return select(tanh(x), sign(x), abs(x) > vec${e}f(10.0));
}`).join(`
`)}
`;function ys(e,n,t){if(t.language!=="wgsl")return`tanh(${n(e)})`;let r=j(e);return r==="scalar"?`_gpu_tanh(${n(e)})`:typeof r=="number"?`_gpu_tanh${r}(${n(e)})`:`tanh(${n(e)})`}function ta(e){let n="0x7FFFFFFFu",t="0x7F800000u",r=[1,...ur],o=u=>u===1?"":`${u}`,i=(u,f)=>`_gpu_isnan${o(u)}(${f})`,s=(u,f,c,m)=>e?`select(${f}, ${c}, ${m})`:u===1?`(${m} ? ${c} : ${f})`:`mix(${f}, ${c}, ${m})`,a=[];for(let u of r){let f=e?u===1?"f32":`vec${u}f`:u===1?"float":`vec${u}`;for(let[c,m,d]of[["_gpu_isnan",">","greaterThan"],["_gpu_isnonfinite",">=","greaterThanEqual"]]){let h=`${c}${o(u)}`;if(e){let g=u===1?"u32":`vec${u}u`,v=u===1?"bool":`vec${u}<bool>`,x=y=>u===1?y:`${g}(${y})`;a.push(`fn ${h}(x: ${f}) -> ${v} {
  return (bitcast<${g}>(x) & ${x(n)}) ${m} ${x(t)};
}`)}else u===1?a.push(`bool ${h}(float x) {
  return (floatBitsToUint(x) & ${n}) ${m} ${t};
}`):a.push(`bvec${u} ${h}(vec${u} x) {
  return ${d}(floatBitsToUint(x) & ${n}, uvec${u}(${t}));
}`)}}let l=(u,f,c,m)=>e?`fn ${u}(${f.map(d=>`${d}: ${c}`).join(", ")}) -> ${c} {
  return ${m};
}`:`${c} ${u}(${f.map(d=>`${c} ${d}`).join(", ")}) {
  return ${m};
}`;for(let u of r){let f=e?u===1?"f32":`vec${u}f`:u===1?"float":`vec${u}`,c=o(u);for(let v of["max","min"])a.push(l(`_gpu_${v}${c}`,["a","b"],f,s(u,s(u,`${v}(a, b)`,"b",i(u,"b")),"a",i(u,"a"))));a.push(l(`_gpu_clamp${c}`,["x","lo","hi"],f,s(u,s(u,s(u,"min(max(x, lo), hi)","hi",i(u,"hi")),"lo",i(u,"lo")),"x",i(u,"x")))),a.push(l(`_gpu_sign${c}`,["x"],f,s(u,"sign(x)","x",i(u,"x"))));for(let v of["sin","cos"]){let x=`_gpu_isnonfinite${c}(x)`;if(e){let y=u===1?"bitcast<f32>(bits)":`${f}(bitcast<f32>(bits))`;a.push(`fn _gpu_${v}${c}(x: ${f}) -> ${f} {
  let bits = 0x7fc00000u;
  return select(${v}(x), ${y}, ${x});
}`)}else{let y=u===1?"intBitsToFloat(0x7FC00000)":`${f}(intBitsToFloat(0x7FC00000))`;a.push(l(`_gpu_${v}${c}`,["x"],f,s(u,`${v}(x)`,y,x)))}}let m=v=>u===1?v:`${f}(${v})`;a.push(l(`_gpu_hermite${c}`,["t"],f,`t * t * (${m("3.0")} - 2.0 * t)`));let d=e||u===1?"e0 == e1":"equal(e0, e1)",h=e||u===1?"x < e0":"lessThan(x, e0)",g=s(u,`_gpu_hermite${c}(min(max((x - e0) / (e1 - e0), ${m("0.0")}), ${m("1.0")}))`,s(u,m("1.0"),m("0.0"),h),d);a.push(l(`_gpu_smoothstep${c}`,["e0","e1","x"],f,s(u,s(u,s(u,g,"x",i(u,"x")),"e1",i(u,"e1")),"e0",i(u,"e0"))))}return a.join(`
`)}function an(e,n,t,r){if(Gu.test(t)||cn(n,r))return`${e}(${t})`;let o=j(n);return o==="scalar"?`_gpu_${e}(${t})`:typeof o=="number"?`_gpu_${e}${o}(${t})`:`${e}(${t})`}var ao=34028234663852886e22;function ra(e){let n=j(e);return n==="scalar"?e.type.matches("finite_real"):typeof n!="number"?!1:e.type.matches("list<finite_real>")||e.type.matches(`tuple<${Array(n).fill("finite_real").join(", ")}>`)}var Fu=new Set(["Add","Subtract","Negate","Sin","Cos","Tanh","Arctan","Abs","Floor","Ceil","Round","Truncate","Fract","Sign","Clamp","Min","Max","ElementMin","ElementMax","Mod","Smoothstep","Random"]);function cn(e,n){let t=!1;if(!ra(e)){let r=n.gpuParameterFacts;if(r===void 0||r.size===0||j(e)!=="scalar")return!1;t=!0}return oa(n,t)?.finite(e)===!0}function oa(e,n){let t=e.cse?.harvestOptions;if(t===void 0)return;let r=e.gpuParameterFacts,o=e.userFunctions===void 0?void 0:sa.get(e.userFunctions),i=d=>o==="all"||o?.has(d)===!0,s=new Map,a=new Set,l=d=>e.varsKeys?.has(d)===!0||t.isVarsKey?.(d)===!0,u=d=>{if(!(l(d.symbol)||e.boundVars?.has(d.symbol)===!0)&&e.var(d.symbol)===void 0)return d.engine._getSymbolValue(d.symbol)},f=d=>{let h=s.get(d);if(h!==void 0)return h;let g=!1;if(O(d))g=d.type.matches("finite_real")&&d.im===0&&Math.abs(d.re)<=ao;else if(E(d)&&r?.get(d.symbol)?.finite===!0)g=!0;else if(E(d)&&i(d.symbol))g=!1;else if(E(d)){let v=u(d),x=v??d.engine._getSymbolValue(d.symbol),y=l(d.symbol),P=y&&d.valueDefinition?.isConstant!==!0&&(e.var(d.symbol)===d.symbol||e.hostInputVars?.has(d.symbol)===!0);g=(v!==void 0||d.valueDefinition?.inferredType!==!0)&&(!n||v!==void 0||ra(d))&&(!y||P)&&(x===void 0||!a.has(d.symbol)&&(a.add(d.symbol),f(x))),a.delete(d.symbol)}else if(_(d)&&t.isOverriddenOperator?.(d.operator)!==!0&&d.ops.every(f)){if(d.unknowns.length===0){let v=d.N(),x=v.re;if(Number.isFinite(x)&&Math.abs(x)<=ao&&(!n||v.im===0))return s.set(d,!0),!0}d.operator==="Multiply"?g=m(d.ops):d.operator==="List"||d.operator==="Tuple"?g=!0:d.operator==="Divide"?g=O(d.op2)&&d.op2.isSame(0)===!1:r!==void 0&&(d.operator==="Mod"||d.operator==="Smoothstep")&&!d.type.matches("finite_real")?g=d.operator==="Mod"?O(d.op2)&&d.op2.isSame(0)===!1:O(d.op1)&&O(d.op2)&&!d.op1.isSame(d.op2):g=Fu.has(d.operator)}return s.set(d,g),g},c=(d,h=0)=>{if(O(d))return d.im===0&&Number.isFinite(d.re)?Math.abs(d.re):void 0;if(_(d)&&(d.operator==="List"||d.operator==="Tuple")){let P=0;for(let w of d.ops){let S=c(w,h+1);if(S===void 0)return;P=Math.max(P,S)}return P}if(E(d)){let P=r?.get(d.symbol);if(P?.finite===!0)return P.magnitude;if(i(d.symbol))return;let w=u(d);if(w!==void 0&&h<8)return c(w,h+1)}else if(_(d)&&(d.operator==="Sin"||d.operator==="Cos"||d.operator==="Tanh")&&(d.type.matches("real")||n&&f(d.op1)))return 1;let g=d.type.type;if(typeof g!="object"||g.kind!=="numeric")return;let{lower:v,upper:x}=g;if(v===void 0||x===void 0)return;let y=Math.max(Math.abs(v),Math.abs(x));return Number.isFinite(y)?y:void 0},m=d=>{let h=0,g=1;for(let v of d){let x=c(v);x===void 0?h+=1:g*=Math.max(1,x)}return h>1?!1:Number.isFinite(g)&&g<=ao/2};return{finite:f,magnitude:d=>c(d)}}var ia=new WeakMap,sa=new WeakMap;function aa(e){let n=new Set,t=(r,o)=>{if(_(r)){if(!o)for(let i of Ze(r))n.add(i);(r.operator==="Assign"||r.operator==="Declare")&&E(r.op1)&&n.add(r.op1.symbol);for(let i of r.ops)t(i,!1)}};return t(e,!0),n}function Iu(e,n){let t=n.userFunctions,r=n.cse?.harvestOptions;if(t===void 0||r===void 0)return;let o=e.engine,i=b=>r.isOverriddenOperator?.(b)===!0||n.unrollSkipHeads?.has(b)===!0||n.overridesHead?.(b)===!0,s=new Set,a=!1,l=new Map,u=b=>{if(l.has(b))return l.get(b);let k;if(!i(b))try{k=p.userFunctionLiteral(o,b)}catch(R){if(R instanceof Error&&R.name==="CancellationError")throw R;a=!0}return l.set(b,k),k},f=[],c=new Map,m=new Set,d=new Set,h=new Map,g=0,v=[[e,void 0]],x=(b,k)=>{if(c.has(b)||!_(k,"Function"))return;let R=k.ops[0],C=aa(R),G=k.ops.slice(1),A=G.map(L=>dt(L));c.set(b,{names:A,stable:G.map((L,M)=>!Mr(L)&&A[M]!==""&&!C.has(A[M]))}),v.push([R,b])},y=(b,k,R)=>{if(E(b)){let N=b.symbol;if(R.has(N)||k!==void 0&&c.get(k).names.includes(N))return;let q=u(N);if(q!==void 0)m.add(N),x(N,q);else if(!d.has(N)){d.add(N);let Z=o._getSymbolValue(N);Z!==void 0&&v.push([Z,void 0])}return}if(!_(b)||a)return;if(++g>1e5){a=!0;return}if(R.size===0){let N=h.get(k);if(N===void 0&&h.set(k,N=new Set),N.has(b))return;N.add(b)}let C=b.operator;(C==="Assign"||C==="Declare")&&E(b.op1)&&s.add(b.op1.symbol);let G=u(C);G!==void 0&&(R.has(C)?m.add(C):f.push({caller:k,callee:C,args:b.ops,bound:R}),x(C,G));let A=k===void 0?[]:c.get(k).names,L=Ze(b).filter(N=>!A.includes(N));for(let N of L){let q=u(N);q!==void 0&&(m.add(N),x(N,q))}let M=L.length===0?R:new Set([...R,...L]);for(let N of b.ops)y(N,k,M)};for(;v.length>0;){let[b,k]=v.pop();y(b,k,new Set)}if(sa.set(t,a?"all":s),a||c.size===0)return;let P=new Map;for(let[b,{stable:k}]of c)P.set(b,k.map(R=>R&&!m.has(b)));for(let b of f)b.args.length!==c.get(b.callee).names.length&&P.get(b.callee).fill(!1);let w=new Map;for(let[b,{names:k}]of c)w.set(b,k.map(()=>{}));let S=b=>{if(b.caller===void 0)return n;let{names:k}=c.get(b.caller),R=new Map;k.forEach((G,A)=>{G!==""&&R.set(G,{finite:P.get(b.caller)[A],magnitude:w.get(b.caller)[A]})});let C=new Set(n.boundVars??[]);for(let G of k)G!==""&&C.add(G);return{...n,boundVars:C,gpuParameterFacts:R}},z=(b,k)=>k.size===0?!1:E(b)?k.has(b.symbol):_(b)?k.has(b.operator)||b.ops.some(R=>z(R,k)):!1,T=!0;for(;T;){T=!1;for(let b of f){let k=P.get(b.callee);if(!k.some(C=>C))continue;let R=S(b);b.args.forEach((C,G)=>{k[G]&&(z(C,b.bound)||!cn(C,R))&&(k[G]=!1,T=!0)})}}for(let b=0;b<=c.size;b++){let k=new Map;for(let[R,{names:C}]of c)k.set(R,C.map(()=>-1));for(let R of f){let C=P.get(R.callee),G=k.get(R.callee),A=C.some(L=>L)?oa(S(R),!0):void 0;R.args.forEach((L,M)=>{let N=C[M]?A?.magnitude(L):void 0,q=G[M];G[M]=N===void 0||q===void 0?void 0:Math.max(q,N)})}for(let R of k.values())R.forEach((C,G)=>{C===-1&&(R[G]=void 0)});for(let[R,C]of k)w.set(R,C)}let I=new Map;for(let[b,k]of P)I.set(b,k.map((R,C)=>({finite:R,magnitude:R?w.get(b)[C]:void 0})));ia.set(t,I)}function Nu(e,n,t,r,o,i){let s=o.userFunctions===void 0?void 0:ia.get(o.userFunctions)?.get(e);if(s===void 0)return;let a=aa(r),l=new Map;return n.forEach((u,f)=>{if(t[f]!==(i?"f32":"float")||a.has(u))return;let c=s[f];c?.finite===!0&&l.set(u,c)}),l.size===0?void 0:l}var Gu=/^\(?-?\d+(?:\.\d*)?(?:e[-+]?\d+)?\)?$/,Mu=["sin","cos","sign"],Ou=`
${ta(!1)}
`,ju=`
${ta(!0)}
`;function xs(e,n,t,r,o){if(t.length!==3||t.some(u=>u==null)||t.some(u=>p.isComplexValued(u)))return;let i=t.map(j);if(e==="clamp"&&i.every(u=>u==="scalar")&&t.every(u=>cn(u,o))){let[u,f,c]=t.map(m=>r(m));return`min(max(${u}, ${f}), ${c})`}if(i.every(u=>u==="scalar"))return`_gpu_${e}(${t.map(u=>r(u)).join(", ")})`;let s=i[n];if(typeof s!="number"||!i.every(u=>u==="scalar"||u===s))return;let a=le(s,o.language==="wgsl"),l=t.map((u,f)=>i[f]==="scalar"?`${a}(${r(u)})`:r(u));return e==="clamp"&&t.every(u=>cn(u,o))?`min(max(${l[0]}, ${l[1]}), ${l[2]})`:`_gpu_${e}${s}(${l.join(", ")})`}function Le(e,n,t){return fr(e,n(e),t)}function fr(e,n,t){return _(e)?(t?.operators?.(e.operator)??Ln[e.operator])===void 0?n:`(${n})`:n}function Zt(e,n,t,r){return`${e}(${_e(n,t,r)})`}function ze(e){return Me(NaN,e?.language)}function ws(e){return e=W(e),Ne(Nr(e))?!1:Pe(e,"number")}function Uu(e){if(_(e,"List")||_(e,"Tuple"))return e.ops.every(t=>!p.isNonScalarShape(t));if(p.isComplexValued(e))return!0;if(E(e)&&p.localShapeFrameOf(e.symbol)!==void 0){let t=gn(e);return t?.value===void 0||t.value.element==="f"}let n=J(e);return typeof n=="string"?!0:n.kind==="tuple"?n.elements.every(t=>ws(t.type)):n.kind==="list"&&n.dimensions?.length===1?ws(n.elements):!1}function Ve(e){let n=p.vectorComponentCount(e);if(n!==void 0)return Uu(e)?n:void 0}function Et(e){if(e.length===0)return;let n;for(let t of e){if(!p.isNonScalarShape(t))return;let r=p.aggregateComponentCount(t);if(r===void 0||r<2||r>4||n!==void 0&&r!==n)return;n=r}return n}function dn(e,n){if(e.length===0)throw new Error(`Could not compile \`${n}\`: an empty tuple/list has no GPU lowering \u2014 neither GLSL nor WGSL has a zero-length array type.`);for(let[t,r]of e.entries()){if(!p.isNonScalarShape(r))continue;let o=p.aggregateComponentCount(r),i=o===void 0?"a matrix/tensor value":`${o} component${o===1?"":"s"} \u2014 a complex value or a nested tuple/list`;throw new Error(`Could not compile \`${n}\`: element ${t+1} (\`${r.toString()}\`) is itself vector-valued (${i}) and has no GPU lowering; a ${n} constructor takes scalar components.`)}}function tr(e,n){let t=Ve(e);return t===void 0?ze(n):`${n?.language==="wgsl"?`vec${t}f`:`vec${t}`}(${ze(n)})`}var Rn=new WeakSet,cr=new WeakSet;function Cn(e){let n=new Set,t=r=>{if(n.has(r))return!1;if(n.add(r),E(r)){let i=r.engine._getSymbolValue(r.symbol);return i!==void 0&&t(i)}if(!_(r))return!1;let o=r.operator;return o==="Sum"||o==="Product"||o==="Block"||o==="Loop"?!0:r.ops.some(t)};return t(e)}function $s(e,n){let t=e.engine.lookupDefinition(n),r=[];return pt(t)?r.push(t.operator.signature?.type):Re(t)&&r.push(t.value.type?.type,t.value.value?.type?.type),r.some(o=>{let i=oi(o);return i==="any"||i?.includes("scope")===!0||i?.includes("state")===!0})}function Bu(e,n,t){if(!_(e))return!1;let r=new Set;return e.ops.some(o=>{if(_(o,"Declare")){let i=o.ops[0];if(E(i))r.add(i.symbol);else if(_(i,"Tuple")||_(i,"List")||_(i,"Delimiter")||_(i,"Sequence"))for(let a of i.ops)E(a)&&r.add(a.symbol);let s=p.declareValueOperand(o.ops);return s!==void 0&&An(s,n,t)}if(_(o,"Assign")){let i=o.ops[0];return!E(i)||!r.has(i.symbol)?!0:An(o.ops[1],n,t)}return An(o,n,t)})}function An(e,n,t=new Set){if(n.has(e))return!1;if(E(e)){if($s(e,e.symbol))return!0;if(!p.foldValueImpure(e)||t.has(e.symbol))return!1;let o=e.engine._getSymbolValue(e.symbol);if(o===void 0)return!0;t.add(e.symbol);try{return An(o,n,t)}finally{t.delete(e.symbol)}}if(!_(e)||!p.foldValueImpure(e))return!1;if(e.operator==="Block")return Bu(e,n,t);let r=e.operator;return r==="Assign"||r==="Declare"||r==="Assume"||e.ops.some(o=>An(o,n,t))?!0:$s(e,r)}function Eo(e){if(!_(e)||e.operator==="WithRandomSeed"||!p.foldValueImpure(e))return!1;if(!e.ops.some(t=>p.foldValueImpure(t)))return!0;let n=e.engine.lookupDefinition(e.operator);return pt(n)?n.operator.drawsRandom||n.operator.isUserFunctionDefinition:Re(n)}function $t(e,n=new Map){let t=n.get(e);if(t!==void 0)return t;let r=0;if(E(e))r=p.foldValueImpure(e)?1:0;else if(_(e)){for(let o of e.ops)r+=$t(o,n);Eo(e)&&(r+=1)}return n.set(e,r),r}function rr(e,n,t){if(!p.canHoist(t)||Rn.has(t.hoist))return;let r=Qs(t);if(r===void 0)return;if(e.some(p.hasObservableEffect)){if(e.some(y=>An(y,new Set)))return;if(Pn===void 0){let y=new Map,P=e.map(S=>$t(S,y)),w=P.reduce((S,z)=>S+z,0);if($t(r,y)!==w||P.some(S=>S>1)){if(e.some(Cn))throw dr("Could not compile the selection: a clause needs statements and draws a random value, and a draw of the rest of the statement could then change places with its draws.");return}}}if(An(r,new Set(e)))return;let o=t.language==="wgsl",i=e.filter((y,P)=>P%2===1),s=pr("Which",e),a=i.map(y=>s&&j(y)==="scalar"?le(2,o):ve(y,o));if(a.some(y=>y===void 0)||new Set(a).size!==1)return;let l=a[0];if(!/^(float|vec[234]|f32|vec[234]f)$/.test(l)&&!E(e[e.length-2],"True"))return;let u=t.hoist,f=(y,P)=>{let w=u.stmts.length;P&&cr.add(u);let S;try{S=y()}finally{cr.delete(u)}let z=u.stmts.splice(w).map(T=>T.replace(/;\s*$/,""));return{code:S,stmts:z}},c=y=>y.map(P=>`  ${P.replace(/\n/g,`
  `)}`),m=y=>/[;{}]\s*$/.test(y)?y:`${y};`,d=p.tempVar(t),h=i.find(y=>Ve(y))??null,g=s?`${ne(t)}(${ze(t)})`:tr(h,t),v=y=>{if(y>=e.length)return[`${d} = ${g}`];let P=e[y],w=e[y+1];if(E(P,"True")){let I=f(()=>n(w,y+1),!0);return[...I.stmts,`${d} = ${I.code}`]}let S=f(()=>n(P,y),y>0),z=f(()=>n(w,y+1),!0),T=[...z.stmts,`${d} = ${z.code}`];return[...S.stmts,`if (${S.code}) {`,...c(T),"} else {",...c(v(y+2)),"}"]},x=v(0);return p.hoistStatement(t,o?`var ${d}: ${l};`:`${l} ${d};`,x.map(m).join(`
`)),d}function qu(e,n,t){if(!n.some(i=>Cn(i.body)||i.guard!==void 0&&Cn(i.guard))||p.hasObservableEffect(e))return;let r=e.engine,o=n.flatMap(i=>[i.test===void 0?r.True:i.guard===void 0||E(i.guard,"True")?r.False:i.guard,i.body]);if(!pr("Which",o))return rr(o,(i,s)=>{let a=n[Math.floor(s/2)];if(s%2===1)return Ue("Match",a.compileBody,t);let l=a.test;return s===0?l():Ue("Match",l,t)},t)}function et(e){return p.canHoist(e)&&!Rn.has(e.hoist)}function Kt(e){let n=new Set,t=new Set,r=!1,o=i=>{if(!r){if(E(i)){let s=i.symbol;if(t.has(s))return;let a=i.engine._getSymbolValue(s);if(a===void 0)return;t.add(s),o(a),t.delete(s);return}if(_(i)){if(n.has(i)){r=!0;return}n.add(i);for(let s of i.ops)o(s)}}};return o(e),r}var Du=new Set(["Zeta","HurwitzZeta","LerchPhi","PolyLog","PolyGamma","Digamma","Trigamma","BesselJ","FresnelC","FresnelS","GCD","LCM","Mandelbrot","Julia"]);function Xt(e,n){if(n.language!=="wgsl")return!1;let t=new Set,r=new Set,o=i=>{if(E(i)){let a=i.symbol;if(r.has(a))return!1;let l=i.engine._getSymbolValue(a);if(l===void 0)return!1;r.add(a);let u=o(l);return r.delete(a),u}if(!_(i)||t.has(i))return!1;if(t.add(i),Du.has(i.operator)||p.foldValueImpure(i)&&!i.ops.some(a=>p.foldValueImpure(a)))return!0;let s=i.engine.lookupDefinition(i.operator);return Re(s)||pt(s)&&s.operator.isUserFunctionDefinition?!0:i.ops.some(o)};return o(e)}function Ue(e,n,t){let r=p.canHoist(t)?t.hoist:void 0;if(r!==void 0&&cr.has(r))return cr.delete(r),n();let o=r?.stmts.length??0,i=r!==void 0&&Rn.has(r);r!==void 0&&Rn.add(r);let s;try{s=n()}finally{r!==void 0&&!i&&Rn.delete(r)}if(r!==void 0&&r.stmts.length>o)throw r.stmts.length=o,dr(`Could not compile \`${e}\`: a conditionally-evaluated branch contains a multi-statement construct (a loop-form Sum/Product, or an impure operand bound to a hoisted temporary). Hoisting it out of the branch would run it unconditionally \u2014 a shader conditional is an expression, not a statement \u2014 which changes the result whenever the branch draws from the random stream.`);return s}function zn(e,n,t,r){let o=r?.language==="wgsl";return n==="1.0"&&t==="0.0"?`${o?"f32":"float"}(${e})`:o?`select(${t}, ${n}, ${e})`:`((${e}) ? (${n}) : (${t}))`}function lo(e){return e?.language==="wgsl"?"atan2":"atan"}var la={Less:"lessThan",LessEqual:"lessThanEqual",Greater:"greaterThan",GreaterEqual:"greaterThanEqual",Equal:"equal",NotEqual:"notEqual"},Vu={Less:"<",LessEqual:"<=",Greater:">",GreaterEqual:">=",Equal:"==",NotEqual:"!="};function zo(e,n){return n?.language==="wgsl"?`vec${e}<bool>`:`bvec${e}`}function un(e,n){return n?.language==="wgsl"?`vec${e}f`:`vec${e}`}function J(e){return W(e.type.type)}function ua(e){if(_(e,"Tuple"))return!0;let n=J(e);return typeof n!="string"&&n.kind==="tuple"}function Es(e,n){for(let t of n)if(t!=null&&!(!_(t,"List")&&!_(t,"Tuple"))&&j(t)==="array")throw new Error(`Could not compile \`${e}\`: the value \`${t.toString()}\` lowers to a shader ARRAY, and a selection (a GLSL ternary, a WGSL \`select\`) chooses between scalars or vectors only.`)}function uo(e,n,t){if(t.language!=="wgsl")return;let r=o=>_(o)&&o.operator!=="Function"&&(o.operator==="Return"||o.ops.some(r));if(!n.some(r)&&n.some(o=>p.foldValueImpure(o)))throw dr(`Could not compile \`${e}\`: a branch draws a random value, and the WGSL selection \`select(\u2026)\` computes every branch, so a branch that is not taken would still advance the random stream and shift every later draw in the shader.`)}function fo(e,n,t){if(t.language!=="wgsl")return;let r=o=>i=>_(i)&&i.operator!=="Function"&&i.operator!=="Block"&&(i.operator===o||i.ops.some(r(o)));if(!n.some(r("Return"))&&n.some(r("Assign")))throw new Error(`Could not compile \`${e}\`: a branch assigns a variable, and the WGSL selection \`select(\u2026)\` takes expressions, where an assignment is a statement in WGSL. Such a selection compiles as an \`if\` statement only where its value is discarded: a statement of a block that is not the block's value, or a loop body.`)}function fe(e){throw new Error(`Could not compile \`Which\`: ${e}`)}function pr(e,n){return p.liveSelectionArms({operator:e,ops:n}).some(t=>p.isComplexValued(t))}function Jt(e,n,t,r,o){if(!r||p.isComplexValued(n))return t;let i=j(n)==="scalar";if(!i||!Pe(n.type.type,"number"))throw new Error(`Could not compile \`${e}\`: the value \`${n.toString()}\` is not a ${i?"number":"scalar"}, and another value of the selection is complex.`);return`${ne(o)}(${t}, 0.0)`}function fa(e){if(E(e,"True")||E(e,"False"))return;if(_(e,"List")){for(let i of e.ops)E(i,"True")||E(i,"False")||p.isBooleanValued(i)&&!p.isComplexValued(i)&&!p.isNonScalarShape(i)||fe(`a literal list condition needs provably boolean scalar cells (\`True\`/\`False\` or a scalar comparison); the cell \`${i.toString()}\` is not one, and the interpreter only selects when every cell evaluates to a boolean.`);let o=e.nops;return(o<2||o>4)&&fe(`a ${o}-element list condition has no GPU vector lowering (only vec2\u2013vec4 are shader values).`),o}let n=e.operator,t=_(e)?e.ops:[];if(Ur(n)){let o;for(let i of t){p.isComplexValued(i)&&fe(`a complex-valued operand (\`${i.toString()}\`) in an element-wise condition is lowered as a \`vec2\` of (re, im), which has no cell meaning in a selection.`),ua(i)&&fe(`a tuple operand (\`${i.toString()}\`) in an element-wise condition has no element-wise reading \u2014 the interpreter binds a tuple atomically.`);let s=Ve(i);if(s===void 0){p.isNonScalarShape(i)&&fe(`the condition operand \`${i.toString()}\` is not a shader scalar and has no static vec2\u2013vec4 shape (an unknown-length list, a matrix, or a 5+-element list).`);continue}o!==void 0&&o!==s&&fe(`an element-wise condition mixes vec${o} and vec${s} operands.`),o=s}return o===void 0?void 0:((n==="Equal"||n==="NotEqual")&&t.length>2&&fe(`an n-ary \`${n}\` over a collection operand has no faithful element-wise lowering \u2014 the interpreter's n-ary form switches shape on how many operands are collections at run time, so no pairwise conjunction matches it.`),la[n]===void 0&&fe(`the relation \`${n}\` has no componentwise shader form.`),o)}if(n==="And"||n==="Or"||n==="Not"){let o;for(let i of t){let s=fa(i);s!==void 0&&(o!==void 0&&o!==s&&fe(`an element-wise \`${n}\` mixes vec${o} and vec${s} operands.`),o=s)}return o}if(p.isComplexValued(e))return;let r=p.vectorComponentCount(e);if(r!==void 0)return e.type.matches("indexed_collection<boolean>")||fe(`the condition \`${e.toString()}\` is a collection of \`${e.type.toString()}\`, not of booleans.`),r;p.isNonScalarShape(e)&&fe(`the condition \`${e.toString()}\` is not a shader scalar and has no static vec2\u2013vec4 shape.`)}function zs(e,n,t){if(e.length===1)return e[0];if(t.language==="wgsl")return`(${e.join(" & ")})`;let r=un(n,t);return`${zo(n,t)}(${e.map(o=>`${r}(${o})`).join(" * ")})`}function Hu(e,n,t){if(e.length===1)return e[0];if(t.language==="wgsl")return`(${e.join(" | ")})`;let r=un(n,t);return`${zo(n,t)}(${e.map(o=>`${r}(${o})`).join(" + ")})`}function ca(e,n,t,r){let o=zo(n,r),i=un(n,r);if(E(e,"True"))return`${o}(true)`;if(E(e,"False"))return`${o}(false)`;if(_(e,"List"))return`${o}(${e.ops.map(l=>E(l,"True")?"true":E(l,"False")?"false":t(l)).join(", ")})`;let s=e.operator,a=_(e)?e.ops:[];if(Ur(s)){let l=r.language==="wgsl"?Vu[s]:la[s];l===void 0&&fe(`the relation \`${s}\` has no componentwise shader form.`);let u=(d,h)=>{let g=h?ce(s,d,t,r):t(d);return Ve(d)===void 0?`${i}(${g})`:g},f=a.some((d,h)=>h>=1&&h<=a.length-2&&d.isPure===!1),c=a.map(d=>u(d,f&&d.isPure===!1)),m=[];for(let d=0;d<c.length-1;d++)m.push(r.language==="wgsl"?`((${c[d]}) ${l} (${c[d+1]}))`:`${l}(${c[d]}, ${c[d+1]})`);return zs(m,n,r)}if(s==="And"||s==="Or"||s==="Not"){let l=a.map(u=>ca(u,n,t,r));if(s==="Not"){if(l.length!==1)throw new Error("Could not compile `Not`: expected one argument");return r.language==="wgsl"?`(!(${l[0]}))`:`not(${l[0]})`}return s==="And"?zs(l,n,r):Hu(l,n,r)}return!p.isComplexValued(e)&&p.vectorComponentCount(e)!==void 0?t(e):`${o}(${t(e)})`}function Wu(e,n,t){let r;for(let l=0;l<e.length;l+=2){let u=fa(e[l]);u!==void 0&&(r!==void 0&&r!==u&&fe(`the conditions of an element-wise selection mix vec${r} and vec${u}.`),r=u)}if(r===void 0)return null;let o=r,i=un(o,t),s=l=>{p.isComplexValued(l)&&fe(`an element-wise selection cannot have a complex-valued arm (\`${l.toString()}\`) \u2014 a compiled complex value is a \`vec2\` of (re, im), which has no cell convention inside a selection.`),ua(l)&&fe(`an element-wise selection cannot have a tuple arm (\`${l.toString()}\`) \u2014 a lifted point would be a list of points, which is not a GPU value.`),(E(l,"True")||E(l,"False")||l.type.matches("boolean")||l.type.matches("indexed_collection<boolean>"))&&fe(`an element-wise selection cannot have a boolean-valued arm (\`${l.toString()}\`) \u2014 a GPU selection produces one numeric vector, and there is no boolean-cell convention. Use numeric arms (e.g. 1 and 0) instead.`);let u=Ve(l);if(u===o)return n(l);if(u===void 0&&!p.isNonScalarShape(l))return`${i}(${n(l)})`;fe(`the arm \`${l.toString()}\` does not fit the vec${o} shape of the element-wise conditions (the interpreter answers \`incompatible-dimensions\`).`)},a=`${i}(${ze(t)})`;for(let l=e.length-2;l>=0;l-=2){let u=s(e[l+1]);if(E(e[l],"True")){a=u;continue}let f=ca(e[l],o,n,t);a=t.language==="wgsl"?`select(${a}, ${u}, ${f})`:`mix(${a}, ${u}, ${f})`}return a}function Yu(e,n,t,r){let o=h=>{throw new Error(`Could not compile \`${e}\`: ${h}`)};p.isComplexValued(n)&&o(`a complex-valued operand (\`${n.toString()}\`) is lowered as a \`vec2\` of (re, im), which has no element-wise reading \u2014 a componentwise shader builtin would treat its real and imaginary parts as two independent elements.`),Ve(n)===void 0&&o(`the operand \`${n.toString()}\` has no static vec2\u2013vec4 shape (an unknown-length list, a matrix, or a 5+-element list), so it is not a shader vector and the componentwise builtins do not apply to it.`);let i=t.collection(),s=n.isPure===!1&&!/^[A-Za-z_]\w*$/.test(i);if(e==="Square")return/^[A-Za-z_]\w*$/.test(i)?`(${i} * ${i})`:vt(i,2,j(n));let a=t.element(i),l=`_gpu_tanh(${i})`;if(a===l||a===`(1.0 / ${l})`)return a.replace(l,`_gpu_tanh${Ve(n)}(${i})`);let u=Ve(n),f=cn(n,r),c=a,m=a;for(let h of Mu){let g=`_gpu_${h}(${i})`;c=c.split(g).join(f?`${h}(${i})`:`_gpu_${h}${u}(${i})`),m=m.split(g).join(i)}s&&c.split(i).length>2&&o(`the operand \`${n.toString()}\` draws a random value, and the lowering \`${a}\` uses it more than once, so each use would draw again.`);let d=pa(m.split(i).join("_operand"),"_operand");return d!==void 0&&o(`the scalar shader lowering \`${a}\` is not componentwise \u2014 ${d} A shader has no element loop, so a non-componentwise lowering cannot be broadcast over a \`vecN\` at all.`),c}function pa(e,n){let t=/_gpu_[A-Za-z0-9_]+\s*\(/.exec(e);if(t!==null)return`it calls the preamble helper \`${t[0].slice(0,-1).trim()}\`, which is declared with scalar float/f32 parameters.`;if(n!==void 0){if(/\?|[<>]=?|[=!]=/.test(e))return"it branches on a comparison, which a shader requires to be a scalar bool.";if(!e.includes(n))return"it does not use the operand at all, so its result is a scalar."}}function co(e,n){if(e===null)return;let t=p.piMultiple(e);return t!==void 0&&j(t)==="scalar"?Oe(t,n,!1):void 0}function Qn(e,n){if(e===null)return;let t=p.imaginaryPiMultiple(e);return t!==void 0&&j(t)==="scalar"?Oe(t,n,!1):void 0}function Oe(e,n,t,r){if(p.isComplexValued(e)||j(e)!=="scalar")return e;if(_(e,"Multiply")&&e.nops===2){let[o,i]=O(e.ops[0])?[e.ops[0],e.ops[1]]:[e.ops[1],e.ops[0]];if(!O(o)||!_(i,"Add"))return e;let s=Cs(i,n,t,o,r);return s===i?e:e.engine.function("Multiply",[o,s])}return _(e,"Add")?Cs(e,n,t,void 0,r):e}function Zu(e,n){if(!_(e)||n.constantFold===!1||e.isPure!==!0||e.unknowns.length>0)return;let t=e.engine;if(!e.symbols.every(a=>t.symbol(a).isConstant)||p.reachesExcludedName(e,n))return;let r=a=>O(a)&&!a.isComplex&&a.isFinite===!0,o=e.evaluate();if(r(o)&&O(o)&&o.isExact)return o;let i=e.N();if(!r(i))return;let s=Math.max(1,Math.ceil(Math.log10(Math.abs(i.re)+1)));return t.precision>=s+12?i:void 0}function Cs(e,n,t,r,o){if(!_(e,"Add"))return e;let i=[],s=[],a=[];for(let f of e.ops){let c=Zn(f);if(c!==void 0){i.push(c);continue}if(t){let d=p.piMultiple(f),h=d===void 0?void 0:Zn(d);if(h!==void 0){s.push(h);continue}}let m=o===void 0?void 0:Zu(f,o);if(m!==void 0){i.push(m);continue}a.push(f)}if(i.length+s.length===0)return e;let l=no(i,s,f=>{let c=t?oe.PI.mul(n):new oe(n);if(r!==void 0){let m=bt(r);if(m===void 0||m.isZero())return;c=c.div(m.abs())}if(!(f.abs().cmp(c.div(2))<=0))return f.sub(f.div(c).round().mul(c)).toNumber()});if(l===void 0)return e;let u=e.engine;return l===0?a.length===0?u.Zero:a.length===1?a[0]:u.function("Add",a):u.function("Add",[...a,u.number(l)])}function j(e){if(p.isComplexValued(e)||!p.isNonScalarShape(e)&&!Ku(e))return"scalar";let n=Ve(e);if(n!==void 0)return n;if((_(e,"List")||_(e,"Tuple"))&&Et(e.ops)!==void 0)return"array";if(_(e,"Matrix"))return"matrix";let t=J(e);return typeof t!="string"&&t.kind==="list"&&(t.dimensions?.length??0)>=2?"matrix":"array"}function Ku(e){let n=J(e);return U(n,yn)&&!U(n,"string")}function Be(e){return typeof e=="number"?`vec${e}`:e}function Ss(e,n){if(e==null||n===null||n===void 0)return;let t=j(e),r=j(n);if(typeof t=="number")return r==="scalar"||r===t?t:void 0;if(typeof r=="number")return t==="scalar"?r:void 0}function ks(e,n,t,r){return n===void 0||j(e)!=="scalar"?t(e):`${un(n,r)}(${t(e)})`}function Co(e){if(_(e,"Matrix")){let t=e.ops[0];if(!_(t)||t.nops===0)return;let r=t.ops,o=_(r[0])?r[0].nops:0;return o>0&&r.every(i=>_(i)&&i.nops===o)?[r.length,o]:void 0}let n=J(e);if(typeof n!="string"&&n.kind==="list"){let t=n.dimensions;if(t?.length===2&&t[0]>0&&t[1]>0)return[t[0],t[1]]}}var po=/(?:array|[iub]?vec[234]|mat[234]x[234]|atomic|ptr)\s*</y;function Ie(e){let n=e.trim(),t=/^([A-Za-z_]\w*(?:\s*<[^<>()]*>)?(?:\s*\[\d+\])?)\s*\(/.exec(n);if(t===null)return;let r=0,o=t[0].length,i=[];for(let s=t[0].length-1;s<n.length;s++){if((s===0||!/[\w$]/.test(n[s-1]))&&(po.lastIndex=s,po.test(n))){let a=1,l=po.lastIndex;for(;l<n.length&&a>0;l++)n[l]==="<"?a++:n[l]===">"&&a--;if(a>0)return;s=l-1;continue}if(n[s]==="(")++r===1&&(o=s+1);else if(n[s]===","&&r===1)i.push(n.slice(o,s).trim()),o=s+1;else if(n[s]===")"&&--r===0){if(s!==n.length-1)return;let a=n.slice(o,s).trim();return(a!==""||i.length>0)&&i.push(a),{callee:t[1].trim(),argCount:i.length,operands:i}}}}var st=/^(?:[iub]?vec[234]|mat[234]|array\s*<|(?:float|f32|int|i32|uint|u32|bool)\s*\[)/,Xu=/^(?:[iub]?vec[234]\s*\[|array\s*<\s*vec)/,Ju=/\b(?:[iub]?vec[234]|mat[234]|array\s*<|(?:float|f32|int|i32|uint|u32|bool)\s*\[)/;function Qu(e,n){let t=new RegExp(`(?:^|\\n)[^\\S\\n]*(?:fn[^\\S\\n]+|[A-Za-z_]\\w*(?:\\[\\d+\\])?[^\\S\\n]+)${e}[^\\S\\n]*\\(([^)]*)\\)`).exec(n);return t===null?!1:!/[iub]?vec[234]|mat[234]|array\s*<|\[\s*\d+\s*\]/.test(t[1])}var ef=["dot","length","distance","determinant","any","all"];function nf(e){let n=new RegExp(`\\b(?:${ef.join("|")})\\s*\\(`,"g"),t="",r=0,o;for(;(o=n.exec(e))!==null;){let i=0,s=-1;for(let a=o.index+o[0].length-1;a<e.length;a++)if(e[a]==="(")i++;else if(e[a]===")"&&--i===0){s=a;break}if(s<0)break;t+=e.slice(r,o.index)+"0.0",r=s+1,n.lastIndex=r}return t+e.slice(r)}function Ps(e){let n=/\b([iub]?vec[234][fhiu]?)\s*\(/g,t;for(;(t=n.exec(e))!==null;){let r=0;for(let o=t.index+t[0].length-1;o<e.length;o++)if(e[o]==="(")r++;else if(e[o]===")"&&--r===0){let i=nf(e.slice(t.index+t[0].length,o)),s=/\b(?:[iub]?vec[234]|mat[234]|array\s*<|(?:float|f32)\s*\[)/.exec(i);if(s!==null)return`it packs its operands into a \`${t[1]}\` constructor, which has no room for the aggregate \`${s[0].trim()}\` value standing in each slot.`;break}}}function mo(e){let n=0;for(let t of e)if(t==="("||t==="[")n++;else if(t===")"||t==="]")n--;else if(t===" "&&n===0)return`(${e})`;return e}function Qe(e){let n=e.trim();return/^[A-Za-z_]\w*(?:\.\w+|\[\d+\])*$/.test(n)||/^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/.test(n)}function tf(e){return e?.gpuShapeRules}var da=new WeakMap;function rf(e){let n=e[0];return e.length===1&&n!==void 0&&(_(n,"Tuple")||_(n,"PointList"))&&Mt(n)}function we(e,n=()=>!0){return typeof e=="function"&&da.set(e,n),e}var ma=new WeakMap;function mn(e,n){return typeof e=="function"&&ma.set(e,n),e}function zt(e,n,t){return(r,o)=>{let i=r[n];if(r.length!==2||i===null||i===void 0||Y(i)!==t)return;let s=Ie(o);if(!(s?.callee!==e||s.argCount!==1))return new Set([n])}}var Rs=e=>e.length===1&&_(e[0],"List"),As=e=>e.length===1;function xt(e){let n=[...e].sort((t,r)=>t-r).map(t=>`${t+1}`);return n.length===0?"nowhere":n.length===1?`in argument ${n[0]}`:`in arguments ${n.slice(0,-1).join(", ")} and ${n[n.length-1]}`}function ha(e,n){let t=Ie(e);return t===void 0?!1:st.test(t.callee)?!Xu.test(t.callee):n.has(t.callee)?t.operands.some(r=>ha(r,n)):!1}function of(e){if(e===void 0)return;let n=Ie(e);if(n===void 0)return;let t=/^vec([234])f?$/.exec(n.callee);return t===null?void 0:Number(t[1])}function ga(e,n){let t=Ie(e);if(t===void 0)return;let r=n.get(t.callee);if(r!==void 0){let o=t.operands.map(i=>ha(i,n));if(o.some(i=>i)){let i=o.findIndex((s,a)=>!s&&!r.has(a));if(i>=0)return`the shader builtin \`${t.callee}\` takes a scalar only ${xt(r)}, but the emitted call \`${e.trim()}\` has a scalar in argument ${i+1}, where the overload requires the \`vecN\` genType; the scalar is not promoted to a vector.`}}for(let o of t.operands){let i=ga(o,n);if(i!==void 0)return i}}var sf=new Set(["Variance","Hypot","Arctan2","Haversine","GammaLn","Beta","Erf","Erfc","ErfInv","Heaviside","Sinc","FresnelC","FresnelS","BesselJ","Arccot","Arcsch","InverseHaversine","Gamma","Factorial","Digamma","Trigamma","PolyGamma","Zeta","HurwitzZeta","LerchPhi","PolyLog","Sign","Smoothstep"]);function af(e,n){return p.REAL_ONLY_BY_DEFINITION.has(e)||sf.has(e)||p.stringHelperIsRealOnly(e,n)}function _a(e,n,t,r,o,i){let s=n.map(j);if(typeof i=="function"){if(da.get(i)?.(n)===!0)return;let S=ma.get(i)?.(n,t);if(S!==void 0&&S.size>0)return _a(e,n.filter((z,T)=>!S.has(T)),t,r,o)}let a=w=>{throw new Error(`Could not compile \`${e}\`: ${w}`)},l=Ie(t),u=()=>{if(l===void 0||l.argCount!==n.length)return;let w=r.vectorOnlySlots.get(l.callee);if(w===void 0)return;let S=s.findIndex((z,T)=>w.has(T)&&z==="scalar");S>=0&&a(`the shader builtin \`${l.callee}\` is declared over the \`vecN\` genType ${xt(w)} in this language \u2014 it has no scalar overload there \u2014 but argument ${S+1} lowers to a scalar; the scalar is not promoted to a vector.`)};if(s.every(w=>w==="scalar")){u();return}let f=new Set(s.filter(w=>typeof w=="number")),c=()=>{f.size>1&&a(`its operands lower to shader vectors of different widths (${[...f].map(w=>`vec${w}`).join(", ")}); the componentwise builtins and operators require ONE genType.`)},m=s.includes("matrix"),d=s.includes("array"),h=l;if(h===void 0){let w=Ln[e]?.[0];if(w===void 0||!/^[-+*/]$/.test(w)){if(Qe(t))return;(d||m)&&a(`the compound shader lowering \`${t}\` is built from the genType-polymorphic builtins and operators, which have no ${m?"`matN`":"array"} reading, so the operand shapes (${s.map(Be).join(", ")}) have no lowering.`),c();let b=Ps(t);b!==void 0&&a(`the shader lowering \`${t}\` cannot take the non-scalar operand shapes (${s.map(Be).join(", ")}) \u2014 ${b}`);return}if(d&&a("an operand lowers to a shader ARRAY (`float[N]` / `array<f32, N>`), which has no arithmetic operators \u2014 only scalars, `vecN` and `matN` values do."),!m){c();return}let S=[];for(let b=0;b<s.length;b++){let k=s[b];if(k!=="matrix"){S.push(k);continue}let R=Co(n[b]);if(R!==void 0&&R[1]===1&&R[0]>=2&&R[0]<=4&&_(n[b],"Matrix")){S.push(R[0]);continue}(R===void 0||R[0]!==R[1]||R[0]<2||R[0]>4)&&a(`its operand \`${n[b].toString()}\` lowers to a matrix with no native square \`matN\` (N = 2\u20134) shader type`+(R!==void 0?` (its dimensions are ${R[0]}\xD7${R[1]})`:" (its dimensions are not statically known)")+`, so the shader operator \`${w}\` has no overload for it.`),S.push({mat:R[0]})}let z=b=>typeof b=="number"?`vec${b}`:b==="scalar"?b:`mat${b.mat}`,T=`(${S.map(z).join(", ")})`,I=new Set(S.flatMap(b=>b==="scalar"?[]:[typeof b=="number"?b:b.mat]));if(!S.some(b=>typeof b=="object")){I.size>1&&a(`its operands lower to shader vectors of different widths ${T}; the componentwise operators require ONE genType.`);return}if(n.length===1){r.matrixNegate||a(`the shader unary \`-\` is declared over scalars and \`vecN\` only in this language; it has no overload for the ${z(S[0])} operand.`);return}if(w!=="*"){S.some(b=>typeof b=="number")&&a(`a \`matN\` and a \`vecN\` operand combine only under \`*\` (matrix-vector product), not \`${w}\`.`),r.matrixArithmetic(w,S.every(b=>typeof b=="object"))||a(`the shader operator \`${w}\` has no overload for the operand shapes ${T}.`),I.size>1&&a(`the componentwise \`${w}\` requires matrices of the SAME dimensions, but the operand shapes are ${T}.`);return}I.size>1&&a(`under \`*\` the matrix and vector dimensions must agree (\`matCxR * vecC\`, \`matKxR * matCxK\`), but the operand shapes ${T} do not.`);return}let{callee:g,argCount:v}=h;if(st.test(g))return;if(g.startsWith("_gpu_")){if(v!==n.length||!Qu(g,o(`${g}(`)))return;let w=pa(t);w!==void 0&&a(`the shader lowering \`${t}\` cannot take the non-scalar operand shapes (${s.map(Be).join(", ")}) \u2014 ${w}`);return}(m||d)&&a(`the shader builtin \`${g}\` is declared over scalar and \`vecN\` genTypes; it has no ${m?"`matN`":"array"} overload, so the operand shapes (${s.map(Be).join(", ")}) have no lowering.`),c();let x=Ps(t);x!==void 0&&a(`the shader lowering \`${t}\` cannot take the non-scalar operand shapes (${s.map(Be).join(", ")}) \u2014 ${x}`);let y=s.map((w,S)=>w!=="scalar"||v!==n.length?w:of(h.operands[S])??w);if(f.size===1&&y.includes("scalar")){let w=r.scalarGenTypeSlots.get(g);if(w===void 0&&a(`the shader builtin \`${g}\` requires MATCHING genType arguments, but it is applied to a vec${[...f][0]} operand and a scalar one; the scalar is not promoted to a vector.`),v===n.length){let z=y.findIndex((T,I)=>T==="scalar"&&!w.has(I));z>=0&&a(`the shader builtin \`${g}\` takes a scalar only ${xt(w)}, but here the scalar stands in argument ${z+1}, where the overload requires the vec${[...f][0]} genType; the scalar is not promoted to a vector.`)}let S=ga(t,r.scalarGenTypeSlots);S!==void 0&&a(S)}let P=r.mandatoryScalarSlots.get(g);if(P!==void 0&&v===n.length){let w=s.findIndex((S,z)=>P.has(z)&&S!=="scalar");w>=0&&a(`the shader builtin \`${g}\` requires a SCALAR ${xt(P)} \u2014 that argument is not genType-polymorphic, so there is no overload with a ${Be(s[w])} standing there \u2014 but argument ${w+1} lowers to a ${Be(s[w])}.`)}u()}function lf(e,n,t,r,o,i){if(t.length===0)throw new Error(`Could not compile \`${e}\`: needs at least one argument`);if(t.length===1)return Le(t[0],r,i);let s=t.map(j),a=o?.scalarGenTypeSlots.get(e),l=a!==void 0&&t.length>2,u=`${e}(${r(t[0])}, ${r(t[1])})`,f=s[0];for(let c=1;c<t.length;c++){if(c>1&&(u=`${e}(${u}, ${r(t[c])})`),l){let m=[f,s[c]],d=m.findIndex((h,g)=>h==="scalar"&&!a.has(g)&&m[1-g]!=="scalar");if(d>=0)throw new Error(`Could not compile \`${n}\`: the shader builtin \`${e}\` takes a scalar only ${xt(a)}, but the emitted call \`${u}\` has a scalar in argument ${d+1}, where the overload requires the \`vecN\` genType; the scalar is not promoted to a vector.`)}f==="scalar"&&(f=s[c])}return u}function Ts(e,n,t,r,o){let i=()=>lf(e,n,t,r,tf(o),o);if(t.length<2||t.some(h=>p.isComplexValued(h)))return i();let s=t.map(j),a=t.every(h=>cn(h,o));if(a&&new Set(s).size===1&&(s[0]==="scalar"||typeof s[0]=="number")||!s.every(h=>h==="scalar"||typeof h=="number"))return i();let l=new Set(s.filter(h=>typeof h=="number"));if(l.size>1)return i();let u=l.size===1?[...l][0]:void 0,f=u===void 0?"":le(u,o.language==="wgsl"),c=t.map((h,g)=>u!==void 0&&s[g]==="scalar"?`${f}(${r(h)})`:r(h)),m=a?e:`_gpu_${e}${u??""}`,d=c[0];for(let h=1;h<c.length;h++)d=`${m}(${d}, ${c[h]})`;return d}function So(e,n,t){let r=Ie(n);if(r!==void 0&&st.test(r.callee))return r.operands.some(f=>Ju.test(f))?void 0:r.operands.length>0?r.operands:void 0;let o=j(e);if(typeof o!="number")return;let i=["x","y","z","w"].slice(0,o);if(/^[A-Za-z_]\w*$/.test(n))return i.map(f=>`${n}.${f}`);if(!p.canHoist(t))return;let s=p.foldValueImpure(e);s&&Je(e.operator,[e],t);let a=p.tempVar(t),l=t.language==="wgsl"?`vec${o}f`:`vec${o}`,u=t.language==="wgsl"?`var ${a}: ${l}`:`${l} ${a}`;return p.hoistStatement(t,`${u} = ${n};`),s&&De([e],t),i.map(f=>`${a}.${f}`)}function Ls(e,n,t,r,o){if(t.length===0)throw new Error(`Could not compile \`${n}\`: needs at least one argument`);let i=t.map(j),s=t.map(c=>c.isCollection&&c.count===0),a=t.map((c,m)=>s[m]?"":r(c)),l=a.map((c,m)=>{if(s[m]||i[m]!=="scalar")return!0;let d=Ie(c);return d!==void 0&&st.test(d.callee)}),u=c=>{let m=c[0];for(let d=1;d<c.length;d++)m=`_gpu_${e}(${m}, ${c[d]})`;return m};if(!l.some(c=>c))return a.length===1?fr(t[0],a[0],o):t.every(c=>cn(c,o))?a.slice(1).reduce((c,m)=>`${e}(${c}, ${m})`,a[0]):u(a);let f=[];for(let c=0;c<t.length;c++){if(s[c])continue;if(!l[c]){f.push(a[c]);continue}let m=So(t[c],a[c],o);if(m===void 0)throw new Error(`Could not compile \`${n}\`: the operand \`${t[c].toString()}\` lowers to a shader ${Be(i[c])} with no compile-time component list, so there is nothing for the reduction to fold over \u2014 a shader has no dynamic iteration here, and the \`${e}\` builtin is componentwise, not a reduction.`);f.push(...m)}return f.length===0?`(${ze(o)})`:t.every((c,m)=>s[m]||cn(c,o))?`(${f.slice(1).reduce((c,m)=>`${e}(${c}, ${m})`,f[0])})`:`(${u(f)})`}function Fs(e,n,t,r){let o=e==="GCD"?"_gpu_gcd":"_gpu_lcm",i=[];for(let a of n){if(a==null)throw new Error(`Could not compile \`${e}\`: missing argument`);if(a.isCollection&&a.count===0)continue;let l=t(a),u=Ie(l);if(!(j(a)!=="scalar"||u!==void 0&&st.test(u.callee))){i.push(l);continue}let c=So(a,l,r);if(c===void 0)throw new Error(`Could not compile \`${e}\`: the operand \`${a.toString()}\` lowers to a shader ${Be(j(a))} with no compile-time component list, so there is nothing for the fold to run over.`);i.push(...c)}if(i.length===0)return B(e==="GCD"?0:1,r.language);if(i.length===1)return`abs(${i[0]})`;let s=i[0];for(let a=1;a<i.length;a++)s=`${o}(${s}, ${i[a]})`;return s}function vo(e){let n=J(e);return n==="tuple"||typeof n!="string"&&(n.kind==="tuple"||n.kind==="union")?!1:e.type.matches("indexed_collection<any>")}function uf(e,n,t,r){if(!_(e,"PointList"))return{decline:"the operand is not a symbolic `PointList` application, and only that shape has a statically known point count"};let o=e.ops;if(n>=o.length)return{decline:`the points have arity ${o.length}, so there is no coordinate ${n+1}`};let i;for(let f=0;f<o.length;f++){let c=o[f];if(vo(c)){let m=p.aggregateComponentCount(c);if(m===void 0)return{decline:`source component ${f+1} (type \`${c.type.toString()}\`) has no statically known length, and a shader vector must have one`};if(m<2||m>4)return{decline:`source component ${f+1} has ${m} elements, and a shader vector holds 2 to 4`};i=i===void 0?m:Math.min(i,m)}else if(!U(J(c),"number"))return{decline:`component ${f+1} (type \`${c.type.toString()}\`) is neither a list source nor a provably scalar numeric slot, so it has no \`vecN\` broadcast`}}if(i===void 0)return{decline:"no component is a list source, so this is not a point LIST"};for(let f=0;f<o.length;f++)if(f!==n&&!o[f].isPure)return{decline:`component ${f+1} is impure, and the projection would discard it unevaluated`};let s=o[n];if(!vo(s))return`${r.language==="wgsl"?`vec${i}f`:`vec${i}`}(${t(s)})`;let a=p.aggregateComponentCount(s),l=t(s);if(a===i)return l;let u="xyzw".slice(0,i);return Qe(l)?`${l}.${u}`:`(${l}).${u}`}function ff(e,n){let t=n(e).trim();if(t===Me(NaN))return t;let r=J(e),o=typeof r!="string"?r.kind==="tuple"?r.elements.every(i=>U(i.type,"number"))?r.elements.length:void 0:r.kind==="list"&&r.dimensions?.length===1&&r.elements!==void 0&&U(r.elements,"number")?r.dimensions[0]:void 0:void 0;if(o!==void 0&&o>=2&&o<=4)return Xe(t,"xyzw"[o-1]);throw new Error("Could not compile `Last`: the operand must be a point or a list of 2 to 4 numbers of known length (a `vec2`/`vec3`/`vec4`).")}function ho(e,n,t,r){let o=J(e),i=n==="x"?0:n==="y"?1:2,s=typeof o!="string"?o.kind==="tuple"?o.elements.length:o.kind==="list"&&o.dimensions?.length===1&&o.dimensions[0]>=2&&o.dimensions[0]<=4&&o.elements!==void 0&&U(o.elements,"number")?o.dimensions[0]:void 0:void 0;if(s===void 0&&e.type.matches("indexed_collection<any>")){let a=uf(e,i,t,r);if(typeof a=="string")return a;throw new Error(`Could not compile \`Point${n.toUpperCase()}\`: a list of points has no GPU lowering (a point must be a single vec2/vec3/vec4): ${a.decline}.`)}if(s!==void 0&&s<=i)throw new Error(`Could not compile \`Point${n.toUpperCase()}\`: the point has arity ${s} \u2014 no ${["first","second","third"][i]} coordinate.`);return Xe(t(e),n)}function Xe(e,n){let t=e.trim();if(t===Me(NaN))return n.length===1?t:`vec${n.length}(${t})`;if(Qe(t))return`${t}.${n}`;let r=/^[A-Za-z_]\w*\(/.exec(t);if(r!==null&&t.endsWith(")")){let o=0,i=!0;for(let s=r[0].length-1;s<t.length;s++)if(t[s]==="(")o+=1;else if(t[s]===")"&&(o-=1,o===0&&s!==t.length-1)){i=!1;break}if(i)return`${t}.${n}`}return`(${t}).${n}`}function ko(e){if(_(e,"List")||_(e,"Tuple")){let t=e.ops;for(let r=0;r<t.length;r++){if(p.isNonScalarShape(t[r]))return`element ${r+1} of the base is itself an aggregate (type \`${t[r].type.toString()}\`), so it is not one component of a shader vector`;if(!U(J(t[r]),"number"))return`element ${r+1} of the base (type \`${t[r].type.toString()}\`) is not provably scalar numeric, and a shader value has no other element domain here`}return}let n=J(e);if(typeof n!="string"){if(n.kind==="tuple"){for(let t=0;t<n.elements.length;t++)if(!pn(n.elements[t].type))return`slot ${t+1} of the base tuple (type \`${nn(n.elements[t].type)}\`) is not a REAL scalar \u2014 a shader vector's components are single floats, and a shader value has no other element domain here`;return}if(n.kind==="list")return pn(n.elements)?void 0:`the base's element type \`${nn(n.elements)}\` is not a REAL scalar \u2014 a shader vector's components are single floats, and a shader value has no other element domain here`}return`the base (type \`${e.type.toString()}\`) states no element type, so its elements are not provably scalar numeric`}function cf(e){if(!E(e)||p.localShapeFrameOf(e.symbol)===void 0)return"unframed";let n=gn(e);if(n?.value!==void 0&&n.value.element!=="f")return`the base is declared "${n.spelling}" by the caller, whose components are not floats \u2014 a positional shader access reads one float component, and neither language converts between the component types`}function Po(e){let n=gn(e);if(n===void 0){if(E(e)&&p.isLocalBoolean(e.symbol))return{decline:"the index is a shader `bool`, and a positional access indexes by a number \u2014 neither language converts a boolean to one"};if(E(e)&&p.localShapeFrameOf(e.symbol)){let r=p.aggregateComponentCount(e);if(r!==void 0)return{decline:`the index is the local name "${e.symbol}", which holds an aggregate of ${r} components, not a scalar number \u2014 a positional shader access indexes by a float, and neither language converts an aggregate to one`}}return}let t=n.value;return t===void 0||t.width>1||t.element==="b"?{decline:`the index is declared "${n.spelling}" by the caller, which is not a scalar number \u2014 a positional shader access indexes by a float, and neither language converts to one implicitly`}:t.element==="f"||Ct(t)?void 0:{cast:!0}}function pf(e,n){let t=e.symbol,r=n==="uniform-struct"?`the base "${t}" is a list parameter of the uniform parameter struct`:`the base "${t}" is ${n}-backed (storage hint)`;if(p.localShapeFrameOf(t)!==void 0)return{decline:`${r}, but here "${t}" is a declared or local name whose shape comes from its declaration, not from the engine type the hint applies to \u2014 a name with a storage hint must be a free symbol of the expression`};let o=xn(e.type.type),i=e.type.toString();if(typeof o=="string"||o.kind!=="list")return{decline:`${r}, which requires a one-dimensional fixed-length list of numbers, but its type is \`${i}\``};let s=o.dimensions??[];if(s.length>1)return{decline:`${r}, which requires a ONE-dimensional list laid out in the texture, but its type \`${i}\` is ${s.length}-dimensional`};let a=s[0]??-1;if(a<0)return{decline:`${r}, but its type \`${i}\` states no static length, and the texture read bounds the index by the list's declared length`};if(a===0)return{decline:`${r}, but its type \`${i}\` is an empty list, which has no element to read`};let l=ko(e);return l!==void 0?{decline:`${r}, and ${l}`}:{count:a,storage:n}}function df(e,n){if(e===null)return{decline:"it has no base operand"};if(E(e)){let a=n.storage?.get(e.symbol);if(a!==void 0)return pf(e,a)}let t=J(e);if(E(e,"Missing")||E(e,"Undefined")||t==="missing")return{decline:"the base is the absence marker (`Missing` or `Undefined`), which has no shader value to index into"};if(!_(e,"List")&&!_(e,"Tuple")&&p.isComplexValued(e))return{decline:"the base is a complex value (lowered as `vec2(re, im)` by the complex convention), not an indexable collection"};if(_(e,"Dictionary")||typeof t!="string"&&(t.kind==="dictionary"||t.kind==="record"))return{decline:`the base is a dictionary (type \`${e.type.toString()}\`) and a shader has no keyed lookup \u2014 only positional access into a value of static shape`};if(t==="tuple")return{decline:"the base is an unparameterized `tuple`, which states no arity, so there is no static element count to index against"};let r=p.aggregateComponentCount(e),o=!1;if(r===void 0&&_(e)&&e.operator!=="List"&&e.operator!=="Tuple"){let a=e.type.type,l=p.typeWithFreeInputsAsNumbers(e,n);l!==a&&(r=_r(l),o=r!==void 0)}if(r===void 0){if(E(e)){let a=gn(e);if(a!==void 0&&a.value===void 0)return{decline:`the base is the caller-declared name "${e.symbol}", whose declared shader type \`${a.spelling}\` is not one this target reads \u2014 it parses the scalar spellings and the two-to-four component vector spellings of both languages (\`vec3\`, \`ivec3\`, \`vec3f\`, \`vec3<f32>\`), and no array, matrix or struct type. The declaration decides the shape of a declared name, so no static element count reaches the analysis (the engine type \`${e.type.toString()}\` is not consulted for a declared name)`}}return typeof t!="string"&&t.kind==="list"?(t.dimensions?.length??0)>=2?{decline:`the base (type \`${e.type.toString()}\`) is multi-axis; only a one-dimensional base has a positional shader lowering`}:{decline:`the base (type \`${e.type.toString()}\`) has no statically known length, and a shader value must have one`}:{decline:`the base (type \`${e.type.toString()}\`) is not a statically counted collection`}}if(r<0)return{decline:`the base (type \`${e.type.toString()}\`) has no statically known length, and a shader value must have one`};if(r===0)return{decline:"the base is empty, and neither shader language has a zero-length value type"};if(r===1)return{decline:"the base has 1 element: there is no `vec1`, and a 1-element aggregate has no shader value shape of its own"};if(o)return{count:r};let i=cf(e);if(i!=="unframed")return i===void 0?{count:r}:{decline:i};let s=ko(e);return s!==void 0?{decline:s}:{count:r}}function yo(e,n){if(!Number.isInteger(e)||e===0)return null;let t=e>0?e-1:n+e;return t>=0&&t<n?t:null}function Ro(e,n,t,r){if(_(e,"List")||_(e,"Tuple"))return r(e.ops[n]);let o=r(e),i=t<=4?`.${"xyzw"[n]}`:`[${n}]`;return Qe(o)?`${o}${i}`:`(${o})${i}`}function ba(e,n,t){return!(_(e,"List")||_(e,"Tuple"))&&t<=4&&n.every(o=>o!==null)}function mf(e,n,t){return ba(e,n,t)?1:n.filter(r=>r!==null).length}function hf(e,n,t,r,o){if(ba(e,n,t)){let a=r(e),l=n.map(u=>"xyzw"[u]).join("");return Qe(a)?`${a}.${l}`:`(${a}).${l}`}let i=o.language==="wgsl"?`vec${n.length}f`:`vec${n.length}`,s=n.map(a=>a===null?ze(o):Ro(e,a,t,r));return`${i}(${s.join(", ")})`}function gf(e){return E(e,"True")||E(e,"False")?"bool":O(e)?!e.isComplex&&Number.isInteger(e.re)?"int":"other-literal":wn(e)||E(e,"Missing")||E(e,"Undefined")||_(e,"List")||_(e,"Tuple")||_(e,"Dictionary")?"other-literal":U(J(e),"boolean")?"dyn-bool":"dyn"}function _f(e,n,t){let r=t.language==="wgsl",o=f=>r?`vec${f}f`:`vec${f}`,i=(f,c,m)=>r?`array<vec${f}f, ${c}>(${m.join(", ")})`:`vec${f}[${c}](${m.join(", ")})`;if(_(e,"PointList")){let f=e.ops;if(f.length<2||f.length>4)return{decline:`the points of the base have ${f.length} coordinates, and a shader vector holds 2 to 4`};let c,m=[];for(let g=0;g<f.length;g++){let v=f[g];if(vo(v)){let x=p.aggregateComponentCount(v);if(x===void 0||x<1)return{decline:`source component ${g+1} of the point list (type \`${v.type.toString()}\`) has no statically known length, and a shader array must have one`};let y=ko(v);if(y!==void 0)return{decline:`in source component ${g+1}, ${y}`};if(!v.isPure)return{decline:`source component ${g+1} of the point list is impure, and the array of points references it once per point`};m.push(x),c=c===void 0?x:Math.min(c,x)}else{if(!U(J(v),"number")||p.isComplexValued(v))return{decline:`component ${g+1} of the point list (type \`${v.type.toString()}\`) is neither a list source nor a provably real scalar`};if(!v.isPure)return{decline:`component ${g+1} of the point list is impure, and the array of points references it once per point`};m.push(void 0)}}if(c===void 0)return{decline:"no component is a list source, so this is not a point LIST"};let d=c,h=g=>`${o(f.length)}(${f.map((v,x)=>m[x]===void 0?n(v):Ro(v,g,m[x],n)).join(", ")})`;return{m:f.length,n:d,point:h,source:()=>i(f.length,d,Array.from({length:d},(g,v)=>h(v)))}}let s=J(e);if(typeof s=="string"||s.kind!=="list")return;let a=W(s.elements);if(typeof a=="string"||a.kind!=="tuple")return;let l=a.elements.length;if(l<2||l>4)return{decline:`the points of the base have ${l} coordinates, and a shader vector holds 2 to 4`};for(let f=0;f<l;f++)if(!pn(a.elements[f].type))return{decline:`coordinate ${f+1} of the points of the base (type \`${nn(a.elements[f].type)}\`) is not a REAL scalar \u2014 a shader vector's components are single floats`};let u=_(e,"List")?e.nops:p.aggregateComponentCount(e);return u===void 0||u<1?{decline:`the base (type \`${e.type.toString()}\`) has no statically known number of points, and a shader array must have one`}:{m:l,n:u,point:f=>{if(_(e,"List"))return n(e.ops[f]);let c=n(e);return Qe(c)?`${c}[${f}]`:`(${c})[${f}]`},source:()=>n(e)}}function bf(e,n,t,r,o,i){let{m:s,n:a}=e,l=o.language==="wgsl",u=`${l?`vec${s}f`:`vec${s}`}(${ze(o)})`;if((_(t,"List")||U(J(t),yn))&&i("the index is a collection, so the result is a list of points, which has no shader value shape here"),E(t,"Missing")||E(t,"Undefined")||U(J(t),"missing"))return n.isPure||i("the access folds to a vector of NaN components, which would DISCARD the impure base unevaluated"),u;if((p.isComplexValued(t)||!Pe(J(t),"number"))&&i(`the index (type \`${t.type.toString()}\`) is not a real number, so it selects no point`),O(t)&&n.isPure){let v=yo(t.re,a);return v===null?u:e.point(v)}let f=Po(t);f!==void 0&&"decline"in f&&i(f.decline);let c=r(t),m=f===void 0?c:`${l?"f32":"float"}(${c})`,d=s===2?8:16,h=xa(n,a,d,r,o);if(h!==void 0&&"name"in h)return`_gpu_atp_${h.name}_${s}_${a}(${m})`;l&&xo(n,a,d,i);let g=h!==void 0?h.code:e.source();return`_gpu_atp${s}_${a}(${g}, ${m})`}function vf(e,n,t){let r=t?"wgsl":"glsl",o=Me(NaN,r),{guard:i,doc:s}=hn(n,r);return t?`
fn _gpu_atp${e}_${n}(v: array<vec${e}f, ${n}>, i: f32) -> vec${e}f {
${s}
  if (${i}) {
    return vec${e}f(${o});
  }
  let k = i32(i);
  var a = v;
  return a[select(${n} + k, k - 1, k > 0)];
}
`:`
vec${e} _gpu_atp${e}_${n}(vec${e} v[${n}], float i) {
${s}
  if (${i})
    return vec${e}(${o});
  int k = int(i);
  return v[(k > 0) ? k - 1 : ${n} + k];
}
`}function yf(e){let n=new Map,t=/(?<![\w$])_gpu_atp([234])_(\d+)\s*\(/g,r;for(;(r=t.exec(e))!==null;)n.set(`${r[1]}_${r[2]}`,[Number(r[1]),Number(r[2])]);return[...n.values()]}function xf(e,n,t){let r=C=>{throw new Error(`Could not compile \`At\`: ${C}.`)};e.length<2&&r("it has no index operand"),e.length>2&&r(`a multi-index access (${e.length-1} indices) walks a nested collection, and only a one-dimensional base has a shader value shape`);let o=e[0],i=e[1];if(Sn(o,t))return $f(o,i,n,t,r);let s=E(o)&&t.storage?.get(o.symbol)!==void 0?void 0:_f(o,n,t);if(s!==void 0)return"decline"in s&&r(s.decline),!o.isPure&&!i.isPure&&r("both the base and the index are impure, and neither shader language specifies the order in which a call evaluates its arguments"),bf(s,o,i,n,t,r);let a=df(o,t);"decline"in a&&r(a.decline);let l=a.count,u=t.language==="wgsl",f=a.storage,c,m=C=>{if(f==="uniform-struct"&&t.storageRead!==void 0)return t.storageRead(o.symbol,l,C);c??=ya(o,n);let G=c;return u?(/^[A-Za-z_]\w*$/.test(G)||r(`the base "${o.symbol}" is ${f}-backed (storage hint) and maps to \`${G}\`, which is not a plain identifier; a WGSL texture is a module-scope binding and the texel-read helper names it directly`),`_gpu_texat_${G}_${l}(${C})`):`_gpu_texat${l}(${G}, ${C})`};!o.isPure&&!i.isPure&&r("both the base and the index are impure, and neither shader language specifies the order in which a call evaluates its arguments");let d=_(o,"List")||_(o,"Tuple")?o.ops:void 0,h=d!==void 0,g=C=>{o.isPure||r(C)},v=(C,G)=>{let A=d;for(let L=0;L<A.length;L++){if(A[L].isPure)continue;let M=C.filter(N=>N===L).length;M===0&&r(`element ${L+1} of the literal base is impure and the ${G} does not select it, so folding would discard it unevaluated`),M>1&&r(`element ${L+1} of the literal base is impure and the ${G} selects it ${M} times, which would evaluate it more than once`)}},x=C=>{(C==="base"?o:i).isPure||r(`the access folds to the NaN spelling, which would DISCARD the impure ${C} unevaluated`)};if(_(i,"List")){let C=i.ops,G=C.map(gf),A=G.indexOf("other-literal");A>=0&&r(`entry ${A+1} of the index list (\`${C[A].toString()}\`) is a literal that is not an integer, so it selects no element and the list is not an index gather at all`);let L=new Set(G),M=L.has("int")||L.has("dyn"),N=L.has("bool")||L.has("dyn-bool");M&&N&&r("the index list mixes integer entries with boolean ones, so it is neither a gather nor a mask"),L.has("dyn-bool")&&r("the index is a boolean mask with runtime-valued entries: its result LENGTH depends on how many of them are true at run time, so it has no static shader value shape. This shape has no shader lowering at all \u2014 it is not a missing tier");let q;if(L.has("bool"))C.length!==l&&r(`the index is a boolean mask of length ${C.length}, but the base has ${l} elements \u2014 a mask's length must equal the collection's`),q=[],C.forEach((H,ee)=>{E(H,"True")&&q.push(ee)});else if(L.has("dyn")){let H=G.filter(ee=>ee==="dyn").length;r(`the index list has ${H} runtime-valued integer ${H===1?"entry":"entries"}; a static-count DYNAMIC gather is not lowered in this version (no witness requested it yet) \u2014 the helpers it needs are the same ones the scalar form already emits`),q=[]}else q=C.map(H=>yo(H.re,l));let Z=q.length;if(Z===0&&r("the index selects 0 elements, and neither shader language has a zero-length value type"),Z===1&&r("the index selects exactly 1 element, which CE types as a 1-element LIST (pinned: `At(L, [2])` \u2192 `[20]`), and no shader value has that shape \u2014 there is no `vec1`"),Z>4&&r(`the index selects ${Z} elements, so the RESULT would be a \`vec${Z}\`, and a shader vector holds 2 to 4`),f!==void 0){let H=u?`vec${Z}f`:`vec${Z}`,ee=q.map(te=>te===null?ze(t):m(B(te+1,t.language)));return`${H}(${ee.join(", ")})`}if(h)v(q.filter(H=>H!==null),"gather");else{let H=mf(o,q,l);H===0?g("the gather selects no element of the base, so its emission would DISCARD the impure base unevaluated"):H>1&&g("the gather emits a constructor that references the impure base more than once, which would evaluate it more than once")}return hf(o,q,l,n,t)}let y=J(i);if(E(i,"Missing")||E(i,"Undefined")||U(y,"missing"))return x("base"),x("index"),ze(t);wn(i)&&r("the index is a string key, and only a dictionary base takes one \u2014 a positional shader access indexes by number"),p.isComplexValued(i)&&r("the index is a complex value, which lowers to a `vec2(re, im)`; the interpreter reads its real part, and a shader has no such reading of a vector in an index position");let P=Po(i);if(P!==void 0&&"decline"in P&&r(P.decline),O(i)){let C=yo(i.re,l);return C===null?(x("base"),ze(t)):f!==void 0?m(B(i.re,t.language)):(h&&v([C],"access"),Ro(o,C,l,n))}if(U(y,yn)&&!U(y,"string")){let C=p.aggregateComponentCount(i);(C===void 0||C<0)&&r(`the index is a collection (type \`${i.type.toString()}\`) with no statically known length, so there is no static count to emit a result shape against`),r(`the index is a collection of ${C} runtime-valued entries; a static-count DYNAMIC gather is not lowered in this version (no witness requested it yet)`)}Pe(y,"number")||r(`the index (type \`${i.type.toString()}\`) is provably not a number, so it selects no element and \`At\` has no value to project`);let w=f===void 0?xa(o,l,4,n,t):void 0,S=w!==void 0&&"name"in w?w.name:void 0,z=w!==void 0&&"code"in w?w.code:void 0,T=()=>z??=n(o),I=E(o)&&!t.boundVars?.has(o.symbol)&&t.inputLocals?.has(o.symbol)===!0,b=Jr(i,t,C=>!t.foldExcludedOps?.has(C)&&t.operators?.(C)===Ln[C]&&t.functions?.(C)===In[C]);if(f===void 0&&b&&b.min>=1&&b.max<=l&&(t.language!=="wgsl"||l<=4||S!==void 0||I||p.canHoist(t)&&!Rn.has(t.hoist))){if(S!==void 0)return`${S}[${b.code} - 1]`;let C=T();if(t.language==="wgsl"&&l>4&&!I){xo(o,l,4,r);let G=p.foldValueImpure(o);G&&Je("At",[o],t);let A=p.tempVar(t);p.hoistStatement(t,`var ${A} = ${C};`),G&&De([o],t),C=A}return`${Qe(C)?C:`(${C})`}[${b.code} - 1]`}let k=n(i),R=P===void 0?k:`${u?"f32":"float"}(${k})`;return S!==void 0?`_gpu_at_${S}_${l}(${R})`:f===void 0||!E(o)?(u&&l>4&&xo(o,l,4,r),`_gpu_at${l}(${T()}, ${R})`):m(R)}function Sn(e,n){return e!=null&&E(e)&&n.storage?.get(e.symbol)==="storage-buffer"&&!va(e.symbol,n)}function va(e,n){return n.boundVars?.has(e)===!0||p.localShapeFrameOf(e)!==void 0}function wf(e){let t=`the list "${e.symbol}" is in a storage buffer (storage hint)`,r=xn(e.type.type),o=e.type.toString();if(typeof r=="string"||r.kind!=="list")return{decline:`${t}, which requires a list of numbers or of points, but its type is \`${o}\``};if((r.dimensions?.length??0)>1)return{decline:`${t}, which requires a ONE-dimensional list, but its type \`${o}\` has ${r.dimensions.length} dimensions`};let i=W(r.elements);if(typeof i!="string"&&i.kind==="tuple"){let s=i.elements.length;return s>=2&&s<=4&&i.elements.every(a=>pn(a.type))?s:{decline:`${t}, and its elements (type \`${nn(r.elements)}\`) are not points of 2 to 4 real coordinates, which is the element shape of a storage-buffer list besides a real number`}}return pn(r.elements)?1:{decline:`${t}, and its element type \`${nn(r.elements)}\` is not a real number or a point of 2 to 4 real coordinates; a complex number, a boolean, a string or a nested list has no storage-buffer layout`}}function Ao(e,n,t,r){let o=l=>{throw new Error(`Could not compile \`${r}\`: ${l}.`)};t.language!=="wgsl"&&o(`the list "${e.symbol}" is in a storage buffer (storage hint), and the ${t.language??"GPU"} target has no storage buffers`),(p.localShapeFrameOf(e.symbol)!==void 0||t.boundVars?.has(e.symbol))&&o(`the list "${e.symbol}" is in a storage buffer (storage hint), but here "${e.symbol}" is a local or bound name, not the free symbol of the expression that the hint applies to`);let i=wf(e);typeof i!="number"&&o(i.decline);let s=ya(e,n);(!/^[A-Za-z_]\w*$/.test(s)||s.startsWith("_gpu_"))&&o(`the list "${e.symbol}" is in a storage buffer (storage hint) and maps to \`${s}\`, which is not a plain identifier without the reserved prefix \`_gpu_\`; the compilation declares the buffer under that name`),s.startsWith("CE_List_")&&o(`the list "${e.symbol}" is in a storage buffer (storage hint) and maps to \`${s}\`, which starts with \`CE_List_\`, the prefix of the struct names that the compilation declares for its buffers`),Ht.has(s)&&o(`the list "${e.symbol}" is in a storage buffer (storage hint) and maps to \`${s}\`, which is a predeclared function or type of WGSL; a buffer declared under that name hides the built-in that the compiled code calls`);let a=t.storageBuffersRead;if(a!==void 0){for(let[l,u]of a)l!==e.symbol&&u.name===s&&o(`the lists "${l}" and "${e.symbol}" are in storage buffers (storage hint) and both map to \`${s}\`; each buffer needs its own WGSL name`);a.set(e.symbol,{name:s,components:i})}return{name:s,components:i}}function $f(e,n,t,r,o){(_(n,"List")||U(J(n),yn)&&!U(J(n),"string"))&&o(`the index is a collection, and the list "${e.symbol}" is in a storage buffer, whose length is known only at run time; only a scalar index has a lowering`),(E(n,"Missing")||E(n,"Undefined")||p.isComplexValued(n)||!Pe(J(n),"number"))&&o(`the index (type \`${n.type.toString()}\`) is not a real number, so it selects no element`);let i=Po(n);i!==void 0&&"decline"in i&&o(i.decline);let{name:s,components:a}=Ao(e,t,r,"At");if(O(n)){let f=n.re;if(!Number.isInteger(f)||Math.fround(f)!==f){let c=ze(r);return a===1?c:`vec${a}f(${c})`}}let l=O(n)?B(n.re,r.language):t(n),u=i===void 0?l:`f32(${l})`;return`${to(s,a)}(${u})`}function or(e,n,t,r,o){let i=t[0];if(t.length!==1||!Sn(i,o))throw new Error(`Could not compile \`${e}\`: an operand is a list in a storage buffer, and only \`${e}\` of that list alone has a lowering`);let{name:s,components:a}=Ao(i,r,o,e);if(a!==1)throw new Error(`Could not compile \`${e}\`: the list "${i.symbol}" in a storage buffer holds points, and only a list of numbers has a reduction; read the points with \`At\``);return`${ro(n,s)}()`}function Ef(e,n,t){let r=[];for(let[o,i]of n??[]){let s=t.get(o);s===void 0||!fs(e,s.name)||r.push(as(o,s.name,i,s.components))}return{layouts:r,declarations:r.length>0?ls(r):""}}var ir;function ya(e,n){let t=ir;ir=e.symbol;try{return n(e)}finally{ir=t}}function Is(e,n,t){let r=n.get(e);if(!(r===void 0||ir===e))throw r==="uniform-struct"?new Error(`Could not compile \`${e}\`: the list parameter is packed in the uniform parameter struct of \`compileFieldFunction()\` as an array of \`vec4f\`, which is not a value of the list's own type: it can be read only through a positional access (\`At(${e}, i)\`). Here it is referenced as a whole \u2014 as an operand, in a reduction, or as a bare value \u2014 which has no lowering.`):r==="storage-buffer"?new Error(`Could not compile \`${e}\`: the symbol is a list in a storage buffer (compile option \`storage: { ${e}: { kind: 'storage-buffer', \u2026 } }\`), whose length is known only at run time, and a shader value must have a length known at compile time. On the ${t} target it can be read only through \`At(${e}, i)\`, \`Length(${e})\`, and \`Sum\`, \`Product\`, \`Max\`, \`Min\` or \`Mean\` of \`${e}\` alone. Here it is referenced as a whole (as an operand, an argument or a bare value), which has no lowering.`):new Error(`Could not compile \`${e}\`: the symbol is ${r}-backed (compile option \`storage: { ${e}: '${r}' }\`), and a texture has no shader value of its own on the ${t} target: it can be read only through a positional access (\`At(${e}, i)\`). Here it is referenced as a whole \u2014 as an operand, in a reduction, or as a bare value \u2014 which has no lowering.`)}function zf(e,n){let t=n?"wgsl":"glsl",r=Me(NaN,t),{guard:o,doc:i}=hn(e,t);if(n){let a=e<=4?`v: vec${e}f`:`v: array<f32, ${e}>`,l=e<=4?"":`  var a = v;
`,u=e<=4?"v":"a";return`
fn _gpu_at${e}(${a}, i: f32) -> f32 {
${i}
  if (${o}) {
    return ${r};
  }
  let k = i32(i);
${l}  return ${u}[select(${e} + k, k - 1, k > 0)];
}
`}let s=e<=4?`vec${e} v`:`float v[${e}]`;return`
float _gpu_at${e}(${s}, float i) {
${i}
  if (${o})
    return ${r};
  int k = int(i);
  return v[(k > 0) ? k - 1 : ${e} + k];
}
`}var kn=8192;function xa(e,n,t,r,o){if(o.language!=="wgsl"||n*t<=kn||!E(e)||o.boundVars?.has(e.symbol)||o.inputLocals?.has(e.symbol)||o.storage?.get(e.symbol)!==void 0)return;let i=r(e);return/^[A-Za-z_]\w*$/.test(i)&&!i.startsWith("_gpu_")?{name:i}:{code:i}}function Ns(e){let n=/^array<(f32|vec([234])f), (\d+)>$/.exec(e);return n===null?void 0:(n[2]===void 0?4:n[2]==="2"?8:16)*Number(n[3])}function xo(e,n,t,r){let o=n*t;if(o<=kn)return;let i=E(e)?`"${e.symbol}"`:"the base",s=E(e)?e.symbol:"S";r(`the read copies ${i} (${n} elements, ${o} bytes) into a function-scope variable, and WGSL guarantees only ${kn} bytes of them per function. A free list symbol of this size is read with no copy when it, or the identifier \`vars\` maps it to, is a \`var<storage>\` declaration; use the storage kind 'storage-buffer' (\`storage: { ${s}: { kind: 'storage-buffer', group, binding } }\`) to read it from a storage buffer`)}function Cf(e,n){let t=Me(NaN,"wgsl"),{guard:r,doc:o}=hn(n,"wgsl","_gpu_i");return`
fn _gpu_at_${e}_${n}(_gpu_i: f32) -> f32 {
${o}
  if (${r}) {
    return ${t};
  }
  let _gpu_k = i32(_gpu_i);
  return ${e}[select(${n} + _gpu_k, _gpu_k - 1, _gpu_k > 0)];
}
`}function Sf(e,n,t){let r=Me(NaN,"wgsl"),{guard:o,doc:i}=hn(t,"wgsl","_gpu_i");return`
fn _gpu_atp_${e}_${n}_${t}(_gpu_i: f32) -> vec${n}f {
${i}
  if (${o}) {
    return vec${n}f(${r});
  }
  let _gpu_k = i32(_gpu_i);
  return ${e}[select(${t} + _gpu_k, _gpu_k - 1, _gpu_k > 0)];
}
`}function kf(e){let n=new Set,t=[],r=[],o=/(?<![\w$])_gpu_at_([A-Za-z_]\w*?)_(\d+)\s*\(/g,i;for(;(i=o.exec(e))!==null;){let a=`n:${i[1]}_${i[2]}`;n.has(a)||(n.add(a),t.push([i[1],Number(i[2])]))}let s=/(?<![\w$])_gpu_atp_([A-Za-z_]\w*?)_([234])_(\d+)\s*\(/g;for(;(i=s.exec(e))!==null;){let a=`p:${i[1]}_${i[2]}_${i[3]}`;n.has(a)||(n.add(a),r.push([i[1],Number(i[2]),Number(i[3])]))}return{numbers:t,points:r}}function hn(e,n,t="i"){let r=B(e,n);return{guard:`!(${t} >= -${r} && ${t} <= ${r}) || ${t} != floor(${t}) || ${t} == 0.0`,doc:`  // 1-based; negative counts from the end; anything else \u2192 NaN.
  // The guard runs entirely in float space: it rejects NaN, \xB1\u221E, huge
  // finite values, non-integers and 0 BEFORE the int cast (undefined
  // outside int range), and makes both languages' out-of-bounds rules
  // (GLSL UB / WGSL indeterminate) unreachable.`}}function Pf(e){let n=Me(NaN,"glsl"),{guard:t,doc:r}=hn(e,"glsl");return`
float _gpu_texat${e}(sampler2D v, float i) {
${r}
  if (${t})
    return ${n};
  int k = int(i);
  k = (k > 0) ? k - 1 : ${e} + k;
  // Row-major in a texture of run-time width; the host guarantees at least
  // ${e} texels, so the coordinate is in range whenever the guard passed.
  int w = textureSize(v, 0).x;
  return texelFetch(v, ivec2(k % w, k / w), 0).r;
}
`}function Rf(e){return wa(e,/(?<![\w$])_gpu_at(\d+)\s*\(/g)}function Af(e,n){let t=Me(NaN,"wgsl"),{guard:r,doc:o}=hn(n,"wgsl","_gpu_i");return`
fn _gpu_texat_${e}_${n}(_gpu_i: f32) -> f32 {
${o}
  if (${r}) {
    return ${t};
  }
  var _gpu_k = i32(_gpu_i);
  _gpu_k = select(${n} + _gpu_k, _gpu_k - 1, _gpu_k > 0);
  // Row-major in a texture of run-time width; the host guarantees at least
  // ${n} texels, so the coordinate is in range whenever the guard passed.
  let _gpu_w = i32(textureDimensions(${e}, 0).x);
  return textureLoad(${e}, vec2i(_gpu_k % _gpu_w, _gpu_k / _gpu_w), 0).r;
}
`}function Tf(e){return wa(e,/(?<![\w$])_gpu_texat(\d+)\s*\(/g)}function Lf(e){let n=new Set,t=[],r=/(?<![\w$])_gpu_texat_([A-Za-z_]\w*?)_(\d+)\s*\(/g,o;for(;(o=r.exec(e))!==null;){let i=`${o[1]}_${o[2]}`;n.has(i)||(n.add(i),t.push([o[1],Number(o[2])]))}return t}function wa(e,n){let t=new Set,r;for(;(r=n.exec(e))!==null;)t.add(Number(r[1]));return[...t].sort((o,i)=>o-i)}function Qt(e){return wn(e)?e.string?.toLowerCase()??null:null}function Gs(e,n,t,r){let o=Y(n);if(o!==void 0&&Number.isInteger(o))return o.toString();if(p.isComplexValued(n))throw new Error(`Could not compile \`${e}\`: the integer operand \`${n.toString()}\` is complex, and a shader has no conversion from a complex value to an integer.`);return`${r?.language==="wgsl"?"i32":"int"}(${t(n)})`}var Ff=100;function Ms(e,n,t){if(O(n)&&!Number.isFinite(n.re)||n.type.matches("infinity")||n.type.matches("nan"))throw new Error(`Could not compile \`${e}\`: the ${t} bound \`${n.toString()}\` is not a finite number \u2014 an infinite or NaN bound has no terminating loop.`)}var If=8;function vt(e,n,t){let r=typeof t=="number"?t:void 0;return(t==="scalar"||r!==void 0)&&n>=2&&n<=4?`_gpu_pow${n}${r===void 0?"":`_v${r}`}(${e})`:`_gpu_powi${r??""}(${e}, ${Ee(n)})`}function Nf(e,n){let t=new Set,r=/(?<![\w$])(_gpu_pow([234])(?:_v([234]))?)\s*\(/g,o="";for(let i of e.matchAll(r)){let s=i[1];if(t.has(s))continue;t.add(s);let a=i[3]?le(Number(i[3]),n):n?"f32":"float",l=i[2]==="2"?"return x * x;":i[2]==="3"?"return x * x * x;":`${n?"let":a} s = x * x; return s * s;`;o+=n?`
fn ${s}(x: ${a}) -> ${a} { ${l} }
`:`
${a} ${s}(${a} x) { ${l} }
`}return o}var Os=8,js=([e,n],t,r)=>{if(e==null||n===null||n===void 0)throw new Error("Could not compile `Binomial`: need two arguments");let o=Y(n);if(o===void 0||!Number.isInteger(o)||o<0)throw new Error("Could not compile `Binomial`: only a literal non-negative integer second operand compiles \u2014 anything else is inert in the interpreter.");if(o>Os)throw new Error(`Could not compile \`Binomial\`: a second operand above ${Os} would unroll to ${o} factors.`);if(p.isComplexValued(e))throw new Error("Could not compile `Binomial`: a complex first operand has no GPU lowering.");if(O(e)&&!Number.isFinite(e.re)||e.type.matches("infinity")||e.type.matches("nan"))throw new Error("Could not compile `Binomial`: a statically non-finite first operand evaluates to NaN in the interpreter, not a falling factorial.");if(o===0){if(e.isPure===!1)throw new Error("Could not compile `Binomial`: a second operand of 0 discards the first, but an impure (Random) first operand is still drawn by the interpreter.");return B(1,r.language)}if(o===1)return Le(e,t,r);let i=ce("Binomial",e,t,r),s=[`(${i})`];for(let l=1;l<o;l++)s.push(`((${i}) - ${B(l,r.language)})`);let a=1;for(let l=2;l<=o;l++)a*=l;return`((${s.join(" * ")}) / ${B(a,r.language)})`};function Gf(e){if(_(e,"Square")&&e.ops.length===1||_(e,"Power")&&e.ops.length===2&&Y(e.ops[1])===2)return e.ops[0]}function Mf(e,n,t,r){let o=e==="Sum"?"0.0":"1.0",i=e==="Sum"?" + ":" * ";if(n.isCollection&&n.count===0)return o;let s=e==="Sum"?Gf(n):void 0,a=s===void 0?void 0:j(s);if(s!==void 0&&s.isPure&&typeof a=="number"&&!p.isComplexValued(n)&&!qn(n,r.cse?.harvestOptions)&&!r.foldExcludedOps?.has(n.operator)){let d=t(s);if(!Qe(d)&&p.canHoist(r)){let h=p.tempVar(r),g=r.language==="wgsl"?`vec${a}f`:`vec${a}`,v=r.language==="wgsl"?`var ${h}: ${g}`:`${g} ${h}`;p.hoistStatement(r,`${v} = ${d};`),d=h}return`dot(${d}, ${d})`}let l=j(n),u=t(n),f=Ie(u);if(!(!p.isComplexValued(n)&&(l!=="scalar"||f!==void 0&&st.test(f.callee))))throw new Error(`Could not compile \`${e}\`: the operand \`${n.toString()}\` is not a collection (type \`${n.type.toString()}\`), so there is nothing to reduce over \u2014 this is the collection form of ${e}, which takes no indexing set.`);let m=So(n,u,r);if(m===void 0)throw new Error(`Could not compile \`${e}\`: the operand \`${n.toString()}\` lowers to a shader ${Be(l)} with no compile-time component list, so there is nothing for the reduction to fold over \u2014 a shader has no dynamic iteration here.`);return`(${m.map(d=>`(${d})`).join(i)})`}function $a(e,n,t,r=0){if(r>64)return!1;if(O(e))return!0;if(E(e)){if(e.symbol===n||t.storage?.get(e.symbol)!==void 0&&!va(e.symbol,t))return!0;let s=t.var(e.symbol);return!t.varsKeys?.has(e.symbol)&&(s===void 0||Qe(s))}if(!_(e)||!e.isPure||qn(e)||t.foldExcludedOps?.has(e.operator))return!1;let o=In[e.operator],i=Ln[e.operator];return o===void 0&&i===void 0||t.functions?.(e.operator)!==o||i!==void 0&&t.operators?.(e.operator)!==i?!1:e.ops.every(s=>$a(s,n,t,r+1))}function Us(e,n){let t=p.bigOpBoundConstant(e);if(t!==void 0)return t;let r=p.foldedRealNumber(e,n);if(r===void 0||!Number.isFinite(r)||Math.fround(r)!==r)return;let o=Math.floor(r);return o>=-(2**31)&&o<2**31-1?o:void 0}var Of=new Set(["int","i32","u32","uint","float","f32","floor"]);function Ea(e){let n=e.trim();if(/^-?\d+(?:\.\d*)?$/.test(n)||/^[A-Za-z_]\w*$/.test(n))return!0;let t=/^([A-Za-z_]\w*)\((.*)\)$/.exec(n);if(t===null||!Of.has(t[1]))return!1;let r=t[2],o=0;for(let i of r)if(i==="(")o+=1;else if(i===")"){if(o===0)return!1;o-=1}return o===0&&Ea(r)}function Bs(e,n){let t=[],r=[...n];for(let o=e.length-1;o>=0;o--){let[i,s]=e[o],a=new RegExp(`(?<![\\w$])${i}(?![\\w$])`);r.some(l=>a.test(l))&&(t.unshift(e[o]),r.push(s))}return t}function qs(e,n,t,r){let o=ve(t,r)??(r?"f32":"float");return r?`let ${e}: ${o} = ${n};`:`${o} ${e} = ${n};`}function Ds(e,n,t,r){if(!n[0])throw new Error(`Could not compile \`${e}\`: no body`);if(!n[1]&&Sn(n[0],r))return or(e,e==="Sum"?"sum":"prod",n,t,r);if(!n[1])return Mf(e,n[0],t,r);if(p.assertScalarBigOpBody(e,n[0]),n.length>2)throw new Error(`Could not compile \`${e}\`: multi-index (${n.length-1} indexing sets) is not supported in GPU targets`);let o=n[1];if(!_(o,"Limits"))throw new Error(`Could not compile \`${e}\`: expected Limits indexing set`);let i=o.ops,s=E(i[0])?i[0].symbol:"_",a=p.isComplexValuedUnderIndices(n[0],[s]),l=X=>p.withRealLoopIndices([s],X);Ms(e,i[1],"lower"),Ms(e,i[2],"upper");let u=Us(i[1],r),f=Us(i[2],r);p.assertSafeBigOpBounds(e,[i[1],i[2]],r);let c=e==="Sum",m=c?"+":"*",d=r.language==="wgsl",h=ne(r),g=a?void 0:l(()=>p.aggregateComponentCount(n[0]));if(g!==void 0&&(g<2||g>4))throw new Error(`Could not compile \`${e}\`: each term is a list of ${g} elements, and a shader has no accumulator for a list of that length (only a vector of 2 to 4 components).`);let v=a?`${h}(${c?"0.0":"1.0"}, 0.0)`:g!==void 0?`${le(g,d)}(${c?"0.0":"1.0"})`:c?"0.0":"1.0",x=a?le(2,d):g!==void 0?le(g,d):d?"f32":"float",y=(X,re)=>a&&!c?`_gpu_cmul(${X}, ${re})`:`${X} ${m} ${re}`,P=u!==void 0&&f!==void 0;if(P&&u>f)return v;let w=$a(n[0],s,r);if(P&&Ot(f-u+1,Yn(n[0]),Ff)){let X=re=>{let ie=r.hoist?.stmts,ae=ie?.length??0,me=[];for(let F=u;F<=f;F++){let Q=Ee(F),K=p.withBoundScope(r,[s]),he=K.boundVars,ke={stmts:[],boundVars:he,unit:n[0]},vn={...r,var:jn=>jn===s?Q:r.var(jn),...K,hoist:p.canHoist(r)?ke:void 0};w&&Kr(vn,s,F,F,String(F));let We;try{We=l(()=>p.compileValueOperand(n[0],vn))}finally{Xr(vn)}if(ke.stmts.length===0){me.push(`(${We})`);continue}if(p.foldValueImpure(n[0])&&Je(e,[n[0]],r),/^[A-Za-z_$][\w$]*$/.test(We)){p.hoistStatement(r,...ke.stmts),p.foldValueImpure(n[0])&&De([n[0]],r),me.push(`(${We})`);continue}let en=p.tempVar(r),ft=d?`var ${en}: ${x}`:`${x} ${en}`;p.hoistStatement(r,...ke.stmts,`${ft} = ${We};`),p.foldValueImpure(n[0])&&De([n[0]],r),me.push(`(${en})`)}let $=`(${me.reduce((F,Q)=>y(F,Q))})`;return ie!==void 0&&re.length>0&&ie.splice(ae,0,...Bs(re,[$,...ie.slice(ae)]).map(([F,Q,K])=>qs(F,Q,K,d))),$};return p.canHoist(r)?p.hoistLoopInvariants(n[0],[s],r,X,re=>ve(re,d)!==void 0).result:X([])}let S=p.tempVar(r),z=d?"i32":"int",T=-(2**31),I=2**31-1;for(let[X,re,ie]of[["lower",u,I],["upper",f,I-1]])if(re!==void 0&&(re<T||re>ie))throw new Error(`Could not compile \`${e}\`: the ${X} bound ${re} is outside the range of the 32-bit loop counter (${T} to ${ie}).`);let b=p.withBoundScope(r,[s]),k=b.boundVars,R={stmts:[],boundVars:k,unit:n[0]},C={...r,var:X=>X===s?d?`f32(${s})`:`float(${s})`:r.var(X),...b,hoist:R};w&&P&&Kr(C,s,u,f,s);let{bindings:G,result:A}=p.hoistLoopInvariants(n[0],[s],r,()=>l(()=>{try{return r.cse?.enabled?(p.openCseSession(n[0],C,r.cse.harvestOptions),p.compileCseRoot(n[0],C,0,()=>p.compileValueOperand(n[0],C))):p.compileValueOperand(n[0],C)}finally{Xr(C)}}),X=>ve(X,d)!==void 0),L=(X,re)=>{let ie=gn(X),ae=ie?.value;if(ie===void 0||ae!==void 0&&ae.width===1&&ae.element==="f"){let me=p.compile(X,r);return d?`i32(floor(${me}))`:`int(floor(${me}))`}if(ae!==void 0&&ae.width===1&&ae.element==="i")return ie.ref;if(ae!==void 0&&ae.width===1&&ae.element==="u")return d?`i32(${ie.ref})`:`int(${ie.ref})`;throw new Error(`Could not compile \`${e}\`: the ${re} bound \`${X.toString()}\` is declared "${ie.spelling}" by the caller, which is not a scalar number \u2014 a loop bound must be one.`)},M=u!==void 0?String(u):L(i[1],"lower"),N=f!==void 0?String(f):L(i[2],"upper");qe(s,r.language);let q=d?`var ${S}: ${x}`:`${x} ${S}`,Z=d?`var ${s}: ${z}`:`${z} ${s}`,H=f===void 0&&!Ea(N)?p.tempVar(r):"",ee=H===""?[]:[d?`let ${H}: ${z} = ${N};`:`${z} ${H} = ${N};`],te=H===""?N:H,de=[...ee,...Bs(G,[A,...R.stmts]).map(([X,re,ie])=>qs(X,re,ie,d)),`${q} = ${v};`,`for (${Z} = ${M}; ${s} <= ${te}; ${s}++) {`,...R.stmts.map(X=>X.split(`
`).map(re=>`  ${re}`).join(`
`)),a&&!c?`  ${S} = ${y(S,A)};`:`  ${S} ${m}= ${A};`,"}"];return p.canHoist(r)?(p.foldValueImpure(n[0])&&Je(e,[n[0]],r),p.hoistStatement(r,de.join(`
`)),p.foldValueImpure(n[0])&&De([n[0]],r),S):[...de,`return ${S};`].join(`
`)}function er(e,n){return p.compileValueOperand(e,n,Ln.Multiply[1])}var In={__proto__:null,Add:(e,n,t)=>{if(e.length===0)return"0.0";if(e.length===1)return mo(n(e[0]));if(!e.some(u=>p.isComplexValued(u)))return sn(e.map(u=>n(u)),"0.0","+",t.language);for(let u of e)En("Add",u);if(e.some(u=>qi(u))){let u=ne(t);return e.map(f=>{let c=n(f);return p.isComplexValued(f)?c:`${u}(${c}, 0.0)`}).join(" + ")}let o=e.map(u=>Bi(u,n,t.language)),i=[],s=[];for(let u of o)u.re!==null&&i.push(u.re),u.im!==null&&s.push(u.im);let a=sn(i,"0.0","+",t.language),l=sn(s,"0.0","+",t.language);return`${ne(t)}(${a}, ${l})`},Multiply:(e,n,t)=>{if(e.length===0)return"1.0";if(e.length===1)return mo(n(e[0]));if(!e.some(u=>p.isComplexValued(u)))return sn(e.map(u=>er(u,t)),"1.0","*",t.language);for(let u of e)En("Multiply",u);let o=e.findIndex(u=>E(u,"ImaginaryUnit")||O(u)&&u.re===0&&u.isComplex);if(o>=0){let u=e[o],f=E(u,"ImaginaryUnit")?1:u.im,c=e.filter((h,g)=>g!==o),m=ne(t);if(c.length===0)return`${m}(0.0, ${B(f,t.language)})`;let d=c.filter(h=>p.isComplexValued(h));if(d.length===0){let h=c.map(v=>er(v,t));f!==1&&h.unshift(B(f,t.language));let g=sn(h,"1.0","*",t.language);return`${m}(0.0, ${g})`}if(d.length===1&&E(d[0])){let h=n(d[0]),g=/^[A-Za-z_][A-Za-z0-9_]*$/.test(h)?h:`(${h})`,v=c.filter(P=>P!==d[0]).map(P=>er(P,t));f!==1&&v.unshift(B(f,t.language));let x=`${m}(-${g}.y, ${g}.x)`,y=sn(v,"1.0","*",t.language);return y==="1.0"?x:`(${y} * ${x})`}}let i=[],s=[];for(let u of e)p.isComplexValued(u)?s.push(n(u)):i.push(er(u,t));let a=sn(i,"1.0","*",t.language),l=s[0];for(let u=1;u<s.length;u++)l=`_gpu_cmul(${l}, ${s[u]})`;return a!=="1.0"&&(l=`(${a} * ${l})`),l},Divide:(e,n,t)=>{if(e.length===0)return"1.0";if(e.length===1)return n(e[0]);let r=p.isComplexValued(e[0]),o=e.length>=2&&p.isComplexValued(e[1]);if(!r&&!o){if(e.length===2){let a=Y(e[0]),l=Y(e[1]);return a!==void 0&&l!==void 0&&l!==0?B(a/l,t.language):l===1?n(e[0]):`(${n(e[0])}) / (${n(e[1])})`}let s=`(${n(e[0])})`;for(let a=1;a<e.length;a++)s=`${s} / (${n(e[a])})`;return s}for(let s of e)En("Divide",s);return r&&o?`_gpu_cdiv(${n(e[0])}, ${n(e[1])})`:r&&!o?`((${n(e[0])}) / (${n(e[1])}))`:`_gpu_cdiv(${ne(t)}(${n(e[0])}, 0.0), ${n(e[1])})`},Negate:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Negate`: no argument");let r=Y(e);return r!==void 0?B(-r,t.language):O(e)&&e.isComplex?`${ne(t)}(${B(-e.re,t.language)}, ${B(-e.im,t.language)})`:E(e,"ImaginaryUnit")?`${ne(t)}(0.0, -1.0)`:`(-(${n(e)}))`},Abs:(e,n,t)=>p.isComplexValued(e[0])?`length(${n(e[0])})`:p.isNonNegative(e[0])?Le(e[0],n,t):`abs(${n(e[0])})`,Arccos:(e,n,t)=>p.isComplexValued(e[0])?`_gpu_cacos(${n(e[0])})`:ge("Arccos",e)?`_gpu_cacos(${_e(e[0],n,t)})`:`acos(${n(e[0])})`,Arcsin:(e,n,t)=>p.isComplexValued(e[0])?`_gpu_casin(${n(e[0])})`:ge("Arcsin",e)?`_gpu_casin(${_e(e[0],n,t)})`:`asin(${n(e[0])})`,Arctan:(e,n)=>p.isComplexValued(e[0])?`_gpu_catan(${n(e[0])})`:`atan(${n(e[0])})`,At:we((e,n,t)=>xf(e,n,t)),Ceil:(e,n,t)=>e.length>1&&e[1]!==null?nr("ceil",e[0],e[1],n,t):p.isIntegerValued(e[0])?Le(e[0],n,t):`ceil(${n(e[0])})`,Clamp:(e,n,t)=>xs("clamp",0,e,n,t)??`clamp(${e.map(r=>n(r)).join(", ")})`,Cos:(e,n,t)=>{if(p.isComplexValued(e[0]))return`_gpu_ccos(${n(e[0])})`;let r=co(e[0],2);return r!==void 0?`_gpu_cospi(${n(r)})`:an("cos",e[0],n(Oe(e[0],2,!0,t)),t)},Degrees:"radians",Exp:(e,n)=>p.isComplexValued(e[0])?`_gpu_cexp(${n(e[0])})`:`exp(${n(e[0])})`,Exp2:"exp2",First:(e,n)=>Xe(n(e[0]),"x"),Second:(e,n)=>Xe(n(e[0]),"y"),Third:(e,n)=>Xe(n(e[0]),"z"),Last:(e,n)=>ff(e[0],n),PointX:(e,n,t)=>ho(e[0],"x",n,t),PointY:(e,n,t)=>ho(e[0],"y",n,t),PointZ:(e,n,t)=>ho(e[0],"z",n,t),Floor:(e,n,t)=>e.length>1&&e[1]!==null?nr("floor",e[0],e[1],n,t):p.isIntegerValued(e[0])?Le(e[0],n,t):`floor(${n(e[0])})`,Fract:(e,n,t)=>{let r=e[0];if(r==null)throw new Error("Could not compile `Fract`: missing argument");let o=()=>`fract(${n(r)})`;return Kn("Fract",r,!0,n,t,j,o)??o()},Ln:(e,n,t)=>p.isComplexValued(e[0])?`_gpu_cln(${n(e[0])})`:e[0]?.isNegative===!0&&ge("Ln",e)?`_gpu_cln(${_e(e[0],n,t)})`:`log(${n(e[0])})`,Log2:"log2",Max:we((e,n,t)=>e.some(r=>Sn(r,t))?or("Max","max",e,n,t):Ls("max","Max",e,n,t)),Min:we((e,n,t)=>e.some(r=>Sn(r,t))?or("Min","min",e,n,t):Ls("min","Min",e,n,t)),Mean:we((e,n,t)=>{if(e.some(r=>Sn(r,t)))return or("Mean","mean",e,n,t);throw new Error(`Could not compile \`Mean\`: the operator is known to the engine but target '${t.language??"unknown"}' has no lowering for it.`)}),ElementMax:(e,n,t)=>Ts("max","ElementMax",e,n,t),ElementMin:(e,n,t)=>Ts("min","ElementMin",e,n,t),Mix:"mix",If:(e,n,t)=>{if(e.length!==3)throw new Error("Could not compile `If`: wrong number of arguments");Es("If",[e[1],e[2]]);let r=pr("If",e),o=i=>Jt("If",e[i],n(e[i],i),r,t);if(Cn(e[1])||Cn(e[2])||et(t)&&(Kt(e[1])||Kt(e[2])||Xt(e[1],t)||Xt(e[2],t)||Yt(e[1])||Yt(e[2]))){let i=rr([e[0],e[1],e[0].engine.True,e[2]],(s,a)=>a===1||a===3?Jt("If",s,n(s,a===3?2:a),r,t):n(s,a),t);if(i!==void 0)return i}return fo("If",e,t),uo("If",[e[1],e[2]],t),zn(n(e[0],0),Ue("If",()=>o(1),t),Ue("If",()=>o(2),t),t)},When:(e,n,t)=>{if(e.length!==2)throw new Error("Could not compile `When`: expected exactly 2 arguments (expr, cond)");if(p.assertScalarCondition(e[1]),E(e[1],"True"))return`(${n(e[0],0)})`;if(E(e[1],"False"))return tr(e[0],t);if(Cn(e[0])||et(t)&&(Kt(e[0])||Xt(e[0],t)||Yt(e[0]))){let r=rr([e[1],e[0]],(o,i)=>n(o,i===0?1:0),t);if(r!==void 0)return r}return fo("When",e,t),uo("When",[e[0]],t),zn(n(e[1],1),Ue("When",()=>n(e[0],0),t),tr(e[0],t),t)},Which:(e,n,t)=>{if(e.length<2||e.length%2!==0)throw new Error("Could not compile `Which`: expected condition/value pairs");Es("Which",e.filter((l,u)=>u%2===1));let r=pr("Which",e),o=l=>Jt("Which",e[l],n(e[l],l),r,t),i=et(t);if(e.some((l,u)=>u>0&&(Cn(l)||i&&(Kt(l)||Xt(l,t)||Yt(l))))){let l=rr(e,(u,f)=>f%2===1?Jt("Which",u,n(u,f),r,t):n(u,f),t);if(l!==void 0)return l}fo("Which",e,t),uo("Which",e.slice(1),t);let s=e.filter((l,u)=>u%2===1).find(l=>Ve(l))??null,a=l=>{if(l>=e.length)return r?`${ne(t)}(${ze(t)})`:tr(s,t);let u=e[l],f=g=>l===0?g():Ue("Which",g,t);if(E(u,"True"))return`(${f(()=>o(l+1))})`;let c=l;for(;c+3<e.length&&!E(e[c+2],"True")&&e[l+1].isPure&&e[c+2].isPure&&e[c+3].isPure&&e[c+3].isSame(e[l+1]);)c+=2;let m=f(()=>n(u,l)),d=[];for(let g=l+2;g<=c;g+=2)d.push(Ue("Which",()=>n(e[g],g),t));let h=d.length===0?m:[m,...d].map(g=>`(${g})`).join(" || ");return zn(h,Ue("Which",()=>o(l+1),t),a(c+2),t)};return a(0)},Match:(e,n,t)=>p.compileMatchTernary(e[0].engine,e,t,{ternary:(r,o,i)=>zn(r,o,i,t),eq:"==",noMatch:ze(t),allowStrings:!1,arm:r=>Ue("Match",r,t),statement:r=>qu(e[0],r,t)}),Power:(e,n,t)=>{let r=e[0],o=e[1];if(r===null)throw new Error("Could not compile `Power`: no argument");if(o==null)throw new Error("Could not compile `Power`: expected two operands, got one");let i=p.negativeBaseFloatPower(e);if(p.isComplexValued(r)||p.isComplexValued(o)){if(E(r,"ExponentialE")){let d=o!==null?p.eulerPiSplit(o):void 0;if(d!==void 0&&j(d.u)==="scalar"&&(d.a===void 0||j(d.a)==="scalar")){let h=Oe(d.u,2,!1);return d.a===void 0?`_gpu_cossinpi(${n(h)})`:`(exp(${n(d.a)}) * _gpu_cossinpi(${n(h)}))`}return`_gpu_cexp(${n(o)})`}En("Power",r),En("Power",o);let f=ne(t),c=p.isComplexValued(r)?n(r):`${f}(${n(r)}, 0.0)`;if(typeof i=="object")return`_gpu_cpowrr(${c}, ${B(i.value,t.language)}, ${i.oddNumerator?"-1.0":"1.0"})`;let m=p.isComplexValued(o)?n(o):`${f}(${n(o)}, 0.0)`;return`_gpu_cpow(${c}, ${m})`}let s=Y(r),a=Y(o);if(s!==void 0&&a!==void 0){let f=Math.pow(s,a);if(Number.isNaN(f)){if(ge("Power",e))return _s(s,a,t);let c=ji(s,o,a);if(c!==void 0)return B(c,t.language)}return B(f,t.language)}let l=p.realPowerExponent(e)??(typeof i=="object"?i:void 0);if(l!==void 0){let f=ce("Power",r,n,t),c=Ss(r,o),m=v=>c===void 0?B(v,t.language):`${un(c,t)}(${B(v,t.language)})`,d=`pow(abs(${f}), ${m(l.value)})`;if(!l.oddNumerator)return d;let h=t.language==="wgsl"||c===void 0?`${f} < ${m(0)}`:`lessThan(${f}, ${m(0)})`;return`(${t.language==="wgsl"?`select(${m(1)}, ${m(-1)}, ${h})`:c===void 0?`(${h} ? -1.0 : 1.0)`:`mix(${m(1)}, ${m(-1)}, ${h})`} * ${d})`}if(ge("Power",e))return`_gpu_cpow(${_e(r,n,t)}, ${_e(o,n,t)})`;let u=Ss(r,o);if(a===0){let f=j(r);return f==="scalar"?"1.0":typeof f=="number"?`${un(f,t)}(1.0)`:`_gpu_powi(${n(r)}, 0.0)`}if(a===1)return mo(n(r));if(E(r,"ExponentialE")&&j(o)==="scalar"&&n(r)==="2.71828182846")return`exp(${n(o)})`;if(a===.5)return`sqrt(${n(r)})`;if(s===2)return`exp2(${n(o)})`;if(a!==void 0&&Number.isInteger(a)){let f=a,c=Math.abs(f),m;if(c===1)m=`(${n(r)})`;else if((E(r)||O(r))&&c<=If){let d=n(r);m=/^[A-Za-z_]\w*$|^-?[0-9]+(?:\.[0-9]*)?$/.test(d)?`(${Array(c).fill(d).join(" * ")})`:vt(d,c,j(r))}else m=vt(n(r),c,j(r));return f<0?`(1.0 / ${m})`:m}if(p.isIntegerValued(o)&&!p.isNonNegative(r)&&j(o)==="scalar"){let f=j(r),c=typeof f=="number"?f:void 0;if(f==="scalar"||c!==void 0)return`_gpu_powi${c??""}(${n(r)}, ${n(o)})`}return`pow(${ks(r,u,n,t)}, ${ks(o,u,n,t)})`},Radians:"radians",Round:(e,n,t)=>{let r=j(e[0])==="scalar",o=e[0].engine.roundingTies,i=s=>_o(s,o,r,t.language==="wgsl");return e.length<2?p.isIntegerValued(e[0])?Le(e[0],n,t):i(r?n(e[0]):ce("Round",e[0],n,t)):nr((s,a)=>_o(s,o,a,t.language==="wgsl"),e[0],e[1],n,t,.5)},Sign:(e,n,t)=>an("sign",e[0],n(e[0]),t),Sin:(e,n,t)=>{if(p.isComplexValued(e[0]))return`_gpu_csin(${n(e[0])})`;let r=co(e[0],2);return r!==void 0?`_gpu_sinpi(${n(r)})`:an("sin",e[0],n(Oe(e[0],2,!0,t)),t)},Smoothstep:(e,n,t)=>xs("smoothstep",2,e,n,t)??`smoothstep(${e.map(r=>n(r)).join(", ")})`,Sqrt:(e,n,t)=>{if(p.isComplexValued(e[0]))return`_gpu_csqrt(${n(e[0])})`;let r=Y(e[0]);return r!==void 0?r<0?`${ne(t)}(0.0, ${B(Math.sqrt(-r),t.language)})`:B(Math.sqrt(r),t.language):e[0]?.isNegative===!0&&ge("Sqrt",e)?`_gpu_csqrt(${_e(e[0],n,t)})`:`sqrt(${n(e[0])})`},Step:"step",Tan:(e,n,t)=>{if(p.isComplexValued(e[0]))return`_gpu_ctan(${n(e[0])})`;let r=co(e[0],1);return r!==void 0?`_gpu_tanpi(${n(r)})`:`tan(${n(Oe(e[0],1,!0,t))})`},Truncate:(e,n,t)=>e.length>1&&e[1]!==null?nr("trunc",e[0],e[1],n,t):p.isIntegerValued(e[0])?Le(e[0],n,t):`trunc(${n(e[0])})`,Real:(e,n,t)=>p.isComplexValued(e[0])?`(${n(e[0])}).x`:Le(e[0],n,t),Imaginary:(e,n)=>p.isComplexValued(e[0])?`(${n(e[0])}).y`:"0.0",Argument:(e,n,t)=>{if(p.isComplexValued(e[0])){let r=ce("Argument",e[0],n,t,!0),o=Ie(r);return o!==void 0&&/^vec2f?$/.test(o.callee)&&o.operands.length===2?`${lo(t)}(${o.operands[1]}, ${o.operands[0]})`:`${lo(t)}(${Xe(r,"y")}, ${Xe(r,"x")})`}return zn(`${n(e[0])} >= 0.0`,"0.0","3.14159265359",t)},Conjugate:(e,n,t)=>{if(p.isComplexValued(e[0])){let r=ne(t),o=ce("Conjugate",e[0],n,t,!0);return`${r}(${Xe(o,"x")}, -${Xe(o,"y")})`}return Le(e[0],n,t)},Remainder:([e,n],t,r)=>{if(e===null||n===null)throw new Error("Could not compile `Remainder`: missing argument");let o=a=>_o(a,"toward-positive-infinity",j(e)==="scalar"&&j(n)==="scalar",r.language==="wgsl");if(p.foldValueImpure(e)||p.foldValueImpure(n)){if(!p.canHoist(r)||j(e)!=="scalar"||j(n)!=="scalar")throw new Error("Could not compile `Remainder`: an impure (Random) operand cannot be bound to a temporary at this position \u2014 a repeated draw would shift every later value in the shader.");Je("Remainder",[e,n],r);let a=p.tempVar(r),l=p.tempVar(r),u=f=>r.language==="wgsl"?`var ${f}: f32`:`float ${f}`;return p.hoistStatement(r,`${u(a)} = ${t(e)};`,`${u(l)} = ${t(n)};`),De([e,n],r),`(${a} - ${l} * ${o(`${a} / ${l}`)})`}let i=`(${t(e)})`,s=`(${t(n)})`;return`(${i} - ${s} * ${o(`${i} / ${s}`)})`},Cot:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Cot`: no argument");if(p.isComplexValued(e)){if(p.foldValueImpure(e)){if(!p.canHoist(t))throw new Error("Could not compile `Cot`: an impure (Random) complex operand cannot be bound to a temporary at this position \u2014 a repeated draw would shift every later value in the shader.");Je("Cot",[e],t);let i=p.tempVar(t),s=t.language==="wgsl"?`var ${i}: ${ne(t)}`:`${ne(t)} ${i}`;return p.hoistStatement(t,`${s} = ${n(e)};`),De([e],t),`_gpu_cdiv(_gpu_ccos(${i}), _gpu_csin(${i}))`}let o=n(e);return`_gpu_cdiv(_gpu_ccos(${o}), _gpu_csin(${o}))`}if(p.foldValueImpure(e)){if(!p.canHoist(t)||j(e)!=="scalar")throw new Error("Could not compile `Cot`: an impure (Random) operand cannot be bound to a temporary at this position \u2014 a repeated draw would shift every later value in the shader.");Je("Cot",[e],t);let o=p.tempVar(t),i=t.language==="wgsl"?`var ${o}: f32`:`float ${o}`;return p.hoistStatement(t,`${i} = ${n(Oe(e,1,!0,t))};`),De([e],t),`(_gpu_cos(${o}) / _gpu_sin(${o}))`}let r=n(Oe(e,1,!0,t));return`(${an("cos",e,r,t)} / ${an("sin",e,r,t)})`},Csc:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Csc`: no argument");return p.isComplexValued(e)?`_gpu_cdiv(${ne(t)}(1.0, 0.0), _gpu_csin(${n(e)}))`:`(1.0 / ${an("sin",e,n(Oe(e,2,!0,t)),t)})`},Sec:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Sec`: no argument");return p.isComplexValued(e)?`_gpu_cdiv(${ne(t)}(1.0, 0.0), _gpu_ccos(${n(e)}))`:`(1.0 / ${an("cos",e,n(Oe(e,2,!0,t)),t)})`},Arccot:([e],n)=>{if(e===null)throw new Error("Could not compile `Arccot`: no argument");return`(1.5707963267948966 - atan(${n(e)}))`},Arccsc:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Arccsc`: no argument");return p.isComplexValued(e)||ge("Arccsc",[e])?Zt("_gpu_cacsc",e,n,t):`asin(1.0 / (${n(e)}))`},Arcsec:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Arcsec`: no argument");return p.isComplexValued(e)||ge("Arcsec",[e])?Zt("_gpu_casec",e,n,t):`acos(1.0 / (${n(e)}))`},Sinh:(e,n)=>{if(p.isComplexValued(e[0])){let t=Qn(e[0],2);return t!==void 0?`_gpu_ipi_sinh(${n(t)})`:`_gpu_csinh(${n(e[0])})`}return`sinh(${n(e[0])})`},Cosh:(e,n)=>{if(p.isComplexValued(e[0])){let t=Qn(e[0],2);return t!==void 0?`_gpu_ipi_cosh(${n(t)})`:`_gpu_ccosh(${n(e[0])})`}return`cosh(${n(e[0])})`},Tanh:(e,n,t)=>{if(p.isComplexValued(e[0])){let r=Qn(e[0],1);return r!==void 0?`_gpu_ipi_tanh(${n(r)})`:`_gpu_ctanh(${n(e[0])})`}return ys(e[0],n,t)},Coth:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Coth`: no argument");if(p.isComplexValued(e)){let r=Qn(e,1);if(r!==void 0)return`_gpu_ipi_coth(${n(r)})`;let o=ce("Coth",e,n,t,!0);return`_gpu_cdiv(_gpu_ccosh(${o}), _gpu_csinh(${o}))`}return`(1.0 / ${ys(e,n,t)})`},Csch:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Csch`: no argument");if(p.isComplexValued(e)){let r=Qn(e,2);return r!==void 0?`_gpu_ipi_csch(${n(r)})`:`_gpu_cdiv(${ne(t)}(1.0, 0.0), _gpu_csinh(${n(e)}))`}return`(1.0 / sinh(${n(e)}))`},Sech:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Sech`: no argument");if(p.isComplexValued(e)){let r=Qn(e,2);return r!==void 0?`_gpu_ipi_sech(${n(r)})`:`_gpu_cdiv(${ne(t)}(1.0, 0.0), _gpu_ccosh(${n(e)}))`}return`(1.0 / cosh(${n(e)}))`},Arcosh:(e,n,t)=>p.isComplexValued(e[0])?`_gpu_cacosh(${n(e[0])})`:ge("Arcosh",e)?`_gpu_cacosh(${_e(e[0],n,t)})`:`acosh(${n(e[0])})`,Arsinh:(e,n)=>p.isComplexValued(e[0])?`_gpu_casinh(${n(e[0])})`:`asinh(${n(e[0])})`,Artanh:(e,n,t)=>p.isComplexValued(e[0])?`_gpu_catanh(${n(e[0])})`:ge("Artanh",e)?`_gpu_catanh(${_e(e[0],n,t)})`:`atanh(${n(e[0])})`,Arcoth:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Arcoth`: no argument");return p.isComplexValued(e)||ge("Arcoth",[e])?Zt("_gpu_cacoth",e,n,t):`atanh(1.0 / (${n(e)}))`},Arcsch:([e],n)=>{if(e===null)throw new Error("Could not compile `Arcsch`: no argument");return`asinh(1.0 / (${n(e)}))`},Arsech:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Arsech`: no argument");return p.isComplexValued(e)||ge("Arsech",[e])?Zt("_gpu_casech",e,n,t):`acosh(1.0 / (${n(e)}))`},Arctan2:(e,n,t)=>{if(e.length<2)throw new Error("Could not compile `Arctan2`: need two arguments");return`${lo(t)}(${n(e[0])}, ${n(e[1])})`},Hypot:([e,n],t)=>{if(e===null||n===null)throw new Error("Could not compile `Hypot`: need two arguments");return`length(vec2(${t(e)}, ${t(n)}))`},Haversine:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Haversine`: no argument");return`((1.0 - ${an("cos",e,n(e),t)}) * 0.5)`},InverseHaversine:([e],n)=>{if(e===null)throw new Error("Could not compile `InverseHaversine`: no argument");return`(2.0 * asin(sqrt(${n(e)})))`},Gamma:(e,n,t)=>{let r=e[0];if(!r)throw new Error("Could not compile `Gamma`: no argument");if(e.length>1)throw new Error(`Could not compile \`Gamma\`: the two-operand form is the upper incomplete gamma \u0393(s, z), which has no ${t.language??"GPU"} lowering (\`_gpu_gamma\` is the COMPLETE \u0393).`);return`_gpu_gamma(${n(r)})`},GammaLn:([e],n)=>{if(e===null)throw new Error("Could not compile `GammaLn`: no argument");return`_gpu_gammaln(${n(e)})`},Factorial:([e],n)=>{if(e===null)throw new Error("Could not compile `Factorial`: no argument");return`_gpu_gamma(${n(e)} + 1.0)`},Beta:([e,n],t,r)=>{if(e===null||n===null)throw new Error("Could not compile `Beta`: need two arguments");let o=ce("Beta",e,t,r),i=ce("Beta",n,t,r);return`(_gpu_gamma(${o}) * _gpu_gamma(${i}) / _gpu_gamma(${o} + ${i}))`},Erf:([e],n)=>{if(e===null)throw new Error("Could not compile `Erf`: no argument");return`_gpu_erf(${n(e)})`},Digamma:([e],n)=>{if(e===null)throw new Error("Could not compile `Digamma`: no argument");return`_gpu_digamma(${n(e)})`},Trigamma:([e],n)=>{if(e===null)throw new Error("Could not compile `Trigamma`: no argument");return`_gpu_trigamma(${n(e)})`},PolyGamma:(e,n)=>{if(e.length!==2||e[0]===null||e[1]===null)throw new Error("Could not compile `PolyGamma`: need two arguments");return`_gpu_polygamma(${n(e[0])}, ${n(e[1])})`},Zeta:(e,n)=>{if(e.length===1)return`_gpu_zeta(${n(e[0])})`;if(e.length===2)return`_gpu_zeta_generalized(${n(e[0])}, ${n(e[1])})`;throw new Error("Could not compile `Zeta`: it takes one or two operands")},HurwitzZeta:(e,n)=>{if(e.length!==2)throw new Error("Could not compile `HurwitzZeta`: only the two-operand form `HurwitzZeta(s, a)` compiles");return so("HurwitzZeta",e),`_gpu_hurwitz_zeta(${n(e[0])}, ${n(e[1])})`},LerchPhi:(e,n)=>{if(e.length!==3)throw new Error("Could not compile `LerchPhi`: it takes exactly three operands");return so("LerchPhi",e),`_gpu_lerch_phi(${n(e[0])}, ${n(e[1])}, ${n(e[2])})`},PolyLog:(e,n)=>{if(e.length!==2)throw new Error("Could not compile `PolyLog`: it takes exactly two operands");return so("PolyLog",e),`_gpu_poly_log(${n(e[0])}, ${n(e[1])})`},Binomial:js,Choose:js,Erfc:([e],n)=>{if(e===null)throw new Error("Could not compile `Erfc`: no argument");return`(1.0 - _gpu_erf(${n(e)}))`},ErfInv:([e],n)=>{if(e===null)throw new Error("Could not compile `ErfInv`: no argument");return`_gpu_erfinv(${n(e)})`},Heaviside:([e],n)=>{if(e===null)throw new Error("Could not compile `Heaviside`: no argument");return`_gpu_heaviside(${n(e)})`},Sinc:([e],n)=>{if(e===null)throw new Error("Could not compile `Sinc`: no argument");return`_gpu_sinc(${n(e)})`},FresnelC:([e],n)=>{if(e===null)throw new Error("Could not compile `FresnelC`: no argument");return`_gpu_fresnelC(${n(e)})`},FresnelS:([e],n)=>{if(e===null)throw new Error("Could not compile `FresnelS`: no argument");return`_gpu_fresnelS(${n(e)})`},BesselJ:([e,n],t,r)=>{if(e===null||n===null)throw new Error("Could not compile `BesselJ`: need two arguments");return`_gpu_besselJ(${r?.language==="wgsl"?"i32":"int"}(${t(e)}), ${t(n)})`},Lb:"log2",Log:(e,n,t)=>{if(e.length===0)throw new Error("Could not compile `Log`: no argument");if(e.some(r=>p.isComplexValued(r))||e.some(r=>r.isNegative===!0)&&ge("Log",e)){let r=`_gpu_cln(${_e(e[0],n,t)})`;return e.length===1?`(${r} * 0.4342944819032518)`:`_gpu_cdiv(${r}, _gpu_cln(${_e(e[1],n,t)}))`}return e.length===1?`(log(${n(e[0])}) / log(10.0))`:p.fixedLogBase(e)===2?`log2(${n(e[0])})`:`(log(${n(e[0])}) / log(${n(e[1])}))`},Log10:([e],n)=>{if(e===null)throw new Error("Could not compile `Log10`: no argument");return`(log(${n(e)}) * 0.4342944819032518)`},Lg:([e],n)=>{if(e===null)throw new Error("Could not compile `Lg`: no argument");return`(log(${n(e)}) * 0.4342944819032518)`},Square:([e],n)=>{if(e===null)throw new Error("Could not compile `Square`: no argument");if(E(e)||O(e)){let r=n(e);if(/^[A-Za-z_]\w*$|^-?[0-9]+(?:\.[0-9]*)?$/.test(r))return`(${r} * ${r})`;let o=j(e);return vt(r,2,o)}let t=j(e);return vt(n(e),2,t)},Root:([e,n],t,r)=>{if(e===null)throw new Error("Could not compile `Root`: no argument");if(p.isComplexValued(e)||n!=null&&p.isComplexValued(n)){if(n!=null&&p.isComplexValued(n))throw new Error("Could not compile `Root`: a complex degree has no shader lowering.");let l=ne(r),u=ce("Root",e,t,r,!0);if(n==null)return`_gpu_csqrt(${u})`;let f=Y(n);if(f!==void 0){let d=B(1/f,r.language),h=`_gpu_cpow(${u}, ${l}(${d}, 0.0))`;return!Number.isInteger(f)||f%2===0?h:zn(`(${u}).y == 0.0`,`${l}(sign((${u}).x) * pow(abs((${u}).x), ${d}), 0.0)`,h,r)}let c=ce("Root",n,t,r),m=r.language==="wgsl"?`abs(${c}) % 2.0 == 1.0`:`mod(abs(${c}), 2.0) == 1.0`;return zn(`(${u}).y == 0.0 && fract(${c}) == 0.0 && ${m}`,`${l}(sign((${u}).x) * pow(abs((${u}).x), 1.0 / (${c})), 0.0)`,`_gpu_cpow(${u}, ${l}(1.0 / (${c}), 0.0))`,r)}if(n==null)return`sqrt(${t(e)})`;let o=Y(n);if(o===2)return`sqrt(${t(e)})`;let i=Y(e);if(i!==void 0&&o!==void 0){let l=Math.pow(i,1/o);if(Number.isNaN(l)){let u=i<0?p.realRootDegreeTerms(n):void 0;if(i<0&&(Number.isInteger(o)&&o%2!==0||u?.oddNumerator===!0))return B(-Math.pow(-i,1/o),r.language);if(u!==void 0)return B(Math.pow(-i,1/o),r.language);if(ge("Root",[e,n]))return _s(i,1/o,r)}return B(l,r.language)}if(ge("Root",[e,n]))return`_gpu_cpow(${_e(e,t,r)}, ${ne(r)}(1.0 / (${t(n)}), 0.0))`;let s=p.realRootDegreeTerms(n);if(o!==void 0&&(Number.isInteger(o)&&o%2!==0||s?.oddNumerator===!0)){let l=ce("Root",e,t,r);return`(sign(${l}) * pow(abs(${l}), ${B(1/o,r.language)}))`}if(o!==void 0&&s!==void 0)return`pow(abs(${t(e)}), ${B(1/o,r.language)})`;let a=t(n);return`pow(${t(e)}, 1.0 / ${/^[\w.]+$/.test(a)?a:`(${a})`})`},GamutMap:(e,n,t)=>{if(e.length===0)throw new Error("Could not compile `GamutMap`: no argument");let r=Fe("GamutMap",e[0],n,t),o=e.length>=2&&e[1]!==null?e[1]:void 0,i="srgb";if(o!==void 0){let s=Qt(o);if(s===null)throw new Error("Could not compile `GamutMap`: the gamut must be a string literal on a shader target");i=s}if(i==="srgb")return`_gpu_gamut_map_oklch(${r})`;if(i==="display-p3")return`_gpu_gamut_map_oklch_p3(${r})`;throw new Error(`Could not compile \`GamutMap\`: unknown gamut "${i}" \u2014 the gamut is "srgb" or "display-p3".`)},ColorMix:(e,n,t)=>{if(e.length<2)throw new Error("Could not compile `ColorMix`: need two colors");let r=Fe("ColorMix",e[0],n,t),o=Fe("ColorMix",e[1],n,t),i=e.length>=3?n(e[2]):"0.5";return`_gpu_color_mix(${r}, ${o}, ${i})`},ColorContrast:([e,n],t,r)=>{if(e===null||n===null)throw new Error("Could not compile `ColorContrast`: need two colors");return`_gpu_apca(${Fe("ColorContrast",e,t,r)}, ${Fe("ColorContrast",n,t,r)})`},ContrastingColor:we((e,n,t)=>{if(e.length===0)throw new Error("Could not compile `ContrastingColor`: no argument");let r=(f,c,m)=>t?.language==="wgsl"?`select(${m}, ${c}, ${f})`:`(${f} ? ${c} : ${m})`;if(e.slice(0,3).some(f=>f.isPure===!1))throw new Error("Could not compile `ContrastingColor`: an impure (Random) operand cannot be bound to a temporary at this position \u2014 a repeated draw would shift every later value in the shader.");let o=(f,c)=>{if(t===void 0||f.unknowns.length===0||/^[A-Za-z_]\w*$/.test(c)||!p.canHoist(t))return c;let m=p.tempVar(t),d=je(t),h=t.language==="wgsl"?`var ${m}: ${d}`:`${d} ${m}`;return p.hoistStatement(t,`${h} = ${c};`),m},i=o(e[0],Fe("ContrastingColor",e[0],n,t));if(e.length>=3){let f=o(e[1],Fe("ContrastingColor",e[1],n,t)),c=o(e[2],Fe("ContrastingColor",e[2],n,t));return r(`abs(_gpu_apca(${f}, ${i})) >= abs(_gpu_apca(${c}, ${i}))`,f,c)}let a=t?.language==="wgsl"?"vec3f":"vec3",l=`${a}(0.0)`,u=`${a}(1.0, 0.0, 0.0)`;return r(`abs(_gpu_apca(${u}, ${i})) >= abs(_gpu_apca(${l}, ${i}))`,u,l)}),ColorToColorspace:([e,n],t,r)=>{if(e===null||n===null)throw new Error("Could not compile `ColorToColorspace`: need color and space");let o=Qt(n);if(o===null)throw new Error("Could not compile `ColorToColorspace`: space must be a string literal");let i=Jn("ColorToColorspace",e,t,r);switch(o){case"oklch":return i;case"oklab":case"lab":return`_gpu_oklch_to_oklab(${i})`;case"rgb":return bs(e,i,r);case"hsl":return`_gpu_rgb_to_hsl(_gpu_oklch_to_srgb(${i}))`;case"hsv":return`_gpu_rgb_to_hsv(_gpu_oklch_to_srgb(${i}))`;default:throw new Error(`Could not compile \`ColorToColorspace\`: unsupported space "${o}" on GPU target`)}},ColorFromColorspace:([e,n],t,r)=>{if(e===null||n===null)throw new Error("Could not compile `ColorFromColorspace`: need components and space");let o=Qt(n);if(o===null)throw new Error("Could not compile `ColorFromColorspace`: space must be a string literal");let i=_(e)&&zu.has(e.operator)?e:null;if(_(e)&&e.operator==="List")throw new Error("Could not compile `ColorFromColorspace`: a list is not a color component vector \u2014 the operand must be a tuple or a color.");i?ln("ColorFromColorspace",i.ops):_(e)&&e.operator==="Tuple"&&ln("ColorFromColorspace",e.ops),i&&dn(i.ops.slice(0,3),je(r));let s=i?`${je(r)}(${i.ops.slice(0,3).map(a=>t(a)).join(", ")})`:t(e);if(!Cu.has(o))throw new Error(`Could not compile \`ColorFromColorspace\`: unsupported space "${o}" on GPU target`);return s},Color:([e],n,t)=>{if(e===null)throw new Error("Could not compile `Color`: no argument");let r=Qt(e);if(r===null)throw new Error("Could not compile `Color`: argument must be a string literal on GPU target");let o=xi(r);if(o===null)throw new Error(`Could not compile \`Color\`: invalid color string "${r}"`);if((o&255)!==255)throw new Error(`Could not compile \`Color\`: the color string "${r}" carries an alpha channel, which is not representable on the GPU target \u2014 color values are \`vec3\` (OKLCh) end to end, with no alpha channel. Use a fully opaque color and pass the alpha separately (e.g. as a uniform) at the framebuffer boundary.`);let i=o>>>24&255,s=o>>>16&255,a=o>>>8&255,l=yi({r:i,g:s,b:a});return`${je(t)}(${B(l.L)}, ${B(l.C)}, ${B(l.H)})`},Rgb:(e,n,t)=>{if(e.length<3)throw new Error("Could not compile `Rgb`: need 3 components");return ln("Rgb",e),`_gpu_srgb_to_oklch(${je(t)}(${n(e[0])}, ${n(e[1])}, ${n(e[2])}))`},Hsv:(e,n,t)=>{if(e.length<3)throw new Error("Could not compile `Hsv`: need 3 components");return ln("Hsv",e),`_gpu_srgb_to_oklch(_gpu_hsv_to_rgb(${je(t)}(${n(e[0])}, ${n(e[1])}, ${n(e[2])})))`},Hsl:(e,n,t)=>{if(e.length<3)throw new Error("Could not compile `Hsl`: need 3 components");return ln("Hsl",e),`_gpu_srgb_to_oklch(_gpu_hsl_to_rgb(${je(t)}(${n(e[0])}, ${n(e[1])}, ${n(e[2])})))`},Oklab:(e,n,t)=>{if(e.length<3)throw new Error("Could not compile `Oklab`: need 3 components");return ln("Oklab",e),`_gpu_oklab_to_oklch(${vs(e,n,t)})`},Oklch:(e,n,t)=>{if(e.length<3)throw new Error("Could not compile `Oklch`: need 3 components");return ln("Oklch",e),vs(e,n,t)},AsOklch:([e],n,t)=>{if(e===null)throw new Error("Could not compile `AsOklch`: no argument");return fr(e,Jn("AsOklch",e,n,t),t)},AsOklab:([e],n,t)=>{if(e===null)throw new Error("Could not compile `AsOklab`: no argument");return`_gpu_oklch_to_oklab(${Jn("AsOklab",e,n,t)})`},AsRgb:([e],n,t)=>{if(e===null)throw new Error("Could not compile `AsRgb`: no argument");return bs(e,Jn("AsRgb",e,n,t),t)},AsHsv:([e],n,t)=>{if(e===null)throw new Error("Could not compile `AsHsv`: no argument");return`_gpu_rgb_to_hsv(_gpu_oklch_to_srgb(${Jn("AsHsv",e,n,t)}))`},AsHsl:([e],n,t)=>{if(e===null)throw new Error("Could not compile `AsHsl`: no argument");return`_gpu_rgb_to_hsl(_gpu_oklch_to_srgb(${Jn("AsHsl",e,n,t)}))`},Mandelbrot:([e,n],t,r)=>{if(e===null||n===null)throw new Error("Could not compile `Mandelbrot`: missing arguments");let o=Gs("Mandelbrot",n,t,r);return`_fractal_mandelbrot(${_e(e,t,r)}, ${o})`},Julia:([e,n,t],r,o)=>{if(e===null||n===null||t===null)throw new Error("Could not compile `Julia`: missing arguments");let i=Gs("Julia",t,r,o);return`_fractal_julia(${_e(e,r,o)}, ${_e(n,r,o)}, ${i})`},Cross:"cross",Distance:"distance",Dot:"dot",Norm:we((e,n,t)=>{if(e.length>1)throw new Error(`Could not compile \`Norm\`: only the default L2 norm compiles on the ${t.language??"GPU"} target.`);let r=e[0];if((_(r,"Tuple")||_(r,"PointList"))&&Mt(r)){let o=Yr(r,t);if(typeof o=="string")throw new Error(`Could not compile \`Norm\`: a point with a broadcasting component, and ${o}.`);return n(o)}if(_(r,"Tuple")||_(r,"List")){if(Mt(r))throw new Error("Could not compile `Norm`: a point with a broadcasting component.");let o=r.nops;if(o===0||o>4)throw new Error(`Could not compile \`Norm\`: the ${t.language??"GPU"} 'length()' builtin only accepts 2-4 component vectors (got ${o}).`);if(r.ops.some(i=>p.isComplexValued(i))){let i=r.ops.map(s=>{if(p.isComplexValued(s))return`length(${n(s)})`;if(j(s)!=="scalar")throw new Error(`Could not compile \`Norm\`: the entry \`${s.toString()}\` is not a scalar, so it has no modulus beside a complex entry.`);return n(s)});return o===1?i[0]:`length(${un(o,t)}(${i.join(", ")}))`}return o===1?`abs(${n(r.op1)})`:`length(${n(r)})`}return`length(${n(r)})`},rf),Length:we((e,n,t)=>{if(e.length===1&&Sn(e[0],t))return us(Ao(e[0],n,t,"Length").name);throw new Error(`Could not compile \`Length\`: the collection element count is not supported on the ${t.language??"GPU"} target: the '${t.language??"GPU"}' 'length()' builtin is the Euclidean norm (CE 'Norm'), not a count.`)}),Normalize:"normalize",Reflect:"reflect",Refract:"refract",Sum:we((e,n,t)=>Ds("Sum",e,n,t),As),Product:we((e,n,t)=>Ds("Product",e,n,t),As),Range:(e,n,t)=>{if(e.length<2||e.length>3)throw new Error("Could not compile `Range`: GPU compile expects 2 or 3 arguments (lo, hi, step?)");let r=e[0].re,o=e[1].re,i=e.length===3?e[2].re:1;if(!Number.isFinite(r)||!Number.isFinite(o)||!Number.isFinite(i))throw new Error("Could not compile `Range`: GPU compile requires constant numeric bounds (non-constant ranges must be materialized at JS host then uploaded as a uniform)");if(i===0)throw new Error("Could not compile `Range`: step cannot be zero");let s=Br(r,o,i);if(s===0)throw new Error("Could not compile `Range`: empty range (lo > hi for positive step, or lo < hi for negative step)");it("Range",s);let a=[];for(let f=0;f<s;f++)a.push(r+f*i);return`${t.language==="wgsl"?`array<f32, ${s}>`:`float[${s}]`}(${a.map(f=>Ee(f,t.language)).join(", ")})`},Loop:(e,n,t)=>{if(!e[0])throw new Error("Could not compile `Loop`: no body");if(!e[1])throw new Error("Could not compile `Loop`: no indexing set");let r=e[1];if(!_(r,"Element"))throw new Error("Could not compile `Loop`: expected Element(index, Range(lo, hi))");let o=r.ops[0],i=r.ops[1];if(!E(o))throw new Error("Could not compile `Loop`: index must be a symbol");if(!_(i,"Range"))throw new Error("Could not compile `Loop`: expected Range(lo, hi)");let s=o.symbol;qe(s,t.language);let a=i.ops[0].re,l=i.ops[1].re;if(!Number.isFinite(a)&&!O(i.ops[0])||!Number.isFinite(l)&&!O(i.ops[1]))throw new Error("Could not compile `Loop` on this target: the bounds of the `Range` must be numbers known at compile time (a number literal, or a symbol with a value)");let u=Math.floor(a),f=Math.floor(l);if(!Number.isFinite(u)||!Number.isFinite(f))throw new Error("Could not compile `Loop`: bounds must be finite numbers");let c=1;if(i.ops.length>=3){let w=i.ops[2].re;if(!Number.isInteger(w)||w===0)throw new Error("Could not compile `Loop` on this target: the step of the `Range` must be a non-zero integer known at compile time");c=w}let m=t.language==="wgsl",d=m?"i32":"int",h=m?`f32(${s})`:`float(${s})`,g=p.compileStatementList(e[0],{...t,var:w=>w===s?h:t.var(w),...p.withBoundScope(t,[s])}),v=m?`var ${s}: ${d}`:`${d} ${s}`,x=g.split(`
`).map(w=>`  ${w}`).join(`
`),y=c>0?`${s} <= ${f}`:`${s} >= ${f}`,P=c===1?`${s}++`:`${s} += ${c}`;return`for (${v} = ${u}; ${y}; ${P}) {
${x}
}`},GCD:we((e,n,t)=>Fs("GCD",e,n,t)),LCM:we((e,n,t)=>Fs("LCM",e,n,t)),Variance:we((e,n,t)=>{let r;if(e.length===1&&_(e[0],"List"))r=e[0].ops;else if(e.length>=2)r=e;else throw new Error("Could not compile `Variance`: GPU target requires a List argument or at least 2 scalar arguments");let o=r.length;if(o<2)throw new Error("Could not compile `Variance`: need at least 2 elements");let i=r.map(u=>ce("Variance",u,n,t)),a=`((${i.join(" + ")}) / ${Ee(o)})`;return`((${i.map(u=>`(${u} - ${a}) * (${u} - ${a})`).join(" + ")}) / ${Ee(o-1)})`},Rs),Median:we((e,n,t)=>{let r;if(e.length===1&&_(e[0],"List"))r=e[0].ops;else if(e.length>=1)r=e;else throw new Error("Could not compile `Median`: GPU target requires a List argument or at least 1 scalar argument");let o=r.length;if(o===0)throw new Error("Could not compile `Median`: empty list");if(o>8)throw new Error(`Could not compile \`Median\`: GPU target supports up to 8 elements via inline sorting network (got ${o}). For larger lists, compute on the CPU and pass the result as a uniform.`);let i=r.map(s=>n(s));return o===1?fr(r[0],i[0],t):`_gpu_median_${o}(${i.join(", ")})`},Rs),Random:we((e,n,t)=>{if(e.length===0)return sr(t);if(e.length===1)return Zf(e[0],n,t);throw new Error("Could not compile `Random`: expects at most one operand, the DOMAIN to draw from (`Random()`, `Random(Interval(a, b))`, `Random(Range(\u2026))`). The seed argument was removed by the Random family redesign \u2014 seed with `WithRandomSeed(seed, body)`.")},e=>e.length===1),WithRandomSeed:(e,n,t)=>{if(e.length!==2)throw new Error("Could not compile `WithRandomSeed(seed, body)`: expects exactly two operands");let r=rt(t),o=Kf(e[0],n,t),i=Sa(r);r.frames.push({seed:o,counter:i});try{return Le(e[1],n,t)}finally{r.frames.pop()}},RandomChoice:(e,n,t)=>{throw new Error(ar("RandomChoice(domain, k)",t))},RandomSample:(e,n,t)=>{throw new Error(ar("RandomSample(xs, k)",t))},RandomShuffle:(e,n,t)=>{throw new Error(ar("RandomShuffle(xs)",t))},Apply:(e,n,t)=>{let r=za(e,t);if(typeof r=="string")throw new Error(`Could not compile \`Apply\`: ${r}`);return Le(r,n,t)},Function:()=>{throw new Error("Anonymous functions (Function) are not supported in GPU targets")}};mn(In.Power,zt("exp2",0,2));mn(In.Clamp,To("min",0));mn(In.ElementMax,To("max"));mn(In.ElementMin,To("min"));function To(e,n){return(t,r)=>{if(Ie(r)?.callee!==e||t.some(a=>a==null)||t.some(a=>p.isComplexValued(a)))return;let o=t.map(j);if(n!==void 0&&typeof o[n]!="number"||new Set(o.filter(a=>typeof a=="number")).size!==1||!o.every(a=>a==="scalar"||typeof a=="number"))return;let s=new Set;return o.forEach((a,l)=>{a==="scalar"&&s.add(l)}),s.size>0?s:void 0}}function za(e,n){let[t,...r]=e;if(t===void 0)return"missing function";let o=_(t,"Derivative")?p.appliedDerivativeLiteral(e):t;if(!_(o,"Function"))return _(t,"Derivative")?`${p.appliedDerivativeDeclineReason(e)}, and target '${n.language}' has no numerical derivative.`:`only a function literal or the derivative of a function compiles as the callee on target '${n.language}'.`;let i=o.ops.slice(1);if(i.length!==r.length)return`the function takes ${i.length} parameter(s) but ${r.length} argument(s) are supplied.`;let s={};for(let[c,m]of i.entries()){let d=Mr(m)?"":dt(m);if(!d)return"a parameter of the function is not a plain name.";s[d]=r[c]}let a=o.ops[0],l=_(a,"Block")&&a.nops===1?a.op1:a;if(_(l,"Block"))return"the body of the function has more than one statement.";if(!r.every(c=>c.isPure===!0))return"an argument has an effect, which the substitution would repeat.";let u=Lt(l);for(let[c,m]of Object.entries(s)){if(u.has(c))return`the body of the function rebinds \`${c}\`.`;for(let d of m.symbols)if(u.has(d))return`the body of the function binds \`${d}\`, which an argument reads.`}if(wi(o.type.type)&&r.some(wo))return jf(o,l,Object.keys(s),r,n);let f=p.appliedArgumentTypeMismatch(o,r,!1);return f!==void 0?f:l.subs(s)}function jf(e,n,t,r,o){let i,s=[];for(let l of r){if(!wo(l)){s.push(void 0);continue}let u=Uf(l);if(u===void 0)return`the function applies to each element of the argument \`${l.toString()}\`, but target '${o.language}' cannot write out its elements: its length is not known at compile time, or it has more than ${tt} elements.`;if(i!==void 0&&u.length!==i)return`the function applies to each element of collection arguments of different lengths (${i} and ${u.length}).`;i=u.length,s.push(u)}let a=[];for(let l=0;l<(i??0);l++){let u=r.map((f,c)=>s[c]?.[l]??f);if(u.some((f,c)=>s[c]!==void 0&&wo(f))){let f=za([e,...u],o);if(typeof f=="string")return f;a.push(f)}else{let f=p.appliedArgumentTypeMismatch(e,u,!1);if(f!==void 0)return f;let c={};for(let[m,d]of t.entries())c[d]=u[m];a.push(n.subs(c))}}return e.engine.function("List",a)}function wo(e){if(mi(e))return!0;let n=xn(e.type.type);return U(n,Un)&&!U(n,"string")&&!(typeof n=="object"&&n.kind==="tuple")}function Uf(e){let n=e.engine;if(_(e,"List"))return e.nops<=tt?e.ops:void 0;if(_(e,"Range")&&(e.nops===2||e.nops===3)){let r=e.ops[0].re,o=e.ops[1].re,i=e.nops===3?e.ops[2].re:1;if(![r,o,i].every(Number.isFinite)||i===0)return;let s=Br(r,o,i);return s>tt?void 0:Array.from({length:s},(a,l)=>n.number(r+l*i))}let t=j(e);if(typeof t=="number")return Array.from({length:t},(r,o)=>n.function("At",[e,n.number(o+1)]))}var $o=new WeakMap;function Ca(){return{frames:[],counters:0,spatialCounter:void 0,stage:void 0,hostFrame:!1,varNames:void 0}}function Bf(e){let n={};e.gpuRandomRoot=n,$o.set(n,Ca())}function rt(e){let n=e.gpuRandomRoot??e,t=$o.get(n);return t===void 0&&(t=Ca(),$o.set(n,t)),t}function qf(e){let n=rt(e);n.frames.length=0,n.counters=0,n.spatialCounter=void 0,p.resetNaming(e)}function Sa(e){return`_gpu_rnd_n${e.counters++}`}var wt="_gpu_rnd_n";function Df(e,n){return n==="wgsl"?`&${e}`:e}function Vs(e,n,t){let r=i=>`0x${(i>>>0).toString(16).padStart(8,"0")}u`;return`${t==="wgsl"?"vec2<u32>":"uvec2"}(${r(e)}, ${r(n)})`}function sr(e){let n=Vf(e),t=Pn;if(t===void 0)return n;t.inline&&(t.reordered=!0);let r=[...p.compileParents()];if(t.last!==void 0&&!ku(t.last,r)&&(t.reordered=!0),t.last=r,!et(e))return t.inline=!0,n;let o=p.tempVar(e);return p.hoistStatement(e,e.language==="wgsl"?`let ${o}: f32 = ${n};`:`float ${o} = ${n};`),o}function Vf(e){let n=rt(e),t=e.language,r=n.frames[n.frames.length-1];if(r!==void 0)return`_gpu_rnd_draw(${r.seed}, ${Df(r.counter,t)})`;if(n.hostFrame)throw new Error("Could not compile `Random()`: an unframed draw has no shader form while a host `WithRandomSeed` frame is active \u2014 a shader invocation cannot share the host's mutable draw counter, and fragments run in parallel. GPU frames must be LEXICAL: move the `WithRandomSeed(seed, \u2026)` inside the compiled expression.");if(t==="wgsl")throw new Error("Could not compile `Random()`: an unframed draw has no WGSL form \u2014 a shader has no live random stream, and WGSL has no `gl_FragCoord` built-in to derive spatial noise from. Wrap the draw in `WithRandomSeed(seed, \u2026)`, whose seed may be an invocation-varying expression.");if(n.stage!==void 0&&n.stage!=="fragment")throw new Error(`Could not compile \`Random()\`: an unframed draw compiles to \`gl_FragCoord\`-derived spatial noise, which exists only in a fragment shader (this is a \`${n.stage}\` shader). Wrap the draw in \`WithRandomSeed(seed, \u2026)\` to get a stage-independent stream.`);return n.spatialCounter??=Sa(n),`_gpu_rnd_draw(uvec2(floatBitsToUint(gl_FragCoord.x), floatBitsToUint(gl_FragCoord.y)), ${n.spatialCounter})`}function Hf(e){let n=new Set,t=new Set,r=(s,a)=>{if(t.has(a))return;t.add(a);let l=s.engine;if(l===void 0)return;let u=p.userFunctionLiteral(l,a);u!==void 0&&u.ops.length>0&&i(u.ops[0])},o=new Set,i=s=>{if(!o.has(s)){if(o.add(s),E(s)){Dn(s)||Gt(s)?n.add(s.symbol):r(s,s.symbol);return}if(_(s)){typeof s.operator=="string"&&s.operator!==""&&r(s,s.operator);for(let a of s.ops)i(a)}}};return e!==void 0&&i(e),n}function hr(e,n){let t=new Set,r=new Set,o=new Set,i=new Set,s=(f,c)=>{if(n!==void 0&&Object.hasOwn(n,c)||i.has(c))return;i.add(c);let m=f.engine?._getSymbolValue(c);m!==void 0&&u(m)},a=(f,c)=>{if(o.has(c))return;o.add(c);let m=f.engine;if(m===void 0)return;let d=p.userFunctionLiteral(m,c);d!==void 0&&u(d)},l=new Set,u=f=>{if(!l.has(f)){if(l.add(f),E(f)){t.add(f.symbol),a(f,f.symbol),s(f,f.symbol);return}if(_(f)){typeof f.operator=="string"&&f.operator!==""&&a(f,f.operator),(f.operator==="Declare"||f.operator==="Assign")&&E(f.ops[0])&&r.add(f.ops[0].symbol);let c=gi(f,"post");if(c!==void 0)for(let m of c.visibleFrom.keys())r.add(m);for(let m of f.ops)u(m)}}};return u(e),{all:t,written:r}}function Wf(e,n,t,r,o){if(o().has(n))return!1;for(let i of Object.keys(r)){if(i===t)continue;if(i===n)return!1;let s=r[i];if(typeof s!="string")continue;let a=s.trim();if(a===e||a===n)return!1}return!0}function Yf(e,n,t){for(let r of Object.keys(e)){if(!t().has(r))continue;let o=e[r];if(typeof o!="string")continue;let i=/^\s*([A-Za-z_][A-Za-z0-9_]*)(?:\.[A-Za-z_][A-Za-z0-9_]*|\[[0-9]+\])*\s*$/.exec(o)?.[1];if(!(i===void 0||i===r)&&n().has(i))throw new Error(`Could not compile: the \`vars\` entry for \`${r}\` reads the uniform \`${i}\`, but the compiled code declares or writes the symbol \`${i}\`, which the shader emits with the same name. The shader would read that variable instead of the uniform. Rename the uniform or the symbol.`)}}function ar(e,n){let t=n.language??"GPU";return`${e} is not supported on the ${t} target: a shader expression has no general collection indexing. Only \`Random()\`, \`Random(Interval(a, b))\` and \`Random(Range(\u2026))\` compile \u2014 the closed-form domains.`}function Zf(e,n,t){if(_(e,"Interval")){if(e.nops!==2)throw new Error("Random(Interval(a, b)): expects two endpoints");let r=f=>_(f,"Open")||_(f,"Closed")?f.op1:f,o=r(e.op1),i=r(e.op2);for(let[f,c]of[["lower",o],["upper",i]])if(!c.canonical.isPure)throw new Error(`Could not compile \`Random(Interval(a, b))\`: the ${f} endpoint is not pure \u2014 a shader expression has no statement to evaluate it into once, so the endpoint is spliced (and would run) more than once per draw. Hoist the draw out of the endpoint.`);let s=Y(o),a=Y(i);if(s!==void 0&&a!==void 0){if(!(a>s))throw new Error(`Random(Interval(${s}, ${a})): the interval is empty or reversed \u2014 there is no uniform distribution to draw from.`);return`(${Ee(s)} + ${sr(t)} * ${Ee(a-s)})`}let l=n(o),u=n(i);return`((${l}) + ${sr(t)} * ((${u}) - (${l})))`}if(_(e,"Range")){let r=di(e);if(r===void 0||!Number.isFinite(r))throw new Error("Could not compile `Random(Range(\u2026))`: the GPU target requires a Range with constant, finite bounds \u2014 a symbolic or unbounded range has no known element count to draw from.");if(r===0)throw new Error("Random(Range(\u2026)): the range is empty (no elements).");let o=e.ops,i,s;if(o.length===1?(i=1,s=1):o.length===2?(i=o[0].re,s=o[1].re>=o[0].re?1:-1):(i=o[0].re,s=o[2].re),!Number.isFinite(i)||!Number.isFinite(s))throw new Error("Random(Range(\u2026)): the GPU target requires constant numeric bounds.");let a=`floor(${sr(t)} * ${Ee(r)})`,l=s<0?"-":"+",u=Math.abs(s);return u===1?`(${Ee(i)} ${l} ${a})`:`(${Ee(i)} ${l} ${Ee(u)} * ${a})`}throw new Error(ar("Random(collection)",t))}function Kf(e,n,t){let r=t.language;if(wn(e)){let[u,f]=Gr(e.string);return Vs(u,f,r)}if(e.type.matches("string"))throw new Error("Could not compile `WithRandomSeed(seed, \u2026)`: a string seed that is not a compile-time literal cannot be folded in a shader \u2014 GLSL and WGSL have no strings. Use a literal string, a numeric seed, or fold the seed on the host.");let o=e.canonical;if(!o.isPure)throw new Error("Could not compile `WithRandomSeed(seed, \u2026)`: the seed expression is not pure \u2014 the folded seed is spliced at EVERY draw site of the frame, so it would be evaluated once per draw. Use a compile-time constant or a single shader-supplied symbol.");let i=Y(o)??Y(o.N());if(i!==void 0){let[u,f]=Gr(i);return Vs(u,f,r)}let s=E(o)?o.symbol:void 0;if(s===void 0)throw new Error("Could not compile `WithRandomSeed(seed, \u2026)`: a COMPUTED seed expression has no shader form \u2014 the folded seed is spliced at every draw site of the frame, so it would be recomputed per draw. Use a compile-time constant seed (host-identical stream) or a single shader-supplied symbol (its own stream).");let a=t.var(s);if(a!==void 0)throw rt(t).varNames?.has(s)?new Error(`Could not compile \`WithRandomSeed(${s}, \u2026)\`: a seed supplied through \`vars\` (\`${s}\` \u2192 \`${a}\`) is the HOST-UNIFORM row of the seed ABI, which is not implemented: the host folds an f64 seed with \`foldSeed\` into TWO words, while a shader can only reinterpret the f32 bits it receives (\`seedHi = 0u\`), so the shader would silently draw a DIFFERENT stream than the host. Use either a compile-time literal seed \u2014 the host-identical stream \u2014 or an explicitly invocation-varying seed symbol that is NOT in \`vars\`, which owns its own stream.`):new Error(`Could not compile \`WithRandomSeed(${s}, \u2026)\`: the seed resolves to the shader constant \`${a}\`, which the seed ABI cannot fold. Use a compile-time numeric or string seed.`);let l=n(o).trim();return r==="wgsl"?`vec2<u32>(bitcast<u32>(${l}), 0u)`:`uvec2(floatBitsToUint(${l}), 0u)`}function gr(e,n,t,r,o){let i=e[0];if(!_(i))return n(i);let s=i.ops;if(s.length===0)return n(i);let a=s.length,l=s[0],u=_(l)?l.nops:0;if(u===1&&s.every(f=>_(f)&&f.nops===1)){let f=s.map(c=>n(_(c)?c.ops[0]:c));return a>=2&&a<=4?`${t(a)}(${f.join(", ")})`:(it("Matrix",a),`${o(a)}(${f.join(", ")})`)}if(a===u&&a>=2&&a<=4&&s.every(f=>_(f)&&f.nops===u)){let f=[];for(let c=0;c<u;c++){let m=s.map(d=>n(_(d)?d.ops[c]:d));f.push(`${t(a)}(${m.join(", ")})`)}return`${r(a)}(${f.join(", ")})`}return n(i)}var Xf=`
float _gpu_gamma(float z) {
  const float PI = 3.14159265358979;
  // Gamma has a pole at every non-positive integer, and the reflection
  // formula below cannot see it: sin(PI * z) is not exactly 0 there in
  // floating point, so Gamma(-2.0) came back as a large finite number. The
  // interpreter answers the undirected infinity at a pole; its float
  // projection is Infinity (pole-encoding ruling 2026-08-28 \u2014 the magnitude
  // survives, the missing direction does not). The lower bound keeps
  // -Infinity out of the guard: it satisfies z == floor(z) but is not a
  // pole, and Gamma(-Infinity) is NaN in the interpreter's numeric lane.
  if (z <= 0.0 && z == floor(z) && z >= -3.4028234663852886e38) return _gpu_inf();
  // Gamma(+Infinity) is +Infinity; the Lanczos sum below gives NaN for it.
  if (z > 3.4028234663852886e38) return z;
  float w = z;
  if (z < 0.5) w = 1.0 - z;
  w -= 1.0;
  float x = 0.99999999999980993;
  x += 676.5203681218851 / (w + 1.0);
  x += -1259.1392167224028 / (w + 2.0);
  x += 771.32342877765313 / (w + 3.0);
  x += -176.61502916214059 / (w + 4.0);
  x += 12.507343278686905 / (w + 5.0);
  x += -0.13857109526572012 / (w + 6.0);
  x += 9.9843695780195716e-6 / (w + 7.0);
  x += 1.5056327351493116e-7 / (w + 8.0);
  float t = w + 7.5;
  float g = sqrt(2.0 * PI) * pow(t, w + 0.5) * exp(-t) * x;
  if (z < 0.5) return PI / (sin(PI * z) * g);
  return g;
}

float _gpu_gammaln(float z) {
  const float PI = 3.14159265358979;
  // ln|Gamma(z)|, as the interpreter answers on the real axis: +Infinity at
  // a pole (a non-positive integer), and the reflection formula
  // ln(PI) - ln|sin(PI z)| - lnGamma(1 - z) for z < 0. |sin(PI z)| is
  // sin(PI fract(z)); the product PI z loses its fraction for a large |z|.
  if (z <= 0.0 && z == floor(z) && z >= -3.4028234663852886e38) return _gpu_inf();
  if (z < 0.0) {
    float w = 1.0 - z;
    float w3 = w * w * w;
    float lw = w * log(w) - w - 0.5 * log(w)
      + 0.5 * log(2.0 * PI)
      + 1.0 / (12.0 * w)
      - 1.0 / (360.0 * w3)
      + 1.0 / (1260.0 * w3 * w * w);
    return log(PI) - log(sin(PI * (z - floor(z)))) - lw;
  }
  float z3 = z * z * z;
  return z * log(z) - z - 0.5 * log(z)
    + 0.5 * log(2.0 * PI)
    + 1.0 / (12.0 * z)
    - 1.0 / (360.0 * z3)
    + 1.0 / (1260.0 * z3 * z * z);
}
`,Jf=`
fn _gpu_gamma(z: f32) -> f32 {
  let PI = 3.14159265358979;
  // See the GLSL preamble: a non-positive integer is a pole the reflection
  // formula misses; the pole answers the float projection of the undirected
  // infinity, which is +Infinity (pole-encoding ruling 2026-08-28), from the
  // WGSL _gpu_inf() helper (GPU_INF_PREAMBLE_WGSL). The lower
  // bound keeps -Infinity out of the guard (it is not a pole). (No
  // backticks in this comment: it lives inside a TypeScript template
  // literal, which one would terminate.)
  if (z <= 0.0 && z == floor(z) && z >= -3.4028234663852886e38) { return _gpu_inf(); }
  // Gamma(+Infinity) is +Infinity; the Lanczos sum below gives NaN for it.
  if (z > 3.4028234663852886e38) { return z; }
  var w = z;
  if (z < 0.5) { w = 1.0 - z; }
  w = w - 1.0;
  var x = 0.99999999999980993;
  x = x + 676.5203681218851 / (w + 1.0);
  x = x + -1259.1392167224028 / (w + 2.0);
  x = x + 771.32342877765313 / (w + 3.0);
  x = x + -176.61502916214059 / (w + 4.0);
  x = x + 12.507343278686905 / (w + 5.0);
  x = x + -0.13857109526572012 / (w + 6.0);
  x = x + 9.9843695780195716e-6 / (w + 7.0);
  x = x + 1.5056327351493116e-7 / (w + 8.0);
  let t = w + 7.5;
  let g = sqrt(2.0 * PI) * pow(t, w + 0.5) * exp(-t) * x;
  if (z < 0.5) { return PI / (sin(PI * z) * g); }
  return g;
}

fn _gpu_gammaln(z: f32) -> f32 {
  let PI = 3.14159265358979;
  // See the GLSL preamble: ln|Gamma(z)|, +Infinity at a pole, reflection for
  // z < 0.
  if (z <= 0.0 && z == floor(z) && z >= -3.4028234663852886e38) { return _gpu_inf(); }
  if (z < 0.0) {
    let w = 1.0 - z;
    let w3 = w * w * w;
    let lw = w * log(w) - w - 0.5 * log(w)
      + 0.5 * log(2.0 * PI)
      + 1.0 / (12.0 * w)
      - 1.0 / (360.0 * w3)
      + 1.0 / (1260.0 * w3 * w * w);
    return log(PI) - log(sin(PI * (z - floor(z)))) - lw;
  }
  let z3 = z * z * z;
  return z * log(z) - z - 0.5 * log(z)
    + 0.5 * log(2.0 * PI)
    + 1.0 / (12.0 * z)
    - 1.0 / (360.0 * z3)
    + 1.0 / (1260.0 * z3 * z * z);
}
`,Qf=`
float _gpu_digamma(float x) {
  const float PI = 3.14159265358979;
  // A pole (a non-positive integer) answers the float projection of the
  // interpreter's undirected infinity, +Infinity, as _gpu_gamma does. The
  // lower bound keeps -inf out: it satisfies x == floor(x), and the
  // interpreter answers NaN there.
  if (x <= 0.0 && x == floor(x))
    return x >= -3.4028234663852886e38 ? _gpu_inf() : _gpu_nan();
  float result = 0.0;
  float z = x;
  if (x < 0.0) {
    // cot(PI x) = cot(PI r) with r = x - round(x), which is exact: the
    // product PI x keeps only an absolute accuracy next to an integer.
    float r = x - floor(x + 0.5);
    result = -PI / tan(PI * r);
    z = 1.0 - x;
  }
  for (int k = 0; k < 6; k++) {
    if (z >= 6.0) break;
    result -= 1.0 / z;
    z += 1.0;
  }
  float z2 = 1.0 / (z * z);
  return result + (log(z) - 0.5 / z -
    z2 * (1.0 / 12.0 - z2 * (1.0 / 120.0 - z2 * (1.0 / 252.0 - z2 / 240.0))));
}

float _gpu_trigamma(float x) {
  const float PI = 3.14159265358979;
  if (x <= 0.0 && x == floor(x)) // a pole, and -inf: see _gpu_digamma
    return x >= -3.4028234663852886e38 ? _gpu_inf() : _gpu_nan();
  float result = 0.0;
  float sgn = 1.0;
  float z = x;
  if (x < 0.0) {
    float sr = sin(PI * (x - floor(x + 0.5)));
    result = PI * PI / (sr * sr);
    sgn = -1.0;
    z = 1.0 - x;
  }
  float t = 0.0;
  for (int k = 0; k < 6; k++) {
    if (z >= 6.0) break;
    t += 1.0 / (z * z);
    z += 1.0;
  }
  float z2 = 1.0 / (z * z);
  t += 1.0 / z + 0.5 * z2 +
    z2 / z * (1.0 / 6.0 - z2 * (1.0 / 30.0 - z2 * (1.0 / 42.0 - z2 / 30.0)));
  return result + sgn * t;
}

float _gpu_polygamma(float n, float x) {
  if (n == 0.0) return _gpu_digamma(x);
  if (n == 1.0) return _gpu_trigamma(x);
  if (n != floor(n) || n < 0.0 || n > 24.0) return _gpu_nan();
  if (x <= 0.0 && x == floor(x)) // a pole, and -inf: see _gpu_digamma
    return x >= -3.4028234663852886e38 ? _gpu_inf() : _gpu_nan();
  if (x < -4096.0) return _gpu_nan(); // one term per unit of |x|
  if (x > 3.4e38) return 0.0; // +inf
  float fact = 1.0;
  for (int j = 2; j <= 24; j++) {
    if (float(j) > n) break;
    fact *= float(j);
  }
  float lf = log(fact);
  float n1 = n + 1.0;
  // With an odd power n + 1, a term at a negative z is negative.
  bool oddPower = mod(n1, 2.0) == 1.0;
  float sum = 0.0;
  float mag = 0.0;
  float xmax = 0.0;
  float z = x;
  for (int k = 0; k < 4132; k++) {
    if (z >= n + 10.0) break;
    float e = lf - n1 * log(abs(z));
    float t = exp(e);
    sum += (z < 0.0 && oddPower) ? -t : t;
    mag += t;
    xmax = max(xmax, abs(e));
    z += 1.0;
  }
  // The asymptotic series of the double kernel, from a = n!/z^(n+1):
  // (n-1)!/z^n + n!/(2 z^(n+1)) + sum B_2k (2k+n-1)!/((2k)! z^(2k+n)).
  float a = exp(lf - n1 * log(z));
  float tail = a * z / n + 0.5 * a;
  float f = a * n1 / (2.0 * z);
  float b[10] = float[10](
    1.0 / 6.0, -1.0 / 30.0, 1.0 / 42.0, -1.0 / 30.0, 5.0 / 66.0,
    -691.0 / 2730.0, 7.0 / 6.0, -3617.0 / 510.0, 43867.0 / 798.0,
    -174611.0 / 330.0
  );
  float prev = 3.0e38;
  for (int k = 1; k <= 10; k++) {
    float term = b[k - 1] * f;
    if (abs(term) >= prev) break;
    tail += term;
    prev = abs(term);
    float m = float(2 * k);
    f = f * (m + n) * (m + n + 1.0) / ((m + 1.0) * (m + 2.0) * z * z);
  }
  float res = sum + tail;
  // 500 = 3e-5 / 6e-8: the terms of both signs cancel where res is small
  // against their sizes. The ratio, not a product, so that nothing
  // overflows next to f32's largest value.
  if (x < 0.0 && oddPower && !((mag + abs(tail)) / abs(res) <= 500.0 / (6.0 + xmax)))
    return _gpu_nan();
  return mod(n, 2.0) == 0.0 ? -res : res;
}
`,ec=`
fn _gpu_digamma(x: f32) -> f32 {
  let PI = 3.14159265358979;
  // See the GLSL preamble: +Infinity at a pole, NaN at -inf.
  if (x <= 0.0 && x == floor(x)) {
    return select(_gpu_nan(), _gpu_inf(), x >= -3.4028234663852886e38);
  }
  var result: f32 = 0.0;
  var z: f32 = x;
  if (x < 0.0) {
    let r = x - floor(x + 0.5);
    result = -PI / tan(PI * r);
    z = 1.0 - x;
  }
  for (var k: i32 = 0; k < 6; k = k + 1) {
    if (z >= 6.0) { break; }
    result = result - 1.0 / z;
    z = z + 1.0;
  }
  let z2 = 1.0 / (z * z);
  return result + (log(z) - 0.5 / z -
    z2 * (1.0 / 12.0 - z2 * (1.0 / 120.0 - z2 * (1.0 / 252.0 - z2 / 240.0))));
}

fn _gpu_trigamma(x: f32) -> f32 {
  let PI = 3.14159265358979;
  if (x <= 0.0 && x == floor(x)) { // a pole, and -inf: see _gpu_digamma
    return select(_gpu_nan(), _gpu_inf(), x >= -3.4028234663852886e38);
  }
  var result: f32 = 0.0;
  var sgn: f32 = 1.0;
  var z: f32 = x;
  if (x < 0.0) {
    let sr = sin(PI * (x - floor(x + 0.5)));
    result = PI * PI / (sr * sr);
    sgn = -1.0;
    z = 1.0 - x;
  }
  var t: f32 = 0.0;
  for (var k: i32 = 0; k < 6; k = k + 1) {
    if (z >= 6.0) { break; }
    t = t + 1.0 / (z * z);
    z = z + 1.0;
  }
  let z2 = 1.0 / (z * z);
  t = t + (1.0 / z + 0.5 * z2 +
    z2 / z * (1.0 / 6.0 - z2 * (1.0 / 30.0 - z2 * (1.0 / 42.0 - z2 / 30.0))));
  return result + sgn * t;
}

fn _gpu_polygamma(n: f32, x: f32) -> f32 {
  if (n == 0.0) { return _gpu_digamma(x); }
  if (n == 1.0) { return _gpu_trigamma(x); }
  if (n != floor(n) || n < 0.0 || n > 24.0) { return _gpu_nan(); }
  if (x <= 0.0 && x == floor(x)) { // a pole, and -inf: see _gpu_digamma
    return select(_gpu_nan(), _gpu_inf(), x >= -3.4028234663852886e38);
  }
  if (x < -4096.0) { return _gpu_nan(); } // one term per unit of |x|
  if (x > 3.4e38) { return 0.0; } // +inf
  var fact: f32 = 1.0;
  for (var j: i32 = 2; j <= 24; j = j + 1) {
    if (f32(j) > n) { break; }
    fact = fact * f32(j);
  }
  let lf = log(fact);
  let n1 = n + 1.0;
  // With an odd power n + 1, a term at a negative z is negative.
  let oddPower = (n1 % 2.0) == 1.0;
  var sum: f32 = 0.0;
  var mag: f32 = 0.0;
  var xmax: f32 = 0.0;
  var z: f32 = x;
  for (var k: i32 = 0; k < 4132; k = k + 1) {
    if (z >= n + 10.0) { break; }
    let e = lf - n1 * log(abs(z));
    let t = exp(e);
    sum = sum + select(t, -t, z < 0.0 && oddPower);
    mag = mag + t;
    xmax = max(xmax, abs(e));
    z = z + 1.0;
  }
  // See the GLSL preamble: the asymptotic series from a = n!/z^(n+1).
  let a = exp(lf - n1 * log(z));
  var tail: f32 = a * z / n + 0.5 * a;
  var f: f32 = a * n1 / (2.0 * z);
  let b = array<f32, 10>(
    1.0 / 6.0, -1.0 / 30.0, 1.0 / 42.0, -1.0 / 30.0, 5.0 / 66.0,
    -691.0 / 2730.0, 7.0 / 6.0, -3617.0 / 510.0, 43867.0 / 798.0,
    -174611.0 / 330.0
  );
  var prev: f32 = 3.0e38;
  for (var k: i32 = 1; k <= 10; k = k + 1) {
    let term = b[k - 1] * f;
    if (abs(term) >= prev) { break; }
    tail = tail + term;
    prev = abs(term);
    let m = f32(2 * k);
    f = f * (m + n) * (m + n + 1.0) / ((m + 1.0) * (m + 2.0) * z * z);
  }
  let res = sum + tail;
  // See the GLSL preamble: 500 = 3e-5 / 6e-8, as a ratio.
  if (x < 0.0 && oddPower && !((mag + abs(tail)) / abs(res) <= 500.0 / (6.0 + xmax))) {
    return _gpu_nan();
  }
  return select(res, -res, (n % 2.0) == 0.0);
}
`,nc=`
float _gpu_zeta_pow(float x, float e) {
  if (x >= 0.0) return pow(x, e);
  if (e != floor(e)) return _gpu_nan();
  float r = pow(-x, e);
  if (mod(abs(e), 2.0) == 1.0) return -r;
  return r;
}

float _gpu_hurwitz_zeta_em(float s, float a, float sm1) {
  int n = int(ceil(15.0 - a));
  if (n < 0) n = 0;
  float sum = 0.0;
  float z = a;
  for (int k = 0; k < n; k++) {
    sum += _gpu_zeta_pow(z, -s);
    z += 1.0;
  }
  // Tail: closed-form integral + half-term (DLMF 25.11.9). The integral
  // term is the pole at s = 1: it uses sm1 = s - 1 as the caller knows it.
  sum += pow(z, -sm1) / sm1 + 0.5 * pow(z, -s);
  // Bernoulli correction series, same ten B_2j as BERNOULLI_2K
  // (special-functions.ts); u carries the term divided by B_2j.
  float b[10] = float[10](
    1.0 / 6.0, -1.0 / 30.0, 1.0 / 42.0, -1.0 / 30.0, 5.0 / 66.0,
    -691.0 / 2730.0, 7.0 / 6.0, -3617.0 / 510.0, 43867.0 / 798.0,
    -174611.0 / 330.0
  );
  float u = (s / 2.0) * pow(z, -(s + 1.0));
  float prevAbs = 3.0e38;
  for (int j = 1; j <= 10; j++) {
    float term = u * b[j - 1];
    if (abs(term) >= prevAbs) break;
    sum += term;
    prevAbs = abs(term);
    float m = float(2 * j);
    u = u * (s + m - 1.0) * (s + m) / ((m + 1.0) * (m + 2.0) * z * z);
  }
  return sum;
}

// Gamma(x) / (2 pi)^x for x >= 1, as vec2(value, error estimate in units of
// the f32 rounding error 6e-8). Stirling's series after a shift to y >= 8:
// (y/(2 pi e))^y sqrt(2 pi/y) e^corr, divided by x (x+1) ... (y-1) and
// multiplied by (2 pi)^(y-x). Neither Gamma(x) nor (2 pi)^x is formed (they
// overflow f32 near x = 35 and x = 48), and the largest pow argument is
// about y log2(y/(2 pi e)), 15 at x = 25.5, where the Lanczos _gpu_gamma
// calls pow with an argument of about 126, and 122 at x = 64, the end of
// the range _gpu_riemann_zeta uses.
vec2 _gpu_zeta_gamma_2pi(float x) {
  const float PI = 3.14159265358979;
  float p = 1.0;
  float y = x;
  for (int k = 0; k < 8; k++) {
    if (y >= 8.0) break;
    p *= y;
    y += 1.0;
  }
  float y2 = y * y;
  float corr = (1.0 / 12.0 - (1.0 / 360.0 - 1.0 / (1260.0 * y2)) / y2) / y;
  float base = y / 17.079468445347132; // y / (2 pi e)
  float v = pow(base, y) * sqrt(2.0 * PI / y) * (exp(corr) / p) *
    pow(2.0 * PI, y - x);
  return vec2(v, abs(v) * (12.0 + abs(y * log2(base)) + y));
}

// zeta(s), with sm1 = s - 1 passed by a caller that knows it more exactly
// than s - 1.0 can recover it from a rounded s.
float _gpu_riemann_zeta(float s, float sm1) {
  const float PI = 3.14159265358979;
  if (sm1 == 0.0) return _gpu_inf(); // pole
  if (s == 0.0) return -0.5;
  if (s < 0.0) {
    if (s == floor(s) && mod(s, 2.0) == 0.0) return 0.0; // trivial zero
    // Below s = -63 the f32 error passes 3e-5 in an f32 model whose log2 is
    // 2.5 ulp off, and near s = -64.8 pow(y / (2 pi e), y) overflows.
    if (s < -63.0) return _gpu_nan();
    // sin(PI s/2) = (-1)^n sin(PI (s/2 - n)): s/2 - n is exact, so the
    // sine keeps its relative accuracy next to an even s.
    float hs = s / 2.0;
    float n = floor(hs + 0.5);
    float sinHalfPiS = sin(PI * (hs - n));
    if (mod(n, 2.0) != 0.0) sinHalfPiS = -sinHalfPiS;
    // 1 - s is rounded, but its distance to the pole, -s, is exact.
    float oneMinusS = 1.0 - s;
    // 2^s pi^(s-1) Gamma(1-s) = 2 Gamma(1-s)/(2 pi)^(1-s). From 1 - s = 8
    // on, from Stirling's series: with the Lanczos Gamma, zeta(s) was up to
    // 3.3e-5 off near s = -22 in an f32 model whose log2 is 2.5 ulp off.
    if (oneMinusS >= 8.0)
      return 2.0 * _gpu_zeta_gamma_2pi(oneMinusS).x * sinHalfPiS *
        _gpu_hurwitz_zeta_em(oneMinusS, 1.0, -s);
    return pow(2.0, s) * pow(PI, s - 1.0) * sinHalfPiS *
      _gpu_gamma(oneMinusS) * _gpu_hurwitz_zeta_em(oneMinusS, 1.0, -s);
  }
  return _gpu_hurwitz_zeta_em(s, 1.0, sm1);
}

float _gpu_zeta(float s) {
  return _gpu_riemann_zeta(s, s - 1.0);
}

// zeta(s, 1+h) = sum C(-s,k) h^k zeta(s+k), |h| < 1 \u2014 no cancellation,
// since each zeta(s+k) reflects to Re >= 0. See zetaNearOneComplex. The
// stop tolerance is near the f32 epsilon (1.2e-7), and 100 terms reach it
// for every s >= -24.5. Below, the series answers NaN: with _gpu_zeta
// defined down to s = -63, 46 of 1500 values of zeta(s, a) for s from -63.5
// to -24.5 were more than 3e-5 off.
float _gpu_zeta_near_one(float s, float h) {
  if (s < -24.5) return _gpu_nan();
  float sum = _gpu_zeta(s);
  float c = 1.0;
  float hk = 1.0;
  float largest = abs(sum);
  int small = 0;
  for (int k = 1; k < 100; k++) {
    hk *= h;
    if (hk == 0.0) break;
    // f = 1 - k - s is exact when s is near 1 - k, and s + k - 1 = -f is
    // then the exact distance from s + k to the pole of zeta.
    float f = float(1 - k) - s;
    if (f == 0.0) return sum + c * hk * (-1.0 / float(k));
    c = c * f / float(k);
    float term = c * hk * _gpu_riemann_zeta(s + float(k), -f);
    sum += term;
    float size = abs(term);
    largest = max(largest, size);
    if (size <= 1e-7 * largest) {
      if (++small == 2) break;
    } else small = 0;
  }
  return sum;
}

// 1 - e^(-y) for y >= 0, without the cancellation of 1.0 - exp(-y) at a
// small y (a Taylor polynomial below y = 0.25).
float _gpu_zeta_em1(float y) {
  if (y < 0.25) {
    float r = 1.0 - y / 7.0;
    r = 1.0 - y / 6.0 * r;
    r = 1.0 - y / 5.0 * r;
    r = 1.0 - y / 4.0 * r;
    r = 1.0 - y / 3.0 * r;
    r = 1.0 - y / 2.0 * r;
    return y * r;
  }
  return 1.0 - exp(-y);
}

// zeta(s, b) for 0 < b <= 1 and s < 1 by Hermite's integral (DLMF
// 25.11.29): b^(-s)/2 + b^(1-s)/(s-1) plus
// 2 int_0^inf sin(s atan(t/b)) (b^2 + t^2)^(-s/2) / (e^(2 pi t) - 1) dt.
// The two closed terms are one product, b^(-s) (s - 1 + 2b) / (2 (s - 1)):
// 2b - 1 is exact for b >= 1/4, so the factor s + (2b - 1) has a single
// rounding, relative to itself, where the two terms cancel (at s = 1/2,
// b = 0.3 they are 0.91 and -1.10 and the value is 0.011). The integrand is formed
// in one exp, so that a large -s does not overflow before e^(-2 pi t)
// applies. 8-point Gauss-Legendre panels, b/2 wide from t = 0 and doubling
// up to 1 wide (the integrand varies on the scale b next to t = 0, and has
// poles at t = +-i), until the panel mean is below 1e-9 of the largest one
// past the peak of the envelope at t = -s/(2 pi). Returns vec2(value, error
// estimate in units of the f32 rounding error 6e-8): the rounding of the
// closed product and, for each node, of its exp argument, of the log of
// b^2 + t^2 (times s/2), and of the sine argument s atan(t/b). vec2(0,
// 3e38) when 40 panels do not reach the stopping test (b >= 2^-10 takes
// at most 17 on s from -3 to 1).
vec2 _gpu_zeta_hermite(float s, float b) {
  const float PI = 3.14159265358979;
  const float gx[4] = float[4](0.1834346424956498, 0.5255324099163290,
    0.7966664774136267, 0.9602898564975363);
  const float gw[4] = float[4](0.3626837833783620, 0.3137066458778873,
    0.2223810344533745, 0.1012285362903763);
  float k = pow(b, -s) / (2.0 * (s - 1.0));
  // max() keeps a fast-math compiler from reassociating the sum into
  // (s + 2b) - 1, which loses s next to s = 0 (6.7% off at s = -1e-6,
  // b = 1/2 on an Apple GPU, where 2b - 1 = 0).
  float c = s + max(2.0 * b - 1.0, -1.0);
  float closed = k * c;
  float err = abs(k) * (abs(c) + (b < 0.25 ? 1.0 : 0.0)) +
    abs(closed) * (4.0 + abs(s * log2(b)));
  float b2 = b * b;
  float tPeak = max(0.0, -s / (2.0 * PI));
  float sum = 0.0;
  float largest = 0.0;
  float x = 0.0;
  bool done = false;
  for (int p = 0; p < 40; p++) {
    float w = x == 0.0 ? 0.5 * b : min(x, 1.0);
    float cc = x + 0.5 * w;
    float r = 0.5 * w;
    float size = 0.0;
    for (int i = 0; i < 4; i++) {
      for (int j = 0; j < 2; j++) {
        float t = cc + (j == 0 ? -r : r) * gx[i];
        float y = 2.0 * PI * t;
        float lr = log(b2 + t * t);
        float ex = -0.5 * s * lr - y - log(_gpu_zeta_em1(y));
        float th = s * atan(t / b);
        float q = r * gw[i] * exp(ex);
        float f = q * sin(th);
        sum += f;
        size += abs(f);
        err += 2.0 * (abs(f) * (6.0 + abs(ex) + 0.5 * abs(s) * (2.0 + abs(lr))) +
          q * abs(th));
      }
    }
    x += w;
    float mean = size / w;
    largest = max(largest, mean);
    if (x > tPeak && x >= 1.0 && mean <= 1e-9 * largest) {
      done = true;
      break;
    }
  }
  if (!done) return vec2(0.0, 3.0e38);
  float v = closed + 2.0 * sum;
  return vec2(v, err + 2.0 * abs(v));
}

// zeta(s, b) for s <= -3 and 0 < b <= 1 by Hurwitz's formula, the Fourier
// series in the base point:
// 2 Gamma(1-s)/(2 pi)^(1-s) sum_k sin(2 pi k b + pi s/2) / k^(1-s). Its
// terms fall like k^(s-1) and do not cancel; 64 of them leave a tail below
// 64^s/(-s) of the prefactor, 1.3e-6 at s = -3. The sine argument is
// reduced exactly: pi (2 frac(k b) + (s/2 mod 2)), minus its nearest
// integer n, with the sign (-1)^n. Returns vec2(value, error estimate in
// units of 6e-8): the pow roundings, the rounding of the argument (about
// 20 k units of each term's size), the tail and the prefactor.
vec2 _gpu_zeta_fourier(float s, float b) {
  const float PI = 3.14159265358979;
  vec2 g = _gpu_zeta_gamma_2pi(1.0 - s);
  float hs = s / 2.0;
  float ps = hs - 2.0 * floor(hs / 2.0);
  float sum = 0.0;
  float err = 0.0;
  for (int k = 1; k <= 64; k++) {
    float fk = float(k);
    float kb = fk * b;
    float ph = 2.0 * (kb - floor(kb)) + ps;
    float n = floor(ph + 0.5);
    float sn = sin(PI * (ph - n));
    if (mod(n, 2.0) != 0.0) sn = -sn;
    float pk = pow(fk, s - 1.0);
    float t = sn * pk;
    sum += t;
    err += abs(t) * (4.0 + abs((s - 1.0) * log2(fk))) + pk * (fk * 20.0);
  }
  float tail = pow(64.0, s) / (-s);
  return vec2(2.0 * g.x * sum,
    2.0 * g.x * (err + tail / 6.0e-8 + 2.0 * abs(sum)) + 2.0 * g.y * abs(sum));
}

// zeta(s, a) for a > 0 and -24.5 <= s < 1 from the base point b = a - m in
// (0, 1]: zeta(s, a) = zeta(s, b) - sum_{j<m} (b + j)^(-s). zeta(s, b) is
// the Fourier series for s <= -3, the Taylor series in b for b < 2^-10
// (zeta(s, b) = b^(-s) + zeta(s, 1 + b), where Hermite's integral would
// need more panels), and Hermite's integral otherwise. NaN when the error
// estimate exceeds 3e-5 of the value (next to a zero of zeta(s, a)).
float _gpu_zeta_shifted(float s, float a) {
  float m = ceil(a) - 1.0;
  float b = a - m;
  vec2 r;
  if (s <= -3.0) r = _gpu_zeta_fourier(s, b);
  else if (b < 0.0009765625) {
    float t = pow(b, -s);
    float zn = _gpu_zeta_near_one(s, b);
    r = vec2(zn + t, 64.0 * abs(zn) + abs(t) * (3.0 + abs(s * log2(b))));
  } else r = _gpu_zeta_hermite(s, b);
  float z = r.x;
  float err = r.y;
  // m <= 123: the caller keeps a below 4 * edge <= 124.
  for (int j = 0; j < 128; j++) {
    if (float(j) >= m) break;
    float br = b + float(j);
    float t = pow(br, -s);
    z -= t;
    err += abs(t) * (3.0 + float(j) + abs(s * log2(br)));
  }
  err += abs(z) * (m + 2.0);
  if (!(6.0e-8 * err <= 3.0e-5 * abs(z))) return _gpu_nan();
  return z;
}

float _gpu_hurwitz_zeta(float s, float a) {
  if (s == 1.0) return _gpu_inf(); // pole, every base point a
  if (s == 0.0) return 0.5 - a;
  if (a == 1.0) return _gpu_zeta(s);
  bool aNonposInt = a <= 0.0 && a == floor(a);
  if (aNonposInt && s > 0.0) return _gpu_inf(); // (a+k) = 0 term diverges
  if (a < 0.0 && s != floor(s)) return _gpu_nan(); // complex value
  if (a < -1.0e6) return _gpu_nan();
  float edge = max(12.0, ceil(abs(s)) + 6.0);
  // Where the Euler-Maclaurin terms cancel: s < 1/2 short of a = 4 * edge,
  // and 1/2 <= s < 1 below a = 1 (the zeros of zeta(s, a) there).
  if (a > 0.0 && s >= -24.5 && s < 1.0 && (s < 0.5 ? a < 4.0 * edge : a < 1.0))
    return _gpu_zeta_shifted(s, a);
  if (s >= 0.0 || a >= 4.0 * edge) return _gpu_hurwitz_zeta_em(s, a, s - 1.0);
  // Shift a to 1+h (|h| <= 3/4) and expand in Taylor series \u2014 see
  // hurwitzZetaComplex's doc comment for why EM alone cancels here.
  float m = floor(a - 0.5);
  float h = a - m - 1.0;
  if (abs(h) > 0.75) return _gpu_hurwitz_zeta_em(s, a, s - 1.0);
  float z = _gpu_zeta_near_one(s, h);
  int steps = int(abs(m));
  for (int j = 0; j < steps; j++) {
    float br = m > 0.0 ? h + 1.0 + float(j) : a + float(j);
    if (br == 0.0) continue;
    float t = _gpu_zeta_pow(br, -s);
    z = m > 0.0 ? z - t : z + t;
  }
  return z;
}

float _gpu_zeta_generalized(float s, float a) {
  if (s == 1.0) return _gpu_inf(); // pole, every base point a
  if (a > 0.0) return _gpu_hurwitz_zeta(s, a);
  if (a == 0.0) return _gpu_zeta(s);
  if (a < -1.0e6) return _gpu_nan();
  int n = int(ceil(-a));
  float sum = 0.0;
  for (int k = 0; k < n; k++) sum += pow(-(a + float(k)), -s);
  float cur = a + float(n);
  if (cur == 0.0) cur = 1.0; // drop the (k + a) = 0 term
  return sum + _gpu_hurwitz_zeta(s, cur);
}
`,tc=`
fn _gpu_zeta_pow(x: f32, e: f32) -> f32 {
  if (x >= 0.0) { return pow(x, e); }
  if (e != floor(e)) { return _gpu_nan(); }
  let r = pow(-x, e);
  if ((abs(e) % 2.0) == 1.0) { return -r; }
  return r;
}

fn _gpu_hurwitz_zeta_em(s: f32, a: f32, sm1: f32) -> f32 {
  var n: i32 = i32(ceil(15.0 - a));
  if (n < 0) { n = 0; }
  var sum: f32 = 0.0;
  var z: f32 = a;
  for (var k: i32 = 0; k < n; k = k + 1) {
    sum = sum + _gpu_zeta_pow(z, -s);
    z = z + 1.0;
  }
  // The integral term is the pole at s = 1: it uses sm1 = s - 1 as the
  // caller knows it.
  sum = sum + pow(z, -sm1) / sm1 + 0.5 * pow(z, -s);
  let b = array<f32, 10>(
    1.0 / 6.0, -1.0 / 30.0, 1.0 / 42.0, -1.0 / 30.0, 5.0 / 66.0,
    -691.0 / 2730.0, 7.0 / 6.0, -3617.0 / 510.0, 43867.0 / 798.0,
    -174611.0 / 330.0
  );
  var u: f32 = (s / 2.0) * pow(z, -(s + 1.0));
  var prevAbs: f32 = 3.0e38;
  for (var j: i32 = 1; j <= 10; j = j + 1) {
    let term = u * b[j - 1];
    if (abs(term) >= prevAbs) { break; }
    sum = sum + term;
    prevAbs = abs(term);
    let m = f32(2 * j);
    u = u * (s + m - 1.0) * (s + m) / ((m + 1.0) * (m + 2.0) * z * z);
  }
  return sum;
}

// Gamma(x) / (2 pi)^x for x >= 1, with an error estimate, from Stirling's
// series \u2014 see GLSL's _gpu_zeta_gamma_2pi.
fn _gpu_zeta_gamma_2pi(x: f32) -> vec2<f32> {
  let PI = 3.14159265358979;
  var p: f32 = 1.0;
  var y: f32 = x;
  for (var k: i32 = 0; k < 8; k = k + 1) {
    if (y >= 8.0) { break; }
    p = p * y;
    y = y + 1.0;
  }
  let y2 = y * y;
  let corr = (1.0 / 12.0 - (1.0 / 360.0 - 1.0 / (1260.0 * y2)) / y2) / y;
  let base = y / 17.079468445347132; // y / (2 pi e)
  let v = pow(base, y) * sqrt(2.0 * PI / y) * (exp(corr) / p) *
    pow(2.0 * PI, y - x);
  return vec2<f32>(v, abs(v) * (12.0 + abs(y * log2(base)) + y));
}

// zeta(s), with sm1 = s - 1 \u2014 see GLSL's _gpu_riemann_zeta.
fn _gpu_riemann_zeta(s: f32, sm1: f32) -> f32 {
  let PI = 3.14159265358979;
  if (sm1 == 0.0) { return _gpu_inf(); } // pole
  if (s == 0.0) { return -0.5; }
  if (s < 0.0) {
    if (s == floor(s) && (s % 2.0) == 0.0) { return 0.0; } // trivial zero
    if (s < -63.0) { return _gpu_nan(); } // see the GLSL version
    // sin(PI s/2) = (-1)^n sin(PI (s/2 - n)), with s/2 - n exact.
    let hs = s / 2.0;
    let n = floor(hs + 0.5);
    var sinHalfPiS = sin(PI * (hs - n));
    if ((n % 2.0) != 0.0) { sinHalfPiS = -sinHalfPiS; }
    // 1 - s is rounded, but its distance to the pole, -s, is exact.
    let oneMinusS = 1.0 - s;
    // 2 Gamma(1-s)/(2 pi)^(1-s) from Stirling's series from 1 - s = 8 on.
    if (oneMinusS >= 8.0) {
      return 2.0 * _gpu_zeta_gamma_2pi(oneMinusS).x * sinHalfPiS *
        _gpu_hurwitz_zeta_em(oneMinusS, 1.0, -s);
    }
    return pow(2.0, s) * pow(PI, s - 1.0) * sinHalfPiS *
      _gpu_gamma(oneMinusS) * _gpu_hurwitz_zeta_em(oneMinusS, 1.0, -s);
  }
  return _gpu_hurwitz_zeta_em(s, 1.0, sm1);
}

fn _gpu_zeta(s: f32) -> f32 {
  return _gpu_riemann_zeta(s, s - 1.0);
}

// zeta(s, 1+h) = sum C(-s,k) h^k zeta(s+k) \u2014 see GLSL's _gpu_zeta_near_one.
fn _gpu_zeta_near_one(s: f32, h: f32) -> f32 {
  if (s < -24.5) { return _gpu_nan(); } // see the GLSL version
  var sum = _gpu_zeta(s);
  var c = 1.0;
  var hk = 1.0;
  var largest = abs(sum);
  var small = 0;
  for (var k = 1; k < 100; k = k + 1) {
    hk = hk * h;
    if (hk == 0.0) { break; }
    // f = 1 - k - s, exact when s is near 1 - k (see the GLSL version).
    let f = f32(1 - k) - s;
    if (f == 0.0) { return sum + c * hk * (-1.0 / f32(k)); }
    c = c * f / f32(k);
    let term = c * hk * _gpu_riemann_zeta(s + f32(k), -f);
    sum = sum + term;
    let size = abs(term);
    largest = max(largest, size);
    if (size <= 1e-7 * largest) {
      small = small + 1;
      if (small == 2) { break; }
    } else { small = 0; }
  }
  return sum;
}

// 1 - e^(-y) for y >= 0 \u2014 see GLSL's _gpu_zeta_em1.
fn _gpu_zeta_em1(y: f32) -> f32 {
  if (y < 0.25) {
    var r = 1.0 - y / 7.0;
    r = 1.0 - y / 6.0 * r;
    r = 1.0 - y / 5.0 * r;
    r = 1.0 - y / 4.0 * r;
    r = 1.0 - y / 3.0 * r;
    r = 1.0 - y / 2.0 * r;
    return y * r;
  }
  return 1.0 - exp(-y);
}

// zeta(s, b) for 0 < b <= 1 and s < 1 by Hermite's integral, as
// vec2(value, error estimate) \u2014 see GLSL's _gpu_zeta_hermite.
fn _gpu_zeta_hermite(s: f32, b: f32) -> vec2<f32> {
  let PI = 3.14159265358979;
  let gx = array<f32, 4>(0.1834346424956498, 0.5255324099163290,
    0.7966664774136267, 0.9602898564975363);
  let gw = array<f32, 4>(0.3626837833783620, 0.3137066458778873,
    0.2223810344533745, 0.1012285362903763);
  let k = pow(b, -s) / (2.0 * (s - 1.0));
  // max() blocks a fast-math reassociation \u2014 see the GLSL version.
  let c = s + max(2.0 * b - 1.0, -1.0);
  let closed = k * c;
  var lowB: f32 = 0.0;
  if (b < 0.25) { lowB = 1.0; }
  var err = abs(k) * (abs(c) + lowB) + abs(closed) * (4.0 + abs(s * log2(b)));
  let b2 = b * b;
  let tPeak = max(0.0, -s / (2.0 * PI));
  var sum: f32 = 0.0;
  var largest: f32 = 0.0;
  var x: f32 = 0.0;
  var done = false;
  for (var p: i32 = 0; p < 40; p = p + 1) {
    var w: f32 = min(x, 1.0);
    if (x == 0.0) { w = 0.5 * b; }
    let cc = x + 0.5 * w;
    let r = 0.5 * w;
    var size: f32 = 0.0;
    for (var i: i32 = 0; i < 4; i = i + 1) {
      for (var j: i32 = 0; j < 2; j = j + 1) {
        var d = r;
        if (j == 0) { d = -r; }
        let t = cc + d * gx[i];
        let y = 2.0 * PI * t;
        let lr = log(b2 + t * t);
        let ex = -0.5 * s * lr - y - log(_gpu_zeta_em1(y));
        let th = s * atan(t / b);
        let q = r * gw[i] * exp(ex);
        let f = q * sin(th);
        sum = sum + f;
        size = size + abs(f);
        err = err + 2.0 * (abs(f) * (6.0 + abs(ex) + 0.5 * abs(s) * (2.0 + abs(lr))) +
          q * abs(th));
      }
    }
    x = x + w;
    let mean = size / w;
    largest = max(largest, mean);
    if (x > tPeak && x >= 1.0 && mean <= 1e-9 * largest) {
      done = true;
      break;
    }
  }
  if (!done) { return vec2<f32>(0.0, 3.0e38); }
  let v = closed + 2.0 * sum;
  return vec2<f32>(v, err + 2.0 * abs(v));
}

// zeta(s, b) for s <= -3 and 0 < b <= 1 by Hurwitz's formula, as
// vec2(value, error estimate) \u2014 see GLSL's _gpu_zeta_fourier.
fn _gpu_zeta_fourier(s: f32, b: f32) -> vec2<f32> {
  let PI = 3.14159265358979;
  let g = _gpu_zeta_gamma_2pi(1.0 - s);
  let hs = s / 2.0;
  let ps = hs - 2.0 * floor(hs / 2.0);
  var sum: f32 = 0.0;
  var err: f32 = 0.0;
  for (var k: i32 = 1; k <= 64; k = k + 1) {
    let fk = f32(k);
    let kb = fk * b;
    let ph = 2.0 * (kb - floor(kb)) + ps;
    let n = floor(ph + 0.5);
    var sn = sin(PI * (ph - n));
    if ((n % 2.0) != 0.0) { sn = -sn; }
    let pk = pow(fk, s - 1.0);
    let t = sn * pk;
    sum = sum + t;
    err = err + abs(t) * (4.0 + abs((s - 1.0) * log2(fk))) + pk * (fk * 20.0);
  }
  let tail = pow(64.0, s) / (-s);
  return vec2<f32>(2.0 * g.x * sum,
    2.0 * g.x * (err + tail / 6.0e-8 + 2.0 * abs(sum)) + 2.0 * g.y * abs(sum));
}

// zeta(s, a) for a > 0 and -24.5 <= s < 1 from the base point b = a - m
// in (0, 1] \u2014 see GLSL's _gpu_zeta_shifted.
fn _gpu_zeta_shifted(s: f32, a: f32) -> f32 {
  let m = ceil(a) - 1.0;
  let b = a - m;
  var r: vec2<f32>;
  if (s <= -3.0) {
    r = _gpu_zeta_fourier(s, b);
  } else if (b < 0.0009765625) {
    let t = pow(b, -s);
    let zn = _gpu_zeta_near_one(s, b);
    r = vec2<f32>(zn + t, 64.0 * abs(zn) + abs(t) * (3.0 + abs(s * log2(b))));
  } else {
    r = _gpu_zeta_hermite(s, b);
  }
  var z = r.x;
  var err = r.y;
  // m <= 123: the caller keeps a below 4 * edge <= 124.
  for (var j: i32 = 0; j < 128; j = j + 1) {
    if (f32(j) >= m) { break; }
    let br = b + f32(j);
    let t = pow(br, -s);
    z = z - t;
    err = err + abs(t) * (3.0 + f32(j) + abs(s * log2(br)));
  }
  err = err + abs(z) * (m + 2.0);
  if (!(6.0e-8 * err <= 3.0e-5 * abs(z))) { return _gpu_nan(); }
  return z;
}

fn _gpu_hurwitz_zeta(s: f32, a: f32) -> f32 {
  if (s == 1.0) { return _gpu_inf(); } // pole, every base point a
  if (s == 0.0) { return 0.5 - a; }
  if (a == 1.0) { return _gpu_zeta(s); }
  let aNonposInt = a <= 0.0 && a == floor(a);
  if (aNonposInt && s > 0.0) { return _gpu_inf(); } // (a+k) = 0 diverges
  if (a < 0.0 && s != floor(s)) { return _gpu_nan(); } // complex value
  if (a < -1.0e6) { return _gpu_nan(); }
  let edge = max(12.0, ceil(abs(s)) + 6.0);
  // Where the Euler-Maclaurin terms cancel \u2014 see the GLSL version.
  var shifted = false;
  if (s < 0.5) { shifted = a < 4.0 * edge; } else { shifted = a < 1.0; }
  if (a > 0.0 && s >= -24.5 && s < 1.0 && shifted) { return _gpu_zeta_shifted(s, a); }
  if (s >= 0.0 || a >= 4.0 * edge) { return _gpu_hurwitz_zeta_em(s, a, s - 1.0); }
  // Shift a to 1+h (|h| <= 3/4) and expand in Taylor series \u2014 see
  // hurwitzZetaComplex's doc comment for why EM alone cancels here.
  let m = floor(a - 0.5);
  let h = a - m - 1.0;
  if (abs(h) > 0.75) { return _gpu_hurwitz_zeta_em(s, a, s - 1.0); }
  var z = _gpu_zeta_near_one(s, h);
  let steps = i32(abs(m));
  for (var j = 0; j < steps; j = j + 1) {
    var br: f32;
    if (m > 0.0) { br = h + 1.0 + f32(j); } else { br = a + f32(j); }
    if (br == 0.0) { continue; }
    let t = _gpu_zeta_pow(br, -s);
    if (m > 0.0) { z = z - t; } else { z = z + t; }
  }
  return z;
}

fn _gpu_zeta_generalized(s: f32, a: f32) -> f32 {
  if (s == 1.0) { return _gpu_inf(); } // pole, every base point a
  if (a > 0.0) { return _gpu_hurwitz_zeta(s, a); }
  if (a == 0.0) { return _gpu_zeta(s); }
  if (a < -1.0e6) { return _gpu_nan(); }
  let n = i32(ceil(-a));
  var sum: f32 = 0.0;
  for (var k: i32 = 0; k < n; k = k + 1) { sum = sum + pow(-(a + f32(k)), -s); }
  var cur = a + f32(n);
  if (cur == 0.0) { cur = 1.0; } // drop the (k + a) = 0 term
  return sum + _gpu_hurwitz_zeta(s, cur);
}
`,nt=64,be=16,rc=`
vec2 _gpu_lerch_series(float z, float s, float a) {
  int n0 = a < 0.0 ? int(ceil(-a)) : 0;
  float az = abs(z);
  float sum = 0.0;
  float zk = 1.0;
  float prev = 3.0e38;
  // For the error estimate: the terms weighted by the roundings of z^k (k
  // of them), their moduli, and the range of |a + k| (pow(b, -s) is within
  // about 6e-8 (2 + |s log2 b|) relative on a GPU).
  float err = 0.0;
  float sizes = 0.0;
  float bmin = 3.0e38;
  float bmax = 0.0;
  int settled = 0;
  for (int k = 0; k < n0 + 4096; k++) {
    float b = a + float(k);
    float t = (b != 0.0) ? zk * _gpu_zeta_pow(b, -s) : 0.0;
    sum += t;
    float size = abs(t);
    err += size * (2.0 + float(k));
    sizes += size;
    if (b != 0.0) {
      bmin = min(bmin, abs(b));
      bmax = max(bmax, abs(b));
    }
    if (b > 0.0) {
      float rho = max(size / prev, az);
      if (size == 0.0 ||
          (size < prev && rho < 1.0 &&
           size * rho / (1.0 - rho) <= 1e-7 * abs(sum))) {
        settled++;
        if (settled == 3) {
          float lb = max(abs(log2(bmin)), abs(log2(bmax)));
          float bound = 6.0e-8 * (err + sizes * (2.0 + abs(s * lb)));
          if (!(bound <= 3.0e-5 * abs(sum))) return vec2(0.0);
          // A GPU flushes a term below the smallest normal f32 (1.2e-38) to
          // zero. The flushed tail is at most 1.2e-38 / (1 - |z|): decline
          // unless that is below 2^-24 of the sum. (Not rho: after a flushed
          // term, prev can be 0 and rho 0/0.)
          if (abs(sum) * (1.0 - az) < 1.9721523e-31) return vec2(0.0);
          return vec2(sum, 1.0);
        }
      } else {
        settled = 0;
      }
      prev = size;
    }
    zk *= z;
  }
  return vec2(0.0);
}

vec2 _gpu_lerch_euler(float z, float s, float a) {
  int n0 = a <= 0.0 ? int(floor(-a)) + 1 : 0;
  float head = 0.0;
  float zn = 1.0;
  float largest = 0.0;
  for (int k = 0; k < n0; k++) {
    float b = a + float(k);
    float t = (b != 0.0) ? zn * _gpu_zeta_pow(b, -s) : 0.0;
    head += t;
    largest = max(largest, abs(t));
    zn *= z;
  }
  float b0 = a + float(n0);
  float w[${nt+1}];
  int nterm = 0;
  float sum = 0.0;
  float zPow = 1.0;
  int settled = 0;
  for (int k = 0; k < ${nt}; k++) {
    float cur = zPow * pow(b0 + float(k), -s);
    float inc;
    if (k == 0) {
      nterm = 1;
      w[1] = cur;
      inc = 0.5 * cur;
    } else {
      float tmp = w[1];
      w[1] = cur;
      for (int j = 1; j <= nterm - 1; j++) {
        float dum = w[j + 1];
        w[j + 1] = 0.5 * (w[j] + tmp);
        tmp = dum;
      }
      if (nterm >= ${nt}) return vec2(0.0);
      w[nterm + 1] = 0.5 * (w[nterm] + tmp);
      if (abs(w[nterm + 1]) <= abs(w[nterm])) {
        nterm++;
        inc = 0.5 * w[nterm];
      } else {
        inc = w[nterm + 1];
      }
    }
    sum += inc;
    zPow *= z;
    if (k > 4 && abs(inc) <= 1e-7 * abs(sum)) {
      settled++;
      if (settled == 3) {
        // A GPU flushes a term below the smallest normal f32 (1.2e-38) to
        // zero: decline unless the terms the stopping rule reads, down to
        // 1e-7 of the sum, are normal.
        if (abs(sum) < 1.9721523e-31) return vec2(0.0);
        float tail = zn * sum;
        float res = head + tail;
        if (max(largest, abs(tail)) > 100.0 * abs(res)) return vec2(0.0);
        return vec2(res, 1.0);
      }
    } else {
      settled = 0;
    }
  }
  return vec2(0.0);
}

// 1 - e^(-t) for t >= 0, by its Taylor series below 1/4, where
// 1.0 - exp(-t) would cancel.
float _gpu_lerch_em(float t) {
  if (t < 0.25)
    return t * (1.0 - t / 2.0 * (1.0 - t / 3.0 * (1.0 - t / 4.0 *
      (1.0 - t / 5.0 * (1.0 - t / 6.0 * (1.0 - t / 7.0))))));
  return 1.0 - exp(-t);
}

// ln Gamma(s) for s > 0: shift the argument to x >= 8 (ln Gamma(s) =
// ln Gamma(x) - ln(s (s+1) ... (x-1))), then the Stirling series. Within
// about 1e-6 absolute. _gpu_gamma is not used here: its Lanczos sum
// cancels in f32 near s = 0.
float _gpu_lerch_lgamma(float s) {
  float p = 1.0;
  float x = s;
  for (int k = 0; k < 8; k++) {
    if (x >= 8.0) break;
    p *= x;
    x += 1.0;
  }
  float x2 = x * x;
  float corr = (1.0 / 12.0 - (1.0 / 360.0 - 1.0 / (1260.0 * x2)) / x2) / x;
  return (x - 0.5) * log(x) - x + (0.91893853320467274 + corr) - log(p);
}

// 1 / (1 - z e^(-t)) for t >= 0 and z < 1, without cancellation: for
// 0 < z < 1 the denominator is (1 - z) + z (1 - e^(-t)), two terms >= 0.
float _gpu_lerch_g(float z, float t) {
  if (z < 0.0) return 1.0 / (1.0 - z * exp(-t));
  return 1.0 / ((1.0 - z) + z * _gpu_lerch_em(t));
}

// One step of the polynomials P_m(w) = (1 - w)^(m+1) Phi(w, -m, a), in
// place: P_(m+1)(w) = (1 - w)(a P_m + w P_m') + (m + 1) w P_m, that is
// p'_k = (a + k) p_k + (m + 2 - a - k) p_(k-1), from P_0 = 1. It follows from
// Phi(w, -m-1, a) = (a + w d/dw) Phi(w, -m, a). Updated from the top so
// each entry still reads the previous row's values. c holds
// LERCH_MAX_N + 2 entries.
void _gpu_lerch_pstep(inout float c[${be+2}], float a, int m) {
  for (int k = m + 1; k >= 0; k--) {
    float hi = k <= m ? (a + float(k)) * c[k] : 0.0;
    float lo = k >= 1 ? (float(m + 2) - a - float(k)) * c[k - 1] : 0.0;
    c[k] = hi + lo;
  }
}

// Phi(w, -n, a) = v sum_k p_k u^k v^(n-k), v = 1/(1 - w), u = w v, from
// the coefficients of P_n: returns vec2(the sum without its factor v, the
// sum of the moduli of its terms), by Horner in u with the powers of v
// carried along. For w < -1, |u| and |v| are at most 1, so nothing
// overflows. The caller applies the factor v, or folds it into an
// exponent (see _gpu_lerch_integral).
vec2 _gpu_lerch_poly(float c[${be+2}], int n, float u, float v) {
  float au = abs(u);
  float av = abs(v);
  float r = c[n];
  float ra = abs(c[n]);
  float vp = v;
  float avp = av;
  for (int k = n - 1; k >= 0; k--) {
    r = r * u + c[k] * vp;
    ra = ra * au + abs(c[k]) * avp;
    vp *= v;
    avp *= av;
  }
  return vec2(r, ra);
}

// Phi(z, -n, a) for an integer 0 <= n <= LERCH_MAX_N: a rational function
// of z, for every real z != 1 and every a (the (k + a) = 0 term is 0^n = 0,
// dropped as the series drops it). It has no branch cut, so it holds for
// z > 1 too. Returns vec2(value, 1), or vec2(0, 0) when the terms cancel so
// far that the error estimate exceeds 3e-5 of the value (next to a zero of
// Phi); the caller then tries its other methods.
vec2 _gpu_lerch_rational(float z, int n, float a) {
  const float EPS = 6.0e-8;
  float c[${be+2}];
  for (int i = 0; i < ${be+2}; i++) c[i] = 0.0;
  c[0] = 1.0;
  for (int m = 0; m < n; m++) _gpu_lerch_pstep(c, a, m);
  float v = 1.0 / (1.0 - z);
  vec2 q = _gpu_lerch_poly(c, n, z * v, v);
  if (!(EPS * (float(n + 4) * q.y) <= 3.0e-5 * abs(q.x))) return vec2(0.0);
  return vec2(q.x * v, 1.0);
}

// Phi(z,s,a) for real z < 1 (z != 0) and a > 0, from
//   Phi(z,s,a) = 1/Gamma(s) Int_0^inf t^(s-1) e^(-a t) / (1 - z e^(-t)) dt
// for s > 0, whose integrand is positive, so the sum has no cancellation at
// any z. For s <= 0 (not an integer) it integrates by parts n = ceil(-s)
// times first:
//   Phi(z,s,a) = 1/Gamma(s+n) Int_0^inf t^(s+n-1) e^(-a t) R_n(z e^(-t)) dt,
// R_n(w) = Phi(w, -n, a): the n-th derivative in t of
// e^(-a t)/(1 - z e^(-t)) is (-1)^n e^(-a t) R_n(z e^(-t)), and the n signs
// (-1) of the parts cancel it. That integrand is positive for 0 < z < 1
// and changes sign for z < 0, where the error estimate measures the
// cancellation. A negative a (s > 0 is then an integer) is first shifted to
// a + n0 in (0, 1] by Phi(a) = sum_{k<n0} z^k (a+k)^(-s) + z^n0 Phi(a+n0).
// With tau = a t the integral is a^(-(s+n)) times an integral against the
// density tau^(s+n-1) e^(-tau) / Gamma(s+n). Its pieces: [0, e0] in closed
// form from the first two Taylor terms of the integrand's smooth factor,
// R_n(z) and -R_(n+1)(z); [e0, lam] (lam = min(1, 1/a)) in panels of width
// <= 3 in ln t, which resolves the t^(s+n-1) singularity and, for z near 1,
// the pole at t = ln z < 0; then panels in t up to where 1/(1 - z e^(-t))
// has reached 1 (t = ln(-z) + 17 for z < 0) and the density is negligible
// (tau = s + n + 30; for a > 1 and z < 0 the integrand decays like
// e^(-(a-1) t) before that). A linear panel starting at x is at most 2x
// wide (the singularity at t = 0), at most 8/a wide (e^(-a t)), and at most
// max(4/(1 + n/4), 0.6 |x - L|) wide, L = ln|z|: the poles of the integrand
// sit at t = L +- i pi (of order n + 1), so a panel far from the step at L
// may be a fixed fraction of its distance to it, and next to it the panels
// narrow as n grows. So the panel count does not grow with |z|: in
// measurements the whole f32 range (|z| up to 3.4e38) takes at most 22
// panels. Below z = -1 the factor 1/(1 - z e^(-t)) is carried as its log,
// -softplus(L - t), inside the exponent of the density: the factor runs from
// about 1/|z| to 1 and the density e^(-a t) down past e^(-88), so each alone
// can fall under the smallest normal f32, which a GPU flushes to zero (the
// value at z = -3e38 was 3% off), where their product does not. Every panel
// is an 8-point Gauss-Legendre rule, at most 28 panels (224 integrand
// values, each a Horner sum of n + 1 terms); past that it declines.
// Returns vec2(value, 1) or vec2(0, 0) where it cannot vouch for the value:
// the error estimate adds, in units of the f32 rounding error EPS, the
// errors of the shifted terms, of each node (its exp argument, and the
// moduli of the terms of R_n), of the closed-form head, of ln Gamma(s+n)
// and of a^(-(s+n)), and declines above 3e-5 of the value.
vec2 _gpu_lerch_integral(float z, float s, float a) {
  const float EPS = 6.0e-8;
  const float PI = 3.14159265358979;
  const float gx[4] = float[4](0.1834346424956498, 0.5255324099163290,
    0.7966664774136267, 0.9602898564975363);
  const float gw[4] = float[4](0.3626837833783620, 0.3137066458778873,
    0.2223810344533745, 0.1012285362903763);
  int n = s > 0.0 ? 0 : int(ceil(-s));
  float sn = s + float(n);
  int n0 = a < 0.0 ? int(ceil(-a)) : 0;
  float head = 0.0;
  float zk = 1.0;
  float err = 0.0;
  for (int k = 0; k < n0; k++) {
    float bk = a + float(k);
    float t = zk * _gpu_zeta_pow(bk, -s);
    head += t;
    err += abs(t) * (2.0 + float(k) + abs(s * log2(abs(bk))));
    zk *= z;
  }
  a += float(n0);
  float c[${be+2}];
  for (int i = 0; i < ${be+2}; i++) c[i] = 0.0;
  c[0] = 1.0;
  for (int m = 0; m < n; m++) _gpu_lerch_pstep(c, a, m);
  float lg = _gpu_lerch_lgamma(sn);
  float lam = min(1.0, 1.0 / a);
  float delta = z > 0.0 ? -log(z) : PI;
  float e0 = 1e-3 * min(lam, delta);
  float la = log(a);
  float tau0 = a * e0;
  float L = z < 0.0 ? log(-z) : log(z);
  bool big = z < -1.0;
  // With the factor in the exponent, every node also carries e^S,
  // S = min(a, 1) L, the size of the largest nodes (about |z|^(-min(a,1))),
  // so that the nodes of a value near the smallest normal f32 do not flush
  // to zero one by one; the sum is divided by e^S at the end, inside one
  // exp (at z = -1e35 a value of 6e-37 was 0.4% off without it).
  float S = big ? min(a, 1.0) * L : 0.0;
  float lG0 = 0.0;
  float v0h = 1.0 / (1.0 - z);
  float u0 = z * v0h;
  if (big) {
    lG0 = -(L + log(1.0 + exp(-L)));
    v0h = exp(lG0);
    u0 = -exp(L + lG0);
  }
  vec2 f0 = _gpu_lerch_poly(c, n, u0, v0h);
  float c1[${be+2}] = c;
  _gpu_lerch_pstep(c1, a, n);
  vec2 f1 = _gpu_lerch_poly(c1, n + 1, u0, v0h);
  float p0 = big ? exp(sn * log(tau0) - lg + lG0 + S) : exp(sn * log(tau0) - lg) * v0h;
  float d1 = -f1.x / a;
  float sum = p0 * (f0.x / sn + d1 * tau0 / (sn + 1.0));
  // The head's error: the rounding of Phi(z, -n, a) and Phi(z, -n-1, a),
  // bounded by the moduli of their terms, and the exp that gives p0.
  float ferr = abs(p0) * ((f0.y / sn + f1.y / a * tau0 / (sn + 1.0)) * float(n + 5)) +
    abs(sum) * (abs(sn * log(tau0)) + abs(lg) + abs(L));
  float v0 = log(e0);
  float v1 = log(lam);
  float nlog = max(1.0, ceil((v1 - v0) / 3.0));
  float hv = (v1 - v0) / nlog;
  float TG = max(L, 0.0) + 17.0;
  float tw = (sn + 30.0) / a;
  float tEnd = tw;
  if (z < 0.0) tEnd = max(tw, a > 1.0 ? min(TG, (sn + 30.0) / (a - 1.0)) : TG);
  float hW = 8.0 / a;
  float x = lam;
  for (int p = 0; p < 28; p++) {
    bool logPanel = float(p) < nlog;
    if (!logPanel && x >= tEnd) break;
    float w = logPanel ? hv :
      min(min(2.0 * x, hW), max(4.0 / (1.0 + 0.25 * float(n)), 0.6 * abs(x - L)));
    float cc = logPanel ? v0 + (float(p) + 0.5) * hv : x + 0.5 * w;
    float r = 0.5 * w;
    for (int i = 0; i < 4; i++) {
      for (int j = 0; j < 2; j++) {
        float u = cc + (j == 0 ? -r : r) * gx[i];
        float t = logPanel ? exp(u) : u;
        float tau = a * t;
        float e = logPanel ? sn * (u + la) : (sn - 1.0) * log(tau);
        float vn;
        float un;
        float lG = 0.0;
        if (big) {
          float xs = L - t;
          lG = -(max(xs, 0.0) + log(1.0 + exp(-abs(xs))));
          vn = exp(lG);
          un = -exp(xs + lG);
        } else {
          vn = _gpu_lerch_g(z, t);
          un = z * exp(-t) * vn;
        }
        vec2 pv = _gpu_lerch_poly(c, n, un, vn);
        float ex = e - tau - lg;
        float q = r * gw[i] * ((logPanel ? 1.0 : a) * (big ? exp(ex + lG + S) : exp(ex) * vn));
        sum += q * pv.x;
        ferr += q * (abs(pv.x) * ((abs(e) + tau) + (abs(lG) + abs(L))) +
          pv.y * (float(n + 3) + t));
      }
    }
    if (!logPanel) x += w;
  }
  if (x < tEnd) return vec2(0.0); // the panel budget ran out
  float scaled = big ? (sum < 0.0 ? -1.0 : 1.0) * exp(log(abs(sum)) - (S + sn * la))
                     : pow(a, -sn) * sum;
  float tail = zk * scaled;
  float res = head + tail;
  float rel = ferr / abs(sum) + (8.0 + abs(lg)) +
    ((float(n0) + 2.0) + (abs(sn * log2(a)) + S));
  float bound = EPS * (err + abs(tail) * rel);
  if (!(bound <= 3.0e-5 * abs(res))) return vec2(0.0);
  return vec2(res, 1.0);
}

// The three ways _gpu_lerch_hermite computes h = e^x x^(-sig) Gamma(sig, x)
// at a complex x = (x.x, x.y), sig >= 1. Each returns vec4(Re h, Im h,
// err, ok), with err an estimate of the absolute error of h in units of
// the f32 rounding error.
//
// An integer sig = n + 1: Gamma(n+1, x) = n! e^(-x) sum_{k<=n} x^k / k!,
// so h = (1/x) sum_{j<=n} n!/(n-j)! x^(-j), summed from the inside out.
vec4 _gpu_lerch_h_integer(float sig, vec2 x) {
  int n = int(sig) - 1;
  float d = x.x * x.x + x.y * x.y;
  float ir = x.x / d;
  float ii = -x.y / d;
  float ix = sqrt(ir * ir + ii * ii);
  float rr = 1.0;
  float ri = 0.0;
  float ra = 1.0; // the same sum over the moduli
  for (int j = 1; j <= n; j++) {
    float tr = ir * rr - ii * ri;
    float ti = ir * ri + ii * rr;
    rr = 1.0 + float(j) * tr;
    ri = float(j) * ti;
    ra = 1.0 + float(j) * ix * ra;
  }
  return vec4(rr * ir - ri * ii, rr * ii + ri * ir, (float(n) + 3.0) * ra * ix, 1.0);
}

// |x| < sig: h = e^x x^(-sig) Gamma(sig) - sum_k x^k / (sig (sig+1) ... (sig+k)),
// whose terms decrease from the first. (The continued fraction loses
// digits in f32 there: 8% at sig = 12.9, x = -0.01 - 3.14i.)
vec4 _gpu_lerch_h_series(float sig, vec2 x) {
  float tr = 1.0 / sig;
  float ti = 0.0;
  float sr = tr;
  float si = 0.0;
  float sa = tr;
  int k = 1;
  for (k = 1; k < 100; k++) {
    float f = sig + float(k);
    float nr = (tr * x.x - ti * x.y) / f;
    ti = (tr * x.y + ti * x.x) / f;
    tr = nr;
    sr += tr;
    si += ti;
    float ta = abs(tr) + abs(ti);
    sa += ta;
    if (ta < 1e-8 * (abs(sr) + abs(si))) break;
  }
  float er = x.x - sig * log(sqrt(x.x * x.x + x.y * x.y)) + _gpu_lerch_lgamma(sig);
  // arg x. At z = -1, x.x is -0.0, and the two-argument atan of Apple's
  // GPU (ANGLE Metal and WebGPU) then answers the wrong branch, so the
  // imaginary axis is taken explicitly.
  float arg = x.x == 0.0 ? (x.y < 0.0 ? -1.5707963267949 : 1.5707963267949) : atan(x.y, x.x);
  float ei = x.y - sig * arg;
  float m = exp(er);
  return vec4(m * cos(ei) - sr, m * sin(ei) - si,
    m * (24.0 + abs(er) + abs(ei)) + (float(k) + 3.0) * sa, 1.0);
}

// |x| >= sig: Legendre's continued fraction for h, by the modified Lentz
// method, at most 200 steps.
vec4 _gpu_lerch_h_cf(float sig, vec2 x) {
  const float FPMIN = 1e-30;
  float br = x.x - sig + 1.0;
  float bi = x.y;
  float cr = 1e30;
  float ci = 0.0;
  float dd = br * br + bi * bi;
  float dr = br / dd;
  float di = -bi / dd;
  float hr = dr;
  float hi = di;
  for (int i = 1; i < 200; i++) {
    float an = -float(i) * (float(i) - sig);
    br += 2.0;
    dr = an * dr + br;
    di = an * di + bi;
    if (abs(dr) + abs(di) < FPMIN) dr = FPMIN;
    float cc = cr * cr + ci * ci;
    cr = br + an * cr / cc;
    ci = bi - an * ci / cc;
    if (abs(cr) + abs(ci) < FPMIN) cr = FPMIN;
    dd = dr * dr + di * di;
    dr = dr / dd;
    di = -di / dd;
    float er = dr * cr - di * ci;
    float ei = dr * ci + di * cr;
    float nr = hr * er - hi * ei;
    hi = hr * ei + hi * er;
    hr = nr;
    if (abs(er - 1.0) + abs(ei) < 1e-7)
      return vec4(hr, hi, 35.0 * sqrt(hr * hr + hi * hi), 1.0);
  }
  return vec4(0.0);
}

// Phi(z,s,a) for real z != 0, 1 and s <= 0, from the Hermite-type
// representation (valid for a > 0):
//   Phi(z,s,a) = 1/(2 a^s) + a^(1-s) h - 2 Int_0^inf
//     sin(t log z - s arctan(t/a)) / ((a^2+t^2)^(s/2) (e^(2 pi t) - 1)) dt,
// with h = e^x x^(s-1) Gamma(1-s, x) at x = -a log z. (The middle term is
// z^(-a) (-log z)^(s-1) Gamma(1-s, -a log z): e^x = z^(-a) and
// x^(1-s) = a^(1-s) (-log z)^(1-s) for a real a > 0.) For z < 0,
// log z = ln|z| + i pi; the three terms are then complex and their sum is
// real, so only the real parts are summed, and the integrand's real part
// is sin(t ln|z| - s arctan(t/a)) cosh(pi t) / (e^(2 pi t) - 1). First a is
// shifted to b = a + m >= 1, which keeps |Im x| = pi b >= pi and the
// integrand's branch points at t = +-ib clear of the real axis. The
// integral is an 8-point Gauss-Legendre rule on at most 16 panels up to
// where e^(-pi t) (b^2+t^2)^(-s/2) is negligible, each panel at most 1.5
// wide (poles at t = +-i) and at most 4/|ln|z|| wide (the oscillation);
// past 16 panels it declines. Returns vec2(value, 1) or vec2(0, 0) where
// the error estimate (the pow and exp arguments, h's own error, and the
// cancellation between the terms) exceeds 3e-5 of the value.
vec2 _gpu_lerch_hermite(float z, float s, float a) {
  const float EPS = 6.0e-8;
  const float PI = 3.14159265358979;
  const float gx[4] = float[4](0.1834346424956498, 0.5255324099163290,
    0.7966664774136267, 0.9602898564975363);
  const float gw[4] = float[4](0.3626837833783620, 0.3137066458778873,
    0.2223810344533745, 0.1012285362903763);
  if (s < -30.0) return vec2(0.0);
  int m = a < 1.0 ? int(ceil(1.0 - a)) : 0;
  float head = 0.0;
  float zk = 1.0;
  float err = 0.0;
  for (int k = 0; k < m; k++) {
    float bk = a + float(k);
    if (bk != 0.0) {
      float t = zk * _gpu_zeta_pow(bk, -s);
      head += t;
      err += abs(t) * (2.0 + float(k) + abs(s * log2(abs(bk))));
    }
    zk *= z;
  }
  float b = a + float(m);
  float L = log(abs(z));
  float sig = 1.0 - s;
  vec2 x = vec2(-b * L, z < 0.0 ? -b * PI : 0.0);
  vec4 h;
  if (sig == floor(sig)) h = _gpu_lerch_h_integer(sig, x);
  else if (sqrt(x.x * x.x + x.y * x.y) < sig) h = _gpu_lerch_h_series(sig, x);
  else h = _gpu_lerch_h_cf(sig, x);
  if (h.w < 0.5) return vec2(0.0);
  float t1 = 0.5 * pow(b, -s);
  float bs = pow(b, sig);
  float t2 = bs * h.x;
  // |h| up to a factor sqrt(2), without squaring: near z = 1 an integer
  // order gives an h near 1e25, whose square overflows f32.
  float t2abs = bs * (abs(h.x) + abs(h.y));
  float q3 = max(-s, 0.0);
  float t3end = (21.0 + q3 * log(1.0 + (q3 + 7.0) / b)) / PI;
  float n3 = ceil(t3end / min(1.5, 4.0 / max(abs(L), 1e-3)));
  if (n3 > 16.0) return vec2(0.0);
  float h3 = t3end / n3;
  float t3 = 0.0;
  float a3 = 0.0;
  float b2 = b * b;
  for (int p = 0; p < 16; p++) {
    if (float(p) >= n3) break;
    float c = (float(p) + 0.5) * h3;
    float r = 0.5 * h3;
    for (int i = 0; i < 4; i++) {
      for (int j = 0; j < 2; j++) {
        float t = c + (j == 0 ? -r : r) * gx[i];
        float y = 2.0 * PI * t;
        float q = exp(-y);
        float omq = _gpu_lerch_em(y);
        float K = z < 0.0 ? exp(-PI * t) * (1.0 + q) / (2.0 * omq) : q / omq;
        float f = sin(t * L - s * atan(t / b)) *
          exp(-0.5 * s * log(b2 + t * t)) * K;
        float wf = r * gw[i] * f;
        t3 += wf;
        a3 += abs(wf) * ((6.0 + 10.0 * t) +
          (abs(s) * (2.0 + 0.5 * log2(b2 + t * t)) + abs(t * L)));
      }
    }
  }
  t3 = -2.0 * t3;
  a3 = 2.0 * a3;
  float phi = t1 + t2 + t3;
  float res = head + zk * phi;
  float e1 = t1 * (2.0 + abs(s * log2(b)));
  float e2 = t2abs * (2.0 + abs(sig * log2(b))) + bs * h.z;
  float ephi = (e1 + e2) + (a3 + 3.0 * (t1 + t2abs + abs(t3)));
  float bound = EPS * (err + abs(zk) * (ephi + (float(m) + 2.0) * abs(phi)) + abs(res));
  // An infinite res passes the test above (inf <= inf) although it is a
  // term past the f32 range, not the value: Phi(-0.5, -30, 10) = 8.0e28
  // was -inf. The other methods then answer, or the call is NaN.
  if (!(bound <= 3.0e-5 * abs(res)) || !(abs(res) < 3.4e38)) return vec2(0.0);
  return vec2(res, 1.0);
}

// Phi(z,s,a) for s <= 0: the integral after n integrations by parts (a
// non-integer s >= -LERCH_MAX_N with a > 0), and where it declines the
// Hermite form.
vec2 _gpu_lerch_negative(float z, float s, float a) {
  if (s != floor(s) && a > 0.0 && s >= -${be}.0) {
    vec2 r = _gpu_lerch_integral(z, s, a);
    if (r.y > 0.5) return r;
  }
  return _gpu_lerch_hermite(z, s, a);
}

// Phi(z,s,a) as vec2(value, 1), or vec2(0, 0) where the value is complex
// or no method can vouch for it. The cases, in order: z = 1 is the Hurwitz
// zeta; z = 0 keeps only the k = 0 term; s = 0 is 1/(1 - z); a
// non-positive integer s >= -LERCH_MAX_N is the rational function of
// _gpu_lerch_rational, for every z, where it does not decline; a
// non-positive integer a with s > 0 is the pole (+inf); a < 0 with a
// non-integer s is complex; z > 1 is on the branch cut unless s is a
// non-positive integer, where Phi has no cut (the Hermite form). Past
// z = -1 and at z = -1: the positive integral for s > 0, and for s <= 0
// _gpu_lerch_negative. Inside the unit interval: the Euler transform
// (z < 0, s > 0) or the direct series, and where those decline the
// integral (s > 0) or _gpu_lerch_negative (s <= 0).
vec2 _gpu_lerch_core(float z, float s, float a) {
  if (z == 1.0) return vec2(_gpu_hurwitz_zeta(s, a), 1.0);
  if (z == 0.0) return vec2(_gpu_zeta_pow(a, -s), 1.0); // only the k = 0 term survives
  if (s == 0.0) return vec2(1.0 / (1.0 - z), 1.0);
  if (s < 0.0 && s == floor(s) && s >= -${be}.0) {
    vec2 q = _gpu_lerch_rational(z, int(-s), a);
    if (q.y > 0.5) return q;
  }
  bool aNonposInt = a <= 0.0 && a == floor(a);
  if (aNonposInt && s > 0.0) return vec2(_gpu_inf(), 1.0); // (k+a) = 0 diverges, z != 0
  if (a < 0.0 && s != floor(s)) return vec2(0.0); // complex value
  if (a < -1.0e6) return vec2(0.0); // one term per unit of -a
  if (z > 1.0) {
    if (s > 0.0 || s != floor(s)) return vec2(0.0); // on the branch cut
    return _gpu_lerch_hermite(z, s, a);
  }
  if (z < -1.0) return s > 0.0 ? _gpu_lerch_integral(z, s, a) : _gpu_lerch_negative(z, s, a);
  if (z < 0.0 && s > 0.0) {
    vec2 e = _gpu_lerch_euler(z, s, a);
    return e.y > 0.5 ? e : _gpu_lerch_integral(z, s, a);
  }
  if (z == -1.0) return _gpu_lerch_negative(z, s, a); // s < 0: the series diverges
  vec2 r = _gpu_lerch_series(z, s, a);
  if (r.y > 0.5) return r;
  return s > 0.0 ? _gpu_lerch_integral(z, s, a) : _gpu_lerch_negative(z, s, a);
}

// Phi(z, s, a) for z < 0, -30 <= s <= -3 and |a| < 100, from the Fourier
// modes of the base point b = a moved into (0, 1] (the form of
// lerchModesComplex, numerics/lerch-phi.ts, for a real z < 0):
//   Phi(z, s, b) = 2 Gamma(1-s) e^(-b L) sum_{m = 1, 3, 5, ...}
//     (L^2 + pi^2 m^2)^((s-1)/2) cos(pi (b m + (s-1) (1/2 + atan(L/(pi m))/pi))),
// L = ln|z|: the modes n and 1 - n of the sum over all integers n, paired.
// The terms fall like m^(s-1) and do not cancel the way the Hermite form's
// terms do below z = -1. The sum stops when the bound m (pi m)^(s-1)/(2|s|)
// on the modes left out, taken against the first one, is below 1e-9, and
// after 128 modes at most (ln|z| near 7 at s = -4). The phase is kept in
// units of pi and reduced to [-1/2, 1/2] before the cosine; b m and
// (s-1)/2 are reduced modulo 2 exactly. The modes are summed relative to
// the first one, and the factor 2 Gamma(1-s) e^(-bL) (L^2 + pi^2)^((s-1)/2)
// is one exp. a <= 0 adds the terms z^j (a+j)^(-s) before b; a > 1 uses
// Phi(z,s,a) = z^(-m) (Phi(z,s,b) - sum_{j<m} z^j (b+j)^(-s)). With c = 1
// (only with a = 1) the value is z Phi(z, s, 1) = Li_s(z): the factor
// z = -e^L goes into the exponent of the scale, so that Li_s(z) does not
// pass through Phi, which falls below the smallest normal f32 (1.18e-38)
// before Li_s(z) does. Returns vec2(value, 1), or vec2(0, 0) when the error
// estimate (the roundings of the exp and log arguments and of the phase,
// the modes left out, ln Gamma and the shift, in units of 6e-8) exceeds
// 3e-5 of the value, when the value is not a finite normal f32, or when
// z^(-m), the shifted sum or z^m is not: a GPU flushes a value below
// 1.18e-38 to 0, and a value past 3.4e38 is inf. The test is
// rerr <= 500 |res| (500 = 3e-5 / 6e-8): EPS rerr and 3e-5 |res| themselves
// fall below 1.18e-38 when |res| is below about 4e-34.
vec2 _gpu_lerch_modes(float z, float s, float a, float c) {
  const float EPS = 6.0e-8;
  const float FLUSH = 2.0e-31; // 1.18e-38 / EPS
  const float PI = 3.14159265358979;
  if (s < -30.0 || abs(a) >= 100.0) return vec2(0.0);
  float b = a;
  float pre = 0.0;
  float post = 0.0;
  if (a <= 0.0) {
    pre = floor(-a) + 1.0;
    b = a + pre;
  } else if (a > 1.0) {
    post = ceil(a) - 1.0;
    b = a - post;
  }
  float head = 0.0;
  float herr = 0.0;
  float zk = 1.0;
  for (int j = 0; j < 128; j++) {
    if (float(j) >= pre) break;
    float bj = a + float(j);
    if (bj != 0.0) {
      float t = zk * _gpu_zeta_pow(bj, -s);
      head += t;
      herr += abs(t) * (3.0 + float(j) + abs(s * log2(abs(bj))));
    }
    zk *= z;
  }
  float L = log(-z);
  float sm1 = s - 1.0;
  float hs = 0.5 * sm1;
  float ps = hs - 2.0 * floor(0.5 * hs); // (s-1)/2 modulo 2
  float L2 = L * L;
  float lr1 = log(L2 + PI * PI);
  float sum = 0.0;
  float err = 0.0;
  float tail = 0.0;
  for (int n = 1; n <= 128; n++) {
    float m = float(2 * n - 1);
    float x = PI * m;
    float lr = log(L2 + x * x);
    float at = atan(L / x) / PI;
    float bm = b * m;
    float P = (bm - 2.0 * floor(0.5 * bm)) + ps + sm1 * at;
    float k = floor(P + 0.5);
    float cs = cos(PI * (P - k));
    if (mod(k, 2.0) != 0.0) cs = -cs;
    float ex = hs * (lr - lr1);
    float mag = exp(ex);
    float t = mag * cs;
    sum += t;
    err += abs(t) * (4.0 + abs(ex)) +
      mag * (abs(hs) * (abs(lr) + abs(lr1)) + PI * (abs(P) + abs(sm1) * abs(at) + b * m));
    tail = mag * m / (-2.0 * s);
    if (tail <= 1e-9) break;
  }
  float lg = _gpu_lerch_lgamma(1.0 - s);
  float scale = 2.0 * exp(lg + hs * lr1 - (b - c) * L);
  float phib = scale * sum;
  if (!(scale < 3.4e38 && abs(phib) < 3.4e38)) return vec2(0.0);
  float eb = scale * (err + tail / EPS + 4.0 * abs(sum)) +
    abs(phib) * (abs(lg) + abs(hs * lr1) + abs((b - c) * L) + 12.0);
  // A GPU flushes a scale or Phi(z, s, b) below 1.18e-38 to 0: count the
  // loss (FLUSH = 1.18e-38 in units of EPS) rather than decline, since
  // next to the terms that a > 1 subtracts it can be negligible.
  if (scale < 1.18e-38 || abs(phib) < 1.18e-38) eb += FLUSH * (1.0 + abs(sum));
  if (c > 0.5) phib = -phib; // z = -e^L
  float res;
  float rerr;
  if (post > 0.0) {
    float acc = phib;
    float aerr = eb;
    float zj = 1.0;
    for (int j = 0; j < 128; j++) {
      if (float(j) >= post) break;
      float bj = b + float(j);
      float t = zj * pow(bj, -s);
      acc -= t;
      aerr += abs(t) * (3.0 + float(j) + abs(s * log2(bj)));
      zj *= z;
    }
    float zinv = pow(-z, -post);
    if (!(zinv >= 1.18e-38 && zinv < 3.4e38 && abs(acc) >= 1.18e-38 && abs(acc) < 3.4e38))
      return vec2(0.0);
    float sg = mod(post, 2.0) == 0.0 ? 1.0 : -1.0;
    res = sg * zinv * acc;
    rerr = zinv * (aerr + abs(acc) * (post + 2.0)) + abs(res) * abs(post * log2(-z));
  } else {
    if (!(abs(zk) >= 1.18e-38 && abs(zk) < 3.4e38)) return vec2(0.0);
    res = head + zk * phib;
    rerr = herr + abs(zk) * (eb + abs(phib) * (pre + 2.0));
  }
  // 500.0 * abs(res) is +inf for abs(res) > 6.8e35, and an error estimate
  // that overflowed to +inf passed the test inf <= inf: an infinite
  // estimate must decline.
  if (!(abs(res) >= 1.18e-38 && abs(res) < 3.4e38) ||
      !(rerr < 3.4e38 && rerr <= 500.0 * abs(res)))
    return vec2(0.0);
  return vec2(res, 1.0);
}

// Where every method of _gpu_lerch_core declines, z < 0 with s <= -3 tries
// the Fourier modes last, so that the values the other methods answer do
// not change.
float _gpu_lerch_phi(float z, float s, float a) {
  vec2 r = _gpu_lerch_core(z, s, a);
  if (r.y > 0.5) return r.x;
  if (z < 0.0 && s <= -3.0 && !(a < 0.0 && s != floor(s))) {
    r = _gpu_lerch_modes(z, s, a, 0.0);
    if (r.y > 0.5) return r.x;
  }
  return _gpu_nan();
}

// Li_s(z) for z < -1 and a real s < 0 that is not an integer, by
// Jonquiere's inversion formula (DLMF 25.12.13 with the Hurwitz zeta form):
//   Li_s(z) = Re[(2 pi)^s e^(i pi s/2) / Gamma(s) zeta(1 - s, A)]
//             - cos(pi s) Li_s(1/z),   A = 1/2 - i ln(-z) / (2 pi).
// zeta(1 - s, A) (1 - s > 1) is summed by Euler-Maclaurin: 12 terms, the
// tail integral, the half term and up to 8 Bernoulli corrections, in
// complex f32. 1/Gamma(s) = sin(pi s) Gamma(1 - s) / pi, with sin(pi s)
// taken from the distance of s to its nearest integer. Returns
// vec2(value, 1), or vec2(0, 0) when Li_s(1/z) declines, when the value is
// not a finite normal f32, or when the error estimate exceeds 3e-5 of the
// value. The estimate counts, for each value that a GPU can flush to 0
// (below 1.18e-38), the loss of 1.18e-38 (FLUSH, in units of EPS): the
// terms of zeta(1 - s, A), of which |A|^(s-1) falls below 1.18e-38 near
// z = -1e38 when s is near -30, and the terms of Li_s(1/z).
vec2 _gpu_poly_log_inversion(float s, float z) {
  const float EPS = 6.0e-8;
  const float FLUSH = 2.0e-31; // 1.18e-38 / EPS
  const float PI = 3.14159265358979;
  const float B[8] = float[8](1.0 / 6.0, -1.0 / 30.0, 1.0 / 42.0, -1.0 / 30.0,
    5.0 / 66.0, -691.0 / 2730.0, 7.0 / 6.0, -3617.0 / 510.0);
  float ai = -log(-z) / (2.0 * PI);
  float sig = 1.0 - s;
  float zr = 0.0;
  float zi = 0.0;
  float zerr = 0.0;
  for (int k = 0; k < 12; k++) {
    float wr = 0.5 + float(k);
    float lnw = 0.5 * log(wr * wr + ai * ai);
    float ph = -sig * atan(ai, wr);
    float m = exp(-sig * lnw);
    zr += m * cos(ph);
    zi += m * sin(ph);
    zerr += m * (4.0 + abs(sig * lnw) + abs(ph));
  }
  float wr = 12.5;
  float lnw = 0.5 * log(wr * wr + ai * ai);
  float th = atan(ai, wr);
  // w^(1 - sig) / (sig - 1), with 1 - sig = s taken from s itself: near
  // s = 0, (1 - s) - 1 would keep only a few digits of s.
  float m1 = exp(s * lnw) / -s;
  float p1 = s * th;
  zr += m1 * cos(p1);
  zi += m1 * sin(p1);
  zerr += abs(m1) * (4.0 + abs(s * lnw) + abs(p1));
  // w^(-sig) / 2
  float m0 = exp(-sig * lnw);
  float p0 = -sig * th;
  zr += 0.5 * m0 * cos(p0);
  zi += 0.5 * m0 * sin(p0);
  zerr += 0.5 * m0 * (4.0 + abs(sig * lnw) + abs(p0));
  // Bernoulli terms B_2j (sig)_(2j-1) / (2j)! w^(-sig-2j+1): u starts at
  // (sig/2) w^(-sig-1) and gains (sig+2j-1)(sig+2j) / ((2j+1)(2j+2) w^2).
  float mu1 = exp((-sig - 1.0) * lnw);
  float pu1 = (-sig - 1.0) * th;
  float ur = sig / 2.0 * mu1 * cos(pu1);
  float ui = sig / 2.0 * mu1 * sin(pu1);
  float w2r = wr * wr - ai * ai;
  float w2i = 2.0 * wr * ai;
  float w2d = w2r * w2r + w2i * w2i;
  float iw2r = w2r / w2d;
  float iw2i = -w2i / w2d;
  float prev = 3.0e38;
  for (int j = 1; j <= 8; j++) {
    float tr = ur * B[j - 1];
    float ti = ui * B[j - 1];
    float ta = abs(tr) + abs(ti);
    if (ta >= prev) break;
    zr += tr;
    zi += ti;
    zerr += ta * (10.0 + abs(sig * lnw));
    prev = ta;
    float mm = float(2 * j);
    float c = (sig + mm - 1.0) * (sig + mm) / ((mm + 1.0) * (mm + 2.0));
    float nr = c * (ur * iw2r - ui * iw2i);
    ui = c * (ur * iw2i + ui * iw2r);
    ur = nr;
  }
  zerr += 44.0 * FLUSH; // at most 22 terms in each of zr and zi
  float n = floor(s + 0.5);
  float d = s - n;
  float sgn = mod(n, 2.0) == 0.0 ? 1.0 : -1.0;
  float lg1 = _gpu_lerch_lgamma(sig);
  float fm = sgn * sin(PI * d) * exp(s * log(2.0 * PI) + lg1) / PI;
  float fre = fm * cos(0.5 * PI * s);
  float fim = fm * sin(0.5 * PI * s);
  float first = fre * zr - fim * zi;
  float firstErr = abs(fm) * zerr +
    abs(fm) * sqrt(zr * zr + zi * zi) * (30.0 + abs(lg1) + abs(s * 2.7));
  // Li_s(1/z): for |1/z| <= 1/2 its own series sum_k (1/z)^k k^(-s), with
  // an error estimate, stopped when the tail after the term t is below
  // t rho/(1-rho) <= 1e-8 of the sum, rho = |1/z| ((k+1)/k)^(-s): the ratio
  // of the next term to t, which bounds every later ratio because it
  // decreases with k for s < 0. (The ratio |1/z| alone does not bound it:
  // the second term is 2^(-s) |1/z| times the first, 0.6 of it at
  // z = -8.7e8, s = -29, where the sum stopped after one term and the value
  // was 9.6 times too large.) Closer to the rim _gpu_lerch_negative (the
  // integral, then the Hermite form) at 1/z.
  float iz = 1.0 / z;
  float li = 0.0;
  float lierr = 0.0;
  if (iz >= -0.5) {
    float wk = 1.0;
    float prev = 3.0e38;
    bool done = false;
    for (int k = 1; k < 200; k++) {
      wk *= iz;
      float t = wk * pow(float(k), -s);
      li += t;
      float size = abs(t);
      lierr += size * (2.0 + float(k) + abs(s * log2(float(k)))) + FLUSH;
      float rho = -iz * pow(float(k + 1) / float(k), -s);
      if (size < prev && rho < 1.0 && size * rho / (1.0 - rho) <= 1e-8 * abs(li)) {
        done = true;
        break;
      }
      prev = size;
    }
    if (!done) return vec2(0.0);
  } else {
    vec2 inner = _gpu_lerch_negative(iz, s, 1.0);
    if (inner.y < 0.5) return vec2(0.0);
    li = iz * inner.x;
    lierr = 500.0 * abs(li); // the inner value is within 3e-5 = 500 EPS
  }
  float res = first - sgn * cos(PI * d) * li;
  // In units of EPS; the test is bound <= (3e-5 / EPS) |res|, since
  // EPS bound and 3e-5 |res| fall below 1.18e-38 for a small |res|.
  float bound = ((firstErr + 4.0 * abs(first)) + (lierr + 2.0 * abs(li))) + 4.0 * FLUSH;
  // An estimate that overflowed to +inf declines (500.0 * abs(res) is +inf
  // for abs(res) > 6.8e35, and inf <= inf passes).
  if (!(abs(res) >= 1.18e-38 && abs(res) < 3.4e38) ||
      !(bound < 3.4e38 && bound <= 500.0 * abs(res)))
    return vec2(0.0);
  return vec2(res, 1.0);
}

// PolyLog(s, z). The integer orders the interpreter answers in closed form
// come first, so the shader agrees with it there: z = 0 is 0; the orders 1,
// 0 and -1 are -ln(1 - z), z/(1 - z) and z/(1 - z)^2, with a pole (+inf)
// at z = 1; an order -n, 2 <= n <= 12, is the Eulerian closed form
// z * sum_k A(n,k) z^k / (1 - z)^(n+1), which for |z| > 1 is summed in
// u = z/(1 - z) and v = 1/(1 - z) (|u|, |v| <= 1 for z < -1) so that it does
// not overflow. Every other order uses Li_s(z) = z * Phi(z, s, 1), and where
// that declines below z = -1 with a negative non-integer order, Jonquiere's
// inversion formula (_gpu_poly_log_inversion). NaN on the cut z > 1 (except
// the orders above) and where both decline.
float _gpu_poly_log(float s, float z) {
  if (z == 0.0) return 0.0;
  if (s == 1.0) {
    if (z == 1.0) return _gpu_inf();
    return z < 1.0 ? -log(1.0 - z) : _gpu_nan();
  }
  if (s == 0.0) {
    if (z == 1.0) return _gpu_inf();
    return z / (1.0 - z);
  }
  if (s == -1.0) {
    if (z == 1.0) return _gpu_inf();
    return z / ((1.0 - z) * (1.0 - z));
  }
  if (s <= -2.0 && s >= -12.0 && s == floor(s) && z != 1.0) {
    int n = int(-s);
    // Row n of the Eulerian numbers, built in place from row 0 = [1]:
    // A(m,k) = (k+1) A(m-1,k) + (m-k) A(m-1,k-1), updated from the top so
    // each entry still reads the previous row's values.
    float row[13];
    row[0] = 1.0;
    for (int i = 1; i < 13; i++) row[i] = 0.0;
    for (int m = 1; m <= n; m++) {
      for (int k = m - 1; k >= 1; k--)
        row[k] = float(k + 1) * row[k] + float(m - k) * row[k - 1];
    }
    if (abs(z) > 1.0) {
      // sum_k A(n,k) u^(k+1) v^(n-k) = u v sum_k A(n,k) u^k v^(n-1-k)
      float v = 1.0 / (1.0 - z);
      float u = z * v;
      float r = row[n - 1];
      float vp = v;
      for (int k = n - 2; k >= 0; k--) {
        r = r * u + row[k] * vp;
        vp *= v;
      }
      return u * v * r;
    }
    float p = 0.0;
    for (int k = n - 1; k >= 0; k--) p = p * z + row[k];
    float den = 1.0;
    for (int i = 0; i <= n; i++) den *= 1.0 - z;
    return z * p / den;
  }
  // Below z = -1, Phi(z, s, 1) = Li_s(z)/z falls below the smallest normal
  // f32 before Li_s(z) does, and the 3e-5 test of the methods behind
  // _gpu_lerch_core falls below it (a GPU flushes both sides to 0) when
  // |Phi| < 1.18e-38 / 3e-5 = 3.9e-34: the inversion and the modes (with the
  // factor z in the exponent) answer there instead.
  vec2 r = _gpu_lerch_core(z, s, 1.0);
  if (r.y > 0.5 && (z >= -1.0 || (abs(r.x) >= 3.9e-34 && abs(z * r.x) < 3.4e38)))
    return z * r.x;
  if (z < -1.0 && s < 0.0 && s != floor(s)) {
    vec2 v = _gpu_poly_log_inversion(s, z);
    if (v.y > 0.5) return v.x;
  }
  if (z < 0.0 && s <= -3.0) {
    r = _gpu_lerch_modes(z, s, 1.0, 1.0);
    if (r.y > 0.5) return r.x;
  }
  return _gpu_nan();
}
`,oc=`
fn _gpu_lerch_series(z: f32, s: f32, a: f32) -> vec2<f32> {
  var n0: i32 = 0;
  if (a < 0.0) { n0 = i32(ceil(-a)); }
  let az = abs(z);
  var sum: f32 = 0.0;
  var zk: f32 = 1.0;
  var prev: f32 = 3.0e38;
  // The error estimate: see the GLSL preamble.
  var err: f32 = 0.0;
  var sizes: f32 = 0.0;
  var bmin: f32 = 3.0e38;
  var bmax: f32 = 0.0;
  var settled: i32 = 0;
  for (var k: i32 = 0; k < n0 + 4096; k = k + 1) {
    let b = a + f32(k);
    var t: f32 = 0.0;
    if (b != 0.0) { t = zk * _gpu_zeta_pow(b, -s); }
    sum = sum + t;
    let size = abs(t);
    err = err + size * (2.0 + f32(k));
    sizes = sizes + size;
    if (b != 0.0) {
      bmin = min(bmin, abs(b));
      bmax = max(bmax, abs(b));
    }
    if (b > 0.0) {
      let rho = max(size / prev, az);
      if (size == 0.0 ||
          (size < prev && rho < 1.0 &&
           size * rho / (1.0 - rho) <= 1e-7 * abs(sum))) {
        settled = settled + 1;
        if (settled == 3) {
          let lb = max(abs(log2(bmin)), abs(log2(bmax)));
          let bound = 6.0e-8 * (err + sizes * (2.0 + abs(s * lb)));
          if (!(bound <= 3.0e-5 * abs(sum))) { return vec2<f32>(0.0); }
          if (abs(sum) * (1.0 - az) < 1.9721523e-31) { return vec2<f32>(0.0); }
          return vec2<f32>(sum, 1.0);
        }
      } else {
        settled = 0;
      }
      prev = size;
    }
    zk = zk * z;
  }
  return vec2<f32>(0.0);
}

fn _gpu_lerch_euler(z: f32, s: f32, a: f32) -> vec2<f32> {
  var n0: i32 = 0;
  if (a <= 0.0) { n0 = i32(floor(-a)) + 1; }
  var head: f32 = 0.0;
  var zn: f32 = 1.0;
  var largest: f32 = 0.0;
  for (var k: i32 = 0; k < n0; k = k + 1) {
    let b = a + f32(k);
    var t: f32 = 0.0;
    if (b != 0.0) { t = zn * _gpu_zeta_pow(b, -s); }
    head = head + t;
    largest = max(largest, abs(t));
    zn = zn * z;
  }
  let b0 = a + f32(n0);
  var w: array<f32, ${nt+1}>;
  var nterm: i32 = 0;
  var sum: f32 = 0.0;
  var zPow: f32 = 1.0;
  var settled: i32 = 0;
  for (var k: i32 = 0; k < ${nt}; k = k + 1) {
    let cur = zPow * pow(b0 + f32(k), -s);
    var inc: f32;
    if (k == 0) {
      nterm = 1;
      w[1] = cur;
      inc = 0.5 * cur;
    } else {
      var tmp = w[1];
      w[1] = cur;
      for (var j: i32 = 1; j <= nterm - 1; j = j + 1) {
        let dum = w[j + 1];
        w[j + 1] = 0.5 * (w[j] + tmp);
        tmp = dum;
      }
      if (nterm >= ${nt}) { return vec2<f32>(0.0); }
      w[nterm + 1] = 0.5 * (w[nterm] + tmp);
      if (abs(w[nterm + 1]) <= abs(w[nterm])) {
        nterm = nterm + 1;
        inc = 0.5 * w[nterm];
      } else {
        inc = w[nterm + 1];
      }
    }
    sum = sum + inc;
    zPow = zPow * z;
    if (k > 4 && abs(inc) <= 1e-7 * abs(sum)) {
      settled = settled + 1;
      if (settled == 3) {
        if (abs(sum) < 1.9721523e-31) { return vec2<f32>(0.0); }
        let tail = zn * sum;
        let res = head + tail;
        if (max(largest, abs(tail)) > 100.0 * abs(res)) { return vec2<f32>(0.0); }
        return vec2<f32>(res, 1.0);
      }
    } else {
      settled = 0;
    }
  }
  return vec2<f32>(0.0);
}

// 1 - e^(-t), t >= 0: see the GLSL preamble.
fn _gpu_lerch_em(t: f32) -> f32 {
  if (t < 0.25) {
    return t * (1.0 - t / 2.0 * (1.0 - t / 3.0 * (1.0 - t / 4.0 *
      (1.0 - t / 5.0 * (1.0 - t / 6.0 * (1.0 - t / 7.0))))));
  }
  return 1.0 - exp(-t);
}

// ln Gamma(s) for s > 0: see the GLSL preamble.
fn _gpu_lerch_lgamma(s: f32) -> f32 {
  var p: f32 = 1.0;
  var x: f32 = s;
  for (var k: i32 = 0; k < 8; k = k + 1) {
    if (x >= 8.0) { break; }
    p = p * x;
    x = x + 1.0;
  }
  let x2 = x * x;
  let corr = (1.0 / 12.0 - (1.0 / 360.0 - 1.0 / (1260.0 * x2)) / x2) / x;
  return (x - 0.5) * log(x) - x + (0.91893853320467274 + corr) - log(p);
}

fn _gpu_lerch_g(z: f32, t: f32) -> f32 {
  if (z < 0.0) { return 1.0 / (1.0 - z * exp(-t)); }
  return 1.0 / ((1.0 - z) + z * _gpu_lerch_em(t));
}

// One step of the polynomials P_m of Phi(w, -m, a): see the GLSL preamble.
fn _gpu_lerch_pstep(c: ptr<function, array<f32, ${be+2}>>, a: f32, m: i32) {
  for (var k: i32 = m + 1; k >= 0; k = k - 1) {
    var hi: f32 = 0.0;
    var lo: f32 = 0.0;
    if (k <= m) { hi = (a + f32(k)) * (*c)[k]; }
    if (k >= 1) { lo = (f32(m + 2) - a - f32(k)) * (*c)[k - 1]; }
    (*c)[k] = hi + lo;
  }
}

// Phi(w, -n, a) without its factor v, and the sum of the moduli of its
// terms: see the GLSL preamble.
fn _gpu_lerch_poly(c: ptr<function, array<f32, ${be+2}>>, n: i32, u: f32, v: f32) -> vec2<f32> {
  let au = abs(u);
  let av = abs(v);
  var r = (*c)[n];
  var ra = abs((*c)[n]);
  var vp = v;
  var avp = av;
  for (var k: i32 = n - 1; k >= 0; k = k - 1) {
    r = r * u + (*c)[k] * vp;
    ra = ra * au + abs((*c)[k]) * avp;
    vp = vp * v;
    avp = avp * av;
  }
  return vec2<f32>(r, ra);
}

// Phi(z, -n, a) for an integer n, in closed form: see the GLSL preamble.
fn _gpu_lerch_rational(z: f32, n: i32, a: f32) -> vec2<f32> {
  let EPS = 6.0e-8;
  var c: array<f32, ${be+2}>;
  c[0] = 1.0;
  for (var m: i32 = 0; m < n; m = m + 1) { _gpu_lerch_pstep(&c, a, m); }
  let v = 1.0 / (1.0 - z);
  let q = _gpu_lerch_poly(&c, n, z * v, v);
  if (!(EPS * (f32(n + 4) * q.y) <= 3.0e-5 * abs(q.x))) { return vec2<f32>(0.0); }
  return vec2<f32>(q.x * v, 1.0);
}

// Phi(z,s,a) for z < 1 by the integral (after n integrations by parts for
// s <= 0): see the GLSL preamble.
fn _gpu_lerch_integral(z: f32, s: f32, a0: f32) -> vec2<f32> {
  let EPS = 6.0e-8;
  let PI = 3.14159265358979;
  let gx = array<f32, 4>(0.1834346424956498, 0.5255324099163290,
    0.7966664774136267, 0.9602898564975363);
  let gw = array<f32, 4>(0.3626837833783620, 0.3137066458778873,
    0.2223810344533745, 0.1012285362903763);
  var n: i32 = 0;
  if (s <= 0.0) { n = i32(ceil(-s)); }
  let sn = s + f32(n);
  var n0: i32 = 0;
  if (a0 < 0.0) { n0 = i32(ceil(-a0)); }
  var head: f32 = 0.0;
  var zk: f32 = 1.0;
  var err: f32 = 0.0;
  for (var k: i32 = 0; k < n0; k = k + 1) {
    let bk = a0 + f32(k);
    let t = zk * _gpu_zeta_pow(bk, -s);
    head = head + t;
    err = err + abs(t) * (2.0 + f32(k) + abs(s * log2(abs(bk))));
    zk = zk * z;
  }
  let a = a0 + f32(n0);
  var c: array<f32, ${be+2}>;
  c[0] = 1.0;
  for (var m: i32 = 0; m < n; m = m + 1) { _gpu_lerch_pstep(&c, a, m); }
  let lg = _gpu_lerch_lgamma(sn);
  let lam = min(1.0, 1.0 / a);
  var delta = PI;
  if (z > 0.0) { delta = -log(z); }
  let e0 = 1e-3 * min(lam, delta);
  let la = log(a);
  let tau0 = a * e0;
  var L: f32;
  if (z < 0.0) { L = log(-z); } else { L = log(z); }
  let big = z < -1.0;
  // The shift S: see the GLSL preamble.
  var S: f32 = 0.0;
  if (big) { S = min(a, 1.0) * L; }
  var lG0: f32 = 0.0;
  var v0h = 1.0 / (1.0 - z);
  var u0 = z * v0h;
  if (big) {
    lG0 = -(L + log(1.0 + exp(-L)));
    v0h = exp(lG0);
    u0 = -exp(L + lG0);
  }
  let f0 = _gpu_lerch_poly(&c, n, u0, v0h);
  var c1 = c;
  _gpu_lerch_pstep(&c1, a, n);
  let f1 = _gpu_lerch_poly(&c1, n + 1, u0, v0h);
  var p0: f32;
  if (big) { p0 = exp(sn * log(tau0) - lg + lG0 + S); } else { p0 = exp(sn * log(tau0) - lg) * v0h; }
  let d1 = -f1.x / a;
  var sum = p0 * (f0.x / sn + d1 * tau0 / (sn + 1.0));
  var ferr = abs(p0) * ((f0.y / sn + f1.y / a * tau0 / (sn + 1.0)) * f32(n + 5)) +
    abs(sum) * (abs(sn * log(tau0)) + abs(lg) + abs(L));
  let v0 = log(e0);
  let v1 = log(lam);
  let nlog = max(1.0, ceil((v1 - v0) / 3.0));
  let hv = (v1 - v0) / nlog;
  let TG = max(L, 0.0) + 17.0;
  let tw = (sn + 30.0) / a;
  var tEnd = tw;
  if (z < 0.0) {
    if (a > 1.0) { tEnd = max(tw, min(TG, (sn + 30.0) / (a - 1.0))); } else { tEnd = max(tw, TG); }
  }
  let hW = 8.0 / a;
  var x = lam;
  for (var p: i32 = 0; p < 28; p = p + 1) {
    let logPanel = f32(p) < nlog;
    if (!logPanel && x >= tEnd) { break; }
    var w: f32;
    var cc: f32;
    if (logPanel) {
      w = hv;
      cc = v0 + (f32(p) + 0.5) * hv;
    } else {
      w = min(min(2.0 * x, hW), max(4.0 / (1.0 + 0.25 * f32(n)), 0.6 * abs(x - L)));
      cc = x + 0.5 * w;
    }
    let r = 0.5 * w;
    for (var i: i32 = 0; i < 4; i = i + 1) {
      for (var j: i32 = 0; j < 2; j = j + 1) {
        let u = cc + select(r, -r, j == 0) * gx[i];
        var t = u;
        var e: f32;
        var scale: f32 = a;
        if (logPanel) {
          t = exp(u);
          e = sn * (u + la);
          scale = 1.0;
        } else {
          e = (sn - 1.0) * log(a * t);
        }
        let tau = a * t;
        var vn: f32;
        var un: f32;
        var lG: f32 = 0.0;
        if (big) {
          let xs = L - t;
          lG = -(max(xs, 0.0) + log(1.0 + exp(-abs(xs))));
          vn = exp(lG);
          un = -exp(xs + lG);
        } else {
          vn = _gpu_lerch_g(z, t);
          un = z * exp(-t) * vn;
        }
        let pv = _gpu_lerch_poly(&c, n, un, vn);
        let ex = e - tau - lg;
        var f: f32;
        if (big) { f = exp(ex + lG + S); } else { f = exp(ex) * vn; }
        let q = r * gw[i] * (scale * f);
        sum = sum + q * pv.x;
        ferr = ferr + q * (abs(pv.x) * ((abs(e) + tau) + (abs(lG) + abs(L))) +
          pv.y * (f32(n + 3) + t));
      }
    }
    if (!logPanel) { x = x + w; }
  }
  if (x < tEnd) { return vec2<f32>(0.0); } // the panel budget ran out
  var scaled: f32;
  if (big) {
    scaled = select(1.0, -1.0, sum < 0.0) * exp(log(abs(sum)) - (S + sn * la));
  } else {
    scaled = pow(a, -sn) * sum;
  }
  let tail = zk * scaled;
  let res = head + tail;
  let rel = ferr / abs(sum) + (8.0 + abs(lg)) +
    ((f32(n0) + 2.0) + (abs(sn * log2(a)) + S));
  let bound = EPS * (err + abs(tail) * rel);
  if (!(bound <= 3.0e-5 * abs(res))) { return vec2<f32>(0.0); }
  return vec2<f32>(res, 1.0);
}

// h = e^x x^(-sig) Gamma(sig, x), integer sig: see the GLSL preamble.
fn _gpu_lerch_h_integer(sig: f32, x: vec2<f32>) -> vec4<f32> {
  let n = i32(sig) - 1;
  let d = x.x * x.x + x.y * x.y;
  let ir = x.x / d;
  let ii = -x.y / d;
  let ix = sqrt(ir * ir + ii * ii);
  var rr: f32 = 1.0;
  var ri: f32 = 0.0;
  var ra: f32 = 1.0;
  for (var j: i32 = 1; j <= n; j = j + 1) {
    let tr = ir * rr - ii * ri;
    let ti = ir * ri + ii * rr;
    rr = 1.0 + f32(j) * tr;
    ri = f32(j) * ti;
    ra = 1.0 + f32(j) * ix * ra;
  }
  return vec4<f32>(rr * ir - ri * ii, rr * ii + ri * ir, (f32(n) + 3.0) * ra * ix, 1.0);
}

// h for |x| < sig, by the series: see the GLSL preamble.
fn _gpu_lerch_h_series(sig: f32, x: vec2<f32>) -> vec4<f32> {
  var tr: f32 = 1.0 / sig;
  var ti: f32 = 0.0;
  var sr: f32 = tr;
  var si: f32 = 0.0;
  var sa: f32 = tr;
  var k: i32 = 1;
  for (k = 1; k < 100; k = k + 1) {
    let f = sig + f32(k);
    let nr = (tr * x.x - ti * x.y) / f;
    ti = (tr * x.y + ti * x.x) / f;
    tr = nr;
    sr = sr + tr;
    si = si + ti;
    let ta = abs(tr) + abs(ti);
    sa = sa + ta;
    if (ta < 1e-8 * (abs(sr) + abs(si))) { break; }
  }
  let er = x.x - sig * log(sqrt(x.x * x.x + x.y * x.y)) + _gpu_lerch_lgamma(sig);
  // arg x, with the imaginary axis taken explicitly (see the GLSL preamble:
  // atan2 of Apple's GPU answers the wrong branch at x.x = -0.0).
  var arg = atan2(x.y, x.x);
  if (x.x == 0.0) { arg = select(1.5707963267949, -1.5707963267949, x.y < 0.0); }
  let ei = x.y - sig * arg;
  let m = exp(er);
  return vec4<f32>(m * cos(ei) - sr, m * sin(ei) - si,
    m * (24.0 + abs(er) + abs(ei)) + (f32(k) + 3.0) * sa, 1.0);
}

// h for |x| >= sig, by the continued fraction: see the GLSL preamble.
fn _gpu_lerch_h_cf(sig: f32, x: vec2<f32>) -> vec4<f32> {
  let FPMIN = 1e-30;
  var br = x.x - sig + 1.0;
  let bi = x.y;
  var cr: f32 = 1e30;
  var ci: f32 = 0.0;
  var dd = br * br + bi * bi;
  var dr = br / dd;
  var di = -bi / dd;
  var hr = dr;
  var hi = di;
  for (var i: i32 = 1; i < 200; i = i + 1) {
    let an = -f32(i) * (f32(i) - sig);
    br = br + 2.0;
    dr = an * dr + br;
    di = an * di + bi;
    if (abs(dr) + abs(di) < FPMIN) { dr = FPMIN; }
    let cc = cr * cr + ci * ci;
    cr = br + an * cr / cc;
    ci = bi - an * ci / cc;
    if (abs(cr) + abs(ci) < FPMIN) { cr = FPMIN; }
    dd = dr * dr + di * di;
    dr = dr / dd;
    di = -di / dd;
    let er = dr * cr - di * ci;
    let ei = dr * ci + di * cr;
    let nr = hr * er - hi * ei;
    hi = hr * ei + hi * er;
    hr = nr;
    if (abs(er - 1.0) + abs(ei) < 1e-7) {
      return vec4<f32>(hr, hi, 35.0 * sqrt(hr * hr + hi * hi), 1.0);
    }
  }
  return vec4<f32>(0.0);
}

// Phi(z,s,a) for s <= 0 by the Hermite-type representation: see the GLSL
// preamble.
fn _gpu_lerch_hermite(z: f32, s: f32, a: f32) -> vec2<f32> {
  let EPS = 6.0e-8;
  let PI = 3.14159265358979;
  let gx = array<f32, 4>(0.1834346424956498, 0.5255324099163290,
    0.7966664774136267, 0.9602898564975363);
  let gw = array<f32, 4>(0.3626837833783620, 0.3137066458778873,
    0.2223810344533745, 0.1012285362903763);
  if (s < -30.0) { return vec2<f32>(0.0); }
  var m: i32 = 0;
  if (a < 1.0) { m = i32(ceil(1.0 - a)); }
  var head: f32 = 0.0;
  var zk: f32 = 1.0;
  var err: f32 = 0.0;
  for (var k: i32 = 0; k < m; k = k + 1) {
    let bk = a + f32(k);
    if (bk != 0.0) {
      let t = zk * _gpu_zeta_pow(bk, -s);
      head = head + t;
      err = err + abs(t) * (2.0 + f32(k) + abs(s * log2(abs(bk))));
    }
    zk = zk * z;
  }
  let b = a + f32(m);
  let L = log(abs(z));
  let sig = 1.0 - s;
  var xi: f32 = 0.0;
  if (z < 0.0) { xi = -b * PI; }
  let x = vec2<f32>(-b * L, xi);
  var h: vec4<f32>;
  if (sig == floor(sig)) {
    h = _gpu_lerch_h_integer(sig, x);
  } else if (sqrt(x.x * x.x + x.y * x.y) < sig) {
    h = _gpu_lerch_h_series(sig, x);
  } else {
    h = _gpu_lerch_h_cf(sig, x);
  }
  if (h.w < 0.5) { return vec2<f32>(0.0); }
  let t1 = 0.5 * pow(b, -s);
  let bs = pow(b, sig);
  let t2 = bs * h.x;
  let t2abs = bs * (abs(h.x) + abs(h.y)); // no square: see the GLSL preamble
  let q3 = max(-s, 0.0);
  let t3end = (21.0 + q3 * log(1.0 + (q3 + 7.0) / b)) / PI;
  let n3 = ceil(t3end / min(1.5, 4.0 / max(abs(L), 1e-3)));
  if (n3 > 16.0) { return vec2<f32>(0.0); }
  let h3 = t3end / n3;
  var t3: f32 = 0.0;
  var a3: f32 = 0.0;
  let b2 = b * b;
  for (var p: i32 = 0; p < 16; p = p + 1) {
    if (f32(p) >= n3) { break; }
    let c = (f32(p) + 0.5) * h3;
    let r = 0.5 * h3;
    for (var i: i32 = 0; i < 4; i = i + 1) {
      for (var j: i32 = 0; j < 2; j = j + 1) {
        let t = c + select(r, -r, j == 0) * gx[i];
        let y = 2.0 * PI * t;
        let q = exp(-y);
        let omq = _gpu_lerch_em(y);
        var K = q / omq;
        if (z < 0.0) { K = exp(-PI * t) * (1.0 + q) / (2.0 * omq); }
        let f = sin(t * L - s * atan(t / b)) *
          exp(-0.5 * s * log(b2 + t * t)) * K;
        let wf = r * gw[i] * f;
        t3 = t3 + wf;
        a3 = a3 + abs(wf) * ((6.0 + 10.0 * t) +
          (abs(s) * (2.0 + 0.5 * log2(b2 + t * t)) + abs(t * L)));
      }
    }
  }
  t3 = -2.0 * t3;
  a3 = 2.0 * a3;
  let phi = t1 + t2 + t3;
  let res = head + zk * phi;
  let e1 = t1 * (2.0 + abs(s * log2(b)));
  let e2 = t2abs * (2.0 + abs(sig * log2(b))) + bs * h.z;
  let ephi = (e1 + e2) + (a3 + 3.0 * (t1 + t2abs + abs(t3)));
  let bound = EPS * (err + abs(zk) * (ephi + (f32(m) + 2.0) * abs(phi)) + abs(res));
  // See the GLSL version: an infinite res is a term that overflowed.
  if (!(bound <= 3.0e-5 * abs(res)) || !(abs(res) < 3.4e38)) { return vec2<f32>(0.0); }
  return vec2<f32>(res, 1.0);
}

// Phi(z,s,a) for s <= 0: the integral after n integrations by parts, then
// the Hermite form (see the GLSL preamble).
fn _gpu_lerch_negative(z: f32, s: f32, a: f32) -> vec2<f32> {
  if (s != floor(s) && a > 0.0 && s >= -${be}.0) {
    let r = _gpu_lerch_integral(z, s, a);
    if (r.y > 0.5) { return r; }
  }
  return _gpu_lerch_hermite(z, s, a);
}

// Phi(z,s,a) as vec2(value, 1), or vec2(0, 0): see the GLSL preamble.
fn _gpu_lerch_core(z: f32, s: f32, a: f32) -> vec2<f32> {
  if (z == 1.0) { return vec2<f32>(_gpu_hurwitz_zeta(s, a), 1.0); }
  if (z == 0.0) { return vec2<f32>(_gpu_zeta_pow(a, -s), 1.0); }
  if (s == 0.0) { return vec2<f32>(1.0 / (1.0 - z), 1.0); }
  if (s < 0.0 && s == floor(s) && s >= -${be}.0) {
    let q = _gpu_lerch_rational(z, i32(-s), a);
    if (q.y > 0.5) { return q; }
  }
  let aNonposInt = a <= 0.0 && a == floor(a);
  if (aNonposInt && s > 0.0) { return vec2<f32>(_gpu_inf(), 1.0); }
  if (a < 0.0 && s != floor(s)) { return vec2<f32>(0.0); }
  if (a < -1.0e6) { return vec2<f32>(0.0); }
  if (z > 1.0) {
    if (s > 0.0 || s != floor(s)) { return vec2<f32>(0.0); }
    return _gpu_lerch_hermite(z, s, a);
  }
  if (z < -1.0) {
    if (s > 0.0) { return _gpu_lerch_integral(z, s, a); }
    return _gpu_lerch_negative(z, s, a);
  }
  if (z < 0.0 && s > 0.0) {
    let e = _gpu_lerch_euler(z, s, a);
    if (e.y > 0.5) { return e; }
    return _gpu_lerch_integral(z, s, a);
  }
  if (z == -1.0) { return _gpu_lerch_negative(z, s, a); }
  let r = _gpu_lerch_series(z, s, a);
  if (r.y > 0.5) { return r; }
  if (s > 0.0) { return _gpu_lerch_integral(z, s, a); }
  return _gpu_lerch_negative(z, s, a);
}

// Phi(z, s, a) for z < 0 and -30 <= s <= -3 from the Fourier modes of the
// base point: see the GLSL preamble.
fn _gpu_lerch_modes(z: f32, s: f32, a: f32, c: f32) -> vec2<f32> {
  let EPS = 6.0e-8;
  let FLUSH = 2.0e-31; // 1.18e-38 / EPS
  let PI = 3.14159265358979;
  if (s < -30.0 || abs(a) >= 100.0) { return vec2<f32>(0.0); }
  var b = a;
  var pre: f32 = 0.0;
  var post: f32 = 0.0;
  if (a <= 0.0) {
    pre = floor(-a) + 1.0;
    b = a + pre;
  } else if (a > 1.0) {
    post = ceil(a) - 1.0;
    b = a - post;
  }
  var head: f32 = 0.0;
  var herr: f32 = 0.0;
  var zk: f32 = 1.0;
  for (var j: i32 = 0; j < 128; j = j + 1) {
    if (f32(j) >= pre) { break; }
    let bj = a + f32(j);
    if (bj != 0.0) {
      let t = zk * _gpu_zeta_pow(bj, -s);
      head = head + t;
      herr = herr + abs(t) * (3.0 + f32(j) + abs(s * log2(abs(bj))));
    }
    zk = zk * z;
  }
  let L = log(-z);
  let sm1 = s - 1.0;
  let hs = 0.5 * sm1;
  let ps = hs - 2.0 * floor(0.5 * hs); // (s-1)/2 modulo 2
  let L2 = L * L;
  let lr1 = log(L2 + PI * PI);
  var sum: f32 = 0.0;
  var err: f32 = 0.0;
  var tail: f32 = 0.0;
  for (var n: i32 = 1; n <= 128; n = n + 1) {
    let m = f32(2 * n - 1);
    let x = PI * m;
    let lr = log(L2 + x * x);
    let at = atan(L / x) / PI;
    let bm = b * m;
    let P = (bm - 2.0 * floor(0.5 * bm)) + ps + sm1 * at;
    let k = floor(P + 0.5);
    var cs = cos(PI * (P - k));
    if ((k % 2.0) != 0.0) { cs = -cs; }
    let ex = hs * (lr - lr1);
    let mag = exp(ex);
    let t = mag * cs;
    sum = sum + t;
    err = err + abs(t) * (4.0 + abs(ex)) +
      mag * (abs(hs) * (abs(lr) + abs(lr1)) + PI * (abs(P) + abs(sm1) * abs(at) + b * m));
    tail = mag * m / (-2.0 * s);
    if (tail <= 1e-9) { break; }
  }
  let lg = _gpu_lerch_lgamma(1.0 - s);
  let scale = 2.0 * exp(lg + hs * lr1 - (b - c) * L);
  var phib = scale * sum;
  if (!(scale < 3.4e38 && abs(phib) < 3.4e38)) { return vec2<f32>(0.0); }
  var eb = scale * (err + tail / EPS + 4.0 * abs(sum)) +
    abs(phib) * (abs(lg) + abs(hs * lr1) + abs((b - c) * L) + 12.0);
  if (scale < 1.18e-38 || abs(phib) < 1.18e-38) { eb = eb + FLUSH * (1.0 + abs(sum)); }
  if (c > 0.5) { phib = -phib; } // z = -e^L
  var res: f32;
  var rerr: f32;
  if (post > 0.0) {
    var acc = phib;
    var aerr = eb;
    var zj: f32 = 1.0;
    for (var j: i32 = 0; j < 128; j = j + 1) {
      if (f32(j) >= post) { break; }
      let bj = b + f32(j);
      let t = zj * pow(bj, -s);
      acc = acc - t;
      aerr = aerr + abs(t) * (3.0 + f32(j) + abs(s * log2(bj)));
      zj = zj * z;
    }
    let zinv = pow(-z, -post);
    if (!(zinv >= 1.18e-38 && zinv < 3.4e38 && abs(acc) >= 1.18e-38 && abs(acc) < 3.4e38)) {
      return vec2<f32>(0.0);
    }
    var sg: f32 = -1.0;
    if ((post % 2.0) == 0.0) { sg = 1.0; }
    res = sg * zinv * acc;
    rerr = zinv * (aerr + abs(acc) * (post + 2.0)) + abs(res) * abs(post * log2(-z));
  } else {
    if (!(abs(zk) >= 1.18e-38 && abs(zk) < 3.4e38)) { return vec2<f32>(0.0); }
    res = head + zk * phib;
    rerr = herr + abs(zk) * (eb + abs(phib) * (pre + 2.0));
  }
  // An estimate that overflowed to +inf declines: see the GLSL form.
  if (!(abs(res) >= 1.18e-38 && abs(res) < 3.4e38) ||
      !(rerr < 3.4e38 && rerr <= 500.0 * abs(res))) {
    return vec2<f32>(0.0);
  }
  return vec2<f32>(res, 1.0);
}

// The Fourier modes last, where every other method declines \u2014 see the GLSL
// preamble.
fn _gpu_lerch_phi(z: f32, s: f32, a: f32) -> f32 {
  let r = _gpu_lerch_core(z, s, a);
  if (r.y > 0.5) { return r.x; }
  if (z < 0.0 && s <= -3.0 && !(a < 0.0 && s != floor(s))) {
    let q = _gpu_lerch_modes(z, s, a, 0.0);
    if (q.y > 0.5) { return q.x; }
  }
  return _gpu_nan();
}

// Li_s(z) for z < -1 and a negative non-integer s, by Jonquiere's
// inversion formula: see the GLSL preamble.
fn _gpu_poly_log_inversion(s: f32, z: f32) -> vec2<f32> {
  let EPS = 6.0e-8;
  let FLUSH = 2.0e-31; // 1.18e-38 / EPS
  let PI = 3.14159265358979;
  let B = array<f32, 8>(1.0 / 6.0, -1.0 / 30.0, 1.0 / 42.0, -1.0 / 30.0,
    5.0 / 66.0, -691.0 / 2730.0, 7.0 / 6.0, -3617.0 / 510.0);
  let ai = -log(-z) / (2.0 * PI);
  let sig = 1.0 - s;
  var zr: f32 = 0.0;
  var zi: f32 = 0.0;
  var zerr: f32 = 0.0;
  for (var k: i32 = 0; k < 12; k = k + 1) {
    let wk = 0.5 + f32(k);
    let lnwk = 0.5 * log(wk * wk + ai * ai);
    let ph = -sig * atan2(ai, wk);
    let m = exp(-sig * lnwk);
    zr = zr + m * cos(ph);
    zi = zi + m * sin(ph);
    zerr = zerr + m * (4.0 + abs(sig * lnwk) + abs(ph));
  }
  let wr = 12.5;
  let lnw = 0.5 * log(wr * wr + ai * ai);
  let th = atan2(ai, wr);
  // w^(1 - sig) / (sig - 1), from s itself (see the GLSL preamble).
  let m1 = exp(s * lnw) / -s;
  let p1 = s * th;
  zr = zr + m1 * cos(p1);
  zi = zi + m1 * sin(p1);
  zerr = zerr + abs(m1) * (4.0 + abs(s * lnw) + abs(p1));
  let m0 = exp(-sig * lnw);
  let p0 = -sig * th;
  zr = zr + 0.5 * m0 * cos(p0);
  zi = zi + 0.5 * m0 * sin(p0);
  zerr = zerr + 0.5 * m0 * (4.0 + abs(sig * lnw) + abs(p0));
  let mu1 = exp((-sig - 1.0) * lnw);
  let pu1 = (-sig - 1.0) * th;
  var ur = sig / 2.0 * mu1 * cos(pu1);
  var ui = sig / 2.0 * mu1 * sin(pu1);
  let w2r = wr * wr - ai * ai;
  let w2i = 2.0 * wr * ai;
  let w2d = w2r * w2r + w2i * w2i;
  let iw2r = w2r / w2d;
  let iw2i = -w2i / w2d;
  var prev: f32 = 3.0e38;
  for (var j: i32 = 1; j <= 8; j = j + 1) {
    let tr = ur * B[j - 1];
    let ti = ui * B[j - 1];
    let ta = abs(tr) + abs(ti);
    if (ta >= prev) { break; }
    zr = zr + tr;
    zi = zi + ti;
    zerr = zerr + ta * (10.0 + abs(sig * lnw));
    prev = ta;
    let mm = f32(2 * j);
    let c = (sig + mm - 1.0) * (sig + mm) / ((mm + 1.0) * (mm + 2.0));
    let nr = c * (ur * iw2r - ui * iw2i);
    ui = c * (ur * iw2i + ui * iw2r);
    ur = nr;
  }
  zerr = zerr + 44.0 * FLUSH; // at most 22 terms in each of zr and zi
  let n = floor(s + 0.5);
  let d = s - n;
  let sgn = select(-1.0, 1.0, n % 2.0 == 0.0);
  let lg1 = _gpu_lerch_lgamma(sig);
  let fm = sgn * sin(PI * d) * exp(s * log(2.0 * PI) + lg1) / PI;
  let fre = fm * cos(0.5 * PI * s);
  let fim = fm * sin(0.5 * PI * s);
  let first = fre * zr - fim * zi;
  let firstErr = abs(fm) * zerr +
    abs(fm) * sqrt(zr * zr + zi * zi) * (30.0 + abs(lg1) + abs(s * 2.7));
  let iz = 1.0 / z;
  var li: f32 = 0.0;
  var lierr: f32 = 0.0;
  if (iz >= -0.5) {
    var wk: f32 = 1.0;
    var prevT: f32 = 3.0e38;
    var done = false;
    for (var k: i32 = 1; k < 200; k = k + 1) {
      wk = wk * iz;
      let t = wk * pow(f32(k), -s);
      li = li + t;
      let size = abs(t);
      lierr = lierr + size * (2.0 + f32(k) + abs(s * log2(f32(k)))) + FLUSH;
      let rho = -iz * pow(f32(k + 1) / f32(k), -s);
      if (size < prevT && rho < 1.0 && size * rho / (1.0 - rho) <= 1e-8 * abs(li)) {
        done = true;
        break;
      }
      prevT = size;
    }
    if (!done) { return vec2<f32>(0.0); }
  } else {
    let inner = _gpu_lerch_negative(iz, s, 1.0);
    if (inner.y < 0.5) { return vec2<f32>(0.0); }
    li = iz * inner.x;
    lierr = 500.0 * abs(li);
  }
  let res = first - sgn * cos(PI * d) * li;
  let bound = ((firstErr + 4.0 * abs(first)) + (lierr + 2.0 * abs(li))) + 4.0 * FLUSH;
  if (!(abs(res) >= 1.18e-38 && abs(res) < 3.4e38) ||
      !(bound < 3.4e38 && bound <= 500.0 * abs(res))) {
    return vec2<f32>(0.0);
  }
  return vec2<f32>(res, 1.0);
}

// PolyLog(s, z): see _gpu_poly_log in GPU_LERCH_PREAMBLE_GLSL for the
// cases (closed forms for the orders 1, 0, -1 and -2 ... -12, then
// z * Phi(z, s, 1), then the inversion formula).
fn _gpu_poly_log(s: f32, z: f32) -> f32 {
  if (z == 0.0) { return 0.0; }
  if (s == 1.0) {
    if (z == 1.0) { return _gpu_inf(); }
    if (z < 1.0) { return -log(1.0 - z); }
    return _gpu_nan();
  }
  if (s == 0.0) {
    if (z == 1.0) { return _gpu_inf(); }
    return z / (1.0 - z);
  }
  if (s == -1.0) {
    if (z == 1.0) { return _gpu_inf(); }
    return z / ((1.0 - z) * (1.0 - z));
  }
  if (s <= -2.0 && s >= -12.0 && s == floor(s) && z != 1.0) {
    let n = i32(-s);
    var row: array<f32, 13>;
    row[0] = 1.0;
    for (var i: i32 = 1; i < 13; i = i + 1) { row[i] = 0.0; }
    for (var m: i32 = 1; m <= n; m = m + 1) {
      for (var k: i32 = m - 1; k >= 1; k = k - 1) {
        row[k] = f32(k + 1) * row[k] + f32(m - k) * row[k - 1];
      }
    }
    if (abs(z) > 1.0) {
      let v = 1.0 / (1.0 - z);
      let u = z * v;
      var r = row[n - 1];
      var vp = v;
      for (var k: i32 = n - 2; k >= 0; k = k - 1) {
        r = r * u + row[k] * vp;
        vp = vp * v;
      }
      return u * v * r;
    }
    var p: f32 = 0.0;
    for (var k: i32 = n - 1; k >= 0; k = k - 1) { p = p * z + row[k]; }
    var den: f32 = 1.0;
    for (var i: i32 = 0; i <= n; i = i + 1) { den = den * (1.0 - z); }
    return z * p / den;
  }
  // Below z = -1 a small Phi(z, s, 1) is left to the inversion and the
  // modes: see the GLSL preamble.
  let r = _gpu_lerch_core(z, s, 1.0);
  if (r.y > 0.5 && (z >= -1.0 || (abs(r.x) >= 3.9e-34 && abs(z * r.x) < 3.4e38))) {
    return z * r.x;
  }
  if (z < -1.0 && s < 0.0 && s != floor(s)) {
    let v = _gpu_poly_log_inversion(s, z);
    if (v.y > 0.5) { return v.x; }
  }
  if (z < 0.0 && s <= -3.0) {
    let q = _gpu_lerch_modes(z, s, 1.0, 1.0);
    if (q.y > 0.5) { return q.x; }
  }
  return _gpu_nan();
}
`,ic=`
float _gpu_erf(float x) {
  float ax = abs(x);
  float t = 1.0 / (1.0 + 0.3275911 * ax);
  float y = ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t;
  float result = 1.0 - y * exp(-ax * ax);
  return x < 0.0 ? -result : result;
}

float _gpu_erfinv(float x) {
  float pi = 3.14159265358979;
  float x2 = x * x;
  float x3 = x * x2;
  float x5 = x3 * x2;
  float x7 = x5 * x2;
  float x9 = x7 * x2;
  return sqrt(pi) * 0.5 * (x + (pi / 12.0) * x3 + (7.0 * pi * pi / 480.0) * x5 + (127.0 * pi * pi * pi / 40320.0) * x7 + (4369.0 * pi * pi * pi * pi / 5806080.0) * x9);
}
`,sc=`
fn _gpu_erf(x: f32) -> f32 {
  let ax = abs(x);
  let t = 1.0 / (1.0 + 0.3275911 * ax);
  let y = ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t;
  let result = 1.0 - y * exp(-ax * ax);
  if (x < 0.0) { return -result; }
  return result;
}

fn _gpu_erfinv(x: f32) -> f32 {
  let pi = 3.14159265358979;
  let x2 = x * x;
  let x3 = x * x2;
  let x5 = x3 * x2;
  let x7 = x5 * x2;
  let x9 = x7 * x2;
  return sqrt(pi) * 0.5 * (x + (pi / 12.0) * x3 + (7.0 * pi * pi / 480.0) * x5 + (127.0 * pi * pi * pi / 40320.0) * x7 + (4369.0 * pi * pi * pi * pi / 5806080.0) * x9);
}
`,ac=`
float _gpu_heaviside(float x) {
  if ((floatBitsToUint(x) & 0x7FFFFFFFu) > 0x7F800000u) return x;
  if (x < 0.0) return 0.0;
  if (x > 0.0) return 1.0;
  return 0.5;
}
`,lc=`
fn _gpu_heaviside(x: f32) -> f32 {
  if ((bitcast<u32>(x) & 0x7FFFFFFFu) > 0x7F800000u) { return x; }
  if (x < 0.0) { return 0.0; }
  if (x > 0.0) { return 1.0; }
  return 0.5;
}
`,uc=`
float _gpu_sinc(float x) {
  if (abs(x) < 1e-10) return 1.0;
  return sin(x) / x;
}
`,fc=`
fn _gpu_sinc(x: f32) -> f32 {
  if (abs(x) < 1e-10) { return 1.0; }
  return sin(x) / x;
}
`,cc=`
float _gpu_polevl(float x, float c[12], int n) {
  float ans = c[0];
  for (int i = 1; i < n; i++) ans = ans * x + c[i];
  return ans;
}
`,pc=`
fn _gpu_polevl(x: f32, c: array<f32, 12>, n: i32) -> f32 {
  var ans = c[0];
  for (var i: i32 = 1; i < n; i++) { ans = ans * x + c[i]; }
  return ans;
}
`,dc=`
float _gpu_fresnelC(float x_in) {
  float sgn = x_in < 0.0 ? -1.0 : 1.0;
  float x = abs(x_in);

  if (x < 1.6) {
    float x2 = x * x;
    float t = x2 * x2;
    float cn[6] = float[6](
      -4.98843114573573548651e-8, 9.50428062829859605134e-6,
      -6.45191435683965050962e-4, 1.88843319396703850064e-2,
      -2.05525900955013891793e-1, 9.99999999999999998822e-1
    );
    float cd[7] = float[7](
      3.99982968972495980367e-12, 9.15439215774657478799e-10,
      1.25001862479598821474e-7, 1.22262789024179030997e-5,
      8.68029542941784300606e-4, 4.12142090722199792936e-2, 1.0
    );
    return sgn * x * _gpu_polevl(t, cn, 6) / _gpu_polevl(t, cd, 7);
  }

  if (x < 36.0) {
    float x2 = x * x;
    float t = 3.14159265358979 * x2;
    float u = 1.0 / (t * t);
    float fn[10] = float[10](
      4.21543555043677546506e-1, 1.43407919780758885261e-1,
      1.15220955073585758835e-2, 3.450179397825740279e-4,
      4.63613749287867322088e-6, 3.05568983790257605827e-8,
      1.02304514164907233465e-10, 1.72010743268161828879e-13,
      1.34283276233062758925e-16, 3.76329711269987889006e-20
    );
    float fd[11] = float[11](
      1.0, 7.51586398353378947175e-1,
      1.16888925859191382142e-1, 6.44051526508858611005e-3,
      1.55934409164153020873e-4, 1.8462756734893054587e-6,
      1.12699224763999035261e-8, 3.60140029589371370404e-11,
      5.8875453362157841001e-14, 4.52001434074129701496e-17,
      1.25443237090011264384e-20
    );
    float gn[11] = float[11](
      5.04442073643383265887e-1, 1.97102833525523411709e-1,
      1.87648584092575249293e-2, 6.84079380915393090172e-4,
      1.15138826111884280931e-5, 9.82852443688422223854e-8,
      4.45344415861750144738e-10, 1.08268041139020870318e-12,
      1.37555460633261799868e-15, 8.36354435630677421531e-19,
      1.86958710162783235106e-22
    );
    float gd[12] = float[12](
      1.0, 1.47495759925128324529,
      3.37748989120019970451e-1, 2.53603741420338795122e-2,
      8.14679107184306179049e-4, 1.27545075667729118702e-5,
      1.04314589657571990585e-7, 4.60680728146520428211e-10,
      1.10273215066240270757e-12, 1.38796531259578871258e-15,
      8.39158816283118707363e-19, 1.86958710162783236342e-22
    );
    float f = 1.0 - u * _gpu_polevl(u, fn, 10) / _gpu_polevl(u, fd, 11);
    float g = (1.0 / t) * _gpu_polevl(u, gn, 11) / _gpu_polevl(u, gd, 12);
    float z = 1.5707963267948966 * x2;
    float c = cos(z);
    float s = sin(z);
    return sgn * (0.5 + (f * s - g * c) / (3.14159265358979 * x));
  }

  return sgn * 0.5;
}
`,mc=`
fn _gpu_fresnelC(x_in: f32) -> f32 {
  let sgn: f32 = select(1.0, -1.0, x_in < 0.0);
  let x = abs(x_in);

  if (x < 1.6) {
    let x2 = x * x;
    let t = x2 * x2;
    var cn = array<f32, 12>(
      -4.98843114573573548651e-8, 9.50428062829859605134e-6,
      -6.45191435683965050962e-4, 1.88843319396703850064e-2,
      -2.05525900955013891793e-1, 9.99999999999999998822e-1,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0
    );
    var cd = array<f32, 12>(
      3.99982968972495980367e-12, 9.15439215774657478799e-10,
      1.25001862479598821474e-7, 1.22262789024179030997e-5,
      8.68029542941784300606e-4, 4.12142090722199792936e-2, 1.0,
      0.0, 0.0, 0.0, 0.0, 0.0
    );
    return sgn * x * _gpu_polevl(t, cn, 6) / _gpu_polevl(t, cd, 7);
  }

  if (x < 36.0) {
    let x2 = x * x;
    let t = 3.14159265358979 * x2;
    let u = 1.0 / (t * t);
    var fn = array<f32, 12>(
      4.21543555043677546506e-1, 1.43407919780758885261e-1,
      1.15220955073585758835e-2, 3.450179397825740279e-4,
      4.63613749287867322088e-6, 3.05568983790257605827e-8,
      1.02304514164907233465e-10, 1.72010743268161828879e-13,
      1.34283276233062758925e-16, 3.76329711269987889006e-20,
      0.0, 0.0
    );
    var fd = array<f32, 12>(
      1.0, 7.51586398353378947175e-1,
      1.16888925859191382142e-1, 6.44051526508858611005e-3,
      1.55934409164153020873e-4, 1.8462756734893054587e-6,
      1.12699224763999035261e-8, 3.60140029589371370404e-11,
      5.8875453362157841001e-14, 4.52001434074129701496e-17,
      1.25443237090011264384e-20, 0.0
    );
    var gn = array<f32, 12>(
      5.04442073643383265887e-1, 1.97102833525523411709e-1,
      1.87648584092575249293e-2, 6.84079380915393090172e-4,
      1.15138826111884280931e-5, 9.82852443688422223854e-8,
      4.45344415861750144738e-10, 1.08268041139020870318e-12,
      1.37555460633261799868e-15, 8.36354435630677421531e-19,
      1.86958710162783235106e-22, 0.0
    );
    var gd = array<f32, 12>(
      1.0, 1.47495759925128324529,
      3.37748989120019970451e-1, 2.53603741420338795122e-2,
      8.14679107184306179049e-4, 1.27545075667729118702e-5,
      1.04314589657571990585e-7, 4.60680728146520428211e-10,
      1.10273215066240270757e-12, 1.38796531259578871258e-15,
      8.39158816283118707363e-19, 1.86958710162783236342e-22
    );
    let f = 1.0 - u * _gpu_polevl(u, fn, 10) / _gpu_polevl(u, fd, 11);
    let g = (1.0 / t) * _gpu_polevl(u, gn, 11) / _gpu_polevl(u, gd, 12);
    let z = 1.5707963267948966 * x2;
    let c = cos(z);
    let s = sin(z);
    return sgn * (0.5 + (f * s - g * c) / (3.14159265358979 * x));
  }

  return sgn * 0.5;
}
`,hc=`
float _gpu_fresnelS(float x_in) {
  float sgn = x_in < 0.0 ? -1.0 : 1.0;
  float x = abs(x_in);

  if (x < 1.6) {
    float x2 = x * x;
    float t = x2 * x2;
    float sn[6] = float[6](
      -2.99181919401019853726e3, 7.08840045257738576863e5,
      -6.29741486205862506537e7, 2.54890880573376359104e9,
      -4.42979518059697779103e10, 3.18016297876567817986e11
    );
    float sd[7] = float[7](
      1.0, 2.81376268889994315696e2, 4.55847810806532581675e4,
      5.1734388877009640073e6, 4.19320245898111231129e8, 2.2441179564534092094e10,
      6.07366389490084914091e11
    );
    return sgn * x * x2 * _gpu_polevl(t, sn, 6) / _gpu_polevl(t, sd, 7);
  }

  if (x < 36.0) {
    float x2 = x * x;
    float t = 3.14159265358979 * x2;
    float u = 1.0 / (t * t);
    float fn[10] = float[10](
      4.21543555043677546506e-1, 1.43407919780758885261e-1,
      1.15220955073585758835e-2, 3.450179397825740279e-4,
      4.63613749287867322088e-6, 3.05568983790257605827e-8,
      1.02304514164907233465e-10, 1.72010743268161828879e-13,
      1.34283276233062758925e-16, 3.76329711269987889006e-20
    );
    float fd[11] = float[11](
      1.0, 7.51586398353378947175e-1,
      1.16888925859191382142e-1, 6.44051526508858611005e-3,
      1.55934409164153020873e-4, 1.8462756734893054587e-6,
      1.12699224763999035261e-8, 3.60140029589371370404e-11,
      5.8875453362157841001e-14, 4.52001434074129701496e-17,
      1.25443237090011264384e-20
    );
    float gn[11] = float[11](
      5.04442073643383265887e-1, 1.97102833525523411709e-1,
      1.87648584092575249293e-2, 6.84079380915393090172e-4,
      1.15138826111884280931e-5, 9.82852443688422223854e-8,
      4.45344415861750144738e-10, 1.08268041139020870318e-12,
      1.37555460633261799868e-15, 8.36354435630677421531e-19,
      1.86958710162783235106e-22
    );
    float gd[12] = float[12](
      1.0, 1.47495759925128324529,
      3.37748989120019970451e-1, 2.53603741420338795122e-2,
      8.14679107184306179049e-4, 1.27545075667729118702e-5,
      1.04314589657571990585e-7, 4.60680728146520428211e-10,
      1.10273215066240270757e-12, 1.38796531259578871258e-15,
      8.39158816283118707363e-19, 1.86958710162783236342e-22
    );
    float f = 1.0 - u * _gpu_polevl(u, fn, 10) / _gpu_polevl(u, fd, 11);
    float g = (1.0 / t) * _gpu_polevl(u, gn, 11) / _gpu_polevl(u, gd, 12);
    float z = 1.5707963267948966 * x2;
    float c = cos(z);
    float s = sin(z);
    return sgn * (0.5 - (f * c + g * s) / (3.14159265358979 * x));
  }

  return sgn * 0.5;
}
`,gc=`
fn _gpu_fresnelS(x_in: f32) -> f32 {
  let sgn: f32 = select(1.0, -1.0, x_in < 0.0);
  let x = abs(x_in);

  if (x < 1.6) {
    let x2 = x * x;
    let t = x2 * x2;
    var sn = array<f32, 12>(
      -2.99181919401019853726e3, 7.08840045257738576863e5,
      -6.29741486205862506537e7, 2.54890880573376359104e9,
      -4.42979518059697779103e10, 3.18016297876567817986e11,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0
    );
    var sd = array<f32, 12>(
      1.0, 2.81376268889994315696e2, 4.55847810806532581675e4,
      5.1734388877009640073e6, 4.19320245898111231129e8, 2.2441179564534092094e10,
      6.07366389490084914091e11,
      0.0, 0.0, 0.0, 0.0, 0.0
    );
    return sgn * x * x2 * _gpu_polevl(t, sn, 6) / _gpu_polevl(t, sd, 7);
  }

  if (x < 36.0) {
    let x2 = x * x;
    let t = 3.14159265358979 * x2;
    let u = 1.0 / (t * t);
    var fn = array<f32, 12>(
      4.21543555043677546506e-1, 1.43407919780758885261e-1,
      1.15220955073585758835e-2, 3.450179397825740279e-4,
      4.63613749287867322088e-6, 3.05568983790257605827e-8,
      1.02304514164907233465e-10, 1.72010743268161828879e-13,
      1.34283276233062758925e-16, 3.76329711269987889006e-20,
      0.0, 0.0
    );
    var fd = array<f32, 12>(
      1.0, 7.51586398353378947175e-1,
      1.16888925859191382142e-1, 6.44051526508858611005e-3,
      1.55934409164153020873e-4, 1.8462756734893054587e-6,
      1.12699224763999035261e-8, 3.60140029589371370404e-11,
      5.8875453362157841001e-14, 4.52001434074129701496e-17,
      1.25443237090011264384e-20, 0.0
    );
    var gn = array<f32, 12>(
      5.04442073643383265887e-1, 1.97102833525523411709e-1,
      1.87648584092575249293e-2, 6.84079380915393090172e-4,
      1.15138826111884280931e-5, 9.82852443688422223854e-8,
      4.45344415861750144738e-10, 1.08268041139020870318e-12,
      1.37555460633261799868e-15, 8.36354435630677421531e-19,
      1.86958710162783235106e-22, 0.0
    );
    var gd = array<f32, 12>(
      1.0, 1.47495759925128324529,
      3.37748989120019970451e-1, 2.53603741420338795122e-2,
      8.14679107184306179049e-4, 1.27545075667729118702e-5,
      1.04314589657571990585e-7, 4.60680728146520428211e-10,
      1.10273215066240270757e-12, 1.38796531259578871258e-15,
      8.39158816283118707363e-19, 1.86958710162783236342e-22
    );
    let f = 1.0 - u * _gpu_polevl(u, fn, 10) / _gpu_polevl(u, fd, 11);
    let g = (1.0 / t) * _gpu_polevl(u, gn, 11) / _gpu_polevl(u, gd, 12);
    let z = 1.5707963267948966 * x2;
    let c = cos(z);
    let s = sin(z);
    return sgn * (0.5 - (f * c + g * s) / (3.14159265358979 * x));
  }

  return sgn * 0.5;
}
`,_c=`
float _gpu_factorial(int n) {
  float f = 1.0;
  for (int i = 2; i <= n; i++) f *= float(i);
  return f;
}

float _gpu_besselJ_series(int n, float x) {
  float halfX = x / 2.0;
  float negQ = -(x * x) / 4.0;
  float term = 1.0;
  for (int i = 1; i <= n; i++) term /= float(i);
  float s = term;
  for (int k = 1; k <= 60; k++) {
    term *= negQ / (float(k) * float(n + k));
    s += term;
    if (abs(term) < abs(s) * 1e-7) break;
  }
  return s * pow(halfX, float(n));
}

float _gpu_besselJ_asymptotic(int n, float x) {
  float mu = 4.0 * float(n) * float(n);
  float P = 1.0;
  float Q = 0.0;
  float ak = 1.0;
  float e8x = 8.0 * x;
  for (int k = 1; k <= 12; k++) {
    float twokm1 = float(2 * k - 1);
    ak *= mu - twokm1 * twokm1;
    float denom = _gpu_factorial(k) * pow(e8x, float(k));
    float contrib = ak / denom;
    if (k == 1 || k == 3 || k == 5 || k == 7 || k == 9 || k == 11) {
      if (((k - 1) / 2) % 2 == 0) Q += contrib;
      else Q -= contrib;
    } else {
      if ((k / 2) % 2 == 1) P -= contrib;
      else P += contrib;
    }
    if (abs(contrib) < 1e-7) break;
  }
  float chi = x - (float(n) / 2.0 + 0.25) * 3.14159265358979;
  return sqrt(2.0 / (3.14159265358979 * x)) * (P * cos(chi) - Q * sin(chi));
}

float _gpu_besselJ(int n, float x) {
  if (x == 0.0) return n == 0 ? 1.0 : 0.0;
  float sgn = 1.0;
  if (n < 0) {
    n = -n;
    if (n % 2 != 0) sgn = -1.0;
  }
  if (x < 0.0) {
    x = -x;
    if (n % 2 != 0) sgn *= -1.0;
  }
  if (x > 25.0 + float(n * n) / 2.0) return sgn * _gpu_besselJ_asymptotic(n, x);
  if (x < 5.0 + float(n)) return sgn * _gpu_besselJ_series(n, x);
  int M = max(n + 20, int(ceil(x)) + 30);
  if (M > 200) return sgn * _gpu_besselJ_series(n, x);
  float vals[201];
  float jp1 = 0.0;
  float jk = 1.0;
  vals[M] = jk;
  for (int k = M; k >= 1; k--) {
    float jm1 = (2.0 * float(k) / x) * jk - jp1;
    jp1 = jk;
    jk = jm1;
    vals[k - 1] = jk;
  }
  float norm = vals[0];
  for (int k = 2; k <= M; k += 2) norm += 2.0 * vals[k];
  return sgn * vals[n] / norm;
}
`,bc=`
fn _gpu_factorial(n: i32) -> f32 {
  var f: f32 = 1.0;
  for (var i: i32 = 2; i <= n; i++) { f *= f32(i); }
  return f;
}

fn _gpu_besselJ_series(n_in: i32, x: f32) -> f32 {
  let halfX = x / 2.0;
  let negQ = -(x * x) / 4.0;
  var term: f32 = 1.0;
  for (var i: i32 = 1; i <= n_in; i++) { term /= f32(i); }
  var s = term;
  for (var k: i32 = 1; k <= 60; k++) {
    term *= negQ / (f32(k) * f32(n_in + k));
    s += term;
    if (abs(term) < abs(s) * 1e-7) { break; }
  }
  return s * pow(halfX, f32(n_in));
}

fn _gpu_besselJ_asymptotic(n_in: i32, x: f32) -> f32 {
  let mu = 4.0 * f32(n_in) * f32(n_in);
  var P: f32 = 1.0;
  var Q: f32 = 0.0;
  var ak: f32 = 1.0;
  let e8x = 8.0 * x;
  for (var k: i32 = 1; k <= 12; k++) {
    let twokm1 = f32(2 * k - 1);
    ak *= mu - twokm1 * twokm1;
    let denom = _gpu_factorial(k) * pow(e8x, f32(k));
    let contrib = ak / denom;
    if (k == 1 || k == 3 || k == 5 || k == 7 || k == 9 || k == 11) {
      if (((k - 1) / 2) % 2 == 0) { Q += contrib; }
      else { Q -= contrib; }
    } else {
      if ((k / 2) % 2 == 1) { P -= contrib; }
      else { P += contrib; }
    }
    if (abs(contrib) < 1e-7) { break; }
  }
  let chi = x - (f32(n_in) / 2.0 + 0.25) * 3.14159265358979;
  return sqrt(2.0 / (3.14159265358979 * x)) * (P * cos(chi) - Q * sin(chi));
}

fn _gpu_besselJ(n_in: i32, x_in: f32) -> f32 {
  var n = n_in;
  var x = x_in;
  if (x == 0.0) { return select(0.0, 1.0, n == 0); }
  var sgn: f32 = 1.0;
  if (n < 0) {
    n = -n;
    if (n % 2 != 0) { sgn = -1.0; }
  }
  if (x < 0.0) {
    x = -x;
    if (n % 2 != 0) { sgn *= -1.0; }
  }
  if (x > 25.0 + f32(n * n) / 2.0) { return sgn * _gpu_besselJ_asymptotic(n, x); }
  if (x < 5.0 + f32(n)) { return sgn * _gpu_besselJ_series(n, x); }
  var M = max(n + 20, i32(ceil(x)) + 30);
  if (M > 200) { return sgn * _gpu_besselJ_series(n, x); }
  var vals: array<f32, 201>;
  var jp1: f32 = 0.0;
  var jk: f32 = 1.0;
  vals[M] = jk;
  for (var k: i32 = M; k >= 1; k--) {
    let jm1 = (2.0 * f32(k) / x) * jk - jp1;
    jp1 = jk;
    jk = jm1;
    vals[k - 1] = jk;
  }
  var norm = vals[0];
  for (var k2: i32 = 2; k2 <= M; k2 += 2) { norm += 2.0 * vals[k2]; }
  return sgn * vals[n] / norm;
}
`,vc=`
float _fractal_mandelbrot(vec2 c, int maxIter) {
  vec2 z = vec2(0.0, 0.0);
  for (int i = 0; i < maxIter; i++) {
    z = vec2(z.x*z.x - z.y*z.y + c.x, 2.0*z.x*z.y + c.y);
    if (dot(z, z) > 4.0)
      return clamp((float(i) - log2(log2(dot(z, z))) + 4.0) / float(maxIter), 0.0, 1.0);
  }
  return 1.0;
}

float _fractal_julia(vec2 z, vec2 c, int maxIter) {
  for (int i = 0; i < maxIter; i++) {
    z = vec2(z.x*z.x - z.y*z.y + c.x, 2.0*z.x*z.y + c.y);
    if (dot(z, z) > 4.0)
      return clamp((float(i) - log2(log2(dot(z, z))) + 4.0) / float(maxIter), 0.0, 1.0);
  }
  return 1.0;
}
`,yc=`
fn _fractal_mandelbrot(c: vec2f, maxIter: i32) -> f32 {
  var z = vec2f(0.0, 0.0);
  for (var i: i32 = 0; i < maxIter; i++) {
    z = vec2f(z.x*z.x - z.y*z.y + c.x, 2.0*z.x*z.y + c.y);
    if (dot(z, z) > 4.0) {
      return clamp((f32(i) - log2(log2(dot(z, z))) + 4.0) / f32(maxIter), 0.0, 1.0);
    }
  }
  return 1.0;
}

fn _fractal_julia(z_in: vec2f, c: vec2f, maxIter: i32) -> f32 {
  var z = z_in;
  for (var i: i32 = 0; i < maxIter; i++) {
    z = vec2f(z.x*z.x - z.y*z.y + c.x, 2.0*z.x*z.y + c.y);
    if (dot(z, z) > 4.0) {
      return clamp((f32(i) - log2(log2(dot(z, z))) + 4.0) / f32(maxIter), 0.0, 1.0);
    }
  }
  return 1.0;
}
`,xc=`
float _gpu_gcd(float a, float b) {
  a = abs(a); b = abs(b);
  if (a == 0.0) return b;
  if (b == 0.0) return a;
  if (floor(a) == a && floor(b) == b && a < 16777216.0 && b < 16777216.0) {
    for (int i = 0; i < 64; i++) {
      if (b == 0.0) break;
      float t = mod(a, b);
      a = b;
      b = t;
    }
    return a;
  }
  float mn = min(a, b);
  float tol = 1e-6 * max(a, b);
  for (int i = 0; i < 64; i++) {
    if (b <= tol) break;
    float t = mod(a, b);
    a = b;
    b = t;
  }
  return a > mn ? mn : a;
}

float _gpu_lcm(float a, float b) {
  if (a == 0.0 || b == 0.0) return 0.0;
  return abs(a) / _gpu_gcd(a, b) * abs(b);
}
`,wc=`
fn _gpu_gcd(a_in: f32, b_in: f32) -> f32 {
  var a = abs(a_in); var b = abs(b_in);
  if (a == 0.0) { return b; }
  if (b == 0.0) { return a; }
  if (floor(a) == a && floor(b) == b && a < 16777216.0 && b < 16777216.0) {
    for (var i: i32 = 0; i < 64; i++) {
      if (b == 0.0) { break; }
      let t = a % b;
      a = b;
      b = t;
    }
    return a;
  }
  let mn = min(a, b);
  let tol = 1e-6 * max(a, b);
  for (var i: i32 = 0; i < 64; i++) {
    if (b <= tol) { break; }
    let t = a % b;
    a = b;
    b = t;
  }
  if (a > mn) { return mn; }
  return a;
}

fn _gpu_lcm(a: f32, b: f32) -> f32 {
  if (a == 0.0 || b == 0.0) { return 0.0; }
  return abs(a) / _gpu_gcd(a, b) * abs(b);
}
`,$c=`
uvec3 _gpu_pcg3d(uvec3 v) {
  v = v * 1664525u + 1013904223u;
  v.x += v.y*v.z; v.y += v.z*v.x; v.z += v.x*v.y;
  v ^= v >> 16u;
  v.x += v.y*v.z; v.y += v.z*v.x; v.z += v.x*v.y;
  return v;
}
float _gpu_rnd_draw(uvec2 seed, inout uint n) {
  uvec3 w = _gpu_pcg3d(uvec3(seed.x, seed.y, n));
  n = n + 1u;
  return float(w.x >> 8u) * (1.0 / 16777216.0);
}
`,Ec=`
fn _gpu_pcg3d(v_in: vec3<u32>) -> vec3<u32> {
  var v = v_in * 1664525u + 1013904223u;
  v.x += v.y*v.z; v.y += v.z*v.x; v.z += v.x*v.y;
  v = v ^ (v >> vec3<u32>(16u));
  v.x += v.y*v.z; v.y += v.z*v.x; v.z += v.x*v.y;
  return v;
}
fn _gpu_rnd_draw(seed: vec2<u32>, n: ptr<private, u32>) -> f32 {
  let w = _gpu_pcg3d(vec3<u32>(seed.x, seed.y, *n));
  *n = *n + 1u;
  return f32(w.x >> 8u) * (1.0 / 16777216.0);
}
`,zc=`
float _gpu_median_2(float a, float b) {
  return (a + b) * 0.5;
}
float _gpu_median_3(float a, float b, float c) {
  return max(min(a, b), min(max(a, b), c));
}
float _gpu_median_4(float a, float b, float c, float d) {
  float lo = max(min(a, b), min(c, d));
  float hi = min(max(a, b), max(c, d));
  return (lo + hi) * 0.5;
}
float _gpu_median_5(float a, float b, float c, float d, float e) {
  float t; float v0=a,v1=b,v2=c,v3=d,v4=e;
  t=min(v0,v1); v1=max(v0,v1); v0=t;
  t=min(v3,v4); v4=max(v3,v4); v3=t;
  t=min(v2,v4); v4=max(v2,v4); v2=t;
  t=min(v2,v3); v3=max(v2,v3); v2=t;
  t=min(v0,v3); v3=max(v0,v3); v0=t;
  t=min(v0,v2); v2=max(v0,v2); v0=t;
  t=min(v1,v4); v4=max(v1,v4); v1=t;
  t=min(v1,v3); v3=max(v1,v3); v1=t;
  t=min(v1,v2); v2=max(v1,v2); v1=t;
  return v2;
}
float _gpu_median_6(float a, float b, float c, float d, float e, float f) {
  float t; float v0=a,v1=b,v2=c,v3=d,v4=e,v5=f;
  t=min(v0,v1); v1=max(v0,v1); v0=t;
  t=min(v2,v3); v3=max(v2,v3); v2=t;
  t=min(v4,v5); v5=max(v4,v5); v4=t;
  t=min(v0,v2); v2=max(v0,v2); v0=t;
  t=min(v1,v3); v3=max(v1,v3); v1=t;
  t=min(v0,v4); v4=max(v0,v4); v0=t;
  t=min(v1,v5); v5=max(v1,v5); v1=t;
  t=min(v2,v4); v4=max(v2,v4); v2=t;
  t=min(v1,v2); v2=max(v1,v2); v1=t;
  t=min(v3,v5); v5=max(v3,v5); v3=t;
  t=min(v3,v4); v4=max(v3,v4); v3=t;
  return (v2 + v3) * 0.5;
}
float _gpu_median_7(float a, float b, float c, float d, float e, float f, float g) {
  float t; float v0=a,v1=b,v2=c,v3=d,v4=e,v5=f,v6=g;
  t=min(v0,v1); v1=max(v0,v1); v0=t;
  t=min(v2,v3); v3=max(v2,v3); v2=t;
  t=min(v4,v5); v5=max(v4,v5); v4=t;
  t=min(v0,v2); v2=max(v0,v2); v0=t;
  t=min(v1,v3); v3=max(v1,v3); v1=t;
  t=min(v4,v6); v6=max(v4,v6); v4=t;
  t=min(v0,v4); v4=max(v0,v4); v0=t;
  t=min(v1,v5); v5=max(v1,v5); v1=t;
  t=min(v2,v6); v6=max(v2,v6); v2=t;
  t=min(v1,v2); v2=max(v1,v2); v1=t;
  t=min(v3,v5); v5=max(v3,v5); v3=t;
  t=min(v2,v4); v4=max(v2,v4); v2=t;
  t=min(v3,v4); v4=max(v3,v4); v3=t;
  return v3;
}
float _gpu_median_8(float a, float b, float c, float d, float e, float f, float g, float h) {
  float t; float v0=a,v1=b,v2=c,v3=d,v4=e,v5=f,v6=g,v7=h;
  t=min(v0,v1); v1=max(v0,v1); v0=t;
  t=min(v2,v3); v3=max(v2,v3); v2=t;
  t=min(v4,v5); v5=max(v4,v5); v4=t;
  t=min(v6,v7); v7=max(v6,v7); v6=t;
  t=min(v0,v2); v2=max(v0,v2); v0=t;
  t=min(v1,v3); v3=max(v1,v3); v1=t;
  t=min(v4,v6); v6=max(v4,v6); v4=t;
  t=min(v5,v7); v7=max(v5,v7); v5=t;
  t=min(v0,v4); v4=max(v0,v4); v0=t;
  t=min(v1,v5); v5=max(v1,v5); v1=t;
  t=min(v2,v6); v6=max(v2,v6); v2=t;
  t=min(v3,v7); v7=max(v3,v7); v3=t;
  t=min(v1,v2); v2=max(v1,v2); v1=t;
  t=min(v3,v4); v4=max(v3,v4); v3=t;
  t=min(v5,v6); v6=max(v5,v6); v5=t;
  t=min(v3,v5); v5=max(v3,v5); v3=t;
  t=min(v2,v4); v4=max(v2,v4); v2=t;
  t=min(v3,v4); v4=max(v3,v4); v3=t;
  return (v3 + v4) * 0.5;
}
`,Cc=`
fn _gpu_median_2(a: f32, b: f32) -> f32 {
  return (a + b) * 0.5;
}
fn _gpu_median_3(a: f32, b: f32, c: f32) -> f32 {
  return max(min(a, b), min(max(a, b), c));
}
fn _gpu_median_4(a: f32, b: f32, c: f32, d: f32) -> f32 {
  let lo = max(min(a, b), min(c, d));
  let hi = min(max(a, b), max(c, d));
  return (lo + hi) * 0.5;
}
fn _gpu_median_5(a: f32, b: f32, c: f32, d: f32, e: f32) -> f32 {
  var v0=a; var v1=b; var v2=c; var v3=d; var v4=e; var t: f32;
  t=min(v0,v1); v1=max(v0,v1); v0=t;
  t=min(v3,v4); v4=max(v3,v4); v3=t;
  t=min(v2,v4); v4=max(v2,v4); v2=t;
  t=min(v2,v3); v3=max(v2,v3); v2=t;
  t=min(v0,v3); v3=max(v0,v3); v0=t;
  t=min(v0,v2); v2=max(v0,v2); v0=t;
  t=min(v1,v4); v4=max(v1,v4); v1=t;
  t=min(v1,v3); v3=max(v1,v3); v1=t;
  t=min(v1,v2); v2=max(v1,v2); v1=t;
  return v2;
}
fn _gpu_median_6(a: f32, b: f32, c: f32, d: f32, e: f32, f: f32) -> f32 {
  var v0=a; var v1=b; var v2=c; var v3=d; var v4=e; var v5=f; var t: f32;
  t=min(v0,v1); v1=max(v0,v1); v0=t;
  t=min(v2,v3); v3=max(v2,v3); v2=t;
  t=min(v4,v5); v5=max(v4,v5); v4=t;
  t=min(v0,v2); v2=max(v0,v2); v0=t;
  t=min(v1,v3); v3=max(v1,v3); v1=t;
  t=min(v0,v4); v4=max(v0,v4); v0=t;
  t=min(v1,v5); v5=max(v1,v5); v1=t;
  t=min(v2,v4); v4=max(v2,v4); v2=t;
  t=min(v1,v2); v2=max(v1,v2); v1=t;
  t=min(v3,v5); v5=max(v3,v5); v3=t;
  t=min(v3,v4); v4=max(v3,v4); v3=t;
  return (v2 + v3) * 0.5;
}
fn _gpu_median_7(a: f32, b: f32, c: f32, d: f32, e: f32, f: f32, g: f32) -> f32 {
  var v0=a; var v1=b; var v2=c; var v3=d; var v4=e; var v5=f; var v6=g; var t: f32;
  t=min(v0,v1); v1=max(v0,v1); v0=t;
  t=min(v2,v3); v3=max(v2,v3); v2=t;
  t=min(v4,v5); v5=max(v4,v5); v4=t;
  t=min(v0,v2); v2=max(v0,v2); v0=t;
  t=min(v1,v3); v3=max(v1,v3); v1=t;
  t=min(v4,v6); v6=max(v4,v6); v4=t;
  t=min(v0,v4); v4=max(v0,v4); v0=t;
  t=min(v1,v5); v5=max(v1,v5); v1=t;
  t=min(v2,v6); v6=max(v2,v6); v2=t;
  t=min(v1,v2); v2=max(v1,v2); v1=t;
  t=min(v3,v5); v5=max(v3,v5); v3=t;
  t=min(v2,v4); v4=max(v2,v4); v2=t;
  t=min(v3,v4); v4=max(v3,v4); v3=t;
  return v3;
}
fn _gpu_median_8(a: f32, b: f32, c: f32, d: f32, e: f32, f: f32, g: f32, h: f32) -> f32 {
  var v0=a; var v1=b; var v2=c; var v3=d; var v4=e; var v5=f; var v6=g; var v7=h; var t: f32;
  t=min(v0,v1); v1=max(v0,v1); v0=t;
  t=min(v2,v3); v3=max(v2,v3); v2=t;
  t=min(v4,v5); v5=max(v4,v5); v4=t;
  t=min(v6,v7); v7=max(v6,v7); v6=t;
  t=min(v0,v2); v2=max(v0,v2); v0=t;
  t=min(v1,v3); v3=max(v1,v3); v1=t;
  t=min(v4,v6); v6=max(v4,v6); v4=t;
  t=min(v5,v7); v7=max(v5,v7); v5=t;
  t=min(v0,v4); v4=max(v0,v4); v0=t;
  t=min(v1,v5); v5=max(v1,v5); v1=t;
  t=min(v2,v6); v6=max(v2,v6); v2=t;
  t=min(v3,v7); v7=max(v3,v7); v3=t;
  t=min(v1,v2); v2=max(v1,v2); v1=t;
  t=min(v3,v4); v4=max(v3,v4); v3=t;
  t=min(v5,v6); v6=max(v5,v6); v5=t;
  t=min(v3,v5); v5=max(v3,v5); v3=t;
  t=min(v2,v4); v4=max(v2,v4); v2=t;
  t=min(v3,v4); v4=max(v3,v4); v3=t;
  return (v3 + v4) * 0.5;
}
`,Sc=`
float _gpu_srgb_to_linear(float c) {
  if (c != c) return c;
  float a = abs(c);
  if (a <= 0.04045) return c / 12.92;
  return sign(c) * pow((a + 0.055) / 1.055, 2.4);
}

float _gpu_linear_to_srgb(float c) {
  if (c != c) return c;
  float a = abs(c);
  if (a <= 0.0031308) return 12.92 * c;
  return sign(c) * (1.055 * pow(a, 1.0 / 2.4) - 0.055);
}

vec3 _gpu_srgb_to_oklab(vec3 rgb) {
  float r = _gpu_srgb_to_linear(rgb.x);
  float g = _gpu_srgb_to_linear(rgb.y);
  float b = _gpu_srgb_to_linear(rgb.z);
  float lc = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  float mc = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  float sc = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
  if (lc != lc || mc != mc || sc != sc) return vec3(lc + mc + sc);
  float l_ = sign(lc) * pow(abs(lc), 1.0 / 3.0);
  float m_ = sign(mc) * pow(abs(mc), 1.0 / 3.0);
  float s_ = sign(sc) * pow(abs(sc), 1.0 / 3.0);
  return vec3(
    0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_
  );
}

vec3 _gpu_oklab_to_srgb(vec3 lab) {
  float l_ = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m_ = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s_ = lab.x - 0.0894841775 * lab.y - 1.291485548 * lab.z;
  float l = l_ * l_ * l_;
  float m = m_ * m_ * m_;
  float s = s_ * s_ * s_;
  float r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  float g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  float b = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  return vec3(_gpu_linear_to_srgb(r), _gpu_linear_to_srgb(g), _gpu_linear_to_srgb(b));
}

vec3 _gpu_oklab_to_oklch(vec3 lab) {
  float C = length(lab.yz);
  float H = atan(lab.z, lab.y) * (180.0 / 3.14159265359);
  if (H < 0.0) H += 360.0;
  return vec3(lab.x, C, H);
}

vec3 _gpu_oklch_to_oklab(vec3 lch) {
  float h_rad = lch.z * (3.14159265359 / 180.0);
  return vec3(lch.x, lch.y * cos(h_rad), lch.y * sin(h_rad));
}

vec3 _gpu_srgb_to_oklch(vec3 rgb) {
  return _gpu_oklab_to_oklch(_gpu_srgb_to_oklab(rgb));
}

vec3 _gpu_oklch_to_srgb(vec3 lch) {
  return _gpu_oklab_to_srgb(_gpu_oklch_to_oklab(lch));
}

bool _gpu_in_srgb_gamut(vec3 rgb) {
  return all(greaterThanEqual(rgb, vec3(-1e-6))) && all(lessThanEqual(rgb, vec3(1.000001)));
}

vec3 _gpu_srgb_to_p3(vec3 rgb) {
  float r = _gpu_srgb_to_linear(rgb.x);
  float g = _gpu_srgb_to_linear(rgb.y);
  float b = _gpu_srgb_to_linear(rgb.z);
  return vec3(
    _gpu_linear_to_srgb(0.8224619687 * r + 0.1775380313 * g),
    _gpu_linear_to_srgb(0.0331941989 * r + 0.9668058011 * g),
    _gpu_linear_to_srgb(0.0170826307 * r + 0.0723974407 * g + 0.9105199286 * b)
  );
}

vec3 _gpu_p3_to_srgb(vec3 p3) {
  float r = _gpu_srgb_to_linear(p3.x);
  float g = _gpu_srgb_to_linear(p3.y);
  float b = _gpu_srgb_to_linear(p3.z);
  return vec3(
    _gpu_linear_to_srgb(1.2249401763 * r - 0.2249401763 * g),
    _gpu_linear_to_srgb(-0.0420569547 * r + 1.0420569547 * g),
    _gpu_linear_to_srgb(-0.0196375546 * r - 0.0786360456 * g + 1.0982736 * b)
  );
}

vec3 _gpu_oklch_to_gamut(vec3 lch, bool p3) {
  vec3 rgb = _gpu_oklch_to_srgb(lch);
  if (p3) return _gpu_srgb_to_p3(rgb);
  return rgb;
}

float _gpu_gamut_delta_e(vec3 c, vec3 lch, bool p3) {
  vec3 a = _gpu_srgb_to_oklab(p3 ? _gpu_p3_to_srgb(c) : c);
  vec3 b = _gpu_oklch_to_oklab(lch);
  float dL = a.x - b.x;
  float da = a.y - b.y;
  float db = a.z - b.z;
  return sqrt(dL * dL + da * da + db * db);
}

vec3 _gpu_gamut_map_oklch_in(vec3 lch, bool p3) {
  float L = lch.x;
  float C = lch.y;
  float H = lch.z;
  if (L != L || C != C || H != H) return vec3(L + C + H);
  if (!(abs(L) <= 3.4028234663852886e38 && abs(C) <= 3.4028234663852886e38 && abs(H) <= 3.4028234663852886e38))
    return vec3(intBitsToFloat(0x7FC00000));
  if (L >= 1.0) return vec3(1.0);
  if (L <= 0.0) return vec3(0.0);
  if (C < 0.0) {
    C = -C;
    H = H + 180.0;
  }
  vec3 origin = _gpu_oklch_to_gamut(vec3(L, C, H), p3);
  vec3 clipped = clamp(origin, 0.0, 1.0);
  if (_gpu_in_srgb_gamut(origin)) return clipped;
  if (_gpu_gamut_delta_e(clipped, vec3(L, C, H), p3) < 0.02) return clipped;
  float lo = 0.0;
  float hi = C;
  bool loInGamut = true;
  for (int i = 0; i < 24; i++) {
    if (hi - lo <= 0.0001) break;
    float chroma = (lo + hi) / 2.0;
    vec3 current = _gpu_oklch_to_gamut(vec3(L, chroma, H), p3);
    if (loInGamut && _gpu_in_srgb_gamut(current)) {
      lo = chroma;
    } else {
      clipped = clamp(current, 0.0, 1.0);
      float e = _gpu_gamut_delta_e(clipped, vec3(L, chroma, H), p3);
      if (e < 0.02) {
        if (0.02 - e < 0.0001) return clipped;
        loInGamut = false;
        lo = chroma;
      } else {
        hi = chroma;
      }
    }
  }
  return clipped;
}

vec3 _gpu_gamut_map_oklch(vec3 lch) {
  return _gpu_gamut_map_oklch_in(lch, false);
}

vec3 _gpu_gamut_map_oklch_p3(vec3 lch) {
  return _gpu_p3_to_srgb(_gpu_gamut_map_oklch_in(lch, true));
}

vec3 _gpu_gamut_map_srgb(vec3 rgb) {
  if (rgb.x != rgb.x || rgb.y != rgb.y || rgb.z != rgb.z)
    return vec3(rgb.x + rgb.y + rgb.z);
  if (_gpu_in_srgb_gamut(rgb)) return clamp(rgb, 0.0, 1.0);
  if (!(abs(rgb.x) <= 3.4028234663852886e38 && abs(rgb.y) <= 3.4028234663852886e38 && abs(rgb.z) <= 3.4028234663852886e38))
    return clamp(rgb, 0.0, 1.0);
  return _gpu_gamut_map_oklch(_gpu_srgb_to_oklch(rgb));
}

vec3 _gpu_hsl_to_rgb(vec3 hsl) {
  float h = mod(hsl.x, 360.0);
  if (h != h || hsl.y != hsl.y || hsl.z != hsl.z) return vec3(h + hsl.y + hsl.z);
  float s = clamp(hsl.y, 0.0, 1.0);
  float l = clamp(hsl.z, 0.0, 1.0);
  float c = (1.0 - abs(2.0 * l - 1.0)) * s;
  float h6 = h / 60.0;
  float x = c * (1.0 - abs(mod(h6, 2.0) - 1.0));
  float r = 0.0;
  float g = 0.0;
  float b = 0.0;
  if (h6 < 1.0)      { r = c; g = x; b = 0.0; }
  else if (h6 < 2.0) { r = x; g = c; b = 0.0; }
  else if (h6 < 3.0) { r = 0.0; g = c; b = x; }
  else if (h6 < 4.0) { r = 0.0; g = x; b = c; }
  else if (h6 < 5.0) { r = x; g = 0.0; b = c; }
  else               { r = c; g = 0.0; b = x; }
  float m = l - c / 2.0;
  return vec3(r + m, g + m, b + m);
}

vec3 _gpu_rgb_to_hsl(vec3 rgb_in) {
  if (rgb_in.x != rgb_in.x || rgb_in.y != rgb_in.y || rgb_in.z != rgb_in.z)
    return vec3(rgb_in.x + rgb_in.y + rgb_in.z);
  vec3 rgb = _gpu_gamut_map_srgb(rgb_in);
  float maxc = max(max(rgb.x, rgb.y), rgb.z);
  float minc = min(min(rgb.x, rgb.y), rgb.z);
  float l = (maxc + minc) / 2.0;
  float d = maxc - minc;
  if (d < 1e-6) return vec3(0.0, 0.0, l);
  float s = d / (1.0 - abs(2.0 * l - 1.0));
  float h;
  if (maxc == rgb.x)      h = mod((rgb.y - rgb.z) / d, 6.0);
  else if (maxc == rgb.y) h = (rgb.z - rgb.x) / d + 2.0;
  else                    h = (rgb.x - rgb.y) / d + 4.0;
  h *= 60.0;
  if (h < 0.0) h += 360.0;
  return vec3(h, s, l);
}

vec3 _gpu_hsv_to_rgb(vec3 hsv) {
  float h = mod(hsv.x, 360.0);
  if (h != h || hsv.y != hsv.y || hsv.z != hsv.z) return vec3(h + hsv.y + hsv.z);
  float s = clamp(hsv.y, 0.0, 1.0);
  float v = clamp(hsv.z, 0.0, 1.0);
  float c = v * s;
  float h6 = h / 60.0;
  float x = c * (1.0 - abs(mod(h6, 2.0) - 1.0));
  float r = 0.0;
  float g = 0.0;
  float b = 0.0;
  if (h6 < 1.0)      { r = c; g = x; b = 0.0; }
  else if (h6 < 2.0) { r = x; g = c; b = 0.0; }
  else if (h6 < 3.0) { r = 0.0; g = c; b = x; }
  else if (h6 < 4.0) { r = 0.0; g = x; b = c; }
  else if (h6 < 5.0) { r = x; g = 0.0; b = c; }
  else               { r = c; g = 0.0; b = x; }
  float m = v - c;
  return vec3(r + m, g + m, b + m);
}

vec3 _gpu_rgb_to_hsv(vec3 rgb_in) {
  if (rgb_in.x != rgb_in.x || rgb_in.y != rgb_in.y || rgb_in.z != rgb_in.z)
    return vec3(rgb_in.x + rgb_in.y + rgb_in.z);
  vec3 rgb = _gpu_gamut_map_srgb(rgb_in);
  float maxc = max(max(rgb.x, rgb.y), rgb.z);
  float minc = min(min(rgb.x, rgb.y), rgb.z);
  float v = maxc;
  float d = maxc - minc;
  if (d < 1e-6) return vec3(0.0, 0.0, v);
  float s = (maxc < 1e-6) ? 0.0 : d / maxc;
  float h;
  if (maxc == rgb.x)      h = mod((rgb.y - rgb.z) / d, 6.0);
  else if (maxc == rgb.y) h = (rgb.z - rgb.x) / d + 2.0;
  else                    h = (rgb.x - rgb.y) / d + 4.0;
  h *= 60.0;
  if (h < 0.0) h += 360.0;
  return vec3(h, s, v);
}

vec3 _gpu_color_mix(vec3 lch1, vec3 lch2, float t) {
  float L = mix(lch1.x, lch2.x, t);
  float C = mix(lch1.y, lch2.y, t);
  bool a1 = lch1.y < 1e-6;
  bool a2 = lch2.y < 1e-6;
  float H;
  if (a1 && a2) {
    H = lch1.z;
  } else if (a1) {
    H = lch2.z;
  } else if (a2) {
    H = lch1.z;
  } else {
    float dh = lch2.z - lch1.z;
    if (dh > 180.0) dh -= 360.0;
    if (dh < -180.0) dh += 360.0;
    H = lch1.z + dh * t;
    if (H < 0.0) H += 360.0;
    if (H >= 360.0) H -= 360.0;
  }
  return vec3(L, C, H);
}

float _gpu_apca_luma(vec3 srgb) {
  if (srgb.x != srgb.x || srgb.y != srgb.y || srgb.z != srgb.z)
    return srgb.x + srgb.y + srgb.z;
  float Y = 0.2126729 * sign(srgb.x) * pow(abs(srgb.x), 2.4)
          + 0.7151522 * sign(srgb.y) * pow(abs(srgb.y), 2.4)
          + 0.0721750 * sign(srgb.z) * pow(abs(srgb.z), 2.4);
  return Y >= 0.022 ? Y : Y + pow(0.022 - Y, 1.414);
}

float _gpu_apca(vec3 lch_bg, vec3 lch_fg) {
  float Ybg = _gpu_apca_luma(_gpu_oklch_to_srgb(lch_bg));
  float Yfg = _gpu_apca_luma(_gpu_oklch_to_srgb(lch_fg));
  if (Ybg != Ybg || Yfg != Yfg) return Ybg + Yfg;
  float C = 0.0;
  if (abs(Ybg - Yfg) >= 0.0005) {
    if (Ybg > Yfg) C = (pow(Ybg, 0.56) - pow(Yfg, 0.57)) * 1.14;
    else           C = (pow(Ybg, 0.65) - pow(Yfg, 0.62)) * 1.14;
  }
  if (abs(C) < 0.1) return 0.0;
  return C > 0.0 ? C - 0.027 : C + 0.027;
}
`,kc=`
fn _gpu_srgb_to_linear(c: f32) -> f32 {
  if (c != c) { return c; }
  let a = abs(c);
  if (a <= 0.04045) { return c / 12.92; }
  return sign(c) * pow((a + 0.055) / 1.055, 2.4);
}

fn _gpu_linear_to_srgb(c: f32) -> f32 {
  if (c != c) { return c; }
  let a = abs(c);
  if (a <= 0.0031308) { return 12.92 * c; }
  return sign(c) * (1.055 * pow(a, 1.0 / 2.4) - 0.055);
}

fn _gpu_srgb_to_oklab(rgb: vec3f) -> vec3f {
  let r = _gpu_srgb_to_linear(rgb.x);
  let g = _gpu_srgb_to_linear(rgb.y);
  let b = _gpu_srgb_to_linear(rgb.z);
  let lc = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  let mc = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  let sc = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
  if (lc != lc || mc != mc || sc != sc) { return vec3f(lc + mc + sc); }
  let l_ = sign(lc) * pow(abs(lc), 1.0 / 3.0);
  let m_ = sign(mc) * pow(abs(mc), 1.0 / 3.0);
  let s_ = sign(sc) * pow(abs(sc), 1.0 / 3.0);
  return vec3f(
    0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_
  );
}

fn _gpu_oklab_to_srgb(lab: vec3f) -> vec3f {
  let l_ = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  let m_ = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  let s_ = lab.x - 0.0894841775 * lab.y - 1.291485548 * lab.z;
  let l = l_ * l_ * l_;
  let m = m_ * m_ * m_;
  let s = s_ * s_ * s_;
  let r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let b = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  return vec3f(_gpu_linear_to_srgb(r), _gpu_linear_to_srgb(g), _gpu_linear_to_srgb(b));
}

fn _gpu_oklab_to_oklch(lab: vec3f) -> vec3f {
  let C = length(lab.yz);
  var H = atan2(lab.z, lab.y) * (180.0 / 3.14159265359);
  if (H < 0.0) { H = H + 360.0; }
  return vec3f(lab.x, C, H);
}

fn _gpu_oklch_to_oklab(lch: vec3f) -> vec3f {
  let h_rad = lch.z * (3.14159265359 / 180.0);
  return vec3f(lch.x, lch.y * cos(h_rad), lch.y * sin(h_rad));
}

fn _gpu_srgb_to_oklch(rgb: vec3f) -> vec3f {
  return _gpu_oklab_to_oklch(_gpu_srgb_to_oklab(rgb));
}

fn _gpu_oklch_to_srgb(lch: vec3f) -> vec3f {
  return _gpu_oklab_to_srgb(_gpu_oklch_to_oklab(lch));
}

fn _gpu_in_srgb_gamut(rgb: vec3f) -> bool {
  return all(rgb >= vec3f(-1e-6)) && all(rgb <= vec3f(1.000001));
}

fn _gpu_srgb_to_p3(rgb: vec3f) -> vec3f {
  let r = _gpu_srgb_to_linear(rgb.x);
  let g = _gpu_srgb_to_linear(rgb.y);
  let b = _gpu_srgb_to_linear(rgb.z);
  return vec3f(
    _gpu_linear_to_srgb(0.8224619687 * r + 0.1775380313 * g),
    _gpu_linear_to_srgb(0.0331941989 * r + 0.9668058011 * g),
    _gpu_linear_to_srgb(0.0170826307 * r + 0.0723974407 * g + 0.9105199286 * b)
  );
}

fn _gpu_p3_to_srgb(p3: vec3f) -> vec3f {
  let r = _gpu_srgb_to_linear(p3.x);
  let g = _gpu_srgb_to_linear(p3.y);
  let b = _gpu_srgb_to_linear(p3.z);
  return vec3f(
    _gpu_linear_to_srgb(1.2249401763 * r - 0.2249401763 * g),
    _gpu_linear_to_srgb(-0.0420569547 * r + 1.0420569547 * g),
    _gpu_linear_to_srgb(-0.0196375546 * r - 0.0786360456 * g + 1.0982736 * b)
  );
}

fn _gpu_oklch_to_gamut(lch: vec3f, p3: bool) -> vec3f {
  let rgb = _gpu_oklch_to_srgb(lch);
  if (p3) { return _gpu_srgb_to_p3(rgb); }
  return rgb;
}

fn _gpu_gamut_delta_e(c: vec3f, lch: vec3f, p3: bool) -> f32 {
  let a = _gpu_srgb_to_oklab(select(c, _gpu_p3_to_srgb(c), p3));
  let b = _gpu_oklch_to_oklab(lch);
  let dL = a.x - b.x;
  let da = a.y - b.y;
  let db = a.z - b.z;
  return sqrt(dL * dL + da * da + db * db);
}

fn _gpu_gamut_map_oklch_in(lch: vec3f, p3: bool) -> vec3f {
  let L = lch.x;
  var C = lch.y;
  var H = lch.z;
  if (L != L || C != C || H != H) { return vec3f(L + C + H); }
  if (!(abs(L) <= 3.4028234663852886e38 && abs(C) <= 3.4028234663852886e38 && abs(H) <= 3.4028234663852886e38)) {
    return vec3f(_gpu_nan());
  }
  if (L >= 1.0) { return vec3f(1.0); }
  if (L <= 0.0) { return vec3f(0.0); }
  if (C < 0.0) {
    C = -C;
    H = H + 180.0;
  }
  let origin = _gpu_oklch_to_gamut(vec3f(L, C, H), p3);
  var clipped = clamp(origin, vec3f(0.0), vec3f(1.0));
  if (_gpu_in_srgb_gamut(origin)) { return clipped; }
  if (_gpu_gamut_delta_e(clipped, vec3f(L, C, H), p3) < 0.02) { return clipped; }
  var lo: f32 = 0.0;
  var hi: f32 = C;
  var loInGamut = true;
  for (var i: i32 = 0; i < 24; i = i + 1) {
    if (hi - lo <= 0.0001) { break; }
    let chroma = (lo + hi) / 2.0;
    let current = _gpu_oklch_to_gamut(vec3f(L, chroma, H), p3);
    if (loInGamut && _gpu_in_srgb_gamut(current)) {
      lo = chroma;
    } else {
      clipped = clamp(current, vec3f(0.0), vec3f(1.0));
      let e = _gpu_gamut_delta_e(clipped, vec3f(L, chroma, H), p3);
      if (e < 0.02) {
        if (0.02 - e < 0.0001) { return clipped; }
        loInGamut = false;
        lo = chroma;
      } else {
        hi = chroma;
      }
    }
  }
  return clipped;
}

fn _gpu_gamut_map_oklch(lch: vec3f) -> vec3f {
  return _gpu_gamut_map_oklch_in(lch, false);
}

fn _gpu_gamut_map_oklch_p3(lch: vec3f) -> vec3f {
  return _gpu_p3_to_srgb(_gpu_gamut_map_oklch_in(lch, true));
}

fn _gpu_gamut_map_srgb(rgb: vec3f) -> vec3f {
  if (rgb.x != rgb.x || rgb.y != rgb.y || rgb.z != rgb.z) {
    return vec3f(rgb.x + rgb.y + rgb.z);
  }
  if (_gpu_in_srgb_gamut(rgb)) { return clamp(rgb, vec3f(0.0), vec3f(1.0)); }
  if (!(abs(rgb.x) <= 3.4028234663852886e38 && abs(rgb.y) <= 3.4028234663852886e38 && abs(rgb.z) <= 3.4028234663852886e38)) {
    return clamp(rgb, vec3f(0.0), vec3f(1.0));
  }
  return _gpu_gamut_map_oklch(_gpu_srgb_to_oklch(rgb));
}

fn _gpu_hsl_to_rgb(hsl: vec3f) -> vec3f {
  let h = hsl.x - 360.0 * floor(hsl.x / 360.0);
  if (h != h || hsl.y != hsl.y || hsl.z != hsl.z) { return vec3f(h + hsl.y + hsl.z); }
  let s = clamp(hsl.y, 0.0, 1.0);
  let l = clamp(hsl.z, 0.0, 1.0);
  let c = (1.0 - abs(2.0 * l - 1.0)) * s;
  let h6 = h / 60.0;
  let x = c * (1.0 - abs((h6 - 2.0 * floor(h6 / 2.0)) - 1.0));
  var r: f32 = 0.0;
  var g: f32 = 0.0;
  var b: f32 = 0.0;
  if (h6 < 1.0)      { r = c; g = x; b = 0.0; }
  else if (h6 < 2.0) { r = x; g = c; b = 0.0; }
  else if (h6 < 3.0) { r = 0.0; g = c; b = x; }
  else if (h6 < 4.0) { r = 0.0; g = x; b = c; }
  else if (h6 < 5.0) { r = x; g = 0.0; b = c; }
  else               { r = c; g = 0.0; b = x; }
  let m = l - c / 2.0;
  return vec3f(r + m, g + m, b + m);
}

fn _gpu_rgb_to_hsl(rgb_in: vec3f) -> vec3f {
  if (rgb_in.x != rgb_in.x || rgb_in.y != rgb_in.y || rgb_in.z != rgb_in.z) {
    return vec3f(rgb_in.x + rgb_in.y + rgb_in.z);
  }
  let rgb = _gpu_gamut_map_srgb(rgb_in);
  let maxc = max(max(rgb.x, rgb.y), rgb.z);
  let minc = min(min(rgb.x, rgb.y), rgb.z);
  let l = (maxc + minc) / 2.0;
  let d = maxc - minc;
  if (d < 1e-6) { return vec3f(0.0, 0.0, l); }
  let s = d / (1.0 - abs(2.0 * l - 1.0));
  var h: f32;
  if (maxc == rgb.x) {
    let v = (rgb.y - rgb.z) / d;
    h = v - 6.0 * floor(v / 6.0);
  } else if (maxc == rgb.y) {
    h = (rgb.z - rgb.x) / d + 2.0;
  } else {
    h = (rgb.x - rgb.y) / d + 4.0;
  }
  h = h * 60.0;
  if (h < 0.0) { h = h + 360.0; }
  return vec3f(h, s, l);
}

fn _gpu_hsv_to_rgb(hsv: vec3f) -> vec3f {
  let h = hsv.x - 360.0 * floor(hsv.x / 360.0);
  if (h != h || hsv.y != hsv.y || hsv.z != hsv.z) { return vec3f(h + hsv.y + hsv.z); }
  let s = clamp(hsv.y, 0.0, 1.0);
  let v = clamp(hsv.z, 0.0, 1.0);
  let c = v * s;
  let h6 = h / 60.0;
  let x = c * (1.0 - abs((h6 - 2.0 * floor(h6 / 2.0)) - 1.0));
  var r: f32 = 0.0;
  var g: f32 = 0.0;
  var b: f32 = 0.0;
  if (h6 < 1.0)      { r = c; g = x; b = 0.0; }
  else if (h6 < 2.0) { r = x; g = c; b = 0.0; }
  else if (h6 < 3.0) { r = 0.0; g = c; b = x; }
  else if (h6 < 4.0) { r = 0.0; g = x; b = c; }
  else if (h6 < 5.0) { r = x; g = 0.0; b = c; }
  else               { r = c; g = 0.0; b = x; }
  let m = v - c;
  return vec3f(r + m, g + m, b + m);
}

fn _gpu_rgb_to_hsv(rgb_in: vec3f) -> vec3f {
  if (rgb_in.x != rgb_in.x || rgb_in.y != rgb_in.y || rgb_in.z != rgb_in.z) {
    return vec3f(rgb_in.x + rgb_in.y + rgb_in.z);
  }
  let rgb = _gpu_gamut_map_srgb(rgb_in);
  let maxc = max(max(rgb.x, rgb.y), rgb.z);
  let minc = min(min(rgb.x, rgb.y), rgb.z);
  let v = maxc;
  let d = maxc - minc;
  if (d < 1e-6) { return vec3f(0.0, 0.0, v); }
  var s: f32 = 0.0;
  if (maxc >= 1e-6) { s = d / maxc; }
  var h: f32;
  if (maxc == rgb.x) {
    let q = (rgb.y - rgb.z) / d;
    h = q - 6.0 * floor(q / 6.0);
  } else if (maxc == rgb.y) {
    h = (rgb.z - rgb.x) / d + 2.0;
  } else {
    h = (rgb.x - rgb.y) / d + 4.0;
  }
  h = h * 60.0;
  if (h < 0.0) { h = h + 360.0; }
  return vec3f(h, s, v);
}

fn _gpu_color_mix(lch1: vec3f, lch2: vec3f, t: f32) -> vec3f {
  let L = mix(lch1.x, lch2.x, t);
  let C = mix(lch1.y, lch2.y, t);
  let a1 = lch1.y < 1e-6;
  let a2 = lch2.y < 1e-6;
  var H: f32;
  if (a1 && a2) {
    H = lch1.z;
  } else if (a1) {
    H = lch2.z;
  } else if (a2) {
    H = lch1.z;
  } else {
    var dh = lch2.z - lch1.z;
    if (dh > 180.0) { dh = dh - 360.0; }
    if (dh < -180.0) { dh = dh + 360.0; }
    H = lch1.z + dh * t;
    if (H < 0.0) { H = H + 360.0; }
    if (H >= 360.0) { H = H - 360.0; }
  }
  return vec3f(L, C, H);
}

fn _gpu_apca_luma(srgb: vec3f) -> f32 {
  if (srgb.x != srgb.x || srgb.y != srgb.y || srgb.z != srgb.z) {
    return srgb.x + srgb.y + srgb.z;
  }
  let Y = 0.2126729 * sign(srgb.x) * pow(abs(srgb.x), 2.4)
        + 0.7151522 * sign(srgb.y) * pow(abs(srgb.y), 2.4)
        + 0.0721750 * sign(srgb.z) * pow(abs(srgb.z), 2.4);
  return select(Y + pow(0.022 - Y, 1.414), Y, Y >= 0.022);
}

fn _gpu_apca(lch_bg: vec3f, lch_fg: vec3f) -> f32 {
  let Ybg = _gpu_apca_luma(_gpu_oklch_to_srgb(lch_bg));
  let Yfg = _gpu_apca_luma(_gpu_oklch_to_srgb(lch_fg));
  if (Ybg != Ybg || Yfg != Yfg) { return Ybg + Yfg; }
  var C = 0.0;
  if (abs(Ybg - Yfg) >= 0.0005) {
    if (Ybg > Yfg) {
      C = (pow(Ybg, 0.56) - pow(Yfg, 0.57)) * 1.14;
    } else {
      C = (pow(Ybg, 0.65) - pow(Yfg, 0.62)) * 1.14;
    }
  }
  if (abs(C) < 0.1) { return 0.0; }
  return select(C + 0.027, C - 0.027, C > 0.0);
}
`,Pc=`
vec3 _gpu_srgb_roundtrip(vec3 rgb) {
  if (abs(rgb.x) <= 3.4028234663852886e38 && abs(rgb.y) <= 3.4028234663852886e38 && abs(rgb.z) <= 3.4028234663852886e38) return rgb;
  return _gpu_oklch_to_srgb(_gpu_srgb_to_oklch(rgb));
}
`,Rc=`
fn _gpu_srgb_roundtrip(rgb: vec3f) -> vec3f {
  if (abs(rgb.x) <= 3.4028234663852886e38 && abs(rgb.y) <= 3.4028234663852886e38 && abs(rgb.z) <= 3.4028234663852886e38) { return rgb; }
  return _gpu_oklch_to_srgb(_gpu_srgb_to_oklch(rgb));
}
`,Ac=`
vec3 _gpu_finite_color(vec3 c) {
  if (abs(c.x) <= 3.4028234663852886e38 && abs(c.y) <= 3.4028234663852886e38 && abs(c.z) <= 3.4028234663852886e38) return c;
  return vec3(intBitsToFloat(0x7FC00000));
}
`,Tc=`
fn _gpu_finite_color(c: vec3f) -> vec3f {
  if (abs(c.x) <= 3.4028234663852886e38 && abs(c.y) <= 3.4028234663852886e38 && abs(c.z) <= 3.4028234663852886e38) { return c; }
  return vec3f(_gpu_nan());
}
`,Lc=Sc+Pc+Ac,Fc=kc+Rc+Tc;function $e(e,n){return["x","y"].map(t=>n?`if ((bitcast<u32>(${e}.${t}) & 0x7FFFFFFFu) > 0x7F800000u) { return vec2f(${e}.${t}); }`:`if ((floatBitsToUint(${e}.${t}) & 0x7FFFFFFFu) > 0x7F800000u) return vec2(${e}.${t});`).join(`
  `)}var go={__proto__:null,_gpu_cmul:{deps:[],glsl:`vec2 _gpu_cmul(vec2 a, vec2 b) {
  return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}`,wgsl:`fn _gpu_cmul(a: vec2f, b: vec2f) -> vec2f {
  return vec2f(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}`},_gpu_cdiv:{deps:[],glsl:`vec2 _gpu_cdiv(vec2 a, vec2 b) {
  float d = b.x * b.x + b.y * b.y;
  return vec2((a.x * b.x + a.y * b.y) / d, (a.y * b.x - a.x * b.y) / d);
}`,wgsl:`fn _gpu_cdiv(a: vec2f, b: vec2f) -> vec2f {
  let d = b.x * b.x + b.y * b.y;
  return vec2f((a.x * b.x + a.y * b.y) / d, (a.y * b.x - a.x * b.y) / d);
}`},_gpu_cexp:{deps:[],glsl:`vec2 _gpu_cexp(vec2 z) {
  ${$e("z",!1)}
  float e = exp(z.x);
  return vec2(e * cos(z.y), e * sin(z.y));
}`,wgsl:`fn _gpu_cexp(z: vec2f) -> vec2f {
  ${$e("z",!0)}
  let e = exp(z.x);
  return vec2f(e * cos(z.y), e * sin(z.y));
}`},_gpu_cln:{deps:[],glsl:`vec2 _gpu_cln(vec2 z) {
  ${$e("z",!1)}
  return vec2(log(length(z)), atan(z.y, z.x));
}`,wgsl:`fn _gpu_cln(z: vec2f) -> vec2f {
  ${$e("z",!0)}
  return vec2f(log(length(z)), atan2(z.y, z.x));
}`},_gpu_cpow:{deps:["_gpu_cexp","_gpu_cmul","_gpu_cln"],glsl:`vec2 _gpu_cpow(vec2 z, vec2 w) {
  if (z.x == 0.0 && z.y == 0.0 && w.x > 0.0) return vec2(0.0);
  return _gpu_cexp(_gpu_cmul(w, _gpu_cln(z)));
}`,wgsl:`fn _gpu_cpow(z: vec2f, w: vec2f) -> vec2f {
  if (z.x == 0.0 && z.y == 0.0 && w.x > 0.0) { return vec2f(0.0); }
  return _gpu_cexp(_gpu_cmul(w, _gpu_cln(z)));
}`},_gpu_cpowrr:{deps:["_gpu_cpow"],glsl:`vec2 _gpu_cpowrr(vec2 z, float e, float s) {
  if (z.y == 0.0 && z.x < 0.0) return vec2(s * pow(-z.x, e), 0.0);
  return _gpu_cpow(z, vec2(e, 0.0));
}`,wgsl:`fn _gpu_cpowrr(z: vec2f, e: f32, s: f32) -> vec2f {
  if (z.y == 0.0 && z.x < 0.0) { return vec2f(s * pow(-z.x, e), 0.0); }
  return _gpu_cpow(z, vec2f(e, 0.0));
}`},_gpu_csqrt:{deps:[],glsl:`vec2 _gpu_csqrt(vec2 z) {
  ${$e("z",!1)}
  float r = length(z);
  float theta = atan(z.y, z.x);
  return sqrt(r) * vec2(cos(theta * 0.5), sin(theta * 0.5));
}`,wgsl:`fn _gpu_csqrt(z: vec2f) -> vec2f {
  ${$e("z",!0)}
  let r = length(z);
  let theta = atan2(z.y, z.x);
  return sqrt(r) * vec2f(cos(theta * 0.5), sin(theta * 0.5));
}`},_gpu_csin:{deps:[],glsl:`vec2 _gpu_csin(vec2 z) {
  ${$e("z",!1)}
  return vec2(sin(z.x) * cosh(z.y), cos(z.x) * sinh(z.y));
}`,wgsl:`fn _gpu_csin(z: vec2f) -> vec2f {
  ${$e("z",!0)}
  return vec2f(sin(z.x) * cosh(z.y), cos(z.x) * sinh(z.y));
}`},_gpu_ccos:{deps:[],glsl:`vec2 _gpu_ccos(vec2 z) {
  ${$e("z",!1)}
  return vec2(cos(z.x) * cosh(z.y), -sin(z.x) * sinh(z.y));
}`,wgsl:`fn _gpu_ccos(z: vec2f) -> vec2f {
  ${$e("z",!0)}
  return vec2f(cos(z.x) * cosh(z.y), -sin(z.x) * sinh(z.y));
}`},_gpu_ctan:{deps:["_gpu_cdiv","_gpu_csin","_gpu_ccos"],glsl:`vec2 _gpu_ctan(vec2 z) {
  return _gpu_cdiv(_gpu_csin(z), _gpu_ccos(z));
}`,wgsl:`fn _gpu_ctan(z: vec2f) -> vec2f {
  return _gpu_cdiv(_gpu_csin(z), _gpu_ccos(z));
}`},_gpu_csinh:{deps:[],glsl:`vec2 _gpu_csinh(vec2 z) {
  ${$e("z",!1)}
  return vec2(sinh(z.x) * cos(z.y), cosh(z.x) * sin(z.y));
}`,wgsl:`fn _gpu_csinh(z: vec2f) -> vec2f {
  ${$e("z",!0)}
  return vec2f(sinh(z.x) * cos(z.y), cosh(z.x) * sin(z.y));
}`},_gpu_ccosh:{deps:[],glsl:`vec2 _gpu_ccosh(vec2 z) {
  ${$e("z",!1)}
  return vec2(cosh(z.x) * cos(z.y), sinh(z.x) * sin(z.y));
}`,wgsl:`fn _gpu_ccosh(z: vec2f) -> vec2f {
  ${$e("z",!0)}
  return vec2f(cosh(z.x) * cos(z.y), sinh(z.x) * sin(z.y));
}`},_gpu_ctanh:{deps:["_gpu_cdiv","_gpu_csinh","_gpu_ccosh"],glsl:`vec2 _gpu_ctanh(vec2 z) {
  return _gpu_cdiv(_gpu_csinh(z), _gpu_ccosh(z));
}`,wgsl:`fn _gpu_ctanh(z: vec2f) -> vec2f {
  return _gpu_cdiv(_gpu_csinh(z), _gpu_ccosh(z));
}`},_gpu_chypot:{deps:[],glsl:`float _gpu_chypot(float x, float y) {
  float ax = abs(x);
  float ay = abs(y);
  float m = max(ax, ay);
  if (m == 0.0) return 0.0;
  float n = min(ax, ay) / m;
  return m * sqrt(1.0 + n * n);
}`,wgsl:`fn _gpu_chypot(x: f32, y: f32) -> f32 {
  let ax = abs(x);
  let ay = abs(y);
  let m = max(ax, ay);
  if (m == 0.0) { return 0.0; }
  let n = min(ax, ay) / m;
  return m * sqrt(1.0 + n * n);
}`},_gpu_clog1p:{deps:[],glsl:`float _gpu_clog1p(float x) {
  if (x >= 0.5) return log(1.0 + x);
  float s = x / (2.0 + x);
  float t = s * s;
  return 2.0 * s * (1.0 + t * (0.3333333333333333 + t * (0.2 + t * (0.14285714285714285 + t * (0.1111111111111111 + t * 0.09090909090909091)))));
}`,wgsl:`fn _gpu_clog1p(x: f32) -> f32 {
  if (x >= 0.5) { return log(1.0 + x); }
  let s = x / (2.0 + x);
  let t = s * s;
  return 2.0 * s * (1.0 + t * (0.3333333333333333 + t * (0.2 + t * (0.14285714285714285 + t * (0.1111111111111111 + t * 0.09090909090909091)))));
}`},_gpu_casinhr:{deps:["_gpu_clog1p"],glsl:`float _gpu_casinhr(float v) {
  float a = abs(v);
  float r = a > 1.0e9 ? log(a) + 0.6931471805599453 : _gpu_clog1p(a + a * a / (1.0 + sqrt(1.0 + a * a)));
  return v < 0.0 ? -r : r;
}`,wgsl:`fn _gpu_casinhr(v: f32) -> f32 {
  let a = abs(v);
  let r = select(_gpu_clog1p(a + a * a / (1.0 + sqrt(1.0 + a * a))), log(a) + 0.6931471805599453, a > 1.0e9);
  return select(r, -r, v < 0.0);
}`},_gpu_czsign:{deps:[],glsl:`float _gpu_czsign(float y, float s) {
  return (y < 0.0 || (y == 0.0 && s < 0.0)) ? -1.0 : 1.0;
}`,wgsl:`fn _gpu_czsign(y: f32, s: f32) -> f32 {
  return select(1.0, -1.0, y < 0.0 || (y == 0.0 && s < 0.0));
}`},_gpu_csqrts:{deps:["_gpu_chypot","_gpu_czsign"],glsl:`vec2 _gpu_csqrts(float x, float y, float s) {
  if (x == 0.0 && y == 0.0) return vec2(0.0);
  float h = _gpu_chypot(x, y);
  if (x >= 0.0) {
    float t = sqrt(0.5 * x + 0.5 * h);
    return vec2(t, y / (2.0 * t));
  }
  float t = sqrt(0.5 * h - 0.5 * x);
  return vec2(abs(y) / (2.0 * t), _gpu_czsign(y, s) * t);
}`,wgsl:`fn _gpu_csqrts(x: f32, y: f32, s: f32) -> vec2f {
  if (x == 0.0 && y == 0.0) { return vec2f(0.0); }
  let h = _gpu_chypot(x, y);
  if (x >= 0.0) {
    let t = sqrt(0.5 * x + 0.5 * h);
    return vec2f(t, y / (2.0 * t));
  }
  let t = sqrt(0.5 * h - 0.5 * x);
  return vec2f(abs(y) / (2.0 * t), _gpu_czsign(y, s) * t);
}`},_gpu_casin_core:{deps:["_gpu_csqrts","_gpu_casinhr"],glsl:`vec2 _gpu_casin_core(float x0, float y0, float s) {
  float x = x0;
  float y = y0;
  float k = 0.0;
  if (max(abs(x), abs(y)) > 1.0e37) {
    x = x * 0.0625;
    y = y * 0.0625;
    k = 2.772588722239781;
  }
  vec2 a = _gpu_csqrts(1.0 - x, -y, -s);
  vec2 b = _gpu_csqrts(1.0 + x, y, s);
  float im = _gpu_casinhr(a.x * b.y - a.y * b.x);
  return vec2(atan(x, a.x * b.x - a.y * b.y), im < 0.0 ? im - k : im + k);
}`,wgsl:`fn _gpu_casin_core(x0: f32, y0: f32, s: f32) -> vec2f {
  var x = x0;
  var y = y0;
  var k = 0.0;
  if (max(abs(x), abs(y)) > 1.0e37) {
    x = x * 0.0625;
    y = y * 0.0625;
    k = 2.772588722239781;
  }
  let a = _gpu_csqrts(1.0 - x, -y, -s);
  let b = _gpu_csqrts(1.0 + x, y, s);
  let im = _gpu_casinhr(a.x * b.y - a.y * b.x);
  return vec2f(atan2(x, a.x * b.x - a.y * b.y), select(im + k, im - k, im < 0.0));
}`},_gpu_casin:{deps:["_gpu_casin_core"],glsl:`vec2 _gpu_casin(vec2 z) {
  return _gpu_casin_core(z.x, z.y, z.x > 0.0 ? -1.0 : 1.0);
}`,wgsl:`fn _gpu_casin(z: vec2f) -> vec2f {
  return _gpu_casin_core(z.x, z.y, select(1.0, -1.0, z.x > 0.0));
}`},_gpu_cacos:{deps:["_gpu_csqrts","_gpu_casinhr"],glsl:`vec2 _gpu_cacos(vec2 z) {
  float x = z.x;
  float y = z.y;
  float k = 0.0;
  if (max(abs(x), abs(y)) > 1.0e37) {
    x = x * 0.0625;
    y = y * 0.0625;
    k = 2.772588722239781;
  }
  float s = z.x > 0.0 ? -1.0 : 1.0;
  vec2 a = _gpu_csqrts(1.0 - x, -y, -s);
  vec2 b = _gpu_csqrts(1.0 + x, y, s);
  float im = _gpu_casinhr(b.x * a.y - b.y * a.x);
  return vec2(2.0 * atan(a.x, b.x), im < 0.0 ? im - k : im + k);
}`,wgsl:`fn _gpu_cacos(z: vec2f) -> vec2f {
  var x = z.x;
  var y = z.y;
  var k = 0.0;
  if (max(abs(x), abs(y)) > 1.0e37) {
    x = x * 0.0625;
    y = y * 0.0625;
    k = 2.772588722239781;
  }
  let s = select(1.0, -1.0, z.x > 0.0);
  let a = _gpu_csqrts(1.0 - x, -y, -s);
  let b = _gpu_csqrts(1.0 + x, y, s);
  let im = _gpu_casinhr(b.x * a.y - b.y * a.x);
  return vec2f(2.0 * atan2(a.x, b.x), select(im + k, im - k, im < 0.0));
}`},_gpu_catanh_core:{deps:["_gpu_chypot","_gpu_clog1p","_gpu_czsign"],glsl:`vec2 _gpu_catanh_core(float x, float y, float s) {
  if (_gpu_chypot(x, y) > 1.0e18) {
    float h4 = _gpu_chypot(0.25 * x, 0.25 * y);
    float q = y / 8.0 / h4 / h4;
    return vec2(x / 16.0 / h4 / h4, q == 0.0 ? _gpu_czsign(y, s) * 1.5707963267948966 : 0.5 * atan(q, -1.0));
  }
  float ax = abs(x);
  float u = 1.0 - ax;
  float d = u * u + y * y;
  float re = d < 1.0e-30 ? 0.5 * (log(_gpu_chypot(1.0 + ax, y)) - log(_gpu_chypot(u, y))) : 0.25 * _gpu_clog1p(4.0 * ax / d);
  float m = u * (1.0 + ax) - y * y;
  float im = 2.0 * y == 0.0 ? (m < 0.0 ? _gpu_czsign(y, s) * 1.5707963267948966 : 0.0) : 0.5 * atan(2.0 * y, m);
  return vec2(x < 0.0 ? -re : re, im);
}`,wgsl:`fn _gpu_catanh_core(x: f32, y: f32, s: f32) -> vec2f {
  if (_gpu_chypot(x, y) > 1.0e18) {
    let h4 = _gpu_chypot(0.25 * x, 0.25 * y);
    let q = y / 8.0 / h4 / h4;
    return vec2f(x / 16.0 / h4 / h4, select(0.5 * atan2(q, -1.0), _gpu_czsign(y, s) * 1.5707963267948966, q == 0.0));
  }
  let ax = abs(x);
  let u = 1.0 - ax;
  let d = u * u + y * y;
  let re = select(0.25 * _gpu_clog1p(4.0 * ax / d), 0.5 * (log(_gpu_chypot(1.0 + ax, y)) - log(_gpu_chypot(u, y))), d < 1.0e-30);
  let m = u * (1.0 + ax) - y * y;
  let im = select(0.5 * atan2(2.0 * y, m), select(0.0, _gpu_czsign(y, s) * 1.5707963267948966, m < 0.0), 2.0 * y == 0.0);
  return vec2f(select(re, -re, x < 0.0), im);
}`},_gpu_catanh:{deps:["_gpu_catanh_core"],glsl:`vec2 _gpu_catanh(vec2 z) {
  return _gpu_catanh_core(z.x, z.y, z.x > 0.0 ? -1.0 : 1.0);
}`,wgsl:`fn _gpu_catanh(z: vec2f) -> vec2f {
  return _gpu_catanh_core(z.x, z.y, select(1.0, -1.0, z.x > 0.0));
}`},_gpu_catan:{deps:["_gpu_catanh_core","_gpu_inf"],glsl:`vec2 _gpu_catan(vec2 z) {
  if (z.x == 0.0 && abs(z.y) == 1.0) return vec2(_gpu_inf(), _gpu_inf());
  vec2 r = _gpu_catanh_core(-z.y, z.x, z.y < 0.0 ? -1.0 : 1.0);
  return vec2(r.y, -r.x);
}`,wgsl:`fn _gpu_catan(z: vec2f) -> vec2f {
  if (z.x == 0.0 && abs(z.y) == 1.0) { return vec2f(_gpu_inf(), _gpu_inf()); }
  let r = _gpu_catanh_core(-z.y, z.x, select(1.0, -1.0, z.y < 0.0));
  return vec2f(r.y, -r.x);
}`},_gpu_casinh:{deps:["_gpu_casin_core"],glsl:`vec2 _gpu_casinh(vec2 z) {
  vec2 r = _gpu_casin_core(-z.y, z.x, z.y < 0.0 ? -1.0 : 1.0);
  return vec2(r.y, -r.x);
}`,wgsl:`fn _gpu_casinh(z: vec2f) -> vec2f {
  let r = _gpu_casin_core(-z.y, z.x, select(1.0, -1.0, z.y < 0.0));
  return vec2f(r.y, -r.x);
}`},_gpu_cacosh:{deps:["_gpu_csqrts","_gpu_casinhr"],glsl:`vec2 _gpu_cacosh(vec2 z) {
  float x = z.x;
  float y = z.y;
  float k = 0.0;
  if (max(abs(x), abs(y)) > 1.0e37) {
    x = x * 0.0625;
    y = y * 0.0625;
    k = 2.772588722239781;
  }
  vec2 a = _gpu_csqrts(x - 1.0, y, 1.0);
  vec2 b = _gpu_csqrts(x + 1.0, y, 1.0);
  return vec2(_gpu_casinhr(a.x * b.x + a.y * b.y) + k, 2.0 * atan(a.y, b.x));
}`,wgsl:`fn _gpu_cacosh(z: vec2f) -> vec2f {
  var x = z.x;
  var y = z.y;
  var k = 0.0;
  if (max(abs(x), abs(y)) > 1.0e37) {
    x = x * 0.0625;
    y = y * 0.0625;
    k = 2.772588722239781;
  }
  let a = _gpu_csqrts(x - 1.0, y, 1.0);
  let b = _gpu_csqrts(x + 1.0, y, 1.0);
  return vec2f(_gpu_casinhr(a.x * b.x + a.y * b.y) + k, 2.0 * atan2(a.y, b.x));
}`},_gpu_cinv:{deps:[],glsl:`vec2 _gpu_cinv(vec2 z) {
  if (abs(z.x) >= abs(z.y)) {
    float r = z.y / z.x;
    float d = z.x + z.y * r;
    return vec2(1.0 / d, -r / d);
  }
  float r = z.x / z.y;
  float d = z.x * r + z.y;
  return vec2(r / d, -1.0 / d);
}`,wgsl:`fn _gpu_cinv(z: vec2f) -> vec2f {
  if (abs(z.x) >= abs(z.y)) {
    let r = z.y / z.x;
    let d = z.x + z.y * r;
    return vec2f(1.0 / d, -r / d);
  }
  let r = z.x / z.y;
  let d = z.x * r + z.y;
  return vec2f(r / d, -1.0 / d);
}`},_gpu_cln2z:{deps:["_gpu_chypot"],glsl:`float _gpu_cln2z(vec2 z) {
  return 45.054566736396445 - log(_gpu_chypot(z.x * 18446744073709551616.0, z.y * 18446744073709551616.0));
}`,wgsl:`fn _gpu_cln2z(z: vec2f) -> f32 {
  return 45.054566736396445 - log(_gpu_chypot(z.x * 18446744073709551616.0, z.y * 18446744073709551616.0));
}`},_gpu_cinvpm:{deps:["_gpu_cinv","_gpu_chypot"],glsl:`vec2 _gpu_cinvpm(vec2 z, float t) {
  vec2 w = _gpu_cinv(z);
  if (_gpu_chypot(z.x, z.y) > 2.0) return vec2(1.0 + t * w.x, t * w.y);
  float nx = z.x + t;
  return vec2(nx * w.x - z.y * w.y, nx * w.y + z.y * w.x);
}`,wgsl:`fn _gpu_cinvpm(z: vec2f, t: f32) -> vec2f {
  let w = _gpu_cinv(z);
  if (_gpu_chypot(z.x, z.y) > 2.0) { return vec2f(1.0 + t * w.x, t * w.y); }
  let nx = z.x + t;
  return vec2f(nx * w.x - z.y * w.y, nx * w.y + z.y * w.x);
}`},_gpu_cacsc:{deps:["_gpu_cinv","_gpu_cinvpm","_gpu_csqrts","_gpu_casinhr","_gpu_cln2z"],glsl:`vec2 _gpu_cacsc(vec2 z) {
  float s = z.y == 0.0 ? (z.x > 0.0 ? -1.0 : 1.0) : (z.y > 0.0 ? -1.0 : 1.0);
  if (_gpu_chypot(z.x, z.y) < 1.0e-18 && (z.x != 0.0 || z.y != 0.0)) return vec2(atan(z.x, abs(z.y)), s * _gpu_cln2z(z));
  vec2 w = _gpu_cinv(z);
  vec2 p = _gpu_cinvpm(z, -1.0);
  vec2 q = _gpu_cinvpm(z, 1.0);
  vec2 a = _gpu_csqrts(p.x, p.y, -s);
  vec2 b = _gpu_csqrts(q.x, q.y, s);
  return vec2(atan(w.x, a.x * b.x - a.y * b.y), _gpu_casinhr(a.x * b.y - a.y * b.x));
}`,wgsl:`fn _gpu_cacsc(z: vec2f) -> vec2f {
  let s = select(select(1.0, -1.0, z.y > 0.0), select(1.0, -1.0, z.x > 0.0), z.y == 0.0);
  if (_gpu_chypot(z.x, z.y) < 1.0e-18 && (z.x != 0.0 || z.y != 0.0)) { return vec2f(atan2(z.x, abs(z.y)), s * _gpu_cln2z(z)); }
  let w = _gpu_cinv(z);
  let p = _gpu_cinvpm(z, -1.0);
  let q = _gpu_cinvpm(z, 1.0);
  let a = _gpu_csqrts(p.x, p.y, -s);
  let b = _gpu_csqrts(q.x, q.y, s);
  return vec2f(atan2(w.x, a.x * b.x - a.y * b.y), _gpu_casinhr(a.x * b.y - a.y * b.x));
}`},_gpu_casec:{deps:["_gpu_cinvpm","_gpu_csqrts","_gpu_casinhr","_gpu_cln2z"],glsl:`vec2 _gpu_casec(vec2 z) {
  float s = z.y == 0.0 ? (z.x > 0.0 ? -1.0 : 1.0) : (z.y > 0.0 ? -1.0 : 1.0);
  if (_gpu_chypot(z.x, z.y) < 1.0e-18 && (z.x != 0.0 || z.y != 0.0)) return vec2(atan(abs(z.y), z.x), -s * _gpu_cln2z(z));
  vec2 p = _gpu_cinvpm(z, -1.0);
  vec2 q = _gpu_cinvpm(z, 1.0);
  vec2 a = _gpu_csqrts(p.x, p.y, -s);
  vec2 b = _gpu_csqrts(q.x, q.y, s);
  return vec2(2.0 * atan(a.x, b.x), _gpu_casinhr(b.x * a.y - b.y * a.x));
}`,wgsl:`fn _gpu_casec(z: vec2f) -> vec2f {
  let s = select(select(1.0, -1.0, z.y > 0.0), select(1.0, -1.0, z.x > 0.0), z.y == 0.0);
  if (_gpu_chypot(z.x, z.y) < 1.0e-18 && (z.x != 0.0 || z.y != 0.0)) { return vec2f(atan2(abs(z.y), z.x), -s * _gpu_cln2z(z)); }
  let p = _gpu_cinvpm(z, -1.0);
  let q = _gpu_cinvpm(z, 1.0);
  let a = _gpu_csqrts(p.x, p.y, -s);
  let b = _gpu_csqrts(q.x, q.y, s);
  return vec2f(2.0 * atan2(a.x, b.x), _gpu_casinhr(b.x * a.y - b.y * a.x));
}`},_gpu_casech:{deps:["_gpu_cinvpm","_gpu_csqrts","_gpu_casinhr","_gpu_cln2z","_gpu_inf"],glsl:`vec2 _gpu_casech(vec2 z) {
  if (z.x == 0.0 && z.y == 0.0) return vec2(_gpu_inf(), 0.0);
  if (_gpu_chypot(z.x, z.y) < 1.0e-18) return vec2(_gpu_cln2z(z), z.y == 0.0 && z.x < 0.0 ? 3.141592653589793 : -atan(z.y, z.x));
  float s = z.y > 0.0 ? -1.0 : 1.0;
  vec2 p = _gpu_cinvpm(z, -1.0);
  vec2 q = _gpu_cinvpm(z, 1.0);
  vec2 a = _gpu_csqrts(-p.x, -p.y, s);
  vec2 b = _gpu_csqrts(q.x, q.y, s);
  return vec2(_gpu_casinhr(a.x * b.x + a.y * b.y), 2.0 * atan(a.y, b.x));
}`,wgsl:`fn _gpu_casech(z: vec2f) -> vec2f {
  if (z.x == 0.0 && z.y == 0.0) { return vec2f(_gpu_inf(), 0.0); }
  if (_gpu_chypot(z.x, z.y) < 1.0e-18) { return vec2f(_gpu_cln2z(z), select(-atan2(z.y, z.x), 3.141592653589793, z.y == 0.0 && z.x < 0.0)); }
  let s = select(1.0, -1.0, z.y > 0.0);
  let p = _gpu_cinvpm(z, -1.0);
  let q = _gpu_cinvpm(z, 1.0);
  let a = _gpu_csqrts(-p.x, -p.y, s);
  let b = _gpu_csqrts(q.x, q.y, s);
  return vec2f(_gpu_casinhr(a.x * b.x + a.y * b.y), 2.0 * atan2(a.y, b.x));
}`},_gpu_cacoth:{deps:["_gpu_chypot","_gpu_clog1p"],glsl:`vec2 _gpu_cacoth(vec2 z) {
  float x = z.x;
  float y = z.y;
  if (_gpu_chypot(x, y) > 1.0e18) {
    float h4 = _gpu_chypot(0.25 * x, 0.25 * y);
    return vec2(x / 16.0 / h4 / h4, -y / 16.0 / h4 / h4);
  }
  float ax = abs(x);
  float u = 1.0 - ax;
  float d = u * u + y * y;
  float re = d < 1.0e-30 ? 0.5 * (log(_gpu_chypot(1.0 + ax, y)) - log(_gpu_chypot(u, y))) : 0.25 * _gpu_clog1p(4.0 * ax / d);
  float m = (ax - 1.0) * (ax + 1.0) + y * y;
  float im = 2.0 * y == 0.0 ? (m < 0.0 ? (x > 0.0 ? -1.5707963267948966 : 1.5707963267948966) : 0.0) : 0.5 * atan(-2.0 * y, m);
  return vec2(x < 0.0 ? -re : re, im);
}`,wgsl:`fn _gpu_cacoth(z: vec2f) -> vec2f {
  let x = z.x;
  let y = z.y;
  if (_gpu_chypot(x, y) > 1.0e18) {
    let h4 = _gpu_chypot(0.25 * x, 0.25 * y);
    return vec2f(x / 16.0 / h4 / h4, -y / 16.0 / h4 / h4);
  }
  let ax = abs(x);
  let u = 1.0 - ax;
  let d = u * u + y * y;
  let re = select(0.25 * _gpu_clog1p(4.0 * ax / d), 0.5 * (log(_gpu_chypot(1.0 + ax, y)) - log(_gpu_chypot(u, y))), d < 1.0e-30);
  let m = (ax - 1.0) * (ax + 1.0) + y * y;
  let im = select(0.5 * atan2(-2.0 * y, m), select(0.0, select(1.5707963267948966, -1.5707963267948966, x > 0.0), m < 0.0), 2.0 * y == 0.0);
  return vec2f(select(re, -re, x < 0.0), im);
}`}};function Ic(e,n){let t=new Set;for(let a of Object.keys(go))e.includes(a)&&t.add(a);if(t.size===0)return"";let r=new Set;function o(a){if(r.has(a))return;let l=go[a];if(l){for(let u of l.deps)o(u);r.add(a)}}for(let a of t)o(a);let i=n==="wgsl"?"wgsl":"glsl",s=[];for(let a of r)s.push(go[a][i]);return`
`+s.join(`

`)+`
`}var Hs=new Map,Nc=/^(?:fn[^\S\n]+([A-Za-z_]\w*)|(?:(?:highp|mediump|lowp)[^\S\n]+)?[A-Za-z_]\w*(?:\[\d+\])?[^\S\n]+([A-Za-z_]\w*))[^\S\n]*\(/;function Gc(e){let n=Hs.get(e);if(n!==void 0)return n;let t=[],r=[],o="",i,s=0;for(let a of e.split(`
`)){if(r.length===0&&a.trim()===""){o+=`
`;continue}r.push(a);let l=a.replace(/\/\/.*$/,"");if(i===void 0){let u=Nc.exec(l);u!==null&&(i=u[1]??u[2])}for(let u of l)u==="{"?s+=1:u==="}"&&(s-=1);i!==void 0&&s===0&&l.includes("}")&&(t.push({name:i,source:r.join(`
`),lead:o,reference:new RegExp(`(?<![\\w$])${i}(?![\\w$])`),calls:[]}),r=[],o="",i=void 0)}for(let a=0;a<t.length;a++)for(let l=0;l<a;l++)t[l].reference.test(t[a].source)&&t[a].calls.push(l);return Hs.set(e,t),t}function ue(e,n){let t=Gc(n),r=t.map(i=>i.reference.test(e));for(let i=t.length-1;i>=0;i--)if(r[i])for(let s of t[i].calls)r[s]=!0;let o="";for(let i of t.filter((s,a)=>r[a]))o+=`${o===""?i.lead||`
`:i.lead}${i.source}
`;return o}var Mc=`
float _gpu_nan() {
  return intBitsToFloat(0x7FC00000);
}
`,Ws=`
float _gpu_inf() {
  return intBitsToFloat(0x7F800000);
}
`,Lo=`
fn _gpu_nan() -> f32 {
  let bits = 0x7fc00000u;
  return bitcast<f32>(bits);
}
`,Oc=`
fn _gpu_inf() -> f32 {
  let bits = 0x7f800000u;
  return bitcast<f32>(bits);
}
`,jc=`
float _gpu_powi(float x, float n) {
  if (n == 0.0) return 1.0;
  if (n == 2.0) return x * x;
  if (n == 3.0) return x * x * x;
  if (n == 4.0) { float s = x * x; return s * s; }
  float r = pow(abs(x), n);
  if (x < 0.0 && mod(abs(n), 2.0) == 1.0) return -r;
  return r;
}
`,Uc=`
fn _gpu_powi(x: f32, n: f32) -> f32 {
  if (n == 0.0) { return 1.0; }
  if (n == 2.0) { return x * x; }
  if (n == 3.0) { return x * x * x; }
  if (n == 4.0) { let s = x * x; return s * s; }
  let r = pow(abs(x), n);
  if (x < 0.0 && (abs(n) % 2.0) == 1.0) { return -r; }
  return r;
}
`,Bc=`
vec2 _gpu_cossinpi(float u) {
  if ((floatBitsToUint(u) & 0x7FFFFFFFu) >= 0x7F800000u) return vec2(intBitsToFloat(0x7FC00000));
  float r = u - 2.0 * floor(u / 2.0 + 0.5);
  float q = floor(2.0 * r + 0.5);
  float t = r - q / 2.0;
  float c = cos(3.141592653589793 * t);
  float s = sin(3.141592653589793 * t);
  float k = q + 4.0 - 4.0 * floor((q + 4.0) / 4.0);
  vec2 v = vec2(s, -c);
  if (k == 0.0) v = vec2(c, s);
  if (k == 1.0) v = vec2(-s, c);
  if (k == 2.0) v = vec2(-c, -s);
  return vec2(v.x == 0.0 ? 0.0 : v.x, v.y == 0.0 ? 0.0 : v.y);
}
float _gpu_sinpi(float u) {
  return _gpu_cossinpi(u).y;
}
float _gpu_cospi(float u) {
  return _gpu_cossinpi(u).x;
}
float _gpu_tanpi(float u) {
  vec2 cs = _gpu_cossinpi(u);
  if (cs.x == 0.0) return _gpu_inf();
  return cs.y == 0.0 ? 0.0 : cs.y / cs.x;
}
vec2 _gpu_ipi_sinh(float u) {
  return vec2(0.0, _gpu_cossinpi(u).y);
}
vec2 _gpu_ipi_cosh(float u) {
  return vec2(_gpu_cossinpi(u).x, 0.0);
}
vec2 _gpu_ipi_tanh(float u) {
  vec2 cs = _gpu_cossinpi(u);
  if (cs.x == 0.0) return vec2(_gpu_inf(), _gpu_inf());
  return vec2(0.0, cs.y == 0.0 ? 0.0 : cs.y / cs.x);
}
vec2 _gpu_ipi_csch(float u) {
  vec2 cs = _gpu_cossinpi(u);
  if (cs.y == 0.0) return vec2(_gpu_inf(), _gpu_inf());
  return vec2(0.0, -1.0 / cs.y);
}
vec2 _gpu_ipi_sech(float u) {
  vec2 cs = _gpu_cossinpi(u);
  if (cs.x == 0.0) return vec2(_gpu_inf(), _gpu_inf());
  return vec2(1.0 / cs.x, 0.0);
}
vec2 _gpu_ipi_coth(float u) {
  vec2 cs = _gpu_cossinpi(u);
  if (cs.y == 0.0) return vec2(_gpu_inf(), _gpu_inf());
  return vec2(0.0, cs.x == 0.0 ? 0.0 : -cs.x / cs.y);
}
`,qc=`
fn _gpu_cossinpi(u: f32) -> vec2f {
  let bits = 0x7fc00000u;
  if ((bitcast<u32>(u) & 0x7FFFFFFFu) >= 0x7F800000u) { return vec2f(bitcast<f32>(bits)); }
  let r = u - 2.0 * floor(u / 2.0 + 0.5);
  let q = floor(2.0 * r + 0.5);
  let t = r - q / 2.0;
  let c = cos(3.141592653589793 * t);
  let s = sin(3.141592653589793 * t);
  let k = q + 4.0 - 4.0 * floor((q + 4.0) / 4.0);
  var v = vec2f(s, -c);
  if (k == 0.0) { v = vec2f(c, s); }
  if (k == 1.0) { v = vec2f(-s, c); }
  if (k == 2.0) { v = vec2f(-c, -s); }
  return vec2f(select(v.x, 0.0, v.x == 0.0), select(v.y, 0.0, v.y == 0.0));
}
fn _gpu_sinpi(u: f32) -> f32 {
  return _gpu_cossinpi(u).y;
}
fn _gpu_cospi(u: f32) -> f32 {
  return _gpu_cossinpi(u).x;
}
fn _gpu_tanpi(u: f32) -> f32 {
  let cs = _gpu_cossinpi(u);
  if (cs.x == 0.0) { return _gpu_inf(); }
  return select(cs.y / cs.x, 0.0, cs.y == 0.0);
}
fn _gpu_ipi_sinh(u: f32) -> vec2f {
  return vec2f(0.0, _gpu_cossinpi(u).y);
}
fn _gpu_ipi_cosh(u: f32) -> vec2f {
  return vec2f(_gpu_cossinpi(u).x, 0.0);
}
fn _gpu_ipi_tanh(u: f32) -> vec2f {
  let cs = _gpu_cossinpi(u);
  if (cs.x == 0.0) { return vec2f(_gpu_inf(), _gpu_inf()); }
  return vec2f(0.0, select(cs.y / cs.x, 0.0, cs.y == 0.0));
}
fn _gpu_ipi_csch(u: f32) -> vec2f {
  let cs = _gpu_cossinpi(u);
  if (cs.y == 0.0) { return vec2f(_gpu_inf(), _gpu_inf()); }
  return vec2f(0.0, -1.0 / cs.y);
}
fn _gpu_ipi_sech(u: f32) -> vec2f {
  let cs = _gpu_cossinpi(u);
  if (cs.x == 0.0) { return vec2f(_gpu_inf(), _gpu_inf()); }
  return vec2f(1.0 / cs.x, 0.0);
}
fn _gpu_ipi_coth(u: f32) -> vec2f {
  let cs = _gpu_cossinpi(u);
  if (cs.y == 0.0) { return vec2f(_gpu_inf(), _gpu_inf()); }
  return vec2f(0.0, select(-cs.x / cs.y, 0.0, cs.x == 0.0));
}
`;function nr(e,n,t,r,o,i=1){let s=typeof e=="string"?e:"Round",a=(b,k)=>typeof e=="string"?`${e}(${b})`:e(b,k),l=Y(t);if(l!==void 0&&(l===0||!Number.isFinite(l)))throw new Error(`Could not compile \`${s}\` with a step of ${l}: the result is NaN, and the ${o.language??"GPU"} target has no NaN literal.`);let u=l!==void 0?B(Math.abs(l),o.language):`abs(${ce(s,t,r,o)})`;if(j(n)==="scalar"){let b=ce(s,n,r,o);return`_gpu_step_fix(${`${a(`${i===1?"_gpu_step_quotient":"_gpu_half_step_quotient"}(${b}, ${u})`,!0)} * ${u}`}, ${b}, ${u})`}let f=j(n);if(typeof f!="number")throw new Error(`Could not compile \`${s}\` with a step: the operand is not a scalar or a vector.`);let c=o.language==="wgsl",m=le(f,c),d=(b,k,R,C,G)=>{if(c)return`select(${b}, ${k}, ${R} ${C} ${G})`;let A={"<=":"lessThanEqual",">":"greaterThan","==":"equal"}[C];return`mix(${b}, ${k}, ${A}(${R}, ${G}))`},h=p.canHoist(o),g=(b,k)=>{if(!h||/^[A-Za-z_]\w*$/.test(b))return b;let R=p.tempVar(o);return p.hoistStatement(o,c?`var ${R}: ${k} = ${b};`:`${k} ${R} = ${b};`),R},v=g(ce(s,n,r,o),m),x=l!==void 0?u:g(u,Fn(c)),y=g(`(${v} / ${x})`,m),P=l!==void 0?"1.17549435e-38":c?`select(0.0, 1.17549435e-38, ${x} < 3.4e38)`:`(${x} < 3.4e38 ? 1.17549435e-38 : 0.0)`,w=g(d(y,`(sign(${v}) * ${P})`,y,"==",`${m}(0.0)`),m),S=i===1?`round(${w})`:`(round(${w} * 2.0) * 0.5)`,z=g(d(w,S,`abs(${w} - ${S})`,"<=",`4.8e-7 * abs(${w})`),m),T=`(${a(z,!1)} * ${x})`,I=l!==void 0?`abs(${y})`:`(abs(${y}) * sign(${x}))`;return`(${d(T,v,I,">",`${m}(3.4e38)`)})`}function _o(e,n,t,r){if(n==="to-even")return r?`round(${e})`:`roundEven(${e})`;if(t)return`${{"away-from-zero":"_gpu_round","toward-zero":"_gpu_round_tz","toward-positive-infinity":"_gpu_round_up","toward-negative-infinity":"_gpu_round_down"}[n]}(${e})`;let o=l=>`ceil(0.5 + 0.5 * sign(${l} - 0.5))`,i=l=>`floor(0.5 + 0.5 * sign(${l} - 0.5))`,s=/^[\w.]+$/.test(e)?e:`(${e})`,a=`floor(abs(${e}))`;switch(n){case"away-from-zero":return`(sign(${e}) * (${a} + ${o(`abs(${e}) - ${a}`)}))`;case"toward-zero":return`(sign(${e}) * (${a} + ${i(`abs(${e}) - ${a}`)}))`;case"toward-positive-infinity":return`(floor(${e}) + ${o(`${s} - floor(${e})`)})`;case"toward-negative-infinity":return`(ceil(${e}) - ${o(`ceil(${e}) - ${s}`)})`}}var Dc=`
float _gpu_round(float x) {
  float a = abs(x);
  float m = floor(a);
  return sign(x) * (m + step(0.5, a - m));
}
float _gpu_round_tz(float x) {
  float a = abs(x);
  float m = floor(a);
  return sign(x) * (m + (1.0 - step(a - m, 0.5)));
}
float _gpu_round_up(float x) {
  float m = floor(x);
  return m + step(0.5, x - m);
}
float _gpu_round_down(float x) {
  float m = ceil(x);
  return m - step(0.5, m - x);
}
float _gpu_step_quotient(float x, float k) {
  float q = x / k;
  if (q == 0.0 && x != 0.0 && k < 3.4e38) return sign(x) * 1.17549435e-38;
  float r = round(q);
  return abs(q - r) <= 4.8e-7 * abs(q) ? r : q;
}
float _gpu_half_step_quotient(float x, float k) {
  float q = x / k;
  if (q == 0.0 && x != 0.0 && k < 3.4e38) return sign(x) * 1.17549435e-38;
  float r = round(q * 2.0) * 0.5;
  return abs(q - r) <= 4.8e-7 * abs(q) ? r : q;
}
float _gpu_step_fix(float m, float x, float k) {
  return k != 0.0 && abs(x / k) > 3.4e38 ? x : m;
}
`,Vc=`
fn _gpu_round(x: f32) -> f32 {
  let a = abs(x);
  let m = floor(a);
  return sign(x) * (m + step(0.5, a - m));
}
fn _gpu_round_tz(x: f32) -> f32 {
  let a = abs(x);
  let m = floor(a);
  return sign(x) * (m + (1.0 - step(a - m, 0.5)));
}
fn _gpu_round_up(x: f32) -> f32 {
  let m = floor(x);
  return m + step(0.5, x - m);
}
fn _gpu_round_down(x: f32) -> f32 {
  let m = ceil(x);
  return m - step(0.5, m - x);
}
fn _gpu_step_quotient(x: f32, k: f32) -> f32 {
  let q = x / k;
  if (q == 0.0 && x != 0.0 && k < 3.4e38) { return sign(x) * 1.17549435e-38; }
  let r = round(q);
  return select(q, r, abs(q - r) <= 4.8e-7 * abs(q));
}
fn _gpu_half_step_quotient(x: f32, k: f32) -> f32 {
  let q = x / k;
  if (q == 0.0 && x != 0.0 && k < 3.4e38) { return sign(x) * 1.17549435e-38; }
  let r = round(q * 2.0) * 0.5;
  return select(q, r, abs(q - r) <= 4.8e-7 * abs(q));
}
fn _gpu_step_fix(m: f32, x: f32, k: f32) -> f32 {
  return select(m, x, k != 0.0 && abs(x / k) > 3.4e38);
}
`;function Hc(e,n){let t=le(e,n);return n?`
fn _gpu_powi${e}(x: ${t}, n: f32) -> ${t} {
  if (n == 0.0) { return ${t}(1.0); }
  if (n == 2.0) { return x * x; }
  if (n == 3.0) { return x * x * x; }
  if (n == 4.0) { let s = x * x; return s * s; }
  let r = pow(abs(x), ${t}(n));
  if ((abs(n) % 2.0) == 1.0) { return select(${t}(1.0), ${t}(-1.0), x < ${t}(0.0)) * r; }
  return r;
}
`:`
${t} _gpu_powi${e}(${t} x, float n) {
  if (n == 0.0) return ${t}(1.0);
  if (n == 2.0) return x * x;
  if (n == 3.0) return x * x * x;
  if (n == 4.0) { ${t} s = x * x; return s * s; }
  ${t} r = pow(abs(x), ${t}(n));
  if (mod(abs(n), 2.0) == 1.0) return mix(${t}(1.0), ${t}(-1.0), lessThan(x, ${t}(0.0))) * r;
  return r;
}
`}function Wc(e){let n=/(?<![\w$])_gpu_powi\s*\(/.test(e),t=new Set,r=/(?<![\w$])_gpu_powi([234])\s*\(/g,o;for(;(o=r.exec(e))!==null;)t.add(Number(o[1]));return[...n?["scalar"]:[],...[...t].sort((i,s)=>i-s)]}var Yc={__proto__:null,True:"true",False:"false",Pi:"3.14159265359",ExponentialE:"2.71828182846",GoldenRatio:"1.61803398875",CatalanConstant:"0.91596559417",EulerGamma:"0.57721566490"};function Ee(e,n){return B(e,n)}function Fn(e){return e?"f32":"float"}function le(e,n){return n?`vec${e}f`:`vec${e}`}function Ct(e){return e!==void 0&&e.width===1&&(e.element==="i"||e.element==="u")}function Tn(e){let n=Ta(e);if(/^(float|double|half|f16|f32|f64)$/.test(n))return{element:"f",width:1};if(/^(int|i32)$/.test(n))return{element:"i",width:1};if(/^(uint|u32)$/.test(n))return{element:"u",width:1};if(n==="bool")return{element:"b",width:1};let t=/^([ibu]?)vec([234])$/.exec(n);if(t)return{element:t[1]||"f",width:Number(t[2])};let r=/^vec([234])([fhiu])$/.exec(n);if(r)return{element:r[2]==="h"?"f":r[2],width:Number(r[1])};let o=/^vec([234])<\s*([a-z0-9]+)\s*>$/.exec(n);if(o){let i=Tn(o[2]);return i===void 0||i.width!==1?void 0:{element:i.element,width:Number(o[1])}}}function lr(e,n){return e.width===1?e.element==="b"?"bool":e.element==="i"?n?"i32":"int":e.element==="u"?n?"u32":"uint":Fn(n):e.element==="f"?le(e.width,n):n?`vec${e.width}<${e.element==="b"?"bool":e.element==="i"?"i32":"u32"}>`:`${e.element}vec${e.width}`}var ka=new WeakMap;function Ys(e){let n=new Map,t=new Map;for(let{name:r,type:o,ref:i}of e){let s=Tn(o);t.set(r,{spelling:o.trim(),value:s,ref:i??r}),n.set(r,s===void 0?p.LOCAL_UNSHAPED:s.width>=2?s.width:s.element==="b"?p.LOCAL_BOOLEAN:p.LOCAL_SCALAR)}return ka.set(n,t),n}function gn(e){if(!E(e))return;let n=p.localShapeFrameOf(e.symbol);if(n!==void 0)return ka.get(n)?.get(e.symbol)}function Pa(e,n,t=new Set){if(!(!_(e)||t.has(e))){if(t.add(e),e.operator==="Assign"&&E(e.ops[0])&&n.has(e.ops[0].symbol))return e.ops[0].symbol;for(let r of e.ops){let o=Pa(r,n,t);if(o!==void 0)return o}}}function Zs(e,n){if(n.length===0)return e;let t=e.language==="wgsl",r=new Map(n.map(o=>{let i=o.ref??o.name;return[o.name,Ct(Tn(o.type))?`${t?"f32":"float"}(${i})`:i]}));return{...e,var:o=>r.get(o)??e.var(o),...p.withBoundScope(e,[...r.keys()])}}function Zc(e,n){let t=new RegExp(`(?<![\\w.])${n}(?!\\w)`);for(let r of e.split(`
`))if(t.test(r))return r.startsWith(`${n} = `)?!t.test(r.slice(n.length+3)):!1;return!1}function pn(e){return Ra(e,!1)===Fn(!1)}function Ks(e){let n=/^vec([234])/.exec(e);return n===null?1:Number(n[1])}function _r(e){if(e=W(e),typeof e!="string"){if(e.kind==="tuple")return e.elements.every(n=>pn(n.type))?e.elements.length:void 0;if(e.kind==="list"&&e.dimensions?.length===1)return pn(e.elements)?e.dimensions[0]:void 0}}function Ra(e,n){if(e===void 0||e==="unknown"||e==="any")return Fn(n);if(e=W(e),U(e,"color"))return le(3,n);if(Ne(e))return le(2,n);if(U(e,"boolean"))return"bool";if(U(e,"number"))return Fn(n);let t=_r(e);if(t!==void 0&&t>=2&&t<=4)return le(t,n)}function ve(e,n){let t=gn(e);if(t!==void 0)return Ct(t.value)?Fn(n):t.value&&lr(t.value,n);if(E(e)&&p.isLocalBoolean(e.symbol))return"bool";if((!E(e)||!p.localShapeFrameOf(e.symbol))&&(U(J(e),"color")||Dr(e)!==void 0))return le(3,n);if(p.isComplexValued(e))return le(2,n);let r=p.aggregateComponentCount(e);if(r!==void 0)return r<2||r>4?void 0:Kc(e)?le(r,n):void 0;if(!p.isNonScalarShape(e))return e.type.matches("boolean")?"bool":Fn(n)}function Kc(e){if(_(e,"Tuple")||_(e,"List"))return e.ops.every(t=>pn(J(t)));let n=J(e);return typeof n!="string"&&(n.kind==="tuple"||n.kind==="list")?_r(n)!==void 0:!0}var Aa=new WeakMap;function Xc(e){let n=new Set,t=r=>{if(E(r)&&n.has(r.symbol))return le(3,e);let o=j(r);if(o==="matrix"){let i=Co(r);if(i===void 0)return;let[s,a]=i;return e?`mat${a}x${s}f`:s===a?`mat${a}`:`mat${a}x${s}`}if(o==="array"){let i=J(r),s=typeof i!="string"&&i.kind==="list"&&i.dimensions?.length===1?i.dimensions[0]:void 0;return s===void 0||!(s>0)?void 0:e?`array<f32, ${s}>`:`float[${s}]`}return ve(r,e)};return Aa.set(t,n),t}var Jc=["strict"],Qc={vertex:new Set(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_ClipDistance","gl_DepthRange"]),fragment:new Set(["gl_FragCoord","gl_FrontFacing","gl_PointCoord","gl_FragDepth","gl_PrimitiveID","gl_SampleID","gl_SamplePosition","gl_Layer","gl_ViewportIndex","gl_ClipDistance","gl_DepthRange"]),compute:new Set(["gl_NumWorkGroups","gl_WorkGroupID","gl_LocalInvocationID","gl_GlobalInvocationID","gl_LocalInvocationIndex","gl_WorkGroupSize"])},ep={vertex:[{name:"gl_Position",type:"vec4"},{name:"gl_PointSize",type:"float"}],fragment:[{name:"gl_FragDepth",type:"float"}]},np={vertex:{gl_VertexID:"int",gl_InstanceID:"int",gl_Position:"vec4",gl_PointSize:"float",gl_ClipDistance:"float[]"},fragment:{gl_FragCoord:"vec4",gl_FrontFacing:"bool",gl_PointCoord:"vec2",gl_FragDepth:"float",gl_PrimitiveID:"int",gl_SampleID:"int",gl_SamplePosition:"vec2",gl_Layer:"int",gl_ViewportIndex:"int",gl_ClipDistance:"float[]"}};function Ta(e){return e.trim().replace(/^((lowp|mediump|highp|flat|smooth|noperspective|centroid)\s+)+/,"")}function tp(e){let n=Ta(e);if(/^d?mat[234](x[234])?([fh]|<\s*\w+\s*>)?$/.test(n))return{kind:"matrix",spelling:n};if(/^array\s*<.*>$/.test(n)||/\[\s*\d*\s*\]$/.test(n))return{kind:"array",spelling:n}}var rp=new Set(["Add","Subtract","Multiply","Divide","Negate","Power","Square","Sqrt","Root","Exp","Ln","Log","Abs","Sign","Floor","Ceil","Round","Truncate","Fract","Mod","Sin","Cos","Tan","Arcsin","Arccos","Arctan","Sinh","Cosh","Tanh"]),op=new Set(["Less","LessEqual","Greater","GreaterEqual","Equal","NotEqual","And","Or","Not"]);function yt(e,n){if(p.isComplexValued(e))return;let t=o=>{let i=yt(o,n);return i!==void 0&&"element"in i&&i.element==="f"&&i.width===1};if(O(e))return{element:"f",width:1};if(E(e)){let o=gn(e);return o!==void 0?Ct(o.value)?{element:"f",width:1}:o.value??tp(o.spelling):e.symbol==="True"||e.symbol==="False"?{element:"b",width:1}:e.isConstant===!0&&e.type.matches("real")?{element:"f",width:1}:void 0}if(!_(e))return;let r=e.operator;if(r==="Matrix"){let o=Co(e);if(o===void 0)return;let[i,s]=o;if(s===1){let a=e.ops[0];return(_(a)?a.ops.map(u=>_(u)?u.ops[0]:u):[]).every(t)?i>=2&&i<=4?{element:"f",width:i}:{kind:"array",spelling:n?`array<f32, ${i}>`:`float[${i}]`}:void 0}return i!==s||i>4?s>=2&&s<=4?{kind:"array",spelling:n?`array<vec${s}f, ${i}>`:`vec${s}[${i}]`}:void 0:{kind:"matrix",spelling:n?`mat${s}x${i}f`:`mat${s}`}}if(r==="Tuple"||r==="List"){if(!e.ops.every(t))return;let o=e.nops;return o>=2&&o<=4?{element:"f",width:o}:{kind:"array",spelling:n?`array<f32, ${o}>`:`float[${o}]`}}if(rp.has(r))return e.nops>0&&e.ops.every(t)?{element:"f",width:1}:void 0;if(op.has(r))return e.nops>0&&e.ops.every(o=>{let i=yt(o,n);return i!==void 0&&"element"in i&&i.width===1})?{element:"b",width:1}:void 0;if(r==="If"&&e.nops===3){let o=yt(e.ops[1],n),i=yt(e.ops[2],n);if(o!==void 0&&i!==void 0&&"element"in o&&"element"in i&&o.element===i.element&&o.width===i.width)return o}}function ip(e,n,t){let r=n.find(c=>c.name===e);if(r!==void 0)return{type:Tn(r.type)};let o=/^(.+)\.([a-z]{1,4})$/.exec(e),i=o===null?void 0:n.find(c=>c.name===o[1]);if(o===null||i===void 0){let c=n.length===0?"This shader declares no outputs.":`The outputs are ${n.map(d=>`"${d.name}" (\`${d.type}\`)`).join(", ")}.`,m=n.find(d=>(Tn(d.type)?.width??1)>=2);return{error:`"${e}" is not an output of the shader. A body statement must assign a declared output, or components of a vector output${m===void 0?"":` (\`${m.name}.x\`)`}. ${c}`}}let s=o[2],a=Tn(i.type),l=c=>({error:`"${e}" selects the components "${s}" of the output "${i.name}" (\`${i.type}\`), but ${c}.`});if(a===void 0||a.width<2)return l("the output is not a vector");let u=t?["xyzw","rgba"]:["xyzw","rgba","stpq"],f=u.find(c=>[...s].every(m=>c.includes(m)));return f===void 0?l(`these letters are not all from one of the sets ${u.map(c=>`"${c}"`).join(", ")}`):[...s].some(c=>f.indexOf(c)>=a.width)?l(`the vector has only ${a.width} components`):new Set(s).size!==s.length?l("an assignment cannot write a component more than once"):{type:{element:a.element,width:s.length},base:i.name,letters:s}}function Xs(e,n,t){return e.width!==n.width?!1:e.element===n.element?!0:t===void 0?!1:n.element==="f"?e.element==="i"||e.element==="u":t>=400&&e.element==="i"&&n.element==="u"}var ot=class{getOperators(){return Ln}_functionsMemo;getFunctions(){let n=this.getLanguageSpecificFunctions();return this._functionsMemo?.languageSpecific!==n&&(this._functionsMemo={languageSpecific:n,merged:Object.assign(Object.create(null),In,n)}),this._functionsMemo.merged}getConstants(){return Yc}getShapeRules(){return{scalarGenTypeSlots:new Map([["mix",new Set([2])],["refract",new Set([2])]]),mandatoryScalarSlots:new Map([["refract",new Set([2])]]),vectorOnlySlots:new Map([["cross",new Set([0,1])],["dot",new Set([0,1])],["faceForward",new Set([0,1,2])],["normalize",new Set([0])],["reflect",new Set([0,1])],["refract",new Set([0,1])]]),matrixArithmetic:(n,t)=>n==="*"||t&&(n==="+"||n==="-"),matrixNegate:!1}}createTarget(n={}){let t=this.getFunctions(),r=this.getConstants(),o=this.languageId==="wgsl"?"vec2f":"vec2",i=this.getShapeRules(),s={language:this.languageId,isRealOnlyLowering:af,supportedModes:Jc,loweredSymbolType:Xc(this.languageId==="wgsl"),maxInlineElements:tt,gpuShapeRules:i,beginCompilation:qf,hoistScalarInvariants:!0,unrollComprehensions:!0,appliesFunctionLiteralsOnly:!0,assignmentValue:(a,l,u)=>U(J(a),"color")?Fe("Assign",a,f=>f===a?l:p.compileValueOperand(f,u),u):l,cseCanMaterialize:et,cseMaterialize:(a,l,u,f)=>{if(!et(f))return!1;let c=ve(a,f.language==="wgsl");return c===void 0?!1:(p.hoistStatement(f,f.language==="wgsl"?`let ${l}: ${c} = ${u};`:`${c} ${l} = ${u};`),!0)},bareStatementBlocks:this.languageId==="glsl"||this.languageId==="wgsl",recompileStatement:Ru,lazyOperand:(a,l,u)=>Ue(a,l,u),valueBlock:(a,l,u,f,c)=>{if(!p.canHoist(f)||Rn.has(f.hoist))return;let m=c!==void 0&&p.foldValueImpure(c);m&&Je("Block",[c],f);let d=f.language==="wgsl",h=ve(a,d);if(h===void 0)return;let g=p.tempVar(f),v=p.joinShaderStatements([...l,`${g} = ${u}`]).split(`
`).map(x=>`  ${x}`).join(`
`);return p.hoistStatement(f,d?`var ${g}: ${h};`:`${h} ${g};`,`{
${v}
}`),m&&De([c],f),g},mangleId:a=>qe(a,this.languageId),selection:(a,l,u)=>Wu(a,l,u),broadcastUnary:(a,l,u,f)=>Yu(a,l,u,f),checkOperandShapes:(a,l,u)=>_a(a,l,u,i,f=>this.preambleFor(f),t[a]),operators:a=>Ln[a],functions:a=>t[a],constant:a=>a==="ImaginaryUnit"?`${o}(0.0, 1.0)`:r[a],var:a=>{if(a==="ImaginaryUnit")return`${o}(0.0, 1.0)`;if(a in r)return r[a]},string:a=>{throw new Error(`Could not compile the string literal ${JSON.stringify(a)}: it is not supported on the ${this.languageId} target: the shader languages have no text type \u2014 no string, no character, no grapheme-cluster indexing \u2014 so there is no value a quoted literal could lower to.`)},number:a=>Ee(a,this.languageId),complex:(a,l)=>`${o}(${Ee(a,this.languageId)}, ${Ee(l,this.languageId)})`,absence:{numeric:{make:()=>ze({language:this.languageId})}},indent:0,ws:a=>a??"",preamble:"",declare:(a,l)=>{let u=l??(this.languageId==="wgsl"?"f32":"float"),f=this.languageId==="wgsl"?Ns(u):void 0;if(f!==void 0&&f>kn)throw new Error(`Could not compile \`Block\`: the local "${a}" (\`${u}\`, ${f} bytes) is a function-scope variable, and WGSL guarantees only ${kn} bytes of them per function. Read the list where it is, from a storage buffer (the storage kind 'storage-buffer'), instead of copying it into a local.`);return this.languageId==="wgsl"?`var ${a}: ${u}`:`${u} ${a}`},block:a=>{if(a.length===0)return"";let l=a.length-1;if(/^\s*(for|while)\b/.test(a[l]))throw new Error(`Could not compile \`${this.languageId.toUpperCase()}\`: a Loop (or other statement-form construct) cannot be the final statement of a block \u2014 a shader block must evaluate to a typed value.`);let u=this.languageId==="wgsl"?/^([^\s()[\]{}'"=,:;]+) = /.exec(a[l]):null;return u!==null?a.push(`return ${u[1]}`):a[l]=`return ${a[l]}`,p.joinShaderStatements(a)},naming:{counter:0,usedNames:new Set},...n};if(s.constantFold!==!1&&s.foldEmittedConstant===void 0){let a=Di(s.varsKeys,s.var);s.foldEmittedConstant=(l,u)=>Vi(u,a)}return Bf(s),s}targetExtension;withTargetExtension(n,t){let r=this.targetExtension;this.targetExtension=n;try{return t()}finally{this.targetExtension=r}}emittedUserFunctionNames(){return[...this.currentUserFunctions?.defs?.keys()??[]]}createTargetFor(n,t,r={}){let o=this.createTarget(r),i=this.targetExtension;i!==void 0&&(i.storage!==void 0&&(o.storage=new Map([...o.storage??[],...i.storage])),o.storageRead=i.storageRead,o.hostInputVars=i.hostInputVars,i.onReturn!==void 0&&(o.onReturn=i.onReturn));let s=0;o.checkDefinitionBody=(f,c,m)=>{let d=c.cse,h={...It(f,{...d?.harvestOptions,admitPureUserFunctions:!0}),share:m&&d?.enabled===!0},g=Wt(f,h);if(m||(s+=g),g>Ke||s>Ke)throw new Error(`Could not compile: the ${this.languageId.toUpperCase()} code of the user-defined functions that the expression calls would have more than ${Ke.toLocaleString("en-US")} nodes. A subexpression that several paths reach is written once for each path when the shader cannot compute it once: the paths go through different branches of an \`If\`, the subexpression reads a \`vars\` source that is not a variable or a field of a variable (\`u.c\`), it is not pure, or the \`cse\` option is false. A call that is written in place of its definition is written in full at each call site.`)};let a=Hf(n);if(a.size>0){let f=o.mangleId;o.mangleId=c=>{if(a.has(c))throw new Error(`Could not compile \`${c}\`: the symbol is text-typed, which is not supported on the ${this.languageId} target: the shader languages have no text type \u2014 no string, no character, no grapheme-cluster indexing \u2014 so it would be emitted as a bare identifier and declared as a numeric uniform.`);return f?f(c):c}}let l=o.storage;if(l!==void 0&&l.size>0){let f=o.var,c=o.mangleId,m=this.languageId;o.var=d=>(Is(d,l,m),f(d)),o.mangleId=d=>(Is(d,l,m),c?c(d):d)}let u=rt(o);if(u.stage=t,u.hostFrame=n?.engine?._randomFrame!==void 0,r.naming===void 0&&(o.naming=p.newNamingContext(n,[o.preamble])),this.currentUserFunctions=void 0,!("userFunctions"in r)){let f=this.newUserFunctions();f.root=o,o.userFunctions=f,this.currentUserFunctions=f}return o}currentUserFunctions;userFunctionDefs(n){let t=this.currentUserFunctions,r=t?.defs;return!t||!r||r.size===0||(p.pruneUnreferencedVariantBases(t,n),r.size===0)?"":[...r.values()].join(`

`)+`
`}newUserFunctions(){let n=this.languageId,t=n==="wgsl",r=new Map,o=(s,a,l,u)=>this.declareGPUFunction(s,a,l,u),i=(s,a,l,u,f)=>{if(u.length===0||l.ret!==(t?"f32":"float"))return;let c=u[0].engine;if(!p.userFunctionParamsAreScalar(c,s))return;let m,d,h=u.map((y,P)=>{if(l.complex[P]||l.colors[P])return;let w=ve(y,t);if(w===l.params[P])return!1;if(l.params[P]!==(t?"f32":"float")||w===void 0||!/^vec[234]f?$/.test(w)||(t?!w.endsWith("f"):w.endsWith("f"))||!p.isShaderVectorListArg(y))return;let S=Ks(w);if(p.aggregateComponentCount(y)===S&&!(m!==void 0&&m!==S))return m=S,d=w,!0});if(m===void 0||d===void 0||h.some(y=>y===void 0))return;let g=f.userFunctions;if(g===void 0)return;let v=h.map(y=>y?"1":"0").join(""),x=p.registryHelperName(g,`${s}#each${m}_${v}`);if(!g.defs.has(x)){let y=u.map((S,z)=>[`a${z}`,h[z]?d:l.params[z]]),P=["x","y","z","w"].slice(0,m),w=`${d}(${P.map(S=>`${a}(${u.map((z,T)=>h[T]?`a${T}.${S}`:`a${T}`).join(", ")})`).join(", ")})`;g.defs.set(x,o(x,d,y,w))}return`${x}(${u.map(y=>p.compileValueOperand(y,f)).join(", ")})`};return{defs:new Map,compiling:new Set,lowering:{noRecursion:!0,staticReturnType:!0,define:({id:s,name:a,params:l,body:u,literal:f,target:c,parameterTypes:m,extraParams:d})=>{qe(a,n);for(let C of l)qe(C,n);let h=d??[];for(let C of h)qe(C.name,n);let g=f.engine,v=_(f)?f.ops.slice(1):[],x=new Map,y=new Map,P=[],w=[],S=l.map((C,G)=>{let A=m?.[G]??p.userFunctionParamType(g,s,G),L=v[G]?.type?.type,M=A===void 0||A==="unknown"?L:A,N=Ra(M,t);if(P.push(M!==void 0&&U(W(M),"color")),N===void 0)throw new Error(`Could not compile \`${s}\`: parameter "${C}" has no static ${n.toUpperCase()} type \u2014 only scalars, booleans, colors, complex values and 2\u20134 component vectors have one, and a shader function signature must be fully typed. Declare a narrower signature for "${s}".`);let q=M!==void 0&&Ne(M),Z=q?2:P[G]?3:_r(M??"unknown")??0;return x.set(C,q),w.push(q),y.set(C,N==="bool"?p.LOCAL_BOOLEAN:Z>=2?Z:p.LOCAL_SCALAR),N}),z=p.withLocalShapeFrame(x,y,()=>h.map(C=>{let G=ve(C.expr,t);if(G===void 0)throw new Error(`Could not compile \`${s}\`: the hoisted value \`${C.expr.toString()}\` has no static ${n.toUpperCase()} type, so no variant of "${s}" takes it as a parameter.`);return{shader:G,complex:p.isComplexValued(C.expr)}}),!0);h.forEach((C,G)=>{let{shader:A,complex:L}=z[G],M=L?2:Ks(A);x.set(C.name,L),y.set(C.name,A==="bool"?p.LOCAL_BOOLEAN:M>=2?M:p.LOCAL_SCALAR)});let T=Nu(s,l,S,u,c,t),{ret:I,code:b}=p.withLocalShapeFrame(x,y,()=>{let C=ve(u,t);if(C===void 0)throw new Error(`Could not compile \`${s}\`: the return value has no static ${n.toUpperCase()} type \u2014 only scalars, booleans, colors, complex values and 2\u20134 component vectors have one.`);let G=p.compileFunctionBody(u,{...c,gpuParameterFacts:T,onReturn:A=>{let L=A===void 0?void 0:ve(A,t);if(L!==C)throw new Error(`Could not compile \`${s}\`: a \`Return\` in this body yields `+(L===void 0?`a value with no static ${n.toUpperCase()} type`:`a "${L}" value`)+`, but "${s}" is declared to return "${C}" (the shape of the body's own final value). ${n.toUpperCase()} has no implicit conversion between them, and a shader function has a single return type. Make every \`Return\` \u2014 and the body's final value \u2014 the same shape.`)}});return p.recordUserFunctionLane(c,s,a,u),{ret:C,code:G}},!0);io(s,b,n);let k=[...l,...h.map(C=>C.name)],R=[...S,...z.map(C=>C.shader)];return r.set(a,{names:k,params:R,colors:[...P,...h.map(()=>!1)],complex:[...w,...z.map(C=>C.complex)],ret:I}),o(a,I,k.map((C,G)=>[C,R[G]]),b)},call:({id:s,name:a,args:l,target:u,held:f})=>{let c=r.get(a);if(c===void 0)throw new Error(`Internal: no synthesized signature for "${s}"`);let m=f===void 0?l:[...l,...f];if(m.length!==c.params.length)throw new Error(`Could not compile \`${s}\`: called with ${m.length} argument(s) but declared with ${c.params.length} \u2014 a ${n.toUpperCase()} call must match its declaration exactly (there are no optional or variadic parameters).`);if(f===void 0){let h=i(s,a,c,m,u);if(h!==void 0)return h}let d=m.map((h,g)=>{let v=ve(h,t),x=v===void 0?gn(h):void 0;if(x!==void 0)throw new Error(`Could not compile \`${s}\`: argument ${g+1} \`${h.toString()}\` is declared "${x.spelling}" by the caller \u2014 a type with no static ${n.toUpperCase()} value shape here (only scalars, booleans and 2\u20134 component vectors have one), so it cannot be matched against parameter "${c.names[g]}" (declared "${c.params[g]}").`);if(v===void 0)throw new Error(`Could not compile \`${s}\`: argument ${g+1} is a collection with no static ${n.toUpperCase()} shape (only 2\u20134 component vectors have one), and a shader has no runtime broadcast dispatch to apply "${s}" element-wise.`);if(c.complex[g]&&v===(t?"f32":"float")&&v!==c.params[g])return`${ne(u)}(${p.compileValueOperand(h,u)}, 0.0)`;if(v!==c.params[g])throw new Error(`Could not compile \`${s}\`: argument ${g+1} \`${h.toString()}\` lowers to "${v}" but parameter "${c.names[g]}" is declared "${c.params[g]}" \u2014 ${n.toUpperCase()} has no implicit conversion between them. Declare a matching signature for "${s}".`);return c.colors[g]?Fe(s,h,y=>p.compileValueOperand(y,u),u):p.compileValueOperand(h,u)});return`${a}(${d.join(", ")})`},value:({id:s})=>{throw new Error(`Could not compile \`${s}\`: a user-defined function cannot be used as a VALUE on target '${n}' \u2014 the shader languages have no function values (no higher-order operands, no function pointers). Call it instead.`)}}}}declareGPUFunction(n,t,r,o){let i=this.languageId==="wgsl"?`fn ${n}(${r.map(([s,a])=>`${s}: ${a}`).join(", ")}) -> ${t}`:`${t} ${n}(${r.map(([s,a])=>`${a} ${s}`).join(", ")})`;if(o.includes(`
`)){let s=o.split(`
`).map(a=>`  ${a}`).join(`
`);return`${i} {
${s}
}`}return`${i} {
  return ${o};
}`}compileDeclaredFunctionBody(n,t,r,o){let i=t.map(([m,d])=>({name:m,type:d})),s=new Map,a=this.createTargetFor(n,void 0,{constantFold:r?.constantFold,inputWrites:new Set,inputLocals:s}),l=a.var;a.var=m=>s.get(m)??l(m);let u=p.namingContext(a);for(let[m]of t)u.usedNames.add(m);for(let m of o??[])s.set(m,p.tempVar(a));let f=Zs(a,i),c=p.withLocalShapeFrame(new Map,Ys(i),()=>p.compileFunctionBody(n,f));if(io("this function body",c,this.languageId),o===void 0&&a.inputWrites.size>0)return this.compileDeclaredFunctionBody(n,t,r,[...a.inputWrites]);if(s.size>0){let m={};p.withReferences(m,n,f),c=this.withInputLocalCopies(c,s,m.freeSymbolTypes)}return c}compile(n,t={}){let r=t.storage===void 0?void 0:Wn(t.storage,[n],this.createTarget(),{vars:t.vars,functions:t.functions});try{return $n(n,t.vars,()=>jt(n,t,o=>this.compileOrThrow(o,t,r)))}catch(o){if(rn(o,n.engine._deadlineFrame),t.fallback!==!0)throw o;let i=o.message;return console.warn(`Compilation fallback for "${n.operator}" (target: ${this.languageId}): ${i}`),p.buildInterpreterFallback(n,i,this.languageId,this.createTarget(),t.vars?new Set(Object.keys(t.vars)):void 0,Ge(o,i))}}compileOrThrow(n,t={},r,o){let i=n;if(this.languageId!=="wgsl"){for(let[b,k]of r??[])if(k==="storage-buffer")throw new Error(`Could not compile \`${b}\`: the storage kind 'storage-buffer' of "${b}" is not supported on the ${this.languageId} target, because WebGL2 has no storage buffers. Compile to 'wgsl', or give "${b}" the storage kind 'sampler2D'.`)}n=mt(n);let s=Ci(void 0,t.functions),a,l=n,u=()=>a??=hr(l,t.vars),f=()=>u().all;t.vars!==void 0&&Yf(t.vars,()=>u().written,f);let c=b=>zi(t.vars?.[b],/^[A-Za-z_][A-Za-z0-9_]*$/.test(b)?b:void 0,(k,R)=>Wf(k,R,b,t.vars??{},f));n=ht(n,{skipHeads:s,iterationBudget:t.iterationBudget,readsLiveSource:c,unrollComprehensions:!0});let{functions:m,vars:d}=t,h=this.getFunctions(),g=this.getConstants(),v=this.languageId==="wgsl"?"vec2f":"vec2",x=new Map,y=this.createTargetFor(n,void 0,{inputWrites:new Set,inputLocals:x,varsKeys:d?new Set(Object.keys(d)):void 0,foldExcludedOps:m?new Set(Object.keys(m)):void 0,unrollSkipHeads:s,constantFold:t.constantFold,storage:r,storageBufferBindings:Ii(t.storage),storageBuffersRead:new Map,mode:t.mode,functions:b=>{if(m&&Object.hasOwn(m,b)){let k=Ni(m[b]);if(typeof k=="string")return k;if(typeof k=="function")return k.name||b}return h[b]},constant:b=>b==="ImaginaryUnit"?`${v}(0.0, 1.0)`:g[b],var:b=>{let k=x.get(b);if(k!==void 0)return k;if(d&&Object.hasOwn(d,b)){let R=d[b];return typeof R=="string"&&/^[A-Za-z_]\w*$/.test(R)&&qe(R,this.languageId),R}if(b==="ImaginaryUnit")return`${v}(0.0, 1.0)`;if(b in g)return g[b]},naming:p.newNamingContext(n,[t.preamble,...d?Object.values(d):[]])});for(let b of o??[])x.set(b,p.tempVar(y));n=ht(ds(p.inlineCollectionValuedCallsAtRoot(n,y,"list<any>"),y,{isOverridden:b=>m!==void 0&&Object.hasOwn(m,b)||d!==void 0&&Object.hasOwn(d,b)}),{skipHeads:s,iterationBudget:t.iterationBudget,readsLiveSource:c,unrollComprehensions:!0,explicitPointNorm:b=>{let k=Yr(b,y);return typeof k=="string"?void 0:k}}),d&&(rt(y).varNames=new Set(Object.keys(d)));let P={isOverriddenOperator:b=>m!==void 0&&Object.hasOwn(m,b),isStringVar:c,isVarsKey:b=>d!==void 0&&Object.hasOwn(d,b)};if(Wt(n,{...It(n,{...P,admitPureUserFunctions:!0}),share:t.cse!==!1})>Ke)throw new Error(`Could not compile: the ${this.languageId.toUpperCase()} code for this expression would have more than ${Ke.toLocaleString("en-US")} nodes. A subexpression that several paths reach is written once for each path when the shader cannot compute it once: the paths go through different branches of an \`If\`, the subexpression reads a \`vars\` source that is not a variable or a field of a variable (\`u.c\`), it is not pure, or the \`cse\` option is false.`);p.openCseSession(n,y,{enabled:t.cse,...P}),Iu(n,y);let S=p.compileCseRoot(n,y,0,()=>p.compileFunctionBody(n,y));if(io("this expression",S,this.languageId),o===void 0&&y.inputWrites.size>0)return this.compileOrThrow(i,t,r,[...y.inputWrites]);let z={target:this.languageId,success:!0,code:S},T=this.preambleFor(S);if(y.storageBufferBindings!==void 0){let b=Ef(`${S}
${T}`,y.storageBufferBindings,y.storageBuffersRead??new Map);b.layouts.length>0&&(z.storageBuffers=b.layouts,T=b.declarations+T)}T&&(z.preamble=T);let I=ts(y,`${S}
${T??""}`);I.bounds.length>0&&(z.float32Bounds=I.bounds),I.warnings.length>0&&(z.warnings=I.warnings),p.withReferences(z,n,y,d?new Set(Object.keys(d)):void 0);for(let b of z.storageBuffers??[]){let k=z.freeSymbolTypes?.[b.symbol];k!==void 0&&(k.lowered=b.struct)}return x.size>0&&(z.code=this.withInputLocalCopies(z.code,x,z.freeSymbolTypes,b=>d!==void 0&&Object.hasOwn(d,b)?d[b]:b)),z}withInputLocalCopies(n,t,r,o=i=>i){let i=this.languageId==="wgsl",s=[...this.currentUserFunctions?.defs?.values()??[]].join(`
`),a=[];for(let[u,f]of t){if(new RegExp(`\\b${f}\\b`).test(s))throw new Error(`Could not compile \`Assign\`: the body writes "${u}", an input of the shader, and a user-defined function that the body calls reads "${u}". The body writes a local copy of the input, because the shader cannot write an input, and the function, which is declared outside the body, cannot read that local.`);let c=r?.[u]?.lowered;if(c===void 0)throw new Error(`Could not compile \`Assign\`: the body writes "${u}", an input of the shader, and the shader type of "${u}" is not known, so the local copy that the body writes cannot be declared.`);let m=i?Ns(c):void 0;if(m!==void 0&&m>kn)throw new Error(`Could not compile \`Assign\`: the body writes "${u}", an input of the shader, so it reads and writes a local copy of it, and the copy (\`${c}\`, ${m} bytes) is larger than the ${kn} bytes of function-scope variables that WGSL guarantees per function. Write a new name instead of "${u}", or read "${u}" from a storage buffer (the storage kind 'storage-buffer'), which the body cannot write.`);let d=Zc(n,f)?"":` = ${o(u)}`;a.push(i?`var ${f}: ${c}${d};`:`${c} ${f}${d};`)}let l=n;if(!l.includes(`
`)){let u=/^([A-Za-z_]\w*) = /.exec(l)?.[1];l=u!==void 0&&[...t.values()].includes(u)?`${l};
return ${u};`:`return ${l};`}return[...a,l].join(`
`)}preambleFor(n){let t=this.userFunctionDefs(n);t&&(n=`${n}
${t}`);let r="",o=this.languageId==="wgsl",i=Ic(n,this.languageId),s=!o&&i.includes("_gpu_inf(");s&&(r+=Ws),r+=i;let a=Rf(n),l=yf(n),u=Tf(n),f=/_gpu_(hurwitz_)?zeta/.test(n),c=/_gpu_(lerch|poly_log)/.test(n),m=/_gpu_(di|tri|poly)gamma\(/.test(n);!o&&(n.includes("_gpu_nan")||a.length>0||l.length>0||u.length>0||f||c||m)&&(r+=Mc),!o&&!s&&(n.includes("_gpu_inf")||n.includes("_gpu_gamma")||/_gpu_ipi_\w+\(/.test(n)||n.includes("_gpu_tanpi")||f||c||m)&&(r+=Ws);for(let d of a)r+=zf(d,o);for(let[d,h]of l)r+=vf(d,h,o);for(let d of u)r+=Pf(d);if(o)for(let[d,h]of Lf(n))r+=Af(d,h);if(o){let d=kf(n);for(let[h,g]of d.numbers)r+=Cf(h,g);for(let[h,g,v]of d.points)r+=Sf(h,g,v)}if(o){let d=cs(n);d&&(r+=d,n=`${n}
${d}`)}r+=Nf(n,o);for(let d of Wc(n))r+=d==="scalar"?o?Uc:jc:Hc(d,o);if(r+=ue(n,o?Tu:Au),o&&(r+=ue(n,Lu)),r+=ue(n,o?ju:Ou),r+=ue(n,o?Vc:Dc),r+=ue(n,o?qc:Bc),o||(r+=ue(n,ns)),r+=ue(f||c?`${n} _gpu_gamma(`:n,o?Jf:Xf),r+=ue(n,o?ec:Qf),r+=ue(c?`${n} _gpu_zeta_pow( _gpu_hurwitz_zeta(`:n,o?tc:nc),r+=ue(n,o?oc:rc),r+=ue(n,o?sc:ic),n.includes("_gpu_heaviside")&&(r+=this.languageId==="wgsl"?lc:ac),n.includes("_gpu_sinc")&&(r+=this.languageId==="wgsl"?fc:uc),n.includes("_gpu_fresnel")&&(r+=this.languageId==="wgsl"?pc:cc),n.includes("_gpu_fresnelC")&&(r+=this.languageId==="wgsl"?mc:dc),n.includes("_gpu_fresnelS")&&(r+=this.languageId==="wgsl"?gc:hc),r+=ue(n,o?bc:_c),r+=ue(n,o?yc:vc),n.includes("_gpu_rnd_draw")){let d=[...new Set(n.match(new RegExp(`${wt}\\d+`,"g"))??[])].sort((h,g)=>Number(h.slice(wt.length))-Number(g.slice(wt.length)));r+=`
`+d.map(h=>this.languageId==="wgsl"?`var<private> ${h}: u32 = 0u;
`:`uint ${h} = 0u;
`).join(""),r+=ue(n,o?Ec:$c)}if(r+=ue(n,o?wc:xc),r+=ue(n,o?Cc:zc),r+=ue(n,o?Fc:Lc),o){let d=`${r}
${n}`;/(?<![\w$])_gpu_inf\(/.test(d)&&(r=Oc+r),/(?<![\w$])_gpu_nan\(/.test(d)&&(r=Lo+r)}return t?r?`${r}
${t}`:t:r}compileToSource(n,t={}){if(fn("compileToSource()",n,this.languageId),t.storage!==void 0&&Object.keys(t.storage).length>0)throw new Error("compileToSource() does not support the `storage` option: a sampler-backed read needs a helper declaration, and this route returns a bare expression with no preamble channel. Use `compile()`, whose result carries the preamble.");let r=p.compile(n,this.createTargetFor(n,void 0,{userFunctions:void 0,constantFold:t.constantFold}));return gs("compileToSource()",r,this.languageId),r}compileShaderBody(n,t,r=[],o,i=[],s=[],a){let l=this.languageId==="wgsl";if(t==="compute"&&n.length>0)throw new Error(`Could not compile the body statement "${n[0].variable}" of \`compileShader()\`: a compute shader from \`compileShader()\` cannot write a result. It has no outputs and no storage buffer, so the statement would assign a name that the shader does not declare. To compute values on the GPU, use \`compile()\` or \`WGSLTarget.compileFieldFunction()\`.`);let u=[...s,...l?[]:ep[t]??[]],f=n.map(z=>{let T=ip(z.variable,u,l);if("error"in T)throw new Error(`Could not compile the body statement "${z.variable}" of \`compileShader()\`: ${T.error}`);return T});n=n.map(z=>({...z,expression:mt(z.expression)}));let c=0;for(let z of n)c+=Wt(z.expression,{...It(z.expression),share:!1});if(c>Ke)throw new Error(`Could not compile \`compileShader()\`: the ${this.languageId.toUpperCase()} code of the body statements would have more than ${Ke.toLocaleString("en-US")} nodes. A subexpression that several paths reach is written once for each path in a body statement. Assign the subexpression to a variable of its own (\`Block\`).`);let m=new Set;for(let z of r){if(m.has(z.name))throw new Error(`Could not compile: the shader declaration \`${z.name}\` is declared more than once (as an input and as a uniform): two storage classes cannot share one name, and a body referencing it names neither unambiguously. Rename one of them.`);m.add(z.name)}let d=[...r];if(!l)for(let z of[...s,...Object.entries(np[t]??{}).map(([T,I])=>({name:T,type:I}))])m.has(z.name)||(m.add(z.name),d.push({name:z.name,type:z.type}));let h=this.createTargetFor(n[0]?.expression,t,{constantFold:o,naming:p.newNamingContext(n.map(z=>z.expression),n.map(z=>z.variable))}),g=new Set,v=!1,x=h.var.bind(h);h.var=z=>{let T=x(z);return v&&T===void 0&&g.add(z),T};let y=Zs(h,d);v=!0;let P=p.withLocalShapeFrame(new Map,Ys(d),()=>n.map((z,T)=>{fn(`compileShader() body statement "${z.variable}"`,z.expression,this.languageId);let I=Pa(z.expression,new Set(r.map(de=>de.name)));if(I!==void 0)throw new Error(`Could not compile the body statement "${z.variable}" of \`compileShader()\`: it assigns "${I}", a declared input or uniform of the shader, which is read-only in ${this.languageId.toUpperCase()}. Assign a local copy of it instead (\`Block(y \u2254 ${I}; y \u2254 y + 1; y)\`).`);let b=p.compileStatementBody(z.expression,y),{stmts:k}=b,{code:R}=b;gs(`compileShader() body statement "${z.variable}"`,R,this.languageId);let C=f[T].type,G=z.expression,A=E(G)?d.find(de=>de.name===G.symbol):void 0,L=A===void 0?void 0:Tn(A.type),M=C!==void 0&&C.element!=="f"&&L!==void 0&&Ct(L),N=M?L:yt(G,l),q=N===void 0?p.aggregateComponentCount(G):void 0,Z=de=>`Could not compile the body statement "${z.variable}" of \`compileShader()\`: the value ${de}, and the target "${z.variable}" has the type \`${lr(C,l)}\`.`,H=`${this.languageId.toUpperCase()} does not convert the one to the other in an assignment. Give the value the type of the target, or declare the output with the type of the value.`;if(C!==void 0&&q!==void 0&&q>0&&q!==C.width)throw new Error(`${Z(`has ${q} components`)} ${H}`);if(M&&Xs(L,C,a))R=A.ref??A.name;else if(C!==void 0&&N!==void 0&&(!("element"in N)||!Xs(N,C,a))){let de=`has the type \`${"element"in N?lr(N,l):N.spelling}\``;throw"element"in N&&N.element==="f"&&C.element!=="f"?new Error(`${Z(de)} \`compileShader()\` computes float values, and cannot assign an integer output. Declare the output with a float type (\`${lr({element:"f",width:C.width},l)}\`).`):new Error(`${Z(de)} ${H}`)}let{base:ee,letters:te}=f[T];if(l&&ee!==void 0&&te!==void 0&&te.length>1){if(N===void 0&&q===void 0)throw new Error(`Could not compile the body statement "${z.variable}" of \`compileShader()\`: the number of components of the value cannot be determined, and WGSL assigns a target of ${te.length} components one component at a time. Assign the whole output, or one component in each statement (\`${ee}.${te[0]}\`).`);let de=p.tempVar(y),X=[...te].map((ae,me)=>[`${ee}.${ae}`,`${de}.${"xyzw"[me]}`]),[re,ie]=X.pop();return{variable:re,code:ie,stmts:[...k,`let ${de} = ${R};`,...X.map(([ae,me])=>`${ae} = ${me};`)]}}return{variable:z.variable,code:R,stmts:k}}));v=!1;let w=new Set([...r.map(z=>z.name),...i]),S=new Set;for(let z of n)for(let T of p.analyzeReferences(z.expression,y,w).freeSymbols)!w.has(T)&&!(this.languageId==="glsl"&&Qc[t]?.has(T)===!0)&&g.has(T)&&S.add(T);if(S.size>0)throw new Error(`Could not compile \`compileShader()\`: the body reads ${[...S].map(z=>`"${z}"`).join(", ")}, which no input or uniform of the shader declares. The emitted ${this.languageId.toUpperCase()} would read an undeclared name. Declare each name as an input or a uniform, or assign it a value.`);return P}};function Fo(e,n,t="List"){it(t,e.length);let r=Et(e);return r!==void 0?`vec${r}[${e.length}](${e.map(o=>n(o)).join(", ")})`:(dn(e,e.length>=2&&e.length<=4?`vec${e.length}`:"float[]"),e.length===2?`vec2(${e.map(o=>n(o)).join(", ")})`:e.length===3?`vec3(${e.map(o=>n(o)).join(", ")})`:e.length===4?`vec4(${e.map(o=>n(o)).join(", ")})`:`float[${e.length}](${e.map(o=>n(o)).join(", ")})`)}var Fa={__proto__:null,Inversesqrt:"inversesqrt",Mod:([e,n],t,r)=>{if(e===null||n===null)throw new Error("Could not compile `Mod`: missing argument");let o=()=>Y(n)===1?`fract(fract(${t(e)}))`:mr(e,n,t,r)??`mod(${t(e)}, ${t(n)})`;return Kn("Mod",e,Y(n)===1,t,r,j,o)??o()},List:(e,n)=>Fo(e,n,"List"),Matrix:(e,n)=>gr(e,n,t=>`vec${t}`,t=>`mat${t}`,t=>`float[${t}]`),Tuple:(e,n)=>Fo(e,n,"Tuple"),PointList:(e,n)=>(dn(e,e.length>=2&&e.length<=4?`vec${e.length}`:"float[]"),Fo(e,n,"PointList"))};mn(Fa.Mod,zt("fract",1,1));var sp={scalarGenTypeSlots:new Map([["min",new Set([1])],["max",new Set([1])],["clamp",new Set([1,2])],["mix",new Set([2])],["step",new Set([0])],["smoothstep",new Set([0,1])],["mod",new Set([1])],["refract",new Set([2])]]),mandatoryScalarSlots:new Map([["refract",new Set([2])]]),vectorOnlySlots:new Map([["cross",new Set([0,1])]]),matrixArithmetic:()=>!0,matrixNegate:!0},La=class extends ot{languageId="glsl";getLanguageSpecificFunctions(){return Fa}getShapeRules(){return sp}compileFunction(n,t,r,o,i){fn("compileFunction()",n,this.languageId);let s=this.compileDeclaredFunctionBody(n,o,i),a=o.map(([f,c])=>`${c} ${f}`).join(", "),l=this.preambleFor(s),u=l?`${l}
`:"";if(s.includes(`
`)){let f=s.split(`
`).map(c=>`  ${c}`).join(`
`);return`${u}${r} ${t}(${a}) {
${f}
}`}return`${u}${r} ${t}(${a}) {
  return ${s};
}`}compileShader(n){let{type:t,version:r="300 es",inputs:o=[],outputs:i=[],uniforms:s=[],body:a,constantFold:l}=n;if(t!=="vertex"&&t!=="fragment")throw new Error(`Could not compile \`compileShader()\`: the GLSL target writes only vertex and fragment shaders, not a "${String(t)}" shader. GLSL ES 3.00 (WebGL 2) has no compute stage. For a compute shader, use the WGSL target.`);let u=Number.parseInt(r,10);if(!Number.isFinite(u)||u<300)throw new Error(`GLSL version "${r}" is not supported: ES 3.00+ (or desktop 3.30+) is required`);let f=`#version ${r}

`;t==="fragment"&&(f+=`precision highp float;
precision highp int;

`);for(let d of o)f+=`in ${d.type} ${d.name};
`;o.length>0&&(f+=`
`);for(let d of i)f+=`out ${d.type} ${d.name};
`;i.length>0&&(f+=`
`);for(let d of s)f+=`uniform ${d.type} ${d.name};
`;s.length>0&&(f+=`
`);let c=this.compileShaderBody(a,t,[...o,...s],l,i.map(d=>d.name),i,/es/i.test(r)?void 0:u),m=this.preambleFor(c.map(d=>[...d.stmts,d.code].join(`
`)).join(`
`));m&&(f+=`${m}
`),f+=`void main() {
`;for(let d of c){for(let h of d.stmts)f+=h.split(`
`).map(g=>`  ${g}
`).join("");f+=`  ${d.variable} = ${d.code};
`}return f+=`}
`,f}};var br=1024,Ia=65536,Na=/^[A-Za-z][A-Za-z0-9_]*$/;function Nn(e){throw new Error(`Invalid option of compileFieldFunction(): ${e}`)}function ye(e){return{success:!1,diagnostic:e,function:"",helpers:{},paramsStructSource:"",params:[],paramsSize:0}}var ap=`A parameter of a field function is a real or integer scalar, a point (a tuple of 2, 3 or 4 real numbers), or a numeric list of known length with at most ${br} elements, in the uniform parameter struct. A list of numbers or points of unknown length, or with more than ${br} elements, can be read from a storage buffer instead: \`storage: { <name>: { kind: 'storage-buffer', group, binding } }\`. A storage buffer cannot hold complex numbers, text, booleans or lists of lists either.`;function Ce(e,n){return ye({code:"unsupported-parameter",kind:"capability",message:`Could not compile with \`compileFieldFunction()\`: the parameter "${e}" ${n}. ${ap}`,binding:e})}function Ma(e,n,t){return`_gpu_pat${t}_${e.length}_${e}_${n}`}function lp(e,n,t){let{guard:r,doc:o}=hn(t,"wgsl","_gpu_i"),i=B(t,"wgsl");return`fn ${Ma(e,n,t)}(_gpu_i: f32) -> f32 {
${o}
  if (${r}) {
    return _gpu_nan();
  }
  let _gpu_s = select(${i} + _gpu_i, _gpu_i - 1.0, _gpu_i > 0.0);
  let _gpu_e = floor(_gpu_s / 4.0);
  return ${e}.${n}[i32(_gpu_e)][i32(_gpu_s - 4.0 * _gpu_e)];
}
`}function up(e){let n=new Map,t=0,r="",o=e.length;for(;t<o;){for(;t<o&&/\s/.test(e[t]);)t++;if(t>=o)break;if(e.startsWith("//",t)){let f=e.indexOf(`
`,t),c=f<0?o:f+1;r+=e.slice(t,c),t=c;continue}let i=t,s=0,a=!1;for(;t<o;t++){if(e.startsWith("//",t)){let c=e.indexOf(`
`,t);t=c<0?o-1:c;continue}let f=e[t];if(f==="{")s++,a=!0;else if(f==="}"){if(s--,s===0&&a){t++;break}}else if(f===";"&&s===0&&!a){t++;break}}let l=e.slice(i,t),u=/^(?:@\w+(?:\([^)]*\))?\s+)*(?:fn|struct|const|override|alias|var(?:<[^>]*>)?)\s+([A-Za-z_]\w*)/.exec(l);if(u===null)throw new Error(`Internal: compileFieldFunction() cannot read the helper text \`${l.slice(0,60)}\``);n.set(u[1],`${r}${l.trim()}
`),r=""}return n}function Oa(e){if(typeof e=="string"||e.kind!=="tuple")return;let n=e.elements.length;if(!(n<2||n>4))return e.elements.every(t=>U(t.type,"number")&&!Ne(t.type)&&!U(t.type,"nan"))?n:void 0}function fp(e,n){let t=new Set,r=o=>{if(t.has(o))return!0;if(t.add(o),E(o)){let s=e.lookupDefinition(o.symbol);return Re(s)&&s.value.isConstant===!0}if(!_(o))return!0;let i;try{i=p.userFunctionLiteral(e,o.operator)}catch{return!1}return i===void 0&&o.ops.every(r)};return r(n)}function cp(e,n){let t=e.lookupDefinition(n);if(t!==void 0&&"operator"in t)return t.operator;if(Re(t))return t.value}function pp(e,n){if(e.lookupDefinition(n)!==void 0)return n;let t=/^(.+?)(?:User|Copy)\d*$/.exec(n);return t!==null&&e.lookupDefinition(t[1])!==void 0?t[1]:n}function dp(e,n,t,r){let o=l=>{let u=e.lookupDefinition(l);return Re(u)?u.value.type.type:void 0},i=(l,u=new Set)=>{if(u.has(l))return[];if(u.add(l),Object.hasOwn(n,l)){let c=r.get(l),m=o(l);return c!==void 0&&m!==void 0&&!U(m,c)?[l]:[]}let f=t.inlined.get(l);return f===void 0?[]:f.reads.flatMap(c=>i(c,u))},s=l=>`Declare ${l.map(u=>`"${u}" (\`ce.declare('${u}', '${e.box(u).type}')\`)`).join(" and ")} before its first assignment`,a=l=>l.map(u=>`"${u}"`).join(" and ");for(let[l,u]of t.functions)for(let f of pi(u)){let c=i(f.name);if(c.length===0)continue;let m=pp(e,l),d=c.length===1&&c[0]===f.name?`the parameter "${f.name}"`:`"${f.name}", whose value reads the parameter${c.length>1?"s":""} ${a(c)}`;throw new Error(`Could not compile with \`compileFieldFunction()\`: the user-defined function "${m}" reads ${d}, and the body of "${m}" was typed when "${f.name}" had the type \`${f.before.toString()}\`. A field function reads ${a(c)} from the buffer with no fact of the value (as \`${f.now.toString()}\` for "${f.name}"), so the types that the callers of "${m}" read are outdated. ${s(c)} and before "${m}" is defined.`)}for(let[l,{value:u}]of t.inlined){let f=e.lookupDefinition(l);if(!Re(f))continue;let c=f.value.type;if(c.isUnknown||U(u.type.type,c.type))continue;let m=i(l);if(m.length===0)continue;let d=f.value.inferredType,h=E(u)&&m.length===1?`Declare "${m[0]}" (\`ce.declare('${m[0]}', '${c.toString()}')\`) before its first assignment`:`Declare ${a(m)} before the first assignment with types for which the value of "${l}" is a \`${c.toString()}\``;throw new Error(`Could not compile with \`compileFieldFunction()\`: the value of "${l}" is compiled in place, and "${l}" has the ${d?"inferred":"declared"} type \`${c.toString()}\`. A field function reads ${a(m)} from the buffer with no fact of the value, and the value of "${l}" then has the type \`${u.type.toString()}\`. `+(d?`${s(m)}.`:`${h}, or declare "${l}" as \`${u.type.toString()}\`.`))}}function Io(e,n){return Math.ceil(n/e)*e}function mp(e,n,t){let r=[];try{for(let o of n){let i=e.lookupDefinition(o);if(!Re(i))continue;let s=i.value;if(s.isConstant||!s.inferredType)continue;let a=s.storedValue;if(a===void 0||a.operator==="Function")continue;let l=xn(a.type.type),u=typeof l!="string"&&l.kind==="list"&&l.dimensions?.length===1?l.dimensions[0]:void 0,f=Oa(l),c=a.type.matches("real")?"real":u!==void 0&&u>0&&a.type.matches("list<real>")?`list<real^${u}>`:f!==void 0?`tuple<${Array(f).fill("real").join(", ")}>`:a.type.type;r.push({def:s,snapshot:s._checkpointSnapshot()}),s.value=void 0,s.type=e.type(c)}return t()}finally{for(let{def:o,snapshot:i}of r.reverse())o._restoreCheckpointSnapshot(i);r.length>0&&(e._noteStateEvent({kind:"value-write",ephemeral:!1,callable:!1}),e._noteStateEvent({kind:"type-write",callableBefore:!1,callableAfter:!1}))}}function Ga(e){let n=new Set,t=/^\s*(?:\/\/[^\n]*\n\s*)*fn\s+\w+\s*\(([^)]*)\)/.exec(e);for(let r of(t?.[1]??"").matchAll(/([A-Za-z_]\w*)\s*:/g))n.add(r[1]);for(let r of e.matchAll(/\b(?:let|var)\s+([A-Za-z_]\w*)/g))n.add(r[1]);return n}function hp(e){let n=new Set,t=new Set,r=o=>{if(!(!_(o)||t.has(o))&&(t.add(o),o.operator!=="Function")){o.operator==="Assign"&&E(o.ops[0])&&n.add(o.ops[0].symbol);for(let i of o.ops)r(i)}};return r(e),n}function ja(e,n,t){let{name:r,coordinates:o,paramsStruct:i="CEParams",paramsVariable:s="ce_params",storage:a,constantFold:l}=t,u=[["name",r],["paramsStruct",i],["paramsVariable",s]];Array.isArray(o)||Nn("`coordinates` must be an array of symbol names"),o.forEach(($,F)=>u.push([`coordinates[${F}]`,$]));let f=new Set;for(let[$,F]of u)(typeof F!="string"||!Na.test(F))&&Nn(`\`${$}\` must be a WGSL identifier that starts with a letter, not ${JSON.stringify(F)}`),qe(F,"wgsl"),Ht.has(F)&&Nn(`\`${$}\` is "${F}", a predeclared function or type of WGSL, which a declaration of that name would hide`),F.startsWith("CE_List_")&&Nn(`\`${$}\` is "${F}", which starts with \`CE_List_\`, the prefix of the struct names that the compilation declares for its storage buffers`),f.has(F)&&Nn(`the name "${F}" is used for two of the declared names`),f.add(F);let c=new Set(o),m={};for(let $ of o)m[$]=$;let d=Wn(a,[n],e.createTarget(),{vars:m});for(let $ of d?.keys()??[])c.has($)&&Nn(`the storage hint names the coordinate "${$}"`),f.has($)&&Nn(`the storage hint names "${$}", which is a declared name`);let h=n.engine,g;try{g=e.bodyShape(n)}catch($){return rn($,h._deadlineFrame),ye(Ge($))}let v;try{v=jt(n,{vars:m},$=>{let F=hr($,m),Q=[],K=new Map;for(let D of F.all){if(c.has(D)||d?.has(D))continue;let se=h.lookupDefinition(D);if(!Re(se)||se.value.isConstant)continue;let xe=se.value.value;xe===void 0||_(xe,"Function")||xe.type.matches("function")||(fp(h,xe)?Q.push(D):K.set(D,xe))}let he=e.createTarget(),ke={...he,userFunctions:he.userFunctions??{defs:new Map,compiling:new Set}},vn=new Map,We=new Set([...o,...Q,...K.keys()]),en=[],ft=p.analyzeReferences($,ke,We,vn).freeSymbols,jn=new Set,Fr=[],Zo=D=>{jn.has(D)||(jn.add(D),Fr.push(D))},Ko=new Set;for(;ft.length>0;){let D=ft.pop(),se=K.get(D);if(se===void 0){en.includes(D)||en.push(D);continue}Ko.has(D)||(Ko.add(D),Zo(D),ft.push(...p.analyzeReferences(se,ke,We,vn).freeSymbols))}let tu=new Map(en.map(D=>[D,(vn.get(D)??h.symbol(D)).type])),Xo=[],Jo=[],Ir,Qo=(D,se,xe)=>{for(let Ye of p.analyzeReferences(D,he,new Set([...o,...K.keys()])).freeSymbols){c.has(Ye)&&se.add(Ye);let At=K.get(Ye);At!==void 0&&!xe.has(Ye)&&(xe.add(Ye),Zo(Ye),Qo(At,se,xe))}},ei=new Set,ni=D=>{if(ei.has(D))return;ei.add(D);let se=p.userFunctionLiteral(h,D);if(se===void 0)return;Ir===void 0&&hr(se,m).written.has(s)&&(Ir=D);let xe=cp(h,D);xe!==void 0&&Jo.push([D,xe]);let Ye=new Set;Qo(se,Ye,new Set);for(let At of Ye)Xo.push([D,At]);Rt(se)},ti=new Set,Rt=D=>{if(!ti.has(D)){if(ti.add(D),E(D))ni(D.symbol);else if(_(D)){ni(D.operator);for(let se of D.ops)Rt(se)}}};for(Rt($);Fr.length>0;)Rt(K.get(Fr.pop()));let ru=new Map([...jn].map(D=>{let se=K.get(D),xe=p.analyzeReferences(se,he,We).freeSymbols;return[D,{value:se,reads:xe}]}));return{free:en,types:tu,assigned:hp($),captures:Xo,functions:Jo,inlined:ru,written:F.written,declaring:Ir}})}catch($){return rn($,h._deadlineFrame),ye(Ge($))}for(let $ of v.assigned)if(c.has($)||v.free.includes($)&&!d?.has($))return ye({code:"unsupported-parameter",kind:"capability",message:`Could not compile with \`compileFieldFunction()\`: the body assigns "${$}", which is ${c.has($)?"a coordinate":"a parameter"} of the field function, and a field function cannot write its inputs. Declare a local first (\`Declare(${$}, "real")\`), or assign another name.`,binding:$});let x=v.captures[0];if(x!==void 0){let[$,F]=x;return ye({code:"unsupported-parameter",kind:"capability",message:`Could not compile with \`compileFieldFunction()\`: the user-defined function "${$}" reads the coordinate "${F}", which it does not take as a parameter. A coordinate is an argument of the field function, and a user-defined function is declared outside it. Pass "${F}" to the function as an argument.`,binding:F})}let y=[],P=new Map,w=new Map;for(let $ of[...v.free].sort()){if(c.has($)||d?.has($))continue;if(!Na.test($))return Ce($,"is not a WGSL identifier, so it cannot be a field of the parameter struct");try{qe($,"wgsl")}catch{return Ce($,"is a reserved word of WGSL")}let F=v.types.get($),Q=xn(F.type);if(typeof Q!="string"&&Q.kind==="list"){let K=F.toString(),he=Q.dimensions;if(he==null||he.length!==1)return Ce($,`has the type \`${K}\`, a list with no known length or with more than one axis`);let ke=he[0];if(ke<1)return Ce($,`has the type \`${K}\`, a list with no known length or with no element`);if(ke>br)return Ce($,`is a list of ${ke} elements, more than the limit of ${br} of the parameter struct`);if(!F.matches("list<real>")&&!F.matches("list<number>"))return Ce($,`has the type \`${K}\`, and only a list of real numbers can be a field of the parameter struct`);if(Ne(Q.elements))return Ce($,`has the type \`${K}\`, a list of complex numbers`);w.set($,{n:ke,ceType:K});continue}if(typeof Q!="string"&&Q.kind==="tuple"){let K=Oa(Q);if(K===void 0)return Ce($,`has the type \`${F.toString()}\`, and only a point of 2, 3 or 4 real numbers (a tuple such as \`tuple<real, real>\` or \`tuple<number, number, number>\`, with no complex or \`NaN\` component) can be a field of the parameter struct`);P.set($,K);continue}if(F.matches("boolean"))return Ce($,"is a boolean");if(F.matches("string")||F.matches("character"))return Ce($,"is text");if(typeof Q!="string"&&Ne(Q)||Ne(F.type))return Ce($,"is a complex number");y.push($)}if(y.length+P.size+w.size>0&&v.written.has(s))return ye({code:"unsupported-parameter",kind:"capability",message:v.declaring!==void 0?`Could not compile with \`compileFieldFunction()\`: a user-defined function that the expression calls declares "${s}", the name of the parameter struct variable, which hides the struct in its body. Choose another \`paramsVariable\`.`:`Could not compile with \`compileFieldFunction()\`: the body declares "${s}", the name of the parameter struct variable. Choose another \`paramsVariable\`.`,binding:s});for(let $ of[...y,...P.keys(),...w.keys()])m[$]=`${s}.${$}`;let S=new Map,z={storage:new Map([...w.keys()].map($=>[$,"uniform-struct"])),storageRead:($,F,Q)=>{let K=w.get($);if(K===void 0||K.n!==F)throw new Error(`Could not compile with \`compileFieldFunction()\`: the list parameter "${$}" is read as a list of ${F} elements, but its field in the parameter struct has ${K?.n??"no"} elements.`);let he=Ma(s,$,F);return S.has(he)||S.set(he,lp(s,$,F)),`${he}(${Q})`},hostInputVars:new Set([...y,...P.keys()]),onReturn:$=>{let F=$===void 0?void 0:ve($,!0);if(F!=="f32")throw new Error("Could not compile with `compileFieldFunction()`: a `Return` in the body yields "+(F===void 0?"a value with no static WGSL type":`a \`${F}\` value`)+", and a field function returns a real scalar (`f32`).")}},T,I,b,k=new Map;for(let $ of Object.keys(m)){let F=h.lookupDefinition($);Re(F)&&k.set($,F.value.type.type)}try{T=$n(n,m,()=>mp(h,Object.keys(m),()=>{dp(h,m,v,k);let $=e.withTargetExtension(z,()=>e.compile(n,{vars:m,storage:a,constantFold:l,fallback:!1}));return b=ve(n,!0),$})),I=e.emittedUserFunctionNames(),T.success&&e.assertBody(n,T.code,g)}catch($){return rn($,h._deadlineFrame),ye(Ge($))}if(!T.success)return ye(T.diagnostic??Ge(T.error??"Compilation failed"));if(b!=="f32")return ye({code:"unsupported-result",kind:"capability",message:"Could not compile with `compileFieldFunction()`: the value of the expression "+(b===void 0?"has no static WGSL type":`has the WGSL type \`${b}\``)+", and a field function returns a real scalar (`f32`)."});for(let $ of T.freeSymbols??[])if(!c.has($)&&!d?.has($)&&!Object.hasOwn(m,$))return ye({code:"compile-error",kind:"capability",message:`Could not compile with \`compileFieldFunction()\`: the compiled code reads "${$}", which is not a coordinate, a parameter or a storage binding of the field function.`,binding:$});let R=$=>T.freeSymbolTypes?.[$]?.lowered;for(let $ of o){let F=R($);if(F!==void 0&&F!=="f32")return ye({code:"unsupported-parameter",kind:"capability",message:`Could not compile with \`compileFieldFunction()\`: the coordinate "${$}" is read as \`${F}\`, and a coordinate is an \`f32\` argument.`,binding:$})}for(let $ of y){let F=R($);if(F!==void 0&&F!=="f32")return Ce($,`is read as \`${F}\``)}for(let[$,F]of P){let Q=R($);if(Q!==void 0&&Q!==`vec${F}f`)return Ce($,`is a point of ${F} components read as \`${Q}\``)}let C=new Set(T.freeSymbols??[]),G=[],A=0;for(let $ of y)C.has($)&&(G.push({name:$,ceType:v.types.get($).toString(),wgslType:"f32",offset:A,size:4}),A+=4);for(let[$,F]of P)C.has($)&&(A=Io(F===2?8:16,A),G.push({name:$,ceType:v.types.get($).toString(),wgslType:`vec${F}f`,offset:A,size:4*F}),A+=4*F);for(let[$,{n:F,ceType:Q}]of w){if(!C.has($))continue;let K=Math.ceil(F/4);A=Io(16,A),G.push({name:$,ceType:Q,wgslType:`array<vec4f, ${K}>`,offset:A,size:16*K,length:F}),A+=16*K}let L=Io(16,A);if(L>Ia)return ye({code:"unsupported-parameter",kind:"capability",message:`Could not compile with \`compileFieldFunction()\`: the parameter struct takes ${L} bytes, more than the ${Ia} bytes of a uniform buffer binding that WebGPU guarantees (\`maxUniformBufferBindingSize\`). Read the largest lists from storage buffers instead: \`storage: { <name>: { kind: 'storage-buffer', group, binding } }\`.`});let M=G.length===0?"":`struct ${i} {
${G.map($=>`  ${$.name}: ${$.wgslType},
`).join("")}}
`,N=new Map;for(let $ of I){let F=/^(_[A-Za-z]+)(.*)$/.exec($);if(F===null)return ye(Ge(`Internal: compileFieldFunction() cannot rename the function "${$}"`));N.set($,`${F[1]}_${r.length}_${r}${F[2]}`)}let q=N.size===0?void 0:new RegExp(`(?<![\\w$.])(${[...N.keys()].sort(($,F)=>F.length-$.length).join("|")})(?![\\w$])`,"g"),Z=$=>q===void 0?$:$.replace(q,F=>N.get(F)??F),H={};for(let[$,F]of up(Z(T.preamble??"")))H[$]=F;let ee=new Set(N.values()),te=Z(T.code);for(let $ of ee){let F=H[$];if(F!==void 0&&Ga(F).has(s))return ye({code:"unsupported-parameter",kind:"capability",message:`Could not compile with \`compileFieldFunction()\`: a user-defined function that the expression calls declares "${s}", the name of the parameter struct variable, which hides the struct in its body. Choose another \`paramsVariable\`.`,binding:s})}if(Ga(`fn _f() {
${te}
}`).has(s))return ye({code:"unsupported-parameter",kind:"capability",message:`Could not compile with \`compileFieldFunction()\`: the body declares "${s}", the name of the parameter struct variable. Choose another \`paramsVariable\`.`,binding:s});let X=[...Object.keys(H).filter($=>new RegExp(`^${wt}\\d+$`).test($)).map($=>`${$} = 0u;`),...te.includes(`
`)?te.split(`
`):[`return ${te};`]],re=o.map($=>`${$}: f32`).join(", "),ie=X.map($=>`  ${$}`).join(`
`),ae=`fn ${r}(${re}) -> f32 {
${ie}
}
`;for(let[$,F]of S)H[$]=F;S.size>0&&H._gpu_nan===void 0&&(H._gpu_nan=`${Lo.trim()}
`);let me={success:!0,function:ae,helpers:H,paramsStructSource:M,params:G,paramsSize:L};return T.warnings!==void 0&&(me.warnings=T.warnings),T.storageBuffers!==void 0&&(me.storageBuffers=T.storageBuffers),me}function No(e,n,t="List"){it(t,e.length);let r=Et(e);return r!==void 0?`array<vec${r}f, ${e.length}>(${e.map(o=>n(o)).join(", ")})`:(dn(e,e.length>=2&&e.length<=4?`vec${e.length}f`:"array<f32>"),e.length===2?`vec2f(${e.map(o=>n(o)).join(", ")})`:e.length===3?`vec3f(${e.map(o=>n(o)).join(", ")})`:e.length===4?`vec4f(${e.map(o=>n(o)).join(", ")})`:`array<f32, ${e.length}>(${e.map(o=>n(o)).join(", ")})`)}var Ha={__proto__:null,Inversesqrt:"inverseSqrt",Mod:([e,n],t,r)=>{if(e===null||n===null)throw new Error("Could not compile `Mod`: missing argument");let o=()=>{if(Y(n)===1)return`fract(fract(${t(e)}))`;let i=mr(e,n,t,r);if(i!==void 0)return i;if(p.foldValueImpure(e)||p.foldValueImpure(n))throw new Error("Could not compile `Mod`: an impure (Random) operand of this shape would be drawn more than once \u2014 a repeated draw would shift every later value in the shader.");let s=`(${t(e)})`,a=`(${t(n)})`,l=`(sign(${s} % ${a}) * sign(${a}))`;return`(((${s} % ${a}) - ${a} * ((${l} - abs(${l})) * 0.5)) % ${a})`};return Kn("Mod",e,Y(n)===1,t,r,j,o)??o()},Hypot:([e,n],t)=>{if(e===null||n===null)throw new Error("Could not compile `Hypot`: need two arguments");return`length(vec2f(${t(e)}, ${t(n)}))`},List:(e,n)=>No(e,n,"List"),Matrix:(e,n)=>gr(e,n,t=>`vec${t}f`,t=>`mat${t}x${t}f`,t=>`array<f32, ${t}>`),Tuple:(e,n)=>No(e,n,"Tuple"),PointList:(e,n)=>(dn(e,e.length>=2&&e.length<=4?`vec${e.length}f`:"array<f32>"),No(e,n,"PointList"))};mn(Ha.Mod,zt("fract",1,1));var gp={float:"f32",int:"i32",uint:"u32",bool:"bool",vec2:"vec2f",vec3:"vec3f",vec4:"vec4f",ivec2:"vec2i",ivec3:"vec3i",ivec4:"vec4i",uvec2:"vec2u",uvec3:"vec3u",uvec4:"vec4u",bvec2:"vec2<bool>",bvec3:"vec3<bool>",bvec4:"vec4<bool>",mat2:"mat2x2f",mat3:"mat3x3f",mat4:"mat4x4f"};function _n(e){return gp[e]??e}function Ua(e,n){return e&&/^(i32|u32|vec[234][iu]|vec[234]<[iu]32>)$/.test(_n(n.replace(/\s+/g,"")))?" @interpolate(flat)":""}function Ba(e,n){let t=new Map,r=(o,i)=>`${o??0}:${i}`;for(let o of n){if(o.slot===void 0)continue;let i=r(o.key,o.slot),s=t.get(i);if(s!==void 0)throw new Error(`Could not compile \`compileShader()\`: "${s}" and "${o.name}" have the same ${e} (${o.key===void 0?"":`group ${o.key}, `}${o.slot}). WGSL refuses two declarations at one ${e}. Give each one its own ${e}, or leave it out to get a free one.`);t.set(i,o.name)}return n.map(o=>{if(o.slot!==void 0)return o.slot;let i=0;for(;t.has(r(o.key,i));)i+=1;return t.set(r(o.key,i),o.name),i})}function Wa(e,n){if(_(e)){if(e.operator==="Assign"&&E(e.ops[0])&&n.has(e.ops[0].symbol))return e.ops[0].symbol;for(let t of e.ops){let r=Wa(t,n);if(r!==void 0)return r}}}var _p={scalarGenTypeSlots:new Map([["mix",new Set([2])],["refract",new Set([2])]]),mandatoryScalarSlots:new Map([["refract",new Set([2])]]),vectorOnlySlots:new Map([["cross",new Set([0,1])],["dot",new Set([0,1])],["faceForward",new Set([0,1,2])],["normalize",new Set([0])],["reflect",new Set([0,1])],["refract",new Set([0,1])]]),matrixArithmetic:(e,n)=>e==="*"||n&&(e==="+"||e==="-"),matrixNegate:!1};function Ya(e){if(!_(e,"Block")||e.nops===0)return!1;let n=e.ops[e.nops-1];return _(n,"Block")?Hn(n)||Ya(n):!1}function qa(e,n){let t=Hn(n),r=!t&&Ya(n);return!t&&!r&&fn(e,n,"wgsl"),{tailAssignment:t,nestedTailAssignment:r}}function Da(e,n,t,r){let o=t.split(`
`);if(r.tailAssignment){let i=/^return\s+([^\s;]+);?$/.exec(o[o.length-1]);(o.length<2||i===null||!o[o.length-2].startsWith(`${i[1]} = `))&&fn(e,n,"wgsl")}r.nestedTailAssignment&&(o.length<2||!/^return\s+[A-Za-z_]\w*;?$/.test(o[o.length-1]))&&fn(e,n,"wgsl")}var Va=class extends ot{languageId="wgsl";getLanguageSpecificFunctions(){return Ha}getShapeRules(){return _p}compileFieldFunction(n,t){return ja({compile:(r,o)=>this.compile(r,o),createTarget:()=>this.createTarget(),withTargetExtension:(r,o)=>this.withTargetExtension(r,o),emittedUserFunctionNames:()=>this.emittedUserFunctionNames(),bodyShape:r=>qa("compileFieldFunction()",r),assertBody:(r,o,i)=>Da("compileFieldFunction()",r,o,i)},n,t)}compileFunction(n,t,r,o,i){let s=qa("compileFunction()",n),a=Wa(n,new Set(o.map(([m])=>m)));if(a!==void 0)throw new Error(`Could not compile with \`compileFunction()\`: the body assigns the parameter "${a}", and a WGSL function parameter is an immutable value. Assign a local copy of it instead (\`Block(y \u2254 ${a}; y \u2254 y + 1; y)\`).`);let l=this.compileDeclaredFunctionBody(n,o,i);Da("compileFunction()",n,l,s);let u=o.map(([m,d])=>`${m}: ${_n(d)}`).join(", "),f=this.preambleFor(l),c=f?`${f}
`:"";if(l.includes(`
`)){let m=l.split(`
`).map(d=>`  ${d}`).join(`
`);return`${c}fn ${t}(${u}) -> ${_n(r)} {
${m}
}`}return`${c}fn ${t}(${u}) -> ${_n(r)} {
  return ${l};
}`}declareGPUFunction(n,t,r,o){let i=o.split(`
`).map(s=>s.trimStart());for(let[s]of r)if(i.some(a=>a.startsWith(`${s} = `)))throw new Error(`Could not compile \`${n}\`: the body assigns the parameter "${s}", and a WGSL function parameter is an immutable value. Assign a local copy of it instead (\`Block(y \u2254 ${s}; y \u2254 y + 1; y)\`).`);return super.declareGPUFunction(n,t,r,o)}compileShader(n){let{type:t,inputs:r=[],outputs:o=[],uniforms:i=[],workgroupSize:s,body:a,constantFold:l}=n;if(t==="compute"){if(o.length>0)throw new Error("Could not compile `compileShader()`: a WGSL compute shader has no stage outputs, and its entry point cannot return a value. Remove the `outputs` option.");let I=r.filter(b=>!b.builtin).map(b=>b.name);if(I.length>0)throw new Error(`Could not compile \`compileShader()\`: these compute shader inputs have no \`builtin\`: ${I.map(b=>`"${b}"`).join(", ")}. A compute shader input must be a built-in value (\`global_invocation_id\`, \`local_invocation_id\`, ...); pass other values as uniforms.`)}for(let[I,b]of[["uniform",i],["input",r.filter(k=>!k.builtin)],["output",o.filter(k=>!k.builtin)]]){let k=b.filter(R=>/\bbool\b/.test(_n(R.type))).map(R=>`"${R.name}"`);if(k.length>0)throw new Error(`Could not compile \`compileShader()\`: the ${I} ${k.join(", ")} has a boolean type, which WGSL does not allow for a ${I}. Use \`u32\` (or \`uint\`) with 0 and 1.`)}let u=I=>{let b=I.filter(R=>!R.builtin),k=Ba("location",b.map(R=>({name:R.name,slot:R.location})));return new Map(b.map((R,C)=>[R.name,k[C]]))},f=u(r),c=u(o),m=Ba("binding",i.map(I=>({name:I.name,slot:I.binding,key:I.group??0}))),d="",h=`${t[0].toUpperCase()}${t.slice(1)}Input`;if(r.length>0){d+=`struct ${h} {
`;for(let I of r){let b=I.builtin?`@builtin(${I.builtin})`:`@location(${f.get(I.name)})${Ua(t==="fragment",I.type)}`;d+=`  ${b} ${I.name}: ${_n(I.type)},
`}d+=`};

`}if(o.length>0){d+=`struct ${t==="vertex"?"VertexOutput":"FragmentOutput"} {
`;for(let b of o){let k=b.builtin?`@builtin(${b.builtin})`:`@location(${c.get(b.name)})${Ua(t==="vertex",b.type)}`;d+=`  ${k} ${b.name}: ${_n(b.type)},
`}d+=`};

`}for(let[I,b]of i.entries()){let k=b.group??0,R=m[I];d+=`@group(${k}) @binding(${R}) var<uniform> ${b.name}: ${_n(b.type)};
`}i.length>0&&(d+=`
`);let g=`@${t}`,v=t==="compute"&&s?`@workgroup_size(${s.join(", ")})
`:"",x=r.length>0,y=o.length>0,P=t==="vertex"?"VertexOutput":"FragmentOutput",w=x?`input: ${h}`:"",S=y?` -> ${P}`:"",z=this.compileShaderBody(a,t,[...r.map(I=>({name:I.name,type:I.type,ref:`input.${I.name}`})),...i],l,[],o.map(I=>({name:`output.${I.name}`,type:I.type}))),T=this.preambleFor(z.map(I=>[...I.stmts,I.code].join(`
`)).join(`
`));T&&(d+=`${T}
`),d+=`${g}
${v}fn main(${w})${S} {
`,y&&(d+=`  var output: ${P};
`);for(let I of z){for(let b of I.stmts)d+=b.split(`
`).map(k=>`  ${k}
`).join("");d+=`  ${I.variable} = ${I.code};
`}return y&&(d+=`  return output;
`),d+=`}
`,d}};var wl={__proto__:null,True:"True",False:"False"},$l=new Set(["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","try","while","with","yield"]);function Za(e){if($l.has(e))throw new Error(`"${e}" is a reserved word in python and cannot be used as a variable name. Rename it, or map it to another name with \`vars\`, before compiling to Python (fail closed, D6).`);if(!El.test(e))throw new Error(`"${e}" is not a Python identifier and cannot be used as a variable name. Rename it, or map it to another name with \`vars\`, before compiling to Python (fail closed, D6).`);return e}function Gn(e){if($l.has(e)||e in wl)throw new Error(`"${e}" is a reserved word in python and cannot be used as a function, parameter or index name. Rename it before compiling to Python (fail closed, D6).`);if(!El.test(e))throw new Error(`"${e}" is not a Python identifier and cannot be used as a function, parameter or index name. Rename it before compiling to Python (fail closed, D6).`);return e}var El=/^[\p{XID_Start}_]\p{XID_Continue}*$/u;function yp(e){if(e.normalize("NFKC")===e)return e;let n=r=>`_u${r.codePointAt(0).toString(16).toUpperCase()}_`,t="";for(let r of e)t+=r.normalize("NFKC")===r?r:n(r);if(t.normalize("NFKC")===t)return t;t="";for(let r of e)t+=r.codePointAt(0)<128?r:n(r);return t}function Bo(e){return e.split(/("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')/)}var Sr=/[\p{XID_Start}_]\p{XID_Continue}*/gu;function vr(e,n){let t=Bo(e),r=new Set(n.outside??[]);for(let f=0;f<t.length;f+=2)for(let c of t[f].match(Sr)??[])r.add(c);let o=new Map;for(let f of r){let c=f.normalize("NFKC"),m=o.get(c);m===void 0?o.set(c,[f]):m.push(f)}let i=[...o].filter(([,f])=>f.length>1),s=new Map,a=f=>s.get(f)??f;if(i.length===0)return{body:e,name:a};let l=new Set(n.hostNames());for(let f of n.callerSources??[])for(let c of Bo(f).filter((m,d)=>d%2===0))for(let m of c.match(Sr)??[])l.add(m);let u=new Set(o.keys());for(let[f,c]of i){let m=c.filter(h=>l.has(h));if(m.length>1)throw new Error(`Could not compile to Python: the inputs "${m[0]}" and "${m[1]}" are the same name for Python ("${f}"), because Python reads each identifier in its NFKC normal form, so the host cannot give them two values. Rename one of them, or map it to another name with \`vars\` (fail closed, D6).`);let d=m[0]??c.find(h=>h===f)??c[0];for(let h of c){if(h===d)continue;let g=yp(h),v=g;for(let x=1;u.has(v.normalize("NFKC"));x++)v=`${g}_${x}`;u.add(v.normalize("NFKC")),s.set(h,v)}}for(let f=0;f<t.length;f+=2)t[f]=t[f].replace(Sr,a);return{body:t.join(""),name:a}}var xp=new Set("ArithmeticError AssertionError AttributeError BaseException BaseExceptionGroup BlockingIOError BrokenPipeError BufferError BytesWarning ChildProcessError ConnectionAbortedError ConnectionError ConnectionRefusedError ConnectionResetError DeprecationWarning EOFError Ellipsis EncodingWarning EnvironmentError Exception ExceptionGroup FileExistsError FileNotFoundError FloatingPointError FutureWarning GeneratorExit IOError ImportError ImportWarning IndentationError IndexError InterruptedError IsADirectoryError KeyError KeyboardInterrupt LookupError MemoryError ModuleNotFoundError NameError NotADirectoryError NotImplemented NotImplementedError OSError OverflowError PendingDeprecationWarning PermissionError ProcessLookupError PythonFinalizationError RecursionError ReferenceError ResourceWarning RuntimeError RuntimeWarning StopAsyncIteration StopIteration SyntaxError SyntaxWarning SystemError SystemExit TabError TimeoutError TypeError UnboundLocalError UnicodeDecodeError UnicodeEncodeError UnicodeError UnicodeTranslateError UnicodeWarning UserWarning ValueError Warning ZeroDivisionError __import__ abs aiter all anext any ascii bin bool breakpoint bytearray bytes callable chr classmethod compile complex copyright credits delattr dict dir divmod enumerate eval exec exit filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len license list locals map max memoryview min next object oct open ord pow print property quit range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip np math cmath scipy".split(" "));function wp(e){let n=Bo(e).map((s,a)=>a%2===0?s:'""').join(""),t=new Set,r=[...n.matchAll(Sr)],o=s=>{let a=1;for(let l=s;l<n.length;l++)if("([{".includes(n[l]))a+=1;else if(")]}".includes(n[l])&&--a===0)return l;return n.length},i=[];for(let s of r){let a=s.index,l=a+s[0].length;if(n[a-1]===".")continue;let u=n.slice(l).match(/^\s*(\S)/)?.[1],f=i.some(([c,m])=>a>=c&&l<=m);if((u==="("||u==="."||f)&&t.add(s[0].normalize("NFKC")),s[0]==="isinstance"&&u==="("){let c=n.indexOf("(",l)+1,m=o(c),d=0;for(let h=c;h<m;h++)if("([{".includes(n[h]))d+=1;else if(")]}".includes(n[h]))d-=1;else if(n[h]===","&&d===0){i.push([h,m]);break}}if(s[0]==="except"){let c=n.indexOf(":",l);i.push([l,c<0?n.length:c])}}return t}function St(e,n){let t;for(let r of n){let o=r.normalize("NFKC");if(!(!xp.has(o)&&!o.startsWith("_ce_"))&&(t??=wp(e),t.has(o)))throw new Error(`"${r}" is the name of a Python builtin or module ("${o}") that the compiled Python code uses, and cannot be used as a symbol, parameter or function name. Rename it before compiling to Python (fail closed).`)}}function Ka(e){return Object.values(e??{}).filter(n=>typeof n=="string")}var Go={__proto__:null,Pi:"np.pi",ExponentialE:"np.e",ImaginaryUnit:"1j",Infinity:"np.inf",NaN:"np.nan",Indeterminate:"np.nan",GoldenRatio:"((1 + np.sqrt(5)) / 2)",CatalanConstant:"0.915965594177219015054603514932384110774",EulerGamma:"0.5772156649015328606065120900824024310421"};function qo(e,n,t){return`(lambda _q: max(0, int((_q + (0 if float(${e}).is_integer() and float(${n}).is_integer() and float(${t}).is_integer() else min(${1e-12} * (1 + abs(_q)), ${.001}))) // 1) + 1))((${n} - ${e}) / ${t})`}function yr(e,n){let t=Y(e);return t!==void 0?`${Math.max(0,Math.round(t))}`:`max(0, ${$p(e,n)})`}function $p(e,n){return`int(np.floor((${n(e)}) + 0.5))`}function Xa(e,n,t,r){let o=Y(t);if(o!==void 0){let l=Math.round(o);return Math.abs(l)>Number.MAX_SAFE_INTEGER?e==="Take"?`${n}[:]`:`${n}[:0]`:e==="Take"?l<0?`${n}[${l}:]`:`${n}[:${l}]`:l<0?`${n}[:${l}]`:`${n}[${l}:]`}let i=e==="Take"?"_l[_n:] if _n < 0 else _l[:_n]":"_l[:_n] if _n < 0 else _l[_n:]",s=Number.MAX_SAFE_INTEGER,a=`int(np.clip(np.floor((${r(t)}) + 0.5), -${s}, ${s}))`;return`(lambda _l, _n: ${i})(${n}, ${a})`}function Pt(e,n){let t=r=>{if(Gt(r))return!0;if(Dn(r))return!1;let o=Bn(W(r.type.type));return o!==void 0&&o!=="never"&&U(W(o),"character")};if(n.some(t))throw new Error(`Could not compile \`${e}\`: a character participant. A character is one UAX #29 grapheme cluster, and this target has no stdlib grapheme segmentation or code-point-sequence ordering to reproduce the interpreter's character semantics. The interpreter evaluates it instead.`)}function zl(e,n){for(let t of n){let r=Hr(t);if(r!==null)throw new Error(`Could not compile \`${e}\`: a ${r} participant. The interpreter compares it as ONE value, whereas the emitted Python looks inside it: a dictionary or record has no positional lowering, and a tuple is mapped over element-wise by \`np.less\` (\`Equal(Tuple(1, 2), List(1, 2))\` answered \`True\`) where a point binds atomically. The interpreter evaluates it instead.`)}}function Ep(e){let n=(t,r,o)=>{if(typeof t=="object"&&t.kind==="reference"&&t.def!==void 0){let a=ri(t);if(o?.has(a))return!1;o=new Set(o).add(a)}let i=W(t);if(typeof i=="string")return!r&&i==="tuple";if(i.kind==="tuple")return!r;if(i.kind==="union")return i.types.some(a=>n(a,r,o));let s=Tt(i);return s===void 0?!1:n(s,!1,o)};return n(e.type.type,!0)}function zp(e,n){if(n.some(Ep))throw new Error(`Could not compile \`${e}\`: a participant whose ELEMENTS are tuples (a point list). \`np.less([(1, 2)], [(3, 4)])\` looks inside each point and answers \`[[True, True]]\`, whereas the interpreter broadcasts to an inert point comparison (\`[(1, 2) < (3, 4)]\`). Only the EQUALITY family admits point lists (whole-value \`_ce_eqcoll\`). The interpreter evaluates it instead.`)}function Cp(e,n){if(n.some(Ai))throw new Error(`Could not compile \`${e}\`: string-valued operands are not supported by this target (the lowering is numeric: a raw \`==\` that skips the interpreter's text conditioning). The interpreter evaluates it instead.`)}function Sp(e){return e.length!==2||!e.some(Dn)||e.some(n=>{let t=W(n.type.type);return t!=="never"&&U(t,"number")})||e.some(n=>Hr(n)!==null)?!1:!e.some(n=>He(n)||Li(n))}function kp(e,n){if(Fi(n))throw new Error(`Could not compile \`${e}\`: an ordering that mixes a string operand with an operand that is not provably a string. The interpreter leaves such a comparison symbolic (\`Less("a", 1)\` stays inert), whereas NumPy coerces the number to a string and answers a plausible-looking boolean (\`np.less(["a", 10], ["b", 9])\` \u2192 \`[True, True]\`). An ordering whose operands are ALL provably strings does compile \u2014 the interpreter compares strings the same way. The interpreter evaluates it instead.`)}var Pp=new Set(["Add","Subtract","Multiply","Divide","Negate","Power","Square","Sqrt","Root","Abs","Floor","Ceil","Round","Sign","Mod","Min","Max","Sum","Product","Length","Exp","Ln","Log","Sin","Cos","Tan","Arctan","Arctan2","Arcsin","Arccos","Sinh","Cosh","Tanh","Dot","Norm","Hypot","Gamma","Factorial","Random","RandomInteger"]);function Ja(e,n,t,r){if(n.length<2)throw new Error(`Could not compile \`${e}\`: expected at least two arguments`);let o=n.filter(He).length;n.length===2&&n.every(Vn)&&n.every(Ri)||zl(e,n),Pt(e,n);let s=Sp(n),a=o>=2&&n.every(Ti);if(!s&&!a&&Cp(e,n),s){let c=e==="Equal"?"==":"!=";return`((${t(n[0])}) ${c} (${t(n[1])}))`}if(o===1){let c=n.findIndex(He),m=w=>{let S=W(w);return S!=="never"&&U(S,"number")},d=n[c],h=d.type.matches("list<any>")?Bn(W(d.type.type)):void 0;if(h===void 0||!m(h)||!n.every((w,S)=>S===c||m(w.type.type)))throw new Error(`Could not compile \`${e}\`: a single collection operand broadcasts element-wise in the interpreter (a list of booleans, not a boolean). The Python target compiles that shape only for an ordered list of numbers whose other operands are numbers.`);let g=p.tempVar(r),v=n.map((w,S)=>S===c?g:t(w)),x=e==="Equal"?"==":"!=",y=[];for(let w=0;w<n.length-1;w++)y.push(`((${v[w]}) ${x} (${v[w+1]}))`);return`[${y.length===1?y[0]:`(${y.join(" and ")})`} for ${g} in ${t(d)}]`}if(o>=2){let c=(d,h)=>{let g=`_ce_eqcoll(${t(d)}, ${t(h)})`;return e==="Equal"?g:`(not ${g})`};if(n.length===2)return c(n[0],n[1]);let m=[];for(let d=0;d<n.length-1;d++)m.push(c(n[d],n[d+1]));return`(${m.join(" and ")})`}let l=c=>!O(c)&&!(_(c)&&typeof c.operator=="string"&&Pp.has(c.operator)),u=(c,m)=>{let d=t(c),h=t(m),g=l(c)&&l(m)?`(${d}) is not None and `:"";if(g==="")return`((${d}) ${e==="Equal"?"==":"!="} (${h}))`;let v=`(${g}(${d}) == (${h}))`;return e==="Equal"?v:`(not ${v})`};if(n.length===2)return u(n[0],n[1]);let f=[];for(let c=0;c<n.length-1;c++)f.push(u(n[c],n[c+1]));return`(${f.join(" and ")})`}function ut(e,n,t=!1){if(O(e)&&!e.isComplex&&Number.isFinite(e.re))return String(Math.floor(e.re));let r=p.compile(e,n);return!t||e.type.matches("integer")?r:`int((${r}) // 1)`}function Rp(e,n){return O(e)&&!e.isComplex&&Number.isFinite(e.re)?String(Math.floor(e.re)+1):`${ut(e,n,!0)} + 1`}function Qa(e,n,t){if(!n[0])throw new Error(`Could not compile \`${e}\`: no body`);if(!n[1])throw new Error(`Could not compile \`${e}\`: no indexing set`);p.assertScalarBigOpBody(e,n[0]);let r=n[0],o=()=>new Error(`Could not compile \`${e}\`: the body is a statement or a block of statements, and the Python lowering of \`${e}\` is a generator expression, whose element is an expression. The loop form of \`${e}\` is written only where the \`${e}\` is the value of a statement (a function body, a statement of a block, or the right side of an assignment there).`);if(on(r)!==void 0||_(r,"Block")&&r.nops>1){let f=Ap(e,n,t);if(f!==void 0)return f;throw o()}let{forClauses:i,idxTarget:s}=Cl(e,n.slice(1),t),a=f=>e==="Sum"?`sum(${f})`:`math.prod(${f})`,l=n.length===2?n[1]:void 0;if(t.cseBind!==void 0&&_(l,"Limits")&&E(l.ops[0])){let[,f,c]=l.ops,m=x=>O(x)&&!x.isComplex&&Number.isFinite(x.re)?Math.floor(x.re):void 0,d=m(f),h=m(c),g=x=>m(x)!==void 0||E(x),v=d!==void 0&&h!==void 0;if(v&&d<=h||!v&&g(f)&&g(c)){let{bindings:x,result:y}=p.hoistLoopInvariants(r,[l.ops[0].symbol],t,()=>p.compile(r,s));if(y.includes(`
`))throw o();let P=a(`${y} ${i.join(" ")}`);if(x.length>0){let w=t.cseBind(x.map(([z,T])=>[z,T]),P);if(v)return w;let S=`${ut(f,t,!0)} <= ${ut(c,t,!0)}`;return`(${w} if ${S} else ${e==="Sum"?"0":"1"})`}return P}}let u=p.compile(r,s);if(u.includes(`
`))throw o();return a(`${u} ${i.join(" ")}`)}function Cl(e,n,t,r){let o=[],i=t;for(let s of n){if(!_(s,"Limits"))throw new Error(`Could not compile \`${e}\`: expected a Limits indexing set`);let a=s.ops,l=a[0];if(!E(l))throw new Error(`Could not compile \`${e}\`: index must be a symbol`);let u=Gn(l.symbol),f=r?.(u)??u,c=a[1],m=a[2];if(c===void 0||m===void 0||E(m,"Nothing")||m.isInfinity||c.isInfinity)throw new Error(`Could not compile \`${e}\`: an unbounded range is not supported`);p.assertSafeBigOpBounds(e,[c,m],i);let d=ut(c,i,!0),h=Rp(m,i);o.push(`for ${f} in range(${d}, ${h})`);let g=i;i={...g,var:v=>v===u?f:g.var(v),...p.withBoundScope(g,[u])}}return{forClauses:o,idxTarget:i}}function el(e,n){let t={stmts:[],boundVars:n.boundVars,unit:e},r=p.compileCseRoot(e,{...n,hoist:t});if(t.stmts.length===0)return r;let o=r.includes(`
`)||/^return\b/.test(r)||/^[^\s()[\]{}'"=,:]+ = /.test(r);return[...t.stmts,o?r:`return ${r}`].join(`
`)}function Ap(e,n,t){if(!p.canHoist(t))return;let r=t.hoist.unit,o=w=>_(w,e)&&w.nops===n.length&&w.ops.every((S,z)=>S===n[z]);if(!(o(r)||_(r,"Assign")&&o(r.ops[1])||_(r,"Declare")&&o(p.declareValueOperand(r.ops))||_(r,"Return")&&o(r.ops[0])))return;let s=n[0],a=(w,S)=>{if(!_(w)||w.operator==="Function")return!1;let z=w.operator;return z==="Return"||(z==="Break"||z==="Continue")&&!S?!0:w.ops.some(T=>a(T,S||z==="Loop"))};if(a(s,!1))return;let l=p.tempVar(t),u={...t,cse:void 0},{forClauses:f,idxTarget:c}=Cl(e,n.slice(1),u,()=>p.tempVar(t)),m={stmts:[],boundVars:c.boundVars,unit:s},d=p.withFreshBlockLocals(()=>p.compile(s,{...c,hoist:m})),h=[...m.stmts,...d.split(`
`)],g=h.pop(),v=/^return (.+)$/.exec(g),x=/^([^\s()[\]{}'"=,:]+) = /.exec(g),y;if(v!==null&&v[1]!=="None")y=v[1];else if(v===null&&x!==null)h.push(g),y=x[1];else if(h.length===0&&!/^(?:if|for|while)\b/.test(g))y=g;else return;h.push(`${l} ${e==="Sum"?"+=":"*="} ${y}`);let P=h.join(`
`);for(let w=f.length-1;w>=0;w--)P=`${f[w]}:
${Rr(P)}`;return p.hoistStatement(t,`${l} = ${e==="Sum"?"0":"1"}`,P),l}function Rr(e){return(e.trim()===""?"pass":e).split(`
`).map(t=>`    ${t}`).join(`
`)}function Ar(e,n){if(E(e,"Nothing"))return"";if(!_(e))return p.compile(e,n);let t=e.operator;if(t==="Break")return"break";if(t==="Continue")return"continue";if(t==="Return")return`return ${p.compileOp(e,0,n,0,e.ops[0])}`;if(t==="If")return nu(e.ops,n,e);if(t==="Block"){let r=e.ops.flatMap(i=>p.desugarPatternAssign(i,n)??[i]),o=p.loopBodyTempTarget(r,n);return p.withCseScope(e,-1,o,()=>r.map(i=>Ar(i,o)).filter(i=>i!=="").join(`
`))}if(t==="Assign"&&_(e.ops[0],"Tuple")){let r=p.desugarPatternAssign(e,n);if(r!==null){let o=p.loopBodyTempTarget(r,n);return r.map(i=>Ar(i,o)).filter(i=>i!=="").join(`
`)}}return t==="Loop"?kl(e.ops,n,e):p.compileOp(e,-1,n,0,e)}function Tp(e,n){if(_(e,"Range")&&e.nops>=2&&e.nops<=3){let[t,r,o]=e.ops,i=f=>f!==void 0&&O(f)&&!f.isComplex&&Number.isSafeInteger(f.re)?f.re:void 0,s=i(t),a=i(r),l=o===void 0?void 0:i(o);if(s!==void 0&&a!==void 0&&(o===void 0||l!==void 0)){let f=l??(a>=s?1:-1);return f===0?"[]":f===1?`range(${s}, ${a+1})`:f>0?`range(${s}, ${a+1}, ${f})`:`range(${s}, ${a-1}, ${f})`}let u=(f,c)=>c!==void 0||!O(f);if(o===void 0&&u(t,s)&&u(r,a)){let f=ut(t,n),c=ut(r,n);return`(lambda _a, _b: (range(int(_a), int(_b) + 1) if _b >= _a else range(int(_a), int(_b) - 1, -1)) if float(_a).is_integer() and float(_b).is_integer() else (lambda _s: [_a + _s * _i for _i in range(${qo("_a","_b","_s")})])(1 if _b >= _a else -1))(${f}, ${c})`}}if(e.type.matches("string"))throw new Error("Could not compile `Loop`: cannot iterate a string on this target \u2014 its elements are UAX #29 grapheme clusters and Python has no stdlib grapheme segmentation, so the emitted loop would walk code points instead. The interpreter evaluates it.");return Pt("Loop",[e]),p.compile(e,n)}function Sl(e,n){let t=p.elementClauseBinders(e,n);t.forEach((i,s)=>{let a=i.clause.ops[2];if(!(a===void 0||E(a,"Nothing"))){for(let l=s+1;l<t.length;l++)for(let u of t[l].names)if(a.has(u))throw new Error(`Could not compile \`Comprehension\`: the guard of clause ${s+1} names \`${u}\`, which a later clause binds; in a Python comprehension that name is the later loop's variable, unassigned at that point, where the interpreter reads the enclosing one. The interpreter evaluates it instead.`)}});let r=[],o=n;for(let i of t){let s=Tp(i.clause.ops[1],o);for(let c of i.names)Gn(c);let a=o,l=new Set(i.names);o={...a,var:c=>l.has(c)?c:a.var(c),...p.withBoundScope(a,i.names)};let u=i.clause.ops[2],f=u!==void 0&&!E(u,"Nothing")?` if ${p.compileGuardTest(u,o,On)}`:"";r.push(`for ${i.pyPattern} in ${s}${f}:`)}return{headers:r,bodyTarget:o}}function Lp(e){return e.some(n=>_(n,"Element")&&n.nops>=3&&!E(n.ops[2],"Nothing"))}function kl(e,n,t){if(!e[0])throw new Error("Could not compile `Loop`: no body");let r=e[0],o=e.slice(1),i,s=n;if(o.length===0)i=["while True:"];else{if(Lp(o))throw new Error("Could not compile `Loop`: a guarded `Element` clause has no Python statement form. The interpreter evaluates it instead.");p.assertBreakLeavesWholeLoop(o,r),{headers:i,bodyTarget:s}=Sl(o,n)}let a=Rr(p.withCseScope(t,0,s,()=>Ar(r,s)));for(let l=i.length-1;l>=0;l--)a=l===i.length-1?`${i[l]}
${a}`:`${i[l]}
${Rr(a)}`;return a}function Fp(e,n,t){if(!e[0])throw new Error("Could not compile `Comprehension`: no body");if(!e[1])throw new Error("Could not compile `Comprehension`: no indexing set");let r=e[0];if(_(r,"Block")){if(r.nops!==1)throw new Error("Could not compile `Comprehension`: a multi-statement body has no Python list-comprehension form.");r=r.ops[0]}if(bn(r))throw new Error("Could not compile `Comprehension`: the body is a statement, which has no place in a Python list comprehension.");Wo("Comprehension",r);let{headers:o,bodyTarget:i}=Sl(e.slice(1),n),s=p.withCseScope(t,0,i,()=>p.compile(r,i)),a=o.map(l=>l.slice(0,-1)).join(" ");return`[${s} ${a}]`}function Mo(e,n,t,r,o){let i=W(n.type.type);if(Pe(tn(i),"number")&&Yi(t))throw new Error(`Could not compile \`${e}\`: an element of the collection may be absent, which this target spells as \`nan\`, and the searched value may be a number, which could be \`NaN\`; the interpreter keeps the two apart. The interpreter evaluates it instead.`);if(E(n,"Missing")||E(n,"Undefined")||ct(i)&&Pe(tn(i),"number"))throw new Error(`Could not compile \`${e}\`: the searched value may be the absent value \`Missing\`, which this target spells as \`nan\` and could not tell from a \`NaN\` element. The interpreter evaluates it instead.`);return o(r(n))}var Do={__proto__:null,Add:["+",11],Negate:["-",14],Subtract:["-",11],Multiply:["*",12],Divide:["/",13],Power:["**",15],LessEqual:["<=",9],GreaterEqual:[">=",9],Less:["<",9],Greater:[">",9],And:["and",4],Or:["or",3],Not:["not",14]};function Pl(e,n,t){let r=n.trim();return r.startsWith("-")||r.startsWith("+")?`(${n})`:_(e)?(t?.operators?.(e.operator)??Do[e.operator])===void 0?n:`(${n})`:n}function He(e){let n=e.type;return n.matches("string")?!1:n.matches("list<any>")||n.matches("indexed_collection<any>")}function Ip(e){let n=e.rank;return n>0?n:Rl(e.type.type)}function Rl(e){let n=W(e);if(typeof n!="object"||n.kind!=="list"||n.dimensions===null)return;let t=n.dimensions?.length??1;if(U(n.elements,"number"))return t;let r=Rl(n.elements);return r===void 0?void 0:t+r}function nl(e){if(!(e===void 0||e<=2))throw new Error("Could not compile `Norm`: above rank 2 the interpreter computes only the Frobenius norm (the order 2, which is also the default), and `np.linalg.norm` raises for any explicit order on an input with more than two axes.")}function Np(e){let n=e.type.type;for(let t=0;n!==void 0&&t<16;t++){if(U(n,"finite_number"))return!0;n=Tt(n)}return!1}function Gp(e){let n=e.type.type;for(let t=0;n!==void 0&&t<16;t++){if(U(n,"integer"))return"integer";n=Tt(n)}return Np(e)?"finite":"any"}function Se(e,n,t){let r=n===void 0?"":`, ${n}`,o=t!=="integer"&&(n===void 0||n==="2"||n==="'fro'"||n==="_p"),i=o?`(lambda _m: np.linalg.norm(_a * 2.0**600${r}) * 2.0**-600 if 0 < _m < 2.0**-500 else np.linalg.norm(_a * 2.0**-600${r}) * 2.0**600 if _m > 2.0**500 else np.linalg.norm(_a${r}))(np.max(np.abs(_a), initial=0))`:`np.linalg.norm(${t==="any"?"_a":e}${r})`;if(t!=="any")return o?`(lambda _a: ${i})(np.asarray(${e}))`:i;let s="_a.dtype.kind in 'fc'";return`(lambda _a: float('inf') if ${s} and np.isinf(_a).any() else (float('nan') if ${s} and np.isnan(_a).any() else ${i}))(np.asarray(${e}))`}function Oo(e,n,t,r){let o="float('nan')";return`(lambda _x: np.abs(_x) if np.ndim(_x) == 0 else ${t==="vector"?`${Se("_x",n,r)} if np.ndim(_x) == 1 else ${o}`:`${Se("_x",n,r)} if np.ndim(_x) <= 2 else ${t==="two"?Se("_x",void 0,r):o}`})(${e})`}function Mp(e,n,t,r){let o="float('nan')";return kr(e,n,t,i=>`(np.abs(_x) if _p > 0 else ${o}) if np.ndim(_x) == 0 else (${Se("_x","_p",r)} if _p > 0 else ${o}) if np.ndim(_x) == 1 else (${Al(i,r)}) if np.ndim(_x) == 2 else (${Se("_x",void 0,r)} if _p == 2 else ${o})`)}function Al(e,n){let r=`${Se("_x","_p",n)} if _p == 1 or _p == 2 or _p == np.inf else float('nan')`;return e===void 0?r:`${Se("_x","'fro'",n)} if ${e} else ${r}`}function kr(e,n,t,r){return U(t,"number")||!Pe(t,"string")?`(lambda _x, _p: ${r(void 0)})(${e}, ${n})`:`(lambda _x, _q: (lambda _p: ${r("(isinstance(_q, str) and _q == 'Frobenius')")})(({'Infinity': np.inf, 'Frobenius': 2}.get(_q, float('nan')) if isinstance(_q, str) else _q)))(${e}, ${n})`}var Tl=`def _ce_cplx(_v):
    return complex(_v) if isinstance(_v, (int, float)) and not isinstance(_v, bool) else _v
def _ce_cisreal(_v):
    return _v.imag == 0 if isinstance(_v, (complex, np.complexfloating)) else True
def _ce_creal(_v):
    return _v.real if isinstance(_v, (complex, np.complexfloating)) else _v
def _ce_creal_elems(_v):
    if isinstance(_v, (list, tuple)):
        return [_ce_creal_elems(_x) for _x in _v]
    if hasattr(_v, 'ndim') and _v.ndim > 0:
        return np.asarray([_ce_creal_elems(_x) for _x in _v])
    if hasattr(_v, 'ndim') and _v.ndim == 0:
        _v = _v.item()
    return _ce_creal(_v) if _ce_cisreal(_v) else float('nan')`,Ll=`def _ce_bcast_apply(_op, _arrs):
    if _op == 'clip':
        return np.clip(_arrs[0], _arrs[1], _arrs[2])
    if _op == 'smoothstep':
        return _ce_smoothstep(_arrs[0], _arrs[1], _arrs[2])
    _pair = np.maximum if _op == 'max' else np.minimum
    _r = _arrs[0]
    for _a in _arrs[1:]:
        _r = _pair(_r, _a)
    return _r

def _ce_bcast(_op, *args):
    _arrs = [np.asarray(a) for a in args]
    _cols = [a for a in _arrs if a.ndim > 0]
    if not _cols:
        return np.asarray(_ce_bcast_apply(_op, _arrs))
    _n = _cols[0].shape[0]
    if any(a.shape[0] != _n for a in _cols) or _n == 0:
        return np.asarray(float('nan'))
    if all(a.shape == _cols[0].shape for a in _cols):
        return np.asarray(_ce_bcast_apply(_op, _arrs))
    return np.asarray([
        _ce_bcast(_op, *[(a[_i] if a.ndim > 0 else a) for a in _arrs])
        for _i in range(_n)
    ])
`,Fl=`def _ce_rref(_m):
    _a = np.asarray(_m, dtype=float).copy()
    _rows, _cols = _a.shape
    _r = 0
    for _c in range(_cols):
        if _r >= _rows:
            break
        _piv = _r + int(np.argmax(np.abs(_a[_r:, _c])))
        if _a[_piv, _c] == 0:
            continue
        _a[[_piv, _r]] = _a[[_r, _piv]]
        _a[_r] = _a[_r] / _a[_r, _c]
        for _k in range(_rows):
            if _k != _r:
                _a[_k] = _a[_k] - _a[_k, _c] * _a[_r]
        _r += 1
    return _a
`,Il=`def _ce_eqcoll(_a, _b):
    _al = isinstance(_a, (list, tuple, np.ndarray))
    _bl = isinstance(_b, (list, tuple, np.ndarray))
    if _al != _bl:
        return False
    if not _al:
        try:
            return bool(_a == _b)
        except TypeError:
            return False
    try:
        _x = np.asarray(_a)
        _y = np.asarray(_b)
        if _x.dtype.kind in 'iuf' and _y.dtype.kind in 'iuf':
            if _x.shape != _y.shape:
                return False
            with np.errstate(invalid='ignore'):
                return bool(np.all(_x == _y))
    except (ValueError, TypeError):
        pass
    if len(_a) != len(_b):
        return False
    return all(_ce_eqcoll(_x, _y) for _x, _y in zip(_a, _b))
`,Nl=`def _ce_same(_a, _b):
    if isinstance(_a, np.ndarray) or isinstance(_b, np.ndarray):
        return _ce_same(np.asarray(_a).tolist(), np.asarray(_b).tolist())
    if isinstance(_a, (bool, np.bool_)) != isinstance(_b, (bool, np.bool_)):
        return False
    if isinstance(_a, tuple) and isinstance(_b, tuple):
        return len(_a) == len(_b) and all(_ce_same(_x, _y) for _x, _y in zip(_a, _b))
    if isinstance(_a, list) and isinstance(_b, list):
        return len(_a) == len(_b) and all(_ce_same(_x, _y) for _x, _y in zip(_a, _b))
    if isinstance(_a, (float, np.floating)) and isinstance(_b, (float, np.floating)) and _a != _a and _b != _b:
        return True
    return bool(_a == _b)

def _ce_indexof(_l, _v):
    for _i, _x in enumerate(_l):
        if _ce_same(_x, _v):
            return _i + 1
    return 0
`;function xr(e,n){return`(lambda _x: (lambda _y: np.where(np.isinf(_y) & (_x != 0) & (np.abs(_x) < ${Math.PI/2}), _y, np.where(np.isinf(_y) | (np.abs(_y) * np.minimum(np.abs(_x), ${fi}.0) * ${ui} >= 1), np.inf, _y))[()])(${n}))(${e})`}function wr(e,n){return Gl(e,n==="cos"?"_pc":n==="sin"?"_ps":n==="tan"?"(np.where(_pc == 0, np.inf, _ps / np.where(_pc == 0, 1.0, _pc)) + 0.0)[()]":"(_pc + 1j * _ps)")}function Gl(e,n){return`(lambda _pu: (lambda _pr: (lambda _pq: (lambda _pt, _pk: (lambda _c0, _s0: (lambda _pc, _ps: ${n})((np.select([_pk == 0, _pk == 1, _pk == 2], [_c0, -_s0, -_c0], _s0) + 0.0)[()], (np.select([_pk == 0, _pk == 1, _pk == 2], [_s0, _c0, -_s0], -_c0) + 0.0)[()]))(np.cos(np.pi * _pt), np.sin(np.pi * _pt)))(_pr - _pq / 2, (_pq + 4) % 4))(np.floor(2 * _pr + 0.5)))(_pu - 2 * np.floor(_pu / 2 + 0.5)))(${e})`}function at(e,n){let t="complex(np.inf, np.inf)",r=(i,s)=>`(np.where(${s} == 0, ${t}, 1j * ${i} / np.where(${s} == 0, 1.0, ${s})) + 0.0)[()]`,o={Sinh:"(1j * _ps + 0.0)",Cosh:"(_pc + 0j)",Tanh:r("_ps","_pc"),Csch:r("-1.0","_ps"),Sech:`(np.where(_pc == 0, ${t}, 1.0 / np.where(_pc == 0, 1.0, _pc) + 0j))[()]`,Coth:r("-_pc","_ps")}[n];return Gl(e,o)}function tl(e){return e===1/0?"float('inf')":e===-1/0?"-float('inf')":Number.isNaN(e)?"float('nan')":String(e)}var Mn=!1;function Ml(){return`import math
def _ce_pow_branch(_e):
    if not math.isfinite(_e) or _e == math.floor(_e):
        return None
    _tol = max(5e-324, abs(_e) * 4 * 2.220446049250313e-16, abs(_e) * 10.0 ** (1 - ${vi()}))
    _x = _e
    _a = float(math.floor(_x))
    _h1, _k1, _h, _k = 1.0, 0.0, _a, 1.0
    if not abs(_h / _k - _e) <= _tol:
        while _x - _a > 1e-15 * _k * _k:
            _x = 1 / (_x - _a)
            _a = float(math.floor(_x))
            _h, _h1 = _h1 + _a * _h, _h
            _k, _k1 = _k1 + _a * _k, _k
            if abs(_h / _k - _e) <= _tol:
                break
    if not (math.isfinite(_h) and math.isfinite(_k)) or _k == 0:
        return None
    if abs(_h / _k - _e) > _tol:
        return None
    if (12 / math.pi ** 2) * _k * _k * _tol > ${bi}:
        return None
    return (_h, _k)
def _ce_pow_real(_x, _y):
    if not (math.isfinite(_x) and _x < 0 and math.isfinite(_y)):
        return None
    _t = _ce_pow_branch(_y)
    if _t is None or _t[1] % 2 == 0:
        return None
    _m = float(np.power(-_x, _y))
    if not math.isfinite(_m):
        return None
    return -_m if _t[0] % 2 != 0 else _m
def _ce_cos_sin_pi(_v):
    _r = _v - 2 * math.floor(_v / 2 + 0.5)
    _q = math.floor(2 * _r + 0.5)
    _t = _r - _q / 2
    _c = math.cos(math.pi * _t)
    _s = 0.0 if _t == 0 else math.sin(math.pi * _t)
    return [(_c, _s), (-_s, _c), (-_c, -_s), (_s, -_c)][(_q + 4) % 4]
def _ce_pow_real_part(_v):
    if isinstance(_v, complex):
        return _v.real if _v.imag == 0 else None
    return float(_v)
def _ce_pow(_x, _y, _f=None):
    if np.ndim(_x) == 0 and np.ndim(_y) == 0:
        _xr = _ce_pow_real_part(_x)
        _yr = _ce_pow_real_part(_y)
        if _xr is not None and _yr is not None:
            _r = _ce_pow_real(_xr, _yr)
            if _r is not None:
                return _r
            if _xr < 0 and math.isfinite(_xr) and math.isfinite(_yr) and _yr != math.floor(_yr):
                _m = float(np.power(-_xr, _yr))
                _c, _s = _ce_cos_sin_pi(_yr)
                return complex(0.0 if _c == 0 else _m * _c, 0.0 if _s == 0 else _m * _s)
        return _x ** _y if _f is None else _f(_x, _y)
    _xa, _ya = np.broadcast_arrays(np.asarray(_x), np.asarray(_y))
    _r = np.array(_xa ** _ya if _f is None else _f(_xa, _ya), copy=True)
    _m = (np.real(_xa) < 0) & (np.imag(_xa) == 0) & (np.imag(_ya) == 0)
    for _i in zip(*np.nonzero(_m)):
        _v = _ce_pow_real(float(np.real(_xa[_i])), float(np.real(_ya[_i])))
        if _v is not None:
            _r[_i] = _v
    return _r
`}function $r(e,n,t,r,o=1){let[i,s]=t,a=d=>typeof n=="string"?`${n}(${d})`:n(d);if(i==null)throw new Error(`Could not compile \`${e}\`: no argument`);if(s==null)return a(r(i));let l=o===1?"_ce_q":"(_ce_q * 2)",u=o===1?"np.round(_ce_q)":"(np.round(_ce_q * 2) / 2)",f="__import__('fractions').Fraction",m=`(lambda _ce_q: (lambda _ce_n: np.where(_ce_n & (${`np.vectorize(lambda _ce_a, _ce_b, _ce_r: ${f}(repr(float(_ce_a))) == ${f}(float(_ce_r)) * ${f}(repr(float(_ce_b))), otypes=[bool])(_ce_x, _ce_k, ${u})`} if np.any(_ce_n) else False), ${u}, _ce_q))(np.isfinite(_ce_q) & (np.abs(${l} - np.round(${l})) <= 8.881784197001252e-16 * np.abs(${l}))))(np.where((_ce_x / _ce_k == 0) & (_ce_x != 0) & np.isfinite(_ce_k), np.sign(_ce_x) * 5e-324, _ce_x / _ce_k))`;return`(lambda _ce_x, _ce_k: np.where(np.isinf(_ce_x / _ce_k) & np.isfinite(_ce_x) & (_ce_k != 0), _ce_x, ${a(m)} * _ce_k))(np.asarray(${r(i)}, dtype=float), np.abs(${r(s)}))`}var Ol=`def _ce_smoothstep(_e0, _e1, _x):
    _e0 = np.asarray(_e0, dtype=float)
    _e1 = np.asarray(_e1, dtype=float)
    _x = np.asarray(_x, dtype=float)
    with np.errstate(divide='ignore', invalid='ignore'):
        _t = np.clip((_x - _e0) / (_e1 - _e0), 0.0, 1.0)
    _r = np.where(_e0 == _e1, np.where(_x < _e0, 0.0, 1.0), _t * _t * (3.0 - 2.0 * _t))
    _r = np.where(np.isnan(_e0) | np.isnan(_e1) | np.isnan(_x), np.nan, _r)
    return _r[()]`,jl=`def _ce_round(_x, _ties):
    _a = np.abs(_x)
    _m = np.floor(_a)
    _d = _a - _m
    if _ties == 'away-from-zero':
        _away = True
    elif _ties == 'toward-zero':
        _away = False
    elif _ties == 'toward-positive-infinity':
        _away = np.greater(_x, 0)
    else:
        _away = np.less(_x, 0)
    return np.sign(_x) * (_m + np.logical_or(_d > 0.5, np.logical_and(_d == 0.5, _away)))
`;function Vo(e,n){return n==="to-even"?`np.round(${e})`:Mn?`(lambda _x: (lambda _a: (lambda _m: np.sign(_x) * (_m + np.logical_or(_a - _m > 0.5, np.logical_and(_a - _m == 0.5, ${{"away-from-zero":"True","toward-zero":"False","toward-positive-infinity":"np.greater(_x, 0)","toward-negative-infinity":"np.less(_x, 0)"}[n]}))))(np.floor(_a)))(np.abs(_x)))(${e})`:`_ce_round(${e}, '${n}')`}var rl="9007199254740991.0";function Ho(e){return`(np.any(np.asarray(${e}) > ${rl}) or np.any(np.asarray(${e}) < -${rl}))`}var Ul="np.asarray(_a).dtype.kind == 'f' or np.asarray(_b).dtype.kind == 'f' or np.result_type(_a if np.isscalar(_a) else np.asarray(_a), _b if np.isscalar(_b) else np.asarray(_b)).kind == 'f'";function Bl(e,n){return`${e} + ': ' + str(${n}) + ' is beyond the safe integer range of compiled code (+/-9007199254740991); evaluate with the interpreter for the exact result'`}var ql=`def _ce_int_operands(_op, _all, _a, _b):
    _all = _all or ${Ul}
    for _x in (_a, _b):
        if _all and ${Ho("_x")}:
            raise ValueError(${Bl("_op","_x")})
    return (_a, _b)
def _ce_remainder(_a, _b):
    _ce_int_operands('Remainder', True, _a, _b)
    _q = _a / _b
    _m = np.floor(np.abs(_q))
    _d = np.abs(_q) - _m
    return _a - _b * (np.sign(_q) * (_m + np.logical_or(_d > 0.5, np.logical_and(_d == 0.5, np.greater(_q, 0)))))`;function ol(e,n,t,r){let o=r(n),i=r(t),s=m=>O(m)&&!m.isComplex&&!ci(m.re);if(e==="Mod"&&s(n)&&s(t))return`np.mod(${o}, ${i})`;if(!Mn)return e==="Mod"?`np.mod(*_ce_int_operands('Mod', False, ${o}, ${i}))`:`_ce_remainder(${o}, ${i})`;let a=m=>`(_ for _ in ()).throw(ValueError(${Bl(`'${e}'`,m)}))`,l=m=>e==="Mod"?`_f and ${Ho(m)}`:Ho(m),u=e==="Mod"?"np.mod(_a, _b)":`(_a - _b * ${Vo("_a / _b","toward-positive-infinity")})`,f=`${a("_a")} if ${l("_a")} else ${a("_b")} if ${l("_b")} else ${u}`;return`(lambda _a, _b: ${e==="Mod"?`(lambda _f: ${f})(${Ul})`:f})(${o}, ${i})`}var Dl=`def _ce_ord(_f, _a, _b):
    def _ce_ord_len(_x):
        if isinstance(_x, np.ndarray):
            return len(_x) if _x.ndim > 0 else None
        if isinstance(_x, (list, tuple)):
            return len(_x)
        return None
    _la = _ce_ord_len(_a)
    _lb = _ce_ord_len(_b)
    if _la is not None and _lb is not None and _la != _lb:
        raise ValueError('incompatible dimensions')
    return _f(_a, _b)
`,Vl=`def _ce_listpos(_op, _n, _i):
    if isinstance(_i, (bool, np.bool_)) or not isinstance(_i, (int, float, np.integer, np.floating)) or not float(_i).is_integer():
        raise IndexError(_op + ': the index is not an integer at run time')
    _k = int(_i)
    if _k == 0 or _k > _n or _k < -_n:
        raise IndexError(_op + ': the index ' + str(_k) + ' is not a position of the list at run time')
    return _k - 1 if _k > 0 else _n + _k
def _ce_listcopy(_op, _l):
    if isinstance(_l, str):
        raise TypeError(_op + ': the operand is a string at run time, and this target cannot split a string into characters')
    return list(_l)
def _ce_replaceat(_l, _i, _v):
    _o = _ce_listcopy('ReplaceAt', _l)
    _o[_ce_listpos('ReplaceAt', len(_o), _i)] = _v
    return _o
def _ce_deleteat(_l, _i):
    _o = _ce_listcopy('DeleteAt', _l)
    del _o[_ce_listpos('DeleteAt', len(_o), _i)]
    return _o
def _ce_insert(_l, _i, _v):
    _o = _ce_listcopy('Insert', _l)
    _o.insert(_ce_listpos('Insert', len(_o) + 1, _i), _v)
    return _o
def _ce_replaceat_inplace(_l, *_u):
    if isinstance(_l, str):
        _l = _ce_listcopy('ReplaceAt', _l)
    for _k in range(0, len(_u), 2):
        _l[_ce_listpos('ReplaceAt', len(_l), _u[_k])] = _u[_k + 1]
    return _l
def _ce_owned_copy(_x):
    return _x if isinstance(_x, str) else _ce_listcopy('Fold', _x)
`,jo=new WeakSet,Hl=`def _ce_predicate(_f, _kind, _mode):
    def _p(_x):
        _v = _f(_x)
        if isinstance(_v, (bool, np.bool_)):
            return bool(_v)
        if _mode == 'prefix':
            return False
        _absent = _v is None or (isinstance(_v, (float, np.floating)) and _v != _v)
        if _mode == 'select' and _absent:
            return False
        if _absent:
            raise TypeError(_kind + ' predicate returned an absent value, which the interpreter combines by Kleene logic')
        raise TypeError(_kind + ' predicate must return "True" or "False"')
    return _p
`,Wl=`import math
import scipy.special
_ce_ug_zc = [float(scipy.special.zetac(_k)) / _k for _k in range(2, 48)]
def _ce_ug_cf(_s, _z):
    _b = _z + 1 - _s
    _c = 1e300
    _d = 1 / _b
    _h = _d
    _n = 0
    for _i in range(1, 5001):
        _an = -_i * (_i - _s)
        _b += 2
        _d = _an * _d + _b
        if abs(_d) < 1e-300:
            _d = 1e-300
        _c = _b + _an / _c
        if abs(_c) < 1e-300:
            _c = 1e-300
        _d = 1 / _d
        _e = _d * _c
        _h *= _e
        _n = _n + 1 if abs(_e - 1) < 8.881784197001252e-16 else 0
        if _n >= 3:
            return _h
    return math.nan
def _ce_ug_h(_s, _z):
    if _z >= 1 or _s > 0.5 or _s < -4096:
        return _ce_ug_cf(_s, _z)
    _m = round(-_s)
    _a = _s + _m
    if abs(_a) < 1e-200:
        _h = float(scipy.special.exp1(_z)) * math.exp(_z)
    else:
        _l = -0.5772156649015329 * _a + (_a - math.log1p(_a))
        _p = -_a
        for _c in _ce_ug_zc:
            _p *= -_a
            _l += _c * _p
        _t = 1.0
        _sum = 0.0
        for _k in range(1, 200):
            _t *= -_z / _k
            _d = _t / (_a + _k)
            _sum += _d
            if abs(_d) < 1e-17 * abs(_sum):
                break
        _h = math.exp(_z) * (math.expm1(_l - _a * math.log(_z)) / _a - _sum)
    for _k in range(_m):
        _h = (1 - _z * _h) / (1 - _a)
        _a -= 1
    return _h
def _ce_ug1(_s, _z, _reg):
    if math.isnan(_s) or math.isnan(_z):
        return math.nan
    if math.isinf(_s):
        if math.isinf(_z) or (_s < 0 and (_reg or _z <= 0)):
            return math.nan
        if _reg:
            return 1.0
        if _z < 0:
            return math.nan
        return math.inf if _s > 0 or _z < 1 else 0.0
    if _z < 0:
        return math.nan
    _int = _s <= 0 and _s == math.floor(_s)
    if _reg and _int:
        return 0.0 if _z > 0 else math.nan
    if _z == 0:
        if _s > 0:
            return 1.0 if _reg else float(scipy.special.gamma(_s))
        if _reg:
            return math.copysign(math.inf, scipy.special.gammasgn(_s))
        return math.inf if _int else float(scipy.special.gamma(_s))
    if _z == math.inf:
        return math.copysign(0.0, scipy.special.gammasgn(_s)) if _reg else 0.0
    if _s > 0.5 and not _reg:
        _q = float(scipy.special.gammaincc(_s, _z))
        if _q > 1e-300 and _z < _s + 1:
            return float(np.exp(scipy.special.gammaln(_s) + math.log(_q)))
    _h = _ce_ug_h(_s, _z)
    if not _h > 0:
        return math.nan
    _lg = _s * math.log(_z) - _z + math.log(_h)
    _g = float(_h * np.power(_z, _s) * np.exp(-_z))
    if not 2.2250738585072014e-308 <= _g < math.inf:
        _g = math.nan
    if not _reg:
        return _g if _g == _g else float(np.exp(_lg))
    _G = float(scipy.special.gamma(_s))
    if _g == _g and 2.2250738585072014e-308 <= abs(_G) < math.inf:
        return _g / _G
    _lG = scipy.special.gammaln(_s) if abs(_s) > 1e-300 else -math.log(abs(_s))
    return float(scipy.special.gammasgn(_s) * np.exp(_lg - _lG))
def _ce_ugamma(_s, _z, _reg):
    _s = np.asarray(_s)
    _z = np.asarray(_z)
    _nr = (np.imag(_s) != 0) | (np.imag(_z) != 0)
    with np.errstate(all='ignore'):
        _s, _z = np.broadcast_arrays(np.asarray(np.real(_s), dtype=float), np.asarray(np.real(_z), dtype=float))
        _nr = np.broadcast_to(_nr, _s.shape)
        _q = scipy.special.gammaincc(_s, _z)
        _r = np.array(_q if _reg else _q * scipy.special.gamma(_s), dtype=float)
        _slow = ~(_s >= 1e-20) | np.isinf(_s)
        if not _reg:
            _slow = _slow | ((_z > 0) & ~((_q > 1e-300) & (np.abs(_r) < np.inf)))
        for _i in np.flatnonzero(_slow & ~_nr):
            _r.flat[_i] = _ce_ug1(float(_s.flat[_i]), float(_z.flat[_i]), _reg)
        _r[_nr] = np.nan
    return _r[()]
`;function il(e){let n=e;return(n.includes("_ce_cplx(")||n.includes("_ce_cisreal(")||n.includes("_ce_creal(")||n.includes("_ce_creal_elems("))&&(n=`${Tl}
${n}`),n.includes("_ce_rref(")&&(n=`${Fl}
${n}`),n.includes("_ce_bcast(")&&(n=`${Ll}
${n}`),n.includes("_ce_eqcoll(")&&(n=`${Il}
${n}`),n.includes("_ce_indexof(")&&(n=`${Nl}
${n}`),n.includes("_ce_ord(")&&(n=`${Dl}
${n}`),n.includes("_ce_round(")&&(n=`${jl}
${n}`),(n.includes("_ce_smoothstep(")||n.includes("_ce_bcast('smoothstep'"))&&(n=`${Ol}
${n}`),(n.includes("_ce_int_operands(")||n.includes("_ce_remainder("))&&(n=`${ql}
${n}`),n.includes("_ce_pow(")&&(n=`${Ml()}
${n}`),/_ce_(replaceat|replaceat_inplace|owned_copy|deleteat|insert)\(/.test(n)&&(n=`${Vl}
${n}`),n.includes("_ce_predicate(")&&(n=`${Hl}
${n}`),n.includes("_ce_ugamma(")&&(n=`${Wl}
${n}`),n}function Op(e,n){let t=n.includes(`
`);if(!t&&!/\breturn\b/.test(n.replace(/"(?:[^"\\]|\\.)*"/g,'""')))return;let r=(t?n.split(`
`)[0]:n).trim();throw new Error(`Could not compile ${Te(e)}: this route emits a single Python EXPRESSION, but the body lowers to ${t?"a statement sequence":"a bare `return` statement"} (\`${r}${t?"\u2026":""}\`). Python has no expression-level block, and \`return\`/\`for\`/\`while\` are statements, so there is no valid emission for this position. Compile a statement body with compileFunction() instead \u2014 that route emits a \`def\`.`)}function Wo(e,n){let t=on(n);if(t!==void 0)throw new Error(`Could not compile ${Te(e)}: this route emits a single Python EXPRESSION, but the body `+(t==="Assign"?"is an assignment. Python assignment is a STATEMENT (this target does not emit the walrus operator), so the emitted `s = x` is not valid in an expression position.":"is a declaration. Python has no declaration statement, so this target emits the EMPTY string for it \u2014 the declared name and its initializer would be silently DROPPED.")+" Give the block a VALUE statement (`Block(s \u2254 x; s)`) and compile it with compileFunction() instead \u2014 that route emits a `def`.")}function sl(e,n){let t=new RegExp(`(?<![\\w.])${n}(?!\\w)`);for(let r of e.split(`
`))if(t.test(r))return r.startsWith(`${n} = `)?!t.test(r.slice(n.length+3)):!1;return!1}function jp(e,n){if(Yl(e,n),Hn(n))return;let t=on(n);if(t!==void 0)throw Zl(e,t)}function Yl(e,n,t=!1){let r=t?Yo:bn,o=n;for(;_(o,"Block")&&o.ops.length>0;)o=o.ops[o.ops.length-1];if(o=p.tailValue(o,!0),_(o,"If")&&(r(o.ops[1])||r(o.ops[2])))throw new Error(`Could not compile ${Te(e)}: the body's value statement is a selection whose branches are statements, which Python writes as an \`if:\`/\`else:\` block \u2014 and a block cannot be returned, so this route would emit \`return if \u2026:\`. Give the block a VALUE statement (\`Block(If(c, r \u2254 1, r \u2254 2); r)\`), which compiles to the \`if\` block followed by \`return r\`.`);if(t&&_(o,"If")){let i=Pr(o);if(i.has("control")&&i.has("value"))throw new Error(`Could not compile ${Te(e)}: the body's value statement is a selection that mixes a control-flow branch (\`Break\`, \`Continue\` or a loop) with a value branch. Python writes such a selection as an \`if:\`/\`else:\` block, which has no value, so the value of the other branch would be lost.`)}}function Up(e,n,t){if(!Hn(n))return;let r=t.split(`
`),o=/^return\s+([^\s;]+);?$/.exec(r[r.length-1]);if(!(r.length>1&&o!==null&&r[r.length-2].startsWith(`${o[1]} = `)))throw Zl(e,on(n)??"Assign")}function Zl(e,n){return new Error(`Could not compile ${Te(e)}: the body's value statement is `+(n==="Assign"?"an assignment":"a declaration (which this target emits as nothing at all)")+`, and a Python statement cannot be returned \u2014 this route would emit \`return ${n==="Assign"?"s = x":""}\`, which does not parse. Give the block a VALUE statement (\`Block(s \u2254 x; s)\`), which compiles to \`def f(x):\\n    s = x\\n    return s\`.`)}function al(e,n,t,r,o){let i=t.length===1?"float('nan')":"None",s=!1,a=t.map(u=>He(u)?`${e}(${r(u)})`:Ql(u)||li(u.type.type)?(s=!0,`(lambda _v: float('nan') if _v is None else (${i} if np.size(_v) == 0 else ${e}(_v)))(${r(u)})`):r(u));if(a.length===0)return e==="np.max"?"-np.inf":"np.inf";if(a.length>1&&s)return`(lambda _ys: float('nan') if len(_ys) == 0 else ${e}(_ys))([_y for _y in (${a.join(", ")}) if _y is not None])`;if(a.length===1&&!He(t[0]))return Pl(t[0],a[0],o);let l=a[0];for(let u=1;u<a.length;u++)l=`${n}(${l}, ${a[u]})`;return l}function ll(e,n,t){if(e[0]==null)throw new Error("Could not compile `Transpose`: missing argument");let r=t?`${t}(${n(e[0])})`:n(e[0]);if(e.length<3)return`np.transpose(${r})`;if(e.length>3||e[1]==null||e[2]==null)throw new Error("Could not compile `Transpose`: only the (value) and (value, axis1, axis2) forms compile.");return`np.swapaxes(${r}, int(${n(e[1])}) - 1, int(${n(e[2])}) - 1)`}function ul(e,n){if(n!==void 0&&(Nt(p.collectionElementTypeOf(n))||_t(n.type.type,!1)))throw new Error(`Could not compile \`${e}\`: a built-in fold over elements that are collections. The interpreter evaluates it instead.`)}var fl={"np.mean":"Mean","np.median":"Median","np.var":"Variance","np.std":"StandardDeviation"};function Er(e,n,t,r=""){if(n.length===0||n[0]==null)throw new Error(`Could not compile \`${e}\`: no argument`);let o=n.length===1?n[0]:void 0;if(o!==void 0&&!Nt(Bn(W(o.type.type)))&&!_t(o.type.type,!0)&&_t(o.type.type,!1)){let s=fl[e]??e;return`(lambda _d: ${e}(_d${r}) if np.ndim(_d) <= 1 else (_ for _ in ()).throw(TypeError('${s}: an element of the data is a list at run time')))(${t(o)})`}if(n.some(s=>Nt(Bn(W(s.type.type)))||_t(s.type.type,!1)))throw new Error(`Could not compile \`${fl[e]??e}\`: an element of the data is a collection (a list, a string, a set or a dictionary). The interpreter evaluates it instead.`);if(n.length===1)return`${e}(${t(n[0])}${r})`;let i=n.map(s=>He(s)?`*${t(s)}`:t(s));return`${e}([${i.join(", ")}]${r})`}function zr(e,n,t,r){if(n.length<2)throw new Error(`Could not compile \`${e}\`: expected at least two operands`);if(zl(r,n),Pt(r,n),zp(r,n),kp(r,n),n.length===2)return`_ce_ord(${e}, ${t(n[0])}, ${t(n[1])})`;let o=n.map((s,a)=>`_r${a}`),i=`_ce_ord(${e}, ${o[0]}, ${o[1]})`;for(let s=1;s<n.length-1;s++)i=`np.logical_and(${i}, _ce_ord(${e}, ${o[s]}, ${o[s+1]}))`;return`(lambda ${o.join(", ")}: ${i})(${n.map(s=>t(s)).join(", ")})`}function cl(e,n,t,r){if(t.length===0||t[0]==null)throw new Error(`Could not compile \`${n}\`: no operand`);Kl(e,t,"list<boolean>");let o=r(t[0]);for(let i=1;i<t.length;i++)o=`_ce_ord(${n}, ${o}, ${r(t[i])})`;return o}var Bp=new Set(["Not","Argument"]);function Kl(e,n,t){n.forEach((r,o)=>{let i=W(r.type.type);if(!(i!=="never"&&U(i,"boolean"))&&!(i!=="never"&&!Dn(r)&&U(i,t)))throw new Error(`Could not compile \`${e}\`: operand ${o+1} has the type \`${r.type.toString()}\`. A logical connective over a collection compiles only when every operand is a boolean or a collection of the type \`${t}\`. The interpreter evaluates it instead.`)})}function pl(e,n,t){if(n.length===0)return"[]";let r=n.findIndex(i=>E(i,"Missing")||E(i,"Undefined"));if(r>=0)throw new Error(`Could not compile \`${e}\`: operand ${r+1} is absent, and the interpreter answers \`Missing\` for the whole join. The interpreter evaluates it instead.`);let o=i=>Vn(i)||!Pe(W(i.type.type),yn);return`[${n.map((i,s)=>o(i)?t(i):`*${V(e,i,t,s+1)}`).join(", ")}]`}function V(e,n,t,r){if(n&&n.type.matches("string"))throw new Error(`Could not compile \`${e}\`: a string collection \u2014 a string's elements are UAX #29 grapheme clusters and Python has no stdlib grapheme segmentation, so the emitted code would walk code points instead. The interpreter evaluates it.`);if(n&&Pt(e,[n]),n&&Ut(n))throw new Error(`Could not compile \`${e}\`: ${r!==void 0?`operand ${r}`:"the operand"} may be text at run time (type \`${n.type.toString()}\`), and Python has no stdlib grapheme segmentation. The interpreter evaluates it.`);if(!n||!(n.type.matches("list<any>")||n.type.matches("indexed_collection<any>")))throw new Error(`Could not compile \`${e}\`: ${r!==void 0?`operand ${r}`:"operand"} is not an indexed collection (list/vector/range).`);return t(n)}function qp(e){let n=tn(W(e.type.type));return Xl(ai(n))}function Xl(e){let n=e===void 0?void 0:tn(W(e)),t=n!==void 0&&typeof n!="string"&&n.kind==="union"&&!U(n,"number")&&n.types.some(o=>{let i=W(o);return i==="unknown"||i==="any"||U(i,"number")});return n!==void 0&&!t&&n!=="unknown"&&n!=="any"&&n!=="never"?U(n,"number")?"float('nan')":"None":`((lambda _c: float('nan') if len(_c) > 0 and all(isinstance(_x, (int, float, complex, np.number)) and not isinstance(_x, (bool, np.bool_)) for _x in _c) else None)([_x for _x in ${t?"list(_l)":"list(_l)[:10]"} if _x is not None]) if isinstance(_l, (list, tuple, np.ndarray)) else None)`}function Jl(e,n){let t=qp(e);if(n===void 0||!Number.isInteger(n)||n===0)return{absent:t,outOfRange:t};let r=W(e.type.type),o=Mi(r,n),i=o===void 0?t:Xl(o),s=W(tn(r)),a=typeof s!="string"&&s.kind==="tuple";return{absent:Oi(e,n)?"float('nan')":a?"None":t,outOfRange:i}}function Cr(e,n,t,r){let o;if(n!==void 0&&ct(n.type.type)){let l=tn(W(n.type.type));l==="never"||U(l,"string")||!U(l,Un)||Ut(n)?o=V(e,n,r):(Pt(e,[n]),o=r(n))}else o=V(e,n,r);let{absent:i,outOfRange:s}=Jl(n,t<0?t:t+1),a=t<0?`_l[${t}] if len(_l) >= ${-t}`:`_l[${t}] if len(_l) > ${t}`;return`(lambda _l: ${i} if _l is None else (${a} else ${s}))(${o})`}function Ql(e){let n=W(e.type.type);return n==="unknown"||n==="any"||n==="value"||n==="string"?!1:typeof n=="object"&&n.kind==="union"?n.types.some(t=>U(t,Un)):U(n,Un)}function Dp(e){return U(W(e.type.type),"number")}function pe(e,n,t,r=[]){p.assertCallbackAnnotations(e,n,r);let o=Zi[e];if(o!==void 0&&n!==void 0&&Ki(e,n)){if(o==="select"){let i=ii(W(n.type.type));if(i===void 0||Pe(i,"nan"))throw new Error(`Could not compile \`${e}\` to Python: the predicate may return \`NaN\``+(i===void 0?"":` (its result type is \`${nn(i)}\`)`)+", which this target cannot tell apart from the absent value `Missing`. The interpreter reports `NaN` as a predicate result that is not a boolean, and skips `Missing`. The interpreter evaluates it instead.")}return`_ce_predicate(${dl(e,n,t)}, '${e}', '${o}')`}return dl(e,n,t)}function dl(e,n,t){if(n&&_(n,"Function"))return t(n);if(n&&E(n)){let r={Add:"+",Subtract:"-",Multiply:"*",Divide:"/"}[n.symbol];if(r!==void 0)return`(lambda _a, _b: _a ${r} _b)`}throw new Error(`Could not compile \`${e}\`: the function operand has no Python form (only function literals and binary arithmetic operator symbols lower to a Python lambda).`)}var Vp=e=>`${e} == ${e}`,lt=e=>p.isAtomicSource(e)?e:`(${e})`,Lr=/^[\w.]+$/,Hp=/^[-+]?(?:\d[\d_]*(?:\.[\d_]*)?|\.\d[\d_]*)(?:[eE][-+]?\d[\d_]*)?$/,kt=e=>`isinstance(${e}, (bool, np.bool_))`,On={decidedNumber:Vp,and:"and",not:"not ",undecided:"None",trueValue:"True",falseValue:"False",isTrue:e=>`${e} is not None and ${e}`,isFalse:e=>`${e} is not None and not ${e}`,isUndecided:e=>`${e} is None`,kleeneOfValue:(e,n)=>`((${n?`not ${e}`:e}) if ${kt(e)} else None)`,ternary:(e,n,t)=>`(${n} if ${e} else ${t})`,bind:(e,n,t)=>`(lambda ${e.join(", ")}: ${n})(${t.join(", ")})`};p.conditionDialects.set("python",On);function ml(e){return _(e,"When")||ct(e.type.type)}function Uo(e,n){let t=e.flatMap(r=>r===void 0?[]:[r.type.type]);return p.absenceKind(t,n)==="object"?"None":"float('nan')"}function eu(e){let n=e.test;return n.kind==="value"?!0:n.kind==="connective"?n.operands.some(eu):!1}function hl(e,n,t,r,o,i="float('nan')"){let s=p.conditionDecidability(e,o.bindExpr!==void 0,o);if(s===null)return`((${n}) if (${r(e)}) else (${t}))`;if(s.test.kind==="value"||s.test.kind==="connective"){let u=s.test.kind==="connective",{expr:f,negate:c}=u?{expr:e,negate:!1}:p.peelNegations(e),m=u?p.kleeneCondition(s,o,On):r(f),d=h=>`((${n}) if (${kt(h)} and ${c?`not ${h}`:h}) else ((${t}) if ${kt(h)} else ${i}))`;return Lr.test(m)?d(m):`(lambda _CND: ${d("_CND")})(${m})`}let{value:a,bindings:l}=p.withConditionOperands(s.test.operands,o,o.bindExpr!==void 0,u=>{let f=r(e);return u.length===0?`((${n}) if (${f}) else (${t}))`:`(((${n}) if (${f}) else (${t})) if (${u.join(" and ")}) else ${i})`},On);return l.length===0?a:o.bindExpr(l,a)}function bn(e){if(e===void 0)return!1;if(on(e)==="Assign")return!0;if(!_(e))return!1;let n=e.operator;return n==="Break"||n==="Continue"||n==="Return"||n==="Loop"?!0:n==="Block"?e.ops.length!==1||bn(e.ops[0]):n==="If"?bn(e.ops[1])||bn(e.ops[2]):!1}function Yo(e){if(!bn(e))return!1;let n=e;for(;_(n,"Block")&&n.ops.length>0;)n=n.ops[n.ops.length-1];return _(n,"If")?Yo(n.ops[1])||Yo(n.ops[2]):!(_(n)&&["Break","Continue","Return","Loop"].includes(n.operator))}function Pr(e,n=new Set){return e===void 0||E(e,"Nothing")?n:_(e,"Block")?(e.ops.length>0&&Pr(e.ops[e.ops.length-1],n),n):_(e,"If")?(Pr(e.ops[1],n),Pr(e.ops[2],n),n):(_(e)&&["Break","Continue","Loop"].includes(e.operator)?n.add("control"):n.add("value"),n)}function nu(e,n,t){let r=e[0];if(r===void 0||e[1]===void 0)throw new Error("Could not compile `If`: wrong number of arguments");let o=m=>p.withCseScope(t,m,n,()=>Ar(e[m],n)),i=m=>p.compileOp(t,0,n,0,m),s=(m,d)=>`${m}
${Rr(d)}`,a=e.length>2&&e[2]!==void 0,l=p.conditionDecidability(r,!0,n);if(l===null){let m=s(`if ${i(r)}:`,o(1));return a?`${m}
${s("else:",o(2))}`:m}let u=l.test.kind;if(u==="value"||u==="connective"){let m=u==="connective",{expr:d,negate:h}=m?{expr:r,negate:!1}:p.peelNegations(r),g=m?p.withCseOperand(t,0,n,()=>p.kleeneCondition(l,n,On)):i(d),v="",x=g;Lr.test(g)||(x=p.tempVar(n),v=`${x} = ${g}
`);let y=kt(x),P=s(`if ${y} and ${h?`not ${x}`:x}:`,o(1));return a&&(P+=`
${s(`elif ${y}:`,o(2))}`),v+P}let{value:f,bindings:c}=p.withConditionOperands(l.test.operands,n,!0,m=>{let d=i(r);if(a){let g=`${s(`if ${d}:`,o(1))}
${s("else:",o(2))}`;return m.length===0?g:s(`if ${m.join(" and ")}:`,g)}let h=m.length===0?d:[...m,`(${d})`].join(" and ");return s(`if ${h}:`,o(1))},On);return c.length===0?f:`${c.map(([m,d])=>`${m} = ${d}`).join(`
`)}
${f}`}function gl([e,n],t,r){let o=r?"GammaRegularized":"Gamma";if(e==null||n==null)throw new Error(`Could not compile \`${o}\`: missing argument`);if(!r){let l=[e,n].find(u=>p.isProvablyNonReal(u));if(l!==void 0)throw new gt({code:"non-real-operand",kind:"capability",message:`Could not compile \`Gamma\`: the operand \`${l.toString()}\` is certainly not a real number, and this target's lowering of the upper incomplete gamma is real-only.`})}let i=t(e),s=t(n),a=Y(e);if(a!==void 0){if(r&&a>=1e-20)return`scipy.special.gammaincc(${i}, ${s})`;if(!r&&Mn&&a>=25e-5&&a<=7.5)return`(scipy.special.gammaincc(${i}, ${s}) * scipy.special.gamma(${i}))`}return`_ce_ugamma(${i}, ${s}, ${r?"True":"False"})`}function Wp(e,n,t,r,o){let i=n.isCollection===!0||n.type.matches("collection<any>");if(i?n.type.matches("collection<real>"):!p.isComplexValued(n))return`${e}(${r(n)})`;let s=p.tempVar(o);return i?`(lambda ${s}: ${e}(_ce_creal_elems(${s})))(${r(n)})`:`(lambda ${s}: (${e}(_ce_creal(${s})) if _ce_cisreal(${s}) else ${t(s)}))(${r(n)})`}var Yp={__proto__:null,Arcsin:{fn:"asin",cut:"real"},Arccos:{fn:"acos",cut:"real"},Arctan:{fn:"atan",cut:"atan"},Arsinh:{fn:"asinh",cut:"asinh"},Arcosh:{fn:"acosh",cut:"above"},Artanh:{fn:"atanh",cut:"real"},Arccsc:{fn:"asin",cut:"real",at0:"complex(float('nan'), float('nan'))"},Arcsec:{fn:"acos",cut:"real",at0:"complex(float('nan'), float('nan'))"},Arccot:{fn:"atan",cut:"atan"},Arcsch:{fn:"asinh",cut:"asinh",at0:"complex(float('nan'), float('nan'))"},Arsech:{fn:"acosh",cut:"above",at0:"complex(float('inf'), 0.0)"},Arcoth:{fn:"atanh",cut:"real",at0:"complex(0.0, np.pi / 2)"}};function Ae(e,n){return(t,r,o)=>{let i=t[0];if(i==null)throw new Error(`Could not compile \`${e}\`: no argument`);let s=i.isCollection===!0||i.type.matches("collection<any>");if(s?i.type.matches("collection<real>"):!p.isComplexValued(i))return typeof n=="string"?`${n}(${r(i)})`:n(t,r,o);let{fn:a,cut:l,at0:u}=Yp[e],f=u!==void 0||e==="Arccot",c=(h,g)=>{let v=l==="real"?`(complex(${h}.real, -0.0 if ${h}.real > 0 else 0.0) if ${g}.imag == 0 else ${h})`:l==="above"?`(complex(${h}.real, 0.0) if ${g}.imag == 0 else ${h})`:`(complex(-0.0 if ${h}.imag < 0 else 0.0, ${h}.imag) if ${g}.real == 0 else ${h})`,x=`cmath.${a}(${v})`;return a==="atanh"?`(complex(${h}.real * float('inf'), 0.0) if ${h}.imag == 0 and abs(${h}.real) == 1 else ${x})`:a==="atan"?`(complex(float('inf'), float('inf')) if ${h}.real == 0 and abs(${h}.imag) == 1 else ${x})`:x},m=p.tempVar(o),d;if(!f)d=`lambda ${m}: ${c(m,m)}`;else{let h=p.tempVar(o),g=`(lambda ${h}: ${c(h,m)})(1 / ${m})`,v=e==="Arccot"?`complex(cmath.phase(complex(${m}.real, 1.0)), 0.0) if ${m}.imag == 0`:`${u} if ${m} == 0`;d=`lambda ${m}: ${v} else ${g}`}return s?`np.vectorize(${d}, otypes=[complex])(${r(i)})`:`(${d})(${r(i)})`}}var Tr={__proto__:null,Add:(e,n)=>e.length===0?"0":e.length===1?n(e[0]):e.map(t=>n(t)).join(" + "),Multiply:(e,n)=>e.length===0?"1":e.length===1?n(e[0]):e.map(t=>lt(n(t))).join(" * "),Negate:(e,n)=>`(-(${n(e[0])}))`,Divide:(e,n)=>{if(e.length===0)return"1";if(e.length===1)return n(e[0]);if(e.length===2)return`(${n(e[0])}) / (${n(e[1])})`;let t=`(${n(e[0])})`;for(let r=1;r<e.length;r++)t=`${t} / (${n(e[r])})`;return t},Sin:(e,n)=>{if(p.isComplexValued(e[0]))return`cmath.sin(${n(e[0])})`;let t=p.piMultiple(e[0]);return t!==void 0?wr(n(t),"sin"):`np.sin(${n(e[0])})`},Cos:(e,n)=>{if(p.isComplexValued(e[0]))return`cmath.cos(${n(e[0])})`;let t=p.piMultiple(e[0]);return t!==void 0?wr(n(t),"cos"):`np.cos(${n(e[0])})`},Tan:(e,n)=>{if(p.isComplexValued(e[0]))return`cmath.tan(${n(e[0])})`;let t=p.piMultiple(e[0]);return t!==void 0?wr(n(t),"tan"):xr(n(e[0]),"np.tan(_x)")},Arcsin:Ae("Arcsin","np.arcsin"),Arccos:Ae("Arccos","np.arccos"),Arctan:Ae("Arctan","np.arctan"),Arctan2:"np.arctan2",Sinh:(e,n)=>{if(p.isComplexValued(e[0])){let t=p.imaginaryPiMultiple(e[0]);return t!==void 0?at(n(t),"Sinh"):`cmath.sinh(${n(e[0])})`}return`np.sinh(${n(e[0])})`},Cosh:(e,n)=>{if(p.isComplexValued(e[0])){let t=p.imaginaryPiMultiple(e[0]);return t!==void 0?at(n(t),"Cosh"):`cmath.cosh(${n(e[0])})`}return`np.cosh(${n(e[0])})`},Tanh:(e,n)=>{if(p.isComplexValued(e[0])){let t=p.imaginaryPiMultiple(e[0]);return t!==void 0?at(n(t),"Tanh"):`cmath.tanh(${n(e[0])})`}return`np.tanh(${n(e[0])})`},Arsinh:Ae("Arsinh","np.arcsinh"),Arcosh:Ae("Arcosh","np.arccosh"),Artanh:Ae("Artanh","np.arctanh"),Cot:([e],n)=>{if(e===null)throw new Error("Could not compile `Cot`: no argument");return p.isComplexValued(e)?`(np.cos(${n(e)}) / np.sin(${n(e)}))`:xr(n(e),"1 / np.tan(_x)")},Csc:([e],n)=>{if(e===null)throw new Error("Could not compile `Csc`: no argument");return p.isComplexValued(e)?`(1 / np.sin(${n(e)}))`:xr(n(e),"1 / np.sin(_x)")},Sec:([e],n)=>{if(e===null)throw new Error("Could not compile `Sec`: no argument");return p.isComplexValued(e)?`(1 / np.cos(${n(e)}))`:xr(n(e),"1 / np.cos(_x)")},Degrees:([e],n)=>{if(e===null)throw new Error("Could not compile `Degrees`: no argument");return`(${lt(n(e))} * np.pi / 180)`},Arccot:Ae("Arccot",([e],n)=>{if(e===null)throw new Error("Could not compile `Arccot`: no argument");return`(np.pi / 2 - np.arctan(${n(e)}))`}),Arccsc:Ae("Arccsc",([e],n)=>{if(e===null)throw new Error("Could not compile `Arccsc`: no argument");return`np.arcsin(1 / (${n(e)}))`}),Arcsec:Ae("Arcsec",([e],n)=>{if(e===null)throw new Error("Could not compile `Arcsec`: no argument");return`np.arccos(1 / (${n(e)}))`}),Coth:([e],n)=>{if(e===null)throw new Error("Could not compile `Coth`: no argument");let t=p.isComplexValued(e)?p.imaginaryPiMultiple(e):void 0;return t!==void 0?at(n(t),"Coth"):`(np.cosh(${n(e)}) / np.sinh(${n(e)}))`},Csch:([e],n)=>{if(e===null)throw new Error("Could not compile `Csch`: no argument");let t=p.isComplexValued(e)?p.imaginaryPiMultiple(e):void 0;return t!==void 0?at(n(t),"Csch"):`(1 / np.sinh(${n(e)}))`},Sech:([e],n)=>{if(e===null)throw new Error("Could not compile `Sech`: no argument");let t=p.isComplexValued(e)?p.imaginaryPiMultiple(e):void 0;return t!==void 0?at(n(t),"Sech"):`(1 / np.cosh(${n(e)}))`},Arcoth:Ae("Arcoth",([e],n)=>{if(e===null)throw new Error("Could not compile `Arcoth`: no argument");return`np.arctanh(1 / (${n(e)}))`}),Arcsch:Ae("Arcsch",([e],n)=>{if(e===null)throw new Error("Could not compile `Arcsch`: no argument");return`np.arcsinh(1 / (${n(e)}))`}),Arsech:Ae("Arsech",([e],n)=>{if(e===null)throw new Error("Could not compile `Arsech`: no argument");return`np.arccosh(1 / (${n(e)}))`}),Lb:"np.log2",Square:([e],n)=>{if(e===null)throw new Error("Could not compile `Square`: no argument");return`np.square(${n(e)})`},Fract:([e],n)=>{if(e===null)throw new Error("Could not compile `Fract`: no argument");return`np.modf(${n(e)})[0]`},Exp:(e,n)=>p.isComplexValued(e[0])?`cmath.exp(${n(e[0])})`:`np.exp(${n(e[0])})`,Ln:(e,n)=>p.isComplexValued(e[0])?(p.recordPromotion("Ln",e),`cmath.log(${n(e[0])})`):p.promotesRadicalToComplex("Ln",e)?`np.emath.log(${n(e[0])})`:`np.log(${n(e[0])})`,Log:(e,n)=>{let t=p.promotesRadicalToComplex("Log",e),r=p.fixedLogBase(e);if(r!==void 0)return t?`np.emath.log${r}(${n(e[0])})`:`np.log${r}(${n(e[0])})`;if(e.length===2){let o=t?"np.emath.log":"np.log";return`(${o}(${n(e[0])}) / ${o}(${n(e[1])}))`}return"np.log10"},Log10:"np.log10",Log2:"np.log2",Exp2:"np.exp2",Power:(e,n,t)=>{if(e.length!==2)return"np.power";let r=p.negativeBaseFloatPower(e),o=!Mn;if(E(e[0],"ExponentialE")){let s=p.eulerPiSplit(e[1]);if(s!==void 0){let a=wr(n(s.u),"exp");return s.a===void 0?a:`(np.exp(${n(s.a)}) * ${a})`}}if(p.isComplexValued(e[0])||p.isComplexValued(e[1]))return p.recordPromotion("Power",e),r!==void 0&&o?`_ce_pow(${n(e[0])}, ${n(e[1])})`:`(${lt(n(e[0]))} ** ${lt(n(e[1]))})`;let i=p.realPowerExponent(e)??(typeof r=="object"?r:void 0);if(i!==void 0){let s=p.tempVar(t),a=`np.power(np.abs(${s}), ${i.value})`,l=i.oddNumerator?`(np.where(${s} < 0, -1.0, 1.0) * ${a})`:a;return`(lambda ${s}: ${l})(${n(e[0])})`}return p.promotesRadicalToComplex("Power",e)?r==="runtime"&&o?`_ce_pow(${n(e[0])}, ${n(e[1])}, np.emath.power)`:`np.emath.power(${n(e[0])}, ${n(e[1])})`:r==="runtime"?o?`_ce_pow(${n(e[0])}, ${n(e[1])})`:`(${lt(n(e[0]))} ** ${lt(n(e[1]))})`:`np.power(${n(e[0])}, ${n(e[1])})`},Sqrt:(e,n)=>p.isComplexValued(e[0])?(p.recordPromotion("Sqrt",e),`cmath.sqrt(${n(e[0])})`):p.promotesRadicalToComplex("Sqrt",e)?`np.emath.sqrt(${n(e[0])})`:`np.sqrt(${n(e[0])})`,Root:(e,n)=>{if(e.length!==2)return"np.power";let[t,r]=e;if(p.isComplexValued(t)||p.isComplexValued(r))return p.recordPromotion("Root",e),`(lambda _z, _n: complex(np.sign(_z.real) * np.power(abs(_z.real), 1.0 / _n.real)) if _z.imag == 0 and _n.imag == 0 and _n.real % 2 == 1 else _z ** (1.0 / _n))(complex(${n(t)}), complex(${n(r)}))`;let o=Y(r),i=p.realRootDegreeTerms(r);if(o!==void 0&&(Number.isInteger(o)&&o%2!==0||i?.oddNumerator===!0)){let s=n(t);return`(np.sign(${s}) * np.power(np.abs(${s}), 1.0 / ${n(r)}))`}return o!==void 0&&i!==void 0?`np.power(np.abs(${n(t)}), 1.0 / ${n(r)})`:p.promotesRadicalToComplex("Root",e)?`np.emath.power(${n(t)}, 1.0 / ${n(r)})`:`np.power(${n(t)}, 1.0 / ${n(r)})`},Abs:(e,n)=>p.isComplexValued(e[0])?`abs(${n(e[0])})`:`np.abs(${n(e[0])})`,Sign:(e,n,t)=>Wp("np.sign",e[0],r=>`${r} / abs(${r})`,n,t),Floor:(e,n)=>$r("Floor","np.floor",e,n),Ceil:(e,n)=>$r("Ceil","np.ceil",e,n),Round:(e,n)=>{let t=e[0];if(t==null)throw new Error("Could not compile `Round`: no argument");let r=t.engine.roundingTies;return e.length<2?Vo(n(t),r):$r("Round",o=>Vo(o,r),e,n,.5)},Truncate:(e,n)=>$r("Truncate","np.trunc",e,n),Min:(e,n,t)=>al("np.min","np.minimum",e,n,t),Max:(e,n,t)=>al("np.max","np.maximum",e,n,t),ElementMax:(e,n)=>{if(!e.some(He)){if(e.length===1)return _(e[0])?`(${n(e[0])})`:n(e[0]);let t=n(e[0]);for(let r=1;r<e.length;r++)t=`np.maximum(${t}, ${n(e[r])})`;return t}return`_ce_bcast('max', ${e.map(t=>n(t)).join(", ")})`},ElementMin:(e,n)=>{if(!e.some(He)){if(e.length===1)return _(e[0])?`(${n(e[0])})`:n(e[0]);let t=n(e[0]);for(let r=1;r<e.length;r++)t=`np.minimum(${t}, ${n(e[r])})`;return t}return`_ce_bcast('min', ${e.map(t=>n(t)).join(", ")})`},Smoothstep:(e,n)=>e.some(He)?`_ce_bcast('smoothstep', ${e.map(t=>n(t)).join(", ")})`:`_ce_smoothstep(${e.map(t=>n(t)).join(", ")})`,Clamp:(e,n)=>e.some(He)?`_ce_bcast('clip', ${n(e[0])}, ${n(e[1])}, ${n(e[2])})`:`np.clip(${n(e[0])}, ${n(e[1])}, ${n(e[2])})`,Mod:([e,n],t)=>{if(e===null||n===null)throw new Error("Could not compile `Mod`: missing argument");return O(n)&&n.re===1&&!n.isComplex?`np.mod(${t(e)}, ${t(n)})`:ol("Mod",e,n,t)},Remainder:([e,n],t)=>{if(e===null||n===null)throw new Error("Could not compile `Remainder`: missing argument");return ol("Remainder",e,n,t)},Real:"np.real",Imaginary:"np.imag",Argument:(e,n)=>{if(e.length!==1)throw new Error("Could not compile `Argument`: expected one operand");return`np.angle(np.add(${n(e[0])}, 0))`},Conjugate:"np.conj",Sum:(e,n,t)=>Qa("Sum",e,t),Product:(e,n,t)=>Qa("Product",e,t),Mean:(e,n)=>Er("np.mean",e,n),Median:(e,n)=>Er("np.median",e,n),Variance:(e,n)=>Er("np.var",e,n,", ddof=1"),StandardDeviation:(e,n)=>Er("np.std",e,n,", ddof=1"),Covariance:([e,n],t)=>{if(e==null||n==null)throw new Error("Could not compile `Covariance`: expected two collection arguments");return`np.cov(${t(e)}, ${t(n)})[0][1]`},PopulationCovariance:([e,n],t)=>{if(e==null||n==null)throw new Error("Could not compile `PopulationCovariance`: expected two collection arguments");return`np.cov(${t(e)}, ${t(n)}, ddof=0)[0][1]`},Correlation:([e,n],t)=>{if(e==null||n==null)throw new Error("Could not compile `Correlation`: expected two collection arguments");return`np.corrcoef(${t(e)}, ${t(n)})[0][1]`},Dot:(e,n)=>{if(e[0]==null||e[1]==null)throw new Error("Could not compile `Dot`: missing argument");if(e.some(t=>p.isTupleOfTuples(t)))throw new Error("Could not compile `Dot`: a tuple of tuples is one point with nested coordinates, which the interpreter does not contract; write a list of points or a matrix.");if(e.some(t=>!hi(t)&&jr(t)))throw new Error("Could not compile `Dot`: a list of points has no single numpy spelling \u2014 `np.dot` contracts it as a matrix, but the interpreter answers one inner product per point.");if(e.some(t=>ml(t)))throw new Error("Could not compile `Dot`: a restricted operand is absent when its condition is false, and `np.dot` has no answer for an absent operand where the interpreter answers the absence marker.");return`np.dot(${n(e[0])}, ${n(e[1])})`},Cross:(e,n)=>{if(e[0]==null||e[1]==null)throw new Error("Could not compile `Cross`: missing argument");if(e.some(t=>ml(t)))throw new Error("Could not compile `Cross`: a restricted operand is absent when its condition is false, and `np.cross` has no answer for an absent operand where the interpreter answers the absence marker.");return`np.cross(${n(e[0])}, ${n(e[1])})`},Norm:(e,n)=>{if(e[0]==null)throw new Error("Could not compile `Norm`: missing argument");if(jr(e[0]))throw new Error("Could not compile `Norm`: a list of points has no numpy spelling \u2014 `np.linalg.norm` flattens it into one scalar, but the interpreter answers one norm per point.");let t=e[0].type.type;if(ct(t)){let a=Bn(W(tn(t)));if(a!==void 0&&si(a))throw new Error("Could not compile `Norm`: a list of points that may hold absent points has no numpy spelling \u2014 `np.linalg.norm` flattens it into one scalar, but the interpreter answers one norm per point.")}let r=Gp(e[0]);if(e.length<2)return Se(n(e[0]),void 0,r);let o=e[1],i=Ip(e[0]);if(wn(o)){let a={Infinity:"np.inf",Frobenius:"'fro'"}[o.string];if(a===void 0)throw new Error(`Could not compile \`Norm\`: the norm type "${o.string}" has no numpy spelling.`);return o.string==="Frobenius"&&i!==2?Se(n(e[0]),void 0,r):i===void 0?e[0].type.matches("number")?`np.abs(${n(e[0])})`:Oo(n(e[0]),a,"matrix",r):(nl(i),Se(n(e[0]),a,r))}let s=i===void 0&&e[0].type.matches("number");if(o.isSame(2)){if(i!==void 0&&i>=3)return Se(n(e[0]),void 0,r);if(s)return`np.abs(${n(e[0])})`;if(i===void 0)return Oo(n(e[0]),n(o),"two",r)}else if(!O(o)&&!o.isInfinity){let a=o.type.type;return s?kr(n(e[0]),n(o),a,()=>"np.abs(_x) if _p > 0 else float('nan')"):i===void 0?Mp(n(e[0]),n(o),a,r):i>=3?kr(n(e[0]),n(o),a,()=>`${Se("_x",void 0,r)} if _p == 2 else float('nan')`):kr(n(e[0]),n(o),a,l=>i===1?`${Se("_x","_p",r)} if _p > 0 else float('nan')`:Al(l,r))}if(O(o)&&!(o.re>0))throw new Error("Could not compile `Norm`: the interpreter defines norms only for a positive order, but `np.linalg.norm` answers a value for this order.");if(i===2&&O(o)&&!o.isSame(1)&&!o.isSame(2)&&!(o.isInfinity&&o.isPositive===!0))throw new Error("Could not compile `Norm`: the interpreter defines matrix norms only for orders 1, 2 and +Infinity \u2014 `np.linalg.norm` would raise or diverge for this order.");if(i===void 0){if(s)return`np.abs(${n(e[0])})`;let a=o.isSame(1)||o.isInfinity===!0&&o.isPositive===!0;return Oo(n(e[0]),n(o),a?"matrix":"vector",r)}return nl(i),Se(n(e[0]),n(o),r)},Determinant:"np.linalg.det",Inverse:"np.linalg.inv",Transpose:(e,n)=>ll(e,n),MatrixMultiply:"np.matmul",ConjugateTranspose:(e,n)=>ll(e,n,"np.conjugate"),Diagonal:"np.diag",MatrixPower:"np.linalg.matrix_power",Rank:(e,n)=>{if(e[0]==null)throw new Error("Could not compile `Rank`: missing argument");let t=Wr(e[0]);if(t!==void 0)throw new Error(`Could not compile \`Rank\`: the operand ${t}.`);return`np.ndim(${n(e[0])})`},RowReduce:(e,n)=>`_ce_rref(${n(e[0])})`,Equal:(e,n,t)=>Ja("Equal",e,n,t),NotEqual:(e,n,t)=>Ja("NotEqual",e,n,t),Less:(e,n)=>zr("np.less",e,n,"Less"),LessEqual:(e,n)=>zr("np.less_equal",e,n,"LessEqual"),Greater:(e,n)=>zr("np.greater",e,n,"Greater"),GreaterEqual:(e,n)=>zr("np.greater_equal",e,n,"GreaterEqual"),And:(e,n)=>cl("And","np.logical_and",e,n),Or:(e,n)=>cl("Or","np.logical_or",e,n),Not:(e,n)=>{if(e.length!==1)throw new Error("Could not compile `Not`: expected one operand");return Kl("Not",e,"tensor<boolean>"),`np.logical_not(${n(e[0])})`},If:(e,n,t)=>{if(e.length!==3)throw new Error("Could not compile `If`: wrong number of arguments");return bn(e[1])||bn(e[2])?nu(e,t,p.cseParentNode()):hl(e[0],n(e[1],1),n(e[2],2),r=>n(r),t,Uo([e[1],e[2]],t))},When:(e,n,t)=>{if(e.length!==2)throw new Error("Could not compile `When`: expected exactly 2 arguments (expr, cond)");if(p.assertScalarCondition(e[1],t),E(e[1],"True"))return`(${n(e[0],0)})`;let r=Uo([e[0]],t);if(E(e[1],"False"))return r;let o=p.conditionDecidability(e[1],t.bindExpr!==void 0,t);if(o===null||!eu(o)){let m=n(e[1]);return`((${n(e[0],0)}) if (${m}) else ${r})`}let i=o.test.kind==="connective",{expr:s,negate:a}=i?{expr:e[1],negate:!1}:p.peelNegations(e[1]),l=i?p.kleeneCondition(o,t,On):n(s),u=n(e[0],0),f=m=>`((${u}) if (${kt(m)} and ${a?`not ${m}`:m}) else ${r})`;if(Lr.test(l))return f(l);let c=p.tempVar(t);return`(lambda ${c}: ${f(c)})(${l})`},Which:(e,n,t)=>{if(e.length<2||e.length%2!==0)throw new Error("Could not compile `Which`: expected condition/value pairs");for(let i=0;i<e.length;i+=2)p.assertScalarCondition(e[i],t);let r=Uo(e.filter((i,s)=>s%2===1),t),o=i=>{if(i>=e.length)return r;let s=e[i],a=e[i+1];return E(s,"True")?`(${n(a,i+1)})`:hl(s,n(a,i+1),o(i+2),l=>i===0?n(l):n(l,i),t,r)};return o(0)},Match:()=>{throw new Error("Could not compile `Match`: pattern matching is not supported by the Python compile target in v1.")},Loop:(e,n,t)=>kl(e,t,p.cseParentNode()),Comprehension:(e,n,t)=>Fp(e,t,p.cseParentNode()),Erf:"scipy.special.erf",Erfc:"scipy.special.erfc",Gamma:(e,n)=>{let t=e[0];if(t==null)throw new Error("Could not compile `Gamma`: no argument");return e.length<2?`scipy.special.gamma(${n(t)})`:gl(e,n,!1)},GammaLn:([e],n,t)=>{if(e===null)throw new Error("Could not compile `GammaLn`: no argument");let r="Could not compile `GammaLn`: scipy.special.loggamma takes another branch than the interpreter off the real axis; the compiled value would differ",o=()=>new gt({code:"non-real-operand",kind:"capability",message:`${r}.`});if(p.isProvablyNonReal(e))throw o();let i=e.isCollection===!0||e.type.matches("collection<any>");if(i?e.type.matches("collection<real>"):!p.isComplexValued(e))return`scipy.special.gammaln(${n(e)})`;if(!p.runtimeRealGuards)throw o();let s=`(_ for _ in ()).throw(ValueError('${r}'))`,a=p.tempVar(t);return i?`(lambda ${a}: scipy.special.gammaln(_ce_creal_elems(${a})) if np.all(np.isreal(${a})) else ${s})(${n(e)})`:`(lambda ${a}: scipy.special.gammaln(_ce_creal(${a})) if _ce_cisreal(${a}) else ${s})(${n(e)})`},Factorial:([e],n)=>{if(e===null)throw new Error("Could not compile `Factorial`: no argument");return`scipy.special.gamma((${n(e)}) + 1)`},GammaRegularized:(e,n)=>gl(e,n,!0),BetaRegularized:([e,n,t],r)=>{if(e===null||n===null||t===null)throw new Error("Could not compile `BetaRegularized`: missing argument");return`scipy.special.betainc(${r(n)}, ${r(t)}, ${r(e)})`},List:(e,n)=>`[${e.map(t=>n(t)).join(", ")}]`,Matrix:(e,n)=>`np.array(${n(e[0])})`,Tuple:(e,n)=>{let t=e.map(r=>n(r));return t.length===1?`(${t[0]},)`:`(${t.join(", ")})`},Sequence:(e,n)=>`np.array([${e.map(t=>n(t)).join(", ")}])`,Range:(e,n)=>{if(e.length===0)return"[]";if(e.some(o=>o!=null&&Wi(o)))throw new Error("Could not compile `Range`: a non-finite bound does not materialize.");let t=e.length===1?"1":n(e[0]),r=e.length===1?n(e[0]):n(e[1]);return e.length<=2?`(lambda _a, _b: (lambda _s: [float(_a + _s * _i) for _i in range(${qo("_a","_b","_s")})])(1 if _b >= _a else -1))(${t}, ${r})`:`(lambda _a, _b, _s: [] if _s == 0 else [float(_a + _s * _i) for _i in range(${qo("_a","_b","_s")})])(${t}, ${r}, ${n(e[2])})`},Function:(e,n,t)=>{if(e[0]==null)throw new Error("Could not compile `Function`: missing body");let r=e[0];for(;_(r,"Block")&&r.nops===1;)r=r.ops[0];if(_(r,"Block"))throw new Error("Could not compile `Function`: a multi-statement (Block) body has no Python lambda form.");p.assertNoDestructuringParams(e.slice(1)),p.assertNoRestParams(e.slice(1));let o=e.slice(1).map(a=>Gn(dt(a)||"_")),i={...t,localFunctions:t.lexicalFunctions??t.localFunctions},s=p.compile(r.canonical,{...i,var:a=>o.includes(a)?a:t.var(a),...p.withBoundScope(i,o)});return`(lambda ${o.join(", ")}: ${s})`},Length:(e,n)=>`len(${V("Length",e[0],n)})`,Count:(e,n)=>{if(e.length!==1)throw new Error("Could not compile `Count`: only the single-argument cardinality form compiles; the value and predicate forms (`Count(xs, v)`, `Count(xs, p)`) are not supported.");return`len(${V("Count",e[0],n)})`},IsEmpty:(e,n)=>`(len(${V("IsEmpty",e[0],n)}) == 0)`,At:(e,n)=>{let t=e[0],r=e[1];if(t==null||r==null||e.length!==2)throw new Error("Could not compile `At`: only the single-index form compiles.");if(Ut(t))throw new Error(`Could not compile \`At\`: the first operand may be text at run time (type \`${t.type.toString()}\`), and Python has no stdlib grapheme segmentation. The interpreter evaluates it.`);if(!(!t.type.matches("string")&&(t.type.matches("list<any>")||t.type.matches("indexed_collection<any>")))){if(!Ql(t))throw new Error("Could not compile `At`: operand is not an indexed collection (list/vector/range).");if(!Dp(r))throw new Error(`Could not compile \`At\`: the first operand is not provably an indexed collection (type \`${t.type.toString()}\`) and the index is not provably numeric, so a keyed (dictionary) access cannot be ruled out.`)}let{absent:i,outOfRange:s}=Jl(t,O(r)&&Number.isInteger(r.re)?r.re:void 0);return`(lambda _l, _i: (${i} if _l is None else float('nan')) if not isinstance(_l, (list, tuple, np.ndarray)) else (_l[int(_i) - 1] if 1 <= _i <= len(_l) else (_l[int(_i)] if -len(_l) <= _i <= -1 else ${s})))(${n(t)}, ${n(r)})`},First:(e,n)=>Cr("First",e[0],0,n),Second:(e,n)=>Cr("Second",e[0],1,n),Third:(e,n)=>Cr("Third",e[0],2,n),Last:(e,n)=>Cr("Last",e[0],-1,n),Rest:(e,n)=>`${V("Rest",e[0],n)}[1:]`,Most:(e,n)=>`${V("Most",e[0],n)}[:-1]`,Take:(e,n)=>{let t=V("Take",e[0],n);if(e[1]==null)throw new Error("Could not compile `Take`: missing count");return Xa("Take",t,e[1],n)},Drop:(e,n)=>{let t=V("Drop",e[0],n);if(e[1]==null)throw new Error("Could not compile `Drop`: missing count");return Xa("Drop",t,e[1],n)},Reverse:(e,n)=>`${V("Reverse",e[0],n)}[::-1]`,Sort:(e,n)=>{if(e.length>1)throw new Error("Could not compile `Sort`: a custom comparator is not supported; only the default ascending numeric sort is.");return`sorted(${V("Sort",e[0],n)})`},Ordering:(e,n)=>{if(e.length>1)throw new Error("Could not compile `Ordering`: a custom ordering function is not supported.");return`(lambda _l: [_i + 1 for _i in sorted(range(len(_l)), key=lambda _j: _l[_j])])(${V("Ordering",e[0],n)})`},Join:(e,n)=>pl("Join",e,n),ListJoin:(e,n)=>pl("ListJoin",e,n),Append:(e,n)=>{let t=V("Append",e[0],n),r=e.slice(1).map(o=>n(o));return`[*${t}${r.map(o=>`, ${o}`).join("")}]`},ReplaceAt:(e,n)=>{if(e[1]==null||e[2]==null)throw new Error("Could not compile `ReplaceAt`: missing argument");if(jo.has(e)){let r=[],o=e;for(;r.unshift(n(o[1]),n(o[2])),!!_(o[0],"ReplaceAt");)o=o[0].ops;return`_ce_replaceat_inplace(${n(o[0])}, ${r.join(", ")})`}return`_ce_replaceat(${V("ReplaceAt",e[0],n)}, ${n(e[1])}, ${n(e[2])})`},DeleteAt:(e,n)=>{if(e[1]==null)throw new Error("Could not compile `DeleteAt`: missing index");return`_ce_deleteat(${V("DeleteAt",e[0],n)}, ${n(e[1])})`},Insert:(e,n)=>{if(e[1]==null||e[2]==null)throw new Error("Could not compile `Insert`: missing argument");return`_ce_insert(${V("Insert",e[0],n)}, ${n(e[1])}, ${n(e[2])})`},IndexOf:(e,n)=>{let t=V("IndexOf",e[0],n);if(e[1]==null)throw new Error("Could not compile `IndexOf`: missing value");return Mo("IndexOf",e[1],e[0],n,r=>`_ce_indexof(${t}, ${r})`)},Contains:(e,n)=>{e[0]&&Bt("Contains",e[0]);let t=V("Contains",e[0],n);if(e[1]==null)throw new Error("Could not compile `Contains`: missing value");return Mo("Contains",e[1],e[0],n,r=>`(_ce_indexof(${t}, ${r}) > 0)`)},Unique:(e,n)=>(e[0]&&Bt("Unique",e[0]),`list(dict.fromkeys(${V("Unique",e[0],n)}))`),Zip:(e,n)=>e.length===0?"[]":(p.assertLockstepSourcesPure("Zip",e,1),`[list(_t) for _t in zip(${e.map((r,o)=>V("Zip",r,n,o+1)).join(", ")})]`),Linspace:(e,n)=>{if(e[0]==null)throw new Error("Could not compile `Linspace`: missing argument");let t=e[1]==null?"1":n(e[0]),r=e[1]==null?n(e[0]):n(e[1]),o=e[2]==null?"50":n(e[2]);return`[float(_v) for _v in np.linspace(${t}, ${r}, max(0, int(${o})))]`},Map:(e,n)=>{if(e[1]==null)throw new Error("Could not compile `Map`: missing source collection");if(e.length>2){let o=e.slice(1);p.assertLockstepSourcesPure("Map",o,2);let i=o.map((a,l)=>V("Map",a,n,l+2));if(E(e[0])&&p.isBinaryInfixValueOperator(e[0].symbol)&&o.length!==2)throw new Error(`Could not compile \`Map\`: the operator symbol '${e[0].symbol}' used as the mapping compiles to a two-argument function, and ${o.length} collections supply ${o.length} arguments per call. The interpreter evaluates it instead.`);return`(lambda _f, *_ls: [_f(*_t) for _t in zip(*_ls)])(${pe("Map",e[0],n,p.zipCallbackArgTypes("Map",o,2))}, ${i.join(", ")})`}let t=V("Map",e[1],n),r=pe("Map",e[0],n,[p.collectionElementTypeOf(e[1])]);return`(lambda _f: [_f(_x) for _x in ${t}])(${r})`},Filter:(e,n)=>{let t=V("Filter",e[0],n);if(e[1]==null)throw new Error("Could not compile `Filter`: missing predicate");let r=pe("Filter",e[1],n,[p.collectionElementTypeOf(e[0])]);return`(lambda _f: [_x for _x in ${t} if _f(_x)])(${r})`},CountIf:(e,n)=>{let t=V("CountIf",e[0],n);if(e[1]==null)throw new Error("Could not compile `CountIf`: missing predicate");let r=pe("CountIf",e[1],n,[p.collectionElementTypeOf(e[0])]);return`(lambda _f: sum(1 for _x in ${t} if _f(_x)))(${r})`},Find:(e,n)=>{let t=V("Find",e[0],n);if(e[1]==null)throw new Error("Could not compile `Find`: missing predicate");let r=pe("Find",e[1],n,[p.collectionElementTypeOf(e[0])]);return`(lambda _f: next((_x for _x in ${t} if _f(_x)), float('nan')))(${r})`},IndexWhere:(e,n)=>{let t=V("IndexWhere",e[0],n);if(e[1]==null)throw new Error("Could not compile `IndexWhere`: missing predicate");let r=pe("IndexWhere",e[1],n,[p.collectionElementTypeOf(e[0])]);return`(lambda _f: next((_i + 1 for _i, _x in enumerate(${t}) if _f(_x)), 0))(${r})`},Position:(e,n)=>{let t=V("Position",e[0],n);if(e[1]==null)throw new Error("Could not compile `Position`: missing predicate");let r=pe("Position",e[1],n,[p.collectionElementTypeOf(e[0])]);return`(lambda _f: [_i + 1 for _i, _x in enumerate(${t}) if _f(_x)])(${r})`},Any:(e,n)=>{let t=V("Any",e[0],n);if(e[1]==null)throw new Error("Could not compile `Any`: only the predicate form compiles.");Zr("Any",e[0],e[1]);let r=pe("Any",e[1],n,[p.collectionElementTypeOf(e[0])]);return`(lambda _f: any(_f(_x) for _x in ${t}))(${r})`},All:(e,n)=>{let t=V("All",e[0],n);if(e[1]==null)throw new Error("Could not compile `All`: only the predicate form compiles.");Zr("All",e[0],e[1]);let r=pe("All",e[1],n,[p.collectionElementTypeOf(e[0])]);return`(lambda _f: all(_f(_x) for _x in ${t}))(${r})`},TakeWhile:(e,n)=>{let t=V("TakeWhile",e[0],n);if(e[1]==null)throw new Error("Could not compile `TakeWhile`: missing predicate");return`(lambda _f, _l: _l[:next((_i for _i, _x in enumerate(_l) if not _f(_x)), len(_l))])(${pe("TakeWhile",e[1],n,[p.collectionElementTypeOf(e[0])])}, ${t})`},DropWhile:(e,n)=>{let t=V("DropWhile",e[0],n);if(e[1]==null)throw new Error("Could not compile `DropWhile`: missing predicate");return`(lambda _f, _l: _l[next((_i for _i, _x in enumerate(_l) if not _f(_x)), len(_l)):])(${pe("DropWhile",e[1],n,[p.collectionElementTypeOf(e[0])])}, ${t})`},FlatMap:(e,n)=>{let t=V("FlatMap",e[0],n);if(e[1]==null)throw new Error("Could not compile `FlatMap`: missing mapping function");return`(lambda _f, _l: [_y for _x in _l for _y in (lambda _r: _r if isinstance(_r, list) else [_r])(_f(_x))])(${pe("FlatMap",e[1],n,[p.collectionElementTypeOf(e[0])])}, ${t})`},Reduce:(e,n,t)=>{let r=V("Reduce",e[0],n),o=e[1],i=e[2];if(o==null)throw new Error("Could not compile `Reduce`: missing combiner");let s=E(o)&&qr(o,t)?{Add:"sum(_l)",Multiply:'__import__("math").prod(_l)',Min:"min(_l)",Max:"max(_l)"}[o.symbol]:void 0;if(s!==void 0)return ul("Reduce",e[0]),i!=null?`(lambda _l: ${{"sum(_l)":`sum(_l, ${n(i)})`,'__import__("math").prod(_l)':`__import__("math").prod(_l, start=${n(i)})`,"min(_l)":`min([${n(i)}, *_l])`,"max(_l)":`max([${n(i)}, *_l])`}[s]})(${r})`:`(lambda _l: float('nan') if len(_l) == 0 else ${s})(${r})`;if(_(o,"Function")&&o.nops-1===2||E(o)){if(i==null)throw new Error("Could not compile `Reduce`: a custom combiner compiles only with an explicit initial value.");Vr("Reduce",o,i);let a=ki(o);for(let f of a??[])jo.add(f);let l;try{l=pe("Reduce",o,n,[p.foldAccumulatorArgType(e[0],o,i),p.collectionElementTypeOf(e[0])])}finally{for(let f of a??[])jo.delete(f)}let u=a!==void 0?`_ce_owned_copy(${n(i)})`:n(i);return`__import__('functools').reduce(${l}, ${r}, ${u})`}throw new Error("Could not compile `Reduce`: the combiner has no compiled function form on the Python target.")},Scan:(e,n,t)=>{let r=V("Scan",e[0],n),o=e[1],i=e[2];if(o==null)throw new Error("Could not compile `Scan`: missing combiner");let s=E(o)&&qr(o,t)?{Add:"(lambda _a, _b: _a + _b)",Multiply:"(lambda _a, _b: _a * _b)",Min:"(lambda _a, _b: min(_a, _b))",Max:"(lambda _a, _b: max(_a, _b))"}[o.symbol]:void 0;s!==void 0?ul("Scan",e[0]):Vr("Scan",o,i);let a=s??(_(o,"Function")&&o.nops-1===2||E(o)?pe("Scan",o,n,[p.foldAccumulatorArgType(e[0],o,i),p.collectionElementTypeOf(e[0])]):void 0);if(a===void 0)throw new Error("Could not compile `Scan`: the combiner has no compiled function form on the Python target.");return i!=null?`list(__import__('itertools').accumulate(${r}, ${a}, initial=${n(i)}))[1:]`:`list(__import__('itertools').accumulate(${r}, ${a}))`},Tabulate:(e,n)=>{if(e[0]==null||e[1]==null)throw new Error("Could not compile `Tabulate`: missing argument");if(e.length>3)throw new Error("Could not compile `Tabulate`: only the 1-D and 2-D forms compile.");for(let i=1;i<e.length;i++){let s=Y(e[i]);if(s!==void 0&&Math.round(s)<=0)throw new Error(`Could not compile \`Tabulate\`: a statically non-positive dimension (${s}) gives a constant empty list.`)}let t=pe("Tabulate",e[0],n,["integer","integer"]),r=yr(e[1],n);return e.length===2?`(lambda _f: [_f(_i + 1) for _i in range(${r})])(${t})`:`(lambda _f: [[_f(_i + 1, _j + 1) for _j in range(${yr(e[2],n)})] for _i in range(${r})])(${t})`},Fill:(e,n)=>{let t=e[1];if(e[0]==null||t==null)throw new Error("Could not compile `Fill`: missing argument");if(!_(t)||t.ops.length!==2)throw new Error("Could not compile `Fill`: only the (function, (rows, cols)) form compiles.");let r=pe("Fill",e[0],n,["integer","integer"]),o=yr(t.ops[0],n);return`(lambda _f: [[_f(_i + 1, _j + 1) for _j in range(${yr(t.ops[1],n)})] for _i in range(${o})])(${r})`},Boole:(e,n)=>{if(e[0]==null)throw new Error("Could not compile `Boole`: missing argument");if(!p.isBooleanValued(e[0]))throw new Error("Could not compile `Boole`: the argument is not provably boolean.");return`(1 if ${n(e[0])} else 0)`},KroneckerDelta:(e,n)=>{if(e.length===0||e[0]==null)throw new Error("Could not compile `KroneckerDelta`: missing argument");return e.length===1?`(1 if ${n(e[0])} == 0 else 0)`:`(lambda *_v: 1 if _v[0] is not None and all(_x == _v[0] for _x in _v) else 0)(${e.map(t=>n(t)).join(", ")})`},Element:(e,n)=>{if(e[0]==null||e[1]==null)throw new Error("Could not compile `Element`: missing argument");Bt("Element",e[1]);let t=V("Element",e[1],n);return Mo("Element",e[0],e[1],n,r=>`(_ce_indexof(${t}, ${r}) > 0)`)},Identity:(e,n,t)=>{if(e[0]==null)throw new Error("Could not compile `Identity`: missing argument");return Pl(e[0],n(e[0]),t)},Apply:(e,n)=>{if(e[0]==null)throw new Error("Could not compile `Apply`: missing function");return`(${n(e[0])})(${e.slice(1).map(t=>n(t)).join(", ")})`},Flatten:(e,n)=>{if(e[1]!=null)throw new Error("Could not compile `Flatten`: an explicit depth is not supported on the Python target.");return`(lambda _l: (lambda _f: _f(_f, _l))(lambda _f, _x: [_y for _e in _x for _y in (_f(_f, _e) if isinstance(_e, list) else [_e])]))(${V("Flatten",e[0],n)})`},Shape:(e,n)=>{if(e[0]==null)throw new Error("Could not compile `Shape`: missing argument");let t=Wr(e[0]);if(t!==void 0)throw new Error(`Could not compile \`Shape\`: the operand ${t}.`);return`list(np.shape(${n(e[0])}))`},Reshape:(e,n)=>{let t=V("Reshape",e[0],n),r=e[1];if(r==null)throw new Error("Could not compile `Reshape`: missing shape");if(!_(r)||r.ops.length===0||r.ops.length>2)throw new Error("Could not compile `Reshape`: only a 1-D or 2-D target shape compiles.");return`np.resize(np.asarray(${t}), (${r.ops.map(o=>n(o)).join(", ")},)).tolist()`},Trace:(e,n)=>{if(e.length>1)throw new Error("Could not compile `Trace`: explicit axes do not compile.");return`${p.linearAlgebraLane([e[0]])==="complex"?"complex":"float"}(np.trace(np.asarray(${V("Trace",e[0],n)})))`}};Tr.ApplyWhole=Tr.Apply;var _l=["strict","complex","auto"],Zp=new Set(["Erf","Erfc","Lb","Log2","Log10","Exp2","Determinant","Inverse","MatrixMultiply","MatrixPower","Cross","Diagonal"]),Kp=new Set(["GammaRegularized"]);function Xp(e,n){return p.REAL_ONLY_BY_DEFINITION.has(e)||Kp.has(e)?!0:p.stringHelperIsRealOnly(e,n)&&!Zp.has(e)}function bl(e,n,t){let r=[];for(let o of n){let i=e.engine.symbol(o).type?.type;i===void 0||!Hi(i)||r.push([t(o),`"${o}" (type \`${p.declaredTypeText(i)}\`) is compiled as a Python sequence, and compiled code does not accept a string for it: it would read the string as code points, not as characters. Pass a list, or declare the parameter \`string\` to compile text.`])}return r}var vl=e=>`__import__("builtins").isinstance(${e}, __import__("builtins").str)`,yl=e=>`__import__("builtins").TypeError(${JSON.stringify(e)})`,xl=class{includeImports;useScipy;constructor(n={}){this.includeImports=n.includeImports??!1,this.useScipy=n.useScipy??!1}getOperators(){return Do}getFunctions(){return Tr}createTarget(n={}){return{language:"python",isRealOnlyLowering:Xp,supportedModes:_l,complexLift:t=>`_ce_cplx(${t})`,complexIsReal:t=>`_ce_cisreal(${t})`,complexReal:t=>`_ce_creal(${t})`,complexRealElements:t=>`_ce_creal_elems(${t})`,realGuard:(t,r,o)=>t.length===0?`(${r})`:`((${r}) if (${t.join(" and ")}) else ${o==="boolean"?"False":"float('nan')"})`,chainOp:"and",bindExpr:(t,r)=>`(lambda ${t.map(o=>o[0]).join(", ")}: ${r})(${t.map(o=>o[1]).join(", ")})`,cseBind:(t,r)=>`[${r} ${t.map(([o,i])=>`for ${o} in [${i}]`).join(" ")}][0]`,shareSymbolSquares:!1,valueTailSelections:!1,broadcastUnary:(t,r,o,i)=>{let s=p.tempVar(i);return`[${o.element(s)} for ${s} in ${o.collection()}]`},collectionAwareHeads:Bp,operators:t=>Do[t],functions:t=>Tr[t],var:t=>Go[t],mangleId:Za,constant:t=>Go[t]??wl[t],complex:(t,r)=>`complex(${tl(t)}, ${tl(r)})`,string:t=>JSON.stringify(t),number:t=>isFinite(t)?t.toString():t===1/0?"np.inf":t===-1/0?"-np.inf":"np.nan",indent:0,ws:t=>t??"",preamble:"",absence:{numeric:{make:()=>"math.nan",isAbsent:t=>`(lambda _c: _c is None or math.isnan(_c))(${t})`,coalesce:(t,r)=>`(lambda _c: ${r} if (_c is None or math.isnan(_c)) else _c)(${t})`,readInput:t=>Hp.test(t)?t:Lr.test(t)?`(float('nan') if ${t} is None else ${t})`:`(lambda _c: float('nan') if _c is None else _c)(${t})`},object:{nullLiteral:"None",isAbsent:t=>`(${t} is None)`,coalesce:(t,r)=>`(lambda _c: ${r} if _c is None else _c)(${t})`},raise:t=>`(_ for _ in ()).throw(ValueError(${t}))`,writtenSymbol:"numeric"},bareStatementBlocks:!0,declare:t=>"",block:t=>{if(t.length===0)return"";let r=t.length-1;if(/^(for|while)\b/.test(t[r]))t.push("return None");else{if(/^if\b/.test(t[r]))throw new Error("Could not compile `Block`: the block's value statement is a selection whose branches are statements, which Python writes as an `if:`/`else:` block \u2014 a block cannot be returned, and its value is not `None`. Give the block a VALUE statement after the selection.");if(!/^return\b/.test(t[r])&&!/\nreturn\b[^\n]*$/.test(t[r])){let o=/^([^\s()[\]{}'"=,:]+) = /.exec(t[r]);o!==null?t.push(`return ${o[1]}`):t[r]=`return ${t[r]}`}}return t.join(`
`)},naming:{counter:0,usedNames:new Set},...n}}makeVarResolver(n,t){return r=>{if(t?.includes(r))return r;if(n&&Object.hasOwn(n,r)){let o=n[r];return typeof o!="string"?JSON.stringify(o):(/^[A-Za-z_]\w*$/.test(o)&&Za(o),o)}return Go[r]}}compile(n,t={}){t.storage!==void 0&&Wn(t.storage,[n],this.createTarget(),{vars:t.vars,functions:t.functions});let r=t.mode;try{return $n(n,t.vars,()=>Gi(r,_l,o=>this.compileOrThrow(n,o===r?t:{...t,mode:o})))}catch(o){if(rn(o,n.engine._deadlineFrame),t.fallback!==!0)throw o;let i=o.message;return console.warn(`Compilation fallback for "${n.operator}" (target: python): ${i}`),p.buildInterpreterFallback(n,i,"python",this.createTarget(),t.vars?new Set(Object.keys(t.vars)):void 0,Ge(o,i))}}compileOrThrow(n,t={},r){let o=n;n=mt(n),n=ht(n,{iterationBudget:t.iterationBudget,readsLiveSource:d=>typeof t.vars?.[d]=="string"});let i=t.vars,s=this.makeVarResolver(i),a=new Map,l=this.createTarget({var:d=>a.get(d)??s(d),inputWrites:new Set,inputLocals:a,varsKeys:i?new Set(Object.keys(i)):void 0,constantFold:t.constantFold,mode:t.mode,naming:p.newNamingContext(n,[t.preamble,...i?Object.values(i):[]])});p.openCseSession(n,l,{enabled:t.cse,isStringVar:d=>i!==void 0&&typeof i[d]=="string",isVarsKey:d=>i!==void 0&&Object.prototype.hasOwnProperty.call(i,d)});for(let d of r??[])a.set(d,p.tempVar(l));Yl("compile()",n,!0);let u=el(n,l);if(r===void 0&&l.inputWrites.size>0)return this.compileOrThrow(o,t,[...l.inputWrites]);let f=[...a].filter(([,d])=>!sl(u,d)).map(([d,h])=>`${h} = ${s(d)??d}`);f.length>0&&(u=[...f,u].join(`
`)),u=vr(u,{callerSources:Ka(i),hostNames:()=>p.analyzeReferences(n,l,i?new Set(Object.keys(i)):void 0).freeSymbols}).body;let c=il(u);St(c,n.symbols.filter(d=>typeof i?.[d]!="string")),this.includeImports&&(c=this.withImports(c));let m={target:"python",success:!0,code:c};return p.withReferences(m,n,l,i?new Set(Object.keys(i)):void 0)}withImports(n){let t=`import numpy as np
`;return t+=`import cmath
`,this.useScipy&&(t+=`import scipy.special
`),/\bmath\./.test(n)&&(t+=`import math
`),`${t}
${n}`}compileToSource(n,t={}){Wo("compileToSource()",n);let r=t.vars,o=this.createTarget({var:this.makeVarResolver(r),varsKeys:r?new Set(Object.keys(r)):void 0,constantFold:t.constantFold,mode:t.mode,naming:p.newNamingContext(n,[t.preamble,...r?Object.values(r):[]])}),i=$n(n,r,()=>(p.openCseSession(n,o,{enabled:t.cse,isStringVar:a=>r!==void 0&&typeof r[a]=="string",isVarsKey:a=>r!==void 0&&Object.prototype.hasOwnProperty.call(r,a)}),p.compileCseRoot(n,o)));Op("compileToSource()",i);let s=il(vr(i,{callerSources:Ka(r),hostNames:()=>p.analyzeReferences(n,o,r?new Set(Object.keys(r)):void 0).freeSymbols}).body);return St(s,n.symbols.filter(a=>typeof r?.[a]!="string")),this.includeImports?this.withImports(s):s}compileFunction(n,t,r,o,i){jp("compileFunction()",n),Gn(t);for(let m of r)Gn(m);let s=this.createTarget({var:this.makeVarResolver(void 0,r),constantFold:i?.constantFold,naming:p.newNamingContext(n,void 0,r),inputWrites:new Set});p.openCseSession(n,s,{enabled:i?.cse});let a=el(n,s);Up("compileFunction()",n,a);let l=vr(a,{outside:[t,...r],hostNames:()=>[t,...p.analyzeReferences(n,s).freeSymbols.filter(m=>!r.includes(m))]});a=l.body;let u=[...s.inputWrites].filter(m=>!r.includes(m)&&!sl(a,l.name(m)));if(u.length>0){if(r.includes("__import__")||n.symbols.includes("__import__"))throw new Error('"__import__" cannot be used as a symbol or parameter name in a Python function that assigns a module global. Rename it before compiling to Python (fail closed).');a=[...u.map(m=>`${l.name(m)} = __import__("builtins").globals().get(${JSON.stringify(l.name(m).normalize("NFKC"))})`),/^return\b/.test(a)||a.includes(`
`)?a:`return ${a}`].join(`
`)}let f=r.map(l.name).join(", "),c="";this.includeImports&&(c+=`import numpy as np
`,c+=`import cmath
`,this.useScipy&&(c+=`import scipy.special
`),/\bmath\./.test(a)&&(c+=`import math
`),c+=`
`),(a.includes("_ce_cplx(")||a.includes("_ce_cisreal(")||a.includes("_ce_creal(")||a.includes("_ce_creal_elems("))&&(c+=`${Tl}
`),a.includes("_ce_rref(")&&(c+=`${Fl}
`),a.includes("_ce_bcast(")&&(c+=`${Ll}
`),a.includes("_ce_eqcoll(")&&(c+=`${Il}
`),a.includes("_ce_indexof(")&&(c+=`${Nl}
`),a.includes("_ce_ord(")&&(c+=`${Dl}
`),(a.includes("_ce_smoothstep(")||a.includes("_ce_bcast('smoothstep'"))&&(c+=`${Ol}
`),a.includes("_ce_round(")&&(c+=`${jl}
`),(a.includes("_ce_int_operands(")||a.includes("_ce_remainder("))&&(c+=`${ql}
`),a.includes("_ce_pow(")&&(c+=`${Ml()}
`),/_ce_(replaceat|replaceat_inplace|owned_copy|deleteat|insert)\(/.test(a)&&(c+=`${Vl}
`),a.includes("_ce_predicate(")&&(c+=`${Hl}
`),a.includes("_ce_ugamma(")&&(c+=`${Wl}
`),c+=`def ${l.name(t)}(${f}):
`,o&&(c+=`    r"""${o}"""
`);for(let[m,d]of bl(n,r,l.name))c+=`    if ${vl(m)}:
        raise ${yl(d)}
`;if(a.includes(`
`)){let m=a.split(`
`).map(d=>`    ${d}`).join(`
`);c+=`${m}
`}else/^return\b/.test(a)?c+=`    ${a}
`:c+=`    return ${a}
`;return St(c,[t,...r,...n.symbols].map(l.name)),c}compileVectorized(n,t,r,o,i){Gn(t);let a=this.compileFunction(n,`_${t}_scalar`,r,o,i)+`
`;return a+=`# Vectorized version
`,a+=`${t} = np.vectorize(_${t}_scalar)
`,St(a,[t]),a}compileLambda(n,t,r){Wo("compileLambda()",n);for(let m of t)Gn(m);let o=this.createTarget({var:this.makeVarResolver(void 0,t),constantFold:r?.constantFold,naming:p.newNamingContext(n,void 0,t)});p.openCseSession(n,o,{enabled:r?.cse});let i,s=Mn;Mn=!0;try{i=p.compileCseRoot(n,o)}finally{Mn=s}if(i.includes(`
`))throw new Error("Could not compile `compileLambda`: a multi-statement construct (loop-form Sum/Product, Loop, or Block) cannot be a Python lambda body \u2014 use compileFunction instead.");for(let[m,d]of[["_ce_bcast(","ElementMax/ElementMin/Clamp over a collection operand"],["_ce_rref(","RowReduce"],["_ce_indexof(","IndexOf"],["_ce_eqcoll(","equality over a collection or tuple operand"],["_ce_ord(","an ordering over a collection operand"],["_ce_pow(","a power whose base may be negative"],["_ce_round(","Round"],["_ce_predicate(","a predicate whose result is not provably a boolean"],["_ce_ugamma(","an upper incomplete gamma whose order is not known to be positive"],["_ce_cplx(","the complex lift of the complex modes"],["_ce_cisreal(","the realness test of the complex modes"],["_ce_creal(","the real projection of the complex modes"],["_ce_creal_elems(","the element-wise real projection of the complex modes"]])if(i.includes(m))throw new Error(`Could not compile \`compileLambda\`: ${d} needs the module-level ${m.slice(0,-1)} helper, which cannot ride along a bare lambda \u2014 use compileFunction instead.`);let a=vr(i,{outside:t,hostNames:()=>p.analyzeReferences(n,o).freeSymbols.filter(m=>!t.includes(m))}),l=t.map(a.name).join(", "),u=a.body,f=bl(n,t,a.name);f.length>0&&(u=`${f.map(([m,d])=>`(_ for _ in ()).throw(${yl(d)}) if ${vl(m)} else `).join("")}(${u})`);let c=`lambda ${l}: ${u}`;return St(c,[...t,...n.symbols].map(a.name)),c}};export{ot as a,La as b,Va as c,xl as d};
