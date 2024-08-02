window.__noodl_modules = [];
window.Noodl = {
    defineModule:function(m) {
        window.__noodl_modules.push(m);
    },
    deployed: true,
    Env: {}
}

window.projectData = {"settings":{"baseUrl":"https://acgc.sterner.digital","sitemap.enabled":true},"components":[{"name":"/App","nodes":[{"id":"246f9453-a119-ac78-171e-3806cf596ecc","type":"Group","parameters":{"styleCss":"overflow: auto;\r\nheight: 100%;","maxWidth":{"value":500,"unit":"px"},"alignX":"center","sizeMode":"contentHeight"},"ports":[],"children":[{"id":"1657787a-055d-fdfd-ac25-856511a03e08","type":"Group","parameters":{"scrollEnabled":true,"height":{"value":95,"unit":"%","isFixed":true}},"ports":[],"children":[{"id":"e5b2e6b4-37e4-2ff8-29d8-e5f2a35ae2eb","type":"Router","parameters":{"pages":{"routes":["/Nav Pages/Home","/Nav Pages/Collections","/Nav Pages/museum","/Nav Pages/ProfilePage","/Nav Pages/About","/Collection Pages/Paintings/Paintings","/Collection Pages/Bugs/Bugs","/Collection Pages/Fish/Fish","/Collection Pages/Fossils/Fossils","/Collection Pages/Clothing/Clothing","/Collection Pages/Fruit/Fruit"],"startPage":"/Nav Pages/Home"},"name":"Main","clip":"scroll"},"ports":[],"children":[]}]},{"id":"43813436-5c7c-1d3e-ede7-e0105521a754","type":"/navbar","parameters":{},"ports":[],"children":[]}]}],"connections":[],"ports":[],"roots":["246f9453-a119-ac78-171e-3806cf596ecc"],"metadata":{"canvasSize":{"width":"1039px","height":"751px"},"canvasPos":{"x":0,"y":0}}},{"name":"/navbar","nodes":[{"id":"97f2084f-7c09-9443-3dfb-cb3371299fe2","type":"Group","parameters":{"nodeLabel":"This group is created to hold the navbar buttons in a horizontal row","borderStyle":"solid","borderTopStyle":"solid","borderTopColor":"Nook Tan Dark","borderLeftColor":"transparent","borderLeftStyle":"none","borderBottomStyle":"none","borderRightStyle":"none","borderTopWidth":{"value":5,"unit":"px"},"position":"relative","flexDirection":"row","visible":true,"backgroundColor":"Nook Text Light","sizeMode":"contentHeight","alignY":"bottom","alignItems":"flex-end","minHeight":{"value":5,"unit":"%"},"maxHeight":{"value":5,"unit":"%"}},"ports":[],"children":[{"id":"10ffa5c9-599b-28a1-2213-16cd9778e2df","type":"Group","parameters":{},"ports":[],"children":[{"id":"76d9e148-49ae-17ca-8cad-7cf1fe1ba697","type":"Image","parameters":{"src":"images/tom_nook.png","minWidth":{"value":70,"unit":"%"},"maxWidth":{"value":70,"unit":"%"},"minHeight":{"value":70,"unit":"%"},"maxHeight":{"value":70,"unit":"%"},"alignX":"center"},"ports":[],"children":[]},{"id":"f6e52872-1056-5342-5d1e-7f18e152c16e","type":"Text","parameters":{"textAlignX":"center","text":"Home","color":"Nook Text","wordBreak":"normal","textStyle":"Title Small","fontSize":{"value":10,"unit":"px"}},"ports":[],"children":[]}]},{"id":"04f92d54-9320-b336-1942-09bc1f1062c4","type":"Group","parameters":{},"ports":[],"children":[{"id":"b5e4aab2-aeb0-f5a0-2618-0c9a229d2fc1","type":"Image","parameters":{"src":"images/blathers.png","minWidth":{"value":70,"unit":"%"},"maxWidth":{"value":70,"unit":"%"},"minHeight":{"value":70,"unit":"%"},"maxHeight":{"value":70,"unit":"%"},"alignX":"center"},"ports":[],"children":[]},{"id":"8e2cb743-bee4-f893-10a0-358761bdd7a9","type":"Text","parameters":{"textAlignX":"center","text":"Museum","color":"Nook Text","wordBreak":"normal","textStyle":"Title Small","fontSize":{"value":10,"unit":"px"}},"ports":[],"children":[]}]},{"id":"02a2af92-f80b-bb33-4602-985e4d29c116","type":"Group","parameters":{},"ports":[],"children":[{"id":"68a67bad-4bb7-444a-6291-c5ed3d581f41","type":"Image","parameters":{"src":"images/passport2.png","minWidth":{"value":70,"unit":"%"},"maxWidth":{"value":70,"unit":"%"},"minHeight":{"value":70,"unit":"%"},"maxHeight":{"value":70,"unit":"%"},"alignX":"center"},"ports":[],"children":[]},{"id":"7846fc34-8ba7-2d8c-e268-f58f089d5b5a","type":"Text","parameters":{"textAlignX":"center","text":"Passport","color":"Nook Text","wordBreak":"normal","textStyle":"Title Small","fontSize":{"value":10,"unit":"px"}},"ports":[],"children":[]}]},{"id":"05a9757b-199d-eea9-5fe3-05e9ffa26a7d","type":"Group","parameters":{},"ports":[],"children":[{"id":"9cb42e65-1747-cb06-553e-f7a9272cc054","type":"Image","parameters":{"src":"images/leaf.png","minWidth":{"value":70,"unit":"%"},"maxWidth":{"value":70,"unit":"%"},"minHeight":{"value":70,"unit":"%"},"maxHeight":{"value":70,"unit":"%"},"alignX":"center"},"ports":[],"children":[]},{"id":"aa0f3130-c398-aa3d-391b-956af0030842","type":"Text","parameters":{"textAlignX":"center","text":"Collections","color":"Nook Text","wordBreak":"normal","textStyle":"Title Small","fontSize":{"value":10,"unit":"px"}},"ports":[],"children":[]}]},{"id":"4481f8fb-1f05-09e3-cc3f-9a71730fcb6d","type":"Group","parameters":{},"ports":[],"children":[{"id":"d946b17c-6f2d-b961-d933-eb6deb1cb906","type":"Image","parameters":{"src":"images/trap.png","minWidth":{"value":70,"unit":"%"},"maxWidth":{"value":70,"unit":"%"},"minHeight":{"value":70,"unit":"%"},"maxHeight":{"value":70,"unit":"%"},"alignX":"center"},"ports":[],"children":[]},{"id":"38776a5b-3ee3-cf2f-4703-e57a66f1179d","type":"Text","parameters":{"textAlignX":"center","text":"About","color":"Nook Text","wordBreak":"normal","textStyle":"Title Small","fontSize":{"value":10,"unit":"px"}},"ports":[],"children":[]}]}]},{"id":"a2f363d3-8cc2-ea3c-3a14-0054a7a9bf63","type":"RouterNavigate","parameters":{"router":"Main","target":"/Nav Pages/Home"},"ports":[],"children":[]},{"id":"6d363f8b-69db-f10c-a774-6c800a15f85d","type":"RouterNavigate","parameters":{"router":"Main","target":"/Nav Pages/museum"},"ports":[],"children":[]},{"id":"a81a1195-736a-96eb-f5f7-acade11df9b2","type":"RouterNavigate","parameters":{"router":"Main","target":"/Nav Pages/Collections"},"ports":[],"children":[]},{"id":"8d44ce48-ca65-dabb-aef6-015bc122fb72","type":"RouterNavigate","parameters":{"router":"Main","target":"/Nav Pages/ProfilePage"},"ports":[],"children":[]},{"id":"14999b58-c3c6-2bda-f37f-1e9be9d0d98e","type":"RouterNavigate","parameters":{"router":"Main","target":"/Nav Pages/About"},"ports":[],"children":[]}],"connections":[{"sourceId":"10ffa5c9-599b-28a1-2213-16cd9778e2df","sourcePort":"onClick","targetId":"a2f363d3-8cc2-ea3c-3a14-0054a7a9bf63","targetPort":"navigate"},{"sourceId":"4481f8fb-1f05-09e3-cc3f-9a71730fcb6d","sourcePort":"onClick","targetId":"14999b58-c3c6-2bda-f37f-1e9be9d0d98e","targetPort":"navigate"},{"sourceId":"05a9757b-199d-eea9-5fe3-05e9ffa26a7d","sourcePort":"onClick","targetId":"a81a1195-736a-96eb-f5f7-acade11df9b2","targetPort":"navigate"},{"sourceId":"02a2af92-f80b-bb33-4602-985e4d29c116","sourcePort":"onClick","targetId":"8d44ce48-ca65-dabb-aef6-015bc122fb72","targetPort":"navigate"},{"sourceId":"04f92d54-9320-b336-1942-09bc1f1062c4","sourcePort":"onClick","targetId":"6d363f8b-69db-f10c-a774-6c800a15f85d","targetPort":"navigate"}],"ports":[],"roots":["97f2084f-7c09-9443-3dfb-cb3371299fe2"]}],"componentIndex":{"b1-30bcb58c828dbeb5":{"components":["/Nav Pages/Home","/Nav Pages/Daily Tasks","/Multi Choice With Pills","/Multi Choice With Pills/Option"],"dependencies":[]},"b2-27bd406b7c0a8220":{"components":["/Nav Pages/Collections","/Nav Pages/Collection Progress"],"dependencies":[]},"b3-5469e850d22a5b52":{"components":["/Nav Pages/museum"],"dependencies":[]},"b4-836278dc8fd476f7":{"components":["/Nav Pages/ProfilePage","/Nav Pages/Profile"],"dependencies":[]},"b5-b86b60e0990717e2":{"components":["/Nav Pages/About","/Nav Pages/Aboot"],"dependencies":[]},"b6-0fe7b34323c464e0":{"components":["/Collection Pages/Paintings/Paintings","/Collection Pages/Paintings/Paintings Logic"],"dependencies":[]},"b7-7588451e8908263c":{"components":["/Collection Pages/Bugs/Bugs","/Collection Pages/Bugs/Bugs Logic"],"dependencies":[]},"b8-5b18d456764c8012":{"components":["/Collection Pages/Fish/Fish","/Collection Pages/Fish/Fish Logic"],"dependencies":[]},"b9-b785c643a6f6c0ea":{"components":["/Collection Pages/Fossils/Fossils","/Collection Pages/Fossils/Fossil Logic"],"dependencies":[]},"b10-598c14fd6ed6bc34":{"components":["/Collection Pages/Clothing/Clothing","/Collection Pages/Clothing/Clothing Logic"],"dependencies":[]},"b11-19d6d5a42baf2639":{"components":["/Collection Pages/Fruit/Fruit","/Collection Pages/Fruit/Fruit Logic"],"dependencies":[]},"b12-6d52c447ad3524e7":{"components":["/Collection Pages/Bugs/Bugs Logic/Options","/Collection Pages/Clothing/Clothing Logic/Options","/Collection Pages/Fish/Fish Logic/Options","/Collection Pages/Fossils/Fossil Logic/Options","/Collection Pages/Fruit/Fruit Logic/Options","/Collection Pages/Paintings/Paintings Logic/Options","/Multi Choice With Pills/Pill"],"dependencies":[]}},"routerIndex":{"routers":[{"pages":{"routes":["/Nav Pages/Home","/Nav Pages/Collections","/Nav Pages/museum","/Nav Pages/ProfilePage","/Nav Pages/About","/Collection Pages/Paintings/Paintings","/Collection Pages/Bugs/Bugs","/Collection Pages/Fish/Fish","/Collection Pages/Fossils/Fossils","/Collection Pages/Clothing/Clothing","/Collection Pages/Fruit/Fruit"],"startPage":"/Nav Pages/Home"},"name":"Main","clip":"scroll"}],"pages":[{"path":"bugs","title":"Bugs","component":"/Collection Pages/Bugs/Bugs"},{"path":"clothing","title":"Clothing","component":"/Collection Pages/Clothing/Clothing"},{"path":"fish","title":"Fish","component":"/Collection Pages/Fish/Fish"},{"path":"fossils","title":"Fossils","component":"/Collection Pages/Fossils/Fossils"},{"path":"fruit","title":"Fruit","component":"/Collection Pages/Fruit/Fruit"},{"path":"paintings","title":"Paintings","component":"/Collection Pages/Paintings/Paintings"},{"path":"about","title":"About","component":"/Nav Pages/About"},{"path":"collections","title":"Collections","component":"/Nav Pages/Collections"},{"path":"home","title":"Home","component":"/Nav Pages/Home"},{"path":"museum","title":"museum","component":"/Nav Pages/museum"},{"path":"passport","title":"Passport","component":"/Nav Pages/ProfilePage"}]},"rootComponent":"/App","rootNode":"246f9453-a119-ac78-171e-3806cf596ecc","metadata":{"styles":{"text":{"Display":{"letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none","fontSize":{"value":"40","unit":"px"},"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","color":"#000000"},"Headline":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"32","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Large":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"24","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120%","unit":"px"},"textTransform":"none"},"Title Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Small":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Large":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Small":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"12","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Body Large":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Medium":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Small":{"letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none","fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000"}},"colors":{"Grey - 200":"#F4F4F4","Grey - 500":"#A5A5A5","Grey - 700":"#4C4C4C","Grey - 300":"#E9E9E9","Grey - 900":"#1F1F1F","Primary":"#46BAA5","Primary Dark":"#3F22B8","Primary Subtle":"#C9BFFC","Primary Light":"#F7F5FF","White":"#FFFFFF","Black":"#000000","Nook Text":"#807256","Nook Text Light":"#e0daca","Nookmiles Blue":"#5B7AD7","Nookmiles Blue Text":"#C0E2FD","Nookmiles Green":"#D6E69D","Nookmiles Brown":"#625544","Mailbox Red":"#F51F18","Police Blue":"#2040A0","Garbage Gray":"#2D3741","Fossil Blue":"#474599","Nook Tan":"#FAF5DF","Nook Tan Dark":"#B9A999","Nook Pale Green":"#ACD6A7","Nook light red":"#D6A7A7","Settings Gray":"#BCBCBC","Settings BG":"#D0D0D0","Nook Orange":"#FFE1AE"}}},"variants":[{"typename":"net.noodl.controls.button","parameters":{"height":{"value":40,"unit":"px"},"sizeMode":"contentWidth","backgroundColor":"Primary","iconIconSource":{"class":"material-icons","code":"home"},"iconSpacing":{"value":8,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"textStyle":"Label Medium","paddingTop":{"value":0,"unit":"px"},"paddingLeft":{"value":24,"unit":"px"},"paddingRight":{"value":24,"unit":"px"},"paddingBottom":{"value":0,"unit":"px"},"color":"#FFFFFF","fontFamily":"fonts/Roboto/Roboto-Medium.ttf","minWidth":{"value":80,"unit":"px"},"useIcon":false,"iconSize":{"value":20,"unit":"px"}},"stateParameters":{"hover":{"backgroundColor":"Primary Dark"},"pressed":{"backgroundColor":"Primary","color":"White"},"disabled":{"backgroundColor":"Grey - 300","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.radiobutton","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Large","borderWidth":{"value":1,"unit":"px"},"value":"0","useIcon":false,"fillColor":"transparent","borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"marginBottom":{"value":8,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"fillColor":"Primary","borderColor":"Primary","borderWidth":{"value":1,"unit":"px"},"backgroundColor":"transparent","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"fillSpacing":{"value":2,"unit":"px"}},"hover":{"backgroundColor":"transparent","borderColor":"Grey - 700","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"}},"disabled":{"borderColor":"Grey - 500","labelcolor":"Grey - 500","fillColor":"transparent"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"Text","parameters":{"textStyle":"Body Medium"},"stateParameters":{},"stateTransitions":{}},{"typename":"net.noodl.controls.range","parameters":{"thumbColor":"Primary","thumbBorderRadius":{"value":100,"unit":"%"},"trackHeight":{"value":4,"unit":"px"},"trackActiveColor":"Primary","trackColor":"Primary Subtle","width":{"value":100,"unit":"%"},"trackBorderRadius":{"value":100,"unit":"px"},"thumbHeight":{"value":16,"unit":"px"},"thumbWidth":{"value":16,"unit":"px"}},"stateParameters":{"hover":{"thumbColor":"Primary Dark","trackActiveColor":"Primary Dark"},"disabled":{"trackActiveColor":"Grey - 500","trackColor":"Grey - 300","thumbColor":"Grey - 500"}},"stateTransitions":{}},{"typename":"net.noodl.controls.checkbox","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useIcon":false,"borderWidth":{"value":1,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Medium","borderRadius":{"value":2,"unit":"px"},"borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"useIcon":true,"iconIconSource":{"class":"material-icons","code":"check"},"backgroundColor":"Primary","borderColor":"Primary","iconSize":{"value":16,"unit":"px"}},"disabled":{"opacity":0.5},"hover":{"borderColor":"Grey - 700"},"pressed":{}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":300,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.textinput","parameters":{"useLabel":true,"sizeMode":"explicit","height":{"value":40,"unit":"px"},"textStyle":"Body Medium","borderStyle":"solid","borderRadius":{"value":4,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 700","labeltextStyle":"Label Small","paddingLeft":{"value":12,"unit":"px"},"paddingRight":{"value":8,"unit":"px"},"labelSpacing":{"value":4,"unit":"px"},"placeholder":"Type here","color":"Grey - 900","placeHolderOpacity":0.65,"enabled":true,"blockTouch":false,"useIcon":false,"iconIconSource":{"class":"material-icons","code":"home"},"iconSize":{"value":20,"unit":"px"},"iconSpacing":{"value":4,"unit":"px"},"iconColor":"Grey - 700","labelcolor":"Grey - 700"},"stateParameters":{"hover":{"labelcolor":"Grey - 700","borderColor":"Grey - 700","borderStyle":"solid","color":"Grey - 900"},"focused":{"borderColor":"Primary","labelcolor":"Primary","borderWidth":{"value":1,"unit":"px"},"boxShadowEnabled":false,"boxShadowColor":"Primary","borderStyle":"solid"},"disabled":{"labelcolor":"Grey - 500","backgroundColor":"Grey - 200","borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 500","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"disabled":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.options","parameters":{"sizeMode":"explicit","height":{"value":40,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"borderColor":"Grey - 700","boxShadowColor":"Dark Gray","useIcon":true,"iconIconSource":{"class":"material-icons","code":"expand_more"},"iconPlacement":"right","iconSize":{"value":20,"unit":"px"},"paddingRight":{"value":12,"unit":"px"},"textStyle":"Body Medium","paddingLeft":{"value":12,"unit":"px"},"marginTop":{"value":0,"unit":"px"},"width":{"value":100,"unit":"%"},"iconColor":"Grey - 700","placeholderOpacity":0.65,"placeholder":"Select option","useLabel":true,"labelSpacing":{"value":4,"unit":"px"},"labeltextStyle":"Label Small","labelcolor":"Grey - 700","items":"[\n    {\"Label\":\"Option 1\", \"Value\":\"1\"},\n    {\"Label\":\"Option 2\", \"Value\":\"2\"},\n    {\"Label\":\"Option 3\", \"Value\":\"3\"}\n]"},"stateParameters":{"hover":{"borderColor":"Grey - 700","borderRadius":{"value":4,"unit":"px"},"iconColor":"Grey - 900","iconSize":{"value":20,"unit":"px"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Grey - 700"},"focused":{"borderColor":"Primary","boxShadowColor":"Primary","borderRadius":{"value":4,"unit":"px"},"useIcon":true,"iconColor":"Primary","iconIconSource":{"class":"material-icons","code":"keyboard_arrow_up"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Primary"},"pressed":{"borderRadius":{"value":4,"unit":"px"}},"disabled":{"labelcolor":"Grey - 500","iconColor":"Grey - 500","borderColor":"Grey - 500","color":"Grey - 600","backgroundColor":"Grey - 200"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}}]};
