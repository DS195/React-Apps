import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
        headers:{
            Authorization: 
                'Client-ID OXTYCWfxJ8v8-j-Yr8MoX4osf4LDjLZobciJsDxDiNU'
    
    }
});