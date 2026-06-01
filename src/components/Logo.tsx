import logoIcon from '../assets/logo_icon.png';
import logoText from '../assets/logo_text.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
  layout?: 'stacked' | 'horizontal';
  iconSize?: 'sm' | 'md' | 'lg';
  textClassName?: string;
}

export default function Logo({ 
  className = '', 
  showText = true, 
  iconSize = 'md',
  textClassName = ''
}: LogoProps) {
  
  // Icon and text heights
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* High-Fidelity Official Logo Icon Image */}
      <img 
        src={logoIcon} 
        alt="OptimizAlpha Icon" 
        className={`${sizes[iconSize]} w-auto object-contain transition-transform duration-300 group-hover:scale-105`} 
      />

      {/* High-Fidelity Official Logo Text Image */}
      {showText && (
        <img 
          src={logoText} 
          alt="OptimizAlpha" 
          className={`${sizes[iconSize]} w-auto object-contain transition-transform duration-300 ${textClassName}`} 
        />
      )}
    </div>
  );
}

