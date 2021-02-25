Webcam.set({
    width:300,
    height:300, 
     image_format:'png',
     png_quality:90
});

camera=document.getElementById("webcam");

Webcam.attach("#webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/G_uQjyOD1/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model loaded!!")
}



function check(){
    img=document.getElementById("captured_img");
    classifier.classify(img,gotResult); 

}

    function gotResult(error,results){
        if (error){
        console.error(error);

    }

    else{
        console.log(results);
       document.getElementById("result-object").innerHTML=results[0].label;
       document.getElementById("identification-accuracy").innerHTML=results[0].confidence.toFixed(3);   
    }
}
    
