function start(state,game) {
    game.createWizard(state.wizard)
    window.requestAnimationFrame(timeStamp => gameLoop(state,game,timeStamp));
    
}

function gameLoop(state,game,timeStamp) {
   //Move wizard
   const { wizard } = state;
   const { wizardElement } = game;

   modifyWizardPos(state,game);

   if (state.keys.Space) {
    game.wizardElement.style.backgroundImage = 'url("/WizardGame/images/wizard-fire.png")';
    game.createFireball(wizard, state.fireball);

   } else {
    game.wizardElement.style.backgroundImage = 'url("/WizardGame/images/wizard.png")'

   };
   
   //Spawn bugs
   if (timeStamp > state.bugStats.nextSpawmTimeStamp) {
       game.createBug(state.bugStats);
       state.bugStats.nextSpawmTimeStamp = timeStamp + Math.random() * state.bugStats.maxSpawmInterval;
       
   };

   // Render bugs
   document.querySelectorAll('.bug').forEach(bug => {
    let posX = parseInt(bug.style.left);
    if (posX > 0) {
        bug.style.left = posX - state.bugStats.speed + 'px';
    } else {
        bug.remove()
    }

   });
   //Render fireball
   document.querySelectorAll('.fireball').forEach(fireball => {
    let posX = parseInt(fireball.style.left);
    
    if (posX > game.gameScreen.offsetWidth) {
        fireball.remove();
    } else {
        fireball.style.left = posX + state.fireball.speed + 'px';
    }

   });



   //Render
   wizardElement.style.left = wizard.posX + 'px';
   wizardElement.style.top = wizard.posY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null,state,game));

}

function modifyWizardPos(state, game) {
    const { wizard } = state

    if (state.keys.KeyD) {
        wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    
       };
    
       if (state.keys.KeyW) {
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
        
       };
    
       if (state.keys.KeyS) {
        wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);
        
       };
    
       if (state.keys.KeyA) {
        wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
        
       };
}