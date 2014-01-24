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
	location.reload();
}

function ternak(){
	validasi();
	var sapi = document.getElementById('sapi').value;
	var kambing = document.getElementById('kambing').value;
	var zakatsapi, zakatkambing;
	
	if(sapi < 30){
		zakatsapi ="Tidak Di Kenakan Zakat";
	}
	else if(sapi >= 30 && sapi <= 39 ){
		zakatsapi = " 1 ekor sapi tabi' ";
	}
	else if(sapi >= 40 && sapi <= 59){
		zakatsapi = " 1 ekor sapi musinnah'";
	}
	else if(sapi >= 60 && sapi <= 69){
		zakatsapi = " 2 ekor sapi tabi' ";
	}
	else if(sapi >= 70 && sapi <= 79){
	zakatsapi = " 1 ekor sapi musinnah' dan 1 ekor sapi tabi' ";
	}
	else if(sapi >=80 && sapi <= 89){
		zakatsapi = " 2 ekor sapi musinnah' ";
	}
	else if(sapi >=90 && sapi <= 99){
		zakatsapi = " 3 ekor sapi tabi' ";
	}
	else if(sapi >=100 && sapi <= 109){
		zakatsapi = " 2 ekor sapi tabi' dan 1 ekor sapi musinnah' ";
	}
	else if(sapi >=110 && sapi <= 119){
		zakatsapi = " 2 ekor sapi musinnah dan 1 ekor sapi tabi' ";
	}
	else if(sapi >=120 && sapi <= 129){
		zakatsapi = " 3 ekor sapi musinnah atau 4 ekor sapi tabi' ";
	}
	else if(sapi >= 130){
		alert("Batas Maksimum Sapi 129 ekor");
	}
	
	if(kambing < 40){
		zakatkambing = 0;
	}
	else if(kambing >= 40 && kambing <=120){
		zakatkambing = 1;
	}
	else if(kambing >= 121 && kambing <=200){
		zakatkambing = 2;
	}
	else if(kambing >= 201 && kambing <=300){
		zakatkambing = 3;
	}
	else if(kambing > 300){
		parseInt(zakatkambing) = (parseInt(kambing) / 100) + 1;
	}
		
	
	
	var msg = "";
	msg += "Zakat Sapi Anda adalah " + zakatsapi + "\nZakat Kambing Anda Adalah " + zakatkambing + " ekor kambing";
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
