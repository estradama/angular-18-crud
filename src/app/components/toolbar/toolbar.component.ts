import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const MATERIAL_MODULE = [MatToolbarModule, MatIconModule, MatButtonModule];

@Component({
  selector: 'app-toolbar',
  imports: [MATERIAL_MODULE],
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/">
        <mat-icon>home</mat-icon>
        <span>Home</span></a>

        <a mat-button routerLink="/contact">
        <mat-icon>list_alt</mat-icon>
        <span>Contacts</span></a>

        <a mat-button>
        <mat-icon>add_box</mat-icon>
        <span>New</span></a>
    </mat-toolbar>
  `,
  styles: ``
})
export class ToolbarComponent {

}
