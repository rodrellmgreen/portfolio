import { Component, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Output() project: string ='';

  constructor(private router: Router, public dialog: MatDialog) {


  }
  ngOnInit(): void {

  }



  gotToLink(link: string){
    window.open(link, "_blank")
  }

}
