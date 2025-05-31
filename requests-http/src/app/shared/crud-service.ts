import { HttpClient } from "@angular/common/http";
import { delay, take, tap } from "rxjs/operators";
import { GenericCrud } from "./models/generic-crud";

export class CrudService<T extends GenericCrud> {
    constructor(protected http: HttpClient, private API_URL: string) { }
    list() {
        return this.http.get<T[]>(this.API_URL)
            .pipe(
                tap(console.log)
            );
    }

    loadById(id: string) {
        return this.http.get<T>(`${this.API_URL}/${id}`)
            .pipe(take(1));
    }

    private create(record: T) {
        return this.http.post(this.API_URL, record).pipe(take(1));
    }

    private update(record: T) {
        return this.http.put(`${this.API_URL}/${record.id}`, record).pipe(take(1));
    }

    save(record: T) {
        if (record.id) {
            return this.update(record);
        }
        (record as any).id = undefined;
        return this.create(record)
    }

    remove(id: string) {
        return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
    }
}