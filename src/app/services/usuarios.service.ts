import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuario() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'casaXmore');

    return this.http
      .get(`https://12reqres.in/api/user`, {
        params
      })
      .pipe(
        map((resp: any) => {
          return resp['data'];
        })
      );
  }

}