// 在DOM元素加載完成後，使用JavaScript將每個字元包裹在一個 <span> 元素中
document.addEventListener('DOMContentLoaded', function() {
    let myText = document.getElementById('myText');
    myText.innerHTML = myText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});
