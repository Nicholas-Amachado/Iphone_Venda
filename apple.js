// Selecionando os elementos do HTML

const buttons = document.querySelectorAll("#image-picker li");

const image = document.querySelector("#product-image");

// Adicionando os eventos ao Projeto

buttons.forEach((btn)=>{
    btn.addEventListener("click" , (e)=>{
        console.log(e);

        buttons.forEach((btn) =>{
            btn.querySelector(".color").classList.remove("selected")
        })

        const button = e.target;

        const id = button.getAttribute("id")

        button.querySelector(".color").classList.add("selected")

        image.classList.add("changing")

        image.setAttribute("src", `../IMG/iphone_${id}.jpg`)

        setTimeout(()=>{
            image.classList.remove("changing")
        },200)
        console.log(id);
    })
})

