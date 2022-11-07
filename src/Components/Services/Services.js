import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [allServices, setAllServices] = useState([]);
    // console.log(allServices)
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div>
            {
                // allServices.map(service => <>
                //     <p>{service.id}</p>
                //     <br />
                //     <p>{service.name}</p>
                //     <br />
                //     <img src={service.image} alt="" />
                //     <br />
                //     <p>{service.rating}</p>
                //     <br />
                //     <p>${service.price}</p>
                //     <br />
                //     <p>{service.description}</p>
                // </>)
                allServices.map(service => <>
                    <section className="dark:bg-gray-800 dark:text-gray-100">
                        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
                            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <img src={service.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                            </div>
                            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                                    {service.name}
                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12">
                                    {service.description}
                                </p>
                                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                    <Link>Details</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </>)
            }

        </div>
    );
};

export default Services;