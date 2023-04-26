import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { StorageServiceService } from '../services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {


  isLoggedIn = false;
isLoginFailed = false;

constructor(private authService: AuthServiceService, private storageService: StorageServiceService,  private router: Router) { }
ngOnInit() {
  if (this.storageService.isLoggedIn()) {
    this.isLoggedIn = false;
    this.router.navigate(['/reclamation']);
  }
  else {
    this.router.navigate(['/home']);
  }

  }
}
