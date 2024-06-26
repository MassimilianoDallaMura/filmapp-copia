import { Component } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent {
  users: User[] = [];

  constructor(private userSrv: UsersService) {}

  ngOnInit(): void {
      this.userSrv.getUsers().subscribe((data) => {
          this.users = data;
      });
  }
}