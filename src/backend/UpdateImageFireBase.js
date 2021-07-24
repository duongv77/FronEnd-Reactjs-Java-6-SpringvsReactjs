import firebase from "firebase"

function UpdateImageFireBase(){
    const upImg = (file) => {
        let storagerRef = firebase.storage().ref(`images/${file.name}`);
        storagerRef.put(file).then(function(){
            storagerRef.getDownloadURL().then((url)=>{
                console.log(url)
            })
        })
    }
}

export default UpdateImageFireBase;