(this["webpackJsonpsimple-form"]=this["webpackJsonpsimple-form"]||[]).push([[0],{118:function(e,a,t){e.exports={Add:"MaterialLayer_Add__RvqSN",Row__New:"MaterialLayer_Row__New__3KOXp",Row__Responsive:"MaterialLayer_Row__Responsive__1glj_",Title:"MaterialLayer_Title__1ycLJ"}},230:function(e,a,t){e.exports={RadioGroup:"RadioButtons_RadioGroup__16YkP",RadioItem:"RadioButtons_RadioItem__C54Rg"}},232:function(e,a,t){e.exports={App:"AppWrapper_App__3hFsG",Container:"AppWrapper_Container__pf_EW"}},233:function(e,a,t){e.exports={Summary:"Summary_Summary__3_ifK",Summary__Success:"Summary_Summary__Success__2-_NB"}},325:function(e,a,t){e.exports={Select:"CustomSelect_Select__3vCKS"}},347:function(e,a,t){e.exports=t(713)},60:function(e,a,t){e.exports={Result:"Result_Result__lQnIf",Result__Positive:"Result_Result__Positive__1uUQ6",Content:"Result_Content__1glBb",Result__Negative:"Result_Result__Negative__3Y3Wu",Value:"Result_Value__mpvYu",Appear:"Result_Appear__5Cc5s",Appear__Active:"Result_Appear__Active__SC7eP"}},712:function(e,a,t){},713:function(e,a,t){"use strict";t.r(a);t(348),t(357);var n,i,o,r,c,l,s,u,E,p,d,m,O,A=t(0),_=t.n(A),I=t(18),v=t.n(I),R=(t(203),t(117)),g=t(341),T=(t(154),t(23)),L=(t(204),t(28)),b=(t(205),t(54)),y=t(87),w=t(2),j=(t(225),t(85)),N=t(718),M=Object.freeze({ASPHALT:"asphalt",CONCRETE:"concrete",CERAMICS:"ceramics",TILES:"tiles",WOOD:"wood",GASES:"gases",GYPSUM:"gypsum",LAND:"land",STONE:"stone",TERMOIZOLATION:"termoizolation",METAL:"metal",FELT:"felt",FLOORING:"flooring",PLASTER:"plaster",BACKFILL:"backfill"}),z=(n={},Object(w.a)(n,M.ASPHALT,{description:"Asfalty",examples:[{description:"Asfalt lany (g\u0119sto\u015b\u0107 1800)",value:.75},{description:"Asfaltobeton (g\u0119sto\u015b\u0107 2100)",value:1}]}),Object(w.a)(n,M.CONCRETE,{description:"Beton zwyk\u0142y i przegrody z betonu",examples:[{description:"\u017belbet (g\u0119sto\u015b\u0107 2500)",value:1.7},{description:"Beton zwyk\u0142y z kruszywa kamiennego (g\u0119sto\u015b\u0107 2200)",value:1.3},{description:"Beton z kruszywa wapiennego (g\u0119sto\u015b\u0107 1600)",value:.72},{description:"Beton z \u017cu\u017cla pumeksowego (g\u0119sto\u015b\u0107 1600)",value:.54},{description:"Beton z \u017cu\u017cla paleniskowego (g\u0119sto\u015b\u0107 1600)",value:.72},{description:"Beton z kruszywa keramzytowego (g\u0119sto\u015b\u0107 1600)",value:.9},{description:"Wi\xf3robeton i wi\xf3rotrocinobeton (g\u0119sto\u015b\u0107 1000)",value:.3},{description:"Wi\xf3robeton i wi\xf3rotrocinobeton (g\u0119sto\u015b\u0107 600)",value:.17},{description:"Mur z betonu kom\xf3rkowego na cienkowarstwowej zaprawie klej\u0105cej (g\u0119sto\u015b\u0107 800)",value:.29},{description:"Mur z betonu kom\xf3rkowego na cienkowarstwowej zaprawie klej\u0105cej (g\u0119sto\u015b\u0107 500)",value:.17},{description:"Mur z betonu kom\xf3rkowego na zaprawie cementowo-wapiennej o grubo\u015bci 1,5 cm (g\u0119sto\u015b\u0107 800)",value:.38},{description:"Mur z betonu kom\xf3rkowego na zaprawie cementowo-wapiennej o grubo\u015bci 1,5 cm (g\u0119sto\u015b\u0107 500)",value:.25},{description:"Mur z pustak\xf3w \u017cu\u017clobetonowych ALFA,KONTRA (g\u0119sto\u015b\u0107 1100)",value:.63}]}),Object(w.a)(n,M.CERAMICS,{description:"Ceramika budowlana  i przegrody z ceramiki budowlanej",examples:[{description:"Mur z ceg\u0142y ceramicznej pe\u0142nej (g\u0119sto\u015b\u0107 1800)",value:.77},{description:"Mur z ceg\u0142y dziurawki (g\u0119sto\u015b\u0107 1400)",value:.62},{description:"Mur z ceg\u0142y krat\xf3wki (g\u0119sto\u015b\u0107 1300)",value:.56},{description:"Mur z ceg\u0142y klinkierowej (g\u0119sto\u015b\u0107 1900)",value:1.05},{description:"Mur z ceg\u0142y silikatowej pe\u0142nej (g\u0119sto\u015b\u0107 1900)",value:1},{description:"Mur z ceg\u0142y silikatowej dr\u0105\u017conej i z blok\xf3w dr\u0105\u017conych (g\u0119sto\u015b\u0107 1600)",value:.8},{description:"Mur z pustak\xf3w ceramicznych MAX (g\u0119sto\u015b\u0107 1100)",value:.44},{description:"Mur z pustak\xf3w ceramicznych UNI (g\u0119sto\u015b\u0107 1100)",value:.48},{description:"Mur z pustak\xf3w ceramicznych SZ (g\u0119sto\u015b\u0107 1000)",value:.45},{description:"Mur z pustak\xf3w ceramicznych M-44 (g\u0119sto\u015b\u0107 1070)",value:.6},{description:"Mur z pustak\xf3w porotherm 11P+W (g\u0119sto\u015b\u0107 800)",value:.359},{description:"Mur z pustak\xf3w porotherm 18P+W (g\u0119sto\u015b\u0107 800)",value:.453},{description:"Mur z pustak\xf3w porotherm 25P+W (g\u0119sto\u015b\u0107 800)",value:.377},{description:"Mur z pustak\xf3w porotherm 30P+W (g\u0119sto\u015b\u0107 800)",value:.231},{description:"Mur z pustak\xf3w porotherm 38P+W (g\u0119sto\u015b\u0107 800)",value:.167},{description:"Mur z pustak\xf3w porotherm 44P+W (g\u0119sto\u015b\u0107 800)",value:.169},{description:"Mur z pustak\xf3w porotherm 50P+W (g\u0119sto\u015b\u0107 800)",value:.18}]}),Object(w.a)(n,M.TILES,{description:"Dach\xf3wki",examples:[{description:"Ceramiczne (g\u0119sto\u015b\u0107 2000)",value:1},{description:"Cementowe (g\u0119sto\u015b\u0107 2100)",value:1.5}]}),Object(w.a)(n,M.WOOD,{description:"Drewno i materia\u0142y drewnopochodne",examples:[{description:"D\u0105b \u2013 w poprzek w\u0142\xf3kien (g\u0119sto\u015b\u0107 800)",value:.22},{description:"D\u0105b \u2013 wzd\u0142u\u017c w\u0142\xf3kien (g\u0119sto\u015b\u0107 800)",value:.4},{description:"Sosna i \u015bwierk \u2013 w poprzek w\u0142\xf3kien (g\u0119sto\u015b\u0107 550)",value:.16},{description:"Sosna i \u015bwierk \u2013 wzd\u0142u\u017c w\u0142\xf3kien (g\u0119sto\u015b\u0107 550)",value:.3},{description:"Sklejka",value:.16},{description:"P\u0142yta OSB (g\u0119sto\u015b\u0107 650)",value:.13},{description:"P\u0142yta pil\u015bniowa (g\u0119sto\u015b\u0107 600)",value:.14},{description:"P\u0142yta wi\xf3rowo-cementowa (g\u0119sto\u015b\u0107 1200)",value:.23},{description:"P\u0142yta wi\xf3rowa (g\u0119sto\u015b\u0107 600)",value:.14}]}),Object(w.a)(n,M.GASES,{description:"Gazy",examples:[{description:"Powietrze (g\u0119sto\u015b\u0107 1,23)",value:.025}]}),Object(w.a)(n,M.GYPSUM,{description:"Gips, wyroby zabezpieczone przed zawilgoceniem",examples:[{description:"Gips (g\u0119sto\u015b\u0107 600)",value:.18},{description:"Gips (g\u0119sto\u015b\u0107 1500)",value:.56},{description:"P\u0142yty i bloki z gipsu (g\u0119sto\u015b\u0107 1000)",value:.35},{description:"Gipsobeton piaskowy (g\u0119sto\u015b\u0107 1300)",value:.52},{description:"Gazogips (g\u0119sto\u015b\u0107 500)",value:.19},{description:"P\u0142yty gipsowo-kartonowe (g\u0119sto\u015b\u0107 900)",value:.23}]}),Object(w.a)(n,M.LAND,{description:"Grunty",examples:[{description:"Glina (g\u0119sto\u015b\u0107 1800)",value:.85},{description:"Glina piaszczysta (g\u0119sto\u015b\u0107 1800)",value:.7},{description:"Glina lub i\u0142 (g\u0119sto\u015b\u0107 1800)",value:1.5},{description:"Piasek \u015bredni (g\u0119sto\u015b\u0107 1800)",value:.4},{description:"Piasek i \u017cwir (g\u0119sto\u015b\u0107 1700)",value:2},{description:"\u017bwir (g\u0119sto\u015b\u0107 1800)",value:.9}]}),Object(w.a)(n,M.STONE,{description:"Kamienie naturalne",examples:[{description:"Piaskowiec (g\u0119sto\u015b\u0107 2400)",value:2.2},{description:"Wapie\u0144 twardy (g\u0119sto\u015b\u0107 2200)",value:1.7},{description:"Granit (g\u0119sto\u015b\u0107 2500)",value:3.5},{description:"Bazalt (g\u0119sto\u015b\u0107 2700)",value:3.5},{description:"Pumeks naturalny (g\u0119sto\u015b\u0107 400)",value:.12},{description:"Mur z kamienia \u0142amanego z zawarto\u015bci\u0105 zaprawy 35% obj\u0119to\u015bciowo przy zawarto\u015bci kamienia 2800 kg/m3",value:2.55}]}),Object(w.a)(n,M.TERMOIZOLATION,{description:"Materia\u0142y termoizolacyjne",examples:[{description:"P\u0142yty korkowe ekspandowane (g\u0119sto\u015b\u0107 150)",value:.045},{description:"P\u0142yty korkowe asfaltowane (g\u0119sto\u015b\u0107 250)",value:.07},{description:"P\u0142yty ze s\u0142omy (g\u0119sto\u015b\u0107 300)",value:.08},{description:"P\u0142yty z trzciny (g\u0119sto\u015b\u0107 250)",value:.07},{description:"Szk\u0142o piankowe bia\u0142e (g\u0119sto\u015b\u0107 300)",value:.12},{description:"Szk\u0142o piankowe czarne (g\u0119sto\u015b\u0107 180)",value:.07},{description:"Maty z w\u0142\xf3kna szklanego (g\u0119sto\u015b\u0107 100)",value:.045},{description:"We\u0142na mineralna luzem w \u015bcianach (g\u0119sto\u015b\u0107 60)",value:.043},{description:"We\u0142na mineralna luzem w stropach (g\u0119sto\u015b\u0107 60)",value:.052},{description:"We\u0142na mineralna granulowana (g\u0119sto\u015b\u0107 60)",value:.05},{description:"Maty i p\u0142yty w we\u0142ny mineralnej (g\u0119sto\u015b\u0107 100)",value:.042},{description:"We\u0142na mineralna FASROCK MAX (g\u0119sto\u015b\u0107 100)",value:.038},{description:"We\u0142na mineralna STROPROCK (g\u0119sto\u015b\u0107 160)",value:.042},{description:"We\u0142na mineralna DACHROCK (g\u0119sto\u015b\u0107 150)",value:.041},{description:"Styropian ekspandowany EPS (g\u0119sto\u015b\u0107 30)",value:.034},{description:"Styropian ekstrudowany XPS (g\u0119sto\u015b\u0107 10)",value:.045},{description:"Styropian ekstrudowany XPS (g\u0119sto\u015b\u0107 20)",value:.042},{description:"Styropian ekstrudowany XPS (g\u0119sto\u015b\u0107 40)",value:.04},{description:"Pianka poliuretanowa \u2013 w szczelnej os\u0142onie (g\u0119sto\u015b\u0107 40)",value:.025},{description:"Pianka poliuretanowa \u2013 w pozosta\u0142ych przypadkach (g\u0119sto\u015b\u0107 40)",value:.035},{description:"W\u0142\xf3knina syntetyczna (g\u0119sto\u015b\u0107 100)",value:.045},{description:"Granulat ekofiber (celulozowy) (g\u0119sto\u015b\u0107 32)",value:.039}]}),Object(w.a)(n,M.METAL,{description:"Metale",examples:[{description:"Stal budowlana (g\u0119sto\u015b\u0107 7800)",value:58}]}),Object(w.a)(n,M.FELT,{description:"Papa",examples:[{description:"Papa asfaltowa (1000)",value:.18}]}),Object(w.a)(n,M.FLOORING,{description:"Posadzki i wyk\u0142adziny pod\u0142ogowe",examples:[{description:"Wyk\u0142adzina pod\u0142ogowa PCV (g\u0119sto\u015b\u0107 1300)",value:.2},{description:"Wyk\u0142adzina dywanowa (g\u0119sto\u015b\u0107 200)",value:.06},{description:"P\u0142ytki ok\u0142adzinowe ceramicznie, terrakota (g\u0119sto\u015b\u0107 1000)",value:1.05}]}),Object(w.a)(n,M.PLASTER,{description:"Tynki i zaprawy tynkarskie",examples:[{description:"Tynk gipsowy (g\u0119sto\u015b\u0107 1000)",value:.4},{description:"Tynk gipsowy (g\u0119sto\u015b\u0107 1300)",value:.57},{description:"Tynk gipsowo-piaskowy (g\u0119sto\u015b\u0107 1600)",value:.8},{description:"Tynk lub g\u0142ad\u017a cementowo-wapienna (g\u0119sto\u015b\u0107 1850)",value:.82},{description:"Tynk wapienny (g\u0119sto\u015b\u0107 1700)",value:.7},{description:"Tynk wapienno-piaskowy (g\u0119sto\u015b\u0107 1600)",value:.8}]}),Object(w.a)(n,M.BACKFILL,{description:"Zasypki",examples:[{description:"\u017bu\u017cel paleniskowy (g\u0119sto\u015b\u0107 1000)",value:.28},{description:"\u017bu\u017cel wielkopiecowy granulowany, keramzyt (g\u0119sto\u015b\u0107 900)",value:.26},{description:"Wi\xf3ry drzewne luzem (g\u0119sto\u015b\u0107 150)",value:.07},{description:"Wi\xf3ry drzewne ubijane (g\u0119sto\u015b\u0107 300)",value:.09}]}),n),S=Object.freeze({WHITE_POLISTYREN:"whitePolistyren",GRAFITE_POLISTYREN:"grafitePolistyren",HARD_POLISTYREN:"hardPolistyren",WOOL:"wool",FOAM:"foam",GRANULATE:"granulate"}),C=(i={},Object(w.a)(i,S.WHITE_POLISTYREN,{description:"Styropian bia\u0142y",from:36,to:45,defaultValue:40}),Object(w.a)(i,S.GRAFITE_POLISTYREN,{description:"Styropian grafitowy",from:30,to:36,defaultValue:33}),Object(w.a)(i,S.HARD_POLISTYREN,{description:"Styropian twardy",from:28,to:42,defaultValue:35}),Object(w.a)(i,S.WOOL,{description:"We\u0142na mineralna",from:30,to:45,defaultValue:38}),Object(w.a)(i,S.FOAM,{description:"Pianka poliuretanowa",from:22,to:40,defaultValue:30}),Object(w.a)(i,S.GRANULATE,{description:"Granulat ocieplenia (w\u0142\xf3knocelulowa, we\u0142na mineralna)",from:36,to:55,defaultValue:39}),i),f={minimal:{xs:3,sm:2,md:2,lg:1,xl:1,xxl:1},short:{xs:21,sm:10,md:10,lg:7,xl:7,xxl:7},default:{xs:24,sm:12,md:12,lg:8,xl:8,xxl:8},double:{xs:24,sm:24,md:24,lg:16,xl:16,xxl:16},full:{span:24},summaryColumn:{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12}},k={layout:"vertical",hideRequiredMark:!0},P={gutter:{xs:16,sm:16,md:24,lg:32,xl:32,xxl:32}},D=Object.freeze({BEFORE1983:"before1983",F1983T1991:"1983-1991",F1992T1998:"1992-1998",AFTER1998:"after1998"}),F=Object.freeze({BUILDING_YEAR:"buildingYear",MODERNIZATION_ITEM:"modernizationItem",PREVIOUS_WARMED:"previosWarmed",SELF_BEFORE_CALC:"selfBeforeCalc",PREV_IZOLATION_TYPE:"prevIzolationType",PREV_IZOLATION_WIDTH:"prevIzolationWidth",MATERIAL_LAYERS:"materialLayers",MATERIAL_CATEGORY:"existingLayer",MATERIAL_CATEGORY_SPECIFIC:"existingLayerSpecific",MATERIAL_CATEGORY_WIDTH:"existingLayerWidth",PLANED_MATERIAL:"planedMaterial",PLANED_LAMBDA:"planedLambda",REQUIRED_IZOLATION:"requiredIzolation",BEFORE_WARMING_U:"beforeWarmingU",RESULT:"result"}),W=(o={},Object(w.a)(o,F.BUILDING_YEAR,"Rok uzyskania pozwolenia na budow\u0119"),Object(w.a)(o,F.PREVIOUS_WARMED,"Czy przegroda posiada ju\u017c istniejace ocieplenie?"),Object(w.a)(o,F.SELF_BEFORE_CALC,"Spos\xf3b wyliczenia grubo\u015bci ocieplenia"),Object(w.a)(o,F.MODERNIZATION_ITEM,"Rodzaj modernizowanej przegrody"),Object(w.a)(o,F.PREV_IZOLATION_TYPE,"Rodzaj istniej\u0105cego ocieplenia"),Object(w.a)(o,F.PREV_IZOLATION_WIDTH,"Grubo\u015b\u0107 istniej\u0105cego ocieplenia [cm]"),Object(w.a)(o,F.REQUIRED_IZOLATION,"Warto\u015b\u0107 po ociepleniu zgodnie z WT 2021"),Object(w.a)(o,F.MATERIAL_LAYERS,"Warstwa materia\u0142u"),Object(w.a)(o,F.MATERIAL_CATEGORY,"Kategoria materia\u0142u"),Object(w.a)(o,F.MATERIAL_CATEGORY_SPECIFIC,"Rodzaj materia\u0142u"),Object(w.a)(o,F.MATERIAL_CATEGORY_WIDTH,"Grubo\u015b\u0107 materia\u0142u [cm]"),Object(w.a)(o,F.BEFORE_WARMING_U,"Warto\u015b\u0107 przed ociepleniem"),Object(w.a)(o,F.PLANED_MATERIAL,"Rodzaj planowanego ocieplenia"),Object(w.a)(o,F.PLANED_LAMBDA,"Warto\u015b\u0107 lambda planowanego ocieplenia (\u03bb)"),Object(w.a)(o,F.RESULT,"Wynik oblicze\u0144"),o),Y={min:1,max:50,step:.5,unit:"cm"},h={min:.02,max:.06,step:.001},G=Object.freeze({SIDE_WALLS:"sideWalls",ROOF:"roof",CEILING_ATTIC:"ceilingAttic",FLOOR:"floor",CEILING_BASEMENT:"ceilingBasement"}),x=(r={},Object(w.a)(r,G.SIDE_WALLS,"\u015aciany zewn\u0119trzne / przegrody pionowe"),Object(w.a)(r,G.ROOF,"Dach lub stropodach"),Object(w.a)(r,G.CEILING_ATTIC,"Strop pod nieogrzewanym poddaszem"),Object(w.a)(r,G.FLOOR,"Pod\u0142oga na gruncie"),Object(w.a)(r,G.CEILING_BASEMENT,"Strop nad nieogrzewan\u0105 piwnic\u0105"),r),B=(c={},Object(w.a)(c,G.SIDE_WALLS,.2),Object(w.a)(c,G.ROOF,.15),Object(w.a)(c,G.CEILING_ATTIC,.15),Object(w.a)(c,G.FLOOR,.3),Object(w.a)(c,G.CEILING_BASEMENT,.25),c),U=(p={},Object(w.a)(p,D.BEFORE1983,{description:"Przed 1983r.",avarageU:(l={},Object(w.a)(l,G.SIDE_WALLS,1.1),Object(w.a)(l,G.ROOF,.7),Object(w.a)(l,G.CEILING_ATTIC,.9),Object(w.a)(l,G.FLOOR,.8),Object(w.a)(l,G.CEILING_BASEMENT,.8),l)}),Object(w.a)(p,D.F1983T1991,{description:"1983-1991",avarageU:(s={},Object(w.a)(s,G.SIDE_WALLS,.75),Object(w.a)(s,G.ROOF,.45),Object(w.a)(s,G.CEILING_ATTIC,.4),Object(w.a)(s,G.FLOOR,.8),Object(w.a)(s,G.CEILING_BASEMENT,.8),s)}),Object(w.a)(p,D.F1992T1998,{description:"1992-1998",avarageU:(u={},Object(w.a)(u,G.SIDE_WALLS,.6),Object(w.a)(u,G.ROOF,.3),Object(w.a)(u,G.CEILING_ATTIC,.3),Object(w.a)(u,G.FLOOR,.7),Object(w.a)(u,G.CEILING_BASEMENT,.7),u)}),Object(w.a)(p,D.AFTER1998,{description:"Po 1998r.",avarageU:(E={},Object(w.a)(E,G.SIDE_WALLS,.5),Object(w.a)(E,G.ROOF,.3),Object(w.a)(E,G.CEILING_ATTIC,.3),Object(w.a)(E,G.FLOOR,.6),Object(w.a)(E,G.CEILING_BASEMENT,.6),E)}),p),V=t(21),Z=t(715),H=t(3),K=t.n(H).a,q=function(e){return!!e[F.MODERNIZATION_ITEM]&&(e[F.SELF_BEFORE_CALC]===ue.AUTOMATICALLY?!!e[F.BUILDING_YEAR]&&(e[F.PREVIOUS_WARMED]!==ce.YES||e[F.PREV_IZOLATION_TYPE]&&e[F.PREV_IZOLATION_WIDTH]):Q(e[F.MATERIAL_LAYERS]))},Q=function(e){return e&&e.length>0&&!e.some((function(e){return!(e&&e[F.MATERIAL_CATEGORY]&&void 0!==e[F.MATERIAL_CATEGORY_SPECIFIC]&&e[F.MATERIAL_CATEGORY_WIDTH])}))},X=function(e){var a=e[F.BUILDING_YEAR],t=e[F.PREVIOUS_WARMED],n=e[F.SELF_BEFORE_CALC],i=e[F.MODERNIZATION_ITEM],o=e[F.PREV_IZOLATION_TYPE],r=e[F.PREV_IZOLATION_WIDTH],c=e[F.MATERIAL_LAYERS];return n===ue.BY_MYSELF?1/($(c)+.04+.13):t===ce.YES?1/(ee(r,C[o].defaultValue/1e3)+1/U[a].avarageU[i]):U[a].avarageU[i]},J=function(e){var a=e[F.PLANED_LAMBDA],t=e[F.MODERNIZATION_ITEM],n=X(e);return a*(1/B[t]-1/n)*100},$=function(e){return e.reduce((function(e,a){var t=a[F.MATERIAL_CATEGORY],n=a[F.MATERIAL_CATEGORY_SPECIFIC],i=a[F.MATERIAL_CATEGORY_WIDTH];return e+ee(i,z[t].examples[n].value)}),0)},ee=function(e,a){return e/100/a},ae=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.position,n=void 0===t?0:t;return n<0?parseFloat(e.toFixed(-n)):Math.round(e/Math.pow(10,n))*Math.pow(10,n)},te=t(324),ne=(t(551),t(231)),ie=t(230),oe=t.n(ie),re=function(e){var a=e.className,t=e.values,n=e.valuesMap,i=Object(V.a)(e,["className","values","valuesMap"]);return _.a.createElement(ne.default.Group,Object.assign({buttonStyle:"solid",className:K(oe.a.RadioGroup,a)},i),Object.keys(t).map((function(e){return _.a.createElement(ne.default.Button,{className:oe.a.RadioItem,value:e,key:e},n[e])})))},ce=Object.freeze({YES:"YES",NO:"NO"}),le=(d={},Object(w.a)(d,ce.YES,"TAK"),Object(w.a)(d,ce.NO,"NIE"),d),se=function(e){var a=e.className,t=Object(V.a)(e,["className"]);return _.a.createElement(re,Object.assign({className:a,values:ce,valuesMap:le},t))},ue=Object.freeze({BY_MYSELF:"BY_MYSELF",AUTOMATICALLY:"AUTOMATICALLY"}),Ee=(m={},Object(w.a)(m,ue.BY_MYSELF,"Samodzielnie"),Object(w.a)(m,ue.AUTOMATICALLY,"Automatycznie"),m),pe=function(e){var a=e.className,t=Object(V.a)(e,["className"]);return _.a.createElement(re,Object.assign({className:a,values:ue,valuesMap:Ee},t))},de=function(e){var a,t=e[F.BUILDING_YEAR],n=e[F.PREVIOUS_WARMED],i=e[F.SELF_BEFORE_CALC],o=e[F.PREV_IZOLATION_TYPE],r=e[F.PREV_IZOLATION_WIDTH],c=e[F.MATERIAL_LAYERS],l=e[F.MODERNIZATION_ITEM],s=e[F.PLANED_LAMBDA],u=e[F.PLANED_MATERIAL],E=n===ce.YES?"".concat(W[F.PREV_IZOLATION_TYPE],": ").concat(C[o].description,"\n    ").concat(W[F.PREV_IZOLATION_WIDTH],": ").concat(r," ").concat(Y.unit,"\n    "):"",p=i===ue.BY_MYSELF?"".concat(c.map((function(e,a){return"\n          Przegroda ".concat(a+1,".\n          ").concat(W[F.MATERIAL_CATEGORY],": ").concat(z[e.existingLayer].description,"\n          ").concat(W[F.MATERIAL_CATEGORY_SPECIFIC],": ").concat(z[e.existingLayer].examples[e.existingLayerSpecific].description,"\n          ").concat(W[F.MATERIAL_CATEGORY_WIDTH],": ").concat(e.existingLayerWidth," ").concat(Y.unit,"\n        ")})).join("")):"",d=i===ue.AUTOMATICALLY?"\n    Obliczenie wsp\xf3\u0142czynnika U przed ociepleniem dla przegrody:\n    ".concat(W[F.BUILDING_YEAR],": ").concat(U[t].description,"\n    ").concat(W[F.PREVIOUS_WARMED]," ").concat(le[n],"\n    ").concat(E):"",m=(a=J(e))>0?"Minimalna wymagana grubo\u015b\u0107 ocieplenia: ".concat(Math.ceil(a)," ").concat(Y.unit):"Przegroda nie wymaga docieplenia",O="otherMaterial"===u?"Inny":C[u].description;return"".concat(W[F.MODERNIZATION_ITEM],": ").concat(x[l],"\n    ").concat(W[F.SELF_BEFORE_CALC],": ").concat(Ee[i],"\n    ").concat(d).concat(p,"\n    Wyliczone warto\u015bci wsp\xf3\u0142czynnik\xf3w U [W/m2K]:\n    ").concat(W[F.REQUIRED_IZOLATION],": ").concat(B[l],"\n    ").concat(W[F.BEFORE_WARMING_U],": ").concat(ae(X(e),{position:-3}),"\n    \n    ").concat(W[F.PLANED_MATERIAL],": ").concat(O,"\n    ").concat(W[F.PLANED_LAMBDA],": ").concat(s,"\n\n    ").concat(W[F.RESULT],"\n    ").concat(m,"\n    ").replace(/  +/g,"")},me=function(e,a){var t=new Blob([a],{type:"text/plain;charset=utf-8"});Object(te.saveAs)(t,e)},Oe=t(88),Ae=t.n(Oe),_e=function(e){var a=e.open,t=e.className,n=e.children,i=Object(V.a)(e,["open","className","children"]);return _.a.createElement(Z.a,Object.assign({in:Boolean(a),unmountOnExit:!0,timeout:500,classNames:{enter:Ae.a.Enter,enterActive:Ae.a.Enter__Active,exit:Ae.a.Exit,exitActive:Ae.a.Exit__Active}},i),_.a.createElement("div",{className:K(Ae.a.Advert,t)},_.a.createElement("div",{className:Ae.a.Container},_.a.createElement("div",{className:Ae.a.Arrow}),n)))},Ie=t(232),ve=t.n(Ie),Re=function(e){var a=e.children;return _.a.createElement("div",{className:ve.a.App},_.a.createElement("div",{className:ve.a.Container},a))},ge=(t(714),t(234)),Te=t(325),Le=t.n(Te),be=ge.a.Option,ye=Object.assign((function(e){e.onClick;var a=e.dropdownClassName,t=Object(V.a)(e,["onClick","dropdownClassName"]);return _.a.createElement(ge.a,Object.assign({dropdownClassName:K(Le.a.Select,a)},t))}),{Option:be}),we=(t(611),t(342)),je=(t(613),t(340)),Ne=function(e,a){var t=a.precition,n=a.step;return void 0!==e?ae(function(e,a){return Math.round(e/a)*a}(e,n),{position:-t}):void 0},Me=function(e){var a,t=e.min,n=void 0===t?0:t,i=e.max,o=void 0===i?1:i,r=e.value,c=e.onChange,l=void 0===c?function(){}:c,s=e.step,u=void 0===s?1:s,E=e.precition,p=void 0===E?-Math.floor(Math.log10(u)):E,d=e.unit,m=Object(A.useCallback)((function(e){l(Ne(e,{precition:p,step:u}))}),[l,p,u]);return _.a.createElement(L.a,P,_.a.createElement(T.a,{xs:24,sm:16,md:16,lg:16,xl:16},_.a.createElement(je.a,{min:n,max:o,onChange:m,value:"number"===typeof r?r:n,step:u,tipFormatter:function(e){return"".concat(e).concat(d?" ".concat(d):"")},marks:(a={},Object(w.a)(a,n,{style:{whiteSpace:"nowrap"},label:"".concat(n).concat(d?" ".concat(d):"")}),Object(w.a)(a,o,{style:{whiteSpace:"nowrap"},label:"".concat(o).concat(d?" ".concat(d):"")}),a)})),_.a.createElement(T.a,{xs:24,sm:8,md:8,lg:8,xl:8},_.a.createElement(we.a,{min:n,max:o,style:{width:"100%"},step:u,value:r,onChange:m})))},ze=function(e){var a=e.dependencies,t=e.requirement,n=void 0===t?function(){return!0}:t,i=e.children,o=e.noMatch,r=void 0===o?null:o,c=Object(V.a)(e,["dependencies","requirement","children","noMatch"]);return _.a.createElement(b.a.Item,Object.assign({noStyle:!0,shouldUpdate:function(e,t){return a.some((function(a){return e[a]!==t[a]}))}},c),(function(e){var a=e.getFieldValue;return n({getFieldValue:a})?i:r}))},Se=t(66),Ce=Object.assign((function(e){var a=e.layout,t=void 0===a?f.default:a,n=e.name,i=e.children,o=Object(V.a)(e,["layout","name","children"]);return _.a.createElement(T.a,t,_.a.createElement(b.a.Item,Object.assign({},n?{name:n,label:W[n],rules:[{required:!0,message:"Pole jest wymagane"}],validateTrigger:"onChange"}:{},o),i))}),{ValueProvider:function(e){var a=e.dependencies,t=e.children,n=Object(V.a)(e,["dependencies","children"]);return _.a.createElement(b.a.Item,Object.assign({noStyle:!0,shouldUpdate:function(e,t){return a.some((function(a){return e[a]!==t[a]}))}},n),(function(e){var n=e.getFieldValue;return t(a.reduce((function(e,a){return Object(Se.a)(Object(Se.a)({},e),{},Object(w.a)({},a,n([a])))}),{}))}))}}),fe=(t(206),t(97)),ke=(t(155),t(166)),Pe=t(716),De=t(717),Fe=t(118),We=t.n(Fe),Ye=ye.Option,he=ke.a.useBreakpoint,Ge=j.a.Title,xe=function(e){return e||{}},Be=Object.assign((function(e){var a,t=e.counter,n=e.first,i=e.last,o=e.remove,r=e.value,c=void 0===r?{}:r,l=e.onChange,s=void 0===l?function(){}:l,u=Object(A.useCallback)((function(e,a){s(xe(Object(Se.a)(Object(Se.a)({},c),{},Object(w.a)({},a,e))))}),[c,s]),E=Object(A.useCallback)((function(e){var a;s(xe(Object(Se.a)(Object(Se.a)({},c),{},(a={},Object(w.a)(a,F.MATERIAL_CATEGORY,e),Object(w.a)(a,F.MATERIAL_CATEGORY_SPECIFIC,void 0),a))))}),[c,s]),p=!he().lg,d=K(!p&&!i&&We.a.Row__New,p&&We.a.Row__Responsive),m=n||p;return _.a.createElement(L.a,P,!p&&o&&_.a.createElement(Ce,{label:n?" ":void 0,layout:f.minimal,className:K(!i&&We.a.NewRow)},_.a.createElement(fe.a,{title:"Usu\u0144 warstw\u0119",placement:"topRight"},_.a.createElement(R.a,{type:"link",icon:_.a.createElement(Pe.a,null),onClick:function(){return o()},danger:!0}))),p&&_.a.createElement(T.a,f.full,_.a.createElement(Ge,{className:We.a.Title,level:4},"Warstwa nr ".concat(t+1)),o&&_.a.createElement(R.a,{type:"link",icon:_.a.createElement(Pe.a,null),onClick:function(){return o()},danger:!0}," Usu\u0144 warstw\u0119")),_.a.createElement(Ce,{layout:!p&&o?f.short:f.default,className:d,label:m?W[F.MATERIAL_CATEGORY]:void 0},_.a.createElement(ye,{value:c[F.MATERIAL_CATEGORY],onChange:E},Object.entries(z).map((function(e){var a=Object(y.a)(e,2),t=a[0],n=a[1].description;return _.a.createElement(Ye,{value:t,key:t},n)})))),_.a.createElement(Ce,{className:d,label:m?W[F.MATERIAL_CATEGORY_SPECIFIC]:void 0},(a=c[F.MATERIAL_CATEGORY])?_.a.createElement(ye,{value:c[F.MATERIAL_CATEGORY_SPECIFIC],onChange:function(e){return u(e,F.MATERIAL_CATEGORY_SPECIFIC)}},z[a].examples.map((function(e,a){var t=e.description;return _.a.createElement(Ye,{value:a,key:"".concat(a,"_").concat(t)},t)}))):_.a.createElement(ye,{disabled:!0})),_.a.createElement(Ce,{className:d,label:m?W[F.MATERIAL_CATEGORY_WIDTH]:void 0,layout:Object(Se.a)(Object(Se.a)({},f.default),{},{sm:24,md:24})},_.a.createElement(Me,Object.assign({value:c[F.MATERIAL_CATEGORY_WIDTH],onChange:function(e){return u(e,F.MATERIAL_CATEGORY_WIDTH)}},Y))))}),{Add:function(e){var a=e.add,t=e.className,n=Object(V.a)(e,["add","className"]);return _.a.createElement(R.a,Object.assign({type:"dashed",onClick:function(){return a()},className:K(We.a.Add,t)},n),_.a.createElement(De.a,null)," Dodaj warstw\u0119")},Wrapper:function(e){var a=e.children,t=Object(V.a)(e,["children"]);return _.a.createElement(T.a,t,a)}}),Ue=t(60),Ve=t.n(Ue),Ze=j.a.Title,He=j.a.Text,Ke=Object.freeze({NEUTRAL:"neutral",POSITIVE:"positive",NEGATIVE:"negative"}),qe=function(e){var a,t=e.className,n=e.value,i=e.label,o=e.children,r=e.status,c=void 0===r?Ke.NEUTRAL:r,l=Object(V.a)(e,["className","value","label","children","status"]);return _.a.createElement("div",Object.assign({className:K(Ve.a.Result,c&&(a={},Object(w.a)(a,Ke.NEGATIVE,Ve.a.Result__Negative),Object(w.a)(a,Ke.NEUTRAL,Ve.a.Result__Neutral),Object(w.a)(a,Ke.POSITIVE,Ve.a.Result__Positive),a)[c],t)},l),i&&_.a.createElement(Ze,{className:Ve.a.Title,level:4},i),_.a.createElement(He,{className:Ve.a.Content},o),n&&_.a.createElement(Qe,{className:Ve.a.Content},n))},Qe=function(e){var a=e.className,t=e.children,n=Object(V.a)(e,["className","children"]);return _.a.createElement(Z.a,Object.assign({in:!0,appear:!0,timeout:500,classNames:{appear:Ve.a.Appear,appearActive:Ve.a.Appear__Active}},n),_.a.createElement(He,{className:K(Ve.a.Value,a)},t))},Xe=t(233),Je=t.n(Xe),$e=function(e){var a=e.success,t=e.children,n=e.className,i=Object(V.a)(e,["success","children","className"]);return _.a.createElement("div",Object.assign({className:K(Je.a.Summary,a&&Je.a.Summary__Success,n)},i),t)},ea=ye.Option,aa=j.a.Text,ta=j.a.Title,na=(O={},Object(w.a)(O,F.PREVIOUS_WARMED,ce.NO),Object(w.a)(O,F.SELF_BEFORE_CALC,ue.AUTOMATICALLY),O),ia=[F.BUILDING_YEAR,F.PREVIOUS_WARMED,F.SELF_BEFORE_CALC,F.MODERNIZATION_ITEM,F.PREV_IZOLATION_TYPE,F.PREV_IZOLATION_WIDTH,F.MATERIAL_LAYERS],oa=[].concat(ia,[F.PLANED_MATERIAL,F.PLANED_LAMBDA]),ra=function(e){var a=e.values,t=q(a);return _.a.createElement($e,{success:t},_.a.createElement(L.a,P,_.a.createElement(T.a,{span:24,style:{paddingBottom:12}},_.a.createElement(aa,{strong:!0},"Wyliczone warto\u015bci wsp\xf3\u0142czynnik\xf3w U [W/m2K]")),_.a.createElement(T.a,f.summaryColumn,_.a.createElement(b.a.Item,{label:W[F.REQUIRED_IZOLATION]},a[F.MODERNIZATION_ITEM]?_.a.createElement(aa,{strong:!0},B[a[F.MODERNIZATION_ITEM]]):_.a.createElement(aa,{type:"danger"},"Konieczny wyb\xf3r rodzaju modernizowanej przegrody"))),_.a.createElement(T.a,f.summaryColumn,_.a.createElement(b.a.Item,{label:W[F.BEFORE_WARMING_U]},t?_.a.createElement(aa,{strong:!0},ae(X(a),{position:-3})):_.a.createElement(aa,{type:"danger"},"Konieczne uzupe\u0142nienie wszystkich pustych p\xf3l")))))},ca=function(e){return(0,e.getFieldValue)([F.PREVIOUS_WARMED])===ce.YES},la=function(e){return(0,e.getFieldValue)([F.SELF_BEFORE_CALC])===ue.BY_MYSELF},sa=function(){var e=b.a.useForm(),a=Object(y.a)(e,1)[0];return _.a.createElement(b.a,Object.assign({},k,{initialValues:na,form:a,name:"calculator"}),_.a.createElement(L.a,P,_.a.createElement(Ce,{name:F.MODERNIZATION_ITEM},_.a.createElement(ye,null,Object.entries(x).map((function(e){var a=Object(y.a)(e,2),t=a[0],n=a[1];return _.a.createElement(ea,{value:t,key:t},n)}))))),_.a.createElement(L.a,P,_.a.createElement(Ce,{name:F.SELF_BEFORE_CALC},_.a.createElement(pe,{onChange:function(e){var t;e.target.value;a.setFieldsValue((t={},Object(w.a)(t,F.PREVIOUS_WARMED,ce.NO),Object(w.a)(t,F.PREV_IZOLATION_TYPE,void 0),Object(w.a)(t,F.PREV_IZOLATION_WIDTH,void 0),Object(w.a)(t,F.MATERIAL_LAYERS,[{}]),Object(w.a)(t,F.BUILDING_YEAR,void 0),t))}}))),_.a.createElement(ze,{dependencies:[F.SELF_BEFORE_CALC],requirement:function(){return!la.apply(void 0,arguments)}},_.a.createElement(L.a,P,_.a.createElement(T.a,f.full,_.a.createElement(ta,{level:4},"Obliczenie wsp\xf3\u0142czynnika U przed ociepleniem dla przegrody"))),_.a.createElement(L.a,P,_.a.createElement(Ce,{name:F.BUILDING_YEAR},_.a.createElement(ye,null,Object.entries(U).map((function(e){var a=Object(y.a)(e,2),t=a[0],n=a[1].description;return _.a.createElement(ea,{value:t,key:t},n)}))))),_.a.createElement(L.a,P,_.a.createElement(Ce,{name:F.PREVIOUS_WARMED},_.a.createElement(se,{onChange:function(e){var t;e.target.value;a.setFieldsValue((t={},Object(w.a)(t,F.SELF_BEFORE_CALC,ue.AUTOMATICALLY),Object(w.a)(t,F.PREV_IZOLATION_TYPE,void 0),Object(w.a)(t,F.PREV_IZOLATION_WIDTH,void 0),Object(w.a)(t,F.MATERIAL_LAYERS,void 0),t))}})))),_.a.createElement(ze,{dependencies:[F.PREVIOUS_WARMED],requirement:ca},_.a.createElement(L.a,P,_.a.createElement(T.a,f.full,_.a.createElement(ta,{level:4},"Istniej\u0105ca izolacja")),_.a.createElement(Ce,{name:F.PREV_IZOLATION_TYPE},_.a.createElement(ye,null,Object.entries(C).map((function(e){var a=Object(y.a)(e,2),t=a[0],n=a[1].description;return _.a.createElement(ea,{value:t,key:t},n)})))),_.a.createElement(Ce,{name:F.PREV_IZOLATION_WIDTH},_.a.createElement(Me,Y)))),_.a.createElement(ze,{dependencies:[F.SELF_BEFORE_CALC],requirement:la},_.a.createElement(L.a,P,_.a.createElement(T.a,f.full,_.a.createElement(ta,{level:4},"Samodzielne wyliczenie wsp\xf3\u0142czynnika U dla przegr\xf3d przed ociepleniem")),_.a.createElement(b.a.List,{name:F.MATERIAL_LAYERS},(function(e,a){var t=a.add,n=a.remove;return _.a.createElement(_.a.Fragment,null,e.map((function(a,t){return _.a.createElement(Be.Wrapper,Object.assign({},f.full,{key:a.key}),_.a.createElement(b.a.Item,Object.assign({noStyle:!0},a),_.a.createElement(Be,{counter:t,first:0===t,last:9===t,remove:e.length>1?function(){return n(a.name)}:void 0})))})),e.length<10&&_.a.createElement(Ce,null,_.a.createElement(Be.Add,{add:t})))})))),_.a.createElement(Ce.ValueProvider,{dependencies:ia},(function(e){return _.a.createElement(L.a,P,_.a.createElement(T.a,f.double,_.a.createElement(ra,{values:e})))})),_.a.createElement(L.a,P,_.a.createElement(Ce,{name:F.PLANED_MATERIAL},_.a.createElement(ye,{onChange:function(e){a.setFieldsValue(Object(w.a)({},F.PLANED_LAMBDA,"otherMaterial"!==e?C[e].defaultValue/1e3:void 0))}},Object.entries(C).map((function(e){var a=Object(y.a)(e,2),t=a[0],n=a[1].description;return _.a.createElement(ea,{value:t,key:t},n)})),_.a.createElement(ea,{value:"otherMaterial",key:"otherMaterial"},"Inne"))),_.a.createElement(Ce.ValueProvider,{dependencies:[F.PLANED_MATERIAL]},(function(e){var a=e[F.PLANED_MATERIAL];return _.a.createElement(Ce,{name:F.PLANED_LAMBDA},"otherMaterial"===a?_.a.createElement(Me,h):_.a.createElement(ye,{disabled:!a},a&&function(e){var a=e.from,t=e.to,n=e.defaultValue;return Object(g.a)(Array(t-a+1)).map((function(e,t){return _.a.createElement(ea,{key:a+t,value:(a+t)/1e3},"".concat((a+t)/1e3).concat(a+t===n?" (domy\u015blna)":""))}))}(C[a])))}))),_.a.createElement(Ce.ValueProvider,{dependencies:oa},(function(e){return function(a){return _.a.createElement(L.a,P,_.a.createElement(T.a,f.default,a?(t=J(e),_.a.createElement(qe,{label:W[F.RESULT],status:Ke.POSITIVE,value:t>0?"".concat(Math.ceil(t)," cm"):void 0},t>0?"Minimalna wymagana grubo\u015b\u0107 ocieplenia: ":"Przegroda nie wymaga docieplenia")):_.a.createElement(qe,{label:W[F.RESULT],status:Ke.NEGATIVE},"Uzupe\u0142nij wszystkie pola przed obliczeniem")),_.a.createElement(T.a,f.default,_.a.createElement(_e,{open:a},_.a.createElement("div",{style:{paddingBottom:16}},"Mo\u017cesz zapisa\u0107 wynik wykonanych oblicze\u0144"),_.a.createElement(R.a,{icon:_.a.createElement(N.a,null),onClick:function(){return function(e){var a=de(e);me("obliczenia.txt",a)}(e)}},"Zapisz"))));var t}(function(e){var a=e[F.PLANED_MATERIAL],t=e[F.PLANED_LAMBDA];return q(e)&&a&&t}(e))})))};t(712);v.a.render(_.a.createElement(_.a.StrictMode,null,_.a.createElement(Re,null,_.a.createElement(sa,null))),document.getElementById("root"))},88:function(e,a,t){e.exports={Advert:"Advert_Advert__37FSS",Enter:"Advert_Enter__3IbuD",Container:"Advert_Container__SSY22",Arrow:"Advert_Arrow__2fnJx",Enter__Active:"Advert_Enter__Active__3M84O",Exit:"Advert_Exit__WN7oj",Exit__Active:"Advert_Exit__Active__2Sop8"}}},[[347,1,2]]]);
//# sourceMappingURL=main.d8450b95.chunk.js.map