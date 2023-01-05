class CalcController{

    constructor(){
        this.displayCalc = 0;
        this.currentDate;
        initialize();


    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "123456";
        dateEl.innerHTML = "01/01/2023";
        timeEl.innerHTML = "20:30";
    }


    get displayCalc(){return this.displayCalc};
    set displayCalc(value){this.displayCalc = value};

    get currentDate(){return this.currentDate};
    set currentDate(value){this.currentDate = value}; 
}