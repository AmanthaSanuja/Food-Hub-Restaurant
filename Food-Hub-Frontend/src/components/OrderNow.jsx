import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Fix marker icon
import '../utils/leafletIcon';

function OrderNow() {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state;

    const [selectedPosition, setSelectedPosition] = useState(null);

    if (!product) {
        return (
            <div className="container text-center py-5">
                <h2>No product selected</h2>
                <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
                    Go Back
                </button>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your order has been placed!");
        navigate("/");
    };

    // Component to capture map clicks
    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                setSelectedPosition(e.latlng);
            },
        });
        return selectedPosition ? <Marker position={selectedPosition} /> : null;
    };

    return (
        <div className="container py-5">
            <div className="row g-4">
                {/* Product Summary */}
                <div className="col-md-5 text-center">
                    <img
                        src={product.img}
                        alt={product.title}
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "300px" }}
                    />
                    <h3 className="mt-3">{product.title}</h3>
                    <p>{product.desc}</p>
                </div>

                {/* Order Form */}
                <div className="col-md-7">
                    <h2 className="fw-bold mb-4">Place Your Order</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input type="number" min="1" defaultValue="1" className="form-control" required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label d-block">Order Type</label>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="type" className="form-check-input" defaultChecked />
                                <label className="form-check-label">Dine-in</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="type" className="form-check-input" />
                                <label className="form-check-label">Takeaway</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="type" className="form-check-input" />
                                <label className="form-check-label">Delivery</label>
                            </div>
                        </div>

                        {/* Map Input */}
                        <div className="mb-4">
                            <label className="form-label">Select Your Location (click on map)</label>
                            <MapContainer
                                center={[6.9271, 79.8612]} // Default center: Colombo
                                zoom={13}
                                scrollWheelZoom={true}
                                style={{ height: "300px", width: "100%" }}
                                className="rounded shadow"
                            >
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <LocationMarker />
                            </MapContainer>
                            {selectedPosition && (
                                <p className="text-muted mt-2">
                                    Selected: Lat {selectedPosition.lat.toFixed(4)}, Lng {selectedPosition.lng.toFixed(4)}
                                </p>
                            )}
                        </div>

                        <button type="submit" className="btn btn-success px-4 py-2 fw-bold">
                            Confirm Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OrderNow;
