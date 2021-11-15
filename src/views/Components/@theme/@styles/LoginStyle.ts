import { styled } from "@mui/system";
import {  Avatar,  Button,  CardMedia,  FormHelperText, Grid,  ListItem, ListItemText, } from "@mui/material";
import { green } from "@mui/material/colors";


export const GridLogin = styled(Grid)(({theme}) =>({
        marginTop: 10
  }));


export const ListAvatar = styled(ListItem)(({theme}) =>({
    marginBottom: "15px"

}));

export const LoginAvatar = styled(Avatar)(({theme}) =>({
    width: 70,
    height: 70,
    backgroundColor: green[500]

}));

export const ListAvatarText = styled(ListItemText)(({theme}) =>({
    marginLeft: 10

}));

export const HelperForm = styled(FormHelperText)(({theme}) =>({
    marginBottom: 5

}));

export const MyButton = styled(Button)(({theme}) =>({
    marginTop: 10,
    backgroundColor: green[500]

}));

export const GridImage = styled(Grid)(({theme}) =>({
    marginTop: 10

}));