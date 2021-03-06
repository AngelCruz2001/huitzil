
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image'
import { Pagination, Navigation } from "swiper";


const images = [
    {
        id: '1',
        url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: '2',
        url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 'fs',
        url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 'dsf1',
        url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 'fadsfdsaf1',
        url: "https://www.sony.es/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=720",
    },

];
export const SliderSelectable = ({
    navigation = false,
    imageArray,


}) => {
    return (

        <div style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
        }}>
            <Swiper
                navigation={true}
                modules={[Pagination, Navigation]}

            >

                {images.map(image => (
                    <SwiperSlide key={image.id}>
                        <div style={{
                            flex: '1', display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <img src={image.url} style={{
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }} />


                        </div>
                    </SwiperSlide>

                ))}

            </Swiper>
        </div>
    );
};