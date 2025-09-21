// Define uma interface chamada IDados, que funciona como um "contrato" de tipagem.
// Serve para garantir que todos os objetos sigam o mesmo formato.
export interface IDados {
  id: string           // Identificador único do disco (ex: "disco-1").
  banda: string        // Nome da banda/artista.
  album: string        // Nome do álbum.
  ano: number          // Ano de lançamento do álbum.
  musicas: number      // Quantidade de músicas no álbum.
  user: {              // Objeto representando o usuário associado ao disco.
    name: string       // Nome do usuário.
    disponivel: boolean // Indica se o usuário está disponível (true/false).
  }
}

// Cria uma constante chamada dados, que é um array de objetos do tipo IDados.
// Cada objeto dentro do array representa um disco com suas informações.
export const dados: IDados[] = [
  {
    id: "disco-1",
    banda: "ACDC",
    album: "Back in Black",
    ano: 1980,
    musicas: 10,
    user: {
      name: "Lázaro",
      disponivel: true
    }
  },
  {
    id: "disco-2",
    banda: "The Beatles",
    album: "Abbey Road",
    ano: 1969,
    musicas: 17,
    user: {
      name: "Lázaro",
      disponivel: false
    }
  },
  {
    id: "disco-3",
    banda: "Iron Maiden",
    album: "The Number of the Beast",
    ano: 1982,
    musicas: 8,
    user: {
      name: "Marcelo",
      disponivel: true
    }
  },
  {
    id: "disco-4",
    banda: "Michael Jackson",
    album: "Thriller",
    ano: 1982,
    musicas: 9,
    user: {
      name: "Lázaro",
      disponivel: true
    }
  },
  {
    id: "disco-5",
    banda: "Queen",
    album: "A Night at the Opera",
    ano: 1975,
    musicas: 12,
    user: {
      name: "Lázaro",
      disponivel: false
    }
  }
];
