function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity) {
    if (activity) {
        return `This Monday, I will ${activity}.`
    }
    else return `This Monday, I will go to the office.`
}

function wrapAdjective (flare = '*') {
    return function (state = 'special') {
        return `You are ${flare}${state}${flare}!`
    }
}