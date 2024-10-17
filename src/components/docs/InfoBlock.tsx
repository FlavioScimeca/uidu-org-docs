import { Info } from 'lucide-react';
import React from 'react';

interface InfoBlockProps {
  children: React.ReactNode;
  title?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ children, title }) => {
  return (
    <div className='relative before:content-[""] before:block before:h-[110%] before:w-1 before:absolute before:-top-[5%] before:rounded-full before:bg-orange-500'>
      <div className='pl-4'>
        <div className='flex items-center gap-2'>
          <Info size={20} />
          {title && <h3 className='font-bold text-blue-700'>{title}</h3>}
        </div>
        <div className='mt-1'>{children}</div>
      </div>
    </div>
  );
};

export default InfoBlock;
