import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css"; // Or AboutUs.css if separated

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Parallax Section */}
      <div className="parallax-bg">
        <div className="parallax-overlay">
          <div data-aos="zoom-in">
            <h1 className="display-4 fw-bold">About Food Hub</h1>
            <p className="lead">Taste the tradition. Feel the love.</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container py-5">
        {/* Intro */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "800px" }} data-aos="fade-up">
          <p className="lead">
            At <strong>Food Hub</strong>, we believe food is more than just a meal — it’s an experience. 
            Born from a passion for fresh, locally-sourced ingredients and authentic flavors, 
            we’re on a mission to serve happiness on every plate.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="row g-4 mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card h-100 shadow-lg border-0">
              <div className="card-body">
                <h3 className="card-title text-primary fw-bold">Our Mission</h3>
                <p>
                  To redefine dining by offering freshly prepared meals with heart, 
                  bringing communities together through quality, consistency, and 
                  warmth in every interaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card h-100 shadow-lg border-0">
              <div className="card-body">
                <h3 className="card-title text-success fw-bold">Our Vision</h3>
                <p>
                  To become the most loved and trusted name in Sri Lankan food culture — 
                  inspiring moments of togetherness through outstanding culinary experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-center mb-4 fw-bold" data-aos="zoom-in">Meet Our Team</h2>
        <div className="row g-4 justify-content-center">
          {[
            { name: "Chef John", role: "Head Chef", desc: "The creative mind behind our signature dishes." },
            { name: "Emma Silva", role: "Operations Manager", desc: "Ensures smooth flow from kitchen to guest." },
            { name: "Liam Perera", role: "Customer Experience", desc: "Delivers warmth with every interaction." },
            { name: "Nisha Fernando", role: "Marketing Lead", desc: "Spreads our flavor through the world." }
          ].map((member, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="card text-center h-100 border-0 shadow-lg team-card">
                <img
                  src={`https://via.placeholder.com/120?text=${member.name.split(" ")[0]}`}
                  alt={member.name}
                  className="rounded-circle mx-auto mt-4 img-thumbnail"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                  <p className="card-text" style={{ fontSize: "0.9rem" }}>{member.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <p className="text-muted fst-italic">“Bringing people together, one bite at a time.”</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
