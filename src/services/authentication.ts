import { AngularFireAuth } from 'angularfire2/auth';
import {Injectable} from '@angular/core';
@Injectable()
export class Authentication {
    constructor(private angularAuth: AngularFireAuth){}
        
        createUserWithEmailAndPassword(email,password){
            this.angularAuth.auth.createUserWithEmailAndPassword(email,password)
            
        }
    
}