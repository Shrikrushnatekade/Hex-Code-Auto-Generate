function generateBtn() {
    var randomColor = (Math.floor(Math.random()*16777216)).toString(16);
    // console.log(randomColor);
    document.body.style.backgroundColor = "#" + randomColor;
    var text = document.getElementById("text");
    text.innerText = "#" + randomColor;
}
// function myFunction() {
//     var copyText = document.getElementById("genColor");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
//   }

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }


  