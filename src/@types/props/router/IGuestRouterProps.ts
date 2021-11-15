import { LoginViewModel } from "../../../view-models/LoginViewModel";

export default interface IGuestRouterProps {
  LoginViewModel: LoginViewModel
  component: React.ComponentType<any>;
  path: string;
}