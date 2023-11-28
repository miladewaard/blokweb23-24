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
  Surface ??
 
</details>



## Je website

<details open>
  <summary>Ticketmaster</summary>

  ### Je opdracht:
  De opdracht is het uitwerken van twee verschillende pagina's van een website met 'nette' vanilla HTML, CSS en Javascript.
  Mijn gekozen website is Ticketmaster. Link: https://www.ticketmaster.nl

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home screen 
  <img src="readme-images/mobiel-homescreen.jpg" width="375px" alt="home pagina van ticketmaster">

  #### Screenshot(s) van de tweede pagina (small screen):
  Artiest  
  <img src="readme-images/mobiel-artiest.jpg" width="375px" alt="inhoudelijke informatie over de artiest en het evenement">
 
</details>



## Week 1 - Typografie & kleur

<details open>
  <summary>In de eerste week hebben we kennisgemaakt met typografie & kleur. Daarnaast hebben we geleerd over hoe een custom property werkt. 

  CCS custom property is een tool die ervoor zorgt dat een waarden die herhaaldelijk voorkomt in één keer aangepast kunt worden door de waarden op één plek te definiëren en te kunnen wijzigen.

  :root {
	  --merk-kleur: blue;
  }

  h1, h2, h3 {
	  color : var(--merk-kleur);
  }
  </summary>
</details>



## Week 2 - Toegankelijkheid + Breakdownschets

<details open>
  <summary>In deze week heb ik het symposium over toegankelijkheid gevolgd. De kern van het verhaal is dat bij het maken en ontwikkelen van een ontwerp toegankelijkheid erg essentieel is, zodat mensen met een permanente, tijdelijke of situatie gebaseerde beperking ook zo aangenaam mogelijk een dienst/product kunnen gebruiken. Volg de Web Content Accessibility Guidelines (WCAG), maar betrek vooral de gebruikers! Het gaat om Inlcusive Design.

  Na het symposium is mijn besef over toegankelijkheid veel groter geworden en begrijp ik beter waarom en voor wie ik een website ga ontwerpen. 

  In de les hebben we uitleg gekregen over hoe je de toegankelijkheid van je website test door middel van een screenreading. De toegankelijkheid van een website is namelijk één van de belangrijkste richtlijnen voor het maken van een website.

  Ook hebben we uitleg gekregen over het gebruik van grid en hiermee geoefend. 
  Grid is een vlakverdeling om dingen op hun plaats te leggen en niet gaan zweven op de pagina.
  
  <img src="readme-images/grid.png" width="375px" alt="grid uitleg">

  Verder kregen we kort uitleg over media query, dit is een tool om de workflow te verbeteren. Bijvoorbeeld: 

  @media (width > 48 em) {
	p {
	 column-count: 2;
	 column-gap: 2em;
	}

  Als de media width groter wordt dan 48em dan komen de paragrafen in 2 kolommen te staan.
  </summary>
</details>


## Toegankelijkheidstest 1/2

<details open>
  <summary>De toegankelijkheid van de website heb ik getest met de functie voice over (VO) en keyboard only (KO). Daarnaast is er de Web Content Accessibility Guidelines (WCAG) dit is een document met richtlijnen om te voldoen aan de toegankelijkheid van een website. Echter als deze richtlijnen allemaal zijn behaald betekent het nog steeds niet dat je website volledig toegankelijk is, de gebruiker speelt ook nog een essentiële rol..</summary>

  ### Bevindingen
  -	VO en KO wordt in het Nederlands gegeven, maar met een Engels accent.
  -	De VO begint met “Link, doorgaan naar inhoud”, dit is niet zichtbaar. Bij de KO komt die wel tevoorschijn.
  -	“Heading level 1, Ticketmaster” (h1) niet zichtbaar, maar wordt wel genoemd na de navigatie.
  -	“Heading level 2, Highlights” (h2) niet zichtbaar, maar wordt wel genoemd na h1. 
  -	Andere h2 koppen “Recent bekeken”, “Populair” en “Aanbevolen” zijn wel zichtbaar en worden ook genoemd.
  -	Veel heading 3 (h3) gebruikt.
  -	Veel links gebruikt. Bijna elke h3 is een link.
  -	Met KO ga je per categorie door de website heen, de categorieën zijn: headings, links, form controls, landmarks, navigatie, characters, words en window spots. Je kiest zelf welk catergorie.
  -	De h2 footer-navigatie is niet zichtbaar, maar met de KO wordt die heel minimaal getoond.
  -	Je kunt met KO niet makkelijk naar een bepaald kopje, want dat moet je alle andere inhoudselementen met dezelfde functie langsgaan.
  - Geen paragrafen (p) gebruikt ??

  ### Web Content Accessibilty Guidelines (WCAG)
  Moet nog tekst komen.
</details> 


## Breakdownschets

<details open>
  <summary>Een breakdownschets maken van een website pagina geeft je overzicht van alle html-elementen waaruit de website is opgebouwd.</summary>

  ### De hele pagina: 
  <img src="readme-images/breakdownschets-homepagina.jpg" width="375px" alt="breakdown van de hele pagina">

  ### Dynamisch deel menu: 
  <img src="readme-images/breakdownschets-menu.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### Dynamisch deel footer: 
  <img src="readme-images/breakdownschets-footer.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>



## Week 3 - Flexbox + Voortgang 1

<details open>
  <summary>
  </summary>
</details>


## Voortgang 1

<details open>
  <summary></summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>



## Week 4 - JS 3-stap

<details open>
  <summary>
  </summary>
</details>



## Week 5 - Positioneren + Voortgang 2

<details open>
  <summary>
  </summary>
</details>


## Voortgang 2

<details open>
  <summary></summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...
</details>



## Week 6 - Animeren

<details open>
  <summary>
  </summary>
</details>



## Week 7 - States + Voortgang 3

<details open>
  <summary>
  </summary>
</details>


## Voortgang 3

<details open>
  <summary></summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>



## Week 8 - Toegankelijkheid

<details open>
  <summary>
  </summary>
</details>


## Toegankelijkheidstest 2/2

<details open>
  <summary></summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>



## Week 9 - Eindgesprek

<details open>
  <summary></summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>



## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>