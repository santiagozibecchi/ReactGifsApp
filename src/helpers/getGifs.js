// como es una funcion async significa que regresa promesa 
// que resuelve la coleccion de las imagenes

export const getGifs = async (category) => {

      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=YcxE5RflBmi947YFsSl6HqAMZ4JsJQ0l`;
      const resp = await fetch(url);
      const { data } = await resp.json();

      // mutamos el arreglo para que sea mas sencillo de leer
      // Regreso la info con las propiedades que me interesan
      const gifs = data.map(img => {
            return {
                  id: img.id,
                  title: img.title,
                  // Signo de interrogacion para preguntar si vienen las imagenes
                  // entonces lo ejecuta
                  url: img.images?.downsized_medium.url
            }

      })

      return gifs;
      // una vez que tengo las imagenes llamo el setImages
      // setImages(gifts);
}