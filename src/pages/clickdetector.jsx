

export default function ClickDetector() {
    const yMax = 25;
    const xMax = 25;
    function iterateDiv() {
        let arrayCoords = []
        for (let i = 0; i<yMax; i++)
            for (let j = 0; j<xMax; j++)
                arrayCoords.push([j,i])
        return arrayCoords;
    }
    return (
        <div id = "click-detector">
            <canvas id="canvas" width="150" height="150"></canvas>
        </div>
    )
}