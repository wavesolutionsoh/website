export function WaveTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_16%_32%,rgba(255,255,255,0.42)_0_1px,transparent_2px),radial-gradient(circle_at_76%_38%,rgba(245,130,32,0.32)_0_1px,transparent_2px),linear-gradient(115deg,transparent_0_18%,rgba(255,255,255,0.12)_18.2%,transparent_18.8%_42%,rgba(255,255,255,0.08)_42.2%,transparent_42.8%)] [background-size:78px_78px,112px_112px,260px_260px]" />
      <svg className="absolute right-0 top-10 h-[78%] w-[58%] min-w-[620px] text-white opacity-[0.13]" viewBox="0 0 760 560" fill="none">
        <path d="M92 318C170 236 226 244 306 296C395 354 485 338 668 156" stroke="currentColor" strokeWidth="2" strokeDasharray="8 14" />
        <path d="M120 182C220 128 297 152 362 224C441 312 532 314 672 260" stroke="#F58220" strokeWidth="2" strokeDasharray="5 16" />
        <path d="M140 410C248 352 346 370 420 416C506 470 590 448 696 374" stroke="currentColor" strokeWidth="2" strokeDasharray="10 18" />
        <g opacity="0.9">
          <circle cx="92" cy="318" r="20" stroke="currentColor" strokeWidth="2" />
          <path d="M84 312h16v12H84zM84 312l8 7 8-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </g>
        <g opacity="0.9">
          <circle cx="306" cy="296" r="22" stroke="currentColor" strokeWidth="2" />
          <path d="M298 286c3 20 18 20 22 13l-6-5-4 4c-4-2-7-5-9-10l4-3-5-7-2 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </g>
        <g opacity="0.9">
          <circle cx="668" cy="156" r="20" stroke="#F58220" strokeWidth="2" />
          <path d="M660 150h16v12h-16zM660 150l8 7 8-7" stroke="#F58220" strokeWidth="2" strokeLinejoin="round" />
        </g>
        <g opacity="0.8">
          <circle cx="420" cy="416" r="18" stroke="currentColor" strokeWidth="2" />
          <path d="M413 409h14v10h-14zM413 409l7 6 7-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

export function SoftTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.42] [background-image:linear-gradient(135deg,rgba(0,119,200,0.10)_0_1px,transparent_1px),radial-gradient(circle_at_22%_20%,rgba(245,130,32,0.13)_0_1px,transparent_2px),radial-gradient(circle_at_72%_54%,rgba(6,42,96,0.11)_0_1px,transparent_2px)] [background-size:34px_34px,86px_86px,112px_112px]" />
    </div>
  );
}
