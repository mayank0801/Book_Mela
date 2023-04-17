import { useContext } from "react";
import BookCard from "../Component/BookCard";
import { DataContext } from "../context/dataContext";
const styleobj = {
  display: "inline-block",
  margin: "1rem",
  border: "1px solid black",
  padding: "0.75rem"
};
export default function Favorites() {
  const { favoriteBook } = useContext(DataContext);
  console.log("hvsdhasbdha", favoriteBook);
  return (
    <div>
      {favoriteBook &&
        favoriteBook.map((book) => (
          <article style={styleobj}>
            <BookCard book={book} />
          </article>
        ))}
    </div>
  );
}
