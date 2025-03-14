
export interface ApiResponse<T>  {
    registeredClasses	:T
};

export type ScheduleData = {
    ClassName: string;
    ClassID: number
    Instructor: string;
    Schedule: string;
    Location: string;
    IsMandatory: boolean;
};

export type UserDetailData = {
    Faculty: string,
    Department:string,
    Course : string,
}


export type  ClassesData = {
    ClassName: string;
    ClassID: number
    Instructor: string;
    Schedule: string;
    Location: string;
    IsMandatory: boolean;
}


export interface ApiResponseUserClass {
    userclasses: ClassesData[];
}

 
export type ProfileData = {
    name: string,
    email:string,
    avatar:string
}
 