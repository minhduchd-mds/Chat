$(document).ready(function () {
    // Initialize Firebase


    $(".messages").animate({ scrollTop: $(document).height() }, "fast");


    // var email = localStorage.getItem('email');
    var email = sessionStorage.getItem('clickmeasse');
    function newMessage() {

        var message = $(".message-input input").val();
        if ($.trim(message) == '') {
            return false;
        }
        writeUserData(message);

        $('.submit').click(function () {
            newMessage();
        });
        $(window).on('keydown', function (e) {
            if (e.which == 13) {
                newMessage();
                return false;
            }
        });
    }
    var config = {
        apiKey: "AIzaSyD67Yh-Q35CnMP1c2T5SQE8eBohx8QUIj4",
        authDomain: "chat-5ddd7.firebaseapp.com",
        databaseURL: "https://chat-5ddd7.firebaseio.com",
        projectId: "chat-5ddd7",
        storageBucket: "chat-5ddd7.appspot.com",
        messagingSenderId: "850707411995"
    };
    firebase.initializeApp(config);

    // tao tai khoan chat
    firebase.auth().createUserWithEmail(email).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage)
    });
    firebase.auth().signInWithEmail(email).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode,errorMessage)
    });
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var email = user.email;
            var localId = user.localId;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            // var providerData = user.providerData;

            console.log(email,localId)
        } else {
            // User is signed out.
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
            }).catch(function(error) {
                // An error happened.
            });
        }
    });
    // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log(errorCode,errorMessage)
    // });
    // dang nhap tai khoan
    // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ...
    //     console.log(errorCode,errorMessage)
    // });
    // firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
    //     .catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         if (errorCode === 'auth/wrong-password') {
    //             alert('Wrong password.');
    //         } else {
    //             alert(errorMessage);
    //         }
    //         console.log(error);
    //     });
    // xac thuc nhan thong tin nguoi dung
    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //         // User is signed in.
    //         var displayName = user.displayName;
    //         var email = user.email;
    //         var localId = user.localId;
    //         var emailVerified = user.emailVerified;
    //         var photoURL = user.photoURL;
    //         var isAnonymous = user.isAnonymous;
    //         var uid = user.uid;
    //         // var providerData = user.providerData;
    //         var password = user.passwordHash;
    //
    //         console.log(email,password)
    //     } else {
    //         // User is signed out.
    //         firebase.auth().signOut().then(function() {
    //             // Sign-out successful.
    //         }).catch(function(error) {
    //             // An error happened.
    //         });
    //     }
    // });
    // get firebase database reference...


    // function Profile() {
    //     // get
    //     var user = firebase.auth().currentUser;
    //
    //     if (user != null) {
    //         user.providerData.forEach(function (profile) {
    //             console.log("Sign-in provider: " + profile.providerId);
    //             console.log("  Provider-specific UID: " + profile.uid);
    //             console.log("  Name: " + profile.displayName);
    //             console.log("  Email: " + profile.email);
    //             console.log("  Photo URL: " + profile.photoURL);
    //         });
    //     }
    //     // uppdate
    //     user.updateProfile({
    //         displayName: "Jane Q. User",
    //         photoURL: "https://example.com/jane-q-user/profile.jpg"
    //     }).then(function() {
    //         // Update successful.
    //     }).catch(function(error) {
    //         // An error happened.
    //     });
    //     // xoa user
    //     user.delete().then(function() {
    //         // User deleted.
    //     }).catch(function(error) {
    //         // An error happened.
    //     });
    //
    //     // dat lai email
    //     var user = firebase.auth().currentUser;
    //
    //     user.updateEmail("user@example.com").then(function() {
    //         // Update successful.
    //     }).catch(function(error) {
    //         // An error happened.
    //     });
    //     // gui xac nhan email
    //     user.sendEmailVerification().then(function() {
    //         // Email sent.
    //     }).catch(function(error) {
    //         // An error happened.
    //     });
    //     //Đặt mật khẩu người dùng
    //     var newPassword = getASecureRandomPassword();
    //
    //     user.updatePassword(newPassword).then(function() {
    //         // Update successful.
    //     }).catch(function(error) {
    //         // An error happened.
    //     });
    //     // Gửi email đặt lại mật khẩu
    //     var auth = firebase.auth();
    //     var emailAddress = "user@example.com";
    //
    //     auth.sendPasswordResetEmail(emailAddress).then(function() {
    //         // Email sent.
    //     }).catch(function(error) {
    //         // An error happened.
    //     });
    // }
    // var db_ref = firebase.database().ref('users/messages');
    // var storageRef = firebase.storage().ref();
    // var chat = {
    //     "messages": {
    //         "m1": { "sender": "ghopper", "message": "Relay malfunction found. Cause: moth." },
    //         "m2": { ... },
    //         // a very long list of messages
    //     }
    // };
    // function handleFileSelect(evt) {
    //     evt.stopPropagation();
    //     evt.preventDefault();
    //     var file = evt.target.files[0];
    //
    //     var metadata = {
    //         'contentType': file.type
    //     };
    //
    //     // Push to child path.
    //     // [START oncomplete]
    //     storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
    //         console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    //         console.log('File metadata:', snapshot.metadata);
    //         // Let's get a download URL for the file.
    //         snapshot.ref.getDownloadURL().then(function(url) {
    //             sessionStorage.setItem('imgfirbase',url);
    //         });
    //     }).catch(function(error) {
    //         // [START onfailure]
    //         console.error('Upload failed:', error);
    //         // [END onfailure]
    //     });
    //     // [END oncomplete]
    // }
    // $("#messageInput").keypress(function (e){
    //     if(e.keyCode == 13){ //Enter
    //         var d = new Date();
    //         var text = $("#messageInput").val();
    //         var minutes = d.getMinutes();
    //         var imgUrl = sessionStorage.getItem('imgfirbase');
    //         var userm =  {
    //             id:user,
    //             count: count,
    //             name: name,
    //             image: imgUrl,
    //             time: minutes,
    //             text: text,
    //             status: "1"
    //         };
    //         myDataRef.push(userm);
    //         $("#messageInput").val("");
    //     }
    // });
    // db_ref.on('child_added', function (data) {
    //     var type;
    //     if(data.val().user_id == uid){
    //         type="sent";
    //     }
    //     else{
    //         type="replies";
    //     }
    //     $('<li class="'+type+'"><p>' + data.val().message + '</p></li>').appendTo($('.messages ul'));
    //     $('.message-input input').val(null);
    //     $('.contact.active .preview').html('<span>You: </span>' + data.val().message);
    //     $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight }, 0);
    // });
    // function writeUserData(uid, username, picture, title, email) {
    //     // A post entry.
    //     var postData = {
    //         author: username,
    //         uid: uid,
    //         emil: email,
    //         title: title,
    //         starCount: 0,
    //         authorPic: picture
    //     };
    //
    //     // Get a key for a new Post.
    //     var newPostKey = firebase.database().ref().child('posts').push().key;
    //
    //     // Write the new post's data simultaneously in the posts list and the user's post list.
    //     var updates = {};
    //     updates['/posts/' + newPostKey] = postData;
    //     updates['/user-posts/' + uid + '/' + newPostKey] = postData;
    //
    //     return firebase.database().ref().update(updates);
    // }

});