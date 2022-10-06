import Router from 'next/router';
import { getUserToken } from '../../util/user';

export const AuthCheck = (props) => {
  const paths_all = ['/auth'];
  const paths_excludes = ['/auth/reset-password'];
  const user = getUserToken();
  
  if(user) {
    if(paths_excludes.filter(path => Router.pathname.startsWith(path)).length > 0) {
      return props.children
    }if(paths_all.filter(path => Router.pathname.startsWith(path)).length > 0) {
      Router.push("/");
    }
  }

  return props.children
}