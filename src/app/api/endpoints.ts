export enum ApiEndpoints {
    //BASE_URL = 'https://cryptic-taiga-01460.herokuapp.com',
    BASE_URL = 'http://localhost:9000',
    SHORTENER = '/api/url',
    PERSONAL = '/api/person',
}

export type UrlRequest = {
    longUrl: string;
    ending: string;
    days: number;
};
