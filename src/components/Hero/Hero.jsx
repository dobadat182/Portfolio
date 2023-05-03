import styled from "styled-components";

const StyledHero = styled.div`
  height: 100vh;
  margin-top: 70px;

  .home {
    &__container {
      row-gap: 4rem;
      padding-top: 2rem;

      @media (min-width: 767px) {
        grid-template-columns: 1fr 2fr 1fr;
      }
    }
    &__data {
      row-gap: 1.5rem;
      @media (min-width: 767px) {
        order: 2;
      }
      @media (min-width: 1200px) {
        row-gap: 2.5rem;
      }
    }
    &__title {
      text-align: center;
      font-size: var(--biggest-font-size);
      letter-spacing: 0.3px;
      margin-bottom: 0.5rem;
      @media (min-width: 1200px) {
        font-size: var(--biggest-font-size);
      }
    }
    &__blob {
      position: relative;
      width: 200px;
      height: 290px;
      background-color: var(--body-color);
      border: 2px solid var(--text-color-light);
      justify-self: center;
      border-radius: 6.25rem;
      place-items: center;
      @media (min-width: 1200px) {
        width: 400px;
        height: 580px;
        border-radius: 12.5rem;
      }
    }
    &__perfil {
      width: 170px;
      height: 260px;
      background: var(--gradient-color);
      border-radius: 5.5rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      @media (min-width: 1200px) {
        width: 340px;
        height: 520px;
        border-radius: 10.6rem;
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        /* width: 150px; */
        @media (min-width: 1200px) {
          /* width: 300px; */
        }
      }
    }
    &__shape {
      &-wawes,
      &-circle {
        position: absolute;
        opacity: 0.1;
      }
      &-wawes {
        width: 50px;
        left: -1.5rem;
        top: 5rem;
        @media (min-width: 1200px) {
          width: 100px;
          left: -4rem;
          top: 10rem;
        }
      }
      &-circle {
        width: 150px;
        bottom: -2rem;
        right: -3rem;
        transform: rotate(15deg);
        z-index: -1;
        @media (min-width: 1200px) {
          width: 250px;
          bottom: -1rem;
          right: -5rem;
        }
      }
    }
    &__social {
      justify-self: center;
      display: flex;
      column-gap: 1.25rem;
      @media (min-width: 1200px) {
        column-gap: 2rem;
      }
      &-link {
        font-size: 1.25rem;
        color: var(--text-color-light);
        transform: color 0.3s;
        @media (min-width: 1200px) {
          font-size: 1.5rem;
        }
        &:hover {
          color: var(--title-color);
        }
      }
    }
    &__info {
      display: grid;
      row-gap: 2rem;
      @media (min-width: 767px) {
        margin-top: 10rem;
        &:nth-child(3) {
          order: 3;
          text-align: right;
        }
      }
      @media (min-width: 1200px) {
        grid-template-rows: repeat(3, 130px);
        row-gap: 4rem;
        margin-top: 16rem;
      }

      &-title {
        font-family: var(--body-font);
        font-size: var(--smaller-font-size);
        font-weight: 400;
        color: var(--text-color-light);
        margin-bottom: 1rem;
      }
      &-description,
      &-number {
        font-family: var(--title-font);
        color: var(--title-color);
      }

      &-description {
        padding-right: 4rem;
        @media (min-width: 767px) {
          padding-right: 0;
        }
      }
      &-number {
        font-size: var(--h1-font-size);
        font-weight: var(--font-semi-bold);
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero id="home">
      <div className="home__container container mx-auto grid section__border">
        <div className="home__data grid">
          <h1 className="home__title">
            Hi, I'm Dat <br />
            Frontend Developer <br />
            Based In Ho Chi Minh
          </h1>

          <div className="home__blob grid">
            <div className="home__perfil">
              <img src="/images/me.jpg" alt="home perfil" />
            </div>

            <img
              src="/images/shape-wawes.svg"
              alt=""
              className="home__shape-wawes"
            />
            <img
              src="/images/shape-circle.svg"
              alt=""
              className="home__shape-circle"
            />
          </div>

          <ul className="home__social">
            <a href="#" target="_blank" className="home__social-link">
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a href="#" target="_blank" className="home__social-link">
              <i className="ri-github-line"></i>
            </a>
          </ul>
        </div>

        <div className="home__info">
          <div>
            <h3 className="home__info-title">BIOGRAPHY</h3>
            <p className="home__info-description">
              Hi, I'm Dat, Frontend Developer. Passionate about designing
              beautiful web interfaces, Based in Ho Chi Minh city
            </p>
          </div>

          <div>
            <h3 className="home__info-title">CONTACT</h3>
            <p className="home__info-description">
              Ho Chi Minh <br />
              badat336@gmail.com <br />
            </p>
          </div>

          <div>
            <h3 className="home__info-title">SERVICES</h3>
            <p className="home__info-description">
              Website Development <br />
              Animation <br />
              Wordpress <br />
              React
            </p>
          </div>
        </div>

        <div className="home__info">
          <div>
            <h3 className="home__info-title">YEARS OF EXPERIENCE</h3>

            <p className="home__info-number">02+</p>
          </div>

          <div>
            <h3 className="home__info-title">COMPLETED PROJECTS</h3>

            <p className="home__info-number">24+</p>
          </div>

          <div>
            <h3 className="home__info-title">COMPANIES WORKED</h3>

            <p className="home__info-number">01+</p>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
