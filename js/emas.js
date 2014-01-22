// JavaScript Document

function ceknilai(){
	var regex = new RegExp("[0-9]+$","i");
	return regex.test(document.form.data.value) && regex.test(document.form.data1.value);
}

function validasi(){
	
		if(!ceknilai())
		{
			alert("Silahkan Masukan angka atau isi semua data dengan benar");
		}
}

function zakatemas(){
	validasi();
	var jlhemas = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('emas1').value)))));
	var emasdpk = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('emas2').value)))));
	var bersih, zakat, zakat2;
	
	bersih = parseInt(jlhemas) - parseInt(emasdpk);
	
	zakat = 0.025 * parseFloat(bersih);
	
	var msg = "";
	msg += zakat.toFixed(2) + " Gram Emas";
	document.form.hasilemas.value = msg;
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
	
	
}
