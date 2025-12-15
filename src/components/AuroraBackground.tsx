import React from 'react';
import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
  radialGradient?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  radialGradient = true,
  className,
  children,
}) => {
  return (
    <main>
      <div
        className={cn(
          'transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-900 text-slate-950 dark:bg-zinc-900',
          className,
        )}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              '--aurora':
                'repeating-linear-gradient(100deg,#000000_10%,#111111_15%,#222222_20%,#333333_25%,#444444_30%)',
              '--dark-gradient':
                'repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)',
              '--white-gradient':
                'repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)',
              '--blue-300': '#000000',
              '--blue-400': '#111111',
              '--blue-500': '#000000',
              '--indigo-300': '#222222',
              '--violet-200': '#333333',
              '--black': '#000',
              '--white': '#000',
              '--transparent': 'transparent',
              '--animate-aurora': 'aurora 60s linear infinite',
            } as any
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[''] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              radialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          />
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuroraBackground;