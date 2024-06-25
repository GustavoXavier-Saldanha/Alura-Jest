import "./estilos.css";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <div className="imagem-logo" aria-label="Logo do Sorteador"></div>
      <img
        alt="Participante com um presente na mão"
        className="participante"
        src="/imagens/participante.png"
      />
    </header>
  );
};

export default Cabecalho;
