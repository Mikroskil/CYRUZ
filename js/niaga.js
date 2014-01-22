// JavaScript Document
function ceknilai(){
	var regex = new RegExp("[0-9]+$","i");
	return regex.test(document.form.data.value) && regex.test(document.form.data1.value)
	&& regex.test(document.form.data2.value) && regex.test(document.form.data3.value);
}

function validasi(){
	
		if(!ceknilai())
		{
			alert("Jangan Dikosongi");
		}
}

function zakatniaga(){
	validasi();
	var modal = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('modal').value)))));
	var tunai = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('uang').value)))));
	var piutang = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('piutang').value)))));
	var utang = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById('utang').value)))));
	var total, bersih, zakat, zakat2;
	
	total = parseFloat(modal)+parseFloat(tunai)+parseFloat(piutang);
	bersih = parseFloat(total) - parseFloat(utang);
	
	
	zakat = 0.025 * parseFloat(bersih);
	zakat2 = zakat.toFixed(0);
	var msg = "";
	msg += "Rp. " + hasil(zakat2);
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
}
		
