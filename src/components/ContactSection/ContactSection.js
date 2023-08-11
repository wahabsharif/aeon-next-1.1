import { contactSection } from "@/data/contactSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";

const MapBox = dynamic(() => import("../MapSection/MapBox"));
const FormBox = dynamic(() => import("./FormBox"));

const { title, contacts, inputs } = contactSection;

const ContactSection = ({ className = "", map = false, form = false }) => {
  const ref = useActive("#contact");

  return (
    <section ref={ref} className={`contact-section ${className}`} id="contact">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title} <span className="dot">.</span>
          </h2>
        </div>

        <div className="upper-info">
          <Row className="clearfix">
            {contacts.map(({ id, name, address, email, phone }) => (
              <Col
                key={id}
                xl={3}
                lg={6}
                md={6}
                sm={12}
                className="info-block animated fadeInUp"
              >
                <div className="inner-box">
                  <h5>{name}</h5>
                  <div className="text">
                    <ul className="info">
                      <li>{address}</li>
                      <li>
                        <a href={`mailto:${email}`}>{email}</a>
                      </li>
                      <li>
                        <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {map && <MapBox />}
        {form && <FormBox inputs={inputs} />}
      </div>
    </section>
  );
};

export default ContactSection;
