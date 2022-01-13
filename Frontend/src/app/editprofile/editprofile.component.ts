import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
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
      name :'',
      date :'',
      gender :'',
      email_id :'',
      phone :'',
      yourself:'',
      highschools:new FormGroup({edu_title: new FormControl(''),
                                  edu_desc: new FormControl(''),
                                  edu_school: new FormControl(''),
                                  edu_year: new FormControl('')}),
      higherschools:new FormGroup({edu_title: new FormControl(''),
                                   edu_desc: new FormControl(''),
                                   edu_school: new FormControl(''),
                                   edu_year: new FormControl('')}),
      graduations:new FormGroup({edu_title: new FormControl(''),
                                  edu_stream:new FormControl(''),
                                  edu_desc: new FormControl(''),
                                  edu_inst: new FormControl(''),
                                  edu_year: new FormControl('')}),
      posts:new FormGroup({edu_title: new FormControl(''),
                            edu_stream:new FormControl(''),
                            edu_desc: new FormControl(''),
                            edu_inst: new FormControl(''),
                            edu_year: new FormControl('')}),
      projects: this.fb.array([]) ,
      qualifications :this.fb.array([]),
      experiences:this.fb.array([]),
      skills:this.fb.array([]),
      languages:this.fb.array([]),
      progs:this.fb.array([]),
      achievements:this.fb.array([])
    });
  }
  UserData :any;
  objectid :any;
  ngOnInit(): void {
    let id = localStorage.getItem("userid");
    this._add.getUser(id).subscribe((data)=>{
    this.UserData=JSON.parse(JSON.stringify(data));
    var data = this.UserData
    this.userForm.patchValue(this.UserData); 
    // console.log(this.UserData.languages[0].languages);
    
    })
  }
  
  projects() : FormArray {
    return this.userForm.get("projects") as FormArray
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
   
  newProject(): FormGroup {
    return this.fb.group({
      title: '',
      desc: ''
    })
  }
  
   
  newQualification(): FormGroup {
    return this.fb.group({
      course_name: '',
      percentage: '',
      edu_type:''
    })
  }

  newExperience(): FormGroup {
    return this.fb.group({
      job_title: '',
      exp_from: '',
      exp_to:''
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
      prog_perc:''
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
    let uid = localStorage.getItem("userid");
    this.objectid = this.UserData._id;
    this._add.update_user(user,this.objectid,data_img)
    alert("Profile Updated")
    // localStorage.setItem("userID", user._id.toString())
    this.router.navigate([''])
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
    
  }
}


