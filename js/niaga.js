// JavaScript Document
function ceknilai(){
	var regex = new RegExp("[0-9]+$","i");
	return regex.test(document.form.data.value) && regex.test(document.form.data1.value)
	&& regex.test(document.form.data2.value) && regex.test(document.form.data3.value);
}

function validasi(){
	
		if(!ceknilai())
		{
			alert("Silahkan Masukan angka atau isi semua data dengan benar");
		}
}

function rest(){
	location.reload();
}

function zakatniaga(){
	validasi();
	var modal = document.getElementById('modal').value;
	var uang = document.getElementById('uang').value;
	var piutang = document.getElementById('piutang').value;
	var utang = document.getElementById('utang').value;
	var total, bersih, zakat;
	
	total = parseFloat(modal)+parseFloat(uang)+parseFloat(piutang);
	bersih = parseFloat(total) - parseFloat(utang);
	
	zakat = 0.025 * parseFloat(bersih);
	var msg = "";
	msg += "Hasil Perhitungan Zakat Adalah Rp. " + zakat;
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
		
	
}
