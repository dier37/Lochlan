import axios from 'axios';  


export const FETCH_PICTURES = 'fetch_pictures';

const KEY = 'AIzaSyC9kgE5uPVt4NC5yhH1jAwCspHPsv2meYM';


//https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&///photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGS//c3FyhNLlBU&key=AIzaSyC9kgE5uPVt4NC5yhH1jAwCspHPsv2meYM

const ROOT_URL = 'https://s3.amazonaws.com/lochs-images/IMG-20170828-WA0001.jpg'; //`https://maps.googleapis.com/maps/api/place/photo?key=${KEY}&` // 'https://s3.amazonaws.com/lochs-images/IMG-20170828-WA0001.jpg'


export function fetchPictures (tag) {
    //use tag later to pull pictures
    const url = ROOT_URL;
    const request = axios.get(url);


    return {
        type: FETCH_PICTURES,
        payload: request
    };
}

