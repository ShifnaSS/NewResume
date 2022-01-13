import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { UserService } from '../user.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-twotemp',
  templateUrl: './twotemp.component.html',
  styleUrls: ['./twotemp.component.css']
})
export class TwotempComponent implements OnInit {
  templateid  ='twotemp';
  urlid = '';
 
  private ngNavigatorShareService: NgNavigatorShareService;
  // @ViewChild('doc2', {static:false}) el!: ElementRef;
  constructor(private _add:UserService,private router:Router,ngNavigatorShareService: NgNavigatorShareService,public _auth:AuthService) {
    this.ngNavigatorShareService = ngNavigatorShareService;
   }
  UserData:any;
  imgfile:any;
  ngOnInit(): void {
    let id = localStorage.getItem("userid");
    this._add.gettempUser(id).subscribe((data)=>{

    if(data!=null){
        this.UserData=JSON.parse(JSON.stringify(data));
      }
      else{
      this.router.navigate(['/profilehome'])
      }
    
    console.log(this.UserData);
    this.imgfile=this.UserData.image
    this.urlid = this.UserData._id
    })
  }
  save(){
    alert("Download Started")
    var data = document.getElementById('doc2') as HTMLCanvasElement;
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      var imgWidth = 608;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      console.log('imgHeight::', imgHeight);
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      console.log('contentDataURL::', contentDataURL);
      let pdf = new jsPDF('l', 'mm', [3500,1500]); // A4 size page of PDF[950, 1000]
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 150, position, imgWidth, imgHeight);
      pdf.save('sample.pdf'); // Generated PDF
    });
  }
  share() {
    
    if (!this.ngNavigatorShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }
    const fullurl = this.router.url;
    this.ngNavigatorShareService.share({
      title: 'Digital Resume Builder',
      text: 'Share your Resume in just one click',
      url: fullurl
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
    let webuserid = localStorage.getItem("userid");
    this._add.weblink(webuserid,fullurl);
  }
}
