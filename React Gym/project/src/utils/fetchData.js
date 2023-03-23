export const exerciseOptions = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D',
        headers: {
            'X-RapidAPI-Key': '7f32c107cdmsh51608a8f8ed7c92p1daa97jsn35e41eec97fa',
            'X-RapidAPI-Host': process.env.REACt_APP_RAPID_API_KEY
        }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}