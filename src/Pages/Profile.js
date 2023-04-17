import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function Profile() {
  const { user } = useContext(DataContext);
  console.log(user);
  return (
    <div>
      <h2>Profile</h2>
      <img src={user?.img} height="50%" width="25%" alt="bookimage" />
      <h3>{user?.name}</h3>
      <p>
        <strong>BIO:</strong>
        {user?.bio}
      </p>
    </div>
  );
}
