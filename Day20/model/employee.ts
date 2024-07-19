export interface Employee{
    id:number;
    name:string;
    department:string;
     status:string;
	 phoneno:string;
	 salary:number
	 createddtm:Date;
	createdby:string;
	 updateddtm:Date;
	 updatedby:string;
	 emailid:string;
     country:{
        cid:number,
        cname:string
     }
}