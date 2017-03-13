//My first Game: How lucky are you? Game untuk para gambler :p
//Game ini menguji keberuntunganmu, sesederhana melempar koin: hanya ada 2 sisi mata koin
//Isilah properti nama dan umur dari 3 object berikut: kamu, ayahmu & ibumu
//Jalankan dan lihat keberuntunganmu pada console/jendela peringatan. Simple bukan?
var kamu = {
    nama: 'aldy',
    umur: 26
}
var ayahmu = {
    nama: 'nama bapakku',
    umur: 56
}
var ibumu = {
    nama: 'nama ibuku',
    umur: 56
}


//jangan ubah apapun dibawah ini

//membuat array
var arr = [];
arr.push(kamu,ayahmu,ibumu);


var untung = 0
var rugi = 0

//iterasi-looping dan if-else
for(i=0;i<arr.length;i++){
  var random = Math.random()*100;
  if(arr[i].umur>random){
    untung=untung+1;
  } else {
    rugi=rugi+1;
  }
}
if (untung-rugi>0){
  console.log('Koefisien kamu positif, sepertinya kamu ditakdirkan untuk jadi anak yang beruntung');
  alert('Koefisien kamu positif, sepertinya kamu ditakdirkan untuk jadi anak yang beruntung');
}else {console.log('Maaf usaha lebih keras lagi, koefisien kamu negatif, sepertinya kamu kurang beruntung');
alert('Maaf usaha lebih keras lagi, koefisien kamu negatif, sepertinya kamu kurang beruntung');}
