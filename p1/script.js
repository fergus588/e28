let board = new Vue({
	el: '#board',
  data:{
  	checked: [],
    isSpinActive: false,
    result: "",
    balance: '15',
    roundWinnings: ""
  },
  methods: {
  	randomNumber : function(){
    	if((board.balance - board.checked.length) < 0){
      	alert("You do not have a enough funds to make this bet\nTry reducing your bet or deposit more $$$");
        return;
      }
    	var winnings = 0;
      board.roundWinnings = "";
      board.result = "";
      var spinResult = Math.floor(Math.random() * (17));
      board.isSpinActive = true;
      board.balance = board.balance - board.checked.length;
			setTimeout(function() { 
        board.isSpinActive = false;
        if(spinResult % 2 != 0){
        var colour = "red";
        }
        else if(spinResult == 0){
        //had to give this a value so it doesnt brake when checking if the colour is in checked even though 0 will pay out later with the other numbers (the colour of 0 means nothing jst there to imitate roulette); 0 % 2 = 0 so i had to add this if statement as 0 isnt black
        var colour = "green";
        }
        else{
        	var colour = "black";
        }
        
        for(var i = 0; i < board.checked.length; i++) {
            if(board.checked[i] == spinResult){
              winnings += 16;
            }
            if(board.checked[i] == colour){
            	winnings += 2;
            }
        }
        board.result = spinResult;
        board.balance += winnings;
        board.roundWinnings = winnings;
      }, 1000);
    }
    
  }
});
