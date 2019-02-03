import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatMenuModule,MatRadioModule,MatButtonModule,MatSidenavModule,MatIconModule,MatListModule,
  MatDividerModule,MatToolbarModule,MatGridListModule} from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AudioComponent } from './componentes/audio/audio.component';
import { LucesComponent } from './componentes/luces/luces.component';
import { ControlRemotoComponent} from './componentes/controlRemoto/controlRemoto.component'

export const appRoutes: Routes = [
  {
    path: 'luces', component: LucesComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'controlRemoto', component: ControlRemotoComponent },
  { path: "", pathMatch: "full", redirectTo: "luces" },

];



@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    LucesComponent,
    ControlRemotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatMenuModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
