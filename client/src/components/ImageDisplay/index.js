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

    const handleExitButtonClick = () => {
        const imageContainer = document.querySelector('.image-position');
        imageContainer.classList.toggle('is-hidden');
    }

    return (
        <div className='image-position is-hidden'>
            <button className='delete' onClick={handleExitButtonClick}></button>
            <div className='is-flex'>
            <div onClick={minusSlides}>
                    <a className='is-size-1'>{'<'}</a>
                </div>
                <div className='margin-half-rem'>
                    {imageLinks.map(imageLink => {
                        key++;
                        return (
                            <img className='images' key={key} src={imageLink} />
                        )
                    })}
                </div>
                <div onClick={plusSlides}>
                <a className='is-size-1'>{'>'}</a>
                </div>
            </div>
        </div>
    )
}