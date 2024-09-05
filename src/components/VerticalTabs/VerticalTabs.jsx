import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./VerticalTabs.scss";
import Card from "../Card/Card";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingLeft: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  //
  const FeaturedProducts = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldprice: 19,
      price: 12,
    },
    {
      id: 2,
      img1: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldprice: 19,
      price: 12,
    },
    {
      id: 3,
      img1: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg",
      // img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Long Sleeve Graphic T-Shirt",
      // isNew: true,
      oldprice: 19,
      price: 12,
    },
    {
      id: 4,
      img1: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg",
      // img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Long Sleeve Graphic T-Shirt",
      // isNew: true,
      oldprice: 19,
      price: 12,
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mainBox">
      <Box
        sx={{
          // flexGrow: 1,
          // bgcolor: "red",
          display: "flex",
          // height: 530,
          marginLeft: 5,
          marginBottom: 5,
          paddingTop: 5,
          paddingBottom: 5,
          // 
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab className="tabHead" label="Power Banks" {...a11yProps(0)} />
          <Tab className="tabHead" label="Calculators" {...a11yProps(1)} />
          <Tab className="tabHead" label="Extension Cords" {...a11yProps(2)} />
          <Tab className="tabHead" label="Telephones" {...a11yProps(3)} />
          <Tab
            className="tabHead"
            label="Digital Voice Recorder"
            {...a11yProps(4)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="verticalbottom">
            {FeaturedProducts.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </Box>
    </div>
  );
}
