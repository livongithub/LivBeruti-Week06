$( document ).ready(function() {
    
    $("h1").lettering('words').children('span').lettering();

    $("#my-elem").lettering('lines').children('span').lettering('words').children('span').lettering();

    var myTrialTwoArray1 = $('.trial2 .word1').children().toArray()
    var myTrialTwoArray2 = $('.trial2 .word2').children().toArray()

    var myTrialThreeArray1 = $('.trial3 .word1').children().toArray()
    var myTrialThreeArray2 = $('.trial3 .word2').children().toArray()

    var myTrialFourArray1 = $('.trial4 .word1').children().toArray()
    var myTrialFourArray2 = $('.trial4 .word2').children().toArray()

    var myTrialFiveArray1 = $('.trial5 .word1').children().toArray()
    var myTrialFiveArray2 = $('.trial5 .word2').children().toArray()

    var myTrialSixArray1 = $('.trial6 .word1').children().toArray()
    var myTrialSixArray2 = $('.trial6 .word2').children().toArray()

    var myTrialSevenArray1 = $('.trial7 .word1').children().toArray()
    var myTrialSevenArray2 = $('.trial7 .word2').children().toArray()




    var fontArray = ['Helvetica', 'Courier', 'Georgia', 'Gill Sans', 'Times New Roman', 'Impact', 'Verdana']

    for(i=0; i<myTrialTwoArray1.length-1; i++){
        $(myTrialTwoArray1[i]).css("color", `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`)
        $(myTrialTwoArray1[i]).css("font-size", `${Math.random()*(60-10)+10}px`)
        $(myTrialTwoArray1[i]).css("margin-left", `${Math.random()*10}px`)
    }

    for(i=0; i<myTrialTwoArray2.length-1; i++){
        $(myTrialTwoArray2[i]).css("color", `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`)
        $(myTrialTwoArray2[i]).css("font-size", `${Math.random()*(60-10)+10}px`)
        $(myTrialTwoArray2[i]).css("margin-left", `${Math.random()*10}px`)
    }

    for(i=0; i<myTrialThreeArray1.length-1; i++){
        $(myTrialThreeArray1[i]).css("font-family",fontArray[Math.floor(Math.random()*7)])
        $(myTrialThreeArray1[i]).css("margin-right", "5px")
        $(myTrialThreeArray1[i]).css("font-size", `${Math.random()*(60-10)+10}px`)
    }

    for(i=0; i<myTrialThreeArray2.length-1; i++){
        $(myTrialThreeArray2[i]).css("font-family",fontArray[Math.floor(Math.random()*7)])
        $(myTrialThreeArray2[i]).css("margin-right", "15px")
        $(myTrialThreeArray2[i]).css("font-size", `${Math.random()*(60-10)+10}px`)
    }

    for(i=0; i<myTrialFourArray1.length; i++){
        $(myTrialFourArray1[i]).css("position", "absolute")
        $(myTrialFourArray1[i]).css("top", `${Math.random()*250}px`)
        $(myTrialFourArray1[i]).css("left", `${Math.random()*((i*20)-i)+i*10}px`)
    }
    for(i=0; i<myTrialFourArray2.length;i++){
        $(myTrialFourArray2[i]).css("position", "absolute")
        $(myTrialFourArray2[i]).css("top", `${Math.random()*250}px`)
        $(myTrialFourArray2[i]).css("left", `${300+Math.random()*((i*20)-i)+i*10}px`)
    }

    for(i=0; i<myTrialFiveArray1.length; i++){
        $(myTrialFiveArray1[i]).css("position", "absolute")
        $(myTrialFiveArray1[i]).css("left", `${i*50}px`)
        $(myTrialFiveArray1[i]).css("transform", `rotate(${Math.random()*(90+90)-90}deg)`)
    }
    for(i=0; i<myTrialFiveArray2.length; i++){
        $(myTrialFiveArray2[i]).css("position", "absolute")
        $(myTrialFiveArray2[i]).css("left", `${700+i*50}px`)
        $(myTrialFiveArray2[i]).css("transform", `rotate(${Math.random()*(90+90)-90}deg)`)
    }

    for(i=0; i<myTrialSixArray1; i++){
            $(myTrialSixArray1[i]).addClass('skewable')
            $(myTrialFiveArray2[i]).css("left", `${50}px`)
    }

    var counterTrial61 = 0
    var counterTrial62 = 0

    var colorArray = ["pink", "orange", "blue", "green", "yellow", "red", "purple"]

    $(".trial6 .word1").children().mouseenter(function(){
        counterTrial61++
        if(counterTrial61>colorArray.length){
            counterTrial61 = 0
        }
        $(this).css("color", colorArray[counterTrial61])
        $(this).css("font-size", "70px")
    })

    $(".trial6 .word2").children().mouseenter(function(){
        counterTrial62++
        if(counterTrial62>colorArray.length){
            counterTrial62 = 0
        }
        $(this).css("color", colorArray[counterTrial62])
        $(this).css("font-size", "70px")

    })

    for(i=0; i<myTrialSevenArray1.length; i++){
        $(myTrialSevenArray1[i]).css("left", `${i*50}px`)
    }
    for(i=0; i<myTrialSevenArray2.length; i++){
        $(myTrialSevenArray2[i]).css("left", `${i*50+500}px`)
    }


    $(".trial7 .word1").children().mouseenter(function(){
        $(this).toggleClass("addcolor")
    })
    $(".trial7 .word2").children().mouseenter(function(){
        $(this).toggleClass("addcolor")
    })


    spacecounter=0
    $(".trial8 .word1").children().mouseenter(function(){
        if(spacecounter<40){
            spacecounter+= 3
        }else if(spacecounter>40){
            spacecounter-= 3
        }        $(this).css("margin-left", `${spacecounter}px`)
    })
    $(".trial8 .word2").children().mouseenter(function(){
        if(spacecounter<40){
            spacecounter+= 3
        }else{
            spacecounter-= 3
        }
        $(this).css("margin-left", `${spacecounter}px`)
    })

    let fontSizeCurrent = 2
    $(".trial9 .word1").children().mouseenter(function(){
        fontSizeCurrent += 3
        $(this).css("font-size", `${fontSizeCurrent}px`)
    })
    $(".trial9 .word2").children().mouseenter(function(){
        fontSizeCurrent += 3
        $(this).css("font-size", `${fontSizeCurrent}px`)
    })


  });

