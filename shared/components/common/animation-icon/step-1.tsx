"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 90"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#00BC7C">
        <path d="M 85.687 66.088 h -2.755 v -4 h 2.755 c 0.173 0 0.313 -0.141 0.313 -0.313 V 47.326 c 0 -0.076 -0.028 -0.149 -0.079 -0.207 L 71.512 30.911 c -0.059 -0.066 -0.145 -0.105 -0.234 -0.105 H 58.633 v 31.282 h 11.295 v 4 H 54.633 V 26.806 h 16.645 c 1.23 0 2.406 0.527 3.224 1.447 L 88.91 44.461 C 89.612 45.25 90 46.268 90 47.326 v 14.448 C 90 64.153 88.065 66.088 85.687 66.088 z" />
        <path d="M 58.633 66.088 H 29.019 v -4 h 25.614 V 22.155 c 0 -2.394 -1.468 -4.417 -3.205 -4.417 H 7.206 C 5.468 17.739 4 19.761 4 22.155 v 38.84 c 0 0.705 0.383 1.093 0.51 1.093 h 11.515 v 4 H 4.51 c -2.487 0 -4.51 -2.284 -4.51 -5.093 v -38.84 c 0 -4.641 3.232 -8.417 7.206 -8.417 h 44.222 c 3.973 0 7.205 3.775 7.205 8.417 V 66.088 z" />
        <path d="M 76.43 72.262 c -4.688 0 -8.502 -3.814 -8.502 -8.503 s 3.813 -8.502 8.502 -8.502 s 8.502 3.813 8.502 8.502 S 81.118 72.262 76.43 72.262 z M 76.43 59.257 c -2.482 0 -4.502 2.02 -4.502 4.502 c 0 2.483 2.02 4.503 4.502 4.503 s 4.502 -2.02 4.502 -4.503 C 80.932 61.276 78.912 59.257 76.43 59.257 z" />
        <path d="M 22.517 72.262 c -4.688 0 -8.502 -3.814 -8.502 -8.503 s 3.814 -8.502 8.502 -8.502 c 4.688 0 8.502 3.813 8.502 8.502 S 27.205 72.262 22.517 72.262 z M 22.517 59.257 c -2.482 0 -4.502 2.02 -4.502 4.502 c 0 2.483 2.02 4.503 4.502 4.503 s 4.502 -2.02 4.502 -4.503 C 27.019 61.276 24.999 59.257 22.517 59.257 z" />
        <path d="M 88 48.447 H 67.664 c -2.244 0 -4.069 -1.825 -4.069 -4.069 V 28.806 h 4 v 15.573 L 88 44.447 V 48.447 z" />
      </g>
    </svg>
  );
}

function NfcTagIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 76 76"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#7A7A7A"
        strokeLinejoin="round"
        d="M 35.0177,28.8417C 35.0177,28.8417 36.2762,28.2696 37.0771,29.1849C 37.878,30.1002 39.9374,33.647 39.9374,37.1937C 39.9374,40.7405 39.0221,44.5161 38.1068,45.7746C 37.1915,47.0332 36.2762,47.0332 35.5897,46.5755C 34.9032,46.1179 24.2629,37.9946 23.6909,37.7658C 23.1188,37.537 22.89,38.109 23.462,41.1982C 24.0341,44.2873 23.1188,45.2026 22.3179,45.317C 21.517,45.4314 19.1144,44.7449 19,38.3379C 18.8856,31.9308 20.6017,30.9011 21.4026,30.9011C 22.9075,30.9011 34.3341,41.2168 35.1321,41.0838C 35.8185,40.9693 36.1618,36.6217 34.7888,33.1893C 33.3022,29.4728 35.0177,28.8417 35.0177,28.8417 Z M 53.4093,22.4346C 57.2525,30.0664 57.0179,37.2826 56.9873,38.0442C 57.0179,38.7077 57.2525,45.9336 53.4093,53.5653C 53.4093,53.5654 52.4083,54.7095 50.9209,54.023C 49.4336,53.3366 49.9484,51.506 49.9484,51.506C 49.9484,51.506 53.0626,45.4936 52.9803,38.109L 52.9818,37.9946C 53.0626,30.609 49.9484,24.494 49.9484,24.494C 49.9484,24.494 49.4336,22.6634 50.9209,21.9769C 52.4083,21.2905 53.4093,22.4346 53.4093,22.4346 Z M 45.9557,25.867C 49.0903,31.5875 48.8778,37.2826 48.8472,38.0442C 48.8778,38.7077 49.0903,44.1729 45.9599,50.3564C 45.9599,50.3564 44.9589,51.5006 43.4715,50.8141C 41.9841,50.1277 42.499,48.2971 42.499,48.2971C 42.499,48.2971 44.5139,45.4314 44.8402,38.109L 44.8417,37.9946C 44.6283,30.6722 42.4948,27.9264 42.4948,27.9264C 42.4948,27.9264 41.9799,26.0958 43.4673,25.4093C 44.9547,24.7228 45.9557,25.867 45.9557,25.867 Z"
      />
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

export function NfcCarAnimation({ isVisible }: { isVisible: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nfcRef = useRef<HTMLDivElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<(HTMLDivElement | null)[]>([]);
  const waveRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isVisible) return;

    const tl = gsap.timeline();

    // Reset positions - Truck starts from left, NFC hidden
    gsap.set(truckRef.current, { x: -150, opacity: 1 });
    gsap.set(nfcRef.current, {
      x: -60,
      y: -50,
      opacity: 0,
      scale: 0.6,
      rotation: -20,
    });
    sparksRef.current.forEach((spark) => {
      gsap.set(spark, { opacity: 0, scale: 0 });
    });
    waveRefs.current.forEach((wave) => {
      gsap.set(wave, { opacity: 0, scale: 0.8 });
    });

    // Animation sequence
    tl
      // Truck drives from left to center
      .to(truckRef.current, {
        x: 0,
        duration: 1.2,
        ease: "power2.out",
      })

      // NFC appears
      .to(nfcRef.current, {
        opacity: 1,
        scale: 1,
        rotation: -10,
        duration: 0.5,
        ease: "back.out(1.7)",
      })

      // NFC flies to truck (to the cabin door area)
      .to(nfcRef.current, {
        x: -16,
        y: 0,
        rotation: 0,
        duration: 0.7,
        ease: "power2.inOut",
      })

      // NFC sticks to truck with elastic effect
      .to(nfcRef.current, {
        scale: 0.85,
        duration: 0.15,
        ease: "power2.in",
      })
      .to(nfcRef.current, {
        scale: 0.9,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)",
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

      // Signal waves
      .add(() => {
        waveRefs.current.forEach((wave, i) => {
          gsap.to(wave, {
            opacity: 0.7,
            scale: 1 + i * 0.4,
            duration: 0.5,
            delay: i * 0.15,
            ease: "power1.out",
          });
          gsap.to(wave, {
            opacity: 0,
            scale: 1.8 + i * 0.4,
            duration: 0.6,
            delay: 0.5 + i * 0.15,
            ease: "power1.out",
          });
        });
      }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-72 h-52 flex items-center justify-center"
    >
      {/* Truck */}
      <div ref={truckRef} className="relative">
        <TruckIcon className="w-40 h-20 text-foreground" />

        {/* NFC Tag - positioned to stick on cabin */}
        <div
          ref={nfcRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <NfcTagIcon className="w-10 h-10 text-primary" />

            {/* Signal waves */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                ref={(el) => {
                  waveRefs.current[i] = el;
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-emerald-400/50" />
              </div>
            ))}

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
                <SparkIcon className="w-4 h-4 text-emerald-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
