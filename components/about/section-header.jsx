
import { cn } from '@/lib/utils';


export const SectionHeader = ({ title, subtitle, className }) => {
  return (
    <div className={cn('text-center mb-12 md:mb-16', className)}>
      <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
      <div className="flex justify-center mt-2">
        <div className="w-24 h-1 bg-primary"></div>
      </div>
      {subtitle && <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">{subtitle}</p>}
    </div>
  );
};
