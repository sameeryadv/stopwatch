const hourElement = document.querySelector('#hours');
const minuteElement = document.querySelector('#minutes');
const secondElement = document.querySelector('#seconds');
const lapElement = document.querySelector('.lap');

let buttonState = false; //State of the start button

const elements = [hourElement,minuteElement,secondElement];

let time = [0,0,0];

function modify() {
    if (buttonState) {
        time[2]++;
    time[2] == 60 ? time[1]++ : time[1];
    time[1] == 60 ? time[0]++ : time[0]; 

    time.forEach((value,index) => {
        time[index] = value%60;
    })
    }
    render()
}

function render() {
    elements.forEach((element,i) => {
        element.innerHTML = time[i] < 10 ? ('0'+time[i])  : time[i];
    })
    document.querySelector('.start').innerHTML = buttonState ? 'Stop' : 'Start' ;
}

function buttonManager() {
    buttonState = !buttonState;
    start();
}

function start() {
    if (buttonState) {
        setTimeout(() => {
            start();
            modify();
        }, 1000);
    }
    render()
}

function reset() {
    buttonState = false
    clearTimeout();
    time = [0,0,0];
    lapElement.innerHTML = '';
    modify();

}

function arrayToText() {
    let stringHour = time[0] < 10 ? ('0'+time[0])  : time[0];
    let stringMinute = time[1] < 10 ? ('0'+time[1])  : time[1];
    let stringSecond = time[2] < 10 ? ('0'+time[2])  : time[2];
    return stringHour + ':' + stringMinute + ':' + stringSecond;
}

function lap() {
    const textNode = document.createTextNode(arrayToText());
    let node = document.createElement('li');
    node.appendChild(textNode);
    lapElement.appendChild(node);
}