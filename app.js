const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("sign-list")
    const product = document.querySelectorAll(".sign")
    const pname = storeitems.getElementsByTagName("h6")

    for(var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h6')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";            
            }
        }
    }
}


console.log("hello");

var canvas = new fabric.Canvas("c")



document.querySelectorAll(".sign img").forEach(el => {
    el.addEventListener("click", () => {
        fabric.Image.fromURL(el.src, (img) => {
            img.scaleToWidth(100);
            img.scaleToHeight(100);
            img.set({ left: 25, top: 25});
            canvas.add(img);
        })
       
    });
});




window.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key === 'Delete' || e.key ==='Backspace') {
        canvas.remove(canvas.getActiveObject())
    }
});