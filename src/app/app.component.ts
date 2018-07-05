import { Component } from '@angular/core';
import { DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  allMessages:any = [{
    'userMessage':false,
    'messageText':'This is Assistance , How can i Help You ?'
  }]

  constructor(private dataService : DataService){
  }

  onEnter(inputText){
    let newMessage:any = {};

    newMessage['userMessage'] = true;
    newMessage['messageText'] = inputText.value;
    this.allMessages.push(newMessage);

    this.dataService.post(inputText.value).subscribe((result) => {
        let chatbotMsg:any = {};
        chatbotMsg['userMessage'] = false;
        chatbotMsg['messageText'] = result['result'].fulfillment.speech;
        this.allMessages.push(chatbotMsg);
    });
    inputText.value = '';

  }
}
