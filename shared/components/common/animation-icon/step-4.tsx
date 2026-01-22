"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Smartphone } from "lucide-react";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="2"
        width="14"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="9"
        y1="18"
        x2="15"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Screen content - data visualization */}
      <rect
        x="7"
        y="5"
        width="4"
        height="3"
        fill="currentColor"
        opacity="0.5"
        rx="0.5"
      />
      <rect
        x="7"
        y="9"
        width="6"
        height="2"
        fill="currentColor"
        opacity="0.3"
        rx="0.5"
      />
      <rect
        x="7"
        y="12"
        width="5"
        height="2"
        fill="currentColor"
        opacity="0.3"
        rx="0.5"
      />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 24h16c3.314 0 6-2.686 6-6 0-2.903-2.063-5.326-4.801-5.884C24.668 8.258 21.14 5 17 5c-4.418 0-8 3.582-8 8 0 .337.021.669.062.995C5.847 14.548 3 17.681 3 21.5 3 23.985 5.015 24 8 24z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Server symbol inside cloud */}
      <rect
        x="12"
        y="14"
        width="8"
        height="2"
        rx="0.5"
        fill="currentColor"
        opacity="0.6"
      />
      <rect
        x="12"
        y="17"
        width="8"
        height="2"
        rx="0.5"
        fill="currentColor"
        opacity="0.6"
      />
      <circle cx="18" cy="15" r="0.5" fill="currentColor" />
      <circle cx="18" cy="18" r="0.5" fill="currentColor" />
    </svg>
  );
}

function ComputerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Monitor */}
      <rect
        x="3"
        y="4"
        width="26"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Stand */}
      <path
        d="M12 22v4h8v-4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="10"
        y1="26"
        x2="22"
        y2="26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Screen content - dashboard */}
      <rect
        x="6"
        y="7"
        width="8"
        height="5"
        fill="currentColor"
        opacity="0.3"
        rx="0.5"
      />
      <rect
        x="6"
        y="13"
        width="5"
        height="6"
        fill="currentColor"
        opacity="0.2"
        rx="0.5"
      />
      <rect
        x="12"
        y="13"
        width="5"
        height="6"
        fill="currentColor"
        opacity="0.2"
        rx="0.5"
      />
      <rect
        x="18"
        y="7"
        width="8"
        height="12"
        fill="currentColor"
        opacity="0.15"
        rx="0.5"
      />
      {/* Chart bars */}
      <rect
        x="19"
        y="15"
        width="2"
        height="3"
        fill="currentColor"
        opacity="0.5"
      />
      <rect
        x="22"
        y="13"
        width="2"
        height="5"
        fill="currentColor"
        opacity="0.5"
      />
      <rect
        x="19"
        y="10"
        width="5"
        height="1"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 2h8l4 4v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M12 2v4h4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Lines */}
      <line
        x1="5"
        y1="9"
        x2="11"
        y2="9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="12"
        x2="13"
        y2="12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="15"
        x2="10"
        y2="15"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DataPacket({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="10" height="10" rx="2" fill="currentColor" />
      <rect x="3" y="3" width="2" height="2" fill="white" opacity="0.8" />
      <rect x="6" y="3" width="3" height="2" fill="white" opacity="0.5" />
      <rect x="3" y="6" width="6" height="1" fill="white" opacity="0.4" />
      <rect x="3" y="8" width="4" height="1" fill="white" opacity="0.4" />
    </svg>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2 L13 9 L20 8 L14 12 L18 19 L12 14 L6 19 L10 12 L4 8 L11 9 Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function NfcExportAnimationStep4({ isVisible }: { isVisible: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const computerRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<HTMLDivElement>(null);
  const packetsRef = useRef<(HTMLDivElement | null)[]>([]);
  const packets2Ref = useRef<(HTMLDivElement | null)[]>([]);
  const waveRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const sparksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isVisible) {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      return;
    }

    // Reset positions
    gsap.set(phoneRef.current, { opacity: 1, scale: 1 });
    gsap.set(cloudRef.current, { opacity: 1, scale: 1 });
    gsap.set(computerRef.current, { opacity: 1, scale: 1 });
    gsap.set(documentRef.current, { opacity: 0, scale: 0, y: 0 });

    packetsRef.current.forEach((packet) => {
      gsap.set(packet, { opacity: 0, x: 0, y: 0 });
    });
    packets2Ref.current.forEach((packet) => {
      gsap.set(packet, { opacity: 0, x: 0, y: 0 });
    });
    waveRefs.current.forEach((wave) => {
      gsap.set(wave, { opacity: 0, scale: 0.5 });
    });
    sparksRef.current.forEach((spark) => {
      gsap.set(spark, { opacity: 0, scale: 0 });
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    timelineRef.current = tl;

    // Phone pulses when sending
    tl.to(phoneRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
    }).to(phoneRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.in",
    });

    // Data packets fly from phone to cloud
    packetsRef.current.forEach((packet, i) => {
      tl.to(
        packet,
        {
          opacity: 1,
          x: 45,
          y: -30,
          duration: 0.6,
          ease: "power2.inOut",
        },
        `-=${i === 0 ? 0.2 : 0.5}`,
      ).to(packet, {
        opacity: 0,
        duration: 0.1,
      });
    });

    // Cloud receives - pulse effect
    tl.add(() => {
      waveRefs.current.forEach((wave, i) => {
        gsap.to(wave, {
          opacity: 0.6,
          scale: 1 + i * 0.3,
          duration: 0.3,
          delay: i * 0.1,
          ease: "power1.out",
        });
        gsap.to(wave, {
          opacity: 0,
          scale: 1.5 + i * 0.3,
          duration: 0.4,
          delay: 0.3 + i * 0.1,
          ease: "power1.out",
        });
      });
    }, "-=0.3")

      // Cloud processes
      .to(cloudRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(cloudRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });

    // Data packets fly from cloud to computer
    packets2Ref.current.forEach((packet, i) => {
      tl.to(
        packet,
        {
          opacity: 1,
          x: 45,
          y: 30,
          duration: 0.6,
          ease: "power2.inOut",
        },
        `-=${i === 0 ? 0 : 0.5}`,
      ).to(packet, {
        opacity: 0,
        duration: 0.1,
      });
    });

    // Computer receives - pulse
    tl.to(computerRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
    }).to(computerRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.in",
    });

    // Document appears (exported report)
    tl.to(documentRef.current, {
      opacity: 1,
      scale: 1,
      y: -10,
      duration: 0.4,
      ease: "back.out(2)",
    })
      // Document stays visible
      .to(documentRef.current, {
        y: -15,
        duration: 0.5,
        ease: "sine.inOut",
      })
      // Sparks appear
      .add(() => {
        sparksRef.current.forEach((spark, i) => {
          const angle = i * 72 * (Math.PI / 180);
          const distance = 25 + Math.random() * 15;
          gsap.to(spark, {
            opacity: 1,
            scale: 0.8 + Math.random() * 0.4,
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            rotation: Math.random() * 180,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(spark, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            delay: 0.4,
            ease: "power2.in",
          });
        });
      }, "-=0.2")
      // Document fades
      .to(documentRef.current, {
        opacity: 0,
        scale: 0.8,
        y: -5,
        duration: 0.3,
        ease: "power2.in",
      });

    return () => {
      tl.kill();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-72 h-56 flex items-center justify-center"
    >
      {/* Phone - bottom left */}
      <div ref={phoneRef} className="absolute left-4 bottom-8">
        <Smartphone className="w-10 h-14 text-emerald-600" />

        {/* Data packets from phone */}
        {[0, 1, 2].map((i) => (
          <div
            key={`packet1-${i}`}
            ref={(el) => {
              packetsRef.current[i] = el;
            }}
            className="absolute top-1/2 left-full -translate-y-1/2"
            style={{ opacity: 0 }}
          >
            <DataPacket className="w-4 h-4 text-[#d2c4c4]" />
          </div>
        ))}
      </div>

      {/* Cloud - top center */}
      <div ref={cloudRef} className="absolute top-2 left-1/2 -translate-x-1/2">
        <CloudIcon className="w-14 h-14 text-[#d2c4c4]" />

        {/* Waves around cloud */}
        {[0, 1].map((i) => (
          <div
            key={`wave-${i}`}
            ref={(el) => {
              waveRefs.current[i] = el;
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: 0 }}
          >
            <div className="w-16 h-16 rounded-full border-2 text-[#d2c4c4]" />
          </div>
        ))}

        {/* Data packets from cloud */}
        {[0, 1, 2].map((i) => (
          <div
            key={`packet2-${i}`}
            ref={(el) => {
              packets2Ref.current[i] = el;
            }}
            className="absolute top-full left-1/2 -translate-x-1/2"
            style={{ opacity: 0 }}
          >
            <DataPacket className="w-4 h-4 text-[#d2c4c4]" />
          </div>
        ))}
      </div>

      {/* Computer - bottom right */}
      <div ref={computerRef} className="absolute right-2 bottom-6">
        <ComputerIcon className="w-16 h-16 text-emerald-600" />

        {/* Document coming out */}
        <div
          ref={documentRef}
          className="absolute -top-2 -right-1"
          style={{ opacity: 0 }}
        >
          <DocumentIcon className="w-8 h-8 text-[#d2c4c4]" />
        </div>

        {/* Sparks */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            ref={(el) => {
              sparksRef.current[i] = el;
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ opacity: 0 }}
          >
            <SparkIcon className="w-3 h-3 text-emerald-400" />
          </div>
        ))}
      </div>

      {/* Connection lines (decorative) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 288 224"
      >
        {/* Phone to Cloud */}
        <path
          d="M 50 140 Q 100 80 144 50"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          className="text-muted-foreground/30"
        />
        {/* Cloud to Computer */}
        <path
          d="M 160 55 Q 200 100 240 130"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          className="text-muted-foreground/30"
        />
      </svg>
    </div>
  );
}
