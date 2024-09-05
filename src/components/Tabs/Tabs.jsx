import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "../Card/Card";
import "./Tabs.scss"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const cars = [
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
  ];

  return (
    <Box className="mainTabBox" >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
        className="basictabs"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab className="Tabhead" label="Featured Products" {...a11yProps(0)} />
          <Tab className="Tabhead" label="Prices Slashed" {...a11yProps(1)} />
          <Tab className="Tabhead" label="Model Cars" {...a11yProps(2)} />
          <Tab className="Tabhead" label="Lego" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="bottom">
          {FeaturedProducts.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
    </Box>
  );
}
