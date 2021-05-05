import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
// import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import { LinkContainer } from "react-router-bootstrap";

function BreadscrumbPage(props) {
  const { page } = props;
  const useStyles = makeStyles((theme) => ({
    link: {
      display: "flex",
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }));

  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkContainer to="/" style={{ cursor: "pointer" }}>
        <Link color="inherit" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Home
        </Link>
      </LinkContainer>

      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        {page}
      </Typography>
    </Breadcrumbs>
  );
}

export default BreadscrumbPage;
