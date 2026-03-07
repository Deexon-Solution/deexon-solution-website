import { e as createComponent, m as maybeRenderHead, s as spreadAttributes, g as addAttribute, n as renderSlot, r as renderTemplate, h as createAstro, k as renderComponent } from '../chunks/astro/server_BUJDb0Gp.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CN2jx5sn.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/home/emman/deexon-solution-website/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Headphones = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Headphones;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "headphones", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path> ` })}`;
}, "/home/emman/deexon-solution-website/node_modules/lucide-astro/dist/Headphones.astro", void 0);

const $$Astro$2 = createAstro();
const $$ShieldCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ShieldCheck;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "shield-check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path> <path d="m9 12 2 2 4-4"></path> ` })}`;
}, "/home/emman/deexon-solution-website/node_modules/lucide-astro/dist/ShieldCheck.astro", void 0);

const $$Astro$1 = createAstro();
const $$Target = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Target;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "target", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <circle cx="12" cy="12" r="6"></circle> <circle cx="12" cy="12" r="2"></circle> ` })}`;
}, "/home/emman/deexon-solution-website/node_modules/lucide-astro/dist/Target.astro", void 0);

const $$Astro = createAstro();
const $$TrendingUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrendingUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "trending-up", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 7h6v6"></path> <path d="m22 7-8.5 8.5-5-5L2 17"></path> ` })}`;
}, "/home/emman/deexon-solution-website/node_modules/lucide-astro/dist/TrendingUp.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Services | Deexon Solutions" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-[#08080A] text-white"> <section class="relative pt-40 pb-32 overflow-hidden border-b border-white/5"> <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full"></div> <div class="container mx-auto px-6 relative z-10"> <div class="flex items-center gap-3 mb-8"> <div class="h-1 w-1 rounded-full bg-brand-gold animate-ping"></div> <span class="text-[15px] font-bold uppercase tracking-[0.5em] text-brand-gold">Solutions for Your Success</span> </div> <h1 class="text-4xl md:text-6xl uppercase font-bold leading-[0.9] tracking-tighter mb-10 max-w-4xl">
Digital Tools to <br> <span class="text-brand-gold italic">Grow Your Brand.</span> </h1> <p class="text-white max-w-xl text-xl font leading-relaxed mb-12">
From professional websites to hands-on training, we provide everything you 
          need to succeed in today’s digital world.
</p> <div class="flex flex-col sm:flex-row gap-6"> <a href="/consultation" class="px-10 py-5 bg-brand-gold text-black text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 text-center">
Get Your Free Consultation
</a> <a href="#services" class="px-10 py-5 border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 text-center">
Explore What We Do
</a> </div> </div> </section> <section id="services" class="py-32 border-b border-white/5 bg-[#0A0A0F]"> <div class="container mx-auto px-6"> <div class="grid lg:grid-cols-2 gap-20 items-center"> <div class="group relative overflow-hidden rounded-3xl border border-white/10 p-1 bg-white/5"> <img src="assets/services/web-dev.jpg" alt="Professional Website Design" class="rounded-[calc(1.5rem-4px)] w-full aspect-video object-cover"> </div> <div class="space-y-8"> <span class="text-brand-gold font-mono text-[10px] tracking-widest uppercase italic">01 // Websites</span> <h2 class="text-5xl font-bold tracking-tight text-white leading-tight">Professional <br> Web Design.</h2> <p class="text-white text-lg leading-relaxed font">
Your website is your 24/7 salesperson. We create beautiful, fast, and 
              easy-to-use sites that turn visitors into loyal customers.
</p> <ul class="grid gap-4 pt-4"> ${["Custom Business Websites", "Online Stores (E-commerce)", "Mobile-Friendly Layouts", "Search Engine Ready (SEO)"].map((item) => renderTemplate`<div class="flex items-center gap-4 text-sm font text-white"> <div class="h-1 w-1 rounded-full bg-brand-gold"></div> ${item} </div>`)} </ul> </div> </div> </div> </section> <section class="py-32 border-b border-white/5"> <div class="container mx-auto px-6"> <div class="grid lg:grid-cols-2 gap-20 items-center"> <div class="space-y-8 order-2 lg:order-1"> <span class="text-brand-gold font-mono text-[10px] tracking-widest uppercase italic">02 // Workspace</span> <h2 class="text-5xl font-bold tracking-tight text-white leading-tight">Reliable <br> Tech Hubs.</h2> <p class="text-white text-lg leading-relaxed font">
Need a place to work or better tools for your office? We set up the 
              perfect environment for businesses and professionals to thrive.
</p> <ul class="grid gap-4 pt-4"> ${["Office Network Setup", "Fast & Secure Connections", "Business Tech Consulting", "Ongoing Tech Support"].map((item) => renderTemplate`<div class="flex items-center gap-4 text-sm font text-white"> <div class="h-1 w-1 rounded-full bg-brand-gold"></div> ${item} </div>`)} </ul> </div> <div class="order-1 lg:order-2 group relative overflow-hidden rounded-3xl border border-white/10 p-1 bg-white/5"> <img src="assets/services/ict-hub.jpg" alt="Modern Tech Workspace" class="rounded-[calc(1.5rem-4px)] w-full aspect-video object-cover"> </div> </div> </div> </section> <section class="py-32 border-b border-white/5 bg-[#0A0A0F]"> <div class="container mx-auto px-6"> <div class="grid lg:grid-cols-2 gap-20 items-center"> <div class="group relative overflow-hidden rounded-3xl border border-white/10 p-1 bg-white/5"> <img src="assets/services/academy.jpg" alt="Tech Skills Training" class="rounded-[calc(1.5rem-4px)] w-full aspect-video object-cover"> </div> <div class="space-y-8 bg-brand-gold p-12 rounded-3xl text-black shadow-[0_0_50px_-12px_rgba(212,175,55,0.2)]"> <span class="text-black/50 font-mono text-[10px] tracking-widest uppercase italic font-bold">03 // Learning</span> <h2 class="text-5xl font-bold tracking-tight leading-none">The Tech <br> Academy.</h2> <p class="text-black text-lg leading-relaxed font-medium">
Start your career in tech with confidence. Our training is practical, 
              easy to follow, and focused on helping you find real jobs.
</p> </div> </div></div></section> <section class="py-40 bg-brand-black"> <div class="container mx-auto px-6"> <div class="mb-24"> <h2 class="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">Why Deexon Solutions?</h2> <div class="h-px w-24 bg-brand-gold"></div> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10"> ${[
    { icon: $$ShieldCheck, t: "Safe & Secure", d: "We keep your data and your business protected from the start." },
    { icon: $$TrendingUp, t: "Built for Growth", d: "Our solutions are designed to work perfectly as you get bigger." },
    { icon: $$Target, t: "Clear Results", d: "We focus on what helps you grow, not just fancy tech talk." },
    { icon: $$Headphones, t: "Always Here", d: "We stand by our work with friendly, 24/7 support whenever you need us." }
  ].map((item, i) => renderTemplate`<div class="bg-brand-black p-10 group hover:bg-white/[0.02] transition-colors"> <span class="text-brand-gold font-mono text-[10px] mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">0${i + 1}</span> ${renderComponent($$result2, "item.icon", item.icon, { "class": "text-brand-gold -mt-2 mb-6 mx-auto block" })} <h3 class="font-bold text-xl mb-4 text-white">${item.t}</h3> <p class="text-white text-sm leading-relaxed">${item.d}</p> </div>`)} </div> </div> </section> <section class="py-48 text-center bg-brand-black relative border-t border-white/5"> <div class="max-w-4xl mx-auto px-6"> <h2 class="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-white mb-16">
READY TO <br> <span class="text-brand-gold italic">START?</span> </h2> <p class="text-white text-xl font-semi mb-16 max-w-lg mx-auto leading-relaxed">
Let’s talk about how we can help you reach your goals with the right technology.
</p> <a href="/consultation" class="inline-block px-12 py-6 bg-brand-gold text-black text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-all duration-500">
Get Your Free Consultation
</a> </div> </section> </main> ` })}`;
}, "/home/emman/deexon-solution-website/src/pages/services.astro", void 0);

const $$file = "/home/emman/deexon-solution-website/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
