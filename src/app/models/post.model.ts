export interface postcreate
{
    text: string;
    image: string;
    likes: number;
    tags: Array<string>;
    owner: string;
}
export interface PostPreview
{
    id: string;
    text: string;
    image: string;
    likes: number;
    tags: Array<string>;
    publishDate: string;
    owner: object;
}
export interface post
{
    id: string;
    text: string;
    image: string;
    likes: number;
    link: string;
    tags: Array<string>;
    publishDate: string;
    owner: object;
    }