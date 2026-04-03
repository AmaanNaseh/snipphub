import { useState, useEffect } from "react";
import { motion } from "motion/react";

// Icons
import {
  VscFiles,
  VscSourceControl,
  VscDebugAltSmall,
  VscExtensionsLarge,
} from "react-icons/vsc";
import { IoMdSearch } from "react-icons/io";

export default function CodeLaptop() {
  const [typedCode, setTypedCode] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const code = `while(true) {
  echo Snipline
  printf("Snipline");
  cout << "Snipline";
  console.log("Snipline");
  print("Snipline");
  git commit -m "Snipline";
  SELECT * FROM Snipline;
}`;

  // typing animation
  useEffect(() => {
    let i = 0;

    const type = () => {
      if (i < code.length) {
        setTypedCode(code.slice(0, i + 1));
        i++;
        setTimeout(type, 20);
      } else {
        setTimeout(() => {
          setTypedCode("");
          i = 0;
          type();
        }, 1200);
      }
    };

    type();
  }, []);

  // cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // mouse tilt
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    const x = (clientY - rect.top - rect.height / 2) / 20;
    const y = (clientX - rect.left - rect.width / 2) / 20;

    setRotate({ x: -x, y });
  };

  const handleLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full flex justify-center items-center perspective-[2000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: 80, rotateX: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 12 + rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 80 }}
        className="relative"
      >
        {/* SCREEN */}
        <div className="w-[300px] lg:w-[450px] h-[250px] lg:h-[300px] bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl overflow-hidden relative">
          {/* VS CODE TOP BAR */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#2d2d2d] border-b border-slate-700">
            {/* tabs */}
            <div className="text-xs text-gray-300 bg-[#1e1e1e] px-3 py-1 rounded">
              File
            </div>

            <div className="text-xs text-gray-300 bg-[#1e1e1e] px-3 py-1 rounded">
              Terminal
            </div>
          </div>

          {/* BODY */}
          <div className="flex h-full">
            {/* LEFT ICON SIDEBAR */}
            <div className="w-10 bg-[#333333] flex flex-col items-center py-3 gap-4 text-gray-400 text-xs">
              <div>
                <VscFiles />
              </div>
              <div>
                <IoMdSearch />
              </div>
              <div>
                <VscSourceControl />
              </div>
              <div>
                <VscDebugAltSmall />
              </div>
              <div>
                <VscExtensionsLarge />
              </div>
            </div>

            {/* EXPLORER PANEL */}
            <div className="w-24 bg-[#252526] text-gray-400 text-[10px] p-2 space-y-1 hidden lg:block">
              <div className="text-gray-300 mb-1">EXPLORER</div>
              <div>📄 index.js</div>
              <div>📄 app.js</div>
              <div>📄 main.js</div>
            </div>

            {/* CODE AREA */}
            <div className="flex-1 p-4 text-white text-[11px] lg:text-sm font-mono overflow-hidden">
              <pre className="whitespace-pre-wrap">
                {typedCode.split("\n").map((line, i) => (
                  <div key={i}>
                    {line.trim() === "}" ? (
                      <span className="text-purple-400">{"}"}</span>
                    ) : line.includes("while") ? (
                      <>
                        <span className="text-purple-400">while</span>
                        <span className="text-blue-400"> (true) </span>
                        <span className="text-purple-400">{" {"}</span>
                      </>
                    ) : (
                      line
                    )}
                  </div>
                ))}
                {cursorVisible && "|"}
              </pre>
            </div>
          </div>

          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
        </div>

        {/* KEYBOARD BASE */}
        <div className="w-full h-[22px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-b-2xl mx-auto shadow-inner relative scale-x-110 origin-top">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10" />
          <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-24 h-2.5 bg-slate-600 rounded-md opacity-70" />
        </div>

        {/* SHADOW */}
        <div className="w-[80%] h-16 bg-black/40 blur-2xl mx-auto mt-3 rounded-full" />
      </motion.div>
    </div>
  );
}
