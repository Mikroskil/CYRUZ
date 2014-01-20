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
	if(document.getElementById('hasil').style.visibility == "visible"){
		document.getElementById('hasil').style.visibility = "hidden";
		document.getElementById('hasil').style.position = "absolute";
	}
	else{
		document.getElementById('hasil').style.visibility = "hidden";
		document.getElementById('hasil').style.position = "absolute";
		}
}

function tambang(){
	validasi();
	var jenis = document.getElementById('jenis').value;
	var berat = document.getElementById('berat').value;
	var zakat;
	
	
	if(jenis == 'emas'){
		if(berat < 85){
			zakat = 0;
		}
		else{
		zakat = parseFloat(berat) * 0.025;
		}
	}
	else{
		if(berat < 1000){
		 zakat = 0;
		}
		else{
		zakat = parseFloat(berat) * 0.025;
		}
	}
	
	var msg = "";
	msg += "Zakat Yang Harus Anda Keluarkan Adalah Sebesar " + zakat.toFixed(2) + " gram";
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
