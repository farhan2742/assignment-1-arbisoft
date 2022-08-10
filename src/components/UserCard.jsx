import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const UserCard = ({ users }) => {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        setCards(() => {
            const userCards = users.map((user) => (
                <Card key={user.id} className="user--cards">
                    <CardContent className="user--cards__avatar">
                        <Avatar
                            alt={user.username}
                            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                            sx={{ width: 200, height: 200 }}
                            variant="square"
                        />
                    </CardContent>
                    <CardContent className="user--cards__info">
                        <Typography variant="h2" gutterBottom component="h2">
                            {user.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <span className="bold">Email:</span> {user.email}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <span className="bold">Phone:</span> {user.phone}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <span className="bold">Company:</span>{" "}
                            {user.company.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <span className="bold">Website:</span>{" "}
                            {user.website}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <span className="bold">Address:</span>{" "}
                            {user.address.street}, {user.address.suite},{" "}
                            {user.address.city}, {user.address.zipcode}
                        </Typography>
                    </CardContent>
                </Card>
            ));
            return [...userCards];
        });
    }, []);

    return <Box>{cards}</Box>;
};

export default UserCard;
