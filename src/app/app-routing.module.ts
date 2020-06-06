import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgotPassword',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'joinTrip',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'tripRecommender',
    loadChildren: () => import('./trip-recommender/trip-recommender.module').then( m => m.TripRecommenderPageModule)
  },
  {
    path: 'serviceSelect',
    loadChildren: () => import('./modals/service-select/service-select.module').then( m => m.ServiceSelectPageModule)
  },
  {
    path: 'hotelService',
    loadChildren: () => import('./hotel-service/hotel-service.module').then( m => m.HotelServicePageModule)
  },
  {
    path: 'transportService',
    loadChildren: () => import('./transport-service/transport-service.module').then( m => m.TransportServicePageModule)
  },
  {
    path: 'hotelServiceDetails',
    loadChildren: () => import('./hotel-service-details/hotel-service-details.module').then( m => m.HotelServiceDetailsPageModule)
  },
  {
    path: 'transportServiceDetails',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./transport-service-details/transport-service-details.module').then( m => m.TransportServiceDetailsPageModule)
  },
  {
    path: 'createTrip',
    loadChildren: () => import('./create-trip/create-trip.module').then( m => m.CreateTripPageModule)
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./recommendations/recommendations.module').then( m => m.RecommendationsPageModule)
  },
  {
    path: 'trip-details',
    loadChildren: () => import('./trip-details/trip-details.module').then( m => m.TripDetailsPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./modals/image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },
  {
    path: 'view-trip-details',
    loadChildren: () => import('./view-trip-details/view-trip-details.module').then( m => m.ViewTripDetailsPageModule)
  },
  {
    path: 'charges',
    loadChildren: () => import('./charges/charges.module').then( m => m.ChargesPageModule)
  },
  {
    path: 'ratings',
    loadChildren: () => import('./ratings/ratings.module').then( m => m.RatingsPageModule)
  },
  {
    path: 'recommended-services',
    loadChildren: () => import('./recommended-services/recommended-services.module').then( m => m.RecommendedServicesPageModule)
  },
  {
    path: 'hotel-details-view',
    loadChildren: () => import('./modals/hotel-details-view/hotel-details-view.module').then( m => m.HotelDetailsViewPageModule)
  },
  {
    path: 'transport-details-view',
    loadChildren: () => import('./modals/transport-details-view/transport-details-view.module').then( m => m.TransportDetailsViewPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
