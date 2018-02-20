import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AngularFireModule } from 'angularfire2';  
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import {Observable} from 'rxjs/Rx';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {CreateCustomerComponent} from './customers/create-customer/create-customer.component';
import {CustomerService} from './customers/customer.service';


import {CulturasListComponent} from './culturas/culturas-list/culturas-list.component';
import {CulturaDetailsComponent} from './culturas/cultura-details/cultura-details.component';
import {CreateCulturaComponent} from './culturas/create-cultura/create-cultura.component';
import {CulturaService} from './culturas/cultura.service';

import {EstacoesListComponent} from './estacoes/estacoes-list/estacoes-list.component';
import {EstacaoDetailsComponent} from './estacoes/estacao-details/estacao-details.component';
import {CreateEstacaoComponent} from './estacoes/create-estacao/create-estacao.component';
import {EstacaoService} from './estacoes/estacao.service';

import {SolosListComponent} from './solos/solos-list/solos-list.component';
import {SoloDetailsComponent} from './solos/solo-details/solo-details.component';
import {CreateSoloComponent} from './solos/create-solo/create-solo.component';
import {SoloService} from './solos/solo.service';

import {EmissoresListComponent} from './emissores/emissores-list/emissores-list.component';
import {EmissorDetailsComponent} from './emissores/emissor-details/emissor-details.component';
import {CreateEmissorComponent} from './emissores/create-emissor/create-emissor.component';
import {EmissorService} from './emissores/emissor.service';

import {TubosListComponent} from './tubos/tubos-list/tubos-list.component';
import {TuboDetailsComponent} from './tubos/tubo-details/tubo-details.component';
import {CreateTuboComponent} from './tubos/create-tubo/create-tubo.component';
import {TuboService} from './tubos/tubo.service';

import {SetoresListComponent} from './setores/setores-list/setores-list.component';
import {SetorDetailsComponent} from './setores/setor-details/setor-details.component';
import {CreateSetorComponent} from './setores/create-setor/create-setor.component';
import {SetorService} from './setores/setor.service';

import {DerivacoesListComponent} from './derivacoes/derivacoes-list/derivacoes-list.component';
import {DerivacaoDetailsComponent} from './derivacoes/derivacao-details/derivacao-details.component';
import {CreateDerivacaoComponent} from './derivacoes/create-derivacao/create-derivacao.component';
import {DerivacaoService} from './derivacoes/derivacao.service';

import {Princi_ramificacoesListComponent} from './princi_ramificacoes/princi_ramificacoes-list/princi_ramificacoes-list.component';
import {Princi_ramificacaoDetailsComponent} from './princi_ramificacoes/princi_ramificacao-details/princi_ramificacao-details.component';
import {CreatePrinci_ramificacaoComponent} from './princi_ramificacoes/create-princi_ramificacao/create-princi_ramificacao.component';
import {Princi_ramificacaoService} from './princi_ramificacoes/princi_ramificacao.service';

import {PrincipaisListComponent} from './principais/principais-list/principais-list.component';
import {PrincipalDetailsComponent} from './principais/principal-details/principal-details.component';
import {CreatePrincipalComponent} from './principais/create-principal/create-principal.component';
import {PrincipalService} from './principais/principal.service';



const appRoutes:Routes = [
  
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: 'customers', component: CustomersListComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'culturas', component: CulturasListComponent},
  {path: 'addCultura', component: CreateCulturaComponent},
  {path: 'estacoes', component: EstacoesListComponent},
  {path: 'addEstacao', component: CreateEstacaoComponent},
  {path: 'solos', component: SolosListComponent},
  {path: 'addSolo', component: CreateSoloComponent},
  {path: 'emissores', component: EmissoresListComponent},
  {path: 'addEmissor', component: CreateEmissorComponent},
  {path: 'tubos', component: TubosListComponent},
  {path: 'addTubo', component: CreateTuboComponent},
  {path: 'setores', component: SetoresListComponent},
  {path: 'addSetor', component: CreateSetorComponent},
  {path: 'derivacoes', component: DerivacoesListComponent},
  {path: 'addDerivacao', component: CreateDerivacaoComponent},
  {path: 'princi_ramificacoes', component: Princi_ramificacoesListComponent},
  {path: 'addPrinci_ramificacao', component: CreatePrinci_ramificacaoComponent},
  

  ];

  @NgModule({
    declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent,
    CulturasListComponent,
    CulturaDetailsComponent,
    CreateCulturaComponent,
    EstacoesListComponent,
    EstacaoDetailsComponent,
    CreateEstacaoComponent,
    SolosListComponent,
    SoloDetailsComponent,
    CreateSoloComponent,
    EmissoresListComponent,
    EmissorDetailsComponent,
    CreateEmissorComponent,
    TubosListComponent,
    TuboDetailsComponent,
    CreateTuboComponent,
    SetoresListComponent,
    SetorDetailsComponent,
    CreateSetorComponent,
    DerivacoesListComponent,
    DerivacaoDetailsComponent,
    CreateDerivacaoComponent,
    Princi_ramificacoesListComponent,
    Princi_ramificacaoDetailsComponent,
    CreatePrinci_ramificacaoComponent,
    PrincipaisListComponent,
    PrincipalDetailsComponent,
    CreatePrincipalComponent,


   
    ],
    imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, 
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAymxdAPDYsAatYzr5DHGjme9DjPVU6XPE'
    }),
   


    ],
    providers: [AuthService, 
    AngularFireDatabase, 
    CustomerService, 
    CulturaService, 
    EstacaoService, 
    SoloService, 
    EmissorService, 
    SetorService, 
    TuboService, 
    DerivacaoService,
    Princi_ramificacaoService,
    PrincipalService,
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
