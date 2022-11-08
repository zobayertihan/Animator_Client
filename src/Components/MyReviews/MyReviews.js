import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
            {
                reviews.map(review => <div key={review._id}>
                    <p>
                        {
                            user.email === review.userEmail ?
                                review.userEmail
                                :
                                ''

                        }
                    </p>

                </div>)
            }
        </div>
    );
};

export default MyReviews;