//Hide the passcode view
 const passcode = () => {
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.style.display = 'none';
 }

 
// Show the message
 const message = () => {
    const messageDiv = document.querySelector('#message');
    messageDiv.innerHTML = message;
 }
 
 
// Look through the messages retrived from the database to see if there is anyone one matching the input
 
const getPasswords = (messagesRef) => {
    const passcodeAttempt = document.querySelector('#passcode').value;
    for (messages in messagesRef) {
        const messageData = messagesRef[messages];
        if (messageData === passcodeAttempt) {
        // Code to hide input form, and render message as HTML 
            document.getElementById("passcodeInput").style.display="none";
            
        }
    }
}

const getMessages = () => {
    const messagesRef = firebase.database().ref("/message");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        getPasswords(data);
    });
}
