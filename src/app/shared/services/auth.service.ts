import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  registerUser(user: {userName: string}): {status: string, data: any}{

    localStorage.setItem('user', JSON.stringify(user));

    if ( localStorage.getItem('user') ){

      const userSesion = localStorage.getItem('user');

      return {
        status: 'ok',
        data: userSesion
      };

    }else{

      return{
        status: 'error',
        data: 'No se pudo guardar el usuario'
      };

    }
  }

  getSesion(): { userName: string, status: string }{

    const userSesion = localStorage.getItem('user');

    if ( userSesion ){
      return {...JSON.parse(userSesion), status: 'ok'};
    }else{
      return {userName: '', status: 'error'};
    }

  }

  clearStore(): any{
    localStorage.clear();
  }
}
