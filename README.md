# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>Intro</summary>

  ### Auteur:
  Mila de Waard

  #### Je startniveau:
  Blauw

  #### Je focus:
  Responsive
 
</details>



## Je website

<details open>
  <summary>Ticketmaster</summary>

  ### Je opdracht:
  De opdracht is het uitwerken van twee verschillende pagina's van een website met 'nette' vanilla HTML, CSS en Javascript.
  Mijn gekozen website is Ticketmaster. Link: https://www.ticketmaster.nl

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home screen 
  <img src="readme-images/mobiel-homescreen.jpg" width="375px" alt="Home pagina van ticketmaster">

  #### Screenshot(s) van de tweede pagina (small screen):
  Artiest  
  <img src="readme-images/mobiel-artiest.jpg" width="375px" alt="Inhoudelijke informatie over de artiest en het evenement">
 
</details>



## Week 1 - Typografie & kleur

<details open>
  <summary>In de eerste week hebben we kennisgemaakt met typografie & kleur. Daarnaast hebben we geleerd over hoe een custom property werkt.

  CCS custom property is een tool die ervoor zorgt dat een waarden die herhaaldelijk voorkomt in één keer aangepast kunt worden door de waarden op één plek te definiëren en te kunnen wijzigen.
  
  Anatomie van een CSS custom property:
  <img scr="readme-images/custom-property.png" width="375px" alt="Anatomie van een CSS custom property">
  </summary>

  ### Wat ik heb gedaan
  <summary>
  In de eerste week een website gekozen -dit werd Ticketmaster- en daarna een klein begin gemaakt door het juiste font en kleuren in de stylesheet te zetten. Daarnaast heb ik in de HTML de eerste inhoud voor de header geplaatst.

  Font toegepast:
  <img scr="readme-images/font-faces2.png" width="375px" alt="Fonts in de CSS">
  
  Custom properties voor de kleuren gemaakt: 
  <img scr="readme-images/custom-properties2.png" width="375px" alt="Custom properties">

  Klein begin gemaakt aan de header: 
  <img scr="readme-images/header-nav1.png" width="375px" alt="Eerste header informatie">
  </summary>
</details>



## Week 2 - Toegankelijkheid + Breakdownschets

<details open>
  <summary>
    In deze week heb ik het symposium over toegankelijkheid gevolgd. De kern van het verhaal is dat bij het maken en ontwikkelen van  een ontwerp toegankelijkheid erg essentieel is, zodat mensen met een permanente, tijdelijke of situatie gebaseerde beperking ook zo aangenaam mogelijk een dienst/product kunnen gebruiken. Volg de Web Content Accessibility Guidelines (WCAG), maar betrek vooral de gebruikers! Het gaat om Inlcusive Design.

    Na het symposium is mijn besef over toegankelijkheid veel groter geworden en begrijp ik beter waarom en voor wie ik een website ga ontwerpen. 

    In de les hebben we uitleg gekregen over hoe je de toegankelijkheid van je website test door middel van een screenreading. De toegankelijkheid van een website is namelijk één van de belangrijkste richtlijnen voor het maken van een website.

    Ook hebben we uitleg gekregen over het gebruik van grid en hiermee geoefend. 
    Grid is een vlakverdeling om dingen op hun plaats te leggen en niet gaan zweven op de pagina.

  <img src="readme-images/grid.png" width="375px" alt="Grid uitleg">
  </summary>

  <summary>
  Verder kregen we kort uitleg over media query, dit is een tool om de workflow te verbeteren. 

  Bijvoorbeeld: <img src="readme-images/media-query.png" width="375px" alt="Anatomie van een media query">

  Als de media width groter wordt dan 48em dan komen de paragrafen in 2 kolommen te staan.
  </summary>
</details>


## Toegankelijkheidstest 1/2

<details open>
  <summary>
  De toegankelijkheid van de website heb ik getest met de functie voice over (VO) en keyboard only (KO). Daarnaast is er de Web Content Accessibility Guidelines (WCAG) dit is een document met richtlijnen om te voldoen aan de toegankelijkheid van een website. Echter als deze richtlijnen allemaal zijn behaald betekent het nog steeds niet dat je website volledig toegankelijk is, de gebruiker speelt ook nog een essentiële rol.
  </summary>

  ### Bevindingen
  -	VO en KO wordt in het Nederlands gegeven, maar met een Engels accent.
  -	De VO begint met “Link, doorgaan naar inhoud”, dit is niet zichtbaar. Bij de KO komt die wel tevoorschijn.
  -	Inlog/registreren wordt volgens de VO en KO als button gekemerkt, maar het hoort een link te zijn, want je gaat naar een andere pagina.
  -	H1 is het beeldmerk en geen titel op de home pagina. Op de artiesten pagina is er wel een H1 titel en is het beeldmerk alleen een link.
  -	“Heading level 1, Ticketmaster” (h1) niet zichtbaar, maar wordt wel genoemd na de navigatie.
  -	“Heading level 2, Highlights” (h2) niet zichtbaar, maar wordt wel genoemd na h1. 
  -	Andere h2 koppen “Recent bekeken”, “Populair” en “Aanbevolen” zijn wel zichtbaar en worden ook genoemd.
  -	Veel heading 3 (h3) gebruikt.
  -	Veel links gebruikt. Bijna elke h3 is een link.
  -	De h2 footer-navigatie is niet zichtbaar, maar met de KO wordt die heel minimaal getoond. 
  -	Je kunt met KO niet makkelijk naar een bepaald kopje, want dat moet je alle andere inhoudselementen met dezelfde functie langsgaan.
  -	De VO en KO laten geen paragrafen (p) zien.

</details> 


## Breakdownschets

<details open>
  <summary>
  Een breakdownschets maken van een website pagina geeft je overzicht van alle html-elementen waaruit de website is opgebouwd.
  </summary>

  ### De hele home pagina: 
  <img src="readme-images/breakdownschets-homepagina.jpg" width="375px" alt="Breakdown van de hele pagina">

  ### Dynamisch deel menu: 
  <img src="readme-images/breakdownschets-menu.jpg" width="375px" alt="Breakdown van een dynamisch deel">

  ### Dynamisch deel footer: 
  <img src="readme-images/breakdownschets-footer.jpg" width="375px" alt="Breakdown van nog een dynamisch deel">

  ### De hele artiest(en) pagina: 
  <img src="readme-images/breakdownschets-artiestagina.jpg" width="375px" alt="Breakdown van de hele pagina">
</details>


  ### Wat ik heb gedaan
  <summary>
  Eerste twee weken ben ik bezig geweest met het vullen van de html inhoud. Door het volgen van de breakdownschets en door alle afbeeldingen en iconen te verzamelen.

  <summary>
  Header aangevuld.
  <img src="readme-images/header-nav2.png" width="375px" alt="header informatie">

  Een deel van de main inhoud.
  <img src="readme-images/main-highlights1.png" width="375px" alt="Eerste stuk inhoud over het kopje 'highlights">
  </summary>



## Week 3 - Flexbox + Voortgang 1

<details open>
  <summary>
  De les van deze week ging over flexbox. Dit gebruik je om items (blok elementen) te “flexen”, oftewel hoe je ze ten opzichte van elkaar neer wil zetten. Van nature staan blok elementen onder elkaar en door te “flexen” kun je dit veranderen. Verder bestaat een flexbox uit een parent (flex-container) en een child (flex-item). Bijvoorbeeld:

  <img src="readme-images/flexbox-uitleg.png" width="375px" alt="Code voor om flexbox toe te passens">

  Ook heb ik vanuit de flexbox presentatie uitleg gekregen hoe je een combinatie van een foto en een tekst een link kan maken in html.

    a href= “#”
      <h3></h3>
      <h4></h4>
      <img scr=”images/hoi.png” alt=”Het alternatief als er geen plaatje zou zijn”>
    /a
  </summary>
</details>


## Voortgang 1

<details open>
  <summary>
  Het voortgangsgesprek ging vooral over de breakdownschets. De student-assistent heeft mijn vragen kunnen beantwoorden, waardoor ik als gevolg verder kon met het maken van de HTML inhoud. Verder heb ik uitleg gekregen hoe ik gemakkelijk images kan downloaden van de website.
  </summary>

  ### Stand van zaken
  <summary> 
  Buiten de les ben ik bezig geweest met het uitbreiden, verbeteren van de header. Ook heb ik een begin gemaakt met het verzamelen van zo veel mogelijk inhoud voor de main en footer.
  </summary>


  <summary>
  Search bar in de header geplaatst.
  <img src="readme-images/header-nav1.png" width="375px" alt="Search bar">
  (Bron: 4)

  Main inhoud, waar ik van een image en tekst één link heb kunnen maken.
  <img src="readme-images/main-populair1.png" width="375px" alt="Stukje code main over het kopje populair.">

  <img src="readme-images/main-aanbevolen1.png" width="375px" alt="Stukje code main over het kopje aanbevolen.">
  (Bron: presentatie over flexbox).

  Allereerste footer inhoud. Niet veel, alleen kopjes. Blijkbaar twijfelde ik nog over hoe ik de links erin moest zetten.
  <img src="readme-images/footer1.png" width="375px" alt="Footer inhoud.">

  </summary>
</details>



## Week 4 - JS 3-stap

<details open>
  <summary>
  Deze week ging over JavaScript. JavaScript helpt om nog efficiënter code te schrijven en om html-elementen met elkaar te laten werken.
  Door middel van document object model (DOM) refereer je naar het html-element. En om de CSS erbij te betrekken doe je dat met de document.querySelector in de JS, die selecteert het overeenkomende element uit de CSS. Daarnaast kun je met de add.Eventlistener een functie laten uitvoeren. Als laatst kun je dit controleren in de console van een browser, die kijkt voor eventuele fouten. Voorbeeld:

  <img src="readme-images/js.jpg" width="375px" alt="Uitleg over JavaScript">
  (Bron: 1)
  </summary>

  ### Wat ik heb gedaan
  <summary>
  Na dat ik de eerste HTML pagina helemaal inhoud heb gegeven kon ik een begin maken met de CSS. Echter had ik deze week niet heel veel gedaan.

  Eerste CSS voor de header:
  <img src="readme-images/css-header1.png" width="375px" alt="Eerste styling van de header.">

  Waar ik voornamelijk vastliep hoe de grid kon toe passen op verschilldende schermbreedte. Eigenlijk dat het responisve werd. Daarnaast vond ik het lastig om überhaupt op de juiste elementen te komen.
  </summary>
</details>



## Week 5 - Positioneren + Voortgang 2

<details open>
  <summary>
  Deze les ging over positioneren. Met positioneren wil je een element op een specifieke plek in een parent of in een scherm zetten. Er zijn 5 flavours of position:

  -	Position: static
    De standaard waarde voor positioneren en wordt gebaseerd op de plaats in de HTML door top, right, bottom, left. Ook wel flow lay-out genoemd.
  -	Position: relative
    Behoudt een element in de flow.
  -	Position: absolute
    Het element gaat uit de flow, waardoor je elementen los kunt positioneren.
  - Position: fixed
    Het element gaat uit de flow, maar het blijft wel op een vaste plek staan als je scrollt.
  - Position: sticky
    Behoudt een element in de flow. En als het element uit beeld schuift blijft die plakken

    ### Wat ik heb gedaan
    Deze week vooral bezig geweest met het stylen van de hele pagina, met name de navigatie. Ook geleerd hoe je items alleen voor de screenreader kan laten lezen. 

    Sreenreader only:
    <img src="readme-images/sr-only.png" width="375px" alt="CSS voor screenreader only.">
    (Bron: 2)

    CSS voor de main:
    <img src="readme-images/css-main1.png" width="375px" alt="Eerste styling van de main.">
  </summary>
</details>


## Voortgang 2

<details open>
  <summary>
  Tijdens het voortgangsgesprek was mijn HTML in principe op orde tot zo ver, tenminste het zag er goed uit. Verder moest ik vooral de oefeningen erbij pakken en verder aan de slag met stylen.
  

  ### Stand van zaken
  De HTML van eerste pagina redelijk op orde. Nu een kwestie van ertoe aanzetten, maar dat vond ik best moeilijk.
  Wat ik moeilijk vond was dat als je uitleg opzoekte het vaak met elementen werd uitgelegd, zoals divs, die je niet mag gebruiken, dus dan loop je snel vast en wist ik gewoon niet welk element ik dan kon gebruiken. Heel erg zoekend dus.

  Uiteindelijk ben ik stap voor stap vanuit de oefeningen bepaalde onderdelen gaan stylen. Hieronder is oude code te zien, niet dat het verkeerd was. Later is het allemaal aangepast om wat overzichtelijker en specifieker te kunnen stylen.
 
  CSS header:
  <img src="readme-images/css-header2.png" width="375px" alt="Styling van de header.">
  
  CSS zoek fomulier:
  <img src="readme-images/css-zoekform2.png" width="375px" alt="Styling van het zoek formulier.">

  CSS navigatie:
  <img src="readme-images/css-nav2.png" width="375px" alt="Styling van de navigatie.">

  (Bron: Flexbox oefening 2) 
  </summary>



## Week 6 - Animeren

<details open>
  <summary>
  Voor de opdracht moet er een animatie in komen, dus hebben we kort uitleg gekregen hoe je zo'n animatie maakt. Verder aan de website gewerkt in de les. 

  <img src="readme-images/anatomie-animatie.png" width="375px" alt="Anatomie van een animatie.">
  </summary>
</details>



## Week 7 - States + Voortgang 3

<details open>
  <summary>
    Als je nadenkt over de states, dan denk je na over welke styling correct is voor het element waarvoor het gebruikt moet worden. 
    Dus een link moet eruit zien als een link, een button als een button en zo door.
  </summary>
</details>


## Voortgang 3

<details open>
  <summary>
  Voor deze week is er niet mega veel veranderd aan het proces. Alles wat ik tot noe toe had was niet verkeerd, maar de manier van stylen had ik erg moeilijk voor mezelf gemaakt. Als goude tip dat ik kreeg moest ik per section gaan stylen. Het werkt veel makkelijker omdat je specifieker elementen kunt benoemen.

  Kortom, de code omgooien en nog concreter voor jezelf maken.
  </summary>

  ### Stand van zaken
  Tijdens de kerstvakantie vond ik het erg lastig om aan het vak Frontend Developemnt te zitten. Ook omdat het even een chaos was geworden en ik niet wist waar ik weer moest beginnen, dit kwam uiteraard doordat ik niet altijd met section werkte. Overigens had ik dat niet gebruikt, omdat ik dacht dat er geen classes gebruikt mocht worden, maar daarvoor dus wel.
</details>



## Week 8 - Toegankelijkheid

<details open>
  <summary>
  Deze week heb ik buiten de lessen om flink aan de opdracht gewerkt. De header en de footer heb ik helemaal opnieuw gemaakt, omdat het oude gewoon niet meer duidelijk was om vanuit verder uit te werken, het was zeker niet verkeerd, maar het was gewoon chaos.

  Daarnaast zoveel mogelijk "af" proberen te krijgen om de tweede toegankelijkheidstest te doen.
  </summary>
</details>


## Toegankelijkheidstest 2/2

<details open>
  <summary>
  De toegankelijkheid van de website heb ik  net zoals vorige keer getest met de functie voice over (VO) en keyboard only (KO). Daarnaast is 
  er de Web Content Accessibility Guidelines (WCAG) dit is een document met richtlijnen om te voldoen aan de toegankelijkheid van een 
  website. Echter als deze richtlijnen allemaal zijn behaald betekent het nog steeds niet dat je website volledig toegankelijk is, de 
  gebruiker speelt ook nog een essentiële rol.
  </summary>


  ### Bevindingen
  -	Bij bepaalde elementen werden de titels/benaming herhaaldelijk genoemd, kwam omdat ik het dus dubbel of hetzelfde had genoemd.
  - Met de KO kom ik overal langs.
  - VO en KO wordt in het Nederlands gegeven, maar met een Engels accent. Opzich wel te volgen.
  - De eerste link begint ook bij de H1. Bij de echte webiste was dat niet zo, daar werd de titel overgeslagen.
  - De VO benoemd alle links met titel/beschrijving.
  - Omdat de H3 in een link ook zit, gaat de KO ook langs alle links.

</details>



## Week 9 - Eindgesprek

<details open>
  <summary>
    Hoe ik frontend development heb ervaren? Als 1 grote puzzel. 

    De theorie werd goed uitgelegd tijdens de lessen. De oefingen waren zeker handig! En uiteindelijk begreep ik de stof, maar het kwam allemaal zo snel. Dan ben je net bezig met iets en dan krijg je weer nieuwe stof erbij voor wat je later pas nodig hebt. Hierdoor "vergat" je weer wat er eigenlijk nog moest gebeuren. Gelukkig was de stof allemaal makkelijk terug te vinden.

    Omdat ik voor me idee wel echt van nul begon was sowieso het op starten een ding. Dat je bij de eerste regel die je moet schrijven al dacht: "Ja wat moet er komen?" Dit duurde dus en was niet heel efficiënt werken. Telkens een beetje zoekend geweest.

    Uiteindelijk gedaan wat ik kon doen. Veel nieuwe dingen geleerd. Met name de handigheid, gewoon de omgang met alles wat met visual code, het schrijven van de code te maken heeft. 
    
    Wat ik nu anders had willen doen?
    De aanpak van het maken van deze opdracht. Veel tijd verloren onderzoeken, hoe, wat en waar. Ook goed vakantie gehouden, maar voor wat ik heb ben ik tevreden. Al beter dan eerst.
  </summary>


  ### Je uitkomst - karakteristiek screenshots:
  De home pagina:
  <img src="readme-images/ticketmaster-homescreen.jpg" width="375px" alt="uitkomst eerste pagina">

  De artiesten pagina:
  <img src="readme-images/artiest-pagina.png" width="375px" alt="uitkomst tweede pagina">


  ### Dit ging goed/Heb ik geleerd: 
  Ik heb geleerd om met media query te werken, om responsiveness toe te passen.
  <img src="readme-images/media-query450.png" width="375px" alt="Media query">
  Als het scherm 450px breed is dan veranderd bijvoorbeeld de footer van diplay:grid naar display:flex;.

  Ik heb beter idee gekregen hoe een grid werkt.
  <img src="readme-images/css-footer-grid.png" width="375px" alt="Grid in de footer">
  Om een item juist te plaatsen in een grid geef je dat aan doormiddel van een grid-template-columns en grid-template-rows verhoudingen en daarna geef je per item aan in welke grid-column en grid-row die moet zitten.

  Meer handigheid gekregen in de manier van code lezen, opzoeken, terug te vinden en aanpassen. Namelijk dat je vanuit het inspecteren heel gemakkelijke en element kunt vinden en zelfs ter plaatse kunt aanpassen, waardoor daarna in je code kunt wijzigen. Verder bepaalde shortcuts geleerd.

  Ik heb geleerd hoe je een hamburger menu kunt maken met onder andere JavasScript.
  <img src="readme-images/js-hamburger2.png" width="375px" alt="JavaScript voor hamburger">

  De hover functie leren kennen. Handig om bepaalde items te laten opvallen.
  <img src="readme-images/css-header-hover.png" width="375px" alt="Toepassen hover">

  Iets geleerd over de scroll functie.
  <img src="readme-images/scroll-functie.png" width="375px" alt="Toepassen scroll bar.">

  Geleerd hoe een animatie werkt.
  <img src="readme-images/css-animatie.png" width="375px" alt="CSS animatie">
  (Bron 3, voor achtergrond)
  <img src="readme-images/js-animatie.png" width="375px" alt="JS animatie">



  ### Dit was lastig/Is niet gelukt:
  Ondanks dat de hover bij sommige elementen wel werkte, is het niet bij alle elementen gelukt. 
  <img src="readme-images/poging-hover.png" width="375px" alt="Poging hover over een afbeelding">

  Ook bij de recent-events hoorde er nog afbeeldingen bij, maar dat lukte niet.
   <img src="readme-images/poging-plaatjes.png" width="375px" alt="Poging afbeldingen bij recent events.">

  In de laatste week heb ik een poging gedaan om de tweede pagina te maken. Bijna de volledige inhoud staat er in, maar niet alles gestyld zoals het hoort qua uitstraling.
  
</details>



## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  1. Bron 1: Coyier, C. (2016, November 25). #150: Hey designers, if you only know one thing about JavaScript, this is what I would recommend | CSS-Tricks. CSS-Tricks. https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/
  2. Bron 2: Coyier, C. (2021, February 23). Inclusively hidden | CSS-Tricks. CSS-Tricks. https://css-tricks.com/inclusively-hidden/
  3. Bron 3: CSS Gradient — generator, maker, and background. (n.d.). CSS Gradient. https://cssgradient.io/
  4. Bron 4: GreatStack. (2022, January 28). How To Make A Search Bar Using HTML And CSS In 10 Just Minutes [Video]. YouTube. https://www.youtube.com/watch?v=9hnJsNIBq1g
  5. Bron 5: How to Add an HTML Button that Acts Like a Link. (n.d.). https://www.w3docs.com/snippets/html/how-to-create-an-html-button-that-acts-like-a-link.html

  Verder veel gebruik gemaakt van de oefingen uit codepen.
</details>
