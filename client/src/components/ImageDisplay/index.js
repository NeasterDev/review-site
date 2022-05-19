import { use } from 'express/lib/application';
import React, { useEffect, useState } from 'react';

export const ImageDisplay = ({imageLinks, setImageLinks}) => {

    const [activeSlideNumber, setActiveSlideNumber] = useState(0);
    let key = 1;
    
    const setSlide = (slideNum) => {
        
        let images = document.getElementsByClassName('images');
        // handles if the user clicks next image on first or last image
        if (slideNum >= images.length) { 
            setActiveSlideNumber(0);
            slideNum = 0;
        };

        if (slideNum < 0) { 
            setActiveSlideNumber(images.length - 1);
            slideNum = (images.length - 1); 
        };

        //hide all images
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
        };
        console.log(`SlideNum ${activeSlideNumber}`);
        images[slideNum].style.display = 'block';
    }

    useEffect(() => {
        setSlide(activeSlideNumber);
    }, []);

    useEffect(() => {
        setSlide(activeSlideNumber);
    }, [activeSlideNumber]);

            
    const plusSlides = () => {
        setActiveSlideNumber(activeSlideNumber + 1)   
    }

    const minusSlides = () => {
        setActiveSlideNumber(activeSlideNumber - 1)   
    }

    return (
        <div className='image-position'>
            <div className='title'>Images</div>
            <div className='is-flex'>
            <div onClick={minusSlides}>
                    <a>Previous Image</a>
                </div>
                {imageLinks.map(imageLink => {
                    key++;
                    return (
                        <img className='images' key={key} src={imageLink} />
                    )
                })}
                <div onClick={plusSlides}>
                    <a>Next Image</a>
                </div>
            </div>
        </div>
    )
}