import React from 'react';
import { ChevronDown } from 'lucide-react';
const PageTitle = ({ title }) => {
  return (
    <section className="text-white w-full h-full bg-pedigrey">
      <div className="flex items-center justify-center md:py-12 py-4">
        <div className='grid justify-items-center py-8'>
          <h2 className="font-bold md:text-5xl text-3xl uppercase">{title}</h2>
          <div className='mt-3 md:mt-4 animate-bounce'><ChevronDown size={20} /></div>
        </div>

      </div>
    </section>
  );
};

export default PageTitle;
