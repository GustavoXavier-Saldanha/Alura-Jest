import { useState } from "react";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";

export const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  const [participanteVez, setParticipanteVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteVez)) {
      setAmigoSecreto(resultado.get(participanteVez)!);
    }
  };

  return (
    <section>
      <form action="" onSubmit={sortear}>
        <select
          required
          name="participanteAtual"
          id="participanteAtual"
          data-testid="select-sort"
          value={participanteVez}
          onChange={(e) => setParticipanteVez(e.target.value)}>
          {participantes.map((part) => (
            <option key={part}>{part}</option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {amigoSecreto && (
        <p className="resultado" role="alert" data-testid="amigo-secreto">
          {amigoSecreto}
        </p>
      )}
    </section>
  );
};
