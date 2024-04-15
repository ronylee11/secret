//alert("hello");
const btn = document.querySelector("#clickBtn");
const container = document.querySelector("#container");

btn.addEventListener("click", function () {
    // create a div
    const div = document.createElement("div");
    // add <p1>hello</p1> in 1 line
    div.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/7YZCUpnaTfg?si=SMtMKdAnSyT4xjyH&autoplay=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

    // remove btn and add the new div
    container.removeChild(btn);
    container.appendChild(div);
});
