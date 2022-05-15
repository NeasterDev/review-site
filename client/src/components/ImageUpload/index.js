import React from 'react';

export const ImageUpload = () => {

    //const imageForm = document.querySelector('.image-form');
    

    const handleImageUpload = async (e) => {
        e.preventDefault();

        const imageInput = document.querySelector('#image-input');

        const files = imageInput.files;
        console.log(files);

        const uploadUrlArray = await fetch(`/s3URL/${files.length}`).then(res => res.json());
        console.log(uploadUrlArray.url);

        for (let i = 0; i < uploadUrlArray.url.length; i++) {
            console.log(url);
            const url = uploadUrlArray.url[i];

            await fetch(url, {
                method: "PUT",
                header: {
                    "Content-Type": "multipart-form-data"
                },
                body: files[i]
            });
    
            const imageUrl = url.split('?')[0];
            console.log(imageUrl);
        }


    }

    return (
        <form className='image-form' onSubmit={handleImageUpload}>
            <input id="image-input" type="file" accepts="image/*" multiple></input>
            <button type='submit'>Upload</button>
        </form>
    )
}