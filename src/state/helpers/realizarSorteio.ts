import shuffle from "just-shuffle";

export function realizarSorteio(participantes: string[]) {
  
      const participantesLen = participantes.length;
      const embaralhado = shuffle(participantes);
      const resultado = new Map<string, string>();
  
      for (let i = 0; i < participantesLen; i++) {
        const iAmigo = i === participantesLen - 1 ? 0 : i + 1;
        resultado.set(embaralhado[i], embaralhado[iAmigo]);
      }
 
      return resultado
  };