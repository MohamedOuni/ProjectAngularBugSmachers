import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { StorageServiceService } from '../services/storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  
isLoggedIn = false;
isLoginFailed = false;

constructor(private authService: AuthServiceService, private storageService: StorageServiceService,  private router: Router) { }
ngOnInit() {
  if (this.storageService.isLoggedIn()) {
    this.isLoggedIn = true;
    this.router.navigate(['/homeauthentifier']);
  }
  else {
    this.router.navigate(['/home']);
  }

  }
}


