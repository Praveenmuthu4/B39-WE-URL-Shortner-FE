import React, { useEffect, useState } from "react";
import { API } from "./global";

export default function ResultLink() {
  const [shortUrl, setShortUrl] = useState([]);

  const fetchshortUrl = () => {
    fetch(`${API}/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShortUrl(data);
      });
  };

  useEffect(() => {
    fetchshortUrl();
  }, []);

  return (
    <div>
      {shortUrl.length > 0 && (
        <ol>
          {shortUrl.map((short) => (
            <li key={short._id}>{short.shortUrl}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
