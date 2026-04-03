import { useEffect, useRef } from "react";

export default function LightCodingBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const fontSize = 18;
    const lineSpacing = fontSize * 2; // enough gap between lines
    const maxLines = Math.floor(canvas.height / lineSpacing);

    const lines = Array.from({ length: maxLines }, (_, i) => ({
      text: "",
      y: i * lineSpacing,
      nextCharTime: 0,
    }));

    const characters = "01";

    let lastTime = 0;
    let cursorBlink = true;
    let cursorTimer = 0;

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      // Light gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height,
      );
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(1, "#f0f5ff");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "rgba(30, 93, 252, 0.15)"; // subtle blue
      ctx.textBaseline = "top";
      ctx.shadowColor = "rgba(30, 93, 252, 0.2)";
      ctx.shadowBlur = 2;

      lines.forEach((line, i) => {
        // Slowly generate text
        if (time > line.nextCharTime) {
          const lineLength = Math.floor(Math.random() * 40) + 10; // random length
          line.text = Array.from(
            { length: lineLength },
            () => characters[Math.floor(Math.random() * characters.length)],
          ).join("");
          line.nextCharTime = time + Math.random() * 1000 + 500; // update every 0.5–1.5s
        }

        // Draw text stretched across the width
        const gap = canvas.width / (line.text.length + 1);
        for (let j = 0; j < line.text.length; j++) {
          ctx.fillText(line.text[j], j * gap, line.y);
        }
      });

      // Blinking cursor at last line
      cursorTimer += delta;
      if (cursorTimer > 500) {
        cursorTimer = 0;
        cursorBlink = !cursorBlink;
      }

      if (cursorBlink) {
        const lastLine = lines[lines.length - 1];
        const cursorX = canvas.width - 20; // near right
        const cursorY = lastLine.y;
        ctx.fillStyle = "rgba(30, 93, 252, 0.3)";
        ctx.fillRect(cursorX, cursorY, 10, fontSize);
      }

      requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return <canvas className="fixed inset-0 -z-10" ref={canvasRef} />;
}
