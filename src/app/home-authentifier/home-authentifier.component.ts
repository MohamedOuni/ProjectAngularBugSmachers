import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { StorageServiceService } from '../services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-authentifier',
  templateUrl: './home-authentifier.component.html',
  styleUrls: ['./home-authentifier.component.css']
})
export class HomeAuthentifierComponent {

  
  isLoggedIn = false;
isLoginFailed = false;

constructor(private authService: AuthServiceService, private storageService: StorageServiceService,  private router: Router) { }
ngOnInit() {
  if (this.storageService.isLoggedIn()) {
    this.isLoggedIn = false;
    this.router.navigate(['/homeauthentifier']);
  }
  else {
    this.router.navigate(['/home']);
  }

  }
  }
