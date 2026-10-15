/* Browser chrome shared by the sticky frame and the mobile stack. */
export function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="showcase-frame w-full">
      <div className="showcase-frame-inner">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[rgba(98,114,164,0.12)] bg-[#1a1b26]">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5555] opacity-60" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffb86c] opacity-60" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#50fa7b] opacity-60" />
          </div>
          <div className="flex-1 flex justify-center min-w-0">
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1 rounded-md bg-[rgba(68,71,90,0.4)] max-w-[280px] w-full">
              <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-text-tertiary flex-shrink-0 hidden sm:block" aria-hidden="true">
                <path d="M8 1a4 4 0 0 0-4 4v3H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V5a4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="text-[10px] font-mono text-text-tertiary tracking-wide truncate">healthlog.yourserver.io</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
