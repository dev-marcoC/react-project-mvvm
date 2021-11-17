import ISessionEntity from "../../entities/ISessionEntity";

export default interface INavbarViewProps {
  session: ISessionEntity | undefined;
  onClickLogout: Function;
  onClickLogin: Function;
  onClickSignup: Function;
  onClickUserList: Function;
  handleDrawerClick: Function;
}
