import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { StorageServiceService } from '../services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {

  isLoggedIn = false;
isLoginFailed = false;

constructor(private storageService: StorageServiceService,  private router: Router) { }
ngOnInit() {
  if (this.storageService.isLoggedIn()) {
    this.isLoggedIn = false;
    this.router.navigate(['/forum']);
  }
  else {
    this.router.navigate(['/home']);
  }

  }
}
