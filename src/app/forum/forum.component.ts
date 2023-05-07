import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { StorageServiceService } from '../services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  isLoggedIn = false;
isLoginFailed = false;

constructor(private storageService: StorageServiceService,  private router: Router) { }

ngOnInit() {
  
  }
}
