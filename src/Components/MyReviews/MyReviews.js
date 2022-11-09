import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const review = reviews.filter(r => r.userEmail === user?.email)
    const handleEdit = event => {

    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to delete this review');
        console.log(`http://localhost:5000/reviews/${id}`)
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Review Removed');
                        const remaining = review.filter(rev => rev.ServiceId !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {
                review.map(review => <div key={review._id}>
                    {
                        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex space-x-4">
                                <img alt="" src={review.image ? review.image : <FaUser />} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                <div className="flex flex-col space-y-1">
                                    <h2>{review.name}</h2>
                                    <span className="text-xs dark:text-gray-400">{review.reviewTime}</span>
                                </div>
                            </div>
                            <div>
                                <h1>{review.ServiceName}</h1>
                                <p className="text-sm dark:text-gray-400">{review.description}</p>
                            </div>
                            <div className='flex justify-between'>
                                <button className='btn btn-outline btn-ghost' onClick={handleEdit}>Edit</button>
                                <button className='btn btn-outline btn-ghost' onClick={() => handleDelete(review.ServiceId)}>Delete</button>
                            </div>
                        </div>
                    }
                </div>)
            }
        </div>
    );
};

export default MyReviews;