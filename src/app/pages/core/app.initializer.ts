import { UserService } from '../auth/shared/services/user.service';
import { Router } from '@angular/router';
import { AuthUser } from '../shared/class/authUser';

export function initApp(userService: UserService, route: Router) {

  return () => {
    return new Promise((resolve) => {
      if (localStorage.getItem('token')) {
        userService.getMe().subscribe(user => {
          userService.currentUser = new AuthUser(user.id, user.username, user.musics);
          if (route.url === '/') {
            route.navigateByUrl('/dashboard');
            resolve();
          }
        });
      }
    });
  };
}
