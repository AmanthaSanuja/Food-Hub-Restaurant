import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import VegiKottu from "../assets/vegi-kottu.PNG";
import VegiFriedRice from "../assets/vegi-Fried-Rice.PNG";

function Products() {
    const [category, setCategory] = useState("Kottu");
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const products = {
        Kottu: [
            { img: VegiKottu, title: "Veg Kottu", desc: "Deliciously spiced vegetarian kottu made fresh with crispy roti." },
            { img: VegiKottu, title: "Cheese Kottu", desc: "Cheesy delight with a spicy Sri Lankan twist." },
            { img: VegiKottu, title: "Egg Kottu", desc: "Aromatic kottu infused with scrambled egg and veggies." },
            { img: VegiKottu, title: "Chicken Kottu", desc: "Classic chicken kottu loaded with flavor and crunch." }
        ],
        Rice: [
            { img: VegiFriedRice, title: "Veg Fried Rice", desc: "Light, fluffy, and healthy — our veggie fried rice is a hit." },
            { img: VegiFriedRice, title: "Egg Fried Rice", desc: "Perfectly scrambled eggs folded into savory fried rice." },
            { img: VegiFriedRice, title: "Seafood Fried Rice", desc: "A seafood lover’s dream — flavorful and fresh." },
            { img: VegiFriedRice, title: "Chicken Fried Rice", desc: "Golden fried rice tossed with seasoned chicken." }
        ]
    };

    const renderCards = (items) =>
        items.map((item, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card h-100 shadow-lg border-0 product-card">
                    <img src={item.img} className="card-img-top rounded-top" alt={item.title} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <button
                            onClick={() => navigate("/order", { state: item })}
                            className="btn btn-outline-primary mt-auto order-btn"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        ));

    return (
        <div className="container py-5">
            <h1 className="text-center fw-bold mb-4" data-aos="fade-down">Our Products</h1>

            {/* Tabs for Categories */}
            <ul className="nav nav-pills justify-content-center mb-4" data-aos="zoom-in">
                {Object.keys(products).map((cat) => (
                    <li className="nav-item mx-2" key={cat}>
                        <button
                            className={`nav-link px-4 py-2 ${category === cat ? "active" : ""}`}
                            onClick={() => setCategory(cat)}
                        >
                            {cat}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Product Cards */}
            <div className="row g-4 justify-content-center">
                {renderCards(products[category])}
            </div>
        </div>
    );
}

export default Products;
