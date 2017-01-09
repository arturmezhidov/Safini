import { IApiService } from "./IApiService";
import { Slide } from  "../../common/entities";

export interface IDataContext {
    slides: IApiService<Slide>;
}