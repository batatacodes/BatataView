// BatataView.js — Framework público para visualizar sites via iframe
(function(global){
  const BatataView = {
    /**
     * Exibe um site dentro de um container específico
     * @param {string} url - URL do site a ser exibido
     * @param {string} containerId - ID do elemento onde o iframe será inserido
     */
    addSite(url, containerId) {
      if (!url.startsWith('http')) {
        console.warn('URL inválida. Use http:// ou https://');
        return;
      }

      const container = document.getElementById(containerId);
      if (!container) {
        console.warn(`Elemento com id "${containerId}" não encontrado.`);
        return;
      }

      container.innerHTML = ''; // remove iframe anterior

      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.style.width = '100%';
      iframe.style.height = '300px';
      iframe.style.border = '1px solid #ccc';
      iframe.loading = 'lazy';

      container.appendChild(iframe);
    }
  };

  global.BatataView = BatataView;
})(window);
