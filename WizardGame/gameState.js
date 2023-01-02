function initState() {
    let startX = Math.floor(Math.random() * 700);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10,
        },
        bugStats: {
            width: 50,
            height: 50,
        },

        keys: {}
    };
    return state;
}