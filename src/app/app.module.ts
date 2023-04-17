import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientService } from './services/httpClientServices/http-client.service';
import { CheckList2Directive } from './directives/checkList2Directive/check-list2.directive';
import { NumberDirectiveDirective } from 'src/app/directives/numberDirective/number-directive.directive';
import { PersianDirectiveDirective } from 'src/app/directives/persianWordsDirective/persian-directive.directive';
import { CheckListDirectiveDirective } from 'src/app/directives/checkListDirective/check-list-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CheckList2Directive,
    NumberDirectiveDirective,
    PersianDirectiveDirective,
    CheckListDirectiveDirective
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
