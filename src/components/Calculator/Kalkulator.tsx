import { useState } from "react";
import { Operacija, RezultatKalkulacije } from "../../types/Kalkulator";
import { izracunaj } from "./kalkulatorLogika";
import "./Kalkulator.css";

function Kalkulator() {
  const [brojA, setBrojA] = useState<number | "">("");
  const [brojB, setBrojB] = useState<number | "">("");
  const [rezultat, setRezultat] = useState<RezultatKalkulacije | null>(null);

  const handleIzracunaj = (operacija: Operacija) => {
    if (brojA === "" || brojB === "") {
      setRezultat({ vrednost: null, greska: "Molimo unesite oba broja." });
      return;
    }
    const res = izracunaj(Number(brojA), Number(brojB), operacija);
    setRezultat(res);
  };

  const handleResetuj = () => {
    setBrojA("");
    setBrojB("");
    setRezultat(null);
  };

  return (
    <div className="form-container">
      <h1>Kalkulator</h1>

      <div className="input-group">
        <label htmlFor="brojA">Broj A:</label>
        <input
          id="brojA"
          type="number"
          value={brojA}
          onChange={(e) =>
            setBrojA(e.target.value === "" ? "" : Number(e.target.value))
          }
          placeholder="Unesite broj"
        />
      </div>

      <div className="input-group">
        <label htmlFor="brojB">Broj B:</label>
        <input
          id="brojB"
          type="number"
          value={brojB}
          onChange={(e) =>
            setBrojB(e.target.value === "" ? "" : Number(e.target.value))
          }
          placeholder="Unesite broj"
        />
      </div>

      <div className="dugmad">
        <button onClick={() => handleIzracunaj("+")}>+</button>
        <button onClick={() => handleIzracunaj("-")}>−</button>
        <button onClick={() => handleIzracunaj("*")}>×</button>
        <button onClick={() => handleIzracunaj("/")}>÷</button>
      </div>

      {rezultat?.greska && <p className="greska">{rezultat.greska}</p>}

      {rezultat?.vrednost !== null && rezultat?.vrednost !== undefined && !rezultat.greska && (
        <p className="rezultat">Rezultat: {rezultat.vrednost}</p>
      )}

      <button className="resetuj" onClick={handleResetuj}>
        Resetuj
      </button>
    </div>
  );
}

export default Kalkulator;
