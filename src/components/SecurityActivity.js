import { Card, CardContent, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShowChartTwoToneIcon from "@mui/icons-material/ShowChartTwoTone";
import { styled } from "@mui/material/styles";
import React from "react";
import SecActLineChart from "./SecActLineChart.js";
import SecurityActivityTable from "./SecurityActivityTable.js";
import { Button } from "@mui/material";
import SecActBar from "./SecActBar.js";

const CustomizedCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 750px;
  min-height: 250px;
  padding: 10px;
  margin: 15px;
  box-shadow: rgba(0, 58, 107, 0.2) 0px 7px 29px 0px;
`;

const SecurityActivity = () => {
  return (
    <div className="container-fluid">
      <CustomizedCard>
        <CardContent className="d-flex justify-content-between">
          <Typography variant="h5">
            Security Activity
            <InfoOutlinedIcon />
          </Typography>
          <Typography variant="h5">
            <ShowChartTwoToneIcon />
          </Typography>
        </CardContent>
        <SecActBar />
        <CardContent>
          <SecActLineChart />
          <SecurityActivityTable />
          <Button className="w-100" color="success">
            View All
          </Button>
        </CardContent>
      </CustomizedCard>
    </div>
  );
};

export default SecurityActivity;
