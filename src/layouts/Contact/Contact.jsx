import React from 'react';
import styled from 'styled-components';

const ContactStyled = styled.section``;

const Contact = () => {
    return (
        <ContactStyled className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid section__border">
                <div className="contact__content">
                    <h3 className="contact__title">
                        <i className="ri-chat-3-"></i> Talk to me
                    </h3>

                    <div className="contact__info">
                        <div className="contact__data">
                            <span className="contact__data-title"></span>
                            <span className="contact__data-info"></span>
                            <a href="#" className="contact__button">
                                Write me
                            </a>
                        </div>
                    </div>

                    <div className="contact__info">
                        <div className="contact__data">
                            <span className="contact__data-title"></span>
                            <span className="contact__data-info"></span>
                            <a href="#" className="contact__button">
                                Write me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </ContactStyled>
    );
};

export default Contact;
