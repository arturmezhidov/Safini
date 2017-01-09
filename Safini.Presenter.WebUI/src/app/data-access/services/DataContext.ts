import { Http } from "@angular/http";
import { HttpConfig } from "../../config/http.config";
import { IApiService } from "../contracts/IApiService";
import { IDataContext } from "../contracts/IDataContext";
import { JsonService } from "./JsonService";
import { Slide } from "../../common/entities"

export class DataContext implements IDataContext {

    private http: Http;

    public slides: IApiService<Slide> = new JsonService<Slide>(`${HttpConfig.API_BASE_URL}${HttpConfig.API_SLIDE_URL}`, this.http);

    constructor(http: Http) {
        this.http = http;
    }
}