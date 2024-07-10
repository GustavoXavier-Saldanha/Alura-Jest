import { screen, render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { ListaPaticipantes } from "./ListaParticipantes";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

jest.mock("../state/hook/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

describe("uma lista vazia de participantes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaPaticipantes />
      </RecoilRoot>
    );
    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});

describe("uma lista preenchida de participantes", () => {
  const participantes = ["Lulu", "Gust"];

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test("deve ser renderizada com elementos", () => {
    render(
      <RecoilRoot>
        <ListaPaticipantes />
      </RecoilRoot>
    );
    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(participantes.length);
  });
});
