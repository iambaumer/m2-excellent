module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Music and the Message',
  siteDescription:
    'Show notes for the God Games and Geekery podcast.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Alex Baum', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'alex@photobaumwi.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://photobaumwi.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#6FBA0D', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F4F4F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Shownotes for Music and the Message episodes of the God Games and Geekery podcast',
    description:
      'Music and the Message'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: '',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
