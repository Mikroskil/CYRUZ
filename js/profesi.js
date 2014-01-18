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
	location.reload();
}

function zakatprofesi(){
	validasi();
	var gaji = document.getElementById('gaji').value;
	var bonus = document.getElementById('bonus').value;
	var keluar = document.getElementById('keluar').value;
	var gaji1,total,keluar1, bersih, zakat;
	
	gaji1 = 12 * parseInt(gaji);
	keluar1 = 12 * parseInt(keluar);
	total = parseInt(gaji1) + parseInt(bonus);
	bersih = parseInt(total) - parseInt(keluar1);
	zakat = 0.025*parseInt(bersih);
	//alert("Zakat = Rp. " + zakat);
	
	
	var msg = "";
	msg += "Hasil Perhitungan Zakat Adalah Rp. " + zakat.toFixed(2);
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
