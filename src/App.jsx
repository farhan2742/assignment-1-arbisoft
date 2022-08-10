import * as React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import UserCard from "./components/UserCard";
import Progress from "./components/Progress";

import axios from "axios";

function App() {
    const [userData, setUserData] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                setUserData((prev) => {
                    return {
                        ...prev,
                        Users: response.data,
                    };
                });
                setLoading(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                {loading ? <Progress /> : <UserCard users={userData.Users} />}
            </Container>
        </React.Fragment>
    );
}

export default App;
