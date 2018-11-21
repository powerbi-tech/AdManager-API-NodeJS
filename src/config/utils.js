import slug from 'slug'

slug.defaults.modes['pretty'] = {
  replacement: '_',
  symbols: true,
  remove: /[.]/g,
  lower: false,
  charmap: slug.charmap,
  multicharmap: slug.multicharmap,
}

console.log('Slugg initialized')
