import { useContext } from "react";
import BookCard from "../Component/BookCard";
import { DataContext } from "../context/dataContext";
const styleobj = {
  display: "inline-block",
  margin: "1rem",
  border: "1px solid black",
  padding: "0.75rem"
};

export default function Read() {
  const { bookData } = useContext(DataContext);
  console.log(bookData);
  const readBook = bookData && bookData.filter(({ read }) => read);
  return (
    <div>
      {bookData &&
        readBook.map((book) => (
          <article key={book.id} style={styleobj}>
            {book.read && <BookCard book={book} />}
          </article>
        ))}
    </div>
  );
}
