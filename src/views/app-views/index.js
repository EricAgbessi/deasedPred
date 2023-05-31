import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/dashboards`}
          component={lazy(() => import(`./dashboards`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/apps`}
          component={lazy(() => import(`./apps`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/components`}
          component={lazy(() => import(`./components`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/pages`}
          component={lazy(() => import(`./pages`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/maps`}
          component={lazy(() => import(`./maps`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/charts`}
          component={lazy(() => import(`./charts`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/docs`}
          component={lazy(() => import(`./docs`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/patients_list`}
          component={lazy(() => import(`./patient_list`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/patient_pred`}
          component={lazy(() => import(`./patient_pred`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/pred`}
          component={lazy(() => import(`./pred`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/patient_consult_result`}
          component={lazy(() => import(`./patient_consult_result`))}
        />

        <Redirect
          from={`${APP_PREFIX_PATH}`}
          to={`${APP_PREFIX_PATH}/dashboards`}
        />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
