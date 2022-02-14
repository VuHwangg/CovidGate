//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
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
    const scoreText = result_box.querySelector(".score_text");
    if (userScore >= 80){ 
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<h4 class="red">[Cực Kỳ Nguy Hiểm]</h4><span>Tỷ lệ nhiễm bệnh của bạn đang rất cao lên tới <span class="percent">'+ userScore +'%</span>. Hãy đến trạm y tế gần nhất để khai báo và kiểm tra COVID_19 bằng thiết bị chuyên dụng ngay bây giờ. Ngoài ra đừng quên đeo khẩu trang và tránh tiếp xúc với những người xung quanh bạn.</span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore >= 50 && userScore < 80){ 
        let scoreTag = '<h4 class="yellow">[Nguy Hiểm]</h4><span>Tỷ lệ nhiễm bệnh của bạn đang khá cao lên tới <span class="percent">'+ userScore +'%</span>. Tạm thời hãy tránh tiếp xúc với những người xung quanh, đeo khẩu trang khi ra ngoài khi giao tiếp. Mua và sử dụng que test COVID-19 càng sớm càng tốt để có được kết quả chính xác nhất.</span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore >= 20 && userScore < 50){ 
        let scoreTag = '<h4 class="blue">[Tạm Thời An Toàn]</h4><span>Tỷ lệ nhiễm bệnh của bạn đang ở mức không quá nguy hiểm với <span class="percent">'+ userScore +'%</span>. Trong một vài ngày nữa nếu không có bất kỳ triệu chứng nào của bệnh COVID-19 thì bạn có thể hoàn toàn yên tâm về tình hình sức khỏe của bản thân mình. Mặc dù vậy bạn vẫn cần phải chủ động cách li với những người xung quanh trong khoảng thời gian này.</span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<h4 class="green">[An Toàn]</h4><span>Tỷ lệ nhiễm bệnh của bạn đang ở mức tạm thời an toàn với <span class="percent">'+ userScore +'%</span>. Mặc dù vậy vẫn tuyệt đối không được chủ quan trong việc phòng và chống dịch bằng những biện pháp như luôn đeo khẩu trang khi ra khỏi nhà, hạn chế tiếp xúc gần,.. và luôn luôn tuân thủ theo quy tắc 5K.</span>';
        scoreText.innerHTML = scoreTag;
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span> Câu hỏi số &nbsp;<p>' + index + '</p> trên <p>' + questions.length + '</p></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}


// Vòng tròn tiến độ phần trăm tỉ lệ mắc bệnh

let options = {
    startAngle: -1.55,
    size: 150,
    value: showResult.userScore,
    fill: {gradient: ['#a445b2', '#fa4299']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(1)) + "%");
  });