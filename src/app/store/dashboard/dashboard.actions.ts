import { createAction, props } from "@ngrx/store"
import { Persona } from "src/app/models"

//ACCIONES GENERALES
export const updateActiveMenu = createAction(
  '[Dashboad Page] Update activeMenu',
  props<{id:number}>()
)

//ACCIONES CRUD
export const fillPersonList = createAction(
  '[Dashboad Page] Fill fillPersonList',
  props<{data:any}>()
)

export const fillTipoDocList = createAction(
  '[Dashboad Page] Fill fillTipoDocList',
  props<{data:any}>()
)
export const fillCargoList = createAction(
  '[Dashboad Page] Fill fillCargoList',
  props<{data:any}>()
)
export const fillClientesList = createAction(
  '[Dashboad Page] Fill fillClientesList',
  props<{data:any}>()
)
export const fillSucursalList = createAction(
  '[Dashboad Page] Fill fillSucursalList',
  props<{data:any}>()
)
export const fillRolList = createAction(
  '[Dashboad Page] Fill fillRolList',
  props<{data:any}>()
)
export const fillEstadoList = createAction(
  '[Dashboad Page] Fill fillEstadoList',
  props<{data:any}>()
)
export const fillMetodoPagoList = createAction(
  '[Dashboad Page] Fill fillMetodoPagoList',
  props<{data:any}>()
)
export const fillTipoTelaList = createAction(
  '[Dashboad Page] Fill fillTipoTelaList',
  props<{data:any}>()
)
export const fillProductoList = createAction(
  '[Dashboad Page] Fill fillProductoList',
  props<{data:any}>()
)
export const fillTipoComprobanteList = createAction(
  '[Dashboad Page] Fill fillTipoComprobanteList',
  props<{data:any}>()
)
