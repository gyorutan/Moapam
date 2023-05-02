'use client'

import React, { useState } from "react";
const API = process.env.SERVER_API;

function Create() {
  const [name, setName] = useState("");

  const createName = async (e) => {
    const formData = { name: name };
    e.preventDefault();
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={createName}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>저장</button>
      </form>
    </div>
  );
}

export default Create;
