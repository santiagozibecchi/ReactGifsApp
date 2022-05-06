import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

      // La coleccion por defecto es un arreglo vacio
      // const [images, setImages] = useState([]);

      const { data: images, loading } = useFetchGifs(category);

      // como primer parametro recibe una funcion que es la que quiero ejecutar
      // El segundo argumento que le mandamos es un arreglo de dependencias
      // si mandamos un arreglo vacio significa que se va a disparar una unica vez

      // useEffect(() => {
            // Como retorna una promesa:
            // getGifs(category).then(imgs => setImages(imgs));
            // getGifs(category)
                  // Como tenemos una funcion que su primer argumento es
                  // mandado como primer argumento a la funcio que esta adentro de setImages, es lo mismo que mandar solamente:
                  // .then(setImages);
      // }, [ category ])
      // Si la categoria cambia entonces se vuelve a disparar el efecto (peticion)
      // La peticion fetch se ejecuta una unica vez por categoria



      return (
            <>
                  <h3 className='animate__animated animate__heartBeat'>{category}</h3>

                  {loading && <p className='animate__animated animate__flash'>Loading</p> }

                  <div className='card-grid'>
                        {
                              images.map(img => (

                                    <GifGridItem
                                          key={img.id}
                                          // Se manda cada una de las propiedades de las imagenes 
                                          // como una propiedad independiente
                                          {...img}
                                    />

                              ))
                        }
                  </div> 
            </>
      )
}

export default GifGrid;