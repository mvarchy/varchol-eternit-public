"use client";

import { motion } from "framer-motion";
import { Photo } from "@/components/ui/Photo";
import { CallButton } from "@/components/ui/CallButton";
import { EmailButton } from "@/components/ui/EmailButton";
import { WaveEdge } from "@/components/ui/Wave";

const lines = ["Likvidace", "eternitu", "a azbestu"];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate mt-[4.5rem] overflow-hidden bg-ink text-paper">
      <div className="relative h-[min(75vw,60svh)] min-h-56 [--hero-pos:62%_50%] lg:[--hero-pos:100%_0%] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
        <Photo src="/fotky/hero/hero-zakazka.webp" objectPosition="var(--hero-pos)" label="Úvodní fotka" alt="" sizes="100vw" tone="dark" fill preload />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-ink lg:bg-linear-100 lg:from-ink/55 lg:from-0% lg:via-ink/20 lg:to-transparent"
        />
      </div>

      <div className="relative mx-auto flex max-w-[90rem] flex-col justify-end px-4 pb-20 pt-6 sm:px-6 lg:min-h-[min(86svh,52rem)] lg:px-10 lg:pb-28 lg:pt-24">
        <h1 id="hero-title" className="font-display text-[clamp(2.25rem,10vw,6.4rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] [font-stretch:100%] sm:text-[clamp(2.5rem,8vw,6.4rem)]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className={`block ${i === 2 ? "text-mint" : ""}`}
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-lg text-[clamp(1rem,4.7vw,1.3125rem)] font-semibold leading-relaxed text-paper">
            Likvidace eternitu a azbestu v Litoměřicích a okolí. Demontujeme střechy bezpečně, podle předpisů a s ohledem na zdraví lidí i ochranu přírody. Pronájem lešení zajistíme také.
          </p>
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center lg:mr-16 xl:mr-24">
            <CallButton variant="mint" className="w-full justify-center sm:w-auto" />
            <EmailButton variant="mint" className="w-full justify-center sm:w-auto" />
            <a
              href="#kde-pusobime"
              className="inline-flex w-full items-center justify-center px-5 py-3 text-[15px] font-bold text-paper underline decoration-paper/40 underline-offset-[6px] hover:decoration-mint sm:w-auto"
            >
              Kam jezdíme
            </a>
          </div>
        </motion.div>
      </div>

      <WaveEdge className="absolute inset-x-0 -bottom-px" />
    </section>
  );
}
