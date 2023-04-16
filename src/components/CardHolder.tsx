import React, { useEffect, useState, useRef, useCallback } from "react";
import UserCard from "./UserCard";
import "./CardHolder.css";
import { ApiResponse, Result } from "./types";

const CardHolder: React.FC = () => {
  const [cards, setCards] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const fetchUsers = async (count: number) => {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data: ApiResponse = await response.json();
    return data.results;
  };

  const loadMoreCards = async () => {
    setLoading(true);
    const newUsers = await fetchUsers(5);
    setCards((prevCards) => [...prevCards, ...newUsers]);
    setLoading(false);
  };

  const lastCardRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCards();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    loadMoreCards();
  }, []);

  return (
    <div className="card-holder">
      {cards.map((card, index) => (
        <div
          key={card.email}
          ref={index === cards.length - 1 ? lastCardRef : null}
        >
          <UserCard user={card} />
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default CardHolder;
