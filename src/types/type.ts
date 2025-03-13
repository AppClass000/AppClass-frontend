
export interface ApiResponse<T>  {
    registeredClasses	:T
};

export type ScheduleData = {
    ClassName: string;
    Schedule: string;
};

export type UserDetailData = {
    Faculty: string,
    Department:string,
    Course : string,
}


export type  ClassesData = {
    ClassName: string;
    Instructor: string;
    Schedule: string;
    Location: string;
    IsMandatory: number;
}


export interface ApiResponseUserClass {
    userclasses: ClassesData[];
}

 
export type ProfileData = {
    name: string,
    email:string,
    avatar:string
}
 