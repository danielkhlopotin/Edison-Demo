import React, { useEffect, useState } from "react";
import "./UserCard.css";

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  city: string;
  country: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Registered {
  date: string;
  age: number;
}

interface Result {
  name: Name;
  location: Location;
  picture: Picture;
  registered: Registered;
  email: string;
}

interface ApiResponse {
  results: Result[];
}

const UserCard: React.FC = () => {
  const [userData, setUserData] = useState<Result | null>(null);
  const [showEmail, setShowEmail] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUserData(data.results[0]);
    };
    fetchData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  const {
    name: { first, last },
    location: { city, country },
    picture: { medium },
    registered,
    email,
  } = userData;

  const formattedDate = new Date(registered.date).toLocaleString();

  return (
    <div className="user-card">
      <div className="user-card-left">
        <div className="img-left">
          <img src={medium} alt={`${first} ${last}`} className="user-image" />
        </div>
        <div className="info-left">
          <h2>{`${first} ${last}`}</h2>
          <p>{showEmail ? email : `${city}, ${country}`}</p>
        </div>
      </div>
      <div className="user-card-right">
        <button
          className="toggle-email"
          onClick={() => setShowEmail(!showEmail)}
        >
          Toggle Email
        </button>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default UserCard;
