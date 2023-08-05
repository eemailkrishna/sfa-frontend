import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  common: any;

  constructor() { }

  allUserData(){    
      return this.common.get('/students?page=0&limit=10');  
  }
}
