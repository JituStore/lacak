function cekResi(){

let resi=document.getElementById("resi").value;

if(!resi){
document.getElementById("hasil").innerHTML="Masukkan nomor resi";
return;
}

document.getElementById("hasil").innerHTML="Loading...";

fetch("tracking.php?resi="+resi)
.then(response=>response.json())
.then(data=>{

if(!data.success){
document.getElementById("hasil").innerHTML="Tracking tidak ditemukan";
return;
}

let history=data.data.history;

let html="<h3>Riwayat Pengiriman</h3>";

history.forEach(function(h){

html+="<div class='item'>";
html+="<b>"+h.date+"</b><br>";
html+=h.desc;
html+="</div>";

});

document.getElementById("hasil").innerHTML=html;

})
.catch(function(){
document.getElementById("hasil").innerHTML="Gagal mengambil data";
});

}
