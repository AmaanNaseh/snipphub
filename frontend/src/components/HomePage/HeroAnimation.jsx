import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Check, Copy } from "lucide-react";

export default function HeroAnimation({ theme }) {
  const [typedTitle, setTypedTitle] = useState("");
  const [typedDescription, setTypedDescription] = useState("");
  const [typedCode, setTypedCode] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMouse, setShowMouse] = useState(false);
  const [showCopyAnimation, setShowCopyAnimation] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  const buttonRef = useRef(null);

  const titleText = "<SnipHub />";
  const descriptionText = "// Your ultimate code snippet library";
  const fullCode = `const snippets = {\n  name: "SnipHub",\n  description: "Copy. Paste. Use.",\n  features: [\n  "CLI",\n  "Snippets"\n  "Templates\n  "],\n  copy: () =>\n  navigator.clipboard.writeText(code)\n};`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullCode);
      setShowCopyAnimation(true);

      setTimeout(() => {
        setShowCopyAnimation(false);
      }, 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    let index = 0;

    const typeTitle = () => {
      if (index < titleText.length) {
        setTypedTitle(titleText.slice(0, index + 1));
        index++;
        setTimeout(typeTitle, 150);
      } else {
        index = 0;
        setAnimationPhase(1);
        setTimeout(typeDescription, 300);
      }
    };

    const typeDescription = () => {
      if (index < descriptionText.length) {
        setTypedDescription(descriptionText.slice(0, index + 1));
        index++;
        setTimeout(typeDescription, 50);
      } else {
        index = 0;
        setAnimationPhase(2);
        setTimeout(typeCode, 500);
      }
    };

    const typeCode = () => {
      if (index < fullCode.length) {
        setTypedCode(fullCode.slice(0, index + 1));
        index++;
        setTimeout(typeCode, 20);
      } else {
        setAnimationPhase(3);
        setTimeout(() => {
          setShowMouse(true);
          animateMouse();
        }, 500);
      }
    };

    const animateMouse = () => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const parentRect = buttonRef.current.offsetParent.getBoundingClientRect();

      const startX = 100;
      const startY = 50;

      const endX = rect.left - parentRect.left + rect.width / 2 - 16; // center align cursor
      const endY = rect.top - parentRect.top + rect.height / 2 - 16;

      let step = 0;
      const steps = 90;

      const moveToCopy = setInterval(() => {
        if (step < steps) {
          const progress = step / steps;
          const ease = 1 - Math.pow(1 - progress, 3);

          setMousePosition({
            x: startX + (endX - startX) * ease,
            y: startY + (endY - startY) * ease,
          });

          step++;
        } else {
          clearInterval(moveToCopy);

          setTimeout(() => {
            setShowCopyAnimation(true);

            setTimeout(() => {
              let moveStep = 0;

              const moveAway = setInterval(() => {
                if (moveStep < 40) {
                  setMousePosition({
                    x: endX + moveStep * 3,
                    y: endY - moveStep * 2,
                  });
                  moveStep++;
                } else {
                  clearInterval(moveAway);

                  // 🔁 LOOP RESET
                  setTimeout(() => {
                    setShowMouse(false);
                    setShowCopyAnimation(false);
                    setTypedTitle("");
                    setTypedDescription("");
                    setTypedCode("");
                    setAnimationPhase(0);

                    setTimeout(() => {
                      startAnimation();
                    }, 400);
                  }, 400);
                }
              }, 16);
            }, 800);
          }, 300);
        }
      }, 16);
    };

    typeTitle();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full mb-12 relative"
    >
      <div className="relative overflow-hidden w-full h-full min-h-[500px] bg-[#0d1117] border border-slate-700 rounded-2xl">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-slate-800 border-b border-slate-700">
          <span className="text-sm text-slate-400">SnipHub.js</span>

          <motion.button
            ref={buttonRef}
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm text-blue-300 relative"
          >
            {showCopyAnimation ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Code
              </>
            )}

            {showCopyAnimation && (
              <motion.div
                className="absolute inset-0 bg-green-400/30 rounded-lg"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[300px]">
          <h1
            className={`text-3xl font-bold ${theme === "dark" ? "text-[#58a6ff]" : "text-[#165dfc]"}`}
          >
            {typedTitle}
            {animationPhase === 0 && cursorVisible && "|"}
          </h1>

          {animationPhase >= 1 && (
            <p className="text-green-400 mt-4">
              {typedDescription}
              {animationPhase === 1 && cursorVisible && "|"}
            </p>
          )}

          {animationPhase >= 2 && (
            <pre className="text-sm mt-4 text-white">
              {typedCode}
              {animationPhase === 2 && cursorVisible && "|"}
            </pre>
          )}
        </div>

        {/* Mouse */}
        {showMouse && (
          <motion.div
            className={`absolute w-8 h-8 rounded-full border-2 pointer-events-none ${theme === "dark" ? "bg-[#58a6ff]/40 border-[#58a6ff]" : "bg-[#165dfc]/40 border-[#165dfc]"}`}
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
