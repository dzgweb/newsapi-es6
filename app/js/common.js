import {NewsApi} from './api';
import {renderSources} from './sources';

const newCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const sourcesContainer = document.querySelector('#news-sources');

let htmlSelectCategories = `
  <select class="form-control sel-cat" id="cat_val" name="cat-select">
    ${newCategories.reduce((allOpt, opt) => allOpt + `<option value="${opt}">${opt}</option>`,
  `<option value="0">Select news category:</option>`)}
  </select>`;

document.getElementById('news-categories').innerHTML = htmlSelectCategories;

document.querySelector('.sel-cat').addEventListener('change', e => {
  let selectedCategory = e.target.value;

  async function getSource(){
    let sources = await NewsApi.getSourcesOnCategory(selectedCategory);
    renderSources(sourcesContainer, sources);
  }
  getSource();
});

