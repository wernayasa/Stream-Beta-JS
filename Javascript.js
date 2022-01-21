const robandit = {
	cImage: function(e) {
		let t = e,
			r = t.indexOf("<img"),
			l = t.indexOf('src="', r),
			n = t.indexOf('"', l + 5),
			s = t.substr(l + 5, n - l - 5);
		return -1 != r && -1 != l && -1 != n && "" != s ? s : this.noImage
	},
	compile: function() {
		document.querySelector("#robandit ul").innerHTML = "";
		const e = this;
		let t = new Array(0),
			r = new Array(0),
			l = new Array(0),
			n = new Array(0);
		const s = e.setArr.urls,
			i = e.setArr.title,
			a = e.setArr.image;
		for (let A = 0; A < e.setArr.urls.length; A++) e.contains(t, s[A]) || (t.length += 1, t[t.length - 1] = s[A], r.length += 1, r[r.length - 1] = i[A], l.length += 1, l[l.length - 1] = a[A], n.length += 1);
		e.setArr.urls = s, e.setArr.title = i, e.setArr.image = a;
		for (let t = 0; t < e.setArr.title.length; t++) {
			let r = Math.floor((e.setArr.title.length - 1) * Math.random()),
				l = e.setArr.title[t],
				n = e.setArr.urls[t],
				s = e.setArr.image[t];
			e.setArr.title[t] = e.setArr.title[r], e.setArr.urls[t] = e.setArr.urls[r], e.setArr.image[t] = e.setArr.image[r], e.setArr.title[r] = l, e.setArr.urls[r] = n, e.setArr.image[r] = s
		}
		let A = 0,
			u = Math.floor((e.setArr.title.length - 1) * Math.random()),
			o = u,
			h = document.URL;
		for (; A < e.jumlah;) {
			if (e.setArr.urls[u] != h) {
				const t = document.createElement("li");
				if (t.innerHTML = `<div class="thumb">
                <a href="${e.setArr.urls[u]}" title="${e.setArr.title[u]}">
                <img src="${e.setArr.image[u]}" alt="${e.setArr.title[u]}">
                </a></div>
                <a class="judul" href="${e.setArr.urls[u]}" title="${e.setArr.title[u]}">${e.setArr.title[u]}</a>
                <br/>
                <a class="atribut-trailer" href="http://www.youtube.com/results?search_query=${e.setArr.title[u]}" target="_blank">Trailer</a>
                <a class="atribut-movie" href="${e.setArr.urls[u]}" title="${e.setArr.title[u]}" rel="nofollow">Movie</a>
                `, document.querySelector("#robandit ul").appendChild(t), A++, A == e.jumlah) break
			}
			if (u < e.setArr.title.length - 1 ? u++ : u = 0, u == o) break
		}
	},
	contains: function(e, t) {
		for (let r = 0; r < e.length; r++) {
			const l = e[r];
			if (l == t) return !0
		}
		return !1
	},
	set: function(e) {
		const t = this;
		if ("entry" in e.feed)
			for (let r = 0; r < e.feed.entry.length; r++) {
				const l = e.feed.entry[r];
				t.setArr.title[t.setArr.rel] = l.title.$t, t.setArr.urls[t.setArr.rel] = l.link.find(e => "alternate" == e.rel).href, t.setArr.image[t.setArr.rel] = "media$thumbnail" in l ? l.media$thumbnail.url.match(/\/s[0-9]{2}-(w[0-9]+-)?c/) ? l.media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/, "/w200-h150-p-k-no-nu") : l.media$thumbnail.url.replace(/\=s[0-9]{2}-(w[0-9]+-)?c/, "=w200-h150-p-k-no-nu") : "content" in l ? t.cImage(l.content.$t) : t.noImage, t.setArr.rel++
			}
	},
	setArr: {
		title: new Array,
		urls: new Array,
		image: new Array,
		rel: 0
	}
};
robandit.jumlah = 10;
robandit.noImage = 'https://i.imgur.com/NIDHEwU.png';
