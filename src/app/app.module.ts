import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { SocialMediaIconComponent } from './components/atoms/social-media-icon/social-media-icon.component';
import { StudiesInfoComponent } from './components/atoms/studies-info/studies-info.component';
import { InfoNavbarComponent } from './components/atoms/info-navbar/info-navbar.component';
import { SkillComponent } from './components/atoms/skill/skill.component';
import { ProjectCardComponent } from './components/molecules/project-card/project-card.component';
import { ContactMeComponent } from './components/molecules/contact-me/contact-me.component';
import { LandingComponent } from './components/templates/landing/landing.component';
import { AboutMeComponent } from './components/templates/about-me/about-me.component';
import { PortfolioComponent } from './components/templates/portfolio/portfolio.component';
import { ContactComponent } from './components/templates/contact/contact.component';
import { EndComponent } from './components/molecules/end/end.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    SocialMediaIconComponent,
    StudiesInfoComponent,
    InfoNavbarComponent,
    SkillComponent,
    ProjectCardComponent,
    ContactMeComponent,
    LandingComponent,
    AboutMeComponent,
    PortfolioComponent,
    ContactComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
