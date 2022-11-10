import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import useTitle from '../Hooks/useTitle';

const Service = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    useTitle(service.name)
    const [fill, setFill] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://animator-server.vercel.app/review`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                if (reviews) {
                    const review = reviews.filter(r => r.ServiceId === service._id)
                    setFill(review);
                    setSpinner(false);
                }

            })
    }, [reviews, service._id, spinner])
    return (
        <div>
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
            <div className='flex justify-center'>
                <Link className='btn btn-outline btn-ghost p-5' to={`/services/${service._id}/review`}>Add review</Link>
            </div>
            <div>
                {
                    fill.map(review => <div key={review._id}>
                        {


                            <>
                                <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                                    <div className="flex space-x-4">
                                        <img alt="" src={review.image ? review.image : <FaUser />} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                        <div className="flex flex-col space-y-1">
                                            <h2>{review.name}</h2>
                                            <span className="text-xs dark:text-gray-400">{review.reviewTime}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Rating: {review.rating}</p>
                                        <p className="text-sm dark:text-gray-400">{review.description}</p>
                                    </div>
                                </div>

                            </>
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;