import { Injectable, inject } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import {Contact} from '@features/contact/contact.interfaces';
import { addDoc, collection, DocumentData, DocumentReference, orderBy, query, doc, getDoc, updateDoc, deleteDoc } from '@firebase/firestore';
import { APP_CONSTANTS } from '@shared/constants';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContactService {
    private readonly _firestore = inject(Firestore);
    private readonly _contactCollection = collection(this._firestore, APP_CONSTANTS.COLLECTION_NAME);

    newContact(contact:Partial<Contact>): Promise<DocumentReference<DocumentData, DocumentData>>{
        return addDoc(this._contactCollection, {
            created: Date.now(),
            update: Date.now(),
             ...contact,
        })
    }
    getAllContacts():Observable<Contact[]>{
        const queryFn = query(this._contactCollection, orderBy('created', 'desc'));
        return collectionData(queryFn, {idField:'id'}) as Observable<Contact[]>
    }

    async getContactById(id:string):Promise<Contact>{
        const docRef = this._getDocRef(id);
        const documentData = await getDoc(docRef);
        return documentData.data() as Contact;
    }
    updateContact(id: string, contact:Contact): void{
        const docRef = this._getDocRef(id);
        updateDoc(docRef, {...contact})
    }
    deleteContact(id: string):void{
        const docRef = this._getDocRef(id);
        deleteDoc(docRef);
    }

    private _getDocRef(id:string){
        return doc(this._firestore, APP_CONSTANTS.COLLECTION_NAME, id);
    }
}