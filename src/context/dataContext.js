import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../Api/fakeFetch";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [bookData, setBookData] = useState(null);
  const [user, setUser] = useState(null);
  const [favoriteBook, setFavoriteBook] = useState([]);

  function handleRead(idToOperate) {
    setBookData(
      bookData.map((book) => ({
        ...book,
        read: book.id === idToOperate ? !book.read : book.read
      }))
    );
  }
  function handleFav(book) {
    console.log("added to favorite", book.title);
    setFavoriteBook([...favoriteBook, book]);
  }

  const getBookData = async () => {
    try {
      const {
        status,
        data: { books, user }
      } = await fakeFetch("https://example.com/api/books");
      if (status === 200) {
        setBookData(books);
        setUser(user);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getBookData();
  }, []);
  return (
    <div>
      <DataContext.Provider
        value={{ bookData, user, handleRead, handleFav, favoriteBook }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
}
