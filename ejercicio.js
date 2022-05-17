	var cantidad="",
		sumatoria=0,
		sumar=false,
		restar=false,
		Multi=false;
		dividir=false;
		borra=false;
		Raiz=false;
		porcentea=false;

       document.getElementById("DP").value=0
		
		function mostrar(numero){
			document.getElementById("DP").value=cantidad+numero;
			cantidad=document.getElementById("DP").value;
		}
		function suma(){
			sumatoria=sumatoria+parseInt(cantidad);
			document.getElementById("DP").value=sumatoria;
			cantidad="";
			sumar=true;
		}
		function resta(){
			sumatoria=sumatoria+parseInt(cantidad);
			document.getElementById("DP").value=sumatoria;
			cantidad="";
			restar=true;
		}
		function multiplica(){
			sumatoria=sumatoria+parseInt(cantidad);
			document.getElementById("DP").value=sumatoria;
			cantidad="";
			Multi=true;
		}
		 function divida(){
			sumatoria=sumatoria+parseFloat(cantidad);
			document.getElementById("DP").value=sumatoria;
			cantidad="";
			dividir=true;
		}
		function RZ(){
			sumatoria=sumatoria+parseInt(cantidad);
			document.getElementById("DP").value=sumatoria;
			cantidad="";
			Raiz=true;

		}
		function porcent(){
			sumatoria=sumatoria+parseFloat(cantidad);
			document.getElementById("DP").value=sumatoria;
			cantidad="";
			porcentea=true;
		}
		function igual(){
			if (sumar) {
				document.getElementById("DP").value=sumatoria+parseInt(cantidad);
			} if (restar) {
				document.getElementById("DP").value=sumatoria-parseInt(cantidad);
			}if (Multi) {
				document.getElementById("DP").value=sumatoria*parseFloat(cantidad);
			}if (dividir) {
				document.getElementById("DP").value=sumatoria/parseFloat(cantidad);
			}
			if (Raiz) {
				document.getElementById("DP").value=Math.sqrt(sumatoria);
			}if (porcentea) {
				document.getElementById("DP").value=sumatoria*parseInt(cantidad)/100;
			}	
		}
		function borrar(){
			sumatoria=parseInt(cantidad)*(0);
			document.getElementById("DP").value=sumatoria;
			cantidad="";
			borra=true;
		}
