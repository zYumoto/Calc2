class CalcController{
    
        constructor(){
            this._displayCalcEl = document.querySelector("#display");
            this._dateEl = document.querySelector("#date");
            this._timeEl = document.querySelector("#time");
            this._currentDate;
            this.initialize();
        }

        initialize(){

            
          

        }

        get displayTime(){
            return this._timeEl.innerHTML;
        }
        set displayTime(value){
            return this._timeEl.innerHTML = value;
        }

        
        get displayDate(){
            return this._dateEl.innerHTML;
        }
        set displayDate(value){
            return this._dateEl.innerHTML = value;
        }


        get displayCalc(){
            return this._displayCalcEl.innerHTML;
        }
        set displayCalc(value){
            this._displayCalcEl.innerHTML = value;
        }
        get currentDate(){
            return new Date ();
        }
        set currentDate(value){
            this._currentDate = value;
        }
}