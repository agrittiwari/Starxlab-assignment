//alert('hi')
console.log()

promptQuestion()

// var questionOne = document.getElementById("one")
// questionOne.onclick() = promptOne

function getHoursMinsSeconds(totalSeconds) {
    let seconds, mins, hours;
    
    hours = Math.floor(totalSeconds/3600)
    mins = Math.floor((totalSeconds- (3600*hours))/60)

    seconds =   Math.floor(totalSeconds -(3600*hours) - (mins*60))
   
    alert(`${ hours } hours, ${ mins } minutes and ${ seconds } seconds`)
    
}
function isEvenOrOdd(L, R)
{
  
    let oddDigitCount = Math.floor((R - L) / 2);
     if (R % 2 == 1 || L % 2 == 1)
        oddDigitCount++;
 
    // Check if count of odd Numbers
    // is even or odd
 
    if (oddDigitCount % 2 == 0)
    alert("Even")  
    else  alert("Odd")
        return ;
}

function ascendArrays(arrOfStr)
{
alert(arrOfStr)
    const sortedArr = arrOfStr.sort()
alert(sortedArr)
}

function promptQuestion()
{
  //first question
    var secondsCount = prompt(' 1) Get number of hours, minutes and seconds from number of seconds.    For example :  If number of seconds provided are 129 , then number of hours will be 0 , minutes 2, seconds 9.    Input :  Number of seconds.    Output : “Hou"rs = ‘number of hours’, minutes = ‘number of minutes’ , seconds = ‘number of seconds’ "');
    getHoursMinsSeconds(secondsCount)

//second question

    var firstEL = prompt('What is L')
    var secondEl = prompt('what is R')

    isEvenOrOdd(firstEL, secondEl)
    
    console.log('second question')


    //third question
    var numOfStrings = prompt('Enter your number of Strings')
    
    var arr = [];
    for (let i = 0; i < numOfStrings; i++) {
        arr.push(prompt("Enter your string"))
}
 console.log(arr)
ascendArrays(arr)


    
   return secondsCount
}




