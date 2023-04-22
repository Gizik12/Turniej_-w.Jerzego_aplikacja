function start()
{
    let tab = {"Aenigmatici lupi":37,"Ametyst":12,"Andromeda":23,"Białe wilki":29,"Bryza":22,"Cefeusz":0,"Delfiny":50,"Dragoni":12,"Dziubki":0,
               "Feniksy":35,"Forti lupi":38,"Halit":32,"Ilex":0,"Imbricaria":0,"Jastrzębie":39,"Jutrzenka":19,"Kaczki":13,"Kasjopeja":11,"Kotlina":0,
               "Lisowczycy":35,"Lisy":23,"Lupi citi":14,"Macranthera":32,"Orion":36,"Palustris":49,"Pancerni":81,"Pectinata":69,"Petryhorcy":52,
               "Pingwiny":48,"Prinus":41,"Promienie":51,"Przełęcz":0,"Płomienie":0,"Rajtarzy":45,"Rapidi lupi":19,"Rarogi":20,"Salix":20,"Sambucus":51,"Sępy":16,
               "Silva herbis":0,"Sorbus":69,"Suber":10,"Szafir":16,"Uszatki":21,"Wzgórze":49,"Zefir":16,"Żubry":4};
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
