import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Mensaje } from 'src/app/core/models/mensaje';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  showChat = false;
  messages: any[] = [];
  @ViewChild('messagesBox') messagesBox!: ElementRef;
  isChatVisible: boolean = false;
  newMessage: string = '';
  constructor(public chatService: ChatService, public userSrv: AuthService) {}

  ngOnInit(): void {
    this.chatService.getMessages();
    setTimeout(() => {
      this.scrollChat();
    }, 4000);
  }
  hideChat() {
    this.isChatVisible = !this.isChatVisible;
    this.scrollChat();
  }

  scrollChat() {
    setTimeout(() => {
      if (!this.messagesBox) return;
      const div = this.messagesBox.nativeElement;
      div.scrollTop = div.scrollHeight;
      div;
    }, 10);
  }

  onSubmit() {
    if (this.newMessage != '') {
      let date = new Date();
      let hora = date.toLocaleTimeString();
      let dayAndMonth = date
        .toLocaleDateString()
        .split('/')
        .slice(0, 2)
        .join('/');
      let fullDate = `${date
        .toLocaleDateString()
        .split('/')
        .reverse()
        .join('-')} ${hora}`;

      let user = {
        name: this.userSrv.user.displayName,
        email: this.userSrv.user.email,
        uid: this.userSrv.user.uid,
      };
      let message = {
        message: this.newMessage,
        user: user,
        fullDate: fullDate,
        date: dayAndMonth,
        hora: hora,
      };

      console.log(message);
      this.chatService.addMessage(message).then();
      this.newMessage = '';
      this.scrollChat();
    }
  }
  ngOnDestroy() {
    if (this.chatService.unsub) {
      this.chatService.unsub();
    }
  }
}
