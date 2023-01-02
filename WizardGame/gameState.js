function initState() {
    const state = {
        
        wizard: {
            width: 82,
            height: 100,
            startX: Math.floor(Math.random() * 700),
            startY: Math.floor(Math.random() * 500),
        }
    };
    return state;
}