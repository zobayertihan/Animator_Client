import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const AddReview = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const reviewTime = `${date} ${time}`

    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    console.log(service._id)
    const navigate = useNavigate();
    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const review = {
            reviewTime,
            ServiceId: service._id,
            ServiceName: service.name,
            userEmail: user.email,
            image: user.photoURL,
            name,
            rating,
            description
        }
        console.log(review)

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review Added');
                    form.reset();
                    navigate(`/services/${service._id}`)
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold p-12">Add a Review</h1>
                    <form onSubmit={handleAddReview} className="card-body ">
                        <div className='grid grid-cols-2 gap-8'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" value={user?.displayName} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;