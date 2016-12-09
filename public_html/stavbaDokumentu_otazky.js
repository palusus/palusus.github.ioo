/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var navic="";
var bodiky1=0;
var counterr=0;
var bodiky2=0;
var spravnaOdpoved=2;
var otazky=[];
var odpovedi=[];
var nazvyTemat=[];
for(c=0;c<30;c++){
    otazky[c]="Otázka číslo"+(c+1);
}
var otazkis=["Martine nevykřikuj a řekni to nahlas!","Vědci dokázali, že dívky, které ve vyučování používají mobil, budou v dospělosti hnusné jako noc. A kdo se cpe v mých hodinách, bude ve 20 tlustý jako bečka!","Jak by se vám líbilo, kdybyste dostávali celou výplatu ve dřevě? Dá se dřevo vůbec jíst?... Papír určitě, hlavně když jsou na něm taháky!","Martina chce něco dodat? Teda Tomáš.","Nikolo, ty furt meleš naprázdno, kdybych ti aspoň přinesla nějaké maso, bys mi ho pomlela!","Tomáš Cieslar: A co je to za oční vadu, když vidím takové tmavé šmouhy? Učitel XY: To sis jen špatně odlíčil oči!","Puč. Wiszczorová: Co dělá maminka, když k vám přijde do pokoje a řekne: nemáš uklizeno, měl by sis ustlat? Žák XY: Buzeruje!","Puč. Jursová: Když kůň vykročil pravou nohou, znamenalo to úspěch. Žák XY: A když levou, tak šel do salámu.","Puč. Černá: Na co se ještě využívá síra? Žák XY: Na výrobu dětských krmiv!","Film Valmont režíroval český režisér světového významu. Který? Žák XY: Zdeněk Troška.","Paní učitelko, velmi se omlouvám, zapomněl jsem zapomenout domácí úkol.","Puč: Wiszczorová: Markétka se rozhodne své dítě utopit… Žák XY: Ano, takže je to utopický román!","Komu se přezdívá Gutoš?","Komu se přezdívá Ted?","Komu se přezdívá Chlupatice?","Komu se přezdívá Poník?","Komu se přezdívá Mike G?","Komu se přezdívá Černý anděl?","Kterou osobu má naše třída ze všech nejraději?","Jaký typ ubytování má naše třída nejraději?","Kolik lidí z naší třídy nosilo/nosí rovnátka?","Kdo omdlel v alergické reakci po snězení manga ze školní jídelny?","Kdo omdlel na pitvě?","Z jakého předmětu měl Tomáš Kyzek svou jedinou dvojku na vysvědčení?","<img class='fotka' src='katicutek.jpg'>","<img class='fotka' src='anickatka.jpg'>","<img class='fotka' src='tutkola.jpg'>","<img class='fotka' src='nikolutek.jpg'>","<img class='fotka' src='laurotutek.jpg'>","<img class='fotka' src='lauroponik.jpg'>"];
for(c=0;c<30;c++){
    otazky[c]=otazkis[c];
}
for(c=0;c<30;c++){
    odpovedi[c]="";
}
var odpovedis=["puč. Wisczorová","puč. Jursová"," puč. Macurová","puč. Raszková","puč. Wiszczorová","puč. Babilonová","Pavel","Tomáš Cieslar","Tomáš Cieslar","Pavel","Pavel","Denis","Lukáš","Tomáš Cieslar","Nikol","Daniel Harok","Míša Mieszek","Martin Zaby","Paní učitelku Wiszczorovou","kláštěr","3","Katka Argalášová","Katka Argalášová","chemie"];
for(c=0;c<24;c++){
    odpovedi[c]=odpovedis[c];
}
    
for(c=0;c<5;c++){
    nazvyTemat[c]="Název tématu"+(c+1);
}
nazvyTemat[0]="Hlášky učitelů";
nazvyTemat[1]="Hlášky žáků";
var kument="";
kument+="<div id='cplac'></div>";
kument+="<div id='ctym1' ></div>";
kument+="<div id='ctym2' ></div>";
kument+="<div id='cdobre' >Dobře</div>";
kument+="<div id='cspatne'>Špatně</div>";
kument+="<div id='ukazOdpoved'>Odpověď</div>";

hah=function(){
    pole.innerHTML="";
}
kument+="<div id='odstranCplac' onClick='hah()'>×</div>";


for(x=0;x<6;x++){for(y=0;y<5;y++){
        id=y*6+x;
        lefttt=29+7.2*x;
        toppp=40+10.2*y;
        alertek="alert("+id+")";
        if(x===0){
             kument+="<div onClick ='blbost("+id+")' class='policka1' id='c"+id+"' style=' left:"+(lefttt-5)+"%;top:"+(toppp)+"%;   z-index:3'><br>"+nazvyTemat[y]+"</div>";
        }
        else{
        kument+="<div onClick ='blbost("+id+")' class='policka' id='c"+id+"' style=' left:"+lefttt+"%;top:"+toppp+"%;   z-index:3'><br>"+(x*1000)+"</div>";
    }
    }}

kument="<div class=wrap>"+kument+"</div>";
document.write(kument);

pole=document.getElementById("cplac");
pole.innerHTML="";
pole1=document.getElementById("ctym1");
pole1.innerHTML=bodiky1;
pole2=document.getElementById("ctym2");
pole2.innerHTML=bodiky2;
