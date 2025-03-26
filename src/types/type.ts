
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
    IsCore: boolean;
    IsIntroductory :boolean
    IsCommon:boolean;
};


export type UserDetailDataResponse = {
    message:string,
    userdetail:UserDetailData
}

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
    IsCore: boolean;
    IsIntroductory :boolean
    IsCommon:boolean;
}


export interface ApiResponseUserClass {
    userclasses: ClassesData[];
}

 
export type ProfileData = {
    name: string,
    email:string,
    avatar:string
}
