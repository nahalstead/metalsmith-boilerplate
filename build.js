const metalsmith = require('metalsmith');
const drafts = require('metalsmith-drafts');
const markdown = require('metalsmith-markdown');
const collections = require('metalsmith-collections');
const permalinks = require('metalsmith-permalinks');
const layouts = require('metalsmith-layouts');
const sitemap = require('metalsmith-sitemap');
const Handlebars = require('handlebars');
const moment = require('moment');
var images = require('metalsmith-project-images');

Handlebars.registerHelper('is', function (value, test, options) {
    if (value === test) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('date', function (date) {
    return moment(date, "MM-DD-YYYY").format('YYYY');
});

metalsmith(__dirname)
    .metadata({
        site: {
            name: 'Nick Halstead',
            description: "Photography by Nick Antony Halstead",
            sitetitle: 'Nick Halstead',
            generatorname: "Metalsmith",
            generatorurl: "http://metalsmith.io/",
            generatortitle: "Check out Metalsmith!",
            hostname: "Netlify",
            hosturl: "https://netlify.com/",
            hosttitle: "Learn more about Netlify"
        }
    })
    .source('./src')
    .destination('./dist')
    .clean(true)
    .use(images({
        pattern: 'projects/**/*.md',
        imagesDirectory: 'images'
    }))
    .use(drafts())
    .use(collections({
        posts: {
            pattern: 'posts/*.md',
            sortBy: 'date',
            reverse: true
        },
        pages: {
            pattern: '*.md',
            sortBy: 'menu-order',
            limit: 50
        },
        projects: {
            pattern: 'projects/*.md',
            sortBy: 'date', 
            reverse: false,
            refer: true
        }
    }))
    .use(markdown())
    .use(permalinks())
    .use(layouts({
        engine: 'handlebars',
        directory: 'layouts',
        default: 'default.hbs',
        partials: 'layouts/partials'
    }))
    .use(sitemap({
        hostname: "https://www.nickhalstead.co.uk"
    }))
    .build(function (err) {
        if (err) throw err;
    });
