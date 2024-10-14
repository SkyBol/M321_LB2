import api from "../../../config/Api";


class AbstractService<T> {
    public base : string;

    private serialize(params: any) {
        var str = [];
        for (var p in params)
            if (params.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
            }
        return str.join("&");
    }

    constructor (base: string) {
        this.base = base + (base.endsWith("/") ? "" : "/");
    }

    public getAll () {
        return api.get(this.base);
    }
    public getAllPaged(size: number, page: number) {
        return api.get(`${this.base}?size=${size}&page=${page}`);
    }
    public getAllParameterized(parameters: Object) {
        return api.get(`${this.base}?${this.serialize(parameters)}`)
    }
    public get(id : string) {
        return api.get(this.base + id);
    }
    public save(o : T) {
        return api.post(this.base, o);
    }
    public update(o : T, id : string) {
        return api.put(this.base + id, o)
    }
    public delete(id : string) {
        return api.delete(this.base + id);
    }
}

export default AbstractService;