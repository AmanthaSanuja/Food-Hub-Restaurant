import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section
                className="text-white d-flex align-items-center"
                style={{
                    backgroundImage: `url(${f1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                }}
            >
                <div className="container text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '40px', borderRadius: '10px' }}>
                    <h1 className="display-4 fw-bold mb-3" data-aos="fade-down">Welcome to <span className="text-warning">Food Hub</span></h1>
                    <p className="lead mb-4" data-aos="fade-up">Where every bite tells a story. Explore our delicious menu today!</p>
                    <a href="#menu" className="btn btn-warning btn-lg mx-2" data-aos="zoom-in">View Menu</a>
                    <a href="#order" className="btn btn-outline-light btn-lg mx-2" data-aos="zoom-in">Order Now</a>
                </div>
            </section>

            {/* Featured Dishes Section */}
            <section id="menu" className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-4" data-aos="fade-up">Our Specialties</h2>
                    <div className="row">
                        <div className="col-md-4" data-aos="zoom-in">
                            <img src={f2} className="img-fluid rounded mb-3" alt="Dish 1" />
                            <h5>Spicy Veg Kottu</h5>
                            <p>A Sri Lankan favorite mixed with vegetables and a spicy kick.</p>
                        </div>
                        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
                            <img src={f3} className="img-fluid rounded mb-3" alt="Dish 2" />
                            <h5>Fried Rice Delight</h5>
                            <p>Fragrant fried rice served with your choice of toppings.</p>
                        </div>
                        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
                            <img src={f1} className="img-fluid rounded mb-3" alt="Dish 3" />
                            <h5>Classic Chicken Curry</h5>
                            <p>Rich and flavorful, made with our secret house blend of spices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="py-5 bg-dark text-white">
                <div className="container text-center">
                    <h2 className="mb-4" data-aos="fade-up">What Our Customers Say</h2>
                    <div className="row">
                        <div className="col-md-4" data-aos="flip-left">
                            <div className="p-4 bg-secondary rounded">
                                <p>"Absolutely delicious! Best food experience I've had in months."</p>
                                <strong>- Ruwan Perera</strong>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="100">
                            <div className="p-4 bg-secondary rounded">
                                <p>"Super friendly staff and tasty dishes. Highly recommend."</p>
                                <strong>- Nadeesha Silva</strong>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="200">
                            <div className="p-4 bg-secondary rounded">
                                <p>"Their spicy kottu is to die for! Will order again soon."</p>
                                <strong>- Dinesh Fernando</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
