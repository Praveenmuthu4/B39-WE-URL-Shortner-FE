import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "./global";
import { Button, TextField } from "@mui/material";

export default function CreateLink() {
  const [url, setUrl] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      alert("please enter something");
      return;
    }

    axios
      .post(`${API}/api/url/shorten`, { longUrl: url })
      .then((res) => {
        res.data
      })
      .catch((err) => {
        console.log(err.message);
      });
    setUrl("");
  };

  return (
    <section>
      <h1>URL Shortener</h1>
      <form onSubmit={onSubmit}>
        <TextField
          type="text"
          placeholder="Enter you URL"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <div>
          <Button type="submit">Shorten!</Button>
        </div>
      </form>
    </section>
  );
}
