function hasilkonversi(){     
   
    hitung = document.querySelector('#sct');
    output = hitung.options[hitung.selectedIndex].value;
    yy =document.getElementById("txtinput").value;
    
    var cf = (9/5)*parseFloat(yy)+32;
    var ck = 273+parseFloat(yy);
    var cr = 4/5*parseFloat(yy);
    var fc = (parseFloat(yy)-32)*5/9;
    var fk = 5/9*(parseFloat(yy)-32)+273;
    var fr = 4/9*(parseFloat(yy)-32);
    var kc = parseFloat(yy)-273;
    var kf = 9/5*(parseFloat(yy)-273)+32;
    var kr = 4/5*(parseFloat(yy)-273);
    var rc = (5/4)*parseFloat(yy);
    var rf =(9/4)*parseFloat(yy)+32;
    var rk = (5/4)*parseFloat(yy)+273;
    var bil = parseFloat(yy);
    if(isNaN(bil)){
      alert("Masukan Nilai Terlebih Dahulu");
      }
    else{
    
    switch (output) {
      case "txtcf": 
      document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Celcius Ke Farenheit Adalah Adalah '+cf+'F';
      document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Kelvin Adalah';
      document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Reamur Adalah';
      document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai C='+parseFloat(yy)+' maka F=(9/5)*'+parseFloat(yy)+'+32= '+cf+'F';
      document.querySelector('.hasil1').innerHTML ='Celcius Ke Kelvin Dari Nilai C='+parseFloat(yy)+' Adalah K='+parseFloat(yy)+'+273= '+ck+'K';
      document.querySelector('.hasil2').innerHTML ='Celcius ke Reamur Dari Nilai C='+parseFloat(yy)+' Adalah R=4/5*'+parseFloat(yy)+' = '+cr+'R';
        break;
      case "txtck":
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Celcius Ke Kelvin Adalah Adalah '+ck+'K';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Farhrenheit Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Reamur Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika  Nilai C='+parseFloat(yy)+' maka K='+parseFloat(yy)+'+273= '+ck+'K';
        document.querySelector('.hasil1').innerHTML ='Celcius Ke Fahrenheit Dari Nilai C='+parseFloat(yy)+' Adalah F=(9/5)*'+parseFloat(yy)+'+32= '+cf+'F';
        document.querySelector('.hasil2').innerHTML ='Celcius ke Reamur Dari Nilai C='+parseFloat(yy)+' Adalah R=4/5*'+parseFloat(yy)+' = '+cr+'R';
       
        break;
      case "txtcr":
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Celcius Ke Reamur Adalah Adalah '+cr+'R';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Farhrenheit Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Kelvin Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai C='+parseFloat(yy)+' maka R=4/5*'+parseFloat(yy)+' = '+cr+'R';
        document.querySelector('.hasil1').innerHTML ='Celcius Ke Fahrenheit Dari Nilai C='+parseFloat(yy)+' Adalah F=(9/5)*'+parseFloat(yy)+'+32= '+cf+'F';
        document.querySelector('.hasil2').innerHTML ='Celcius ke Kelvin Dari Nilai C='+parseFloat(yy)+' Adalah K='+parseFloat(yy)+'+273= '+ck+'K';
       
        break;
      case "txtfc":       
      document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Fahrenheit Ke Celcius Adalah '+fc+'C';
      document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Kelvin Adalah';
      document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Reamur Adalah';
      document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai F='+parseFloat(yy)+' maka C=('+parseFloat(yy)+'-32)+*5/9= '+fc+'C' ;
      document.querySelector('.hasil1').innerHTML ='Fahrenheit Ke Kelvin Dari Nilai F='+parseFloat(yy)+' Adalah K=5/9*('+parseFloat(yy)+'-32)+273='+fk+'K';
      document.querySelector('.hasil2').innerHTML ='Fahrenheit ke Reamur Dari Nilai F='+parseFloat(yy)+' Adalah R=4/9*('+parseFloat(yy)+'-32)= '+fr+'R';
        break;
      case "txtfk":
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Fahrenheit Ke Kelvin Adalah '+fk+'K';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Reamur Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai F='+parseFloat(yy)+' maka K=5/9*('+parseFloat(yy)+'-32)+273='+fk+'K' ;
        document.querySelector('.hasil1').innerHTML ='Fahrenheit Ke Celcius Dari Nilai F='+parseFloat(yy)+'Adalah C=('+parseFloat(yy)+'-32)+*5/9= '+fc+'C';
        document.querySelector('.hasil2').innerHTML ='Fahrenheit ke Reamur Dari Nilai F='+parseFloat(yy)+' Adalah R=4/9*('+parseFloat(yy)+'-32)= '+fr+'R';      
        break;
      case "txtfr":
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Fahrenheit Ke Reamur Adalah '+fr+'R';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Kelvin Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai F='+parseFloat(yy)+' maka R=4/9*('+parseFloat(yy)+'-32)= '+fr+'R';   
        document.querySelector('.hasil1').innerHTML ='Fahrenheit Ke Celcius Dari Nilai F='+parseFloat(yy)+'Adalah C=('+parseFloat(yy)+'-32)+*5/9= '+fc+'C';
        document.querySelector('.hasil2').innerHTML ='Fahrenheit ke Reamur Dari Nilai F='+parseFloat(yy)+' Adalah K=5/9*('+parseFloat(yy)+'-32)+273='+fk+'K';    
          break;
      case "txtkc":
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Kelvin Ke Celcius Adalah '+kc+'C';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Fahrenheit Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Reamur Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai K='+parseFloat(yy)+' maka C='+parseFloat(yy)+'-273)= '+kc+'C';   
        document.querySelector('.hasil1').innerHTML ='Kelvin Ke Fahrenheit Dari Nilai K='+parseFloat(yy)+'Adalah F=9/5*('+parseFloat(yy)+'-273)+32= '+kf+'F';
        document.querySelector('.hasil2').innerHTML ='Kelvin ke Reamur Dari Nilai K='+parseFloat(yy)+' Adalah R=4/5*('+parseFloat(yy)+'-273)'+kr+'R';    
          break;
      case "txtkf":
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Kelvin Ke Fahrenheit Adalah '+kf+'F';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Reamur Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai K='+parseFloat(yy)+' maka ;F=9/5*('+parseFloat(yy)+'-273)+32= '+kf+'F';   
        document.querySelector('.hasil1').innerHTML ='Kelvin Ke Celcius Dari Nilai K='+parseFloat(yy)+'Adalah C='+parseFloat(yy)+'-273)= '+kc+'C';
        document.querySelector('.hasil2').innerHTML ='Kelvin ke Reamur Dari Nilai K='+parseFloat(yy)+' Adalah R=4/5*('+parseFloat(yy)+'-273)'+kr+'R';    
          
          break;
      case "txtkr":
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Kelvin Ke Reamur Adalah '+kr+'R';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Fahrenheit Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai K='+parseFloat(yy)+' maka R=4/5*('+parseFloat(yy)+'-273)'+kr+'R';       
        document.querySelector('.hasil1').innerHTML ='Kelvin Ke Celcius Dari Nilai K='+parseFloat(yy)+'Adalah C='+parseFloat(yy)+'-273)= '+kc+'C';
        document.querySelector('.hasil2').innerHTML ='Kelvin ke Fahrenheit Dari Nilai K='+parseFloat(yy)+' Adalah F=9/5*('+parseFloat(yy)+'-273)+32= '+kf+'F';
             
            break;
      case "txtrc":       
      document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Reamur Ke Celcius Adalah '+rc+'C';
      document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Fahrenheit Adalah';
      document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Kelvin Adalah';
      document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai R='+parseFloat(yy)+' maka C=(5/4)*'+parseFloat(yy)+'= '+rc+'C';   
      document.querySelector('.hasil1').innerHTML ='Reamur Ke Fahrenheit Dari Nilai R='+parseFloat(yy)+'Adalah F=(9/4)*'+parseFloat(yy)+'+32= '+rf+'F';
      document.querySelector('.hasil2').innerHTML ='Reamur ke Kelvin Dari Nilai R='+parseFloat(yy)+' Adalah R=(5/4)*'+parseFloat(yy)+'+273= '+rk+'R';    
    
            break;
      case "txtrf":
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Reamur Ke Fahrenheit Adalah '+rf+'F';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Kelvin Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai R='+parseFloat(yy)+' maka F=(9/4)*'+parseFloat(yy)+'+32= '+rf+'F';  
        document.querySelector('.hasil1').innerHTML ='Reamur Ke Celcius Dari Nilai R='+parseFloat(yy)+'Adalah sC=(5/4)*'+parseFloat(yy)+'= '+rc+'C'; 
        document.querySelector('.hasil2').innerHTML ='Reamur ke Kelvin Dari Nilai R='+parseFloat(yy)+' Adalah R=(5/4)*'+parseFloat(yy)+'+273= '+rk+'R';    
           
            break;
      case "txtrk":
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Reamur Ke Kelvin Adalah '+rk+'K';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Fahrenheit Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai R='+parseFloat(yy)+' maka  R=(5/4)*'+parseFloat(yy)+'+273= '+rk+'R';   
        document.querySelector('.hasil1').innerHTML ='Reamur Ke Celcius Dari Nilai R='+parseFloat(yy)+'Adalah C=(5/4)*'+parseFloat(yy)+'= '+rc+'C'; 
        document.querySelector('.hasil2').innerHTML ='Reamur ke Kelvin Dari Nilai R='+parseFloat(yy)+' Adalah F=(9/4)*'+parseFloat(yy)+'+32= '+rf+'F';
         
            break;
      default:
        console.log("ERROR");
        break;
      }
    }
    }
  

  
  function hapus(){
    document.getElementById("txtinput").value="0";
    document.getElementById("txthasil").innerHTML="";
    document.getElementById("hasil1").innerHTML="";
    document.getElementById("hasil2").innerHTML="";
    document.getElementById('lbl').innerHTML='Hasil Dari Konversi Suhu';
    document.getElementById('lhasil1').innerHTML ='Hasil lain Pertama';
    document.getElementById('lhasil2').innerHTML ='Hasil lain Kedua';
  
   
  }
  function balik(){
    hitung = document.querySelector('#sct');
    output = hitung.options[hitung.selectedIndex].value;
    yy =document.getElementById("txtinput").value;
  
    var cf = (9/5)*parseFloat(yy)+32;
    var ck = 273+parseFloat(yy);
    var cr = 4/5*parseFloat(yy);
    var fc = (parseFloat(yy)-32)*5/9;
    var fk = 5/9*(parseFloat(yy)-32)+273;
    var fr = 4/9*(parseFloat(yy)-32);
    var kc = parseFloat(yy)-273;
    var kf = 9/5*(parseFloat(yy)-273)+32;
    var kr = 4/5*(parseFloat(yy)-273);
    var rc = (5/4)*parseFloat(yy);
    var rf =(9/4)*parseFloat(yy)+32;
    var rk = (5/4)*parseFloat(yy)+273;
    var bil = parseFloat(yy);
    if(isNaN(yy)){
      document.getElementById("txtinput").value="0";
    document.getElementById("txthasil").innerHTML="";
    document.getElementById("hasil1").innerHTML="";
    document.getElementById("hasil2").innerHTML="";
    document.getElementById('lbl').innerHTML='Hasil Dari Konversi Suhu';
    document.getElementById('lhasil1').innerHTML ='Hasil lain Pertama';
    document.getElementById('lhasil2').innerHTML ='Hasil lain Kedua';
    }else {
    switch (output) {
      case "txtfc": 
      document.getElementById("sct").selectedIndex="0";
      document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Celcius Ke Farenheit Adalah Adalah '+cf+'F';
      document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Kelvin Adalah';
      document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Reamur Adalah';
      document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai C='+parseFloat(yy)+' maka F=(9/5)*'+parseFloat(yy)+'+32= '+cf+'F';
      document.querySelector('.hasil1').innerHTML ='Celcius Ke Kelvin Dari Nilai C='+parseFloat(yy)+' Adalah K='+parseFloat(yy)+'+273= '+ck+'K';
      document.querySelector('.hasil2').innerHTML ='Celcius ke Reamur Dari Nilai C='+parseFloat(yy)+' Adalah R=4/5*'+parseFloat(yy)+' = '+cr+'R';
        break;
      case "txtkc":
        document.getElementById("sct").selectedIndex="1";
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Celcius Ke Kelvin Adalah Adalah '+ck+'K';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Farhrenheit Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Reamur Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika  Nilai C='+parseFloat(yy)+' maka K='+parseFloat(yy)+'+273= '+ck+'K';
        document.querySelector('.hasil1').innerHTML ='Celcius Ke Fahrenheit Dari Nilai C='+parseFloat(yy)+' Adalah F=(9/5)*'+parseFloat(yy)+'+32= '+cf+'F';
        document.querySelector('.hasil2').innerHTML ='Celcius ke Reamur Dari Nilai C='+parseFloat(yy)+' Adalah R=4/5*'+parseFloat(yy)+' = '+cr+'R';
       
        break;
      case "txtrc":
        document.getElementById("sct").selectedIndex="2";
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Celcius Ke Reamur Adalah Adalah '+cr+'R';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Farhrenheit Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Celcius Ke Kelvin Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai C='+parseFloat(yy)+' maka R=4/5*'+parseFloat(yy)+' = '+cr+'R';
        document.querySelector('.hasil1').innerHTML ='Celcius Ke Fahrenheit Dari Nilai C='+parseFloat(yy)+' Adalah F=(9/5)*'+parseFloat(yy)+'+32= '+cf+'F';
        document.querySelector('.hasil2').innerHTML ='Celcius ke Kelvin Dari Nilai C='+parseFloat(yy)+' Adalah K='+parseFloat(yy)+'+273= '+ck+'K';
       
        break;
      case "txtcf":     
      document.getElementById("sct").selectedIndex="3";  
      document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Fahrenheit Ke Celcius Adalah '+fc+'C';
      document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Kelvin Adalah';
      document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Reamur Adalah';
      document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai F='+parseFloat(yy)+' maka C=('+parseFloat(yy)+'-32)+*5/9= '+fc+'C' ;
      document.querySelector('.hasil1').innerHTML ='Fahrenheit Ke Kelvin Dari Nilai F='+parseFloat(yy)+' Adalah K=5/9*('+parseFloat(yy)+'-32)+273='+fk+'K';
      document.querySelector('.hasil2').innerHTML ='Fahrenheit ke Reamur Dari Nilai F='+parseFloat(yy)+' Adalah R=4/9*('+parseFloat(yy)+'-32)= '+fr+'R';
        break;
      case "txtkf":
        document.getElementById("sct").selectedIndex="4";
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Fahrenheit Ke Kelvin Adalah '+fk+'K';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Reamur Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai F='+parseFloat(yy)+' maka K=5/9*('+parseFloat(yy)+'-32)+273='+fk+'K' ;
        document.querySelector('.hasil1').innerHTML ='Fahrenheit Ke Celcius Dari Nilai F='+parseFloat(yy)+'Adalah C=('+parseFloat(yy)+'-32)+*5/9= '+fc+'C';
        document.querySelector('.hasil2').innerHTML ='Fahrenheit ke Reamur Dari Nilai F='+parseFloat(yy)+' Adalah R=4/9*('+parseFloat(yy)+'-32)= '+fr+'R';      
        break;
      case "txtrf":
        document.getElementById("sct").selectedIndex="5";
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Fahrenheit Ke Reamur Adalah '+fr+'R';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Fahrenheit Ke Kelvin Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai F='+parseFloat(yy)+' maka R=4/9*('+parseFloat(yy)+'-32)= '+fr+'R';   
        document.querySelector('.hasil1').innerHTML ='Fahrenheit Ke Celcius Dari Nilai F='+parseFloat(yy)+'Adalah C=('+parseFloat(yy)+'-32)+*5/9= '+fc+'C';
        document.querySelector('.hasil2').innerHTML ='Fahrenheit ke Reamur Dari Nilai F='+parseFloat(yy)+' Adalah K=5/9*('+parseFloat(yy)+'-32)+273='+fk+'K';    
          break;
      case "txtck":
        document.getElementById("sct").selectedIndex="6";
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Kelvin Ke Celcius Adalah '+kc+'C';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Fahrenheit Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Reamur Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai K='+parseFloat(yy)+' maka C='+parseFloat(yy)+'-273)= '+kc+'C';   
        document.querySelector('.hasil1').innerHTML ='Kelvin Ke Fahrenheit Dari Nilai K='+parseFloat(yy)+'Adalah F=9/5*('+parseFloat(yy)+'-273)+32= '+kf+'F';
        document.querySelector('.hasil2').innerHTML ='Kelvin ke Reamur Dari Nilai K='+parseFloat(yy)+' Adalah R=4/5*('+parseFloat(yy)+'-273)'+kr+'R';    
          break;
      case "txtfk":
        document.getElementById("sct").selectedIndex="7";
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Kelvin Ke Fahrenheit Adalah '+kf+'F';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Reamur Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai K='+parseFloat(yy)+' maka ;F=9/5*('+parseFloat(yy)+'-273)+32= '+kf+'F';   
        document.querySelector('.hasil1').innerHTML ='Kelvin Ke Celcius Dari Nilai K='+parseFloat(yy)+'Adalah C='+parseFloat(yy)+'-273)= '+kc+'C';
        document.querySelector('.hasil2').innerHTML ='Kelvin ke Reamur Dari Nilai K='+parseFloat(yy)+' Adalah R=4/5*('+parseFloat(yy)+'-273)'+kr+'R';    
          
          break;
      case "txtrk":
        document.getElementById("sct").selectedIndex="8";
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Kelvin Ke Reamur Adalah '+kr+'R';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Kelvin Ke Fahrenheit Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai K='+parseFloat(yy)+' maka R=4/5*('+parseFloat(yy)+'-273)'+kr+'R';       
        document.querySelector('.hasil1').innerHTML ='Kelvin Ke Celcius Dari Nilai K='+parseFloat(yy)+'Adalah C='+parseFloat(yy)+'-273)= '+kc+'C';
        document.querySelector('.hasil2').innerHTML ='Kelvin ke Fahrenheit Dari Nilai K='+parseFloat(yy)+' Adalah F=9/5*('+parseFloat(yy)+'-273)+32= '+kf+'F';
             
            break;
      case "txtcr":  
      document.getElementById("sct").selectedIndex="9";     
      document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Reamur Ke Celcius Adalah '+rc+'C';
      document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Fahrenheit Adalah';
      document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Kelvin Adalah';
      document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai R='+parseFloat(yy)+' maka C=(5/4)*'+parseFloat(yy)+'= '+rc+'C';   
      document.querySelector('.hasil1').innerHTML ='Reamur Ke Fahrenheit Dari Nilai R='+parseFloat(yy)+'Adalah F=(9/4)*'+parseFloat(yy)+'+32= '+rf+'F';
      document.querySelector('.hasil2').innerHTML ='Reamur ke Kelvin Dari Nilai R='+parseFloat(yy)+' Adalah R=(5/4)*'+parseFloat(yy)+'+273= '+rk+'R';    
    
            break;
      case "txtfr":
        document.getElementById("sct").selectedIndex="10";
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Reamur Ke Fahrenheit Adalah '+rf+'F';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Kelvin Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai R='+parseFloat(yy)+' maka F=(9/4)*'+parseFloat(yy)+'+32= '+rf+'F';  
        document.querySelector('.hasil1').innerHTML ='Reamur Ke Celcius Dari Nilai R='+parseFloat(yy)+'Adalah sC=(5/4)*'+parseFloat(yy)+'= '+rc+'C'; 
        document.querySelector('.hasil2').innerHTML ='Reamur ke Kelvin Dari Nilai R='+parseFloat(yy)+' Adalah R=(5/4)*'+parseFloat(yy)+'+273= '+rk+'R';    
           
            break;
      case "txtkr":
        document.getElementById("sct").selectedIndex="11";
        document.getElementById('lbl').innerHTML ='Hasil Konversi Suhu Reamur Ke Kelvin Adalah '+rk+'K';
        document.getElementById('lhasil1').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Celcius Adalah';
        document.getElementById('lhasil2').innerHTML ='Hasil Lain Konversi Suhu Reamur Ke Fahrenheit Adalah';
        document.querySelector('.txthasil').innerHTML ='Perhatikan Tabel Diatas Jika Nilai R='+parseFloat(yy)+' maka  R=(5/4)*'+parseFloat(yy)+'+273= '+rk+'R';   
        document.querySelector('.hasil1').innerHTML ='Reamur Ke Celcius Dari Nilai R='+parseFloat(yy)+'Adalah C=(5/4)*'+parseFloat(yy)+'= '+rc+'C'; 
        document.querySelector('.hasil2').innerHTML ='Reamur ke Kelvin Dari Nilai R='+parseFloat(yy)+' Adalah F=(9/4)*'+parseFloat(yy)+'+32= '+rf+'F';
         
            break;
      default:
        console.log("ERROR");
        break;
    }
  }
  
  
  }
