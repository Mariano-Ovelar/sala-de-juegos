import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  onSnapshot,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/core/models/mensaje';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private path: string = 'mensajes';
  public mensajes: any[] = [];
  unsub: any;
  messagesRef = collection(this.db, this.path);
  constructor(private db: Firestore) {}

  getMessages() {
    let men = [];
    this.unsub = onSnapshot(this.messagesRef, (snapshot) => {
      snapshot.docChanges().forEach((valor) => {
        this.mensajes.push(valor.doc.data());
      });
    });
  }
  addMessage(message: Mensaje) {
    return addDoc(this.messagesRef, message);
  }
}
