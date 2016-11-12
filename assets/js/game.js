$(document).ready(function(){
	var colors = ['#0074D9','#7FDBFF','#3D9970','#2ECC40','#01FF70','#FF851B','#85144b','#F012BE'];
	var counter = 0;
	var board = [];
	var colorBoard = [];
	var SIZE = 4;
	var openCounter = 0;
	var last_x = -1 ,last_y = -1;
	var game = 0;
	init();
	$('.item').click(function(){
		var attr = $(this).attr('id');
		attr = attr.substr(attr.length - 2);
		var x = attr[0];
		var y = attr[1];
		if(board[x][y] == false){
			$(this).css('background',colorBoard[x][y]);
			openCounter++;
			if(openCounter === 1){
				last_x = x;
				last_y = y;
			}
			if(openCounter == 2){
				if(colorBoard[last_x][last_y] != colorBoard[x][y]) {
					setTimeout(function(){
  						$('#item_'+x+y).css('background','#001f3f');
  						$('#item_'+last_x+last_y).css('background','#001f3f');
					}, 300);
				}else{
					board[x][y] = true;
					board[last_x][last_y] = true;
					last_y = -1;
					last_x = -1;
					game += 2;
				}
				openCounter = 0;
			}
		}
		if(game == 16){
			setTimeout(function(){
				if(confirm("You win game!!! play again?") == true){
					init();
				}
			},500);
		}
	});
	function init(){
		for(var i = 0 ; i < 4; i++){
			board[i] = [];
			colorBoard[i] = [];
		}
		for(var i = 0 ; i < 4 ; i++){
			for(var j = 0 ; j < 4 ; j++){
				board[i].push(0);
				colorBoard[i].push(0);
			}
		}
		console.log(board);	
		while(counter < 8){
			var colorCounter = 0;
			while(colorCounter != 2){
				var x = Math.floor(Math.random() * 10000000000) % SIZE;
				var y = Math.floor(Math.random() * 10000000000) % SIZE;
				if(board[x][y] == false){
					//$('#item_'+x+y).css('background',colors[counter]);
					colorCounter++;
					board[x][y] = true;
					colorBoard[x][y] = colors[counter];
				}
			}
			counter++;
		}
		for(var i = 0 ; i < SIZE ; i++){
			for(var j = 0 ; j < SIZE ; j++){
				board[i][j] = false;
			}
		}
	}
});