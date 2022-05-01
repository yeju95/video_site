//모든 article 요소들을 변수에 저장
const item = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = document.querySelector("aside span");


for(let el of item){   //item의 객수만큼 반복
   
    el.addEventListener("mouseenter",e => {
        // 현재 반복이 되고 있는 article요소에 mouseenter 이벤트가 발생시
        e.currentTarget.querySelector("video").play();
        //현재 이벤트가 바인딩 된(currentTarget) 엘리먼트의 자식요소 vidio가 play된다.
    });
    el.addEventListener("mouseleave",e => {
        //현재 반복이 되고 있는 article요소에 mouseleave이벤트가 발생시
        e.currentTarget.querySelector("video").pause();
        //현재 이벤트가 바인딩 된(currentTarget)엘리먼트의 자식요소 video가 정지된다.
    });

    //현재 반복되고 있는 article요소에 click이벤트 발생시
    el.addEventListener("click", e => {
        let title = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
        console.log(vidSrc);

        //aside 요소의 내부 콘텐츠에 위의 변수 적용
        aside.querySelector("h2").innerText = title;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src",vidSrc)

        aside.querySelector("video").play();    //aside 요소 내부의 동영상을 재생
        aside.classList.add("on"); //aside요소에 클라스 on을 붙여준다.(팝업패널이 보이게)  
    });

};

//aside 안에 있는 CLOSE버튼을 클릭하면
close.addEventListener("click", e => {
    aside.classList.remove("on");  //aside요소에 클라스 on을 붙여준다(팝업패널이 보이게)
    aside.querySelector("video").pause();  //aisde요소 내부의 동영상을 중지
})