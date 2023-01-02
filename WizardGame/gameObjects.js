function initGameObjects() {
    const startScreen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');

    return {
        startScreen,
        gameScreen,
        createWizard (initialState){
            let wizardElement = document.createElement('div');
            wizardElement.classList.add('wizard');

            wizardElement.style.height = initialState.height + 'px';
            wizardElement.style.width = initialState.width + 'px';

            wizardElement.style.left = initialState.posX + 'px';
            wizardElement.style.top = initialState.posY + 'px';

            this.wizardElement = wizardElement;
            this.gameScreen.appendChild(wizardElement);


            return wizardElement;
        },
        createFireball(wizard,fireball){
            const fireballEl = document.createElement('div');
            fireballEl.classList.add('fireball');
            fireballEl.style.left = wizard.posX + wizard.width + 'px';
            fireballEl.style.top = wizard.posY + wizard.height / 3 + 'px';
            fireballEl.style.width = fireball.width + 'px';
            fireballEl.style.height = fireball.height + 'px';

            this.gameScreen.appendChild(fireballEl);


        },

        createBug(stats){
            const bugElement = document.createElement('div');
            bugElement.classList.add('bug');
            bugElement.style.width = stats.width + 'px';
            bugElement.style.height = stats.height + 'px';
            bugElement.style.left = gameScreen.offsetWidth - stats.width + 'px';
            bugElement.style.top = Math.floor(Math.random() * gameScreen.offsetHeight - stats.height) + 'px';

            this.gameScreen.appendChild(bugElement)
        }
    }
}