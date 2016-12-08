/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var navic="";
function blbost(id){
            
            x=id%6;
            y=id/5-(id%6)/6;
            
            var id;
            ukazOdpoved=document.getElementById("ukazOdpoved");
            ukazOdpoved.onclick=function(){navic="<br><br>Odpověď je: "+odpovedi[id];blbost(id);};
            
            pole.innerHTML="<br>"+otazky[id]+navic;
            dobre=document.getElementById("cdobre");
            spatne=document.getElementById("cspatne");
            
            dobre.onclick=function(){spravnaOdpoved=1;blbost(id);};
            spatne.onclick=function(){spravnaOdpoved=0;blbost(id);};
            
            //alert(dobre.onclick);//document.getElementById("c"+id).onclick);
            if(counterr%2==1){
                
                
                if(spravnaOdpoved==1){
                    
                
                    bodiky1+=(x)*1000;
                    if(x===0) bodiky1+=1000;
                    pole1.innerHTML=bodiky1;
                    dobre.onclick="";
                    spatne.onclick="";
                    ukazOdpoved.onclick="";
                    pole.innerHTML="";
                    document.getElementById("c"+id).onclick="";
                    document.getElementById("c"+id).style.background="red";
                    spravnaOdpoved=2;
                    counterr++;
                    document.getElementById("h1").style.background="rgba(23, 0, 239, 0.05)";
                    navic="";
                    
                }
                if(spravnaOdpoved==0){
                
                

                    dobre.onclick="";
                    spatne.onclick="";
                    ukazOdpoved.onclick="";
                    pole.innerHTML="";
                    document.getElementById("c"+id).onclick="";
                    document.getElementById("c"+id).style.background="#999999";
                    spravnaOdpoved=2;
                    counterr++;
                    document.getElementById("h1").style.background="rgba(23, 0, 239, 0.05)";
                    navic="";
                }
            }
            else{
                
                
                
                if(spravnaOdpoved==1){
                
                    
                    bodiky2+=(x)*1000;
                    if(x===0) bodiky2+=1000;
                    pole2.innerHTML=bodiky2;
                    dobre.onclick="";
                    spatne.onclick="";
                    ukazOdpoved.onclick="";
                    pole.innerHTML="";
                    document.getElementById("c"+id).style.background="blue";
                    document.getElementById("c"+id).onclick="";
                    spravnaOdpoved=2;
                    counterr++;
                    navic="";
                    document.getElementById("h1").style.background="rgba(239, 0, 0, 0.05)";
                }
                if(spravnaOdpoved==0){
                
                

                    dobre.onclick="";
                    spatne.onclick="";
                    ukazOdpoved.onclick="";
                    pole.innerHTML="";
                    document.getElementById("c"+id).onclick="";
                    document.getElementById("c"+id).style.background="#999999";
                    spravnaOdpoved=2;
                    counterr++;
                    navic="";
                    document.getElementById("h1").style.background="rgba(239, 0, 0, 0.05)";
                }
            }
    
        }

