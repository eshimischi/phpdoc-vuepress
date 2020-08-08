(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{371:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),s("ul",[s("li",[t._v("PHP >= 5.6")]),t._v(" "),s("li",[t._v("Node.js >= 8")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn"),s("OutboundLink")],1),t._v(" (or npm).")])]),t._v(" "),s("h3",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("phpDocumentor")]),t._v(": This template is designed for "),s("a",{attrs:{href:"https://github.com/phpDocumentor/phpDocumentor#phpdocumentor",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpDocumentor 2.x (2.9.1)"),s("OutboundLink")],1),t._v(", but may be compatible with upcoming "),s("strong",[t._v("phpDocumentor3")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("VuePress")]),t._v(": You can use the "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("version 1.x"),s("OutboundLink")],1),t._v(" by default, but you can also use "),s("a",{attrs:{href:"https://v0.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("version 0.x"),s("OutboundLink")],1),t._v(", depending on your configuration compatibility.")])]),t._v(" "),s("p",[t._v("You can globally install them:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# phpDocumentor2 globally")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" global require phpdocumentor/phpdocumentor:^2.9.0\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# VuePress")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D vuepress\n")])])]),s("blockquote",[s("p",[t._v("Read about "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress install"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("Install "),s("code",[t._v("nelson6e65/phpdoc-vuepress")]),t._v(" with composer:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require --dev nelson6e65/phpdoc-vuepress\n")])])]),s("blockquote",[s("p",[t._v("You may need to set the composer option "),s("a",{attrs:{href:"https://getcomposer.org/doc/04-schema.md#minimum-stability",target:"_blank",rel:"noopener noreferrer"}},[t._v("minimum-stability"),s("OutboundLink")],1),t._v(" to 'dev' in order to be able to install pre-releases.")])]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("First, you need to "),s("RouterLink",{attrs:{to:"/guide/configuration.html"}},[t._v("prepare your project to use phpDocumentor and VuePress to generate your API documentation")]),t._v(".")],1),t._v(" "),s("p",[t._v("After that, using that configuration you only need to generate the markdown pages from your code with "),s("strong",[t._v("phpDocumentor")]),t._v(" and then build your "),s("strong",[t._v("VuePress")]),t._v(" documentation:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ phpdoc "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This will use the `phpdoc.dist.xml` config file")]),t._v("\n\n$ vuepress build docs "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Where `docs/` is the directory you configured")]),t._v("\n")])])]),s("p",[t._v("Done! Your API documentation is live!")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If you already have a default "),s("RouterLink",{attrs:{to:"/guide/configuration.html#configuring-vuepress"}},[t._v("VuePress configuration")]),t._v(" and you want just quickly run phpDocumentor, you can use:")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("phpdoc -d"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/"')]),t._v(" -t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs/api/"')]),t._v(" --template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress"')]),t._v("\n")])])]),s("p",[t._v("This assumes:")]),t._v(" "),s("ul",[s("li",[t._v("PHP sources are in: "),s("code",[t._v("src/")]),t._v(",")]),t._v(" "),s("li",[t._v("VuePress documentation is located in "),s("code",[t._v("docs/")]),t._v(",")]),t._v(" "),s("li",[t._v("VuePress will use "),s("code",[t._v("/api")]),t._v(" route for the API documentation and sidebar is (/will be) configured with the files generated by phpDocumentor.")])]),t._v(" "),s("p",[t._v("Please, check the "),s("RouterLink",{attrs:{to:"/guide/configuration.html"}},[t._v("Configuration page")]),t._v(" for examples and guides instead.")],1)]),t._v(" "),s("h2",{attrs:{id:"recommendations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommendations"}},[t._v("#")]),t._v(" Recommendations")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Do not track the API route directory with Git")]),t._v(". This files are auto-generated with the "),s("code",[t._v("phpdoc")]),t._v(" tool, so there is not need to track them. Add to your "),s("code",[t._v(".gitignore")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Autogenerated API documentation")]),t._v("\ndocs/api/\n")])])]),s("ul",[s("li",[s("strong",[t._v("Restrict visibility to protected members")]),t._v(". By default, all members are parsed. So, you need to config "),s("code",[t._v("--visibility")]),t._v(" to ignore "),s("code",[t._v("private")]),t._v(" methods:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("phpdoc --visibility"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"public,protected"')]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Only Public and Protected members are parsed --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("visibility")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("public,protected"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("visibility")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);