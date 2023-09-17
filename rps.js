let comp = '<p class="com_roll">   <img src="./image/rock.png" > </p> ';
let array = ['Rock', 'Paper', "Scissor"];


let player_point = 0;
let computer_point = 0;

function restart()
{
    player_point = 0;
    computer_point = 0;
    total();
}

function computer() {
    let x = Math.floor(Math.random() * 3);

    if (array[x] == 'Rock') {
        document.getElementById('computer_box').innerHTML = '<p class="com_roll">   <img src="./image/rock.png" > </p> '
    }
    else if (array[x] == 'Paper') {
        document.getElementById('computer_box').innerHTML = '<p class="com_roll">   <img src="./image/paper.png" > </p> '
    }
    else {
        document.getElementById('computer_box').innerHTML = '<p class="com_roll">   <img src="./image/scissors.png" > </p> '
    }

    return array[x];

}

function total() {
    document.getElementById('cp').innerHTML = computer_point
    document.getElementById('pp').innerHTML = player_point
}

function round(player) {
    // document.getElementById('computer_box').classList.add('com_ratate');
    player = player.toUpperCase()
    let comp = computer();
    comp = comp.toUpperCase()


    if (player == comp) {
        document.getElementById('round_display').innerHTML = "match drawn ";
    }

    else if (player == 'ROCK' && comp == 'SCISSOR') {
        document.getElementById('round_display').innerHTML = "Yahoo!! You win this round";
        player_point = player_point + 1;
    }
    else if (player == 'ROCK' && comp == 'PAPER') {
        document.getElementById('round_display').innerHTML = "ohh! You Lost this round";
        computer_point = computer_point + 1;

    }
    else if (player == 'PAPER' && comp == 'ROCK') {
        document.getElementById('round_display').innerHTML = "Yahoo!! You win this round ";
        player_point = player_point + 1;
    }
    else if (player == 'PAPER' && comp == 'SCISSOR') {
        document.getElementById('round_display').innerHTML = " ohh! You Lost this round";
        computer_point = computer_point + 1;
    }
    else if (player == 'SCISSOR' && comp == 'PAPER') {
        document.getElementById('round_display').innerHTML = "Yahoo!! You win this round ";
        player_point = player_point + 1;
    }
    else if (player == 'SCISSOR' && comp == 'ROCK') {
        document.getElementById('round_display').innerHTML = "ohh! You Lost this round";
        computer_point = computer_point + 1;
    }
    
    total();

}



