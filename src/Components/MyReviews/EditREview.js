import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const EditREview = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    useTitle('Edit Review')
    console.log(data);
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const reviewTime = `${date} ${time}`
    const dataUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const description = form.des.value;
        const updatedData = {
            rating,
            description,
            reviewTime
        }
        console.log(rating, description);
        fetch(`http://localhost:5000/reviews/${data._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('animator-user-token')}`,
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    navigate('/myreviews')
                }
            })
    }
    return (
        <div>
            <div className=" max-w-lg mx-auto my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 p-4 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">Update Review</h1>
                        <form onSubmit={dataUpdate} className="card-body">
                            <div className="form-control">
                                <label className="text-xl ">
                                    Service Name:
                                    <span className="text-xl font-bold"> {data.ServiceName}</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="text-xl ">
                                    User Name:
                                    <span className="text-xl font-bold"> {data.name}</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Rating</span>
                                </label>
                                <input type="text" name='rating' defaultValue={data.rating} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Description</span>
                                </label>
                                <input type="text" name='des' defaultValue={data.description} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditREview;