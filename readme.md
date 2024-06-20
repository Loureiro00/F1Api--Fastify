# Fastify F1 API

Este projeto é uma API simples construída com Fastify que fornece informações sobre equipes e pilotos de Fórmula 1.

## Endpoints

### `GET /teams`

Retorna uma lista de todas as equipes de F1.

**Resposta Exemplo:**

```json
{
  "teams": [
    {
      "id": 1,
      "name": "redbull",
      "base": "Milton Keynes, United Kingdom",
      "TeamChief": "Christian Horner",
      "PowerUnit": "Honda"
    },
    {
      "id": 2,
      "name": "ferrari",
      "base": "Maranello, Italy",
      "TeamChief": "Frédéric Vasseur",
      "PowerUnit": "Ferrari"
    },
    ...
  ]
}
```

### `GET /drivers`

Retorna uma lista de todos os pilotos de F1, incluindo o nome da equipe e a unidade de potência.

**Resposta Exemplo:**

```js

[
  {
    "id": 1,
    "name": "Max Verstappen",
    "team": "redbull",
    "powerUnit": "Honda"
  },
  {
    "id": 2,
    "name": "Charles Leclerc",
    "team": "ferrari",
    "powerUnit": "Ferrari"
  },
  ...
]

```

### `GET /drivers/:id`

Retorna as informações de um piloto específico por ID, incluindo o nome da equipe e a unidade de potência.

**Parâmetros de URL:**

* `id` - O ID do piloto.

**Resposta Exemplo:**

```json

{
  "id": 1,
  "name": "Max Verstappen",
  "team": "redbull",
  "powerUnit": "Honda"
}
```

**Erro Exemplo:**

```json
{
  "error": "O corredor com id informado não foi encontrado"
}
```

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Loureiro00/F1Api--Fastify.git
   ```

   2. Instale as dependências:

      ```bash
      cd seu-repositorio
      npm install

      ```
   3. Execute o servidor:

      ```bash
      npm  run start:watch
      ```



## Tecnologias Utilizadas

* [Fastify](https://www.fastify.io/)
* [TypeScript](https://www.typescriptlang.org/)




## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
