function start()
{
    let tab = {"Aenigmatici lupi":14,"Ametyst":0,"Andromeda":16,"Białe wilki":0,"Bryza":0,"Cefeusz":0,"Delfiny":14,"Dragoni":0,"Dziubki":0,
               "Feniksy":25,"Forti lupi":31,"Halit":32,"Ilex":0,"Imbricaria":0,"Jastrzębie":0,"Jutrzenka":19,"Kaczki":0,"Kasjopeja":11,"Kotlina":0,
               "Lisowczycy":0,"Lisy":0,"Lupi citi":0,"Macranthera":18,"Orion":10,"Palustris":0,"Pancerni":18,"Pectinata":34,"Petryhorcy":0,
               "Pingwiny":16,"Prinus":20,"Promienie":0,"Przełęcz":0,"Płomienie":0,"Rajtarzy":0,"Rapidi lupi":8,"Rarogi":20,"Salix":20,"Sambucus":19,"Sępy":4,
               "Silva herbis":0,"Sorbus":37,"Suber":0,"Szafir":0,"Uszatki":5,"Wzgórze":29,"Zefir":16,"Żubry":0};
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
