import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import VegiKottu from '../assets/vegi-kottu.PNG'; // adjust the path as needed
import VegiFriedRice from '../assets/vegi-Fried-Rice.PNG';

function Products() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Our Products</h1>

            {/* Product List */}

            {/* Kottu Category */}

            <div className="d-flex align-items-center text-center my-4">
                <hr className="flex-grow-1" />
                <span className="px-3 text-dark fs-4 fw-bold"> Kottu </span>
                <hr className="flex-grow-1" />
            </div>


            <div className="row g-4 justify-content-center">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-center shadow h-100">
                        <img src={VegiKottu} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-center shadow h-100">
                        <img src={VegiKottu} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-center shadow h-100">
                        <img src={VegiKottu} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-center shadow h-100">
                        <img src={VegiKottu} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* Rice Category */}

                <div className="d-flex align-items-center text-center my-4">
                    <hr className="flex-grow-1" />
                    <span className="px-3 text-dark fs-4 fw-bold"> Rice </span>
                    <hr className="flex-grow-1" />
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-center shadow h-100">
                        <img src={VegiFriedRice} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-center shadow h-100">
                        <img src={VegiFriedRice} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-center shadow h-100">
                        <img src={VegiFriedRice} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-center shadow h-100">
                        <img src={VegiFriedRice} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div><div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-center shadow h-100">
                        <img src="https://via.placeholder.com/120" className="card-img-top rounded-circle mx-auto mt-4 img-thumbnail" style={{ width: "120px", height: "120px", objectFit: "cover" }} alt="Liam" />
                        <div className="card-body">
                            <h5 className="card-title">Liam</h5>
                            <p className="card-text text-muted">Customer Experience</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;
