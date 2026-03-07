import { e as createComponent, m as maybeRenderHead, g as addAttribute, l as renderScript, r as renderTemplate, h as createAstro, o as renderHead, k as renderComponent, n as renderSlot } from './astro/server_BUJDb0Gp.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const normalize = (path) => path.replace(/\/$/, "") || "/";
  const isActive = (path) => normalize(pathname) === normalize(path);
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-md bg-brand-black/80"> <nav class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"> <!-- Logo --> <div class="flex items-center group cursor-pointer"> <a href="/" class="flex items-center"> <div class="relative"> <img src="/assets/deexon.png" alt="Deexon Logo" class="h-9 w-auto brightness-110"> <div class="absolute -inset-1 bg-brand-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div> </div> <span class="ml-3 text-sm font-bold tracking-widest uppercase text-white/90">
Deexon Solutions
</span> </a> </div> <!-- Desktop Nav --> <ul class="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white"> <li> <a href="/"${addAttribute(`hover:text-brand-gold transition-colors duration-300 ${isActive("/") ? "text-brand-gold font-bold" : ""}`, "class")}>
Home
</a> </li> <li> <a href="/services"${addAttribute(`hover:text-brand-gold transition-colors duration-300 ${isActive("/services") ? "text-brand-gold font-bold" : ""}`, "class")}>
Services
</a> </li> <li> <a href="/about"${addAttribute(`hover:text-brand-gold transition-colors duration-300 ${isActive("/about") ? "text-brand-gold font-bold" : ""}`, "class")}>
About
</a> </li> </ul> <!-- Right Side --> <div class="flex items-center space-x-6"> <a href="/consultation" class="hidden sm:block text-[11px] font-bold uppercase tracking-widest text-white border-b border-brand-gold pb-1 hover:text-brand-gold transition-all">
Request Consultation
</a> <!-- Hamburger --> <button id="menuBtn" class="md:hidden text-white relative z-50"> <span class="block w-6 h-[1.5px] bg-white mb-1 transition-all duration-300"></span> <span class="block w-6 h-[1.5px] bg-white mb-1 transition-all duration-300"></span> <span class="block w-6 h-[1.5px] bg-white transition-all duration-300"></span> </button> </div> </nav> <!-- Mobile Menu --> <div id="mobileMenu" class="fixed inset-0 bg-black/70 backdrop-blur-lg opacity-0 invisible transition-all duration-300 md:hidden"> <div class="absolute top-0 left-0 w-full bg-brand-black border-t border-white/10 mt-20 py-10 px-6 transform -translate-y-10 transition-all duration-300" id="menuPanel"> <ul class="space-y-8 text-sm font-bold uppercase tracking-widest text-white/70 text-center"> <li> <a href="/"${addAttribute(`block hover:text-brand-gold ${isActive("/") ? "text-brand-gold" : ""}`, "class")}>
Home
</a> </li> <li> <a href="/services"${addAttribute(`block hover:text-brand-gold ${isActive("/services") ? "text-brand-gold" : ""}`, "class")}>
Services
</a> </li> <li> <a href="/about"${addAttribute(`block hover:text-brand-gold ${isActive("/about") ? "text-brand-gold" : ""}`, "class")}>
About
</a> </li> <li> <a href="/consultation" class="block text-brand-gold">
Request Consultation
</a> </li> </ul> </div> </div> </header> ${renderScript($$result, "/home/emman/deexon-solution-website/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/emman/deexon-solution-website/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-brand-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden"> <!-- Decorative Background Text --> <div class="absolute -bottom-24 -right-24 opacity-[0.02] pointer-events-none select-none"> <h2 class="text-[20rem] font-bold leading-none">DXS</h2> </div> <div class="container mx-auto px-6 relative z-10"> <!-- Top Grid --> <div class="grid grid-cols-2 md:grid-cols-12 gap-12 mb-20"> <!-- Brand Info --> <div class="col-span-2 md:col-span-4 space-y-8"> <div class="flex items-center gap-3"> <img src="/assets/deexon.png" alt="Deexon Logo" class="h-10 w-auto"> <span class="text-xs font-bold tracking-[0.4em] uppercase text-white">Deexon Solutions<span class="text-brand-gold"></span></span> </div> <p class="text-white text-sm leading-relaxed max-w-xs">
Engineering high-performance technology ecosystems and elite engineering talent for the global frontier.
</p> <!-- Social Media --> <div class="flex gap-4"> <!-- Whatsapp --> <a href="https://whatsapp.com/channel/0029VbBGY3z89inh2GZ2KN19" target="_blank" rel="noopener noreferrer" class="group relative flex items-center justify-center w-10 h-10"> <img src="/icon/whatsapp.svg" alt="WhatsApp" class="w-5 h-5"> </a> <!-- Telegram --> <a href="https://t.me/deexonsolutions" target="_blank" rel="noopener noreferrer" class="group relative flex items-center justify-center w-10 h-10"> <img src="/icon/telegram.svg" alt="Telegram" class="w-5 h-5"> </a> <!-- Instagram --> <a href="https://www.instagram.com/deexonsolutions?igsh=c2wycndvY2Zkbzdw&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" class="group relative flex items-center justify-center w-10 h-10"> <img src="/icon/instagram.svg" alt="Instagram" class="w-5 h-5"> </a> <!-- Facebook --> <a href="https://www.facebook.com/profile.php?id=61581882894227" target="_blank" rel="noopener noreferrer" class="group relative flex items-center justify-center w-10 h-10 "> <img src="/icon/facebook.svg" alt="Facebook" class="w-5 h-5"> </a> <a href="https://x.com/deexonsolutions" target="_blank" rel="noopener noreferrer" class="group relative flex items-center justify-center w-10 h-10"> <img src="/icon/twitter-original.svg" alt="Twitter" class="w-5 h-5"> </a> </div> </div> <!-- Navigation Links --> <div class="col-span-1 md:col-span-2 space-y-6"> <h4 class="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Navigation</h4> <ul class="space-y-4"> ${["Home", "Services", "About"].map((link) => renderTemplate`<li> <a${addAttribute(`/${link.toLowerCase()}`, "href")} class="text-sm text-white hover:text-brand-gold transition-colors">${link}</a> </li>`)} </ul> </div> <!-- Solutions Links --> <div class="col-span-1 md:col-span-3 space-y-6"> <h4 class="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Solutions</h4> <ul class="space-y-4"> ${["Web Development", "ICT Hubs"].map((service) => renderTemplate`<li> <a href="#" class="text-sm text-white hover:text-brand-gold transition-colors">${service}</a> </li>`)} </ul> </div> <!-- Quick Links / Inventory --> <div class="col-span-2 md:col-span-3 space-y-6"> <h4 class="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Quick Links</h4> <ul class="space-y-4"> ${["Support", "Contact"].map((link) => renderTemplate`<li> <a href="/consultation" class="text-sm text-white hover:text-brand-gold transition-colors">${link}</a> </li>`)} </ul> </div> </div> <!-- Bottom Bar --> <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"> <!-- Copyright --> <p class="text-[10px] font-mono text-white/20 uppercase tracking-widest">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Deexon Solutions. All rights reserved.
</p> <!-- Policies --> <div class="flex gap-8"> ${["Privacy Policy", "Terms of Service", "SLA Status"].map((link) => renderTemplate`<a href="#" class="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">${link}</a>`)} </div> <!-- Live Status --> <div class="flex items-center gap-2"> <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> <span class="text-[9px] font-mono text-white/30 uppercase tracking-widest">Systems Operational</span> </div> </div> </div> </footer>`;
}, "/home/emman/deexon-solution-website/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Deexon Solutions" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderHead()}</head> <body class="bg-white text-black"> ${renderComponent($$result, "Header", $$Header, {})} <main class="min-h-screen"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/emman/deexon-solution-website/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
