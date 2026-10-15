/**
 * A plain phone body drawn in CSS around a 390 px capture: rounded device,
 * rounded screen, a status bar with the island, and a home indicator. The
 * status bar and the indicator follow the same colour scheme as the capture
 * inside it (see .phone-device in globals.css). No device artwork is used.
 */
export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="phone-device">
      <div className="phone-screen">
        <div className="phone-status" aria-hidden="true">
          <span className="phone-time">9:41</span>
          <span className="phone-island" />
          <span className="phone-icons">
            <svg viewBox="0 0 18 12" className="h-[10px] w-[15px]">
              <rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor" />
              <rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="currentColor" />
              <rect x="10" y="3" width="3" height="9" rx="1" fill="currentColor" />
              <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 27 13" className="h-[11px] w-[22px]">
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="12"
                rx="3.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.4"
              />
              <rect x="2" y="2" width="18" height="9" rx="2" fill="currentColor" />
              <rect x="25" y="4.5" width="1.5" height="4" rx="0.75" fill="currentColor" fillOpacity="0.4" />
            </svg>
          </span>
        </div>
        {children}
        <div className="phone-home" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
