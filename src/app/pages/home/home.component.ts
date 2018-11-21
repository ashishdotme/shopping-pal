import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any = {};
  categories: any[];
  placeholderString = 'Select timezone';
  timezone: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getCategories();
    this.user = this.authService.getUser();
    console.log(this.user);
  }

  getCategories() {
    this.authService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
