import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { classeModel } from 'src/app/models/classeModel';
import { ClasseService } from 'src/app/services/classe.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  classes: classeModel;
  classeItems = [];

  studentForm = new FormGroup({
    firstName: new FormControl(),
    name: new FormControl(),
    course: new FormControl(),
    selectClasse: new FormControl()
  });

  
  constructor(private classeService: ClasseService, private studentService: StudentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadClasses();
    
    this.studentForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      course: ['', [Validators.required, Validators.minLength(3)]],
      selectClasse: ['']
    })


  }

  public loadClasses(){
      return this.classeService.getClasses().subscribe((data: classeModel)=>{
      console.log(data);
      this.classes = data;
    }); 
  }

  addStudent() {
    if(this.studentForm.valid){
      this.studentService.createStudent(this.studentForm.value, this.selectedClasse.value)
      .subscribe(data => 
      {
        console.log(data);
        alert('Student added successfully !');
      }); 
    } 
  }

  get selectedClasse() {
		return this.studentForm.get('selectClasse');
  }
  
  onClasseChange() {
    let classe = this.selectedClasse.value
    console.log('selected value =' + this.selectedClasse.value)
  }
}
