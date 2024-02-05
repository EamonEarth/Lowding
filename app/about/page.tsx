import React from "react";
import Header from "./_components/Header";
import About from "./_components/About";

const page = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-col">
        <Header />
        <About />
      </div>
    </main>
  );
};

export default page;
