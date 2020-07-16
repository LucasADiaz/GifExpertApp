import React from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifts } from '../helpers/getGifts';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {


    //costumize Hook
    const {data:images, loading} = useFetchGifs(category);

   

    return (
        <>
        <h3 className="animated__animated animate_fadeIn"> {category} </h3>
        {loading && <p className="animated__animated animate_flash">loading</p>}
        <div className="card-grid">
                {
                    images.map((img) => {
                        return <GifGridItem 
                            key={img.id} 
                            {...img}
                        /> 
                    })
                }
        </div>
        </>
    )
}
