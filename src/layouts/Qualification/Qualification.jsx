import styled from 'styled-components';

import shapeCricle from '../../assets/img/shape-circle.svg';

const QualificationStyled = styled.section`
    position: relative;
    overflow: hidden;
    .qualification {
        &__container {
            row-gap: 3.5rem;
        }
        &__title {
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 0.5rem;
            font-size: var(--small-font-size);
            font-weight: var(--font-semi-bold);
            margin-bottom: 2rem;

            i {
                font-size: 1rem;
                font-weight: initial;
            }
        }
        &__info {
            display: grid;
            row-gap: 2rem;
        }

        &__name {
            font-size: var(--normal-font-size);
            margin-bottom: 1.25rem;
        }

        &__country,
        &__year {
            display: block;
            font-size: var(--small-font-size);
            color: var(--text-color-light);
        }
        &__country {
            margin-bottom: 0.75rem;
        }
        &__img {
            width: 150px;
            position: absolute;
            right: -3rem;
            bottom: 12rem;
            transform: rotate(15deg);
            opacity: 0.1;
        }
    }
`;

const Qualification = () => {
    return (
        <QualificationStyled
            className="qualification seciton"
            id="qualification"
        >
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">Experience & education</span>

            <div className="qualification__container container grid section__border">
                <div className="qualification__content">
                    <h3 className="qualification__title">
                        <i className="ri-pencil-ruler-2-line"></i> Education
                    </h3>

                    <div className="qualification__info">
                        <div>
                            <h3 className="qualification__name">
                                Master In Web Developer
                            </h3>
                            <span className="qualification__country">
                                Viet Nam
                            </span>
                            <span className="qualification__year">
                                2019 - 2021
                            </span>
                        </div>

                        <div>
                            <h3 className="qualification__name">
                                Master In Web Developer
                            </h3>
                            <span className="qualification__country">
                                Viet Nam
                            </span>
                            <span className="qualification__year">
                                2019 - 2021
                            </span>
                        </div>

                        <div>
                            <h3 className="qualification__name">
                                Master In Web Developer
                            </h3>
                            <span className="qualification__country">
                                Viet Nam
                            </span>
                            <span className="qualification__year">
                                2019 - 2021
                            </span>
                        </div>
                    </div>
                </div>

                <div className="qualification__content">
                    <h3 className="qualification__title">
                        <i className="ri-pencil-ruler-2-line"></i> Education
                    </h3>

                    <div className="qualification__info">
                        <div>
                            <h3 className="qualification__name">
                                Master In Web Developer
                            </h3>
                            <span className="qualification__country">
                                Viet Nam
                            </span>
                            <span className="qualification__year">
                                2019 - 2021
                            </span>
                        </div>

                        <div>
                            <h3 className="qualification__name">
                                Master In Web Developer
                            </h3>
                            <span className="qualification__country">
                                Viet Nam
                            </span>
                            <span className="qualification__year">
                                2019 - 2021
                            </span>
                        </div>

                        <div>
                            <h3 className="qualification__name">
                                Master In Web Developer
                            </h3>
                            <span className="qualification__country">
                                Viet Nam
                            </span>
                            <span className="qualification__year">
                                2019 - 2021
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <img
                src={shapeCricle}
                alt="qualification image"
                className="qualification__img"
            />
        </QualificationStyled>
    );
};

export default Qualification;
