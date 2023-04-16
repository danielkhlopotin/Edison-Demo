import React, { useEffect, useState } from "react";
import "./UserCard.css";
import { UserCardProps } from "./types";

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [showEmail, setShowEmail] = useState<boolean>(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowEmail(!showEmail);
  };

  const openGoogleSearch = () => {
    const searchQuery = encodeURIComponent(`${city}, ${country}`);
    window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
  };

  const {
    name: { first, last },
    location: { city, country },
    picture: { medium },
    registered,
    email,
  } = user;

  const formattedDate = new Date(registered.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="user-card" onClick={openGoogleSearch}>
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
        <button className="toggle-email" onClick={handleButtonClick}>
          Show Email
        </button>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default UserCard;
