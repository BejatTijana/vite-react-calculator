import { Operacija, RezultatKalkulacije } from "../../types/Kalkulator";

export function izracunaj(
  brojA: number,
  brojB: number,
  operacija: Operacija
): RezultatKalkulacije {
  if (operacija === "/" && brojB === 0) {
    return { vrednost: null, greska: "Dijeljenje s nulom nije moguće." };
  }

  let vrednost: number;

  switch (operacija) {
    case "+":
      vrednost = brojA + brojB;
      break;
    case "-":
      vrednost = brojA - brojB;
      break;
    case "*":
      vrednost = brojA * brojB;
      break;
    case "/":
      vrednost = brojA / brojB;
      break;
  }

  return { vrednost: vrednost!, greska: null };
}
