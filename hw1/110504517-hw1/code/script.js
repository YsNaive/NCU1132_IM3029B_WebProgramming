
function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// 避免 local 模式無法引用，當前已直接複製進各頁面
// document.addEventListener("DOMContentLoaded", () => {
//     loadComponent("header-container", "header.html");
//     loadComponent("footer-container", "footer.html");
// });

document.getElementById("back-to-top").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});