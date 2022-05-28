import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateFormControlsEnum } from '../enums/form-controls.enum';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss'],
})
export class UpdateFormComponent implements OnInit {
  form: FormGroup;
  readonly UpdateFormControlsEnum = UpdateFormControlsEnum;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      [UpdateFormControlsEnum.JOB_NUMBER]:[],
      [UpdateFormControlsEnum.PRIORITY]:['',[Validators.minLength(3),Validators.maxLength(20)]],
      [UpdateFormControlsEnum.TYPE]:['',[Validators.minLength(3),Validators.maxLength(20)]],
      [UpdateFormControlsEnum.LINE]:['',[Validators.minLength(3),Validators.maxLength(20)]],
      [UpdateFormControlsEnum.MACHINE_CODE]:['',[Validators.minLength(3),Validators.maxLength(20)]],
      [UpdateFormControlsEnum.MACHINE_NAME]:['',[Validators.minLength(3),Validators.maxLength(20)]],
      [UpdateFormControlsEnum.OCC_DATE]:[],
      [UpdateFormControlsEnum.OCC_TIME]:[],
      [UpdateFormControlsEnum.TR]:['',[Validators.minLength(3),Validators.maxLength(20)]],
      [UpdateFormControlsEnum.JOB_DESC]:['',[Validators.minLength(3),Validators.maxLength(200)]],
      [UpdateFormControlsEnum.SHOP]:['',[Validators.minLength(3),Validators.maxLength(20)]],
      [UpdateFormControlsEnum.JOB_INITIATED_BY]:['',[Validators.minLength(3),Validators.maxLength(20)]],
      [UpdateFormControlsEnum.USER_ID]:['',[Validators.minLength(3),Validators.maxLength(20)]],
    })
  }

  update(): void{
    alert('update clicked')
  }
}
