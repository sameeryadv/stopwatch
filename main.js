const hourElement = document.querySelector('#hours');
const minuteElement = document.querySelector('#minutes');
const secondElement = document.querySelector('#seconds');

let buttonState = false; //State of the start button

const elements = [hourElement,minuteElement,secondElement];

let time = [0,0,0];

function modify() {
    time[2]++;
    time[2] == 60 ? time[1]++ : time[1];
    time[1] == 60 ? time[0]++ : time[0]; 

    time.forEach((value,index) => {
        time[index] = value%60;
    })
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
    modify();

}
