import axios from "axios"

const API = "https://www.googleapis.com/books/v1/volumes"

export const searchBooks = async (query) => {

  const res = await axios.get(API, {
    params: {
      q: query,
      maxResults: 20
    }
  })

  return res.data.items
}

export const getBook = async (id) => {

  const res = await axios.get(`${API}/${id}`)

  return res.data
}