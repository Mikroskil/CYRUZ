// JavaScript Document
function ceknilai(){
	var regex = new RegExp("[0-9]+$","i");
	return regex.test(document.form.data.value) && regex.test(document.form.data1.value)
	&& regex.test(document.form.data2.value);
}

function validasi(){
	
		if(!ceknilai())
		{
			alert("Jangan Dikosongi");
		}
}

function tani(){
	validasi();
	var jenis = document.getElementById('jenis').value;
	var biaya = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('biaya').value)))));
	var harga = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('harga').value)))));
	var hasil = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('hsl').value)))));
	var zakat, total, bersih, zakat2;
	
	total = parseFloat(hasil) * parseFloat(harga);
	
	bersih = parseInt(total) - parseInt(biaya);
	
	
	if(jenis == 'air'){
	
		zakat = parseFloat(bersih) * 0.1;
	}
	else{
		zakat = parseFloat(bersih) * 0.05;
	}
	zakat2 = zakat.toFixed(0);
	
	var msg = "";
	msg += "  Rp. " + tandaPemisahTitik(zakat2);
	document.form.hasil.value = msg;
	
	if(ceknilai()){
	if(document.getElementById('tempathasil').style.visibility == "hidden"){
		document.getElementById('tempathasil').style.visibility = "visible";
		document.getElementById('tempathasil').style.position = "relative";
	}
	else{
		document.getElementById('tempathasil').style.visibility = "visible";
		document.getElementById('tempathasil').style.position = "relative";
		}
	}
	
	return false;
	
}
