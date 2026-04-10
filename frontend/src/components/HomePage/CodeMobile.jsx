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

export default function CodeMobile() {
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

  // cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // typing loop
  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < code.length) {
        setTypedCode(code.slice(0, index + 1));
        index++;
        setTimeout(type, 30);
      } else {
        setTimeout(() => {
          setTypedCode("");
          index = 0;
          type();
        }, 1000);
      }
    };

    type();
  }, []);

  // tilt
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    const x = (clientY - rect.top - rect.height / 2) / 25;
    const y = (clientX - rect.left - rect.width / 2) / 25;

    setRotate({ x: -x, y });
  };

  const handleLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="flex justify-center perspective-[2000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 10 + rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        {/* PHONE */}
        <div className="w-[260px] h-[520px] bg-black rounded-[30px] border-[6px] border-slate-800 shadow-xl overflow-hidden relative">
          {/* NOTCH */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-10" />

          {/* SCREEN */}
          <div className="h-full bg-[#1e1e1e] pt-6 flex flex-col">
            {/* TOP BAR */}
            <div className="flex items-center gap-2 px-2 py-1 bg-[#2d2d2d] border-b border-slate-700 text-[10px]">
              <div className="text-gray-300 bg-[#1e1e1e] px-2 py-0.5 rounded">
                main.js
              </div>
            </div>

            {/* BODY */}
            <div className="flex flex-1">
              {/* LEFT ICON BAR */}
              <div className="w-8 bg-[#333333] flex flex-col items-center py-2 gap-3 text-gray-400 text-[10px]">
                <VscFiles />
                <IoMdSearch />
                <VscSourceControl />
                <VscDebugAltSmall />
                <VscExtensionsLarge />
              </div>

              {/* CODE AREA */}
              <div className="flex-1 p-3 text-[10px] font-mono text-white overflow-hidden">
                <pre className="whitespace-pre-wrap leading-relaxed">
                  {typedCode.split("\n").map((line, i) => (
                    <div key={i}>
                      {line.trim() === "}" ? (
                        <span className="text-purple-400">{"}"}</span>
                      ) : line.includes("while") ? (
                        <>
                          <span className="text-purple-400">while</span>
                          <span className="text-blue-400"> (</span>
                          <span className="text-orange-400">true</span>
                          <span className="text-blue-400">) </span>
                          <span className="text-purple-400">{"{"}</span>
                        </>
                      ) : line.includes("console.log") ? (
                        <>
                          <span className="text-blue-400">console</span>
                          <span className="text-white">.</span>
                          <span className="text-yellow-400">log</span>
                          <span className="text-white">("</span>
                          <span className="text-green-400">Snipline</span>
                          <span className="text-white">");</span>
                        </>
                      ) : (
                        <span className="text-green-400">{line}</span>
                      )}
                    </div>
                  ))}
                  {cursorVisible && <span className="text-white">|</span>}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* SHADOW */}
        <div className="w-[70%] h-14 bg-black/40 blur-2xl mx-auto mt-3 rounded-full" />
      </motion.div>
    </div>
  );
}
