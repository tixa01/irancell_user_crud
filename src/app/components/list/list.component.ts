import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';;
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { LocalService } from '../../services/locale.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  new_user:any;
  table_data:Array<any>= [
    {first_name: 'ata_1', last_name: 'Hydrogen', email: 'ata_1@gmail.com', birth: ''},
    {first_name: 'ata_2', last_name: 'Helium', email: 'ata_1@gmail.com', birth: ''},
    {first_name: 'ata_3', last_name: 'Lithium', email: 'ata_1@gmail.com', birth: ''},
    {first_name: 'ata_4', last_name: 'Beryllium', email: 'ata_1@gmail.com', birth: ''},
    {first_name: 'ata_5', last_name: 'Boron', email: 'ata_1@gmail.com', birth: ''},
    {first_name: 'ata_6', last_name: 'Carbon', email: 'ata_1@gmail.com', birth: ''},
    {first_name: 'ata_7', last_name: 'Nitrogen', email: 'ata_1@gmail.com', birth: ''},
    {first_name: 'ata_8', last_name: 'Oxygen', email: 'ata_1@gmail.com', birth: ''},
    {first_name: 'ata_9', last_name: 'Fluorine', email: 'ata_1@gmail.com', birth: ''},
    {first_name: 'ata_10', last_name: 'Neon', email: 'ata_1@gmail.com', birth: ''},
  ];
  
  user:any
  constructor(
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private localStore: LocalService
) {
  this.user = this.activatedRoute.snapshot.queryParams;
  
  this.new_user = {
    first_name: this.user.first_name , 
    last_name:this.user.last_name, 
    email: this.user.email, 
    birth: this.user.birth
  };
    this.table_data.push(this.new_user)
    // this.localStore.saveData('list', this.table_data );
}
ngOnInit(): void {
  // this.table_data = this.localStore.getData('list' );
  // console.log('dataaaa', this.localStore.getData('list'));
  
}
// Save() {
//   localStorage.setItem("list", JSON.stringify(this.table_data));
// }
// GetList() {
//   let value = localStorage.getItem("list");
//   if (value != '' && value != null && typeof value != "undefined") {
//     this.table_data = JSON.parse(value!);
//   }
// }

displayedColumns = ['first_name', 'last_name', 'email', 'birth', 'action'];
  // dataSource = this.table_data;
}

export interface UserElement {
  first_name:string;
  last_name: string;
  email: string;
  birth: any;
}


