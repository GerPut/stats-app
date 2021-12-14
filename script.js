//======================================//
//Fighter A //

function getValue() {
    //Get total fights
    let fightsA = document.getElementById('fights').value;
    let num1 = fightsA * 0.125

    //Get win percentage
    let winsA = document.getElementById('wins').value
    let num2 = +winsA
    let lossesA = document.getElementById('losses').value
    let num3 = +lossesA

    let num4 = num2 + num3;
    let winpercentage = (num2 / num4) * 15;

    //Get total streak 
    let streakA = document.getElementById('streak').value
    let num5 = +streakA
    let streakPercentage = Number((num5 * 0.125).toFixed(2));

    // //Get Prime Age
    let agedifA = document.getElementById('agedifAA').value
    let agedifB = document.getElementById('agedifBB').value

    let primeAgeA = Number((agedifA * 0.175).toFixed(2));
    let primeAgeB = Number((agedifB * 0.175).toFixed(2));





    //Get Activeness
    let activeA = document.getElementById('active').value
    let num7 = Number((activeA * 0.125).toFixed(2))

    //Get Reach
    let reachA = document.getElementById('reach').value
    let numReachA = Number((reachA * 0.15).toFixed(2))

    //Get striking and grappling
    let strikeA = document.getElementById('strike').value
    let num9 = +strikeA;
    let grapA = document.getElementById('grap').value
    let num10 = +grapA
    let num11 = ((num9 + num10) * 0.15)


    //Get total points for fighter A
    let totalA = Number(num1 + winpercentage + streakPercentage + num7 + num11 + primeAgeA + numReachA);



    //=================================//
    //Fighter B

    //Get total fights
    let fightsB = document.getElementById('fightsB').value;
    let num12 = fightsB * 0.125;

    //Get win percentage
    let winsB = document.getElementById('winsB').value
    let num13 = +winsB
    let lossesB = document.getElementById('lossesB').value
    let num14 = +lossesB

    let num15 = num13 + num14;
    let winpercentageB = (num13 / num15) * 15;

    //Get total streak 
    let streakB = document.getElementById('streakB').value
    let num16 = +streakB
    let streakPercentageB = Number((num16 * 0.125).toFixed(2));


    //Get Activeness
    let activeB = document.getElementById('activeB').value
    let num18 = Number((activeB * 0.125).toFixed(2));

    //Get Reach
    let reachB = document.getElementById('reachB').value
    let numReachB = Number((reachB * 0.15).toFixed(2));

    //Get strikeing and grappling
    let strikeB = document.getElementById('strikeB').value
    let num20 = +strikeB;
    let grapB = document.getElementById('grapB').value
    let num21 = +grapB
    let num22 = ((num20 + num21) * 0.15);


    //Get total points for fighter B
    let totalB = Number(num12 + winpercentageB + streakPercentageB + num18 + num22 + primeAgeB + numReachB);


    //Grandtotal add both fighters scores together
    let totalX = totalA + totalB;

    //Convert total points and Convert totals to implied odds
    let lineA = ((totalA / totalX) * 100).toFixed(2);
    let lineB = ((totalB / totalX) * 100).toFixed(2);

    //Convert implied odds to dicimal odds
    let lineX = (100 / lineA).toFixed(2);
    let lineY = (100 / lineB).toFixed(2);

    //Show total points
    document.querySelector('.bestline').innerHTML = lineX;
    document.querySelector('.bestlineB').innerHTML = lineY;
}

