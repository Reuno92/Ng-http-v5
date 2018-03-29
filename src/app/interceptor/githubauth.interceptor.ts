import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
/**
 *  La Class GithubAuthInterceptor implémente l'interface HttpInterceptor
 *
 *  Elle implemente la methode de la Class HttpInterceptor : intercept
 *  Qui prends deux paramètres :
 *  Le premier paramètres : Contient la requête originale,
 *  Le second paramètes : le gestionnaire Http auquel la requête doit être transmise pour un traitement ultérieur.
 */
export class GithubauthInterceptor implements HttpInterceptor {
    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        /*
         * Premièrement, nous avons crée une nouvelle requête en utilisant la method clone,
         * Dans le même temps, nous avons passé dans la propriété headers, une modification de la propriété
         * Authorization : le Github Token.
         *
         * Enfin, la nouvelle requête nouvellement créer avec (la nouvelle en-tête inclus) est passé
         * pour traitement ultérieur en en utilisatnla méthode next.handle.
         */
        const authReq = req.clone({headers: req.headers.set('Authorization', 'token <your Github token')
    });
        return next.handle(authReq);
    }
}
