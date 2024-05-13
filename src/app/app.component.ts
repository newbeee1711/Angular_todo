import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatChipsModule} from '@angular/material/chips';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatChipsModule,RouterOutlet, MatSlideToggleModule,MatCardModule,MatInputModule,MatFormFieldModule,FormsModule,MatIconModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'gitAngularProject';
  chip:any;
  importantTasksSelected:any="";
  addNotePad:boolean=false;
  
  frameworkChips = [ 
    { name: 'Do Laundry' }, 
    { name: 'Feed Pets' }, 
    { name: 'Get groceries' }, 
]; 
//To be continued


simpleForm = new FormGroup({
  taskArea: new FormControl(''),
  
  })
  cards: any=[];

  add(){
    this.cards.push({});
    this.addNotePad=true;
  }
  Update(recievedChip:any){    
    debugger;
    this.importantTasksSelected=this.importantTasksSelected+recievedChip.name+", ";
    console.log(this.importantTasksSelected);
    this.simpleForm.controls.taskArea.setValue(this.importantTasksSelected);

  }
}
