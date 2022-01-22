<div id='robandit'>
	&lt;script&gt;
	//&lt;![CDATA[
	const robandit = {
cImage: function(e) {
let t = e,
    r = t.indexOf(&quot;&lt;img&quot;),
    l = t.indexOf(&#39;src=&quot;&#39;, r),
    n = t.indexOf(&#39;&quot;&#39;, l + 5),
    s = t.substr(l + 5, n - l - 5);
return -1 != r &amp;&amp; -1 != l &amp;&amp; -1 != n &amp;&amp; &quot;&quot; != s ? s : this.noImage
},
compile: function() {
document.querySelector(&quot;#robandit ul&quot;).innerHTML = &quot;&quot;;
const e = this;
let t = new Array(0),
    r = new Array(0),
    l = new Array(0),
    n = new Array(0);
const s = e.setArr.urls,
    i = e.setArr.title,
    a = e.setArr.image;
for (let A = 0; A &lt; e.setArr.urls.length; A++) e.contains(t, s[A]) || (t.length += 1, t[t.length - 1] = s[A], r.length += 1, r[r.length - 1] = i[A], l.length += 1, l[l.length - 1] = a[A], n.length += 1);
e.setArr.urls = s, e.setArr.title = i, e.setArr.image = a;
for (let t = 0; t &lt; e.setArr.title.length; t++) {
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
for (; A &lt; e.jumlah;) {
    if (e.setArr.urls[u] != h) {
	const t = document.createElement(&quot;li&quot;);
	if (t.innerHTML = `
	&lt;div class=&quot;robandit-otx&quot;&gt;
	&lt;div class=&quot;thumb&quot;&gt;
	&lt;a href=&quot;${e.setArr.urls[u]}&quot; title=&quot;${e.setArr.title[u]}&quot;&gt;
	&lt;img src=&quot;${e.setArr.image[u]}&quot; alt=&quot;${e.setArr.title[u]}&quot;&gt;
	&lt;/a&gt;&lt;/div&gt;
	&lt;div class=&quot;robandit-ocn&quot;&gt;
	&lt;h2&gt;&lt;a class=&quot;judul&quot; href=&quot;${e.setArr.urls[u]}&quot; title=&quot;${e.setArr.title[u]}&quot;&gt;${e.setArr.title[u]}&lt;/a&gt;&lt;/h2&gt;
	&lt;/div&gt;
	&lt;br/&gt;
	    <b:loop index='i' values='data:post.labels' var='label'>
      <a expr:href='data:label.url' rel='tag'>
	<data:label.name/>
      </a>
    </b:loop>
	&lt;div class=&quot;atribut-trailer&quot;&gt;&lt;h2&gt;&lt;a href=&quot;http://www.youtube.com/results?search_query=${e.setArr.title[u]}&quot; target=&quot;_blank&quot;&gt;Trailer&lt;/a&gt;&lt;/h2&gt;&lt;/div&gt;
	&lt;div class=&quot;atribut-movie&quot;&gt;&lt;h2&gt;&lt;a href=&quot;${e.setArr.urls[u]}&quot; title=&quot;${e.setArr.title[u]}&quot; rel=&quot;nofollow&quot;&gt;Nonton Movie&lt;/a&gt;&lt;/h2&gt;&lt;/div&gt;
	&lt;/div&gt;
	`, document.querySelector(&quot;#robandit ul&quot;).appendChild(t), A++, A == e.jumlah) break
    }
    if (u &lt; e.setArr.title.length - 1 ? u++ : u = 0, u == o) break
}
},
contains: function(e, t) {
for (let r = 0; r &lt; e.length; r++) {
    const l = e[r];
    if (l == t) return !0
}
return !1
},
set: function(e) {
const t = this;
if (&quot;entry&quot; in e.feed)
    for (let r = 0; r &lt; e.feed.entry.length; r++) {
	const l = e.feed.entry[r];
	t.setArr.title[t.setArr.rel] = l.title.$t, t.setArr.urls[t.setArr.rel] = l.link.find(e =&gt; &quot;alternate&quot; == e.rel).href, t.setArr.image[t.setArr.rel] = &quot;media$thumbnail&quot; in l ? l.media$thumbnail.url.match(/\/s[0-9]{2}-(w[0-9]+-)?c/) ? l.media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/, &quot;/w200-h150-p-k-no-nu&quot;) : l.media$thumbnail.url.replace(/\=s[0-9]{2}-(w[0-9]+-)?c/, &quot;=w200-h150-p-k-no-nu&quot;) : &quot;content&quot; in l ? t.cImage(l.content.$t) : t.noImage, t.setArr.rel++
    }
},
setArr: {
title: new Array,
urls: new Array,
image: new Array,
rel: 0
}
};
robandit.jumlah = 5;
robandit.noImage = &#39;https://i.imgur.com/NIDHEwU.png&#39;;
       //]]&gt;&lt;/script&gt;
       <b:if cond='data:post.labels'>
       <b:loop values='data:post.labels' var='label'>
       <script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=robandit.set&amp;max-results=10&quot;'/>
       </b:loop>
       <ul>
       <script>robandit.compile();</script>
	</ul>
       <b:else/>
       Gagal Index, Maaf
       </b:if>
       </div>
