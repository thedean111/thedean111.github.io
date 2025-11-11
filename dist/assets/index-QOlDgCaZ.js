(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="180",wp=0,mu=1,Ap=2,hh=1,fh=2,oi=3,pi=0,Zt=1,Vn=2,hi=0,Ds=1,gu=2,_u=3,vu=4,Cp=5,Ji=100,Rp=101,Pp=102,Lp=103,Ip=104,Dp=200,Op=201,Np=202,Up=203,dl=204,hl=205,Fp=206,Bp=207,kp=208,zp=209,Gp=210,Hp=211,Vp=212,Wp=213,Xp=214,fl=0,pl=1,ml=2,ks=3,gl=4,_l=5,vl=6,xl=7,ph=0,jp=1,qp=2,Li=0,mh=1,gh=2,_h=3,Tc=4,vh=5,xh=6,yh=7,xu="attached",Yp="detached",Sh=300,zs=301,Gs=302,yl=303,Sl=304,eo=306,Hs=1e3,Ei=1001,Fa=1002,Xt=1003,bh=1004,vr=1005,hn=1006,Aa=1007,ui=1008,$n=1009,Mh=1010,Th=1011,Cr=1012,Ec=1013,os=1014,Nn=1015,er=1016,wc=1017,Ac=1018,Rr=1020,Eh=35902,wh=35899,Ah=1021,Ch=1022,En=1023,Pr=1026,Lr=1027,Cc=1028,Rc=1029,Rh=1030,Pc=1031,Lc=1033,Ca=33776,Ra=33777,Pa=33778,La=33779,bl=35840,Ml=35841,Tl=35842,El=35843,wl=36196,Al=37492,Cl=37496,Rl=37808,Pl=37809,Ll=37810,Il=37811,Dl=37812,Ol=37813,Nl=37814,Ul=37815,Fl=37816,Bl=37817,kl=37818,zl=37819,Gl=37820,Hl=37821,Vl=36492,Wl=36494,Xl=36495,jl=36283,ql=36284,Yl=36285,$l=36286,Ir=2300,Dr=2301,ho=2302,yu=2400,Su=2401,bu=2402,$p=2500,Kp=0,Ph=1,Kl=2,Zp=3200,Jp=3201,Lh=0,Qp=1,Ti="",bt="srgb",qt="srgb-linear",Ba="linear",Je="srgb",fs=7680,Mu=519,em=512,tm=513,nm=514,Ih=515,im=516,sm=517,rm=518,am=519,Zl=35044,Tu="300 es",Xn=2e3,ka=2001;class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eu=1234567;const br=Math.PI/180,Vs=180/Math.PI;function Un(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ge(s,e,t){return Math.max(e,Math.min(t,s))}function Ic(s,e){return(s%e+e)%e}function om(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function lm(s,e,t){return s!==e?(t-s)/(e-s):0}function Mr(s,e,t){return(1-t)*s+t*e}function cm(s,e,t,n){return Mr(s,e,1-Math.exp(-t*n))}function um(s,e=1){return e-Math.abs(Ic(s,e*2)-e)}function dm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function hm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function fm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function pm(s,e){return s+Math.random()*(e-s)}function mm(s){return s*(.5-Math.random())}function gm(s){s!==void 0&&(Eu=s);let e=Eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _m(s){return s*br}function vm(s){return s*Vs}function xm(s){return(s&s-1)===0&&s!==0}function ym(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Sm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bm(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*d,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mm={DEG2RAD:br,RAD2DEG:Vs,generateUUID:Un,clamp:Ge,euclideanModulo:Ic,mapLinear:om,inverseLerp:lm,lerp:Mr,damp:cm,pingpong:um,smoothstep:dm,smootherstep:hm,randInt:fm,randFloat:pm,randFloatSpread:mm,seededRandom:gm,degToRad:_m,radToDeg:vm,isPowerOfTwo:xm,ceilPowerOfTwo:ym,floorPowerOfTwo:Sm,setQuaternionFromProperEuler:bm,normalize:Qe,denormalize:Dn};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let m=1-o;const p=l*h+c*f+u*g+d*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const M=Math.sqrt(x),A=Math.atan2(M,p*v);m=Math.sin(m*A)/M,o=Math.sin(o*A)/M}const y=o*v;if(l=l*m+h*y,c=c*m+f*y,u=u*m+g*y,d=d*m+_*y,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),h=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fo.copy(this).projectOnVector(e),this.sub(fo)}reflect(e){return this.sub(fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new D,wu=new Kn;class Ue{constructor(e,t,n,i,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],y=i[7],M=i[2],A=i[5],w=i[8];return r[0]=a*_+o*v+l*M,r[3]=a*m+o*x+l*A,r[6]=a*p+o*y+l*w,r[1]=c*_+u*v+d*M,r[4]=c*m+u*x+d*A,r[7]=c*p+u*y+d*w,r[2]=h*_+f*v+g*M,r[5]=h*m+f*x+g*A,r[8]=h*p+f*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Ue;function Dh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tm(){const s=Or("canvas");return s.style.display="block",s}const Au={};function Nr(s){s in Au||(Au[s]=!0,console.warn(s))}function Em(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Cu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wm(){const s={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?Ba:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[qt]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:Cu,fromXYZ:Ru,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Cu,fromXYZ:Ru,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),s}const We=wm();function fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class Am{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=Or("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cm=0;class Dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(mo(i[a].image)):r.push(mo(i[a]))}else r=mo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function mo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Am.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;const go=new D;class Ct extends tr{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Ei,i=Ei,r=hn,a=ui,o=En,l=$n,c=Ct.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Un(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Sh;Ct.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,M=(p+1)/2,A=(u+h)/4,w=(d+_)/4,C=(g+m)/4;return x>y&&x>M?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=w/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=C/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=w/r,i=C/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pm extends tr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Ct(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Dc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Pm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Oh extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lm extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Kr.subVectors(this.max,or),ms.subVectors(e.a,or),gs.subVectors(e.b,or),_s.subVectors(e.c,or),_i.subVectors(gs,ms),vi.subVectors(_s,gs),zi.subVectors(ms,_s);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-zi.z,zi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,zi.z,0,-zi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-zi.y,zi.x,0];return!_o(t,ms,gs,_s,Kr)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,ms,gs,_s,Kr))?!1:(Zr.crossVectors(_i,vi),t=[Zr.x,Zr.y,Zr.z],_o(t,ms,gs,_s,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ti=[new D,new D,new D,new D,new D,new D,new D,new D],Pn=new D,$r=new Fn,ms=new D,gs=new D,_s=new D,_i=new D,vi=new D,zi=new D,or=new D,Kr=new D,Zr=new D,Gi=new D;function _o(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Gi.fromArray(s,r);const o=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),u=n.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Im=new Fn,lr=new D,vo=new D;class Bn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Im.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(lr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(vo)),this.expandByPoint(lr.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ni=new D,xo=new D,Jr=new D,xi=new D,yo=new D,Qr=new D,So=new D;class to{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xo.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(xo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=xi.dot(this.direction),l=-xi.dot(Jr),c=xi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(xo).addScaledVector(Jr,h),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),i=ni.dot(ni)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,i,r){yo.subVectors(t,e),Qr.subVectors(n,e),So.crossVectors(yo,Qr);let a=this.direction.dot(So),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const l=o*this.direction.dot(Qr.crossVectors(xi,Qr));if(l<0)return null;const c=o*this.direction.dot(yo.cross(xi));if(c<0||l+c>a)return null;const u=-o*xi.dot(So);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,r,a,o,l,c,u,d,h,f,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,d,h,f,g,_,m)}set(e,t,n,i,r,a,o,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dm,e,Om)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(n,on),yi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(n,on)),yi.normalize(),ea.crossVectors(on,yi),i[0]=yi.x,i[4]=ea.x,i[8]=on.x,i[1]=yi.y,i[5]=ea.y,i[9]=on.y,i[2]=yi.z,i[6]=ea.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],M=n[15],A=i[0],w=i[4],C=i[8],S=i[12],b=i[1],R=i[5],I=i[9],N=i[13],z=i[2],G=i[6],W=i[10],X=i[14],U=i[3],Z=i[7],ie=i[11],ue=i[15];return r[0]=a*A+o*b+l*z+c*U,r[4]=a*w+o*R+l*G+c*Z,r[8]=a*C+o*I+l*W+c*ie,r[12]=a*S+o*N+l*X+c*ue,r[1]=u*A+d*b+h*z+f*U,r[5]=u*w+d*R+h*G+f*Z,r[9]=u*C+d*I+h*W+f*ie,r[13]=u*S+d*N+h*X+f*ue,r[2]=g*A+_*b+m*z+p*U,r[6]=g*w+_*R+m*G+p*Z,r[10]=g*C+_*I+m*W+p*ie,r[14]=g*S+_*N+m*X+p*ue,r[3]=v*A+x*b+y*z+M*U,r[7]=v*w+x*R+y*G+M*Z,r[11]=v*C+x*I+y*W+M*ie,r[15]=v*S+x*N+y*X+M*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*o*h+n*c*h+i*o*f-n*l*f)+_*(+t*l*f-t*c*h+r*a*h-i*a*f+i*c*u-r*l*u)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*u-n*c*u)+p*(-i*o*u-t*l*d+t*o*h+i*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=d*m*c-_*h*c+_*l*f-o*m*f-d*l*p+o*h*p,x=g*h*c-u*m*c-g*l*f+a*m*f+u*l*p-a*h*p,y=u*_*c-g*d*c+g*o*f-a*_*f-u*o*p+a*d*p,M=g*d*l-u*_*l-g*o*h+a*_*h+u*o*m-a*d*m,A=t*v+n*x+i*y+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(_*h*r-d*m*r-_*i*f+n*m*f+d*i*p-n*h*p)*w,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*w,e[3]=(d*l*r-o*h*r-d*i*c+n*h*c+o*i*f-n*l*f)*w,e[4]=x*w,e[5]=(u*m*r-g*h*r+g*i*f-t*m*f-u*i*p+t*h*p)*w,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*w,e[7]=(a*h*r-u*l*r+u*i*c-t*h*c-a*i*f+t*l*f)*w,e[8]=y*w,e[9]=(g*d*r-u*_*r-g*n*f+t*_*f+u*n*p-t*d*p)*w,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*f-t*o*f)*w,e[12]=M*w,e[13]=(u*_*i-g*d*i+g*n*h-t*_*h-u*n*m+t*d*m)*w,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,_=a*u,m=a*d,p=o*d,v=l*c,x=l*u,y=l*d,M=n.x,A=n.y,w=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+y)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(h+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+x)*w,i[9]=(m-v)*w,i[10]=(1-(h+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=vs.set(i[0],i[1],i[2]).length();const a=vs.set(i[4],i[5],i[6]).length(),o=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ln.copy(this);const c=1/r,u=1/a,d=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Xn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Xn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ka)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Xn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Xn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ka)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new D,Ln=new Fe,Dm=new D(0,0,0),Om=new D(1,1,1),yi=new D,ea=new D,on=new D,Pu=new Fe,Lu=new Kn;class Zn{constructor(e=0,t=0,n=0,i=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Nh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nm=0;const Iu=new D,xs=new Kn,ii=new Fe,ta=new D,cr=new D,Um=new D,Fm=new Kn,Du=new D(1,0,0),Ou=new D(0,1,0),Nu=new D(0,0,1),Uu={type:"added"},Bm={type:"removed"},ys={type:"childadded",child:null},bo={type:"childremoved",child:null};class ot extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new D,t=new Zn,n=new Kn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ue}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(Nu,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(Nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(cr,ta,this.up):ii.lookAt(ta,cr,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(ii),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uu),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bm),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uu),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new D(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new D,si=new D,Mo=new D,ri=new D,Ss=new D,bs=new D,Fu=new D,To=new D,Eo=new D,wo=new D,Ao=new $e,Co=new $e,Ro=new $e;class On{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),In.subVectors(e,t),i.cross(In);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){In.subVectors(i,t),si.subVectors(n,t),Mo.subVectors(e,t);const a=In.dot(In),o=In.dot(si),l=In.dot(Mo),c=si.dot(si),u=si.dot(Mo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ao.setScalar(0),Co.setScalar(0),Ro.setScalar(0),Ao.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Ro.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ao,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Ro,r.z),a}static isFrontFacing(e,t,n,i){return In.subVectors(n,t),si.subVectors(e,t),In.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),si.subVectors(this.a,this.b),In.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ss.subVectors(i,n),bs.subVectors(r,n),To.subVectors(e,n);const l=Ss.dot(To),c=bs.dot(To);if(l<=0&&c<=0)return t.copy(n);Eo.subVectors(e,i);const u=Ss.dot(Eo),d=bs.dot(Eo);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ss,a);wo.subVectors(e,r);const f=Ss.dot(wo),g=bs.dot(wo);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(bs,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Fu.subVectors(r,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(Fu,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},na={h:0,s:0,l:0};function Po(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=Ic(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Po(a,r,e+1/3),this.g=Po(a,r,e),this.b=Po(a,r,e-1/3)}return We.colorSpaceToWorking(this,i),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=Uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return We.workingToColorSpace(Ut.copy(this),e),Math.round(Ge(Ut.r*255,0,255))*65536+Math.round(Ge(Ut.g*255,0,255))*256+Math.round(Ge(Ut.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,r=Ut.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=bt){We.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(na);const n=Mr(Si.h,na.h,t),i=Mr(Si.s,na.s,t),r=Mr(Si.l,na.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Le;Le.NAMES=Uh;let km=0;class Yn extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=Ds,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=hl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wi extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new D,ia=new xe;let zm=0;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zl&&(e.usage=this.usage),e}}class Fh extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bh extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gm=0;const Sn=new Fe,Lo=new ot,Ms=new D,ln=new Fn,ur=new Fn,wt=new D;class vn extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Bh:Fh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(ln.min,ur.min),ln.expandByPoint(wt),wt.addVectors(ln.max,ur.max),ln.expandByPoint(wt)):(ln.expandByPoint(ur.min),ln.expandByPoint(ur.max))}ln.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),wt.add(Ms)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new D,l[C]=new D;const c=new D,u=new D,d=new D,h=new xe,f=new xe,g=new xe,_=new D,m=new D;function p(C,S,b){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,b),h.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[C].add(_),o[S].add(_),o[b].add(_),l[C].add(m),l[S].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){const b=v[C],R=b.start,I=b.count;for(let N=R,z=R+I;N<z;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new D,y=new D,M=new D,A=new D;function w(C){M.fromBufferAttribute(i,C),A.copy(M);const S=o[C];x.copy(S),x.sub(M.multiplyScalar(M.dot(S))).normalize(),y.crossVectors(A,S);const R=y.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,R)}for(let C=0,S=v.length;C<S;++C){const b=v[C],R=b.start,I=b.count;for(let N=R,z=R+I;N<z;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new jt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bu=new Fe,Hi=new to,sa=new Bn,ku=new D,ra=new D,aa=new D,oa=new D,Io=new D,la=new D,zu=new D,ca=new D;class Bt extends ot{constructor(e=new vn,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Io.fromBufferAttribute(d,e),a?la.addScaledVector(Io,u):la.addScaledVector(Io.sub(t),u))}t.add(la)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(sa.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(sa,ku)===null||Hi.origin.distanceToSquared(ku)>(e.far-e.near)**2))&&(Bu.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Bu),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,M=x;y<M;y+=3){const A=o.getX(y),w=o.getX(y+1),C=o.getX(y+2);i=ua(this,p,e,n,c,u,d,A,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=ua(this,a,e,n,c,u,d,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,M=x;y<M;y+=3){const A=y,w=y+1,C=y+2;i=ua(this,p,e,n,c,u,d,A,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,y=m+2;i=ua(this,a,e,n,c,u,d,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Hm(s,e,t,n,i,r,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===pi,o),l===null)return null;ca.copy(o),ca.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:s}}function ua(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ra),s.getVertexPosition(l,aa),s.getVertexPosition(c,oa);const u=Hm(s,e,t,n,ra,aa,oa,zu);if(u){const d=new D;On.getBarycoord(zu,ra,aa,oa,d),i&&(u.uv=On.getInterpolatedAttribute(i,o,l,c,d,new xe)),r&&(u.uv1=On.getInterpolatedAttribute(r,o,l,c,d,new xe)),a&&(u.normal=On.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};On.getNormal(ra,aa,oa,h.normal),u.face=h,u.barycoord=d}return u}class nr extends vn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2));function g(_,m,p,v,x,y,M,A,w,C,S){const b=y/w,R=M/C,I=y/2,N=M/2,z=A/2,G=w+1,W=C+1;let X=0,U=0;const Z=new D;for(let ie=0;ie<W;ie++){const ue=ie*R-N;for(let Ce=0;Ce<G;Ce++){const Ze=Ce*b-I;Z[_]=Ze*v,Z[m]=ue*x,Z[p]=z,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(Ce/w),d.push(1-ie/C),X+=1}}for(let ie=0;ie<C;ie++)for(let ue=0;ue<w;ue++){const Ce=h+ue+G*ie,Ze=h+ue+G*(ie+1),je=h+(ue+1)+G*(ie+1),ze=h+(ue+1)+G*ie;l.push(Ce,Ze,ze),l.push(Ze,je,ze),U+=6}o.addGroup(f,U,S),f+=U,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(s){const e={};for(let t=0;t<s.length;t++){const n=Ws(s[t]);for(const i in n)e[i]=n[i]}return e}function Vm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Vr={clone:Ws,merge:Ht};var Wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wm,this.fragmentShader=Xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let zh=class extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const bi=new D,Gu=new xe,Hu=new xe;class Vt extends zh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Gu,Hu),t.subVectors(Hu,Gu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ts=-90,Es=1;class jm extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(Ts,Es,e,t);i.layers=this.layers,this.add(i);const r=new Vt(Ts,Es,e,t);r.layers=this.layers,this.add(r);const a=new Vt(Ts,Es,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Ts,Es,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Ts,Es,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Ts,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Oc extends Ct{constructor(e=[],t=zs,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qm extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Oc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new nr(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:hi});r.uniforms.tEquirect.value=t;const a=new Bt(i,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=hn),new jm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class es extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new es;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $m extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new D;class ts{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ts(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vu=new D,Wu=new $e,Xu=new $e,Km=new D,ju=new Fe,da=new D,Oo=new Bn,qu=new Fe,No=new to;class Zm extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xu,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(i),e.ray.intersectsSphere(Oo)!==!1&&(qu.copy(i).invert(),No.copy(e.ray).applyMatrix4(qu),!(this.boundingBox!==null&&No.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,No)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wu.fromBufferAttribute(i.attributes.skinIndex,e),Xu.fromBufferAttribute(i.attributes.skinWeight,e),Vu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Xu.getComponent(r);if(a!==0){const o=Wu.getComponent(r);ju.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Km.copy(Vu).applyMatrix4(ju),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hh extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vh extends Ct{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Xt,u=Xt,d,h){super(null,a,o,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yu=new Fe,Jm=new Fe;class Nc{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Jm;Yu.multiplyMatrices(o,t[r]),Yu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Nc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vh(t,e,e,En,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Hh),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Jl extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new Fe,$u=new Fe,ha=[],Ku=new Fn,Qm=new Fe,dr=new Bt,hr=new Bn;class eg extends Bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),Ku.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(Ku)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),hr.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ws),$u.multiplyMatrices(n,ws),dr.matrixWorld=$u,dr.raycast(e,ha);for(let a=0,o=ha.length;a<o;a++){const l=ha[a];l.instanceId=r,l.object=this,t.push(l)}ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vh(new Float32Array(i*this.count),i,this.count,Cc,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Uo=new D,tg=new D,ng=new Ue;class $i{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Uo.subVectors(n,t).cross(tg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ng.getNormalMatrix(e),i=this.coplanarPoint(Uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Bn,ig=new xe(.5,.5),fa=new D;class Uc{constructor(e=new $i,t=new $i,n=new $i,i=new $i,r=new $i,a=new $i){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],x=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-a,f-u,p-g,M-v).normalize(),i[1].setComponents(c+a,f+u,p+g,M+v).normalize(),i[2].setComponents(c+o,f+d,p+_,M+x).normalize(),i[3].setComponents(c-o,f-d,p-_,M-x).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,f-h,p-m,M-y).normalize();else if(i[4].setComponents(c-l,f-h,p-m,M-y).normalize(),t===Xn)i[5].setComponents(c+l,f+h,p+m,M+y).normalize();else if(t===ka)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);const t=ig.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wh extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const za=new D,Ga=new D,Zu=new Fe,fr=new to,pa=new Bn,Fo=new D,Ju=new D;class Fc extends ot{constructor(e=new vn,t=new Wh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)za.fromBufferAttribute(t,i-1),Ga.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=za.distanceTo(Ga);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;Zu.copy(i).invert(),fr.copy(e.ray).applyMatrix4(Zu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),v=u.getX(_+1),x=ma(this,e,fr,l,p,v,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ma(this,e,fr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=ma(this,e,fr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ma(this,e,fr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ma(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(za.fromBufferAttribute(o,i),Ga.fromBufferAttribute(o,r),t.distanceSqToSegment(za,Ga,Fo,Ju)>n)return;Fo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Fo);if(!(c<e.near||c>e.far))return{distance:c,point:Ju.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Qu=new D,ed=new D;class sg extends Fc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Qu.fromBufferAttribute(t,i),ed.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qu.distanceTo(ed);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rg extends Fc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xh extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const td=new Fe,Ql=new to,ga=new Bn,_a=new D;class ag extends ot{constructor(e=new vn,t=new Xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;td.copy(i).invert(),Ql.copy(e.ray).applyMatrix4(td);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);_a.fromBufferAttribute(d,m),nd(_a,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)_a.fromBufferAttribute(d,g),nd(_a,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nd(s,e,t,n,i,r,a){const o=Ql.distanceSqToPoint(s);if(o<t){const l=new D;Ql.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class jh extends Ct{constructor(e,t,n=os,i,r,a,o=Xt,l=Xt,c,u=Pr,d=1){if(u!==Pr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qh extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class no extends vn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-a;for(let x=0;x<c;x++){const y=x*d-r;g.push(y,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const x=v+c*p,y=v+c*(p+1),M=v+1+c*(p+1),A=v+1+c*p;f.push(x,y,A),f.push(y,M,A)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}class og extends vn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,r=new D;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let g=h,_=h+f;g<_;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),v=o.getX(g+(m+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,v),id(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,u),r.fromBufferAttribute(a,d),id(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Jt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function id(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class lg extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bc extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends Bc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cg extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ug extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function va(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function dg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function hg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function sd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Yh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Wr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fg extends Wr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Su:r=e,o=2*t-n;break;case bu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Su:a=e,l=2*n-t;break;case bu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let M=0;M!==o;++M)r[M]=p*a[u+M]+v*a[c+M]+x*a[l+M]+y*a[d+M];return r}}class pg extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}}class mg extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&dg(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ho,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Dr;class ir extends kn{constructor(e,t,n){super(e,t,n)}}ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Ir;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class $h extends kn{constructor(e,t,n,i){super(e,t,n,i)}}$h.prototype.ValueTypeName="color";class Xs extends kn{constructor(e,t,n,i){super(e,t,n,i)}}Xs.prototype.ValueTypeName="number";class gg extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Kn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class js extends kn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new gg(this.times,this.values,this.getValueSize(),e)}}js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends kn{constructor(e,t,n){super(e,t,n)}}sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Ir;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends kn{constructor(e,t,n,i){super(e,t,n,i)}}qs.prototype.ValueTypeName="vector";class _g{constructor(e="",t=-1,n=[],i=$p){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(xg(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(kn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=hg(l);l=sd(l,1,u),c=sd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Xs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,_){if(f.length!==0){const m=[],p=[];Yh(f,m,p,g),m.length!==0&&_.push(new d(h,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==h[g].morphTargets.length;++v){const x=h[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Xs(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(qs,f+".position",h,"pos",i),n(js,f+".quaternion",h,"rot",i),n(qs,f+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function vg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return qs;case"color":return $h;case"quaternion":return js;case"bool":case"boolean":return ir;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function xg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vg(s.type);if(s.times===void 0){const t=[],n=[];Yh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const di={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yg{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Sg=new yg;let cs=class{constructor(e){this.manager=e!==void 0?e:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class bg extends Error{constructor(e,t){super(e),this.response=t}}class Kh extends cs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=di.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:i});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ai[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){d.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,w=u.length;A<w;A++){const C=u[A];C.onProgress&&C.onProgress(M)}p.enqueue(y),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new bg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{di.add(`file:${e}`,c);const u=ai[e];delete ai[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const As=new WeakMap;class Zh extends cs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=As.get(a);d===void 0&&(d=[],As.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Or("img");function l(){u(),t&&t(this);const d=As.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}As.delete(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),di.remove(`image:${e}`);const h=As.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}As.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),di.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Mg extends cs{constructor(e){super(e)}load(e,t,n,i){const r=new Oc;r.colorSpace=bt;const a=new Zh(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Jh extends cs{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,a=new Zh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class io extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Bo=new Fe,rd=new D,ad=new D;class kc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(rd),ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ad),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tg extends kc{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Eg extends io{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Tg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const od=new Fe,pr=new D,ko=new D;class wg extends kc{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(pr),ko.copy(n.position),ko.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ko),n.updateMatrixWorld(),i.makeTranslation(-pr.x,-pr.y,-pr.z),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od,n.coordinateSystem,n.reversedDepth)}}class Ag extends io{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class so extends zh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cg extends kc{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qh extends io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Cg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rg extends io{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Pg extends vn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const zo=new WeakMap;class Lg extends cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=di.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(zo.has(a)===!0)i&&i(zo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return di.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),zo.set(l,c),di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});di.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ig extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ef{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const zc="\\[\\]\\.:\\/",Dg=new RegExp("["+zc+"]","g"),Gc="[^"+zc+"]",Og="[^"+zc.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",Gc),Ug=/(WCOD+)?/.source.replace("WCOD",Og),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),kg=new RegExp("^"+Ng+Ug+Fg+Bg+"$"),zg=["material","materials","bones","map"];class Gg{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dg,"")}static parseTrackName(e){const t=kg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);zg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=Gg;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ld extends Gh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}function cd(s,e,t,n){const i=Hg(n);switch(t){case Ah:return s*e;case Cc:return s*e/i.components*i.byteLength;case Rc:return s*e/i.components*i.byteLength;case Rh:return s*e*2/i.components*i.byteLength;case Pc:return s*e*2/i.components*i.byteLength;case Ch:return s*e*3/i.components*i.byteLength;case En:return s*e*4/i.components*i.byteLength;case Lc:return s*e*4/i.components*i.byteLength;case Ca:case Ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pa:case La:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ml:case El:return Math.max(s,16)*Math.max(e,8)/4;case bl:case Tl:return Math.max(s,8)*Math.max(e,8)/2;case wl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Wl:case Xl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jl:case ql:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yl:case $l:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hg(s){switch(s){case $n:case Mh:return{byteLength:1,components:1};case Cr:case Th:case er:return{byteLength:2,components:1};case wc:case Ac:return{byteLength:2,components:4};case os:case Ec:case Nn:return{byteLength:4,components:1};case Eh:case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vg(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",S_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,F_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Wg,alphahash_pars_fragment:Xg,alphamap_fragment:jg,alphamap_pars_fragment:qg,alphatest_fragment:Yg,alphatest_pars_fragment:$g,aomap_fragment:Kg,aomap_pars_fragment:Zg,batching_pars_vertex:Jg,batching_vertex:Qg,begin_vertex:e_,beginnormal_vertex:t_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:s_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:u_,color_pars_vertex:d_,color_vertex:h_,common:f_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:__,emissivemap_fragment:v_,emissivemap_pars_fragment:x_,colorspace_fragment:y_,colorspace_pars_fragment:S_,envmap_fragment:b_,envmap_common_pars_fragment:M_,envmap_pars_fragment:T_,envmap_pars_vertex:E_,envmap_physical_pars_fragment:U_,envmap_vertex:w_,fog_vertex:A_,fog_pars_vertex:C_,fog_fragment:R_,fog_pars_fragment:P_,gradientmap_pars_fragment:L_,lightmap_pars_fragment:I_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:O_,lights_pars_begin:N_,lights_toon_fragment:F_,lights_toon_pars_fragment:B_,lights_phong_fragment:k_,lights_phong_pars_fragment:z_,lights_physical_fragment:G_,lights_physical_pars_fragment:H_,lights_fragment_begin:V_,lights_fragment_maps:W_,lights_fragment_end:X_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:$_,map_fragment:K_,map_pars_fragment:Z_,map_particle_fragment:J_,map_particle_pars_fragment:Q_,metalnessmap_fragment:e0,metalnessmap_pars_fragment:t0,morphinstance_vertex:n0,morphcolor_vertex:i0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:a0,normal_fragment_begin:o0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:_0,packing:v0,premultiplied_alpha_fragment:x0,project_vertex:y0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:w0,shadowmap_vertex:A0,shadowmask_pars_fragment:C0,skinbase_vertex:R0,skinning_pars_vertex:P0,skinning_vertex:L0,skinnormal_vertex:I0,specularmap_fragment:D0,specularmap_pars_fragment:O0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:F0,transmission_pars_fragment:B0,uv_pars_fragment:k0,uv_pars_vertex:z0,uv_vertex:G0,worldpos_vertex:H0,background_vert:V0,background_frag:W0,backgroundCube_vert:X0,backgroundCube_frag:j0,cube_vert:q0,cube_frag:Y0,depth_vert:$0,depth_frag:K0,distanceRGBA_vert:Z0,distanceRGBA_frag:J0,equirect_vert:Q0,equirect_frag:ev,linedashed_vert:tv,linedashed_frag:nv,meshbasic_vert:iv,meshbasic_frag:sv,meshlambert_vert:rv,meshlambert_frag:av,meshmatcap_vert:ov,meshmatcap_frag:lv,meshnormal_vert:cv,meshnormal_frag:uv,meshphong_vert:dv,meshphong_frag:hv,meshphysical_vert:fv,meshphysical_frag:pv,meshtoon_vert:mv,meshtoon_frag:gv,points_vert:_v,points_frag:vv,shadow_vert:xv,shadow_frag:yv,sprite_vert:Sv,sprite_frag:bv},ae={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Kt={basic:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ht([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ht([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ht([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ht([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ht([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ht([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ht([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ht([ae.lights,ae.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Kt.physical={uniforms:Ht([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const xa={r:0,b:0,g:0},Wi=new Zn,Mv=new Fe;function Tv(s,e,t,n,i,r,a){const o=new Le(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const M=g(x);M===null?p(o,l):M&&M.isColor&&(p(M,1),y=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===eo)?(u===void 0&&(u=new Bt(new nr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Ws(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Wi.copy(y.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(Wi)),u.material.toneMapped=We.getTransfer(M.colorSpace)!==Je,(d!==M||h!==M.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,f=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Bt(new no(2,2),new Rn({name:"BackgroundMaterial",uniforms:Ws(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=We.getTransfer(M.colorSpace)!==Je,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(xa,kh(s)),n.buffers.color.setClear(xa.r,xa.g,xa.b,y,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m,dispose:v}}function Ev(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(b,R,I,N,z){let G=!1;const W=d(N,I,R);r!==W&&(r=W,c(r.object)),G=f(b,N,I,z),G&&g(b,N,I,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(b,R,I,N),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function d(b,R,I){const N=I.wireframe===!0;let z=n[b.id];z===void 0&&(z={},n[b.id]=z);let G=z[R.id];G===void 0&&(G={},z[R.id]=G);let W=G[N];return W===void 0&&(W=h(l()),G[N]=W),W}function h(b){const R=[],I=[],N=[];for(let z=0;z<t;z++)R[z]=0,I[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:N,object:b,attributes:{},index:null}}function f(b,R,I,N){const z=r.attributes,G=R.attributes;let W=0;const X=I.getAttributes();for(const U in X)if(X[U].location>=0){const ie=z[U];let ue=G[U];if(ue===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function g(b,R,I,N){const z={},G=R.attributes;let W=0;const X=I.getAttributes();for(const U in X)if(X[U].location>=0){let ie=G[U];ie===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),z[U]=ue,W++}r.attributes=z,r.attributesNum=W,r.index=N}function _(){const b=r.newAttributes;for(let R=0,I=b.length;R<I;R++)b[R]=0}function m(b){p(b,0)}function p(b,R){const I=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;I[b]=1,N[b]===0&&(s.enableVertexAttribArray(b),N[b]=1),z[b]!==R&&(s.vertexAttribDivisor(b,R),z[b]=R)}function v(){const b=r.newAttributes,R=r.enabledAttributes;for(let I=0,N=R.length;I<N;I++)R[I]!==b[I]&&(s.disableVertexAttribArray(I),R[I]=0)}function x(b,R,I,N,z,G,W){W===!0?s.vertexAttribIPointer(b,R,I,z,G):s.vertexAttribPointer(b,R,I,N,z,G)}function y(b,R,I,N){_();const z=N.attributes,G=I.getAttributes(),W=R.defaultAttributeValues;for(const X in G){const U=G[X];if(U.location>=0){let Z=z[X];if(Z===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Z!==void 0){const ie=Z.normalized,ue=Z.itemSize,Ce=e.get(Z);if(Ce===void 0)continue;const Ze=Ce.buffer,je=Ce.type,ze=Ce.bytesPerElement,Y=je===s.INT||je===s.UNSIGNED_INT||Z.gpuType===Ec;if(Z.isInterleavedBufferAttribute){const J=Z.data,fe=J.stride,Ie=Z.offset;if(J.isInstancedInterleavedBuffer){for(let Me=0;Me<U.locationSize;Me++)p(U.location+Me,J.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Me=0;Me<U.locationSize;Me++)m(U.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let Me=0;Me<U.locationSize;Me++)x(U.location+Me,ue/U.locationSize,je,ie,fe*ze,(Ie+ue/U.locationSize*Me)*ze,Y)}else{if(Z.isInstancedBufferAttribute){for(let J=0;J<U.locationSize;J++)p(U.location+J,Z.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let J=0;J<U.locationSize;J++)m(U.location+J);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let J=0;J<U.locationSize;J++)x(U.location+J,ue/U.locationSize,je,ie,ue*ze,ue/U.locationSize*J*ze,Y)}}else if(W!==void 0){const ie=W[X];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(U.location,ie);break;case 3:s.vertexAttrib3fv(U.location,ie);break;case 4:s.vertexAttrib4fv(U.location,ie);break;default:s.vertexAttrib1fv(U.location,ie)}}}}v()}function M(){C();for(const b in n){const R=n[b];for(const I in R){const N=R[I];for(const z in N)u(N[z].object),delete N[z];delete R[I]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const R=n[b.id];for(const I in R){const N=R[I];for(const z in N)u(N[z].object),delete N[z];delete R[I]}delete n[b.id]}function w(b){for(const R in n){const I=n[R];if(I[b.id]===void 0)continue;const N=I[b.id];for(const z in N)u(N[z].object),delete N[z];delete I[b.id]}}function C(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function wv(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Av(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==En&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==$n&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Nn&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:M,maxSamples:A}}function Cv(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new $i,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,x=v*4;let y=p.clippingState||null;l.value=y,y=u(g,h,x,f);for(let M=0;M!==x;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Rv(s){let e=new WeakMap;function t(a,o){return o===yl?a.mapping=zs:o===Sl&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yl||o===Sl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qm(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ps=4,ud=[.125,.215,.35,.446,.526,.582],Qi=20,Go=new so,dd=new Le;let Ho=null,Vo=0,Wo=0,Xo=!1;const Ki=(1+Math.sqrt(5))/2,Cs=1/Ki,hd=[new D(-Ki,Cs,0),new D(Ki,Cs,0),new D(-Cs,0,Ki),new D(Cs,0,Ki),new D(0,Ki,-Cs),new D(0,Ki,Cs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Pv=new D;class fd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Pv}=r;Ho=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ho,Vo,Wo),this._renderer.xr.enabled=Xo,e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ho=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:er,format:En,colorSpace:qt,depthBuffer:!1},i=pd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lv(r)),this._blurMaterial=Iv(r,e,t)}return i}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,n,i,r){const l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(dd),d.toneMapping=Li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const _=new wi({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),m=new Bt(new nr,_);let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(dd),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const M=this._cubeSize;ya(i,y*M,x>2?M:0,M,M),d.setRenderTarget(i),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zs||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ya(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Go)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hd[(i-r-1)%hd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Bt(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const p=[];let v=0;for(let w=0;w<Qi;++w){const C=w/_,S=Math.exp(-C*C/2);p.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const y=this._sizeLods[i],M=3*y*(i>x-Ps?i-x+Ps:0),A=4*(this._cubeSize-y);ya(t,M,A,3*y,2*y),l.setRenderTarget(t),l.render(d,Go)}}function Lv(s){const e=[],t=[],n=[];let i=s;const r=s-Ps+1+ud.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ps?l=ud[a-s+Ps-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,C=A>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(S,_*g*A),x.set(h,m*g*A);const b=[A,A,A,A,A,A];y.set(b,p*g*A)}const M=new vn;M.setAttribute("position",new jt(v,_)),M.setAttribute("uv",new jt(x,m)),M.setAttribute("faceIndex",new jt(y,p)),e.push(M),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pd(s,e,t){const n=new Oi(s,e,t);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ya(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Iv(s,e,t){const n=new Float32Array(Qi),i=new D(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function md(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function gd(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dv(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===yl||l===Sl,u=l===zs||l===Gs;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new fd(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new fd(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ov(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nv(s,e,t,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],s.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const M=v[x+0],A=v[x+1],w=v[x+2];h.push(M,A,A,w,w,M)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const M=x+0,A=x+1,w=x+2;h.push(M,A,A,w,w,M)}}else return;const m=new(Dh(h)?Bh:Fh)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Uv(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*a),t.update(f,n,1)}function c(h,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,h*a,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Fv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bv(s,e,t){const n=new WeakMap,i=new $e;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let M=o.attributes.position.count*y,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*A*4*d),C=new Oh(w,M,A,d);C.type=Nn,C.needsUpdate=!0;const S=y*4;for(let R=0;R<d;R++){const I=p[R],N=v[R],z=x[R],G=M*A*4*R;for(let W=0;W<I.count;W++){const X=W*S;g===!0&&(i.fromBufferAttribute(I,W),w[G+X+0]=i.x,w[G+X+1]=i.y,w[G+X+2]=i.z,w[G+X+3]=0),_===!0&&(i.fromBufferAttribute(N,W),w[G+X+4]=i.x,w[G+X+5]=i.y,w[G+X+6]=i.z,w[G+X+7]=0),m===!0&&(i.fromBufferAttribute(z,W),w[G+X+8]=i.x,w[G+X+9]=i.y,w[G+X+10]=i.z,w[G+X+11]=z.itemSize===4?i.w:1)}}h={count:d,texture:C,size:new xe(M,A)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function kv(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const nf=new Ct,_d=new jh(1,1),sf=new Oh,rf=new Lm,af=new Oc,vd=[],xd=[],yd=new Float32Array(16),Sd=new Float32Array(9),bd=new Float32Array(4);function rr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=vd[i];if(r===void 0&&(r=new Float32Array(i),vd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ro(s,e){let t=xd[e];t===void 0&&(t=new Int32Array(e),xd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function zv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Gv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function Hv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function Vv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function Wv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Mt(t,n))return;bd.set(n),s.uniformMatrix2fv(this.addr,!1,bd),Tt(t,n)}}function Xv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Mt(t,n))return;Sd.set(n),s.uniformMatrix3fv(this.addr,!1,Sd),Tt(t,n)}}function jv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Mt(t,n))return;yd.set(n),s.uniformMatrix4fv(this.addr,!1,yd),Tt(t,n)}}function qv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Yv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function $v(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function Kv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function Zv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Jv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function Qv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function tx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(_d.compareFunction=Ih,r=_d):r=nf,t.setTexture2D(e||r,i)}function nx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rf,i)}function ix(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||af,i)}function sx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sf,i)}function rx(s){switch(s){case 5126:return zv;case 35664:return Gv;case 35665:return Hv;case 35666:return Vv;case 35674:return Wv;case 35675:return Xv;case 35676:return jv;case 5124:case 35670:return qv;case 35667:case 35671:return Yv;case 35668:case 35672:return $v;case 35669:case 35673:return Kv;case 5125:return Zv;case 36294:return Jv;case 36295:return Qv;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ax(s,e){s.uniform1fv(this.addr,e)}function ox(s,e){const t=rr(e,this.size,2);s.uniform2fv(this.addr,t)}function lx(s,e){const t=rr(e,this.size,3);s.uniform3fv(this.addr,t)}function cx(s,e){const t=rr(e,this.size,4);s.uniform4fv(this.addr,t)}function ux(s,e){const t=rr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dx(s,e){const t=rr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hx(s,e){const t=rr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function fx(s,e){s.uniform1iv(this.addr,e)}function px(s,e){s.uniform2iv(this.addr,e)}function mx(s,e){s.uniform3iv(this.addr,e)}function gx(s,e){s.uniform4iv(this.addr,e)}function _x(s,e){s.uniform1uiv(this.addr,e)}function vx(s,e){s.uniform2uiv(this.addr,e)}function xx(s,e){s.uniform3uiv(this.addr,e)}function yx(s,e){s.uniform4uiv(this.addr,e)}function Sx(s,e,t){const n=this.cache,i=e.length,r=ro(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||nf,r[a])}function bx(s,e,t){const n=this.cache,i=e.length,r=ro(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||rf,r[a])}function Mx(s,e,t){const n=this.cache,i=e.length,r=ro(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||af,r[a])}function Tx(s,e,t){const n=this.cache,i=e.length,r=ro(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||sf,r[a])}function Ex(s){switch(s){case 5126:return ax;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return ux;case 35675:return dx;case 35676:return hx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return _x;case 36294:return vx;case 36295:return xx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Tx}}class wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rx(t.type)}}class Ax{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ex(t.type)}}class Cx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function Md(s,e){s.seq.push(e),s.map[e.id]=e}function Rx(s,e,t){const n=s.name,i=n.length;for(jo.lastIndex=0;;){const r=jo.exec(n),a=jo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Md(t,c===void 0?new wx(o,s,e):new Ax(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Cx(o),Md(t,d)),t=d}}}class Ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Rx(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Td(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Px=37297;let Lx=0;function Ix(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ed=new Ue;function Dx(s){We._getMatrix(Ed,We.workingColorSpace,s);const e=`mat3( ${Ed.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(s)){case Ba:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ix(s.getShaderSource(e),o)}else return r}function Ox(s,e){const t=Dx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nx(s,e){let t;switch(e){case mh:t="Linear";break;case gh:t="Reinhard";break;case _h:t="Cineon";break;case Tc:t="ACESFilmic";break;case xh:t="AgX";break;case yh:t="Neutral";break;case vh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sa=new D;function Ux(){We.getLuminanceCoefficients(Sa);const s=Sa.x.toFixed(4),e=Sa.y.toFixed(4),t=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Bx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function xr(s){return s!==""}function Ad(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(s){return s.replace(zx,Hx)}const Gx=new Map;function Hx(s,e){let t=ke[e];if(t===void 0){const n=Gx.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ec(t)}const Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(s){return s.replace(Vx,Wx)}function Wx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function jx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Gs:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Yx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ph:e="ENVMAP_BLENDING_MULTIPLY";break;case jp:e="ENVMAP_BLENDING_MIX";break;case qp:e="ENVMAP_BLENDING_ADD";break}return e}function $x(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kx(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xx(t),c=jx(t),u=qx(t),d=Yx(t),h=$x(t),f=Fx(t),g=Bx(r),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?ke.tonemapping_pars_fragment:"",t.toneMapping!==Li?Nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Ox("linearToOutputTexel",t.outputColorSpace),Ux(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=ec(a),a=Ad(a,t),a=Cd(a,t),o=ec(o),o=Ad(o,t),o=Cd(o,t),a=Rd(a),o=Rd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+a,y=v+p+o,M=Td(i,i.VERTEX_SHADER,x),A=Td(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(R){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(M)||"",z=i.getShaderInfoLog(A)||"",G=I.trim(),W=N.trim(),X=z.trim();let U=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,A);else{const ie=wd(i,M,"vertex"),ue=wd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+ie+`
`+ue)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||X==="")&&(Z=!1);Z&&(R.diagnostics={runnable:U,programLog:G,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(M),i.deleteShader(A),C=new Ia(i,_),S=kx(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,Px)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=A,this}let Zx=0;class Jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qx(e),t.set(e,n)),n}}class Qx{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}}function ey(s,e,t,n,i,r,a){const o=new Nh,l=new Jx,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,R,I,N){const z=I.fog,G=N.geometry,W=S.isMeshStandardMaterial?I.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),U=X&&X.mapping===eo?X.image.height:null,Z=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=ie!==void 0?ie.length:0;let Ce=0;G.morphAttributes.position!==void 0&&(Ce=1),G.morphAttributes.normal!==void 0&&(Ce=2),G.morphAttributes.color!==void 0&&(Ce=3);let Ze,je,ze,Y;if(Z){const Ke=Kt[Z];Ze=Ke.vertexShader,je=Ke.fragmentShader}else Ze=S.vertexShader,je=S.fragmentShader,l.update(S),ze=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const J=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,Me=N.isBatchedMesh===!0,qe=!!S.map,Ot=!!S.matcap,L=!!X,lt=!!S.aoMap,Oe=!!S.lightMap,Re=!!S.bumpMap,ge=!!S.normalMap,ct=!!S.displacementMap,_e=!!S.emissiveMap,Be=!!S.metalnessMap,Et=!!S.roughnessMap,_t=S.anisotropy>0,P=S.clearcoat>0,T=S.dispersion>0,k=S.iridescence>0,q=S.sheen>0,K=S.transmission>0,j=_t&&!!S.anisotropyMap,be=P&&!!S.clearcoatMap,se=P&&!!S.clearcoatNormalMap,ve=P&&!!S.clearcoatRoughnessMap,ye=k&&!!S.iridescenceMap,te=k&&!!S.iridescenceThicknessMap,ce=q&&!!S.sheenColorMap,Ae=q&&!!S.sheenRoughnessMap,Se=!!S.specularMap,oe=!!S.specularColorMap,Ne=!!S.specularIntensityMap,O=K&&!!S.transmissionMap,ne=K&&!!S.thicknessMap,re=!!S.gradientMap,he=!!S.alphaMap,Q=S.alphaTest>0,$=!!S.alphaHash,me=!!S.extensions;let De=Li;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(De=s.toneMapping);const rt={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:je,defines:S.defines,customVertexShaderID:ze,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Me,batchingColor:Me&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:qt,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:Ot,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:U,aoMap:lt,lightMap:Oe,bumpMap:Re,normalMap:ge,displacementMap:h&&ct,emissiveMap:_e,normalMapObjectSpace:ge&&S.normalMapType===Qp,normalMapTangentSpace:ge&&S.normalMapType===Lh,metalnessMap:Be,roughnessMap:Et,anisotropy:_t,anisotropyMap:j,clearcoat:P,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:ve,dispersion:T,iridescence:k,iridescenceMap:ye,iridescenceThicknessMap:te,sheen:q,sheenColorMap:ce,sheenRoughnessMap:Ae,specularMap:Se,specularColorMap:oe,specularIntensityMap:Ne,transmission:K,transmissionMap:O,thicknessMap:ne,gradientMap:re,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:Q,alphaHash:$,combine:S.combine,mapUv:qe&&_(S.map.channel),aoMapUv:lt&&_(S.aoMap.channel),lightMapUv:Oe&&_(S.lightMap.channel),bumpMapUv:Re&&_(S.bumpMap.channel),normalMapUv:ge&&_(S.normalMap.channel),displacementMapUv:ct&&_(S.displacementMap.channel),emissiveMapUv:_e&&_(S.emissiveMap.channel),metalnessMapUv:Be&&_(S.metalnessMap.channel),roughnessMapUv:Et&&_(S.roughnessMap.channel),anisotropyMapUv:j&&_(S.anisotropyMap.channel),clearcoatMapUv:be&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(S.sheenRoughnessMap.channel),specularMapUv:Se&&_(S.specularMap.channel),specularColorMapUv:oe&&_(S.specularColorMap.channel),specularIntensityMapUv:Ne&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:ne&&_(S.thicknessMap.channel),alphaMapUv:he&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ge||_t),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(qe||he),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===Je,decodeVideoTextureEmissive:_e&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===Je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vn,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:me&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&S.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)b.push(R),b.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(v(b,S),x(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const b=g[S.type];let R;if(b){const I=Kt[b];R=Vr.clone(I.uniforms)}else R=S.uniforms;return R}function M(S,b){let R;for(let I=0,N=u.length;I<N;I++){const z=u[I];if(z.cacheKey===b){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Kx(s,b,S,r),u.push(R)),R}function A(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:C}}function ty(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ny(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ld(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Id(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,f,g,_,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||ny),n.length>1&&n.sort(h||Ld),i.length>1&&i.sort(h||Ld)}function u(){for(let d=e,h=s.length;d<h;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function iy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Id,s.set(n,[a])):i>=r.length?(a=new Id,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function sy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Le};break;case"SpotLight":t={position:new D,direction:new D,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function ry(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ay=0;function oy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ly(s){const e=new sy,t=ry(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new Fe,a=new Fe;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,x=0,y=0,M=0,A=0,w=0;c.sort(oy);for(let S=0,b=c.length;S<b;S++){const R=c[S],I=R.color,N=R.intensity,z=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*N,d+=I.g*N,h+=I.b*N;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],N);w++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,U=t.get(R);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=W,f++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(I).multiplyScalar(N),W.distance=z,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const X=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,X.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=X.matrix,R.castShadow){const U=t.get(R);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,n.spotShadow[_]=U,n.spotShadowMap[_]=G,y++}_++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(I).multiplyScalar(N),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const X=R.shadow,U=t.get(R);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,U.shadowCameraNear=X.camera.near,U.shadowCameraFar=X.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(N),W.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==M||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=M,C.numLightProbes=w,n.version=ay++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Dd(s){const e=new ly(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cy(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Dd(s),e.set(i,[o])):r>=a.length?(o=new Dd(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hy(s,e,t){let n=new Uc;const i=new xe,r=new xe,a=new $e,o=new cg({depthPacking:Jp}),l=new ug,c={},u=t.maxTextureSize,d={[pi]:Zt,[Zt]:pi,[Vn]:Vn},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:uy,fragmentShader:dy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let p=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),b=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),I=s.state;I.setBlending(hi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=p!==oi&&this.type===oi,z=p===oi&&this.type!==oi;for(let G=0,W=A.length;G<W;G++){const X=A[G],U=X.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const Z=U.getFrameExtents();if(i.multiply(Z),r.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,U.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,U.mapSize.y=r.y)),U.map===null||N===!0||z===!0){const ue=this.type!==oi?{minFilter:Xt,magFilter:Xt}:{};U.map!==null&&U.map.dispose(),U.map=new Oi(i.x,i.y,ue),U.map.texture.name=X.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const ie=U.getViewportCount();for(let ue=0;ue<ie;ue++){const Ce=U.getViewport(ue);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),I.viewport(a),U.updateMatrices(X,ue),n=U.getFrustum(),y(w,C,U.camera,X,this.type)}U.isPointLightShadow!==!0&&this.type===oi&&v(U,C),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,b,R)};function v(A,w){const C=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Oi(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,C,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,C,f,_,null)}function x(A,w,C,S){let b=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)b=R;else if(b=C.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=b.uuid,N=w.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let G=z[N];G===void 0&&(G=b.clone(),z[N]=G,w.addEventListener("dispose",M)),b=G}if(b.visible=w.visible,b.wireframe=w.wireframe,S===oi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=s.properties.get(b);I.light=C}return b}function y(A,w,C,S,b){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===oi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const N=e.update(A),z=A.material;if(Array.isArray(z)){const G=N.groups;for(let W=0,X=G.length;W<X;W++){const U=G[W],Z=z[U.materialIndex];if(Z&&Z.visible){const ie=x(A,Z,S,b);A.onBeforeShadow(s,A,w,C,N,ie,U),s.renderBufferDirect(C,null,N,ie,A,U),A.onAfterShadow(s,A,w,C,N,ie,U)}}}else if(z.visible){const G=x(A,z,S,b);A.onBeforeShadow(s,A,w,C,N,G,null),s.renderBufferDirect(C,null,N,G,A,null),A.onAfterShadow(s,A,w,C,N,G,null)}}const I=A.children;for(let N=0,z=I.length;N<z;N++)y(I[N],w,C,S,b)}function M(A){A.target.removeEventListener("dispose",M);for(const C in c){const S=c[C],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const fy={[fl]:pl,[ml]:vl,[gl]:xl,[ks]:_l,[pl]:fl,[vl]:ml,[xl]:gl,[_l]:ks};function py(s,e){function t(){let O=!1;const ne=new $e;let re=null;const he=new $e(0,0,0,0);return{setMask:function(Q){re!==Q&&!O&&(s.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){O=Q},setClear:function(Q,$,me,De,rt){rt===!0&&(Q*=De,$*=De,me*=De),ne.set(Q,$,me,De),he.equals(ne)===!1&&(s.clearColor(Q,$,me,De),he.copy(ne))},reset:function(){O=!1,re=null,he.set(-1,0,0,0)}}}function n(){let O=!1,ne=!1,re=null,he=null,Q=null;return{setReversed:function($){if(ne!==$){const me=e.get("EXT_clip_control");$?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ne=$;const De=Q;Q=null,this.setClear(De)}},getReversed:function(){return ne},setTest:function($){$?J(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function($){re!==$&&!O&&(s.depthMask($),re=$)},setFunc:function($){if(ne&&($=fy[$]),he!==$){switch($){case fl:s.depthFunc(s.NEVER);break;case pl:s.depthFunc(s.ALWAYS);break;case ml:s.depthFunc(s.LESS);break;case ks:s.depthFunc(s.LEQUAL);break;case gl:s.depthFunc(s.EQUAL);break;case _l:s.depthFunc(s.GEQUAL);break;case vl:s.depthFunc(s.GREATER);break;case xl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=$}},setLocked:function($){O=$},setClear:function($){Q!==$&&(ne&&($=1-$),s.clearDepth($),Q=$)},reset:function(){O=!1,re=null,he=null,Q=null,ne=!1}}}function i(){let O=!1,ne=null,re=null,he=null,Q=null,$=null,me=null,De=null,rt=null;return{setTest:function(Ke){O||(Ke?J(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(Ke){ne!==Ke&&!O&&(s.stencilMask(Ke),ne=Ke)},setFunc:function(Ke,ei,zn){(re!==Ke||he!==ei||Q!==zn)&&(s.stencilFunc(Ke,ei,zn),re=Ke,he=ei,Q=zn)},setOp:function(Ke,ei,zn){($!==Ke||me!==ei||De!==zn)&&(s.stencilOp(Ke,ei,zn),$=Ke,me=ei,De=zn)},setLocked:function(Ke){O=Ke},setClear:function(Ke){rt!==Ke&&(s.clearStencil(Ke),rt=Ke)},reset:function(){O=!1,ne=null,re=null,he=null,Q=null,$=null,me=null,De=null,rt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,M=null,A=null,w=new Le(0,0,0),C=0,S=!1,b=null,R=null,I=null,N=null,z=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(U)[1]),W=X>=1):U.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),W=X>=2);let Z=null,ie={};const ue=s.getParameter(s.SCISSOR_BOX),Ce=s.getParameter(s.VIEWPORT),Ze=new $e().fromArray(ue),je=new $e().fromArray(Ce);function ze(O,ne,re,he){const Q=new Uint8Array(4),$=s.createTexture();s.bindTexture(O,$),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let me=0;me<re;me++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(ne+me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return $}const Y={};Y[s.TEXTURE_2D]=ze(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(s.DEPTH_TEST),a.setFunc(ks),Re(!1),ge(mu),J(s.CULL_FACE),lt(hi);function J(O){u[O]!==!0&&(s.enable(O),u[O]=!0)}function fe(O){u[O]!==!1&&(s.disable(O),u[O]=!1)}function Ie(O,ne){return d[O]!==ne?(s.bindFramebuffer(O,ne),d[O]=ne,O===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ne),O===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function Me(O,ne){let re=f,he=!1;if(O){re=h.get(ne),re===void 0&&(re=[],h.set(ne,re));const Q=O.textures;if(re.length!==Q.length||re[0]!==s.COLOR_ATTACHMENT0){for(let $=0,me=Q.length;$<me;$++)re[$]=s.COLOR_ATTACHMENT0+$;re.length=Q.length,he=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,he=!0);he&&s.drawBuffers(re)}function qe(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Ot={[Ji]:s.FUNC_ADD,[Rp]:s.FUNC_SUBTRACT,[Pp]:s.FUNC_REVERSE_SUBTRACT};Ot[Lp]=s.MIN,Ot[Ip]=s.MAX;const L={[Dp]:s.ZERO,[Op]:s.ONE,[Np]:s.SRC_COLOR,[dl]:s.SRC_ALPHA,[Gp]:s.SRC_ALPHA_SATURATE,[kp]:s.DST_COLOR,[Fp]:s.DST_ALPHA,[Up]:s.ONE_MINUS_SRC_COLOR,[hl]:s.ONE_MINUS_SRC_ALPHA,[zp]:s.ONE_MINUS_DST_COLOR,[Bp]:s.ONE_MINUS_DST_ALPHA,[Hp]:s.CONSTANT_COLOR,[Vp]:s.ONE_MINUS_CONSTANT_COLOR,[Wp]:s.CONSTANT_ALPHA,[Xp]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(O,ne,re,he,Q,$,me,De,rt,Ke){if(O===hi){_===!0&&(fe(s.BLEND),_=!1);return}if(_===!1&&(J(s.BLEND),_=!0),O!==Cp){if(O!==m||Ke!==S){if((p!==Ji||y!==Ji)&&(s.blendEquation(s.FUNC_ADD),p=Ji,y=Ji),Ke)switch(O){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gu:s.blendFunc(s.ONE,s.ONE);break;case _u:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _u:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,x=null,M=null,A=null,w.set(0,0,0),C=0,m=O,S=Ke}return}Q=Q||ne,$=$||re,me=me||he,(ne!==p||Q!==y)&&(s.blendEquationSeparate(Ot[ne],Ot[Q]),p=ne,y=Q),(re!==v||he!==x||$!==M||me!==A)&&(s.blendFuncSeparate(L[re],L[he],L[$],L[me]),v=re,x=he,M=$,A=me),(De.equals(w)===!1||rt!==C)&&(s.blendColor(De.r,De.g,De.b,rt),w.copy(De),C=rt),m=O,S=!1}function Oe(O,ne){O.side===Vn?fe(s.CULL_FACE):J(s.CULL_FACE);let re=O.side===Zt;ne&&(re=!re),Re(re),O.blending===Ds&&O.transparent===!1?lt(hi):lt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const he=O.stencilWrite;o.setTest(he),he&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),_e(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Re(O){b!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),b=O)}function ge(O){O!==wp?(J(s.CULL_FACE),O!==R&&(O===mu?s.cullFace(s.BACK):O===Ap?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),R=O}function ct(O){O!==I&&(W&&s.lineWidth(O),I=O)}function _e(O,ne,re){O?(J(s.POLYGON_OFFSET_FILL),(N!==ne||z!==re)&&(s.polygonOffset(ne,re),N=ne,z=re)):fe(s.POLYGON_OFFSET_FILL)}function Be(O){O?J(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function Et(O){O===void 0&&(O=s.TEXTURE0+G-1),Z!==O&&(s.activeTexture(O),Z=O)}function _t(O,ne,re){re===void 0&&(Z===null?re=s.TEXTURE0+G-1:re=Z);let he=ie[re];he===void 0&&(he={type:void 0,texture:void 0},ie[re]=he),(he.type!==O||he.texture!==ne)&&(Z!==re&&(s.activeTexture(re),Z=re),s.bindTexture(O,ne||Y[O]),he.type=O,he.texture=ne)}function P(){const O=ie[Z];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(O){Ze.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Ze.copy(O))}function Ae(O){je.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),je.copy(O))}function Se(O,ne){let re=c.get(ne);re===void 0&&(re=new WeakMap,c.set(ne,re));let he=re.get(O);he===void 0&&(he=s.getUniformBlockIndex(ne,O.name),re.set(O,he))}function oe(O,ne){const he=c.get(ne).get(O);l.get(ne)!==he&&(s.uniformBlockBinding(ne,he,O.__bindingPointIndex),l.set(ne,he))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Z=null,ie={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,M=null,A=null,w=new Le(0,0,0),C=0,S=!1,b=null,R=null,I=null,N=null,z=null,Ze.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:fe,bindFramebuffer:Ie,drawBuffers:Me,useProgram:qe,setBlending:lt,setMaterial:Oe,setFlipSided:Re,setCullFace:ge,setLineWidth:ct,setPolygonOffset:_e,setScissorTest:Be,activeTexture:Et,bindTexture:_t,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:k,texImage2D:ye,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:oe,texStorage2D:se,texStorage3D:ve,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:j,compressedTexSubImage3D:be,scissor:ce,viewport:Ae,reset:Ne}}function my(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return f?new OffscreenCanvas(P,T):Or("canvas")}function _(P,T,k){let q=1;const K=_t(P);if((K.width>k||K.height>k)&&(q=k/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(q*K.width),be=Math.floor(q*K.height);d===void 0&&(d=g(j,be));const se=T?g(j,be):d;return se.width=j,se.height=be,se.getContext("2d").drawImage(P,0,0,j,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+be+")."),se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(P,T,k,q,K=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=T;if(T===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8)),T===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),T===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8)),T===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),T===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),T===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),T===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),T===s.RGBA){const be=K?Ba:We.getTransfer(q);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=be===Je?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(P,T){let k;return P?T===null||T===os||T===Rr?k=s.DEPTH24_STENCIL8:T===Nn?k=s.DEPTH32F_STENCIL8:T===Cr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===os||T===Rr?k=s.DEPTH_COMPONENT24:T===Nn?k=s.DEPTH_COMPONENT32F:T===Cr&&(k=s.DEPTH_COMPONENT16),k}function M(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xt&&P.minFilter!==hn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function A(P){const T=P.target;T.removeEventListener("dispose",A),C(T),T.isVideoTexture&&u.delete(T)}function w(P){const T=P.target;T.removeEventListener("dispose",w),b(T)}function C(P){const T=n.get(P);if(T.__webglInit===void 0)return;const k=P.source,q=h.get(k);if(q){const K=q[T.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(P),Object.keys(q).length===0&&h.delete(k)}n.remove(P)}function S(P){const T=n.get(P);s.deleteTexture(T.__webglTexture);const k=P.source,q=h.get(k);delete q[T.__cacheKey],a.memory.textures--}function b(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(T.__webglFramebuffer[q]))for(let K=0;K<T.__webglFramebuffer[q].length;K++)s.deleteFramebuffer(T.__webglFramebuffer[q][K]);else s.deleteFramebuffer(T.__webglFramebuffer[q]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[q])}else{if(Array.isArray(T.__webglFramebuffer))for(let q=0;q<T.__webglFramebuffer.length;q++)s.deleteFramebuffer(T.__webglFramebuffer[q]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let q=0;q<T.__webglColorRenderbuffer.length;q++)T.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[q]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const k=P.textures;for(let q=0,K=k.length;q<K;q++){const j=n.get(k[q]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(k[q])}n.remove(P)}let R=0;function I(){R=0}function N(){const P=R;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),R+=1,P}function z(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function G(P,T){const k=n.get(P);if(P.isVideoTexture&&Be(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const q=P.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,P,T);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+T)}function W(P,T){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){Y(k,P,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+T)}function X(P,T){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){Y(k,P,T);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+T)}function U(P,T){const k=n.get(P);if(P.version>0&&k.__version!==P.version){J(k,P,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+T)}const Z={[Hs]:s.REPEAT,[Ei]:s.CLAMP_TO_EDGE,[Fa]:s.MIRRORED_REPEAT},ie={[Xt]:s.NEAREST,[bh]:s.NEAREST_MIPMAP_NEAREST,[vr]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[Aa]:s.LINEAR_MIPMAP_NEAREST,[ui]:s.LINEAR_MIPMAP_LINEAR},ue={[em]:s.NEVER,[am]:s.ALWAYS,[tm]:s.LESS,[Ih]:s.LEQUAL,[nm]:s.EQUAL,[rm]:s.GEQUAL,[im]:s.GREATER,[sm]:s.NOTEQUAL};function Ce(P,T){if(T.type===Nn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===hn||T.magFilter===Aa||T.magFilter===vr||T.magFilter===ui||T.minFilter===hn||T.minFilter===Aa||T.minFilter===vr||T.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Z[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Z[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Z[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ie[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xt||T.minFilter!==vr&&T.minFilter!==ui||T.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ze(P,T){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",A));const q=T.source;let K=h.get(q);K===void 0&&(K={},h.set(q,K));const j=z(T);if(j!==P.__cacheKey){K[j]===void 0&&(K[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[j].usedTimes++;const be=K[P.__cacheKey];be!==void 0&&(K[P.__cacheKey].usedTimes--,be.usedTimes===0&&S(T)),P.__cacheKey=j,P.__webglTexture=K[j].texture}return k}function je(P,T,k){return Math.floor(Math.floor(P/k)/T)}function ze(P,T,k,q){const j=P.updateRanges;if(j.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,k,q,T.data);else{j.sort((te,ce)=>te.start-ce.start);let be=0;for(let te=1;te<j.length;te++){const ce=j[be],Ae=j[te],Se=ce.start+ce.count,oe=je(Ae.start,T.width,4),Ne=je(ce.start,T.width,4);Ae.start<=Se+1&&oe===Ne&&je(Ae.start+Ae.count-1,T.width,4)===oe?ce.count=Math.max(ce.count,Ae.start+Ae.count-ce.start):(++be,j[be]=Ae)}j.length=be+1;const se=s.getParameter(s.UNPACK_ROW_LENGTH),ve=s.getParameter(s.UNPACK_SKIP_PIXELS),ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let te=0,ce=j.length;te<ce;te++){const Ae=j[te],Se=Math.floor(Ae.start/4),oe=Math.ceil(Ae.count/4),Ne=Se%T.width,O=Math.floor(Se/T.width),ne=oe,re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,Ne,O,ne,re,k,q,T.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,ye)}}function Y(P,T,k){let q=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=s.TEXTURE_3D);const K=Ze(P,T),j=T.source;t.bindTexture(q,P.__webglTexture,s.TEXTURE0+k);const be=n.get(j);if(j.version!==be.__version||K===!0){t.activeTexture(s.TEXTURE0+k);const se=We.getPrimaries(We.workingColorSpace),ve=T.colorSpace===Ti?null:We.getPrimaries(T.colorSpace),ye=T.colorSpace===Ti||se===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let te=_(T.image,!1,i.maxTextureSize);te=Et(T,te);const ce=r.convert(T.format,T.colorSpace),Ae=r.convert(T.type);let Se=x(T.internalFormat,ce,Ae,T.colorSpace,T.isVideoTexture);Ce(q,T);let oe;const Ne=T.mipmaps,O=T.isVideoTexture!==!0,ne=be.__version===void 0||K===!0,re=j.dataReady,he=M(T,te);if(T.isDepthTexture)Se=y(T.format===Lr,T.type),ne&&(O?t.texStorage2D(s.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Se,te.width,te.height,0,ce,Ae,null));else if(T.isDataTexture)if(Ne.length>0){O&&ne&&t.texStorage2D(s.TEXTURE_2D,he,Se,Ne[0].width,Ne[0].height);for(let Q=0,$=Ne.length;Q<$;Q++)oe=Ne[Q],O?re&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,Ae,oe.data):t.texImage2D(s.TEXTURE_2D,Q,Se,oe.width,oe.height,0,ce,Ae,oe.data);T.generateMipmaps=!1}else O?(ne&&t.texStorage2D(s.TEXTURE_2D,he,Se,te.width,te.height),re&&ze(T,te,ce,Ae)):t.texImage2D(s.TEXTURE_2D,0,Se,te.width,te.height,0,ce,Ae,te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Se,Ne[0].width,Ne[0].height,te.depth);for(let Q=0,$=Ne.length;Q<$;Q++)if(oe=Ne[Q],T.format!==En)if(ce!==null)if(O){if(re)if(T.layerUpdates.size>0){const me=cd(oe.width,oe.height,T.format,T.type);for(const De of T.layerUpdates){const rt=oe.data.subarray(De*me/oe.data.BYTES_PER_ELEMENT,(De+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,De,oe.width,oe.height,1,ce,rt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,ce,oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Se,oe.width,oe.height,te.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,ce,Ae,oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,Se,oe.width,oe.height,te.depth,0,ce,Ae,oe.data)}else{O&&ne&&t.texStorage2D(s.TEXTURE_2D,he,Se,Ne[0].width,Ne[0].height);for(let Q=0,$=Ne.length;Q<$;Q++)oe=Ne[Q],T.format!==En?ce!==null?O?re&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,Se,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?re&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,Ae,oe.data):t.texImage2D(s.TEXTURE_2D,Q,Se,oe.width,oe.height,0,ce,Ae,oe.data)}else if(T.isDataArrayTexture)if(O){if(ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Se,te.width,te.height,te.depth),re)if(T.layerUpdates.size>0){const Q=cd(te.width,te.height,T.format,T.type);for(const $ of T.layerUpdates){const me=te.data.subarray($*Q/te.data.BYTES_PER_ELEMENT,($+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,ce,Ae,me)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Ae,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,ce,Ae,te.data);else if(T.isData3DTexture)O?(ne&&t.texStorage3D(s.TEXTURE_3D,he,Se,te.width,te.height,te.depth),re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Ae,te.data)):t.texImage3D(s.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,ce,Ae,te.data);else if(T.isFramebufferTexture){if(ne)if(O)t.texStorage2D(s.TEXTURE_2D,he,Se,te.width,te.height);else{let Q=te.width,$=te.height;for(let me=0;me<he;me++)t.texImage2D(s.TEXTURE_2D,me,Se,Q,$,0,ce,Ae,null),Q>>=1,$>>=1}}else if(Ne.length>0){if(O&&ne){const Q=_t(Ne[0]);t.texStorage2D(s.TEXTURE_2D,he,Se,Q.width,Q.height)}for(let Q=0,$=Ne.length;Q<$;Q++)oe=Ne[Q],O?re&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ce,Ae,oe):t.texImage2D(s.TEXTURE_2D,Q,Se,ce,Ae,oe);T.generateMipmaps=!1}else if(O){if(ne){const Q=_t(te);t.texStorage2D(s.TEXTURE_2D,he,Se,Q.width,Q.height)}re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,Ae,te)}else t.texImage2D(s.TEXTURE_2D,0,Se,ce,Ae,te);m(T)&&p(q),be.__version=j.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function J(P,T,k){if(T.image.length!==6)return;const q=Ze(P,T),K=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+k);const j=n.get(K);if(K.version!==j.__version||q===!0){t.activeTexture(s.TEXTURE0+k);const be=We.getPrimaries(We.workingColorSpace),se=T.colorSpace===Ti?null:We.getPrimaries(T.colorSpace),ve=T.colorSpace===Ti||be===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ye=T.isCompressedTexture||T.image[0].isCompressedTexture,te=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!ye&&!te?ce[$]=_(T.image[$],!0,i.maxCubemapSize):ce[$]=te?T.image[$].image:T.image[$],ce[$]=Et(T,ce[$]);const Ae=ce[0],Se=r.convert(T.format,T.colorSpace),oe=r.convert(T.type),Ne=x(T.internalFormat,Se,oe,T.colorSpace),O=T.isVideoTexture!==!0,ne=j.__version===void 0||q===!0,re=K.dataReady;let he=M(T,Ae);Ce(s.TEXTURE_CUBE_MAP,T);let Q;if(ye){O&&ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Ne,Ae.width,Ae.height);for(let $=0;$<6;$++){Q=ce[$].mipmaps;for(let me=0;me<Q.length;me++){const De=Q[me];T.format!==En?Se!==null?O?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,De.width,De.height,Se,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Ne,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,De.width,De.height,Se,oe,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Ne,De.width,De.height,0,Se,oe,De.data)}}}else{if(Q=T.mipmaps,O&&ne){Q.length>0&&he++;const $=_t(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Ne,$.width,$.height)}for(let $=0;$<6;$++)if(te){O?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,Se,oe,ce[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,ce[$].width,ce[$].height,0,Se,oe,ce[$].data);for(let me=0;me<Q.length;me++){const rt=Q[me].image[$].image;O?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,rt.width,rt.height,Se,oe,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Ne,rt.width,rt.height,0,Se,oe,rt.data)}}else{O?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se,oe,ce[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,Se,oe,ce[$]);for(let me=0;me<Q.length;me++){const De=Q[me];O?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,Se,oe,De.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Ne,Se,oe,De.image[$])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),j.__version=K.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function fe(P,T,k,q,K,j){const be=r.convert(k.format,k.colorSpace),se=r.convert(k.type),ve=x(k.internalFormat,be,se,k.colorSpace),ye=n.get(T),te=n.get(k);if(te.__renderTarget=T,!ye.__hasExternalTextures){const ce=Math.max(1,T.width>>j),Ae=Math.max(1,T.height>>j);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,j,ve,ce,Ae,T.depth,0,be,se,null):t.texImage2D(K,j,ve,ce,Ae,0,be,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),_e(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,K,te.__webglTexture,0,ct(T)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,K,te.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(P,T,k){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const q=T.depthTexture,K=q&&q.isDepthTexture?q.type:null,j=y(T.stencilBuffer,K),be=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=ct(T);_e(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,j,T.width,T.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,j,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,j,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,P)}else{const q=T.textures;for(let K=0;K<q.length;K++){const j=q[K],be=r.convert(j.format,j.colorSpace),se=r.convert(j.type),ve=x(j.internalFormat,be,se,j.colorSpace),ye=ct(T);k&&_e(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,ve,T.width,T.height):_e(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,ve,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ve,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(T.depthTexture);q.__renderTarget=T,(!q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const K=q.__webglTexture,j=ct(T);if(T.depthTexture.format===Pr)_e(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(T.depthTexture.format===Lr)_e(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function qe(P){const T=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),q){const K=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),T.__depthDisposeCallback=K}T.__boundDepthTexture=q}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=P.texture.mipmaps;q&&q.length>0?Me(T.__webglFramebuffer[0],P):Me(T.__webglFramebuffer,P)}else if(k){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]===void 0)T.__webglDepthbuffer[q]=s.createRenderbuffer(),Ie(T.__webglDepthbuffer[q],P,!1);else{const K=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,j)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ie(T.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,j)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(P,T,k){const q=n.get(P);T!==void 0&&fe(q.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&qe(P)}function L(P){const T=P.texture,k=n.get(P),q=n.get(T);P.addEventListener("dispose",w);const K=P.textures,j=P.isWebGLCubeRenderTarget===!0,be=K.length>1;if(be||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=T.version,a.memory.textures++),j){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let ve=0;ve<T.mipmaps.length;ve++)k.__webglFramebuffer[se][ve]=s.createFramebuffer()}else k.__webglFramebuffer[se]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)k.__webglFramebuffer[se]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(be)for(let se=0,ve=K.length;se<ve;se++){const ye=n.get(K[se]);ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&_e(P)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let se=0;se<K.length;se++){const ve=K[se];k.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[se]);const ye=r.convert(ve.format,ve.colorSpace),te=r.convert(ve.type),ce=x(ve.internalFormat,ye,te,ve.colorSpace,P.isXRRenderTarget===!0),Ae=ct(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ce,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,k.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)fe(k.__webglFramebuffer[se][ve],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve);else fe(k.__webglFramebuffer[se],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(T)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let se=0,ve=K.length;se<ve;se++){const ye=K[se],te=n.get(ye);let ce=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),Ce(ce,ye),fe(k.__webglFramebuffer,P,ye,s.COLOR_ATTACHMENT0+se,ce,0),m(ye)&&p(ce)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Ce(se,T),T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)fe(k.__webglFramebuffer[ve],P,T,s.COLOR_ATTACHMENT0,se,ve);else fe(k.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,se,0);m(T)&&p(se),t.unbindTexture()}P.depthBuffer&&qe(P)}function lt(P){const T=P.textures;for(let k=0,q=T.length;k<q;k++){const K=T[k];if(m(K)){const j=v(P),be=n.get(K).__webglTexture;t.bindTexture(j,be),p(j),t.unbindTexture()}}}const Oe=[],Re=[];function ge(P){if(P.samples>0){if(_e(P)===!1){const T=P.textures,k=P.width,q=P.height;let K=s.COLOR_BUFFER_BIT;const j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(P),se=T.length>1;if(se)for(let ye=0;ye<T.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ve=P.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const te=n.get(T[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,k,q,0,0,k,q,K,s.NEAREST),l===!0&&(Oe.length=0,Re.length=0,Oe.push(s.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Oe.push(j),Re.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let ye=0;ye<T.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const te=n.get(T[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ct(P){return Math.min(i.maxSamples,P.samples)}function _e(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Be(P){const T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Et(P,T){const k=P.colorSpace,q=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==qt&&k!==Ti&&(We.getTransfer(k)===Je?(q!==En||K!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}function _t(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=U,this.rebindTextures=Ot,this.setupRenderTarget=L,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function gy(s,e){function t(n,i=Ti){let r;const a=We.getTransfer(i);if(n===$n)return s.UNSIGNED_BYTE;if(n===wc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ac)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mh)return s.BYTE;if(n===Th)return s.SHORT;if(n===Cr)return s.UNSIGNED_SHORT;if(n===Ec)return s.INT;if(n===os)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===er)return s.HALF_FLOAT;if(n===Ah)return s.ALPHA;if(n===Ch)return s.RGB;if(n===En)return s.RGBA;if(n===Pr)return s.DEPTH_COMPONENT;if(n===Lr)return s.DEPTH_STENCIL;if(n===Cc)return s.RED;if(n===Rc)return s.RED_INTEGER;if(n===Rh)return s.RG;if(n===Pc)return s.RG_INTEGER;if(n===Lc)return s.RGBA_INTEGER;if(n===Ca||n===Ra||n===Pa||n===La)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===Ml||n===Tl||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Al||n===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Al)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rl||n===Pl||n===Ll||n===Il||n===Dl||n===Ol||n===Nl||n===Ul||n===Fl||n===Bl||n===kl||n===zl||n===Gl||n===Hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vl||n===Wl||n===Xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vl)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===ql||n===Yl||n===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const _y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:_y,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new no(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yy extends tr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new xy,p={},v=t.getContextAttributes();let x=null,y=null;const M=[],A=[],w=new xe;let C=null;const S=new Vt;S.viewport=new $e;const b=new Vt;b.viewport=new $e;const R=[S,b],I=new Ig;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=M[Y];return J===void 0&&(J=new Do,M[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=M[Y];return J===void 0&&(J=new Do,M[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=M[Y];return J===void 0&&(J=new Do,M[Y]=J),J.getHandSpace()};function G(Y){const J=A.indexOf(Y.inputSource);if(J===-1)return;const fe=M[J];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||a),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<M.length;Y++){const J=A[Y];J!==null&&(A[Y]=null,M[Y].disconnect(J))}N=null,z=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(x),f=null,h=null,d=null,i=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ie=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?Lr:Pr,Ie=v.stencil?Rr:os);const qe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(qe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Oi(h.textureWidth,h.textureHeight,{format:En,type:$n,depthTexture:new jh(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Oi(f.framebufferWidth,f.framebufferHeight,{format:En,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(Y){for(let J=0;J<Y.removed.length;J++){const fe=Y.removed[J],Ie=A.indexOf(fe);Ie>=0&&(A[Ie]=null,M[Ie].disconnect(fe))}for(let J=0;J<Y.added.length;J++){const fe=Y.added[J];let Ie=A.indexOf(fe);if(Ie===-1){for(let qe=0;qe<M.length;qe++)if(qe>=A.length){A.push(fe),Ie=qe;break}else if(A[qe]===null){A[qe]=fe,Ie=qe;break}if(Ie===-1)break}const Me=M[Ie];Me&&Me.connect(fe)}}const U=new D,Z=new D;function ie(Y,J,fe){U.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(fe.matrixWorld);const Ie=U.distanceTo(Z),Me=J.projectionMatrix.elements,qe=fe.projectionMatrix.elements,Ot=Me[14]/(Me[10]-1),L=Me[14]/(Me[10]+1),lt=(Me[9]+1)/Me[5],Oe=(Me[9]-1)/Me[5],Re=(Me[8]-1)/Me[0],ge=(qe[8]+1)/qe[0],ct=Ot*Re,_e=Ot*ge,Be=Ie/(-Re+ge),Et=Be*-Re;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Et),Y.translateZ(Be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const _t=Ot+Be,P=L+Be,T=ct-Et,k=_e+(Ie-Et),q=lt*L/P*_t,K=Oe*L/P*_t;Y.projectionMatrix.makePerspective(T,k,q,K,_t,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ue(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,fe=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),I.near=b.near=S.near=J,I.far=b.far=S.far=fe,(N!==I.near||z!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,z=I.far),I.layers.mask=Y.layers.mask|6,S.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const Ie=Y.parent,Me=I.cameras;ue(I,Ie);for(let qe=0;qe<Me.length;qe++)ue(Me[qe],Ie);Me.length===2?ie(I,S,b):I.projectionMatrix.copy(S.projectionMatrix),Ce(Y,I,Ie)};function Ce(Y,J,fe){fe===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Vs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Y){return p[Y]};let Ze=null;function je(Y,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ie=!1;fe.length!==I.cameras.length&&(I.cameras.length=0,Ie=!0);for(let L=0;L<fe.length;L++){const lt=fe[L];let Oe=null;if(f!==null)Oe=f.getViewport(lt);else{const ge=d.getViewSubImage(h,lt);Oe=ge.viewport,L===0&&(e.setRenderTargetTextures(y,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(y))}let Re=R[L];Re===void 0&&(Re=new Vt,Re.layers.enable(L),Re.viewport=new $e,R[L]=Re),Re.matrix.fromArray(lt.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(lt.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),L===0&&(I.matrix.copy(Re.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ie===!0&&I.cameras.push(Re)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const L=d.getDepthInformation(fe[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let L=0;L<fe.length;L++){const lt=fe[L].camera;if(lt){let Oe=p[lt];Oe||(Oe=new qh,p[lt]=Oe);const Re=d.getCameraImage(lt);Oe.sourceTexture=Re}}}}for(let fe=0;fe<M.length;fe++){const Ie=A[fe],Me=M[fe];Ie!==null&&Me!==void 0&&Me.update(Ie,J,c||a)}Ze&&Ze(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ze=new tf;ze.setAnimationLoop(je),this.setAnimationLoop=function(Y){Ze=Y},this.dispose=function(){}}}const Xi=new Zn,Sy=new Fe;function by(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Xi.copy(y),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(Xi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function My(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(v,M);const A=e.render.frame;r[v.id]!==A&&(h(v),r[v.id]=A)}function u(v){const x=d();v.__bindingPointIndex=x;const y=s.createBuffer(),M=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=i[v.id],y=v.uniforms,M=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,w=y.length;A<w;A++){const C=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,b=C.length;S<b;S++){const R=C[S];if(f(R,A,S,M)===!0){const I=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let G=0;G<N.length;G++){const W=N[G],X=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,I+z,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,z),z+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,y,M){const A=v.value,w=x+"_"+y;if(M[w]===void 0)return typeof A=="number"||typeof A=="boolean"?M[w]=A:M[w]=A.clone(),!0;{const C=M[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return M[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){const x=v.uniforms;let y=0;const M=16;for(let w=0,C=x.length;w<C;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,R=S.length;b<R;b++){const I=S[b],N=Array.isArray(I.value)?I.value:[I.value];for(let z=0,G=N.length;z<G;z++){const W=N[z],X=_(W),U=y%M,Z=U%X.boundary,ie=U+Z;y+=Z,ie!==0&&M-ie<X.storage&&(y+=M-ie),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=X.storage}}}const A=y%M;return A>0&&(y+=M-A),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Ty{constructor(e={}){const{canvas:t=Tm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let M=!1;this._outputColorSpace=bt;let A=0,w=0,C=null,S=-1,b=null;const R=new $e,I=new $e;let N=null;const z=new Le(0);let G=0,W=t.width,X=t.height,U=1,Z=null,ie=null;const ue=new $e(0,0,W,X),Ce=new $e(0,0,W,X);let Ze=!1;const je=new Uc;let ze=!1,Y=!1;const J=new Fe,fe=new D,Ie=new $e,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ot(){return C===null?U:1}let L=n;function lt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",Q,!1),L===null){const F="webgl2";if(L=lt(F,E),L===null)throw lt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,Re,ge,ct,_e,Be,Et,_t,P,T,k,q,K,j,be,se,ve,ye,te,ce,Ae,Se,oe,Ne;function O(){Oe=new Ov(L),Oe.init(),Se=new gy(L,Oe),Re=new Av(L,Oe,e,Se),ge=new py(L,Oe),Re.reversedDepthBuffer&&h&&ge.buffers.depth.setReversed(!0),ct=new Fv(L),_e=new ty,Be=new my(L,Oe,ge,_e,Re,Se,ct),Et=new Rv(y),_t=new Dv(y),P=new Vg(L),oe=new Ev(L,P),T=new Nv(L,P,ct,oe),k=new kv(L,T,P,ct),te=new Bv(L,Re,Be),se=new Cv(_e),q=new ey(y,Et,_t,Oe,Re,oe,se),K=new by(y,_e),j=new iy,be=new cy(Oe),ye=new Tv(y,Et,_t,ge,k,f,l),ve=new hy(y,k,Re),Ne=new My(L,ct,Re,ge),ce=new wv(L,Oe,ct),Ae=new Uv(L,Oe,ct),ct.programs=q.programs,y.capabilities=Re,y.extensions=Oe,y.properties=_e,y.renderLists=j,y.shadowMap=ve,y.state=ge,y.info=ct}O();const ne=new yy(y,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(W,X,!1))},this.getSize=function(E){return E.set(W,X)},this.setSize=function(E,F,H=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,X=F,t.width=Math.floor(E*U),t.height=Math.floor(F*U),H===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(W*U,X*U).floor()},this.setDrawingBufferSize=function(E,F,H){W=E,X=F,U=H,t.width=Math.floor(E*H),t.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,F,H,V){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,F,H,V),ge.viewport(R.copy(ue).multiplyScalar(U).round())},this.getScissor=function(E){return E.copy(Ce)},this.setScissor=function(E,F,H,V){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,F,H,V),ge.scissor(I.copy(Ce).multiplyScalar(U).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){ge.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){ie=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,H=!0){let V=0;if(E){let B=!1;if(C!==null){const ee=C.texture.format;B=ee===Lc||ee===Pc||ee===Rc}if(B){const ee=C.texture.type,le=ee===$n||ee===os||ee===Cr||ee===Rr||ee===wc||ee===Ac,pe=ye.getClearColor(),de=ye.getClearAlpha(),we=pe.r,Pe=pe.g,Te=pe.b;le?(g[0]=we,g[1]=Pe,g[2]=Te,g[3]=de,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=we,_[1]=Pe,_[2]=Te,_[3]=de,L.clearBufferiv(L.COLOR,0,_))}else V|=L.COLOR_BUFFER_BIT}F&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),ye.dispose(),j.dispose(),be.dispose(),_e.dispose(),Et.dispose(),_t.dispose(),k.dispose(),oe.dispose(),Ne.dispose(),q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",zn),ne.removeEventListener("sessionend",cu),Bi.stop()};function re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=ct.autoReset,F=ve.enabled,H=ve.autoUpdate,V=ve.needsUpdate,B=ve.type;O(),ct.autoReset=E,ve.enabled=F,ve.autoUpdate=H,ve.needsUpdate=V,ve.type=B}function Q(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $(E){const F=E.target;F.removeEventListener("dispose",$),me(F)}function me(E){De(E),_e.remove(E)}function De(E){const F=_e.get(E).programs;F!==void 0&&(F.forEach(function(H){q.releaseProgram(H)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,V,B,ee){F===null&&(F=Me);const le=B.isMesh&&B.matrixWorld.determinant()<0,pe=yp(E,F,H,V,B);ge.setMaterial(V,le);let de=H.index,we=1;if(V.wireframe===!0){if(de=T.getWireframeAttribute(H),de===void 0)return;we=2}const Pe=H.drawRange,Te=H.attributes.position;let Ve=Pe.start*we,tt=(Pe.start+Pe.count)*we;ee!==null&&(Ve=Math.max(Ve,ee.start*we),tt=Math.min(tt,(ee.start+ee.count)*we)),de!==null?(Ve=Math.max(Ve,0),tt=Math.min(tt,de.count)):Te!=null&&(Ve=Math.max(Ve,0),tt=Math.min(tt,Te.count));const mt=tt-Ve;if(mt<0||mt===1/0)return;oe.setup(B,V,pe,H,de);let at,nt=ce;if(de!==null&&(at=P.get(de),nt=Ae,nt.setIndex(at)),B.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*Ot()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(B.isLine){let Ee=V.linewidth;Ee===void 0&&(Ee=1),ge.setLineWidth(Ee*Ot()),B.isLineSegments?nt.setMode(L.LINES):B.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else B.isPoints?nt.setMode(L.POINTS):B.isSprite&&nt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ee=B._multiDrawStarts,dt=B._multiDrawCounts,Ye=B._multiDrawCount,rn=de?P.get(de).bytesPerElement:1,hs=_e.get(V).currentProgram.getUniforms();for(let an=0;an<Ye;an++)hs.setValue(L,"_gl_DrawID",an),nt.render(Ee[an]/rn,dt[an])}else if(B.isInstancedMesh)nt.renderInstances(Ve,mt,B.count);else if(H.isInstancedBufferGeometry){const Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,dt=Math.min(H.instanceCount,Ee);nt.renderInstances(Ve,mt,dt)}else nt.render(Ve,mt)};function rt(E,F,H){E.transparent===!0&&E.side===Vn&&E.forceSinglePass===!1?(E.side=Zt,E.needsUpdate=!0,Yr(E,F,H),E.side=pi,E.needsUpdate=!0,Yr(E,F,H),E.side=Vn):Yr(E,F,H)}this.compile=function(E,F,H=null){H===null&&(H=E),p=be.get(H),p.init(F),x.push(p),H.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const V=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ee=B.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const pe=ee[le];rt(pe,H,B),V.add(pe)}else rt(ee,H,B),V.add(ee)}),p=x.pop(),V},this.compileAsync=function(E,F,H=null){const V=this.compile(E,F,H);return new Promise(B=>{function ee(){if(V.forEach(function(le){_e.get(le).currentProgram.isReady()&&V.delete(le)}),V.size===0){B(E);return}setTimeout(ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ke=null;function ei(E){Ke&&Ke(E)}function zn(){Bi.stop()}function cu(){Bi.start()}const Bi=new tf;Bi.setAnimationLoop(ei),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(E){Ke=E,ne.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},ne.addEventListener("sessionstart",zn),ne.addEventListener("sessionend",cu),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,F,C),p=be.get(E,x.length),p.init(F),x.push(p),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),je.setFromProjectionMatrix(J,Xn,F.reversedDepth),Y=this.localClippingEnabled,ze=se.init(this.clippingPlanes,Y),m=j.get(E,v.length),m.init(),v.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&co(ee,F,-1/0,y.sortObjects)}co(E,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Z,ie),qe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,qe&&ye.addToRenderList(m,E),this.info.render.frame++,ze===!0&&se.beginShadows();const H=p.state.shadowsArray;ve.render(H,E,F),ze===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ee=F.cameras;if(B.length>0)for(let le=0,pe=ee.length;le<pe;le++){const de=ee[le];du(V,B,E,de)}qe&&ye.render(E);for(let le=0,pe=ee.length;le<pe;le++){const de=ee[le];uu(m,E,de,de.viewport)}}else B.length>0&&du(V,B,E,F),qe&&ye.render(E),uu(m,E,F);C!==null&&w===0&&(Be.updateMultisampleRenderTarget(C),Be.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(y,E,F),oe.resetDefaultState(),S=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],ze===!0&&se.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function co(E,F,H,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||je.intersectsSprite(E)){V&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);const le=k.update(E),pe=E.material;pe.visible&&m.push(E,le,pe,H,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||je.intersectsObject(E))){const le=k.update(E),pe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ie.copy(le.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(J)),Array.isArray(pe)){const de=le.groups;for(let we=0,Pe=de.length;we<Pe;we++){const Te=de[we],Ve=pe[Te.materialIndex];Ve&&Ve.visible&&m.push(E,le,Ve,H,Ie.z,Te)}}else pe.visible&&m.push(E,le,pe,H,Ie.z,null)}}const ee=E.children;for(let le=0,pe=ee.length;le<pe;le++)co(ee[le],F,H,V)}function uu(E,F,H,V){const B=E.opaque,ee=E.transmissive,le=E.transparent;p.setupLightsView(H),ze===!0&&se.setGlobalState(y.clippingPlanes,H),V&&ge.viewport(R.copy(V)),B.length>0&&qr(B,F,H),ee.length>0&&qr(ee,F,H),le.length>0&&qr(le,F,H),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function du(E,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Oi(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?er:$n,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const ee=p.state.transmissionRenderTarget[V.id],le=V.viewport||R;ee.setSize(le.z*y.transmissionResolutionScale,le.w*y.transmissionResolutionScale);const pe=y.getRenderTarget(),de=y.getActiveCubeFace(),we=y.getActiveMipmapLevel();y.setRenderTarget(ee),y.getClearColor(z),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),qe&&ye.render(H);const Pe=y.toneMapping;y.toneMapping=Li;const Te=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ze===!0&&se.setGlobalState(y.clippingPlanes,V),qr(E,H,V),Be.updateMultisampleRenderTarget(ee),Be.updateRenderTargetMipmap(ee),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let tt=0,mt=F.length;tt<mt;tt++){const at=F[tt],nt=at.object,Ee=at.geometry,dt=at.material,Ye=at.group;if(dt.side===Vn&&nt.layers.test(V.layers)){const rn=dt.side;dt.side=Zt,dt.needsUpdate=!0,hu(nt,H,V,Ee,dt,Ye),dt.side=rn,dt.needsUpdate=!0,Ve=!0}}Ve===!0&&(Be.updateMultisampleRenderTarget(ee),Be.updateRenderTargetMipmap(ee))}y.setRenderTarget(pe,de,we),y.setClearColor(z,G),Te!==void 0&&(V.viewport=Te),y.toneMapping=Pe}function qr(E,F,H){const V=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ee=E.length;B<ee;B++){const le=E[B],pe=le.object,de=le.geometry,we=le.group;let Pe=le.material;Pe.allowOverride===!0&&V!==null&&(Pe=V),pe.layers.test(H.layers)&&hu(pe,F,H,de,Pe,we)}}function hu(E,F,H,V,B,ee){E.onBeforeRender(y,F,H,V,B,ee),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(y,F,H,V,E,ee),B.transparent===!0&&B.side===Vn&&B.forceSinglePass===!1?(B.side=Zt,B.needsUpdate=!0,y.renderBufferDirect(H,F,V,B,E,ee),B.side=pi,B.needsUpdate=!0,y.renderBufferDirect(H,F,V,B,E,ee),B.side=Vn):y.renderBufferDirect(H,F,V,B,E,ee),E.onAfterRender(y,F,H,V,B,ee)}function Yr(E,F,H){F.isScene!==!0&&(F=Me);const V=_e.get(E),B=p.state.lights,ee=p.state.shadowsArray,le=B.state.version,pe=q.getParameters(E,B.state,ee,F,H),de=q.getProgramCacheKey(pe);let we=V.programs;V.environment=E.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(E.isMeshStandardMaterial?_t:Et).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",$),we=new Map,V.programs=we);let Pe=we.get(de);if(Pe!==void 0){if(V.currentProgram===Pe&&V.lightsStateVersion===le)return pu(E,pe),Pe}else pe.uniforms=q.getUniforms(E),E.onBeforeCompile(pe,y),Pe=q.acquireProgram(pe,de),we.set(de,Pe),V.uniforms=pe.uniforms;const Te=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=se.uniform),pu(E,pe),V.needsLights=bp(E),V.lightsStateVersion=le,V.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Pe,V.uniformsList=null,Pe}function fu(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ia.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function pu(E,F){const H=_e.get(E);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function yp(E,F,H,V,B){F.isScene!==!0&&(F=Me),Be.resetTextureUnits();const ee=F.fog,le=V.isMeshStandardMaterial?F.environment:null,pe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:qt,de=(V.isMeshStandardMaterial?_t:Et).get(V.envMap||le),we=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!H.morphAttributes.position,Ve=!!H.morphAttributes.normal,tt=!!H.morphAttributes.color;let mt=Li;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(mt=y.toneMapping);const at=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nt=at!==void 0?at.length:0,Ee=_e.get(V),dt=p.state.lights;if(ze===!0&&(Y===!0||E!==b)){const zt=E===b&&V.id===S;se.setState(V,E,zt)}let Ye=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==dt.state.version||Ee.outputColorSpace!==pe||B.isBatchedMesh&&Ee.batching===!1||!B.isBatchedMesh&&Ee.batching===!0||B.isBatchedMesh&&Ee.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ee.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ee.instancing===!1||!B.isInstancedMesh&&Ee.instancing===!0||B.isSkinnedMesh&&Ee.skinning===!1||!B.isSkinnedMesh&&Ee.skinning===!0||B.isInstancedMesh&&Ee.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ee.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ee.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ee.instancingMorph===!1&&B.morphTexture!==null||Ee.envMap!==de||V.fog===!0&&Ee.fog!==ee||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==se.numPlanes||Ee.numIntersection!==se.numIntersection)||Ee.vertexAlphas!==we||Ee.vertexTangents!==Pe||Ee.morphTargets!==Te||Ee.morphNormals!==Ve||Ee.morphColors!==tt||Ee.toneMapping!==mt||Ee.morphTargetsCount!==nt)&&(Ye=!0):(Ye=!0,Ee.__version=V.version);let rn=Ee.currentProgram;Ye===!0&&(rn=Yr(V,F,B));let hs=!1,an=!1,ar=!1;const ht=rn.getUniforms(),xn=Ee.uniforms;if(ge.useProgram(rn.program)&&(hs=!0,an=!0,ar=!0),V.id!==S&&(S=V.id,an=!0),hs||b!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(L,"projectionMatrix",E.projectionMatrix),ht.setValue(L,"viewMatrix",E.matrixWorldInverse);const $t=ht.map.cameraPosition;$t!==void 0&&$t.setValue(L,fe.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&ht.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,an=!0,ar=!0)}if(B.isSkinnedMesh){ht.setOptional(L,B,"bindMatrix"),ht.setOptional(L,B,"bindMatrixInverse");const zt=B.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),ht.setValue(L,"boneTexture",zt.boneTexture,Be))}B.isBatchedMesh&&(ht.setOptional(L,B,"batchingTexture"),ht.setValue(L,"batchingTexture",B._matricesTexture,Be),ht.setOptional(L,B,"batchingIdTexture"),ht.setValue(L,"batchingIdTexture",B._indirectTexture,Be),ht.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&ht.setValue(L,"batchingColorTexture",B._colorsTexture,Be));const yn=H.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&te.update(B,H,rn),(an||Ee.receiveShadow!==B.receiveShadow)&&(Ee.receiveShadow=B.receiveShadow,ht.setValue(L,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(xn.envMap.value=de,xn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(xn.envMapIntensity.value=F.environmentIntensity),an&&(ht.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Sp(xn,ar),ee&&V.fog===!0&&K.refreshFogUniforms(xn,ee),K.refreshMaterialUniforms(xn,V,U,X,p.state.transmissionRenderTarget[E.id]),Ia.upload(L,fu(Ee),xn,Be)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ia.upload(L,fu(Ee),xn,Be),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(L,"center",B.center),ht.setValue(L,"modelViewMatrix",B.modelViewMatrix),ht.setValue(L,"normalMatrix",B.normalMatrix),ht.setValue(L,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const zt=V.uniformsGroups;for(let $t=0,uo=zt.length;$t<uo;$t++){const ki=zt[$t];Ne.update(ki,rn),Ne.bind(ki,rn)}}return rn}function Sp(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function bp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,F,H){const V=_e.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_e.get(E.texture).__webglTexture=F,_e.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const H=_e.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const Mp=L.createFramebuffer();this.setRenderTarget=function(E,F=0,H=0){C=E,A=F,w=H;let V=!0,B=null,ee=!1,le=!1;if(E){const de=_e.get(E);if(de.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(de.__webglFramebuffer===void 0)Be.setupRenderTarget(E);else if(de.__hasExternalTextures)Be.rebindTextures(E,_e.get(E.texture).__webglTexture,_e.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(de.__boundDepthTexture!==Te){if(Te!==null&&_e.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(E)}}const we=E.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(le=!0);const Pe=_e.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?B=Pe[F][H]:B=Pe[F],ee=!0):E.samples>0&&Be.useMultisampledRTT(E)===!1?B=_e.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?B=Pe[H]:B=Pe,R.copy(E.viewport),I.copy(E.scissor),N=E.scissorTest}else R.copy(ue).multiplyScalar(U).floor(),I.copy(Ce).multiplyScalar(U).floor(),N=Ze;if(H!==0&&(B=Mp),ge.bindFramebuffer(L.FRAMEBUFFER,B)&&V&&ge.drawBuffers(E,B),ge.viewport(R),ge.scissor(I),ge.setScissorTest(N),ee){const de=_e.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,H)}else if(le){const de=F;for(let we=0;we<E.textures.length;we++){const Pe=_e.get(E.textures[we]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+we,Pe.__webglTexture,H,de)}}else if(E!==null&&H!==0){const de=_e.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,de.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(E,F,H,V,B,ee,le,pe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){ge.bindFramebuffer(L.FRAMEBUFFER,de);try{const we=E.textures[pe],Pe=we.format,Te=we.type;if(!Re.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&H>=0&&H<=E.height-B&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),L.readPixels(F,H,V,B,Se.convert(Pe),Se.convert(Te),ee))}finally{const we=C!==null?_e.get(C).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,F,H,V,B,ee,le,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(F>=0&&F<=E.width-V&&H>=0&&H<=E.height-B){ge.bindFramebuffer(L.FRAMEBUFFER,de);const we=E.textures[pe],Pe=we.format,Te=we.type;if(!Re.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),L.readPixels(F,H,V,B,Se.convert(Pe),Se.convert(Te),0);const tt=C!==null?_e.get(C).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,tt);const mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Em(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(Ve),L.deleteSync(mt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,H=0){const V=Math.pow(2,-H),B=Math.floor(E.image.width*V),ee=Math.floor(E.image.height*V),le=F!==null?F.x:0,pe=F!==null?F.y:0;Be.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,le,pe,B,ee),ge.unbindTexture()};const Tp=L.createFramebuffer(),Ep=L.createFramebuffer();this.copyTextureToTexture=function(E,F,H=null,V=null,B=0,ee=null){ee===null&&(B!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=B,B=0):ee=0);let le,pe,de,we,Pe,Te,Ve,tt,mt;const at=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(H!==null)le=H.max.x-H.min.x,pe=H.max.y-H.min.y,de=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Pe=H.min.y,Te=H.isBox3?H.min.z:0;else{const yn=Math.pow(2,-B);le=Math.floor(at.width*yn),pe=Math.floor(at.height*yn),E.isDataArrayTexture?de=at.depth:E.isData3DTexture?de=Math.floor(at.depth*yn):de=1,we=0,Pe=0,Te=0}V!==null?(Ve=V.x,tt=V.y,mt=V.z):(Ve=0,tt=0,mt=0);const nt=Se.convert(F.format),Ee=Se.convert(F.type);let dt;F.isData3DTexture?(Be.setTexture3D(F,0),dt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Be.setTexture2DArray(F,0),dt=L.TEXTURE_2D_ARRAY):(Be.setTexture2D(F,0),dt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Ye=L.getParameter(L.UNPACK_ROW_LENGTH),rn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hs=L.getParameter(L.UNPACK_SKIP_PIXELS),an=L.getParameter(L.UNPACK_SKIP_ROWS),ar=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,at.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te);const ht=E.isDataArrayTexture||E.isData3DTexture,xn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const yn=_e.get(E),zt=_e.get(F),$t=_e.get(yn.__renderTarget),uo=_e.get(zt.__renderTarget);ge.bindFramebuffer(L.READ_FRAMEBUFFER,$t.__webglFramebuffer),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,uo.__webglFramebuffer);for(let ki=0;ki<de;ki++)ht&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(E).__webglTexture,B,Te+ki),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(F).__webglTexture,ee,mt+ki)),L.blitFramebuffer(we,Pe,le,pe,Ve,tt,le,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||_e.has(E)){const yn=_e.get(E),zt=_e.get(F);ge.bindFramebuffer(L.READ_FRAMEBUFFER,Tp),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ep);for(let $t=0;$t<de;$t++)ht?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yn.__webglTexture,B,Te+$t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yn.__webglTexture,B),xn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zt.__webglTexture,ee,mt+$t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zt.__webglTexture,ee),B!==0?L.blitFramebuffer(we,Pe,le,pe,Ve,tt,le,pe,L.COLOR_BUFFER_BIT,L.NEAREST):xn?L.copyTexSubImage3D(dt,ee,Ve,tt,mt+$t,we,Pe,le,pe):L.copyTexSubImage2D(dt,ee,Ve,tt,we,Pe,le,pe);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else xn?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(dt,ee,Ve,tt,mt,le,pe,de,nt,Ee,at.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(dt,ee,Ve,tt,mt,le,pe,de,nt,at.data):L.texSubImage3D(dt,ee,Ve,tt,mt,le,pe,de,nt,Ee,at):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ee,Ve,tt,le,pe,nt,Ee,at.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ee,Ve,tt,at.width,at.height,nt,at.data):L.texSubImage2D(L.TEXTURE_2D,ee,Ve,tt,le,pe,nt,Ee,at);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ye),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hs),L.pixelStorei(L.UNPACK_SKIP_ROWS,an),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ar),ee===0&&F.generateMipmaps&&L.generateMipmap(dt),ge.unbindTexture()},this.initRenderTarget=function(E){_e.get(E).__webglFramebuffer===void 0&&Be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Be.setTextureCube(E,0):E.isData3DTexture?Be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Be.setTexture2DArray(E,0):Be.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}function tc(){return tc=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s},tc.apply(this,arguments)}var Ey={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(s){},onComplete:function(s){},preStringTyped:function(s,e){},onStringTyped:function(s,e){},onLastStringBackspaced:function(s){},onTypingPaused:function(s,e){},onTypingResumed:function(s,e){},onReset:function(s){},onStop:function(s,e){},onStart:function(s,e){},onDestroy:function(s){}},wy=new((function(){function s(){}var e=s.prototype;return e.load=function(t,n,i){if(t.el=typeof i=="string"?document.querySelector(i):i,t.options=tc({},Ey,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(c){return c.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(t.stringsElement.children),a=r.length;if(a)for(var o=0;o<a;o+=1)t.strings.push(r[o].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var i=document.createElement("style");i.setAttribute(n,"true"),i.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(i)}},e.appendFadeOutAnimationCss=function(t){var n="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+n+"]")){var i=document.createElement("style");i.setAttribute(n,"true"),i.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(i)}},s})()),Od=new((function(){function s(){}var e=s.prototype;return e.typeHtmlChars=function(t,n,i){if(i.contentType!=="html")return n;var r=t.substring(n).charAt(0);if(r==="<"||r==="&"){var a;for(a=r==="<"?">":";";t.substring(n+1).charAt(0)!==a&&!(1+ ++n>t.length););n++}return n},e.backSpaceHtmlChars=function(t,n,i){if(i.contentType!=="html")return n;var r=t.substring(n).charAt(0);if(r===">"||r===";"){var a;for(a=r===">"?"<":"&";t.substring(n-1).charAt(0)!==a&&!(--n<0););n--}return n},s})()),Ay=(function(){function s(t,n){wy.load(this,n,t),this.begin()}var e=s.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,n){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),a=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=Od.typeHtmlChars(t,n,i);var o=0,l=t.substring(n);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var c=1;c+=(l=/\d+/.exec(l)[0]).length,o=parseInt(l),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),t=t.substring(0,n)+t.substring(n+c),i.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;t.substring(n+a).charAt(0)!=="`"&&(a++,!(n+a>t.length)););var u=t.substring(0,n),d=t.substring(u.length+1,n+a),h=t.substring(n+a+1);t=u+d+h,a--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),n>=t.length?i.doneTyping(t,n):i.keepTyping(t,n,a),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},o)},r):this.setPauseStatus(t,n,!0)},e.keepTyping=function(t,n,i){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var r=t.substring(0,n+=i);this.replaceText(r),this.typewrite(t,n)},e.doneTyping=function(t,n){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){i.backspace(t,n)},this.backDelay))},e.backspace=function(t,n){var i=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=Od.backSpaceHtmlChars(t,n,i);var a=t.substring(0,n);if(i.replaceText(a),i.smartBackspace){var o=i.strings[i.arrayPos+1];i.stopNum=o&&a===o.substring(0,n)?n:0}n>i.stopNum?(n--,i.backspace(t,n)):n<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],n))},r)}else this.setPauseStatus(t,n,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,n,i){this.pause.typewrite=i,this.pause.curString=t,this.pause.curStrPos=n},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},s})();class Vc{constructor(){this.testText=document.getElementById("testText"),this.testTyped={}}setText(e,t=[],n=!0,i=!1,r=10,a){if(t==null||t==[]){console.log("Invalid text input");return}if(e in this.testTyped&&(this.testTyped[e].destroy(),delete this.testTyped[e]),!n){this.testText.textContent=t;return}this.testTyped[e]=new Ay(e,{strings:t,typeSpeed:r,showCursor:i,cursorChar:"█",onComplete:function(){a&&a()}})}removeText(e){e in this.testTyped&&(this.testTyped[e].destroy(),delete this.testTyped[e])}}class Cy{constructor(){this.text=document.getElementById("introText"),this.wrapper=document.getElementById("introTextTypedWrapper"),this.tvFlash=document.getElementById("tvFlash"),this.textMgr=new Vc}async begin(e){const t=new Date,n=t.getHours().toString()+":"+t.getMinutes().toString()+":"+t.getSeconds().toString(),i=t.toLocaleString("default",{month:"long"})+" "+t.toLocaleString("default",{day:"numeric"})+", "+t.toLocaleString("default",{year:"numeric"});this.wrapper.addEventListener("animationend",()=>{this.tvFlash.classList.add("tv-flash-on")}),this.tvFlash.addEventListener("animationend",()=>{this.tvFlash.style.transitionDuration="1000ms",this.tvFlash.style.opacity=0,e&&e()}),this.textMgr.setText("#introText",["> Running arrival sequence^750.^750.^750.^750<br>>^250<br>> Activity-B4DR 1900.65.69<br>>> "+i+"<br>>> "+n+"^750<br>>^100<br>>^100<br>> Approaching Subsystem:^250<br>>> name-<br>>> D34N-B4DR<br>>^250<br>>> type- <br>>> P0R7F0L10<br>>^250<br>>> GCS- <br>>> <i>l</i> = 08°<br>>> <i>b</i> = 13°<br>>^250<br>> Displaying VCam™ 3 video stream^750.^750.^750.^500"],!0,!0,10,()=>{this.wrapper.classList.add("text-off")})}}class Ry{constructor(e){this.camera=new Vt(75,window.innerWidth/window.innerHeight,.01,1e3),this.cameraTarget=new ot,e.add(this.cameraTarget)}setPosition(e,t,n){this.camera.position.set(e,t,n)}setTargetPosition(e,t,n){this.cameraTarget.position.set(e,t,n)}target(e,t,n){this.camera.lookAt(e,t,n)}getCamera(){return this.camera}getCameraTarget(){return this.cameraTarget}updateCameraTarget(){this.camera.lookAt(this.cameraTarget.position)}}function li(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function of(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ys={duration:.5,overwrite:!1,delay:0},Wc,Pt,ut,wn=1e8,st=1/wn,nc=Math.PI*2,Py=nc/4,Ly=0,lf=Math.sqrt,Iy=Math.cos,Dy=Math.sin,Rt=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},mi=function(e){return typeof e=="number"},Xc=function(e){return typeof e>"u"},Jn=function(e){return typeof e=="object"},Qt=function(e){return e!==!1},jc=function(){return typeof window<"u"},ba=function(e){return gt(e)||Rt(e)},cf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,ic=/(?:-?\.?\d|\.)+/gi,uf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,df=/[+-]=-?[.\d]+/,hf=/[^,'"\[\]\s]+/gi,Oy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ft,Hn,sc,qc,gn={},Ha={},ff,pf=function(e){return(Ha=$s(e,gn))&&sn},Yc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ur=function(e,t){return!t&&console.warn(e)},mf=function(e,t){return e&&(gn[e]=t)&&Ha&&(Ha[e]=t)||gn},Fr=function(){return 0},Ny={suppressEvents:!0,isStart:!0,kill:!1},Da={suppressEvents:!0,kill:!1},Uy={suppressEvents:!0},$c={},Ii=[],rc={},gf,cn={},Yo={},Nd=30,Oa=[],Kc="",Zc=function(e){var t=e[0],n,i;if(Jn(t)||gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Oa.length;i--&&!Oa[i].targetTest(t););n=Oa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zf(e[i],n)))||e.splice(i,1);return e},is=function(e){return e._gsap||Zc(An(e))[0]._gsap},_f=function(e,t,n){return(n=e[t])&&gt(n)?e[t]():Xc(n)&&e.getAttribute&&e.getAttribute(t)||n},en=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},Ns=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Fy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Va=function(){var e=Ii.length,t=Ii.slice(0),n,i;for(rc={},Ii.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jc=function(e){return!!(e._initted||e._startAt||e.add)},vf=function(e,t,n,i){Ii.length&&!Pt&&Va(),e.render(t,n,!!(Pt&&t<0&&Jc(e))),Ii.length&&!Pt&&Va()},xf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hf).length<2?t:Rt(e)?e.trim():e},yf=function(e){return e},_n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},By=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},$s=function(e,t){for(var n in t)e[n]=t[n];return e},Ud=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Jn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Wa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Er=function(e){var t=e.parent||ft,n=e.keyframes?By(kt(e.keyframes)):_n;if(Qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ky=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Sf=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ao=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ni=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ss=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ac=function(e,t,n,i){return e._startAt&&(Pt?e._startAt.revert(Da):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Gy=function s(e){return!e||e._ts&&s(e.parent)},Fd=function(e){return e._repeat?Ks(e._tTime,e=e.duration()+e._rDelay)*e:0},Ks=function(e,t){var n=Math.floor(e=St(e/t));return e&&n===e?n-1:n},Xa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},oo=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},lo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=St(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),oo(e),n._dirty||ss(n,e)),e},bf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Xa(e.rawTime(),t),(!t._dur||Xr(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),ss(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Wn=function(e,t,n,i){return t.parent&&Ni(t),t._start=St((mi(n)?n:n||e!==ft?bn(e,n,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Sf(e,t,"_first","_last",e._sort?"_start":0),oc(t)||(e._recent=t),i||bf(e,t),e._ts<0&&lo(e,e._tTime),e},Mf=function(e,t){return(gn.ScrollTrigger||Yc("scrollTrigger",t))&&gn.ScrollTrigger.create(t,e)},Tf=function(e,t,n,i,r){if(eu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gf!==dn.frame)return Ii.push(e),e._lazy=[r,i],1},Hy=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},oc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Vy=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Hy(e)&&!(!e._initted&&oc(e))||(e._ts<0||e._dp._ts<0)&&!oc(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Xr(0,e._tDur,t),u=Ks(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ks(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Pt||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&Tf(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ac(e,t,n,!0),e._onUpdate&&!n&&fn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ni(e,1),!n&&!Pt&&(fn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Wy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Zs=function(e,t,n,i){var r=e._repeat,a=St(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:St(a*(r+1)+e._rDelay*r):a,o>0&&!i&&lo(e,e._tTime=e._tDur*o),e.parent&&oo(e),n||ss(e.parent,e),e},Bd=function(e){return e instanceof Wt?ss(e):Zs(e,e._dur)},Xy={_start:0,endTime:Fr,totalDuration:Fr},bn=function s(e,t,n){var i=e.labels,r=e._recent||Xy,a=e.duration()>=wn?r.endTime(!1):e._dur,o,l,c;return Rt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},wr=function(e,t,n){var i=mi(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qt(l.vars.inherit)&&l.parent;a.immediateRender=Qt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new yt(t[0],a,t[r+1])},Fi=function(e,t){return e||e===0?t(e):t},Xr=function(e,t,n){return n<e?e:n>t?t:n},Ft=function(e,t){return!Rt(e)||!(t=Oy.exec(e))?"":t[1]},jy=function(e,t,n){return Fi(n,function(i){return Xr(e,t,i)})},lc=[].slice,Ef=function(e,t){return e&&Jn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Jn(e[0]))&&!e.nodeType&&e!==Hn},qy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Rt(i)&&!t||Ef(i,1)?(r=n).push.apply(r,An(i)):n.push(i)})||n},An=function(e,t,n){return ut&&!t&&ut.selector?ut.selector(e):Rt(e)&&!n&&(sc||!Js())?lc.call((t||qc).querySelectorAll(e),0):kt(e)?qy(e,n):Ef(e)?lc.call(e,0):e?[e]:[]},cc=function(e){return e=An(e)[0]||Ur("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return An(t,n.querySelectorAll?n:n===e?Ur("Invalid scope")||qc.createElement("div"):e)}},wf=function(e){return e.sort(function(){return .5-Math.random()})},Af=function(e){if(gt(e))return e;var t=Jn(e)?e:{each:e},n=rs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return Rt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||t).length,m=a[_],p,v,x,y,M,A,w,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,wn])[1],!S){for(w=-wn;w<(w=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=a[_]=[],p=l?Math.min(S,_)*u-.5:i%S,v=S===wn?0:l?_*d/S-.5:i/S|0,w=0,C=wn,A=0;A<_;A++)x=A%S-p,y=v-(A/S|0),m[A]=M=c?Math.abs(c==="y"?y:x):lf(x*x+y*y),M>w&&(w=M),M<C&&(C=M);i==="random"&&wf(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Ft(t.amount||t.each)||0,n=n&&_<0?Ff(n):n}return _=(m[h]-m.min)/m.max||0,St(m.b+(n?n(_):_)*m.v)+m.u}},uc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=St(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(mi(n)?0:Ft(n))}},Cf=function(e,t){var n=kt(e),i,r;return!n&&Jn(e)&&(i=n=e.radius||wn,e.values?(e=An(e.values),(r=!mi(e[0]))&&(i*=i)):e=uc(e.increment)),Fi(t,n?gt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=wn,u=0,d=e.length,h,f;d--;)r?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,r||u===a||mi(a)?u:u+Ft(a)}:uc(e))},Rf=function(e,t,n,i){return Fi(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Yy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},$y=function(e,t){return function(n){return e(parseFloat(n))+(t||Ft(n))}},Ky=function(e,t,n){return Lf(e,t,0,1,n)},Pf=function(e,t,n){return Fi(n,function(i){return e[~~t(i)]})},Zy=function s(e,t,n){var i=t-e;return kt(e)?Pf(e,s(0,e.length),t):Fi(n,function(r){return(i+(r-e)%i)%i+e})},Jy=function s(e,t,n){var i=t-e,r=i*2;return kt(e)?Pf(e,s(0,e.length-1),t):Fi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Br=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?hf:ic),n+=e.substr(t,i-t)+Rf(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Lf=function(e,t,n,i,r){var a=t-e,o=i-n;return Fi(r,function(l){return n+((l-e)/a*o||0)})},Qy=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=Rt(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(s(e[c-1],e[c]));d--,r=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=$s(kt(e)?[]:{},e));if(!u){for(l in t)Qc.call(o,e,l,"get",t[l]);r=function(g){return iu(g,o)||(a?e.p:e)}}}return Fi(n,r)},kd=function(e,t,n){var i=e.labels,r=wn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},fn=function(e,t,n){var i=e.vars,r=i[t],a=ut,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ii.length&&Va(),o&&(ut=o),u=l?r.apply(c,l):r.call(c),ut=a,u},yr=function(e){return Ni(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pt),e.progress()<1&&fn(e,"onInterrupt"),e},Is,If=[],Df=function(e){if(e)if(e=!e.name&&e.default||e,jc()||e.headless){var t=e.name,n=gt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Fr,render:iu,add:Qc,kill:mS,modifier:pS,rawVars:0},a={targetTest:0,get:0,getSetter:nu,aliases:{},register:0};if(Js(),e!==i){if(cn[t])return;_n(i,_n(Wa(e,r),a)),$s(i.prototype,$s(r,Wa(e,a))),cn[i.prop=t]=i,e.targetTest&&(Oa.push(i),$c[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mf(t,i),e.register&&e.register(sn,i,tn)}else If.push(e)},it=255,Sr={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},$o=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*it+.5|0},Of=function(e,t,n){var i=e?mi(e)?[e>>16,e>>8&it,e&it]:0:Sr.black,r,a,o,l,c,u,d,h,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Sr[e])i=Sr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&it,i&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(ic),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=$o(l+1/3,r,a),i[1]=$o(l,r,a),i[2]=$o(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(uf),n&&i.length<4&&(i[3]=1),i}else i=e.match(ic)||Sr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/it,a=i[1]/it,o=i[2]/it,d=Math.max(r,a,o),h=Math.min(r,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Nf=function(e){var t=[],n=[],i=-1;return e.split(Di).forEach(function(r){var a=r.match(Ls)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},zd=function(e,t,n){var i="",r=(e+i).match(Di),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!r)return e;if(r=r.map(function(h){return(h=Of(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Nf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Di,"1").split(Ls),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Di),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},Di=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Sr)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),eS=/hsl[a]?\(/,Uf=function(e){var t=e.join(" "),n;if(Di.lastIndex=0,Di.test(t))return n=eS.test(t),e[1]=zd(e[1],n),e[0]=zd(e[0],n,Nf(e[1])),!0},kr,dn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,d,h,f,g=function _(m){var p=s()-i,v=m===!0,x,y,M,A;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,x=M-a,(x>0||v)&&(A=++d.frame,h=M-d.time*1e3,d.time=M=M/1e3,a+=x+(x>=r?4:r-x),y=1),v||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](M,h,A,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ff&&(!sc&&jc()&&(Hn=sc=window,qc=Hn.document||{},gn.gsap=sn,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(sn.version),pf(Ha||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),If.forEach(Df)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},kr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),kr=0,c=Fr},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,p,v){var x=p?function(y,M,A,w){m(y,M,A,w),d.remove(x)}:m;return d.remove(m),o[v?"unshift":"push"](x),Js(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})(),Js=function(){return!kr&&dn.wake()},Xe={},tS=/^[\d.\-M][\d.\-,\s]/,nS=/["']/g,iS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(nS,"").trim():+c,i=l.substr(o+1).trim();return t},sS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},rS=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[iS(t[1])]:sS(e).split(",").map(xf)):Xe._CE&&tS.test(e)?Xe._CE("",e):n},Ff=function(e){return function(t){return 1-e(1-t)}},Bf=function s(e,t){for(var n=e._first,i;n;)n instanceof Wt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},rs=function(e,t){return e&&(gt(e)?e:Xe[e]||rS(e))||t},us=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return en(e,function(o){Xe[o]=gn[o]=r,Xe[a=o.toLowerCase()]=n;for(var l in r)Xe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[o+"."+l]=r[l]}),r},kf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ko=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/nc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Dy((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:kf(o);return r=nc/r,l.config=function(c,u){return s(e,c,u)},l},Zo=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:kf(n);return i.config=function(r){return s(e,r)},i};en("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;us(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;us("Elastic",Ko("in"),Ko("out"),Ko());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};us("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);us("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});us("Circ",function(s){return-(lf(1-s*s)-1)});us("Sine",function(s){return s===1?1:-Iy(s*Py)+1});us("Back",Zo("in"),Zo("out"),Zo());Xe.SteppedEase=Xe.steps=gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-st;return function(o){return((i*Xr(0,a,o)|0)+r)*n}}};Ys.ease=Xe["quad.out"];en("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Kc+=s+","+s+"Params,"});var zf=function(e,t){this.id=Ly++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_f,this.set=t?t.getSetter:nu},zr=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zs(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),kr||dn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Js(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(lo(this,n),!r._dp||r.parent||bf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ks(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Xa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(Xr(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),oo(this),zy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Uy);var i=Pt;return Pt=n,Jc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bn(this,n),Qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Qt(i)),this._dur||(this._zTime=-st),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-st)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=gt(n)?n:yf,o=function(){var c=i.then;i.then=null,gt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){yr(this)},s})();_n(zr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Wt=(function(s){of(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Qt(n.sortChildren),ft&&Wn(n.parent||ft,li(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Mf(li(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return wr(0,arguments,this),this},t.from=function(i,r,a){return wr(1,arguments,this),this},t.fromTo=function(i,r,a,o){return wr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Er(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new yt(i,r,bn(this,a),1),this},t.call=function(i,r,a){return Wn(this,yt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new yt(i,a,bn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Er(a).immediateRender=Qt(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,d){return o.startAt=a,Er(o).immediateRender=Qt(o.immediateRender),this.staggerTo(i,r,o,l,c,u,d)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:St(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,m,p,v,x,y,M,A,w;if(this!==ft&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,x=this._ts,p=!x,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(h=St(u%m),u===l?(_=this._repeat,h=c):(M=St(u/m),_=~~M,_&&_===M&&(h=c,_--),h>c&&(h=c)),M=Ks(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),A&&_&1&&(h=c-h,w=1),_!==M&&!this._lock){var C=A&&M&1,S=C===(A&&_&1);if(_<M&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(w?0:St(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Bf(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Wy(this,St(o),St(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!r&&!M&&(fn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,r,a),h!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=-st);break}}f=g}else{f=this._last;for(var b=i<0?i:h;f;){if(g=f._prev,(f._act||b<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(b-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(b-f._start)*f._ts,r,a||Pt&&Jc(f)),h!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=b?-st:st);break}}f=g}}if(v&&!r&&(this.pause(),v.render(h>=o?0:-st)._zTime=h>=o?1:-1,this._ts))return this._start=y,oo(this),this.render(i,r,a);this._onUpdate&&!r&&fn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ni(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(fn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(mi(r)||(r=bn(this,r,i)),!(i instanceof zr)){if(kt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Rt(i))return this.addLabel(i,r);if(gt(i))i=yt.delayedCall(0,i);else return this}return this!==i?Wn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-wn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof yt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Rt(i)?this.removeLabel(i):gt(i)?this.killTweensOf(i):(i.parent===this&&ao(this,i),i===this._recent&&(this._recent=this._last),ss(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(dn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=bn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=yt.delayedCall(0,r||Fr,a);return o.data="isPause",this._hasPause=1,Wn(this,o,bn(this,i))},t.removePause=function(i){var r=this._first;for(i=bn(this,i);r;)r._start===i&&r.data==="isPause"&&Ni(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ai!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=An(i),l=this._first,c=mi(r),u;l;)l instanceof yt?Fy(l._targets,o)&&(c?(!Ai||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=bn(a,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=yt.to(a,_n({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Zs(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,_n({startAt:{time:bn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),kd(this,bn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),kd(this,bn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ss(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ss(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=wn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Wn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Zs(a,a===ft&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ft._ts&&(vf(ft,Xa(i,ft)),gf=dn.frame),dn.frame>=Nd){Nd+=mn.autoSleep||120;var r=ft._first;if((!r||!r._ts)&&mn.autoSleep&&dn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||dn.sleep()}}},e})(zr);_n(Wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var aS=function(e,t,n,i,r,a,o){var l=new tn(this._pt,e,t,0,1,jf,null,r),c=0,u=0,d,h,f,g,_,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Br(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(qo)||[];d=qo.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ns(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=qo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(df.test(i)||p)&&(l.e=0),this._pt=l,l},Qc=function(e,t,n,i,r,a,o,l,c,u){gt(i)&&(i=i(r||0,e,a));var d=e[t],h=n!=="get"?n:gt(d)?c?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=gt(d)?c?dS:Wf:tu,g;if(Rt(i)&&(~i.indexOf("random(")&&(i=Br(i)),i.charAt(1)==="="&&(g=Ns(h,i)+(Ft(h)||0),(g||g===0)&&(i=g))),!u||h!==i||dc)return!isNaN(h*i)&&i!==""?(g=new tn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?fS:Xf,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&Yc(t,i),aS.call(this,e,t,h,i,f,l||mn.stringFilter,c))},oS=function(e,t,n,i,r){if(gt(e)&&(e=Ar(e,r,t,n,i)),!Jn(e)||e.style&&e.nodeType||kt(e)||cf(e))return Rt(e)?Ar(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Ar(e[o],r,t,n,i);return a},Gf=function(e,t,n,i,r,a){var o,l,c,u;if(cn[e]&&(o=new cn[e]).init(r,o.rawVars?t[e]:oS(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new tn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Is))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ai,dc,eu=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!Wc,y=e.timeline,M,A,w,C,S,b,R,I,N,z,G,W,X;if(y&&(!h||!r)&&(r="none"),e._ease=rs(r,Ys.ease),e._yEase=d?Ff(rs(d===!0?r:d,Ys.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!i.runBackwards,!y||h&&!i.stagger){if(I=m[0]?is(m[0]).harness:0,W=I&&i[I.prop],M=Wa(i,$c),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Da:Ny),_._lazy=0),a){if(Ni(e._startAt=yt.set(m,_n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Qt(l),startAt:null,delay:0,onUpdate:c&&function(){return fn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pt||!o&&!f)&&e._startAt.revert(Da),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),w=_n({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Qt(l),immediateRender:o,stagger:0,parent:p},M),W&&(w[I.prop]=W),Ni(e._startAt=yt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pt?e._startAt.revert(Da):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Qt(l)||l&&!g,A=0;A<m.length;A++){if(S=m[A],R=S._gsap||Zc(m)[A]._gsap,e._ptLookup[A]=z={},rc[R.id]&&Ii.length&&Va(),G=v===m?A:v.indexOf(S),I&&(N=new I).init(S,W||M,e,G,v)!==!1&&(e._pt=C=new tn(e._pt,S,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(U){z[U]=C}),N.priority&&(b=1)),!I||W)for(w in M)cn[w]&&(N=Gf(w,M,e,G,S,v))?N.priority&&(b=1):z[w]=C=Qc.call(e,S,w,"get",M[w],G,v,0,i.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),x&&e._pt&&(Ai=e,ft.killTweensOf(S,z,e.globalTime(t)),X=!e.parent,Ai=0),e._pt&&l&&(rc[R.id]=1)}b&&qf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,h&&t<=0&&y.render(wn,!0,!0)},lS=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return dc=1,e.vars[t]="+=0",eu(e,o),dc=0,l?Ur(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=vt(n)+Ft(d.e)),d.b&&(d.b=u.s+Ft(d.b))},cS=function(e,t){var n=e[0]?is(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=$s({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},uS=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(kt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Ar=function(e,t,n,i,r){return gt(e)?e.call(t,n,i,r):Rt(e)&&~e.indexOf("random(")?Br(e):e},Hf=Kc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vf={};en(Hf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Vf[s]=1});var yt=(function(s){of(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Er(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||ft,x=(kt(n)||cf(n)?mi(n[0]):"length"in i)?[n]:An(n),y,M,A,w,C,S,b,R;if(o._targets=x.length?Zc(x):Ur("GSAP target "+n+" not found. https://gsap.com",!mn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||ba(c)||ba(u)){if(i=o.vars,y=o.timeline=new Wt({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=li(o),y._start=0,h||ba(c)||ba(u)){if(w=x.length,b=h&&Af(h),Jn(h))for(C in h)~Hf.indexOf(C)&&(R||(R={}),R[C]=h[C]);for(M=0;M<w;M++)A=Wa(i,Vf),A.stagger=0,p&&(A.yoyoEase=p),R&&$s(A,R),S=x[M],A.duration=+Ar(c,li(o),M,S,x),A.delay=(+Ar(u,li(o),M,S,x)||0)-o._delay,!h&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),y.to(S,A,b?b(M,S,x):0),y._ease=Xe.none;y.duration()?c=u=0:o.timeline=0}else if(g){Er(_n(y.vars.defaults,{ease:"none"})),y._ease=rs(g.ease||i.ease||"none");var I=0,N,z,G;if(kt(g))g.forEach(function(W){return y.to(x,W,">")}),y.duration();else{A={};for(C in g)C==="ease"||C==="easeEach"||uS(C,g[C],A,g.easeEach);for(C in A)for(N=A[C].sort(function(W,X){return W.t-X.t}),I=0,M=0;M<N.length;M++)z=N[M],G={ease:z.e,duration:(z.t-(M?N[M-1].t:0))/100*c},G[C]=z.v,y.to(x,G,I),I+=G.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return f===!0&&!Wc&&(Ai=li(o),ft.killTweensOf(x),Ai=0),Wn(v,li(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===St(v._time)&&Qt(d)&&Gy(li(o))&&v.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-u)||0)),m&&Mf(li(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-st&&!u?l:i<st?0:i,h,f,g,_,m,p,v,x,y;if(!c)Vy(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,a);if(h=St(d%_),d===l?(g=this._repeat,h=c):(m=St(d/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,h=c-h),m=Ks(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(x&&this._yEase&&Bf(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(St(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Tf(this,u?i:h,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/c),this._from&&(this.ratio=v=1-v),!o&&d&&!r&&!m&&(fn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&ac(this,i,r,a),fn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&fn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ac(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ni(this,1),!r&&!(u&&!o)&&(d||o||p)&&(fn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){kr||dn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||eu(this,c),u=this._ease(c/this._dur),lS(this,i,r,a,o,u,c,l)?this.resetTo(i,r,a,o,1):(lo(this,0),this.parent||Sf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?yr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ai&&Ai.vars.overwrite!==!0)._first||yr(this),this.parent&&a!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?An(i):o,c=this._ptLookup,u=this._pt,d,h,f,g,_,m,p;if((!r||r==="all")&&ky(o,l))return r==="all"&&(this._pt=0),yr(this);for(d=this._op=this._op||[],r!=="all"&&(Rt(r)&&(_={},en(r,function(v){return _[v]=1}),r=_),r=cS(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],r==="all"?(d[p]=r,g=h,f={}):(f=d[p]=d[p]||{},g=r);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ao(this,m,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&yr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return wr(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return wr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return ft.killTweensOf(i,r,a)},e})(zr);_n(yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});en("staggerTo,staggerFrom,staggerFromTo",function(s){yt[s]=function(){var e=new Wt,t=lc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var tu=function(e,t,n){return e[t]=n},Wf=function(e,t,n){return e[t](n)},dS=function(e,t,n,i){return e[t](i.fp,n)},hS=function(e,t,n){return e.setAttribute(t,n)},nu=function(e,t){return gt(e[t])?Wf:Xc(e[t])&&e.setAttribute?hS:tu},Xf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},iu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},pS=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},mS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ao(this,t,"_pt"):t.dep||(n=1),t=i;return!n},gS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},qf=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},tn=(function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Xf,this.d=l||this,this.set=c||tu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=gS,this.m=n,this.mt=r,this.tween=i},s})();en(Kc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return $c[s]=1});gn.TweenMax=gn.TweenLite=yt;gn.TimelineLite=gn.TimelineMax=Wt;ft=new Wt({sortChildren:!1,defaults:Ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mn.stringFilter=Uf;var as=[],Na={},_S=[],Gd=0,vS=0,Jo=function(e){return(Na[e]||_S).map(function(t){return t()})},hc=function(){var e=Date.now(),t=[];e-Gd>2&&(Jo("matchMediaInit"),as.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Hn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Jo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gd=e,Jo("matchMedia"))},Yf=(function(){function s(t,n){this.selector=n&&cc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=vS++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){gt(n)&&(r=i,i=n,n=gt);var a=this,o=function(){var c=ut,u=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=cc(r)),ut=a,d=i.apply(a,arguments),gt(d)&&a._r.push(d),ut=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===gt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ut;ut=null,n(this),ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Wt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof yt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=as.length;a--;)as[a].id===this.id&&as.splice(a,1)},e.revert=function(n){this.kill(n||{})},s})(),xS=(function(){function s(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Jn(n)||(n={matches:n});var a=new Yf(0,r||this.scope),o=a.conditions={},l,c,u;ut&&!a.selector&&(a.selector=ut.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Hn.matchMedia(n[c]),l&&(as.indexOf(a)<0&&as.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(hc):l.addEventListener("change",hc)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),ja={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Df(i)})},timeline:function(e){return new Wt(e)},getTweensOf:function(e,t){return ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){Rt(e)&&(e=An(e)[0]);var r=is(e||{}).get,a=n?yf:xf;return n==="native"&&(n=""),e&&(t?a((cn[t]&&cn[t].get||r)(e,t,n,i)):function(o,l,c){return a((cn[o]&&cn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=An(e),e.length>1){var i=e.map(function(u){return sn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var a=cn[t],o=is(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Is._pt=0,d.init(e,n?u+n:u,Is,0,[e]),d.render(1,d),Is._pt&&iu(1,Is)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=sn.to(e,_n((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rs(e.ease,Ys.ease)),Ud(Ys,e||{})},config:function(e){return Ud(mn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!cn[o]&&!gn[o]&&Ur(t+" effect requires "+o+" plugin.")}),Yo[t]=function(o,l,c){return n(An(o),_n(l||{},r),c)},a&&(Wt.prototype[t]=function(o,l,c){return this.add(Yo[t](o,Jn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=rs(t)},parseEase:function(e,t){return arguments.length?rs(e,t):Xe},getById:function(e){return ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wt(e),i,r;for(n.smoothChildTiming=Qt(e.smoothChildTiming),ft.remove(n),n._dp=0,n._time=n._tTime=ft._time,i=ft._first;i;)r=i._next,(t||!(!i._dur&&i instanceof yt&&i.vars.onComplete===i._targets[0]))&&Wn(n,i,i._start-i._delay),i=r;return Wn(ft,n,0),n},context:function(e,t){return e?new Yf(e,t):ut},matchMedia:function(e){return new xS(e)},matchMediaRefresh:function(){return as.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||hc()},addEventListener:function(e,t){var n=Na[e]||(Na[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Na[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Zy,wrapYoyo:Jy,distribute:Af,random:Rf,snap:Cf,normalize:Ky,getUnit:Ft,clamp:jy,splitColor:Of,toArray:An,selector:cc,mapRange:Lf,pipe:Yy,unitize:$y,interpolate:Qy,shuffle:wf},install:pf,effects:Yo,ticker:dn,updateRoot:Wt.updateRoot,plugins:cn,globalTimeline:ft,core:{PropTween:tn,globals:mf,Tween:yt,Timeline:Wt,Animation:zr,getCache:is,_removeLinkedListItem:ao,reverting:function(){return Pt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return Wc=e}}};en("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ja[s]=yt[s]});dn.add(Wt.updateRoot);Is=ja.to({},{duration:0});var yS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},SS=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=yS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Qo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Rt(r)&&(l={},en(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}SS(o,r)}}}},sn=ja.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Pt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qo("roundProps",uc),Qo("modifiers"),Qo("snap",Cf))||ja;yt.version=Wt.version=sn.version="3.13.0";ff=1;jc()&&Js();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hd,Ci,Us,su,ns,Vd,ru,bS=function(){return typeof window<"u"},gi={},Zi=180/Math.PI,Fs=Math.PI/180,Rs=Math.atan2,Wd=1e8,au=/([A-Z])/g,MS=/(left|right|width|margin|padding|x)/i,TS=/[\s,\(]\S/,jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ES=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$f=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Kf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},CS=function(e,t,n){return e.style[t]=n},RS=function(e,t,n){return e.style.setProperty(t,n)},PS=function(e,t,n){return e._gsap[t]=n},LS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},IS=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},DS=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},pt="transform",nn=pt+"Origin",OS=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in gi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ci(i,o)}):this.tfm[e]=a.x?a[e]:ci(i,e),e===nn&&(this.tfm.zOrigin=a.zOrigin);else return jn.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(pt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nn,t,"")),e=pt}(r||t)&&this.props.push(e,t,r[e])},Zf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},NS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(au,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ru(),(!r||!r.isStart)&&!n[pt]&&(Zf(n),i.zOrigin&&n[nn]&&(n[nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jf=function(e,t){var n={target:e,props:[],revert:NS,save:OS};return e._gsap||sn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Qf,pc=function(e,t){var n=Ci.createElementNS?Ci.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ci.createElement(e);return n&&n.style?n:Ci.createElement(e)},Cn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(au,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Qs(t)||t,1)||""},Xd="O,Moz,ms,Ms,Webkit".split(","),Qs=function(e,t,n){var i=t||ns,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Xd[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Xd[a]:"")+e},mc=function(){bS()&&window.document&&(Hd=window,Ci=Hd.document,Us=Ci.documentElement,ns=pc("div")||{style:{}},pc("div"),pt=Qs(pt),nn=pt+"Origin",ns.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qf=!!Qs("perspective"),ru=sn.core.reverting,su=1)},jd=function(e){var t=e.ownerSVGElement,n=pc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Us.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Us.removeChild(n),r},qd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ep=function(e){var t,n;try{t=e.getBBox()}catch{t=jd(e),n=1}return t&&(t.width||t.height)||n||(t=jd(e)),t&&!t.width&&!t.x&&!t.y?{x:+qd(e,["x","cx","x1"])||0,y:+qd(e,["y","cy","y1"])||0,width:0,height:0}:t},tp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ep(e))},ls=function(e,t){if(t){var n=e.style,i;t in gi&&t!==nn&&(t=pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(au,"-$1").toLowerCase())):n.removeAttribute(t)}},Ri=function(e,t,n,i,r,a){var o=new tn(e._pt,t,n,0,1,a?Kf:$f);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Yd={deg:1,rad:1,turn:1},US={grid:1,flex:1},Ui=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=ns.style,l=MS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,m,p;if(i===a||!r||Yd[i]||Yd[a])return r;if(a!=="px"&&!h&&(r=s(e,t,n,"px")),p=e.getCTM&&tp(e),(f||a==="%")&&(gi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],vt(f?r/g*d:r/100*g);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ci||!_.appendChild)&&(_=Ci.body),m=_._gsap,m&&f&&m.width&&l&&m.time===dn.time&&!m.uncache)return vt(r/m.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,g=e[u],v?e.style[t]=v:ls(e,t)}else(f||a==="%")&&!US[Cn(_,"display")]&&(o.position=Cn(e,"position")),_===e&&(o.position="static"),_.appendChild(ns),g=ns[u],_.removeChild(ns),o.position="absolute";return l&&f&&(m=is(_),m.time=dn.time,m.width=_[u]),vt(h?g*r/d:g&&r?d/g*r:0)},ci=function(e,t,n,i){var r;return su||mc(),t in jn&&t!=="transform"&&(t=jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),gi[t]&&t!=="transform"?(r=Hr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ya(Cn(e,nn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=qa[t]&&qa[t](e,t,n)||Cn(e,t)||_f(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ui(e,t,r,n)+n:r},FS=function(e,t,n,i){if(!n||n==="none"){var r=Qs(t,e,1),a=r&&Cn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Cn(e,"borderTopColor"))}var o=new tn(this._pt,e.style,t,0,1,jf),l=0,c=0,u,d,h,f,g,_,m,p,v,x,y,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Cn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Cn(e,t)||i,_?e.style[t]=_:ls(e,t)),u=[n,i],Uf(u),n=u[0],i=u[1],h=n.match(Ls)||[],M=i.match(Ls)||[],M.length){for(;d=Ls.exec(i);)m=d[0],v=i.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ns(f,m)+y),p=parseFloat(m),x=m.substr((p+"").length),l=Ls.lastIndex-x.length,x||(x=x||mn.units[t]||y,l===i.length&&(i+=x,o.e+=x)),y!==x&&(f=Ui(e,t,_,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Kf:$f;return df.test(i)&&(o.e=0),this._pt=o,o},$d={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=$d[n]||n,t[1]=$d[i]||i,t.join(" ")},kS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],gi[o]&&(l=1,o=o==="transformOrigin"?nn:pt),ls(n,o);l&&(ls(n,pt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Hr(n,1),a.uncache=1,Zf(i)))}},qa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new tn(e._pt,t,n,0,0,kS);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Gr=[1,0,0,1,0,0],np={},ip=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kd=function(e){var t=Cn(e,pt);return ip(t)?Gr:t.substr(7).match(uf).map(vt)},ou=function(e,t){var n=e._gsap||is(e),i=e.style,r=Kd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Gr:r):(r===Gr&&!e.offsetParent&&e!==Us&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Us.appendChild(e)),r=Kd(e),l?i.display=l:ls(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Us.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},gc=function(e,t,n,i,r,a){var o=e._gsap,l=r||ou(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,M=parseFloat(x[1])||0,A,w,C,S;n?l!==Gr&&(w=f*m-g*_)&&(C=y*(m/w)+M*(-_/w)+(_*v-m*p)/w,S=y*(-g/w)+M*(f/w)-(f*v-g*p)/w,y=C,M=S):(A=ep(e),y=A.x+(~x[0].indexOf("%")?y/100*A.width:y),M=A.y+(~(x[1]||x[0]).indexOf("%")?M/100*A.height:M)),i||i!==!1&&o.smooth?(p=y-c,v=M-u,o.xOffset=d+(p*f+v*_)-p,o.yOffset=h+(p*g+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[nn]="0px 0px",a&&(Ri(a,o,"xOrigin",c,y),Ri(a,o,"yOrigin",u,M),Ri(a,o,"xOffset",d,o.xOffset),Ri(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Hr=function(e,t){var n=e._gsap||new zf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Cn(e,nn)||"0",u,d,h,f,g,_,m,p,v,x,y,M,A,w,C,S,b,R,I,N,z,G,W,X,U,Z,ie,ue,Ce,Ze,je,ze;return u=d=h=_=m=p=v=x=y=0,f=g=1,n.svg=!!(e.getCTM&&tp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pt]!=="none"?l[pt]:"")),i.scale=i.rotate=i.translate="none"),w=ou(e,n.svg),n.svg&&(n.uncache?(U=e.getBBox(),c=n.xOrigin-U.x+"px "+(n.yOrigin-U.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),gc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,w)),M=n.xOrigin||0,A=n.yOrigin||0,w!==Gr&&(R=w[0],I=w[1],N=w[2],z=w[3],u=G=w[4],d=W=w[5],w.length===6?(f=Math.sqrt(R*R+I*I),g=Math.sqrt(z*z+N*N),_=R||I?Rs(I,R)*Zi:0,v=N||z?Rs(N,z)*Zi+_:0,v&&(g*=Math.abs(Math.cos(v*Fs))),n.svg&&(u-=M-(M*R+A*N),d-=A-(M*I+A*z))):(ze=w[6],Ze=w[7],ie=w[8],ue=w[9],Ce=w[10],je=w[11],u=w[12],d=w[13],h=w[14],C=Rs(ze,Ce),m=C*Zi,C&&(S=Math.cos(-C),b=Math.sin(-C),X=G*S+ie*b,U=W*S+ue*b,Z=ze*S+Ce*b,ie=G*-b+ie*S,ue=W*-b+ue*S,Ce=ze*-b+Ce*S,je=Ze*-b+je*S,G=X,W=U,ze=Z),C=Rs(-N,Ce),p=C*Zi,C&&(S=Math.cos(-C),b=Math.sin(-C),X=R*S-ie*b,U=I*S-ue*b,Z=N*S-Ce*b,je=z*b+je*S,R=X,I=U,N=Z),C=Rs(I,R),_=C*Zi,C&&(S=Math.cos(C),b=Math.sin(C),X=R*S+I*b,U=G*S+W*b,I=I*S-R*b,W=W*S-G*b,R=X,G=U),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=vt(Math.sqrt(R*R+I*I+N*N)),g=vt(Math.sqrt(W*W+ze*ze)),C=Rs(G,W),v=Math.abs(C)>2e-4?C*Zi:0,y=je?1/(je<0?-je:je):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ip(Cn(e,pt)),X&&e.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=vt(f),n.scaleY=vt(g),n.rotation=vt(_)+o,n.rotationX=vt(m)+o,n.rotationY=vt(p)+o,n.skewX=v+o,n.skewY=x+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[nn]=Ya(c)),n.xOffset=n.yOffset=0,n.force3D=mn.force3D,n.renderTransform=n.svg?GS:Qf?sp:zS,n.uncache=0,n},Ya=function(e){return(e=e.split(" "))[0]+" "+e[1]},el=function(e,t,n){var i=Ft(t);return vt(parseFloat(t)+parseFloat(Ui(e,"x",n+"px",i)))+i},zS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sp(e,t)},ji="0deg",mr="0px",qi=") ",sp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,y="",M=p==="auto"&&e&&e!==1||p===!0;if(x&&(d!==ji||u!==ji)){var A=parseFloat(u)*Fs,w=Math.sin(A),C=Math.cos(A),S;A=parseFloat(d)*Fs,S=Math.cos(A),a=el(v,a,w*S*-x),o=el(v,o,-Math.sin(A)*-x),l=el(v,l,C*S*-x+x)}m!==mr&&(y+="perspective("+m+qi),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||a!==mr||o!==mr||l!==mr)&&(y+=l!==mr||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+qi),c!==ji&&(y+="rotate("+c+qi),u!==ji&&(y+="rotateY("+u+qi),d!==ji&&(y+="rotateX("+d+qi),(h!==ji||f!==ji)&&(y+="skew("+h+", "+f+qi),(g!==1||_!==1)&&(y+="scale("+g+", "+_+qi),v.style[pt]=y||"translate(0, 0)"},GS=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(a),y=parseFloat(o),M,A,w,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fs,c*=Fs,M=Math.cos(l)*d,A=Math.sin(l)*d,w=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=Fs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),w*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),M*=S,A*=S)),M=vt(M),A=vt(A),w=vt(w),C=vt(C)):(M=d,C=h,A=w=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=Ui(f,"x",a,"px"),y=Ui(f,"y",o,"px")),(g||_||m||p)&&(x=vt(x+g-(g*M+_*w)+m),y=vt(y+_-(g*A+_*C)+p)),(i||r)&&(S=f.getBBox(),x=vt(x+i/100*S.width),y=vt(y+r/100*S.height)),S="matrix("+M+","+A+","+w+","+C+","+x+","+y+")",f.setAttribute("transform",S),v&&(f.style[pt]=S)},HS=function(e,t,n,i,r){var a=360,o=Rt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Zi:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Wd)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Wd)%a-~~(c/a)*a)),e._pt=h=new tn(e._pt,t,n,i,c,ES),h.e=u,h.u="deg",e._props.push(n),h},Zd=function(e,t){for(var n in t)e[n]=t[n];return e},VS=function(e,t,n){var i=Zd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[pt]=t,o=Hr(n,1),ls(n,pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[pt],a[pt]=t,o=Hr(n,1),a[pt]=c);for(l in gi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(f=Ft(c),g=Ft(u),d=f!==g?Ui(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new tn(e._pt,o,l,d,h-d,fc),e._pt.u=g||0,e._props.push(l));Zd(o,i)};en("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});qa[e>1?"border"+s:s]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return ci(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var rp={name:"css",register:mc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,g,_,m,p,v,x,y,M,A,w,C;su||mc(),this.styles=this.styles||Jf(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(cn[_]&&Gf(_,t,n,i,e,r)))){if(f=typeof u,g=qa[_],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Br(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Di.lastIndex=0,Di.test(c)||(m=Ft(c),p=Ft(u)),p?m!==p&&(c=Ui(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,_),a.push(_),C.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Rt(c)&&~c.indexOf("random(")&&(c=Br(c)),Ft(c+"")||c==="auto"||(c+=mn.units[_]||Ft(ci(e,_))||""),(c+"").charAt(1)==="="&&(c=ci(e,_))):c=ci(e,_),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in jn&&(_==="autoAlpha"&&(h===1&&ci(e,"visibility")==="hidden"&&d&&(h=0),C.push("visibility",0,o.visibility),Ri(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=jn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in gi,x){if(this.styles.save(_),f==="string"&&u.substring(0,6)==="var(--"&&(u=Cn(e,u.substring(4,u.indexOf(")"))),d=parseFloat(u)),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Hr(e,t.parseTransform),A=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new tn(this._pt,o,pt,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new tn(this._pt,M,"scaleY",M.scaleY,(v?Ns(M.scaleY,v+d):d)-M.scaleY||0,fc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(nn,0,o[nn]),u=BS(u),M.svg?gc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Ri(this,M,"zOrigin",M.zOrigin,p),Ri(this,o,_,Ya(c),Ya(u)));continue}else if(_==="svgOrigin"){gc(e,u,1,A,0,this);continue}else if(_ in np){HS(this,M,_,h,v?Ns(h,v+u):u);continue}else if(_==="smoothOrigin"){Ri(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){VS(this,u,e);continue}}else _ in o||(_=Qs(_)||_);if(x||(d||d===0)&&(h||h===0)&&!TS.test(u)&&_ in o)m=(c+"").substr((h+"").length),d||(d=0),p=Ft(u)||(_ in mn.units?mn.units[_]:m),m!==p&&(h=Ui(e,_,c,p)),this._pt=new tn(this._pt,x?M:o,_,h,(v?Ns(h,v+d):d)-h,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?AS:fc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=wS);else if(_ in o)FS.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,r);else if(_!=="parseTransform"){Yc(_,u);continue}x||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),a.push(_)}}w&&qf(this)},render:function(e,t){if(t.tween._time||!ru())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ci,aliases:jn,getSetter:function(e,t,n){var i=jn[t];return i&&i.indexOf(",")<0&&(t=i),t in gi&&t!==nn&&(e._gsap.x||ci(e,"x"))?n&&Vd===n?t==="scale"?LS:PS:(Vd=n||{})&&(t==="scale"?IS:DS):e.style&&!Xc(e.style[t])?CS:~t.indexOf("-")?RS:nu(e,t)},core:{_removeProperty:ls,_getMatrix:ou}};sn.utils.checkPrefix=Qs;sn.core.getStyleSaver=Jf;(function(s,e,t,n){var i=en(s+","+e+","+t,function(r){gi[r]=1});en(e,function(r){mn.units[r]="deg",np[r]=1}),jn[i[13]]=s+","+e,en(n,function(r){var a=r.split(":");jn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");en("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){mn.units[s]="px"});sn.registerPlugin(rp);var pn=sn.registerPlugin(rp)||sn;pn.core.Tween;class WS{constructor(e,t){this.camera=e,this.theta=0,this.phi=1,this.center=new D,this.distance=200,this.smoothingFactor=.01,this.mouseClickPosition=new xe,this.isPointerDown=!1,t.addEventListener("pointerdown",n=>{console.log("POINTER DOWN"),n.target==t&&(this.mouseClickPosition.set(n.clientX,n.clientY),this.isPointerDown=!0)}),t.addEventListener("pointermove",n=>{if(!this.isPointerDown)return;const i=n.clientX-this.mouseClickPosition.x,r=n.clientY-this.mouseClickPosition.y;this.theta+=i*this.smoothingFactor,this.theta%=2*Math.PI,this.phi+=-r*this.smoothingFactor,this.phi<0&&(this.phi=.001),this.phi>Math.PI&&(this.phi=Math.PI);const a=this.computeCartesian(this.theta,this.phi,this.distance);this.camera.position.x=a.x+this.center.x,this.camera.position.y=a.y+this.center.y,this.camera.position.z=a.z+this.center.z,this.mouseClickPosition.set(n.clientX,n.clientY)}),t.addEventListener("pointerup",n=>{this.isPointerDown=!1}),this.camX=pn.quickTo(this.camera.position,"x",{duration:3,ease:"power2.out"}),this.camY=pn.quickTo(this.camera.position,"y",{duration:3,ease:"power2.out"}),this.camZ=pn.quickTo(this.camera.position,"z",{duration:3,ease:"power2.out"})}transitionCamera({onComplete:e=null,onUpdate:t=null,center:n=new D,theta:i=0,phi:r=1,distance:a=10}={}){this.theta=i,this.phi=r,this.distance=a,this.center=n;const o=this.computeCartesian(i,r,a);o.x+=n.x,o.y+=n.y,o.z+=n.z,pn.to(this.camera.position,{x:o.x,y:o.y,z:o.z,duration:.75,ease:"sine.inOut",onUpdate:()=>{t&&t()},onComplete:()=>{e&&e()}})}setCameraPosition(e=new D,t=0,n=1,i=10){this.theta=t,this.phi=n,this.distance=i,this.center=e;const r=this.computeCartesian(t,n,i);r.x+=e.x,r.y+=e.y,r.z+=e.z,this.camera.position.set(r.x,r.y,r.z)}computeCartesian(e,t,n){return new D(n*Math.cos(e)*Math.sin(t),n*Math.cos(t),n*Math.sin(t)*Math.sin(e))}setCamLook(e){this.camera.lookAt(e)}copyCamPositionTo(e){e.set(this.camera.position.x,this.camera.position.y,this.camera.position.z)}}const XS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class jr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const jS=new so(-1,1,1,-1,0,1);class qS extends vn{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const YS=new qS;class ap{constructor(e){this._mesh=new Bt(YS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $S extends jr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vr.clone(e.uniforms),this.material=new Rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ap(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Jd extends jr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class KS extends jr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ZS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new xe);this._width=n.width,this._height=n.height,t=new Oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:er}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $S(XS),this.copyPass.material.blending=hi,this.clock=new ef}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Jd!==void 0&&(a instanceof Jd?n=!0:a instanceof KS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class JS extends jr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Ma={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class QS extends jr{constructor(){super(),this.uniforms=Vr.clone(Ma.uniforms),this.material=new lg({name:Ma.name,uniforms:this.uniforms,vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader}),this._fsQuad=new ap(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===Je&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_h?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class eb{constructor(){this.renderer=new Ty({antialias:!0,logarithmicDepthBuffer:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(.6),this.renderer.outputColorSpace=bt,this.renderer.toneMapping=Tc,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fh,document.body.appendChild(this.renderer.domElement),this.composer=new ZS(this.renderer)}setAnimationLoop(e){this.renderer.setAnimationLoop(e)}setComposerPasses(e,t){this.composer.addPass(new JS(e,t)),this.composer.addPass(new QS)}render(){this.composer.render()}getDOM(){return this.renderer.domElement}setSize(e,t){this.renderer.setSize(e,t)}}class tb{constructor(e){this.ambient=new Rg(16777215,1),this.sun=new Qh(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.width=512,this.sun.shadow.mapSize.height=512,this.sun.shadow.camera.near=35,this.sun.shadow.camera.far=500,this.sun.shadow.bias=-.001,this.sunTarget=new ot,this.sun.target=this.sunTarget,e.add(this.sun),e.add(this.sunTarget),e.add(this.ambient)}setAmbient(e,t){this.ambient.color.set(e),this.ambient.intensity=t}setSun(e,t){this.sun.color.set(e),this.sun.intensity=t}setSunPosition(e,t,n){this.sun.position.set(e,t,n)}setSunTarget(e,t,n){this.sun.target.position.set(e,t,n)}getAmbient(){return this.ambient}getSun(){return this.sun}getSunTarget(){return this.sunTarget}}function Qd(s,e){if(e===Kp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Kl||e===Ph){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Kl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class nb extends cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ob(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new Sb(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Tr.extractUrlBase(e);a=Tr.resolveURL(c,this.path)}else a=Tr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Kh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===op){try{a[He.KHR_BINARY_GLTF]=new bb(e)}catch(d){i&&i(d);return}r=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Nb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case He.KHR_MATERIALS_UNLIT:a[d]=new rb;break;case He.KHR_DRACO_MESH_COMPRESSION:a[d]=new Mb(r,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[d]=new Tb;break;case He.KHR_MESH_QUANTIZATION:a[d]=new Eb;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ib(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sb{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],qt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ag(u),c.distance=d;break;case"spot":c=new Eg(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Gn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class rb{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return wi}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(i)}}class ab{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ob{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(o,o)}return Promise.all(r)}}class lb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class cb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class ub{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,bt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class db{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class hb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(o[0],o[1],o[2],qt),Promise.all(r)}}class fb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class pb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(o[0],o[1],o[2],qt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,bt)),Promise.all(r)}}class mb{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class gb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class _b{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class vb{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class xb{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class yb{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class Sb{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const _=new Fe,m=new D,p=new Kn,v=new D(1,1,1),x=new eg(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,_.compose(m,p,v));for(const y in l)if(y==="_COLOR_0"){const M=l[y];x.instanceColor=new Jl(M.array,M.itemSize,M.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);ot.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const op="glTF",gr=12,eh={JSON:1313821514,BIN:5130562};class bb{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-gr,r=new DataView(e,gr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===eh.JSON){const c=new Uint8Array(e,gr+a,o);this.content=n.decode(c)}else if(l===eh.BIN){const c=gr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Mb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const d=_c[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=_c[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],f=Bs[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},o,c,qt,h)})})}}class Tb{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Eb{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class lp extends Wr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,_=g-c,m=-2*f+3*h,p=f-h,v=1-m,x=p-h+d;for(let y=0;y!==o;y++){const M=a[_+y+o],A=a[_+y+l]*u,w=a[g+y+o],C=a[g+y]*u;r[y]=v*M+x*A+m*w+p*C}return r}}const wb=new Kn;class Ab extends lp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return wb.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},th={9728:Xt,9729:hn,9984:bh,9985:Aa,9986:vr,9987:ui},nh={33071:Ei,33648:Fa,10497:Hs},tl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_c={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cb={CUBICSPLINE:void 0,LINEAR:Dr,STEP:Ir},nl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Bc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),s.DefaultMaterial}function Yi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Pb(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function Lb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ib(s){let e;const t=s.extensions&&s.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+il(t.attributes):e=s.indices+":"+il(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+il(s.targets[n]);return e}function il(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Db(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ob=new Fe;class Nb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ib,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Jh(this.options.manager):this.textureLoader=new Lg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Yi(r,o,i),Gn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Tr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=tl[i.type],o=Bs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new jt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=tl[i.type],c=Bs[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(h/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new c(o,p*f,i.count*f/u),x=new Gh(_,f/u),t.cache.add(v,x)),m=new ts(x,l,h%f/u,g)}else o===null?_=new c(i.count*l):_=new c(o,h,i.count*l),m=new jt(_,l,g);if(i.sparse!==void 0){const p=tl.SCALAR,v=Bs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new v(a[1],x,i.sparse.count*p),A=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,C=M.length;w<C;w++){const S=M[w];if(m.setX(S,A[w*l]),l>=2&&m.setY(S,A[w*l+1]),l>=3&&m.setZ(S,A[w*l+2]),l>=4&&m.setW(S,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=th[h.magFilter]||hn,u.minFilter=th[h.minFilter]||ui,u.wrapS=nh[h.wrapS]||Hs,u.wrapT=nh[h.wrapT]||Hs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==hn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ct(_);m.needsUpdate=!0,h(m)}),t.load(Tr.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Gn(d,a),d.userData.mimeType=a.mimeType||Db(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Xh,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Wh,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Bc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){const d=i[He.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],qt),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,bt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Vn);const u=r.alphaMode||nl.OPAQUE;if(u===nl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===nl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==wi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==wi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==wi){const d=r.emissiveFactor;o.emissive=new Le().setRGB(d[0],d[1],d[2],qt)}return r.emissiveTexture!==void 0&&a!==wi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,bt)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),Gn(d,r),t.associations.set(d,{materials:e}),r.extensions&&Yi(i,d,r),d})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ih(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Ib(c),d=i[u];if(d)a.push(d.promise);else{let h;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=ih(new vn,c,t),i[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Rb(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=a[f];let p;const v=c[f];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Zm(_,v):new Bt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=Qd(p.geometry,Ph):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=Qd(p.geometry,Kl));else if(m.mode===Mn.LINES)p=new sg(_,v);else if(m.mode===Mn.LINE_STRIP)p=new Fc(_,v);else if(m.mode===Mn.LINE_LOOP)p=new rg(_,v);else if(m.mode===Mn.POINTS)p=new ag(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Lb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Gn(p,r),m.extensions&&Yi(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Yi(i,d[0],r),d[0];const h=new es;r.extensions&&Yi(i,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Mm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new so(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const d=a[c];if(d){o.push(d);const h=new Fe;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Nc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let x=0,y=h.length;x<y;x++){const M=h[x],A=f[x],w=g[x],C=_[x],S=m[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const b=n._createAnimationTracks(M,A,w,C,S);if(b)for(let R=0;R<b.length;R++)p.push(b[R])}const v=new _g(r,void 0,p);return Gn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Ob)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Hh:c.length>1?u=new es:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Gn(u,r),r.extensions&&Yi(n,u,r),r.matrix!==void 0){const d=new Fe;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new es;n.name&&(r.name=i.createUniqueName(n.name)),Gn(r,n),n.extensions&&Yi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof Yn||h instanceof Ct)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];Mi[r.path]===Mi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(Mi[r.path]){case Mi.weights:c=Xs;break;case Mi.rotation:c=js;break;case Mi.translation:case Mi.scale:c=qs;break;default:switch(n.itemSize){case 1:c=Xs;break;case 2:case 3:default:c=qs;break}break}const u=i.interpolation!==void 0?Cb[i.interpolation]:Dr,d=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const g=new c(l[h]+"."+Mi[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof js?Ab:lp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ub(s,e,t){const n=e.attributes,i=new Fn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){const u=vc(Bs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=vc(Bs[h.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Bn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function ih(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=_c[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return We.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),Gn(s,e),Ub(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Pb(s,e.targets,t):s})}class cp{constructor(){this.loader=new nb}async loadModel(e){var t=await this.loader.loadAsync(e);return t.scene.receiveShadow=!0,t.scene.castShadow=!0,t.scene.traverse(n=>{n.isMesh&&(n.material.transparent=!0)}),t.scene}loadCubeTexture(e){return new Mg().load([e+"/right.png",e+"/left.png",e+"/top.png",e+"/bottom.png",e+"/front.png",e+"/back.png"],()=>console.log("Cubemap loaded"),void 0,t=>console.error("Cubemap FAILED:",t))}loadTexture(e){return new Jh().load(e)}}class Fb{constructor(e,t){this.frame=document.getElementById("frame-container"),this.header=document.getElementById("description-header"),this.content=document.getElementById("description-content"),this.container=document.getElementById("description-container"),this.camControls=e,this.sun=t,this.textMgr=new Vc,this.headerTxt="",this.bodyTxt="",this.updateDetails=!1,this.tmpUpdateDetails=!1,this.focusedObject=null,this.contentOpen=!1,this.moving=!1,this.posDamp=4,this.rotDamp=8,this.desiredPos=new D,this.desiredQuat=new Kn,this.tmpPos=new D,this.tmpQuat=new Kn,this.tmpScale=new D,this.up=new D(0,1,0),this.frame.addEventListener("transitionend",()=>{this.updateDetails&&(this.container.style.setProperty("--contentWidth","30vw"),this.contentOpen=!0,this.container.style.opacity=1)}),this.container.addEventListener("transitionend",()=>{this.updateDetails&&this.container.style.getPropertyValue("--contentWidth")=="30vw"&&this.writeDetails()}),document.getElementById("description-toggle-button").addEventListener("click",n=>{n.target.blur(),this.moving||(this.contentOpen?(this.container.style.setProperty("--contentWidth","0vw"),this.contentOpen=!1,n.target.textContent="+"):(this.container.style.setProperty("--contentWidth","30vw"),this.contentOpen=!0,n.target.textContent="-"))})}writeDetails(){this.updateDetails=!1,this.focusedObject&&this.textMgr.setText("#description-header",["^500"+this.focusedObject.info.header],!0,!1,10,()=>{this.textMgr.setText("#description-content",["^500"+this.focusedObject.info.summary],!0,!0,.01)})}closeDetails(){this.container.style.setProperty("--contentWidth","0vw"),this.container.style.opacity=0}updateFrameSize(){if(!this.focusedObject)return;const e=this.focusedObject.info.frameGap;this.frame.style.setProperty("--gapX",`${e.x}vw`),this.frame.style.setProperty("--gapY",`${e.y}vh`)}setFocus(e,t=!0){if(this.focusedObject==e)return;if(this.focusedObject=e,!t){this.updateFrameSize();return}this.tmpUpdateDetails=this.updateDetails,this.updateDetails=!1,this.textMgr.removeText("#description-header"),this.textMgr.removeText("#description-content"),this.container.style.setProperty("--contentWidth","0vw"),this.container.style.opacity=0,this.frame.style.setProperty("--gapX","0px"),this.frame.style.setProperty("--gapY","0px");const n=this.focusedObject.info.frameGap;this.sun.target.position.set(this.focusedObject.object.position.x,this.focusedObject.object.position.y,this.focusedObject.object.position.z),this.moving=!0,this.camControls.transitionCamera({center:this.focusedObject.object.position,distance:this.focusedObject.info.cameraDistance,onUpdate:()=>{this.camControls.copyCamPositionTo(this.sun.position)},onComplete:()=>{this.camControls.transitionCamera({center:this.focusedObject.object.position,distance:this.focusedObject.info.cameraDistance,onUpdate:()=>{this.camControls.copyCamPositionTo(this.sun.position)},onComplete:()=>{this.updateDetails=this.tmpUpdateDetails,this.sun.target.position.set(this.focusedObject.object.position.x,this.focusedObject.object.position.y,this.focusedObject.object.position.z),this.frame.style.setProperty("--gapX",`${n.x}vw`),this.frame.style.setProperty("--gapY",`${n.y}vh`),this.moving=!1}})}})}computeDesiredPose(e,t,n,i){e.updateWorldMatrix(!0,!1),e.matrixWorld.decompose(this.tmpPos,this.tmpQuat,this.tmpScale),n.copy(t).applyQuaternion(this.tmpQuat).add(this.tmpPos);const r=new Fe().lookAt(n,this.tmpPos,this.up);i.setFromRotationMatrix(r)}update(){this.focusedObject&&this.camControls.setCamLook(this.focusedObject.object.position)}}class Bb{constructor(e,t){this.systemBtn=document.getElementById("system-button"),this.planetContainer=document.getElementById("planet-container"),this.moonContainer=document.getElementById("moon-container"),this.frame=e,this.selectedPlanet=null,this.selectedPlanetObj=null,this.selectedMoon=null,this.selectedMoonObj=null,this.moonContainer.style.opacity=0,this.systemObj=null,this.orbitControls=t,this.planets=[],this.moons=[]}SetSystem(e){this.systemObj=e,this.systemBtn.textContent=e.info.tabLabel,this.systemBtn.addEventListener("click",()=>{this.orbitControls.enableMenu(),this.frame.updateDetails=!0,this.frame.setFocus(this.systemObj),this.orbitControls.setAvailableOrbits(this.systemObj.info.children,this.systemObj.info.childrenMaxSemimajor),e.FadeObject(1),this.planets.forEach(t=>{t.info.simulateOrbit=!0,t.FadeObject(1),pn.to(t,{deltaScale:t.info.effectiveDelta,duration:1.5,ease:"sin.in"})}),this.selectedPlanet&&(this.selectedPlanet.classList.remove("selected-button"),this.selectedPlanet=null),this.moonContainer.style.opacity=0,this.moons.forEach(t=>{this.systemObj&&t.FadeObject(0,()=>{t.info.simulateOrbit=!1})}),this.selectedMoon&&(this.selectedMoon.classList.remove("selected-button"),this.selectedMoon=null)})}SetPlanets(e=[]){this.planetContainer.innerHTML="",e.forEach(t=>{this.planets.push(t);const n=document.createElement("button");n.id=t.info.tabLabel,n.classList.add("observed-item","baseText"),n.textContent=t.info.tabLabel,n.addEventListener("click",()=>{if(this.orbitControls.enableMenu(),this.selectedPlanet){if(this.selectPlanet!=n)this.selectedPlanet.classList.remove("selected-button"),this.selectedPlanetObj.FadeObject(0),t.FadeObject(1),this.selectedPlanetObj.info.children.forEach(i=>{i.FadeObject(0)});else if(this.selectedMoon==null)return}else e.forEach(i=>{i!=t&&i.FadeObject(0),pn.to(i,{deltaScale:0,duration:1,ease:"expo.out",onComplete:()=>{i.info.simulateOrbit=!1,i.info.children.forEach(r=>{r.updateTrail=!1})}})});this.selectedMoon&&t.FadeObject(1),this.selectedMoon=null,n.classList.add("selected-button"),this.selectedPlanet=n,this.selectedPlanetObj=t,this.orbitControls.setAvailableOrbits(t.info.children,t.info.childrenMaxSemimajor),t.FadeTrail(0),this.SetMoons(t.info.children),this.moonContainer.style.opacity=1,this.systemObj&&this.systemObj.FadeObject(0),this.frame.updateDetails=!0,this.frame.setFocus(t)}),this.planetContainer.appendChild(n)})}SetMoons(e=[]){this.moonContainer.innerHTML="",e.forEach(t=>{this.moons.push(t);const n=document.createElement("button");n.id=t.info.tabLabel,n.classList.add("observed-item","baseText"),n.textContent=t.info.tabLabel,t.info.simulateOrbit=!0,t.ResetDelta(),t.FadeObject(1),t.updateTrail=!0,n.addEventListener("click",()=>{if(this.orbitControls.disableMenu(),this.selectedMoon){if(this.selectedMoon==n)return;this.selectedMoon.classList.remove("selected-button"),t.FadeObject(1),this.selectedMoonObj.FadeObject(0)}else e.forEach(i=>{i!=t&&i.FadeObject(0),pn.to(i,{deltaScale:0,duration:1,ease:"expo.out",onComplete:()=>{i.info.simulateOrbit=!1}})});n.classList.add("selected-button"),this.selectedMoon=n,this.selectedMoonObj=t,t.FadeTrail(0),this.planets.forEach(i=>{i.FadeObject(0)}),this.frame.updateDetails=!0,this.frame.setFocus(t)}),this.moonContainer.appendChild(n)})}}class $a{static CONTENT_DURATION=.25;constructor(){this.controlsBtn=document.getElementById("controls-button"),this.contentContainer=document.getElementById("content-container"),this.controlsContainer=document.getElementById("orbit-controls-container"),this.controlsOpen=!1,this.focusedObject=null,this.RAD2DEG=180/Math.PI,this.controlsBtn.addEventListener("click",()=>{this.controlsBtn.blur(),this.controlsOpen?(this.closeDropdown(),this.controlsOpen=!1):this.openOrbitControls()}),this.orbitsOptions=document.getElementById("orbit-options-container"),this.orbits=[],this.selectedOrbitObj=null,this.selectedObjBtn=null,this.aMaxLabel=document.getElementById("a-max-label"),this.eLab=document.getElementById("e-label"),this.aLab=document.getElementById("a-label"),this.wLab=document.getElementById("w-label"),this.iLab=document.getElementById("i-label"),this.raanLab=document.getElementById("raan-label"),this.raanSlider=document.getElementById("Right Ascension of the Ascending Node"),this.iSlider=document.getElementById("Inclination"),this.aSlider=document.getElementById("Semimajor Axis"),this.wSlider=document.getElementById("Argument of Periapsis"),this.eSlider=document.getElementById("Eccentricity"),this.updateA(),this.updateE(),this.updateI(),this.updateW(),this.updateRAAN(),this.aSlider.addEventListener("input",()=>{this.selectedOrbitObj.holdTrueAnomaly=!0,this.selectedOrbitObj.updateTrailRecompute=!0,this.updateA(),this.selectedOrbitObj.params.semimajorAxis=this.aSlider.valueAsNumber}),this.iSlider.addEventListener("input",()=>{this.selectedOrbitObj.updateTrailRecompute=!0,this.updateI(),this.selectedOrbitObj.params.inclination=this.iSlider.valueAsNumber/this.RAD2DEG}),this.eSlider.addEventListener("input",()=>{this.selectedOrbitObj.updateTrailRecompute=!0,this.updateE();const e=this.eSlider.valueAsNumber;this.selectedOrbitObj.params.eccentricity=e==1?.999999:e==0?1e-6:e}),this.wSlider.addEventListener("input",()=>{this.selectedOrbitObj.updateTrailRecompute=!0,this.updateW(),this.selectedOrbitObj.params.argPeriapsis=this.wSlider.valueAsNumber/this.RAD2DEG}),this.raanSlider.addEventListener("input",()=>{this.selectedOrbitObj.updateTrailRecompute=!0,this.updateRAAN(),this.selectedOrbitObj.params.raan=this.raanSlider.valueAsNumber/this.RAD2DEG}),this.aSlider.addEventListener("change",()=>{this.selectedOrbitObj.holdTrueAnomaly=!1,this.selectedOrbitObj.updateTrailRecompute=!1}),this.iSlider.addEventListener("change",()=>{this.selectedOrbitObj.updateTrailRecompute=!1}),this.eSlider.addEventListener("change",()=>{this.selectedOrbitObj.updateTrailRecompute=!1}),this.wSlider.addEventListener("change",()=>{this.selectedOrbitObj.updateTrailRecompute=!1}),this.raanSlider.addEventListener("change",()=>{this.selectedOrbitObj.updateTrailRecompute=!1})}setAvailableOrbits(e=[],t=250){this.orbitsOptions.innerHTML="",this.orbits=e,e!=[]&&(this.raanSlider.value=e[0].params.raan*this.RAD2DEG,this.iSlider.value=e[0].params.inclination*this.RAD2DEG,this.eSlider.value=e[0].params.eccentricity,this.aSlider.value=e[0].params.semimajorAxis,this.wSlider.value=e[0].params.argPeriapsis*this.RAD2DEG,this.updateA(),this.updateE(),this.updateI(),this.updateW(),this.updateRAAN(),this.selectedOrbitObj=e[0],e.forEach(n=>{const i=document.createElement("button");i.textContent=n.info.tabLabel,i.classList.add("baseText","observed-item"),i.style.fontSize="1vw",this.aSlider.max=t,this.aMaxLabel.textContent=t,i.addEventListener("click",()=>{this.selectedObjBtn&&this.selectedObjBtn.classList.remove("selected-button"),i.classList.add("selected-button"),this.selectedObjBtn=i,this.raanSlider.value=n.params.raan*this.RAD2DEG,this.iSlider.value=90-n.params.inclination*this.RAD2DEG,this.eSlider.value=n.params.eccentricity,this.aSlider.value=n.params.semimajorAxis,this.wSlider.value=n.params.argPeriapsis*this.RAD2DEG,this.updateA(),this.updateE(),this.updateI(),this.updateW(),this.updateRAAN(),this.selectedOrbitObj=n}),this.orbitsOptions.append(i)}),this.selectedObjBtn=this.orbitsOptions.firstElementChild,this.selectedObjBtn.classList.add("selected-button"))}updateRAAN(){this.updateSliderLabel(this.raanSlider,this.raanLab,"&deg;")}updateA(){this.updateSliderLabel(this.aSlider,this.aLab)}updateW(){this.updateSliderLabel(this.wSlider,this.wLab,"&deg;")}updateI(){this.updateSliderLabel(this.iSlider,this.iLab,"&deg;")}updateE(){const e=this.eSlider.valueAsNumber;this.eLab.innerHTML=`${e.toFixed(2).padStart(4,"0")}`}disableMenu(){this.closeDropdown(),this.controlsBtn.disabled=!0}enableMenu(){this.controlsBtn.disabled=!1}updateSliderLabel(e,t,n=""){const i=e.valueAsNumber;t.innerHTML=`${i.toFixed(1).padStart(4,"0")}${n}`}setFocusedObject(e){this.focusedObject=e}closeDropdown(){this.contentContainer.classList.add("dropdown-content-closed"),pn.to(this.contentContainer,{height:"0px",duration:$a.CONTENT_DURATION})}expandDropdown(){this.contentContainer.classList.remove("dropdown-content-closed"),pn.to(this.contentContainer,{height:"auto",duration:$a.CONTENT_DURATION})}openOrbitControls(){this.controlsOpen=!0,this.expandDropdown()}}const kb="/assets/codeExec-B5KS6kUD.png",zb="/assets/customization-BTZeYyYt.png",Gb="/assets/flight-C2fs-apX.png",Hb="/assets/flight_1-CceaaXX-.png",Vb="/assets/shop-DNRO9gnC.png",Wb="/assets/stoichiometry-Y_YUlQqx.png",Xb="/assets/71063056065__E7D9A55C-BBAC-4333-A4FA-E186B130FC67-CzWGgevb.JPEG",jb="/assets/IMG_6083-PrYiFUer.JPEG",qb="/assets/IMG_6731-BG2cW8RO.JPEG",Yb="/assets/IMG_7853-BTeGY--3.JPEG",$b="/assets/IMG_7929-BAUXbncZ.JPEG",Kb="/assets/IMG_9064-LLQyoXnn.JPEG",Zb="/assets/IMG_7498-DkBK6w4y.jpg",Jb="/assets/IMG_7512-BlmhT6-h.jpg",Qb="/assets/IMG_7538-D7UVI9XK.jpg",eM="/assets/IMG_8049-rsnXbaKB.jpg",tM="/assets/IMG_8890-RA1MgaWx.jpg",nM="/assets/memomart_build-DmzuRAJ2.png",iM="/assets/memomart_building-C6u5ES2G.png",sM="/assets/memomart_creators-CeFCNab3.png",rM="/assets/memomart_images-B3xTeuQu.png",aM="/assets/battleLog-rrWUt2SQ.png",oM="/assets/battleSelection-wyqG-L_L.png",lM="/assets/createPokemon-mc4wyB_h.png",cM="/assets/createSkill-B12JsW0L.png",uM="/assets/logs-B4Q-t6Fo.png",dM="/assets/mainMenu-C-GSzq0m.png",hM="/assets/signin-Cd_P3GHO.png",fM="/assets/1part3-3-AdvancedRenderer-Dbfb8k7D.png",pM="/assets/1part3-5-AdvancedRenderer-CjF8gM_B.png",mM="/assets/1part3-7-AdvancedRenderer-eN9laW0m.png",gM="/assets/1part3-8-AdvancedRenderer-BJwMt09m.png",_M="/assets/1part3-9-AdvancedRenderer-CSOQKbRQ.png",vM="/assets/2randomSpheres-B2ABK_LL.png",xM="/assets/2threeToruses-36wRa9jY.png",yM="/assets/2twistTaper-Dc2gaYh_.png",SM="/assets/2twoSpheres-Dcw6BIb5.png",bM="/assets/scene1-CCwI0JI3.png",MM="/assets/scene10-Cq8xdEhV.png",TM="/assets/scene6-BpcOW8LY.png",EM="/assets/scene8-BYBNvO4L.png",wM="/assets/remindersDemo%20-%20Made%20with%20Clipchamp-COshlYeX.gif",AM="/assets/gameplay-Uii5n50v.png",CM="/assets/score-CpHjgTnP.png",RM="/assets/tutorial-CiEpAXT7.png",PM="/assets/68321622127__04FAD328-3437-4FF6-8523-CC5E89DBE196-DlYUvZaJ.JPEG",LM="/assets/IMG_3842-CvC6fFZh.JPEG",IM="/assets/IMG_3898-CLRXzTmm.JPEG",DM="/assets/IMG_3939-fPSuJkZg.JPEG",OM="/assets/IMG_5070-B7S9E59B.JPEG",NM="/assets/IMG_8622-FCePg92w.JPEG";function sh(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function lu(s={},e={}){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof s[n]>"u"?s[n]=e[n]:sh(e[n])&&sh(s[n])&&Object.keys(e[n]).length>0&&lu(s[n],e[n])})}const up={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ds(){const s=typeof document<"u"?document:{};return lu(s,up),s}const UM={document:up,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout>"u"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout>"u"||clearTimeout(s)}};function Yt(){const s=typeof window<"u"?window:{};return lu(s,UM),s}function FM(s=""){return s.trim().split(" ").filter(e=>!!e.trim())}function BM(s){const e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function dp(s,e=0){return setTimeout(s,e)}function Ka(){return Date.now()}function kM(s){const e=Yt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function zM(s,e="x"){const t=Yt();let n,i,r;const a=kM(s);return t.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(o=>o.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(i==="none"?"":i)):(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=r.m41:n.length===16?i=parseFloat(n[12]):i=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?i=r.m42:n.length===16?i=parseFloat(n[13]):i=parseFloat(n[5])),i||0}function Ta(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function GM(s){return typeof window<"u"&&typeof window.HTMLElement<"u"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function un(...s){const e=Object(s[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<s.length;n+=1){const i=s[n];if(i!=null&&!GM(i)){const r=Object.keys(Object(i)).filter(a=>t.indexOf(a)<0);for(let a=0,o=r.length;a<o;a+=1){const l=r[a],c=Object.getOwnPropertyDescriptor(i,l);c!==void 0&&c.enumerable&&(Ta(e[l])&&Ta(i[l])?i[l].__swiper__?e[l]=i[l]:un(e[l],i[l]):!Ta(e[l])&&Ta(i[l])?(e[l]={},i[l].__swiper__?e[l]=i[l]:un(e[l],i[l])):e[l]=i[l])}}}return e}function Ea(s,e,t){s.style.setProperty(e,t)}function hp({swiper:s,targetPosition:e,side:t}){const n=Yt(),i=-s.translate;let r=null,a;const o=s.params.speed;s.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(s.cssModeFrameID);const l=e>i?"next":"prev",c=(d,h)=>l==="next"&&d>=h||l==="prev"&&d<=h,u=()=>{a=new Date().getTime(),r===null&&(r=a);const d=Math.max(Math.min((a-r)/o,1),0),h=.5-Math.cos(d*Math.PI)/2;let f=i+h*(e-i);if(c(f,e)&&(f=e),s.wrapperEl.scrollTo({[t]:f}),c(f,e)){s.wrapperEl.style.overflow="hidden",s.wrapperEl.style.scrollSnapType="",setTimeout(()=>{s.wrapperEl.style.overflow="",s.wrapperEl.scrollTo({[t]:f})}),n.cancelAnimationFrame(s.cssModeFrameID);return}s.cssModeFrameID=n.requestAnimationFrame(u)};u()}function qn(s,e=""){const t=Yt(),n=[...s.children];return t.HTMLSlotElement&&s instanceof HTMLSlotElement&&n.push(...s.assignedElements()),e?n.filter(i=>i.matches(e)):n}function HM(s,e){const t=[e];for(;t.length>0;){const n=t.shift();if(s===n)return!0;t.push(...n.children,...n.shadowRoot?n.shadowRoot.children:[],...n.assignedElements?n.assignedElements():[])}}function VM(s,e){const t=Yt();let n=e.contains(s);return!n&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(n=[...e.assignedElements()].includes(s),n||(n=HM(s,e))),n}function Za(s){try{console.warn(s);return}catch{}}function Ja(s,e=[]){const t=document.createElement(s);return t.classList.add(...Array.isArray(e)?e:FM(e)),t}function WM(s,e){const t=[];for(;s.previousElementSibling;){const n=s.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),s=n}return t}function XM(s,e){const t=[];for(;s.nextElementSibling;){const n=s.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),s=n}return t}function Pi(s,e){return Yt().getComputedStyle(s,null).getPropertyValue(e)}function Qa(s){let e=s,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function fp(s,e){const t=[];let n=s.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function xc(s,e,t){const n=Yt();return s[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function At(s){return(Array.isArray(s)?s:[s]).filter(e=>!!e)}function yc(s,e=""){typeof trustedTypes<"u"?s.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):s.innerHTML=e}let sl;function jM(){const s=Yt(),e=ds();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch)}}function pp(){return sl||(sl=jM()),sl}let rl;function qM({userAgent:s}={}){const e=pp(),t=Yt(),n=t.navigator.platform,i=s||t.navigator.userAgent,r={ios:!1,android:!1},a=t.screen.width,o=t.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=n==="Win32";let f=n==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&e.touch&&g.indexOf(`${a}x${o}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!h&&(r.os="android",r.android=!0),(c||d||u)&&(r.os="ios",r.ios=!0),r}function mp(s={}){return rl||(rl=qM(s)),rl}let al;function YM(){const s=Yt(),e=mp();let t=!1;function n(){const o=s.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(n()){const o=String(s.navigator.userAgent);if(o.includes("Version/")){const[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),r=n(),a=r||i&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:a,isWebView:i}}function gp(){return al||(al=YM()),al}function $M({swiper:s,on:e,emit:t}){const n=Yt();let i=null,r=null;const a=()=>{!s||s.destroyed||!s.initialized||(t("beforeResize"),t("resize"))},o=()=>{!s||s.destroyed||!s.initialized||(i=new ResizeObserver(u=>{r=n.requestAnimationFrame(()=>{const{width:d,height:h}=s;let f=d,g=h;u.forEach(({contentBoxSize:_,contentRect:m,target:p})=>{p&&p!==s.el||(f=m?m.width:(_[0]||_).inlineSize,g=m?m.height:(_[0]||_).blockSize)}),(f!==d||g!==h)&&a()})}),i.observe(s.el))},l=()=>{r&&n.cancelAnimationFrame(r),i&&i.unobserve&&s.el&&(i.unobserve(s.el),i=null)},c=()=>{!s||s.destroyed||!s.initialized||t("orientationchange")};e("init",()=>{if(s.params.resizeObserver&&typeof n.ResizeObserver<"u"){o();return}n.addEventListener("resize",a),n.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),n.removeEventListener("resize",a),n.removeEventListener("orientationchange",c)})}function KM({swiper:s,extendParams:e,on:t,emit:n}){const i=[],r=Yt(),a=(c,u={})=>{const d=r.MutationObserver||r.WebkitMutationObserver,h=new d(f=>{if(s.__preventObserver__)return;if(f.length===1){n("observerUpdate",f[0]);return}const g=function(){n("observerUpdate",f[0])};r.requestAnimationFrame?r.requestAnimationFrame(g):r.setTimeout(g,0)});h.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:s.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(h)},o=()=>{if(s.params.observer){if(s.params.observeParents){const c=fp(s.hostEl);for(let u=0;u<c.length;u+=1)a(c[u])}a(s.hostEl,{childList:s.params.observeSlideChildren}),a(s.wrapperEl,{attributes:!1})}},l=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",o),t("destroy",l)}var ZM={on(s,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const i=t?"unshift":"push";return s.split(" ").forEach(r=>{n.eventsListeners[r]||(n.eventsListeners[r]=[]),n.eventsListeners[r][i](e)}),n},once(s,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function i(...r){n.off(s,i),i.__emitterProxy&&delete i.__emitterProxy,e.apply(n,r)}return i.__emitterProxy=e,n.on(s,i,t)},onAny(s,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof s!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[n](s),t},offAny(s){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||s.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((i,r)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[n].splice(r,1)})}),t},emit(...s){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,i;return typeof s[0]=="string"||Array.isArray(s[0])?(t=s[0],n=s.slice(1,s.length),i=e):(t=s[0].events,n=s[0].data,i=s[0].context||e),n.unshift(i),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(o=>{o.apply(i,[a,...n])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(o=>{o.apply(i,n)})}),e}};function JM(){const s=this;let e,t;const n=s.el;typeof s.params.width<"u"&&s.params.width!==null?e=s.params.width:e=n.clientWidth,typeof s.params.height<"u"&&s.params.height!==null?t=s.params.height:t=n.clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(Pi(n,"padding-left")||0,10)-parseInt(Pi(n,"padding-right")||0,10),t=t-parseInt(Pi(n,"padding-top")||0,10)-parseInt(Pi(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function QM(){const s=this;function e(b,R){return parseFloat(b.getPropertyValue(s.getDirectionLabel(R))||0)}const t=s.params,{wrapperEl:n,slidesEl:i,rtlTranslate:r,wrongRTL:a}=s,o=s.virtual&&t.virtual.enabled,l=o?s.virtual.slides.length:s.slides.length,c=qn(i,`.${s.params.slideClass}, swiper-slide`),u=o?s.virtual.slides.length:c.length;let d=[];const h=[],f=[];let g=t.slidesOffsetBefore;typeof g=="function"&&(g=t.slidesOffsetBefore.call(s));let _=t.slidesOffsetAfter;typeof _=="function"&&(_=t.slidesOffsetAfter.call(s));const m=s.snapGrid.length,p=s.slidesGrid.length,v=s.size-g-_;let x=t.spaceBetween,y=-g,M=0,A=0;if(typeof v>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*v:typeof x=="string"&&(x=parseFloat(x)),s.virtualSize=-x-g-_,c.forEach(b=>{r?b.style.marginLeft="":b.style.marginRight="",b.style.marginBottom="",b.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Ea(n,"--swiper-centered-offset-before",""),Ea(n,"--swiper-centered-offset-after",""));const w=t.grid&&t.grid.rows>1&&s.grid;w?s.grid.initSlides(c):s.grid&&s.grid.unsetSlides();let C;const S=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(b=>typeof t.breakpoints[b].slidesPerView<"u").length>0;for(let b=0;b<u;b+=1){C=0;const R=c[b];if(!(R&&(w&&s.grid.updateSlide(b,R,c),Pi(R,"display")==="none"))){if(o&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(C=t.virtual.slidesPerViewAutoSlideSize),C&&R&&(t.roundLengths&&(C=Math.floor(C)),R.style[s.getDirectionLabel("width")]=`${C}px`);else if(t.slidesPerView==="auto"){S&&(R.style[s.getDirectionLabel("width")]="");const I=getComputedStyle(R),N=R.style.transform,z=R.style.webkitTransform;if(N&&(R.style.transform="none"),z&&(R.style.webkitTransform="none"),t.roundLengths)C=s.isHorizontal()?xc(R,"width"):xc(R,"height");else{const G=e(I,"width"),W=e(I,"padding-left"),X=e(I,"padding-right"),U=e(I,"margin-left"),Z=e(I,"margin-right"),ie=I.getPropertyValue("box-sizing");if(ie&&ie==="border-box")C=G+U+Z;else{const{clientWidth:ue,offsetWidth:Ce}=R;C=G+W+X+U+Z+(Ce-ue)}}N&&(R.style.transform=N),z&&(R.style.webkitTransform=z),t.roundLengths&&(C=Math.floor(C))}else C=(v-(t.slidesPerView-1)*x)/t.slidesPerView,t.roundLengths&&(C=Math.floor(C)),R&&(R.style[s.getDirectionLabel("width")]=`${C}px`);R&&(R.swiperSlideSize=C),f.push(C),t.centeredSlides?(y=y+C/2+M/2+x,M===0&&b!==0&&(y=y-v/2-x),b===0&&(y=y-v/2-x),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),A%t.slidesPerGroup===0&&d.push(y),h.push(y)):(t.roundLengths&&(y=Math.floor(y)),(A-Math.min(s.params.slidesPerGroupSkip,A))%s.params.slidesPerGroup===0&&d.push(y),h.push(y),y=y+C+x),s.virtualSize+=C+x,M=C,A+=1}}if(s.virtualSize=Math.max(s.virtualSize,v)+_,r&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${s.virtualSize+x}px`),t.setWrapperSize&&(n.style[s.getDirectionLabel("width")]=`${s.virtualSize+x}px`),w&&s.grid.updateWrapperSize(C,d),!t.centeredSlides){const b=[];for(let R=0;R<d.length;R+=1){let I=d[R];t.roundLengths&&(I=Math.floor(I)),d[R]<=s.virtualSize-v&&b.push(I)}d=b,Math.floor(s.virtualSize-v)-Math.floor(d[d.length-1])>1&&d.push(s.virtualSize-v)}if(o&&t.loop){const b=f[0]+x;if(t.slidesPerGroup>1){const R=Math.ceil((s.virtual.slidesBefore+s.virtual.slidesAfter)/t.slidesPerGroup),I=b*t.slidesPerGroup;for(let N=0;N<R;N+=1)d.push(d[d.length-1]+I)}for(let R=0;R<s.virtual.slidesBefore+s.virtual.slidesAfter;R+=1)t.slidesPerGroup===1&&d.push(d[d.length-1]+b),h.push(h[h.length-1]+b),s.virtualSize+=b}if(d.length===0&&(d=[0]),x!==0){const b=s.isHorizontal()&&r?"marginLeft":s.getDirectionLabel("marginRight");c.filter((R,I)=>!t.cssMode||t.loop?!0:I!==c.length-1).forEach(R=>{R.style[b]=`${x}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let b=0;f.forEach(I=>{b+=I+(x||0)}),b-=x;const R=b>v?b-v:0;d=d.map(I=>I<=0?-g:I>R?R+_:I)}if(t.centerInsufficientSlides){let b=0;f.forEach(I=>{b+=I+(x||0)}),b-=x;const R=(g||0)+(_||0);if(b+R<v){const I=(v-b-R)/2;d.forEach((N,z)=>{d[z]=N-I}),h.forEach((N,z)=>{h[z]=N+I})}}if(Object.assign(s,{slides:c,snapGrid:d,slidesGrid:h,slidesSizesGrid:f}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Ea(n,"--swiper-centered-offset-before",`${-d[0]}px`),Ea(n,"--swiper-centered-offset-after",`${s.size/2-f[f.length-1]/2}px`);const b=-s.snapGrid[0],R=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(I=>I+b),s.slidesGrid=s.slidesGrid.map(I=>I+R)}if(u!==l&&s.emit("slidesLengthChange"),d.length!==m&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),h.length!==p&&s.emit("slidesGridLengthChange"),t.watchSlidesProgress&&s.updateSlidesOffset(),s.emit("slidesUpdated"),!o&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const b=`${t.containerModifierClass}backface-hidden`,R=s.el.classList.contains(b);u<=t.maxBackfaceHiddenSlides?R||s.el.classList.add(b):R&&s.el.classList.remove(b)}}function eT(s){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let i=0,r;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);const a=o=>n?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const o=e.activeIndex+r;if(o>e.slides.length&&!n)break;t.push(a(o))}else t.push(a(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const o=t[r].offsetHeight;i=o>i?o:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function tT(){const s=this,e=s.slides,t=s.isElement?s.isHorizontal()?s.wrapperEl.offsetLeft:s.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(s.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-s.cssOverflowAdjustment()}const rh=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function nT(s=this&&this.translate||0){const e=this,t=e.params,{slides:n,rtlTranslate:i,snapGrid:r}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-s;i&&(a=s),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<n.length;l+=1){const c=n[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=n[0].swiperSlideOffset);const d=(a+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),h=(a-r[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),f=-(a-u),g=f+e.slidesSizesGrid[l],_=f>=0&&f<=e.size-e.slidesSizesGrid[l],m=f>=0&&f<e.size-1||g>1&&g<=e.size||f<=0&&g>=e.size;m&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),rh(c,m,t.slideVisibleClass),rh(c,_,t.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-h:h}}function iT(s){const e=this;if(typeof s>"u"){const u=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*u||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:r,isEnd:a,progressLoop:o}=e;const l=r,c=a;if(n===0)i=0,r=!0,a=!0;else{i=(s-e.minTranslate())/n;const u=Math.abs(s-e.minTranslate())<1,d=Math.abs(s-e.maxTranslate())<1;r=u||i<=0,a=d||i>=1,u&&(i=0),d&&(i=1)}if(t.loop){const u=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[u],f=e.slidesGrid[d],g=e.slidesGrid[e.slidesGrid.length-1],_=Math.abs(s);_>=h?o=(_-h)/g:o=(_+g-f)/g,o>1&&(o-=1)}Object.assign(e,{progress:i,progressLoop:o,isBeginning:r,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),r&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!a)&&e.emit("fromEdge"),e.emit("progress",i)}const ol=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function sT(){const s=this,{slides:e,params:t,slidesEl:n,activeIndex:i}=s,r=s.virtual&&t.virtual.enabled,a=s.grid&&t.grid&&t.grid.rows>1,o=d=>qn(n,`.${t.slideClass}${d}, swiper-slide${d}`)[0];let l,c,u;if(r)if(t.loop){let d=i-s.virtual.slidesBefore;d<0&&(d=s.virtual.slides.length+d),d>=s.virtual.slides.length&&(d-=s.virtual.slides.length),l=o(`[data-swiper-slide-index="${d}"]`)}else l=o(`[data-swiper-slide-index="${i}"]`);else a?(l=e.find(d=>d.column===i),u=e.find(d=>d.column===i+1),c=e.find(d=>d.column===i-1)):l=e[i];l&&(a||(u=XM(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=WM(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(d=>{ol(d,d===l,t.slideActiveClass),ol(d,d===u,t.slideNextClass),ol(d,d===c,t.slidePrevClass)}),s.emitSlidesClasses()}const Ua=(s,e)=>{if(!s||s.destroyed||!s.params)return;const t=()=>s.isElement?"swiper-slide":`.${s.params.slideClass}`,n=e.closest(t());if(n){let i=n.querySelector(`.${s.params.lazyPreloaderClass}`);!i&&s.isElement&&(n.shadowRoot?i=n.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(i=n.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},ll=(s,e)=>{if(!s.slides[e])return;const t=s.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Sc=s=>{if(!s||s.destroyed||!s.params)return;let e=s.params.lazyPreloadPrevNext;const t=s.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(s.params.slidesPerView),i=s.activeIndex;if(s.params.grid&&s.params.grid.rows>1){const a=i,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+n+c)),s.slides.forEach((l,c)=>{o.includes(l.column)&&ll(s,c)});return}const r=i+n-1;if(s.params.rewind||s.params.loop)for(let a=i-e;a<=r+e;a+=1){const o=(a%t+t)%t;(o<i||o>r)&&ll(s,o)}else for(let a=Math.max(i-e,0);a<=Math.min(r+e,t-1);a+=1)a!==i&&(a>r||a<i)&&ll(s,a)};function rT(s){const{slidesGrid:e,params:t}=s,n=s.rtlTranslate?s.translate:-s.translate;let i;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?n>=e[r]&&n<e[r+1]-(e[r+1]-e[r])/2?i=r:n>=e[r]&&n<e[r+1]&&(i=r+1):n>=e[r]&&(i=r);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function aT(s){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:i,activeIndex:r,realIndex:a,snapIndex:o}=e;let l=s,c;const u=f=>{let g=f-e.virtual.slidesBefore;return g<0&&(g=e.virtual.slides.length+g),g>=e.virtual.slides.length&&(g-=e.virtual.slides.length),g};if(typeof l>"u"&&(l=rT(e)),n.indexOf(t)>=0)c=n.indexOf(t);else{const f=Math.min(i.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/i.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===r&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const d=e.grid&&i.grid&&i.grid.rows>1;let h;if(e.virtual&&i.virtual.enabled&&i.loop)h=u(l);else if(d){const f=e.slides.find(_=>_.column===l);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(e.slides.indexOf(f),0)),h=Math.floor(g/i.grid.rows)}else if(e.slides[l]){const f=e.slides[l].getAttribute("data-swiper-slide-index");f?h=parseInt(f,10):h=l}else h=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:h,previousIndex:r,activeIndex:l}),e.initialized&&Sc(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==h&&e.emit("realIndexChange"),e.emit("slideChange"))}function oT(s,e){const t=this,n=t.params;let i=s.closest(`.${n.slideClass}, swiper-slide`);!i&&t.isElement&&e&&e.length>1&&e.includes(s)&&[...e.slice(e.indexOf(s)+1,e.length)].forEach(o=>{!i&&o.matches&&o.matches(`.${n.slideClass}, swiper-slide`)&&(i=o)});let r=!1,a;if(i){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===i){r=!0,a=o;break}}if(i&&r)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var lT={updateSize:JM,updateSlides:QM,updateAutoHeight:eT,updateSlidesOffset:tT,updateSlidesProgress:nT,updateProgress:iT,updateSlidesClasses:sT,updateActiveIndex:aT,updateClickedSlide:oT};function cT(s=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:n,translate:i,wrapperEl:r}=e;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let a=zM(r,s);return a+=e.cssOverflowAdjustment(),n&&(a=-a),a||0}function uT(s,e){const t=this,{rtlTranslate:n,params:i,wrapperEl:r,progress:a}=t;let o=0,l=0;const c=0;t.isHorizontal()?o=n?-s:s:l=s,i.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,i.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:i.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let u;const d=t.maxTranslate()-t.minTranslate();d===0?u=0:u=(s-t.minTranslate())/d,u!==a&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function dT(){return-this.snapGrid[0]}function hT(){return-this.snapGrid[this.snapGrid.length-1]}function fT(s=0,e=this.params.speed,t=!0,n=!0,i){const r=this,{params:a,wrapperEl:o}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let u;if(n&&s>l?u=l:n&&s<c?u=c:u=s,r.updateProgress(u),a.cssMode){const d=r.isHorizontal();if(e===0)o[d?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return hp({swiper:r,targetPosition:-u,side:d?"left":"top"}),!0;o.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(u),t&&(r.emit("beforeTransitionStart",e,i),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(u),t&&(r.emit("beforeTransitionStart",e,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(h){!r||r.destroyed||h.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var pT={getTranslate:cT,setTranslate:uT,minTranslate:dT,maxTranslate:hT,translateTo:fT};function mT(s,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${s}ms`,t.wrapperEl.style.transitionDelay=s===0?"0ms":""),t.emit("setTransition",s,e)}function _p({swiper:s,runCallbacks:e,direction:t,step:n}){const{activeIndex:i,previousIndex:r}=s;let a=t;a||(i>r?a="next":i<r?a="prev":a="reset"),s.emit(`transition${n}`),e&&a==="reset"?s.emit(`slideResetTransition${n}`):e&&i!==r&&(s.emit(`slideChangeTransition${n}`),a==="next"?s.emit(`slideNextTransition${n}`):s.emit(`slidePrevTransition${n}`))}function gT(s=!0,e){const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),_p({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function _T(s=!0,e){const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),_p({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var vT={setTransition:mT,transitionStart:gT,transitionEnd:_T};function xT(s=0,e,t=!0,n,i){typeof s=="string"&&(s=parseInt(s,10));const r=this;let a=s;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:f,enabled:g}=r;if(!g&&!n&&!i||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);const _=Math.min(r.params.slidesPerGroupSkip,a);let m=_+Math.floor((a-_)/r.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const p=-l[m];if(o.normalizeSlideIndex)for(let w=0;w<c.length;w+=1){const C=-Math.floor(p*100),S=Math.floor(c[w]*100),b=Math.floor(c[w+1]*100);typeof c[w+1]<"u"?C>=S&&C<b-(b-S)/2?a=w:C>=S&&C<b&&(a=w+1):C>=S&&(a=w)}if(r.initialized&&a!==d&&(!r.allowSlideNext&&(h?p>r.translate&&p>r.minTranslate():p<r.translate&&p<r.minTranslate())||!r.allowSlidePrev&&p>r.translate&&p>r.maxTranslate()&&(d||0)!==a))return!1;a!==(u||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(p);let v;a>d?v="next":a<d?v="prev":v="reset";const x=r.virtual&&r.params.virtual.enabled;if(!(x&&i)&&(h&&-p===r.translate||!h&&p===r.translate))return r.updateActiveIndex(a),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),o.effect!=="slide"&&r.setTranslate(p),v!=="reset"&&(r.transitionStart(t,v),r.transitionEnd(t,v)),!1;if(o.cssMode){const w=r.isHorizontal(),C=h?p:-p;if(e===0)x&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),x&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[w?"scrollLeft":"scrollTop"]=C})):f[w?"scrollLeft":"scrollTop"]=C,x&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return hp({swiper:r,targetPosition:C,side:w?"left":"top"}),!0;f.scrollTo({[w?"left":"top"]:C,behavior:"smooth"})}return!0}const A=gp().isSafari;return x&&!i&&A&&r.isElement&&r.virtual.update(!1,!1,a),r.setTransition(e),r.setTranslate(p),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,n),r.transitionStart(t,v),e===0?r.transitionEnd(t,v):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(C){!r||r.destroyed||C.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,v))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function yT(s=0,e,t=!0,n){typeof s=="string"&&(s=parseInt(s,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const r=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=s;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let o;if(r){const _=a*i.params.grid.rows;o=i.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===_).column}else o=i.getSlideIndexByData(a);const l=r?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:d}=i.params,h=c||!!u||!!d;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),h&&f%2===0&&(f=f+1));let g=l-o<f;if(h&&(g=g||o<Math.ceil(f/2)),n&&h&&i.params.slidesPerView!=="auto"&&!r&&(g=!1),g){const _=h?o<i.activeIndex?"prev":"next":o-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:_,slideTo:!0,activeSlideIndex:_==="next"?o+1:o-l+1,slideRealIndex:_==="next"?i.realIndex:void 0})}if(r){const _=a*i.params.grid.rows;a=i.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===_).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,e,t,n)}),i}function ST(s,e=!0,t){const n=this,{enabled:i,params:r,animating:a}=n;if(!i||n.destroyed)return n;typeof s>"u"&&(s=n.params.speed);let o=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(o=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<r.slidesPerGroupSkip?1:o,c=n.virtual&&r.virtual.enabled;if(r.loop){if(a&&!c&&r.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,s,e,t)}),!0}return r.rewind&&n.isEnd?n.slideTo(0,s,e,t):n.slideTo(n.activeIndex+l,s,e,t)}function bT(s,e=!0,t){const n=this,{params:i,snapGrid:r,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof s>"u"&&(s=n.params.speed);const u=n.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const d=o?n.translate:-n.translate;function h(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const f=h(d),g=r.map(v=>h(v)),_=i.freeMode&&i.freeMode.enabled;let m=r[g.indexOf(f)-1];if(typeof m>"u"&&(i.cssMode||_)){let v;r.forEach((x,y)=>{f>=x&&(v=y)}),typeof v<"u"&&(m=_?r[v]:r[v>0?v-1:v])}let p=0;if(typeof m<"u"&&(p=a.indexOf(m),p<0&&(p=n.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-n.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&n.isBeginning){const v=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(v,s,e,t)}else if(i.loop&&n.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{n.slideTo(p,s,e,t)}),!0;return n.slideTo(p,s,e,t)}function MT(s,e=!0,t){const n=this;if(!n.destroyed)return typeof s>"u"&&(s=n.params.speed),n.slideTo(n.activeIndex,s,e,t)}function TT(s,e=!0,t,n=.5){const i=this;if(i.destroyed)return;typeof s>"u"&&(s=i.params.speed);let r=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,r),o=a+Math.floor((r-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[o]){const c=i.snapGrid[o],u=i.snapGrid[o+1];l-c>(u-c)*n&&(r+=i.params.slidesPerGroup)}else{const c=i.snapGrid[o-1],u=i.snapGrid[o];l-c<=(u-c)*n&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,s,e,t)}function ET(){const s=this;if(s.destroyed)return;const{params:e,slidesEl:t}=s,n=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView;let i=s.getSlideIndexWhenGrid(s.clickedIndex),r;const a=s.isElement?"swiper-slide":`.${e.slideClass}`,o=s.grid&&s.params.grid&&s.params.grid.rows>1;if(e.loop){if(s.animating)return;r=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s.slideToLoop(r):i>(o?(s.slides.length-n)/2-(s.params.grid.rows-1):s.slides.length-n)?(s.loopFix(),i=s.getSlideIndex(qn(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),dp(()=>{s.slideTo(i)})):s.slideTo(i)}else s.slideTo(i)}var wT={slideTo:xT,slideToLoop:yT,slideNext:ST,slidePrev:bT,slideReset:MT,slideToClosest:TT,slideToClickedSlide:ET};function AT(s,e){const t=this,{params:n,slidesEl:i}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{qn(i,`.${n.slideClass}, swiper-slide`).forEach((g,_)=>{g.setAttribute("data-swiper-slide-index",_)})},a=()=>{const f=qn(i,`.${n.slideBlankClass}`);f.forEach(g=>{g.remove()}),f.length>0&&(t.recalcSlides(),t.updateSlides())},o=t.grid&&n.grid&&n.grid.rows>1;n.loopAddBlankSlides&&(n.slidesPerGroup>1||o)&&a();const l=n.slidesPerGroup*(o?n.grid.rows:1),c=t.slides.length%l!==0,u=o&&t.slides.length%n.grid.rows!==0,d=f=>{for(let g=0;g<f;g+=1){const _=t.isElement?Ja("swiper-slide",[n.slideBlankClass]):Ja("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(_)}};if(c){if(n.loopAddBlankSlides){const f=l-t.slides.length%l;d(f),t.recalcSlides(),t.updateSlides()}else Za("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(u){if(n.loopAddBlankSlides){const f=n.grid.rows-t.slides.length%n.grid.rows;d(f),t.recalcSlides(),t.updateSlides()}else Za("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const h=n.centeredSlides||!!n.slidesOffsetBefore||!!n.slidesOffsetAfter;t.loopFix({slideRealIndex:s,direction:h?void 0:"next",initial:e})}function CT({slideRealIndex:s,slideTo:e=!0,direction:t,setTranslate:n,activeSlideIndex:i,initial:r,byController:a,byMousewheel:o}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:h,params:f}=l,{centeredSlides:g,slidesOffsetBefore:_,slidesOffsetAfter:m,initialSlide:p}=f,v=g||!!_||!!m;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled){e&&(!v&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,l.emit("loopFix");return}let x=f.slidesPerView;x==="auto"?x=l.slidesPerViewDynamic():(x=Math.ceil(parseFloat(f.slidesPerView,10)),v&&x%2===0&&(x=x+1));const y=f.slidesPerGroupAuto?x:f.slidesPerGroup;let M=v?Math.max(y,Math.ceil(x/2)):y;M%y!==0&&(M+=y-M%y),M+=f.loopAdditionalSlides,l.loopedSlides=M;const A=l.grid&&f.grid&&f.grid.rows>1;c.length<x+M||l.params.effect==="cards"&&c.length<x+M*2?Za("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):A&&f.grid.fill==="row"&&Za("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const w=[],C=[],S=A?Math.ceil(c.length/f.grid.rows):c.length,b=r&&S-p<x&&!v;let R=b?p:l.activeIndex;typeof i>"u"?i=l.getSlideIndex(c.find(U=>U.classList.contains(f.slideActiveClass))):R=i;const I=t==="next"||!t,N=t==="prev"||!t;let z=0,G=0;const X=(A?c[i].column:i)+(v&&typeof n>"u"?-x/2+.5:0);if(X<M){z=Math.max(M-X,y);for(let U=0;U<M-X;U+=1){const Z=U-Math.floor(U/S)*S;if(A){const ie=S-Z-1;for(let ue=c.length-1;ue>=0;ue-=1)c[ue].column===ie&&w.push(ue)}else w.push(S-Z-1)}}else if(X+x>S-M){G=Math.max(X-(S-M*2),y),b&&(G=Math.max(G,x-S+p+1));for(let U=0;U<G;U+=1){const Z=U-Math.floor(U/S)*S;A?c.forEach((ie,ue)=>{ie.column===Z&&C.push(ue)}):C.push(Z)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<x+M*2&&(C.includes(i)&&C.splice(C.indexOf(i),1),w.includes(i)&&w.splice(w.indexOf(i),1)),N&&w.forEach(U=>{c[U].swiperLoopMoveDOM=!0,h.prepend(c[U]),c[U].swiperLoopMoveDOM=!1}),I&&C.forEach(U=>{c[U].swiperLoopMoveDOM=!0,h.append(c[U]),c[U].swiperLoopMoveDOM=!1}),l.recalcSlides(),f.slidesPerView==="auto"?l.updateSlides():A&&(w.length>0&&N||C.length>0&&I)&&l.slides.forEach((U,Z)=>{l.grid.updateSlide(Z,U,l.slides)}),f.watchSlidesProgress&&l.updateSlidesOffset(),e){if(w.length>0&&N){if(typeof s>"u"){const U=l.slidesGrid[R],ie=l.slidesGrid[R+z]-U;o?l.setTranslate(l.translate-ie):(l.slideTo(R+Math.ceil(z),0,!1,!0),n&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-ie,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-ie))}else if(n){const U=A?w.length/f.grid.rows:w.length;l.slideTo(l.activeIndex+U,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(C.length>0&&I)if(typeof s>"u"){const U=l.slidesGrid[R],ie=l.slidesGrid[R-G]-U;o?l.setTranslate(l.translate-ie):(l.slideTo(R-G,0,!1,!0),n&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-ie,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-ie))}else{const U=A?C.length/f.grid.rows:C.length;l.slideTo(l.activeIndex-U,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!a){const U={slideRealIndex:s,direction:t,setTranslate:n,activeSlideIndex:i,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(Z=>{!Z.destroyed&&Z.params.loop&&Z.loopFix({...U,slideTo:Z.params.slidesPerView===f.slidesPerView?e:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...U,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView?e:!1})}l.emit("loopFix")}function RT(){const s=this,{params:e,slidesEl:t}=s;if(!e.loop||!t||s.virtual&&s.params.virtual.enabled)return;s.recalcSlides();const n=[];s.slides.forEach(i=>{const r=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;n[r]=i}),s.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),n.forEach(i=>{t.append(i)}),s.recalcSlides(),s.slideTo(s.realIndex,0)}var PT={loopCreate:AT,loopFix:CT,loopDestroy:RT};function LT(s){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=s?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function IT(){const s=this;s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s.isElement&&(s.__preventObserver__=!0),s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1}))}var DT={setGrabCursor:LT,unsetGrabCursor:IT};function OT(s,e=this){function t(n){if(!n||n===ds()||n===Yt())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(s);return!i&&!n.getRootNode?null:i||t(n.getRootNode().host)}return t(e)}function ah(s,e,t){const n=Yt(),{params:i}=s,r=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return r&&(t<=a||t>=n.innerWidth-a)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function NT(s){const e=this,t=ds();let n=s;n.originalEvent&&(n=n.originalEvent);const i=e.touchEventsData;if(n.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==n.pointerId)return;i.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(i.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){ah(e,n,n.targetTouches[0].pageX);return}const{params:r,touches:a,enabled:o}=e;if(!o||!r.simulateTouch&&n.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=n.target;if(r.touchEventsTarget==="wrapper"&&!VM(l,e.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||i.isTouched&&i.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",u=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&u&&(l=u[0]);const d=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,h=!!(n.target&&n.target.shadowRoot);if(r.noSwiping&&(h?OT(d,l):l.closest(d))){e.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;a.currentX=n.pageX,a.currentY=n.pageY;const f=a.currentX,g=a.currentY;if(!ah(e,n,f))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=f,a.startY=g,i.touchStartTime=Ka(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(i.allowThresholdMove=!1);let _=!0;l.matches(i.focusableElements)&&(_=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==l&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&t.activeElement.blur();const m=_&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||m)&&!l.isContentEditable&&n.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function UT(s){const e=ds(),t=this,n=t.touchEventsData,{params:i,touches:r,rtlTranslate:a,enabled:o}=t;if(!o||!i.simulateTouch&&s.pointerType==="mouse")return;let l=s;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(M=>M.identifier===n.touchId),!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,d=c.pageY;if(l.preventedByNestedSwiper){r.startX=u,r.startY=d;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d}),n.touchStartTime=Ka());return}if(i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(d<r.startY&&t.translate<=t.maxTranslate()||d>r.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(a&&(u>r.startX&&-t.translate<=t.maxTranslate()||u<r.startX&&-t.translate>=t.minTranslate()))return;if(!a&&(u<r.startX&&t.translate<=t.maxTranslate()||u>r.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(n.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=u,r.currentY=d;const h=r.currentX-r.startX,f=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(h**2+f**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let M;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:h*h+f*f>=25&&(M=Math.atan2(Math.abs(f),Math.abs(h))*180/Math.PI,n.isScrolling=t.isHorizontal()?M>i.touchAngle:90-M>i.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let g=t.isHorizontal()?h:f,_=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;i.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),_=Math.abs(_)*(a?1:-1)),r.diff=g,g*=i.touchRatio,a&&(g=-g,_=-_);const m=t.touchesDirection;t.swipeDirection=g>0?"prev":"next",t.touchesDirection=_>0?"prev":"next";const p=t.params.loop&&!i.cssMode,v=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(p&&v&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(M)}n.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),i._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&m!==t.touchesDirection&&p&&v&&Math.abs(g)>=1){Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=g+n.startTranslate;let x=!0,y=i.resistanceRatio;if(i.touchReleaseOnEdges&&(y=0),g>0?(p&&v&&n.allowThresholdMove&&n.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(x=!1,i.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+g)**y))):g<0&&(p&&v&&n.allowThresholdMove&&n.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(x=!1,i.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-g)**y))),x&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function FT(s){const e=this,t=e.touchEventsData;let n=s;n.originalEvent&&(n=n.originalEvent);let i;if(n.type==="touchend"||n.type==="touchcancel"){if(i=[...n.changedTouches].find(M=>M.identifier===t.touchId),!i||i.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;i=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!a.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=Ka(),h=d-t.touchStartTime;if(e.allowClick){const M=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(M&&M[0]||n.target,M),e.emit("tap click",n),h<300&&d-t.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(t.lastClickTime=Ka(),dp(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let f;if(a.followFinger?f=l?e.translate:-e.translate:f=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-e.maxTranslate()&&!e.params.loop;let _=0,m=e.slidesSizesGrid[0];for(let M=0;M<c.length;M+=M<a.slidesPerGroupSkip?1:a.slidesPerGroup){const A=M<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[M+A]<"u"?(g||f>=c[M]&&f<c[M+A])&&(_=M,m=c[M+A]-c[M]):(g||f>=c[M])&&(_=M,m=c[c.length-1]-c[c.length-2])}let p=null,v=null;a.rewind&&(e.isBeginning?v=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(p=0));const x=(f-c[_])/m,y=_<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(x>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?p:_+y):e.slideTo(_)),e.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?e.slideTo(_+y):v!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?e.slideTo(v):e.slideTo(_))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(_+y):e.slideTo(_):(e.swipeDirection==="next"&&e.slideTo(p!==null?p:_+y),e.swipeDirection==="prev"&&e.slideTo(v!==null?v:_))}}function oh(){const s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:i,snapGrid:r}=s,a=s.virtual&&s.params.virtual.enabled;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides&&!o?s.slideTo(s.slides.length-1,0,!1,!0):s.params.loop&&!a?s.slideToLoop(s.realIndex,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&(clearTimeout(s.autoplay.resizeTimeout),s.autoplay.resizeTimeout=setTimeout(()=>{s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.resume()},500)),s.allowSlidePrev=i,s.allowSlideNext=n,s.params.watchOverflow&&r!==s.snapGrid&&s.checkOverflow()}function BT(s){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation())))}function kT(){const s=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=s;if(!n)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let i;const r=s.maxTranslate()-s.minTranslate();r===0?i=0:i=(s.translate-s.minTranslate())/r,i!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}function zT(s){const e=this;Ua(e,s.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function GT(){const s=this;s.documentTouchHandlerProceeded||(s.documentTouchHandlerProceeded=!0,s.params.touchReleaseOnEdges&&(s.el.style.touchAction="auto"))}const vp=(s,e)=>{const t=ds(),{params:n,el:i,wrapperEl:r,device:a}=s,o=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!i||typeof i=="string"||(t[l]("touchstart",s.onDocumentTouchStart,{passive:!1,capture:o}),i[l]("touchstart",s.onTouchStart,{passive:!1}),i[l]("pointerdown",s.onTouchStart,{passive:!1}),t[l]("touchmove",s.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",s.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",s.onTouchEnd,{passive:!0}),t[l]("pointerup",s.onTouchEnd,{passive:!0}),t[l]("pointercancel",s.onTouchEnd,{passive:!0}),t[l]("touchcancel",s.onTouchEnd,{passive:!0}),t[l]("pointerout",s.onTouchEnd,{passive:!0}),t[l]("pointerleave",s.onTouchEnd,{passive:!0}),t[l]("contextmenu",s.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&i[l]("click",s.onClick,!0),n.cssMode&&r[l]("scroll",s.onScroll),n.updateOnWindowResize?s[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",oh,!0):s[c]("observerUpdate",oh,!0),i[l]("load",s.onLoad,{capture:!0}))};function HT(){const s=this,{params:e}=s;s.onTouchStart=NT.bind(s),s.onTouchMove=UT.bind(s),s.onTouchEnd=FT.bind(s),s.onDocumentTouchStart=GT.bind(s),e.cssMode&&(s.onScroll=kT.bind(s)),s.onClick=BT.bind(s),s.onLoad=zT.bind(s),vp(s,"on")}function VT(){vp(this,"off")}var WT={attachEvents:HT,detachEvents:VT};const lh=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function XT(){const s=this,{realIndex:e,initialized:t,params:n,el:i}=s,r=n.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const a=ds(),o=n.breakpointsBase==="window"||!n.breakpointsBase?n.breakpointsBase:"container",l=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?s.el:a.querySelector(n.breakpointsBase),c=s.getBreakpoint(r,o,l);if(!c||s.currentBreakpoint===c)return;const d=(c in r?r[c]:void 0)||s.originalParams,h=lh(s,n),f=lh(s,d),g=s.params.grabCursor,_=d.grabCursor,m=n.enabled;h&&!f?(i.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),s.emitContainerClasses()):!h&&f&&(i.classList.add(`${n.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&n.grid.fill==="column")&&i.classList.add(`${n.containerModifierClass}grid-column`),s.emitContainerClasses()),g&&!_?s.unsetGrabCursor():!g&&_&&s.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(A=>{if(typeof d[A]>"u")return;const w=n[A]&&n[A].enabled,C=d[A]&&d[A].enabled;w&&!C&&s[A].disable(),!w&&C&&s[A].enable()});const p=d.direction&&d.direction!==n.direction,v=n.loop&&(d.slidesPerView!==n.slidesPerView||p),x=n.loop;p&&t&&s.changeDirection(),un(s.params,d);const y=s.params.enabled,M=s.params.loop;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),m&&!y?s.disable():!m&&y&&s.enable(),s.currentBreakpoint=c,s.emit("_beforeBreakpoint",d),t&&(v?(s.loopDestroy(),s.loopCreate(e),s.updateSlides()):!x&&M?(s.loopCreate(e),s.updateSlides()):x&&!M&&s.loopDestroy()),s.emit("breakpoint",d)}function jT(s,e="window",t){if(!s||e==="container"&&!t)return;let n=!1;const i=Yt(),r=e==="window"?i.innerHeight:t.clientHeight,a=Object.keys(s).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:r*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:c}=a[o];e==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=t.clientWidth&&(n=l)}return n||"max"}var qT={setBreakpoint:XT,getBreakpoint:jT};function YT(s,e){const t=[];return s.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(i=>{n[i]&&t.push(e+i)}):typeof n=="string"&&t.push(e+n)}),t}function $T(){const s=this,{classNames:e,params:t,rtl:n,el:i,device:r}=s,a=YT(["initialized",t.direction,{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),i.classList.add(...e),s.emitContainerClasses()}function KT(){const s=this,{el:e,classNames:t}=s;!e||typeof e=="string"||(e.classList.remove(...t),s.emitContainerClasses())}var ZT={addClasses:$T,removeClasses:KT};function JT(){const s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:n}=t;if(n){const i=s.slides.length-1,r=s.slidesGrid[i]+s.slidesSizesGrid[i]+n*2;s.isLocked=s.size>r}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var QT={checkOverflow:JT},ch={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function eE(s,e){return function(n={}){const i=Object.keys(n)[0],r=n[i];if(typeof r!="object"||r===null){un(e,n);return}if(s[i]===!0&&(s[i]={enabled:!0}),i==="navigation"&&s[i]&&s[i].enabled&&!s[i].prevEl&&!s[i].nextEl&&(s[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&s[i]&&s[i].enabled&&!s[i].el&&(s[i].auto=!0),!(i in s&&"enabled"in r)){un(e,n);return}typeof s[i]=="object"&&!("enabled"in s[i])&&(s[i].enabled=!0),s[i]||(s[i]={enabled:!1}),un(e,n)}}const cl={eventsEmitter:ZM,update:lT,translate:pT,transition:vT,slide:wT,loop:PT,grabCursor:DT,events:WT,breakpoints:qT,checkOverflow:QT,classes:ZT},ul={};class Tn{constructor(...e){let t,n;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?n=e[0]:[t,n]=e,n||(n={}),n=un({},n),t&&!n.el&&(n.el=t);const i=ds();if(n.el&&typeof n.el=="string"&&i.querySelectorAll(n.el).length>1){const l=[];return i.querySelectorAll(n.el).forEach(c=>{const u=un({},n,{el:c});l.push(new Tn(u))}),l}const r=this;r.__swiper__=!0,r.support=pp(),r.device=mp({userAgent:n.userAgent}),r.browser=gp(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],n.modules&&Array.isArray(n.modules)&&r.modules.push(...n.modules);const a={};r.modules.forEach(l=>{l({params:n,swiper:r,extendParams:eE(n,a),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const o=un({},ch,a);return r.params=un({},o,ul,n),r.originalParams=un({},r.params),r.passedParams=un({},n),r.params&&r.params.on&&Object.keys(r.params.on).forEach(l=>{r.on(l,r.params.on[l])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,i=qn(t,`.${n.slideClass}, swiper-slide`),r=Qa(i[0]);return Qa(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=qn(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),a=(n.maxTranslate()-i)*e+i;n.translateTo(a,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const n=this,{params:i,slides:r,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=n;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=r[c]?Math.ceil(r[c].swiperSlideSize):0,h;for(let f=c+1;f<r.length;f+=1)r[f]&&!h&&(d+=Math.ceil(r[f].swiperSlideSize),u+=1,d>l&&(h=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!h&&(d+=r[f].swiperSlideSize,u+=1,d>l&&(h=!0))}else if(e==="current")for(let d=c+1;d<r.length;d+=1)(t?a[d]+o[d]-a[c]<l:a[d]-a[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Ua(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)i(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const a=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(a.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,i=n.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(i()):qn(n,i())[0];return!a&&t.params.createElements&&(a=Ja("div",t.params.wrapperClass),n.append(a),qn(n,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:n,wrapperEl:a,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:a,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Pi(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Pi(n,"direction")==="rtl"),wrongRTL:Pi(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(r=>{r.complete?Ua(t,r):r.addEventListener("load",a=>{Ua(t,a.target)})}),Sc(t),t.initialized=!0,Sc(t),t.emit("init"),t.emit("afterInit"),t}destroy(e=!0,t=!0){const n=this,{params:i,el:r,wrapperEl:a,slides:o}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),BM(n)),n.destroyed=!0),null}static extendDefaults(e){un(ul,e)}static get extendedDefaults(){return ul}static get defaults(){return ch}static installModule(e){Tn.prototype.__modules__||(Tn.prototype.__modules__=[]);const t=Tn.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Tn.installModule(t)),Tn):(Tn.installModule(e),Tn)}}Object.keys(cl).forEach(s=>{Object.keys(cl[s]).forEach(e=>{Tn.prototype[e]=cl[s][e]})});Tn.use([$M,KM]);function xp(s,e,t,n){return s.params.createElements&&Object.keys(n).forEach(i=>{if(!t[i]&&t.auto===!0){let r=qn(s.el,`.${n[i]}`)[0];r||(r=Ja("div",n[i]),r.className=n[i],s.el.append(r)),t[i]=r,e[i]=r}}),t}const uh='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function tE({swiper:s,extendParams:e,on:t,emit:n}){e({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),s.navigation={nextEl:null,prevEl:null,arrowSvg:uh};function i(f){let g;return f&&typeof f=="string"&&s.isElement&&(g=s.el.querySelector(f)||s.hostEl.querySelector(f),g)?g:(f&&(typeof f=="string"&&(g=[...document.querySelectorAll(f)]),s.params.uniqueNavElements&&typeof f=="string"&&g&&g.length>1&&s.el.querySelectorAll(f).length===1?g=s.el.querySelector(f):g&&g.length===1&&(g=g[0])),f&&!g?f:g)}function r(f,g){const _=s.params.navigation;f=At(f),f.forEach(m=>{m&&(m.classList[g?"add":"remove"](..._.disabledClass.split(" ")),m.tagName==="BUTTON"&&(m.disabled=g),s.params.watchOverflow&&s.enabled&&m.classList[s.isLocked?"add":"remove"](_.lockClass))})}function a(){const{nextEl:f,prevEl:g}=s.navigation;if(s.params.loop){r(g,!1),r(f,!1);return}r(g,s.isBeginning&&!s.params.rewind),r(f,s.isEnd&&!s.params.rewind)}function o(f){f.preventDefault(),!(s.isBeginning&&!s.params.loop&&!s.params.rewind)&&(s.slidePrev(),n("navigationPrev"))}function l(f){f.preventDefault(),!(s.isEnd&&!s.params.loop&&!s.params.rewind)&&(s.slideNext(),n("navigationNext"))}function c(){const f=s.params.navigation;if(s.params.navigation=xp(s,s.originalParams.navigation,s.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(f.nextEl||f.prevEl))return;let g=i(f.nextEl),_=i(f.prevEl);Object.assign(s.navigation,{nextEl:g,prevEl:_}),g=At(g),_=At(_);const m=(p,v)=>{if(p){if(f.addIcons&&p.matches(".swiper-button-next,.swiper-button-prev")&&!p.querySelector("svg")){const x=document.createElement("div");yc(x,uh),p.appendChild(x.querySelector("svg")),x.remove()}p.addEventListener("click",v==="next"?l:o)}!s.enabled&&p&&p.classList.add(...f.lockClass.split(" "))};g.forEach(p=>m(p,"next")),_.forEach(p=>m(p,"prev"))}function u(){let{nextEl:f,prevEl:g}=s.navigation;f=At(f),g=At(g);const _=(m,p)=>{m.removeEventListener("click",p==="next"?l:o),m.classList.remove(...s.params.navigation.disabledClass.split(" "))};f.forEach(m=>_(m,"next")),g.forEach(m=>_(m,"prev"))}t("init",()=>{s.params.navigation.enabled===!1?h():(c(),a())}),t("toEdge fromEdge lock unlock",()=>{a()}),t("destroy",()=>{u()}),t("enable disable",()=>{let{nextEl:f,prevEl:g}=s.navigation;if(f=At(f),g=At(g),s.enabled){a();return}[...f,...g].filter(_=>!!_).forEach(_=>_.classList.add(s.params.navigation.lockClass))}),t("click",(f,g)=>{let{nextEl:_,prevEl:m}=s.navigation;_=At(_),m=At(m);const p=g.target;let v=m.includes(p)||_.includes(p);if(s.isElement&&!v){const x=g.path||g.composedPath&&g.composedPath();x&&(v=x.find(y=>_.includes(y)||m.includes(y)))}if(s.params.navigation.hideOnClick&&!v){if(s.pagination&&s.params.pagination&&s.params.pagination.clickable&&(s.pagination.el===p||s.pagination.el.contains(p)))return;let x;_.length?x=_[0].classList.contains(s.params.navigation.hiddenClass):m.length&&(x=m[0].classList.contains(s.params.navigation.hiddenClass)),n(x===!0?"navigationShow":"navigationHide"),[..._,...m].filter(y=>!!y).forEach(y=>y.classList.toggle(s.params.navigation.hiddenClass))}});const d=()=>{s.el.classList.remove(...s.params.navigation.navigationDisabledClass.split(" ")),c(),a()},h=()=>{s.el.classList.add(...s.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(s.navigation,{enable:d,disable:h,update:a,init:c,destroy:u})}function _r(s=""){return`.${s.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function nE({swiper:s,extendParams:e,on:t,emit:n}){const i="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),s.pagination={el:null,bullets:[]};let r,a=0;function o(){return!s.params.pagination.el||!s.pagination.el||Array.isArray(s.pagination.el)&&s.pagination.el.length===0}function l(p,v){const{bulletActiveClass:x}=s.params.pagination;p&&(p=p[`${v==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${x}-${v}`),p=p[`${v==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${x}-${v}-${v}`)))}function c(p,v,x){if(p=p%x,v=v%x,v===p+1)return"next";if(v===p-1)return"previous"}function u(p){const v=p.target.closest(_r(s.params.pagination.bulletClass));if(!v)return;p.preventDefault();const x=Qa(v)*s.params.slidesPerGroup;if(s.params.loop){if(s.realIndex===x)return;const y=c(s.realIndex,x,s.slides.length);y==="next"?s.slideNext():y==="previous"?s.slidePrev():s.slideToLoop(x)}else s.slideTo(x)}function d(){const p=s.rtl,v=s.params.pagination;if(o())return;let x=s.pagination.el;x=At(x);let y,M;const A=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.slides.length,w=s.params.loop?Math.ceil(A/s.params.slidesPerGroup):s.snapGrid.length;if(s.params.loop?(M=s.previousRealIndex||0,y=s.params.slidesPerGroup>1?Math.floor(s.realIndex/s.params.slidesPerGroup):s.realIndex):typeof s.snapIndex<"u"?(y=s.snapIndex,M=s.previousSnapIndex):(M=s.previousIndex||0,y=s.activeIndex||0),v.type==="bullets"&&s.pagination.bullets&&s.pagination.bullets.length>0){const C=s.pagination.bullets;let S,b,R;if(v.dynamicBullets&&(r=xc(C[0],s.isHorizontal()?"width":"height"),x.forEach(I=>{I.style[s.isHorizontal()?"width":"height"]=`${r*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&M!==void 0&&(a+=y-(M||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),S=Math.max(y-a,0),b=S+(Math.min(C.length,v.dynamicMainBullets)-1),R=(b+S)/2),C.forEach(I=>{const N=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(z=>`${v.bulletActiveClass}${z}`)].map(z=>typeof z=="string"&&z.includes(" ")?z.split(" "):z).flat();I.classList.remove(...N)}),x.length>1)C.forEach(I=>{const N=Qa(I);N===y?I.classList.add(...v.bulletActiveClass.split(" ")):s.isElement&&I.setAttribute("part","bullet"),v.dynamicBullets&&(N>=S&&N<=b&&I.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),N===S&&l(I,"prev"),N===b&&l(I,"next"))});else{const I=C[y];if(I&&I.classList.add(...v.bulletActiveClass.split(" ")),s.isElement&&C.forEach((N,z)=>{N.setAttribute("part",z===y?"bullet-active":"bullet")}),v.dynamicBullets){const N=C[S],z=C[b];for(let G=S;G<=b;G+=1)C[G]&&C[G].classList.add(...`${v.bulletActiveClass}-main`.split(" "));l(N,"prev"),l(z,"next")}}if(v.dynamicBullets){const I=Math.min(C.length,v.dynamicMainBullets+4),N=(r*I-r)/2-R*r,z=p?"right":"left";C.forEach(G=>{G.style[s.isHorizontal()?z:"top"]=`${N}px`})}}x.forEach((C,S)=>{if(v.type==="fraction"&&(C.querySelectorAll(_r(v.currentClass)).forEach(b=>{b.textContent=v.formatFractionCurrent(y+1)}),C.querySelectorAll(_r(v.totalClass)).forEach(b=>{b.textContent=v.formatFractionTotal(w)})),v.type==="progressbar"){let b;v.progressbarOpposite?b=s.isHorizontal()?"vertical":"horizontal":b=s.isHorizontal()?"horizontal":"vertical";const R=(y+1)/w;let I=1,N=1;b==="horizontal"?I=R:N=R,C.querySelectorAll(_r(v.progressbarFillClass)).forEach(z=>{z.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${N})`,z.style.transitionDuration=`${s.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(yc(C,v.renderCustom(s,y+1,w)),S===0&&n("paginationRender",C)):(S===0&&n("paginationRender",C),n("paginationUpdate",C)),s.params.watchOverflow&&s.enabled&&C.classList[s.isLocked?"add":"remove"](v.lockClass)})}function h(){const p=s.params.pagination;if(o())return;const v=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.grid&&s.params.grid.rows>1?s.slides.length/Math.ceil(s.params.grid.rows):s.slides.length;let x=s.pagination.el;x=At(x);let y="";if(p.type==="bullets"){let M=s.params.loop?Math.ceil(v/s.params.slidesPerGroup):s.snapGrid.length;s.params.freeMode&&s.params.freeMode.enabled&&M>v&&(M=v);for(let A=0;A<M;A+=1)p.renderBullet?y+=p.renderBullet.call(s,A,p.bulletClass):y+=`<${p.bulletElement} ${s.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?y=p.renderFraction.call(s,p.currentClass,p.totalClass):y=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?y=p.renderProgressbar.call(s,p.progressbarFillClass):y=`<span class="${p.progressbarFillClass}"></span>`),s.pagination.bullets=[],x.forEach(M=>{p.type!=="custom"&&yc(M,y||""),p.type==="bullets"&&s.pagination.bullets.push(...M.querySelectorAll(_r(p.bulletClass)))}),p.type!=="custom"&&n("paginationRender",x[0])}function f(){s.params.pagination=xp(s,s.originalParams.pagination,s.params.pagination,{el:"swiper-pagination"});const p=s.params.pagination;if(!p.el)return;let v;typeof p.el=="string"&&s.isElement&&(v=s.el.querySelector(p.el)),!v&&typeof p.el=="string"&&(v=[...document.querySelectorAll(p.el)]),v||(v=p.el),!(!v||v.length===0)&&(s.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...s.el.querySelectorAll(p.el)],v.length>1&&(v=v.find(x=>fp(x,".swiper")[0]===s.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(s.pagination,{el:v}),v=At(v),v.forEach(x=>{p.type==="bullets"&&p.clickable&&x.classList.add(...(p.clickableClass||"").split(" ")),x.classList.add(p.modifierClass+p.type),x.classList.add(s.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(x.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&x.classList.add(p.progressbarOppositeClass),p.clickable&&x.addEventListener("click",u),s.enabled||x.classList.add(p.lockClass)}))}function g(){const p=s.params.pagination;if(o())return;let v=s.pagination.el;v&&(v=At(v),v.forEach(x=>{x.classList.remove(p.hiddenClass),x.classList.remove(p.modifierClass+p.type),x.classList.remove(s.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(x.classList.remove(...(p.clickableClass||"").split(" ")),x.removeEventListener("click",u))})),s.pagination.bullets&&s.pagination.bullets.forEach(x=>x.classList.remove(...p.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!s.pagination||!s.pagination.el)return;const p=s.params.pagination;let{el:v}=s.pagination;v=At(v),v.forEach(x=>{x.classList.remove(p.horizontalClass,p.verticalClass),x.classList.add(s.isHorizontal()?p.horizontalClass:p.verticalClass)})}),t("init",()=>{s.params.pagination.enabled===!1?m():(f(),h(),d())}),t("activeIndexChange",()=>{typeof s.snapIndex>"u"&&d()}),t("snapIndexChange",()=>{d()}),t("snapGridLengthChange",()=>{h(),d()}),t("destroy",()=>{g()}),t("enable disable",()=>{let{el:p}=s.pagination;p&&(p=At(p),p.forEach(v=>v.classList[s.enabled?"remove":"add"](s.params.pagination.lockClass)))}),t("lock unlock",()=>{d()}),t("click",(p,v)=>{const x=v.target,y=At(s.pagination.el);if(s.params.pagination.el&&s.params.pagination.hideOnClick&&y&&y.length>0&&!x.classList.contains(s.params.pagination.bulletClass)){if(s.navigation&&(s.navigation.nextEl&&x===s.navigation.nextEl||s.navigation.prevEl&&x===s.navigation.prevEl))return;const M=y[0].classList.contains(s.params.pagination.hiddenClass);n(M===!0?"paginationShow":"paginationHide"),y.forEach(A=>A.classList.toggle(s.params.pagination.hiddenClass))}});const _=()=>{s.el.classList.remove(s.params.pagination.paginationDisabledClass);let{el:p}=s.pagination;p&&(p=At(p),p.forEach(v=>v.classList.remove(s.params.pagination.paginationDisabledClass))),f(),h(),d()},m=()=>{s.el.classList.add(s.params.pagination.paginationDisabledClass);let{el:p}=s.pagination;p&&(p=At(p),p.forEach(v=>v.classList.add(s.params.pagination.paginationDisabledClass))),g()};Object.assign(s.pagination,{enable:_,disable:m,render:h,update:d,init:f,destroy:g})}class iE{constructor(){this.navigationButtons=new Map,this.tlmContainer=document.getElementById("tlm-container"),this.navContainer=document.getElementById("tlm-navigation-container"),this.selectedTitle=document.getElementById("tlm-content-title"),this.selectedRole=document.getElementById("tlm-content-role"),this.selectedTools=document.getElementById("tlm-content-tools"),this.selectedBody=document.getElementById("tlm-content-body"),this.contentParent=document.getElementById("content-parent"),this.swiperWrapper=document.getElementById("swiper-wrapper"),this.swiper=new Tn(".swiper",{modules:[tE,nE],direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1}}),document.getElementById("exit-tlm-button").addEventListener("click",t=>{t.target.blur(),console.log("Clicked!"),this.tlmContainer.classList.toggle("hidden")});const e=Object.assign({"/src/photos/cosmicCourier/codeExec.png":kb,"/src/photos/cosmicCourier/customization.png":zb,"/src/photos/cosmicCourier/flight.png":Gb,"/src/photos/cosmicCourier/flight_1.png":Hb,"/src/photos/cosmicCourier/shop.png":Vb,"/src/photos/cosmicCourier/stoichiometry.png":Wb,"/src/photos/crafts/71063056065__E7D9A55C-BBAC-4333-A4FA-E186B130FC67.JPEG":Xb,"/src/photos/crafts/IMG_6083.JPEG":jb,"/src/photos/crafts/IMG_6731.JPEG":qb,"/src/photos/crafts/IMG_7853.JPEG":Yb,"/src/photos/crafts/IMG_7929.JPEG":$b,"/src/photos/crafts/IMG_9064.JPEG":Kb,"/src/photos/memomart/IMG_7498.jpg":Zb,"/src/photos/memomart/IMG_7512.jpg":Jb,"/src/photos/memomart/IMG_7538.jpg":Qb,"/src/photos/memomart/IMG_8049.jpg":eM,"/src/photos/memomart/IMG_8890.jpg":tM,"/src/photos/memomart/memomart_build.png":nM,"/src/photos/memomart/memomart_building.png":iM,"/src/photos/memomart/memomart_creators.png":sM,"/src/photos/memomart/memomart_images.png":rM,"/src/photos/pokemon/battleLog.png":aM,"/src/photos/pokemon/battleSelection.png":oM,"/src/photos/pokemon/createPokemon.png":lM,"/src/photos/pokemon/createSkill.png":cM,"/src/photos/pokemon/logs.png":uM,"/src/photos/pokemon/mainMenu.png":dM,"/src/photos/pokemon/signin.png":hM,"/src/photos/raytracer/1part3-3-AdvancedRenderer.png":fM,"/src/photos/raytracer/1part3-5-AdvancedRenderer.png":pM,"/src/photos/raytracer/1part3-7-AdvancedRenderer.png":mM,"/src/photos/raytracer/1part3-8-AdvancedRenderer.png":gM,"/src/photos/raytracer/1part3-9-AdvancedRenderer.png":_M,"/src/photos/raytracer/2randomSpheres.png":vM,"/src/photos/raytracer/2threeToruses.png":xM,"/src/photos/raytracer/2twistTaper.png":yM,"/src/photos/raytracer/2twoSpheres.png":SM,"/src/photos/raytracer/scene1.png":bM,"/src/photos/raytracer/scene10.png":MM,"/src/photos/raytracer/scene6.png":TM,"/src/photos/raytracer/scene8.png":EM,"/src/photos/reminders/remindersDemo - Made with Clipchamp.gif":wM,"/src/photos/strokeRehab/gameplay.png":AM,"/src/photos/strokeRehab/score.png":CM,"/src/photos/strokeRehab/tutorial.png":RM,"/src/photos/technical/68321622127__04FAD328-3437-4FF6-8523-CC5E89DBE196.JPEG":PM,"/src/photos/technical/IMG_3842.JPEG":LM,"/src/photos/technical/IMG_3898.JPEG":IM,"/src/photos/technical/IMG_3939.JPEG":DM,"/src/photos/technical/IMG_5070.JPEG":OM,"/src/photos/technical/IMG_8622.JPEG":NM});this.images={};for(const t in e){const i=t.split("/")[3];this.images[i]||(this.images[i]=[]),this.images[i].push(e[t])}}buildNavigation(e=null){if(e==null)return;const t=this.createNavigationBranch(e.info);t[0].style.overflowX="hidden",t[0].style.overflowY="auto",t[0].style.scrollbarWidth="auto",t[0].style.scrollbarColor="#c9ffd1 rgba(0,0,0,0)",this.navContainer.appendChild(t[0]),e.info.children.forEach(n=>{const i=this.createNavigationBranch(n.info);n.info.children.forEach(r=>{const a=document.createElement("button");a.textContent=r.info.tabLabel,a.classList.add("observed-item","baseText"),a.style.width="fit-content",a.addEventListener("click",()=>{this.populateContent(r.info)}),this.navigationButtons.set(r.info.tabLabel,a),i[1].appendChild(a)}),t[1].appendChild(i[0])})}createNavigationBranch(e){const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.height="fit-content",t.style.boxSizing="border-box",t.style.marginTop="10px";const n=document.createElement("button");n.classList.add("observed-item","baseText"),n.textContent=e.tabLabel,n.style.width="fit-content",n.addEventListener("click",()=>{this.populateContent(e)}),this.navigationButtons.set(e.tabLabel,n);const i=document.createElement("div");i.classList.add("branch-body");const r=document.createElement("div");r.style.width="2px",r.style.height="100%",r.style.backgroundColor="#c9ffd1";const a=document.createElement("div");return a.style.height="100%",a.style.display="flex",a.style.flexDirection="column",a.style.paddingLeft="15px",a.style.boxSizing="border-box",i.appendChild(r),i.appendChild(a),t.appendChild(n),t.appendChild(i),[t,a]}populateContent(e){this.selectedTitle.textContent=e.header,this.selectedBody.innerHTML=e.body;let t="";e.role!=""&&(t="Role: "),this.selectedRole.textContent=t+e.role,t="",e.tools!=""&&(t="Tools: "),this.selectedTools.textContent=t+e.tools,e.galleryName==""?this.contentParent.style.gridTemplateColumns="1fr 0fr":(this.contentParent.style.gridTemplateColumns="1fr 1fr",this.setPhotos(e.galleryName))}setContent(e){this.navigationButtons.get(e.tabLabel).focus(),this.populateContent(e)}setPhotos(e){this.swiperWrapper.innerHTML="";for(const t in this.images[e]){const n=document.createElement("div");n.classList.add("swiper-slide");const i=document.createElement("img");i.src=this.images[e][t],i.classList.add("swiper-image"),n.append(i),this.swiperWrapper.append(n)}this.swiper.update(),this.swiper.pagination.update(),this.swiper.slideTo(0,0)}}class Lt{constructor({semimajorAxis:e=0,eccentricity:t=0,inclination:n=0,raan:i=0,argPeriapsis:r=0,trueAnomaly:a=0}={}){this.semimajorAxis=e,this.eccentricity=t,this.inclination=n,this.raan=i,this.argPeriapsis=r,this.trueAnomaly=a}}class bc{static getInertialPosition(e){const t=this.computeRadius(e),n=e.argPeriapsis+e.trueAnomaly,i=Math.cos(e.raan),r=Math.sin(e.raan),a=Math.cos(e.inclination),o=Math.sin(e.inclination);return[t*(i*Math.cos(n)-r*a*Math.sin(n)),t*(o*Math.sin(n)),t*(r*Math.cos(n)+i*a*Math.sin(n))]}static computeRadius(e){return e.semimajorAxis*(1-e.eccentricity*e.eccentricity)/(1+e.eccentricity*Math.cos(e.trueAnomaly))}}const dh=new Fn,wa=new D;class sE extends Pg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Jt(e,3)),this.setAttribute("uv",new Jt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new ld(t,6,1);return this.setAttribute("instanceStart",new ts(n,3,0)),this.setAttribute("instanceEnd",new ts(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new ld(t,6,1);return this.setAttribute("instanceColorStart",new ts(n,3,0)),this.setAttribute("instanceColorEnd",new ts(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new og(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),dh.setFromBufferAttribute(t),this.boundingBox.union(dh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)wa.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wa)),wa.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(wa));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}class rE extends sE{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let i=0;i<t;i++)n[6*i]=e[i].x,n[6*i+1]=e[i].y,n[6*i+2]=e[i].z||0,n[6*i+3]=e[i+1].x,n[6*i+4]=e[i+1].y,n[6*i+5]=e[i+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}ae.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new xe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Kt.line={uniforms:Vr.merge([ae.common,ae.fog,ae.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class aE extends Rn{constructor(e){super({type:"LineMaterial",uniforms:Vr.clone(Kt.line.uniforms),vertexShader:Kt.line.vertexShader,fragmentShader:Kt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}class oE{constructor({orbitParams:e=null,resolution:t=50,color:n=255,offset:i=new D,thickness:r=2}={}){this.orbitParams=e,this.resolution=t,this.color=n,this.offset=i,this.points=[],this.lineGeo=new rE,this.lineMat=new aE({color:this.color,worldUnits:!0,linewidth:r,transparent:!0}),this.defaultThickness=r,this.line=new Bt(this.lineGeo,this.lineMat),this.computeTrail()}computeTrail(){if(this.orbitParams=={}){console.warn("Orbital elements are null during trail calculation!");return}else if(this.resolution<=2){console.warn("Trail resolution is not high enough for a valid trail!");return}const e=2*Math.PI/this.resolution;this.points=[];for(let t=0;t<=this.resolution;t++){this.orbitParams.trueAnomaly=t*e;const n=bc.getInertialPosition(this.orbitParams);this.points.push(new D(n[0],n[1],n[2]))}this.lineGeo.setFromPoints(this.points)}update(e,t=!1){t&&this.computeTrail();const n=[];for(let i=0;i<this.points.length;i++)n.push(new D(this.points[i].x+e.x,this.points[i].y+e.y,this.points[i].z+e.z));this.line.geometry.setFromPoints(n)}}function lE(s,e,t){const n=Math.random()*(s[1]-s[0])+s[0],i=Math.random()*(e[1]-e[0])+e[0],r=Math.random()*(t[1]-t[0])+t[0],a=new Le;return a.setHSL(n/360,i/100,r/100),a}class It{constructor({tabLabel:e="LABEL",header:t="HEADER",summary:n="Summary",body:i="BODY",role:r="",tools:a="",modelPath:o="",simulateOrbit:l=!1,children:c=[],cameraDistance:u=10,effectiveDelta:d=1,scale:h=null,frameGap:f=new xe(0,0),galleryName:g="",trailColor:_=255,trailWidth:m=2,childrenMaxSemimajor:p=0}={}){this.tabLabel=e,this.header=t,this.body=i,this.modelPath=o,this.simulateOrbit=l,this.children=c,this.cameraDistance=u,this.effectiveDelta=d,this.scale=h,this.frameGap=f,this.images={},this.galleryName=g,this.role=r,this.tools=a,this.summary=n,this.trailColor=_,this.trailWidth=m,this.childrenMaxSemimajor=p}}class Dt{constructor(e,t,n){this.orbitObj=e,this.info=t,this.params=n,this.object=null,this.DEG2RAD=Math.PI/180,this.R=[],this.deltaScale=t.effectiveDelta,this.updateTrail=!1,this.updateTrailRecompute=!1,this.holdTrueAnomaly=!1;let i=new D;e&&(i=e.position),this.trail=new oE({orbitParams:this.params,offset:i,color:lE([0,360],[30,60],[20,50]),thickness:t.trailWidth})}async Initialize(e,t){if(this.params.trueAnomaly=e,this.info.modelPath==""){const n=new nr(1,1),i=new wi(16777215);i.transparent=!0,this.object=new Bt(n,i)}else this.object=await new cp().loadModel(this.info.modelPath);return this.info.scale!=null&&this.object.scale.set(this.info.scale.x,this.info.scale.y,this.info.scale.z),t.add(this.object),t.add(this.trail.line),this.object}Update(e){(this.updateTrail||this.updateTrailRecompute)&&this.trail.update(this.orbitObj.position,this.updateTrailRecompute),this.object.rotation.y+=8*e*this.DEG2RAD,this.UpdateRelativePosition()}UpdateTrueAnomaly(){let e=1;const t=this.params.semimajorAxis*(1-this.params.eccentricity),n=this.params.semimajorAxis*(1+this.params.eccentricity),i=bc.computeRadius(this.params),r=1/(n*n),a=1/(t*t);e=.5+(1/(i*i)-r)/(a-r)*(1.5-.2),this.params.trueAnomaly+=e*this.deltaScale*this.DEG2RAD,this.params.trueAnomaly%=2*Math.PI}UpdateRelativePosition(){if(!this.info.simulateOrbit)return;this.holdTrueAnomaly||this.UpdateTrueAnomaly();const e=bc.getInertialPosition(this.params);this.object.position.x=e[0]+this.orbitObj.position.x,this.object.position.y=e[1]+this.orbitObj.position.y,this.object.position.z=e[2]+this.orbitObj.position.z}ResetDelta(){this.deltaScale=this.info.effectiveDelta}TurnOff(){this.info.simulateOrbit=!1,this.object.isMesh&&this.object.material&&(this.object.material.opacity=0);const e=[];this.object.traverse(t=>{t.isMesh&&t.material&&(t.material.transparent=!0,e.push(t.material))}),e.length!=0&&(e.forEach(t=>{t.opacity=0}),this.FadeTrail(0))}FadeTrail(e){this.trail.line.material.depthWrite=e!=0,pn.to(this.trail.line.material,{opacity:e,duration:.75,ease:"expo.out"})}FadeObject(e,t=null){this.FadeTrail(e),this.object.isMesh&&this.object.material&&(this.object.material.depthWrite=e!=0,pn.to(this.object.material,{opacity:e,duration:.75,ease:"expo.out"}));const n=[];if(this.object.traverse(i=>{i.isMesh&&i.material&&(i.material.depthWrite=e!=0,i.material.transparent=!0,n.push(i.material))}),n.length==0){t&&t();return}pn.to(n,{opacity:e,duration:.75,ease:"expo.out",onComplete:()=>{t&&t()}})}}class cE extends Dt{constructor(e){const t=new Lt({}),n=new It({simulateOrbit:!1,tabLabel:"D34N",header:"D34N-B4DR",summary:"Welcome to my solar system!<br><br>The 3D view may be explored by clicking the tabs in the bottom left.<br><br>You may also click and drag any empty space in the viewport to rotate around the centered object.<br><br>The 'TELEMETRY' button will display more details on objects in this system.<br><br>The 'ORBIT CONTROLS' button will display settings for the visible orbits.",body:"This website is a creative manifestation of my portfolio! It documents most of my skills and the projects that I feel proud to show.<br><br>This telemetry screen was created to provide a more typical webpage experience while still trying to fit in the themes of the project.",modelPath:"models/dean_lowPoly.glb",cameraDistance:300,scale:new D(6,6,6),frameGap:new xe(10,25),childrenMaxSemimajor:250});super(e,n,t)}}class uE extends Dt{constructor(e){const i=new Lt({inclination:0*(Math.PI/180),trueAnomaly:0,eccentricity:.2,semimajorAxis:125,raan:0,argPeriapsis:45*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"WORK",header:"WORK EXPERIENCE",summary:"Formal work experience.",body:"I believe its important to pursue passion, and I have had some amazing opportunities that allowed me to grow while contributing to work I care about.<br><br>This content provides a detailed overview of my formal work experience.",modelPath:"models/laptop.glb",cameraDistance:60,effectiveDelta:.5,frameGap:new xe(20,35),childrenMaxSemimajor:35});super(e,r,i)}}class dE extends Dt{constructor(e){const i=new Lt({inclination:0*(Math.PI/180),trueAnomaly:0,eccentricity:.4,semimajorAxis:175,raan:0,argPeriapsis:45*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"SCHOOL",header:"SCHOOL PROJECTS",summary:"Earned:<br>-Bachelors of Science in Aerospace Engineering<br>-Minor in Computing and Devices<br><br>In Progress:<br>-Masters of Science in Computer Science (Human-Computer Interaction)",body:"Earned:<br>-Bachelors of Science in Aerospace Engineering<br>-Minor in Computing and Devices<br><br>In Progress:<br>-Masters of Science in Computer Science (Human-Computer Interaction)<br><br>This content provides an overview of my most substantial school projects. Each of these projects has helped my technical abilities grow, and has deepened my understanding of software development.",modelPath:"models/georgiaTech.glb",cameraDistance:60,effectiveDelta:.2,frameGap:new xe(20,35),childrenMaxSemimajor:35});super(e,r,i)}}class hE extends Dt{constructor(e){const i=new Lt({inclination:0*(Math.PI/180),trueAnomaly:0,eccentricity:.1,semimajorAxis:220,raan:0,argPeriapsis:25*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"PERSONAL",header:"PERSONAL INTERESTS",summary:"I have always loved to create things, and as my technical capabilities grow I proportionally expand the scope of my projects.",body:"Unfortunately, since LEGO discontinued the Bionicle line in 2010 I had to find my creative outlet elsewhere. So, I picked up arts, crafts, and eventually, some technical interests!<br><br>From woodworking, to 3D printing, to painting, to software development, I have always felt the most joy when watching my ideas bloom to tangibility.<br><br>This category presents the personal projects I am most proud of, along with the more substantial MEM-O-MART venture I am tackling with friends!<br><br><br>LEGO® is a trademark of the LEGO Group of companies which does not sponsor, authorize or endorse this site",modelPath:"models/dean_lowPoly.glb",cameraDistance:60,effectiveDelta:.2,frameGap:new xe(20,35),childrenMaxSemimajor:35});super(e,r,i)}}class fE extends Dt{constructor(e){const i=new Lt({inclination:25*(Math.PI/180),trueAnomaly:0,eccentricity:.1,semimajorAxis:23,raan:0,argPeriapsis:55*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"OSR",header:"Odyssey Space Research",role:"Aerospace Engineer",tools:"C++, Git, Python, MATLAB, Trick",summary:"Currently, I work full-time as an Aerospace Engineer at Odyssey Space Research. I am supporting NASA and Lockheed Martin on the Orion project, a Multi-Purpose Crewed Vehicle (MPCV) that is being designed for the Artemis mission.",body:"At Odyssey Space Research I support the Lockheed Martin team that is contributing to NASA's Orion project. Specifically, I work on a team that develops, runs, and analyzes spaceflight simulations for rendez-vous proximity operations and docking (RPOD).<br><br>Our team works in a C++/Python hybrid environment by leveraging NASA's trick simulation environment.<br><br>The C++ models I write are designed to emulate guidance, navigation, and control (GNC) behaviors that are used for systems testing, CONOPS evaluation, and astronaut training.",modelPath:"models/orion.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(20,35),trailWidth:.5});super(e,r,i)}}let pE=class extends Dt{constructor(e){const i=new Lt({inclination:15*(Math.PI/180),trueAnomaly:20,eccentricity:.1,semimajorAxis:30,raan:0,argPeriapsis:35*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"CLARUS",header:"Clarus Engineering",tools:"Arduino (C++), Basic Electronics",role:"Software Developer",summary:"Software-based internship for the CILA 2 Fiber Optic Polishing System.",body:"At Clarus I contributed to the software development of the CILA 2 Fiber Optic Polishing System. This work included:<br>- Refactoring of the existing codebase,<br>- Usability improvements on the LCD user interface,<br>- Development of smoothing algorithms for raw inertial measurement unit (IMU) data.",modelPath:"models/clarus.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),trailWidth:.5});super(e,r,i)}};class mE extends Dt{constructor(e){const i=new Lt({inclination:230*(Math.PI/180),trueAnomaly:0,eccentricity:.3,semimajorAxis:25,raan:0,argPeriapsis:45*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"ARTS",header:"CREATIVE INTERESTS",summary:"Fun projects I have pursued in my free time that have made for great gifts and pleasant decorations.",body:"Part of my creative nature includes dabbling in more straightforward arts and crafts. Compared to the technical projects I tend to pursue, these provide a nice sense of satisfaction and a medium to exercise my creativity.<br><br>These crafts can range from painting on a canvas, to crochet, to woodworking; some of my favorite projects are:<br>- A custom made dart board cabinet (1),<br>- Crocheted handbag (2),<br>- Handmade bar piece (3)<br>- Embroidered art (4),<br>- Crocheted pokemon (5/6).",modelPath:"models/artsCrafts.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),galleryName:"crafts",trailWidth:.5});super(e,r,i)}}class gE extends Dt{constructor(e){const i=new Lt({inclination:10*(Math.PI/180),trueAnomaly:20,eccentricity:.05,semimajorAxis:15,raan:0,argPeriapsis:35*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"MEMOMART",header:"MEM-O-MART - FREE MEMORIES",tools:"Python, Opencv, Raspberry Pi 4, Thermal printer, Webcam, Basic electronics",role:"Software Engineer",summary:"Turn curiosity into memorable moments with others.<br><br>This is a product I am tackling with some friends where we are providing its users a simple experience that rewards presence, and cooperation.",body:"MEM-O-MART is a freestanding analog photo booth box that is designed to foster collaboration, intrigue, and memorable moments. Myself and a few friends leveraged our technical skills to transform our idea into a tangible service that has had pop-up installations on the Atlanta Beltline and formalized event installations. Our team employs a user-centered design approach where every feature and implementation is informed by active field testing and user research.<br><br>My primary contributions to this project are design and development of the software and electronic architecture. This includes:<br>- The conception of a system daemon that satisfies our functional needs,<br>-The design of a settings framework so team members can easily adjust the service,<br>- Refinement of interfaces so the software can properly communicate with the webcam, printer, and button.",modelPath:"models/memomart.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),galleryName:"memomart",trailWidth:.5});super(e,r,i)}}class _E extends Dt{constructor(e){const i=new Lt({inclination:5*(Math.PI/180),trueAnomaly:0,eccentricity:.1,semimajorAxis:20,raan:0,argPeriapsis:35*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"TECHNICAL",header:"TECHNICAL INTERESTS",summary:"Hobbies and personal projects that leverage my technical development skill set--CAD, programming, electronics, and 3D printing.",body:"Game Development:<br>I am experienced in the Unity game engine and Blender 3D modeling software from years of hobbyist dabbling. I enjoy learning about real-time computing techniques and have personally created versions of procedurally generated terrain, mesh rendering, and building systems.<br><br>3D Printing:<br>I have been 3D printing models for many years now, and I enjoy creating items for both functional and artistic purposes. Inspired by my favorite media, I recreate characters and paint them for gifts or display in my own space.<br><br>Product Development:<br>Creating functional products has become a way for me to productively apply my skills. In addition to MEM-O-MART, I created a functional bedside clock that prints messages to the screen every morning.",modelPath:"models/printer3D.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),galleryName:"technical",trailWidth:.5});super(e,r,i)}}class vE extends Dt{constructor(e){const i=new Lt({inclination:0*(Math.PI/180),trueAnomaly:20,eccentricity:.01,semimajorAxis:25,raan:0,argPeriapsis:35*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"COURIER",header:"COSMIC COURIER",tools:"Unity, C#, Blender, Suno AI",role:"Game Developer (Software, UI/UX, assets, etc.)",summary:"Educational game prototype that targets STEM education in young students through the implementation of STEM concepts as 'serious' game mechanics. Developed in response to game-based learning implementation challenges discovered in the relevant educational technology literature.",body:"Cosmic Courier is an educational game prototype created to support integrated STEM education among younger students. It is the result of an intensive literature review that synthesized 45 peer-reviewed research papers on the topics of game-based learning and STEM education. This game contributes to the field of game-based learning by highlighting practical development strategies which address implementation challenges and uncertainties associated with educational games.<br><br>This was a solo-developed 100-hour project that implements STEM academic topics as serious game mechanics and objectives. Currently demonstrated in the game is Stoichiometry, code execution, and coordinate system navigation.<br><br>This game may be played on itch.io <a href=https://zadega.itch.io/cosmic-courier>here</a>.",modelPath:"models/cosmicCourier.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),galleryName:"cosmicCourier",trailWidth:.5});super(e,r,i)}}class xE extends Dt{constructor(e){const i=new Lt({inclination:77.5*(Math.PI/180),trueAnomaly:20,eccentricity:.01,semimajorAxis:22,raan:0,argPeriapsis:35*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"REHABILITATION",header:"Haptic Rehabilitation App",tools:"Unity, C#, Figma, Android Studio, Java, Google MediaPipe",role:"Game Developer (Software, UI)",summary:"Gesture-based game that is designed to assist in the rehabilitation of stroke survivors. Contributed to an existing Android Studio and Unity development environment that implemented Google MediaPipe's gesture recognition model.",body:"In this project I contributed to the development of a mobile app that was designed to help stroke survivors rehabilitate through a game-based experience.<br><br>It leverages Google MediaPipe's gesture recognition model to detect the user's pose through the front-facing camera, and transfers bone positions into game actions.<br><br>The application was created in Android Studio and contains various Unity-based minigames. My team worked on an elbow flexion and extension game where the player's arm movements were used to drive a farmer picking carrots from a field.<br><br>This development is associated with <a href=https://researchexpo.ipat.gatech.edu/passive-haptic-rehabilitation-improve-sensation-and-dexterity-after-traumatic-injury-using>Georgia Tech's Passive Haptic Rehabilitation research project</a>.",modelPath:"models/strokeRehab.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),galleryName:"strokeRehab",trailWidth:.5});super(e,r,i)}}class yE extends Dt{constructor(e){const i=new Lt({inclination:22.5*(Math.PI/180),trueAnomaly:20,eccentricity:.01,semimajorAxis:31,raan:0,argPeriapsis:35*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"GRAPHICS",header:"Raytracing and Mesh Generation",role:"Software Developer",tools:"Java, Java Processing Library",summary:"This experience presents the results of my guided implementation of advanced computer graphics concepts.<br><br>These include a 3D raytracing rendering engine, implicit surface generation, and advanced mesh manipulation.",body:"The raytracer includes:<br>Axis-Aligned Bounding Boxes, Unlit basic eye/camera rendering, Bounding volume hierarchy (BVH) optimization, Lambertian and Blinn-Phong shading, Anti-aliasing, Surface reflections, Motion blur, Soft/Hard shadows, Depth of field, Transparency.<br><br>For implicit surface generation I wrote various algorithms for generating and deforming primitives based on their scalar fields. In addition I implemented blended vertex colors and normal vector computation.<br><br>I also implemented mesh manipulation algorithms that include: Loop subdivision, Butterfly subdivision, Laplace smoothing, and Taubin smoothing.",modelPath:"models/raytracing.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),galleryName:"raytracer",trailWidth:.5});super(e,r,i)}}class SE extends Dt{constructor(e){const i=new Lt({inclination:90*(Math.PI/180),trueAnomaly:20,eccentricity:.01,semimajorAxis:28,raan:0,argPeriapsis:35*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"POKEMON",header:"Pokemon Battle Simulator Web App",tools:"React, Docker, Java, Spring, Figma, Postgres",role:"Front End Designer & Developer, Software Architect",summary:"A simple web application that abstractly simulated Pokemon battles. Its built with containerized Docker services and is implemented with a React/Java tech stack.",body:"In this project my team developed a Pokemon battle simulator web application as part of a graduate course. This project required formal system architecting and web app development.<br><br>My contributions to this project include:<br>- UML diagram development (class and sequence),<br>- UI design in Figma,<br>- Front end implementation using React.js,<br>- Postgres database schema design,<br>- Assistance with back-end domain logic.",modelPath:"models/pokeball.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),galleryName:"pokemon",trailWidth:.5});super(e,r,i)}}class bE extends Dt{constructor(e){const i=new Lt({inclination:45*(Math.PI/180),trueAnomaly:20,eccentricity:.01,semimajorAxis:35,raan:0,argPeriapsis:35*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"REMINDERS",header:"IOS Reminders Redesign",role:"UI/UX Researcher & Designer",tools:"Figma",summary:"A human-computer interaction design lifecycle learning experience through a redesign of the iOS Reminders application.",body:"In this project I executed two full iterations of the user-experience design lifecycle, where the overarching goal was to improve usability of the iOS Reminders application. <br><br>A single iteration of this design lifecycle includes needfinding, design alternatives, prototyping, and evaluation.<br><br> I began by performing user research on the current state of the Reminders application to identify current shortcomings of the implementation--this yielded ~50 survey responses and 5 interviews. With that data I brainstormed many alternatives to the current interface and developed 3 low-fidelity prototypes. Upon evaluating the prototypes from another pass of user research I created an interactive medium-fidelity prototype of the interface in Figma.",modelPath:"models/reminders.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),galleryName:"reminders",trailWidth:.5});super(e,r,i)}}class ME extends Dt{constructor(e){const i=new Lt({inclination:0*(Math.PI/180),trueAnomaly:10,eccentricity:.2,semimajorAxis:200,raan:0,argPeriapsis:15*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"INFO",header:"GENERAL INFORMATION",summary:"This category contains general and/or miscellaneous information relating to myself and the portfolio.",body:"The subcategories provide more relevant information to the current state of the project, so this screen is used as a working roadmap of cool ideas for the project!.<br><br>Features I would still like to includes are:<br>- Orbit element controls<br>- Orbit trails<br>- Interactive objects (click-and-drag rotation)<br>- A detail page on orbits<br>- Toggle-able text boxes",modelPath:"models/infoIcon.glb",cameraDistance:60,effectiveDelta:.2,frameGap:new xe(20,35),childrenMaxSemimajor:35});super(e,r,i)}}class TE extends Dt{constructor(e){const i=new Lt({inclination:15*(Math.PI/180),trueAnomaly:20,eccentricity:.5,semimajorAxis:35,raan:0,argPeriapsis:35*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"ABOUT",header:"Portfolio",tools:"Javascript, HTML, VITE, NodeJS, three.js, GSAP",role:"Software Engineer",summary:"About this portfolio. It is made in Javascript and utilizes the Node.js, three.js, GSAP, and swiper libraries.",body:"All of the tools used were learned mostly for this project. It has been a great way to familiarize myself with common front-end tooling and has only increased my interest in user experience design and development.<br><br>Working with three.js on this project has also been a great way to apply my game development and computer graphics knowledge in a more practical way.<br><br>The orbits present in the 3D scene are implemented using formulation from spacecraft flight dynamics, as such this website is somewhat of a learning tool for orbital mechanics.",modelPath:"models/aboutIcon.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),trailWidth:.5});super(e,r,i)}}class EE extends Dt{constructor(e){const i=new Lt({inclination:16*(Math.PI/180),trueAnomaly:20,eccentricity:.2,semimajorAxis:26,raan:0,argPeriapsis:35*(Math.PI/180)}),r=new It({simulateOrbit:!0,tabLabel:"ATTRIBUTIONS",header:"Attributions and Credits",summary:"Proper attributions for resources using in this portfolio.",body:"The following links are attributions to 3D models that were adapted for use in this portfolio:<br><br>- Thumbs up (secondblindmouse)<br><a href=https://www.thingiverse.com/thing:4791269> Thingiverse</a><br><br>- 3d printer printing a 3d printer printing a 3d printer ornament (ejxj)<br><a href=https://www.thingiverse.com/thing:6838860>Thingiverse</a><br><br>- Paintbrush (AndyManCan)<br><a href=https://www.thingiverse.com/thing:14590>Thingiverse</a><br><br>- Ball of yarn (caylaelon)<br><a href=https://www.thingiverse.com/thing:3946839>Thingiverse</a><br><br>- Macho Paint Palette (Frankenstein786)<br><a href=https://www.thingiverse.com/thing:4835501>Thingiverse</a>",modelPath:"models/thumbsUp.glb",cameraDistance:5,effectiveDelta:.5,scale:new D(.2,.2,.2),frameGap:new xe(16,30),trailWidth:.5});super(e,r,i)}}class wE{constructor(e){this.scene=new $m,this.camera=new Ry(this.scene),this.lighting=new tb(this.scene),this.renderer=new eb,this.renderer.setAnimationLoop(this.update.bind(this)),this.renderer.setComposerPasses(this.scene,this.camera.getCamera()),this.loader=new cp,this.clock=new ef,this.camControls=new WS(this.camera.camera,this.renderer.getDOM()),this.mouse=new xe,this.txtMgr=new Vc,this.framer=new Fb(this.camControls,this.lighting.getSun()),this.headRotationSpeed=new D(0,8,0),this.objects=[],this.dropdownManager=new $a,this.tabManager=new Bb(this.framer,this.dropdownManager),this.tlm=new iE,this.DEG2RAD=3.1415/180,this.playIntro=e,window.addEventListener("resize",this.updateCameraResize.bind(this)),document.getElementById("toggle-tlm-button").addEventListener("click",t=>{t.target.blur(),this.tlm.tlmContainer.classList.toggle("hidden"),this.tlm.setContent(this.framer.focusedObject.info)})}async initScene(){this.dean=new cE,await this.dean.Initialize(0,this.scene),this.workPlanet=new uE(this.dean.object),await this.workPlanet.Initialize(0,this.scene),this.schoolPlanet=new dE(this.dean.object),await this.schoolPlanet.Initialize(3,this.scene),this.personalPlanet=new hE(this.dean.object),await this.personalPlanet.Initialize(3,this.scene),this.infoPlanet=new ME(this.dean.object),await this.infoPlanet.Initialize(3.2,this.scene);const e=[];this.personalPlanet.object.traverse(t=>{t.isMesh&&t.morphTargetInfluences&&t.morphTargetDictionary&&e.push(t)}),e.forEach(t=>{const n=t.morphTargetDictionary.Smile;n!=null&&(t.morphTargetInfluences[n]=1)}),this.osr=new fE(this.workPlanet.object),await this.osr.Initialize(.2,this.scene),this.clarus=new pE(this.workPlanet.object),await this.clarus.Initialize(3.2,this.scene),this.cosmicCourier=new vE(this.schoolPlanet.object),await this.cosmicCourier.Initialize(.1,this.scene),this.cosmicCourier.object.scale.set(.1,.1,.1),this.stroke=new xE(this.schoolPlanet.object),await this.stroke.Initialize(.3,this.scene),this.stroke.object.scale.set(.1,.1,.1),this.raytracer=new yE(this.schoolPlanet.object),await this.raytracer.Initialize(1.2,this.scene),this.raytracer.object.scale.set(.1,.1,.1),this.pokemon=new SE(this.schoolPlanet.object),await this.pokemon.Initialize(2,this.scene),this.pokemon.object.scale.set(.1,.1,.1),this.reminders=new bE(this.schoolPlanet.object),await this.reminders.Initialize(2.8,this.scene),this.reminders.object.scale.set(.1,.1,.1),this.technical=new _E(this.personalPlanet.object),await this.technical.Initialize(.2,this.scene),this.technical.object.scale.set(.1,.1,.1),this.creative=new mE(this.personalPlanet.object),await this.creative.Initialize(1,this.scene),this.creative.object.scale.set(.1,.1,.1),this.memomart=new gE(this.personalPlanet.object),await this.memomart.Initialize(2.5,this.scene),this.memomart.object.scale.set(.1,.1,.1),this.about=new TE(this.infoPlanet.object),await this.about.Initialize(2,this.scene),this.attributions=new EE(this.infoPlanet.object),await this.attributions.Initialize(1,this.scene),this.dean.info.children=[this.workPlanet,this.schoolPlanet,this.personalPlanet,this.infoPlanet],this.workPlanet.info.children=[this.osr,this.clarus],this.schoolPlanet.info.children=[this.cosmicCourier,this.stroke,this.raytracer,this.pokemon,this.reminders],this.personalPlanet.info.children=[this.technical,this.creative,this.memomart],this.infoPlanet.info.children=[this.about,this.attributions],this.workPlanet.info.children.forEach(t=>{t.TurnOff(),this.objects.push(t)}),this.schoolPlanet.info.children.forEach(t=>{t.TurnOff(),this.objects.push(t)}),this.personalPlanet.info.children.forEach(t=>{t.TurnOff(),this.objects.push(t)}),this.infoPlanet.info.children.forEach(t=>{t.TurnOff(),this.objects.push(t)}),this.objects.push(this.dean),this.objects.push(this.workPlanet),this.objects.push(this.schoolPlanet),this.objects.push(this.personalPlanet),this.objects.push(this.infoPlanet),this.tabManager.SetSystem(this.dean),this.tabManager.SetPlanets(this.dean.info.children),this.dropdownManager.setFocusedObject(this.dean),this.dropdownManager.setAvailableOrbits(this.dean.info.children),this.tlm.buildNavigation(this.dean),this.camControls.setCameraPosition(this.dean.object.position,0,1,this.dean.info.cameraDistance),this.camera.getCamera().lookAt(this.dean.object.position),this.framer.setFocus(this.dean,!1),this.playIntro?new Cy().begin(()=>{document.getElementById("introScreen").style.opacity=0,document.getElementById("introScreen").style.pointerEvents="none",this.framer.updateDetails=!0,this.framer.setFocus(this.dean,!1),this.framer.container.style.setProperty("--contentWidth","30vw")}):(document.getElementById("introScreen").style.opacity=0,document.getElementById("introScreen").style.pointerEvents="none",this.framer.updateDetails=!0,this.framer.setFocus(this.dean,!1),this.framer.container.style.setProperty("--contentWidth","30vw")),window.addEventListener("resize",()=>{this.framer.updateFrameSize()}),this.scene.background=new Le(2368548),this.lighting.setSunPosition(-25,5,20),this.lighting.setSunTarget(3,0,-5),this.lighting.setSun(16777215,2),this.lighting.setAmbient(16777215,.5)}update(){var e=this.clock.getDelta();this.objects.forEach(t=>{t.Update(e)}),this.framer.update(),this.renderer.render()}updateCameraResize(){const e=window.innerWidth,t=window.innerHeight,n=this.camera.getCamera();n.aspect=e/t,n.updateProjectionMatrix(),this.renderer.setSize(e,t)}}window.addEventListener("DOMContentLoaded",()=>{new wE(!1).initScene()});
