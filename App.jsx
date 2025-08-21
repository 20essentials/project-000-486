import React from "react";
import { createRoot } from "react-dom/client";
import { setup } from "twind";
import { tw } from "twind";

setup({});

const items = Array.from({ length: 7 }, (_, i) => i);

const Sphere = () => (
  <article className={tw`absolute w-full h-full top-0 left-0 transform-style[preserve-3d]`}>
    {items.map((i) => (
      <div
        key={i}
        className={tw`rounded-full bg-gradient-radial[from-gray-300,to-white]`}
        style={{ "--rot-y": i }}
      ></div>
    ))}
  </article>
);

const App = () => (
  <main className={tw`fixed inset-0 overflow-hidden bg-gradient-radial[from-gray-300,to-white] h-screen w-full`}>
    <section
      className={tw`
        relative w-[400px] h-[400px] top-1/2 left-1/2 transform-style[preserve-3d]
        animate-spin-slow
        [zoom:4.5]
        [@media(max-width:1111px)]:[zoom:3]
      `}
      style={{
        animation: "girar 10s linear alternate infinite"
      }}
    >
      <Sphere />
      <Sphere />
      <Sphere />
      <Sphere />
    </section>
    <style>{`
      @keyframes girar {
        0% { transform: rotateX(0deg) rotateY(0deg); }
        100% { transform: rotateX(360deg) rotateY(360deg); }
      }
    `}</style>
  </main>
);

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
