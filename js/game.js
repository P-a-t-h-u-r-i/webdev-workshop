// global consts
const TRIVIA_API_URL = "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"; // see https://opentdb.com/api_config.php
const TENOR_API_URL = "https://g.tenor.com/v1/search?q=QUERY&key=API_KEY&limit=10";
const TENOR_API_KEY = ""; // you need to add your own API key from Tenor and replace API_KEY in TENOR_API_URL. See https://tenor.com/gifapi

function on_page_load() {
    console.log("Page has loaded ...");
    fetch_a_question();
}

function on_question_fetched() {
    console.log("on_question_fetched");
    console.log("Question: " + question_text);
    console.log("correct_answer: " + correct_answer);
    console.log("incorrect_answer: " + incorrect_answer);
    update_question_ui();
    fetch_image();
}

function on_image_fetched() {
    update_image_ui();
}

function fetch_a_question() {
    console.log(TRIVIA_API_URL)
    fetch('http://example.com/movies.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const question_text = data["results"][0]["question"];
            const correct_answer = data["results"][0]["correct_answer"];
            const incorrect_answers = data["results"][0]["incorrect_answer"];
            on_question_fetched(question_text, correct_answer, incorrect_answers);
        });
}

function update_question_ui(question_text, correct_answer, incorrect_answers) {
    DocumentFragment.getElementById("question_text").innerHTML = question_text;
    answer_buttons = document.getElementsByClassName("answer_button");
    const answer_options = incorrect_answers;
    const insertion_index = Math.floor(Math.random() * 4);
    
}

function fetch_image() {

}

window.onload = on_page_load;