import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  AUTH_TOKEN,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  SIGNIN_WITH_GOOGLE,
  SIGNIN_WITH_FACEBOOK,
} from "../constants/Auth";
import {
  showAuthMessage,
  authenticated,
  signOutSuccess,
  signUpSuccess,
  signInWithGoogleAuthenticated,
  signInWithFacebookAuthenticated,
} from "../actions/Auth";

import FirebaseService from "services/FirebaseService";
import FetcherService from "services/FetcherService";
import { Redirect } from "react-router-dom";
//import Fonctions from "views/app-views/components/mycomponents/fonction";

export function* signInWithFBEmail() {
  yield takeEvery(SIGNIN, function* ({ payload }) {
    console.log(payload);

    const { email, password } = payload;
    try {
      const user = yield call(FetcherService.gettoken, payload);
      console.log(user);
      if (user.token) {
        let roles = [],
          permissions = [];
        localStorage.setItem(AUTH_TOKEN, user.token);

        localStorage.setItem("USER_DATA", JSON.stringify(user.user));

        for (let ri = 0; ri < user.user.roles.length; ri++) {
          let uroles = user.user.roles[ri];
          roles.push(uroles.name);
          for (let pi = 0; pi < uroles.permissions.length; pi++) {
            permissions.push(uroles.permissions[pi].name);
          }
        }

        localStorage.setItem("user_roles", JSON.stringify(roles));
        localStorage.setItem("user_permissions", JSON.stringify(permissions));
        console.log(roles, permissions);

        yield put(authenticated(user.token));
        document.location.href = "/";
      } else {
        yield put(showAuthMessage(user?.error || {}));
        //Fonctions.ErrorNotificationMessage("topLeft", user?.error?.error);
      }
    } catch (err) {
      yield put(showAuthMessage(err));
    }
  });
}

export function* signOut() {
  yield takeEvery(SIGNOUT, function* () {
    try {
      const signOutUser = yield call(FirebaseService.signOutRequest);
      if (signOutUser === undefined) {
        FetcherService.Logout()
          .then((res) => {
            localStorage.clear();
          })
          .catch((err) => {
            console.log(err);
          });
        yield put(signOutSuccess(signOutUser));
      } else {
        yield put(showAuthMessage(signOutUser.message));
      }
    } catch (err) {
      yield put(showAuthMessage(err));
    }
  });
}

export function* signUpWithFBEmail() {
  yield takeEvery(SIGNUP, function* ({ payload }) {
    console.log("signUpWithFBEmail");

    const { email, password } = payload;
    try {
      const user = yield call(
        FirebaseService.signUpEmailRequest,
        email,
        password
      );
      if (user.message) {
        yield put(showAuthMessage(user.message));
      } else {
        localStorage.setItem(AUTH_TOKEN, user.user.uid);
        yield put(signUpSuccess(user.user.uid));
      }
    } catch (error) {
      yield put(showAuthMessage(error));
    }
  });
}

export function* signInWithFBGoogle() {
  yield takeEvery(SIGNIN_WITH_GOOGLE, function* () {
    console.log("signInWithFBGoogle");

    try {
      const user = yield call(FirebaseService.signInGoogleRequest);
      if (user.message) {
        yield put(showAuthMessage(user.message));
      } else {
        localStorage.setItem(AUTH_TOKEN, user.user.uid);
        yield put(signInWithGoogleAuthenticated(user.user.uid));
      }
    } catch (error) {
      yield put(showAuthMessage(error));
    }
  });
}

export function* signInWithFacebook() {
  yield takeEvery(SIGNIN_WITH_FACEBOOK, function* () {
    console.log("signUpWithFBEmail");

    try {
      const user = yield call(FirebaseService.signInFacebookRequest);
      if (user.message) {
        yield put(showAuthMessage(user.message));
      } else {
        localStorage.setItem(AUTH_TOKEN, user.user.uid);
        yield put(signInWithFacebookAuthenticated(user.user.uid));
      }
    } catch (error) {
      yield put(showAuthMessage(error));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(signInWithFBEmail),
    fork(signOut),
    fork(signUpWithFBEmail),
    fork(signInWithFBGoogle),
    fork(signInWithFacebook),
  ]);
}
