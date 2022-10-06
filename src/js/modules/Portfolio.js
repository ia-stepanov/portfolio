import initialPortfolio from '../services/initialPortfolio.js';
let portfolio = initialPortfolio.reverse();

// HTML–Template for Portfolio
function portfolioTemplate({
  mixitup,
  img,
  title,
  subtitle,
  imgSource,
  titleSource,
  linkSource,
  linkWeb,
}) {
  return `
  <div class="portfolio__content ${mixitup}">
    <img src="${img}" alt="preview" />

    <div class="portfolio__link">
      <span class="portfolio__link-title">${title}</span>
      <p class="portfolio__link-subtitle">${subtitle}</p>

      <div class="portfolio__link-footer">
        <div class="portfolio__link-action">
          <img src="${imgSource}" alt="icon" />
          <a href="${linkSource}" target="_blank">${titleSource}</a>
        </div>
        ${
          linkWeb
            ? `
        <div class="portfolio__link-action">
          <img src="./icons/social/globe.svg" alt="icon" />
          <a href="${linkWeb}" target="_blank">Сайт</a>
        </div>`
            : ''
        }
      </div>
    </div>
  </div>
  `;
}

// Generate Portfolio
function generatePortfolio(portfolio) {
  const portfolioAll = document.querySelector('.portfolio__wrapper.all');
  const portfolioWeb = document.querySelector('.portfolio__wrapper.web');
  const portfolioDesign = document.querySelector('.portfolio__wrapper.design');

  let fragmentAll = '';
  let fragmentWeb = '';
  let fragmentDesign = '';

  portfolio.forEach((portfolioItem) => {
    if (portfolioItem.mixitup === 'mix web') {
      const el = portfolioTemplate(portfolioItem);
      fragmentWeb += el;
    }

    if (portfolioItem.mixitup === 'mix design') {
      const el = portfolioTemplate(portfolioItem);
      fragmentDesign += el;
    }

    const el = portfolioTemplate(portfolioItem);
    fragmentAll += el;
  });

  portfolioAll.insertAdjacentHTML('afterbegin', fragmentAll);
  portfolioWeb.insertAdjacentHTML('afterbegin', fragmentWeb);
  portfolioDesign.insertAdjacentHTML('afterbegin', fragmentDesign);
}

generatePortfolio(portfolio);
