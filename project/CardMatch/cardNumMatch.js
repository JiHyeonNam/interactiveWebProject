init();

function init(){
  setCardCount(12);
  shuffle(cardInfo);
  cardCreateTemplate(cardInfo);

  btnEle = document.getElementById("cardmain");
  btnEle.addEventListener("click", clickCard);
}

function clickCard(event) {
  if(event.target.closest('.card') == null)
    return;

  //예외1 2개이상 카드가 선택되었을경우 2개의 카드가 비교결과나오기전까지 클릭 수행안함
  let elements_click = document.getElementsByClassName('cardClick');
  if(elements_click.length >= 2)
    return;

  //예외2 맞춘 카드는 뒤집지 않는다.
  let complete = event.target.closest('.card').classList;
  for (let i = 0; i<complete.length; i++) {
    if(complete[i] == "cardComplete")
      return;
  }

  event.target.closest('.card').querySelector('.front').style.transform= 'rotateY(180deg)';
  event.target.closest('.card').querySelector('.back').style.transform= 'rotateY(360deg)';
  event.target.closest('.card').classList.add("cardClick");

  //1.카드가 2장 뒤집었졌는지 체크한다
  //1-1. 카드가 1장뒤집었으면 종료
  //1-2. 카드가 2장뒤집어졌으면 2개 카드 비교
  let elements = document.getElementsByClassName('cardClick');
  if(elements.length < 2)
    return;
  else
    setTimeout(function(){checkCard();},1000);

}

function checkCard(){
  //1. 카드가 2장뒤집어졌으면 카드인지 체크한다
  //1-1. 카드 2장이 다른 카드이면 다시 뒤집는다.
  //1-2. 카드 2장이 같은 카드이면 상태유지
  let elements = document.getElementsByClassName('cardClick');
  if(elements[0].getAttribute('cardid') != elements[1].getAttribute('cardid') )
  {
       for (let i = elements.length-1; i>=0; i--) {
         elements[i].closest('.card').querySelector('.front').style.transform= 'rotateY(0)';
         elements[i].closest('.card').querySelector('.back').style.transform= 'rotateY(180deg)';
         elements[i].classList.remove('cardClick');
       }
  }else {
    for (let j = elements.length-1; j>=0; j--) {
      elements[j].classList.add('cardComplete');
      elements[j].classList.remove('cardClick');
    }
  }
}
function cardCreateTemplate(cardInfo){
    let board = document.createElement('div');
    board.setAttribute("class", "cardboard");
    for(let i=0; i<cardInfo.length; i++){
        if(i!=0 && i%4 == 0)
        {
          document.getElementById('cardmain').appendChild(board);
          board = document.createElement('div');
          board.setAttribute("class", "cardboard");
        }
        let card = document.createElement('div');
            card.setAttribute("class", "card");
            card.setAttribute('cardid', cardInfo[i]);
        let front = document.createElement('div');
            front.setAttribute('class', 'front');
        let img = document.createElement('img');
            img.setAttribute('src', 'res\\A.jpg');
        let back = document.createElement('div');
            back.setAttribute('class', 'back');
        let newContent = document.createTextNode(cardInfo[i]);

        front.appendChild(img);
        back.appendChild(newContent);
        card.appendChild(front);
        card.appendChild(back);
        board.appendChild(card);
    }
    document.getElementById('cardmain').appendChild(board);
}
function setCardCount(count){
    let num = count;
    cardInfo = [];
    for(let i=0; i<num/2; i++){
        cardInfo.push(i);
        cardInfo.push(i);
    }
}
function shuffle(arr){
  let length = arr.length;
    while (length) {
        let index = Math.floor((length--) * Math.random());
        let temp = arr[length];
        arr[length] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
