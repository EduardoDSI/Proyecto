import { createReducer, on } from "@ngrx/store"

import { updateActiveMenu, fillPersonList, fillTipoDocList, fillCargoList, fillClientesList, fillSucursalList, fillRolList, fillEstadoList, fillMetodoPagoList, fillTipoTelaList, fillProductoList, fillTipoComprobanteList } from "./dashboard.actions"

const initialDashboardState = {
  activeMenu: 43,
  dashboardMenu: [
    {
      id: 1,
      name: 'Usuarios',
      icon: 'person-fill-check',
      path:'usuario',
      submenu: null,
    },
    
    {
      id: 3,
      name: 'Inventario',
      icon: 'grid',
      path:'inventario',
      submenu: [

        {
          id: 31,
          name: 'Tipos de Telas',
          icon: 'bi bi-box2-heart-fill',
          path:'tipotela',
        },
        {
          id: 32,
          name: 'Productos',
          icon: 'bi bi-box2-heart-fill',
          path:'producto',
        },


      ],
    },
    {
      id: 4,
      name: 'Personal',
      icon: 'people-fill',
      path: null,
      submenu: [
        {
          id: 41,
          name: 'Cargos',
          icon: 'person-vcard-fill',
          path:'cargo',
        },
        {
          id: 42,
          name: 'Estados',
          icon: 'toggles',
          path:'estado',
        },
        {
          id: 43,
          name: 'Personas',
          icon: 'file-person',
          path:'persona',
        },
        {
          id: 44,
          name: 'Roles',
          icon: 'person-badge-fill',
          path:'rol',
          
        },
        {
          id: 45,
          name: 'Sucursales',
          icon: 'bi bi-geo-alt-fill',
          path:'sucursal',
          
        },
        
      ],
    },
    {
      id: 5,
      name: 'Ventas',
      icon: 'bi bi-bag-check',
      path:'ventas',
      submenu: [
        {
          id: 51,
          name: 'MetodoPago',
          icon: 'bi bi-cash-coin',
          path:'metodopago',
        },
        {
          id: 52,
          name: 'TipoComprobante',
          icon: 'bi bi-cash-coin',
          path:'tipocomprobante',
        },
      ]
    },
    {
      id: 6,
      name: 'Clientes',
      icon: 'bi bi-person-add',
      path:'cliente',
      submenu: null,
    },
    
  ],

  personaLista: [],
  tipoDocLista: [],
  usuarioLista: [],
  cargoLista:[],
  clientesLista:[],
  sucursalLista:[],
  rolLista:[],
  estadoLista:[],
  metodoPagoLista:[],
  tipoTelaLista:[],
  productoLista:[],
  tipoComprobanteLista:[]
}

export const DashboardReducer = createReducer( initialDashboardState,
  on( updateActiveMenu, (state, {id}) => {
    return {
      ...state,
      activeMenu: id
    }
  }),
  on( fillPersonList, (state, {data}) => {
    return {
      ...state,
      personaLista: data
    }
  }),
  on( fillTipoDocList, (state, {data}) => {
    return {
      ...state,
      tipoDocLista: data
    }
  }),
  on( fillCargoList, (state, {data}) => {
    return {
      ...state,
      cargoLista: data
    }
  }),
  on( fillClientesList, (state, {data}) => {
    return {
      ...state,
      clientesLista: data
    }
  }),
  on( fillSucursalList, (state, {data}) => {
    return {
      ...state,
      sucursalLista: data
    }
  }),
  on( fillRolList, (state, {data}) => {
    return {
      ...state,
      rolLista: data
    }
  }),
  on( fillEstadoList, (state, {data}) => {
    return {
      ...state,
      estadoLista: data
    }
  }),
  on( fillMetodoPagoList, (state, {data}) => {
    return {
      ...state,
      metodoPagoLista: data
    }
  }),
  on( fillTipoTelaList, (state, {data}) => {
    return {
      ...state,
      tipoTelaLista: data
    }
  }),
  on( fillProductoList, (state, {data}) => {
    return {
      ...state,
      productoLista: data
    }
  }),
  on( fillTipoComprobanteList, (state, {data}) => {
    return {
      ...state,
      tipoComprobanteLista: data
    }
  })
)
