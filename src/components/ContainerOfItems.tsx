import React from "react";

const ContainerOfItems = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid m-4 mb-0 pb-4 grid-cols-[repeat(auto-fill,230px)] justify-center gap-4 px-2 sm:px-0 laptop:pt-[1rem] ">
      {children}
    </section>
  );
};

export default ContainerOfItems;
