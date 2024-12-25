import React, { useEffect, useState } from "react";

const Memek = () => {
  const [counter, setcounter] = useState(0);
  const [check, setcheck] = useState("genap");
  const [kelamin, setkelamin] = useState("memek");
  const [action, setaction] = useState("ahh");
  const [foto, setfoto] = useState("thickmommy.jpg")
  const onTambah = () => {
    setcounter(counter + 1);
    console.log(counter);
  };
  useEffect(() => {
    if (counter % 2 == 0) {
      setcheck("genap");
      setkelamin("memek");
      setaction("ahh");
      setfoto("thickmommy.jpg");
    }
    if (counter % 2 == 1) {
      setcheck("ganjil");
      setkelamin("kontol");
      setaction("crot");
      setfoto("absurd.jpg");
    }
  }, [counter]);
  return (
    <div>
      <div>
        {kelamin} {counter} adalah {check} {action}
      </div>
      <div>
        <button onClick={onTambah}>tambah</button>
      </div>
      <img src={foto} style={{ height: "600px", width: "400px", objectFit: "contain" }} />
    </div>
  );
};

export default Memek;
