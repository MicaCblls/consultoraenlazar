import PersonalData from "@/components/account/PersonalData";
import { Layout } from "@/components/Layout";
import { useSession } from "@supabase/auth-helpers-react";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BsPersonVcard } from "react-icons/bs";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Router, useRouter } from "next/router";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

const MyAccount = () => {
  const [value, setValue] = React.useState(0);
  const supabase = useSupabaseClient();
  const user = useUser();
  const route = useRouter();
  const session = useSession();
  /* 
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    route.push("/auth");
  }; */

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout title={"Mi cuenta"} content={"Mi cuenta"}>
      <div className="w-full flex flex-col justify-center items-center">
        <div>
          <h2
            className="p-6 md:p-12 font-semibold text-center md:text-left"
            style={{
              fontSize: "clamp(1.25rem, 1.095rem + 0.8264vw, 1.875rem)",
            }}
          >
            Bienvenid@, {session?.user?.email} 👋
          </h2>
        </div>
        <div className="flex w-full">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Mis datos" {...a11yProps(0)} />
            {/* <Tab label='Otras opciones' {...a11yProps(2)} /> */}
            {/*   <Tab label="Salir" onClick={handleSignOut} {...a11yProps(6)} /> */}
          </Tabs>
          <div className="w-full">
            <TabPanel value={value} index={0}>
              <PersonalData session={session} />
            </TabPanel>
            {/* <TabPanel value={value} index={3}>
								Item Four
							</TabPanel> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyAccount;
