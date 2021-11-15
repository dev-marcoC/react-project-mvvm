import Toolbar from "@mui/material/Toolbar";
import {
  LButton,
  SButton,
  MyAppbar,
  MyTypography,
} from "../@theme/@styles/HeaderStyle";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import INavbarViewProps from "../../../@types/props/views/INavbarViewProps";
import { Box } from "@mui/system";
import TemporaryDrawer from "./Drawer";
import { Fragment } from "react";
import { Divider, Stack } from "@mui/material";

export default function NavBar(props: INavbarViewProps) {
  const {
    session,
    onClickLogin,
    onClickLogout,
    onClickSignup,
    onClickUserList,
  } = props;

  const lista: string[] = ["User List", "User Details", "Logout"];
  return (
    <Fragment>
      <MyAppbar elevation={0}>
        <Toolbar>
          <MyTypography variant="h6">Material UI Testing App</MyTypography>

          {!session.accessToken ? (
            <Fragment>
              <LButton
                variant="contained"
                disableElevation
                onClick={() => onClickLogin()}
                endIcon={<LoginOutlinedIcon />}
              >
                Login
              </LButton>
              <Divider orientation="vertical" flexItem />
              <SButton
                variant="contained"
                disableElevation
                onClick={() => onClickSignup()}
                endIcon={<AddCircleOutlineOutlinedIcon />}
              >
                Signup
              </SButton>
            </Fragment>
          ) : (
            <TemporaryDrawer
              lista={lista}
              onClickLogout={onClickLogout}
              onClickUserList={onClickUserList}
            ></TemporaryDrawer>
          )}
        </Toolbar>
      </MyAppbar>
      <Toolbar />
    </Fragment>
  );
}