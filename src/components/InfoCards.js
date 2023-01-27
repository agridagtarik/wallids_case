import { Button, Card, CardContent, Typography } from "@mui/material";
import "../styles/styles.css";
import { styled } from "@mui/material/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import ColumnChart from "./ColumnChart.js";
import LineChart from "./LineChart.js";

const CustomizedCard = styled(Card)`
  min-width: 300px;
  height: 250px;
  padding: 10px;
  margin: 15px;
  box-shadow: rgba(0, 58, 107, 0.2) 0px 7px 29px 0px; ;
`;

const CustomizedButton = styled(Button)`
  font-size: 12px;
  min-width: 145px;
`;

const InfoCards = () => {
  const [remainingCredit, setRemainingCredit] = useState(262000);
  const [totalCredit, setTotalCredit] = useState(500000);

  const progressBar = Math.ceil((remainingCredit * 100) / totalCredit);
  const total = 100;

  return (
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <CustomizedCard>
        <CardContent className="d-flex flex-column justify-content-end">
          <Typography variabt="h5" component="div">
            Website Status <InfoOutlinedIcon fontSize="0.5rem" />
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="success"
            className="mt-5"
          >
            Active
          </Button>
          <Button variant="contained" size="small" className="mt-2">
            Check All Page Status
          </Button>
        </CardContent>
      </CustomizedCard>

      <CustomizedCard>
        <CardContent className="d-flex flex-column justify-content-between">
          <Typography variant="h-5" component="div">
            Remaining Credit <InfoOutlinedIcon fontSize="0.5rem" />
            <InsertChartOutlinedIcon
              fontSize="0.5rem"
              className="align-items-right float-right col-10"
            />
          </Typography>
          <div className="d-flex align-items-center mt-3">
            <div className="me-4">
              <CircularProgressbar
                value={progressBar}
                text={`${progressBar}%`}
                styles={buildStyles({
                  strokeLinecap: "but",
                  pathColor: `rgba(1,83,255,${total / 100})`,
                  textColor: "#1c1c1b",
                  trailColor: "#91B4FF",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>

            <div className="d-flex flex-column">
              <Typography
                sx={{ fontSize: "1.2rem" }}
                variant="h5"
                component="div"
              >
                <span style={{ color: "#296DFF" }}>
                  {remainingCredit.toLocaleString("tr-TR")}
                </span>

                <span style={{ color: "#C0C4C8" }}>
                  /{totalCredit.toLocaleString("tr-TR")}
                </span>
              </Typography>
              <CustomizedButton variant="contained" size="small">
                Upgrade Package
              </CustomizedButton>
            </div>
          </div>
        </CardContent>
      </CustomizedCard>

      <CustomizedCard>
        <CardContent className="d-flex flex-column">
          <Typography variant="h5" component="div" style={{ fontSize: "1rem" }}>
            Data Usage <InfoOutlinedIcon fontSize="0.5rem" />
            <InsertChartOutlinedIcon fontSize="0.5rem" />
          </Typography>
          <Typography
            variant="h5 outlined"
            component="button"
            style={{
              width: "75px",
              fontSize: "15px",
              color: "blue",
              backgroundColor: "white",
              borderColor: "blue",
              marginTop: "1rem",
            }}
          >
            10.5TB
          </Typography>
          <ColumnChart />
        </CardContent>
      </CustomizedCard>
      <CustomizedCard>
        <CardContent className="d-flex flex-column">
          <Typography variant="h5" component="div" style={{ fontSize: "1rem" }}>
            Total Blocked <InfoOutlinedIcon fontSize="0.5rem" />
            <InsertChartOutlinedIcon fontSize="0.5rem" />
          </Typography>
          <Typography
            variant="h5 outlined"
            component="button"
            style={{
              width: "75px",
              fontSize: "15px",
              color: "red",
              backgroundColor: "white",
              borderColor: "red",
              marginTop: "1rem",
            }}
          >
            20M
          </Typography>
          <LineChart />
        </CardContent>
      </CustomizedCard>
    </div>
  );
};

export default InfoCards;
