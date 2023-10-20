import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    AchievementsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
