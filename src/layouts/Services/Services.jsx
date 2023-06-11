import styled from 'styled-components';

const ServicesStyled = styled.section`
    .services {
        &__container {
            row-gap: 2.5rem;
            justify-content: center;
        }
        &__card {
            position: relative;
            width: 228px;
            min-height: 322px;
            background-color: var(--container-color);
            text-align: center;
            padding: 3.5rem 1rem;
            border-radius: 7.25rem;

            &:hover {
                i {
                    transform: rotateY('360deg');
                }
                .services__border {
                    opacity: 1;
                }
            }

            i {
                display: block;
                font-size: 2rem;
                color: var(--title-color);
                margin-bottom: 0.75rem;
                transition: transform 0.8s;
            }
        }

        &__title {
            font-size: var(--h2-font-size);
            font-weight: var(--font-semi-bold);
            margin-bottom: 1.5rem;
        }
        &__border {
            width: 248px;
            height: 342px;
            border: 1.8px solid var(--text-color-light);
            border-radius: 7.75rem;
            position: absolute;
            inset: 0;
            left: -10px;
            margin: auto;
            z-index: -1;
            transition: opacity 0.6s;
            opacity: 0;
        }
    }
`;

const Services = () => {
    return (
        <ServicesStyled className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid section__border">
                <div className="services__card">
                    <i className="ri-layout-4-line"></i>

                    <h2 className="services__title">
                        UI/UX <br /> Designer
                    </h2>

                    <p className="services__description">
                        Service that provides the best quality and at the
                        request of the client, with professional work and
                        customer support.
                    </p>

                    <div className="services__border"></div>
                </div>

                <div className="services__card">
                    <i className="ri-code-line"></i>

                    <h2 className="services__title">
                        Website <br /> Designer
                    </h2>

                    <p className="services__description">
                        Service that provides the best quality and at the
                        request of the client, with professional work and
                        customer support.
                    </p>

                    <div className="services__border"></div>
                </div>
            </div>
        </ServicesStyled>
    );
};

export default Services;
