(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{FJi0:function(e,t,a){"use strict";a.r(t);var r=a("KQm4"),n=a("q1tI"),l=a.n(n),i=a("Wbzz"),c=a("7oih"),o=a("1oc3"),m=function(e){var t=e.listOfArticles.filter((function(e){return e.childMarkdownRemark.frontmatter.order>=1}));return l.a.createElement(l.a.Fragment,null,t.map((function(e){var t=e.childMarkdownRemark,a=t.frontmatter,r=t.html,n=a.title,i=n?n.replace(/ /g,"_").toLowerCase():"";return l.a.createElement("article",{key:n},n&&l.a.createElement("h3",{id:i},n),l.a.createElement("section",{dangerouslySetInnerHTML:{__html:r}}))})))};t.default=function(){var e=Object(i.useStaticQuery)("165248251"),t=Object(r.a)(e.allFile.nodes);return l.a.createElement(c.a,null,l.a.createElement(o.a,{fluidImage:e.file.childImageSharp.fluid,imageAlt:"",tagLine:"News"}),l.a.createElement(m,{listOfArticles:t}))}}}]);
//# sourceMappingURL=component---src-pages-news-js-922f051349c46a3ed141.js.map