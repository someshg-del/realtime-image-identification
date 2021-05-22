function setup() {
    var canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    classfier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yeb5OdDOq/model.json",modelLoaded)

}

function modelLoaded()
{console.log(modelloaded);
}



function draw() {
    image(video, 0, 0, 300, 300);
    classfier.classify(video,gotResult)
}

function gotResult(error,results)
{
if (error) {
console.log(error);    
} else {
console.log(results);
document.getElementById("object_name").innerHTML=results[0].label; 
document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}