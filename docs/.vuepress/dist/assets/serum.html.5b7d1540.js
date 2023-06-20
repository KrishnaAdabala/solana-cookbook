import{_ as p,r as c,o as l,c as u,b as t,w as a,F as r,a as n,d as s}from"./app.55b1b60c.js";const i={},k=n("h1",{id:"serum",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#serum","aria-hidden":"true"},"#"),s(" Serum")],-1),d=n("p",null,"Serum \u0E04\u0E37\u0E2D protocol \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A decentralized exchanges \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19 Solana. \u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49 Serum \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07 markets, get order books, trade, \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E2D\u0E35\u0E01\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22",-1),b=n("h2",{id:"\u0E27\u0E34\u0E18\u0E35\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25-serum-market",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u0E27\u0E34\u0E18\u0E35\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25-serum-market","aria-hidden":"true"},"#"),s(" \u0E27\u0E34\u0E18\u0E35\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 Serum market")],-1),m=n("p",null,"market \u0E1A\u0E19 Serum \u0E08\u0E30\u0E21\u0E35 orders \u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 orders \u0E1A\u0E19 Serum \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E30\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E19 Serum \u0E40\u0E23\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32 market \u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E14\u0E49\u0E27\u0E22",-1),y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"confirmed"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s(`
    connection`),n("span",{class:"token punctuation"},","),s(`
    marketAddress`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    programAddress
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br")])],-1),w=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1),g=n("h2",{id:"\u0E27\u0E34\u0E18\u0E35\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25-serum-order-books",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u0E27\u0E34\u0E18\u0E35\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25-serum-order-books","aria-hidden":"true"},"#"),s(" \u0E27\u0E34\u0E18\u0E35\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 Serum order books")],-1),f=n("p",null,"Serum markets \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 order books \u0E17\u0E35\u0E48\u0E21\u0E35 bids \u0E41\u0E25\u0E30 asks. \u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E27\u0E01\u0E19\u0E35\u0E49\u0E44\u0E14\u0E49\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E23\u0E32\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32 market \u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E22\u0E31\u0E07\u0E44\u0E07 \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E43\u0E08\u0E27\u0E48\u0E32\u0E08\u0E30\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23\u0E15\u0E48\u0E2D\u0E44\u0E1B\u0E44\u0E14\u0E49",-1),h=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"confirmed"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" bids "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadBids"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" bids"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" asks "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadAsks"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" asks"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br")])],-1),_=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" bids "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadBids"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" bids"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"let"),s(" asks "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadAsks"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" asks"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1),v=n("h2",{id:"\u0E27\u0E34\u0E18\u0E35\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25-open-orders-\u0E43\u0E19\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u0E27\u0E34\u0E18\u0E35\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25-open-orders-\u0E43\u0E19\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19","aria-hidden":"true"},"#"),s(" \u0E27\u0E34\u0E18\u0E35\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 open orders \u0E43\u0E19\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19")],-1),x=n("p",null,"\u0E43\u0E19\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E02\u0E2D\u0E07 trader \u0E40\u0E23\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E39\u0E49 open orders \u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32\u0E1A\u0E19 market. \u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E04\u0E49\u0E19\u0E2B\u0E32 open orders \u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32\u0E40\u0E2D\u0E07 \u0E2B\u0E23\u0E37\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49\u0E14\u0E49\u0E27\u0E22 Serum.",-1),S=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" trader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"confirmed"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" orders "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadOrdersForOwner"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" trader"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" order "),n("span",{class:"token keyword"},"of"),s(" orders"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br")])],-1),A=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" orders "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadOrdersForOwner"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" traderPublicKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1);function P(F,M){const e=c("SolanaCodeGroupItem"),o=c("SolanaCodeGroup");return l(),u(r,null,[k,d,b,m,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[y]),preview:a(()=>[w]),_:1})]),_:1}),g,f,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[h]),preview:a(()=>[_]),_:1})]),_:1}),v,x,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[S]),preview:a(()=>[A]),_:1})]),_:1})],64)}var C=p(i,[["render",P]]);export{C as default};