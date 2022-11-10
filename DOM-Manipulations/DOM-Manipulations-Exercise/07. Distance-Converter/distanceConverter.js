function attachEventsListeners() {
    let convertBtn = document.getElementById('convert').addEventListener('click', onConvert);
    let outputDistance = document.getElementById('outputDistance');

    let rationsInMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001 ,
        mi: 1609.34 ,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    function convert(value, units) {
        let meters = value * rationsInMeters[units];

        return {
            km: meters / rationsInMeters.km,
            m: meters,
            cm: meters / rationsInMeters.cm,
            mm: meters / rationsInMeters.mm,
            mi: meters / rationsInMeters.mi,
            yrd: meters / rationsInMeters.yrd,
            ft: meters / rationsInMeters.ft,
            in: meters / rationsInMeters.in, 
        }
    }
    function onConvert(event) {
        let inputUnits = event.target.parentElement.querySelector('#inputUnits');
        let outputUnitsEl = document.querySelector('#outputUnits')

        let inputDistance = document.getElementById('inputDistance')
        let distance = convert(Number(inputDistance.value), inputUnits.value);
        console.log(inputUnits.value);
        console.log(distance);
        console.log(distance[inputUnits.value]);
        console.log(outputDistance);
        outputDistance.value = distance[outputUnitsEl.value]
        

    }
}