const base = {
  name: 'Everything From Scratch',
  url: 'https://blog.absurdist.life',
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - Reinventing the wheel`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } - Personal Blog of Sayak Chatterjee`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'another blog floating in the internet',

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  /* time */
  timeOffset: '+00:00',
};

module.exports = config;
