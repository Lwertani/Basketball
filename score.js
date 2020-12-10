let Score1 = (96 + 108 + 98) / 3
//* In here I want the score to be more logic just decimal
 let ogScore = Score1.toFixed(0)
console.log( 'Og Team average score =' +' '+ ogScore);
let Score2 = (88 + 91 + 111) / 3
//* In here I want the score to be more logic just decimal
let allianceScore = Score2.toFixed(0)
console.log('Alliance Team average score =' +' '+ allianceScore);
if ((ogScore) == (allianceScore)){
console.log('the result is a Draw');
} else{
    if((ogScore) > (allianceScore)){
        console.log(' Final result = Og Team wins');
    } else{
        console.log('Final result =  Alliance Team wins');
    }
}
console.log('***Bonus 1 :***');
console.log('Round 1 :');
let ogRound1 = 97
console.log( 'OG Round 1 score =' +' '+ ogRound1);
let allienceRound1 = 109
console.log( 'allience Round 1 score =' +' '+ allienceRound1);
if(ogRound1 > allienceRound1 && ogRound1 > 100 && allienceRound1 > 100){
    console.log('OG Win Round 1')
}
if(ogRound1 < allienceRound1 && ogRound1 > 100 && allienceRound1 > 100){
    console.log('Allience Win Round 1')
}
if(ogRound1 < 100 && allienceRound1 < 100){
    console.log('Result = Both treams are out of Round 1')
} else{
    if((ogRound1) < 100){
        console.log('Final result = Allience Team Win Round 1. OG team is out of the game. ');
    }
if ((allienceRound1) < 100){ 
        console.log('Final result =  OG Team Win Round 1. Allience team is out of the game.');
    }
}
console.log('Round 2 :');
let ogRound2 = 112
console.log( 'Og Round 2 score =' +' '+ ogRound2);
let allienceRound2 = 95
console.log( 'allience Round 2 score =' +' '+ allienceRound2);
if(ogRound2 > allienceRound2 && ogRound2 > 100 && allienceRound2 > 100){
    console.log('OG Win Round 2')
}
if(ogRound1 < allienceRound2 && ogRound2 > 100 && allienceRound2 > 100){
    console.log('Allience Win Round 2')
}
if(ogRound2 < 100 && allienceRound2 < 100){
    console.log('Result = Both treams are out of Round 2')
} else{
    if((ogRound2) < 100){
        console.log('Final result = Allience Team Win Round 2. OG team is out of the game. ');
    }
    
if ((allienceRound2) < 100){ 
        console.log('Final result =  OG Team Win Round 2. Allience team is out of the game.');
    }
}
console.log('Round 3 :');
let ogRound3 = 101
console.log( 'Og Round 3 score =' +' '+ ogRound3);
let allienceRound3 = 123
console.log( 'allience Round 3 score =' +' '+ allienceRound3);
if(ogRound3 > allienceRound3 && ogRound3 > 100 && allienceRound3 > 100){
    console.log('OG Win Round 1')
}
if(ogRound3 < allienceRound3 && ogRound3 > 100 && allienceRound3 > 100){
    console.log('Allience Win Round 3')
}
if(ogRound3 < 100 && allienceRound3 < 100){
    console.log('Result = Both treams are out of Round 3.')
} else{
    if((ogRound3) < 100){
        console.log('Final result = Allience Team Win Round 3. OG team is out of the game. ');
    }
    
if ((allienceRound3) < 100){ 
        console.log('Final result =  OG Team Win Round 3. Allience team is out of the game.');
    }
}
console.log('***Bonus 2 :***');
console.log('Round A :');
let ogRounda = 97
console.log( 'OG Round A score =' +' '+ ogRounda);
let allienceRounda = 109
console.log( 'allience Round A score =' +' '+ allienceRounda);
if(ogRounda > allienceRounda && ogRounda > 100 && allienceRounda > 100){
    console.log('OG Win Round A')
}
if(ogRounda < allienceRounda && ogRounda > 100 && allienceRound1 > 100){
    console.log('Allience Win Round A')
}
if(ogRounda == allienceRounda && ogRounda > 100 && allienceRounda > 100){
    console.log('Result Round A = DRAW')
}
if(ogRounda < 100 && allienceRounda < 100){
    console.log('Result = Both treams are out of Round A')
} else{
    if((ogRounda) < 100){
        console.log('Final result = Allience Team Win Round A. OG team is out of the game. ');
    }
if ((allienceRounda) < 100){ 
        console.log('Final result =  OG Team Win Round A. Allience team is out of the game.');
    }
}
console.log('Round 2 :');
let ogRoundb = 112
console.log( 'Og Round 2 score =' +' '+ ogRoundb);
let allienceRoundb = 95
console.log( 'allience Round B score =' +' '+ allienceRoundb);
if(ogRound2 > allienceRoundb && ogRoundb > 100 && allienceRoundb > 100){
    console.log('OG Win Round 2')
}
if(ogRoundb < allienceRoundb && ogRoundb > 100 && allienceRoundb > 100){
    console.log('Allience Win Round B')
}
if(ogRoundb == allienceRoundb && ogRoundb > 100 && allienceRoundb > 100){
    console.log('Result Round B = DRAW')
}
if(ogRoundb < 100 && allienceRoundb < 100){
    console.log('Result = Both treams are out of Round B')
} else{
    if((ogRoundb) < 100){
        console.log('Final result = Allience Team Win Round B. OG team is out of the game. ');
    }
    
if ((allienceRoundb) < 100){ 
        console.log('Final result =  OG Team Win Round B. Allience team is out of the game.');
    }
}
console.log('Round C :');
let ogRoundc = 101
console.log( 'Og Round C score =' +' '+ ogRoundc);
let allienceRoundc = 106
console.log( 'allience Round C score =' +' '+ allienceRoundc);
if(ogRoundc > allienceRoundc && ogRoundc > 100 && allienceRoundc > 100){
    console.log('OG Win Round 1')
}
if(ogRoundc < allienceRoundc && ogRoundc > 100 && allienceRoundc > 100){
    console.log('Allience Win Round C')
}
if(ogRoundc == allienceRoundc && ogRoundc > 100 && allienceRoundc > 100){
    console.log('Result Round C = DRAW')
}
if(ogRoundc < 100 && allienceRoundc < 100){
    console.log('Result = Both treams are out of Round C.')
} else{
    if((ogRoundc) < 100){
        console.log('Final result = Allience Team Win Round C. OG team is out of the game. ');
    }
    
if ((allienceRoundc) < 100){ 
        console.log('Final result =  OG Team Win Round C. Allience team is out of the game.');
    }
}






