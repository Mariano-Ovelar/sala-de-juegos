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
  messages: any;
  @ViewChild('messagesBox') messagesBox!: ElementRef;
  isChatVisible: boolean = false;
  newMessage: string = '';
  constructor(public chatService: ChatService, public userSrv: AuthService) {}

  ngOnInit(): void {
    this.chatService.getMessages().then((res) => {
      this.messages = res;
    });
  }
  hideChat() {
    this.isChatVisible = !this.isChatVisible;
  }

  scrollChat() {
    setTimeout(() => {
      if (!this.messagesBox) return;
      const div = this.messagesBox.nativeElement;
      div.scrollTop = div.scrollHeight;
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

      let message = {
        message: this.newMessage,
        user: this.userSrv.user,
        fullDate: fullDate,
        date: dayAndMonth,
        hora: hora,
      };
      this.chatService.addMessage(message);
      this.newMessage = '';
    }
  }

  /* get message() {
    return this.formChat.controls['message'];
  } */
}
/* res.sort((a, b) => {
        let fecha1 = new Date(a.fullDate);
        let fecha2 = new Date(b.fullDate);

        if (fecha1 === fecha2) return 0;
        return fecha1 > fecha2 ? 1 : -1;
      });
 */
