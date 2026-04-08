/* Brand and institution logos */
/* PacSun and SilverTech remain as inline SVGs; all others use actual brand images */

import Image from "next/image";

function LogoImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={40}
      className={`logo-image ${className}`}
      draggable={false}
    />
  );
}

export function FootLockerLogo({ className = "" }: { className?: string }) {
  return (
    <LogoImage
      src="/logos/foot-locker.png"
      alt="Foot Locker"
      className={className}
    />
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
    <LogoImage
      src="/logos/arkos-health.png"
      alt="Arkos Health"
      className={className}
    />
  );
}

export function DeepMindLogo({ className = "" }: { className?: string }) {
  return (
    <LogoImage
      src="/logos/google-deepmind.png"
      alt="Google DeepMind"
      className={className}
    />
  );
}

export function StanfordLogo({ className = "" }: { className?: string }) {
  return (
    <LogoImage
      src="/logos/stanford.png"
      alt="Stanford University"
      className={className}
    />
  );
}

export function MITLogo({ className = "" }: { className?: string }) {
  return (
    <LogoImage
      src="/logos/mit.png"
      alt="Massachusetts Institute of Technology"
      className={className}
    />
  );
}

export function NYULogo({ className = "" }: { className?: string }) {
  return (
    <LogoImage
      src="/logos/nyu.png"
      alt="New York University"
      className={className}
    />
  );
}

export function AntlerLogo({ className = "" }: { className?: string }) {
  return (
    <LogoImage
      src="/logos/antler.jpeg"
      alt="Antler"
      className={className}
    />
  );
}
