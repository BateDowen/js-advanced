function start(state,game) {
    game.createWizard(state.wizard)
    window.requestAnimationFrame(timeStamp => gameLoop(state,game,timeStamp));
    
}

function gameLoop(state,game,timeStamp) {
   //Move wizard
   const { wizard } = state;
   const { wizardElement } = game;

   modifyWizardPos(state,game);

   //Spawn bugs
   if (timeStamp > state.bugStats.nextSpawmTimeStamp) {
       game.createBug(state.bugStats);
       state.bugStats.nextSpawmTimeStamp = timeStamp + Math.random() * state.bugStats.maxSpawmInterval;
       
   }
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