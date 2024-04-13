import { Component, OnInit } from '@angular/core'
import { PersonaService, TipodocumentoService } from 'src/app/services'
import { FormControl, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'

import { Validator } from 'src/app/utils/helpers'
import { Persona, TipoDocumento } from 'src/app/models'
import { fillPersonList, fillTipoDocList } from 'src/app/store/dashboard/dashboard.actions'

@Component({
  selector: 'app-dashboard-persona',
  templateUrl: './dashboard-persona.component.html',
  styleUrls: ['./dashboard-persona.component.scss']
})
export class DashboardPersonaComponent implements OnInit{
  constructor(
    private personaService: PersonaService,
    private tipoDocService: TipodocumentoService,
    public store: Store<{
      dashboardState: {
        personaLista: Array<Persona>,
        tipoDocLista: Array<TipoDocumento>,
      }
    }>,
  ){
    
  }
  public validatorTemplate = Validator

  // ID unico del Modal de este componente (No se debe repetir en ningun otro componente)
  public idModal: string = 'modal-dashboard-persona'

  //VARIABLES
  public personaLista: Array<Persona> = []
  public tipoDocLista: Array<TipoDocumento> = []
  
  public personaForm = new FormGroup({
    //Campos Ocultos
      idPersona: new FormControl(
        0
      ),
    //Campos a Mostrar
      rsocial: new FormControl(
        '',
        [Validator.required]
      ),
      idTipoDoc: new FormControl(
        '',
        [Validator.required]
      ),
      nroDocumento: new FormControl(
        '',
        [Validator.required]
      ),
      correo: new FormControl(
        '',
        [Validator.required, Validator.email]
      ),
      fechaNacimiento: new FormControl(
        '',
        [Validator.required]
      ),
      telefono: new FormControl(
        '',
        [Validator.required]
      ),
      direccion: new FormControl(
        '',
        [Validator.required]
      ),
	})
  
  public stateModal: string = ''
  
  public errorMessage: string = ''
  
  public personaNew: any = {
    idPersona: 0,
    rsocial: '',
    direccion: '',
    telefono: '',
    fechaNacimiento: new Date(),
    correo: '',
    nroDocumento: '',
    idTipoDoc: 1,
  }

  public personaToDelete: any = {}

  //FUNCIONES
  openModalItem(action: string, data: any) {
    this.stateModal = action

    if (action === 'Editar') {
      this.personaForm.setValue(data)
      document.getElementById(this.idModal + '-btn')!.click()
    } else {
      this.personaForm.setValue(this.personaNew)
      document.getElementById(this.idModal + '-btn')!.click()
    }
  }
  
  registrarItem() {
    this.personaService.createItem(this.personaForm.value).subscribe((result: any)=>{
      if (result.hasOwnProperty('idPersona')) {
        this.loadAllItems()
        document.getElementById(this.idModal + '-btn-close')!.click()
      } else {
        this.errorMessage = result.mensaje
      }
    })
  }
  
  actualizarItem() {
    this.personaService.updateItem(this.personaForm.value).subscribe((result: any)=>{
      console.log(result)
      if (result.hasOwnProperty('idPersona')) {
        this.loadAllItems()
        document.getElementById(this.idModal + '-btn-close')!.click()
      } else {
        this.errorMessage = result.mensaje
      }
    })
  }
  
  openModalDelete(item: any) {
    this.personaToDelete = item
    document.getElementById(this.idModal + '-delete-btn')!.click()
  }
  
  eliminarItem() {
    this.personaService.deleteItem(this.personaToDelete.idPersona).subscribe((result: any)=>{
      if (result == 1) {
        this.loadAllItems()
        document.getElementById(this.idModal + '-delete-btn-close')!.click()
      } else {
        this.errorMessage = result.mensaje
      }
    })
  }
  
  formAction(){
    if (!this.personaForm.invalid) {
      this.stateModal === 'Editar' ? this.actualizarItem() : this.registrarItem()
    } else {
      this.errorMessage = 'Algunos datos no son validos o están vacíos'
    }
  }
  
  loadAllItems(){
    this.personaService.getAllItems().subscribe((result)=>{
      if (result.length) {
        this.store.dispatch(fillPersonList({data: result}))
      }
    })
  }
  
  loadAllTipoDocumento(){
    this.tipoDocService.getAllItems().subscribe((result)=>{
      if (result.length) {
        this.store.dispatch(fillTipoDocList({data: result}))
      }
    })
  }

  validarDni(){
    const dni: any = this.personaForm.get('nroDocumento')?.value
    if (dni.length > 7) {
      this.personaService.requestDniApi(dni).subscribe((result)=>{
        if (result.apellidoPaterno !== '') {
          this.personaForm.setValue({
            rsocial: result.nombres + ' ' + result.apellidoPaterno + ' ' + result.apellidoMaterno,
            idPersona: 0,
            idTipoDoc: '2',
            nroDocumento: result.dni,
            correo: '',
            fechaNacimiento: '',
            telefono: '',
            direccion: ''
          })
        }
      })
    }
    
  }

  //FUNCION DE CARGA INICIAL DEL COMPONENTE
  ngOnInit(): void {
    //Creando Observables del Store
    this.store.select('dashboardState').subscribe( data => {
      this.personaLista = data.personaLista
    })
    this.store.select('dashboardState').subscribe( data => {
      this.tipoDocLista = data.tipoDocLista
    })
    
    //Lamando afunciones que cargan datos iniciales
    this.loadAllTipoDocumento()
    this.loadAllItems()
  }
}
