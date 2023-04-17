import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function BookCard({ book }) {
  // console.log(book);

  const { id, image, title, author, publisher, read } = book;
  return (
    <div>
      <img src={image} height="200px" width="200px" alt="book" />
      <p>
        {id} {title}
      </p>
      <p>Author:{author}</p>
    </div>
  );
}
