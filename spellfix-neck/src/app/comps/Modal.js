"use client";
import { getSynonyms } from "@/api/pop";
import { useEffect, useState } from "react";

const Modal = ({ word }) => {
  const [synonyms, setSynonyms] = useState([]);

  useEffect(() => {
    const fetchSynonyms = async () => {
      try {
        const synonyms = await getSynonyms(word);
        setSynonyms(synonyms);
      } catch (error) {
        console.error("Error fetching synonyms:", error);
      }
    };

    fetchSynonyms();
  }, [word]);

  return (
    <div>
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>{word}의 유의어</h2>
        <ul id="modalWordsList">
          {synonyms.map((synonym, index) => (
            <li key={index}>{synonym}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
