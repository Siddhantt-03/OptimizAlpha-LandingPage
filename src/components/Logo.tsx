
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
  layout = 'stacked',
  iconSize = 'md',
  textClassName = ''
}: LogoProps) {
  
  // Icon dimensions
  const iconClasses = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* Stylized Circle-Arrow SVG Mark */}
      <div className={`relative shrink-0 ${iconClasses[iconSize]} transition-transform duration-300 group-hover:scale-105`}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient for the ring */}
            <linearGradient id="logoRingGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#176B87" /> {/* ocean */}
              <stop offset="100%" stopColor="#DAFFFB" /> {/* pearl */}
            </linearGradient>
            {/* Gradient for the arrow */}
            <linearGradient id="logoArrowGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#0d9488" /> {/* dark green/teal */}
              <stop offset="100%" stopColor="#64CCC5" /> {/* tealmint */}
            </linearGradient>
          </defs>

          {/* Stylized circular ring with gap at the bottom-left */}
          <path
            d="M 30,78 A 38,38 0 1,1 88,50 A 38,38 0 0,1 66,84"
            stroke="url(#logoRingGrad)"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-300 group-hover:stroke-tealmint"
          />

          {/* Curving green/teal arrow */}
          <path
            d="M 24,76 C 30,62 46,44 68,36"
            stroke="url(#logoArrowGrad)"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
          />

          {/* Sharp high-fidelity Arrowhead pointing up-right */}
          <path
            d="M 54,34 L 72,32 L 68,50 L 61,42 Z"
            fill="url(#logoArrowGrad)"
          />
        </svg>
      </div>

      {/* Styled Brand Typography */}
      {showText && (
        <>
          {layout === 'stacked' ? (
            <div className={`flex flex-col text-left leading-[1.1] font-sans ${textClassName}`}>
              <span className="text-[15px] font-extrabold tracking-tight text-pearl transition-colors duration-300 group-hover:text-tealmint">
                Optimiz
              </span>
              <span className="text-[14px] font-semibold tracking-wider text-tealmint transition-colors duration-300 group-hover:text-pearl">
                Alpha
              </span>
            </div>
          ) : (
            <span className={`font-sans text-xl font-bold tracking-tight text-pearl transition-colors duration-300 group-hover:text-tealmint ${textClassName}`}>
              Optimiz<span className="text-tealmint">Alpha</span>
            </span>
          )}
        </>
      )}
    </div>
  );
}
