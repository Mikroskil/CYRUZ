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

function zakatprofesi(){
	validasi();
	var gaji = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('gaji').value)))));
	var bonus = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('bonus').value)))));
	var keluar = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('keluar').value)))));
	var gaji1,total,keluar1, bersih, zakat, zakat2;
	
	gaji1 = 12 * parseInt(gaji);
	keluar1 = 12 * parseInt(keluar);
	total = parseInt(gaji1) + parseInt(bonus);
	bersih = parseInt(total) - parseInt(keluar1);
	zakat = 0.025*parseInt(bersih);
	zakat2 = zakat.toFixed(0);
	//alert("Zakat = Rp. " + zakat);
	
	
	var msg = "";
	msg += " Rp. " + hasil(zakat2);
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
