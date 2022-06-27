function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ihxfq4xpB/model.json',startModel);
}

function startModel(){
    classifier.classify(gotResult);
    console.log("model ready")
}

function gotResult(error,result){
    if(error){
      console.log(error)
    }

    else{
        console.log(result)
    }
    
}