var tttArr=["-","-","-","-","-","-","-","-","-",];
var player = "X";
var comp = "O";
var playerIndex = 0;
var index = 0;

function updateBoard(){
	$('button').each(function(i,j){
 		$(this).text(tttArr[i]);
	});
};

function resetBoard() {
	tttArr=["-","-","-","-","-","-","-","-","-",];
	player = "X";
	comp = "O";
	$('.choice').show();
}

function computerTurn(){
	var compMove = 0;
	var mid = 4;
	var corner = { ul: 0, ur: 2, bl: 6, br: 8 };
	var side = { u: 1, l: 3, r: 5, b: 7 };
	
	function blockCheck(check){
			if((tttArr[corner.ul] === check )&& (tttArr[side.u] === check )&& (tttArr[corner.ur] == "-" )){
				compMove = corner.ur;
			}
		  else if((tttArr[corner.ul] === check )&& (tttArr[corner.ur] === check )&& (tttArr[side.u] == "-" )){
				compMove = side.u;
			}
			else if((tttArr[corner.ul] === check )&& (tttArr[side.l] === check )&& (tttArr[corner.bl] == "-" )){
				compMove = corner.bl;
			}
			else if((tttArr[corner.ul] === check )&& (tttArr[corner.bl] === check )&& (tttArr[side.l] == "-" )){
				compMove = side.l;
			}
			else if((tttArr[corner.br] === check )&& (tttArr[side.b] === check )&& (tttArr[corner.bl] == "-" )){
				compMove = corner.bl;
			}
			else if((tttArr[corner.br] === check )&& (tttArr[side.r] === check )&& (tttArr[corner.ur] == "-" )){
				compMove = corner.ur;
			}
			else if((tttArr[corner.br] === check )&& (tttArr[corner.bl] === check )&& (tttArr[side.b] == "-" )){
				compMove = side.b;
			}
			else if((tttArr[corner.br] === check )&& (tttArr[corner.ur] === check )&& (tttArr[side.r] == "-" )){
				compMove = side.r;
			}
			else if((tttArr[corner.bl] === check )&& (tttArr[side.l] === check )&& (tttArr[corner.ul] == "-" )){
				compMove = corner.ul;
			}
			else if((tttArr[corner.bl] === check )&& (tttArr[side.b] === check )&& (tttArr[corner.br] == "-" )){
				compMove = corner.br;
			}
			else if((tttArr[corner.ur] === check )&& (tttArr[side.r] === check )&& (tttArr[corner.br] == "-" )){
				compMove = corner.br;
			}
			else if((tttArr[corner.ur] === check )&& (tttArr[side.u] === check )&& (tttArr[corner.ul] == "-" )){
				compMove = corner.ul;
			}			
			else if((tttArr[corner.ur] === check )&& (tttArr[mid] === check )&& (tttArr[corner.bl] == "-" )){
				compMove = corner.bl;
			}
			else if((tttArr[corner.bl] === check )&& (tttArr[mid] === check )&& (tttArr[corner.ur] == "-" )){
				compMove = corner.ur;
			}
			else if((tttArr[corner.ul] === check )&& (tttArr[mid] === check )&& (tttArr[corner.br] == "-" )){
				compMove = corner.br;
			}
			else if((tttArr[corner.br] === check )&& (tttArr[mid] === check )&& (tttArr[corner.ul] == "-" )){
				compMove = corner.ul;
			}
			else if((tttArr[side.u] === check )&& (tttArr[mid] === check )&& (tttArr[side.b] == "-" )){
				compMove = side.b;
			}
			else if((tttArr[side.b] === check )&& (tttArr[mid] === check )&& (tttArr[side.u] == "-" )){
				compMove = side.u;
			}
			else if((tttArr[side.l] === check )&& (tttArr[mid] === check )&& (tttArr[side.r] == "-" )){
				compMove = side.r;
			}
			else if((tttArr[side.r] === check )&& (tttArr[mid] === check )&& (tttArr[side.l] == "-" )){
				compMove = side.l;
			}
			else{ 
				return null;
			}
		}
	
	if(playerIndex === 1) {
		switch(index){
		  case corner.ul: compMove = corner.br;
				break;
			case corner.ur: compMove = corner.bl;
				break;
			case corner.bl: compMove = corner.ur;
				break;
			case corner.br: compMove = corner.ul;
				break;
			 case side.u: compMove = corner.br;
				break;
			case side.l: compMove = corner.ur;
				break;
			case side.r: compMove = corner.bl;
				break;
			case side.b: compMove = corner.ul;
				break;
		}
	}
	else if(playerIndex > 1) {
		if(blockCheck(comp) === null){
			blockCheck(player);
			if(blockCheck(player) === null){
				var counter = 9;
				while(counter>=0){
					counter--;
					if(tttArr[counter] ==='-') {
						compMove = counter;
						break;
					}
				}
			}
		}
	}
	tttArr.splice(compMove, 1, comp);
	updateBoard();
	getResult();
};

function getResult() {
	var win = comp + comp + comp;
	var row1 = tttArr[0] + tttArr[1] + tttArr[2];
	var row2 = tttArr[3] + tttArr[4] + tttArr[5];
	var row3 = tttArr[6] + tttArr[7] + tttArr[8];
	var col1 = tttArr[0] + tttArr[3] + tttArr[6];
	var col2 = tttArr[1] + tttArr[4] + tttArr[7];
	var col3 = tttArr[2] + tttArr[5] + tttArr[8];
	var diag1 = tttArr[0] + tttArr[4] + tttArr[8];
	var diag2 = tttArr[2] + tttArr[4] + tttArr[6];
	
	if((row1 == win)||
	(row2 == win)||
	(row3 == win)||
	(col1 == win)||
	(col2 == win)||
	(col3 == win)||
	(diag1 == win)||
	(diag2 == win)) {
		$(".square").addClass("win");
		resetBoard();
	}
	else if(playerIndex >= 4){
		$(".square").addClass("tie");
		resetBoard();
	}
	else{
		return;
	}
};

$('.square').click(function(){
	index = $( "button" ).index(this);
	if((this.textContent === comp) || $(".square").hasClass('win')){
		return;
	}
	else{
		tttArr.splice(index, 1, player);
		updateBoard();
		playerIndex++;
		computerTurn();
	}
});

$('.x,.o').click(function(){
	if($(this).hasClass('o')){
		player = "O";
		comp = "X";
	}
	playerIndex = 0;
	$('.square').removeClass('win');
	$('.square').removeClass('tie');
	$('.choice').hide();
	tttArr.splice(4, 1, comp);
	updateBoard();
	$('.tictactoe').show();
});