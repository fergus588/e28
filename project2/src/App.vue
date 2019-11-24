<template>
  
  <div id="app" class="board">
      <span>Your Balance: {{ balance }}</span>
      <span v-if="checked.length > 0">Bets: {{ checked }}</span>
      <span v-if="result">Spin Result: {{ result }}</span>
      <span class="green" v-if="roundWinnings">Round Winnings: {{ roundWinnings }}</span>
    <br>
    <div class="betBoard" v-bind:class="{ boardSpin: isSpinActive }">
        <div class="number">
            <input type="checkbox" v-model="checked" id="1" value="1">
            <br><span>1</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="2" value="2">
            <br><span>2</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="3" value="3">
            <br><span>3</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="4" value="4">
            <br><span>4</span>
        </div>
        <div class="colour">
            <input type="checkbox" v-model="checked" id="red" value="red">Red
        </div>
        <br>
        <div class="number">
            <input type="checkbox" v-model="checked" id="5" value="5">
            <br><span>5</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="6" value="6">
            <br><span>6</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="7" value="7">
            <br><span>7</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="8" value="8">
            <br><span>8</span>
        </div>
        <div class="colour">
            <input type="checkbox" v-model="checked" id="0" value="0"><span class="green">0</span>
        </div>
        <br>
        <div class="number">
            <input type="checkbox" v-model="checked" id="9" value="9">
            <br><span>9</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="10" value="10">
            <br><span>10</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="11" value="11">
            <br><span>11</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="12" value="12">
            <br><span>12</span>
        </div>
        <div class="colour">
            <input type="checkbox" v-model="checked" id="black" value="black">Black
        </div>
        <br>
        <div class="number">
            <input type="checkbox" v-model="checked" id="13" value="13">
            <br><span>13</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="14" value="14">
            <br><span>14</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="15" value="15">
            <br><span>15</span>
        </div>
        <div class="number">
            <input type="checkbox" v-model="checked" id="16" value="16">
            <br><span>16</span>
        </div>
    </div>
    <br>
    <button id="spinButton" v-on:click="randomNumber">Spin</button>
</div>
</template>

<script>
    export default {
        name: '#app',
        data: function() {
            return {
                checked: [],
                isSpinActive: false,
                result: "",
                balance: '15',
                roundWinnings: ""
            }
        },
        methods: {
            randomNumber: function() {
                if ((app.balance - app.checked.length) < 0) {
                    alert("You do not have a enough funds to make this bet\nTry reducing your bet or deposit more $$$");
                    return;
                }
                var winnings = 0;
                app.roundWinnings = "";
                app.result = "";
                var spinResult = Math.floor(Math.random() * (17));
                app.isSpinActive = true;
                app.balance = app.balance - app.checked.length;
                setTimeout(function() {
                    app.isSpinActive = false;
                    if (spinResult % 2 != 0) {
                        var colour = "red";
                    } else if (spinResult == 0) {
                        //had to give this a value so it doesnt brake when checking if the colour is in checked even though 0 will pay out later with the other numbers (the colour of 0 means nothing jst there to imitate roulette); 0 % 2 = 0 so i had to add this if statement as 0 isnt black
                        var colour = "green";
                    } else {
                        var colour = "black";
                    }

                    for (var i = 0; i < app.checked.length; i++) {
                        if (app.checked[i] == spinResult) {
                            winnings += 16;
                        }
                        if (app.checked[i] == colour) {
                            winnings += 2;
                        }
                    }
                    app.result = spinResult;
                    app.balance += winnings;
                    app.roundWinnings = winnings;
                }, 1000);
            }

        }
    }
</script>

<style>
    .board {
        margin: 10px auto;
        width: 70%;
    }
    
    .number {
        border: 1px solid grey;
    }
    
    .boardSpin {
        animation: spin 0.15s linear infinite;
    }
    
    .board span {
        text-align: center;
        display: block;
    }
    
    .number {
        display: inline-block;
    }
    
    .colour {
        display: inline-block;
        margin-left: 30px;
    }
    
    .number:nth-child(odd) {
        color: red;
    }
    
    .number:nth-child(even) {
        color: black;
    }
    
    .board span.green {
        color: green;
        display: inline-block;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>