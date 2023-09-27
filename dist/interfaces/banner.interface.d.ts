export interface IBanner {
    title: string;
    description: string;
    buttonText: string;
    externalLink: string;
    type: string;
    image: string;
    status: boolean;
    createdAt: Date;
}
export interface IBannerRequest {
    type: string;
}
