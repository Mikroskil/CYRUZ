// JavaScript Document
function ceknilai(){
	var regex = new RegExp("[0-9]+$","i");
	return regex.test(document.form.data.value) && regex.test(document.form.data1.value)
	&& regex.test(document.form.data2.value);
}

function validasi(){
	
		if(!ceknilai())
		{
			alert("Silahkan Masukan angka atau isi semua data dengan benar");
		}
}

function rest(){
	if(document.getElementById('hasil').style.visibility == "visible"){
		document.getElementById('hasil').style.visibility = "hidden";
		document.getElementById('hasil').style.position = "absolute";
	}
	else{
		document.getElementById('hasil').style.visibility = "hidden";
		document.getElementById('hasil').style.position = "absolute";
		}
}

function tani(){
	//validasi();
	var jenis = document.getElementById('jenis').value;
	var biaya = document.getElementById('biaya').value;
	var harga = document.getElementById('harga').value;
	var hasil = document.getElementById('hsl').value;
	var zakat, total, bersih;
	
	total = parseFloat(hasil) * parseFloat(harga);
	
	bersih = parseInt(total) - parseInt(biaya);
	
	
	if(jenis == 'air'){
	
		zakat = parseFloat(bersih) * 0.1;
	}
	else{
		zakat = parseFloat(bersih) * 0.05;
	}
	
	var msg = "";
	msg += "Zakat Yang Harus Anda Keluarkan Adalah Sebesar Rp. " + zakat.toFixed(2);
	document.form.hasil.value = msg;
	
	if(ceknilai()){
	if(document.getElementById('hasil').style.visibility == "hidden"){
		document.getElementById('hasil').style.visibility = "visible";
		document.getElementById('hasil').style.position = "relative";
	}
	else{
		document.getElementById('hasil').style.visibility = "visible";
		document.getElementById('hasil').style.position = "relative";
		}
	}
	
	return false;
	
}
