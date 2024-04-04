const topicsElement  = document.getElementById('topics');
const expandButton = document.querySelectorAll('.button');
const topicContent = document.querySelectorAll('.topic-content');

async function insertTopics(topicsList) {
    topicsElement.innerHTML = ''
    topicsList.forEach(topics => {
        topicsElement.innerHTML += `
            <div class="topics">
            <h3 class="topic-title">${topics.title}<img src="./icons/icon-plus.svg" class="button"></h3>
            <p class="topic-content">${topics.content}</p>
            </div>
        `         
    })
};

//Expand buttons

topicsElement.addEventListener("click", (event) => { 
    if (event.target.classList.contains('button')){
        const topic = event.target.closest('.topics');
        const content = topic.querySelector('.topic-content');
        const imgButton = topic.querySelector('img');

        if(content.classList.toggle('expandido')){
            content.style.display = "block";
            imgButton.src = "./icons/icon-minus.svg";
        }else{
            content.style.display = "none";
            imgButton.src = "./icons/icon-plus.svg";
        }
    }});
    
//Search functions

const searchBar = document.querySelector(".search");

searchBar.addEventListener("input", filterSearch);

function filterSearch(){
    const topics = document.querySelectorAll(".topics");

    if(searchBar.value != "" && searchBar.value != null){
        for(let topic of topics){
            let title = topic.querySelector(".topic-title").textContent.toLowerCase();
            let filterValue = searchBar.value.toLowerCase();

            if(!title.includes(filterValue)){
                topic.style.display = "none";
            }else{
                topic.style.display = "block";
            }
        }
    }else{
        topics.style.display = "block";
    }
}


