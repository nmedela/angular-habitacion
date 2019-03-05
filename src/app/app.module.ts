import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatMenuModule,MatRadioModule,MatButtonModule,MatSidenavModule,MatIconModule,MatListModule,
  MatDividerModule,MatToolbarModule,MatGridListModule,MatProgressSpinnerModule,MatSnackBarModule} from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AudioComponent } from './componentes/audio/audio.component';
import { LucesComponent } from './componentes/luces/luces.component';
import { LuzDimmerComponent} from './componentes/luzDimmer/luzDimmer.component'
import { HttpClientModule } from '@angular/common/http'
import { ControlRemotoComponent} from './componentes/controlRemoto/controlRemoto.component'
import {MatSliderModule} from '@angular/material/slider';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { } from 'hammerjs';

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
    ControlRemotoComponent,
    LuzDimmerComponent,
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
    MatGridListModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [ { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
