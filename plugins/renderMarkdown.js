import markdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';
import hljs from 'highlight.js';
import fs from 'fs';

export default defineNuxtPlugin((app) => {
  return {
    provide: {
      renderMarkdown(fileName) {
        let md = new markdownIt({
          highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return hljs.highlight(str, { language: lang }).value;
              } catch (_) {}
            }
            return ''; // use external default escaping
          }
        }).use(mdContainer);

        return md.render(fs.readFileSync(fileName, 'utf8'));
      }
    }
  }
})