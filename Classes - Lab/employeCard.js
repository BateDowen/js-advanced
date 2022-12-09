class Employee{
    #parrent = null;
    #el = null;

    constructor(slector,firstNAme,lastName,ocuppacion){
        this.firstNAme = firstNAme;
        this.lastName = lastName;
        this.ocuppacion = ocuppacion;
        
        this.#el = document.createElement('div');
        this.#parrent = document.querySelector(slector);

        this.#parrent.appendChild(this.#el);

        this.render()
        this.#init()
    }

    #init(){
        this.#el.addEventListener('click',(e)=>{
            e.currentTarget.style.transform = 'scale(1.2)';
            
        })
    }

    getContent(){
        return `<div class="card">
                    <img src="img_avatar.png" alt="Avatar" style="width:300px">
                    <div class="container">
                    <h4><b>${this.firstNAme} ${this.lastName}</b></h4>
                    <p>${this.ocuppacion}</p>
                    </div>
                </div>`;         
    }
    render(){
        this.#el.innerHTML = this.getContent();

    }
}