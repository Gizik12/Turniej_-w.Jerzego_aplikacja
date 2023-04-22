function start()
{
    let tab = {"Aenigmatici lupi":0,"Ametyst":0,"Andromeda":16,"Białe wilki":0,"Bryza":0,"Cefeusz":0,"Delfiny":0,"Dragoni":0,"Dziubki":0,
               "Feniksy":5,"Forti lupi":18,"Halit":17,"Ilex":0,"Imbricaria":0,"Jastrzębie":0,"Jutrzenka":0,"Kaczki":0,"Kasjopeja":11,"Kotlina":0,
               "Lisowczycy":0,"Lisy":0,"Lupi citi":0,"Macranthera":0,"Orion":10,"Palustris":0,"Pancerni":18,"Pectinata":14,"Petryhorcy":0,
               "Pingwiny":16,"Prinus":0,"Promienie":0,"Przełęcz":0,"Płomienie":0,"Rajtarzy":0,"Rapidi lupi":0,"Rarogi":0,"Salix":0,"Sambucus":19,"Sępy":4,
               "Silva herbis":0,"Sorbus":17,"Suber":0,"Szafir":0,"Uszatki":5,"Wzgórze":13,"Zefir":0,"Żubry":0};
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
