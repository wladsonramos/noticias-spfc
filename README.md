# Projeto de Scraping de Notícias do São Paulo Futebol Clube
Este projeto é um script simples em Node.js para realizar web scraping das notícias do São Paulo Futebol Clube no site Globo Esporte (ge.globo.com). Utiliza as bibliotecas axios para fazer requisições HTTP e cheerio para manipular e extrair dados do HTML retornado.

## Requisitos
Para rodar este projeto, você precisará ter o Node.js instalado em sua máquina. Além disso, precisará instalar as dependências do projeto.

## Configuração do Projeto
1. Clonar o repositório

```bash
$ git clone https://github.com/wladsonramos/noticias-spfc.git
```

2. Instalar dependências: Navegue até o diretório do projeto e execute

```bash
$ npm install
```

## Executando o Script
Para executar o script, utilize o comando:

```bash
$ node ./src/app.js
```

Ao rodar o script, ele fará uma requisição HTTP para a URL especificada, extrairá as notícias da página e imprimirá no console o texto e o link de cada notícia encontrada.
