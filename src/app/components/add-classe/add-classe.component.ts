import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {

  classeForm = new FormGroup({
    labelClasse: new FormControl()
  });
  
  constructor(private classeService: ClasseService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.classeForm = this.formBuilder.group({
      labelClasse: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  addClasse() {
    if(this.classeForm.valid){
      this.classeService.createClasse(this.classeForm.value)
      .subscribe(data => 
      {
        console.log(data);
        alert('Class added successfully !');
      }); 
    } 
  }

}
