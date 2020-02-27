import React, { useState, useEffect } from "react";

const Fuck = () => {
  const [name, setName] = useState("Siamak");
  const [family, setFamily] = useState("Motlagh");

  useEffect(() => {
    console.log(1);
  }, [name]);

  const changeName = () => {
    if (name === "Siamak") {
      setName("Atefeh");
    } else {
      setName("Siamak");
    }
  };

  const changeFamily = () => {
    if (family === "Haghgoo") {
      setFamily("Motlagh");
    } else {
      setFamily("Haghgoo");
    }
  };

  return (
    <>
      <div onClick={() => changeName()}>{name}</div>
      <div onClick={() => changeFamily()}>{family}</div>
    </>
  )
}

export default Fuck;
