import { useEffect, useRef } from "react";

export default function DarkBg() {
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

    const stars = [];
    const shootingStars = [];
    const cursorParticles = [];

    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 3 + 2,
        opacity: 1,
        angle: Math.PI / 4,
      });
    };

    // ✨ Cursor glow effect
    const handleMouseMove = (e) => {
      for (let i = 0; i < 3; i++) {
        cursorParticles.push({
          x: e.clientX,
          y: e.clientY,
          radius: Math.random() * 2 + 1,
          opacity: 1,
          dx: (Math.random() - 0.5) * 1.5,
          dy: (Math.random() - 0.5) * 1.5,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    createStars();

    let animationFrameId;
    let lastShootingStarTime = 0;

    const animate = (timestamp) => {
      ctx.fillStyle = "#0d1117";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ⭐ Stars
      stars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity * twinkle})`;
        ctx.fill();
      });

      // 🌠 Shooting stars
      if (timestamp - lastShootingStarTime > 3000 && Math.random() < 0.02) {
        createShootingStar();
        lastShootingStarTime = timestamp;
      }

      shootingStars.forEach((star, index) => {
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length,
        );

        gradient.addColorStop(0, `rgba(255,255,255,${star.opacity})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length,
        );
        ctx.stroke();

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.01;

        if (
          star.opacity <= 0 ||
          star.x > canvas.width ||
          star.y > canvas.height
        ) {
          shootingStars.splice(index, 1);
        }
      });

      // ✨ Cursor particles (glow trail)
      cursorParticles.forEach((p, index) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        p.opacity -= 0.02;

        if (p.opacity <= 0) {
          cursorParticles.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas className="fixed inset-0 -z-10" ref={canvasRef} />;
}
