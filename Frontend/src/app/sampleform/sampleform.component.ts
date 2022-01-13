import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {
  name = 'Angular';
  userForm: FormGroup;
  images = '';
  image = [{
    fieldname:'',
    originalname:'',
    encoding:'',
    mimetype:'',
    destination:'',
    filename:'',
    path:'',
    size:0
  }]
 
  // highschool1: any[] = [];
  constructor(private fb:FormBuilder,private _add:UserService,private router:Router) {
    this.userForm = this.fb.group({
      name :['',[Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)]],
      date :['',[Validators.required]],
      gender :['',[Validators.required]],
      email_id :['',[
        Validators.required,
        Validators.compose([
          Validators.pattern('^[a-zA-Z0-9.%+]+@[a-z0-9.-]+.[a-z]{2,4}')
        ])
      ]],
      phone :['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),Validators.pattern(/[0-9]/)
      ]],
      yourself:['',[Validators.required]],
      highschools:new FormGroup({edu_title: new FormControl('',[Validators.required]),
                                  edu_desc: new FormControl('',[Validators.required,Validators.pattern(/[0-9]/)]),
                                  edu_school: new FormControl('',[Validators.required]),
                                  edu_year: new FormControl('',[Validators.required,Validators.pattern(/[0-9]/)])}),
      higherschools:new FormGroup({edu_title: new FormControl(''),
                                   edu_desc: new FormControl('',[Validators.pattern(/[0-9]/)]),
                                   edu_school: new FormControl(''),
                                   edu_year: new FormControl('',[Validators.pattern(/[0-9]/)])}),
      graduations:new FormGroup({edu_title: new FormControl(''),
                                  edu_stream:new FormControl(''),
                                  edu_desc: new FormControl('',[Validators.pattern(/[0-9]/)]),
                                  edu_inst: new FormControl(''),
                                  edu_year: new FormControl('',[Validators.pattern(/[0-9]/)])}),
      posts:new FormGroup({edu_title: new FormControl(''),
                            edu_stream:new FormControl(''),
                            edu_desc: new FormControl('',[Validators.pattern(/[0-9]/)]),
                            edu_inst: new FormControl(''),
                            edu_year: new FormControl('',[Validators.pattern(/[0-9]/)])}),
      projects: this.fb.array([]) ,
      qualifications :this.fb.array([]),
      experiences:this.fb.array([]),
      skills:this.fb.array([]),
      languages:this.fb.array([]),
      progs:this.fb.array([]),
      achievements:this.fb.array([])
    });
  }
  UserData:any;
  ngOnInit(): void {
    let id = localStorage.getItem("userid");
    this._add.getsignup(id)
    .subscribe((data)=>{
      this.UserData = JSON.parse(JSON.stringify(data));
      console.log(this.UserData)
    })

  }
  
  
  highschools() : FormArray {
    return this.userForm.get("highschools") as FormArray
  }
  higherschools() : FormArray {
    return this.userForm.get("higherschools") as FormArray
  }
  graduations() : FormArray {
    return this.userForm.get("graduations") as FormArray
  }
  posts() : FormArray {
    return this.userForm.get("posts") as FormArray
  }
  qualifications(): FormArray {
    return this.userForm.get("qualifications") as FormArray
  }
  experiences():FormArray{
    return this.userForm.get("experiences") as FormArray
  }
  skills():FormArray{
    return this.userForm.get("skills") as FormArray
  }
  languages():FormArray{
    return this.userForm.get("languages") as FormArray
  }
  progs():FormArray{
    return this.userForm.get("progs") as FormArray
  }
  achievements():FormArray{
    return this.userForm.get("achievements") as FormArray
  }
   
  
  
   
  newQualification(): FormGroup {
    return this.fb.group({
      course_name: '',
      percentage: ['',[Validators.pattern(/[0-9]/)]],
      edu_type:''
    })
  }

  newExperience(): FormGroup {
    return this.fb.group({
      job_title: '',
      exp_from: ['',[Validators.pattern(/[0-9]/)]],
      exp_to:['',[Validators.pattern(/[0-9]/)]]
    })
  }
  newSkills():FormGroup{
    return this.fb.group({
      skills: ''
    })
  }
  newLanguages():FormGroup{
    return this.fb.group({
      languages: ''
    })
  }
  newProgs():FormGroup{
    return this.fb.group({
      progs: '',
      prog_perc:['',[Validators.pattern(/[0-9]/)]]
    })
  }
  newAchievements():FormGroup{
    return this.fb.group({
      achievements: ''
    })
  }

  addproject() {
    this.projects().push(this.newProject());
  }
  newProject(): FormGroup {
    return this.fb.group({
      title: '',
      desc: '',
    })
  }
  projects() : FormArray {
    return this.userForm.get("projects") as FormArray
  }
  removeproject(i:number) {
    this.projects().removeAt(i);
  }
  addskills() {
    this.skills().push(this.newSkills());
  }
   
  removeskills(i:number) {
    this.skills().removeAt(i);
  }
  addQualifications() {
    this.qualifications().push(this.newQualification());
  }
   
  removeQualifications(i:number) {
    this.qualifications().removeAt(i);
  }
  addexperience() {
    this.experiences().push(this.newExperience());
  }
   
  removeexperience(i:number) {
    this.experiences().removeAt(i);
  }

  addlanguages() {
    this.languages().push(this.newLanguages());
  }
   
  removelanguages(i:number) {
    this.languages().removeAt(i);
  }

  addprogs() {
    this.progs().push(this.newProgs());
  }
   
  removeprogs(i:number) {
    this.progs().removeAt(i);
  }
  addachievements() {
    this.achievements().push(this.newAchievements());
  }
   
  removeachievements(i:number) {
    this.achievements().removeAt(i);
  }

  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  addCompleteUser(dataimage: any){
    var data_img = dataimage;
    var id = localStorage.getItem("userid")
    console.log(this.userForm.value,'userformdatagetted');
    var user = this.userForm.value;
    this._add.adduser(user,id,data_img)
  }
  
  onSubmit() {

    const img = new FormData();
    img.append('file', this.images);
    console.log(img,"file")
    this._add.addimage(img)
    .subscribe(res=>
      {
        var dataimage = res.img_file
        console.log(dataimage,"dataimage saved and response")
        this.addCompleteUser(dataimage);
      },
      err=>
      {
        console.log("errorfrom imagesaving")
      })
      // (this._add.adduser(user,id))
    alert("Profile created")
    // localStorage.setItem("userID", user._id.toString())
    this.router.navigate([''])
  }
}

