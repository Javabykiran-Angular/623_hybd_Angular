export interface Employee{
    id:number;
    name:string;
    department:string;
     status:string;
	 phoneno:string;
	 salary:number
	 createddtm:number;
	createdby:string;
	 updateddtm:number;
	 updatedby:string;
	 emailid:string;
     country:{
        cid:number,
        cname:string
     }
}