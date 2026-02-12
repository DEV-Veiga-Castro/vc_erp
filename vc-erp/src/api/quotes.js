import axios from "axios";

const quote_api_URL = 'https://motivational-spark-api.vercel.app/api/quotes'
const translate_api_URL = 'https://sites-libretranslate.cvumn9.easypanel.host/translate'

async function translateQuote() {
    try {
        const quote_respose = await axios.get(quote_api_URL + "/random")
        const response = await axios.post(translate_api_URL + "?source=en&target=pt-BR&q=" + quote_respose.data.quote)

        return {
            quote: response.data.translatedText,
            author: quote_respose.data.author,
        }
    } catch (error) {
        console.log(error)
    }
}

export default translateQuote
