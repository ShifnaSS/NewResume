export class UserModel{
    constructor(
        public userid:String,
    public name :String,
    public date :String,
    public gender :String,
    public email_id :String,
    public phone :Number,
    public image :String,
    public yourself:String,
    public highschools:[{edu_title:String,edu_desc:Number,edu_school:String,edu_year:Number}],
    public higherschools:[{edu_title:String,edu_desc:Number,edu_school:String,edu_year:Number}],
    public graduations:[{edu_title:String,edu_stream:String,edu_desc:Number,edu_inst:String,edu_year:Number}],
    public posts:[{edu_title:String,edu_stream:String,edu_desc:Number,edu_inst:String,edu_year:Number}],
    public projects:[{title:String,
        desc:String}],
    public qualifications :[{course_name:String,percentage:Number,edu_type:String}],
    public experiences:[{job_title:String,exp_from:Number,exp_to:Number}],
    public skills:[{skills:String}],
    public languages:[{languages:String}],
    public progs:[{progs:String,prog_perc:String}],
    public achievements:[{achievements:String}]
){}
}