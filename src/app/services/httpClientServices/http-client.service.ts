import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TData } from 'src/app/models/MyData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  public constructor(private _http: HttpClient) {}
  public GetData(): Observable<TData> {
    return this._http.get<TData>('https://api.coinbase.com/v2/currencies');
  }
}
