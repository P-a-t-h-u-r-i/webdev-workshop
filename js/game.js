// global consts
const TRIVIA_API_URL = "https://opentdb.com/api.php?amount=10&category=11&type=multiple"; // see https://opentdb.com/api_config.php
const TENOR_API_URL = "https://g.tenor.com/v1/search?q=QUERY&key=API_KEY&limit=10";
const TENOR_API_KEY = ""; // you need to add your own API key from Tenor and replace API_KEY in TENOR_API_URL. See https://tenor.com/gifapi

function on_page_load() {
    console.log("Page has loaded ...");
    fetch_a_question();
}

function on_question_fetched(question_text, correct_answer, incorrect_answer) {
    console.log("on_question_fetched");
    console.log("Question: " + question_text);
    console.log("correct_answer: " + correct_answer);
    console.log("incorrect_answer: " + incorrect_answer);
    update_question_ui(question_text, correct_answer, incorrect_answer);
    fetch_image();
}

function on_image_fetched(image_url) {
    update_image_ui(image_url);
}

function fetch_a_question() {
    console.log(TRIVIA_API_URL)
    fetch(TRIVIA_API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const question_text = data["results"][0]["question"];
            const correct_answer = data["results"][0]["correct_answer"];
            const incorrect_answer = data["results"][0]["incorrect_answers"];
            on_question_fetched(question_text, correct_answer, incorrect_answer);
        });
}

function update_question_ui(question_text, correct_answer, incorrect_answer) {
    document.getElementById("question_text").innerHTML = question_text;
    answer_buttons = document.getElementsByClassName("answer_button");
    answer_options = incorrect_answer;
    insertion_index = Math.floor(Math.random() * 4);
    answer_options[insertion_index] = correct_answer;

    //answer_options.splice(insertion_index, 0, correct_answer);
    for(let i = 0; i<4; ++i) {
        answer_buttons[i].innerHTML = answer_options[i];
    }
}

function fetch_image() {
    console.log("Fetch image...");
    fetch(TENOR_API_URL)
    .then(response => response.json())
        .then(data => {
            console.log(data);
            const results_length = data["results"].length;
            image_index = Math.floor(Math.random() * results_length);
            const image_url  = data["results"][image_index]["media"][0]["gif"]["url"];
            console.log("Image_url: " + image_url);
           
            on_image_fetched(image_url);
        });
}

function update_image_ui(image_url) {
   document.getElementById("question_clue_image").src = image_url;

}

window.onload = on_page_load;