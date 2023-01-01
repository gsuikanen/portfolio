export enum ApiEndpoints {
    BASE_URL = 'http://localhost:9000',
    SHORTENER = '/api/url',
    PERSONAL = '/api/person',
}

export type UrlRequest = {
    longUrl: string;
    ending: string;
    days: number;
};
