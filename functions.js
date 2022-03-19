console.log("hello nikuch");

    const myElement = document.getElementById("dateText");
    const text = document.createTextNode("Hello Friend")

    myElement.style.color = "red";
    myElement.innerHTML = 'asd';
    const date = new Date();
    const dateString = date.getDate() + "-" + date.getMonth() + '-' + date.getYear();
    myElement.innerHTML = dateString;

    // console.log(date.getDate() + "-" + date.getMonth() + '-' + date.getYear());
    // console.log(date.toLocaleDateString('en-GB'))