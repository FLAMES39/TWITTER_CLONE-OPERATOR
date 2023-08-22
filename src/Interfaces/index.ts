


export interface Users{
    id:number
    name:string
    username:string
    email:string
    address:{
        streets:string
        suite:string
        city:string
        zipcode:string
        geo:{
            lat:string
            lng:string
        }
    }
    phone:string
    website:string
    company:{
        name:string
        catchPhrase:string
        bs:string
    }
}


export interface UserPosts{
    userId:number
    id:number
    title:string
    body:string
    userDetails:Users
}

export interface post{
    userId:number
    id:number
    title:string
    body:string
}


export interface comments{
    postid:number
    id:number
    name:string
    email:string
    body:string
}