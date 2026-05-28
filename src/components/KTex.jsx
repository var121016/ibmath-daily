import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
// KTex — renders a LaTeX string using KaTeX
//
// Usage:
//   <KTex tex="x^2 + y^2 = r^2" />           inline
//   <KTex tex="\frac{a}{b}" display={true} /> centred block
//
// Why a separate component?
//   KaTeX loads from a CDN once and is then available globally.
//   Wrapping it here means every other component just writes
//   <KTex tex="..." /> and never thinks about loading scripts.
// ─────────────────────────────────────────────────────────────

export default function KTex({ tex, display = false }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!tex || !ref.current) return;

    const render = () => {
      try {
        ref.current.innerHTML = window.katex.renderToString(tex, {
          throwOnError: false,
          displayMode: display,
        });
      } catch (e) {
        if (ref.current) ref.current.textContent = tex;
      }
    };

    // If KaTeX is already loaded, render immediately
    if (window.katex) {
      render();
      return;
    }

    // If the script tag is already in the page, wait for it
    if (document.querySelector("script[data-katex]")) {
      const wait = setInterval(() => {
        if (window.katex) {
          clearInterval(wait);
          render();
        }
      }, 50);
      return () => clearInterval(wait);
    }

    // Otherwise load KaTeX from CDN for the first time
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
    script.dataset.katex = "1";
    script.onload = render;
    document.head.appendChild(script);
  }, [tex, display]);

  return (
    <span
      ref={ref}
      style={{ lineHeight: display ? 1.8 : 1.4 }}
    />
  );
}
