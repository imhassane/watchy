export default function({ $axios }) {
    $axios.setHeader('Authorization', `Bearer ${process.env.TMDB_TOKEN}`);

    $axios.setBaseURL(process.env.API_BASE_URL);
}