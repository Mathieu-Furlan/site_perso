const imprimerPage = () => window.print();
let compteComm = 0;

function ajouterComment(){
	let aujourd = new Date();
	let min = String(aujourd.getMinutes()).padStart(2, "0");
	let hh = String(aujourd.getHours()).padStart(2, "0");
	let jj = String(aujourd.getDate()).padStart(2, "0");
	let mm = String(aujourd.getMonth() + 1).padStart(2, "0");
	let aaaa = aujourd.getFullYear();
	aujourd = jj + "/" + mm + "/" + aaaa + " - " + hh + ":" + min + " -- ";
	let zoneText = document.getElementById("comment");
	let comm = document.getElementById("comments").value;
	let cita = document.createElement("div");
	cita.id = "comment" + compteComm;
	cita.className = "utilComm";
	compteComm++;
	cita.append(aujourd);
	cita.append(comm);
	zoneText.append(cita);
	document.getElementById("commentButton").style.display = "none";
	document.getElementById("comments").style.display = "none";
	document.getElementById("commentsLab").style.display = "none";
}

let langIndex = 0;
const addre = window.location.href;
const nomDom = addre.split("-");

window.onload = () =>{
	let langSel = document.getElementById("lang-select");
	langSel.addEventListener("change", function(){
		let langIndex = langSel.selectedIndex;
		if(langIndex === 1){
			window.location.replace(nomDom[0] + "-en.html");
		}
		else if(langIndex === 2){
			window.location.replace(nomDom[0] + "-fr.html");
		}
	});
	return langIndex;
}