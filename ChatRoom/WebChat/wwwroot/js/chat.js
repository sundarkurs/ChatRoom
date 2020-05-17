"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", addMessageToChatWindow);

function sendMessageToHub(message) {
    connection.invoke("SendMessage", message).catch(function (err) {
        return console.error(err.toString());
    });
}


//Disable send button until connection is established
document.getElementById("btnSendMessage").disabled = true;


connection.start().then(function () {
    document.getElementById("btnSendMessage").disabled = false;
    $("#btnSendMessage").prop("disabled", false);
}).catch(function (err) {
    return console.error(err.toString());
});
