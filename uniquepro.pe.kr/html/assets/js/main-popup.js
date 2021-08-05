/* Close button JS */

window.onload = () => {
    const popup_btns = document.querySelectorAll('.popup-button');
    console.log('클릭');
    //console.log('aa', popup_btns);
    popup_btns.forEach(button => {
        button.addEventListener('click', e => {
            const target = e.target.dataset.target;
            console.log('target', target);
            const popup_el = document.querySelector(`${target}`);
            console.log('popup_el :', popup_el);
            if (popup_el != null) {
              popup_el.classList.toggle('is-active');
              console.log('aa');
            }
        });
    });
    
}
// 팝업을 쿼리셀렉터올로 배열로 가져오고, 
// 순회해서 클릭하면 클릭한 것의 dataset 값 가져와서
// dataset값을 찾아서
// null 이 아니면 dataset값을 가진애가 토글
