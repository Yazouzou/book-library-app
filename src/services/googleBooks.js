const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

// Search books by keyword
export const searchBooks = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${query}`);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

// Get book details by ID
export const getBookById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching book details:", error);
    return null;
  }
};