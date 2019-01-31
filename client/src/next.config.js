module.exports = {
  exportPathMap: function exportPathMap() {
    return {
      '/': { page: '/' },
      '/news': { page: '/' },
      '/bookmarklet': { page: '/bookmarklet' },
      '/item': { page: '/item' },
      '/jobs': { page: '/jobs' },
      '/login': { page: '/login' },
      '/newest': { page: '/newest' }
    };
  }
};
