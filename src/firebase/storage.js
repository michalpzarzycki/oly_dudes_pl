import firebase, { storage } from './firebase';

function uploadError(error) {
    console.log("UPLOAD ERROR 👂", error)
}
function uploadObserver(snapshot) {
   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   console.log('Upload is ' + progress + '% done');
   switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}

export function handleUpload(userEmail, file) {
    const uploadTask = storage.ref(`/avatar/${userEmail}`).put(file);
    return new Promise((resolve, reject) => {
        uploadTask.on("state_changed", uploadObserver, uploadError, () => {
            console.log("😍 UDALO SIE" )
            resolve()
            // storage
            //   .ref("avatar")
            //   .child(userEmail)
            //   .getDownloadURL()
            //   .then((url) => {
            //       console.log("URL IMG 🎆", url )
            //     resolve(url)
            //   })
            //   .catch((error) => {
            //     console.log("err IMG 🎆", url )

            //       reject(error)
            //   });
          });
    })
    
  }

  