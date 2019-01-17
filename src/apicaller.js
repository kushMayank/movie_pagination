const httpRequest=(url, cb)=>{
    console.log("here in api caller")
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    // else{
    //     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    // }
    if (xmlhttp) {
        xmlhttp.open("GET", url, true);
        xmlhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xmlhttp.send()
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                cb(xmlhttp.response)
            }
        }
    }
            
}

export default httpRequest;