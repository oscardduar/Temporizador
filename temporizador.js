const getRemainTime = deadLine => {
    let now = new Date(),
        remainTime = (new Date(deadLine) - now + 1000)/1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime /60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime/3600 % 24)).slice(-2),
        remainDays =  Math.floor(remainTime/(3600 * 24));
        return {
            remainTime,
            remainSeconds,
            remainMinutes,
            remainHours,
            remainDays
        }
};

const countdown = (deadline, elem, finalMessage)=>{
    const el = document.getElementById(elem);
    
    const timerUpdate = setInterval(()=>{
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays}días:${t.remainHours}horas:${t.remainMinutes}minutos:${t.remainSeconds}segundos`
        if(t.remainTime < 1){
            clearInterval(timerUpdate)
            el.innerHTML = finalMessage;
        }
    }, 1000)



}

countdown('Sat Jan 25 2020 12:44:01 GMT-0600 (hora estándar central)', 'clock', 'Bienvenido')


