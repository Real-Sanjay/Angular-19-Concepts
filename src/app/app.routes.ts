import { Routes } from '@angular/router';
import { AgeValidatorComponent } from './concepts/directives/age-validator/age-validator.component';
import { ToggleComponent } from './concepts/directives/toggle/toggle.component';
import { PortfolioComponent } from './concepts/directives/portfolio/portfolio.component';
import { NgOnChangesComponent } from './concepts/life-cycle-hooks/ng-on-changes/ng-on-changes.component';
import { NgDoCheckComponent } from './concepts/life-cycle-hooks/ng-do-check/ng-do-check.component';
import { NgAfterContentinitComponent } from './concepts/life-cycle-hooks/ng-after-contentinit/ng-after-contentinit.component';
import { InputComponent } from './concepts/decorators/Exercise/Input/input/input.component';
import { OutputComponent } from './concepts/decorators/Exercise/Output/output/output.component';
import { ViewChildComponent } from './concepts/decorators/Exercise/ViewChild/view-child.component';
import { HostBinderAndListenerComponent } from './concepts/decorators/Exercise/host-binder-and-listener/host-binder-and-listener.component';
import { PageNavSlicePipeComponent } from './concepts/Pipes/Exercise/page-nav-slice-pipe/page-nav-slice-pipe.component';
import { SortCustomPipeComponent } from './concepts/Pipes/Exercise/sort-custom-pipe/sort-custom-pipe.component';
import { DynamicRoutesComponent } from './concepts/Routing/Exercises/dynamic-routes/dynamic-routes.component';
import { AboutComponent } from './concepts/Routing/Exercises/routinglink-navigation/about/about.component';
import { ContactComponent } from './concepts/Routing/Exercises/routinglink-navigation/contact/contact.component';
// import { HomeComponent } from './concepts/Routing/Exercises/routinglink-navigation/home/home.component';
import { NewsComponent } from './concepts/Routing/Exercises/routinglink-navigation/news/news.component';
import { ServicesComponent } from './concepts/Routing/Exercises/routinglink-navigation/services/services.component';
import { WorkComponent } from './concepts/Routing/Exercises/routinglink-navigation/work/work.component';
import { RoutinglinkNavigationComponent } from './concepts/Routing/Exercises/routinglink-navigation/routinglink-navigation.component';
import { QueryParamsComponent } from './concepts/Routing/Exercises/query-params/query-params.component';
import { NavigationRouterserviceComponent } from './concepts/Routing/Exercises/navigation-routerservice/navigation-routerservice.component';
import { NavigationDetailComponent } from './concepts/Routing/Exercises/navigation-routerservice/navigation-detail/navigation-detail.component';
import { QueryParamNavComponent } from './concepts/Routing/Exercises/query-param-nav/query-param-nav.component';
import { CourseDetailComponent } from './concepts/Routing/Exercises/query-param-nav/course-detail/course-detail.component';
import { MainTokenComponent } from './concepts/tokens/Exercise/type-token/main-token/main-token.component';
import { Form1Component } from './concepts/template-driven-form/exercise/form1/form1.component';
import { Form2Component } from './concepts/template-driven-form/exercise/form2/form2.component';
import { FormGroupComponent } from './concepts/reactive-form/exercise/form-group/form-group.component';
import { FormArrayComponent } from './concepts/reactive-form/exercise/form-array/form-array.component';
import { FormBuilderComponent } from './concepts/reactive-form/exercise/form-builder/form-builder.component';
import { FormValidatorComponent } from './concepts/reactive-form/exercise/form-validator/form-validator.component';
import { ReactiveFormStepperComponent } from './concepts/reactive-form/exercise/reactive-form-stepper/reactive-form-stepper.component';
import { PasswordValidatorsComponent } from './concepts/reactive-form/exercise/password-validators/password-validators.component';
import { CustomValidatorsComponent } from './concepts/reactive-form/exercise/custom-validators/custom-validators.component';
import { AdminComponent } from './concepts/route-guards/exercise/login-auth/admin/admin.component';
import { LoginAuthComponent } from './concepts/route-guards/exercise/login-auth/login-auth.component';
import { authGuardGuard } from './Guards/auth-guard.guard';
import { FirstcomponentComponent } from './concepts/lazy-loading/exercise/firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './concepts/lazy-loading/exercise/secondcomponent/secondcomponent.component';
import { AsyncPipeComponent } from './concepts/Observables/exercise/async-pipe/async-pipe.component';
import { HomeComponent } from './concepts/HttpClient/exercise/home/home.component';
import { EditComponent } from './concepts/HttpClient/exercise/home/edit/edit.component';
import { CreateComponent } from './concepts/HttpClient/exercise/home/create/create.component';
import { ChangeMainComponent } from './concepts/ChangeDetection/exercise/change-main/change-main.component';
export const routes: Routes = [
    // {path: 'fundamentals/scc', component: SimpleCartCalculatorComponent},
    {path: 'directives/age-validator', component:AgeValidatorComponent},
    {path: 'directives/toggle', component:ToggleComponent},
    // {path: 'directives/portfolio', component:PortfolioComponent},
    // {path: 'life-cycle-hooks/on-change', component:NgOnChangesComponent},
    // {path: 'life-cycle-hooks/do-check', component:NgDoCheckComponent},
    // {path: 'life-cycle-hooks/after-contentinit', component:NgAfterContentinitComponent},
    // {path: 'decorators/input', component:InputComponent},
    // {path: 'decorators/output', component:OutputComponent},
    // {path: 'decorators/view-child', component:ViewChildComponent},
    // {path: 'decorators/color-picker', component:HostBinderAndListenerComponent},
    // {path: 'pipes/pagination', component: PageNavSlicePipeComponent}, 
    // {path: 'pipes/custom-pipe', component: SortCustomPipeComponent}, 
    // { path: 'employee/:name/:id', component: DynamicRoutesComponent },
    // { path: 'home', component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'work', component: WorkComponent },
    // { path: 'services', component: ServicesComponent },
    // { path: 'news', component: NewsComponent },
    // { path: 'contact', component: ContactComponent },
    // { path: 'home-nav', component: RoutinglinkNavigationComponent},
    // { path: 'employee', component: QueryParamsComponent},
    // { path: 'navigation-route', component: NavigationRouterserviceComponent},
    // {path: 'employee-detail', component: NavigationDetailComponent },
    // {path: 'courses-home', component: QueryParamNavComponent },
    // {path: 'course-detail', component: CourseDetailComponent },
    // {path: 'token-main', component: MainTokenComponent },
    // {path: 'form1', component: Form1Component },
    // {path: 'form2', component: Form2Component },
    // {path: 'form-group', component: FormGroupComponent },
    // {path: 'form-array', component: FormArrayComponent, children:[{path: 'formBuilder', component: FormBuilderComponent}, {path:'formValidator', component: FormValidatorComponent}] },
    // {path:'formValidator', component: FormValidatorComponent},
    // {path:'reactive-form-stepper', component: ReactiveFormStepperComponent},
    // {path:'password-validator', component: PasswordValidatorsComponent},
    // {path:'custom-validator', component: CustomValidatorsComponent},
    // {path:'login-page', component: LoginAuthComponent},
    // {path:'admin-page', component: AdminComponent, canActivate:[authGuardGuard]},
    
    // {path:'first-component', component: FirstcomponentComponent},
    // {path:'second-component', loadComponent: ()=> import('./concepts/lazy-loading/exercise/secondcomponent/secondcomponent.component').then(m => m.SecondcomponentComponent)},
    // {path: 'json-pipe', component: AsyncPipeComponent},
    // {path: 'products', component: HomeComponent},
    // {path: 'products/edit/:id', component: EditComponent},
    // {path: 'products/create', component: CreateComponent},
    // {path: 'change-main', component: ChangeMainComponent},
    
];
