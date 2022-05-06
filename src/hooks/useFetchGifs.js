import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

      const [state, setState] = useState({
            data: [],
            // cuando se utilize por primera vez el useFetchGifs
            // tendremos este estado que va a estar cargando por defecto
            loading: true
      });

      // Para que solo se dispare cuando cambia la categoria
      useEffect(()=> {

            getGifs( category )
                  .then(imgs => setState({
                        data: imgs,
                        loading: false
                  }))

      }, [category]) 



      return state;


}
