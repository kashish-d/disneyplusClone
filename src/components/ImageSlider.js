import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImageSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
        <Carousel {...settings}>
            <Wrap>
                <a href='#'>
                    <img src='/images/slider-badging.jpg' alt='' />
                </a>
            </Wrap>

            <Wrap>
                <a href='#'>
                    <img src='/images/slider-scale.jpg' alt='' />
                </a>
            </Wrap>
            <Wrap>
                <a href='#'>
                    <img src='/images/slider-badag.jpg' alt='' />
                </a>
            </Wrap>
            <Wrap>
                <a href='#'>
                    <img src='/images/slider-scales.jpg' alt='' />
                </a>
            </Wrap>
        </Carousel>
    );
};

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        :hover {
            opacity: 1;
            transition-duration: 0.2s;
        }
    }

    ul li button {
        ::before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a {
        cursor: pointer;
        display: block;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.64) 0px 26px 30px -10px,
            rgba(0 0 0/ 73%) 0px 16px 10px -10px;
        padding: 4px;
        position: relative;

        /* @media screen and (max-width: 768px) {
            height: 30vh;

            img {
                object-fit: cover;
            }
        } */

        img {
            height: 100%;
            width: 100%;
        }

        :hover {
            padding: 0px;
            border: 4px solid rgb(249, 249, 249);
            transition-duration: 200ms;
        }
    }
`;

export default ImageSlider;
