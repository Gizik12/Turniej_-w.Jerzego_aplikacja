function start()
{
    let tab = {"Aenigmatici lupi":26,"Ametyst":0,"Andromeda":23,"Białe wilki":0,"Bryza":7,"Cefeusz":0,"Delfiny":24,"Dragoni":12,"Dziubki":0,
               "Feniksy":35,"Forti lupi":31,"Halit":32,"Ilex":0,"Imbricaria":0,"Jastrzębie":18,"Jutrzenka":19,"Kaczki":0,"Kasjopeja":11,"Kotlina":0,
               "Lisowczycy":9,"Lisy":20,"Lupi citi":0,"Macranthera":32,"Orion":36,"Palustris":16,"Pancerni":34,"Pectinata":54,"Petryhorcy":0,
               "Pingwiny":48,"Prinus":20,"Promienie":0,"Przełęcz":0,"Płomienie":0,"Rajtarzy":12,"Rapidi lupi":8,"Rarogi":20,"Salix":20,"Sambucus":39,"Sępy":16,
               "Silva herbis":0,"Sorbus":57,"Suber":10,"Szafir":0,"Uszatki":21,"Wzgórze":49,"Zefir":16,"Żubry":4};
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
