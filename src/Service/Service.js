import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const Service = () => {
    const service = useLoaderData();
    console.log(service)
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <PhotoProvider>
                        <PhotoView src={service.image}>
                            <img src={service.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </PhotoView>
                    </PhotoProvider>

                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        {service.name}
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        {service.description}...
                    </p>
                    <div className='flex justify-between'>
                        <p>$ {service.price}</p>
                        <p>{service.rating}</p>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;