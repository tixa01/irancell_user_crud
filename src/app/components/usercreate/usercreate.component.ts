import { Component, NgZone } from '@angular/core';
import {MatInputModule} from '@angular/material/input';;
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-usercreate',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule
  ],
  templateUrl: './usercreate.component.html',
  styleUrl: './usercreate.component.scss'
})
export class UsercreateComponent {


  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute
) {
}
ngOnInit(): void {
  this.formGroupList();
}

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  formGroup!: FormGroup;
  public formGroupList() {
    this.formGroup = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birth: ['', [Validators.required]],
    });
  }


  submit():void{
    console.log('ffff:',this.formGroup.value.first_name);
    
    (<any>this.router).navigate([`/user-list`],{
      queryParams: {
        first_name:this.formGroup.value.first_name,
        last_name:this.formGroup.value.last_name,
        email:this.formGroup.value.email,
        birth:this.formGroup.value.birth,
      },
      skipLocationChange: true,
    });
}
}
