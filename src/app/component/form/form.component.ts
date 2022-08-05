import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { Validators } from 'angular-reactive-validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private toast: ToastrService) {}
  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('male', Validators.required),
      report: new FormControl('', Validators.required),
      reportFile: new FormControl(null, Validators.required),
      addresses: new FormArray([]),
      expert: new FormArray([], Validators.required),
    });
  }
  formSubmit() {
    console.log(this.myForm.value);
  }
  expertList: any = [
    { value: 'Hair', id: '1' },
    { value: 'Skin', id: '2' },
    { value: 'Makeup', id: '3' },
  ];
  imageURL!: string;
  onchange(event: any): any {
    if (
      [
        'image/jpg',
        'image/jpeg',
        'image/png',
        'image/JPG',
        'image/JPEG',
        'image/PNG',
        'jpg',
        'jpeg',
        'png',
      ].includes(event.target.files[0].type)
    ) {
      if (event.target.files && event.target.files.length) {
        const reader = new FileReader();
        const [file] = event.target.files;
        reader.readAsDataURL(file);

        reader.onload = () => {
          this.imageURL = reader.result as string;
        };
      }
      this.myForm.patchValue({
        reportFile: event.target.files[0],
      });
    } else {
      this.toast.error('Please select an image file');
      return;
    }
  }
  get addressControll() {
    return (this.myForm.get('addresses') as FormArray).controls;
  }
  addSkils() {
    (<FormArray>this.myForm.get('addresses')).push(
      new FormControl(null, Validators.required)
    );
  }
  deleteAddress(index: number) {
    const controll = <FormArray>this.myForm.get('addresses');
    controll.removeAt(index);
  }
  //Checkbox insert in remove
  onCheckboxChange(e: any) {
    const experts: FormArray = this.myForm.get('expert') as FormArray;
    // console.log(e);

    if (e.target.checked) {
      experts.push(new FormControl(e.target.value));
    } else {
      const index = experts.controls.findIndex(
        (x) => x.value === e.target.value
      );
      experts.removeAt(index);
    }
  }
  // Used For Get error handle
  get nameError() {
    return this.myForm.get('name');
  }
  get emailError() {
    return this.myForm.get('email');
  }
  get reportError() {
    return this.myForm.get('report');
  }
  get expertError() {
    // console.log(this.myForm.get('expert'));
    return this.myForm.get('expert');
  }
}
