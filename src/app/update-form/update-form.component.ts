import { DataShareService } from './../services/data-share.service';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateFormControlsEnum } from '../enums/form-controls.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss'],
})
export class UpdateFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  readonly UpdateFormControlsEnum = UpdateFormControlsEnum;
  dataToUpdate: any;

  constructor(
    private formBuilder: FormBuilder,
    private dataShareService: DataShareService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
    this.fetchData();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      [UpdateFormControlsEnum.JOB_NUMBER]: [],
      [UpdateFormControlsEnum.PRIORITY]: [
        '',
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      [UpdateFormControlsEnum.TYPE]: [
        '',
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      [UpdateFormControlsEnum.LINE]: [
        '',
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      [UpdateFormControlsEnum.MACHINE_CODE]: [
        '',
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      [UpdateFormControlsEnum.MACHINE_NAME]: [
        '',
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      [UpdateFormControlsEnum.OCC_DATE]: [],
      [UpdateFormControlsEnum.OCC_TIME]: [],
      [UpdateFormControlsEnum.TR]: [
        '',
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      [UpdateFormControlsEnum.JOB_DESC]: [
        '',
        [Validators.minLength(3), Validators.maxLength(200)],
      ],
      [UpdateFormControlsEnum.SHOP]: [
        '',
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      [UpdateFormControlsEnum.JOB_INITIATED_BY]: [
        '',
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      [UpdateFormControlsEnum.USER_ID]: [
        '',
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
    });
  }

  update(): void {
    alert('update clicked');
  }

  fetchData() {
    this.dataToUpdate = this.dataShareService.jobData;
    console.table(this.dataToUpdate);
    if(!!this.dataToUpdate){
      this.form.setValue({
        [UpdateFormControlsEnum.JOB_NUMBER]: this.dataToUpdate["JobNo1"],
        [UpdateFormControlsEnum.PRIORITY]: this.dataToUpdate["IMP"],
        [UpdateFormControlsEnum.TYPE]: this.dataToUpdate["JobType"],
        [UpdateFormControlsEnum.LINE]: "",
        [UpdateFormControlsEnum.MACHINE_CODE]: this.dataToUpdate["MachineCode"],
        [UpdateFormControlsEnum.MACHINE_NAME]: this.dataToUpdate["MachineName"],
        [UpdateFormControlsEnum.OCC_DATE]: "01/01/2022",
        [UpdateFormControlsEnum.OCC_TIME]: this.dataToUpdate["OccTime"],
        [UpdateFormControlsEnum.TR]: this.dataToUpdate["TradeDept"],
        [UpdateFormControlsEnum.JOB_DESC]: this.dataToUpdate["JobDescription"],
        [UpdateFormControlsEnum.SHOP]: "",
        [UpdateFormControlsEnum.JOB_INITIATED_BY]: this.dataToUpdate["JobInitiatedBy"],
        [UpdateFormControlsEnum.USER_ID]: this.dataToUpdate["Userid"],
      });
    }
  }

  ngOnDestroy() {
    this.dataToUpdate = undefined;
  }

  
  cancel(): void {
    this.router.navigate(['grid']);
  }



}
