import React from 'react'

const GifGridItem = (props) => {

      // Tambien puede  desestrucutarar las props para leer mejor, quedaria:
      // ({id, title, url})

      return (
            <div className='card animate__animated animate__fadeIn'>
                  <img src={props.url} alt={props.title} />
                  <p>{props.title}</p>
            </div>
      )
}

export default GifGridItem