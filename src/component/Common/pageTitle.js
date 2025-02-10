import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <section class="text-gray-600 w-full h-full bg-pedigrey">
      <div class="flex items-center justify-center md:p-20 p-10">
        <h2 className="font-bold md:text-5xl text-3xl">{title}</h2>
      </div>
    </section>
  );
};

export default PageTitle;
