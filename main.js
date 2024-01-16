function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');



}

function setup()
{ canvas = createCanvas(400,400);
    canvas.center();
    background("white");
         canvas.mouseReleased(classifyCanvas);
        synth = window.speechSynthesis;
        }

function draw()
{
    strokeWeight(7);
    stroke(0);
    if (mouseIsPressed)
    {
        line(pmouseX , pmouseY , mouseX , mouseY);
    }

}

function cleanCanvas()
{
    background("white");
}

function classifyCanvas()
{
    classifier.classify(canvas , gotResults);
}

function gotResults(error , results)
{
    if (error)
    {
        console.log(error);
    }

    if (results)
    {
        console.log(results);
        var_label = results[0].label;
        var_confidence = Math.floor(results[0].confidence * 100);
        document.getElementById("label").innerHTML = 'Label : ' + var_label;
        document.getElementById("confidence").innerHTML ='Confidence : ' + var_confidence + '%';

    }
}

    
