// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {
    let inputSectionElement = document.getElementById('inputSection');

    let textAreaElement = inputSectionElement.children[0];
    let divInputSectionElement = inputSectionElement.children[1];

    let imgInputSectionElement = divInputSectionElement.children[0];
    let img = imgInputSectionElement.getAttribute('src');
    let inputUserName = divInputSectionElement.children[1];
    let sendBtn = divInputSectionElement.children[2];
    sendBtn.addEventListener('click', sendQuestion);

    function sendQuestion() {
        createPendingQuestion(inputUserName.value, textAreaElement.value);
    }

    function createPendingQuestion(name, question) {
        let divPendingQuestion = document.getElementById('pendingQuestions');

        let divQuestion = document.createElement('div');
        divQuestion.setAttribute('class', 'pendingQuestion');

        let image = document.createElement('img');
        image.setAttribute('src', './images/user.png');
        image.setAttribute('width', '32');
        image.setAttribute('height', '32');

        let span = document.createElement('span');
        if (name === '') {
            span.textContent = 'Anonymous';
        } else {
            span.textContent = name;
        }

        let p = document.createElement('p');
        p.textContent = question;

        let divAction = document.createElement('div');
        divAction.setAttribute('class', 'actions');

        let archiveBtn = document.createElement('button');
        archiveBtn.setAttribute('class', 'archive');
        archiveBtn.textContent = 'Archive';
        archiveBtn.addEventListener('click', () => {
            divQuestion.remove();
        });

        let openButton = document.createElement('button');
        openButton.setAttribute('class', 'open');
        openButton.textContent = 'Open';
        openButton.addEventListener('click', () => {

            openQuestion(span.textContent, p.textContent);
            divQuestion.remove();
        });

        divAction.appendChild(archiveBtn);
        divAction.appendChild(openButton);

        divQuestion.appendChild(image);
        divQuestion.appendChild(span);
        divQuestion.appendChild(p);
        divQuestion.appendChild(divAction);

        divPendingQuestion.appendChild(divQuestion);

    }

    function openQuestion(name, question) {
        let divOpenQuestions = document.getElementById('openQuestions');

        let divQuestion = document.createElement('div');
        divQuestion.setAttribute('class', 'openQuestion');

        let image = document.createElement('img');
        image.setAttribute('src', './images/user.png');
        image.setAttribute('width', '32');
        image.setAttribute('height', '32');

        let span = document.createElement('span');
        span.textContent = name;

        let p = document.createElement('p');
        p.textContent = question;

        let divAction = document.createElement('div');
        divAction.setAttribute('class', 'actions');

        let replyButton = document.createElement('button');
        replyButton.setAttribute('class', 'reply');
        replyButton.textContent = 'Reply';
        replyButton.addEventListener('click', () => {
            switch (replyButton.textContent) {
                case 'Reply':
                    divReplySection.style.display = 'block';
                    replyButton.textContent = 'Back';
                    break;
                case 'Back':
                    replyButton.textContent = 'Reply';
                    divReplySection.style.display = 'none';
                    break;
            }
        });

        divAction.appendChild(replyButton);

        let divReplySection = document.createElement('div');
        divReplySection.setAttribute('class', 'replySection');
        divReplySection.setAttribute('style', 'display');
        divReplySection.style.display = 'none';

        let inputElement = document.createElement('input');
        inputElement.setAttribute('class', 'replyInput');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('placeholder', 'Reply to this question here...');

        let replySendBtn = document.createElement('button');
        replySendBtn.setAttribute('class', 'replyButton');
        replySendBtn.textContent = 'Send';
        replySendBtn.addEventListener('click', () => {
            let li = document.createElement('li');
            li.textContent = inputElement.value;
            olList.appendChild(li);

        });

        let olList = document.createElement('ol');
        olList.setAttribute('class', 'reply');
        olList.setAttribute('type', '1');

        divReplySection.appendChild(inputElement);
        divReplySection.appendChild(replySendBtn);
        divReplySection.appendChild(olList);

        divQuestion.appendChild(image);
        divQuestion.appendChild(span);
        divQuestion.appendChild(p);
        divQuestion.appendChild(divAction);
        divQuestion.appendChild(divReplySection);

        divOpenQuestions.appendChild(divQuestion);

    }
}

// To check out your solution, just submit mySolution() function in judge system.m.