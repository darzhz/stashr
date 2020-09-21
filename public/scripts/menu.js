$ = document;
height = [];
width = [];
let canvas = $.getElementById("mycan");
let arr = [];
//#region internal stuff
function fileIn(){
    const file = $.querySelector('#myFile').files[0];
    console.log(file);
    readas64(file,100,0.5);
    console.log("before : "+file.size/1024 + " kb");
}
async function readas64(file,w,qua){
    new Compressor(file,{
    quality:qua,
    width : w,
    height : (width[0]/height[0])*w,
        success(result){
        const reader = new FileReader();
        reader.readAsDataURL(result);
        reader.onload = function (){
            let img = new Image();
            img.src = reader.result;
        img.onload = function (){
            height.unshift(img.height);
            width.unshift(img.width);
        }
        console.log(reader.result);
        console.log("after : "+result.size/1024 + " kb");
        let ite = reader.result; 
        let devidentNum = parseInt(ite.length/250);
        console.log(devidentNum);
        splitIt(arr,ite,devidentNum);
        console.log(arr)
        qrify(arr);
        setTimeout(() => {
                renderFrame();
                console.log("loaded🔫");
                // if(navigator.appVersion.includes("Android")){
                //     out = document.getElementsByClassName('out');
                //     out[0].style.left = "22vh";
                // }
        }, 80);
      };
      reader.onerror = function (err){
          console.log("error detected : "+err);
      }
}
});
}
function makeQr(file){
    const qr = new QRCode(document.getElementById("qrHere"), {
        text: file,
        width: 200,
        height: 200,
        colorDark : "black",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.Q
    });
}
function splitIt(arr,text,divident){
    let i = 0;
    let parts = parseInt(text.length/divident);
    let n = parts;
    console.log(parts);
    console.log(arr);
    do {
        arr.push(text.slice(i,n));
        i+=parts;
        n+=parts;
        console.log(i+" : "+n);
    } while(i < text.length);
}
async function qrify(arr){
    for(let i=0; i < arr.length;i++){
        makeQr(arr[i]);
    }
}
//#endregion
//#region fuck i made my own gallery😎
let slide = $.getElementById('qrHere');
let nxt = $.getElementById('next');
let prev = $.getElementById('prev');
let navi = [];
let images = $.getElementsByTagName('img');
let canvaz = $.getElementsByTagName('canvas');
function renderFrame(){
for(let i = 0; i<images.length;i++){
    images[i].style.display = "none";
    if(navigator.appVersion.includes("Android")){
    canvaz[i].style.display = "none";
    images[i].removeAttribute("alt");
    }
     navi.push(i);
     images[0].style.display = "block";
     if(navigator.appVersion.includes("Android")){
     canvaz[0].style.display = "block";
     images[0].style.display = "none";
     }
}
}
let currentPos = [0];
console.log(currentPos+" and "+navi);
function stepForward(){
    let a = currentPos[0];
    a += 1;
    if(a == navi.length){
        a = 0;
        images[navi[a]].style.display = "block";
        images[navi[navi.length-1]].style.display = "none";
        // android support
        if(navigator.appVersion.includes("Android")){
            canvaz[navi[a]].style.display = "block";
            canvaz[navi[navi.length-1]].style.display = "none";
        }
    }
    images[navi[a]].style.display = "block";
    //android support
    if(navigator.appVersion.includes("Android")){
        canvaz[navi[a]].style.display = "block";
    }
    if(images[navi[a-1]]){
        images[navi[a-1]].style.display = "none";
        //android support
        if(navigator.appVersion.includes("Android")){
            canvaz[navi[a-1]].style.display = "none";
        }
    }
    console.log(currentPos+" and "+navi);
    currentPos.unshift(a);
}
function stepBackward(){
    let a = currentPos[0];
    a -= 1;
    if(a < 0){
        a = navi.length - 1;
        images[navi[a]].style.display = "block";
        images[navi[0]].style.display = "none";
        //android support
        if(navigator.appVersion.includes("Android")){
            canvaz[navi[a]].style.display = "block";
            canvaz[navi[0]].style.display = "none";
        }

    }
    images[navi[a]].style.display = "block";
    //android support
    if(navigator.appVersion.includes("Android")){
        canvaz[navi[a]].style.display = "block";
    }
    if(images[navi[a+1]]){
        images[navi[a+1]].style.display = "none";
        //android support
        if(navigator.appVersion.includes("Android")){
            canvaz[navi[a+1]].style.display = "none";
        }
    }
    console.log(currentPos+" and "+navi);
    currentPos.unshift(a);
}


nxt.addEventListener('click',() => {
    stepForward();
})
prev.addEventListener('click', () =>{
    stepBackward();
})
//function wait()
//#endregion
//Mobil


