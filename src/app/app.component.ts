import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClientService } from './services/httpClientServices/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'behsa';
  public currencyList: Array<string> = [];
  public namesList: Array<string> = [
    'علی احمدی',
    'رضا خسروی',
    'ماهان توکلی',
    'مریم سجودی',
    'حمیدرضا نساجی',
    'میلاد سعادت',
    'علی یزدانی',
    'جواد امامی',
    'محمد داوری',
    'سعید وحدتی',
    'صدف گوهریان',
    'مینا یاوری',
    'آناهیتا وحدتی محمدی قمی'
  ];

  public constructor(private _httpClientService: HttpClientService) {
    this._httpClientService.GetData().subscribe((result) => {
      result.data.forEach(element => {
        this.currencyList.push(element.name);
        console.log(element.name);
      });
    });
  }

  public onSubmit(myForm: NgForm) {
    console.log(myForm.value);
  }
}
