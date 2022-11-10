import Lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';

const MyReviews = () => {
    useTitle('My reviews');
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const container1 = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container1.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../Assets/review.json'),
        });
        return () => {
            Lottie.destroy();
        };
    }, [])

    useEffect(() => {
        fetch(`https://animator-server.vercel.app/reviews`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('animator-user-token')}`,
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut])
    const review = reviews.filter(r => r.userEmail === user?.email);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to delete this review');
        if (proceed) {
            fetch(`https://animator-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('animator-user-token')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return logOut()
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.error('Review Removed');
                        console.log(review)
                        const remaining = review.filter(rev => rev.ServiceId !== id);
                        console.log(remaining)
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div className='max-w-xl mx-auto' ref={container1}>

            </div>
            {
                review.map(review => <div className='max-w-lg mx-auto' key={review._id}>
                    {
                        <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex space-x-4">
                                <img alt="" src={review.image ? review.image : <FaUser />} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                <div className="flex flex-col space-y-1">
                                    <h2>{review.name}</h2>
                                    <span className="text-xs dark:text-gray-400">{review.reviewTime}</span>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl'>Service: {review.ServiceName}</h1>
                                <br />
                                <p>Rating: {review.rating}</p>
                                <br />
                                <p className="text-sm dark:text-gray-400">{review.description}</p>
                            </div>
                            <div className='flex justify-between'>
                                <Link to={`/reviews/${review._id}`}> <button className='btn btn-outline btn-ghost'>Edit</button></Link>
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