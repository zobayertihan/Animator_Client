import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const AddServices = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    useTitle('Add Service');
    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../Assets/service.json'),
        });
        return () => {
            Lottie.destroy();
        };
    }, [])
    const serviceTime = `${date} ${time}`
    const navigate = useNavigate();
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.imageURL.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const service = {
            name,
            image,
            price,
            rating,
            description,
            serviceTime
        }

        fetch('https://animator-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Service Added');
                    form.reset();
                    navigate('/services')
                }
            })
            .catch(e => console.error(e))
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold p-12">Add a Service</h1>
                    <div className='max-w-xl mx-auto' ref={container}>

                    </div>
                    <form onSubmit={handleAddService} className="card-body ">
                        <div className='grid grid-cols-2 gap-8'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name='imageURL' placeholder="Image URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
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

export default AddServices;