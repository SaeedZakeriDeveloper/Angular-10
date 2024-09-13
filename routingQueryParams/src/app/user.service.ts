import { IUser } from './interfaces/app-interface';

export class UserService {

  public users: IUser[] = [
    { id: 1, name: 'Foad', email: 'foadshariat@outlook.com'},
    { id: 2, name: 'Shadmehr', email: 'shadmehr@outlook.com'},
    { id: 3, name: 'Mahyar', email: 'mahyar@outlook.com'}
  ];
}
