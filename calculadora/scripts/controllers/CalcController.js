class CalcController{
    constructor(){
        this.locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){
        this.setDisplayDateTime();

        setInterval(() =>{
            this.setDisplayDateTime();
        }, 1000);
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this.locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }


    get displayDate(){
        return this._dataEl.innerHTML;
    }

    set displayDate(value){
        return this._dataEl.innerHTML = value;
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }
    
    set currentDate(value){
        this.currentDate = value;
    }

}