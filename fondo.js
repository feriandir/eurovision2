function fondo(canvasId,tipo)
{    

	this.canvas2 = document.getElementById(canvasId)
    this.ctx2 = this.canvas2.getContext('2d')

	var background = new Image();

	if (document.getElementById('pw2').className !== ""){
		this.tipo = 'porzingis'
		background.src = "./resources/porzi.png"				
		
	}else if (document.getElementById('pw3').className !== ""){
		this.tipo = 'mamba'
		background.src = "./resources/mamba.png"	
		
	}else if (document.getElementById('pw0').className !== ""){
		this.tipo = 'custom'
		background.src = "./resources/bordalas.png"		
		
	}else{		
		this.tipo = 'normal'	
		background.src = "./resources/montoro2.png"
		
	}
	this.ctx2.drawImage(background,168,168,100,100);	

}

