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
    path: 'createTrip',
    loadChildren: () => import('./create-trip/create-trip.module').then( m => m.CreateTripPageModule)
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./modals/recommendations/recommendations.module').then( m => m.RecommendationsPageModule)
  },
  {
    path: 'tripDetails',
    loadChildren: () => import('./modals/trip-details/trip-details.module').then( m => m.TripDetailsPageModule)
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
    path: 'recommendedServices',
    loadChildren: () => import('./recommended-services/recommended-services.module').then( m => m.RecommendedServicesPageModule)
  },
  {
    path: 'viewAllTrips',
    loadChildren: () => import('./view-all-trips/view-all-trips.module').then( m => m.ViewAllTripsPageModule)
  },
  {
    path: 'transport-modal',
    loadChildren: () => import('./modals/transport-modal/transport-modal.module').then( m => m.TransportModalPageModule)
  },
  {
    path: 'hotel-modal',
    loadChildren: () => import('./modals/hotel-modal/hotel-modal.module').then( m => m.HotelModalPageModule)
  },
  {
    path: 'view-hotel-modal',
    loadChildren: () => import('./modals/view-hotel-modal/view-hotel-modal.module').then( m => m.ViewHotelModalPageModule)
  },
  {
    path: 'view-transport-modal',
    loadChildren: () => import('./modals/view-transport-modal/view-transport-modal.module').then( m => m.ViewTransportModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
