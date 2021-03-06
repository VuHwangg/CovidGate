//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const notion_text = document.querySelector(".notion");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
    notion_text.classList.remove("notion-text");
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
}

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    
    //getting correct answer from array
    let ans_0 = questions[que_count].answer0; 
    let ans_1 = questions[que_count].answer1; 
    let ans_2 = questions[que_count].answer2;
    let ans_3 = questions[que_count].answer3;
    let ans_4 = questions[que_count].answer4;
    let ans_5 = questions[que_count].answer5;
    let ans_6 = questions[que_count].answer6;
    let ans_7 = questions[que_count].answer7;
    let ans_8 = questions[que_count].answer8;
    let ans_9 = questions[que_count].answer9;
    let ans_10 = questions[que_count].answer10;
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == ans_0){
        userScore += 0; 
        answer.classList.add("correct"); 
        console.log("Your score = " + userScore);
    }
    if(userAns == ans_1){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        console.log("Your score = " + userScore);
    }
    if(userAns == ans_2){
        userScore += 2; 
        answer.classList.add("correct"); 
        console.log("Your score = " + userScore);
    }
    if(userAns == ans_3){
        userScore += 3; 
        answer.classList.add("correct"); 
        console.log("Your score = " + userScore);
    }
    if(userAns == ans_4){
        userScore += 4; 
        answer.classList.add("correct"); 
        console.log("Your score = " + userScore);
    }
    if(userAns == ans_5){
        userScore += 5; 
        answer.classList.add("correct"); 
        console.log("Your score = " + userScore);
    }
    if(userAns == ans_6){
        userScore += 6; 
        answer.classList.add("correct"); 
        console.log("Your score = " + userScore);
    }
    if(userAns == ans_7){
        userScore += 7; 
        answer.classList.add("correct"); 
        console.log("Your score = " + userScore);
    }
    if(userAns == ans_8){
        userScore += 8; 
        answer.classList.add("correct"); 
        console.log("Your score = " + userScore);
    }
    if(userAns == ans_9){
        userScore += 9; 
        answer.classList.add("correct"); 
        console.log("Your score = " + userScore);
    }
    if(userAns == ans_10){
        userScore += 10; 
        answer.classList.add("correct"); 
        console.log("Your score = " + userScore);
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scorePercent = result_box.querySelector(".score_percent");
    const scoreText = result_box.querySelector(".score_text");

    // tag percentTag s??? ???????c th??m v??o th??? div c?? t??n .score_percent
    if (userScore >= 80){ 
        //creating a new span tag and passing the user score number
        let percentTag = '<h1 class="red">'+ userScore +'.0%</h1>';
        scorePercent.innerHTML = percentTag;
        let scoreTag = '<h4 class="red">[C???c K??? Nguy Hi???m]</h4><span>T??? l??? nhi???m b???nh c???a b???n ??ang r???t cao l??n t???i <span class="percent">'+ userScore +'%</span>. H??y ?????n tr???m y t??? ho???c b???nh vi???n g???n nh???t ????? khai b??o v?? ki???m tra COVID_19 b???ng thi???t b??? chuy??n d???ng ngay b??y gi???. Ngo??i ra ?????ng qu??n ??eo kh???u trang, s??t khu???n v?? tr??nh ti???p x??c v???i nh???ng ng?????i xung quanh b???n.</span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore >= 50 && userScore < 80){
        let percentTag = '<h1 class="orange">'+ userScore +'.0%</h1>';
        scorePercent.innerHTML = percentTag;
        let scoreTag = '<h4 class="orange">[Nguy Hi???m]</h4><span>T??? l??? nhi???m b???nh c???a b???n ??ang kh?? cao l??n t???i <span class="percent">'+ userScore +'%</span>. T???m th???i h??y tr??nh ti???p x??c v???i nh???ng ng?????i xung quanh, ??eo kh???u trang khi ra ngo??i v?? khi giao ti???p. T??? mua v?? s??? d???ng que test COVID-19 ho???c ?????n c??c tr???m y t???, b???nh vi???n g???n nh???t c??ng s???m c??ng t???t ????? c?? ???????c k???t qu??? ch??nh x??c nh???t.</span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore >= 20 && userScore < 50){ 
        let percentTag = '<h1 class="yellow">'+ userScore +'.0%</h1>';
        scorePercent.innerHTML = percentTag;
        let scoreTag = '<h4 class="yellow">[T???m Th???i An To??n]</h4><span>T??? l??? nhi???m b???nh c???a b???n ??ang ??? m???c kh??ng qu?? nguy hi???m v???i <span class="percent">'+ userScore +'%</span>. Trong 7 ng??y n???a n???u kh??ng c?? b???t k??? tri???u ch???ng n??o c???a b???nh COVID-19 th?? b???n c?? th??? ho??n to??n y??n t??m v??? t??nh h??nh s???c kh???e c???a b???n th??n m??nh. M???c d?? v???y b???n kh??ng ???????c ch??? quan v?? c???n ph???i ch??? ?????ng c??ch li v???i nh???ng ng?????i xung quanh trong kho???ng th???i gian n??y.</span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let percentTag = '<h1 class="green">'+ userScore +'.0%</h1>';
        scorePercent.innerHTML = percentTag;
        let scoreTag = '<h4 class="green">[An To??n]</h4><span>T??? l??? nhi???m b???nh c???a b???n ??ang ??? m???c t???m th???i an to??n v???i <span class="percent">'+ userScore +'%</span>. M???c d?? v???y v???n tuy???t ?????i kh??ng ???????c ch??? quan trong vi???c ph??ng v?? ch???ng d???ch b???ng nh???ng bi???n ph??p nh?? lu??n ??eo kh???u trang khi ra kh???i nh??, h???n ch??? ti???p x??c g???n,.. v?? lu??n lu??n tu??n th??? theo quy t???c 5K c???a b??? y t???.</span>';
        scoreText.innerHTML = scoreTag;
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span> C??u h???i s??? &nbsp;<p>' + index + '</p> tr??n <p>' + questions.length + '</p></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

// fill: {gradient: ['#a445b2', '#fa4299']}