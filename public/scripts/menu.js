$ = document;
let arr = [];
// var QRCode = require('qrcode')
// var canvas = document.getElementById('canvas')
// let text = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNjUK/9sAQwALCAgKCAcLCgkKDQwLDREcEhEPDxEiGRoUHCkkKyooJCcnLTJANy0wPTAnJzhMOT1DRUhJSCs2T1VORlRAR0hF/9sAQwEMDQ0RDxEhEhIhRS4nLkVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVF/8AAEQgANQAeAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A84htHmTeHQD3NWLbSbi7kkSExsY0MjZcDCjqeaz95DdTg8HFX9NsZ7y8SGIEF+reg705NpN3HGKlJItLokl3EBYjfIq7n3nHA61jNwea6fV9ZtobMWtnEiSFdrsow4I7E+n/ANauYYngN1FRTcmrs1rxhF2iIBlsetdLp16dNnjmtijMoxhhkEVzWcNmrKAgYEhDVU1cxi7K6Oq1mXTdS0WK5SBIrxJSZQo9eOvp0xXHznMh56cdMYqeO6mKNFJK2zdnbu4zVWQ5c0Qjy6FTnzajc1uafZQXEKvMyoeCctjisImrksUscKNICo2jGc805K+iYU5KKd1c1dZsLXaj6dguow6Lk5981zxyCQetbGmpNNBJ5b4RRyOg+lZl2AJePxqlGyJnLmd7WI4V3zxqejMBW5rEheONSBhRxRRTW4P4SrpsrJZyAE4JrNmYluaKKFsLqf/Z";


 
// QRCode.toCanvas(canvas, 'hello there', function (error) {
//   if (error) console.error(error)
//   console.log('success!');
//})
// let donut = $.querySelector(".donut");
// let menu =  $.querySelector(".sub-menu");
// donut.addEventListener('click',() => {
//     donut.classList.toggle('open');
//     menu.classList.toggle('oper');
// })
function fileIn(){
    alert("file added");
    const file = $.querySelector('#myFile').files[0];
    console.log(file);
    readas64(file);
}
async function readas64(file){
    const read = new FileReader();
    read.readAsDataURL(file);
    read.onload= function(){
        const splitAt = index => x => [x.slice(0, index), x.slice(index)];
        console.log(read.result);
        let  parts = read.result.length;
        let ite = read.result; 
        arr.push(splitAt(parseInt(parts/2))(ite));
        console.log(arr)
        for(let i=0; i < arr[0].length;i++){
            makeQr(arr[0][i]);
        }
    };
    read.onerror = function(err){
        console.log("error"+" : "+err);
    };
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