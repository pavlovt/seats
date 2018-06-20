export default {
	conf: {title: '', preTitle: '', postTitle: ''},
  // provide initial configuration if needed
	init(conf) {
		this.conf = _.assign({}, this.conf, conf)
	},
  // update the head section
	update(add) {
		const conf = _.assign({},  this.conf, add || {})

    this.set.title(conf)
    // this.set.meta(conf)
	},
  set: {
    title(conf) {
      // $('head title').remove()
      const title = conf.preTitle + conf.title + conf.postTitle;
      $('head title').html(title)
    },

    meta(conf) {
      // remove all meta tags first
      $('head meta').remove()

      let tags = [], tag = '', tmp
      _(conf).omit(['preTitle', 'title', 'postTitle', 'links']).forIn((val, key) => {
        tag = `<meta name="${key}"`
        if (_.isString(val)) tag += val
        // if val is object then all its' properties are attributes to the meta element
        else if (_.isPlainObject(val)) {
          tmp = ''
          _(val).forIn((v, k) => tmp =` ${k}="${v}"`)
          tag += tmp
        }

        tag += ' >'

        tags.push(tag)
      })
    }
  }
}