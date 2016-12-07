/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var bodiky1=0;
var counterr=0;
var bodiky2=0;
var spravnaOdpoved=2;
var otazky=[];
for(c=0;c<30;c++){
    otazky[c]="Otázka číslo"+(c+1);
}
/*var otazkis=["Martine nevykřikuj a řekni to nahlas!","Vědci dokázali, že dívky, které ve vyučování používají mobil, budou v dospělosti hnusné jako noc. A kdo se cpe v mých hodinách, bude ve 20 tlustý jako bečka!","Jak by se vám líbilo, kdybyste dostávali celou výplatu ve dřevě? Dá se dřevo vůbec jíst?... Papír určitě, hlavně když jsou na něm taháky!","Martina chce něco dodat? Teda Tomáš.","Nikolo, ty furt meleš naprázdno, kdybych ti aspoň přinesla nějaké maso, bys mi ho pomlela!","Tomáš Cieslar: A co je to za oční vadu, když vidím takové tmavé šmouhy? Učitel XY: To sis jen špatně odlíčil oči!","Puč. Wiszczorová: Co dělá maminka, když k vám přijde do pokoje a řekne: nemáš uklizeno, měl by sis ustlat? Žák XY: Buzeruje!","Puč. Jursová: Když kůň vykročil pravou nohou, znamenalo to úspěch. Žák XY: A když levou, tak šel do salámu.","Puč. Černá: Na co se ještě využívá síra? Žák XY: Na výrobu dětských krmiv!","Film Valmont režíroval český režisér světového významu. Který? Žák XY: Zdeněk Troška.","Paní učitelko, velmi se omlouvám, zapomněl jsem zapomenout domácí úkol.","Puč: Wiszczorová: Markétka se rozhodne své dítě utopit… Žák XY: Ano, takže je to utopický román!"];
for(c=0;c<12;c++){
    otazky[c]=otazkis[c];
}*/

var kument="";
kument+="<div id='cplac'></div>";
kument+="<div id='ctym1' ></div>";
kument+="<div id='ctym2' ></div>";
kument+="<div id='cdobre' ></div>";
kument+="<div id='cspatne'></div>";



for(x=0;x<6;x++){for(y=0;y<5;y++){
        id=y*6+x;
        lefttt=29+7*x;
        toppp=40+10*y;
        alertek="alert("+id+")";
        kument+="<div onClick ='blbost("+id+")' class='policka' id='c"+id+"' style=' left:"+lefttt+"%;top:"+toppp+"%;   z-index:3'></div>";
}}

kument="<div class=wrap>"+kument+"</div>";
document.write(kument);

pole=document.getElementById("cplac");
pole.innerHTML="";
pole1=document.getElementById("ctym1");
pole1.innerHTML=bodiky1;
pole2=document.getElementById("ctym2");
pole2.innerHTML=bodiky2;