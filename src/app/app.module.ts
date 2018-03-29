import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { GithubauthInterceptor } from './interceptor/githubauth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
    /*
     * Premièrent, nous avons importé GithubauthInterceptor et dans un second temps nous avons insérer un nouvelle objet dans l'array
     * qui est assigné à la propriété providers de @ngModule. Cette objet contient trois propriété :
     *
     * provide  : doit être défini sur HTTP_INTERCEPTOR afin de spécifier qu'un intercepteur HTTP est fourni,
     * useClass : doit être défini notre type de classe d'intercepteur.
     * multi : doit être défini pour indiquer à Angular que HTTP_INTERCEPTORS est un tableau de valeurs, plutôt qu'un seule valeur.
     *
     * À partir de cela, l'intercepteur est activé et les autorisation d'en-tête is ajouté à chaque requête envoyée automatiquement.
     */
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: GithubauthInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
