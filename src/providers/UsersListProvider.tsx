import { default as UsersListController } from "../controllers/UsersListController";
import UsersViewModel from "../view-models/UsersViewModel";
import { LoginViewModel } from "../view-models/LoginViewModel";
import { PageThemeController } from "../controllers/PageThemeController";

export default function UsersListProvider() {
  const usersViewModel = new UsersViewModel();
  const loginViewModel = new LoginViewModel();

  return (
    <div>
      <PageThemeController LoginViewModel={loginViewModel}>
        <UsersListController usersViewModel={usersViewModel} />
      </PageThemeController>
    </div>
  );
}
