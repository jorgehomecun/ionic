import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
@Injectable()

export class Uploader{
    storageRef: firebase.storage.Reference;
constructor(){
    this.storageRef=firebase.storage().
}

uploadMultiple(files){
    for(let i=0; i<files.lenght;i++)
    let file=files[i];
}
uploa(file){
    let fileRef = this.storageRef.child("/images/"+file.name)

    let uploadTask = fileRef.put(file);
    return new Promise (resolve, reject)=>{
        uploadTask
    }
}
}