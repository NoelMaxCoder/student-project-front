import { Component, OnInit } from '@angular/core';
import { classeModel } from 'src/app/models/classeModel';
import { studentModel } from 'src/app/models/studentModel';
import { ClasseService } from 'src/app/services/classe.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {
  isLoading: boolean;
  classes: classeModel;
  students: studentModel;

  constructor(private classeService: ClasseService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadClasses();
    this.isLoading = true;
  }

  public loadClasses(){
    this.classeService.getClasses().subscribe((data: classeModel)=>{
      console.log(data);
      if(!this.classes){
        this.isLoading = true;
        this.classes = data;
      }
      this.isLoading = false;
    });
  }

  public removeStudent(id: number){
    console.log("deleting "+ id);
    this.studentService.deleteStudent(id).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );
    alert('Student deleted successfully !');
    this.ngOnInit();
  }
}
