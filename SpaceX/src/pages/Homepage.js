import React, { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/company")
      .then(({ data }) => setCompany(data));

    console.log(company);
  }, []);

  console.log(company);

  return (
    <>
      <section className="showcase">
        <div className="overlay px-5">
          <article className="flex items-center justify-center mb-5">
            <h1 className="heading text-center capitalize ">
              All The SpaceX Data in one place
            </h1>
          </article>
          <div className="flex justify-center items-start flex-col md:flex-row text-white">
            <article className="mt-5 mb-5 sm:mt-0 md:mr-10">
              <h2 className="font-semibold border-white border-b mb-3 uppercase
              tracking-wide">About</h2>
              <ul>
                <li className="text-sm opacity-75 mb-1">{company.name} was founded by</li>
                <li className="text-sm opacity-75 mb-1">{company.founder} in the year</li>
                <li className="text-sm opacity-75 mb-1">{company.founded}.</li>
                <li className="text-sm opacity-75 mb-1">It has {company.employees} employees,</li>
                <li className="text-sm opacity-75 mb-1">{company.vehicles} space vehicles</li>
                <li className="text-sm opacity-75 mb-1">{company.launch_sites} launch sites</li>
                <li className="text-sm opacity-75 mb-1">and {company.test_sites} test sites and</li>
                <li className="text-sm opacity-75 mb-1">valued at {company.valuation?.toLocaleString()}</li>
              </ul>
            </article>
            <article className="mt-5 mb-5 sm:mt-0 md:mr-10">
              <h2 className="font-semibold border-white border-b mb-3 uppercase
              tracking-wide">Headquarters</h2>
              <ul>
                <li className="text-sm opacity-75 mb-1">{company.headquarters?.address}</li>
                <li className="text-sm opacity-75 mb-1">{company.headquarters?.city}</li>
                <li className="text-sm opacity-75 mb-1">{company.headquarters?.state}</li>
              </ul>
            </article>

            <article className="mt-5 mb-5 sm:mt-0">
              <h2 className="font-semibold border-white border-b mb-3 uppercase
              tracking-wide">Social Media</h2>
              <ul>
                <li className="text-sm opacity-75 mb-1">
                  <a href={company.links?.website}>Website</a>
                </li>
                <li className="text-sm opacity-75 mb-1">
                  <a href={company.links?.flickr}>Flickr</a>
                </li>
                <li className="text-sm opacity-75 mb-1">
                  <a href={company.links?.twitter}>Twitter</a>
                </li>
                <li className="text-sm opacity-75 mb-1">
                  <a href={company.links?.elon_twitter}>Elon Musk twitter</a>
                </li>
              </ul>
            </article>
          </div>
            <div className="text-center text-white">
              <p className="text-white mt-10 sm:max-w-7xl md:max-w-5xl lg:max-w-2xl">{company?.summary}</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
