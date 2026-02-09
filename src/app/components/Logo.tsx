import { Gavel } from 'lucide-react';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <Gavel size={size} className="text-[#FAD45F]" style={{ transform: 'rotate(-45deg)' }} />
      </div>
    </div>
  );
}
