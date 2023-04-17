import { useContext } from "react";
import BookCard from "../Component/BookCard";
import { DataContext } from "../context/dataContext";
import { Link } from "react-router-dom";

const styleobj = {
  display: "inline-block",
  margin: "1rem",
  border: "1px solid black",
  padding: "0.75rem"
};

export default function Home() {
  const { bookData } = useContext(DataContext);
  const { handleRead, handleFav, favoriteBook } = useContext(DataContext);
  // console.log("book data", bookData);

  function isFavoriteFind(booktofind) {
    const isFavorite =
      favoriteBook && favoriteBook.find((book) => book.id === booktofind.id);
    return isFavorite;
  }

  return (
    <div>
      <h1>ALL BOOOKS</h1>
      {bookData &&
        bookData.map((book) => (
          <article key={book.id} style={styleobj}>
            <BookCard book={book} />
            <button onClick={() => handleRead(book.id)} disabled={book.read}>
              {book.read ? "Already Readed" : "Mark as Read"}
            </button>
            {!isFavoriteFind(book) && (
              <button onClick={() => handleFav(book)}>Add to Favorite</button>
            )}
            {isFavoriteFind(book) && (
              <button>
                <Link
                  to="/favorite"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Go To Favorite
                </Link>
              </button>
            )}
          </article>
        ))}
    </div>
  );
}
