import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { AuthenticationServiceService } from './services/authentication-service.service';
import { APP_INITIALIZER } from '@angular/core';
import { BookDataService } from './services/book-data.service';


@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }), !environment.production ? StoreDevtoolsModule.instrument() : [],
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,       
        HttpClientModule,              
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,  
        ReactiveFormsModule        
    ],
    declarations: [AppComponent],
    providers: [ AuthGuardGuard, AuthenticationServiceService,
        {
            provide: APP_INITIALIZER,
            useFactory: resourceProviderFactory,
            deps: [BookDataService],
            multi: true
        }
     ],
    bootstrap: [AppComponent]
})
export class AppModule {}

export function resourceProviderFactory(provider: BookDataService) {
    return () => provider.addBook();
}

