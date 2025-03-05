import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <section className="text-gray-600 w-full h-full bg-pedigrey">
      <div className="flex items-center justify-center md:p-24 p-10">
        <h2 className="font-bold md:text-5xl text-3xl uppercase">{title}</h2>
      </div>
    </section>
  );
};

export default PageTitle;
