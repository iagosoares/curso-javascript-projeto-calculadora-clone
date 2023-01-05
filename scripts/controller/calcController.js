class CalcController{

    constructor(){
        
        
        initialize();


    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let currentDate = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "123456";
        currentDate.innerHTML = "01/01/2023";
        timeEl.innerHTML = "20:30";
    }


    get displayCalc(){return this.displayCalcEl.innerHTML};
    set displayCalc(value){this.displayCalcEl.innerHTML = value};

    get currentDate(){return this.currentDate.innerHTML};
    set currentDate(value){this.currentDate.innerHTML = value}; 
}