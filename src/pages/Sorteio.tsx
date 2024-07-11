import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

export const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  return (
    <section>
      <form action="">
        <select name="participanteAtual" id="participanteAtual">
          {participantes.map((part) => (
            <option key={part}>{part}</option>
          ))}
        </select>
      </form>
    </section>
  );
};
