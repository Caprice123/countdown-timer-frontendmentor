
var topContent = document.querySelectorAll(".top-content.front")
var botContent = document.querySelectorAll(".bottom-content.front")
var aftertopContent = document.querySelectorAll(".top-content.back")
var afterbotContent = document.querySelectorAll(".bottom-content.back")

var second = 1
var hours = 1
var minute = 1
var days = 1


function rounding(number){
    return number < 0 ? number + 60 : number
    
}

function checkMinus(target1, target2){
    return ((target1 == 0 && target2 < 0) || (target1 < 0 && target2 == 0)) ? 1 : 0
}

function updateData(target){
    target = parseInt(target)
    target = rounding(target)
    target = target.toString().padStart(2, '0')
    return target
}

function checkNotEnd(){
    if (((topSecond.textContent == 0 && afterTopSecond.textContent == 1) || (topSecond.textContent == 1 && afterTopSecond.textContent == 0)) &&
    ((topMinute.textContent == 0 && afterTopMinute.textContent == 1) || (topMinute.textContent == 1 && afterTopMinute.textContent == 0)) &&
    ((topHour.textContent == 0 && afterTopHour.textContent == 1) || (topHour.textContent == 1 && afterTopHour.textContent == 0)) &&
    ((topDays.textContent == 0 && afterTopDays.textContent == 1) || (topDays.textContent == 1 && afterTopDays.textContent == 0))){
        return 0
    }
    else{
        return 1
    }
}

var topSecond = topContent[3],
    afterTopSecond = aftertopContent[3],
    botSecond = botContent[3],
    afterBotSecond = afterbotContent[3]

function flip_card_sec(){
    
    
    
    if (checkNotEnd()){
        topSecond.classList.toggle("flip-top")
        afterTopSecond.classList.toggle("flip-top")
        botSecond.classList.toggle("flip-bot")
        afterBotSecond.classList.toggle("flip-bot")
    
        var sec = [topSecond, afterTopSecond, botSecond, afterBotSecond]
        sec.forEach(l => l.classList.toggle("flip"))
    
        if (second){
            second = 0
            topSecond.textContent = parseInt(topSecond.textContent) - 2
            
        }
        else{
            second = 1
            afterTopSecond.textContent = parseInt(afterTopSecond.textContent) - 2
            
        }
        if (checkMinus(parseInt(topSecond.textContent), parseInt(afterTopSecond.textContent))){
            flip_card_min()
        }
    
        topSecond.textContent = updateData(topSecond.textContent)
        afterTopSecond.textContent = updateData(afterTopSecond.textContent)
    
        botSecond.textContent = afterTopSecond.textContent
        afterBotSecond.textContent = topSecond.textContent
    }
    

}

var topMinute = topContent[2],
    afterTopMinute = aftertopContent[2]
    botMinute = botContent[2],
    afterBotMinute = afterbotContent[2]

function flip_card_min(){
    topMinute.classList.toggle("flip-top")
    afterTopMinute.classList.toggle("flip-top")
    botMinute.classList.toggle("flip-bot")
    afterBotMinute.classList.toggle("flip-bot")


    var min = [topMinute, afterTopMinute, botMinute, afterBotMinute]

    min.forEach(l => l.classList.toggle("flip"))
    if (minute){
        minute = 0
        topMinute.textContent = parseInt(topMinute.textContent) - 2
    }
    else{
        minute = 1
        afterTopMinute.textContent = parseInt(afterTopMinute.textContent) - 2
    }
    
    if (checkMinus(parseInt(topMinute.textContent), parseInt(afterTopMinute.textContent))){
        flip_card_hour()
    }
    
    topMinute.textContent = updateData(topMinute.textContent)
    afterTopMinute.textContent = updateData(afterTopMinute.textContent)

    botMinute.textContent = afterTopMinute.textContent
    afterBotMinute.textContent = topMinute.textContent
}


var topHour = topContent[1],
    afterTopHour = aftertopContent[1]
    botHour = botContent[1],
    afterBotHour = afterbotContent[1]


function flip_card_hour(){
    var today = new Date();

    console.log("HOUR " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
    
    topHour.classList.toggle("flip-top")
    afterTopHour.classList.toggle("flip-top")
    botHour.classList.toggle("flip-bot")
    afterBotHour.classList.toggle("flip-bot")
    
    var hour = [topHour, afterTopHour, botHour, afterBotHour]
    hour.forEach(l => l.classList.toggle("flip"))
    
    if (hours){
        hours = 0
        topHour.textContent = parseInt(topHour.textContent) - 2
    }
    else{
        hours = 1
        afterTopHour.textContent = parseInt(afterTopHour.textContent) - 2
    }

    if (checkMinus(parseInt(topHour.textContent), parseInt(afterTopHour.textContent))){
        flip_card_day()
    }
    topHour.textContent = updateData(topHour.textContent)    
    afterTopHour.textContent = updateData(afterTopHour.textContent)


    botHour.textContent = afterTopHour.textContent
    afterBotHour.textContent = topHour.textContent
}


var topDays = topContent[0],
    afterTopDays = aftertopContent[0]
    botDays = botContent[0],
    afterBotDays = afterbotContent[0]

function flip_card_day(){
    topDays.classList.toggle("flip-top")
    afterTopDays.classList.toggle("flip-top")
    botDays.classList.toggle("flip-bot")
    afterBotDays.classList.toggle("flip-bot")

    var day = [topDays, afterTopDays, botDays, afterBotDays]
    day.forEach(l => l.classList.toggle("flip"))
    
    if (days){
        days = 0
        topDays.textContent = parseInt(topDays.textContent) - 2

    }
    else{
        days = 1
        afterTopDays.textContent = parseInt(afterTopDays.textContent) - 2
        
    }



    topDays.textContent = updateData(topDays.textContent)
    afterTopDays.textContent = updateData(afterTopDays.textContent)

    botDays.textContent = afterTopDays.textContent
    afterBotDays.textContent = topDays.textContent
}
var today = new Date();

console.log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
window.setInterval(flip_card_sec, 1000);
topSecond.textContent = updateData(topSecond.textContent)
afterTopSecond.textContent = updateData(parseInt(topSecond.textContent) - 1)
botSecond.textContent = afterTopSecond.textContent
afterBotSecond.textContent = topSecond.textContent

topMinute.textContent = updateData(topMinute.textContent)
afterTopMinute.textContent = updateData(parseInt(topMinute.textContent) - 1)
botMinute.textContent = afterTopMinute.textContent
afterBotMinute.textContent = topMinute.textContent

topHour.textContent = updateData(topHour.textContent)
afterTopHour.textContent = updateData(parseInt(topHour.textContent) - 1)
botHour.textContent = afterTopHour.textContent
afterBotHour.textContent = topHour.textContent

topDays.textContent = updateData(topDays.textContent)
afterTopDays.textContent = updateData(parseInt(topDays.textContent) - 1)
botDays.textContent = afterTopDays.textContent
afterBotDays.textContent = topDays.textContent

function wavingtext(target, title){
    title.split("")
    target.innerHTML = ""
    //splitting text
    for (let x = 0; x < title.length; x++){
        target.innerHTML += "<span>" + title[x] + "</span>"
    }
    
    const elements = document.querySelectorAll("span")
    for (let x = 0; x < elements.length; x++){
        elements[x].style.animationDelay = x * 0.1 + 's'
    }
}

const text = document.getElementById("title")
wavingtext(text, "We're launching soon")
