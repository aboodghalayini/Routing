export interface List<Type> {
    data: Type[];
    total: number;
    page: number;
    limit: number;
}
export interface UserPreview
{
	id: string;
	title:string;
	firstName: string;
	lastName: string;
	picture: string;
}
export interface UserFull extends UserPreview
{
	gender: string;
	email: string;
	dateOfBirth: string;
	registerDate: string;
	phone: string;
	location: object;
}
export interface CreateUserModel {
    firstName: string;
    lastName: string;
    email: string;
}
export interface UpdateUser {
	title?:string;
	firstName?: string;
	lastName?: string;
	gender?: string;
	picture?: string;
  }
