import React from 'react';
import { Link } from 'react-router-dom';
import AllTopics from './AllTopics';

const Home = () => {


  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-2xl font-bold leading-none ">Web
              <span className="dark:text-violet-400">development</span> is the building and maintenance of websites and applications
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Front-end development refers to the client-side
              <br className="hidden md:inline lg:hidden" />Back-end development refers to the server-side
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link rel="noopener noreferrer" to="/topics" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Go to Topics</Link>
              <Link rel="noopener noreferrer" href="/about" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Learn More</Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    {/* <AllTopics></AllTopics> */}
    </div>
  );
};

export default Home;