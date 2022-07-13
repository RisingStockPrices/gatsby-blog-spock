import CMS from 'netlify-cms-app';

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
      repo: RisingStockPrices/gatsby-blog,
      branch: main
    },
  },
});
