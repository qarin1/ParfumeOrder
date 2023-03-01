//Girdi Değişkenleri

var urunTipi,urunSecimi,urunAdedi,urunTaksidi

//çıktı değişkenleri

var araToplam,odenecekToplamTutar,kargoUcreti=7;

//global döngü değişkeni
var i;

//global nesne değişkenleri

var liste,secenek;

//dizi tipinde değişkenler

var erkekParfumleri=['CalvinKlein',100,'Lacoste',150,'Axe',50,'Bargello',30]
var kadinParfumleri=['Burryberry',300,'Namodo',250,'Vurcer-Class',50,'Nini Bokat',30]

function urunleriGetir()
{
      document.querySelectorAll('#urunListesi option').forEach(option => option.remove());

      liste=document.getElementsByName("urunTipi");
      for(i=0;i<liste.length;i++)
      {
                  if(liste[i].checked)
                  {
                        urunTipi=liste[i].value;
                  }
      }
      console.log(urunTipi);

      if(urunTipi=="E"){
            for(i=0;i<erkekParfumleri.length;i=i+2)
            {
                 secenek=document.createElement("option");
                 liste=document.getElementById("urunListesi");
                  secenek.text=erkekParfumleri[i];
                  secenek.value=erkekParfumleri[i+1];
                  liste.options.add(secenek);
            }
      }

      else if(urunTipi=="K")
      {
            for(i=0;i<kadinParfumleri.length;i=i+2)
            {
                  secenek=document.createElement("option");
                  liste=document.getElementById("urunListesi");
                   secenek.text=kadinParfumleri[i];
                   secenek.value=kadinParfumleri[i+1];
                   liste.options.add(secenek);
             }
      }
}

function urunAdediDoldur(){
      for(i=0;i<=10;i++){
            secenek=document.createElement('option');
            liste=document.getElementById('urunAdedi');
            secenek.text=i;
            secenek.value=i;
            liste.options.add(secenek);
       
           
      }

}

function urunTaksidiDoldur(){

      for(i=0;i<=12;i=i+3){
            secenek=document.createElement('option');
            liste=document.getElementById('urunTaksidi');
            secenek.text=i;
            secenek.value=i;
            liste.options.add(secenek);
      }
}


function hesapla(){
      liste=document.getElementById('urunListesi');
      urunSecimi=liste[liste.selectedIndex].value;
      console.log(urunSecimi);

      liste=document.getElementById('urunAdedi');
      urunAdedi=liste[liste.selectedIndex].value;
      console.log(urunAdedi);

      liste=document.getElementById('urunTaksidi');
      urunTaksidi=liste[liste.selectedIndex].value;
      console.log(urunTaksidi);

      araToplam=(urunSecimi*urunAdedi);
      
      if(urunTaksidi==3){
            araToplam=araToplam*1.1;
      }
      else if(urunTaksidi==6){
            araToplam=araToplam*1.2;
      }
      else if(urunTaksidi==9){
            araToplam=araToplam*1.4;
      }
      else if(urunTaksidi==12){
            araToplam=araToplam*1.5;
      }


      console.log(araToplam.toFixed(2))
    


      if(araToplam<100){
           document.getElementById('txtKargo').value=kargoUcreti;
            odenecekToplamTutar=araToplam+kargoUcreti;
            document.getElementById('txtAraToplam').value=odenecekToplamTutar;
      }
      else if(araToplam>=100){
            document.getElementById('txtKargo').value=0;
            odenecekToplamTutar=araToplam;
            document.getElementById('txtAraToplam').value=odenecekToplamTutar;
      }
      console.log(odenecekToplamTutar);



      document.getElementById('sonuc').innerHTML='ödenecek tutar: '+ odenecekToplamTutar;

}
