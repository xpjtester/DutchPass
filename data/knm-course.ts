export type KnmQuestion={question:string;options:string[];answer:number;explanation:string};
export type KnmChapter={slug:string;title:string;icon:string;summary:string;sections:{title:string;points:string[]}[];questions:KnmQuestion[]};

export const knmChapters:KnmChapter[]=[
{
slug:"nederland-leren-kennen",title:"Nederland leren kennen",icon:"🗺️",summary:"Geografie, provincies, Randstad, water en het Nederlandse landschap.",
sections:[
{title:"Ligging en provincies",points:["Nederland ligt in West-Europa aan de Noordzee en grenst aan België en Duitsland.","Nederland heeft 12 provincies. Elke provincie heeft een eigen bestuur en een provinciehoofdstad.","Amsterdam is de hoofdstad van Nederland. Den Haag is de stad waar regering en parlement zijn gevestigd."]},
{title:"Randstad en vervoer",points:["Amsterdam, Rotterdam, Den Haag en Utrecht vormen samen de kern van de Randstad.","Rotterdam heeft een zeer grote internationale haven en Schiphol is de belangrijkste luchthaven van Nederland.","Nederland heeft een uitgebreid netwerk van wegen, spoorwegen en fietspaden. Fietsen is voor veel mensen een normaal vervoermiddel."]},
{title:"Water en landschap",points:["Een deel van Nederland ligt onder zeeniveau. Dijken, duinen, dammen en waterbeheer beschermen het land tegen overstromingen.","Een polder is land waar het water kunstmatig is weggepompt en waarvan het waterpeil wordt geregeld.","Belangrijke rivieren zijn onder andere de Rijn en de Maas. Het IJsselmeer is een groot binnenmeer."]}
],
questions:[
{question:"Welke landen grenzen aan Nederland?",options:["Frankrijk en België","België en Duitsland","Duitsland en Denemarken","België en Luxemburg"],answer:1,explanation:"Nederland grenst in het oosten aan Duitsland en in het zuiden aan België."},
{question:"Waar zitten de Nederlandse regering en het parlement?",options:["Amsterdam","Rotterdam","Den Haag","Utrecht"],answer:2,explanation:"Den Haag is het politieke bestuurscentrum van Nederland."},
{question:"Wat is een polder?",options:["Een berggebied","Land dat door waterbeheer droog wordt gehouden","Een eiland in de Noordzee","Een groot stadspark"],answer:1,explanation:"Een polder is drooggelegd of droog gehouden land met een geregeld waterpeil."},
{question:"Welke vier steden horen bij de Randstad?",options:["Amsterdam, Rotterdam, Den Haag en Utrecht","Amsterdam, Groningen, Maastricht en Breda","Rotterdam, Eindhoven, Arnhem en Leiden","Utrecht, Zwolle, Tilburg en Haarlem"],answer:0,explanation:"Deze vier grote steden vormen de kern van de Randstad."}
]},
{
slug:"mensen-en-gewoonten",title:"Mensen en gewoonten",icon:"🤝",summary:"Feestdagen, omgangsvormen, afspraken, familie en dagelijks contact.",
sections:[
{title:"Feestdagen",points:["Koningsdag is op 27 april. Veel mensen dragen oranje en er zijn vrijmarkten en activiteiten.","Op 4 mei is Dodenherdenking. Om 20.00 uur zijn veel mensen twee minuten stil. Op 5 mei is Bevrijdingsdag.","Sinterklaas wordt vooral door gezinnen met kinderen gevierd. Kerstmis is voor veel mensen een familiefeest en heeft ook een christelijke oorsprong."]},
{title:"Afspraken en bezoek",points:["Bij een officiële afspraak, bijvoorbeeld bij de gemeente of een arts, is op tijd komen belangrijk.","Als je niet kunt komen, neem je zo snel mogelijk contact op om de afspraak af te zeggen of te verzetten.","Bij bezoek spreken mensen vaak vooraf een tijd af. Koffie of thee aanbieden is gebruikelijk."]},
{title:"Formeel en informeel",points:["Bij onbekenden, officiële contacten of oudere mensen wordt vaak 'u' gebruikt; bij vrienden en familie meestal 'je' of 'jij'.","Nederlanders communiceren vaak vrij direct. Dat betekent dat mensen duidelijk zeggen wat ze denken of nodig hebben.","Bij een geboorte, verjaardag of huwelijk zeg je vaak 'gefeliciteerd'. Bij een overlijden zeg je bijvoorbeeld 'gecondoleerd' of 'veel sterkte'."]}
],
questions:[
{question:"Wat gebeurt er op 4 mei om 20.00 uur?",options:["Er is vuurwerk","Veel mensen zijn twee minuten stil","Winkels gaan open","De koning houdt altijd een toespraak"],answer:1,explanation:"4 mei is Dodenherdenking."},
{question:"Wat doe je als je niet naar een afspraak kunt komen?",options:["Niets","Je komt een week later","Je belt of neemt contact op om af te zeggen","Je stuurt altijd een cadeau"],answer:2,explanation:"Bij afspraken is het normaal om tijdig af te zeggen of te verzetten."},
{question:"Wanneer gebruik je meestal 'u'?",options:["Bij een officiële of formele situatie","Alleen tegen kinderen","Alleen thuis","Nooit"],answer:0,explanation:"'U' is de beleefde en formelere aanspreekvorm."},
{question:"Wat zeg je vaak tegen iemand van wie een familielid is overleden?",options:["Gefeliciteerd","Beterschap","Gecondoleerd","Welkom"],answer:2,explanation:"'Gecondoleerd' is een gebruikelijke uitdrukking bij een overlijden."}
]},
{
slug:"gezondheid-en-zorg",title:"Gezondheid en gezondheidszorg",icon:"🩺",summary:"Huisarts, apotheek, ziekenhuis, zorgverzekering en hulp bij spoed.",
sections:[
{title:"Huisarts en apotheek",points:["Bij veel gezondheidsklachten neem je eerst contact op met de huisarts. De huisarts beoordeelt of verdere zorg nodig is.","Voor veel specialistische zorg in het ziekenhuis is een verwijzing van de huisarts nodig.","Medicijnen haal je meestal bij de apotheek. Sommige eenvoudige medicijnen zijn ook zonder recept verkrijgbaar."]},
{title:"Zorgverzekering",points:["Wie in Nederland woont of werkt, moet meestal een Nederlandse basiszorgverzekering hebben.","Je betaalt premie aan de zorgverzekeraar. Voor sommige zorg betaal je daarnaast een verplicht eigen risico.","Kinderen tot 18 jaar zijn voor de basisverzekering zonder premie meeverzekerd, maar moeten wel worden aangemeld bij een verzekeraar."]},
{title:"Spoed en ondersteuning",points:["Bij direct levensgevaar bel je 112.","Buiten kantooruren kun je bij urgente maar niet levensbedreigende klachten contact opnemen met de huisartsenpost.","Gemeenten organiseren verschillende vormen van ondersteuning, bijvoorbeeld via de Wmo voor mensen die hulp nodig hebben om zelfstandig te kunnen blijven wonen."]}
],
questions:[
{question:"Bij wie ga je meestal eerst met een niet-levensbedreigende gezondheidsklacht?",options:["De politie","De huisarts","De gemeente","De tandarts"],answer:1,explanation:"De huisarts is meestal het eerste aanspreekpunt voor medische klachten."},
{question:"Welk nummer bel je bij direct levensgevaar?",options:["0900","112","113","144"],answer:1,explanation:"112 is het alarmnummer voor politie, brandweer en ambulance bij spoed."},
{question:"Waar haal je medicijnen op recept?",options:["Bij de apotheek","Bij de bibliotheek","Bij de gemeente","Bij het UWV"],answer:0,explanation:"Medicijnen op recept haal je bij een apotheek."},
{question:"Wat is een basiszorgverzekering?",options:["Een vrijwillige reisverzekering","De verplichte basisverzekering voor medische zorg voor de meeste inwoners/werkenden","Een verzekering voor je auto","Een pensioenregeling"],answer:1,explanation:"De basiszorgverzekering dekt het wettelijk vastgestelde basispakket."}
]},
{
slug:"wonen",title:"Wonen in Nederland",icon:"🏠",summary:"Huren en kopen, woningregels, buren, afval en energie.",
sections:[
{title:"Huren en kopen",points:["Je kunt een woning huren van een woningcorporatie of particuliere verhuurder, of een woning kopen.","Bij huur betaal je meestal maandelijks huur. In sommige situaties kun je recht hebben op huurtoeslag.","Bij het kopen van een huis gebruiken veel mensen een hypotheek: een lening met de woning als zekerheid."]},
{title:"Woning en buurt",points:["Huurders en verhuurders hebben allebei rechten en plichten. Grote onderhoudsproblemen meld je bij de verhuurder.","Gemeenten maken regels over afval, parkeren, bouwen en de inrichting van de buurt.","Van buren wordt verwacht dat zij rekening met elkaar houden, bijvoorbeeld met geluid. Bij problemen is rustig overleg vaak de eerste stap."]},
{title:"Duurzaam wonen",points:["Gas, elektriciteit en water worden gemeten en moeten worden betaald.","Afval wordt per gemeente op verschillende manieren ingezameld. Vaak wordt afval gescheiden, bijvoorbeeld papier, glas en gft.","Energie besparen kan door minder te verwarmen, goed te isoleren en apparaten bewust te gebruiken."]}
],
questions:[
{question:"Wat is een hypotheek?",options:["Een huurcontract","Een lening om vaak een woning mee te financieren","Een energierekening","Een gemeentelijke belasting"],answer:1,explanation:"Een hypotheek is een lening waarbij de woning meestal als zekerheid dient."},
{question:"Waar meld je als huurder een groot onderhoudsprobleem meestal eerst?",options:["Bij de verhuurder","Bij de supermarkt","Bij de school","Bij de NS"],answer:0,explanation:"De verhuurder is verantwoordelijk voor bepaalde vormen van onderhoud."},
{question:"Wie bepaalt veel lokale regels over afval en parkeren?",options:["De gemeente","De koning","De huisarts","De bank"],answer:0,explanation:"Gemeenten regelen veel lokale voorzieningen en regels."},
{question:"Wat is een voorbeeld van afval scheiden?",options:["Alles in één zak doen","Papier apart verzamelen","Afval op straat zetten wanneer je wilt","Glas bij restafval doen"],answer:1,explanation:"Papier, glas, gft en andere afvalstromen worden vaak apart ingezameld."}
]},
{
slug:"dienstverlening",title:"Dienstverlening en instanties",icon:"🏛️",summary:"Gemeente, DigiD, belastingen, uitkeringen en belangrijke organisaties.",
sections:[
{title:"Gemeente en registratie",points:["Als je in Nederland woont, sta je meestal ingeschreven in de Basisregistratie Personen (BRP) bij de gemeente.","De gemeente regelt onder andere paspoorten en identiteitskaarten voor Nederlanders, verhuizingen, burgerlijke stand en veel lokale diensten.","Bij veel overheidszaken kun je online inloggen met DigiD. DigiD is persoonlijk: deel je inloggegevens niet met anderen."]},
{title:"Belasting en toeslagen",points:["De Belastingdienst int belastingen en regelt verschillende toeslagen.","Afhankelijk van inkomen en situatie kun je mogelijk recht hebben op bijvoorbeeld zorgtoeslag, huurtoeslag of kinderopvangtoeslag.","Je bent zelf verantwoordelijk voor het doorgeven van belangrijke veranderingen die invloed hebben op toeslagen."]},
{title:"Werk en inkomen",points:["UWV voert werknemersverzekeringen uit en helpt onder andere bij werkloosheid en arbeidsongeschiktheid.","De gemeente kan ondersteuning geven aan mensen met weinig of geen inkomen als zij aan de voorwaarden voldoen.","Voor juridische problemen bestaan onder andere het Juridisch Loket en advocaten."]}
],
questions:[
{question:"Waar geef je een verhuizing binnen Nederland meestal door?",options:["Bij de gemeente","Bij de huisarts","Bij de politie","Bij de bibliotheek"],answer:0,explanation:"De gemeente verwerkt je adres in de BRP."},
{question:"Waarvoor gebruik je DigiD?",options:["Om je auto te starten","Om veilig in te loggen bij veel overheidsorganisaties","Om boodschappen te betalen","Om een trein te besturen"],answer:1,explanation:"DigiD is een digitale identiteit voor veel publieke diensten."},
{question:"Welke organisatie regelt belastingen en veel toeslagen?",options:["Belastingdienst","NS","UWV","Politie"],answer:0,explanation:"Belastingen en veel toeslagen lopen via de Belastingdienst."},
{question:"Wat moet je met je DigiD-wachtwoord doen?",options:["Delen met vrienden","Op sociale media zetten","Geheim houden","Aan onbekenden mailen"],answer:2,explanation:"DigiD is persoonlijk en moet veilig worden gebruikt."}
]},
{
slug:"opvoeding-en-onderwijs",title:"Opvoeding en onderwijs",icon:"🎓",summary:"Kinderopvang, basisschool, voortgezet onderwijs, mbo/hbo/wo en ouderbetrokkenheid.",
sections:[
{title:"Kinderen en school",points:["Kinderen kunnen vanaf 4 jaar naar de basisschool. Vanaf 5 jaar geldt de leerplicht.","Op de basisschool leren kinderen onder andere taal, rekenen en sociale vaardigheden.","Ouders hebben contact met de school en zijn verantwoordelijk voor schoolbezoek van hun leerplichtige kind."]},
{title:"Na de basisschool",points:["Na de basisschool gaan leerlingen naar het voortgezet onderwijs, bijvoorbeeld vmbo, havo of vwo.","Na het vmbo kiezen veel leerlingen een mbo-opleiding. Havo kan toegang geven tot het hbo en vwo tot de universiteit.","Mbo is sterk gericht op een beroep; hbo en universiteit zijn vormen van hoger onderwijs."]},
{title:"Opvoeding",points:["Ouders zijn verantwoordelijk voor de verzorging en opvoeding van hun kinderen.","Lichamelijk geweld tegen kinderen is niet toegestaan. Bij ernstige zorgen over veiligheid kan professionele hulp worden ingeschakeld.","Kinderopvang kan ouders helpen om werk, opleiding en zorg voor kinderen te combineren."]}
],
questions:[
{question:"Vanaf welke leeftijd geldt in Nederland meestal de leerplicht?",options:["3 jaar","4 jaar","5 jaar","7 jaar"],answer:2,explanation:"Kinderen mogen vanaf 4 jaar naar school; vanaf 5 jaar zijn ze leerplichtig."},
{question:"Welke opleiding is sterk gericht op het leren van een beroep?",options:["Mbo","Basisschool","Vwo alleen","Universiteit alleen"],answer:0,explanation:"Het mbo leidt op voor veel praktische en beroepsgerichte functies."},
{question:"Wat komt meestal na de basisschool?",options:["Voortgezet onderwijs","Pensioen","Universiteit voor iedereen","Werk zonder school"],answer:0,explanation:"Leerlingen gaan na groep 8 naar het voortgezet onderwijs."},
{question:"Wie is verantwoordelijk voor de opvoeding van een kind?",options:["Alleen de buurman","De ouders/verzorgers","Alleen de gemeente","De werkgever"],answer:1,explanation:"Ouders of verzorgers dragen de primaire verantwoordelijkheid voor verzorging en opvoeding."}
]},
{
slug:"werken",title:"Werken in Nederland",icon:"💼",summary:"Werk zoeken, contracten, loon, rechten en plichten op het werk.",
sections:[
{title:"Werk zoeken",points:["Vacatures vind je via websites, uitzendbureaus, werkgevers, netwerken en UWV.","Bij een sollicitatie stuur je vaak een cv en motivatiebrief en kun je worden uitgenodigd voor een gesprek.","Diploma's en werkervaring kunnen belangrijk zijn. Voor sommige beroepen gelden wettelijke of professionele eisen."]},
{title:"Arbeidscontract",points:["In een arbeidscontract staan afspraken over werk, loon, werktijden en duur van het contract.","Een werknemer heeft recht op minimaal het wettelijk minimumloon dat bij zijn of haar situatie hoort en op vakantiedagen.","Werkgever en werknemer moeten zich houden aan afspraken en aan arbeidswetgeving."]},
{title:"Ziekte en werkloosheid",points:["Als je ziek bent en niet kunt werken, meld je je ziek volgens de regels van je werkgever.","Werkgevers hebben verplichtingen rond veilige arbeidsomstandigheden en begeleiding bij ziekte.","Als je je baan verliest, kun je onder voorwaarden recht hebben op een WW-uitkering. UWV beoordeelt dat."]}
],
questions:[
{question:"Wat staat vaak in een arbeidscontract?",options:["Alleen je woonadres","Afspraken over werk, loon en werktijden","Alleen je hobby's","De namen van je buren"],answer:1,explanation:"Een contract bevat belangrijke afspraken tussen werknemer en werkgever."},
{question:"Wat doe je als je ziek bent en niet kunt werken?",options:["Je meldt je ziek volgens de regels van je werkgever","Je verdwijnt zonder bericht","Je belt altijd de politie","Je zegt niets"],answer:0,explanation:"Je moet je werkgever volgens de afgesproken procedure informeren."},
{question:"Welke organisatie beoordeelt onder andere recht op WW?",options:["UWV","NS","DUO","Kadaster"],answer:0,explanation:"UWV voert werknemersverzekeringen zoals WW uit."},
{question:"Wat is een cv?",options:["Een overzicht van opleiding en werkervaring","Een belastingaanslag","Een huurcontract","Een zorgverzekering"],answer:0,explanation:"Een curriculum vitae laat onder meer je opleiding, ervaring en vaardigheden zien."}
]},
{
slug:"samenleven",title:"Samenleven in Nederland",icon:"⚖️",summary:"Gelijke rechten, vrijheid, veiligheid, discriminatie en verantwoordelijkheid.",
sections:[
{title:"Rechten en vrijheid",points:["In Nederland gelden grondrechten zoals gelijke behandeling, vrijheid van meningsuiting, vrijheid van godsdienst en privacy.","Vrijheden hebben grenzen: je moet de wet respecteren en mag de rechten en veiligheid van anderen niet schenden.","Mannen en vrouwen hebben gelijke rechten. Iedereen mag zelf keuzes maken over bijvoorbeeld opleiding, werk, relaties en levensstijl binnen de wet."]},
{title:"Discriminatie en veiligheid",points:["Discriminatie op gronden zoals afkomst, geloof, geslacht of seksuele gerichtheid is verboden.","Bij geweld of bedreiging kun je hulp zoeken. Bij acuut gevaar bel je 112.","Huiselijk geweld en gedwongen huwelijk zijn niet toegestaan. Slachtoffers kunnen hulp vragen bij professionele organisaties."]},
{title:"Meedoen in de samenleving",points:["Vrijwilligerswerk, verenigingen, sportclubs en buurtactiviteiten zijn manieren om andere mensen te ontmoeten en mee te doen.","Je mag lid worden van een vereniging, vakbond of politieke partij als je aan de voorwaarden voldoet.","Iedereen heeft naast rechten ook verantwoordelijkheden, zoals wetten naleven en rekening houden met anderen."]}
],
questions:[
{question:"Hebben mannen en vrouwen in Nederland dezelfde rechten?",options:["Ja","Nee","Alleen op het werk","Alleen vanaf 30 jaar"],answer:0,explanation:"Gelijke behandeling is een belangrijk uitgangspunt van de Nederlandse rechtsstaat."},
{question:"Is discriminatie toegestaan?",options:["Ja, altijd","Alleen op het werk","Nee","Alleen door de overheid"],answer:2,explanation:"Discriminatie is verboden."},
{question:"Wat doe je bij acuut gevaar?",options:["112 bellen","Een week wachten","Alleen een brief schrijven","Niets"],answer:0,explanation:"Bij een noodsituatie bel je 112."},
{question:"Wat is een voorbeeld van meedoen in de samenleving?",options:["Vrijwilligerswerk doen","Nooit contact met iemand hebben","Regels negeren","Afval op straat gooien"],answer:0,explanation:"Vrijwilligerswerk en verenigingen zijn voorbeelden van maatschappelijke deelname."}
]},
{
slug:"geschiedenis",title:"Geschiedenis van Nederland",icon:"📜",summary:"Belangrijke hoofdlijnen uit de Nederlandse geschiedenis en herdenking.",
sections:[
{title:"Ontstaan en Gouden Eeuw",points:["In de 16e eeuw kwamen de Nederlandse gewesten in opstand tegen de Spaanse koning. Willem van Oranje speelde hierin een belangrijke rol.","In de 17e eeuw groeiden handel, scheepvaart, wetenschap en kunst sterk. Deze periode wordt vaak de Gouden Eeuw genoemd.","De Nederlandse rijkdom uit die tijd was ook verbonden met kolonialisme en slavernij. Die geschiedenis heeft nog steeds maatschappelijke betekenis."]},
{title:"Tweede Wereldoorlog",points:["Nederland werd in mei 1940 door nazi-Duitsland bezet. De bezetting duurde tot 1945.","Joden en andere groepen werden vervolgd en vermoord tijdens de Holocaust. Anne Frank is een bekend Joods slachtoffer dat tijdens haar onderduik een dagboek schreef.","Op 4 mei herdenkt Nederland oorlogsslachtoffers. Op 5 mei wordt de bevrijding en vrijheid gevierd."]},
{title:"Na 1945",points:["Na de oorlog werd Nederland opnieuw opgebouwd en groeide de verzorgingsstaat.","Nederland ging intensiever samenwerken met andere Europese landen, wat uiteindelijk leidde tot de huidige Europese Unie.","Na de oorlog kwamen mensen uit voormalige koloniën, arbeidsmigranten en vluchtelingen naar Nederland. Hierdoor werd de bevolking cultureel diverser."]}
],
questions:[
{question:"Wie speelde een belangrijke rol in de Nederlandse Opstand tegen Spanje?",options:["Willem van Oranje","Napoleon","Anne Frank","Rembrandt als koning"],answer:0,explanation:"Willem van Oranje is een centrale figuur in het ontstaan van de Nederlandse staat."},
{question:"Wanneer werd Nederland bevrijd van de Duitse bezetting?",options:["1918","1945","1960","2002"],answer:1,explanation:"De Duitse bezetting eindigde in 1945."},
{question:"Wat wordt op 4 mei herdacht?",options:["Koningsdag","Oorlogsslachtoffers","Nieuwjaar","De start van de zomer"],answer:1,explanation:"4 mei is Dodenherdenking."},
{question:"Wie was Anne Frank?",options:["Een koningin","Een Joods meisje dat tijdens de Holocaust onderdook en een dagboek schreef","Een minister-president","Een ontdekkingsreiziger"],answer:1,explanation:"Haar dagboek werd na de oorlog wereldwijd bekend."}
]},
{
slug:"politiek-en-rechtsstaat",title:"Politiek en rechtsstaat",icon:"🗳️",summary:"Democratie, parlement, verkiezingen, gemeente en grondrechten.",
sections:[
{title:"Parlementaire democratie",points:["Nederland is een parlementaire democratie en een constitutionele monarchie.","Het parlement bestaat uit de Tweede Kamer en de Eerste Kamer. De Tweede Kamer heeft 150 leden; de Eerste Kamer 75.","De Tweede Kamer controleert de regering en behandelt wetsvoorstellen. Voor een gewone wet moeten beide Kamers akkoord gaan."]},
{title:"Verkiezingen en bestuur",points:["Nederlandse staatsburgers van 18 jaar en ouder kunnen onder de wettelijke voorwaarden stemmen voor de Tweede Kamer.","Gemeenten en provincies hebben gekozen volksvertegenwoordigers: de gemeenteraad en Provinciale Staten.","Provinciale Staten kiezen de leden van de Eerste Kamer. Ook waterschappen hebben een gekozen algemeen bestuur."]},
{title:"Rechtsstaat",points:["De Grondwet bevat regels over de inrichting van de staat en belangrijke grondrechten.","Wetgevende, uitvoerende en rechterlijke taken zijn van elkaar gescheiden zodat macht wordt gecontroleerd.","Rechters zijn onafhankelijk. De overheid moet zich aan de wet houden en burgers hebben rechten tegenover de overheid."]}
],
questions:[
{question:"Uit welke twee Kamers bestaat het Nederlandse parlement?",options:["Gemeenteraad en provincie","Tweede Kamer en Eerste Kamer","Kabinet en rechtbank","Koning en burgemeester"],answer:1,explanation:"Het parlement bestaat uit de Tweede Kamer en de Eerste Kamer."},
{question:"Hoeveel leden heeft de Tweede Kamer?",options:["75","100","150","200"],answer:2,explanation:"De Tweede Kamer heeft 150 leden."},
{question:"Wie kiezen de leden van de Eerste Kamer?",options:["De leden van Provinciale Staten","Alleen de koning","Alle burgemeesters","De rechtbanken"],answer:0,explanation:"De Eerste Kamer wordt indirect gekozen via de Provinciale Staten."},
{question:"Wat is een belangrijke functie van de Grondwet?",options:["Alleen verkeersregels opschrijven","Grondrechten en regels voor het staatsbestel vastleggen","Treintijden bepalen","Prijzen in winkels bepalen"],answer:1,explanation:"De Grondwet bevat belangrijke grondrechten en regels over het bestuur van Nederland."}
]}
];

export const knmTotalQuestions=knmChapters.reduce((n,c)=>n+c.questions.length,0);
