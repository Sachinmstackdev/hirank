"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotationX = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const rotationY = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const options: COBEOptions = {
      devicePixelRatio: 1,
      width: 400,
      height: 400,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1, 1, 1],
      markers: [],
      onRender: (state) => {
        // This prevents rotation when the component is offscreen
        if (!canvasRef.current) {
          return;
        }

        state.phi = rotationY.get();
        state.theta = rotationX.get();

        if (pointerInteracting.current !== null) {
          const { width, height } = state.width > state.height
            ? { width: state.width / state.height, height: 1 }
            : { width: 1, height: state.height / state.width };

          rotationY.set(
            pointerInteractionMovement.current / 200 * width
          );
          rotationX.set(
            y.get() / 200 * height
          );
        }
      },
    };

    let phi = 0;
    let globe = createGlobe(canvasRef.current, options);

    // Rotate the globe on a timer
    const rotate = () => {
      phi += 0.005;
      rotationY.set(phi);
      requestAnimationFrame(rotate);
    };

    const timer = setTimeout(rotate, 1000);

    const onMouseDown = (e: MouseEvent) => {
      pointerInteracting.current =
        e.clientX - pointerInteractionMovement.current;
      canvasRef.current?.style.setProperty("cursor", "grabbing");
    };

    const onMouseUp = () => {
      pointerInteracting.current = null;
      canvasRef.current?.style.setProperty("cursor", "grab");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (pointerInteracting.current !== null) {
        pointerInteractionMovement.current =
          e.clientX - pointerInteracting.current;
        x.set(pointerInteractionMovement.current);
      }
    };

    canvasRef.current.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      globe.destroy();
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timer);
    };
  }, [rotationX, rotationY, x, y]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 h-full w-full cursor-grab",
        className
      )}
      onMouseDown={() => {
        canvasRef.current?.style.setProperty("cursor", "grabbing");
      }}
    />
  );
} 