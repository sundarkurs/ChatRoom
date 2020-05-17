class Message {
    constructor(username, text) {
        this.username = username;
        this.text = text;
    }
}

function addMessageToChatWindow(message) {
    var messageText = message.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = message.username + " says " + messageText;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
}

document.getElementById("btnSendMessage").addEventListener("click", function (event) {
    var user = currentUsername;
    var body = $('#txtMessage').val();
    let message = new Message(user, body);

    $.ajax({
        url: "/Home/Create",
        type: "POST",
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: message
    }).done(function (result) {
        if (result) {
            sendMessageToHub(message);
        } else {
            alert("Network issue.");
        }
    });
});

function getDate() {
    var currentdate = new Date();
    return (currentdate.getMonth() + 1) + "/"
        + currentdate.getDate() + "/"
        + currentdate.getFullYear() + " "
        + currentdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}