function focused() {
    let sections = document.querySelectorAll('div div');

    sections.forEach(element => {
        element.addEventListener('mouseover', (e) => {
        e.currentTarget.classList.add('focused');       
        });
        element.addEventListener('mouseout', (e) => {
            e.currentTarget.classList.remove('focused')
        });

        
    });
    
}