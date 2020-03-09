import { Dealer } from "zeromq";

/**
 * Clase Connection
 * Almacena informacion sobre la conexion
 * a otros clientes
 */
export default class Connection {

    private _id: string;          // ID del proceso o cliente de la conexion
    private _dealer: Dealer;      // Dealer de la conexion
    private _closed: boolean = false;

    /**
     * Constructor de la conexion
     * @param id id del cliente
     * @param dealer dealer del cliente
     */
    constructor(id: string, dealer: Dealer) {
        this._id = id;
        this._dealer = dealer;
    }

    /**
     * Devuelve el id del cliente de la conexion
     */
    get id(): string {
        return this._id;
    }

    /**
     * Devuelve si el socket esta cerrado
     */
    get closed(): boolean {
        return this._closed;
    }

    /**
     * Devuelve el dealer de la conexion
     */
    get dealer(): Dealer {
        return this._dealer;
    }

    public close(): void {
        this._closed = true;
        this._dealer.close();
    }
}
