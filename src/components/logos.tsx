/* Clean monochrome SVG logos for dark backgrounds */

export function FootLockerLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="26" letterSpacing="-0.5" fontStyle="italic">
        FOOT LOCKER
      </text>
    </svg>
  );
}

export function PacSunLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" letterSpacing="3">
        PACSUN
      </text>
    </svg>
  );
}

export function ArkosHealthLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="22" letterSpacing="1">
        ARKOS HEALTH
      </text>
    </svg>
  );
}

export function DeepMindLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Stylized brain/network icon */}
      <circle cx="14" cy="18" r="4" opacity="0.9" />
      <circle cx="6" cy="10" r="2.5" opacity="0.6" />
      <circle cx="22" cy="10" r="2.5" opacity="0.6" />
      <circle cx="6" cy="26" r="2.5" opacity="0.6" />
      <circle cx="22" cy="26" r="2.5" opacity="0.6" />
      <line x1="14" y1="18" x2="6" y2="10" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <line x1="14" y1="18" x2="22" y2="10" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <line x1="14" y1="18" x2="6" y2="26" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <line x1="14" y1="18" x2="22" y2="26" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <text x="32" y="24" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="18" letterSpacing="0.5">
        DeepMind
      </text>
    </svg>
  );
}

export function StanfordLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Stylized S-tree icon */}
      <rect x="10" y="26" width="8" height="3" rx="1" opacity="0.7" />
      <rect x="12" y="12" width="4" height="16" rx="1" opacity="0.5" />
      <circle cx="14" cy="9" r="6" opacity="0.8" />
      <circle cx="14" cy="9" r="3" fill="#050505" />
      <text x="30" y="24" fontFamily="'Georgia', serif" fontWeight="400" fontSize="18" letterSpacing="0.5">
        Stanford
      </text>
    </svg>
  );
}

export function MITLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* MIT block letters */}
      <rect x="2" y="8" width="6" height="22" />
      <rect x="2" y="2" width="6" height="4" />
      <rect x="12" y="2" width="6" height="28" />
      <rect x="22" y="2" width="6" height="28" />
      <rect x="30" y="2" width="14" height="6" />
      <rect x="34" y="2" width="6" height="28" />
      <rect x="48" y="8" width="6" height="22" />
      <rect x="56" y="2" width="22" height="6" />
      <rect x="62" y="2" width="6" height="28" />
    </svg>
  );
}

export function NYULogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Torch icon */}
      <rect x="2" y="14" width="3" height="16" rx="1" opacity="0.7" />
      <ellipse cx="3.5" cy="11" rx="3" ry="4" opacity="0.9" />
      <ellipse cx="3.5" cy="9" rx="1.5" ry="2.5" fill="#050505" />
      <text x="12" y="25" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" letterSpacing="2">
        NYU
      </text>
    </svg>
  );
}

export function SilverTechLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Diamond/venture icon */}
      <polygon points="14,4 24,18 14,32 4,18" opacity="0.8" />
      <polygon points="14,8 20,18 14,28 8,18" fill="#050505" />
      <polygon points="14,12 16,18 14,24 12,18" opacity="0.6" />
      <text x="32" y="25" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="19" letterSpacing="2">
        SILVERTECH
      </text>
      <text x="172" y="25" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="19" letterSpacing="2" opacity="0.5">
        VC
      </text>
    </svg>
  );
}
