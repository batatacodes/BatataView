markdown

BatataView.js

BatataView.js é um mini framework JavaScript para visualizar sites via iframe de forma simples e dinâmica.

Como usar

`html
<script src="https://seuusuario.github.io/BatataView/batataview.js"></script>
<div id="meuPainel"></div>
<script>
  BatataView.addSite('https://example.com', 'meuPainel');
</script>
`

Recursos

- Visualização de sites via iframe
- Substituição automática da URL anterior
- Interface leve e responsiva

Aviso

Alguns sites bloqueiam visualização via iframe por segurança. Se o site não carregar, isso pode ser o motivo.

API

`js
BatataView.addSite(url, containerId)
`

- url: string com a URL do site (deve começar com http:// ou https://)
- containerId: string com o ID do elemento onde o iframe será inserido

Licença

MIT — pode usar, modificar e compartilhar.

Autor

Feito por BatataEstudante
