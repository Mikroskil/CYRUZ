// JavaScript Document
function ceknilai(){
	var regex = new RegExp("[0-9]+$","i");
	return regex.test(document.form.data.value);
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

function temuan(){
	validasi();
	var dapat = document.getElementById('temu').value;
	var zakat;
	
	zakat = 0.025 * parseFloat(dapat);
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
