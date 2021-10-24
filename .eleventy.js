const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const {decode} = require('html-entities');

module.exports = function(eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  // eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Alias `layout: post` to `layout: layouts/post.njk`
  // eleventyConfig.addLayoutAlias("example", "layouts/example.html");

  eleventyConfig.addFilter("stringify", (csvString) => {
    if (!Array.isArray(csvString)) {
      return '[]';
    }
    return JSON.stringify(csvString);
  });

  eleventyConfig.addFilter("add_link_to_flems", (content, title, flems, version) => {

    let flemsLinksArray = [
      {
        name: 'mithril ' + version,
        type: 'script',
        url: 'https://unpkg.com/mithril@' + version
      }
    ];

    if (!Array.isArray(flems)) {
      flems = ['.css', '.ts', '.js'];
    }

    const languages = [
      {
        type: 'html',
        name: '.html',
        openTag: '<code class="language-html">',
        closeTag: '</code>',
        filenameRegex: /<!-- (.+?\.html) -->/s
      },
      {
        type: 'css',
        name: '.css',
        openTag: '<code class="language-css">',
        closeTag: '</code>',
        filenameRegex: /\/\* (.+?\.css) \*\//s
      },
      {
        type: 'ts',
        name: '.ts',
        openTag: '<code class="language-ts">',
        closeTag: '</code>',
        filenameRegex: /\/\/ (.+?\.ts)/s
      },
      {
        type: 'js',
        name: '.js',
        openTag: '<code class="language-js">',
        closeTag: '</code>',
        filenameRegex: /\/\/ (.+?\.js)/s
      },
    ]

    const matches = content.match(/<code class="language-(.+?)">(.*?)<\/code>/sg);

    if (!Array.isArray(matches)) {
      return content;
    }

    let flemsFilesArray = [];
    let fileNames = [];
    for (let match of matches) {
      for (let language of languages) {
        let openTagLength = language.openTag.length;

        if (match.substr(0, openTagLength) !== language.openTag) {
          continue;
        }

        if (fileNames.includes(language.name)) {
          continue;
        }

        let flemsName = language.name;
        let flemsContent = decode(match.substr(openTagLength, match.length - openTagLength - language.closeTag.length));
        let firstLine = flemsContent.split('\n')[0];
        let nameMatch = firstLine.match(language.filenameRegex);

        if (nameMatch && nameMatch[1]) {
          flemsName = nameMatch[1];
        }

        if (!flems.includes(flemsName)) {
          continue;
        }

        flemsFilesArray.push({
          name: flemsName,
          content: flemsContent
        });

        fileNames.push(flemsName);
      }
    }

    if (flemsFilesArray.length === 0) {
      return content;
    }

    const flemsFiles = JSON.stringify(flemsFilesArray);
    const flemsLinks = JSON.stringify(flemsLinksArray);

    let html = `
      <div class="modal-container">
        <label for="modal" class="example-label">Show Live Example in Flems</label>
        <label for="modal" class="modal-background"></label>
        <input type="checkbox" id="modal">
        <div class="modal">
          <div class="modal-header">
            <h3>${title}</h3>
            <label for="modal">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC" width="16" height="16" alt="">
            </label>
          </div>
          <div id="flems" class="modal-body"></div>
        </div>
      </div>
      <script>
      Flems(document.getElementById("flems"), {
        selected: '.js',
        files: ${flemsFiles},
        links: ${flemsLinks}
      });
      </script>
    `;

    return content + html;
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter("filterTagList", filterTagList)

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  eleventyConfig.addCollection('examplesLatest', collection => {
    return collection
      .getFilteredByGlob('./examples/*.md')
      .sort(function(a, b) {
        if (a.data.date > b.data.date) return -1;
        else if (a.data.date < b.data.date) return 1;
        else return 0;
      });
  });

  eleventyConfig.addCollection('examples', collection => {
    return collection
      .getFilteredByGlob('./examples/*.md')
      .sort(function(a, b) {
        let nameA = a.data.title.toUpperCase();
        let nameB = b.data.title.toUpperCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
      });
  });

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy(".htaccess");

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
    }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "direct-link",
      symbol: "#",
      level: [1,2,3,4],
    }),
    slugify: eleventyConfig.getFilter("slug")
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // Opt-out of pre-processing global data JSON files: (default: `liquid`)
    dataTemplateEngine: false,

    // These are all optional (defaults are shown):
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
