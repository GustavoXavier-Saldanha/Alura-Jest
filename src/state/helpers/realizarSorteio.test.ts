import { realizarSorteio } from "./realizarSorteio";

describe("realizando sorteio amigo secreto", () => {
    test("nao deve ser possivel retirar o proprio nome", () => {
    const participantes = ["joao", "maria", "pedro", "gust"];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigo = sorteio.get(participante);

      expect(amigo).not.toEqual(participante);
    });
  });
});
