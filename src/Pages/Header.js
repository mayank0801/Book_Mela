import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/dataContext";

export default function Header() {
  const { favoriteBook } = useContext(DataContext);
  return (
    <div>
      <h1>Book Mela</h1>
      <NavLink to="/">All Book</NavLink> ||{" "}
      <NavLink to="/favorite">favorites({favoriteBook.length})</NavLink> ||{" "}
      <NavLink to="/Read">Read</NavLink> ||{" "}
      <NavLink to="/profile">Profile</NavLink> ||{" "}
    </div>
  );
}
