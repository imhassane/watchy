export default function({ $axios, redirect }) {
    $axios.onError((error) => {
        const code = parseInt(error.response && error.response.status);
        if(code === 404)
            redirect('/not-found');
    })

    $axios.setHeader('Authorization', `Bearer ${process.env.TMDB_TOKEN}`);

    $axios.setBaseURL(process.env.API_BASE_URL);
}