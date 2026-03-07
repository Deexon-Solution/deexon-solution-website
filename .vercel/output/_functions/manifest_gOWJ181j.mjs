import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BUJDb0Gp.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_R4fIyYKe.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/emman/deexon-solution-website/","cacheDir":"file:///home/emman/deexon-solution-website/node_modules/.astro/","outDir":"file:///home/emman/deexon-solution-website/dist/","srcDir":"file:///home/emman/deexon-solution-website/src/","publicDir":"file:///home/emman/deexon-solution-website/public/","buildClientDir":"file:///home/emman/deexon-solution-website/dist/client/","buildServerDir":"file:///home/emman/deexon-solution-website/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C9jeCFRm.css"},{"type":"inline","content":".reveal[data-astro-cid-kh7btl4r]{opacity:0;transform:translateY(30px);transition:all 1.2s cubic-bezier(.22,1,.36,1)}.reveal[data-astro-cid-kh7btl4r].active{opacity:1;transform:translateY(0)}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/consultation","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/consultation\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"consultation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/consultation.ts","pathname":"/api/consultation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C9jeCFRm.css"},{"type":"inline","content":".tracking-tightest[data-astro-cid-2p5p74pw]{letter-spacing:-.06em}\n"}],"routeData":{"route":"/consultation","isIndex":false,"type":"page","pattern":"^\\/consultation\\/?$","segments":[[{"content":"consultation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/consultation.astro","pathname":"/consultation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C9jeCFRm.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C9jeCFRm.css"},{"type":"inline","content":"@keyframes revealUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes marquee{0%{transform:translate(0)}to{transform:translate(-50%)}}.animate-reveal[data-astro-cid-j7pv25f6]{animation:revealUp 1.2s cubic-bezier(.22,1,.36,1) forwards}.delay-1[data-astro-cid-j7pv25f6]{animation-delay:.1s}.delay-2[data-astro-cid-j7pv25f6]{animation-delay:.2s}.delay-3[data-astro-cid-j7pv25f6]{animation-delay:.3s}.tracking-tightest[data-astro-cid-j7pv25f6]{letter-spacing:-.06em}.animate-marquee-slow[data-astro-cid-j7pv25f6]{display:flex;width:max-content;animation:marquee 60s linear infinite}.animate-marquee-slow[data-astro-cid-j7pv25f6]:hover{animation-play-state:paused}@media(max-width:768px){.animate-marquee-slow[data-astro-cid-j7pv25f6]{animation:none;width:auto;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 10%}.animate-marquee-slow[data-astro-cid-j7pv25f6]::-webkit-scrollbar{display:none}.testimonial-card[data-astro-cid-j7pv25f6]{scroll-snap-align:center;min-width:80vw}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/emman/deexon-solution-website/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/emman/deexon-solution-website/src/pages/consultation.astro",{"propagation":"none","containsHead":true}],["/home/emman/deexon-solution-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/emman/deexon-solution-website/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/consultation@_@ts":"pages/api/consultation.astro.mjs","\u0000@astro-page:src/pages/consultation@_@astro":"pages/consultation.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_gOWJ181j.mjs","/home/emman/deexon-solution-website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DDSqvHMw.mjs","/home/emman/deexon-solution-website/src/pages/about.astro?astro&type=script&index=0&lang.ts":"_astro/about.astro_astro_type_script_index_0_lang.DJCSCGhJ.js","/home/emman/deexon-solution-website/src/pages/consultation.astro?astro&type=script&index=0&lang.ts":"_astro/consultation.astro_astro_type_script_index_0_lang.DIjC1Kyf.js","/home/emman/deexon-solution-website/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.ei7XyNPK.js","/home/emman/deexon-solution-website/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DGn1ZNQF.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/emman/deexon-solution-website/src/pages/about.astro?astro&type=script&index=0&lang.ts","const s=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&r.target.classList.add(\"active\")})},{threshold:.1});document.querySelectorAll(\".reveal\").forEach(e=>s.observe(e));"],["/home/emman/deexon-solution-website/src/pages/consultation.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const t=document.getElementById(\"consultationForm\"),n=document.getElementById(\"form-wrapper\"),s=document.getElementById(\"success-message\");if(console.log(\"Form element found:\",t),console.log(\"Form wrapper found:\",n),console.log(\"Success message found:\",s),!t){console.error(\"Consultation form not found!\");return}t.addEventListener(\"submit\",async function(a){a.preventDefault(),console.log(\"Form submitted, preventing default\");const o=t.querySelector('button[type=\"submit\"]');o&&(o.disabled=!0,o.textContent=\"Sending...\");const i=new FormData(t),r=Object.fromEntries(i.entries());console.log(\"Form data:\",r);try{console.log(\"Sending request to /api/consultation\");const e=await fetch(\"/api/consultation\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(r)});console.log(\"Response status:\",e.status);const c=await e.json();if(console.log(\"Response data:\",c),!e.ok)throw new Error(`Submission failed: ${e.status}`);n.classList.add(\"hidden\"),s.classList.remove(\"hidden\"),window.scrollTo({top:0,behavior:\"smooth\"})}catch(e){console.error(\"Submission error:\",e),alert(\"Something went wrong. Please try again. Error: \"+e.message),o&&(o.disabled=!1,o.textContent=\"Submit Request\")}})});"],["/home/emman/deexon-solution-website/src/pages/index.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"sliderTrack\"),n=document.getElementById(\"prevBtn\"),o=document.getElementById(\"nextBtn\");if(t&&n&&o){const e=()=>window.innerWidth*.82;o.addEventListener(\"click\",()=>{t.scrollBy({left:e(),behavior:\"smooth\"})}),n.addEventListener(\"click\",()=>{t.scrollBy({left:-e(),behavior:\"smooth\"})})}"],["/home/emman/deexon-solution-website/src/components/Header.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"menuBtn\"),e=document.getElementById(\"mobileMenu\"),i=document.getElementById(\"menuPanel\"),t=s.querySelectorAll(\"span\");s.addEventListener(\"click\",()=>{e.classList.contains(\"opacity-100\")?(e.classList.remove(\"opacity-100\",\"visible\"),e.classList.add(\"opacity-0\",\"invisible\"),i.classList.add(\"-translate-y-10\"),document.body.classList.remove(\"overflow-hidden\"),t.forEach(n=>n.classList.remove(\"rotate-45\",\"-rotate-45\",\"translate-y-[7px]\",\"-translate-y-[7px]\",\"opacity-0\"))):(e.classList.remove(\"opacity-0\",\"invisible\"),e.classList.add(\"opacity-100\",\"visible\"),i.classList.remove(\"-translate-y-10\"),document.body.classList.add(\"overflow-hidden\"),t[0].classList.add(\"rotate-45\",\"translate-y-[7px]\"),t[1].classList.add(\"opacity-0\"),t[2].classList.add(\"-rotate-45\",\"-translate-y-[7px]\"))});e.addEventListener(\"click\",a=>{a.target===e&&s.click()});"]],"assets":["/_astro/about.C9jeCFRm.css","/assets/Deexon-logo.jpeg","/assets/deexon-ambassador.png","/assets/deexon-ceo.png","/assets/deexon.png","/assets/programmer.jpg","/icon/facebook.svg","/icon/icons8-x-50.png","/icon/instagram.svg","/icon/telegram.svg","/icon/twitter-original.svg","/icon/twitter.png","/icon/whatsapp.svg","/icon/x.png","/assets/services/academy.jpg","/assets/services/ict-hub.jpg","/assets/services/web-dev.jpg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"2bCAE15j+Q02QgF17g4idUMFoEYTMUwcHpA8sQV3kLs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
