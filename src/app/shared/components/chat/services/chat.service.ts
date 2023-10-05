import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  getDocs,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/core/models/mensaje';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private path: string = 'mensajes';
  messagesRef = collection(this.firestore, this.path);
  constructor(private firestore: Firestore, private db: Firestore) {}

  async getMessages() {
    const todoRef = collection(this.db, 'todos');
    return await getDocs(todoRef);
  }
  addMessage(message: Mensaje) {
    return addDoc(this.messagesRef, message);
  }
}
