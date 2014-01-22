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

function zakatemas(){
	validasi();
	var jlhemas = document.getElementById('emas1').value;
	var emasdpk = document.getElementById('emas2').value;
	var bersih, zakat;
	
	bersih = parseInt(jlhemas) - parseInt(emasdpk);
	
	zakat = 0.025 * parseFloat(bersih);
	alert(zakat);
	var msg = "";
	msg += "Zakat Emas Yang harus Anda Keluarkan Adalah Sebesar " + zakat + " gram";
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
