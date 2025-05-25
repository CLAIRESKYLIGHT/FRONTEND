const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function fetchBooks() {
  try {
    const res = await fetch(`${API_BASE}/api/books`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.status}`);
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching books:", error.message);
    throw error;
  }
}
