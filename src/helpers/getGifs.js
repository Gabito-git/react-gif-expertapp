export const getGifs = async( category )=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )  }&limit=10&api_key=JhHDwmH9SWIYwCdxqcUChXBz5Dc6KLQp`;
    
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img =>{

        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url                 // EL signo de interrogación es preguntando si vienen imágenes
        }

    } );    
    
    return gifs;
}