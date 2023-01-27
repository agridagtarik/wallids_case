import React from "react";
import { Card, Typography, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import GppBadOutlinedIcon from "@mui/icons-material/GppBadOutlined";
import MediationIcon from "@mui/icons-material/Mediation";

const CustomizedCard = styled(Card)`
  width: 100%;
  height: 100px;

  box-shadow: rgba(0, 58, 107, 0.2) 0px 7px 29px 0px; ;
`;

const SecActBar = () => {
  return (
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <CustomizedCard className="row">
        <CardContent className="col-2  m-auto d-flex flex-row justify-content-between">
          <MediationIcon className="col" />
          <Typography variant="h5" component="div" className="col">
            <Typography
              variant="h5"
              component="div"
              className="row"
              style={{ fontWeight: "bold", fontSize: "1rem", color: "black" }}
            >
              150K
            </Typography>
            <Typography
              variant="h5"
              component="div"
              className="row"
              style={{ fontSize: "0.7rem" }}
            >
              Request
            </Typography>
          </Typography>
        </CardContent>

        <CardContent className="col-2  m-auto d-flex flex-row justify-content-between">
          <GppGoodOutlinedIcon className="col" />
          <Typography variant="h5" component="div" className="col">
            <Typography
              variant="h5"
              component="div"
              className="row"
              style={{ fontWeight: "bold", fontSize: "1rem", color: "black" }}
            >
              80K
            </Typography>
            <Typography
              variant="h5"
              component="div"
              className="row"
              style={{ fontSize: "0.7rem" }}
            >
              Secure
            </Typography>
          </Typography>
        </CardContent>

        <CardContent className="col-2  m-auto d-flex flex-row justify-content-between">
          <GppBadOutlinedIcon className="col" />
          <Typography variant="h5" component="div" className="col">
            <Typography
              variant="h5"
              component="div"
              className="row"
              style={{ fontWeight: "bold", fontSize: "1rem", color: "black" }}
            >
              70K
            </Typography>
            <Typography
              variant="h5"
              component="div"
              className="row "
              style={{ fontSize: "0.7rem" }}
            >
              Insecure
            </Typography>
          </Typography>
        </CardContent>

        <CardContent className="dropdown col-6 border d-flex flex-column justify-content-center align-items-end">
          <button
            className="border btn btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Last 24 hours
          </button>
        </CardContent>
      </CustomizedCard>
    </div>
  );
};

export default SecActBar;
