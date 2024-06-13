import {db} from "./config/mysql.js";
import { acceso, error } from "../message/mjs.js";
import {pool} from "../config/mysql.js";

export const mostrar = async(req, res) =>{
    const {id} = req.params;

    try {
        const resp = await db.query(`call SP_mostrar("${id}")`)

        acceso(req, res, 200, resp [0])
    } catch (error) {
        error(req, res, 400, error)
    }
}

export const listar = async (req, res) =>{

    try {
        const resp = await db.query(`call SP_listar()`)

        acceso(req, res, 200, resp[0][0])
    } catch (error) {
        error(req, res, 400, error)
    }
}

export const crear = async (req, res) => {
    const {id, nombre} = req.body

    try {
        const resp = await db.query(`call SP_crear ("${nombre}")`)

        if(resp[0].affecdRows==1){
            acceso(req, res, 200, "Estudiante registrado")
        }else{
            error(req, res, 400, "Estudiante no registrado")
        }
    } catch (error) {
        error(req, res, 400, error)
    }
} 

export const modificar = async (req, res) =>{
    const {id,nombre}=req.body

    try {
        const resp = await db.query(`call SP_modificar ("${id}")`)

        if(resp[0].affecdRows==1){
            accesso(req, res, 200, "Estudiante modificado")
        }else{
            error(req, res, 400, "No se modifico")
        }
    } catch (error) {
        error(req, res, 400, error)
    }
}

export const eliminar = async (req, res) =>{
    const {id} = req.body

    try {
        const resp = await db.query(`call SP_eliminar ("${id}")`)

        if(resp[0].affecdRows==1){
            acceso(req, res, 200, "Estudiante eliminado")
        }else{
            error(req, res, 200, "Estudiante eliminado")
        }
    } catch (error) {
        error(req, res, 400, error)
    }
}
