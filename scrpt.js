function start()
{321
    let tab = {"Aenigmatici lupi":104,"Ametyst":139,"Andromeda":70,"Białe wilki":156,"Bryza":222,"Delfiny":164,"Dragoni":202,
               "Feniksy":72,"Forti lupi":155,"Halit":139,"Jastrzębie":166,"Jutrzenka":132,"Kaczki":105,"Kasjopeja":136,"Kotlina":126,
               "Lisowczycy":246,"Lisy":80,"Lupi citi":165,"Macranthera":255,"Orion":85,"Palustris":296,"Pancerni":309,"Pectinata":234,"Petryhorcy":251,
               "Pingwiny":134,"Prinus":206,"Promienie":215,"Przełęcz":145,"Rajtarzy":255,"Rapidi lupi":109,"Rarogi":198,"Salix":171,"Sambucus":214,"Sępy":65,
               "Sorbus":212,"Suber":105,"Szafir":160,"Uszatki":121,"Wzgórze":164,"Zefir":127,"Żubry":110};
    let sortedEntries = Object.entries(tab).sort((a, b) => b[1] - a[1]);
    let sortedObj = {};
    for (let entry of sortedEntries) 
    {
        sortedObj[entry[0]] = entry[1];
    }
    let i = 1;
    for(let k in sortedObj)
    {
        document.getElementById(i).innerHTML = k;
        document.getElementById(i+"l").innerHTML = sortedObj[k];
        i += 1;
    }

}
