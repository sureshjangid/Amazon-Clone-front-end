import React from 'react'
import './assets/banner.css'
import Carousel from 'react-material-ui-carousel'

const Banner = () => {
    const data = [

        // "./bannerImage/Screenshot_20230104_203749.png",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Noise-Alpha_Banner/1500X300.gif",
        "./bannerImage/Screenshot_20230105_200228.png",
        "./bannerImage/Screenshot_20230105_200243.png",
        "./bannerImage/Screenshot_20230105_200255.png"

    ]
  return (
    <Carousel
      className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}
    >

{
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }
    </Carousel>
  )
}

export default Banner