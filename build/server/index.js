import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LuHandHeart } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import { MdOutlineMoreTime } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Navbar() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full pt-8", children: [
    /* @__PURE__ */ jsxs("section", { className: "flex flex-row justify-between items-start mb-16 px-36", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "font-bold text-2xl", children: [
          "DERMA",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-serif relative group after:content-[''] after:absolute after:left-1 after:-bottom-1 after:h-[3px] after:w-full after:bg-sky-200", children: "World" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs", children: [
          "by ",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: "LEO Pharma" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-[30%]", children: /* @__PURE__ */ jsxs("label", { className: "flex flex-row justify-between items-center border-[1px] border-[#e6e7e8] rounded-full  py-4 px-6 w-full", children: [
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "SEARCH", className: "text-[12px]" }),
        /* @__PURE__ */ jsx(IoSearchOutline, { size: 20 })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "flex justify-self-start px-36 pb-6", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-row gap-8 font-normal", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Bedingungen" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", className: "italic relative inline-block", children: [
        "Behandlungen",
        /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 -translate-x-1/2 top-9 mt-1 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-100" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Veranstaltungen" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Werkzeuge" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Forschung und Erkenntnisse" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-self-start bg-[#e6e7e8] w-full px-36 py-6", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-row gap-8 font-light text-[#01619d]", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#",
          className: "relative group after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-300 italic",
          children: [
            "Adtralza",
            /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 -translate-x-1/2 top-9 mt-1 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#01619d]" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Diavonex" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Diavobet" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Enstilar" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Fucidin" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Kyntheum" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Protopic" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Skinoren" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Tralokinumab" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Xamiol" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-self-start bg-[#01619d] w-full px-36 py-6", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-row gap-8 font-light text-[#e6e7e8]", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: "relative group after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-300 italic",
          children: "Overview"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Mode of action" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Efficacy" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Quality of Life" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Safety" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Dosing" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "News" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Technical Information" }) })
    ] }) })
  ] });
}
const Female = "/assets/female-ByEz005Q.png";
function LandingPage() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            entry2.target.classList.add("opacity-100", "translate-y-0");
            entry2.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry2.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeInSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "w-full animated-ombre-bg py-16 fade-in-section opacity-0 translate-y-8 transition-all duration-700", children: /* @__PURE__ */ jsxs("section", { className: "text-white px-36 flex justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "pb-6 w-[50%]", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-light", children: [
        "Adtralza",
        /* @__PURE__ */ jsx("span", { className: "font-extralight", children: "®" })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "(tralokinumab)" }),
      /* @__PURE__ */ jsx("p", { className: "italic font-extralight text-3xl mt-6", children: "Adtralza® is a new treatment for adult patients with moderate-to-serve atopic dermatitis(eczema) who are candidates for systemic therapy" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-[45%] flex justify-end mb-[-64px]", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: Female
      }
    ) })
  ] }) });
}
const Product = "/assets/adtralza-C-8GfGrC.png";
function ProductSection() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            entry2.target.classList.add("opacity-100", "translate-y-0");
            entry2.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry2.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeInSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "w-full py-16 px-36 bg-[#e6e7e8] fade-in-section opacity-0 translate-y-8 transition-all duration-700", children: /* @__PURE__ */ jsxs("section", { className: "flex items-center gap-12", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[30%] mr-36", children: /* @__PURE__ */ jsx("img", { src: Product }) }),
    /* @__PURE__ */ jsxs("section", { className: "w-[50%]", children: [
      /* @__PURE__ */ jsx("p", { className: "italic font-extralight text-3xl text-[#01619d] pb-6", children: "It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoma(1,2)" }),
      /* @__PURE__ */ jsx("p", { className: "italic font-extralight text-xl", children: "Learn more about how Adtralza® works and how to use it in treatment." })
    ] })
  ] }) });
}
function FactCard({
  Icon,
  title,
  description,
  linkText
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between items-center text-center px-10 w-[30%]", children: [
    /* @__PURE__ */ jsx("section", { className: "pb-6", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-45 h-45 flex flex-col items-center justify-center rounded-full bg-white shadow-lg shadow-[#01619d]",
        style: { boxShadow: "0 6px 8px rgba(1, 97, 157, 0.3)" },
        children: Icon && /* @__PURE__ */ jsx(Icon, { size: 80, color: "#01619d" })
      }
    ) }),
    /* @__PURE__ */ jsxs("section", { className: "font-light italic py-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-[#01619d] text-xl", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-normal", children: description })
    ] }),
    /* @__PURE__ */ jsx("a", { href: "#", className: "text-normal text-[#c123a5] font-light italic", children: linkText })
  ] });
}
function Facts() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            entry2.target.classList.add("opacity-100", "translate-y-0");
            entry2.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry2.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeInSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between items-start px-36 py-16 fade-in-section opacity-0 translate-y-8 transition-all duration-700", children: [
    /* @__PURE__ */ jsx(
      FactCard,
      {
        Icon: MdOutlineMoreTime,
        title: "Long term sustained improvement",
        description: "9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*).",
        linkText: "See efficacy and trial data"
      }
    ),
    /* @__PURE__ */ jsx(
      FactCard,
      {
        Icon: LuHandHeart,
        title: "Improvements in the burden of disease",
        description: "Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements from week 16 to 32 (12,13).",
        linkText: "Learn more about quality of life improvements"
      }
    ),
    /* @__PURE__ */ jsx(
      FactCard,
      {
        Icon: GoShieldCheck,
        title: "Good safety profile",
        description: "Adtralza® demonstrated a favorable safety profile in clinical trials, with most adverse events being mild or moderate and consistent with those observed in other biologics for atopic dermatitis (5,6).",
        linkText: "See safety profile"
      }
    )
  ] });
}
const Dermititis = "/assets/dermititis-Bgz24dF3.jpg";
function Info() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            entry2.target.classList.add("opacity-100", "translate-y-0");
            entry2.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry2.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeInSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "w-full pl-36 bg-[#e6e7e8] flex fade-in-section opacity-0 translate-y-8 transition-all duration-700", children: [
    /* @__PURE__ */ jsxs("section", { className: "w-[50%] flex flex-col gap-8 items-start  py-16", children: [
      /* @__PURE__ */ jsx("p", { className: "italic font-extralight text-3xl text-[#01619d] pb-6", children: "Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms." }),
      /* @__PURE__ */ jsx("p", { className: "italic font-extralight", children: "By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2)." }),
      /* @__PURE__ */ jsx("p", { className: "italic font-extralight", children: "Adtralza® selectively modulates the dysregulated immune system by(1):" }),
      /* @__PURE__ */ jsxs("ul", { className: "italic font-extralight space-y-1", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-6 h-px bg-[#01619d]" }),
          /* @__PURE__ */ jsx("span", { children: "Reducing markers of skin inflammation" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-6 h-px bg-[#01619d]" }),
          /* @__PURE__ */ jsx("span", { children: "Improving markers of skin barrier integrity" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-6 h-px bg-[#01619d]" }),
          /* @__PURE__ */ jsx("span", { children: "Reducing epidermal thickness" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: "bg-[#c123a5] rounded-full px-8 py-4 font-light text-xl text-white italic",
          children: "Watch the video"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "italic font-extralight text-sm", children: "Duration: 2:43" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "w-[40%] relative", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: Dermititis,
        alt: "Dermatitis",
        className: "absolute top-0 right-[-130px] h-full w-full object-cover"
      }
    ) })
  ] });
}
function ArticleCard({
  image,
  title,
  description,
  linkText
}) {
  return /* @__PURE__ */ jsxs("section", { className: "bg-[#e6e7e8] w-[50%]", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full h-[300px] overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: title,
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "px-8 py-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "italic font-extralight text-2xl text-[#01619d]", children: title }),
      /* @__PURE__ */ jsx("p", { className: "italic font-extralight", children: description }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: "text-normal text-[#c123a5] font-light italic",
          children: linkText
        }
      )
    ] })
  ] });
}
const Expert = "/assets/expert-Bv9vRM0P.jpeg";
const Injection = "/assets/injections-Cv62YpjI.jpeg";
function Articles() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            entry2.target.classList.add("opacity-100", "translate-y-0");
            entry2.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry2.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeInSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 py-24 px-36 fade-in-section opacity-0 translate-y-8 transition-all duration-700", children: [
    /* @__PURE__ */ jsx("h1", { className: "italic font-extralight text-3xl text-[#01619d]", children: "Clinical tools - at a glance" }),
    /* @__PURE__ */ jsxs("section", { className: "flex flex-row items-center justify-start gap-6", children: [
      /* @__PURE__ */ jsx(
        ArticleCard,
        {
          image: Expert,
          title: "Dosing Guide",
          description: "Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1).",
          linkText: "Learn more about application and dosing"
        }
      ),
      /* @__PURE__ */ jsx(
        ArticleCard,
        {
          image: Injection,
          title: "Patient injection made simple",
          description: "This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton",
          linkText: "Watch the video"
        }
      )
    ] })
  ] });
}
function VideoCard({ title, description }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[50%] h-38 bg-white flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-[#c123a5] rounded-full flex items-center justify-center pl-1", children: /* @__PURE__ */ jsx(FaPlay, { color: "white", size: 24 }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "w-[40%]", children: [
      /* @__PURE__ */ jsx("h2", { className: "italic font-extralight text-[#01619d]", children: title }),
      /* @__PURE__ */ jsx("p", { className: "italic font-extralight", children: description })
    ] })
  ] });
}
function Videos() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            entry2.target.classList.add("opacity-100", "translate-y-0");
            entry2.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry2.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeInSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#e6e7e8] py-24 px-36 w-full fade-in-section opacity-0 translate-y-8 transition-all duration-700", children: [
    /* @__PURE__ */ jsx("h1", { className: "italic font-extralight text-3xl text-[#01619d]", children: "KOL videos - get expert insight here" }),
    /* @__PURE__ */ jsx("p", { className: "italic font-extralight pb-18", children: "See what key opinion leaders have to say about their experiences with Adtralza®" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsx(
        VideoCard,
        {
          title: "Understanding Atopic Dermatitis: Expert Overview",
          description: "Key opinion leaders discuss the underlying causes of Atopic Dermatitis."
        }
      ),
      /* @__PURE__ */ jsx(
        VideoCard,
        {
          title: "Adtralza® in Clinical Practice: Real-World Experiences",
          description: "Leading dermatologists share their firsthand experiences prescribing Adtralza® and the impact it has made on their patients’ quality of life."
        }
      ),
      /* @__PURE__ */ jsx(
        VideoCard,
        {
          title: "Future Directions: The Role of IL-13 Inhibition in Dermatology",
          description: "Thought leaders explore ongoing research and the potential future applications of IL-13 inhibitors like Adtralza® in skin disease management."
        }
      ),
      /* @__PURE__ */ jsx(
        VideoCard,
        {
          title: "Managing Side Effects and Patient Care with Adtralza®",
          description: "Specialists provide insights into safety profiles, common side effects."
        }
      )
    ] })
  ] });
}
const LeoLogo = "/assets/leo-logo-DsbHVz2x.svg";
function Footer() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            entry2.target.classList.add("opacity-100", "translate-y-0");
            entry2.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry2.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeInSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "w-full fade-in-section opacity-0 translate-y-8 transition-all duration-700", children: [
    /* @__PURE__ */ jsxs("section", { className: "flex items-start gap-3  px-36 py-4 bg-gray-300", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-[#01619d] flex items-center justify-center pt-1", children: /* @__PURE__ */ jsx(FiChevronDown, { color: "white", size: 30 }) }),
      /* @__PURE__ */ jsx("p", { className: "italic font-extralight text-2xl text-[#01619d] pl-4", children: "References" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#01619d] px-36 py-16 flex flex-row justify-between items-end text-gray-300 font-extralight text-sm", children: [
      /* @__PURE__ */ jsx("section", { className: "self-start", children: /* @__PURE__ */ jsx("img", { src: LeoLogo, alt: "Leo", className: "w-25 h-25" }) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-row justify-center items-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsx("li", { children: "Contact" }),
        /* @__PURE__ */ jsx("li", { className: "border-l border-gray-400 pl-4", children: "Imprint" }),
        /* @__PURE__ */ jsx("li", { className: "border-l border-gray-400 pl-4", children: "Conditions" }),
        /* @__PURE__ */ jsx("li", { className: "border-l border-gray-400 pl-4", children: "Term of Use" }),
        /* @__PURE__ */ jsx("li", { className: "border-l border-gray-400 pl-4", children: "Privacy" }),
        /* @__PURE__ */ jsx("li", { className: "border-l border-gray-400 pl-4", children: "Cookie Content" })
      ] }) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("ul", { className: "text-right italic flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("li", { children: "© Copyright LEO Pharma 2020" }),
        /* @__PURE__ */ jsx("li", { children: "LEO and the LEO Lion Design" }),
        /* @__PURE__ */ jsx("li", { children: "are registered trademarks" }),
        /* @__PURE__ */ jsx("li", { children: "of LEO Pharma" }),
        /* @__PURE__ */ jsx("li", { className: "pb-8", children: "All rights reserved" }),
        /* @__PURE__ */ jsx("li", { className: "underline", children: "LEO Pharma corporate website" })
      ] }) })
    ] })
  ] });
}
function meta({}) {
  return [{
    title: "Derma World"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col items-center justify-start",
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx(LandingPage, {}), /* @__PURE__ */ jsx(ProductSection, {}), /* @__PURE__ */ jsx(Facts, {}), /* @__PURE__ */ jsx(Info, {}), /* @__PURE__ */ jsx(Articles, {}), /* @__PURE__ */ jsx(Videos, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DQCfh2wv.js", "imports": ["/assets/chunk-D4RADZKF-NJFaw1dw.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-Ds5kB1V6.js", "imports": ["/assets/chunk-D4RADZKF-NJFaw1dw.js", "/assets/app-Dc_MmDE1.js"], "css": ["/assets/app-MRoTRNi7.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-Db0EtAGI.js", "imports": ["/assets/app-Dc_MmDE1.js", "/assets/chunk-D4RADZKF-NJFaw1dw.js"], "css": ["/assets/app-MRoTRNi7.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-6a5f1a7e.js", "version": "6a5f1a7e", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
